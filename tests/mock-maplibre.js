// نسخة وهمية من MapLibre للاختبار بدون انترنت.
// تتحقق من صحة الاستدعاءات (طبقات موجودة، تعابير line-gradient صحيحة...) وترمي خطأ إذا شي غلط.
(function () {
  const calls = (window.__mapCalls = { setData: 0, jumpTo: 0, paint: 0, fit: 0, errors: [], gradients: [], markers: 0 });
  const fail = (msg) => { calls.errors.push(msg); console.error('MAPMOCK: ' + msg); };

  function checkGradient(expr) {
    if (!Array.isArray(expr)) return fail('gradient not array');
    if (expr[0] === 'step') {
      if (!Array.isArray(expr[1]) || expr[1][0] !== 'line-progress') fail('step input');
      const stops = expr.slice(3).filter((_, i) => i % 2 === 0);
      let prev = -Infinity;
      for (const s of stops) { if (!(typeof s === 'number' && s > prev && s >= 0 && s <= 1)) fail(`bad stop ${s}`); prev = s; }
    } else if (expr[0] === 'interpolate') {
      if (expr[2][0] !== 'line-progress') fail('interp input');
    } else fail(`gradient op ${expr[0]}`);
    calls.gradients.push(expr);
  }

  class LngLat { constructor(lng, lat) { this.lng = lng; this.lat = lat; } toArray() { return [this.lng, this.lat]; } }

  class Map {
    constructor(o) {
      this._c = typeof o.container === 'string' ? document.getElementById(o.container) : o.container;
      if (!o.style || !Array.isArray(o.style.layers)) fail('style missing layers');
      this._style = o.style;
      this._layers = o.style.layers.map((l) => ({ ...l }));
      this._sources = {};
      this._ev = {};
      this.center = o.center; this.zoom = o.zoom; this.bearing = o.bearing || 0; this.pitch = o.pitch || 0;
      window.__map = this;
      this.touchZoomRotate = { enableRotation() {} };
      setTimeout(() => this._fire('load', {}), 30);
    }
    on(ev, a, b) { const fn = typeof a === 'function' ? a : b; (this._ev[ev] ||= []).push(fn); return this; }
    once(ev, fn) { const w = (e) => { this.off(ev, w); fn(e); }; return this.on(ev, w); }
    off(ev, fn) { this._ev[ev] = (this._ev[ev] || []).filter((f) => f !== fn); return this; }
    _fire(ev, e) { (this._ev[ev] || []).slice().forEach((f) => { try { f(e); } catch (err) { fail(`handler ${ev}: ${err.message}`); throw err; } }); }
    getStyle() { return { ...this._style, layers: this._layers }; }
    addSource(id, src) {
      if (this._sources[id]) fail(`source exists ${id}`);
      const self = this;
      this._sources[id] = { spec: src, data: src.data, setData(d) {
        if (!d || !d.type) fail('setData invalid');
        if (d.type === 'Feature' && d.geometry?.type === 'LineString' && d.geometry.coordinates.length < 2) fail('line < 2 coords');
        this.data = d; calls.setData++; self._lastData = { id, d };
      } };
    }
    getSource(id) { return this._sources[id]; }
    addLayer(l, before) {
      if (this._layers.find((x) => x.id === l.id)) fail(`layer exists ${l.id}`);
      if (l.source && !this._sources[l.source]) fail(`missing source ${l.source}`);
      for (const [k, v] of Object.entries(l.paint || {})) if (v === undefined || v === null) fail(`layer ${l.id} paint ${k} null`);
      if (l.paint?.['line-gradient']) { if (!this._sources[l.source].spec.lineMetrics) fail('line-gradient needs lineMetrics'); checkGradient(l.paint['line-gradient']); }
      const i = before ? this._layers.findIndex((x) => x.id === before) : -1;
      if (before && i < 0) fail(`before layer missing ${before}`);
      if (i >= 0) this._layers.splice(i, 0, { ...l }); else this._layers.push({ ...l });
    }
    getLayer(id) { return this._layers.find((x) => x.id === id); }
    setPaintProperty(id, k, v) {
      const l = this.getLayer(id);
      if (!l) return fail(`paint on missing layer ${id}`);
      if (k === 'line-gradient') checkGradient(v);
      if (v === undefined || v === null) fail(`paint ${id}.${k} null`);
      l.paint = { ...(l.paint || {}), [k]: v }; calls.paint++;
    }
    setLayoutProperty(id, k, v) { const l = this.getLayer(id); if (!l) return fail(`layout on missing ${id}`); l.layout = { ...(l.layout || {}), [k]: v }; }
    _cam(o) {
      if (o.center) { const c = Array.isArray(o.center) ? o.center : [o.center.lng, o.center.lat]; if (!c.every(Number.isFinite)) fail('bad center ' + JSON.stringify(o.center)); this.center = c; }
      if (o.zoom != null) { if (!Number.isFinite(o.zoom)) fail('bad zoom'); this.zoom = o.zoom; }
      if (o.bearing != null) { if (!Number.isFinite(o.bearing)) fail('bad bearing'); this.bearing = o.bearing; this._fire('rotate', {}); }
      if (o.pitch != null) { if (!(o.pitch >= 0 && o.pitch <= 85)) fail('bad pitch'); this.pitch = o.pitch; }
      if (o.padding) { const h = this._c.clientHeight; if (o.padding.top + o.padding.bottom >= h) fail('padding too large'); }
    }
    jumpTo(o) { calls.jumpTo++; this._cam(o); this._fire('move', {}); }
    easeTo(o) { this._cam(o); this._fire('moveend', {}); }
    flyTo(o) { calls.flyTo = (calls.flyTo || 0) + 1; calls.lastFly = o; this.easeTo(o); }
    fitBounds(b, o) {
      calls.fit++;
      const [[w, s], [e, n]] = b;
      if (![w, s, e, n].every(Number.isFinite)) fail('bad bounds');
      this._cam({ center: [(w + e) / 2, (s + n) / 2], zoom: 13, bearing: o?.bearing ?? 0, pitch: o?.pitch ?? 0 });
      this._fire('moveend', {});
    }
    getCenter() { return new LngLat(this.center[0], this.center[1]); }
    getZoom() { return this.zoom; }
    getBearing() { return this.bearing; }
    getPitch() { return this.pitch; }
    getContainer() { return this._c; }
    setSky(sky) { if (!sky || !sky['sky-color']) fail('bad sky'); this._style.sky = sky; calls.sky = (calls.sky || 0) + 1; }
    setProjection(p) { if (!p || !['globe', 'mercator'].includes(p.type)) fail('bad projection'); this._style.projection = p; calls.projection = p.type; }
    queryRenderedFeatures() { return []; }
    resize() {}
  }

  class Marker {
    constructor(o = {}) { this._el = o.element || document.createElement('div'); this._o = o; calls.markers++; }
    setLngLat(ll) { if (!Array.isArray(ll) || !ll.every(Number.isFinite)) fail('marker bad lnglat ' + JSON.stringify(ll)); this._ll = ll; this._el.dataset.ll = ll.join(','); return this; }
    addTo(map) { (map._c || document.body).appendChild(this._el); this._map = map; return this; }
    remove() { this._el.remove(); return this; }
    setRotation(r) { if (!Number.isFinite(r)) fail('bad rotation'); this._rot = r; return this; }
    getElement() { return this._el; }
    getLngLat() { return new LngLat(...this._ll); }
  }

  window.maplibregl = { Map, Marker, LngLat, setRTLTextPlugin: () => Promise.resolve() };
})();
