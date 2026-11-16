// =====================================================================
//  traffic.js — الازدحام المباشر من سرعات السواق
//  كل سيارة بالملاحة ترسل كل 30 ثانية: "هذا المقطع مشيته بكذا من سرعته الطبيعية"
//  بدون اسم، بدون رقم جهاز. والكل يستلم ويلوّن الشوارع.
// =====================================================================
import { SHARED, TRAFFIC } from './config.js';
import { nearestOnLine, sampleLine, sliceLine, haversine, bearing, angleDiff, clamp } from './geo.js';
import { remainingDuration } from './routing.js';

const r5 = (n) => Math.round(n * 1e5) / 1e5;
const okNum = (n) => typeof n === 'number' && Number.isFinite(n);

function validCoords(s) {
  return Array.isArray(s) && s.length >= 2 && s.length <= 16 &&
    s.every((p) => Array.isArray(p) && p.length === 2 && okNum(p[0]) && okNum(p[1]) && Math.abs(p[0]) <= 180 && Math.abs(p[1]) <= 90);
}

function lineLength(c) {
  let d = 0;
  for (let i = 1; i < c.length; i++) d += haversine(c[i - 1], c[i]);
  return d;
}

export class TrafficStore {
  constructor({ onChange } = {}) {
    this.onChange = onChange || (() => {});
    this.samples = new Map();
    this.seen = new Set();
    this.status = 'off';
    this.es = null;
    this.lastId = null;
    this._retry = 0;
    this._emitT = null;
    this._pruneT = null;
  }

  connect(enabled = true) {
    this.disconnect();
    if (!enabled || typeof EventSource === 'undefined') return;
    this.status = 'connecting';
    this._open();
    this._pruneT = setInterval(() => { if (this.prune()) this._emitSoon(); }, 60000);
  }

  disconnect() {
    try { this.es?.close(); } catch { /* ignore */ }
    this.es = null;
    clearTimeout(this._reconnectT);
    clearInterval(this._pruneT);
    this.status = 'off';
  }

  _open() {
    try { this.es?.close(); } catch { /* ignore */ }
    const since = this.lastId || `${TRAFFIC.ttlMin}m`;
    const es = new EventSource(`${SHARED.ntfyBase}/${SHARED.ntfyTrafficTopic}/sse?since=${encodeURIComponent(since)}`);
    this.es = es;
    es.onopen = () => { this._retry = 0; this.status = 'live'; };
    es.onmessage = (ev) => {
      let m; try { m = JSON.parse(ev.data); } catch { return; }
      if (!m || (m.event && m.event !== 'message')) return;
      this._msg(m);
    };
    es.onerror = () => {
      if (this.es !== es) return;
      try { es.close(); } catch { /* ignore */ }
      this._retry++;
      if (this._retry >= 3) this.status = 'error';
      const delay = Math.min(90000, 3000 * 2 ** Math.min(this._retry, 5));
      this._reconnectT = setTimeout(() => { if (this.status !== 'off') this._open(); }, delay);
    };
  }

  _msg(m) {
    if (!m.id || this.seen.has(m.id)) return;
    if (this.seen.size > 8000) this.seen.clear();
    this.seen.add(m.id);
    this.lastId = m.id;
    let p; try { p = JSON.parse(m.message); } catch { return; }
    if (!p || !validCoords(p.s) || !okNum(p.r) || p.r < 0 || p.r > 3) return;
    this._put(m.id, { t: okNum(m.time) ? m.time * 1000 : Date.now(), s: p.s, r: p.r });
  }

  _put(id, smp) {
    if (Date.now() - smp.t > TRAFFIC.ttlMin * 60000) return;
    smp.len = Math.max(30, lineLength(smp.s));
    smp.mid = smp.s[Math.floor(smp.s.length / 2)];
    smp.brg = smp.len > 20 ? bearing(smp.s[0], smp.s[smp.s.length - 1]) : null;
    this.samples.set(id, smp);
    if (this.samples.size > TRAFFIC.maxSamples) this.samples.delete(this.samples.keys().next().value);
    this._emitSoon();
  }

  /** نرسل عينتنا ونضيفها محلياً فوراً */
  publish(sample) {
    if (!sample) return;
    const id = `local-${Date.now().toString(36)}`;
    this._put(id, { t: Date.now(), s: sample.s, r: sample.r });
    if (this.status === 'off') return;
    try {
      fetch(`${SHARED.ntfyBase}/${SHARED.ntfyTrafficTopic}`, { method: 'POST', body: JSON.stringify(sample) }).catch(() => {});
    } catch { /* ignore */ }
  }

  prune(now = Date.now()) {
    let changed = false;
    for (const [id, s] of this.samples) if (now - s.t > TRAFFIC.ttlMin * 60000) { this.samples.delete(id); changed = true; }
    return changed;
  }

  list(now = Date.now()) {
    const out = [];
    for (const s of this.samples.values()) if (now - s.t <= TRAFFIC.ttlMin * 60000) out.push(s);
    return out;
  }

  /** طبقة الخريطة: بس المقاطع البطيئة (أصفر/برتقالي/أحمر) */
  geojson(now = Date.now()) {
    const features = [];
    for (const s of this.samples.values()) {
      const age = (now - s.t) / 60000;
      if (age > TRAFFIC.ttlMin || s.r >= TRAFFIC.slowBelow) continue;
      features.push({ type: 'Feature', properties: { r: s.r, a: Math.round(age * 10) / 10 }, geometry: { type: 'LineString', coordinates: s.s } });
    }
    return { type: 'FeatureCollection', features };
  }

  _emitSoon() {
    if (this._emitT) return;
    this._emitT = setTimeout(() => { this._emitT = null; try { this.onChange(this); } catch (e) { console.error(e); } }, 250);
  }
}

/**
 * التأخير المتوقع (ثواني) على طريق بسبب الازدحام.
 * نقسم الطريق لمقاطع 100م ونأخذ أسوأ عينة بكل مقطع (حتى ما نحسب نفس الزحمة مرتين).
 */
export function trafficDelay(route, samples, fromAlong = 0, now = Date.now()) {
  if (!route || !samples?.length) return { delay: 0, slow: 0 };
  const [w, s, e, n] = route.bbox;
  const pad = 0.003;
  const bins = new Map();
  for (const smp of samples) {
    if (smp.r >= TRAFFIC.slowBelow) continue;
    const mid = smp.mid || smp.s[Math.floor(smp.s.length / 2)];
    if (mid[0] < w - pad || mid[0] > e + pad || mid[1] < s - pad || mid[1] > n + pad) continue;
    const hit = nearestOnLine(route.line, mid, 25);
    if (!hit) continue;
    if (smp.brg != null && Math.abs(angleDiff(smp.brg, hit.bearing)) > 60) continue; // الاتجاه المعاكس
    const half = (smp.len || 30) / 2;
    const a0 = hit.along - half, a1 = hit.along + half;
    if (a1 < fromAlong) continue;
    const age = (now - smp.t) / 60000;
    const weight = clamp(1 - age / TRAFFIC.ttlMin, 0.3, 1);
    const rate = ((1 / Math.max(smp.r, 0.08)) - 1) / TRAFFIC.refSpeed * weight; // ثانية تأخير لكل متر
    for (let b = Math.floor(Math.max(a0, fromAlong) / 100); b <= Math.floor(a1 / 100); b++) {
      if ((bins.get(b) || 0) < rate) bins.set(b, rate);
    }
  }
  let delay = 0;
  for (const rate of bins.values()) delay += Math.min(rate * 100, 240);
  return { delay: Math.round(delay), slow: bins.size * 100 };
}

/** يحسب عينة السرعة من رحلتي الحالية (كل 30 ثانية) */
export class TrafficProbe {
  constructor() { this.win = null; this.still = 0; }

  reset() { this.win = null; this.still = 0; }

  /**
   * @returns {{s:number[][], r:number}|null}
   */
  update({ route, along, t, onRoute }) {
    if (!onRoute || !route) { this.win = null; return null; }
    if (!this.win || this.win.id !== route.id || along < this.win.along - 30) { this.win = { id: route.id, t, along }; return null; }
    const dtMs = t - this.win.t;
    if (dtMs < TRAFFIC.windowMs) return null;
    const dist = along - this.win.along;
    let sample = null;
    if (dist >= 50) {
      const expected = remainingDuration(route, this.win.along) - remainingDuration(route, along);
      const r = clamp(expected / (dtMs / 1000), 0.05, 1.5);
      const coords = sampleLine(sliceLine(route.line, this.win.along, along), 10).map((p) => [r5(p[0]), r5(p[1])]);
      if (coords.length >= 2) sample = { s: coords, r: Math.round(r * 100) / 100 };
      this.still = 0;
    } else if (along < route.line.total - 200) {
      this.still++;
      if (this.still >= TRAFFIC.stillWindows) {
        const coords = sampleLine(sliceLine(route.line, Math.max(0, along - 40), along + 80), 6).map((p) => [r5(p[0]), r5(p[1])]);
        if (coords.length >= 2) sample = { s: coords, r: 0.08 };
        this.still = 0;
      }
    }
    this.win = { id: route.id, t, along };
    return sample;
  }
}
