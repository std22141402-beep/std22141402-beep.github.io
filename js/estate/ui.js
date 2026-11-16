// =====================================================================
//  estate/ui.js — سوق العقارات على الخريطة
//  تصفح بالسعر على الخريطة • رسم حدود القطعة • نشر بخطوات • تفاصيل ذكية
// =====================================================================
import { ESTATE, GEOCODERS } from '../config.js';
import { haversine, bboxOf } from '../geo.js';
import { store } from '../storage.js';
import { polygonArea, sideLengths, perimeter, centroid, selfIntersects, rectangle, approxDims, geohashCover, nearestSegmentBearing, openRing } from './shape.js';
import {
  DEALS, KINDS, PRICE_TYPES, DEEDS, FACADES, AGES, LISTERS, WATER_SRC, FEATURES, DUNAM,
  fieldsFor, featuresFor, priceTypesFor, fmtPrice, fmtArea, totalPrice, pricePerM2, autoTitle,
  normalizePhone, displayPhone, validateListing, DEFAULT_FILTER, matches, sortListings, areaComparison, isActive,
} from './model.js';
import { makeBackend, EstateError } from './backend.js';
import { compressPhoto } from './photos.js';

const EMPTY = { type: 'FeatureCollection', features: [] };
const SAT_URL = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
const flat2ring = (f) => { const r = []; for (let i = 0; i + 1 < f.length; i += 2) r.push([f[i], f[i + 1]]); return r; };
const ring2flat = (r) => openRing(r).flatMap(([x, y]) => [Math.round(x * 1e6) / 1e6, Math.round(y * 1e6) / 1e6]);
const timeAgoAr = (t) => {
  const m = Math.max(0, Math.round((Date.now() - t) / 60000));
  if (m < 60) return m < 2 ? 'هسه' : `قبل ${m} دقيقة`;
  const h = Math.round(m / 60); if (h < 24) return `قبل ${h} ساعة`;
  const d = Math.round(h / 24); return d < 30 ? `قبل ${d} يوم` : `قبل ${Math.round(d / 30)} شهر`;
};
const fmtM = (m) => (m < 1000 ? `${Math.round(m)} م` : `${(m / 1000).toFixed(1)} كم`);
const num = (s) => { const n = parseFloat(String(s ?? '').replace(/[٠-٩]/g, (d) => '٠١٢٣٤٥٦٧٨٩'.indexOf(d)).replace(/[,،\s]/g, '')); return Number.isFinite(n) ? n : 0; };

export class EstateUI {
  /** @param {object} ctx أدوات التطبيق الرئيسي */
  constructor(ctx) {
    this.ctx = ctx;
    this.backend = makeBackend();
    this.active = false;
    this.listings = new Map();
    this.cells = new Map();
    this.filter = { ...DEFAULT_FILTER, ...(store.get('reFilter') || {}) };
    this.favs = new Set(store.get('reFavs', []));
    this.thumbs = new Map();
    this.sel = null;
    this.draw = null;
    this.wiz = null;
    this.layersReady = false;
    this._loadT = null;
    this._lastClickT = 0;
  }

  get map() { return this.ctx.mapView.map; }
  get mode() { return this.backend.mode; }

  // =================================================================
  //  الدخول والخروج من وضع العقارات
  // =================================================================
  enter({ silent = false } = {}) {
    if (this.ctx.isNavigating()) { this.ctx.toast('أوقف الملاحة أولاً حتى تفتح العقارات'); return; }
    if (!this.active) {
      this.active = true;
      this._ensureLayers();
      this._buildUi();
      this._setVisible(true);
      document.body.classList.add('estate');
      this.ctx.ensureHist();
      this._onMove = () => this._scheduleLoad();
      this.map.on('moveend', this._onMove);
      if (this.map.getZoom() < 12.5) this.map.easeTo({ zoom: 13, duration: 700 });
      if (!silent && this.mode === 'local' && !store.get('reLocalNote')) {
        store.set('reLocalNote', 1);
        setTimeout(() => this.ctx.toast('🏡 العقارات بوضع تجريبي على جهازك — تصير مشتركة للكل أول ما تنربط قاعدة البيانات', 5000), 800);
      }
    }
    this._renderBar();
    this._scheduleLoad(0);
  }

  exit() {
    if (!this.active) return;
    if (this.draw) this._endDraw(true);
    this.active = false;
    this.sel = null;
    this.map.off('moveend', this._onMove);
    this._setVisible(false);
    document.body.classList.remove('estate');
    this.ui?.root.remove();
    this.ui = null;
  }

  /** زر الرجوع: يرجع خطوة داخل العقارات */
  back() {
    if (this.draw) { this._endDraw(true); this._wizardStep(1); return true; }
    if (this.active) { this.exit(); return true; }
    return false;
  }

  // =================================================================
  //  طبقات الخريطة
  // =================================================================
  _font() {
    const layers = this.map.getStyle()?.layers || [];
    const fonts = layers.map((l) => l.layout?.['text-font']).filter((f) => Array.isArray(f) && f.every((x) => typeof x === 'string'));
    return fonts.find((f) => f.some((x) => /bold/i.test(x))) || fonts[0] || ['Noto Sans Bold'];
  }

  _pillImage(fill, stroke) {
    const w = 48, h = 40, r = 18;
    const c = document.createElement('canvas'); c.width = w; c.height = h;
    const g = c.getContext('2d');
    g.beginPath();
    g.moveTo(r + 2, 2); g.lineTo(w - r - 2, 2); g.arc(w - r - 2, h / 2, r, -Math.PI / 2, Math.PI / 2); g.lineTo(r + 2, h - 2); g.arc(r + 2, h / 2, r, Math.PI / 2, -Math.PI / 2); g.closePath();
    g.fillStyle = fill; g.fill();
    g.lineWidth = 3; g.strokeStyle = stroke; g.stroke();
    const d = g.getImageData(0, 0, w, h);
    return { width: w, height: h, data: new Uint8Array(d.data.buffer) };
  }

  _ensureLayers() {
    if (this.layersReady) return;
    const map = this.map;
    const opt = { pixelRatio: 2, stretchX: [[20, 28]], stretchY: [[18, 22]], content: [14, 6, 34, 34] };
    const imgs = { 'pill-sale': ['#E2B84A', '#FFF4CC'], 'pill-rent': ['#3FD0FF', '#D9F6FF'], 'pill-sel': ['#0E1A30', '#F2CF6B'] };
    for (const [k, [f, s]] of Object.entries(imgs)) { try { if (!map.hasImage?.(k)) map.addImage(k, this._pillImage(f, s), opt); } catch (e) { console.warn(e); } }
    const before = (map.getStyle().layers || []).find((l) => l.type === 'symbol')?.id;
    const font = this._font();
    const dealColor = ['match', ['get', 'd'], 'rent', '#3FD0FF', '#E2B84A'];
    map.addSource('re-polys', { type: 'geojson', data: EMPTY });
    map.addSource('re-pts', { type: 'geojson', data: EMPTY, cluster: true, clusterRadius: 52, clusterMaxZoom: 13 });
    map.addSource('re-draw', { type: 'geojson', data: EMPTY });
    map.addLayer({ id: 're-fill', type: 'fill', source: 're-polys', minzoom: 12.5, paint: { 'fill-color': dealColor, 'fill-opacity': ['case', ['boolean', ['get', 'sel'], false], 0.38, 0.16] } }, before);
    map.addLayer({ id: 're-line', type: 'line', source: 're-polys', minzoom: 12.5, layout: { 'line-join': 'round' }, paint: { 'line-color': dealColor, 'line-width': ['case', ['boolean', ['get', 'sel'], false], 3.5, 1.8] } }, before);
    map.addLayer({ id: 're-draw-fill', type: 'fill', source: 're-draw', paint: { 'fill-color': '#F2CF6B', 'fill-opacity': 0.28 } }, before);
    map.addLayer({ id: 're-draw-casing', type: 'line', source: 're-draw', layout: { 'line-join': 'round', 'line-cap': 'round' }, paint: { 'line-color': '#0E1A30', 'line-width': 6, 'line-opacity': 0.55 } }, before);
    map.addLayer({ id: 're-draw-line', type: 'line', source: 're-draw', layout: { 'line-join': 'round', 'line-cap': 'round' }, paint: { 'line-color': '#F2CF6B', 'line-width': 3 } }, before);
    map.addLayer({ id: 're-clusters', type: 'circle', source: 're-pts', filter: ['has', 'point_count'], paint: { 'circle-color': '#0E1A30', 'circle-opacity': 0.92, 'circle-stroke-color': '#E2B84A', 'circle-stroke-width': 2.5, 'circle-radius': ['step', ['get', 'point_count'], 17, 10, 22, 50, 28] } });
    map.addLayer({ id: 're-cluster-count', type: 'symbol', source: 're-pts', filter: ['has', 'point_count'], layout: { 'text-field': ['to-string', ['get', 'point_count']], 'text-font': font, 'text-size': 14, 'text-allow-overlap': true }, paint: { 'text-color': '#F2CF6B' } });
    map.addLayer({
      id: 're-pills', type: 'symbol', source: 're-pts', filter: ['!', ['has', 'point_count']],
      layout: {
        'icon-image': ['case', ['boolean', ['get', 'sel'], false], 'pill-sel', ['match', ['get', 'd'], 'rent', 'pill-rent', 'pill-sale']],
        'icon-text-fit': 'both', 'icon-text-fit-padding': [3, 9, 3, 9],
        'text-field': ['get', 'lb'], 'text-font': font, 'text-size': 13,
        'symbol-sort-key': ['get', 'sk'], 'icon-allow-overlap': false, 'text-allow-overlap': false,
      },
      paint: { 'text-color': ['case', ['boolean', ['get', 'sel'], false], '#F2CF6B', ['match', ['get', 'd'], 'rent', '#06202B', '#10151E']] },
    });
    this.layersReady = true;
    this._setVisible(false);
  }

  _setVisible(on) {
    if (!this.layersReady) return;
    for (const id of ['re-fill', 're-line', 're-clusters', 're-cluster-count', 're-pills']) {
      try { this.map.setLayoutProperty(id, 'visibility', on ? 'visible' : 'none'); } catch { /* ignore */ }
    }
  }

  /** نقرة على الخريطة — ترجع true إذا العقارات استهلكتها */
  handleClick(ll, point) {
    if (this.draw) { this._drawTap(ll, point); return true; }
    if (!this.active || !point) return false;
    let fs = [];
    try { fs = this.map.queryRenderedFeatures(point, { layers: ['re-pills', 're-clusters', 're-fill'] }); } catch { fs = []; }
    const f = fs[0];
    if (!f) { if (this.sel) this.select(null); return true; }
    if (f.properties.point_count) {
      const src = this.map.getSource('re-pts');
      const go = (z) => this.map.easeTo({ center: f.geometry.coordinates, zoom: Math.min(17, (z || this.map.getZoom() + 2) + 0.3), duration: 600 });
      try { const r = src.getClusterExpansionZoom(f.properties.cluster_id, (err, z) => { if (!err) go(z); }); if (r?.then) r.then(go).catch(() => go()); } catch { go(); }
      return true;
    }
    const id = f.properties.id;
    if (id) this.open(id);
    return true;
  }

  // =================================================================
  //  التحميل حسب المنطقة الظاهرة
  // =================================================================
  _scheduleLoad(delay = 350) {
    clearTimeout(this._loadT);
    this._loadT = setTimeout(() => this.load(), delay);
  }

  async load(force = false) {
    if (!this.active || this.draw) return;
    const z = this.map.getZoom();
    this.ui?.hint.classList.toggle('hidden', z >= ESTATE.minZoomLoad);
    if (z < ESTATE.minZoomLoad) { this.render(); return; }
    const b = this.map.getBounds ? this.map.getBounds() : null;
    const c = this.map.getCenter();
    const bbox = b ? [b.getWest(), b.getSouth(), b.getEast(), b.getNorth()] : [c.lng - 0.05, c.lat - 0.04, c.lng + 0.05, c.lat + 0.04];
    const cells = geohashCover(bbox, z >= 13 ? 5 : 4, 12);
    const todo = cells.filter((h) => force || !this.cells.has(h) || Date.now() - this.cells.get(h) > 90000);
    if (todo.length) {
      this.ui?.count.classList.add('loading');
      try {
        const res = await this.backend.query(todo);
        for (const [id, l] of res) this.listings.set(id, l);
        // حذف اللي انشالت من هذي المربعات
        for (const [id, l] of this.listings) if (todo.some((h) => (l.g || '').startsWith(h)) && !res.has(id)) this.listings.delete(id);
        const now = Date.now();
        for (const h of todo) this.cells.set(h, now);
      } catch (e) {
        this.ctx.toast(e instanceof EstateError ? e.message : 'تعذر تحميل العقارات. تأكد من الانترنت');
      } finally {
        this.ui?.count.classList.remove('loading');
      }
    }
    this.render();
  }

  visible() {
    let bbox = null;
    try { const b = this.map.getBounds(); bbox = [b.getWest(), b.getSouth(), b.getEast(), b.getNorth()]; } catch { bbox = null; }
    const all = [...this.listings.values()].filter((l) => matches(l, this.filter));
    const inView = bbox ? all.filter((l) => l.x >= bbox[0] && l.x <= bbox[2] && l.y >= bbox[1] && l.y <= bbox[3]) : all;
    return { all, inView };
  }

  render() {
    if (!this.layersReady) return;
    const { all, inView } = this.visible();
    const pts = [], polys = [];
    for (const l of all) {
      const sel = this.sel === l.id;
      const props = { id: l.id, d: l.d, lb: fmtPrice(l.p, l.c, l.pt, { short: true }), sel, sk: sel ? 0 : 1 };
      pts.push({ type: 'Feature', properties: props, geometry: { type: 'Point', coordinates: [l.x, l.y] } });
      if (Array.isArray(l.poly) && l.poly.length >= 6) {
        const ring = flat2ring(l.poly);
        polys.push({ type: 'Feature', properties: { id: l.id, d: l.d, sel }, geometry: { type: 'Polygon', coordinates: [[...ring, ring[0]]] } });
      }
    }
    this.map.getSource('re-pts')?.setData({ type: 'FeatureCollection', features: pts });
    this.map.getSource('re-polys')?.setData({ type: 'FeatureCollection', features: polys });
    this._renderCards(inView);
  }

  // =================================================================
  //  واجهة الوضع: شريط الفلاتر + البطاقات + زر الإضافة
  // =================================================================
  _buildUi() {
    const root = document.createElement('div');
    root.className = 're-root';
    root.innerHTML = `
      <div class="re-bar" id="reBar"></div>
      <div class="re-hint hidden" id="reHint">🔍 قرّب على الخريطة حتى تشوف العقارات</div>
      <div class="re-bottom">
        <div class="re-row">
          <button class="re-count" id="reCount" aria-label="القائمة"></button>
          <button class="re-add" id="reAdd">＋ أضف عقارك</button>
        </div>
        <div class="re-cards" id="reCards"></div>
      </div>`;
    document.body.appendChild(root);
    this.ui = { root, bar: root.querySelector('#reBar'), hint: root.querySelector('#reHint'), count: root.querySelector('#reCount'), cards: root.querySelector('#reCards'), add: root.querySelector('#reAdd') };
    this.ui.add.onclick = () => this.startWizard();
    this.ui.count.onclick = () => this.openList();
    this.ui.bar.addEventListener('click', (e) => this._onBar(e));
    this.ui.cards.addEventListener('click', (e) => {
      const c = e.target.closest('[data-id]');
      if (c) this.open(c.dataset.id, { fly: true });
    });
    this._io = 'IntersectionObserver' in window ? new IntersectionObserver((ents) => {
      for (const en of ents) if (en.isIntersecting) { this._loadThumb(en.target); this._io.unobserve(en.target); }
    }, { root: this.ui.cards, rootMargin: '0px 200px' }) : null;
  }

  _renderBar() {
    if (!this.ui) return;
    const f = this.filter;
    const kinds = Object.entries(KINDS).map(([k, v]) => `<button class="chip ${f.kinds.includes(k) ? 'on' : ''}" data-kind="${k}">${v.icon} ${v.label}</button>`).join('');
    const nf = (f.pmin || f.pmax ? 1 : 0) + (f.amin || f.amax ? 1 : 0) + (f.brmin ? 1 : 0) + f.deeds.length + f.feats.length + (f.ownerOnly ? 1 : 0);
    this.ui.bar.innerHTML = `
      <button class="re-x" data-act="exit" aria-label="خروج من العقارات">✕</button>
      <span class="seg re-deal"><button data-deal="sale" class="${f.d === 'sale' ? 'on' : ''}">بيع</button><button data-deal="rent" class="${f.d === 'rent' ? 'on' : ''}">إيجار</button></span>
      <button class="chip re-filter ${nf ? 'on' : ''}" data-act="filters">⚙️ فلاتر${nf ? ` (${nf})` : ''}</button>
      ${kinds}`;
  }

  _onBar(e) {
    const t = e.target.closest('button');
    if (!t) return;
    if (t.dataset.act === 'exit') { this.exit(); return; }
    if (t.dataset.act === 'filters') { this.openFilters(); return; }
    if (t.dataset.deal) { this.filter.d = t.dataset.deal; this.filter.pmin = this.filter.pmax = 0; }
    if (t.dataset.kind) {
      const k = t.dataset.kind; const i = this.filter.kinds.indexOf(k);
      if (i >= 0) this.filter.kinds.splice(i, 1); else this.filter.kinds.push(k);
    }
    store.set('reFilter', this.filter);
    this._renderBar();
    this.render();
  }

  _card(l) {
    const facts = [l.a > 0 ? fmtArea(l.a, l.k) : '', l.br ? `${l.br} غرف` : '', l.de ? DEEDS[l.de]?.split(' (')[0] : ''].filter(Boolean).join(' • ');
    const me = this.ctx.me();
    const dm = me ? haversine(me, [l.x, l.y]) : 0;
    const dist = dm >= 60 ? ` • ${fmtM(dm)}` : '';
    return `<button class="re-card ${this.sel === l.id ? 'sel' : ''}" data-id="${l.id}">
      <span class="re-thumb" data-thumb="${l.id}">${KINDS[l.k]?.icon || '🏠'}</span>
      <span class="re-card-body">
        <span class="re-price ${l.d}">${fmtPrice(l.p, l.c, l.pt)}</span>
        <span class="re-title">${this.ctx.esc(l.ti || autoTitle(l))}</span>
        <span class="re-facts">${this.ctx.esc(facts)}${dist}</span>
      </span>
      ${this.favs.has(l.id) ? '<span class="re-fav">❤</span>' : ''}
    </button>`;
  }

  _renderCards(inView) {
    if (!this.ui) return;
    const sorted = sortListings(inView, this.filter.sort, this.ctx.me());
    this.ui.count.innerHTML = `<b>${sorted.length}</b> ${this.filter.d === 'sale' ? 'للبيع' : 'للإيجار'} هنا ▾`;
    const list = sorted.slice(0, 60);
    this.ui.cards.innerHTML = list.length ? list.map((l) => this._card(l)).join('') : `<div class="re-empty">${this.listings.size ? 'ماكو عقارات تطابق الفلتر بهذي المنطقة' : 'ماكو عقارات بعد بهذي المنطقة — كون أول واحد ينشر 🌟'}</div>`;
    this.ui.cards.querySelectorAll('[data-thumb]').forEach((el) => { if (this._io) this._io.observe(el); else this._loadThumb(el); });
  }

  async _loadThumb(el) {
    const id = el.dataset.thumb;
    if (!this.listings.get(id)?.nph) return;
    try {
      let t = this.thumbs.get(id);
      if (t === undefined) { t = await this.backend.thumb(id); this.thumbs.set(id, t || null); }
      if (t) { el.style.backgroundImage = `url("${t}")`; el.textContent = ''; el.classList.add('has-img'); }
    } catch { /* ignore */ }
  }

  select(id, { fly = false } = {}) {
    this.sel = id;
    this.render();
    if (id && fly) {
      const l = this.listings.get(id);
      if (l) {
        if (l.poly?.length >= 6) this.ctx.mapView.fitBounds(bboxOf(flat2ring(l.poly)), { top: 140, bottom: Math.round(window.innerHeight * 0.55), left: 40, right: 40 }, { duration: 700 });
        else this.map.easeTo({ center: [l.x, l.y], zoom: Math.max(this.map.getZoom(), 16), duration: 700, padding: { top: 0, bottom: Math.round(window.innerHeight * 0.4), left: 0, right: 0 } });
      }
    }
    if (id) this.ui?.cards.querySelector(`[data-id="${id}"]`)?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }

  // =================================================================
  //  القائمة والفلاتر
  // =================================================================
  openList() {
    const { inView } = this.visible();
    const sorted = sortListings(inView, this.filter.sort, this.ctx.me());
    const sorts = [['new', 'الأحدث'], ['cheap', 'الأرخص'], ['expensive', 'الأغلى'], ['big', 'الأكبر'], ['near', 'الأقرب']];
    this.ctx.openSheet('re-list', `<h2>${sorted.length} عقار ${this.filter.d === 'sale' ? 'للبيع' : 'للإيجار'}</h2>
      <div class="seg" style="margin:6px 0 10px">${sorts.map(([k, t]) => `<button data-sort="${k}" class="${this.filter.sort === k ? 'on' : ''}">${t}</button>`).join('')}</div>
      <div class="re-list">${sorted.slice(0, 200).map((l) => this._card(l)).join('') || '<div class="empty">ماكو نتائج</div>'}</div>`, {
      onRender: (b) => {
        b.querySelectorAll('[data-thumb]').forEach((el) => this._loadThumb(el));
        b.onclick = (e) => {
          const s = e.target.closest('[data-sort]');
          if (s) { this.filter.sort = s.dataset.sort; store.set('reFilter', this.filter); this.render(); this.openList(); return; }
          const c = e.target.closest('[data-id]');
          if (c) { this.ctx.closeSheet({ silent: true }); this.open(c.dataset.id, { fly: true }); }
        };
      },
    });
  }

  openFilters() {
    const f = this.filter;
    const chips = (obj, sel, key) => Object.entries(obj).map(([k, v]) => `<button class="chip ${sel.includes(k) ? 'on' : ''}" data-${key}="${k}">${Array.isArray(v) ? `${v[1]} ${v[0]}` : v.split(' (')[0]}</button>`).join('');
    const allFeats = [...new Set((f.kinds.length ? f.kinds : Object.keys(KINDS)).flatMap((k) => featuresFor(k)))];
    const featObj = Object.fromEntries(allFeats.map((k) => [k, FEATURES[k]]));
    this.ctx.openSheet('re-filters', `<h2>الفلاتر</h2>
      <h3>السعر</h3>
      <div class="row"><span class="seg"><button data-cur="IQD" class="${f.cur === 'IQD' ? 'on' : ''}">دينار</button><button data-cur="USD" class="${f.cur === 'USD' ? 'on' : ''}">دولار</button></span></div>
      <div class="row" style="margin-top:8px"><input class="field num" inputmode="numeric" placeholder="من" data-k="pmin" value="${f.pmin || ''}"><input class="field num" inputmode="numeric" placeholder="إلى" data-k="pmax" value="${f.pmax || ''}"></div>
      <p class="sub" id="reFP"></p>
      <h3>المساحة (م²)</h3>
      <div class="row"><input class="field num" inputmode="numeric" placeholder="من" data-k="amin" value="${f.amin || ''}"><input class="field num" inputmode="numeric" placeholder="إلى" data-k="amax" value="${f.amax || ''}"></div>
      <h3>غرف النوم (على الأقل)</h3>
      <span class="seg">${[0, 1, 2, 3, 4, 5].map((n) => `<button data-br="${n}" class="${f.brmin === n ? 'on' : ''}">${n ? `${n}+` : 'الكل'}</button>`).join('')}</span>
      ${f.d === 'sale' ? `<h3>نوع السند</h3><div class="chips wrap">${chips(DEEDS, f.deeds, 'deed')}</div>` : ''}
      <h3>لازم يكون بيه</h3><div class="chips wrap">${chips(featObj, f.feats, 'feat')}</div>
      <label class="set-row"><span class="set-label">من المالك مباشرة (بدون دلال)</span><span class="switch"><input type="checkbox" data-owner ${f.ownerOnly ? 'checked' : ''}><span></span></span></label>
      <div class="actions"><button class="btn" data-act="reset">تصفير</button><button class="btn primary" data-act="apply">عرض النتائج</button></div>`, {
      onRender: (b) => {
        const fp = () => { const el = b.querySelector('#reFP'); if (el) el.textContent = [f.pmin ? `من ${fmtPrice(f.pmin, f.cur)}` : '', f.pmax ? `إلى ${fmtPrice(f.pmax, f.cur)}` : ''].filter(Boolean).join(' '); };
        fp();
        b.addEventListener('input', (e) => { const k = e.target.dataset.k; if (k) { f[k] = num(e.target.value); fp(); } });
        b.addEventListener('change', (e) => { if (e.target.dataset.owner !== undefined) f.ownerOnly = e.target.checked; });
        b.onclick = (e) => {
          const t = e.target.closest('button'); if (!t) return;
          const tog = (arr, v) => { const i = arr.indexOf(v); if (i >= 0) arr.splice(i, 1); else arr.push(v); t.classList.toggle('on'); };
          if (t.dataset.cur) { f.cur = t.dataset.cur; t.parentElement.querySelectorAll('button').forEach((x) => x.classList.toggle('on', x === t)); fp(); }
          if (t.dataset.br !== undefined) { f.brmin = +t.dataset.br; t.parentElement.querySelectorAll('button').forEach((x) => x.classList.toggle('on', x === t)); }
          if (t.dataset.deed) tog(f.deeds, t.dataset.deed);
          if (t.dataset.feat) tog(f.feats, t.dataset.feat);
          if (t.dataset.act === 'reset') { this.filter = { ...DEFAULT_FILTER, d: f.d }; store.set('reFilter', this.filter); this._renderBar(); this.render(); this.ctx.closeSheet(); }
          if (t.dataset.act === 'apply') { store.set('reFilter', f); this._renderBar(); this.render(); this.ctx.closeSheet(); }
        };
      },
    });
  }

  // =================================================================
  //  تفاصيل الإعلان
  // =================================================================
  async open(id, { fly = false } = {}) {
    let l = this.listings.get(id);
    if (!l) {
      try { l = await this.backend.get(id); } catch { l = null; }
      if (!l || !isActive(l)) { this.ctx.toast('هذا الإعلان انشال أو انتهى'); return; }
      this.listings.set(id, l);
      if (!this.active) this.enter({ silent: true });
      fly = true;
    }
    this.select(id, { fly });
    const me = this.ctx.me();
    const myUid = await this.backend.uid().catch(() => null);
    const mine = l.u && l.u === myUid;
    const cmp = areaComparison(l, [...this.listings.values()]);
    const ppm = pricePerM2(l);
    const F = fieldsFor(l.k, l.d);
    const fact = (ic, label, val) => (val || val === 0 ? `<div class="re-fact"><span>${ic}</span><small>${label}</small><b>${this.ctx.esc(String(val))}</b></div>` : '');
    const facts = [
      fact('📐', 'المساحة', l.a > 0 ? `${fmtArea(l.a, l.k)}${KINDS[l.k]?.group === 'agri' && l.a >= DUNAM ? ` (${Math.round(l.a).toLocaleString('en')} م²)` : ''}` : ''),
      F.has('fw') && l.fw && l.dp ? fact('↔️', 'واجهة × نزال', `${l.fw} × ${l.dp} م`) : '',
      fact('🏢', 'الطوابق', l.fl), fact('🔢', 'الطابق', l.flno), fact('🛏️', 'غرف النوم', l.br), fact('🛁', 'الحمامات', l.ba),
      fact('🗓️', 'عمر البناء', AGES[l.ag]), fact('🧭', 'الواجهة', FACADES[l.fa]), fact('🛣️', 'عرض الشارع', l.sw ? `${l.sw} م` : ''),
      fact('👥', 'السعة', l.cap ? `${l.cap} شخص` : ''), fact('💧', 'مصدر الماء', WATER_SRC[l.ws]), fact('🌴', 'عدد الأشجار', l.tr),
      fact('📜', 'السند', DEEDS[l.de]), fact('💰', 'الدفع', l.pay ? (l.pay === 'cash' ? 'كاش' : 'أقساط') : ''), fact('🏦', 'مرهون؟', l.mo === undefined ? '' : l.mo ? 'نعم' : 'لا'),
      fact('🛋️', 'مفروش', l.fu === undefined ? '' : l.fu ? 'نعم' : 'لا'), fact('👨‍👩‍👧', 'للعوائل', l.fam ? 'عوائل فقط' : ''), fact('🔐', 'التأمين', l.dep ? fmtPrice(l.dep, l.c) : ''),
      fact('🎉', 'سعر الويكند', l.wk ? fmtPrice(l.wk, l.c, 'day') : ''),
    ].join('');
    const feats = (l.f || []).filter((k) => FEATURES[k]).map((k) => `<span class="chip on">${FEATURES[k][1]} ${FEATURES[k][0]}</span>`).join('');
    const badges = [`<span class="badge ${l.d}">${DEALS[l.d].label}</span>`, `<span class="badge kind">${KINDS[l.k]?.icon} ${KINDS[l.k]?.label}</span>`,
      l.n ? '<span class="badge warn">قابل للتفاوض</span>' : '', l.ow === 'owner' ? '<span class="badge ok">من المالك</span>' : l.ow ? `<span class="badge kind">${LISTERS[l.ow]}</span>` : ''].join('');
    const cmpHtml = cmp ? `<div class="re-cmp ${cmp.diffPct <= 0 ? 'good' : 'high'}">${cmp.diffPct <= -3 ? `📉 أرخص من معدل المنطقة بـ ${Math.abs(cmp.diffPct)}%` : cmp.diffPct >= 3 ? `📈 أغلى من معدل المنطقة بـ ${cmp.diffPct}%` : '⚖️ بنفس معدل أسعار المنطقة'}<small> (حسب ${cmp.n} عقارات قريبة)</small></div>` : '';
    const dme = me ? haversine(me, [l.x, l.y]) : null;
    const dist = dme == null ? '' : dme < 60 ? '<span>📍 أنت عند العقار</span>' : `<span>📍 يبعد عنك ${fmtM(dme)}</span>`;
    const wa = normalizePhone(l.ph);
    const shareUrl = `${location.origin}${location.pathname}#l-${l.id}`;
    const waMsg = encodeURIComponent(`مرحبا، شفت إعلانك بتطبيق سالكة: ${l.ti || autoTitle(l)} — ${fmtPrice(l.p, l.c, l.pt)}\n${shareUrl}`);
    const html = `
      <div class="re-gallery" id="reGal">${l.nph ? `<div class="re-ph-ph">${KINDS[l.k]?.icon}</div>` : `<div class="re-ph-ph">${KINDS[l.k]?.icon}<small>بدون صور</small></div>`}</div>
      <div class="re-head">
        <div class="re-big-price ${l.d}">${fmtPrice(l.p, l.c, l.pt)}</div>
        ${ppm > 0 && l.pt !== 'm2' ? `<div class="sub">≈ ${fmtPrice(Math.round(ppm), l.c)} للمتر</div>` : ''}
        <h2>${this.ctx.esc(l.ti || autoTitle(l))}</h2>
        <div class="re-badges">${badges}</div>
        ${cmpHtml}
        <p class="sub re-meta">${l.ar ? `🗺️ ${this.ctx.esc(l.ar)} ` : ''}${dist}</p>
      </div>
      <div class="re-facts-grid">${facts}</div>
      ${feats ? `<h3>المميزات</h3><div class="chips wrap">${feats}</div>` : ''}
      ${l.ds ? `<h3>الوصف</h3><p class="re-desc">${this.ctx.esc(l.ds)}</p>` : ''}
      <h3>الخدمات القريبة</h3><div class="chips wrap" id="reNear"><span class="sub">دا أدور…</span></div>
      <p class="sub">نُشر ${timeAgoAr(l.t)}${l.e && l.e - l.t > 60000 ? ` • تحدّث ${timeAgoAr(l.e)}` : ''}${l.nm ? ` • ${this.ctx.esc(l.nm)}` : ''}</p>
      ${mine ? `<div class="re-owner"><b>إعلانك</b>
        <div class="actions"><button class="btn sm" data-a="edit">✏️ تعديل</button><button class="btn sm" data-a="renew">🔄 تجديد</button><button class="btn sm danger" data-a="sold">✅ ${l.d === 'sale' ? 'انباع' : 'تأجّر'} — شيله</button></div></div>`
    : '<button class="link-btn" data-a="report">🚩 إبلاغ عن إعلان مخالف</button>'}
      <div class="re-cta">
        <a class="btn go" href="tel:${wa || ''}" data-a="call">📞 اتصال</a>
        ${l.wa !== false && wa ? `<a class="btn wa" href="https://wa.me/${wa.slice(1)}?text=${waMsg}" target="_blank" rel="noopener">واتساب</a>` : ''}
        <button class="btn icon-only" data-a="route" aria-label="الطريق">🧭</button>
        <button class="btn icon-only" data-a="share" aria-label="مشاركة">🔗</button>
        <button class="btn icon-only ${this.favs.has(l.id) ? 'fav' : ''}" data-a="fav" aria-label="حفظ">${this.favs.has(l.id) ? '❤' : '♡'}</button>
      </div>
      <p class="sub" style="text-align:center">${wa ? displayPhone(wa) : ''}</p>`;
    this.ctx.openSheet('re-detail', html, {
      onClose: () => { if (this.sel === id) this.select(null); },
      onRender: (b) => {
        b.onclick = (e) => this._detailAction(e, l, shareUrl);
        this._loadGallery(l, b.querySelector('#reGal'));
        this._loadNearby(l, b.querySelector('#reNear'));
      },
    });
  }

  async _loadGallery(l, el) {
    if (!el || !l.nph) return;
    try {
      const t = this.thumbs.get(l.id) ?? await this.backend.thumb(l.id);
      if (t && el.isConnected && !el.dataset.full) el.innerHTML = `<img src="${t}" alt="">`;
      const ph = await this.backend.photos(l.id);
      if (!el.isConnected || !ph.length) return;
      el.dataset.full = '1';
      el.innerHTML = ph.map((p, i) => `<img src="${p}" alt="صورة ${i + 1}" data-i="${i}" loading="lazy">`).join('') + (ph.length > 1 ? `<span class="re-gal-count">${ph.length} صور ←</span>` : '');
      el.onclick = (e) => { const im = e.target.closest('img'); if (im) this._viewer(ph, +im.dataset.i); };
    } catch { /* ignore */ }
  }

  _viewer(ph, start) {
    const v = document.createElement('div');
    v.className = 're-viewer';
    v.innerHTML = `<button class="re-viewer-x" aria-label="إغلاق">✕</button><div class="re-viewer-strip" dir="ltr">${ph.map((p) => `<img src="${p}" alt="">`).join('')}</div>`;
    document.body.appendChild(v);
    const strip = v.querySelector('.re-viewer-strip');
    requestAnimationFrame(() => { strip.scrollLeft = start * strip.clientWidth; });
    v.querySelector('.re-viewer-x').onclick = () => v.remove();
  }

  async _loadNearby(l, el) {
    if (!el) return;
    const key = `near:${l.id}`;
    const cached = this.thumbs.get(key);
    const show = (items) => {
      if (!el.isConnected) return;
      el.innerHTML = items.length ? items.map((x) => `<span class="chip">${x.ic} ${x.label} <b>${fmtM(x.d)}</b></span>`).join('') : '<span class="sub">ما لكيت خدمات مسجلة بالخريطة ضمن 1.5 كم</span>';
    };
    if (cached) { show(cached); return; }
    const q = `[out:json][timeout:15];(nwr["amenity"~"^(school|kindergarten|university|hospital|clinic|pharmacy|place_of_worship|marketplace|fuel|bank)$"](around:1500,${l.y},${l.x});nwr["shop"~"^(supermarket|bakery|mall)$"](around:1500,${l.y},${l.x}););out center 80;`;
    try {
      const res = await fetch(`${GEOCODERS.overpass}?data=${encodeURIComponent(q)}`);
      const data = await res.json();
      const cats = {
        school: ['🏫', 'مدرسة'], kindergarten: ['🧸', 'روضة'], university: ['🎓', 'جامعة'], hospital: ['🏥', 'مستشفى'], clinic: ['🩺', 'عيادة'],
        pharmacy: ['💊', 'صيدلية'], place_of_worship: ['🕌', 'جامع'], marketplace: ['🛒', 'سوق'], supermarket: ['🛒', 'سوبرماركت'], mall: ['🛍️', 'مول'],
        bakery: ['🥖', 'مخبز'], fuel: ['⛽', 'محطة وقود'], bank: ['🏦', 'مصرف'],
      };
      const best = {};
      for (const e of data.elements || []) {
        const t = e.tags || {};
        const k = t.amenity || t.shop;
        if (!cats[k]) continue;
        const p = e.type === 'node' ? [e.lon, e.lat] : e.center ? [e.center.lon, e.center.lat] : null;
        if (!p) continue;
        const d = haversine([l.x, l.y], p);
        if (!best[k] || d < best[k]) best[k] = d;
      }
      const items = Object.entries(best).map(([k, d]) => ({ ic: cats[k][0], label: cats[k][1], d })).sort((a, b) => a.d - b.d).slice(0, 8);
      this.thumbs.set(key, items);
      show(items);
    } catch { if (el.isConnected) el.innerHTML = '<span class="sub">تعذر جلب الخدمات القريبة</span>'; }
  }

  async _detailAction(e, l, shareUrl) {
    const a = e.target.closest('[data-a]')?.dataset.a;
    if (!a) return;
    if (a === 'call' && !normalizePhone(l.ph)) { e.preventDefault(); return; }
    if (a === 'route') { this.ctx.closeSheet({ silent: true }); this.exit(); this.ctx.routeTo({ name: l.ti || autoTitle(l), sub: l.ar || '', pos: [l.x, l.y] }); }
    if (a === 'share') this.ctx.shareText(`🏡 ${l.ti || autoTitle(l)} — ${fmtPrice(l.p, l.c, l.pt)}`, shareUrl);
    if (a === 'fav') {
      if (this.favs.has(l.id)) this.favs.delete(l.id); else this.favs.add(l.id);
      store.set('reFavs', [...this.favs]);
      const b = e.target.closest('[data-a]'); b.textContent = this.favs.has(l.id) ? '❤' : '♡'; b.classList.toggle('fav', this.favs.has(l.id));
      this.ctx.toast(this.favs.has(l.id) ? 'انحفظ بالمفضلة ❤' : 'انشال من المفضلة');
      this.render();
    }
    if (a === 'report') { try { await this.backend.report(l.id); this.ctx.toast('شكراً، وصل البلاغ 🙏'); } catch { this.ctx.toast('تعذر إرسال البلاغ'); } }
    if (a === 'renew') { try { const n = await this.backend.update(l.id, { e: Date.now() }); this.listings.set(l.id, { ...l, ...n }); this.ctx.toast('🔄 تجدد الإعلان 90 يوم'); } catch (err) { this.ctx.toast(err.message || 'تعذر التجديد'); } }
    if (a === 'sold') {
      const b = e.target.closest('[data-a]');
      if (!b.dataset.sure) { b.dataset.sure = '1'; b.textContent = 'متأكد؟ اضغط مرة ثانية'; return; }
      try { await this.backend.remove(l.id); this.listings.delete(l.id); this.ctx.closeSheet({ silent: true }); this.sel = null; this.render(); this.ctx.toast('🎉 مبروك! انشال الإعلان من الخريطة'); } catch (err) { this.ctx.toast(err.message || 'تعذر الحذف'); }
    }
    if (a === 'edit') { this.ctx.closeSheet({ silent: true }); this.startWizard(l); }
  }

  // =================================================================
  //  إعلاناتي والمفضلة
  // =================================================================
  async openMine() {
    if (!this.active) this.enter({ silent: true });
    this.ctx.openSheet('re-mine', '<h2>إعلاناتي</h2><div class="spinner"></div>');
    try {
      const mine = (await this.backend.mine()).filter(Boolean);
      for (const l of mine) this.listings.set(l.id, l);
      if (this.ctx.sheetName() !== 're-mine') return;
      this.ctx.openSheet('re-mine', `<h2>إعلاناتي (${mine.length})</h2>
        ${mine.map((l) => `${this._card(l)}${isActive(l) ? '' : '<p class="sub">⏳ منتهي — افتحه وجدده</p>'}`).join('') || '<div class="empty">ما نشرت إعلانات بعد</div>'}
        <div class="actions"><button class="btn primary" data-a="new">＋ أضف عقار</button></div>`, {
        onRender: (b) => {
          b.querySelectorAll('[data-thumb]').forEach((el) => this._loadThumb(el));
          b.onclick = (e) => {
            if (e.target.closest('[data-a="new"]')) { this.ctx.closeSheet({ silent: true }); this.startWizard(); return; }
            const c = e.target.closest('[data-id]'); if (c) { this.ctx.closeSheet({ silent: true }); this.open(c.dataset.id, { fly: true }); }
          };
        },
      });
    } catch (e) { this.ctx.toast(e.message || 'تعذر التحميل'); }
  }

  async openFavs() {
    if (!this.active) this.enter({ silent: true });
    const ids = [...this.favs];
    const list = (await Promise.all(ids.map(async (id) => this.listings.get(id) || this.backend.get(id).catch(() => null)))).filter((l) => l && isActive(l));
    for (const l of list) this.listings.set(l.id, l);
    this.ctx.openSheet('re-favs', `<h2>المفضلة ❤ (${list.length})</h2>${list.map((l) => this._card(l)).join('') || '<div class="empty">ما حفظت عقارات بعد — اضغط ♡ بأي إعلان</div>'}`, {
      onRender: (b) => {
        b.querySelectorAll('[data-thumb]').forEach((el) => this._loadThumb(el));
        b.onclick = (e) => { const c = e.target.closest('[data-id]'); if (c) { this.ctx.closeSheet({ silent: true }); this.open(c.dataset.id, { fly: true }); } };
      },
    });
  }

  // =================================================================
  //  معالج النشر (5 خطوات)
  // =================================================================
  startWizard(edit = null) {
    if (!this.active) this.enter({ silent: true });
    const draft = !edit && store.get('reDraft');
    this.wiz = edit
      ? { ...edit, editId: edit.id, ring: edit.poly?.length >= 6 ? flat2ring(edit.poly) : null, photos: null, keepPhotos: true, step: 3 }
      : draft && Date.now() - (draft.at || 0) < 7 * 86400000 ? { ...draft, photos: [], step: Math.min(draft.step || 1, 3) } : { d: this.filter.d, step: 1, c: 'IQD', n: true, wa: true, ow: 'owner', f: [], photos: [] };
    if (draft && !edit && this.wiz.k) this.ctx.toast('رجّعتلك المسودة اللي ما كملتها ✍️');
    this._wizardStep(this.wiz.step);
  }

  _saveDraft() {
    if (!this.wiz || this.wiz.editId) return;
    const { photos, ...rest } = this.wiz;
    store.set('reDraft', { ...rest, at: Date.now() });
  }

  _steps(cur) {
    return `<div class="re-steps">${[1, 2, 3, 4, 5].map((i) => `<span class="${i < cur ? 'done' : i === cur ? 'on' : ''}"></span>`).join('')}</div>`;
  }

  _wizardStep(n) {
    const w = this.wiz;
    if (!w) return;
    w.step = n;
    this._saveDraft();
    if (n === 1) return this._step1();
    if (n === 2) return this._step2();
    if (n === 3) return this._step3();
    if (n === 4) return this._step4();
    if (n === 5) return this._step5();
  }

  _wizClose() {
    return () => { /* الإغلاق يحفظ المسودة تلقائياً */ };
  }

  _step1() {
    const w = this.wiz;
    const kinds = Object.entries(KINDS).map(([k, v]) => `<button class="re-kind ${w.k === k ? 'on' : ''}" data-kind="${k}"><span>${v.icon}</span>${v.label}</button>`).join('');
    this.ctx.openSheet('re-wiz', `${this._steps(1)}<h2>${w.editId ? 'تعديل الإعلان' : 'شنو تريد تعرض؟'}</h2>
      <span class="seg re-deal-big"><button data-deal="sale" class="${w.d === 'sale' ? 'on' : ''}">🏷️ للبيع</button><button data-deal="rent" class="${w.d === 'rent' ? 'on' : ''}">🔑 للإيجار</button></span>
      <div class="re-kinds">${kinds}</div>
      <div class="actions"><button class="btn primary" data-a="next" ${w.k ? '' : 'disabled'}>التالي: حدد ${w.k && KINDS[w.k].point ? 'الموقع' : 'القطعة'} على الخريطة ←</button></div>`, {
      onClose: this._wizClose(),
      onRender: (b) => {
        b.onclick = (e) => {
          const t = e.target.closest('button'); if (!t) return;
          if (t.dataset.deal) { w.d = t.dataset.deal; w.pt = null; t.parentElement.querySelectorAll('button').forEach((x) => x.classList.toggle('on', x === t)); this._saveDraft(); }
          if (t.dataset.kind) {
            w.k = t.dataset.kind; w.pt = null;
            b.querySelectorAll('.re-kind').forEach((x) => x.classList.toggle('on', x === t));
            const nx = b.querySelector('[data-a="next"]'); nx.disabled = false; nx.textContent = `التالي: حدد ${KINDS[w.k].point ? 'الموقع' : 'القطعة'} على الخريطة ←`;
            this._saveDraft();
          }
          if (t.dataset.a === 'next' && w.k) { this._saveDraft(); this._wizardStep(2); }
        };
      },
    });
  }

  // ------------------------------------------------- الخطوة 2: الرسم
  _step2() {
    const w = this.wiz;
    this.ctx.closeAllSheets({ silent: true, keepHist: true });
    this._setVisible(false);
    this.draw = { pts: w.ring ? w.ring.slice() : [], markers: [], labels: [], pointOnly: !!KINDS[w.k]?.point && !w.forceShape };
    document.body.classList.add('re-drawing');
    const d = document.createElement('div');
    d.className = 're-draw-ui';
    d.innerHTML = `
      <div class="re-draw-top"><div class="re-draw-title" id="reDT"></div><div class="re-draw-stats" id="reDS"></div></div>
      <div class="re-cross" id="reCross"><span></span></div>
      <div class="re-draw-tools">
        <button class="tool" data-t="sat" aria-label="قمر صناعي">🛰️<small>قمر صناعي</small></button>
        <button class="tool" data-t="add">➕<small>نقطة بالمنتصف</small></button>
        <button class="tool" data-t="rect">▭<small>بالأبعاد</small></button>
        <button class="tool" data-t="undo">↩️<small>تراجع</small></button>
        <button class="tool" data-t="clear">🗑️<small>مسح</small></button>
      </div>
      <div class="re-draw-actions"><button class="btn" data-t="cancel">رجوع</button><button class="btn primary" data-t="done" id="reDone">تم ✓</button></div>`;
    document.body.appendChild(d);
    this.draw.ui = d;
    d.addEventListener('click', (e) => { const t = e.target.closest('[data-t]'); if (t) this._drawTool(t.dataset.t); });
    if (this.draw.pointOnly) {
      d.querySelector('[data-t="add"]').classList.add('hidden');
      d.querySelector('[data-t="undo"]').classList.add('hidden');
      d.querySelector('[data-t="clear"]').classList.add('hidden');
      d.querySelector('[data-t="rect"]').innerHTML = '✏️<small>ارسم حدود</small>';
    }
    if (w.ring?.length >= 3) this.ctx.mapView.fitBounds(bboxOf(w.ring), { top: 160, bottom: 220, left: 50, right: 50 }, { duration: 500 });
    else if (w.x && w.y) this.map.easeTo({ center: [w.x, w.y], zoom: 18, duration: 500 });
    else { const me = this.ctx.me(); this.map.easeTo({ center: me || this.map.getCenter().toArray(), zoom: Math.max(this.map.getZoom(), 17.5), pitch: 0, bearing: 0, duration: 600 }); }
    if (store.get('reSat') !== false) this._sat(true);
    this._drawRefresh();
  }

  _drawTap(ll, point) {
    const dr = this.draw;
    if (!dr || dr.pointOnly || dr.rect) return;
    // ضغطة على زاوية موجودة (بدون سحب) ما تضيف نقطة مكررة
    if (point) {
      try {
        for (const p of dr.pts) { const q = this.map.project(p); if (Math.hypot(q.x - point.x, q.y - point.y) < 20) return; }
      } catch { /* ignore */ }
    }
    if (dr.pts.length >= 60) { this.ctx.toast('أقصى حد 60 نقطة'); return; }
    dr.pts.push(ll);
    this._drawRefresh();
  }

  _drawTool(t) {
    const dr = this.draw; if (!dr) return;
    const center = this.map.getCenter().toArray();
    if (t === 'sat') this._sat(!this._satOn);
    if (t === 'add') { dr.pts.push(center); this._drawRefresh(); }
    if (t === 'undo') { dr.pts.pop(); this._drawRefresh(); }
    if (t === 'clear') { dr.pts = []; this._drawRefresh(); }
    if (t === 'rect') {
      if (dr.pointOnly) { dr.pointOnly = false; this.wiz.forceShape = true; this._endDraw(false); this._step2(); return; }
      this._rectSheet();
    }
    if (t === 'cancel') { this._endDraw(true); this._wizardStep(1); }
    if (t === 'done') this._drawDone();
  }

  _rectSheet() {
    const dr = this.draw;
    const r = dr.rectCfg || { fw: this.wiz.fw || 10, dp: this.wiz.dp || 20, rot: 0 };
    dr.rectCfg = r;
    const apply = () => {
      const c = this.map.getCenter().toArray();
      dr.pts = rectangle(c, r.fw, r.dp, r.rot);
      this._drawRefresh();
    };
    apply();
    this.ctx.openSheet('re-rect', `<h2>القطعة بالأبعاد</h2><p class="sub">حرّك الخريطة حتى يصير المستطيل فوق قطعتك، وبعدين دوّره.</p>
      <div class="row"><label class="re-in"><small>الواجهة (م)</small><input class="field num" inputmode="decimal" data-r="fw" value="${r.fw}"></label><span style="padding-top:18px">×</span><label class="re-in"><small>النزال (م)</small><input class="field num" inputmode="decimal" data-r="dp" value="${r.dp}"></label></div>
      <div class="set-row"><span class="set-label">الدوران <small id="reRot">${Math.round(r.rot)}°</small></span><input type="range" min="0" max="179" step="1" value="${Math.round(r.rot)}" data-r="rot" style="width:160px"></div>
      <div class="actions"><button class="btn" data-a="align">🛣️ حاذي ويه الشارع</button><button class="btn primary" data-a="ok">ثبّت</button></div>`, {
      peek: true, backdrop: false,
      onClose: () => { if (this.draw) { this.map.off('move', this._rectMove); this.draw.rect = false; } },
      onRender: (b) => {
        dr.rect = true;
        this._rectMove = () => { if (this.draw?.rect) apply(); };
        this.map.on('move', this._rectMove);
        b.addEventListener('input', (e) => {
          const k = e.target.dataset.r; if (!k) return;
          const v = num(e.target.value);
          if (k === 'rot') { r.rot = v; b.querySelector('#reRot').textContent = `${Math.round(v)}°`; } else if (v > 0 && v < 5000) r[k] = v;
          apply();
        });
        b.onclick = (e) => {
          const a = e.target.closest('[data-a]')?.dataset.a;
          if (a === 'align') {
            const brg = this._streetBearing();
            if (brg == null) { this.ctx.toast('ما لكيت شارع قريب — قرّب الخريطة على الشارع'); return; }
            r.rot = (brg + 90) % 180;
            b.querySelector('[data-r="rot"]').value = Math.round(r.rot);
            b.querySelector('#reRot').textContent = `${Math.round(r.rot)}°`;
            apply();
          }
          if (a === 'ok') { this.map.off('move', this._rectMove); dr.rect = false; this.wiz.fw = r.fw; this.wiz.dp = r.dp; this.ctx.closeSheet({ silent: true }); this._drawRefresh(); }
        };
      },
    });
  }

  _streetBearing() {
    try {
      const c = this.map.project(this.map.getCenter());
      const fs = this.map.queryRenderedFeatures([[c.x - 60, c.y - 60], [c.x + 60, c.y + 60]]);
      const lines = [];
      for (const f of fs) {
        if (f.sourceLayer !== 'transportation' && !/road|street|highway/.test(f.layer?.id || '')) continue;
        const g = f.geometry;
        if (g.type === 'LineString') lines.push(g.coordinates);
        if (g.type === 'MultiLineString') lines.push(...g.coordinates);
      }
      return lines.length ? nearestSegmentBearing(lines, this.map.getCenter().toArray()) : null;
    } catch { return null; }
  }

  _sat(on) {
    this._satOn = on;
    store.set('reSat', on);
    const map = this.map;
    try {
      if (on && !map.getSource('re-sat')) {
        map.addSource('re-sat', { type: 'raster', tiles: [SAT_URL], tileSize: 256, maxzoom: 19, attribution: 'صور: Esri, Maxar, Earthstar Geographics' });
        const before = (map.getStyle().layers || []).find((l) => l.type === 'symbol')?.id;
        map.addLayer({ id: 're-sat', type: 'raster', source: 're-sat', paint: { 'raster-opacity': 1 } }, before);
      }
      if (map.getLayer('re-sat')) map.setLayoutProperty('re-sat', 'visibility', on ? 'visible' : 'none');
    } catch (e) { console.warn(e); }
    this.draw?.ui?.querySelector('[data-t="sat"]')?.classList.toggle('on', on);
  }

  _drawRefresh() {
    const dr = this.draw; if (!dr) return;
    const pts = dr.pts;
    const ring = pts.length >= 3 ? [...pts, pts[0]] : pts;
    const fc = { type: 'FeatureCollection', features: [] };
    if (pts.length >= 3) fc.features.push({ type: 'Feature', properties: {}, geometry: { type: 'Polygon', coordinates: [ring] } });
    else if (pts.length === 2) fc.features.push({ type: 'Feature', properties: {}, geometry: { type: 'LineString', coordinates: pts } });
    this.map.getSource('re-draw')?.setData(fc);
    // نقاط قابلة للسحب
    const ML = this.ctx.mapView.ml;
    while (dr.markers.length > pts.length) dr.markers.pop().remove();
    pts.forEach((p, i) => {
      let m = dr.markers[i];
      if (!m) {
        const el = document.createElement('div'); el.className = 're-vertex';
        m = new ML.Marker({ element: el, draggable: true }).setLngLat(p).addTo(this.map);
        m.on?.('drag', () => { const ll = m.getLngLat(); dr.pts[dr.markers.indexOf(m)] = [ll.lng, ll.lat]; this._drawRefresh(); });
        dr.markers.push(m);
      } else m.setLngLat(p);
      m.getElement().classList.toggle('first', i === 0);
    });
    // أطوال الأضلاع
    dr.labels.forEach((m) => m.remove());
    dr.labels = [];
    const sides = pts.length >= 2 ? sideLengths(pts) : [];
    if (pts.length <= 30) {
      sides.forEach((len, i) => {
        const a = pts[i], b = pts[(i + 1) % pts.length];
        const el = document.createElement('div'); el.className = 're-len'; el.textContent = `${len < 100 ? len.toFixed(1) : Math.round(len)} م`;
        dr.labels.push(new ML.Marker({ element: el }).setLngLat([(a[0] + b[0]) / 2, (a[1] + b[1]) / 2]).addTo(this.map));
      });
    }
    // الإحصائيات
    const ui = dr.ui; if (!ui) return;
    const T = ui.querySelector('#reDT'), S = ui.querySelector('#reDS');
    ui.querySelector('#reCross').classList.toggle('hidden', !(dr.pointOnly || pts.length < 60));
    if (dr.pointOnly) { T.textContent = '📍 حرّك الخريطة حتى تصير العلامة على العقار'; S.textContent = 'وبعدين اضغط «تم»'; return; }
    if (pts.length < 3) { T.textContent = pts.length ? `اضغط على الزاوية ${pts.length + 1}` : '👆 اضغط على زوايا قطعتك بالترتيب'; S.textContent = 'أو استخدم «بالأبعاد» لمستطيل جاهز — 🛰️ القمر الصناعي يساعدك تشوف حدودها'; return; }
    const area = polygonArea(pts);
    const bad = selfIntersects(pts);
    const dims = approxDims(pts);
    T.textContent = bad ? '⚠️ الأضلاع متقاطعة — رتب النقاط' : `المساحة: ${fmtArea(area, this.wiz?.k)}${area >= DUNAM ? ` • ${(area / DUNAM).toFixed(2)} دونم` : ''}`;
    S.textContent = `${pts.length} زوايا • المحيط ${fmtM(perimeter(pts))}${dims ? ` • تقريباً ${dims.frontage.toFixed(1)} × ${dims.depth.toFixed(1)} م` : ''}`;
    ui.querySelector('#reDone').disabled = bad;
  }

  _drawDone() {
    const dr = this.draw, w = this.wiz;
    if (dr.pointOnly) {
      const c = this.map.getCenter().toArray();
      w.x = c[0]; w.y = c[1]; w.ring = null; w.poly = null;
    } else {
      const pts = dr.pts;
      if (pts.length < 3) { this.ctx.toast('لازم 3 زوايا على الأقل'); return; }
      if (selfIntersects(pts)) { this.ctx.toast('الأضلاع متقاطعة — رتب النقاط'); return; }
      const area = polygonArea(pts);
      if (area < 15) { this.ctx.toast('القطعة صغيرة جداً — تأكد من الرسم'); return; }
      if (area > 25e6) { this.ctx.toast('القطعة كبيرة جداً'); return; }
      const c = centroid(pts);
      w.ring = pts.slice(); w.poly = ring2flat(pts); w.x = c[0]; w.y = c[1];
      w.a = Math.round(area);
      const dims = approxDims(pts);
      if (dims?.rectangular) { w.fw = Math.round(dims.frontage * 10) / 10; w.dp = Math.round(dims.depth * 10) / 10; }
    }
    this._endDraw(false);
    this._wizardStep(3);
    // اسم المنطقة تلقائياً
    if (!w.ar) this.ctx.reverseGeocode([w.x, w.y]).then((r) => { if (r && this.wiz === w && !w.ar) { w.ar = [r.name, r.sub].filter(Boolean).join('، ').slice(0, 80); const el = document.querySelector('[data-w="ar"]'); if (el && !el.value) el.value = w.ar; } }).catch(() => {});
  }

  _endDraw(cancel) {
    const dr = this.draw; if (!dr) return;
    this.map.off('move', this._rectMove);
    dr.markers.forEach((m) => m.remove());
    dr.labels.forEach((m) => m.remove());
    dr.ui?.remove();
    this.map.getSource('re-draw')?.setData(EMPTY);
    this.draw = null;
    document.body.classList.remove('re-drawing');
    this._sat(false); store.set('reSat', true);
    if (this.ctx.sheetName() === 're-rect') this.ctx.closeSheet({ silent: true });
    this._setVisible(this.active);
    if (cancel) this.render();
  }

  // ------------------------------------------------- الخطوة 3: التفاصيل
  _step3() {
    const w = this.wiz;
    const F = fieldsFor(w.k, w.d);
    const pts = priceTypesFor(w.k, w.d);
    if (!w.pt || !pts.includes(w.pt)) w.pt = pts[0];
    const inp = (k, label, ph = '', mode = 'numeric') => `<label class="re-in"><small>${label}</small><input class="field num" inputmode="${mode}" data-w="${k}" value="${w[k] ?? ''}" placeholder="${ph}"></label>`;
    const seg = (k, label, opts) => `<div class="re-field"><small>${label}</small><span class="seg wrap">${Object.entries(opts).map(([v, t]) => `<button data-seg="${k}" data-v="${v}" class="${String(w[k]) === v ? 'on' : ''}">${t}</button>`).join('')}</span></div>`;
    const yn = (k, label) => seg(k, label, { true: 'نعم', false: 'لا' });
    const feats = featuresFor(w.k).map((k) => `<button class="chip ${w.f?.includes(k) ? 'on' : ''}" data-feat="${k}">${FEATURES[k][1]} ${FEATURES[k][0]}</button>`).join('');
    const html = `${this._steps(3)}<h2>التفاصيل</h2>
      <div class="re-field"><small>السعر</small>
        <div class="row"><input class="field num big" inputmode="numeric" data-w="p" value="${w.p || ''}" placeholder="${w.c === 'USD' ? 'مثلاً 185000' : 'مثلاً 185000000'}">
        <span class="seg"><button data-seg="c" data-v="IQD" class="${w.c === 'IQD' ? 'on' : ''}">دينار</button><button data-seg="c" data-v="USD" class="${w.c === 'USD' ? 'on' : ''}">$</button></span></div>
        <p class="sub re-price-help" id="rePH"></p></div>
      ${seg('pt', 'نوع السعر', Object.fromEntries(pts.map((p) => [p, PRICE_TYPES[p].label])))}
      <label class="set-row"><span class="set-label">قابل للتفاوض</span><span class="switch"><input type="checkbox" data-wb="n" ${w.n ? 'checked' : ''}><span></span></span></label>
      <div class="re-grid">
        ${inp('a', 'المساحة (م²)', '', 'decimal')}
        ${F.has('fw') ? inp('fw', 'الواجهة (م)', '', 'decimal') : ''}${F.has('dp') ? inp('dp', 'النزال (م)', '', 'decimal') : ''}
        ${F.has('fl') ? inp('fl', 'عدد الطوابق') : ''}${F.has('flno') ? inp('flno', 'رقم الطابق') : ''}
        ${F.has('br') ? inp('br', 'غرف النوم') : ''}${F.has('ba') ? inp('ba', 'الحمامات') : ''}
        ${F.has('sw') ? inp('sw', 'عرض الشارع (م)') : ''}${F.has('cap') ? inp('cap', 'السعة (أشخاص)') : ''}
        ${F.has('tr') ? inp('tr', 'عدد الأشجار') : ''}${F.has('dep') ? inp('dep', 'التأمين') : ''}${F.has('wk') ? inp('wk', 'سعر الويكند') : ''}
      </div>
      ${F.has('de') ? seg('de', 'نوع السند', Object.fromEntries(Object.entries(DEEDS).map(([k, v]) => [k, v.split(' (')[0]]))) : ''}
      ${F.has('ag') ? seg('ag', 'عمر البناء', AGES) : ''}
      ${F.has('fa') ? seg('fa', 'اتجاه الواجهة', FACADES) : ''}
      ${F.has('ws') ? seg('ws', 'مصدر الماء', WATER_SRC) : ''}
      ${F.has('pay') ? seg('pay', 'طريقة الدفع', { cash: 'كاش', inst: 'أقساط' }) : ''}
      ${F.has('mo') ? yn('mo', 'العقار مرهون؟') : ''}${F.has('fu') ? yn('fu', 'مفروش؟') : ''}${F.has('fam') ? yn('fam', 'للعوائل فقط؟') : ''}
      <div class="re-field"><small>المميزات</small><div class="chips wrap">${feats}</div></div>
      <label class="re-in wide"><small>المنطقة</small><input class="field" data-w="ar" value="${this.ctx.esc(w.ar || '')}" placeholder="مثلاً: المنصور، بغداد"></label>
      <div class="actions"><button class="btn" data-a="back">→ ${w.editId ? 'تعديل الحدود' : 'رجوع'}</button><button class="btn primary" data-a="next">التالي: الصور والتواصل ←</button></div>`;
    this.ctx.openSheet('re-wiz', html, {
      onClose: this._wizClose(),
      onRender: (b) => {
        const help = () => {
          const el = b.querySelector('#rePH'); if (!el) return;
          const parts = [];
          if (w.p > 0) parts.push(`= ${fmtPrice(w.p, w.c, w.pt)}`);
          const tmp = { ...w };
          if (w.d === 'sale' && w.a > 0 && w.p > 0) {
            if (w.pt === 'total') parts.push(`(≈ ${fmtPrice(Math.round(pricePerM2(tmp)), w.c)} للمتر)`);
            else parts.push(`(الكلي ≈ ${fmtPrice(Math.round(totalPrice(tmp)), w.c)})`);
          }
          el.textContent = parts.join(' ');
        };
        help();
        b.addEventListener('input', (e) => {
          const k = e.target.dataset.w; if (!k) return;
          w[k] = k === 'ar' ? e.target.value : num(e.target.value) || undefined;
          help(); this._saveDraft();
        });
        b.addEventListener('change', (e) => { if (e.target.dataset.wb) { w[e.target.dataset.wb] = e.target.checked; this._saveDraft(); } });
        b.onclick = (e) => {
          const t = e.target.closest('button'); if (!t) return;
          if (t.dataset.seg) {
            const v = t.dataset.v;
            w[t.dataset.seg] = v === 'true' ? true : v === 'false' ? false : v;
            t.parentElement.querySelectorAll('button').forEach((x) => x.classList.toggle('on', x === t));
            help(); this._saveDraft();
          }
          if (t.dataset.feat) {
            w.f = w.f || [];
            const i = w.f.indexOf(t.dataset.feat); if (i >= 0) w.f.splice(i, 1); else w.f.push(t.dataset.feat);
            t.classList.toggle('on'); this._saveDraft();
          }
          if (t.dataset.a === 'back') this._wizardStep(2);
          if (t.dataset.a === 'next') {
            if (!(w.p > 0)) { this.ctx.toast('اكتب السعر'); b.querySelector('[data-w="p"]')?.focus(); return; }
            if (!(w.a > 0) && !KINDS[w.k].point) { this.ctx.toast('اكتب المساحة'); return; }
            this._wizardStep(4);
          }
        };
      },
    });
  }

  // ------------------------------------------------- الخطوة 4: الصور والتواصل
  _step4() {
    const w = this.wiz;
    if (!w.ph) w.ph = store.get('reLastPhone') || '';
    if (!w.nm) w.nm = store.get('reLastName') || '';
    const photosHtml = () => (w.photos || []).map((p, i) => `<span class="re-ph"><img src="${p.thumb}" alt=""><button data-del="${i}" aria-label="حذف">✕</button>${i === 0 ? '<em>الغلاف</em>' : ''}</span>`).join('');
    const html = `${this._steps(4)}<h2>الصور والتواصل</h2>
      ${w.editId && w.keepPhotos ? `<p class="sub">📷 الصور الحالية (${w.nph || 0}) راح تبقى. إذا تريد تبدلها اختار صور جديدة.</p>` : '<p class="sub">الإعلانات اللي بيها صور تنشاف أكثر بـ 5 مرات 📸</p>'}
      <div class="re-photos" id="rePhotos">${photosHtml()}<label class="re-ph add ${(w.photos || []).length >= ESTATE.maxPhotos ? 'hidden' : ''}">＋<small>صور</small><input type="file" accept="image/*" multiple hidden id="rePhIn"></label></div>
      <p class="sub" id="rePhStat"></p>
      <label class="re-in wide"><small>وصف (اختياري)</small><textarea class="field area" data-w="ds" maxlength="1500" placeholder="مثلاً: بيت بناء حديث، قريب من السوق والمدارس، كل الخدمات متوفرة…">${this.ctx.esc(w.ds || '')}</textarea></label>
      <div class="re-grid">
        <label class="re-in"><small>رقم الموبايل</small><input class="field num" inputmode="tel" data-w="ph" value="${this.ctx.esc(w.ph)}" placeholder="07XXXXXXXXX"></label>
        <label class="re-in"><small>الاسم (اختياري)</small><input class="field" data-w="nm" value="${this.ctx.esc(w.nm)}" placeholder="أبو علي"></label>
      </div>
      <label class="set-row"><span class="set-label">التواصل بالواتساب على نفس الرقم</span><span class="switch"><input type="checkbox" data-wb="wa" ${w.wa !== false ? 'checked' : ''}><span></span></span></label>
      <div class="re-field"><small>المعلن</small><span class="seg">${Object.entries(LISTERS).map(([k, v]) => `<button data-seg="ow" data-v="${k}" class="${w.ow === k ? 'on' : ''}">${v}</button>`).join('')}</span></div>
      <div class="actions"><button class="btn" data-a="back">→ رجوع</button><button class="btn primary" data-a="next">مراجعة ←</button></div>`;
    this.ctx.openSheet('re-wiz', html, {
      onClose: this._wizClose(),
      onRender: (b) => {
        const fin = b.querySelector('#rePhIn');
        fin?.addEventListener('change', async () => {
          const files = [...fin.files].slice(0, ESTATE.maxPhotos - (w.photos || []).length);
          fin.value = '';
          const st = b.querySelector('#rePhStat');
          w.photos = w.photos || [];
          for (let i = 0; i < files.length; i++) {
            st.textContent = `دا أجهز الصور ${i + 1}/${files.length}…`;
            try { w.photos.push(await compressPhoto(files[i], ESTATE.photoMax, ESTATE.thumbMax)); w.keepPhotos = false; } catch { this.ctx.toast('صورة وحدة ما انقرت — جرّب غيرها'); }
          }
          st.textContent = w.photos.length ? `${w.photos.length} صور جاهزة ✓` : '';
          this._step4();
        });
        b.addEventListener('input', (e) => { const k = e.target.dataset.w; if (k) { w[k] = e.target.value; this._saveDraft(); } });
        b.addEventListener('change', (e) => { if (e.target.dataset.wb) w[e.target.dataset.wb] = e.target.checked; });
        b.onclick = (e) => {
          const t = e.target.closest('button'); if (!t) return;
          if (t.dataset.del !== undefined) { w.photos.splice(+t.dataset.del, 1); this._step4(); return; }
          if (t.dataset.seg) { w[t.dataset.seg] = t.dataset.v; t.parentElement.querySelectorAll('button').forEach((x) => x.classList.toggle('on', x === t)); }
          if (t.dataset.a === 'back') this._wizardStep(3);
          if (t.dataset.a === 'next') {
            if (!normalizePhone(w.ph)) { this.ctx.toast('رقم الموبايل غير صحيح (مثال: 07701234567)'); return; }
            store.set('reLastPhone', w.ph); store.set('reLastName', w.nm || '');
            this._wizardStep(5);
          }
        };
      },
    });
  }

  // ------------------------------------------------- الخطوة 5: مراجعة ونشر
  _listingFromWiz() {
    const w = this.wiz;
    const l = {
      d: w.d, k: w.k, x: w.x, y: w.y, poly: w.poly || undefined, a: w.a ? Math.round(w.a) : undefined,
      p: w.p, c: w.c, pt: w.pt, n: !!w.n, ar: (w.ar || '').trim() || undefined, f: (w.f || []).filter((k) => FEATURES[k]),
      ds: (w.ds || '').trim() || undefined, ph: normalizePhone(w.ph), wa: w.wa !== false, nm: (w.nm || '').trim().slice(0, 40) || undefined, ow: w.ow,
    };
    const F = fieldsFor(w.k, w.d);
    for (const k of ['fw', 'dp', 'fl', 'flno', 'br', 'ba', 'sw', 'cap', 'tr', 'dep', 'wk']) if (F.has(k) && w[k] > 0) l[k] = w[k];
    for (const k of ['de', 'ag', 'fa', 'ws', 'pay']) if (F.has(k) && w[k]) l[k] = w[k];
    for (const k of ['mo', 'fu', 'fam']) if (F.has(k) && typeof w[k] === 'boolean') l[k] = w[k];
    l.ti = autoTitle(l);
    if (w.editId) { l.t = w.t; if (w.keepPhotos) l.nph = w.nph; }
    return l;
  }

  _step5() {
    const w = this.wiz;
    const l = this._listingFromWiz();
    const errs = validateListing(l);
    const cover = w.photos?.[0]?.thumb;
    this.ctx.openSheet('re-wiz', `${this._steps(5)}<h2>مراجعة أخيرة</h2>
      <div class="re-review">
        <span class="re-thumb big ${cover ? 'has-img' : ''}" style="${cover ? `background-image:url('${cover}')` : ''}">${cover ? '' : KINDS[l.k].icon}</span>
        <div><div class="re-big-price ${l.d}">${fmtPrice(l.p, l.c, l.pt)}</div><b>${this.ctx.esc(l.ti)}</b>
        <p class="sub">${[l.a ? fmtArea(l.a, l.k) : '', l.fw && l.dp ? `${l.fw}×${l.dp}` : '', DEEDS[l.de] || '', (w.photos?.length || (w.keepPhotos ? w.nph : 0) || 0) + ' صور'].filter(Boolean).join(' • ')}</p>
        <p class="sub">📞 ${displayPhone(l.ph)}</p></div>
      </div>
      ${errs.length ? `<div class="note bad">${errs.map((e) => `• ${e}`).join('<br>')}</div>` : `<div class="note">✅ كلشي جاهز. ${this.mode === 'local' ? 'الإعلان راح ينحفظ على جهازك (وضع تجريبي) لحد ما تنربط قاعدة البيانات.' : 'الإعلان راح يظهر لكل المستخدمين فوراً على الخريطة.'}</div>`}
      <div class="re-progress hidden" id="reProg"><span></span></div>
      <div class="actions"><button class="btn" data-a="back">→ رجوع</button><button class="btn primary" data-a="pub" ${errs.length ? 'disabled' : ''}>${w.editId ? '💾 حفظ التعديل' : '🚀 انشر الإعلان'}</button></div>`, {
      onClose: this._wizClose(),
      onRender: (b) => {
        b.onclick = async (e) => {
          const a = e.target.closest('[data-a]')?.dataset.a;
          if (a === 'back') this._wizardStep(4);
          if (a !== 'pub') return;
          const btn = e.target.closest('button');
          btn.disabled = true; btn.textContent = 'دا أنشر…';
          const prog = b.querySelector('#reProg'); prog.classList.remove('hidden');
          const bar = prog.querySelector('span');
          try {
            let saved;
            if (w.editId && w.keepPhotos) {
              saved = await this.backend.update(w.editId, l, { replace: true });
            } else {
              const photos = (w.photos || []).map((p) => p.full);
              const thumb = w.photos?.[0]?.thumb || null;
              saved = await this.backend.publish({ ...l, id: w.editId || undefined }, photos, thumb, (f) => { bar.style.width = `${Math.round(f * 100)}%`; });
              if (thumb) this.thumbs.set(saved.id, thumb);
            }
            this.listings.set(saved.id, saved);
            store.del('reDraft');
            this.wiz = null;
            this.ctx.closeAllSheets({ silent: true, keepHist: true });
            this.ctx.toast(w.editId ? '💾 انحفظ التعديل' : '🎉 انشر إعلانك على الخريطة!', 3500);
            if (this.filter.d !== saved.d) { this.filter.d = saved.d; this._renderBar(); }
            this.open(saved.id, { fly: true });
          } catch (err) {
            btn.disabled = false; btn.textContent = '🚀 حاول مرة ثانية';
            prog.classList.add('hidden');
            this.ctx.toast(err instanceof EstateError ? err.message : 'تعذر النشر. تأكد من الانترنت', 4500);
          }
        };
      },
    });
  }
}
