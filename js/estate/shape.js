// =====================================================================
//  shape.js — هندسة القطع: المساحة، المحيط، الأضلاع، المستطيل بالأبعاد،
//  فحص التقاطع، و geohash لتقسيم الخريطة لمربعات سريعة التحميل
// =====================================================================
import { haversine, destination, bearing } from '../geo.js';

const D2R = Math.PI / 180;
const M_PER_DEG = 6371008.8 * D2R;

/** تحويل لإحداثيات محلية بالمتر حول نقطة مرجعية (دقيق جداً للقطع) */
function toLocal(pts, ref) {
  const kx = Math.cos(ref[1] * D2R) * M_PER_DEG;
  return pts.map(([x, y]) => [(x - ref[0]) * kx, (y - ref[1]) * M_PER_DEG]);
}

export function closeRing(pts) {
  if (pts.length && (pts[0][0] !== pts[pts.length - 1][0] || pts[0][1] !== pts[pts.length - 1][1])) return [...pts, pts[0]];
  return pts.slice();
}

export function openRing(pts) {
  if (pts.length > 1 && pts[0][0] === pts[pts.length - 1][0] && pts[0][1] === pts[pts.length - 1][1]) return pts.slice(0, -1);
  return pts.slice();
}

/** المساحة بالمتر المربع */
export function polygonArea(pts) {
  const p = openRing(pts);
  if (p.length < 3) return 0;
  const l = toLocal(p, p[0]);
  let s = 0;
  for (let i = 0; i < l.length; i++) {
    const [x1, y1] = l[i], [x2, y2] = l[(i + 1) % l.length];
    s += x1 * y2 - x2 * y1;
  }
  return Math.abs(s) / 2;
}

/** أطوال الأضلاع بالمتر */
export function sideLengths(pts) {
  const p = openRing(pts);
  if (p.length < 2) return [];
  const out = [];
  const n = p.length < 3 ? p.length - 1 : p.length;
  for (let i = 0; i < n; i++) out.push(haversine(p[i], p[(i + 1) % p.length]));
  return out;
}

export function perimeter(pts) {
  return sideLengths(pts).reduce((a, b) => a + b, 0);
}

/** مركز ثقل المضلع (يقع داخل المضلعات المحدبة؛ للمقعرة نستخدم نقطة داخلية) */
export function centroid(pts) {
  const p = openRing(pts);
  if (!p.length) return null;
  if (p.length < 3) return [p.reduce((a, q) => a + q[0], 0) / p.length, p.reduce((a, q) => a + q[1], 0) / p.length];
  const ref = p[0];
  const l = toLocal(p, ref);
  let a = 0, cx = 0, cy = 0;
  for (let i = 0; i < l.length; i++) {
    const [x1, y1] = l[i], [x2, y2] = l[(i + 1) % l.length];
    const f = x1 * y2 - x2 * y1;
    a += f; cx += (x1 + x2) * f; cy += (y1 + y2) * f;
  }
  if (Math.abs(a) < 1e-9) return [ref[0], ref[1]];
  cx /= 3 * a; cy /= 3 * a;
  const kx = Math.cos(ref[1] * D2R) * M_PER_DEG;
  const c = [ref[0] + cx / kx, ref[1] + cy / M_PER_DEG];
  return pointInPolygon(c, p) ? c : interiorPoint(p);
}

export function pointInPolygon(pt, pts) {
  const p = openRing(pts);
  let inside = false;
  for (let i = 0, j = p.length - 1; i < p.length; j = i++) {
    const [xi, yi] = p[i], [xj, yj] = p[j];
    if (((yi > pt[1]) !== (yj > pt[1])) && (pt[0] < ((xj - xi) * (pt[1] - yi)) / (yj - yi) + xi)) inside = !inside;
  }
  return inside;
}

/** نقطة داخل أي مضلع (حتى المقعر): منتصف أطول مقطع أفقي داخلي */
function interiorPoint(p) {
  const ys = p.map((q) => q[1]).sort((a, b) => a - b);
  const y = (ys[0] + ys[ys.length - 1]) / 2;
  const xs = [];
  for (let i = 0, j = p.length - 1; i < p.length; j = i++) {
    const [xi, yi] = p[i], [xj, yj] = p[j];
    if ((yi > y) !== (yj > y)) xs.push(xi + ((y - yi) * (xj - xi)) / (yj - yi));
  }
  xs.sort((a, b) => a - b);
  let best = [p[0][0], y], w = -1;
  for (let k = 0; k + 1 < xs.length; k += 2) if (xs[k + 1] - xs[k] > w) { w = xs[k + 1] - xs[k]; best = [(xs[k] + xs[k + 1]) / 2, y]; }
  return best;
}

function segIntersect(a, b, c, d) {
  const o = (p, q, r) => Math.sign((q[0] - p[0]) * (r[1] - p[1]) - (q[1] - p[1]) * (r[0] - p[0]));
  const o1 = o(a, b, c), o2 = o(a, b, d), o3 = o(c, d, a), o4 = o(c, d, b);
  return o1 !== o2 && o3 !== o4 && o1 !== 0 && o2 !== 0 && o3 !== 0 && o4 !== 0;
}

/** هل الأضلاع تتقاطع؟ (شكل غلط) */
export function selfIntersects(pts) {
  const p = openRing(pts);
  const n = p.length;
  if (n < 4) return false;
  for (let i = 0; i < n; i++) {
    const a = p[i], b = p[(i + 1) % n];
    for (let j = i + 1; j < n; j++) {
      if (Math.abs(i - j) <= 1 || (i === 0 && j === n - 1)) continue;
      if (segIntersect(a, b, p[j], p[(j + 1) % n])) return true;
    }
  }
  return false;
}

/**
 * مستطيل بالأبعاد: واجهة (عرض) × نزال (عمق)، حول مركز، بزاوية دوران
 * rotation: اتجاه الواجهة بالدرجات (0 = شمال)
 */
export function rectangle(center, frontage, depth, rotation = 0) {
  const hw = frontage / 2, hd = depth / 2;
  const a = destination(destination(center, rotation, hd), rotation - 90, hw);
  const b = destination(destination(center, rotation, hd), rotation + 90, hw);
  const c = destination(destination(center, rotation + 180, hd), rotation + 90, hw);
  const d = destination(destination(center, rotation + 180, hd), rotation - 90, hw);
  return [a, b, c, d];
}

/** أبعاد تقريبية (أصغر مستطيل محيط) — تعطي "واجهة × نزال" لأي شكل */
export function approxDims(pts) {
  const p = openRing(pts);
  if (p.length < 3) return null;
  const l = toLocal(p, p[0]);
  let best = null;
  for (let i = 0; i < l.length; i++) {
    const [x1, y1] = l[i], [x2, y2] = l[(i + 1) % l.length];
    const ang = Math.atan2(y2 - y1, x2 - x1);
    const c = Math.cos(-ang), s = Math.sin(-ang);
    let minx = Infinity, maxx = -Infinity, miny = Infinity, maxy = -Infinity;
    for (const [x, y] of l) {
      const rx = x * c - y * s, ry = x * s + y * c;
      if (rx < minx) minx = rx; if (rx > maxx) maxx = rx;
      if (ry < miny) miny = ry; if (ry > maxy) maxy = ry;
    }
    const area = (maxx - minx) * (maxy - miny);
    if (!best || area < best.area) best = { area, w: maxx - minx, h: maxy - miny };
  }
  const front = Math.min(best.w, best.h), depth = Math.max(best.w, best.h);
  const fill = polygonArea(p) / best.area; // 1 = مستطيل تام
  return { frontage: front, depth, rectangular: fill > 0.92 };
}

export function bboxOfPts(pts) {
  let w = Infinity, s = Infinity, e = -Infinity, n = -Infinity;
  for (const [x, y] of pts) { if (x < w) w = x; if (x > e) e = x; if (y < s) s = y; if (y > n) n = y; }
  return [w, s, e, n];
}

/** اتجاه أقرب ضلع للنقطة (لمحاذاة المستطيل مع الشارع) */
export function nearestSegmentBearing(lines, pt) {
  let best = null;
  for (const line of lines) {
    for (let i = 0; i + 1 < line.length; i++) {
      const a = line[i], b = line[i + 1];
      const l = toLocal([a, b, pt], a);
      const [bx, by] = l[1], [px, py] = l[2];
      const len2 = bx * bx + by * by;
      const t = len2 ? Math.max(0, Math.min(1, (px * bx + py * by) / len2)) : 0;
      const d = Math.hypot(px - bx * t, py - by * t);
      if (!best || d < best.d) best = { d, brg: bearing(a, b) };
    }
  }
  return best ? best.brg : null;
}

// ---------------------------------------------------------------------
// geohash — تقسيم العالم لمربعات حتى نحمّل عقارات المنطقة الظاهرة بس
// ---------------------------------------------------------------------
const B32 = '0123456789bcdefghjkmnpqrstuvwxyz';

export function geohash(lat, lon, precision = 7) {
  let latR = [-90, 90], lonR = [-180, 180], hash = '', bit = 0, ch = 0, even = true;
  while (hash.length < precision) {
    const r = even ? lonR : latR, v = even ? lon : lat;
    const mid = (r[0] + r[1]) / 2;
    if (v >= mid) { ch = (ch << 1) | 1; r[0] = mid; } else { ch <<= 1; r[1] = mid; }
    even = !even;
    if (++bit === 5) { hash += B32[ch]; bit = 0; ch = 0; }
  }
  return hash;
}

export function geohashBounds(hash) {
  let latR = [-90, 90], lonR = [-180, 180], even = true;
  for (const c of hash) {
    const v = B32.indexOf(c);
    for (let b = 4; b >= 0; b--) {
      const r = even ? lonR : latR;
      const mid = (r[0] + r[1]) / 2;
      if ((v >> b) & 1) r[0] = mid; else r[1] = mid;
      even = !even;
    }
  }
  return [lonR[0], latR[0], lonR[1], latR[1]];
}

/** مربعات geohash اللي تغطي مستطيل (نقلل الدقة إذا كثرت) */
export function geohashCover(bbox, precision, maxCells = 12) {
  for (let p = precision; p >= 1; p--) {
    const cell = geohashBounds(geohash(bbox[1], bbox[0], p));
    const dw = cell[2] - cell[0], dh = cell[3] - cell[1];
    const nx = Math.ceil((bbox[2] - bbox[0]) / dw) + 1, ny = Math.ceil((bbox[3] - bbox[1]) / dh) + 1;
    if (nx * ny > maxCells * 3 && p > 1) continue;
    const out = new Set();
    for (let i = 0; i <= nx; i++) {
      for (let j = 0; j <= ny; j++) {
        const x = Math.min(bbox[2], bbox[0] + i * dw), y = Math.min(bbox[3], bbox[1] + j * dh);
        out.add(geohash(y, x, p));
      }
    }
    if (out.size <= maxCells || p === 1) return [...out];
  }
  return [];
}
