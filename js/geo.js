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

// ---------------------------------------------------------------------
// فهرس شبكي لقطع الخط — يخلي البحث عن أقرب نقطة سريع جداً حتى لآلاف النقاط
// ---------------------------------------------------------------------
const CELL = 0.003; // تقريباً 300 متر

function cellKey(x, y) { return `${Math.floor(x / CELL)},${Math.floor(y / CELL)}`; }

export function buildSegIndex(line) {
  if (line._idx) return line._idx;
  const idx = new Map();
  const c = line.coords;
  for (let i = 0; i < c.length - 1; i++) {
    const [x1, y1] = c[i], [x2, y2] = c[i + 1];
    const cx0 = Math.floor(Math.min(x1, x2) / CELL), cx1 = Math.floor(Math.max(x1, x2) / CELL);
    const cy0 = Math.floor(Math.min(y1, y2) / CELL), cy1 = Math.floor(Math.max(y1, y2) / CELL);
    for (let cx = cx0; cx <= cx1; cx++) {
      for (let cy = cy0; cy <= cy1; cy++) {
        const k = `${cx},${cy}`;
        let arr = idx.get(k);
        if (!arr) { arr = []; idx.set(k, arr); }
        arr.push(i);
      }
    }
  }
  line._idx = idx;
  return idx;
}

/** أقرب نقطة على الخط باستخدام الفهرس (يرجع null إذا أبعد من maxDist تقريباً) */
export function nearestOnLine(line, p, maxDist = 60) {
  const idx = buildSegIndex(line);
  const cx = Math.floor(p[0] / CELL), cy = Math.floor(p[1] / CELL);
  let best = null;
  const seen = new Set();
  for (let dx = -1; dx <= 1; dx++) {
    for (let dy = -1; dy <= 1; dy++) {
      const arr = idx.get(`${cx + dx},${cy + dy}`);
      if (!arr) continue;
      for (const i of arr) {
        if (seen.has(i)) continue;
        seen.add(i);
        const pr = projectToSegment(p, line.coords[i], line.coords[i + 1]);
        if (!best || pr.dist < best.dist) best = { seg: i, t: pr.t, dist: pr.dist, point: pr.point };
      }
    }
  }
  if (!best || best.dist > maxDist) return null;
  const along = line.cum[best.seg] + (line.cum[best.seg + 1] - line.cum[best.seg]) * best.t;
  return { ...best, along, bearing: line.brg[best.seg] };
}

/** تبسيط خط لعدد نقاط محدود (أخذ عينات منتظمة على المسافة) */
export function sampleLine(coords, maxPoints = 10) {
  if (coords.length <= maxPoints) return coords.slice();
  const line = buildLine(coords);
  const out = [];
  for (let k = 0; k < maxPoints; k++) out.push(pointAt(line, (line.total * k) / (maxPoints - 1)).point);
  return out;
}

/** فلتر كالمان مبسط للـGPS: ينعّم الارتجاج بدون ما يأخر الحركة السريعة */
/**
 * فلتر كالمان بنموذج «سرعة ثابتة» (موقع + سرعة لكل محور).
 * - ما يتأخر ورا السيارة السريعة (النموذج يعرف السيارة ماشية).
 * - يستخدم سرعة واتجاه الـGPS (دوبلر، دقيقة جداً) كقياس إضافي.
 * - لما السيارة واكفة يثبتها (ما ترجف بالإشارة).
 * - يرفض القفزة الوحدة الغلط، وإذا تكررت القفزة بنفس المكان يقبلها (خروج من نفق).
 */
export class GpsSmoother {
  constructor({ accelNoise = 2.5, resetAfterS = 30 } = {}) {
    this.qa = accelNoise * accelNoise;
    this.resetAfterS = resetAfterS;
    this.reset();
  }

  reset() { this.ok = false; this.outlier = null; this.vel = [0, 0]; }

  _init(pos, accuracy, t, speed = null, heading = null) {
    this.lon0 = pos[0]; this.lat0 = pos[1];
    this.kx = 111320 * Math.cos(this.lat0 * Math.PI / 180); this.ky = 110574;
    const r = this._r(accuracy);
    // السرعة الابتدائية من الجهاز إذا موجودة (أدق بداية بعد نفق أو أول قراءة)
    const known = speed != null && Number.isFinite(speed) && heading != null && Number.isFinite(heading) && speed >= 1;
    const h = known ? heading * Math.PI / 180 : 0;
    const vx = known ? speed * Math.sin(h) : 0, vy = known ? speed * Math.cos(h) : 0;
    const pv = known ? Math.pow(Math.max(0.6, speed * 0.08), 2) : (speed != null && speed < 0.4 ? 0.25 : 100);
    // [موقع، سرعة، تباين الموقع، التباين المشترك، تباين السرعة] لكل محور
    this.X = { p: 0, v: vx, P11: r, P12: 0, P22: pv };
    this.Y = { p: 0, v: vy, P11: r, P12: 0, P22: pv };
    this.t = t; this.ok = true; this.outlier = null;
  }

  _r(accuracy) { const a = Math.max(3, accuracy || 15) / 1.5; return a * a; } // دقة 68% ← انحراف لكل محور

  _toLocal(pos) { return [(pos[0] - this.lon0) * this.kx, (pos[1] - this.lat0) * this.ky]; }
  _toLonLat(x, y) { return [this.lon0 + x / this.kx, this.lat0 + y / this.ky]; }

  _predict(a, dt) {
    const q = this.qa, dt2 = dt * dt;
    a.p += a.v * dt;
    a.P11 += 2 * dt * a.P12 + dt2 * a.P22 + q * dt2 * dt2 / 4;
    a.P12 += dt * a.P22 + q * dt2 * dt / 2;
    a.P22 += q * dt2;
  }

  _updPos(a, z, r) {
    const S = a.P11 + r, K1 = a.P11 / S, K2 = a.P12 / S, y = z - a.p;
    a.p += K1 * y; a.v += K2 * y;
    const P11 = a.P11, P12 = a.P12;
    a.P11 = (1 - K1) * P11; a.P12 = (1 - K1) * P12; a.P22 -= K2 * P12;
  }

  _updVel(a, z, r) {
    const S = a.P22 + r, K1 = a.P12 / S, K2 = a.P22 / S, y = z - a.v;
    a.p += K1 * y; a.v += K2 * y;
    const P12 = a.P12, P22 = a.P22;
    a.P11 -= K1 * P12; a.P12 = (1 - K2) * P12; a.P22 = (1 - K2) * P22;
  }

  /**
   * @param {[number,number]} pos  القراءة الخام
   * @param {number} accuracy      دقة الـGPS بالمتر
   * @param {number} t             وقت الاستلام (ملي ثانية)
   * @param {number|null} speed    سرعة الجهاز م/ث (إذا موجودة)
   * @param {number|null} heading  اتجاه الجهاز بالدرجات (إذا موجود)
   * @returns {[number,number]} الموقع المنعّم
   */
  process(pos, accuracy, t, speed = null, heading = null) {
    if (!this.ok || !Number.isFinite(this.t) || (t - this.t) / 1000 > this.resetAfterS || (t - this.t) < -5000) {
      this._init(pos, accuracy, t, speed, heading);
      return this._out();
    }
    const dt = Math.max(0, Math.min(10, (t - this.t) / 1000));
    this.t = Math.max(this.t, t);
    if (dt > 0) { this._predict(this.X, dt); this._predict(this.Y, dt); }
    const [zx, zy] = this._toLocal(pos);
    const r = this._r(accuracy);
    // فحص القفزات: أكثر من 5 انحرافات وأكثر من 80 متر
    const ix = zx - this.X.p, iy = zy - this.Y.p;
    const jump = Math.hypot(ix, iy);
    // بعد انقطاع طويل (نفق/جسر): القفزة الكبيرة = الموقع الحقيقي رجع، نبدأ منه
    if (dt > 4 && jump > Math.max(80, 3 * (accuracy || 15))) {
      this._init(pos, accuracy, t, speed, heading);
      return this._out();
    }
    const sx = this.X.P11 + r, sy = this.Y.P11 + r;
    if (jump > 80 && (ix * ix / sx + iy * iy / sy) > 50) {
      const prev = this.outlier;
      this.outlier = { pos, t };
      // قفزتين متتاليتين بنفس المكان = الموقع فعلاً تغيّر (طلعنا من نفق مثلاً)
      if (prev && haversine(prev.pos, pos) < Math.max(60, (accuracy || 20) * 2) + (Math.abs(t - prev.t) / 1000) * Math.max(speed || 0, 25)) {
        this._init(pos, accuracy, t, speed, heading);
        return this._out();
      }
      return this._out();
    }
    this.outlier = null;
    this._updPos(this.X, zx, r);
    this._updPos(this.Y, zy, r);
    // سرعة الجهاز (دوبلر) قياس دقيق للسرعة
    if (speed != null && Number.isFinite(speed) && speed >= 0) {
      if (speed < 0.4) {
        this._updVel(this.X, 0, 0.09); this._updVel(this.Y, 0, 0.09);
      } else if (heading != null && Number.isFinite(heading) && speed >= 1) {
        const h = heading * Math.PI / 180;
        const rv = Math.pow(Math.max(0.6, speed * 0.08), 2);
        this._updVel(this.X, speed * Math.sin(h), rv); this._updVel(this.Y, speed * Math.cos(h), rv);
      }
    }
    return this._out();
  }

  _out() {
    this.vel = [this.X.v, this.Y.v];
    this.last = this._toLonLat(this.X.p, this.Y.p);
    return this.last;
  }

  /** السرعة المحسوبة (م/ث) */
  get speed() { return Math.hypot(this.vel[0], this.vel[1]); }

  /** الاتجاه المحسوب من السرعة (درجات) أو null إذا واكف */
  get heading() {
    if (this.speed < 1.5) return null;
    return (Math.atan2(this.vel[0], this.vel[1]) * 180 / Math.PI + 360) % 360;
  }

  /** نصف قطر عدم اليقين الحالي بالمتر */
  get uncertainty() { return this.ok ? Math.sqrt((this.X.P11 + this.Y.P11) / 2) * 1.5 : Infinity; }
}
