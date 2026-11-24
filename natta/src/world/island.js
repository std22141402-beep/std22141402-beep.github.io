// 🏝️ نطّة — الجزيرة: الساحل، الجبل الكبير بالنص، الجبال الصغيرة، الهضبة، التلال، الأنهار والشلال، البحيرة، الهور، جزيرة الطيور،
// المناطق وأسماؤها، الطرق الترابية، المباني ونقاط الاستراحة. بلا رسم وبلا DOM (نفس الملف يشتغل بالسيرفر).
// الإحداثيات بالأمتار: +x = الشمال، +z = الشرق. البحر عند y = SEA، فالارتفاع فوك البحر = y − SEA.
// قمة «جبل الهيبة» (مخروط الجبل القديم بطرقه وتحدياته) قاعدتها عند y = −14، يعني ~286 م فوك البحر، والقمة ~395 م.
import { clamp, lerp, smooth, rng, vnoise, fbm, angDiff } from '../lib3d.js';
import { segIndex, segDist, mkSeg, resample } from './geom2d.js';
import { createSafari } from './safari.js';
import { ROAD_NET } from './roadNet.js';

export const NATTA_ISLAND = {
  id: 'natta-island', name: 'جزيرة نطّة', half: 4330, seed: 7531, sea: -300,
  features: [{ type: 'mountain', id: 'M1', x: 0, z: 0 }, { type: 'valley', id: 'V1', x: -200, z: 1350 }],
  spawn: 'fajr',
};

const gauss = (d, w) => Math.exp(-(d * d) / (w * w));
const smax = (a, b, k) => { const h = Math.max(k - Math.abs(a - b), 0) / k; return Math.max(a, b) + h * h * k * 0.25; };
const smin = (a, b, k) => -smax(-a, -b, k);

export function buildIsland(def, M, valleyDef) {
  const SEA = def.sea ?? -300, HALF = def.half || 4330, MX = M.x, MZ = M.z, R = rng(def.seed || 7);
  const SHOULDER = 286; // ارتفاع مصطبة الغيم (قاعدة المخروط) فوك البحر

  // ================================================================ الساحل
  const BAY = 0; // خليج الفجر بالشمال
  function Rc(th) {
    let r = 3420 + 300 * Math.sin(3 * th + 0.7) + 220 * Math.sin(5 * th + 2.1) + 140 * Math.sin(9 * th + 4.0) + 70 * Math.sin(15 * th + 1.3);
    r -= 1650 * gauss(angDiff(th, BAY), 0.27);
    r += 260 * gauss(angDiff(th, -0.52), 0.10) + 220 * gauss(angDiff(th, 0.55), 0.09);
    r -= 380 * gauss(angDiff(th, -1.95), 0.22);
    r += 250 * gauss(angDiff(th, Math.PI), 0.15);
    return Math.min(r, HALF - 300);
  }
  /** المسافة لجوّه الجزيرة (موجب = يابسة) تقريباً بالأمتار، بساحل متعرج مو دائري */
  function coastS(x, z) {
    const wx = (fbm(x * 0.0011 + 3.1, z * 0.0011 - 1.7) - 0.5) * 520, wz = (fbm(x * 0.0011 - 4.3, z * 0.0011 + 2.2) - 0.5) * 520;
    const X = x + wx - MX, Z = z + wz - MZ;
    return Rc(Math.atan2(Z, X)) - Math.hypot(X, Z) + (fbm(x * 0.006, z * 0.006) - 0.5) * 60;
  }
  const CLIFFS = [{ a: 1.32, w: 0.26 }, { a: -0.84, w: 0.13 }, { a: -2.55, w: 0.2 }, { a: 2.3, w: 0.1 }];
  function cliffK(th, x, z) { let k = 0; for (const c of CLIFFS) k = Math.max(k, gauss(angDiff(th, c.a), c.w)); return smooth(0.35, 0.75, k * (0.75 + 0.5 * vnoise(x * 0.004, z * 0.004))); }

  // ================================================================ جبل الهيبة (الكتلة الكبيرة) والجبال الصغيرة
  const BANDS = [ // أحزمة صخر (جروف) بقطاعات: لازم تلف أو تلگه فتحة
    { a: 0.95, w: 0.45, r: 760, h: 16 }, { a: -2.2, w: 0.5, r: 900, h: 18 }, { a: 2.4, w: 0.35, r: 640, h: 14 },
    { a: -0.45, w: 0.3, r: 1200, h: 12 }, { a: 1.9, w: 0.4, r: 1300, h: 15 }, { a: -1.45, w: 0.35, r: 560, h: 13 },
  ];
  function massifA(x, z) {
    const dx = x - MX, dz = z - MZ, r = Math.hypot(dx, dz);
    if (r < 300) return SHOULDER;
    const th = Math.atan2(dz, dx);
    let Rm = 2150 + 380 * Math.sin(3 * th + 0.4) + 260 * Math.sin(5 * th + 2.2) + 160 * Math.sin(8 * th + 1.1);
    Rm -= 700 * gauss(angDiff(th, BAY), 0.33);
    Rm *= 1 + (fbm(x * 0.0016 + 9, z * 0.0016) - 0.5) * 0.35;
    const t = clamp((r - 300) / (Rm - 300), 0, 1);
    let a = SHOULDER * (1 - t * t * (3 - 2 * t));
    a *= 1 + 0.1 * Math.sin(11 * th + r * 0.0035) * smooth(320, 700, r) * (1 - t);
    for (const b of BANDS) { const m = smooth(b.w, b.w * 0.55, Math.abs(angDiff(th, b.a))); if (m > 0) a -= b.h * m * smooth(b.r - 6, b.r + 6, r) * (1 - t * 0.6); }
    a += ((fbm(x * 0.004 + 2, z * 0.004 - 6) - 0.5) * 46 + (fbm(x * 0.02, z * 0.02) - 0.5) * 5) * smooth(300, 650, r);
    return a;
  }
  const PEAKS = [
    { id: 'falcons', x: 1900, z: 1900, h: 230, r: 820 }, // جبل الصقور
    { id: 'kohl', x: 1550, z: -1950, h: 185, r: 600, dark: true }, // جبل الكحل
    { id: 'fort', x: -2500, z: -2000, h: 58, r: 300 }, // تلة الحصن
  ];
  function peakA(p, x, z) {
    const d0 = Math.hypot(x - p.x, z - p.z); if (d0 > p.r * 1.3) return -1e9;
    const d = d0 * (1 + 0.28 * (fbm(x * 0.003 + p.x * 0.01, z * 0.003) - 0.5)), k = clamp(1 - d / p.r, 0, 1);
    return p.h * Math.pow(k, 1.6) * (0.85 + 0.3 * fbm(x * 0.01, z * 0.01)) * (1 + 0.12 * Math.sin(7 * Math.atan2(z - p.z, x - p.x) + d * 0.012) * k * smooth(0, 90, d0));
  }
  const HILLS = { x: -2000, z: 1400, r: 950, amp: 78 }; // تلال الزعتر
  const PLATEAU = { x: -1000, z: 2500, r: 520, top: 112, ramps: [-2.2, 2.6] }; // هضبة الخيّالة
  function plateauA(x, z) {
    const P = PLATEAU, d = Math.hypot(x - P.x, z - P.z); if (d > P.r + 420) return -1e9;
    const th = Math.atan2(z - P.z, x - P.x), rP = P.r * (1 + 0.18 * (vnoise(th * 2.2 + 11, 3.3) - 0.5));
    let ramp = 0; for (const a of P.ramps) ramp = Math.max(ramp, smooth(0.28, 0.12, Math.abs(angDiff(th, a))));
    const edge = smooth(rP + lerp(10, 300, ramp), rP - 26, d);
    return (P.top + (fbm(x * 0.004 + 2, z * 0.004) - 0.5) * 22 + (fbm(x * 0.02, z * 0.02) - 0.5) * 3) * edge;
  }
  let ISLET = null; // جزيرة الطيور والعتبة الرملية (تنحسب تحت بعد ما نلگه الساحل)

  function baseA(x, z) {
    const s = coastS(x, z), th = Math.atan2(z - MZ, x - MX), ck = cliffK(th, x, z);
    let a;
    if (s < 0) a = Math.max(-38, s * lerp(0.035, 0.3, ck) - 0.4);
    else a = 1.4 + Math.min(s, 1500) * 0.011 + (fbm(x * 0.0035 + 1, z * 0.0035 + 8) - 0.5) * 26 * smooth(40, 500, s) + (fbm(x * 0.03, z * 0.03) - 0.5) * 1.4 + ck * 26 * smooth(-4, 28, s);
    const fade = smooth(-25, 160, s);
    if (fade > 0) {
      let m = massifA(x, z);
      for (const p of PEAKS) { const pa = peakA(p, x, z); if (pa > 0) m = lerp(m, smax(m, pa, 18), smooth(0, 15, pa)); }
      const hd = Math.hypot(x - HILLS.x, z - HILLS.z);
      if (hd < HILLS.r) a += HILLS.amp * smooth(HILLS.r, HILLS.r * 0.45, hd) * Math.pow(fbm(x * 0.0055 + 3, z * 0.0055 - 2), 1.5) * fade;
      const mm = m * fade; a = lerp(Math.max(a, mm), smax(a, mm, 14), smooth(0, 12, mm));
      const pl = plateauA(x, z) * fade; if (pl > 0) a = lerp(Math.max(a, pl), smax(a, pl, 10), smooth(0, 10, pl));
    }
    if (ISLET) {
      const d = Math.hypot(x - ISLET.x, z - ISLET.z);
      if (d < ISLET.r * 1.6) a = Math.max(a, 13 * Math.pow(clamp(1 - d / ISLET.r, 0, 1), 1.2) * (0.8 + 0.4 * fbm(x * 0.02, z * 0.02)) - 1.2);
      const q = segDist(ISLET.bar, x, z, _sd); if (q.d < 40) a = Math.max(a, -0.5 + (fbm(x * 0.02, z * 0.02) - 0.5) * 0.5 - smooth(18, 40, q.d) * 3);
    }
    if (SAFARI) a = SAFARI.terrain(x, z, a, s); // 🏁 كثبان سفاري اللؤلؤ ومسارها
    return a;
  }
  let SAFARI = null;
  const _sd = { d: 0, t: 0 };

  /** نلگه الساحل على اتجاه معيّن (نمشي من الجبل لبرّه) */
  function shoreAt(th, r0 = 600) {
    const c = Math.cos(th), s = Math.sin(th); let r = r0;
    while (r < HALF && coastS(MX + c * r, MZ + s * r) > 0) r += 12;
    return { r, x: MX + c * r, z: MZ + s * r, c, s };
  }
  SAFARI = createSafari({ shoreAt }); SAFARI.bake(coastS); // 🏁 الكثبان ورا شاطئ اللؤلؤ (لازم قبل أي ارتفاع)
  const at = (sh, back, side = 0) => ({ x: sh.x - sh.c * back - sh.s * side, z: sh.z - sh.s * back + sh.c * side });
  { // جزيرة الطيور: مقابل الساحل الجنوبي الشرقي، تمشي لها بالماي الضحل
    const th = 2.29, sh = shoreAt(th), ix = MX + Math.cos(th) * (sh.r + 330), iz = MZ + Math.sin(th) * (sh.r + 330);
    ISLET = { x: ix, z: iz, r: 170, bar: mkSeg({ x: sh.x - Math.cos(th) * 30, z: sh.z - Math.sin(th) * 30 }, { x: ix, z: iz }) };
  }

  // ================================================================ أماكن المعالم (تنحسب من الساحل الحقيقي)
  const shBay = shoreAt(BAY), FAJR = at(shBay, 230); // ساحة الفجر: يم الخليج والجبل وراها
  const shCapeW = shoreAt(-0.52), LIGHT = at(shCapeW, 45);
  const shMarsh = shoreAt(-1.94), MARSH = { ...at(shMarsh, 380), r: 640 };
  const shPearl = shoreAt(Math.PI), PEARL = at(shPearl, 70);
  const shGulls = shoreAt(1.32), GULLS = at(shoreAt(1.08), 60);
  const VAL = { x: valleyDef.x + 60, z: valleyDef.z, r: 210 }; // مصطبة وادي الغزلان
  const VILLAGE = { x: 1150, z: -820, r: 230 }, HUTS = { x: 560, z: -1580, r: 70 }, LAKE = { x: 900, z: -2350, r: 250 }, FORT = { x: -2500, z: -2000 };
  const GROVES = { x: FAJR.x - 300, z: 640, r: 340 }, WHEAT = { x: -1500, z: -1650, r: 520 };

  // ---------------- تسوية الأرض تحت المعالم (ساحة، مصاطب، قمم صغيرة)
  const FLATS = []; // { x, z, r, fall, a } : تسوية دائرية
  const pre = (x, z) => baseA(x, z);
  FLATS.push({ x: FAJR.x, z: FAJR.z, r: 52, fall: 40, a: Math.max(7, pre(FAJR.x, FAJR.z)) });
  FLATS.push({ x: VAL.x, z: VAL.z, r: VAL.r - 70, fall: 70, a: pre(VAL.x, VAL.z) });
  FLATS.push({ x: LIGHT.x, z: LIGHT.z, r: 26, fall: 25, a: Math.max(4, pre(LIGHT.x, LIGHT.z)) });
  FLATS.push({ x: HUTS.x, z: HUTS.z, r: HUTS.r, fall: 40, a: pre(HUTS.x, HUTS.z) });
  FLATS.push({ x: FORT.x, z: FORT.z, r: 34, fall: 30, a: pre(FORT.x, FORT.z) });
  function siteA(x, z, a) {
    for (const f of FLATS) { const d = Math.hypot(x - f.x, z - f.z); if (d < f.r + f.fall) a = lerp(f.a, a, smooth(f.r, f.r + f.fall, d)); }
    const dv = Math.hypot(x - VILLAGE.x, z - VILLAGE.z); // مدرّجات القرية: درجات 3 م
    if (dv < VILLAGE.r + 60) { const s = a / 3, f = s - Math.floor(s), q = (Math.floor(s) + smooth(0.8, 1, f)) * 3; a = lerp(q, a, smooth(VILLAGE.r, VILLAGE.r + 60, dv)); }
    return a;
  }

  // ================================================================ الطرق الترابية (تربط المناطق، وتتسوّى بيها الأرض)
  const ring = []; for (let k = 0; k <= 24; k++) { const a = (k / 24) * Math.PI * 2; ring.push([MX + Math.cos(a) * 278, MZ + Math.sin(a) * 278]); }
  const P = (o) => [o.x, o.z];
  const ROAD_DEFS = [
    { name: 'طريق الفجر', hw: 1.9, way: [P(FAJR), [FAJR.x - 140, 220], [1520, 120], [1330, 260], [1150, 150], [980, 270], [820, 150], [660, 250], [520, 120], [400, 200], [300, 80], [195, 42]] },
    { name: 'طريق الغيم', hw: 1.5, way: ring },
    { name: 'درب الرطب', hw: 1.6, way: [P(FAJR), [FAJR.x - 60, 420], [GROVES.x, GROVES.z], [1500, 1100], [1650, 1450]] },
    { name: 'طريق القرية', hw: 1.8, way: [P(FAJR), [FAJR.x - 120, -200], [1450, -450], [VILLAGE.x + 60, VILLAGE.z + 120], [VILLAGE.x, VILLAGE.z], [VILLAGE.x + 250, -1050], [LIGHT.x - 300, LIGHT.z + 150], P(LIGHT)] },
    { name: 'درب البحيرة', hw: 1.4, way: [[VILLAGE.x, VILLAGE.z], [1180, -1350], [LAKE.x + 300, LAKE.z + 120], [LAKE.x + 200, LAKE.z + 300], [HUTS.x + 150, HUTS.z - 200], P(HUTS)] },
    { name: 'درب الحطّابين', hw: 1.4, way: [[MX - 20, MZ - 278], [60, -650], [300, -1100], P(HUTS)] },
    { name: 'طريق الهور', hw: 1.6, way: [[MX - 197, MZ - 197], [-600, -700], [-1000, -1200], [WHEAT.x, WHEAT.z], [MARSH.x - 150, MARSH.z + 350], P(MARSH)] },
    { name: 'درب الحصن', hw: 1.3, way: [[WHEAT.x, WHEAT.z], [-2050, -1830], P(FORT)] },
    { name: 'طريق البلوط', hw: 1.6, way: [[MX - 278, MZ], [-900, -100], [-1600, -250], [-2300, -200], [PEARL.x + 250, PEARL.z - 100], P(PEARL)] },
    { name: 'طريق الوادي', hw: 1.6, way: [[MX, MZ + 278], [-150, 700], [-250, 1100], [valleyDef.x - 75, valleyDef.z], [-700, 1500], [-1300, 1700], [-1800, 2150], [ISLET.bar.ax + 60, ISLET.bar.az - 60], [ISLET.bar.ax, ISLET.bar.az]] },
    { name: 'درب الهضبة', hw: 1.3, way: [[-1300, 1700], [-1000 + Math.cos(-2.2) * 900, 2500 + Math.sin(-2.2) * 900], [PLATEAU.x, PLATEAU.z]] },
    { name: 'درب الشلال', hw: 1.4, way: [[MX + 197, MZ + 197], [480, 600], [700, 1150], [560, 1780], [650, 2400], [GULLS.x - 120, GULLS.z - 200], P(GULLS)] },
  ];
  // ================================================================ 🛣️ الطرق المعبّدة (مخطّطة مسبقاً بـ tools/plan-roads.mjs على الأرض الحقيقية)
  // كل طريق: نقاط كل 10 م بيها ارتفاع السطح بعد الحفر والردم → نليّنها كل 4 م. النوع حسب المنطقة:
  //   إسفلت (الدائري والفرعية)، بلاط متداخل (الساحة، القرية، المنارة، الشوارع)، حجر بازلت (الحصن، الحطّابين، الهضبة)، وجسر ترابي بالهور
  const PAVED = [], BRIDGES = [], CULVERTS = [], SIGNS = [], WELCOME = [];
  const pIdxR = segIndex(32);
  const STYLE_AT = (x, z, cls) => {
    const near = (p, r) => Math.hypot(x - p.x, z - p.z) < r;
    if (cls === 'street') return 'pavers';
    if (near(VILLAGE, VILLAGE.r + 40) || near(FAJR, 150) || near(LIGHT, 140)) return 'pavers';
    if (near(FORT, 230) || near(HUTS, 130) || near(PLATEAU, PLATEAU.r * 0.92)) return 'cobble';
    return 'asphalt';
  };
  if (!globalThis.NATTA_PLAN) {
    for (const rd of ROAD_NET.roads) {
      const way = []; for (let k = 0; k < rd.pts.length; k += 3) way.push([rd.pts[k], rd.pts[k + 1], rd.pts[k + 2]]);
      const pts = resample(way, 4, rd.closed);
      const road = { name: rd.name, cls: rd.cls, hw: rd.hw, closed: rd.closed, paved: true, pts };
      for (const p of pts) { p.style = STYLE_AT(p.x, p.z, rd.cls); p.causeway = Math.hypot(p.x - MARSH.x, p.z - MARSH.z) < MARSH.r * 0.75; }
      PAVED.push(road);
      const n = pts.length;
      for (let i = 0; i < (rd.closed ? n : n - 1); i++) pIdxR.add(mkSeg(pts[i], pts[(i + 1) % n], { road, i }), rd.hw + 18);
    }
    for (const b of ROAD_NET.bridges) { const road = PAVED[b.road]; BRIDGES.push({ ...b, hw: road.hw, c: b.dx, s: b.dz, y: b.deck, name: road.name }); }
    CULVERTS.push(...ROAD_NET.culverts.map((c) => ({ ...c, hw: PAVED[c.road].hw })));
    // لوحة الاتجاهات بالتقاطع: على الزاوية الفاضية (بنص أوسع فراغ بين الفروع)، مو بنص الشارع
    for (const sg of ROAD_NET.signs) {
      const an = sg.arms.map((a) => a.ang).sort((p, q) => p - q); let gap = -1, mid = 0;
      an.forEach((a0, i) => { const a1 = i === an.length - 1 ? an[0] + Math.PI * 2 : an[i + 1]; if (a1 - a0 > gap) { gap = a1 - a0; mid = (a0 + a1) / 2; } });
      if (an.length === 2 && gap > Math.PI * 1.6) mid += Math.PI; // فرعين متقابلين: نطلع على الجنب
      const off = 7.5; SIGNS.push({ ...sg, px: sg.x + Math.cos(mid) * off, pz: sg.z + Math.sin(mid) * off });
    }
    WELCOME.push(...ROAD_NET.welcome.map((w) => ({ ...w, px: w.x - w.dz * (w.hw + 2.2), pz: w.z + w.dx * (w.hw + 2.2) }))); // يمين الشارع، قبال الجاي
  }
  const inBridge = (x, z, extra = 0) => BRIDGES.find((b) => { const dx = x - b.x, dz = z - b.z; return Math.abs(dx * b.c + dz * b.s) < b.half + extra && Math.abs(-dx * b.s + dz * b.c) < b.hw + 3; });
  const _pq2 = { d: 0, t: 0 };
  /** أقرب طريق معبّد: المسافة، ارتفاع السطح، نص العرض، النوع */
  function nearPaved(x, z) {
    const l = pIdxR.at(x, z); if (!l) return null;
    let best = null, bd = 1e9, bt = 0;
    for (const sg of l) { segDist(sg, x, z, _pq2); if (_pq2.d < bd) { bd = _pq2.d; best = sg; bt = _pq2.t; } }
    if (!best) return null;
    return { d: bd, a: lerp(best.a.a, best.b.a, bt), hw: best.road.hw, road: best.road, style: best.a.style, causeway: best.a.causeway, i: best.i, t: bt };
  }
  const _pr = [], _pd = [], _pa = [], RANK = { hwy: 3, road: 2, street: 1 };
  /** الأرض تحت الطريق المعبّد وجنبه: السطح مستوي، والكتف (حفر أو ردم) ينزل/يصعد للأرض بميل ~1:1.3. التقاطعات تتمازج */
  function pavedA(x, z, a) {
    const l = pIdxR.at(x, z); if (!l) return a;
    let n = 0;
    for (const sg of l) {
      segDist(sg, x, z, _pq2); const r = sg.road; let k = _pr.indexOf(r, 0); if (k >= n || k < 0) { k = n++; _pr[k] = r; _pd[k] = 1e9; }
      if (_pq2.d < _pd[k]) { _pd[k] = _pq2.d; _pa[k] = lerp(sg.a.a, sg.b.a, _pq2.t); }
    }
    let wsum = 0, asum = 0, wmax = 0, top = -1, topRank = -1;
    for (let k = 0; k < n; k++) {
      const r = _pr[k], band = r.hw + 0.9, D = Math.abs(_pa[k] - a), sh = 2.5 + 1.3 * D, d = _pd[k];
      if (d >= band + sh) continue;
      const w = 1 - smooth(band, band + sh, d); wsum += w; asum += w * _pa[k]; if (w > wmax) wmax = w;
      if (d < band && RANK[r.cls] > topRank) { topRank = RANK[r.cls]; top = k; } // جوّه سطح طريق: الأعلى درجة يحكم (التقاطع ما يتخسّف)
    }
    const at = top >= 0 ? _pa[top] : 0; _pr.length = 0;
    if (!wsum || inBridge(x, z)) return a; // تحت الجسر: النهر يبقى
    return top >= 0 ? at : lerp(a, asum / wsum, wmax);
  }

  // ================================================================ الطرق الترابية (تربط المناطق، وتتسوّى بيها الأرض) — اللي صار معبّد ينشال
  const roads = [], rIdx = segIndex(48), rIdxAll = segIndex(48); // rIdxAll = كل الطرق الترابية قبل التقطيع (الأنهار تنحسب عليها، حتى تبقى نفس اللي خطّط عليها المخطّط)
  for (const rd of ROAD_DEFS) {
    const pts = resample(rd.way, 5);
    for (const p of pts) p.a0 = siteA(p.x, p.z, baseA(p.x, p.z));
    for (let i = 0; i < pts.length; i++) { let s = 0, n = 0; for (let k = -6; k <= 6; k++) { const q = pts[clamp(i + k, 0, pts.length - 1)]; s += q.a0; n++; } pts[i].a = Math.max(s / n, 0.6); }
    { const whole = { name: rd.name, hw: rd.hw, pts }; for (let i = 0; i < pts.length - 1; i++) rIdxAll.add(mkSeg(pts[i], pts[i + 1], { road: whole }), rd.hw + 8); }
    // نقطّعه: نشيل كل جزء قريب من طريق معبّد (صار مبلّط أو يعبره)
    const keep = pts.map((p) => { const q = nearPaved(p.x, p.z); return !(q && q.d < q.hw + 10); });
    let run = [];
    const flush = () => { if (run.length >= 8) { const road = { name: rd.name, hw: rd.hw, pts: run }; roads.push(road); for (let i = 0; i < run.length - 1; i++) rIdx.add(mkSeg(run[i], run[i + 1], { road }), rd.hw + 8); } run = []; };
    pts.forEach((p, i) => { if (keep[i]) run.push(p); else flush(); }); flush();
  }
  const _q = { d: 0, t: 0 };
  /** أقرب طريق ترابي: المسافة وارتفاع الطريق (فوك البحر) */
  function nearDirt(x, z) {
    const l = rIdx.at(x, z); if (!l) return null;
    let best = null, bd = 1e9, bt = 0;
    for (const s of l) { segDist(s, x, z, _q); if (_q.d < bd) { bd = _q.d; best = s; bt = _q.t; } }
    return best ? { d: bd, a: lerp(best.a.a, best.b.a, bt), hw: best.road.hw, road: best.road } : null;
  }
  /** أقرب طريق (ترابي أو معبّد) */
  function nearRoad(x, z) { const a = nearDirt(x, z), b = nearPaved(x, z); if (!a) return b; if (!b) return a; return b.d - b.hw < a.d - a.hw ? b : a; }
  function roadA(x, z, a) { const r = nearDirt(x, z); if (r && r.d < r.hw + 6) a = lerp(r.a, a, smooth(r.hw + 0.3, r.hw + 6, r.d)); return a; }
  function roadAllA(x, z, a) { const l = rIdxAll.at(x, z); if (!l) return a; let best = null, bd = 1e9, bt = 0; for (const sg of l) { segDist(sg, x, z, _q); if (_q.d < bd) { bd = _q.d; best = sg; bt = _q.t; } } if (best && bd < best.road.hw + 6) a = lerp(lerp(best.a.a, best.b.a, bt), a, smooth(best.road.hw + 0.3, best.road.hw + 6, bd)); return a; }

  // ================================================================ الأنهار (من نبع بالجبل للبحر) والشلال
  const SCARP = { x: 590, z: 1950, nx: 0.17, nz: -0.985, len: 300, h: 16 }; // جرف شلال المرايا (عكس اتجاه الماي)
  const scarpA = () => 0; // الشلالات تطلع طبيعية من نزلات النهر نفسه
  const RIVER_DEFS = [
    { id: 'silver', name: 'نهر الفضة', w0: 2.4, w1: 8, depth: 1.5, way: [[520, 720], [640, 1050], [660, 1400], [600, 1750], [592, 1950], [620, 2300], [760, 2700], [900, 3100], [shGulls.x + shGulls.c * 150, shGulls.z + shGulls.s * 150]] },
    { id: 'anbar', name: 'نهر العنبر', w0: 2.2, w1: 7, depth: 1.4, way: [[-330, -650], [-470, -1000], [-640, -1450], [-800, -1900], [-960, -2300], [MARSH.x + 60, MARSH.z + 330], [MARSH.x, MARSH.z]] },
    { id: 'dates', name: 'ساقية الرطب', w0: 1.2, w1: 2.4, depth: 0.7, way: [[640, 320], [900, 480], [1250, 560], [GROVES.x + 100, GROVES.z - 40], [shBay.x + 60, 560]] },
  ];
  const rivers = [], wIdx = segIndex(64), falls = [];
  const preRiver = (x, z) => roadAllA(x, z, siteA(x, z, baseA(x, z) + scarpA(x, z)));
  for (const rd of RIVER_DEFS) {
    const pts = resample(rd.way, 8); let lv = 1e9;
    for (let i = 0; i < pts.length; i++) {
      const p = pts[i], u = i / (pts.length - 1), g = preRiver(p.x, p.z);
      lv = Math.min(lv - 0.03, g - lerp(0.9, 0.5, u)); p.lv = Math.max(lv, rd.id === 'anbar' ? 0.3 : 0.05); p.w = lerp(rd.w0, rd.w1, Math.pow(u, 0.8));
      if (i && pts[i - 1].lv - p.lv > 2.5) falls.push({ river: rd.id, x: (p.x + pts[i - 1].x) / 2, z: (p.z + pts[i - 1].z) / 2, top: pts[i - 1].lv, bot: p.lv, w: p.w, dx: p.x - pts[i - 1].x, dz: p.z - pts[i - 1].z });
    }
    const river = { ...rd, pts };
    rivers.push(river);
    for (let i = 0; i < pts.length - 1; i++) wIdx.add(mkSeg(pts[i], pts[i + 1], { river }), pts[i].w + 70);
  }
  /** أقرب نهر: المسافة الجانبية، مستوى الماي (فوك البحر)، والعرض */
  function nearRiver(x, z) {
    const l = wIdx.at(x, z); if (!l) return null;
    let best = null, bd = 1e9, bt = 0;
    for (const s of l) { segDist(s, x, z, _q); if (_q.d < bd) { bd = _q.d; best = s; bt = _q.t; } }
    if (!best) return null;
    return { d: bd, lv: lerp(best.a.lv, best.b.lv, bt), w: lerp(best.a.w, best.b.w, bt), river: best.river, dx: best.dx, dz: best.dz };
  }
  function riverA(x, z, a) {
    const q = nearRiver(x, z); if (!q) return a;
    if (q.d < q.w) { const ford = nearDirt(x, z), dep = ford && ford.d < ford.hw + 3 ? 0.35 : q.river.depth; a = Math.min(a, q.lv - 0.12 - dep * (1 - (q.d / q.w) ** 2)); }
    else a = Math.min(a, smin(q.lv + 0.25 + (q.d - q.w) * 0.42, a, 1.5));
    return a;
  }

  // ================================================================ البحيرة والهور
  const bigFall = falls.filter((f) => f.river === 'silver').sort((a, b) => (b.top - b.bot) - (a.top - a.bot))[0];
  const FALLS = bigFall ? { x: bigFall.x, z: bigFall.z } : { x: SCARP.x, z: SCARP.z };
  const lakeLv = siteA(LAKE.x, LAKE.z, baseA(LAKE.x, LAKE.z)) - 2.5;
  const LAKES = [{ id: 'moon', name: 'بحيرة القمر', x: LAKE.x, z: LAKE.z, r: LAKE.r, lv: lakeLv }];
  const lakeR = (L, x, z) => L.r * (1 + 0.2 * (vnoise(Math.atan2(z - L.z, x - L.x) * 2.4 + 5, 1.1) - 0.5));
  const MARSH_LV = 0.3;
  function waterA(x, z, a) {
    for (const L of LAKES) {
      const d = Math.hypot(x - L.x, z - L.z); if (d > L.r * 1.25 + 160) continue;
      const rL = lakeR(L, x, z);
      if (d < rL) a = Math.min(a, L.lv - 0.2 - 3.6 * (1 - (d / rL) ** 2)); else a = Math.min(a, smin(L.lv + 0.35 + (d - rL) * 0.18, a, 1.5));
    }
    const dm = Math.hypot(x - MARSH.x, z - MARSH.z);
    if (dm < MARSH.r) { const tgt = 0.22 + (fbm(x * 0.022 + 4, z * 0.022) - 0.47) * 2.4; a = lerp(tgt, a, smooth(MARSH.r * 0.55, MARSH.r, dm)); }
    return a;
  }

  // ================================================================ المباني: ساحة الفجر، القرية، الأكواخ، الهور، المنارة، الحصن، الشاطئ، البحيرة
  const sites = []; // { kind, x, z, rot, w, d, h, ... } (الارتفاع ينحسب بالجغرافيا)
  const pads = [], pIdx = segIndex(32); // تسوية مستطيلة تحت كل بناية
  const addSite = (s, pad = true) => { sites.push(s); if (pad && s.w) { const p = { x: s.x, z: s.z, c: Math.cos(s.rot || 0), s: Math.sin(s.rot || 0), hw: s.w / 2 + 0.6, hd: s.d / 2 + 0.6, a: null }; pads.push(p); s.pad = p; pIdx.add(mkSeg(p, p), Math.max(p.hw, p.hd) + 4); } return s; };
  const preAll = (x, z) => pavedA(x, z, waterA(x, z, riverA(x, z, roadA(x, z, siteA(x, z, baseA(x, z) + scarpA(x, z))))));
  const freeOf = (x, z, r) => { const rd = nearRoad(x, z); if (rd && rd.d < rd.hw + r) return false; const rv = nearRiver(x, z); if (rv && rv.d < rv.w + r + 4) return false; return !sites.some((s) => Math.hypot(s.x - x, s.z - z) < r + Math.max(s.w || 2, s.d || 2) * 0.6); };
  { // 🌅 ساحة الفجر: نافورة، نخل، سوق، چايخانة، لوحة الطلبات، لافتة، بوابة صوب الجبل، رصيف ومشاحيف
    const F = FAJR, rot = 0, L = (u, v) => ({ x: F.x + u, z: F.z + v });
    addSite({ kind: 'square', ...L(0, 0), rot, w: 64, d: 96, h: 0 }, false);
    addSite({ kind: 'fountain', ...L(0, 0), rot, r: 3.4 }, false);
    for (let k = 0; k < 8; k++) { const a = (k / 8) * Math.PI * 2 + 0.2; addSite({ kind: 'palm', ...L(Math.cos(a) * 15, Math.sin(a) * 15), s: 0.95 + (k % 3) * 0.08 }, false); }
    for (let k = 0; k < 5; k++) addSite({ kind: 'stall', ...L(-18 + k * 9, -38), rot: Math.PI / 2, w: 3.2, d: 2.4, h: 2.6, tint: k });
    addSite({ kind: 'teahouse', ...L(-20, 30), rot: Math.atan2(-30, 20), w: 6, d: 10, h: 3.3 }); // تواجه النافورة
    addSite({ kind: 'board', ...L(25, 0), rot: Math.PI, w: 1.9, d: 4.6, h: 4.2 });
    // 🔧 كراج الفجر: يم الساحة من الغرب، بابه صوب الساحة، وقدّامه ساحة كونكريت ومضخة بانزين. جوّه بكي صحراوي
    addSite({ kind: 'garage', ...L(4, -80), rot: Math.PI / 2, w: 10.4, d: 8.4, h: 4.6 });
    addSite({ kind: 'apron', ...L(4, -68.8), rot: Math.PI / 2, w: 12, d: 9, h: 0 });
    addSite({ kind: 'fuel', ...L(-2.4, -70.5), rot: Math.PI / 2, w: 0.8, d: 0.55, h: 1.9 }); // 📜 لوحة الطلبات: بمحور الساحة (البوابة ← النافورة ← اللوحة) وظهرها للخليج
    addSite({ kind: 'signpost', ...L(-26, 8), rot: 0 }, false);
    addSite({ kind: 'gate', ...L(-31, 0), rot: 0, w: 1.2, d: 9, h: 5.2 }, false);
    for (const [u, v] of [[-30, -46], [-30, 46], [30, -46], [30, 46], [0, -46], [0, 46], [-30, 22], [-30, -22]]) addSite({ kind: 'lamp', ...L(u, v) }, false);
    addSite({ kind: 'pier', x: shBay.x + shBay.c * 6, z: shBay.z - 40 + shBay.s * 6, rot: Math.atan2(shBay.s, shBay.c), w: 46, d: 3, h: 0 }, false); // رصيف يدخل بالخليج
    for (let k = 0; k < 3; k++) addSite({ kind: 'boat', x: shBay.x + 10 + k * 7, z: shBay.z - 30 + k * 9, rot: 0.4 + k * 0.5 }, false);
  }
  { // 🏘️ قرية الطين: بيوت طين على المدرّجات، تواجه الوادي
    const V0 = VILLAGE;
    for (let tries = 0, n = 0; n < 22 && tries < 900; tries++) {
      const a = R() * Math.PI * 2, r = Math.sqrt(R()) * (V0.r - 25), x = V0.x + Math.cos(a) * r, z = V0.z + Math.sin(a) * r;
      if (!freeOf(x, z, 8)) continue;
      const g = (dx, dz) => preAll(x + dx, z + dz), sx = g(4, 0) - g(-4, 0), sz = g(0, 4) - g(0, -4), rot = Math.atan2(-sz, -sx) + Math.round(R() * 2 - 1) * 0.05;
      const two = R() < 0.3;
      addSite({ kind: 'house', x, z, rot, w: two ? 7 : 8 + R() * 2, d: two ? 9 : 9 + R() * 2.5, h: two ? 6.4 : 3.2, floors: two ? 2 : 1, tint: R() }); n++;
    }
    addSite({ kind: 'well', x: V0.x + 6, z: V0.z + 4, r: 1.1 }, false);
  }
  { // 🛖 أكواخ الحطّابين: أكواخ خشب حول فسحة، كومة جذوع، نار
    for (let k = 0; k < 5; k++) { const a = (k / 5) * Math.PI * 2 + 0.4, x = HUTS.x + Math.cos(a) * 24, z = HUTS.z + Math.sin(a) * 24; addSite({ kind: 'hut', x, z, rot: a + Math.PI, w: 4, d: 5, h: 2.4 }); }
    addSite({ kind: 'logs', x: HUTS.x + 6, z: HUTS.z - 5, rot: 0.6, w: 4.5, d: 1.8, h: 1.2 });
    addSite({ kind: 'campfire', x: HUTS.x, z: HUTS.z }, false);
  }
  { // 🛶 هور العنبر: مضيف القصب على جزرة، بيوت قصب، مشاحيف
    const mx = MARSH.x + 40, mz = MARSH.z + 120; FLATS.push({ x: mx, z: mz, r: 26, fall: 14, a: 1.1 });
    addSite({ kind: 'mudhif', x: mx, z: mz, rot: 0.3, w: 6.5, d: 20, h: 5.8 });
    for (let k = 0; k < 4; k++) { const a = 1.2 + k * 1.3, x = mx + Math.cos(a) * 22, z = mz + Math.sin(a) * 22; FLATS.push({ x, z, r: 6, fall: 8, a: 0.9 }); addSite({ kind: 'reedhut', x, z, rot: a, w: 3.2, d: 6, h: 3 }); }
    for (let k = 0; k < 3; k++) addSite({ kind: 'canoe', x: mx - 30 + k * 9, z: mz - 20 - k * 6, rot: 1 + k * 0.7, float: true }, false);
  }
  { // 🗼 منارة الصيادين
    addSite({ kind: 'lighthouse', x: LIGHT.x, z: LIGHT.z, rot: 0, w: 6, d: 6, h: 19 });
    addSite({ kind: 'house', x: LIGHT.x - 16, z: LIGHT.z + 4, rot: 0.3, w: 6, d: 7, h: 3, floors: 1, tint: 0.8, white: true });
    for (let k = 0; k < 2; k++) addSite({ kind: 'boat', x: shCapeW.x + 18 + k * 8, z: shCapeW.z + 30 + k * 12, rot: 1.6 + k * 0.4 }, false);
  }
  { // 🏰 أطلال الحصن: سور مربع بأبراج، مكسّر
    const F = FORT, S2 = 17;
    for (const [cx, cz] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) addSite({ kind: 'ftower', x: F.x + cx * S2, z: F.z + cz * S2, r: 3.2, h: 6 + R() * 3 }, false);
    const walls = [[[-1, -1], [1, -1]], [[1, -1], [1, 1]], [[1, 1], [-1, 1]], [[-1, 1], [-1, -1]]];
    walls.forEach(([[ax, az], [bx, bz]], i) => {
      const x0 = F.x + ax * S2, z0 = F.z + az * S2, x1 = F.x + bx * S2, z1 = F.z + bz * S2;
      for (const [t0, t1] of i === 2 ? [[0.1, 0.38], [0.62, 0.9]] : [[0.12, 0.88]]) { const xa = lerp(x0, x1, t0), za = lerp(z0, z1, t0), xb = lerp(x0, x1, t1), zb = lerp(z0, z1, t1); addSite({ kind: 'fwall', x: (xa + xb) / 2, z: (za + zb) / 2, rot: Math.atan2(zb - za, xb - xa), w: Math.hypot(xb - xa, zb - za), d: 1.3, h: 3 + R() * 2.2 }, false); }
    });
  }
  { // 🐚 شاطئ اللؤلؤ و🌙 البحيرة: أكواخ صيادين ومشاحيف
    addSite({ kind: 'reedhut', x: PEARL.x + 30, z: PEARL.z - 20, rot: 0.5, w: 3.2, d: 6, h: 3 });
    for (let k = 0; k < 3; k++) addSite({ kind: 'boat', x: shPearl.x + 8, z: shPearl.z - 25 + k * 14, rot: k * 0.6 }, false);
    const la = Math.atan2(90, 240), dl = { x: LAKE.x + Math.cos(la) * (LAKE.r - 8), z: LAKE.z + Math.sin(la) * (LAKE.r - 8) }; addSite({ kind: 'pier', x: dl.x, z: dl.z, rot: la + Math.PI, w: 26, d: 2.4, h: 0, lake: true }, false); // رصيف يدخل بالبحيرة
  }
  // ارتفاع كل تسوية = ارتفاع الأرض بنصها
  for (const p of pads) p.a = preAll(p.x, p.z);
  { const gp = sites.find((st) => st.kind === 'garage').pad; for (const st of sites) if (st.kind === 'apron' || st.kind === 'fuel') st.pad.a = gp.a; } // الكراج وساحته بمستوى واحد (بلا عتبة للسيارة)
  const _pq = { d: 0, t: 0 };
  function padA(x, z, a) {
    const l = pIdx.at(x, z); if (!l) return a;
    for (const sg of l) {
      const p = sg.a, dx = x - p.x, dz = z - p.z, u = Math.abs(dx * p.c + dz * p.s), v = Math.abs(-dx * p.s + dz * p.c);
      const e = Math.max(u - p.hw, v - p.hd, 0); if (e < 4) a = lerp(p.a, a, smooth(0, 4, e));
    }
    return a;
  }

  // ================================================================ الارتفاع النهائي (y بالعالم)
  function A(x, z) { return padA(x, z, pavedA(x, z, waterA(x, z, riverA(x, z, roadA(x, z, siteA(x, z, baseA(x, z) + scarpA(x, z))))))); }
  const H = (x, z) => SEA + A(x, z);

  /** الماي بهالمكان: بحر، بحيرة، هور، نهر (y = مستوى السطح بالعالم) */
  function water(x, z, y) {
    for (const L of LAKES) { const d = Math.hypot(x - L.x, z - L.z); if (d < L.r * 1.25 && y < SEA + L.lv + 0.2 && d < lakeR(L, x, z) + 2) return { kind: 'lake', level: SEA + L.lv }; }
    if (Math.hypot(x - MARSH.x, z - MARSH.z) < MARSH.r && y < SEA + MARSH_LV + 0.15) return { kind: 'marsh', level: SEA + MARSH_LV };
    const q = nearRiver(x, z); if (q && q.d < q.w + 0.3 && y < SEA + q.lv + 0.25) return { kind: 'river', level: SEA + q.lv, dx: q.dx, dz: q.dz };
    if (y < SEA + 0.1) return { kind: 'sea', level: SEA };
    return null;
  }

  // ================================================================ الغطاء النباتي: كثافة ونوع حسب المكان (القرار بالجغرافيا)
  const ZONEW = (z0, x, z) => smooth(z0.r, z0.r * 0.6, Math.hypot(x - z0.x, z - z0.z));
  const SHADOWS = { x: 400, z: -1150, r: 950 }, OAKS = { x: -1700, z: -250, r: 750 };
  /** يرجّع { t: احتمال شجرة، pine/oak/palm/olive أوزان، b: احتمال شجيرة، rock، reed } */
  function flora(x, z, a, s, sl) {
    const o = { t: 0, pine: 0, oak: 0, palm: 0, olive: 0, b: 0.04, rock: 0, reed: 0 };
    if (a < 0.35) { if (Math.hypot(x - MARSH.x, z - MARSH.z) < MARSH.r && a > -0.6) o.reed = 0.75; return o; }
    const patch = fbm(x * 0.0032 + 5, z * 0.0032 - 3), forest = smooth(0.44, 0.62, patch);
    const hi = smooth(90, 200, a);
    o.t = forest * lerp(0.55, 0.75, hi) + 0.03;
    o.pine = 0.25 + hi * 0.7; o.oak = 1 - o.pine;
    if (a < 25) { o.olive = 0.3; o.palm = smooth(25, 6, a) * 0.6; o.t *= 0.6; }
    const sh = ZONEW(SHADOWS, x, z); if (sh > 0) { o.t = lerp(o.t, 0.9, sh); o.pine = lerp(o.pine, 0.85, sh); o.oak = 1 - o.pine; o.palm = o.olive = 0; }
    const ok = ZONEW(OAKS, x, z); if (ok > 0) { o.t = lerp(o.t, 0.82, ok); o.oak = lerp(o.oak, 0.95, ok); o.pine = 1 - o.oak; o.palm *= 1 - ok; o.olive *= 1 - ok; }
    const gr = ZONEW(GROVES, x, z); if (gr > 0) { o.t = lerp(o.t, 0.8, gr); o.palm = lerp(o.palm, 1, gr); o.pine *= 1 - gr; o.oak *= 1 - gr; o.olive *= 1 - gr; }
    const wh = ZONEW(WHEAT, x, z); if (wh > 0) { o.t *= 1 - wh * 0.97; o.b *= 1 - wh; }
    const vi = ZONEW(VILLAGE, x, z); if (vi > 0) { o.t = lerp(o.t, 0.14, vi); o.olive = lerp(o.olive, 0.6, vi); o.palm = lerp(o.palm, 0.4, vi); o.pine *= 1 - vi; o.oak *= 1 - vi; }
    const hl = smooth(HILLS.r, HILLS.r * 0.5, Math.hypot(x - HILLS.x, z - HILLS.z)); if (hl > 0) { o.t *= 1 - hl * 0.8; o.b = lerp(o.b, 0.3, hl); }
    const pd = Math.hypot(x - PLATEAU.x, z - PLATEAU.z); if (pd < PLATEAU.r) { o.t = 0.05; o.oak = 1; o.pine = 0; }
    if (s < 110 && a < 5) { o.t = 0.05; o.palm = 1; o.oak = o.pine = o.olive = 0; o.b = 0.03; }
    if (a > 330) o.t *= 0.5;
    if (sl > 0.75) { o.t *= 0.4; o.rock = smooth(0.75, 1.1, sl) * 0.35; }
    o.rock += 0.006;
    const q = nearRoad(x, z); if (q && q.d < q.hw + (q.road.paved ? 5 : 2.2)) o.t = o.b = o.rock = 0; // الطريق المعبّد إله كتف نظيف
    const fk = SAFARI.fieldK(x, z, s); if (fk > 0.1) { o.t = 0; o.rock = 0; o.b = 0.025 * (1 - fk); o.pine = o.oak = o.olive = 0; } // كثبان: بس شويّة حشيش رملي
    const rv = nearRiver(x, z); if (rv && rv.d < rv.w + 1.5) { o.t = o.rock = 0; if (rv.d > rv.w - 0.5) o.reed = 0.3; }
    return o;
  }
  /** هل المكان محجوز لبناية أو ساحة (بلا شجر) */
  function reserved(x, z) {
    if (Math.hypot(x - FAJR.x, z - FAJR.z) < 62) return true;
    { const q = SAFARI.nearTrack(x, z); if (q && q.d < SAFARI.hw + 3.5) return true; } // مسار السفاري وأعلامه
    { const pk = SAFARI.park, dx = x - pk.x, dz = z - pk.z, c = Math.cos(pk.rot), sn = Math.sin(pk.rot); if (Math.abs(dx * c + dz * sn) < pk.w / 2 + 4 && Math.abs(-dx * sn + dz * c) < pk.d / 2 + 4) return true; }
    if (GARAGE && Math.hypot(x - GARAGE.x - GARAGE.fx * 6, z - GARAGE.z - GARAGE.fz * 6) < 17) return true; // فسحة الكراج
    for (const r of rest) if (Math.hypot(x - r.fx, z - r.fz) < 7) return true; // حوالين نار الاستراحة
    if (TASKS && taskNear(x, z, 4.5)) return true; // فسحة حوالين أغراض الطلبات
    if (Math.hypot(x - HUTS.x, z - HUTS.z) < HUTS.r - 8) return true;
    if (Math.hypot(x - FORT.x, z - FORT.z) < 26) return true;
    if (Math.hypot(x - LIGHT.x, z - LIGHT.z) < 30) return true;
    const l = pIdx.at(x, z); if (l) for (const sg of l) { const p = sg.a, dx = x - p.x, dz = z - p.z; if (Math.abs(dx * p.c + dz * p.s) < p.hw + 2.5 && Math.abs(-dx * p.s + dz * p.c) < p.hd + 2.5) return true; }
    for (const s of sites) if ((s.kind === 'fountain' || s.kind === 'ftower') && Math.hypot(x - s.x, z - s.z) < (s.r || 2) + 2) return true;
    return false;
  }

  // ================================================================ المناطق وأسماؤها (كل منطقة إلها استراحة 🔥)
  const ZONES = [
    { id: 'summit', name: 'قمة السحاب', icon: '🏔️', x: MX, z: MZ, r: 22, sub: 'أبو جاسم والچايچي' },
    { id: 'shoulder', name: 'مصطبة الغيم', icon: '☁️', x: MX, z: MZ, r: 340, ring: 225, sub: 'كتف الجبل' },
    { id: 'mount', name: 'جبل الهيبة', icon: '⛰️', x: MX, z: MZ, r: 1700, sub: 'قلب الجزيرة' },
    { id: 'fajr', name: 'ساحة الفجر', icon: '🌅', x: FAJR.x, z: FAJR.z, r: 110, sub: 'سوق وچايخانة يم الخليج' },
    { id: 'bay', name: 'خليج الفجر', icon: '⛵', x: shBay.x + 200, z: shBay.z, r: 520 },
    { id: 'groves', name: 'بساتين الرطب', icon: '🌴', x: GROVES.x, z: GROVES.z, r: GROVES.r },
    { id: 'village', name: 'قرية الطين', icon: '🏘️', x: VILLAGE.x, z: VILLAGE.z, r: VILLAGE.r + 30 },
    { id: 'light', name: 'منارة الصيادين', icon: '🗼', x: LIGHT.x, z: LIGHT.z, r: 200 },
    { id: 'kohl', name: 'جبل الكحل', icon: '🗻', x: 1550, z: -1950, r: 560 },
    { id: 'lake', name: 'بحيرة القمر', icon: '🌙', x: LAKE.x, z: LAKE.z, r: LAKE.r + 140 },
    { id: 'huts', name: 'أكواخ الحطّابين', icon: '🪓', x: HUTS.x, z: HUTS.z, r: 120 },
    { id: 'shadows', name: 'غابة الظلال', icon: '🌲', x: SHADOWS.x, z: SHADOWS.z, r: SHADOWS.r },
    { id: 'marsh', name: 'هور العنبر', icon: '🛶', x: MARSH.x, z: MARSH.z, r: MARSH.r },
    { id: 'mudhif', name: 'مضيف القصب', icon: '🛖', x: MARSH.x + 40, z: MARSH.z + 120, r: 60 },
    { id: 'wheat', name: 'سهل السنابل', icon: '🌾', x: WHEAT.x, z: WHEAT.z, r: WHEAT.r },
    { id: 'fort', name: 'أطلال الحصن', icon: '🏰', x: FORT.x, z: FORT.z, r: 260 },
    { id: 'oaks', name: 'غابة البلوط', icon: '🌳', x: OAKS.x, z: OAKS.z, r: OAKS.r },
    { id: 'pearl', name: 'شاطئ اللؤلؤ', icon: '🐚', x: PEARL.x, z: PEARL.z, r: 420 },
    { id: 'safari', name: 'سفاري اللؤلؤ', icon: '🏁', x: SAFARI.center.x, z: SAFARI.center.z, r: 300, sub: 'كثبان وقفزات ومسار ~1 كم' },
    { id: 'thyme', name: 'تلال الزعتر', icon: '🌿', x: HILLS.x, z: HILLS.z, r: HILLS.r },
    { id: 'plateau', name: 'هضبة الخيّالة', icon: '🐎', x: PLATEAU.x, z: PLATEAU.z, r: PLATEAU.r + 40 },
    { id: 'birds', name: 'جزيرة الطيور', icon: '🕊️', x: ISLET.x, z: ISLET.z, r: ISLET.r + 80 },
    { id: 'gulls', name: 'جرف النوارس', icon: '🪶', x: GULLS.x, z: GULLS.z, r: 380 },
    { id: 'falls', name: 'شلال المرايا', icon: '💦', x: FALLS.x, z: FALLS.z, r: 130 },
    { id: 'falcons', name: 'جبل الصقور', icon: '🦅', x: 1900, z: 1900, r: 760 },
    { id: 'valley', name: 'وادي الغزلان', icon: '🦌', x: VAL.x, z: VAL.z, r: VAL.r },
  ];
  ZONES.sort((a, b) => a.r - b.r);
  function zoneAt(x, z) {
    for (const zz of ZONES) {
      const d = Math.hypot(x - zz.x, z - zz.z);
      if (zz.ring ? d < zz.r && d > zz.ring : d < zz.r) return zz;
    }
    const q = nearRiver(x, z); if (q && q.d < q.w + 30) return { id: q.river.id, name: q.river.name, icon: '💧', river: true };
    if (coastS(x, z) < 0) return { id: 'sea', name: 'البحر', icon: '🌊' };
    if (coastS(x, z) < 160) return { id: 'coast', name: 'الساحل', icon: '🏖️' };
    return { id: 'wild', name: 'البرّية', icon: '🍃' };
  }
  // نقاط الاستراحة (نار مخيّم) بكل منطقة: بمكان مفتوح يم الطريق
  const REST_AT = { fajr: [FAJR.x - 22, FAJR.z - 16], village: [VILLAGE.x + 14, VILLAGE.z + 10], light: [LIGHT.x - 24, LIGHT.z - 12], lake: [LAKE.x + 290, LAKE.z + 60], huts: [HUTS.x - 6, HUTS.z + 8], mudhif: [MARSH.x + 40, MARSH.z + 146], wheat: [WHEAT.x + 10, WHEAT.z + 14], fort: [FORT.x + 26, FORT.z + 4], oaks: [-1600, -238], pearl: [PEARL.x + 40, PEARL.z + 10], thyme: [-1300, 1712], plateau: [PLATEAU.x + 10, PLATEAU.z], birds: [ISLET.x, ISLET.z], gulls: [GULLS.x - 40, GULLS.z - 30], falls: [FALLS.x - 30, FALLS.z - 20], falcons: [1650, 1460], kohl: [1300, -1500], groves: [GROVES.x, GROVES.z + 14] };
  const rest = [];
  for (const zz of ZONES) { const p = REST_AT[zz.id]; if (!p) continue; const face = Math.atan2(MZ - p[1], MX - p[0]); rest.push({ id: 'z_' + zz.id, x: p[0] - Math.cos(face) * 3.4, z: p[1] - Math.sin(face) * 3.4, fx: p[0], fz: p[1], name: zz.name, icon: zz.icon, face, flag: false, fire: true }); } // تصحى يم النار وإنت تباوع للجبل
  rest.sort((a, b) => (b.id === 'z_fajr') - (a.id === 'z_fajr')); // ساحة الفجر أول وحدة (البداية)
  { const f = rest[0]; Object.assign(f, { x: FAJR.x + 18.5, z: FAJR.z, face: 0, start: true }); } // تبدي بنص الساحة قبال لوحة الطلبات، والجبل وراك

  // ================================================================ 📜 طلبات أبو جاسم: كل غرض بمنطقته (أماكن ثابتة بأرض تنمشي)
  const TR = rng((def.seed || 7) * 31 + 5), TAU2 = Math.PI * 2;
  const slopeAt = (x, z) => Math.hypot(A(x + 1, z) - A(x - 1, z), A(x, z + 1) - A(x, z - 1)) / 2;
  const landOK = (x, z) => { const a = A(x, z); if (a < 0.6 || coastS(x, z) < 12) return false; if (water(x, z, SEA + a + 0.05)) return false; const q = nearRoad(x, z); if (q && q.d < q.hw + 3) return false; const rv = nearRiver(x, z); if (rv && rv.d < rv.w + 6) return false; return !sites.some((st) => Math.hypot(st.x - x, st.z - z) < 12); };
  function spots(cx, cz, rad, n, gap, ok) { const out = []; for (let k = 0; k < 6000 && out.length < n; k++) { const a = TR() * TAU2, r = Math.sqrt(TR()) * rad, x = cx + Math.cos(a) * r, z = cz + Math.sin(a) * r; if (!ok(x, z) || out.some((q) => Math.hypot(q.x - x, q.z - z) < gap)) continue; out.push({ x, z }); } return out; }
  function peakTop(p) { let b = { x: p.x, z: p.z, a: -1e9 }; for (let i = -40; i <= 40; i++) for (let j = -40; j <= 40; j++) { const x = p.x + i * 6, z = p.z + j * 6, a = A(x, z); if (a > b.a) b = { x, z, a }; } return { x: b.x, z: b.z }; }
  const THYME = { x: -1650, z: 1560 };
  const TASKS = [
    { id: 'gazelle', icon: '🦌', name: 'غزال حي', need: 1, reward: 500, zone: 'valley', at: { x: VAL.x, z: VAL.z }, note: 'بوادي الغزلان شرق الجبل. امشِ يمّه على هونك… إذا ركضت يشرد', items: [] },
    { id: 'thyme', icon: '🌿', name: 'باقات زعتر بري', need: 5, reward: 150, zone: 'thyme', at: THYME, note: 'تنبت بين صخور تلال الزعتر، جنوب شرق الجبل', items: spots(THYME.x, THYME.z, 330, 5, 55, (x, z) => landOK(x, z) && slopeAt(x, z) < 0.45) },
    { id: 'pearl', icon: '🦪', name: 'محار بيه لؤلؤ', need: 3, reward: 250, zone: 'pearl', at: PEARL, note: 'على رمل شاطئ اللؤلؤ يم الماي، جنوب الجزيرة', items: spots(PEARL.x, PEARL.z, 420, 3, 45, (x, z) => { const cs = coastS(x, z), a = A(x, z); return cs > 3 && cs < 18 && a > 0.35 && a < 4 && !water(x, z, SEA + a + 0.05) && slopeAt(x, z) < 0.22; }) },
    { id: 'honey', icon: '🍯', name: 'جرّة عسل بري', need: 1, reward: 200, zone: 'oaks', at: OAKS, note: 'خلية نحل قديمة بنص غابة البلوط… وانتبه من الخنازير 🐗', items: spots(OAKS.x - 60, OAKS.z - 80, 180, 1, 0, (x, z) => landOK(x, z) && slopeAt(x, z) < 0.3) },
    { id: 'feather', icon: '🪶', name: 'ريشة صقر', need: 1, reward: 300, zone: 'falcons', at: { x: PEAKS[0].x, z: PEAKS[0].z }, note: 'بعش الصقر فوك قمة جبل الصقور، شمال شرق الجزيرة', items: [peakTop(PEAKS[0])] },
    { id: 'fish', icon: '🐟', name: 'سمچتين', need: 2, reward: 300, zone: 'lake', at: { x: LAKE.x, z: LAKE.z }, note: 'من رصيف الخليج أو بحيرة القمر… تحتاج سنارة من دكاني', items: [] },
  ];
  for (const t of TASKS) for (const it of t.items) it.y = H(it.x, it.z);
  const taskNear = (x, z, r) => TASKS.some((t) => t.items.some((it) => Math.hypot(x - it.x, z - it.z) < r));
  const boardSite = sites.find((st) => st.kind === 'board');
  const BOARD = { x: boardSite.x, z: boardSite.z, fx: Math.cos(boardSite.rot), fz: Math.sin(boardSite.rot), w: boardSite.d };
  const gs = sites.find((st) => st.kind === 'garage'), ap = sites.find((st) => st.kind === 'apron');
  const GARAGE = { x: gs.x, z: gs.z, rot: gs.rot, w: gs.w, d: gs.d, fx: Math.cos(gs.rot), fz: Math.sin(gs.rot), apron: { x: ap.x, z: ap.z, rot: ap.rot, w: ap.w, d: ap.d }, car: { x: gs.x - Math.cos(gs.rot) * 0.6, z: gs.z - Math.sin(gs.rot) * 0.6, yaw: gs.rot } };
  /** أرضية كونكريت (الكراج وساحته) */
  const paved = (x, z) => [gs, ap].some((q) => { const dx = x - q.x, dz = z - q.z, c = Math.cos(q.rot), sn = Math.sin(q.rot); return Math.abs(dx * c + dz * sn) < q.w / 2 + 0.3 && Math.abs(-dx * sn + dz * c) < q.d / 2 + 0.3; });

  const BEASTS = [ // حيوانات برية بمناطقها: ذيابة بغابة الظلال، وخنازير بغابة البلوط وتلال الزعتر
    ...[[300, -1300], [650, -1050], [180, -1720]].map(([x, z]) => ({ kind: 'wolf', x, z })),
    ...[[-1600, -420], [-1900, -120], [-1480, -720], [-1900, 1300], [-2250, 1620]].map(([x, z]) => ({ kind: 'boar', x, z })),
  ];
  return {
    SEA, HALF, SHOULDER, beasts: BEASTS, H, A, baseA, coastS, Rc, rivers, falls, lakes: LAKES, marsh: { ...MARSH, lv: MARSH_LV }, roads, sites, zones: ZONES, zoneAt, rest,
    safari: SAFARI, pavedRoads: PAVED, bridges: BRIDGES, culverts: CULVERTS, signs: SIGNS, welcome: WELCOME, nearPaved, nearDirt, inBridge, nearRoad, nearRiver, water, flora, reserved, tasks: TASKS, board: BOARD, garage: GARAGE, paved, peaks: PEAKS, plateau: PLATEAU, islet: ISLET, fajr: FAJR, shBay, valley: VAL, scarp: SCARP, fallsAt: FALLS,
  };
}
