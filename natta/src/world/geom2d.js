// 📐 نطّة — هندسة مستوية مشتركة (الطرق، الأنهار، مسار السفاري، ومخطّط الطرق): فهرس مكاني للقطع، أقرب نقطة، إعادة أخذ عيّنات ناعمة.
// بلا رسم وبلا DOM.
import { clamp } from '../lib3d.js';

/** فهرس مكاني للقطع المستقيمة حتى نلگه الأقرب بسرعة */
export function segIndex(cell) {
  const m = new Map(), key = (i, j) => i * 100003 + j;
  return {
    add(s, pad) {
      const i0 = Math.floor((Math.min(s.ax, s.bx) - pad) / cell), i1 = Math.floor((Math.max(s.ax, s.bx) + pad) / cell);
      const j0 = Math.floor((Math.min(s.az, s.bz) - pad) / cell), j1 = Math.floor((Math.max(s.az, s.bz) + pad) / cell);
      for (let i = i0; i <= i1; i++) for (let j = j0; j <= j1; j++) { const k = key(i, j); let l = m.get(k); if (!l) { l = []; m.set(k, l); } l.push(s); }
    },
    at(x, z) { return m.get(key(Math.floor(x / cell), Math.floor(z / cell))); },
  };
}
/** أقرب نقطة على قطعة: يرجّع المسافة والنسبة */
export function segDist(s, x, z, out) {
  const t = clamp(((x - s.ax) * s.dx + (z - s.az) * s.dz) * s.il2, 0, 1), px = s.ax + s.dx * t, pz = s.az + s.dz * t;
  out.d = Math.hypot(x - px, z - pz); out.t = t; return out;
}
export const mkSeg = (a, b, extra) => { const dx = b.x - a.x, dz = b.z - a.z; return { ax: a.x, az: a.z, bx: b.x, bz: b.z, dx, dz, il2: 1 / Math.max(1e-6, dx * dx + dz * dz), a, b, ...extra }; };
/** نعيد أخذ عيّنات من مسار بمسافات متساوية (كاتمل-روم حتى المنعطفات تصير ناعمة). closed = حلقة */
export function resample(way, step, closed = false, densify = false) {
  if (densify) { // نقسّم القطع الطويلة قبل المنحنى، حتى ما يطلع «تجاوز» (overshoot) لمن قطعة طويلة جنب قصيرة
    const out = [], n1 = way.length, lim = closed ? n1 : n1 - 1;
    for (let k = 0; k < lim; k++) { const a = way[k], b = way[(k + 1) % n1], L = Math.hypot(b[0] - a[0], b[1] - a[1]), m = Math.max(1, Math.ceil(L / (step * 3))); for (let i = 0; i < m; i++) out.push(a.map((v, j) => v + (b[j] - v) * (i / m))); }
    if (!closed) out.push(way[n1 - 1]); way = out;
  }
  const n0 = way.length, pts = [], at = (k) => (closed ? way[(k + n0) % n0] : way[clamp(k, 0, n0 - 1)]);
  const last = closed ? n0 : n0 - 1;
  for (let k = 0; k < last; k++) {
    const p0 = at(k - 1), p1 = at(k), p2 = at(k + 1), p3 = at(k + 2);
    const L = Math.hypot(p2[0] - p1[0], p2[1] - p1[1]), n = Math.max(1, Math.round(L / step));
    for (let i = 0; i < n; i++) {
      const t = i / n, t2 = t * t, t3 = t2 * t;
      const f = (a, b, c, d) => 0.5 * (2 * b + (-a + c) * t + (2 * a - 5 * b + 4 * c - d) * t2 + (-a + 3 * b - 3 * c + d) * t3);
      const p = { x: f(p0[0], p1[0], p2[0], p3[0]), z: f(p0[1], p1[1], p2[1], p3[1]) };
      if (p1.length > 2) p.a = p1[2] + (p2[2] - p1[2]) * t; // الارتفاع (إذا موجود) يتوزّع خطّياً
      pts.push(p);
    }
  }
  if (!closed) { const e = way[n0 - 1]; const p = { x: e[0], z: e[1] }; if (e.length > 2) p.a = e[2]; pts.push(p); }
  return pts;
}
/** طول المسار التراكمي */
export function arcLen(pts, closed = false) {
  const s = [0]; for (let i = 1; i < pts.length; i++) s.push(s[i - 1] + Math.hypot(pts[i].x - pts[i - 1].x, pts[i].z - pts[i - 1].z));
  if (closed) s.total = s[s.length - 1] + Math.hypot(pts[0].x - pts[pts.length - 1].x, pts[0].z - pts[pts.length - 1].z); else s.total = s[s.length - 1];
  return s;
}
