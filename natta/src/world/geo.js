// 🌍 نطّة — جغرافيا العالم المفتوح: الأرض، الطرق، الجسور، الحجار، العوائق، الماي، ونقاط الاستراحة.
// بدون رسم وبدون DOM: نفس الملف يشتغل بالمتصفح وبالسيرفر (للأونلاين بالمستقبل).
// العالم يتبنى من «تعريف خريطة» (mapdef): كل جبل أو وادي «معلم» بمكانه، فتضيف معالم جديدة بدون ما تغيّر المحرك.
import { Vector3, CatmullRomCurve3 } from 'three';
import { TAU, clamp, lerp, smooth, rng, hash2, vnoise, fbm, angDiff } from '../lib3d.js';

const D2R = Math.PI / 180;
const gk = (cx, cz) => cx * 100003 + cz;

/** شبكة مكانية بسيطة (خلايا مربعة) حتى البحث عن القريب يكون سريع */
function makeGrid(cell) {
  const m = new Map();
  return {
    cell,
    add(o, x = o.x, z = o.z) { const k = gk(Math.floor(x / cell), Math.floor(z / cell)); let l = m.get(k); if (!l) { l = []; m.set(k, l); } l.push(o); },
    remove(o, x = o.x, z = o.z) { const l = m.get(gk(Math.floor(x / cell), Math.floor(z / cell))); if (l) { const i = l.indexOf(o); if (i >= 0) l.splice(i, 1); } },
    each(x, z, reach, f) { const cx = Math.floor(x / cell), cz = Math.floor(z / cell); for (let i = -reach; i <= reach; i++) for (let j = -reach; j <= reach; j++) { const l = m.get(gk(cx + i, cz + j)); if (l) for (const o of l) if (f(o) === true) return true; } return false; },
  };
}

// ======================================================================= ⛰️ معلم: جبل الغابة
function buildMountain(def, R) {
  const MX = def.x || 0, MZ = def.z || 0;
  const RP = 13.3, HS = 95, DECK_A = 0; // نص قطر ساحة القمة (~555 م²) وارتفاعها، والإطلالة باتجاه الوادي (+x)
  const P2 = (r, a) => [MX + Math.cos(a * D2R) * r, MZ + Math.sin(a * D2R) * r];
  const rad = (x, z) => Math.hypot(x - MX, z - MZ), ang = (x, z) => Math.atan2(z - MZ, x - MX);
  function prof(r) { // كتف تحتاني، مصطبة غابة (72–120 م)، ومخروط فوكاني لحد القمة
    if (r <= RP + 1) return HS;
    const up = 40 + 55 * Math.pow(1 - clamp((r - RP - 1) / (72 - RP - 1), 0, 1), 1.12);
    const ter = 36 + 4 * (1 - clamp((r - 72) / 48, 0, 1));
    const low = 36 * Math.pow(1 - clamp((r - 120) / 60, 0, 1), 1.25) - smooth(180, 230, r) * 14;
    return lerp(lerp(up, ter, smooth(68, 76, r)), low, smooth(116, 124, r));
  }
  const gullies = [
    { a: 118.5 * D2R, r0: 108, r1: 190, w: 7.5, depth: 17 }, // وادي الجسر الأول (عميق: الوكعة منه خطرة)
    { a: 101 * D2R, r0: 22, r1: 64, w: 6, depth: 15 }, // وادي الجسر الثاني
    { a: 58 * D2R, r0: 26, r1: 72, w: 4.5, depth: 1.6, water: true }, // الساقية
  ];
  const Hbase = (x, z) => {
    const r = rad(x, z);
    let h = prof(r) + (fbm(x * 0.028 + 5, z * 0.028) - 0.5) * 9 * smooth(RP + 2, RP + 12, r) * (1 - smooth(200, 260, r) * 0.5);
    // حزامين صخر حوالين المخروط: الطريق بس يعبرهم (حتى الطلعة يبقى إلها معنى ويه الحرية)
    h += 5 * smooth(49.5, 47.6, r) * smooth(28, 42, r);
    h += 4 * smooth(27.2, 25.3, r) * smooth(15.5, 21, r);
    return h;
  };
  const Hnat = (x, z) => {
    const r = rad(x, z);
    let h = Hbase(x, z);
    for (const g of gullies) {
      if (r <= g.r0 || r >= g.r1) continue;
      const lat = Math.abs(angDiff(g.a, ang(x, z))) * r;
      if (lat < g.w) h -= g.depth * smooth(g.w, g.w * 0.25, lat) * smooth(g.r0, g.r0 + 4, r) * smooth(g.r1, g.r1 - 4, r);
    }
    return h;
  };
  // ---------------- شبكة الطرق: نقاط كل 0.8 م بالضبط، بيها الارتفاع ونص العرض والنوع
  const segs = [];
  function addPath(way, opts = {}) {
    const pts = way.map(([r, a]) => { const [x, z] = P2(r, a); return new Vector3(x, 0, z); });
    const curve = new CatmullRomCurve3(pts, false, 'centripetal');
    const L = curve.getLength(), n = Math.max(2, Math.ceil(L / 0.8)), out = [];
    for (let k = 0; k <= n; k++) { const t = curve.getUtoTmapping(k / n), p = curve.getPoint(t); out.push([p.x, p.z, Math.min(pts.length - 2, Math.floor(t * (pts.length - 1)))]); }
    const seg = { id: segs.length, kind: opts.kind || 'trail', pts: out.map(([x, z, wi]) => ({ x, z, wi, y: 0, hw: opts.hw || 1.35, kind: (opts.kinds && opts.kinds[wi]) || opts.kind || 'trail' })) };
    const raw = seg.pts.map((p) => Hbase(p.x, p.z));
    seg.pts.forEach((p, i) => { let s = 0, c = 0; for (let k = -22; k <= 22; k++) { s += raw[clamp(i + k, 0, raw.length - 1)]; c++; } p.y = s / c; });
    if (opts.y0 != null || opts.y1 != null) {
      const m = seg.pts.length - 1, a = opts.y0 != null ? opts.y0 - seg.pts[0].y : 0, b = opts.y1 != null ? opts.y1 - seg.pts[m].y : 0;
      seg.pts.forEach((p, i) => { p.y += lerp(a, b, i / (m || 1)); });
    }
    for (const p of seg.pts) if (p.kind === 'ledge') p.hw = 0.72; else if (p.kind === 'bridge') p.hw = 0.62; else if (p.kind === 'stones') p.hw = 0.6;
    segs.push(seg); return seg;
  }
  const A = addPath([[166, 12], [160, 40], [153, 68], [146, 94], [142.5, 114.6], [140, 122.4], [134, 146], [127, 172], [121, 194], [117, 206]], { kinds: { 4: 'bridge' } });
  // غابة المتاهة: شبكة 4×7، متاهة ثابتة (ممر صح وطرق مسدودة وحلقتين)
  const MR = [110, 98, 86, 74], MA = [212, 224, 236, 248, 260, 272, 284];
  const cellP = (i, j) => P2(MR[i], MA[j]);
  const cellY = (i, j) => { const [x, z] = cellP(i, j); let s = 0; for (let k = 0; k < 9; k++) s += Hbase(x + Math.cos(k) * 4, z + Math.sin(k) * 4); return s / 9; };
  const mazeEdges = [], seen = new Set(), mr = rng(77), key = (i, j) => i * 10 + j;
  (function dfs(i, j) {
    seen.add(key(i, j));
    const nb = [[i + 1, j], [i - 1, j], [i, j + 1], [i, j - 1]].filter(([a, b]) => a >= 0 && a < 4 && b >= 0 && b < 7 && !seen.has(key(a, b)));
    for (let k = nb.length - 1; k > 0; k--) { const q = Math.floor(mr() * (k + 1)); [nb[k], nb[q]] = [nb[q], nb[k]]; }
    for (const [a, b] of nb) if (!seen.has(key(a, b))) { mazeEdges.push([[i, j], [a, b]]); dfs(a, b); }
  })(0, 0);
  mazeEdges.push([[1, 2], [1, 3]], [[2, 4], [3, 4]]);
  const uniq = new Map(); for (const e of mazeEdges) { const k1 = key(...e[0]) * 100 + key(...e[1]), k2 = key(...e[1]) * 100 + key(...e[0]); if (!uniq.has(k1) && !uniq.has(k2)) uniq.set(k1, e); }
  const MAZ = [], mazeDeg = new Map();
  for (const [[i, j], [a, b]] of uniq.values()) {
    const [x0, z0] = cellP(i, j), [x1, z1] = cellP(a, b), mx = (x0 + x1) / 2 + (mr() - 0.5) * 3, mz = (z0 + z1) / 2 + (mr() - 0.5) * 3;
    const toRA = (x, z) => [rad(x, z), ((ang(x, z) / D2R) + 360) % 360];
    const s = addPath([toRA(x0, z0), toRA(mx, mz), toRA(x1, z1)], { kind: 'maze', hw: 1.25, y0: cellY(i, j), y1: cellY(a, b) });
    s.cells = [[i, j], [a, b]]; MAZ.push(s);
    for (const c of s.cells) mazeDeg.set(key(...c), (mazeDeg.get(key(...c)) || 0) + 1);
  }
  const entrySeg = addPath([[117, 206], [113, 209], [MR[0], MA[0]]], { kind: 'maze', hw: 1.3, y0: A.pts[A.pts.length - 1].y, y1: cellY(0, 0) });
  const exitSeg = addPath([[MR[3], MA[6]], [70, 287], [66, 292]], { kind: 'maze', hw: 1.3, y0: cellY(3, 6) });
  const Cw = [[66, 292], [62, 306], [58, 334], [54, 308], [50, 336], [46, 309], [43, 330], [41, 344], [40, 0], [39.3, 16], [38.6, 30], [37.5, 42], [36.6, 53], [35.8, 63], [34.4, 75], [32.4, 86], [31.2, 92], [29.6, 110.5], [27.4, 122], [24, 138], [20, 154], [RP + 0.4, 168]];
  const C2 = addPath(Cw, { y0: exitSeg.pts[exitSeg.pts.length - 1].y, kinds: { 7: 'ledge', 8: 'ledge', 9: 'ledge', 12: 'stones', 16: 'bridge' } });
  { // آخر الطريق يوصل بالضبط لمستوى الساحة، والشديد يصير درج حجر
    const P = C2.pts; let d = 0;
    for (let k = P.length - 1; k >= 0; k--) { if (k < P.length - 1) d += Math.hypot(P[k + 1].x - P[k].x, P[k + 1].z - P[k].z); P[k].y = Math.max(P[k].y, HS - d * 0.42); if (d > 60) break; }
    P[P.length - 1].y = HS;
    for (let k = Math.max(1, P.length - 80); k < P.length; k++) { const g = (P[k].y - P[k - 1].y) / (Math.hypot(P[k].x - P[k - 1].x, P[k].z - P[k - 1].z) || 1); if (g > 0.24 && P[k].kind === 'trail') { P[k].kind = 'stairs'; P[k].hw = 1.25; } }
  }
  // الجسور: خط مستقيم بين الطرفين + ترخية، وألواح ناقصة متباعدة
  const bridges = [];
  for (const seg of [A, C2]) {
    let i = 0;
    while (i < seg.pts.length) {
      if (seg.pts[i].kind !== 'bridge') { i++; continue; }
      let j = i; while (j + 1 < seg.pts.length && seg.pts[j + 1].kind === 'bridge') j++;
      const a = seg.pts[Math.max(0, i - 1)], b = seg.pts[Math.min(seg.pts.length - 1, j + 1)], n = j - i + 1;
      const gaps = n > 10 ? [Math.floor(n * 0.3), Math.floor(n * 0.7)] : [Math.floor(n / 2)];
      for (let k = i; k <= j; k++) { const t = (k - i + 1) / (n + 1), p = seg.pts[k]; p.y = lerp(a.y, b.y, t) - Math.sin(t * Math.PI) * 0.7; p.gap = gaps.includes(k - i); }
      bridges.push({ seg, i, j, a, b }); i = j + 1;
    }
  }
  const stones = [];
  for (let k = 0; k < C2.pts.length; k++) {
    const p = C2.pts[k]; if (p.kind !== 'stones') continue;
    if (!stones.length || Math.hypot(p.x - stones[stones.length - 1].x, p.z - stones[stones.length - 1].z) > 2.25) {
      const q = C2.pts[Math.min(k + 1, C2.pts.length - 1)], off = (R() - 0.5) * 0.5, nx = -(q.z - p.z), nz = q.x - p.x, l = Math.hypot(nx, nz) || 1;
      stones.push({ x: p.x + (nx / l) * off, z: p.z + (nz / l) * off, y: p.y + 0.05, r: 0.72 });
    }
  }
  const ALL = []; for (const s of segs) s.pts.forEach((p, k) => { p.seg = s; p.k = k; ALL.push(p); });
  const tgrid = makeGrid(4); for (const p of ALL) tgrid.add(p);
  /** أقرب نقطة طريق، ويفضّل نفس المستوى (حتى ما يخلط بين لفّات الزكزاك) */
  function nearest(x, z, yRef, reach = 1) {
    let best = null, bd = Infinity;
    tgrid.each(x, z, reach, (p) => { const d2 = (p.x - x) ** 2 + (p.z - z) ** 2 + (yRef != null ? Math.max(0, Math.abs(p.y - yRef) - 1.2) ** 2 * 9 : 0); if (d2 < bd) { bd = d2; best = p; } });
    if (!best) return null;
    const s = best.seg.pts, q = s[Math.min(best.k + 1, s.length - 1)], o = s[Math.max(best.k - 1, 0)];
    let d = Math.hypot(x - best.x, z - best.z), y = best.y, tx = q.x - o.x, tz = q.z - o.z; const tl = Math.hypot(tx, tz) || 1; tx /= tl; tz /= tl;
    for (const [a, b] of [[o, best], [best, q]]) {
      const vx = b.x - a.x, vz = b.z - a.z, L2 = vx * vx + vz * vz || 1, k = clamp(((x - a.x) * vx + (z - a.z) * vz) / L2, 0, 1);
      const dd = Math.hypot(x - (a.x + vx * k), z - (a.z + vz * k)); if (dd < d) { d = dd; y = lerp(a.y, b.y, k); }
    }
    return { p: best, d, y, tx, tz, side: (x - best.x) * -tz + (z - best.z) * tx };
  }
  /** الأرض ويه الطرق محفورة بجنب الجبل */
  function H(x, z) {
    const r = rad(x, z);
    const h0 = Hnat(x, z);
    if (r < RP + 1.5) return lerp(h0, HS, smooth(RP + 1.5, RP + 0.3, r));
    if (r > 200) return h0;
    let h = h0;
    const q = nearest(x, z, null, 2);
    if (q && q.d < q.p.hw + 3.2) {
      const k = q.p.kind;
      if (k === 'bridge') { /* الوادي يبقى تحت الجسر */ }
      else if (k === 'stones') h = Math.min(h, q.y - 0.55);
      else {
        h = lerp(h, q.y - 0.04, smooth(q.p.hw + 3.2, q.p.hw + 0.5, q.d));
        if (k === 'ledge') { const dOut = q.d - q.p.hw; if (dOut > 0) { if (r > rad(q.p.x, q.p.z)) h = Math.min(h, q.y - smooth(0, 2.2, dOut) * 11); else h = Math.max(h, q.y + smooth(0.3, 2.4, dOut) * 4.5); } }
      }
    }
    return h;
  }
  // ---------------- نقاط الاستراحة قبل كل تحدي
  const rest = [];
  const firstKind = (seg, kind) => seg.pts.findIndex((p) => p.kind === kind);
  const cpAt = (seg, k, name) => { const p = seg.pts[clamp(k, 0, seg.pts.length - 1)], q = seg.pts[clamp(k + 6, 0, seg.pts.length - 1)]; const c = { id: 'cp' + rest.length, x: p.x, z: p.z, y: p.y, name, face: Math.atan2(q.z - p.z, q.x - p.x), flag: true }; rest.push(c); return c; };
  cpAt(A, 3, 'سفح الجبل'); cpAt(A, firstKind(A, 'bridge') - 7, 'قبل الجسر'); cpAt(A, A.pts.length - 2, 'باب غابة المتاهة');
  cpAt(C2, 4, 'طلعة الزكزاك'); cpAt(C2, firstKind(C2, 'ledge') - 6, 'قبل حافة الجرف'); cpAt(C2, firstKind(C2, 'stones') - 5, 'قبل الساقية'); cpAt(C2, firstKind(C2, 'bridge') - 6, 'قبل الجسر الثاني');
  const lastP = C2.pts[C2.pts.length - 1], ENTRY_A = ang(lastP.x, lastP.z);
  rest.push({ id: 'summit', x: MX - 3, z: MZ + 3, y: HS, name: 'ساحة القمة', face: 0, flag: false, plaza: true });
  // ---------------- لافتات المتاهة (بس على الطريق الصح، وبعض المفترقات بلا لافتة) وجذوع النهايات المسدودة
  const signs = [], logs = [];
  {
    const adj = new Map(); for (const s of MAZ) { const [u, v] = s.cells.map((c) => key(...c)); for (const [a, b] of [[u, v], [v, u]]) { if (!adj.has(a)) adj.set(a, []); adj.get(a).push(b); } }
    const start = key(0, 0), goal = key(3, 6), prev = new Map([[start, -1]]), qq = [start], next = new Map();
    while (qq.length) { const u = qq.shift(); if (u === goal) break; for (const v of adj.get(u) || []) if (!prev.has(v)) { prev.set(v, u); qq.push(v); } }
    for (let v = goal; prev.get(v) !== -1 && prev.has(v); v = prev.get(v)) next.set(prev.get(v), v);
    let n = 0;
    for (const [u, v] of next) {
      if ((mazeDeg.get(u) || 0) < 3 || n++ % 3 === 2) continue;
      const [x0, z0] = cellP(Math.floor(u / 10), u % 10), [x1, z1] = cellP(Math.floor(v / 10), v % 10), a = Math.atan2(z1 - z0, x1 - x0);
      const sx = x0 + Math.cos(a + 0.9) * 1.9, sz = z0 + Math.sin(a + 0.9) * 1.9;
      signs.push({ x: sx, z: sz, a, text: '⬅ للقمة' });
    }
    for (const [k, deg] of mazeDeg) { if (deg !== 1 || k === start || k === goal) continue; const [x, z] = cellP(Math.floor(k / 10), k % 10); logs.push({ x, z, a: R() * TAU }); }
  }
  // ---------------- العملات: على الطريق، وكنز بنهايات المتاهة المسدودة
  const coins = [];
  for (const s of [A, C2]) for (let k = 8; k < s.pts.length - 4; k += 17) { const p = s.pts[k]; if (p.kind === 'trail') coins.push({ x: p.x, y: p.y + 0.9, z: p.z }); }
  for (const lg of logs) { const q = nearest(lg.x, lg.z, null, 2); if (!q) continue; for (let i = 0; i < 4; i++) { const pp = q.p.seg.pts[clamp((q.p.k + (i - 1.5) * 2) | 0, 0, q.p.seg.pts.length - 1)]; coins.push({ x: pp.x, y: pp.y + 0.9, z: pp.z }); } }
  // ---------------- بيوت الحيوانات
  const homeAt = (seg, k) => { const p = seg.pts[clamp(k, 0, seg.pts.length - 1)]; return { x: p.x, z: p.z, y: p.y }; };
  const kA = Math.floor(A.pts.length * 0.22), kL = firstKind(C2, 'ledge');
  const beasts = [
    { kind: 'wolf', home: homeAt(A, kA) }, { kind: 'wolf', home: homeAt(A, kA + 4), ox: 1.5 },
    { kind: 'wolf', home: homeAt(C2, kL - 26) }, { kind: 'wolf', home: homeAt(C2, kL - 22), ox: 1.2 },
    { kind: 'boar', home: homeAt(MAZ[Math.floor(MAZ.length * 0.4)], 10) }, { kind: 'boar', home: homeAt(MAZ[Math.floor(MAZ.length * 0.75)], 10) },
  ];
  // ---------------- الساحة: فعاليات، ناس، وعوائق
  const pz = (a, r) => [MX + Math.cos(a * D2R) * r, MZ + Math.sin(a * D2R) * r];
  const kioskA = 236, [kx, kz] = pz(kioskA, 9.2);
  const meet = pz(221, 6.2), bell = pz(118, 9), flag = pz(300, 10.2);
  const plaza = {
    x: MX, z: MZ, RP, HS, DECK_A, ENTRY_A, kioskA, kiosk: [kx, kz], meet, bell, flag,
    benches: [185, 150, 30], beds: [80, 175, 280, 350], lamps: [45, 145, 255, 330], pines: [62, 100, 200, 320],
    guests: [{ a: 212, r: 6.9, look: meet, kind: 'tea' }, { a: 229, r: 6.9, look: meet, kind: 'tea' }, { a: 219, r: 5.2, look: [kx, kz], kind: 'stand' }],
    scope: [MX + RP + 3.9, MZ],
    inter: [
      { id: 'tea', x: kx - Math.cos(kioskA * D2R) * 2.1, z: kz - Math.sin(kioskA * D2R) * 2.1, r: 2.3, label: '☕ اشرب شاي' },
      { id: 'chat', x: meet[0], z: meet[1], r: 2.2, label: '🗣️ سولف وياهم' },
      { id: 'bell', x: MX + (bell[0] - MX) * 0.84, z: MZ + (bell[1] - MZ) * 0.84, r: 2.2, label: '🔔 دك الجرس' },
      { id: 'scope', x: MX + RP + 3.1, z: MZ, r: 1.8, label: '🔭 باوع بالتلسكوب' },
      { id: 'fountain', x: MX, z: MZ, r: 3.4, label: '🪙 ارمِ عملة بالنافورة' },
    ],
  };
  const coll = [];
  coll.push({ x: MX, z: MZ, r: 2.6, tall: 1 });
  for (const k of [-1.1, 0, 1.1]) coll.push({ x: kx + Math.cos(kioskA * D2R + Math.PI / 2) * k, z: kz + Math.sin(kioskA * D2R + Math.PI / 2) * k, r: 1.05 });
  { const btx = -Math.sin(118 * D2R), btz = Math.cos(118 * D2R); coll.push({ x: bell[0] + btx * 0.9, z: bell[1] + btz * 0.9, r: 0.25 }, { x: bell[0] - btx * 0.9, z: bell[1] - btz * 0.9, r: 0.25 }); }
  coll.push({ x: flag[0], z: flag[1], r: 0.3 });
  for (const d of plaza.beds) { const [x, z] = pz(d, 11); coll.push({ x, z, r: 0.75 }); }
  for (const d of plaza.benches) { const [x, z] = pz(d, 6.6), tx = -Math.sin(d * D2R), tz = Math.cos(d * D2R); coll.push({ x, z, r: 0.75 }, { x: x + tx * 0.8, z: z + tz * 0.8, r: 0.5 }, { x: x - tx * 0.8, z: z - tz * 0.8, r: 0.5 }); }
  for (const g of plaza.guests) { const [x, z] = pz(g.a, g.r); coll.push({ x, z, r: 0.42 }); }
  for (const d of plaza.pines) { const [x, z] = pz(d, 11.6); coll.push({ x, z, r: 0.5, tall: 1 }); }
  // سور الساحة: بس فتحتين (الطريق والإطلالة)
  for (let i = 0; i < 64; i++) { const a = (i / 64) * TAU; if (Math.abs(angDiff(a, ENTRY_A)) < 0.2 || Math.abs(angDiff(a, DECK_A)) < 0.22) continue; coll.push({ x: MX + Math.cos(a) * (RP - 0.1), z: MZ + Math.sin(a) * (RP - 0.1), r: 0.55, wall: 1 }); }
  // صخور جدار حافة الجرف
  const ledgeRocks = [];
  for (const p of ALL) if (p.kind === 'ledge' && p.k % 2 === 0) {
    const q = p.seg.pts[Math.min(p.k + 1, p.seg.pts.length - 1)], o = p.seg.pts[Math.max(p.k - 1, 0)], tx = q.x - o.x, tz = q.z - o.z, l = Math.hypot(tx, tz) || 1;
    let nx = -tz / l, nz = tx / l; if (rad(p.x + nx, p.z + nz) > rad(p.x, p.z)) { nx = -nx; nz = -nz; }
    const sz = 0.9 + hash2(p.k, 1) * 0.8;
    ledgeRocks.push({ p, nx, nz, sz });
    coll.push({ x: p.x + nx * (p.hw + sz), z: p.z + nz * (p.hw + sz), r: sz * 0.8, tall: 1 });
  }
  for (const lg of logs) coll.push({ x: lg.x, z: lg.z, r: 0.9 });
  const stream = gullies[2];
  const inMaze = (x, z) => { const r = rad(x, z), a = ((ang(x, z) / D2R) + 360) % 360; return r > 66 && r < 122 && a > 203 && a < 293; };
  return {
    id: def.id || 'M1', x: MX, z: MZ, RP, HS, DECK_A, ENTRY_A, rad, ang, P2, prof, gullies, stream, Hbase, Hnat, H, segs, ALL, A, C2, MAZ, entrySeg, exitSeg, cellP, key,
    nearest, bridges, stones, rest, signs, logs, coins, beasts, plaza, coll, ledgeRocks, inMaze, foot: 200,
  };
}

// ======================================================================= 🏞️ معلم: وادي الغزلان (دونم: 120 × 22 م، والجوانب 21 م)
function buildValley(def) {
  const VX = def.x, VZ = def.z || 0, VF = def.floor ?? -35, VL = 120, FLOOR = 11;
  const riverZ = (lx) => 2.6 * Math.sin(lx * 0.055 + 0.6) + 1.5 * Math.sin(lx * 0.13 + 2.1) - 0.6;
  const CAMPS = [[17, 1], [45, -1], [76, 1], [103, -1]].map(([x, side]) => ({ x, z: clamp(riverZ(x) + side * 6.4, -8.2, 8.2), side, rot: side > 0 ? Math.PI : 0, base: 0 }));
  /** ارتفاع محلي (القاع = 0). المدخل من الغرب منحدر يطلع للسهل، والشرق مسدود */
  function H0(x, z) {
    const az = Math.abs(z);
    let h = (fbm(x * 0.09 + 3.1, z * 0.09) - 0.5) * 0.55;
    const rz = z - riverZ(clamp(x, -10, VL + 10));
    h -= Math.exp(-(rz * rz) / 1.3) * 0.75 * smooth(-12, -2, x);
    const t = clamp((az - (FLOOR - 1)) / 21, 0, 1);
    h += 21 * t * t + smooth(30, 50, az) * 7;
    h += (fbm(x * 0.07 + (z > 0 ? 9 : 2), az * 0.09) - 0.5) * 5 * smooth(FLOOR + 1, FLOOR + 9, az);
    if (x < 2) h = Math.max(h, 21 * Math.pow(clamp((2 - x) / 62, 0, 1), 0.9)); // منحدر المدخل
    if (x > VL - 2) { const ex = (x - VL + 2) / 30; h += 20 * Math.min(1, ex) ** 2 + smooth(1, 2.5, ex) * 6; }
    h += smooth(46, 70, az) * 45 + smooth(-62, -90, x) * 45 + smooth(VL + 35, VL + 70, x) * 45; // برّة الوادي: السهل ياخذ مكانه
    return h;
  }
  for (const c of CAMPS) c.base = H0(c.x, c.z) + 0.05;
  const toL = (x, z) => [x - VX, z - VZ];
  function Hv(x, z) {
    const lx = x - VX, lz = z - VZ;
    if (lx < -95 || lx > VL + 75 || Math.abs(lz) > 72) return Infinity;
    let h = H0(lx, lz);
    for (const c of CAMPS) { const dx = lx - c.x, dz = lz - c.z; if (dx * dx + dz * dz < 49) h = lerp(h, c.base, smooth(7, 4.5, Math.hypot(dx, dz))); }
    return VF + h;
  }
  const waterLevel = (lx) => VF + H0(lx, riverZ(lx)) + 0.42;
  const onFloor = (lx, lz) => lx > 1.5 && lx < VL - 1.5 && Math.abs(lz) < FLOOR - 1.2;
  const rest = [{ id: 'valley', x: VX + 4, z: VZ + riverZ(4) + 3.2, y: VF + H0(4, riverZ(4) + 3.2), name: 'مدخل الوادي', face: 0, flag: false }];
  for (const r of rest) r.y = Hv(r.x, r.z);
  return { id: def.id || 'V1', x: VX, z: VZ, VF, VL, FLOOR, riverZ, CAMPS, H0, Hv, toL, waterLevel, onFloor, rest };
}

// ======================================================================= 🌍 العالم
export const NATTA_MAP = {
  id: 'natta-1', name: 'جبل الغابة ووادي الغزلان', half: 500, seed: 9091,
  features: [{ type: 'mountain', id: 'M1', x: 0, z: 0 }, { type: 'valley', id: 'V1', x: 258, z: 0, floor: -35 }],
  spawn: 'cp0',
};

export function buildGeo(map = NATTA_MAP) {
  const R = rng(map.seed || 1);
  const HALF = map.half || 500;
  const M = buildMountain(map.features.find((f) => f.type === 'mountain'), R);
  const V = buildValley(map.features.find((f) => f.type === 'valley'));
  // السهل: تلال هادئة وسلسلة جبال على الحدود
  const plains = (x, z) => {
    const e = Math.max(Math.abs(x), Math.abs(z)) + (fbm(x * 0.008 + 1, z * 0.008 + 5) - 0.5) * 70; // حدود متعرجة مو حايط مستقيم
    const lx = x - V.x, nearV = smooth(140, 70, Math.max(Math.abs(z - V.z), lx < 0 ? -lx : lx > V.VL ? lx - V.VL : 0));
    let h = -14 + ((fbm(x * 0.006 + 7, z * 0.006) - 0.5) * 16 + (fbm(x * 0.025, z * 0.025 + 3) - 0.5) * 2.5) * (1 - nearV * 0.85);
    h += Math.pow(smooth(395, 492, e), 1.6) * 85 + (fbm(x * 0.03, z * 0.03) - 0.5) * 14 * smooth(400, 470, e);
    return h;
  };
  function H(x, z) {
    const r = M.rad(x, z);
    let h = r < 245 ? (r > 200 ? lerp(M.H(x, z), plains(x, z), smooth(200, 245, r)) : M.H(x, z)) : plains(x, z);
    const v = V.Hv(x, z); if (v < h) h = v;
    return h;
  }
  const slope = (x, z) => Math.hypot(H(x + 0.4, z) - H(x - 0.4, z), H(x, z + 0.4) - H(x, z - 0.4)) / 0.8;

  // ---------------- العوائق (دواير) بشبكة مكانية
  const cgrid = makeGrid(4), colliders = [];
  const addColl = (c) => { colliders.push(c); cgrid.add(c); return c; };
  for (const c of M.coll) addColl(c);

  // ---------------- الغطاء النباتي (مشترك: المحاكاة تحتاج الجذوع، والرسم يحتاج الأماكن)
  const veg = { pineA: [], pineB: [], oak: [], hedge: [], bush: [], rock: [], palm: [[], [], []], fruit: [[], [], []], boulder: [], vbush: [], vrock: [], rim: [] };
  const clearOfTrail = (x, z, extra) => { if (M.rad(x, z) < M.RP + 3) return false; const q = M.nearest(x, z, null, 2); if (q && q.d < q.p.hw + extra) return false; for (const c of M.rest) if (Math.hypot(x - c.x, z - c.z) < 4.6) return false; return true; };
  // غابة الجبل
  for (let x = -195; x <= 195; x += 2.3) for (let z = -195; z <= 195; z += 2.3) {
    const wx = M.x + x, wz = M.z + z, r = Math.hypot(x, z); if (r > 192) continue;
    const jx = wx + (R() - 0.5) * 2, jz = wz + (R() - 0.5) * 2;
    if (M.inMaze(jx, jz)) continue; // المتاهة إلها سياج كثيف لحالها
    const q = M.nearest(jx, jz, null, 6), nearT = q ? q.d : 99;
    if (nearT > 26 && R() < 0.5) continue;
    if (!clearOfTrail(jx, jz, 1.05)) continue;
    const y = H(jx, jz); let kind = R(), s = 0.8 + R() * 0.55;
    if (y > 84) { if (R() < 0.3 && clearOfTrail(jx, jz, 0.4)) veg.rock.push({ x: jx, y: y + 0.05, z: jz, rx: R() * 3, ry: R() * 3, rz: R() * 3, s3: [0.8 + R() * 1.4, 0.5 + R() * 0.8, 0.8 + R() * 1.4] }); else if (R() < 0.35) veg.bush.push({ x: jx, y, z: jz, ry: R() * TAU, s: 0.5 + R() * 0.6 }); continue; }
    if (y > 72) { if (R() < 0.45) continue; s *= lerp(1, 0.6, smooth(72, 84, y)); }
    if (Math.abs(angDiff(M.ang(jx, jz), M.DECK_A)) < 0.55 && y + 9 * s > M.HS - 7) continue;
    if (y > 48) kind *= 0.86;
    const it = { x: jx, y: y - 0.15, z: jz, ry: R() * TAU, s };
    if (kind < 0.46) veg.pineA.push(it); else if (kind < 0.82) veg.pineB.push(it); else veg.oak.push({ ...it, s: s * 0.95 });
    addColl({ x: jx, z: jz, r: 0.42 * s, tall: 1, tree: 1 });
    if (nearT < 9 && R() < 0.5) { const bx = jx + (R() - 0.5) * 1.6, bz = jz + (R() - 0.5) * 1.6; if (clearOfTrail(bx, bz, 0.25)) veg.bush.push({ x: bx, y: H(bx, bz), z: bz, ry: R() * TAU, s: 0.5 + R() * 0.7 }); }
  }
  // سياج المتاهة: شجيرات كثيفة ما تنعبر (والممرات بس مفتوحة)، وشجر عالي فوكها
  for (let x = -125; x <= 125; x += 1.25) for (let z = -125; z <= 125; z += 1.25) {
    const jx = M.x + x + (R() - 0.5) * 0.4, jz = M.z + z + (R() - 0.5) * 0.4;
    if (!M.inMaze(jx, jz) || !clearOfTrail(jx, jz, 0.75)) continue;
    const y = H(jx, jz);
    veg.hedge.push({ x: jx, y: y - 0.1, z: jz, ry: R() * TAU, s: 0.95 + R() * 0.45 });
    addColl({ x: jx, z: jz, r: 0.62, hedge: 1 });
    if (R() < 0.16 && clearOfTrail(jx, jz, 2.2)) { const it = { x: jx, y: y - 0.15, z: jz, ry: R() * TAU, s: 0.85 + R() * 0.4 }; (R() < 0.5 ? veg.pineA : veg.oak).push(it); }
  }
  // السهل: بساتين وأشجار متفرقة وصخور
  for (let x = -HALF + 10; x <= HALF - 10; x += 6) for (let z = -HALF + 10; z <= HALF - 10; z += 6) {
    const jx = x + (R() - 0.5) * 5, jz = z + (R() - 0.5) * 5;
    if (M.rad(jx, jz) < 205) continue;
    const lx = jx - V.x, lz = jz - V.z; if (lx > -100 && lx < V.VL + 70 && Math.abs(lz) < 60) continue;
    const grove = vnoise(jx * 0.012 + 4, jz * 0.012), e = Math.max(Math.abs(jx), Math.abs(jz));
    if (e > 470) continue;
    const p = grove > 0.62 ? 0.75 : e > 400 ? 0.25 : 0.05;
    if (R() > p) { if (R() < 0.03) veg.rock.push({ x: jx, y: H(jx, jz) + 0.05, z: jz, rx: R() * 3, ry: R() * 3, rz: R() * 3, s3: [0.7 + R() * 1.6, 0.4 + R() * 0.9, 0.7 + R() * 1.6] }); continue; }
    if (slope(jx, jz) > 0.8) continue;
    const s = 0.8 + R() * 0.6, it = { x: jx, y: H(jx, jz) - 0.15, z: jz, ry: R() * TAU, s };
    (e > 400 ? (R() < 0.6 ? veg.pineB : veg.pineA) : R() < 0.55 ? veg.oak : veg.pineA).push(it);
    addColl({ x: jx, z: jz, r: 0.42 * s, tall: 1, tree: 1 });
  }
  // الوادي: نخل، شجر فاكهة، شجيرات، صخور (بإحداثيات محلية ← العالم)
  {
    const vr = rng(20261123), W = (lx, lz) => [V.x + lx, V.z + lz];
    const nearCamp = (x, z, r) => V.CAMPS.some((c) => Math.hypot(x - c.x, z - c.z) < r);
    const occupied = (x, z, r) => Math.abs(z - V.riverZ(x)) < 1.7 + r || nearCamp(x, z, 6.8 + r);
    const floorSpot = (minAz = 0, maxAz = V.FLOOR - 0.6, x0 = -1, x1 = V.VL + 1) => ({ x: x0 + vr() * (x1 - x0), z: (vr() < 0.5 ? -1 : 1) * (minAz + vr() * (maxAz - minAz)) });
    const vslope = (lx, lz) => slope(V.x + lx, V.z + lz);
    const spots = [];
    for (const side of [-1, 1]) for (let x = -2; x < V.VL + 2; x += 5 + vr() * 5) { const z = V.riverZ(x) + side * (2.3 + vr() * 1.8); if (!nearCamp(x, z, 7.5) && Math.abs(z) < V.FLOOR) spots.push({ x, z }); }
    for (let i = 0; i < 16; i++) { const s = floorSpot(2, V.FLOOR - 1); if (!occupied(s.x, s.z, 0.6)) spots.push(s); }
    spots.forEach((s, i) => { const [x, z] = W(s.x, s.z); addColl({ x, z, r: 0.38, tall: 1, tree: 1 }); veg.palm[i % 3].push({ x, y: H(x, z) - 0.05, z, ry: vr() * TAU, s: 0.85 + vr() * 0.4 }); });
    for (let gi = 0; gi < 3; gi++) for (let tries = 0, n = 0; n < 9 && tries < 400; tries++) {
      const s = floorSpot(1.5, V.FLOOR - 0.5); const [x, z] = W(s.x, s.z);
      if (occupied(s.x, s.z, 1.4) || cgrid.each(x, z, 1, (c) => Math.hypot(c.x - x, c.z - z) < 3)) continue;
      addColl({ x, z, r: 0.35, tall: 1, tree: 1 }); veg.fruit[gi].push({ x, y: H(x, z) - 0.05, z, ry: vr() * TAU, s: 0.75 + vr() * 0.45 }); n++;
    }
    for (let tries = 0; veg.vbush.length < 130 && tries < 3000; tries++) { const s = floorSpot(0, V.FLOOR + 4); if (occupied(s.x, s.z, 0.5) || vslope(s.x, s.z) > 0.7) continue; const [x, z] = W(s.x, s.z); veg.vbush.push({ x, y: H(x, z), z, ry: vr() * TAU, s: 0.5 + vr() * 0.8 }); }
    for (let tries = 0; veg.vrock.length < 90 && tries < 2000; tries++) { const s = floorSpot(0, V.FLOOR); if (nearCamp(s.x, s.z, 6) || Math.abs(s.z - V.riverZ(s.x)) < 1.1) continue; const k = 0.35 + vr() * 0.8, [x, z] = W(s.x, s.z); if (k > 0.8) addColl({ x, z, r: 0.3 * k }); veg.vrock.push({ x, y: H(x, z) + 0.04, z, rx: vr() * 3, ry: vr() * 3, rz: vr() * 3, s3: [k, k * (0.6 + vr() * 0.4), k * (0.8 + vr() * 0.4)] }); }
    for (let i = 0; i < 230; i++) { const lx = -14 + vr() * (V.VL + 30), az = V.FLOOR + 1 + vr() * 26, lz = (vr() < 0.5 ? -1 : 1) * az, k = 0.8 + vr() * 3.2, [x, z] = W(lx, lz); veg.boulder.push({ x, y: H(x, z) - k * 0.42, z, rx: vr() * 3, ry: vr() * 3, rz: vr() * 3, s3: [k, k * (0.5 + vr() * 0.4), k * (0.8 + vr() * 0.5)] }); }
    for (let i = 0; i < 26; i++) { const s = floorSpot(V.FLOOR - 3, V.FLOOR + 1); if (nearCamp(s.x, s.z, 7)) continue; const k = 1.3 + vr() * 1.6, [x, z] = W(s.x, s.z); addColl({ x, z, r: 0.45 * k }); veg.boulder.push({ x, y: H(x, z) - 0.15, z, rx: vr() * 3, ry: vr() * 3, rz: vr() * 3, s3: [k, k * 0.7, k] }); }
    for (let i = 0; i < 140; i++) { const lx = -40 + vr() * (V.VL + 80), az = 26 + vr() * 40, lz = (vr() < 0.5 ? -1 : 1) * az; if (vnoise(lx * 0.06, lz * 0.06) < 0.4) continue; const [x, z] = W(lx, lz); veg.rim.push({ x, y: H(x, z) - 0.2, z, ry: vr() * TAU, s: 1 + vr() * 1.3 }); }
  }
  // ---------------- كثافة الغابة (تبطّي المشي)
  const dgrid = new Map();
  for (const c of colliders) if (c.tree) { const k = gk(Math.floor(c.x / 6), Math.floor(c.z / 6)); dgrid.set(k, (dgrid.get(k) || 0) + 1); }
  const forestAt = (x, z) => (dgrid.get(gk(Math.floor(x / 6), Math.floor(z / 6))) || 0) / 7; // ~1 = غابة كثيفة

  // ---------------- المنصّات: الجسور والحجار وسطيحة الإطلالة
  const bgrid = makeGrid(4); for (const b of M.bridges) for (let k = b.i; k <= b.j; k++) bgrid.add(b.seg.pts[k]);
  function bridgeAt(x, z) {
    let best = null, bd = Infinity;
    bgrid.each(x, z, 1, (p) => { const d = (p.x - x) ** 2 + (p.z - z) ** 2; if (d < bd) { bd = d; best = p; } });
    if (!best || bd > 2.5) return null;
    const s = best.seg.pts, q = s[Math.min(best.k + 1, s.length - 1)], o = s[Math.max(best.k - 1, 0)];
    let tx = q.x - o.x, tz = q.z - o.z; const tl = Math.hypot(tx, tz) || 1; tx /= tl; tz /= tl;
    const al = (x - best.x) * tx + (z - best.z) * tz, lat = Math.abs((x - best.x) * -tz + (z - best.z) * tx);
    if (lat > best.hw + 0.05) return { off: true, p: best, tx, tz, lat };
    const nb = s[clamp(best.k + (al > 0 ? 1 : -1), 0, s.length - 1)];
    if (nb.kind !== 'bridge' && Math.abs(al) > 0.35) return null; // برّة طرف الجسر
    if (best.gap && Math.abs(al) < 0.32) return { hole: true, p: best, tx, tz, lat };
    return { y: lerp(best.y, nb.y, clamp(Math.abs(al) / 0.8, 0, 1)), p: best, tx, tz, lat };
  }
  const deck = { x0: M.x + M.RP - 1, x1: M.x + M.RP + 4.35, z0: M.z - 1.65, z1: M.z + 1.65, y: M.HS + 0.09 };
  /** أعلى سطح تكدر توكف عليه تحت (أو قريب من) ارتفاعك: الأرض أو جسر أو حجرة أو السطيحة */
  function surfaceAt(x, z, yRef, air) {
    let y = H(x, z), kind = null, plat = null;
    const up = (yRef == null ? Infinity : yRef + 0.7);
    if (yRef != null && M.rad(x, z) < 200) { // الطريق سطح بمستواه (حتى بالزكزاك ما يختلط طريق بطريق)
      const q = M.nearest(x, z, yRef, 1);
      if (q && q.d <= q.p.hw + 0.25 && q.p.kind !== 'bridge' && q.p.kind !== 'stones' && q.y - 0.04 <= up && Math.abs(q.y - 0.04 - y) < 7) { y = q.y - 0.04; kind = 'path'; }
    }
    const b = bridgeAt(x, z); if (b && b.y != null && b.y <= up && b.y > y - 0.01) { y = b.y; kind = 'bridge'; plat = b; }
    for (const s of M.stones) { const d = Math.hypot(x - s.x, z - s.z); if (d < s.r + (air ? 0.5 : 0) && s.y <= up && s.y > y) { y = s.y; kind = 'stone'; plat = s; } }
    if (x > deck.x0 && x < deck.x1 && z > deck.z0 && z < deck.z1 && deck.y <= up && deck.y >= y - 0.2) { y = deck.y; kind = 'deck'; }
    return { y, kind, plat, b };
  }
  /** نوع الأرض (للصوت والسرعة) */
  function groundKind(x, z, y) {
    const r = M.rad(x, z);
    if (r < M.RP + 0.5 && Math.abs(y - M.HS) < 0.6) return 'plaza';
    if (r < 200) { const q = M.nearest(x, z, y, 1); if (q && q.d < q.p.hw) return q.p.kind === 'stones' ? 'trail' : q.p.kind; }
    const [lx, lz] = V.toL(x, z); if (lx > -2 && lx < V.VL + 2 && Math.abs(lz) < V.FLOOR + 1) return 'grass';
    if (slope(x, z) > 0.85) return 'rock';
    return forestAt(x, z) > 0.55 ? 'forest' : 'grass';
  }
  /** الماي: الساقية بالجبل (تسحبك)، ونهر الوادي (تخوض بيه) */
  function water(x, z, y) {
    const [lx, lz] = V.toL(x, z);
    if (lx > -6 && lx < V.VL + 6 && Math.abs(lz - V.riverZ(lx)) < 0.95) { const lv = V.waterLevel(lx); if (y < lv + 0.3) return { kind: 'river', level: lv }; }
    const g = M.stream, r = M.rad(x, z);
    if (r > g.r0 + 1 && r < g.r1 - 1) { const lat = Math.abs(angDiff(g.a, M.ang(x, z))) * r; if (lat < 2.1) { const lv = M.Hnat(x, z) + 0.5; if (y < lv + 0.25) return { kind: 'torrent', level: lv, dx: Math.cos(g.a), dz: Math.sin(g.a) }; } }
    return null;
  }
  /** نطلّع الدايرة من العوائق (يرجّع الموقع الجديد) */
  function collide(x, z, r, filter) {
    for (let it = 0; it < 2; it++) {
      cgrid.each(x, z, 1, (c) => {
        if (filter && !filter(c)) return;
        const dx = x - c.x, dz = z - c.z, rr = r + c.r, d2 = dx * dx + dz * dz;
        if (d2 < rr * rr && d2 > 1e-8) { const d = Math.sqrt(d2), k = (rr - d) / d; x += dx * k; z += dz * k; }
      });
    }
    return [clamp(x, -HALF + 3, HALF - 3), clamp(z, -HALF + 3, HALF - 3)];
  }
  const tallNear = (x, z, f) => cgrid.each(x, z, 1, (c) => c.tall && f(c));
  const restPoints = [...M.rest, ...V.rest];
  return {
    map, HALF, M, V, H, slope, plains, surfaceAt, groundKind, water, collide, colliders, addColl, removeColl: (c) => { cgrid.remove(c); const i = colliders.indexOf(c); if (i >= 0) colliders.splice(i, 1); }, tallNear, cgrid,
    veg, forestAt, restPoints, bridgeAt, deck,
  };
}
