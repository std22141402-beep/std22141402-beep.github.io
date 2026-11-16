// =====================================================================
//  mapview.js — كل التعامل مع مكتبة الخريطة MapLibre
// =====================================================================
import { MAP } from './config.js';
import { escapeHtml } from './storage.js';

const EMPTY = { type: 'FeatureCollection', features: [] };
const W = (base) => ['interpolate', ['exponential', 1.5], ['zoom'], 8, base * 0.45, 13, base, 16, base * 1.9, 19, base * 3.6];

const CAR_SVG = {
  arrow: `<svg viewBox="0 0 54 54"><circle cx="27" cy="27" r="25" fill="rgba(255,255,255,.18)"/><path d="M27 6 L44 46 L27 37 L10 46 Z" fill="var(--accent)" stroke="#fff" stroke-width="3.5" stroke-linejoin="round"/></svg>`,
  car: `<svg viewBox="0 0 54 54"><rect x="15" y="6" width="24" height="42" rx="9" fill="var(--accent)" stroke="#fff" stroke-width="3"/><path d="M19 17 Q27 12 35 17 L33 23 H21 Z" fill="#cfe6ff" opacity=".95"/><path d="M20.5 37 H33.5 L35 42 Q27 45 19 42 Z" fill="#cfe6ff" opacity=".75"/><circle cx="19" cy="8.5" r="1.8" fill="#FFF7C2"/><circle cx="35" cy="8.5" r="1.8" fill="#FFF7C2"/></svg>`,
  dot: `<svg viewBox="0 0 54 54"><path d="M27 4 L37 22 H17 Z" fill="var(--accent)" opacity=".55"/><circle cx="27" cy="29" r="12" fill="var(--accent)" stroke="#fff" stroke-width="4"/></svg>`,
  plain: `<svg viewBox="0 0 54 54"><circle cx="27" cy="27" r="12" fill="var(--accent)" stroke="#fff" stroke-width="4"/></svg>`,
};
const DEST_SVG = `<svg viewBox="0 0 40 50"><path d="M20 49 C20 49 3 30 3 18 A17 17 0 0 1 37 18 C37 30 20 49 20 49 Z" fill="#E53935" stroke="#fff" stroke-width="2.5"/><path d="M14 11 V26 M14 11 H26 L23.5 14.5 L26 18 H14" fill="none" stroke="#fff" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"/></svg>`;
const PIN_SVG = `<svg viewBox="0 0 40 50"><path d="M20 49 C20 49 3 30 3 18 A17 17 0 0 1 37 18 C37 30 20 49 20 49 Z" fill="var(--accent)" stroke="#fff" stroke-width="2.5"/><circle cx="20" cy="18" r="6" fill="#fff"/></svg>`;

function gradient(color, traveled, frac) {
  if (!(frac > 0.0005)) return ['interpolate', ['linear'], ['line-progress'], 0, color, 1, color];
  const f = Math.min(frac, 0.9995);
  return ['step', ['line-progress'], traveled, f, color];
}

function shade(hex, amt) {
  const m = /^#?([0-9a-f]{6})$/i.exec(hex || '');
  if (!m) return hex;
  const n = parseInt(m[1], 16);
  const c = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((v) => Math.max(0, Math.min(255, Math.round(v * (1 + amt)))));
  return `#${c.map((v) => v.toString(16).padStart(2, '0')).join('')}`;
}

export class MapView {
  constructor(el, handlers = {}) {
    this.el = el;
    this.h = handlers;
    this.map = null;
    this.reportMarkers = new Map();
    this.routeColor = '#2F80ED';
    this.progress = 0;
    this.carStyle = 'arrow';
    this.meMode = 'dot';
    this._lastLong = 0;
  }

  get ml() { return window.maplibregl; }

  init(style, view) {
    return new Promise((resolve, reject) => {
      const ml = this.ml;
      let done = false;
      try {
        this.map = new ml.Map({
          container: this.el,
          style,
          center: view.center,
          zoom: view.zoom,
          bearing: 0,
          pitch: 0,
          maxPitch: MAP.maxPitch,
          attributionControl: { compact: true },
          pixelRatio: Math.min(window.devicePixelRatio || 1, 2),
          fadeDuration: 150,
          refreshExpiredTiles: false,
          clickTolerance: 4,
          dragRotate: true,
          touchPitch: true,
        });
      } catch (e) { reject(e); return; }
      const map = this.map;
      const timeout = setTimeout(() => { if (!done) { done = true; reject(new Error('map load timeout')); } }, 25000);
      map.once('load', () => {
        if (done) return;
        done = true; clearTimeout(timeout);
        try { this._addLayers(); this._bind(); } catch (e) { console.error(e); }
        resolve(map);
      });
      map.on('error', (e) => {
        // أخطاء التايلات العابرة طبيعية؛ نسجلها بس
        if (e?.error) console.warn('map:', e.error.message || e.error);
      });
    });
  }

  _firstSymbol() {
    return (this.map.getStyle().layers || []).find((l) => l.type === 'symbol')?.id;
  }

  _addLayers() {
    const map = this.map;
    const before = this._firstSymbol();
    map.addSource('salka-alts', { type: 'geojson', data: EMPTY });
    map.addLayer({ id: 'salka-alts-casing', type: 'line', source: 'salka-alts', layout: { 'line-join': 'round', 'line-cap': 'round' }, paint: { 'line-color': '#5E708A', 'line-width': W(9) } }, before);
    map.addLayer({ id: 'salka-alts-line', type: 'line', source: 'salka-alts', layout: { 'line-join': 'round', 'line-cap': 'round' }, paint: { 'line-color': '#A9BCD6', 'line-width': W(6) } }, before);
    map.addLayer({ id: 'salka-alts-hit', type: 'line', source: 'salka-alts', paint: { 'line-color': '#000', 'line-opacity': 0, 'line-width': 28 } }, before);

    map.addSource('salka-route', { type: 'geojson', data: EMPTY, lineMetrics: true });
    map.addLayer({ id: 'salka-route-casing', type: 'line', source: 'salka-route', layout: { 'line-join': 'round', 'line-cap': 'round' }, paint: { 'line-width': W(10.5), 'line-gradient': gradient('#1A4F99', 'rgba(0,0,0,0)', 0) } }, before);
    map.addLayer({ id: 'salka-route-line', type: 'line', source: 'salka-route', layout: { 'line-join': 'round', 'line-cap': 'round' }, paint: { 'line-width': W(7), 'line-gradient': gradient('#2F80ED', 'rgba(150,160,175,0.6)', 0) } }, before);

    map.addSource('salka-acc', { type: 'geojson', data: EMPTY });
    map.addLayer({ id: 'salka-acc', type: 'circle', source: 'salka-acc', paint: { 'circle-color': '#2F80ED', 'circle-opacity': 0.12, 'circle-stroke-color': '#2F80ED', 'circle-stroke-opacity': 0.35, 'circle-stroke-width': 1, 'circle-radius': 0, 'circle-pitch-alignment': 'map' } });
    this.setRouteColor(this.routeColor);
  }

  _bind() {
    const map = this.map;
    const user = (e) => !!(e && e.originalEvent);
    ['dragstart', 'rotatestart', 'pitchstart', 'zoomstart'].forEach((ev) => map.on(ev, (e) => { if (user(e)) this.h.onUserMove?.(ev); }));
    map.on('rotate', () => this.h.onRotate?.(map.getBearing()));
    map.on('click', (e) => {
      let fs = [];
      try { fs = map.getLayer('salka-alts-hit') ? map.queryRenderedFeatures(e.point, { layers: ['salka-alts-hit'] }) : []; } catch { fs = []; }
      if (fs.length) { this.h.onAltClick?.(fs[0].properties.idx); return; }
      this.h.onMapClick?.(e.lngLat.toArray());
    });

    // ضغطة مطولة
    let lp = null;
    const clear = () => { if (lp) { clearTimeout(lp.timer); lp = null; } };
    map.on('touchstart', (e) => {
      clear();
      if (e.originalEvent?.touches?.length !== 1) return;
      const pt = e.point, ll = e.lngLat.toArray();
      lp = { pt, timer: setTimeout(() => { lp = null; this._long(ll); }, 600) };
    });
    map.on('touchmove', (e) => { if (lp && (Math.abs(e.point.x - lp.pt.x) > 10 || Math.abs(e.point.y - lp.pt.y) > 10)) clear(); });
    map.on('touchend', clear);
    map.on('touchcancel', clear);
    map.on('dragstart', clear);
    map.on('contextmenu', (e) => this._long(e.lngLat.toArray()));
  }

  _long(ll) {
    const now = Date.now();
    if (now - this._lastLong < 900) return;
    this._lastLong = now;
    this.h.onLongPress?.(ll);
  }

  // ------------------------------ الطرق ------------------------------
  setRouteColor(color) {
    this.routeColor = color;
    if (!this.map?.getLayer('salka-route-line')) return;
    this._applyGradient();
  }

  _applyGradient() {
    const c = this.routeColor;
    try {
      this.map.setPaintProperty('salka-route-line', 'line-gradient', gradient(c, 'rgba(150,160,175,0.55)', this.progress));
      this.map.setPaintProperty('salka-route-casing', 'line-gradient', gradient(shade(c, -0.38), 'rgba(0,0,0,0)', this.progress));
    } catch (e) { console.warn(e); }
  }

  setProgress(frac) {
    if (Math.abs(frac - this.progress) < 0.0002) return;
    this.progress = frac;
    this._applyGradient();
  }

  setRoutes(main, alts = []) {
    if (!this.map) return;
    this.progress = 0;
    this.map.getSource('salka-route')?.setData(main ? { type: 'Feature', properties: {}, geometry: { type: 'LineString', coordinates: main.coords } } : EMPTY);
    this.map.getSource('salka-alts')?.setData({
      type: 'FeatureCollection',
      features: alts.map((r) => ({ type: 'Feature', properties: { idx: r.idx }, geometry: { type: 'LineString', coordinates: r.route.coords } })),
    });
    this._applyGradient();
  }

  clearRoutes() { this.setRoutes(null, []); }

  // ------------------------------ العلامات ------------------------------
  _marker(key, el, opts) {
    if (!this[key]) this[key] = new this.ml.Marker({ element: el, ...opts });
    return this[key];
  }

  setCarStyle(style) {
    this.carStyle = ['arrow', 'car', 'dot'].includes(style) ? style : 'arrow';
    if (this.carEl && this.meMode === 'car') { this.carEl.innerHTML = CAR_SVG[this.carStyle]; this._meKey = `car:${this.carStyle}`; }
  }

  /** mode: 'dot' (تصفح) أو 'car' (ملاحة) */
  setMe(pos, heading, mode = 'dot') {
    if (!this.map || !pos) return;
    if (!this.carEl) {
      this.carEl = document.createElement('div');
      this.carEl.className = 'car-marker';
    }
    const hasHeading = heading != null && Number.isFinite(heading);
    const key = mode === 'car' ? `car:${this.carStyle}` : hasHeading ? 'dot' : 'plain';
    if (this._meKey !== key) {
      this._meKey = key;
      this.meMode = mode;
      this.carEl.innerHTML = mode === 'car' ? CAR_SVG[this.carStyle] : CAR_SVG[hasHeading ? 'dot' : 'plain'];
    }
    const m = this._marker('carMarker', this.carEl, { rotationAlignment: 'map', pitchAlignment: 'map' });
    m.setLngLat(pos);
    m.setRotation(hasHeading ? heading : 0);
    if (!this._carAdded) { m.addTo(this.map); this._carAdded = true; }
  }

  setAccuracy(pos, meters) {
    const src = this.map?.getSource('salka-acc');
    if (!src) return;
    if (!pos || !meters || meters < 8) { src.setData(EMPTY); return; }
    src.setData({ type: 'Feature', properties: {}, geometry: { type: 'Point', coordinates: pos } });
    const k = Math.cos((pos[1] * Math.PI) / 180) * 156543.03392;
    try { this.map.setPaintProperty('salka-acc', 'circle-radius', ['interpolate', ['exponential', 2], ['zoom'], 0, meters / k, 22, (meters / k) * 2 ** 22]); } catch { /* ignore */ }
  }

  setDestination(pos) {
    if (!this.map) return;
    if (!pos) { this.destMarker?.remove(); this._destAdded = false; return; }
    if (!this.destEl) { this.destEl = document.createElement('div'); this.destEl.className = 'dest-marker'; this.destEl.innerHTML = DEST_SVG; }
    const m = this._marker('destMarker', this.destEl, { anchor: 'bottom' });
    m.setLngLat(pos);
    if (!this._destAdded) { m.addTo(this.map); this._destAdded = true; }
  }

  setPin(pos) {
    if (!this.map) return;
    if (!pos) { this.pinMarker?.remove(); this._pinAdded = false; return; }
    if (!this.pinEl) { this.pinEl = document.createElement('div'); this.pinEl.className = 'pin-marker'; this.pinEl.innerHTML = PIN_SVG; }
    const m = this._marker('pinMarker', this.pinEl, { anchor: 'bottom' });
    m.setLngLat(pos);
    if (!this._pinAdded) { m.addTo(this.map); this._pinAdded = true; }
  }

  setReports(list) {
    if (!this.map) return;
    const keep = new Set();
    for (const r of list) {
      keep.add(r.id);
      let m = this.reportMarkers.get(r.id);
      if (!m) {
        const el = document.createElement('button');
        el.className = `rep-marker${r.mine ? ' mine' : ''}`;
        el.style.background = r.type.color;
        el.setAttribute('aria-label', r.type.label);
        el.innerHTML = escapeHtml(r.type.icon);
        el.addEventListener('click', (ev) => { ev.stopPropagation(); this.h.onReportClick?.(el._rep); });
        m = new this.ml.Marker({ element: el }).setLngLat([r.x, r.y]).addTo(this.map);
        this.reportMarkers.set(r.id, m);
      }
      m.getElement()._rep = r;
    }
    for (const [id, m] of this.reportMarkers) if (!keep.has(id)) { m.remove(); this.reportMarkers.delete(id); }
  }

  // ------------------------------ الكاميرا ------------------------------
  follow(cam) {
    if (!this.map) return;
    this.map.jumpTo(cam);
  }

  fitBounds(bbox, padding, opts = {}) {
    if (!this.map || !bbox) return;
    const [w, s, e, n] = bbox;
    if (!isFinite(w) || !isFinite(s)) return;
    try {
      this.map.fitBounds([[w, s], [e, n]], { padding, maxZoom: 16.5, duration: opts.duration ?? 700, bearing: 0, pitch: 0 });
    } catch (err) {
      this.map.easeTo({ center: [(w + e) / 2, (s + n) / 2], zoom: 13, duration: 500 });
    }
  }

  flyTo(center, zoom, opts = {}) {
    if (!this.map) return;
    this.map.easeTo({ center, zoom: zoom ?? Math.max(this.map.getZoom(), 15), bearing: opts.bearing ?? this.map.getBearing(), pitch: opts.pitch ?? 0, duration: opts.duration ?? 800, padding: opts.padding ?? { top: 0, bottom: 0, left: 0, right: 0 } });
  }

  resetNorth() { this.map?.easeTo({ bearing: 0, pitch: 0, duration: 500 }); }

  get size() {
    const c = this.map?.getContainer();
    return { w: c?.clientWidth || window.innerWidth, h: c?.clientHeight || window.innerHeight };
  }

  center() { return this.map ? this.map.getCenter().toArray() : MAP.center; }
}
