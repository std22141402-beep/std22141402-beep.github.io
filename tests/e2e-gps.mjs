// اختبار الـGPS داخل كروم: نفس سلوك أندرويد/تطبيق TWA لما تنقطع الإشارة أثناء السياقة
// التشغيل: node tests/e2e-gps.mjs   (ENTRY=dist/index.html للنسخة ذات الملف الواحد)
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import { mockOsrmResponse } from './mock-osrm.js';
import { destination, pointAt, buildLine } from '../js/geo.js';

const require = createRequire(import.meta.url);
const { chromium } = require('/opt/npm-tools/node_modules/playwright');
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ML = fs.readFileSync(path.join(ROOT, 'tests/mock-maplibre.js'), 'utf8');
const ENTRY = process.env.ENTRY || '';
const B = [44.3661, 33.3152];
const DEST = [44.3402, 33.3075];
const STYLE = { version: 8, sources: { o: { type: 'vector', url: 'x' } }, layers: [{ id: 'background', type: 'background', paint: {} }, { id: 'label', type: 'symbol', source: 'o', 'source-layer': 'place', layout: { 'text-field': '{name}', 'text-font': ['Noto Sans Bold'] }, paint: {} }] };
const PHOTON = { features: [{ geometry: { type: 'Point', coordinates: DEST }, properties: { name: 'المنصور مول', osm_key: 'shop', osm_value: 'mall', city: 'بغداد', osm_id: 1, osm_type: 'W' } }] };

/** جيولوكيشن وهمي داخل الصفحة يتصرف مثل أندرويد: «غير متوفر» يوقف المتابعة نهائياً */
const FAKE_GEO = () => {
  const G = { watches: new Map(), id: 0, watchCalls: 0, quickCalls: 0, quick: [], mode: 'normal' };
  window.__geo = G;
  G.emit = (lon, lat, o = {}) => {
    const pos = { coords: { latitude: lat, longitude: lon, accuracy: o.acc ?? 8, speed: o.speed ?? null, heading: o.heading ?? null, altitude: null, altitudeAccuracy: null }, timestamp: o.ts ?? Date.now() };
    for (const w of [...G.watches.values()]) w.ok(pos);
    if (o.quick) { const q = G.quick.splice(0); q.forEach((x) => x.ok(pos)); }
  };
  G.unavailable = () => { const ws = [...G.watches.values()]; G.watches.clear(); ws.forEach((w) => w.err({ code: 2, message: 'Location not available.' })); };
  G.deny = () => { G.mode = 'denied'; [...G.watches.values()].forEach((w) => w.err({ code: 1, message: 'User denied Geolocation' })); };
  const geo = {
    watchPosition(ok, err, opts) { G.watchCalls++; const id = ++G.id; if (G.mode === 'denied') { setTimeout(() => err({ code: 1, message: 'denied' }), 5); return id; } G.watches.set(id, { ok, err, opts }); return id; },
    clearWatch(id) { G.watches.delete(id); },
    getCurrentPosition(ok, err, opts) { G.quickCalls++; if (G.mode === 'denied') { setTimeout(() => err({ code: 1 }), 5); return; } G.quick.push({ ok, err, opts }); },
  };
  Object.defineProperty(navigator, 'geolocation', { value: geo, configurable: true });
  try { sessionStorage.setItem('salka:intro', '1'); } catch { /* ignore */ }
  Object.defineProperty(window, 'speechSynthesis', { value: { speak() {}, cancel() {}, getVoices() { return []; }, addEventListener() {} }, configurable: true });
};

function serve() {
  const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.webmanifest': 'application/manifest+json', '.png': 'image/png', '.svg': 'image/svg+xml' };
  const srv = http.createServer((req, res) => {
    let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
    if (p === '/') p = '/index.html';
    const f = path.join(ROOT, p);
    if (!f.startsWith(ROOT) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { res.writeHead(404); res.end(); return; }
    res.writeHead(200, { 'Content-Type': types[path.extname(f)] || 'application/octet-stream' });
    fs.createReadStream(f).pipe(res);
  });
  return new Promise((r) => srv.listen(0, '127.0.0.1', () => r(srv)));
}

const results = [];
const check = (name, ok, info = '') => { results.push({ name, ok }); console.log(`${ok ? '✅' : '❌'} ${name}${info ? ` — ${info}` : ''}`); };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function waitFor(fn, ms = 8000) { const t0 = Date.now(); while (Date.now() - t0 < ms) { try { if (await fn()) return true; } catch { /* retry */ } await sleep(80); } return false; }

async function newPage(browser, base) {
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, locale: 'ar-IQ', serviceWorkers: 'block' });
  await ctx.addInitScript(FAKE_GEO);
  await ctx.route('**/*', async (route) => {
    const u = new URL(route.request().url());
    const h = u.hostname;
    if (h === '127.0.0.1') return route.continue();
    if (u.pathname.endsWith('maplibre-gl.js')) return route.fulfill({ contentType: 'text/javascript', body: ML });
    if (u.pathname.endsWith('.css') || h === 'fonts.googleapis.com') return route.fulfill({ contentType: 'text/css', body: '' });
    if (u.pathname.includes('rtl-text')) return route.fulfill({ contentType: 'text/javascript', body: '' });
    if (h === 'tiles.openfreemap.org') return route.fulfill({ contentType: 'application/json', body: JSON.stringify(STYLE) });
    if (h === 'photon.komoot.io') return route.fulfill({ contentType: 'application/json', body: JSON.stringify(PHOTON) });
    if (h === 'routing.openstreetmap.de' || h === 'router.project-osrm.org') {
      const pts = u.pathname.split('/driving/')[1].split(';').map((x) => x.split(',').map(Number));
      return route.fulfill({ contentType: 'application/json', body: JSON.stringify(mockOsrmResponse(pts[0], pts[1], u.searchParams.get('alternatives') === 'true')) });
    }
    if (h === 'ntfy.sh') return route.fulfill({ status: 200, headers: { 'Content-Type': 'text/event-stream', 'Access-Control-Allow-Origin': '*' }, body: '' });
    return route.abort();
  });
  const page = await ctx.newPage();
  page.errors = [];
  page.on('pageerror', (e) => page.errors.push(e.message));
  await page.goto(base + ENTRY);
  await waitFor(() => page.evaluate(() => document.getElementById('splash').classList.contains('hidden') && !!window.__salka?.gps));
  // نسرّع المراقب للاختبار (نفس المنطق، أوقات أقصر)
  await page.evaluate(() => Object.assign(window.__salka.gps.cfg, { dogMs: 150, lostMs: 900, staleNavMs: 1500, staleIdleMs: 3000, retryMin: 150, retryMax: 600, offAfterMs: 1500, coarseAfterMs: 800 }));
  return { ctx, page };
}

async function main() {
  const srv = await serve();
  const base = `http://127.0.0.1:${srv.address().port}/`;
  console.log('ENTRY:', ENTRY || 'index.html');
  const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] });

  // ===================================================== 1) أول ما يفتح: ماكو GPS بعد
  const { page } = await newPage(browser, base);
  check('يبدأ يدور على الموقع (مؤشر على زر موقعي)', await page.evaluate(() => document.getElementById('btnLocate').classList.contains('gps-searching')));
  check('يطلب قراءة سريعة تقريبية + متابعة دقيقة', await page.evaluate(() => window.__geo.quickCalls >= 1 && window.__geo.watchCalls >= 1 && [...window.__geo.watches.values()][0].opts.enableHighAccuracy === true));
  // يختار وجهة قبل ما يتحدد موقعه: لازم ينتظر بدل ما يفشل
  await page.click('#searchInput');
  await page.fill('#searchInput', 'المنصور');
  await waitFor(() => page.evaluate(() => document.querySelectorAll('#searchResults .item').length > 0));
  await page.click('#searchResults .item');
  check('المعاينة تنتظر الموقع بدل «فشل تحديد الموقع»', await waitFor(() => page.evaluate(() => document.getElementById('sheetBody').textContent.includes('دا أحدد موقعك'))));
  await sleep(700);
  await page.evaluate((b) => window.__geo.emit(b[0], b[1], { acc: 30, quick: true }), B);   // الشبكة أول شي
  check('أول ما يوصل الموقع يحسب الطرق تلقائياً', await waitFor(() => page.evaluate(() => document.querySelectorAll('.route-opt').length >= 1)));
  check('المؤشر يختفي بعد تحديد الموقع', await page.evaluate(() => !document.getElementById('btnLocate').classList.contains('gps-searching')));

  // ===================================================== 2) أثناء الملاحة تنقطع الإشارة
  await page.click('[data-a="go"]');
  await waitFor(() => page.evaluate(() => document.body.classList.contains('navigating')));
  const coords = await page.evaluate(() => window.__salka.nav.route.coords);
  const line = buildLine(coords);
  let along = 0, tsBase = Date.now();
  const drive = async (n, emit = true) => {
    for (let i = 0; i < n; i++) {
      along += 12;
      const p = pointAt(line, along);
      if (emit) await page.evaluate(({ p, h }) => window.__geo.emit(p[0], p[1], { acc: 8, speed: 12, heading: h }), { p: p.point, h: p.bearing });
      await sleep(250);
    }
  };
  await drive(6);
  const a1 = await page.evaluate(() => window.__salka.nav.state.along);
  check('الملاحة ماشية مع القراءات', a1 > 30, `along=${Math.round(a1)}`);
  const wc = await page.evaluate(() => window.__geo.watchCalls);
  await page.evaluate(() => window.__geo.unavailable());          // أندرويد: «Location not available» ويوقف
  await drive(5, false);                                           // السيارة ماشية والإشارة مقطوعة
  check('يعيد تشغيل الـGPS وحده بعد الانقطاع', await waitFor(() => page.evaluate((w) => window.__geo.watchCalls > w && window.__geo.watches.size === 1, wc), 3000));
  check('يبين «الإشارة انقطعت — أكمل بالتقدير»', await waitFor(() => page.evaluate(() => !document.getElementById('navStatus').classList.contains('hidden') && document.getElementById('navStatus').textContent.includes('انقطعت')), 3000));
  const dispBefore = await page.evaluate(() => window.__salka.nav.display.along);
  await sleep(600);
  const dispAfter = await page.evaluate(() => window.__salka.nav.display.along);
  check('السيارة تكمل على الطريق بالتقدير (ما توكف)', dispAfter > dispBefore + 1, `${Math.round(dispBefore)} → ${Math.round(dispAfter)}`);
  await drive(4);                                                  // الإشارة رجعت
  const a2 = await page.evaluate(() => window.__salka.nav.state.along);
  check('القراءات رجعت والملاحة كملت', a2 > a1 + 60, `along ${Math.round(a1)} → ${Math.round(a2)}`);
  check('التنبيه اختفى لما رجعت الإشارة', await waitFor(() => page.evaluate(() => document.getElementById('navStatus').classList.contains('hidden')), 2000));
  check('ما صار إعادة حساب بالغلط بسبب الانقطاع', await page.evaluate(() => !window.__salka.nav.rerouting));

  // ===================================================== 3) توقف بدون أي خطأ (أندرويد يسكت)
  const wc2 = await page.evaluate(() => window.__geo.watchCalls);
  await page.evaluate(() => window.__geo.watches.clear());
  check('المراقب يعيد التشغيل إذا القراءات وكفت بصمت', await waitFor(() => page.evaluate((w) => window.__geo.watchCalls > w, wc2), 4000));
  await drive(3);
  check('الملاحة كملت بعد إعادة التشغيل الصامتة', await page.evaluate((a) => window.__salka.nav.state.along > a, a2));

  // ===================================================== 4) الرجوع للتطبيق بعد ما طلع منه
  const wc3 = await page.evaluate(() => window.__geo.watchCalls);
  await page.evaluate(() => { window.__salka.gps.lastRecv = Date.now() - 10000; document.dispatchEvent(new Event('visibilitychange')); });
  check('لما يرجع للتطبيق يعيد تشغيل الموقع فوراً', await waitFor(() => page.evaluate((w) => window.__geo.watchCalls > w, wc3), 1500));
  await page.click('#btnEndNav').catch(() => {});
  check('لا أخطاء جافاسكربت', page.errors.length === 0, page.errors.slice(0, 2).join(' | '));

  // ===================================================== 5) الصلاحية مرفوضة
  const D = await newPage(browser, base);
  await D.page.evaluate(() => window.__geo.deny());
  check('الصلاحية المرفوضة: علامة حمرة على زر موقعي', await waitFor(() => D.page.evaluate(() => document.getElementById('btnLocate').classList.contains('gps-bad'))));
  await D.page.click('#btnLocate');
  check('الصلاحية المرفوضة: شرح التفعيل خطوة بخطوة', await waitFor(() => D.page.evaluate(() => document.getElementById('sheet').dataset.name === 'gpshelp' && document.getElementById('sheetBody').textContent.includes('الموقع الدقيق'))));

  // ===================================================== 6) الموقع مطفي بالموبايل
  const O = await newPage(browser, base);
  for (let i = 0; i < 10 && !(await O.page.evaluate(() => window.__salka.gps.state === 'off')); i++) { await O.page.evaluate(() => window.__geo.unavailable()); await sleep(250); }
  check('الموقع مطفي: يكتشفه ويشرح شلون يشغّله', await O.page.evaluate(() => window.__salka.gps.state === 'off' && document.getElementById('btnLocate').classList.contains('gps-bad')));
  await O.page.click('#btnLocate');
  check('الموقع مطفي: لوحة «اسحب من فوك وشغّل الموقع»', await waitFor(() => O.page.evaluate(() => document.getElementById('sheetBody').textContent.includes('الموقع مطفي'))));
  await O.page.evaluate((b) => window.__geo.emit(b[0], b[1], { acc: 8 }), B);
  check('أول ما يشتغل الموقع يرجع طبيعي', await waitFor(() => O.page.evaluate(() => window.__salka.gps.state === 'ok' && !document.getElementById('btnLocate').classList.contains('gps-bad'))));

  // ===================================================== 7) الموقع التقريبي
  const C = await newPage(browser, base);
  await C.page.evaluate((b) => window.__geo.emit(b[0], b[1], { acc: 2200 }), B);
  await sleep(1000);
  await C.page.evaluate((b) => window.__geo.emit(b[0] + 0.001, b[1], { acc: 2200 }), B);
  check('الموقع التقريبي: يكتشفه وينبه', await waitFor(() => C.page.evaluate(() => window.__salka.gps.state === 'coarse' && document.getElementById('btnLocate').classList.contains('gps-weak'))));

  const errs = [...D.page.errors, ...O.page.errors, ...C.page.errors];
  check('لا أخطاء جافاسكربت (الحالات الخاصة)', errs.length === 0, errs.slice(0, 2).join(' | '));
  await browser.close();
  srv.close();
  const failed = results.filter((r) => !r.ok);
  console.log(`\n${results.length - failed.length}/${results.length} نجحت`);
  process.exit(failed.length ? 1 : 0);
}

main().catch((e) => { console.error(e); process.exit(2); });
