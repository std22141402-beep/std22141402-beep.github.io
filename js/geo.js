// =====================================================================
//  geo.js — حسابات جغرافية دقيقة وسريعة (بدون أي مكتبة خارجية)
//  كل الإحداثيات بصيغة [lon, lat]
// =====================================================================

export const R = 6371008.8;
const D2R = Math.PI / 180;
const R2D = 180 / Math.PI;
const M_PER_DEG = R * D2R;

export const toRad = (d) => d * D2R;
export const toDeg = (r) => r * R2D;
export const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);

export function haversine(a, b) {
  const dLat = (b[1] - a[1]) * D2R;
  const dLon = (b[0] - a[0]) * D2R;
  const s = Math.sin(dLat / 2) ** 2 +
    Math.cos(a[1] * D2R) * Math.cos(b[1] * D2R) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.min(1, Math.sqrt(s)));
}

export function bearing(a, b) {
  const φ1 = a[1] * D2R, φ2 = b[1] * D2R, Δλ = (b[0] - a[0]) * D2R;
  const y = Math.sin(Δλ) * Math.cos(φ2);
  const x = Math.cos(φ1) * Math.sin(φ2) - Math.sin(φ1) * Math.cos(φ2) * Math.cos(Δλ);
  return (toDeg(Math.atan2(y, x)) + 360) % 360;
}

export function destination(p, brg, dist) {
  const δ = dist / R, θ = brg * D2R;
  const φ1 = p[1] * D2R, λ1 = p[0] * D2R;
  const φ2 = Math.asin(Math.sin(φ1) * Math.cos(δ) + Math.cos(φ1) * Math.sin(δ) * Math.cos(θ));
  const λ2 = λ1 + Math.atan2(Math.sin(θ) * Math.sin(δ) * Math.cos(φ1), Math.cos(δ) - Math.sin(φ1) * Math.sin(φ2));
  return [((toDeg(λ2) + 540) % 360) - 180, toDeg(φ2)];
}

/** فرق الزاوية بين اتجاهين ضمن [-180, 180] */
export function angleDiff(a, b) {
  let d = ((b - a) % 360 + 540) % 360 - 180;
  return d === -180 ? 180 : d;
}

/** تنعيم الزاوية (أقصر طريق دوران) */
export function lerpAngle(a, b, t) {
  return (a + angleDiff(a, b) * t + 360) % 360;
}

export function normAngle(a) { return ((a % 360) + 360) % 360; }

/** إسقاط نقطة على قطعة مستقيمة (تقريب مستوٍ محلي دقيق للمسافات القصيرة) */
export function projectToSegment(p, a, b) {
  const kx = Math.cos(p[1] * D2R) * M_PER_DEG;
  const ky = M_PER_DEG;
  const ax = (a[0] - p[0]) * kx, ay = (a[1] - p[1]) * ky;
  const bx = (b[0] - p[0]) * kx, by = (b[1] - p[1]) * ky;
  const dx = bx - ax, dy = by - ay;
  const len2 = dx * dx + dy * dy;
  let t = len2 > 0 ? -(ax * dx + ay * dy) / len2 : 0;
  t = clamp(t, 0, 1);
  const px = ax + dx * t, py = ay + dy * t;
  return {
    t,
    dist: Math.sqrt(px * px + py * py),
    point: [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t],
  };
}

// إسقاط ميركاتور (نفس الذي تستخدمه MapLibre لحساب line-progress)
function mercX(lon) { return (lon + 180) / 360; }
function mercY(lat) {
  const s = Math.sin(clamp(lat, -85.0511, 85.0511) * D2R);
  return 0.5 - (0.25 * Math.log((1 + s) / (1 - s))) / Math.PI;
}

/**
 * يبني كائن خط مع مسافات تراكمية لتسريع كل العمليات اللاحقة.
 */
export function buildLine(coords) {
  const n = coords.length;
  const cum = new Float64Array(n);
  const mcum = new Float64Array(n);
  const brg = new Float64Array(Math.max(n - 1, 1));
  let mx0 = mercX(coords[0][0]), my0 = mercY(coords[0][1]);
  for (let i = 1; i < n; i++) {
    cum[i] = cum[i - 1] + haversine(coords[i - 1], coords[i]);
    const mx = mercX(coords[i][0]), my = mercY(coords[i][1]);
    mcum[i] = mcum[i - 1] + Math.hypot(mx - mx0, my - my0);
    mx0 = mx; my0 = my;
    brg[i - 1] = bearing(coords[i - 1], coords[i]);
  }
  // للقطع ذات الطول صفر نأخذ اتجاه القطعة السابقة/اللاحقة
  for (let i = 0; i < n - 1; i++) {
    if (cum[i + 1] - cum[i] < 0.01) brg[i] = i > 0 ? brg[i - 1] : (n > 2 ? brg[i + 1] : 0);
  }
  return { coords, cum, mcum, brg, total: cum[n - 1] || 0, mtotal: mcum[n - 1] || 0 };
}

/** أكبر فهرس i بحيث cum[i] <= d (بحث ثنائي) */
export function segmentAt(line, d) {
  const cum = line.cum;
  let lo = 0, hi = cum.length - 1;
  if (d <= 0) return 0;
  if (d >= cum[hi]) return Math.max(0, hi - 1);
  while (lo < hi) {
    const mid = (lo + hi + 1) >> 1;
    if (cum[mid] <= d) lo = mid; else hi = mid - 1;
  }
  return Math.min(lo, cum.length - 2);
}

/** النقطة والاتجاه على مسافة d من بداية الخط */
export function pointAt(line, d) {
  const c = line.coords;
  if (c.length === 1) return { point: c[0], seg: 0, bearing: 0 };
  d = clamp(d, 0, line.total);
  const i = segmentAt(line, d);
  const segLen = line.cum[i + 1] - line.cum[i];
  const t = segLen > 0 ? (d - line.cum[i]) / segLen : 0;
  const a = c[i], b = c[i + 1];
  return { point: [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t], seg: i, bearing: line.brg[i] };
}

/** نسبة التقدم بإحداثيات ميركاتور (تطابق line-progress في MapLibre) */
export function mercFraction(line, d) {
  if (!line.mtotal) return 0;
  const i = segmentAt(line, d);
  const segLen = line.cum[i + 1] - line.cum[i];
  const t = segLen > 0 ? clamp((d - line.cum[i]) / segLen, 0, 1) : 0;
  const m = line.mcum[i] + (line.mcum[i + 1] - line.mcum[i]) * t;
  return clamp(m / line.mtotal, 0, 1);
}

/**
 * يلصق نقطة GPS على الخط.
 * يبحث أولاً بنافذة حول آخر موقع معروف (حتى ما يقفز لشارع موازي أو جسر)،
 * ويعاقب الاتجاه المعاكس، وإذا ما لكى شي قريب يبحث بكل الخط.
 */
export function snapToLine(line, p, opts = {}) {
  const c = line.coords;
  const n = c.length;
  if (n < 2) return { point: c[0], seg: 0, along: 0, dist: haversine(p, c[0]), bearing: 0 };
  const heading = opts.heading;
  const useHeading = heading != null && !Number.isNaN(heading) && (opts.speed ?? 0) > 2;
  const fromAlong = opts.fromAlong ?? null;

  const evalRange = (i0, i1) => {
    let best = null;
    for (let i = i0; i <= i1; i++) {
      const pr = projectToSegment(p, c[i], c[i + 1]);
      let score = pr.dist;
      if (useHeading) {
        const ad = Math.abs(angleDiff(heading, line.brg[i]));
        score += ad > 100 ? 60 : (ad / 100) * 12;
      }
      const along = line.cum[i] + (line.cum[i + 1] - line.cum[i]) * pr.t;
      if (fromAlong != null) {
        // نفضّل التقدم للأمام، ونعاقب الرجوع للخلف أو القفز البعيد
        const jump = along - fromAlong;
        if (jump < -25) score += Math.min(80, (-jump - 25) * 0.5);
        if (jump > 400) score += Math.min(80, (jump - 400) * 0.05);
      }
      if (!best || score < best.score) best = { score, seg: i, t: pr.t, dist: pr.dist, point: pr.point, along };
    }
    return best;
  };

  let best = null;
  if (fromAlong != null) {
    const back = opts.windowBack ?? 150, ahead = opts.windowAhead ?? 1200;
    const i0 = Math.max(0, segmentAt(line, fromAlong - back));
    const i1 = Math.min(n - 2, segmentAt(line, fromAlong + ahead));
    best = evalRange(i0, i1);
  }
  if (!best || best.dist > (opts.globalIfFarther ?? 120)) {
    const g = evalRange(0, n - 2);
    if (!best || g.score < best.score) best = g;
  }
  return { point: best.point, seg: best.seg, along: best.along, dist: best.dist, bearing: line.brg[best.seg] };
}

/** يقطع جزء من الخط بين مسافتين */
export function sliceLine(line, d0, d1) {
  d0 = clamp(d0, 0, line.total); d1 = clamp(d1, 0, line.total);
  if (d1 <= d0) return [pointAt(line, d0).point];
  const a = pointAt(line, d0), b = pointAt(line, d1);
  const out = [a.point];
  for (let i = a.seg + 1; i <= b.seg; i++) out.push(line.coords[i]);
  out.push(b.point);
  return out;
}

export function bboxOf(coords) {
  let w = Infinity, s = Infinity, e = -Infinity, n = -Infinity;
  for (const [x, y] of coords) {
    if (x < w) w = x; if (x > e) e = x;
    if (y < s) s = y; if (y > n) n = y;
  }
  return [w, s, e, n];
}

export function inBBox(p, b) {
  return p[0] >= b[0] && p[0] <= b[2] && p[1] >= b[1] && p[1] <= b[3];
}

/** يحاول قراءة إحداثيات مكتوبة نصاً مثل "33.31, 44.36" */
export function parseLatLon(text) {
  if (!text) return null;
  const t = text.replace(/[٠-٩]/g, (d) => '٠١٢٣٤٥٦٧٨٩'.indexOf(d)).replace(/،/g, ',').trim();
  const m = t.match(/^(-?\d{1,2}(?:\.\d+)?)\s*[, ]\s*(-?\d{1,3}(?:\.\d+)?)$/);
  if (!m) return null;
  let a = parseFloat(m[1]), b = parseFloat(m[2]);
  // العراق: خط العرض ~29–38 وخط الطول ~38–49
  if (Math.abs(a) <= 90 && Math.abs(b) <= 180) return [b, a];
  return null;
}
