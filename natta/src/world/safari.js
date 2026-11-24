// 🏁 نطّة — سفاري اللؤلؤ: كثبان رمل حقيقية ورا شاطئ اللؤلؤ (جنوب الجزيرة) ومسار مغلق ~1 كم بيه قفزات وطسّات ومنعطفات مايلة.
// الكثبان «عرضية» مثل اللي يسوّيها هوا البحر: الوجه اللي يقابل البحر هادي، ووجه الانزلاق ورا القمة حاد (~30°)، والقمم متموّجة.
// المسار مرصوص من كثر ما مشت عليه السيارات (تماسك أحسن من الرمل الطري)، وبيه:
//   - طسّات (whoops): 6 مطبّات 45 سم ورا بعض تهزّ التعليق
//   - 4 قفزات: صغيرة، متوسطة، «طاولة» كبيرة (تطير وتنزل على المنحدر)، ونزلة درجة صوب البحر
//   - منعطفات مايلة (berms) تكدر تفحّط عليها
//   - بوابة بداية/نهاية و3 نقاط تفتيش للوقت
// بلا رسم وبلا DOM.
import { clamp, lerp, smooth, fbm } from '../lib3d.js';
import { segIndex, segDist, mkSeg, resample, arcLen } from './geom2d.js';

export const SAFARI_HW = 4.5; // نص عرض المسار (9 م)

export function createSafari({ shoreAt }) {
  // ---------------- إطار محلي: u على طول الساحل (صوب الشرق)، w لجوّه (صوب الشمال)
  const A0 = shoreAt(Math.PI - 0.03), A1 = shoreAt(Math.PI - 0.19);
  let tx = A1.x - A0.x, tz = A1.z - A0.z; const Lc = Math.hypot(tx, tz); tx /= Lc; tz /= Lc;
  let nx = -tz, nz = tx; if (nx * -A0.c + nz * -A0.s < 0) { nx = -nx; nz = -nz; } // لجوّه = عكس اتجاه البحر
  const O = { x: A0.x, z: A0.z };
  const W = (u, w) => ({ x: O.x + tx * u + nx * w, z: O.z + tz * u + nz * w });
  const toL = (x, z) => [(x - O.x) * tx + (z - O.z) * tz, (x - O.x) * nx + (z - O.z) * nz];
  const LU = Lc + 30;
  const BOX = { u0: -60, u1: LU + 60, w0: -40, w1: 330 };

  // ---------------- الكثبان
  const envAt = (u, s) => { // حدود متعرّجة (مو مستطيل): الكثبان تذوب بالعشب وبالشاطئ بشكل طبيعي
    const eu = 26 * (fbm(s * 0.012 + 4, 1.7) - 0.5), es = 34 * (fbm(u * 0.01 + 9, 2.3) - 0.5);
    return smooth(-25 + eu, 45 + eu, u) * smooth(LU + 25 - eu, LU - 55 - eu, u) * smooth(24, 60, s) * smooth(300 + es, 238 + es, s);
  };
  /** ارتفاع الكثيب (فوك السهل الرملي) */
  const phaseAt = (u, s) => { const wq = 10 * Math.sin(u * 0.019 + 1.3) + 6 * Math.sin(u * 0.051 + 0.4) + 18 * (fbm(u * 0.007 + 3, s * 0.007) - 0.5); return (s + wq) / 44; };
  /** تظليل الكثيب للون: +1 على القمة والوجه اللي يقابل البحر (مضوّي)، −1 بوجه الانزلاق ورا القمة (ظل) */
  function shadeAt(x, z, s) { const [u, w] = toL(x, z); if (!inBox(u, w)) return 0; const ph = phaseAt(u, s), f = ph - Math.floor(ph); return f < 0.7 ? -0.3 + 1.3 * (f / 0.7) : 1 - 2.2 * ((f - 0.7) / 0.3); }
  function duneH(u, s) {
    const lam = 44, ph = phaseAt(u, s), k = Math.floor(ph), f = ph - k;
    const hc = 2.2 + 3.6 * fbm(u * 0.012 + k * 3.7, k * 1.3 + 0.5); // قمة 2–6 م
    const p = f < 0.7 ? 0.5 - 0.5 * Math.cos((Math.PI * f) / 0.7) : 0.5 + 0.5 * Math.cos((Math.PI * (f - 0.7)) / 0.3);
    return hc * p + (fbm(u * 0.05, s * 0.05) - 0.5) * 0.5;
  }
  const plain = (s) => 1.7 + Math.max(0, s - 30) * 0.012;

  // ---------------- المسار (u, w) ← حلقة ناعمة
  const WAY = [[108, 62], [210, 58], [330, 60], [400, 74], [448, 104], [468, 150], [464, 200], [440, 232], [390, 245], [330, 236], [290, 250], [240, 236], [180, 238], [122, 230], [80, 212], [58, 178], [52, 138], [58, 102], [76, 76]];
  const lp = resample(WAY, 2, true); // نقاط محلية كل 2 م
  const pts = lp.map((p) => ({ ...W(p.x, p.z), u: p.x, w: p.z }));
  const S = arcLen(pts, true), LEN = S.total, N = pts.length;
  for (let i = 0; i < N; i++) { const a = pts[(i - 1 + N) % N], b = pts[(i + 1) % N]; let dx = b.x - a.x, dz = b.z - a.z; const l = Math.hypot(dx, dz); pts[i].dx = dx / l; pts[i].dz = dz / l; pts[i].s = S[i]; }
  // انحناء (للمنعطفات المايلة وأماكن التايرات)
  for (let i = 0; i < N; i++) { const a = pts[(i - 3 + N) % N], b = pts[(i + 3) % N]; const cr = a.dx * b.dz - a.dz * b.dx, ds = 12; pts[i].k = Math.asin(clamp(cr, -1, 1)) / ds; }
  for (let it = 0; it < 3; it++) { const k2 = pts.map((p, i) => (pts[(i - 1 + N) % N].k + p.k * 2 + pts[(i + 1) % N].k) / 4); pts.forEach((p, i) => { p.k = k2[i]; }); }
  /** أقرب نقطة على المسار بطول s (مع التدوير) */
  const atS = (s) => { s = ((s % LEN) + LEN) % LEN; let i = 0; while (i < N - 1 && S[i + 1] <= s) i++; return { i, p: pts[i] }; };
  const nearestS = (u, w) => { let b = 0, bd = 1e9; pts.forEach((p, i) => { const d = (p.u - u) ** 2 + (p.w - w) ** 2; if (d < bd) { bd = d; b = i; } }); return S[b]; };

  // ---------------- ملامح المسار (قفزات، طسّات)
  const FEAT = [
    { kind: 'whoops', s0: nearestS(150, 59), s1: nearestS(205, 58), h: 0.45, lam: 8 },
    { kind: 'kicker', name: 'قفزة الموجة', at: nearestS(268, 58), up: 7, h: 1.0, top: 2, land: 11 },
    { kind: 'kicker', name: 'قفزة الكثيب', at: nearestS(467, 176), up: 8.5, h: 1.5, top: 4, land: 14 },
    { kind: 'kicker', name: 'الطاولة الكبيرة', at: nearestS(312, 243), up: 10, h: 2.1, top: 8, land: 17 },
    { kind: 'kicker', name: 'نزلة البحر', at: nearestS(53, 152), up: 7, h: 1.3, top: 0, land: 20 },
  ];
  const ds = (s, s0) => { let d = s - s0; if (d > LEN / 2) d -= LEN; if (d < -LEN / 2) d += LEN; return d; };
  function featH(s) {
    let h = 0;
    for (const f of FEAT) {
      if (f.kind === 'whoops') { const d = ds(s, f.s0), L = ds(f.s1, f.s0); if (d > 0 && d < L) h += f.h * 0.5 * (1 - Math.cos((2 * Math.PI * d) / f.lam)) * smooth(0, 4, d) * smooth(L, L - 4, d); continue; }
      const d = ds(s, f.at); // 0 = الحافّة (اللِب)
      if (d > -f.up && d <= 0) h += f.h * Math.pow((d + f.up) / f.up, 1.7);
      else if (d > 0 && d < f.top + f.land) h += d < f.top ? f.h : f.h * (1 - smooth(0, 1, (d - f.top) / f.land));
    }
    return h;
  }
  for (const f of FEAT) if (f.kind === 'kicker') { const q = atS(f.at).p; Object.assign(f, { x: q.x, z: q.z, dx: q.dx, dz: q.dz }); }

  // ---------------- مقطع المسار: ارتفاع الكثبان على الخط الوسطي مليّن (±10 م) + الملامح + ميلان المنعطفات
  let baked = false; // يتحدد لمن الجزيرة تعطينا مسافة الساحل
  const prof = new Float32Array(N), bank = new Float32Array(N);
  function bake(coastS) {
    const raw = pts.map((p) => { const s = coastS(p.x, p.z); return plain(s) + duneH(p.u, s) * envAt(p.u, s); });
    for (let i = 0; i < N; i++) { let sum = 0, wsum = 0; for (let k = -5; k <= 5; k++) { const wgt = 1 - Math.abs(k) / 6; sum += raw[(i + k + N) % N] * wgt; wsum += wgt; } prof[i] = sum / wsum + featH(S[i]); }
    for (let i = 0; i < N; i++) bank[i] = clamp(pts[i].k * 9, -0.24, 0.24); // ~14° بالمنعطف الحاد، والحافّة البرّانية أعلى
    PARK.a = plain(coastS(PARK.x, PARK.z)) + 0.25; baked = true;
  }
  const sIdx = segIndex(16), _q = { d: 0, t: 0 };
  for (let i = 0; i < N; i++) sIdx.add(mkSeg(pts[i], pts[(i + 1) % N], { i }), SAFARI_HW + 8);
  function nearTrack(x, z) {
    const l = sIdx.at(x, z); if (!l) return null;
    let best = null, bd = 1e9, bt = 0;
    for (const sg of l) { segDist(sg, x, z, _q); if (_q.d < bd) { bd = _q.d; best = sg; bt = _q.t; } }
    if (!best) return null;
    const i = best.i, j = (i + 1) % N, a = pts[i];
    const side = Math.sign((x - best.ax) * best.dz - (z - best.az) * best.dx) || 1; // + = يمين اتجاه السير
    return { d: bd, lat: bd * side, i, t: bt, h: lerp(prof[i], prof[j], bt), bank: lerp(bank[i], bank[j], bt), s: lerp(S[i], S[j] || LEN, bt), p: a };
  }

  // ---------------- ساحة الوقوف (موقف السفاري) يم البداية
  const PARK = { ...W(12, 128), rot: Math.atan2(tz, tx), w: 34, d: 22 };
  const inBox = (u, w) => u > BOX.u0 && u < BOX.u1 && w > BOX.w0 && w < BOX.w1;

  /** الأرض: تبدّل الساحل بكثبان، وتحفر المسار. s = مسافة الساحل */
  function terrain(x, z, a, s) {
    const [u, w] = toL(x, z); if (!inBox(u, w)) return a;
    const e = envAt(u, s); let out = a;
    if (e > 0) out = lerp(a, plain(s) + duneH(u, s), e);
    if (baked) {
      const q = nearTrack(x, z);
      if (q && q.d < SAFARI_HW + 7) {
        const tk = q.h + q.bank * q.lat; // الحافّة البرّانية للمنعطف أعلى
        out = lerp(tk, out, smooth(SAFARI_HW, SAFARI_HW + 7, q.d));
      }
    }
    const pu = (x - PARK.x) * Math.cos(PARK.rot) + (z - PARK.z) * Math.sin(PARK.rot), pv = -(x - PARK.x) * Math.sin(PARK.rot) + (z - PARK.z) * Math.cos(PARK.rot);
    const pe = Math.max(Math.abs(pu) - PARK.w / 2, Math.abs(pv) - PARK.d / 2, 0); if (pe < 10 && PARK.a != null) out = lerp(PARK.a, out, smooth(0, 10, pe));
    return out;
  }
  /** نوع الأرض: 'track' (رمل مرصوص)، 'dune' (رمل طري)، أو null */
  function kindAt(x, z, s) {
    const [u, w] = toL(x, z); if (!inBox(u, w)) return null;
    const q = nearTrack(x, z); if (q && q.d < SAFARI_HW + 0.6) return 'track';
    return envAt(u, s) > 0.35 ? 'dune' : null;
  }
  const fieldK = (x, z, s) => { const [u, w] = toL(x, z); return inBox(u, w) ? envAt(u, s) : 0; };
  // ---------------- البوابات: البداية/النهاية + 3 نقاط تفتيش
  const gateAt = (s, name) => { const { p } = atS(s); return { s, name, x: p.x, z: p.z, dx: p.dx, dz: p.dz }; };
  const s0 = nearestS(124, 61);
  const GATES = [gateAt(s0, 'start'), gateAt(nearestS(466, 214), 'cp1'), gateAt(nearestS(210, 237), 'cp2'), gateAt(nearestS(55, 118), 'cp3')];

  // ---------------- الأثاث: أعلام كل 14 م على الجنبين، جدار تايرات على برّا المنعطفات الحادة، قوس البداية، بوابات التفتيش، علامات القفزات
  const FURN = { poles: [], tires: [], gates: [], kickers: [] };
  const sideP = (i, lat) => { const p = pts[i]; return { x: p.x - p.dz * lat, z: p.z + p.dx * lat }; }; // lat موجب = يمين اتجاه السير
  const nearGate = (s) => GATES.some((g) => Math.abs(ds(s, g.s)) < 6);
  for (let i = 0; i < N; i += 7) { if (nearGate(S[i])) continue; for (const sd of [-1, 1]) FURN.poles.push({ ...sideP(i, sd * (SAFARI_HW + 1.1)), yaw: Math.atan2(pts[i].dz, pts[i].dx), c: (i / 7 + (sd > 0 ? 1 : 0)) % 2 }); }
  for (let i = 0; i < N; i += 2) { const k = pts[i].k; if (Math.abs(k) < 1 / 34) continue; const out = k > 0 ? -1 : 1; FURN.tires.push(sideP(i, out * (SAFARI_HW + 1.9))); } // k موجب = لفّة يمين ← برّا = يسار
  for (const g of GATES) FURN.gates.push({ ...g, yaw: Math.atan2(g.dz, g.dx) });
  for (const f of FEAT) if (f.kind === 'kicker') { const { i } = atS(f.at); FURN.kickers.push({ name: f.name, h: f.h, x: f.x, z: f.z, yaw: Math.atan2(f.dz, f.dx), l: sideP(i, -(SAFARI_HW + 0.4)), r: sideP(i, SAFARI_HW + 0.4), sign: sideP(atS(f.at - 34).i, SAFARI_HW + 1.6) }); }

  return {
    furn: FURN, sideP,
    O, T: { x: tx, z: tz }, N: { x: nx, z: nz }, W, toL, box: BOX, pts, S, len: LEN, hw: SAFARI_HW, feat: FEAT, gates: GATES, park: PARK,
    terrain, kindAt, fieldK, shadeAt, nearTrack, bake, prof, bank, center: W(LU / 2, 150),
  };
}
