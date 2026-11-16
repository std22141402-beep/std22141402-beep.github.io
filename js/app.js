// =====================================================================
//  app.js — العقل المدبر: يربط الخريطة، البحث، الملاحة، الصوت، البلاغات
// =====================================================================
import { APP, MAP, NAV, LIBS, REPORT_TYPES, THEME_PRESETS, DEFAULT_SETTINGS, CATEGORIES, TRAFFIC } from './config.js';
import { haversine, bearing, destination, pointAt, lerpAngle, mercFraction, sliceLine, bboxOf, clamp } from './geo.js';
import { fetchRoutes } from './routing.js';
import { NavEngine } from './navengine.js';
import { instructionFor, maneuverIcon, laneIcon, fmtDistance, fmtDistanceStr, fmtDuration, fmtClock, phrases, spokenDistance, setDigits, num } from './instructions.js';
import { searchPlaces, reverseGeocode, nearby } from './search.js';
import { Voice } from './voice.js';
import { MapView } from './mapview.js';
import { transformStyle, applyPalette, applyUiTheme, uiColors, isNight, MAP_PALETTES, setBuildings3d } from './theme.js';
import { ReportStore, reportsOnRoute, TYPE as RTYPE } from './reports.js';
import { TrafficStore, TrafficProbe, trafficDelay } from './traffic.js';
import { EstateUI } from './estate/ui.js';
import { GpsSource, SimSource } from './location.js';
import { store, deviceId, escapeHtml as esc } from './storage.js';

// ------------------------------------------------------------------ الحالة
const S = {
  settings: { ...DEFAULT_SETTINGS, ...store.get('settings', {}) },
  me: null,
  firstFix: false,
  night: false,
  mode: 'browse',          // browse | search | preview | nav
  sheet: null,
  searchOpen: false,
  place: null,
  routes: [],
  routeIdx: 0,
  origin: null,
  trackMe: false,
  simSpeed: 60,
  installPrompt: null,
  gpsError: null,
};
let nav = null;
let previewAbort = null;
let searchAbort = null;
let searchTimer = null;
let wakeLock = null;
let estate = null;

const $ = (id) => document.getElementById(id);
const el = {};
['map', 'topbar', 'btnMenu', 'searchBox', 'searchInput', 'searchClear', 'quickChips', 'searchPanel', 'searchResults', 'btnCompass', 'compassNeedle', 'btnLocate', 'btnReport', 'navTop', 'banner', 'mIcon', 'mDist', 'mUnit', 'mRoad', 'lanes', 'thenChip', 'thenLabel', 'thenIcon', 'navStatus', 'speedo', 'speedVal', 'btnRecenter', 'navBottom', 'btnEndNav', 'etaBox', 'etaTime', 'etaLeft', 'etaDist', 'btnNavMenu', 'alertCard', 'sheetBackdrop', 'sheet', 'sheetBody', 'toast', 'splash', 'splashMsg'].forEach((id) => { el[id] = $(id); });

const voice = new Voice();
const P = () => phrases(S.settings.dialect);
const icon = (id) => `<svg><use href="#${id}"/></svg>`;

const mapView = new MapView(el.map, {
  onUserMove: () => {
    if (nav) { if (nav.follow) { nav.follow = false; nav.pausedAt = Date.now(); el.btnRecenter.classList.remove('hidden'); } else nav.pausedAt = Date.now(); }
    S.trackMe = false; el.btnLocate.classList.remove('active');
  },
  onRotate: (b) => {
    el.compassNeedle.style.transform = `rotate(${-b}deg)`;
    el.btnCompass.classList.toggle('hidden', !!nav || Math.abs(b) < 2);
  },
  onLongPress: (ll) => { if (!nav && S.mode !== 'preview' && !estate?.active) dropPin(ll); },
  onMapClick: (ll, point) => {
    if (estate && estate.handleClick(ll, point)) return;
    if (S.searchOpen) closeSearch();
    else if (S.sheet?.name === 'pin' && !S.sheetStack.length) closeSheet();
  },
  onAltClick: (idx) => { if (S.mode === 'preview') selectRoute(idx); },
  onReportClick: (rep) => openReportDetail(rep),
});

const reports = new ReportStore({
  deviceId: deviceId(),
  onChange: () => onReportsChanged(),
});

const traffic = new TrafficStore({ onChange: () => onTrafficChanged() });
const probe = new TrafficProbe();
const gps = new GpsSource(onFix, onGpsError);
const sim = new SimSource(onFix);

// ================================================================== الإقلاع
async function boot() {
  setDigits(S.settings.digits);
  voice.enabled = S.settings.voice;
  voice.chime = S.settings.chime;
  voice.volume = S.settings.volume;
  S.night = isNight(S.settings.mode, null);
  applyUiTheme(S.settings, S.night);
  renderChips();
  bindUi();
  registerSW();

  if (!window.isSecureContext && location.hostname !== 'localhost') {
    setSplash('تنبيه: الموقع (GPS) يحتاج رابط https حتى يشتغل.');
  }

  try {
    await Promise.all([loadCss(LIBS.maplibreCss), loadScript(LIBS.maplibreJs)]);
  } catch {
    return fatal('تعذر تحميل مكتبة الخريطة. تأكد من الانترنت وحاول مرة ثانية.');
  }
  try {
    const p = window.maplibregl.setRTLTextPlugin(LIBS.rtlPlugin, false);
    if (p && p.catch) p.catch(() => {});
  } catch { /* ignore */ }

  let style;
  try {
    const res = await fetch(MAP.styleUrl);
    if (!res.ok) throw new Error(res.status);
    style = await res.json();
  } catch {
    return fatal('تعذر تحميل الخريطة. تأكد من الانترنت وحاول مرة ثانية.');
  }
  const styled = transformStyle(style, S.night ? MAP_PALETTES.night : MAP_PALETTES.day, { buildings3d: S.settings.buildings3d, night: S.night, globe: S.settings.globe });
  const last = store.get('lastView');
  try {
    S.introPending = wantIntro();
    const view = S.introPending ? { center: [44.4, 30.5], zoom: 1.35 } : { center: last?.center || MAP.center, zoom: last?.zoom || MAP.zoom };
    await mapView.init(styled, view);
  } catch (e) {
    console.error(e);
    return fatal('صار خطأ بتحميل الخريطة. حاول مرة ثانية.');
  }
  mapView.setRouteColor(uiColors(S.settings).route);
  estate = new EstateUI({
    mapView, esc, toast, openSheet, closeSheet, closeAllSheets, ensureHist, reverseGeocode, shareText,
    me: () => S.me?.pos || null,
    isNavigating: () => !!nav,
    sheetName: () => S.sheet?.name || null,
    routeTo: (pl) => { S.stops = []; previewRoutes(pl); },
  });
  window.addEventListener('hashchange', handleHash);
  mapView.setCarStyle(S.settings.carIcon);
  mapView.map.on('moveend', () => {
    if (!nav) store.set('lastView', { center: mapView.center(), zoom: mapView.map.getZoom() });
  });

  hideSplash();
  ensureHist();
  gps.start();
  traffic.connect(S.settings.showTraffic || S.settings.shareTraffic);
  if (S.introPending) setTimeout(() => { if (S.introPending) runIntro(); }, 700);
  setTimeout(() => { handleLaunch(); handleHash(); }, 300);
  connectReports();
  onReportsChanged();
  setInterval(() => updateNight(false), 5 * 60 * 1000);
  setInterval(() => reports._prune(), 60 * 1000);
  setTimeout(offerResume, 1200);
}

function loadScript(urls) {
  return new Promise((resolve, reject) => {
    if (window.maplibregl) { resolve(); return; }
    let i = 0;
    const next = () => {
      if (i >= urls.length) { reject(new Error('script')); return; }
      const s = document.createElement('script');
      s.src = urls[i++];
      s.crossOrigin = 'anonymous';
      s.onload = () => (window.maplibregl ? resolve() : next());
      s.onerror = () => { s.remove(); next(); };
      document.head.appendChild(s);
    };
    next();
  });
}

function loadCss(urls) {
  return new Promise((resolve) => {
    let i = 0;
    const next = () => {
      if (i >= urls.length) { resolve(); return; }
      const l = document.createElement('link');
      l.rel = 'stylesheet'; l.href = urls[i++]; l.crossOrigin = 'anonymous';
      l.onload = () => resolve();
      l.onerror = () => { l.remove(); next(); };
      document.head.appendChild(l);
    };
    next();
  });
}

function connectReports() {
  reports.connect(S.settings.firebaseUrl, { shared: S.settings.shareReports !== false });
}

function reportStatusText() {
  const st = reports.status;
  if (reports.mode === 'off') return 'المشاركة مطفية — بلاغاتك تبقى على جهازك بس';
  const where = reports.mode === 'firebase' ? 'قاعدتك الخاصة (Firebase)' : 'الخادم المشترك';
  if (st === 'live') return `🟢 متصل ب${where} — بلاغك يوصل للكل فوراً`;
  if (st === 'error') return `🔴 تعذر الاتصال ب${where} — بلاغك ينحفظ وينرسل أول ما يرجع النت`;
  return `🟡 دا يتصل ب${where}…`;
}

/** روابط المشاركة: #l-رقم_الإعلان */
function handleHash() {
  const h = location.hash || '';
  const m = /^#l-([a-z0-9]{6,40})$/i.exec(h);
  if (!m || !estate) return;
  try { history.replaceState(history.state, '', location.pathname + location.search); } catch { /* ignore */ }
  if (S.introPending) { S.introPending = false; try { sessionStorage.setItem('salka:intro', '1'); } catch { /* ignore */ } }
  estate.open(m[1], { fly: true });
}

/** اختصارات أيقونة الأندرويد (?go=) + تمييز التطبيق المثبت */
function handleLaunch() {
  const q = new URLSearchParams(location.search);
  if (q.get('source') === 'twa' || document.referrer.startsWith('android-app://')) store.set('twa', 1);
  const go = q.get('go');
  if (q.has('go') || q.has('source')) { try { history.replaceState(history.state, '', location.pathname + location.hash); } catch { /* ignore */ } }
  if (!go || nav) return;
  if (go === 'estate') estate?.enter();
  else if (go === 'estate-add') estate?.startWizard();
  else if (go === 'search') openSearch();
  else if (go === 'home' || go === 'work') goSavedPlace(go);
}

/** هل نعرض «نزّل تطبيق الأندرويد»؟ (أندرويد بالمتصفح بس، مو داخل التطبيق المثبت) */
function showApkOffer() {
  const ua = navigator.userAgent || '';
  if (!/Android/i.test(ua) || store.get('twa')) return false;
  return !window.matchMedia?.('(display-mode: standalone)')?.matches;
}

function wantIntro() {
  if (/^#l-/.test(location.hash) || new URLSearchParams(location.search).has('go')) return false;
  let done = false;
  try { done = sessionStorage.getItem('salka:intro') === '1'; } catch { /* ignore */ }
  const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
  return !!(S.settings.intro && S.settings.globe && !done && !reduce);
}

/** افتتاحية من الفضاء إلى موقعك */
function runIntro() {
  S.introPending = false;
  S.introRunning = true;
  try { sessionStorage.setItem('salka:intro', '1'); } catch { /* ignore */ }
  const go = () => {
    const last = store.get('lastView');
    const target = S.me?.pos || last?.center || MAP.center;
    mapView.intro(target, S.me ? 15.6 : (last?.zoom || 12), () => {
      S.introRunning = false;
      if (S.me) { mapView.setMe(S.me.pos, S.me.heading, 'dot'); mapView.setAccuracy(S.me.pos, S.me.accuracy); }
    });
  };
  // ننتظر شوية الـGPS حتى نطير لموقعك الحقيقي
  if (S.me) go(); else { const t0 = Date.now(); const wait = () => (S.me || Date.now() - t0 > 1800 ? go() : setTimeout(wait, 150)); wait(); }
}

function setSplash(msg) { el.splashMsg.textContent = msg; }
function hideSplash() { el.splash.classList.add('out'); setTimeout(() => el.splash.classList.add('hidden'), 450); }
/** هل التطبيق مفتوح داخل معاينة ملفات (مثل معاينة تطبيق Claude) تمنع الانترنت والموقع؟ */
function inPreviewSandbox() {
  let framed = false;
  try { framed = window.self !== window.top; } catch { framed = true; }
  return framed || !/^https?:$/.test(location.protocol) || location.origin === 'null';
}

function fatal(msg) {
  el.splash.classList.remove('out', 'hidden');
  if (inPreviewSandbox()) {
    el.splashMsg.innerHTML = `<div class="howto"><b>التطبيق مفتوح داخل «معاينة ملفات»</b>
      <p>المعاينة تمنع الانترنت والـGPS، فالخريطة ما تشتغل بيها. لازم تفتحه من رابط https:</p>
      <ol><li>سوّي حساب مجاني على github.com</li>
      <li>مستودع جديد (New repository) باسم salka ونوعه Public</li>
      <li>ارفع ملف index.html (uploading an existing file)</li>
      <li>Settings ← Pages ← اختار main ← Save</li>
      <li>افتح الرابط <span dir="ltr">اسمك.github.io/salka</span> بكروم</li></ol></div>`;
    return;
  }
  el.splashMsg.innerHTML = `${esc(msg)}<br><button class="btn" id="retryBtn">إعادة المحاولة</button>`;
  $('retryBtn').onclick = () => location.reload();
}

function registerSW() {
  if (!('serviceWorker' in navigator) || location.protocol === 'file:' || window.SALKA_SINGLE) return;
  // لما توصل نسخة جديدة: نعيد التحميل مرة وحدة (إلا إذا المستخدم بنص ملاحة)
  const hadController = !!navigator.serviceWorker.controller;
  let reloaded = false;
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (!hadController || reloaded) return;
    if (nav) { S.pendingReload = true; return; }
    reloaded = true;
    location.reload();
  });
  const reg = () => navigator.serviceWorker.register('sw.js', { updateViaCache: 'none' })
    .then((r) => { r.update?.().catch(() => {}); setInterval(() => r.update?.().catch(() => {}), 30 * 60 * 1000); })
    .catch((e) => console.warn('SW', e));
  if (document.readyState === 'complete') reg(); else window.addEventListener('load', reg);
}

// ================================================================== الموقع
function onFix(fix) {
  if (nav && nav.sim !== !!fix.sim) return;      // أثناء المحاكاة نتجاهل الـGPS الحقيقي
  if (!nav && fix.sim) return;
  S.me = fix;
  S.gpsError = null;
  if (!S.firstFix) {
    S.firstFix = true;
    updateNight(false);
    if (!nav && S.mode === 'browse' && mapView.map && !S.introRunning && !S.introPending) mapView.flyTo(fix.pos, 15.5, { duration: 1200 });
  }
  if (nav) { navFix(fix); return; }
  if (!mapView.map) return;
  mapView.setMe(fix.pos, fix.heading, 'dot');
  mapView.setAccuracy(fix.pos, fix.accuracy);
  if (S.trackMe) mapView.flyTo(fix.pos, null, { duration: 600 });
}

function onGpsError(e) {
  S.gpsError = e;
  if (e?.code === 1) {
    toast('ما عندي صلاحية الموقع. فعّلها حتى أوصلك 🙏', 4000);
  } else if (e?.code === 0) {
    toast('جهازك ما يدعم تحديد الموقع');
  }
}

function locateMe() {
  voice.unlock();
  if (S.me) {
    S.trackMe = true;
    el.btnLocate.classList.add('active');
    mapView.flyTo(S.me.pos, Math.max(15.5, mapView.map.getZoom()), { bearing: 0 });
    return;
  }
  if (S.gpsError?.code === 1) { openGpsHelp(); return; }
  toast('دا أحدد موقعك…');
  gps.stop(); gps.start();
}

// ================================================================== الوضع الليلي
function updateNight(force) {
  const night = isNight(S.settings.mode, S.me?.pos);
  if (night === S.night && !force) return;
  S.night = night;
  const c = applyUiTheme(S.settings, night);
  if (mapView.map) {
    applyPalette(mapView.map, night ? MAP_PALETTES.night : MAP_PALETTES.day, night);
    mapView.setRouteColor(c.route);
  }
}

// ================================================================== واجهة عامة
let toastTimer = null;
function toast(msg, ms = 2600) {
  el.toast.textContent = msg;
  el.toast.classList.remove('hidden');
  el.toast.style.animation = 'none'; void el.toast.offsetWidth; el.toast.style.animation = '';
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.toast.classList.add('hidden'), ms);
}

// زر الرجوع بالأندرويد:
// نحتفظ دائماً بخطوة تاريخ "حارسة" وحدة. ضغطة الرجوع تسد اللوحة المفتوحة،
// وإذا ماكو شي مفتوح تطلع رسالة "اضغط مرة ثانية للخروج" — ونهائياً ما نرجع بالتاريخ برمجياً
// (حتى ما يطلع التطبيق بالغلط).
S.sheetStack = [];
S.histPushed = false;
let lastBackT = 0;
const anyOverlay = () => !!S.sheet || S.searchOpen || !!(estate && estate.active);
function ensureHist() {
  if (S.histPushed) return;
  S.histPushed = true;
  try { history.pushState({ salka: 1 }, ''); } catch { /* ignore */ }
}
function releaseHist() { /* عمداً فارغة — انظر الشرح أعلاه */ }

window.addEventListener('popstate', () => {
  S.histPushed = false;
  if (S.sheet) closeSheet({ fromPop: true });
  else if (S.searchOpen) closeSearch({ fromPop: true });
  else if (nav) toast('حتى توقف الملاحة اضغط زر ✕');
  else if (estate && (estate.active || estate.draw)) estate.back();
  else {
    lastBackT = Date.now();
    toast('اضغط رجوع مرة ثانية للخروج', 2400);
    // إذا ما ضغط مرة ثانية خلال ثانيتين ونص، نرجّع الحارس
    setTimeout(() => { if (Date.now() - lastBackT >= 2400) ensureHist(); }, 2500);
    return;
  }
  ensureHist();
});

function renderSheetDom(name, html, opts) {
  el.sheetBody.innerHTML = html;
  el.sheetBody.scrollTop = 0;
  el.sheet.classList.toggle('peek', !!opts.peek);
  el.sheet.classList.toggle('no-backdrop', opts.backdrop === false);
  el.sheetBackdrop.classList.toggle('hidden', opts.backdrop === false);
  el.sheet.classList.remove('hidden');
  el.sheet.dataset.name = name;
  document.body.classList.add('sheet-open');
  opts.onRender?.(el.sheetBody);
}

/**
 * يفتح لوحة سفلية. إذا أكو لوحة ثانية مفتوحة باسم مختلف، تنحفظ وترجع لها عند الإغلاق.
 * @param {string} name
 * @param {string} html
 * @param {{peek?:boolean, backdrop?:boolean, onClose?:Function, onRender?:Function, restore?:Function, replace?:boolean}} opts
 */
function openSheet(name, html, opts = {}) {
  if (S.sheet && S.sheet.name !== name && !opts.replace) S.sheetStack.push(S.sheet);
  S.sheet = { name, html, opts };
  renderSheetDom(name, html, opts);
  ensureHist();
}

function hideSheetDom() {
  el.sheet.classList.add('hidden');
  el.sheetBackdrop.classList.add('hidden');
  document.body.classList.remove('sheet-open');
}

function closeSheet({ fromPop = false, silent = false } = {}) {
  if (!S.sheet) return;
  const s = S.sheet;
  S.sheet = null;
  if (!silent) s.opts.onClose?.();
  const prev = S.sheetStack.pop();
  if (prev) {
    S.sheet = prev;
    if (prev.opts.restore) prev.opts.restore();
    else renderSheetDom(prev.name, prev.html, prev.opts);
    if (!S.sheet) hideSheetDom();
  } else hideSheetDom();
  if (!fromPop) releaseHist();
}

/** يسد كل اللوحات (keepHist: لا نرجع بالتاريخ لأن لوحة ثانية راح تنفتح) */
function closeAllSheets({ silent = false, keepHist = false } = {}) {
  const all = [S.sheet, ...S.sheetStack.slice().reverse()].filter(Boolean);
  S.sheet = null;
  S.sheetStack = [];
  hideSheetDom();
  if (!silent) all.forEach((s) => s.opts.onClose?.());
  if (!keepHist) releaseHist();
}

const previewBuried = () => S.sheet && S.sheet.name !== 'preview' && S.sheetStack.some((x) => x.name === 'preview');

function showAlert({ ico, color, title, sub, actions = [], timeout = 0, onTimeout }) {
  clearTimeout(showAlert.timer);
  const a = el.alertCard;
  a.innerHTML = `<div class="a-ico" style="background:${color || 'var(--bg2)'}">${ico || ''}</div>
    <div class="a-main"><div class="a-title">${esc(title)}</div>${sub ? `<div class="a-sub">${esc(sub)}</div>` : ''}</div>
    <div class="a-actions">${actions.map((x, i) => `<button class="btn sm ${x.cls || ''}" data-i="${i}">${x.label}</button>`).join('')}</div>
    ${timeout ? '<div class="a-progress"></div>' : ''}`;
  a.classList.remove('hidden');
  a.querySelectorAll('[data-i]').forEach((b) => {
    b.onclick = (ev) => { ev.stopPropagation(); hideAlert(); actions[+b.dataset.i].fn?.(); };
  });
  if (timeout) {
    const bar = a.querySelector('.a-progress');
    bar.animate([{ transform: 'scaleX(1)' }, { transform: 'scaleX(0)' }], { duration: timeout, easing: 'linear', fill: 'forwards' });
    showAlert.timer = setTimeout(() => { hideAlert(); onTimeout?.(); }, timeout);
  }
}
function hideAlert() { clearTimeout(showAlert.timer); el.alertCard.classList.add('hidden'); }

// سحب اللوحة للأسفل لإغلاقها
(function sheetSwipe() {
  let y0 = null, dy = 0;
  el.sheet.addEventListener('touchstart', (e) => {
    if (el.sheetBody.scrollTop > 0 && !e.target.closest('.grabber')) { y0 = null; return; }
    y0 = e.touches[0].clientY; dy = 0;
  }, { passive: true });
  el.sheet.addEventListener('touchmove', (e) => {
    if (y0 == null) return;
    dy = e.touches[0].clientY - y0;
    if (dy > 0) el.sheet.style.transform = `translateY(${dy}px)`;
  }, { passive: true });
  el.sheet.addEventListener('touchend', () => {
    el.sheet.style.transform = '';
    if (y0 != null && dy > 90) closeSheet();
    y0 = null;
  });
}());

// ================================================================== البحث
function bindUi() {
  el.searchInput.addEventListener('focus', () => openSearch());
  el.searchInput.addEventListener('input', () => {
    const q = el.searchInput.value.trim();
    el.searchClear.classList.toggle('hidden', !q);
    clearTimeout(searchTimer);
    if (!q) { renderSearchHome(); return; }
    if (q.length < 2) return;
    searchTimer = setTimeout(() => doSearch(q, false), 320);
  });
  el.searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') { e.preventDefault(); const q = el.searchInput.value.trim(); if (q) { clearTimeout(searchTimer); doSearch(q, true); el.searchInput.blur(); } }
  });
  el.searchClear.onclick = () => { el.searchInput.value = ''; el.searchClear.classList.add('hidden'); renderSearchHome(); el.searchInput.focus(); };
  el.btnMenu.onclick = () => { if (S.searchOpen) closeSearch(); else openMenu(); };
  el.btnLocate.onclick = locateMe;
  el.btnCompass.onclick = () => mapView.resetNorth();
  el.btnReport.onclick = () => { voice.unlock(); openReportMenu(); };
  el.sheetBackdrop.onclick = () => closeSheet();
  el.btnRecenter.onclick = () => recenter();
  el.btnEndNav.onclick = () => confirmEndNav();
  el.btnNavMenu.onclick = () => openNavMenu();
  el.etaBox.onclick = () => openNavMenu();
  el.searchResults.addEventListener('click', onResultClick);
  el.quickChips.addEventListener('click', onChipClick);
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible' && nav) requestWakeLock(); });
  window.addEventListener('beforeinstallprompt', (e) => { e.preventDefault(); S.installPrompt = e; });
  // أول لمسة تفتح الصوت (متطلب iOS/Android)
  const unlock = () => { voice.unlock(); window.removeEventListener('pointerdown', unlock); };
  window.addEventListener('pointerdown', unlock);
}

function openSearch({ forStop = false } = {}) {
  if (S.searchOpen || nav) return;
  S.addingStop = forStop && S.mode === 'preview';
  closeAllSheets({ keepHist: true, silent: S.addingStop });
  if (S.addingStop) {
    // بحث جديد نظيف للمحطة (بدون نتائج البحث القديم)
    searchAbort?.abort();
    clearTimeout(searchTimer);
    el.searchInput.value = '';
    el.searchClear.classList.add('hidden');
  }
  hideAlert();
  S.searchOpen = true;
  el.searchPanel.classList.remove('hidden');
  el.quickChips.classList.add('hidden');
  el.btnMenu.innerHTML = icon('i-back');
  el.btnMenu.setAttribute('aria-label', 'رجوع');
  ensureHist();
  if (!el.searchInput.value.trim()) renderSearchHome();
}

function closeSearch({ fromPop = false } = {}) {
  if (!S.searchOpen) return;
  S.searchOpen = false;
  el.searchPanel.classList.add('hidden');
  el.quickChips.classList.remove('hidden');
  el.btnMenu.innerHTML = icon('i-menu');
  el.btnMenu.setAttribute('aria-label', 'القائمة');
  el.searchInput.blur();
  el.searchInput.placeholder = 'وين رايح؟';
  searchAbort?.abort();
  if (!fromPop) releaseHist();
  // رجع من "إضافة محطة" بدون ما يختار: نرجع للمعاينة
  if (S.addingStop) { S.addingStop = false; if (S.mode === 'preview') restorePreview(); }
}

function places() { return { home: null, work: null, favs: [], ...store.get('places', {}) }; }
function savePlaces(p) { store.set('places', p); renderChips(); }
function recents() { return store.get('recents', []); }
function addRecent(pl) {
  const list = recents().filter((r) => !(Math.abs(r.pos[0] - pl.pos[0]) < 1e-5 && Math.abs(r.pos[1] - pl.pos[1]) < 1e-5));
  list.unshift({ name: pl.name, sub: pl.sub || '', pos: pl.pos, kind: pl.kind || '' });
  store.set('recents', list.slice(0, 15));
}

let resultItems = [];
function itemHtml(it, i, ico = 'i-pin') {
  const d = it.dist != null ? fmtDistanceStr(it.dist) : (S.me ? fmtDistanceStr(haversine(S.me.pos, it.pos)) : '');
  return `<button class="item" data-i="${i}"><span class="item-ico">${icon(ico)}</span><span class="item-main"><div class="item-name">${esc(it.name)}</div>${it.sub ? `<div class="item-sub">${esc(it.sub)}</div>` : ''}</span><span class="item-end">${d}</span></button>`;
}

function renderSearchHome() {
  const p = places();
  resultItems = [];
  let html = '';
  const saved = [];
  if (p.home) saved.push({ ...p.home, _ico: 'i-home', name: 'البيت', sub: p.home.name });
  if (p.work) saved.push({ ...p.work, _ico: 'i-work', name: 'الشغل', sub: p.work.name });
  for (const f of p.favs || []) saved.push({ ...f, _ico: 'i-star-f' });
  if (saved.length) {
    html += '<div class="list-title">أماكني</div>';
    saved.forEach((s) => { resultItems.push(s); html += itemHtml(s, resultItems.length - 1, s._ico); });
  }
  html += '<div class="list-title">قريب مني</div><div class="chips" style="padding:4px 16px 8px;flex-wrap:wrap">';
  html += CATEGORIES.map((c) => `<button class="chip" data-cat="${c.id}">${icon(c.icon)}${esc(c.label)}</button>`).join('');
  html += '</div>';
  const rec = recents();
  if (rec.length) {
    html += '<div class="list-title row"><span class="spacer">آخر الأماكن</span><button class="btn sm" data-clear-recents="1">مسح</button></div>';
    rec.forEach((r) => { resultItems.push(r); html += itemHtml(r, resultItems.length - 1, 'i-clock'); });
  }
  if (!saved.length && !rec.length) html += '<div class="empty">ابحث عن شارع، منطقة، محل، أو اكتب إحداثيات.<br>اضغط مطولاً على الخريطة حتى تختار أي نقطة.</div>';
  el.searchResults.innerHTML = html;
}

async function doSearch(q, full) {
  searchAbort?.abort();
  searchAbort = new AbortController();
  const signal = searchAbort.signal;
  el.searchResults.innerHTML = '<div class="spinner"></div>';
  try {
    const near = S.me?.pos || mapView.center();
    const items = await searchPlaces(q, { near, signal, full });
    if (signal.aborted) return;
    resultItems = items;
    if (!items.length) {
      el.searchResults.innerHTML = `<div class="empty">ما لكيت نتائج لـ «${esc(q)}».${full ? '' : '<br>اضغط «بحث» بالكيبورد للبحث الأوسع.'}</div>`;
      return;
    }
    el.searchResults.innerHTML = items.map((it, i) => itemHtml(it, i)).join('');
  } catch (e) {
    if (e.name === 'AbortError') return;
    el.searchResults.innerHTML = '<div class="empty">تعذر البحث. تأكد من الانترنت.</div>';
  }
}

async function searchCategory(catId) {
  const cat = CATEGORIES.find((c) => c.id === catId);
  if (!cat) return;
  if (!S.searchOpen) openSearch();
  el.searchInput.value = cat.label;
  el.searchClear.classList.remove('hidden');
  searchAbort?.abort();
  searchAbort = new AbortController();
  const signal = searchAbort.signal;
  el.searchResults.innerHTML = '<div class="spinner"></div>';
  try {
    const center = S.me?.pos || mapView.center();
    const items = await nearby(cat, center, { signal });
    if (signal.aborted) return;
    resultItems = items;
    el.searchResults.innerHTML = items.length
      ? `<div class="list-title">${esc(cat.label)} قريبة منك</div>${items.map((it, i) => itemHtml(it, i, cat.icon)).join('')}`
      : '<div class="empty">ما لكيت شي قريب ضمن 4 كم.</div>';
  } catch (e) {
    if (e.name === 'AbortError') return;
    el.searchResults.innerHTML = '<div class="empty">تعذر البحث. حاول بعد شوية.</div>';
  }
}

function onResultClick(e) {
  if (el.searchResults.querySelector('.spinner')) return; // النتائج دا تتحدث
  const cat = e.target.closest('[data-cat]');
  if (cat) { searchCategory(cat.dataset.cat); return; }
  if (e.target.closest('[data-clear-recents]')) { store.set('recents', []); renderSearchHome(); return; }
  const b = e.target.closest('[data-i]');
  if (!b) return;
  const it = resultItems[+b.dataset.i];
  if (!it) return;
  voice.unlock();
  const pl = { name: it.name, sub: it.sub, pos: it.pos, kind: it.kind };
  if (!it._ico) addRecent(pl);
  if (S.addingStop && S.mode === 'preview' && S.place) {
    S.addingStop = false;
    S.stops = [...(S.stops || []), pl].slice(0, 4);
    el.searchInput.value = '';
    closeSearch();
    previewRoutes(S.place, { origin: S.originOverride, keepStops: true });
    return;
  }
  if (estate?.active) {
    closeSearch();
    mapView.flyTo(pl.pos, 15.5, { pitch: 0 });
    return;
  }
  S.stops = [];
  closeSearch();
  previewRoutes(pl);
}

function renderChips() {
  const p = places();
  let html = `<button class="chip estate-chip" data-go="estate">🏡 عقارات</button><button class="chip" data-go="home">${icon('i-home')}البيت</button><button class="chip" data-go="work">${icon('i-work')}الشغل</button>`;
  html += CATEGORIES.slice(0, 5).map((c) => `<button class="chip" data-cat="${c.id}">${icon(c.icon)}${esc(c.label)}</button>`).join('');
  el.quickChips.innerHTML = html;
  el.quickChips.dataset.home = p.home ? '1' : '';
}

function onChipClick(e) {
  const c = e.target.closest('.chip');
  if (!c) return;
  voice.unlock();
  if (c.dataset.cat) { searchCategory(c.dataset.cat); return; }
  const key = c.dataset.go;
  if (key === 'estate') { estate?.enter(); return; }
  goSavedPlace(key);
}

function goSavedPlace(key) {
  const p = places()[key];
  if (p) previewRoutes({ ...p, name: key === 'home' ? 'البيت' : 'الشغل', sub: p.name });
  else toast(`ابحث عن ${key === 'home' ? 'بيتك' : 'شغلك'} أو اضغط مطولاً على الخريطة، وبعدين احفظه بزر النجمة ⭐`, 4200);
}

// ================================================================== الدبوس والضغطة المطولة
async function dropPin(ll) {
  voice.unlock();
  if (S.searchOpen) closeSearch();
  mapView.setPin(ll);
  const pl = { name: 'نقطة على الخريطة', sub: `${ll[1].toFixed(5)}, ${ll[0].toFixed(5)}`, pos: ll };
  const render = () => {
    const d = S.me ? fmtDistanceStr(haversine(S.me.pos, ll)) : '';
    openSheet('pin', `<h2>${esc(pl.name)}</h2><p class="sub">${esc(pl.sub)}${d ? ` • ${d}` : ''}</p>
      <div class="actions"><button class="btn primary" data-a="route">${icon('i-route')}الطرق إلى هنا</button></div>
      <div class="actions"><button class="btn sm" data-a="save">${icon('i-star')}حفظ</button><button class="btn sm" data-a="report">${icon('i-alert')}إبلاغ هنا</button><button class="btn sm" data-a="share">${icon('i-share')}مشاركة</button></div>`,
    {
      peek: true, backdrop: false,
      onClose: () => mapView.setPin(null),
      restore: () => render(),
      onRender: (b) => b.onclick = (e) => {
        const a = e.target.closest('[data-a]')?.dataset.a;
        if (a === 'route') { closeSheet({ silent: true }); mapView.setPin(null); previewRoutes(pl); }
        if (a === 'save') openSavePlace(pl);
        if (a === 'report') openReportMenu(ll);
        if (a === 'share') sharePlace(pl);
      },
    });
  };
  render();
  const r = await reverseGeocode(ll);
  if (r && S.sheet?.name === 'pin') { pl.name = r.name; pl.sub = r.sub || pl.sub; render(); }
}

function openSavePlace(pl) {
  openSheet('save', `<h2>حفظ المكان</h2><p class="sub">${esc(pl.name)}</p>
    <div class="menu-list">
      <button class="item" data-k="home"><span class="item-ico">${icon('i-home')}</span><span class="item-main"><div class="item-name">حفظ كالبيت</div></span></button>
      <button class="item" data-k="work"><span class="item-ico">${icon('i-work')}</span><span class="item-main"><div class="item-name">حفظ كالشغل</div></span></button>
      <button class="item" data-k="fav"><span class="item-ico">${icon('i-star')}</span><span class="item-main"><div class="item-name">إضافة للمفضلة</div></span></button>
    </div>`, {
    onRender: (b) => b.onclick = (e) => {
      const k = e.target.closest('[data-k]')?.dataset.k;
      if (!k) return;
      const p = places();
      const entry = { name: pl.sub && (pl.name === 'البيت' || pl.name === 'الشغل') ? pl.sub : pl.name, sub: pl.sub || '', pos: pl.pos };
      if (k === 'fav') p.favs = [entry, ...(p.favs || []).filter((f) => f.name !== entry.name)].slice(0, 20);
      else p[k] = entry;
      savePlaces(p);
      closeSheet({ silent: true });
      toast('انحفظ ✓');
    },
  });
}

// ================================================================== معاينة الطرق
function excludes() {
  const ex = [];
  if (S.settings.avoidMotorway) ex.push('motorway');
  if (S.settings.avoidToll) ex.push('toll');
  return ex;
}

function scoreRoutes(routes, fromAlong = 0) {
  const list = reports.list();
  const tr = traffic.list();
  return routes.map((r, i) => {
    const { penalty, hits } = reportsOnRoute(r, list, fromAlong);
    const td = trafficDelay(r, tr, fromAlong).delay;
    return { route: r, idx: i, penalty: penalty + td, reportPenalty: penalty, traffic: td, hits, cost: r.duration + penalty + td };
  });
}

function previewHeader(place) {
  return `<div class="row"><div style="flex:1;min-width:0"><h2>${esc(place.name)}</h2><p class="sub">${esc(place.sub || '')}</p></div><button class="icon-btn" data-a="save" aria-label="حفظ">${icon('i-star')}</button></div>`;
}

function previewOpts(extra = {}) {
  return { peek: true, backdrop: false, onClose: () => cancelPreview(), restore: () => restorePreview(), onRender: bindPreviewSheet, ...extra };
}

function restorePreview() {
  if (S.mode !== 'preview' || !S.place) { S.sheet = null; return; }
  if (S.routes.length) renderPreview({ fit: false });
  else previewRoutes(S.place, { origin: S.originOverride, keepStops: true });
}

async function previewRoutes(place, { origin = null, keepStops = false } = {}) {
  if (!keepStops && S.place !== place) S.stops = [];
  S.stops = S.stops || [];
  S.place = place;
  S.mode = 'preview';
  S.routes = [];
  S.originOverride = origin;
  mapView.setDestination(place.pos);
  mapView.setPin(null);
  const from = origin || S.me?.pos || null;
  S.origin = from;
  const header = previewHeader(place);
  if (!from) {
    mapView.flyTo(place.pos, 15);
    openSheet('preview', `${header}<div class="note">ما عرفت موقعك بعد. فعّل الموقع (GPS) أو استخدم مركز الخريطة كنقطة بداية.</div>
      <div class="actions"><button class="btn primary" data-a="retry">حاول مرة ثانية</button><button class="btn" data-a="center">من مركز الخريطة</button></div>`, previewOpts());
    return;
  }
  if (!previewBuried()) openSheet('preview', `${header}<div class="spinner"></div><p class="sub" style="text-align:center">دا أحسب أفضل الطرق…</p>`, previewOpts());
  fitPreview(bboxOf([from, place.pos]));
  previewAbort?.abort();
  previewAbort = new AbortController();
  try {
    const heading = S.me && !origin && (S.me.speed ?? 0) > 3 ? S.me.heading : null;
    mapView.setStops(S.stops.map((x) => x.pos));
    const routes = await fetchRoutes(from, place.pos, { alternatives: !S.stops.length, via: S.stops.map((x) => x.pos), exclude: excludes(), bearing: heading, signal: previewAbort.signal });
    if (S.mode !== 'preview' || S.place !== place) return;
    if (routes.flags?.excludeIgnored) toast('خادم الطرق ما يدعم «تجنب الطرق السريعة» حالياً');
    S.routes = scoreRoutes(routes).sort((a, b) => a.cost - b.cost);
    S.routeIdx = 0;
    if (previewBuried()) { drawPreview(); return; }
    renderPreview({ fit: true });
  } catch (e) {
    if (e.name === 'AbortError') return;
    if (S.mode !== 'preview' || S.place !== place) return;
    const msg = e.code === 'NoRoute' || e.code === 'NoSegment' ? 'ما لكيت طريق بالسيارة لهذا المكان.' : 'تعذر الاتصال بخادم الطرق. تأكد من الانترنت.';
    if (!previewBuried()) openSheet('preview', `${header}<div class="note">${msg}</div><div class="actions"><button class="btn primary" data-a="retry2">إعادة المحاولة</button></div>`, previewOpts());
  }
}

function fitPreview(bb) {
  const h = el.sheet.classList.contains('hidden') ? window.innerHeight * 0.4 : el.sheet.getBoundingClientRect().height;
  mapView.fitBounds(bb, { top: 96, bottom: Math.min(h + 24, window.innerHeight * 0.66), left: 50, right: 50 });
}

function renderPreview({ fit = true } = {}) {
  const sel = S.routes[S.routeIdx];
  if (!sel || S.mode !== 'preview') return;
  const fastest = Math.min(...S.routes.map((r) => r.route.duration));
  const opts = S.routes.map((r, i) => {
    const eta = fmtClock(new Date(Date.now() + r.route.duration * 1000));
    const badges = [];
    if (i === 0) badges.push('<span class="badge">الأفضل</span>');
    if (r.route.duration === fastest && i !== 0) badges.push('<span class="badge warn">الأقصر لولا الزحمة</span>');
    const bad = r.hits.find((h) => h.rep.type.penalty >= 300);
    if (bad) badges.push(`<span class="badge bad">${esc(bad.rep.type.label)}</span>`);
    if (r.traffic >= 60) badges.push(`<span class="badge traffic">زحمة +${fmtDuration(r.traffic)}</span>`);
    return `<button class="route-opt ${i === S.routeIdx ? 'sel' : ''}" data-r="${i}">
      <span class="r-time">${fmtDuration(r.route.duration + r.penalty)}</span>
      <span class="r-main"><div class="r-dist">${fmtDistanceStr(r.route.distance)} • يوصل ${eta} ${badges.join('')}</div><div class="r-via">${r.route.summary ? `عبر ${esc(r.route.summary)}` : ''}</div></span>
    </button>`;
  }).join('');
  const stops = (S.stops || []).map((x, i) => `<div class="stop-row"><span class="num">${num(i + 1)}</span><span class="nm">${esc(x.name)}</span><button class="icon-btn sm" data-delstop="${i}" aria-label="حذف المحطة">${icon('i-x')}</button></div>`).join('');
  const html = `${previewHeader(S.place)}
    ${stops ? `<div class="stops">${stops}</div>` : ''}
    <div class="routes">${opts}</div>
    <div class="actions"><button class="btn go" data-a="go">${icon('i-nav')}انطلق</button><button class="btn" data-a="sim">${icon('i-play')}تجربة القيادة</button></div>
    <div class="actions"><button class="btn sm" data-a="addstop" ${(S.stops || []).length >= 4 ? 'disabled' : ''}>＋ محطة</button><button class="btn sm" data-a="share">${icon('i-share')}مشاركة</button><button class="btn sm" data-a="avoid">${S.settings.avoidMotorway ? '✓ ' : ''}تجنب السريعات</button></div>
    ${S.originOverride ? '<div class="note">البداية: مركز الخريطة (مو موقعك الحقيقي)</div>' : ''}`;
  openSheet('preview', html, previewOpts());
  drawPreview();
  if (fit) {
    const pts = S.routes.flatMap((r) => [[r.route.bbox[0], r.route.bbox[1]], [r.route.bbox[2], r.route.bbox[3]]]);
    fitPreview(bboxOf(pts));
  }
}

function bindPreviewSheet(b) {
  b.onclick = (e) => {
    const r = e.target.closest('[data-r]');
    if (r) { selectRoute(+r.dataset.r); return; }
    const ds = e.target.closest('[data-delstop]');
    if (ds) { S.stops.splice(+ds.dataset.delstop, 1); previewRoutes(S.place, { origin: S.originOverride, keepStops: true }); return; }
    const a = e.target.closest('[data-a]')?.dataset.a;
    if (!a) return;
    if (a === 'go' || a === 'sim') {
      const sel = S.routes[S.routeIdx];
      if (!sel) return;
      if (a === 'go' && (!S.me || S.originOverride)) { toast('ما عندي موقعك الحقيقي. جرّب «تجربة القيادة» أو فعّل الـGPS', 3500); return; }
      startNav(sel.route, { sim: a === 'sim' });
    }
    if (a === 'save') openSavePlace(S.place);
    if (a === 'share') sharePlace(S.place);
    if (a === 'addstop') { openSearch({ forStop: true }); el.searchInput.placeholder = 'وين تريد توقف بالطريق؟'; setTimeout(() => el.searchInput.focus(), 50); }
    if (a === 'avoid') { S.settings.avoidMotorway = !S.settings.avoidMotorway; saveSettings(); previewRoutes(S.place, { origin: S.originOverride, keepStops: true }); }
    if (a === 'retry') { gps.stop(); gps.start(); toast('دا أحدد موقعك…'); const pl = S.place; setTimeout(() => { if (S.mode === 'preview' && S.place === pl) previewRoutes(pl); }, 2500); }
    if (a === 'center') previewRoutes(S.place, { origin: mapView.center() });
    if (a === 'retry2') previewRoutes(S.place, { origin: S.originOverride, keepStops: true });
  };
}

function drawPreview() {
  const sel = S.routes[S.routeIdx];
  mapView.setRoutes(sel?.route || null, S.routes.map((r, i) => ({ idx: i, route: r.route })).filter((x) => x.idx !== S.routeIdx));
}

function selectRoute(i) {
  if (!S.routes[i] || i === S.routeIdx) return;
  S.routeIdx = i;
  drawPreview();
  el.sheetBody.querySelectorAll('.route-opt').forEach((b) => b.classList.toggle('sel', +b.dataset.r === i));
}

function cancelPreview() {
  previewAbort?.abort();
  if (S.mode !== 'preview') return;
  S.mode = 'browse';
  S.routes = [];
  S.place = null;
  S.stops = [];
  mapView.clearRoutes();
  mapView.setDestination(null);
  mapView.setStops([]);
}

// ================================================================== الملاحة
function startNav(route, { sim: simulate = false } = {}) {
  voice.unlock();
  const dest = S.place;
  if (!dest) return;
  if (estate?.active) estate.exit();
  closeAllSheets({ silent: true });
  hideAlert();
  previewAbort?.abort();
  if (nav) stopNavInternal();
  nav = {
    route,
    engine: new NavEngine(route, { dialect: S.settings.dialect }),
    dest,
    sim: simulate,
    startT: Date.now(),
    driven: 0,
    prevPos: null,
    follow: true,
    pausedAt: 0,
    display: { along: null, pos: null, bearing: null, zoom: null },
    target: null,
    state: null,
    rerouting: false,
    lastReroute: 0,
    lastFasterCheck: Date.now(),
    fasterBusy: false,
    alerted: new Set(),
    asked: new Set(),
    hits: [],
    abort: new AbortController(),
    lastOffSay: 0,
    speedWarnT: 0,
    lastNextIdx: -1,
    arrivedHandled: false,
    lastSave: 0,
    stops: (S.stops || []).slice(),
    wpPassed: 0,
    trafficAhead: 0,
    trafficT: 0,
  };
  probe.reset();
  S.mode = 'nav';
  document.body.classList.add('navigating');
  el.topbar.classList.add('hidden');
  el.navTop.classList.remove('hidden');
  el.navBottom.classList.remove('hidden');
  el.speedo.classList.remove('hidden');
  el.btnCompass.classList.add('hidden');
  mapView.setRoutes(route, []);
  mapView.setDestination(dest.pos);
  mapView.setStops(nav.stops.map((x) => x.pos));
  mapView.setPin(null);
  mapView.setAccuracy(null);
  computeHits();
  updateTrafficAhead(true);
  if (!simulate && S.settings.shareTraffic && !store.get('trafficNotice')) {
    store.set('trafficNotice', 1);
    setTimeout(() => toast('🛰️ سالكة يشارك سرعتك بدون اسم ولا رقم حتى يلوّن الازدحام للكل — تكدر تطفيه من الإعدادات', 5500), 2500);
  }
  const first = route.steps[0];
  const start = S.me && !simulate ? S.me : { pos: route.coords[0], heading: route.line.brg[0], speed: 0, accuracy: 5 };
  nav.target = { along: 0, onRoute: false, pos: start.pos, heading: start.heading ?? route.line.brg[0], speed: 0, recv: performance.now() };
  nav.display.bearing = start.heading ?? route.line.brg[0];
  const st0 = nav.engine.update({ ...start, t: Date.now() });
  nav.state = st0;
  renderBanner(st0);
  const firstSay = [instructionFor(first, S.settings.dialect).text, ...st0.announcements.map((a) => a.text)].join('، ');
  voice.speak(firstSay, { priority: 2 });
  if (simulate) {
    sim.setRoute(route, 0);
    sim.start(S.simSpeed);
    toast('🚗 وضع تجربة القيادة — من القائمة تكدر تغيّر السرعة أو تنحرف عن الطريق');
  } else if (!S.me) {
    showNavStatus('بانتظار إشارة الـGPS…', true);
  }
  requestWakeLock();
  startLoop();
  store.set('activeTrip', { dest: { name: dest.name, sub: dest.sub, pos: dest.pos }, t: Date.now() });
}

function navFix(fix) {
  const n = nav;
  const st = n.engine.update(fix);
  n.state = st;
  n.lastFix = fix;
  const onRoute = st.joined && !st.offRoute;
  n.target = { along: st.along, onRoute, pos: fix.pos, heading: fix.heading ?? st.bearing, speed: fix.speed ?? st.speed ?? 0, recv: performance.now() };
  if (n.prevPos) {
    const d = haversine(n.prevPos, fix.pos);
    if (d < 300) n.driven += d;
  }
  n.prevPos = fix.pos;

  if (!n.rerouting) hideNavStatus();
  // المحطات اللي عديناها
  const wps = n.route.steps.filter((x) => x.waypoint);
  const passed = wps.filter((x) => x.startDist <= st.along + 10).length;
  if (passed > n.wpPassed) {
    for (let k = n.wpPassed; k < passed; k++) { const done = n.stops.shift(); if (done) toast(`✅ وصلت: ${done.name}`); }
    n.wpPassed = passed;
    mapView.setStops(n.stops.map((x) => x.pos));
  }
  // الازدحام: عينة مجهولة كل 30 ثانية (مو بوضع التجربة)
  if (!n.sim && S.settings.shareTraffic) {
    const smp = probe.update({ route: n.route, along: st.along, t: fix.t, onRoute: st.joined && !st.offRoute });
    if (smp) traffic.publish(smp);
  }
  if (Date.now() - n.trafficT > 10000) updateTrafficAhead();
  renderBanner(st);
  for (const a of st.announcements) voice.speak(a.text, { priority: a.priority });
  if (st.needReroute) reroute(st.reason);
  checkReportsAhead(st);
  checkSpeed(fix);
  if (st.arrived) { arrive(); return; }
  if (S.settings.autoFaster && !n.fasterBusy && !n.rerouting && Date.now() - n.lastFasterCheck > NAV.fasterCheckMs) checkFaster();
  if (Date.now() - n.lastSave > 30000) { n.lastSave = Date.now(); store.set('activeTrip', { dest: n.dest, t: Date.now() }); }
}

function renderBanner(st) {
  if (!nav) return;
  const eng = nav.engine;
  const next = eng.steps[st.nextIdx];
  const off = st.offRoute || (st.needReroute && nav.rerouting);
  el.banner.classList.toggle('off', !!off);
  if (nav.lastNextIdx !== st.nextIdx || nav.lastIconOff !== off) {
    el.mIcon.innerHTML = maneuverIcon(next);
    nav.lastNextIdx = st.nextIdx;
    nav.lastIconOff = off;
    // الحارات
    if (next.lanes) {
      el.lanes.innerHTML = next.lanes.map((l) => laneIcon(l.indications, l.valid || l.active)).join('');
    } else el.lanes.innerHTML = '';
    // ثم
    if (st.thenIdx >= 0) {
      el.thenIcon.innerHTML = maneuverIcon(eng.steps[st.thenIdx]);
      el.thenLabel.textContent = P().then;
      el.thenChip.classList.remove('hidden');
    } else el.thenChip.classList.add('hidden');
  }
  el.lanes.classList.toggle('hidden', !next.lanes || st.distToNext > 900 || off);
  let dist = st.distToNext, road;
  if (!st.joined) {
    dist = st.snapDist;
    road = 'اتجه إلى الطريق المحدد';
  } else if (off) {
    road = 'خارج المسار';
  } else {
    const ins = eng.instruction(st.nextIdx);
    road = ins.road || ins.short;
    if (next.maneuver.type === 'arrive') road = nav.dest.name;
  }
  const f = fmtDistance(dist);
  el.mDist.textContent = f.value;
  el.mUnit.textContent = f.unit;
  el.mRoad.textContent = road;
  // الوصول
  const total = st.remainingTime + (nav.trafficAhead || 0);
  el.etaTime.textContent = fmtClock(new Date(Date.now() + total * 1000));
  el.etaLeft.innerHTML = nav.trafficAhead >= 60 ? `${fmtDuration(total)} <span class="eta-traffic">(+${fmtDuration(nav.trafficAhead)} زحمة)</span>` : fmtDuration(total);
  el.etaDist.textContent = fmtDistanceStr(st.remainingDist);
  mapView.setProgress(mercFraction(nav.route.line, st.along));
}

function checkSpeed(fix) {
  const kmh = Math.round(Math.max(0, fix.speed ?? 0) * 3.6);
  el.speedVal.textContent = num(kmh);
  const lim = +S.settings.speedAlert || 0;
  const over = lim > 0 && kmh > lim + 2;
  el.speedo.classList.toggle('over', over);
  if (over && Date.now() - nav.speedWarnT > 60000) { nav.speedWarnT = Date.now(); voice.speak(P().speed, { priority: 1 }); }
}

function showNavStatus(text, spin = true) {
  el.navStatus.innerHTML = `${spin ? '<div class="spinner"></div>' : ''}<span>${esc(text)}</span>`;
  el.navStatus.classList.remove('hidden');
}
function hideNavStatus() { el.navStatus.classList.add('hidden'); }

// ---------------------------------------------------- حلقة الرسم السلسة
function startLoop() {
  cancelAnimationFrame(nav.raf);
  nav.lastFrame = performance.now();
  const tick = (ts) => {
    if (!nav) return;
    nav.raf = requestAnimationFrame(tick);
    try { frame(ts); } catch (e) { console.error(e); }
  };
  nav.raf = requestAnimationFrame(tick);
}

function frame(ts) {
  const minDt = S.settings.batterySaver ? 40 : 14;
  if (ts - nav.lastFrame < minDt) return;
  const dt = Math.min(0.25, (ts - nav.lastFrame) / 1000);
  nav.lastFrame = ts;
  const tgt = nav.target;
  if (!tgt) return;
  const d = nav.display;
  const line = nav.route.line;
  const elapsed = Math.min(1.6, (performance.now() - tgt.recv) / 1000);
  let want = d.bearing ?? tgt.heading ?? 0;
  if (tgt.onRoute) {
    const pred = Math.min(line.total, tgt.along + tgt.speed * elapsed);
    if (d.along == null || Math.abs(pred - d.along) > 120) d.along = pred;
    else d.along += (pred - d.along) * Math.min(1, dt * 6);
    const p = pointAt(line, d.along);
    d.pos = p.point;
    const ahead = pointAt(line, Math.min(line.total, d.along + Math.max(12, tgt.speed * 1.5)));
    want = haversine(d.pos, ahead.point) > 2 ? bearing(d.pos, ahead.point) : p.bearing;
  } else {
    d.along = null;
    const pred = tgt.speed > 1 && tgt.heading != null ? destination(tgt.pos, tgt.heading, tgt.speed * elapsed) : tgt.pos;
    if (!d.pos || haversine(d.pos, pred) > 150) d.pos = pred;
    else { const k = Math.min(1, dt * 5); d.pos = [d.pos[0] + (pred[0] - d.pos[0]) * k, d.pos[1] + (pred[1] - d.pos[1]) * k]; }
    if (tgt.heading != null && (tgt.speed > 1 || d.bearing == null)) want = tgt.heading;
  }
  d.bearing = d.bearing == null ? want : lerpAngle(d.bearing, want, Math.min(1, dt * 4));
  mapView.setMe(d.pos, d.bearing, 'car');

  if (!nav.follow && nav.pausedAt && Date.now() - nav.pausedAt > 12000) recenter();
  if (nav.follow) {
    const kmh = tgt.speed * 3.6;
    let z = kmh < 25 ? 17.3 : kmh < 55 ? 16.6 : kmh < 85 ? 16 : 15.4;
    if (nav.state && nav.state.distToNext < 220 && kmh < 70) z += 0.5;
    d.zoom = d.zoom == null ? z : d.zoom + (z - d.zoom) * Math.min(1, dt * 1.2);
    const { h } = mapView.size;
    const tilt = S.settings.tilt;
    mapView.follow({ center: d.pos, bearing: d.bearing, zoom: d.zoom, pitch: tilt ? 56 : 0, padding: { top: Math.round(h * (tilt ? 0.42 : 0.3)), bottom: 90, left: 0, right: 0 } });
  }
}

function recenter() {
  if (!nav) return;
  nav.follow = true;
  nav.pausedAt = 0;
  el.btnRecenter.classList.add('hidden');
}

function overview() {
  if (!nav) return;
  nav.follow = false;
  nav.pausedAt = Date.now() + 8000;
  el.btnRecenter.classList.remove('hidden');
  const st = nav.state;
  const rest = sliceLine(nav.route.line, st ? st.along : 0, nav.route.line.total);
  const h = el.navBottom.getBoundingClientRect().height + 30;
  mapView.fitBounds(bboxOf(rest.length > 1 ? rest : nav.route.coords), { top: 200, bottom: h, left: 40, right: 40 });
}

// ---------------------------------------------------- إعادة الحساب
async function reroute(reason) {
  const n = nav;
  if (!n || n.rerouting) return;
  const now = Date.now();
  if (now - n.lastReroute < NAV.rerouteCooldownMs) return;
  n.rerouting = true;
  n.lastReroute = now;
  hideAlert();
  showNavStatus('دا أدورلك طريق جديد…');
  if (now - n.lastOffSay > 25000) { n.lastOffSay = now; voice.speak(P().offRoute, { priority: 2 }); }
  const fix = n.lastFix || S.me;
  try {
    const heading = fix && (fix.speed ?? 0) > 2 ? fix.heading : null;
    const anyPenalty = reports.list().some((r) => r.type.penalty > 0);
    const routes = await fetchRoutes(fix.pos, n.dest.pos, { bearing: heading, alternatives: anyPenalty || traffic.list().length > 0, via: n.stops.map((x) => x.pos), exclude: excludes(), signal: n.abort.signal, timeoutMs: 10000 });
    if (nav !== n) return;
    const best = scoreRoutes(routes).sort((a, b) => a.cost - b.cost)[0];
    voice.speak(P().rerouted, { priority: 1, chime: false });
    swapRoute(best.route, { rerouted: true });
    hideNavStatus();
  } catch (e) {
    if (e.name === 'AbortError' || nav !== n) return;
    showNavStatus('تعذر الاتصال بخادم الطرق… راح أحاول مرة ثانية', true);
    n.lastReroute = Date.now() - NAV.rerouteCooldownMs + 5000;
  } finally {
    if (nav === n) n.rerouting = false;
  }
}

function swapRoute(route, { rerouted = false } = {}) {
  if (!nav) return;
  nav.route = route;
  nav.engine = new NavEngine(route, { dialect: S.settings.dialect, rerouted });
  nav.display.along = null;
  if (nav.target) nav.target = { ...nav.target, onRoute: false, pos: nav.display.pos || nav.target.pos, speed: 0, recv: performance.now() };
  nav.lastNextIdx = -1;
  nav.wpPassed = 0;
  probe.reset();
  mapView.setRoutes(route, []);
  mapView.setStops(nav.stops.map((x) => x.pos));
  computeHits();
  updateTrafficAhead(true);
  if (nav.sim) sim.continueOn(route);
  if (nav.lastFix) {
    const f = nav.lastFix;
    const st = nav.engine.update({ ...f, t: Date.now() });
    nav.state = st;
    // نكمل الحركة فوراً على الطريق الجديد بدون توقف
    nav.target = { along: st.along, onRoute: st.joined && !st.offRoute, pos: f.pos, heading: f.heading ?? st.bearing, speed: f.speed ?? 0, recv: performance.now() };
    renderBanner(st);
    for (const a of st.announcements) voice.speak(a.text, { priority: Math.min(a.priority, 2) });
  }
}

// ---------------------------------------------------- طريق أسرع
function sameRoute(cand, cur, fromAlong) {
  const total = cand.line.total;
  let near = 0, n = 0;
  for (let d = 0; d <= total; d += Math.max(150, total / 40)) {
    const p = pointAt(cand.line, d).point;
    n++;
    // نقارن مع الجزء المتبقي من الطريق الحالي
    const s = cur.line.coords.length ? sliceDistance(cur, p, fromAlong) : Infinity;
    if (s < 30) near++;
  }
  return n > 0 && near / n > 0.85;
}

function sliceDistance(route, p, fromAlong) {
  let best = Infinity;
  const c = route.line.coords;
  const start = Math.max(0, pointAt(route.line, fromAlong).seg);
  for (let i = start; i < c.length - 1; i += 1) {
    const d = haversine(p, c[i]);
    if (d < best) best = d;
    if (best < 15) break;
  }
  return best;
}

async function checkFaster(force = false) {
  const n = nav;
  if (!n || n.fasterBusy || n.rerouting || !n.state || n.state.offRoute || !n.lastFix) return;
  if (n.stops.length) { n.lastFasterCheck = Date.now(); return; } // مع المحطات نلتزم بالترتيب
  if (!force && n.state.remainingDist < 2500) { n.lastFasterCheck = Date.now(); return; }
  n.fasterBusy = true;
  n.lastFasterCheck = Date.now();
  try {
    const fix = n.lastFix;
    const heading = (fix.speed ?? 0) > 2 ? fix.heading : null;
    const routes = await fetchRoutes(fix.pos, n.dest.pos, { bearing: heading, alternatives: true, exclude: excludes(), signal: n.abort.signal });
    if (nav !== n || n.rerouting) return;
    const list = reports.list();
    const curCost = n.state.remainingTime + reportsOnRoute(n.route, list, n.state.along).penalty + trafficDelay(n.route, traffic.list(), n.state.along).delay;
    const best = scoreRoutes(routes).sort((a, b) => a.cost - b.cost)[0];
    const gain = curCost - best.cost;
    if (gain >= NAV.fasterMinGainS && !sameRoute(best.route, n.route, n.state.along)) {
      const mins = Math.max(1, Math.round(gain / 60));
      voice.speak(P().faster(mins), { priority: 1 });
      const why = best.traffic < trafficDelay(n.route, traffic.list(), n.state.along).delay - 60 ? 'يتجنب الازدحام اللي قدامك'
        : best.hits.length < reportsOnRoute(n.route, list, n.state.along).hits.length ? 'يتجنب بلاغات على طريقك' : 'حسب الطرق الحالية';
      showAlert({
        ico: '⚡', color: 'color-mix(in srgb, var(--ok) 18%, var(--bg))',
        title: `طريق أسرع — يوفر ${num(mins)} د`, sub: why,
        actions: [{ label: 'اسلكه', cls: 'go', fn: () => acceptFaster(best.route) }, { label: 'لا', fn: () => {} }],
        timeout: 12000, onTimeout: () => acceptFaster(best.route),
      });
    }
  } catch { /* نحاول لاحقاً */ } finally {
    if (nav === n) n.fasterBusy = false;
  }
}

function acceptFaster(route) {
  if (!nav) return;
  swapRoute(route);
  voice.speak(P().rerouted, { priority: 1, chime: false });
}

// ---------------------------------------------------- البلاغات أثناء الملاحة
function onTrafficChanged() {
  mapView.setTraffic(S.settings.showTraffic ? traffic.geojson() : null);
  if (nav) {
    const before = nav.trafficAhead || 0;
    updateTrafficAhead(true);
    // زحمة جديدة كبيرة قدامك → ندور طريق أسرع
    if (nav.trafficAhead - before > 180 && Date.now() - nav.lastFasterCheck > 60000) setTimeout(() => checkFaster(true), 300);
  }
}

function updateTrafficAhead(force = false) {
  if (!nav) return;
  if (!force && Date.now() - nav.trafficT < 10000) return;
  nav.trafficT = Date.now();
  nav.trafficAhead = trafficDelay(nav.route, traffic.list(), nav.state ? nav.state.along : 0).delay;
}

function computeHits() {
  if (!nav) return;
  nav.hits = reportsOnRoute(nav.route, reports.list(), 0).hits;
}

function checkReportsAhead(st) {
  const n = nav;
  if (!n.hits.length || !st.joined) return;
  for (const h of n.hits) {
    const id = h.rep.id;
    const ahead = h.along - st.along;
    if (ahead > 0 && ahead < NAV.reportAheadAlert && !n.alerted.has(id)) {
      n.alerted.add(id);
      const t = h.rep.type;
      voice.speak(P().report(t.voice, spokenDistance(ahead, S.settings.dialect)), { priority: 1 });
      showAlert({ ico: t.icon, color: t.color, title: t.label, sub: `بعد ${fmtDistanceStr(ahead)}`, timeout: 7000 });
    }
    if (ahead < -40 && n.alerted.has(id) && !n.asked.has(id) && !h.rep.mine) {
      n.asked.add(id);
      const t = h.rep.type;
      showAlert({
        ico: t.icon, color: t.color, title: `${t.label} — بعده موجود؟`, sub: 'رأيك يساعد غيرك',
        actions: [{ label: '👍', fn: () => { reports.vote(h.rep, 1); toast('شكراً 🙏'); } }, { label: '👎', fn: () => { reports.vote(h.rep, -1); toast('شكراً 🙏'); } }],
        timeout: 8000,
      });
    }
  }
}

function onReportsChanged() {
  const rs = document.getElementById('repStatus');
  if (rs) rs.textContent = reportStatusText();
  const list = reports.list();
  mapView.setReports(list);
  if (nav) {
    const before = nav.hits.map((h) => h.rep.id).join();
    computeHits();
    const after = nav.hits.map((h) => h.rep.id).join();
    // بلاغ جديد مؤثر على طريقك → نفحص بدائل
    if (before !== after && nav.hits.some((h) => h.rep.type.penalty >= 300 && nav.state && h.along > nav.state.along) && Date.now() - nav.lastFasterCheck > 45000) {
      setTimeout(() => checkFaster(true), 500);
    }
  }
}

// ---------------------------------------------------- الوصول والإنهاء
function arrive() {
  const n = nav;
  if (!n || n.arrivedHandled) return;
  n.arrivedHandled = true;
  closeAllSheets({ silent: true });
  hideAlert();
  voice.speak(P().arrive, { priority: 3 });
  if (n.sim) sim.stop();
  store.del('activeTrip');
  const secs = (Date.now() - n.startT) / 1000;
  const avg = secs > 0 ? (n.driven / secs) * 3.6 : 0;
  openSheet('arrived', `<h2>🎉 وصلت!</h2><p class="sub">${esc(n.dest.name)}</p>
    <div class="stat-grid"><div class="stat"><b>${fmtDistanceStr(n.driven)}</b><small>المسافة</small></div><div class="stat"><b>${fmtDuration(secs)}</b><small>الوقت</small></div><div class="stat"><b>${num(Math.round(avg))}</b><small>كم/س معدل</small></div></div>
    <div class="actions"><button class="btn primary" data-a="done">تم</button><button class="btn" data-a="save">${icon('i-star')}حفظ المكان</button></div>`, {
    onClose: () => endNav(),
    onRender: (b) => b.onclick = (e) => {
      const a = e.target.closest('[data-a]')?.dataset.a;
      if (a === 'done') closeSheet();
      if (a === 'save') { const d = n.dest; closeSheet(); openSavePlace(d); }
    },
  });
}

function confirmEndNav() {
  if (!nav) return;
  openSheet('end', `<h2>توقف الملاحة؟</h2><p class="sub">${esc(nav.dest.name)}</p>
    <div class="actions"><button class="btn danger" data-a="end">إيقاف</button><button class="btn" data-a="cancel">كمّل</button></div>`, {
    onRender: (b) => b.onclick = (e) => {
      const a = e.target.closest('[data-a]')?.dataset.a;
      if (a === 'end') { closeSheet({ silent: true }); endNav(); }
      if (a === 'cancel') closeSheet();
    },
  });
}

function stopNavInternal() {
  if (!nav) return;
  cancelAnimationFrame(nav.raf);
  nav.abort.abort();
  sim.stop();
  nav = null;
}

function endNav() {
  if (!nav) return;
  const wasSim = nav.sim;
  stopNavInternal();
  if (S.sheet && S.sheet.name !== 'arrived') closeAllSheets({ silent: true });
  voice.stop();
  releaseWakeLock();
  hideAlert();
  hideNavStatus();
  store.del('activeTrip');
  S.mode = 'browse';
  document.body.classList.remove('navigating');
  el.topbar.classList.remove('hidden');
  el.navTop.classList.add('hidden');
  el.navBottom.classList.add('hidden');
  el.speedo.classList.add('hidden');
  el.btnRecenter.classList.add('hidden');
  mapView.clearRoutes();
  mapView.setDestination(null);
  mapView.setStops([]);
  S.stops = [];
  if (wasSim) S.me = gps.last || null;
  if (S.pendingReload) { S.pendingReload = false; setTimeout(() => location.reload(), 600); return; }
  if (S.me) {
    mapView.setMe(S.me.pos, S.me.heading, 'dot');
    mapView.flyTo(S.me.pos, 15.5, { bearing: 0, pitch: 0 });
  } else mapView.map?.easeTo({ pitch: 0, bearing: 0, duration: 600 });
}

// ---------------------------------------------------- قائمة الملاحة
function openNavMenu() {
  if (!nav) return;
  const n = nav;
  const st = n.state;
  const simRows = n.sim ? `<h3>تجربة القيادة</h3>
    <div class="set-row"><span class="set-label">السرعة <small>${num(S.simSpeed)} كم/س</small></span>
      <button class="btn sm" data-a="simminus">−</button><button class="btn sm" data-a="simplus">+</button></div>
    <div class="set-row"><span class="set-label">انحراف عن الطريق<small>حتى تشوف إعادة الحساب الفورية</small></span><button class="btn sm" data-a="deviate">انحرف</button></div>` : '';
  openSheet('navmenu', `<h2>${esc(n.dest.name)}</h2>
    <p class="sub">${st ? `${fmtDistanceStr(st.remainingDist)} • ${fmtDuration(st.remainingTime)} • يوصل ${fmtClock(new Date(Date.now() + st.remainingTime * 1000))}` : ''}</p>
    <div class="menu-list">
      <button class="item" data-a="overview"><span class="item-ico">${icon('i-route')}</span><span class="item-main"><div class="item-name">عرض الطريق كامل</div></span></button>
      <button class="item" data-a="share"><span class="item-ico">${icon('i-share')}</span><span class="item-main"><div class="item-name">مشاركة وقت الوصول</div></span></button>
      <button class="item" data-a="voice"><span class="item-ico">${icon(S.settings.voice ? 'i-vol' : 'i-mute')}</span><span class="item-main"><div class="item-name">${S.settings.voice ? 'كتم الصوت' : 'تشغيل الصوت'}</div></span></button>
      <button class="item" data-a="report"><span class="item-ico">${icon('i-alert')}</span><span class="item-main"><div class="item-name">إبلاغ</div></span></button>
      <button class="item" data-a="faster"><span class="item-ico">${icon('i-swap')}</span><span class="item-main"><div class="item-name">دوّر على طريق أسرع</div></span></button>
      <button class="item" data-a="settings"><span class="item-ico">${icon('i-gear')}</span><span class="item-main"><div class="item-name">الإعدادات</div></span></button>
    </div>
    ${simRows}
    <div class="actions"><button class="btn danger" data-a="end">إيقاف الملاحة</button></div>`, {
    onRender: (b) => b.onclick = (e) => {
      const a = e.target.closest('[data-a]')?.dataset.a;
      if (!a) return;
      if (a === 'overview') { closeSheet(); overview(); }
      if (a === 'share') shareEta();
      if (a === 'voice') { S.settings.voice = !S.settings.voice; voice.enabled = S.settings.voice; if (!S.settings.voice) voice.stop(); saveSettings(); openNavMenu(); }
      if (a === 'report') openReportMenu();
      if (a === 'faster') { closeSheet(); toast('دا أدور…'); checkFaster(true).then(() => { if (nav && el.alertCard.classList.contains('hidden')) toast('طريقك الحالي هو الأفضل 👍'); }); }
      if (a === 'settings') openSettings();
      if (a === 'end') { closeSheet({ silent: true }); endNav(); }
      if (a === 'simminus' || a === 'simplus') {
        S.simSpeed = clamp(S.simSpeed + (a === 'simplus' ? 10 : -10), 10, 160);
        sim.setSpeed(S.simSpeed);
        openNavMenu();
      }
      if (a === 'deviate') { sim.deviate(); closeSheet(); toast('↪️ انحرفت عن الطريق…'); }
    },
  });
}

// ================================================================== البلاغات (واجهة)
function openReportMenu(at = null) {
  const pos = at || (nav ? nav.display.pos || nav.lastFix?.pos : S.me?.pos) || null;
  const grid = REPORT_TYPES.map((t) => `<button class="report-btn" data-t="${t.id}"><span class="r-ico" style="background:${t.color}">${t.icon}</span>${esc(t.label)}</button>`).join('');
  const note = reportStatusText();
  openSheet('report', `<h2>شنو شايف بالطريق؟</h2>${pos ? '' : '<p class="sub">ما عندي موقعك — البلاغ راح يكون على مركز الخريطة</p>'}
    <div class="report-grid">${grid}</div><div class="note">${note}</div>`, {
    onRender: (b) => b.onclick = (e) => {
      const t = e.target.closest('[data-t]')?.dataset.t;
      if (!t) return;
      const p = pos || mapView.center();
      const ok = reports.add(t, p);
      // نرجع للمعاينة/الدبوس إذا كانت مفتوحة، وإلا نسد كلشي ونرجع للخريطة
      if (S.sheetStack.some((x) => x.name === 'preview' || x.name === 'pin')) closeSheet({ silent: true });
      else closeAllSheets({ silent: true });
      toast(ok ? `شكراً! تم الإبلاغ عن ${RTYPE[t].label} 👍` : 'سبق وبلّغت عن هذا قبل شوية');
    },
  });
}

function timeAgo(t) {
  const m = Math.round((Date.now() - t) / 60000);
  if (m < 1) return 'هسه';
  if (m < 60) return `قبل ${num(m)} دقيقة`;
  const h = Math.round(m / 60);
  return h < 24 ? `قبل ${num(h)} ساعة` : `قبل ${num(Math.round(h / 24))} يوم`;
}

function openReportDetail(rep) {
  if (!rep) return;
  const votes = Object.values(rep.v || {});
  const up = votes.filter((x) => x === 1).length, down = votes.filter((x) => x === -1).length;
  const dist = S.me ? ` • ${fmtDistanceStr(haversine(S.me.pos, [rep.x, rep.y]))}` : '';
  openSheet('repdetail', `<div class="row"><span class="r-ico" style="width:56px;height:56px;border-radius:50%;display:grid;place-items:center;font-size:28px;background:${rep.type.color}">${rep.type.icon}</span>
    <div><h2>${esc(rep.type.label)}</h2><p class="sub">${timeAgo(rep.t)}${dist}${rep.mine ? ' • بلاغك' : ''}</p></div></div>
    <p class="sub">👍 ${num(up)} &nbsp; 👎 ${num(down)}</p>
    <div class="actions">${rep.mine
    ? `<button class="btn danger" data-a="del">${icon('i-trash')}حذف بلاغي</button>`
    : '<button class="btn go" data-a="up">👍 بعده موجود</button><button class="btn" data-a="down">👎 مو موجود</button>'}</div>`, {
    onRender: (b) => b.onclick = (e) => {
      const a = e.target.closest('[data-a]')?.dataset.a;
      if (a === 'up') { reports.vote(rep, 1); closeSheet(); toast('شكراً 🙏'); }
      if (a === 'down') { reports.vote(rep, -1); closeSheet(); toast('شكراً 🙏'); }
      if (a === 'del') { reports.remove(rep); closeSheet(); toast('انحذف'); }
    },
  });
}

// ================================================================== المشاركة
async function shareText(text, url) {
  try {
    if (navigator.share) { await navigator.share({ title: APP.name, text, url }); return; }
  } catch (e) { if (e.name === 'AbortError') return; }
  try { await navigator.clipboard.writeText(url ? `${text}\n${url}` : text); toast('انتسخ — الصقه وين ما تريد'); } catch { toast(url || text, 6000); }
}

function sharePlace(pl) {
  const url = `https://maps.google.com/?q=${pl.pos[1].toFixed(6)},${pl.pos[0].toFixed(6)}`;
  shareText(`📍 ${pl.name}${pl.sub ? ` — ${pl.sub}` : ''}`, url);
}

function shareEta() {
  if (!nav?.state) return;
  const st = nav.state;
  const eta = fmtClock(new Date(Date.now() + st.remainingTime * 1000));
  const p = nav.display.pos || nav.lastFix?.pos;
  const url = p ? `https://maps.google.com/?q=${p[1].toFixed(6)},${p[0].toFixed(6)}` : '';
  shareText(`🚗 بالطريق إلى ${nav.dest.name} — أوصل تقريباً الساعة ${eta} (باقي ${fmtDuration(st.remainingTime)}). موقعي هسه:`, url);
}

// ================================================================== القائمة والإعدادات
function openMenu() {
  openSheet('menu', `<div class="row" style="gap:12px;margin-bottom:8px"><div class="menu-logo"><svg viewBox="0 0 64 64"><use href="#i-logo"/></svg></div><div><h2 class="brand-title" style="margin:0;font-size:28px">${APP.name}</h2><p class="sub" style="margin:0">عالمك على الطريق • الإصدار ${num(APP.version)}</p></div></div>
    <div class="menu-list">
      <button class="item" data-a="places"><span class="item-ico">${icon('i-star')}</span><span class="item-main"><div class="item-name">أماكني المحفوظة</div></span></button>
      <button class="item" data-a="report"><span class="item-ico">${icon('i-alert')}</span><span class="item-main"><div class="item-name">إبلاغ عن الطريق</div></span></button>
      <button class="item" data-a="shareme"><span class="item-ico">${icon('i-share')}</span><span class="item-main"><div class="item-name">مشاركة موقعي</div></span></button>
      <button class="item" data-a="settings"><span class="item-ico">${icon('i-gear')}</span><span class="item-main"><div class="item-name">الإعدادات والألوان</div></span></button>
      ${S.installPrompt ? `<button class="item" data-a="install"><span class="item-ico">${icon('i-down')}</span><span class="item-main"><div class="item-name">تثبيت التطبيق على الشاشة الرئيسية</div></span></button>` : ''}
      ${showApkOffer() ? `<a class="item" href="download/"><span class="item-ico">📲</span><span class="item-main"><div class="item-name">نزّل تطبيق الأندرويد</div><div class="item-sub">أيقونة على الشاشة، يفتح بدون شريط متصفح</div></span></a>` : ''}
      <button class="item" data-a="about"><span class="item-ico">${icon('i-info')}</span><span class="item-main"><div class="item-name">حول التطبيق</div></span></button>
    </div>
    <h3>خدمات سالكة</h3>
    <div class="menu-list">
      <button class="item" data-a="soon-taxi"><span class="item-ico">🚕</span><span class="item-main"><div class="item-name">تكسي سالكة</div><div class="item-sub">اطلب سيارة أو اشتغل سائق</div></span><span class="badge warn">قريباً</span></button>
      <button class="item" data-a="estate"><span class="item-ico">🏡</span><span class="item-main"><div class="item-name">عقارات على الخريطة</div><div class="item-sub">بيوت، أراضي، بساتين، محلات، مزارع — بيع وإيجار</div></span></button>
      <button class="item" data-a="estate-add"><span class="item-ico">＋</span><span class="item-main"><div class="item-name">أضف عقارك</div><div class="item-sub">ارسم قطعتك على الخريطة وانشرها بدقيقتين</div></span></button>
      <button class="item" data-a="estate-mine"><span class="item-ico">📋</span><span class="item-main"><div class="item-name">إعلاناتي</div></span></button>
      <button class="item" data-a="estate-favs"><span class="item-ico">❤</span><span class="item-main"><div class="item-name">العقارات المحفوظة</div></span></button>
    </div>`, {
    onRender: (b) => b.onclick = async (e) => {
      const a = e.target.closest('[data-a]')?.dataset.a;
      if (a === 'places') openPlaces();
      if (a === 'report') openReportMenu();
      if (a === 'shareme') { if (S.me) sharePlace({ name: 'موقعي', pos: S.me.pos }); else toast('ما عندي موقعك بعد'); }
      if (a === 'settings') openSettings();
      if (a === 'about') openAbout();
      if (a === 'soon-taxi') toast('🚕 خدمة التكسي قيد التجهيز — بالتحديث الجاي', 3500);
      if (a === 'estate') { closeAllSheets({ silent: true }); estate?.enter(); }
      if (a === 'estate-add') { closeAllSheets({ silent: true }); estate?.startWizard(); }
      if (a === 'estate-mine') { closeAllSheets({ silent: true }); estate?.openMine(); }
      if (a === 'estate-favs') { closeAllSheets({ silent: true }); estate?.openFavs(); }
      if (a === 'install' && S.installPrompt) { S.installPrompt.prompt(); try { await S.installPrompt.userChoice; } catch { /* ignore */ } S.installPrompt = null; closeSheet(); }
    },
  });
}

function openPlaces() {
  const p = places();
  const rows = [];
  const add = (key, label, ico, item) => rows.push(`<div class="item"><span class="item-ico">${icon(ico)}</span><span class="item-main"><div class="item-name">${esc(label)}</div><div class="item-sub">${esc(item ? item.name : 'مو محدد')}</div></span>${item ? `<button class="icon-btn sm" data-del="${key}" aria-label="حذف">${icon('i-trash')}</button>` : ''}</div>`);
  add('home', 'البيت', 'i-home', p.home);
  add('work', 'الشغل', 'i-work', p.work);
  (p.favs || []).forEach((f, i) => add(`fav:${i}`, f.name, 'i-star-f', f));
  openSheet('places', `<h2>أماكني</h2><p class="sub">احفظ أي مكان من زر النجمة ⭐ أو بالضغط المطول على الخريطة.</p>${rows.join('')}`, {
    onRender: (b) => b.onclick = (e) => {
      const k = e.target.closest('[data-del]')?.dataset.del;
      if (!k) return;
      const pp = places();
      if (k.startsWith('fav:')) pp.favs.splice(+k.slice(4), 1); else pp[k] = null;
      savePlaces(pp);
      openPlaces();
    },
  });
}

function openAbout() {
  openSheet('about', `<h2>${APP.name} <small style="font-size:14px;color:var(--muted)">v${APP.version}</small></h2>
    <p>تطبيق ملاحة عراقي: تعليمات صوتية بالعراقي أو الفصحى، إعادة حساب فورية إذا غيّرت الطريق، بلاغات الطريق، وألوان على كيفك.</p>
    <div class="note">الخرائط: © مساهمو OpenStreetMap • OpenMapTiles • OpenFreeMap<br>حساب الطرق: OSRM • البحث: Photon / Nominatim / Overpass</div>
    <div class="note">ملاحظة: التطبيق ما يعرف الازدحام إلا من بلاغات المستخدمين. كل ما زاد عدد المستخدمين، صار أدق.</div>
    <div class="actions"><button class="btn" data-a="clear">${icon('i-trash')}مسح كل بياناتي</button></div>`, {
    onRender: (b) => b.onclick = (e) => {
      if (e.target.closest('[data-a="clear"]')) {
        if (b.dataset.confirm) { store.clearAll(); location.reload(); }
        else { b.dataset.confirm = '1'; e.target.closest('button').textContent = 'متأكد؟ اضغط مرة ثانية'; }
      }
    },
  });
}

function openGpsHelp() {
  openSheet('gpshelp', `<h2>تفعيل الموقع</h2>
    <p class="sub">المتصفح منع الوصول لموقعك. حتى تفعّله:</p>
    <div class="note"><b>أندرويد (كروم):</b> اضغط على القفل 🔒 جنب الرابط ← الأذونات ← الموقع ← سماح.<br><br><b>آيفون:</b> الإعدادات ← الخصوصية ← خدمات الموقع ← Safari ← أثناء الاستخدام.</div>
    <div class="actions"><button class="btn primary" data-a="ok">تمام، جرّب هسه</button></div>`, {
    onRender: (b) => b.onclick = (e) => { if (e.target.closest('[data-a]')) { closeSheet(); gps.stop(); gps.start(); } },
  });
}

function saveSettings() { store.set('settings', S.settings); }

function openSettings() {
  const s = S.settings;
  const sw = (key, label, sub = '') => `<label class="set-row"><span class="set-label">${label}${sub ? `<small>${sub}</small>` : ''}</span><span class="switch"><input type="checkbox" data-k="${key}" ${s[key] ? 'checked' : ''}><span></span></span></label>`;
  const seg = (key, label, opts) => `<div class="set-row"><span class="set-label">${label}</span><span class="seg">${opts.map(([v, t]) => `<button data-seg="${key}" data-v="${v}" class="${s[key] === v ? 'on' : ''}">${t}</button>`).join('')}</span></div>`;
  const themes = Object.entries(THEME_PRESETS).map(([k, t]) => `<span class="theme-opt"><button class="swatch ${s.theme === k && !s.accent ? 'on' : ''}" style="background:${t.accent}" data-theme="${k}" aria-label="${t.name}"></button>${t.name}</span>`).join('');
  const c = uiColors(s);
  const voiceNote = voice.supported ? (voice.hasArabic() ? `صوت عربي متوفر: ${esc(voice.voice?.name || '')}` : '⚠️ ما لكيت صوت عربي بجهازك — نزّل «صوت عربي» من إعدادات تحويل النص إلى كلام') : 'المتصفح ما يدعم النطق';
  openSheet('settings', `<h2>الإعدادات</h2>
    <h3>الألوان</h3>
    <div class="swatches">${themes}
      <span class="theme-opt"><label class="swatch custom ${s.accent ? 'on' : ''}"><input type="color" data-color="accent" value="${c.accent}"></label>لونك</span></div>
    <div class="set-row"><span class="set-label">لون خط الطريق</span><label class="swatch" style="background:${c.route}"><input type="color" data-color="routeColor" value="${c.route}"></label></div>
    ${seg('mode', 'الخريطة', [['auto', 'تلقائي'], ['day', 'نهاري'], ['night', 'ليلي']])}
    ${seg('carIcon', 'شكل السيارة', [['arrow', 'سهم'], ['car', 'سيارة'], ['dot', 'نقطة']])}
    ${sw('tilt', 'منظور مائل ثلاثي الأبعاد', 'أثناء الملاحة')}
    ${sw('globe', 'الكرة الأرضية والسماء', 'تبعّد الخريطة تشوف الأرض كاملة')}
    ${sw('intro', 'افتتاحية الطيران من الفضاء', 'أول ما تفتح التطبيق')}
    ${sw('buildings3d', 'مباني ثلاثية الأبعاد')}
    <h3>الصوت</h3>
    ${sw('voice', 'التعليمات الصوتية', voiceNote)}
    ${seg('dialect', 'اللهجة', [['iraqi', 'عراقي'], ['msa', 'فصحى']])}
    ${sw('chime', 'نغمة قبل التعليمات')}
    <div class="set-row"><span class="set-label">مستوى الصوت</span><input type="range" min="0.2" max="1" step="0.1" value="${s.volume}" data-range="volume" style="width:140px"></div>
    <div class="set-row"><span class="set-label">جرّب الصوت</span><button class="btn sm" data-a="testvoice">${icon('i-vol')}تجربة</button></div>
    <h3>الملاحة</h3>
    ${sw('autoFaster', 'اقتراح طريق أسرع تلقائياً', 'يعتمد على بلاغات الازدحام والحوادث')}
    ${sw('avoidMotorway', 'تجنب الطرق السريعة')}
    <div class="set-row"><span class="set-label">تنبيه السرعة<small>كم/س — اتركه 0 حتى تطفيه</small></span><input class="num-input" type="number" inputmode="numeric" min="0" max="200" step="10" value="${s.speedAlert}" data-num="speedAlert"></div>
    ${sw('batterySaver', 'توفير البطارية', 'تحريك أقل سلاسة شوية')}
    ${seg('digits', 'الأرقام', [['latn', '123'], ['arab', '١٢٣']])}
    <h3>الازدحام المباشر</h3>
    ${sw('showTraffic', 'عرض الازدحام على الشوارع', 'أحمر = واقف، برتقالي = بطيء، أصفر = مزدحم شوية')}
    ${sw('shareTraffic', 'شارك سرعتي حتى أساعد الكل', 'مجهولة تماماً: بدون اسم ولا رقم جهاز، وبس أثناء الملاحة')}
    <h3>البلاغات المشتركة</h3>
    ${sw('shareReports', 'مشاركة البلاغات مع كل المستخدمين', 'مثل ويز: بلاغك يشوفه الكل وبلاغاتهم توصلك')}
    <p class="sub" id="repStatus">${reportStatusText()}</p>
    <p class="sub">متقدم (اختياري): رابط قاعدة Firebase خاصة بيك بدل الخادم المشترك. الشرح بملف README.</p>
    <input class="field" type="url" placeholder="https://your-project-default-rtdb.firebaseio.com" value="${esc(s.firebaseUrl)}" data-text="firebaseUrl">
    <div class="actions"><button class="btn sm" data-a="testfb">فحص رابط Firebase</button><span id="fbStatus" class="sub" style="margin:0;align-self:center"></span></div>
    <div class="actions"><button class="btn primary" data-a="close">تم</button></div>`, {
    onRender: bindSettings,
  });
}

function bindSettings(b) {
  b.addEventListener('change', (e) => {
    const t = e.target;
    if (t.dataset.k) { S.settings[t.dataset.k] = t.checked; applySetting(t.dataset.k); }
    if (t.dataset.color) { S.settings[t.dataset.color] = t.value; applySetting(t.dataset.color); t.closest('.swatch').style.background = t.value; }
    if (t.dataset.num) { S.settings[t.dataset.num] = clamp(parseInt(t.value, 10) || 0, 0, 250); applySetting(t.dataset.num); }
    if (t.dataset.text) { S.settings[t.dataset.text] = t.value.trim(); applySetting(t.dataset.text); }
    if (t.dataset.range) { S.settings[t.dataset.range] = parseFloat(t.value); applySetting(t.dataset.range); }
    saveSettings();
  });
  b.addEventListener('click', async (e) => {
    const segBtn = e.target.closest('[data-seg]');
    if (segBtn) {
      S.settings[segBtn.dataset.seg] = segBtn.dataset.v;
      segBtn.parentElement.querySelectorAll('button').forEach((x) => x.classList.toggle('on', x === segBtn));
      applySetting(segBtn.dataset.seg);
      saveSettings();
      return;
    }
    const th = e.target.closest('[data-theme]');
    if (th) {
      S.settings.theme = th.dataset.theme; S.settings.accent = null; S.settings.routeColor = null;
      saveSettings(); applySetting('theme'); openSettings();
      return;
    }
    const a = e.target.closest('[data-a]')?.dataset.a;
    if (a === 'close') closeSheet();
    if (a === 'testvoice') { voice.unlock(); const was = voice.enabled; voice.enabled = true; voice.speak(`${P().after} ${spokenDistance(300, S.settings.dialect)}، ${instructionFor({ maneuver: { type: 'turn', modifier: 'right' }, name: 'شارع فلسطين' }, S.settings.dialect).text}`, { priority: 3 }); voice.enabled = was; }
    if (a === 'testfb') {
      const st = $('fbStatus');
      st.textContent = 'دا أفحص…';
      const r = await reports.testConnection(S.settings.firebaseUrl);
      st.textContent = r.msg;
      if (r.ok) connectReports();
    }
  });
}

function applySetting(key) {
  const s = S.settings;
  switch (key) {
    case 'theme': case 'accent': case 'routeColor': {
      const c = applyUiTheme(s, S.night);
      mapView.setRouteColor(c.route);
      break;
    }
    case 'mode': updateNight(true); break;
    case 'voice': voice.enabled = s.voice; if (!s.voice) voice.stop(); break;
    case 'chime': voice.chime = s.chime; break;
    case 'volume': voice.volume = s.volume; break;
    case 'dialect': nav?.engine.setDialect(s.dialect); break;
    case 'carIcon': mapView.setCarStyle(s.carIcon); break;
    case 'buildings3d': if (mapView.map) setBuildings3d(mapView.map, s.buildings3d); break;
    case 'digits': setDigits(s.digits); if (nav?.state) renderBanner(nav.state); break;
    case 'firebaseUrl': case 'shareReports': connectReports(); break;
    case 'showTraffic': case 'shareTraffic':
      traffic.connect(s.showTraffic || s.shareTraffic);
      mapView.setTraffic(s.showTraffic ? traffic.geojson() : null);
      break;
    case 'globe': mapView.setGlobe(s.globe); break;
    default:
  }
}

// ================================================================== متفرقات
async function requestWakeLock() {
  try {
    if ('wakeLock' in navigator && document.visibilityState === 'visible') {
      wakeLock = await navigator.wakeLock.request('screen');
      wakeLock.addEventListener?.('release', () => { wakeLock = null; });
    }
  } catch { /* ignore */ }
}
function releaseWakeLock() { try { wakeLock?.release(); } catch { /* ignore */ } wakeLock = null; }

function offerResume() {
  const trip = store.get('activeTrip');
  if (!trip || nav || Date.now() - trip.t > 3 * 3600 * 1000 || !trip.dest?.pos) return;
  showAlert({
    ico: '🧭', color: 'color-mix(in srgb, var(--accent) 18%, var(--bg))',
    title: 'تكمل رحلتك؟', sub: trip.dest.name,
    actions: [{ label: 'كمّل', cls: 'primary', fn: () => previewRoutes(trip.dest) }, { label: 'لا', fn: () => store.del('activeTrip') }],
    timeout: 15000,
  });
}

// للاختبارات والتطوير
window.__salka = { S, get nav() { return nav; }, get estate() { return estate; }, mapView, reports, traffic, probe, TRAFFIC, sim, gps, voice, startNav, endNav, previewRoutes, reroute };

boot().catch((e) => { console.error(e); fatal('صار خطأ غير متوقع. حاول مرة ثانية.'); });
