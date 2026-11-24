// 🛣️ نطّة — مخطّط شبكة الطرق المعبّدة (يشتغل مرة وحدة بالكمبيوتر، والنتيجة تنحفظ بـ src/world/roadNet.js)
//
// مثل مهندس طرق حقيقي:
//   1) يقرا الجزيرة كشبكة 10 م: الارتفاع، الميلان، البحر والبحيرة (ممنوع)، الأنهار (جسر = كلفة)، الهور (جسر ترابي = كلفة)،
//      الغابة (قطع شجر)، البنايات والساحات (ممنوع)، والطرق الترابية (يفضّل يبلّطها بدل ما يفتح طريق جديد).
//   2) A* بـ 16 اتجاه: الكلفة = الطول × (الانحدار على طول الطريق، الميلان الجانبي = حفر، غابة، ساحل) + جسور.
//      الطريق الدائري حده 7٪ انحدار، والفرعية 10٪، فيلف ويه خطوط الارتفاع ويطلع زكزاك إذا لازم.
//   3) الطريق الدائري يمرّ بالمناطق الساحلية وحدة ورا الثانية، وكل منطقة داخلية توصلها طريق فرعية لأقرب نقطة بالشبكة (تصير تقاطع).
//   4) يليّن المسار، ويحسب مقطعه الطولي (حفر/ردم) بحد الانحدار، ويرفعه فوك الأنهار (جسور) والهور (جسر ترابي).
//   5) يحسب المسافات بالشبكة (Dijkstra) فيحط لوحات اتجاهات بالتقاطعات («🏘️ قرية الطين 2.4 كم») ولوحات «أهلاً» على مداخل المناطق.
//
// التشغيل:  node natta/tools/plan-roads.mjs        (يحتاج three بـ node_modules فوك المجلد)
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
globalThis.NATTA_PLAN = true; // الجزيرة بدون الطرق المعبّدة القديمة (نخطّط على الأرض الطبيعية)
const { buildGeo, NATTA_MAP } = await import('../src/world/geo.js');
const { resample } = await import('../src/world/geom2d.js');
const { smooth } = await import('../src/lib3d.js');

const here = path.dirname(fileURLToPath(import.meta.url));
const t0 = Date.now();
const G = buildGeo(NATTA_MAP), I = G.I, SEA = G.SEA, HALF = G.HALF;
const log = (...a) => console.log(`[${((Date.now() - t0) / 1000).toFixed(1)}s]`, ...a);
log('island built');

// =========================================================== 1) الشبكة
const C = 10, NG = Math.ceil((HALF * 2) / C), idx = (i, j) => i * NG + j;
const X = (i) => -HALF + (i + 0.5) * C, Z = (j) => -HALF + (j + 0.5) * C;
const toI = (x) => Math.max(0, Math.min(NG - 1, Math.floor((x + HALF) / C))), toJ = toI;
const A = new Float32Array(NG * NG), F = new Uint8Array(NG * NG), BASE = new Float32Array(NG * NG), RW = new Float32Array(NG * NG);
const BLOCK = 1, RIVER = 2, MARSH = 4, DIRT = 8, NET = 16, OPEN = 32; // OPEN = مسموح حتى لو محجوز (قرب الهدف)
const SF = I.safari;
for (let i = 0; i < NG; i++) for (let j = 0; j < NG; j++) {
  const x = X(i), z = Z(j), k = idx(i, j), s = I.coastS(x, z);
  if (s < -5) { F[k] = BLOCK; A[k] = -5; continue; }
  const y = G.H(x, z), a = y - SEA; A[k] = a;
  let f = 0, base = 1;
  const w = I.water(x, z, y + 0.05);
  if (w && (w.kind === 'sea' || w.kind === 'lake')) f |= BLOCK;
  if (w && w.kind === 'marsh') { f |= MARSH; base += 5; }
  const rv = I.nearRiver(x, z); if (rv && rv.d < rv.w + 2) { f |= RIVER; RW[k] = rv.w; }
  if (s < 28) f |= BLOCK; else if (s < 90) base += 0.5 * (1 - (s - 28) / 62);
  if (Math.hypot(x - G.M.x, z - G.M.z) < 330) f |= BLOCK; // راس الجبل للطرق الترابية والدرج
  if (I.reserved(x, z)) f |= BLOCK;
  if (SF.fieldK(x, z, s) > 0.02) f |= BLOCK;
  const fl = a > 0.4 ? I.flora(x, z, a, s, 0) : null; if (fl) base += fl.t * 0.45;
  const rd = I.nearRoad(x, z); if (rd && rd.d < rd.hw + 2) f |= DIRT;
  F[k] = f; BASE[k] = base;
}
// ارتفاع مليّن (±20 م) للانحدار: الطريق نفسه يتليّن، فالمطبات الصغيرة ما تهم
const AS = new Float32Array(NG * NG);
{ const tmp = new Float32Array(NG * NG), R = 2;
  for (let i = 0; i < NG; i++) for (let j = 0; j < NG; j++) { let s = 0, n = 0; for (let d = -R; d <= R; d++) { const jj = j + d; if (jj >= 0 && jj < NG) { s += A[idx(i, jj)]; n++; } } tmp[idx(i, j)] = s / n; }
  for (let i = 0; i < NG; i++) for (let j = 0; j < NG; j++) { let s = 0, n = 0; for (let d = -R; d <= R; d++) { const ii = i + d; if (ii >= 0 && ii < NG) { s += tmp[idx(ii, j)]; n++; } } AS[idx(i, j)] = s / n; } }
log('grid', NG, 'x', NG);

// =========================================================== 2) A*
const DIRS = []; for (const [di, dj] of [[1, 0], [0, 1], [-1, 0], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1], [2, 1], [1, 2], [-1, 2], [-2, 1], [-2, -1], [-1, -2], [1, -2], [2, -1]]) DIRS.push({ di, dj, L: Math.hypot(di, dj) * C });
class Heap { constructor() { this.k = []; this.v = []; } push(key, val) { const k = this.k, v = this.v; let i = k.length; k.push(key); v.push(val); while (i > 0) { const p = (i - 1) >> 1; if (k[p] <= key) break; k[i] = k[p]; v[i] = v[p]; i = p; } k[i] = key; v[i] = val; } pop() { const k = this.k, v = this.v, top = v[0], lk = k.pop(), lv = v.pop(); if (k.length) { let i = 0; const n = k.length; for (;;) { let c = 2 * i + 1; if (c >= n) break; if (c + 1 < n && k[c + 1] < k[c]) c++; if (k[c] >= lk) break; k[i] = k[c]; v[i] = v[c]; i = c; } k[i] = lk; v[i] = lv; } return top; } get size() { return this.k.length; } }
const gScore = new Float64Array(NG * NG), came = new Int32Array(NG * NG), stamp = new Int32Array(NG * NG); let st = 0;
function edgeCost(a, b, d, gmax) {
  const fb = F[b]; if ((fb & BLOCK) && !(fb & OPEN)) return Infinity;
  const ga = (AS[b] - AS[a]) / d.L, g = Math.abs(ga);
  // ميلان جانبي (حفر بجنب الجبل)
  const ib = Math.floor(b / NG), jb = b % NG;
  const gx = (AS[idx(Math.min(NG - 1, ib + 1), jb)] - AS[idx(Math.max(0, ib - 1), jb)]) / (2 * C), gz = (AS[idx(ib, Math.min(NG - 1, jb + 1))] - AS[idx(ib, Math.max(0, jb - 1))]) / (2 * C);
  const ux = d.di / Math.hypot(d.di, d.dj), uz = d.dj / Math.hypot(d.di, d.dj), side = Math.abs(gx * -uz + gz * ux);
  let c = BASE[b] + 2.2 * (g / gmax) ** 2 + (g > gmax ? 80 * (g - gmax) / gmax : 0) + 3 * Math.max(0, side - 0.18);
  if (fb & RIVER) c += (F[a] & RIVER) ? 25 : (RW[b] >= 3 ? 26 : 4); // جسر = غالي، والمشي ويّا النهر ممنوع تقريباً
  if (fb & NET) c *= 0.3; else if (fb & DIRT) c *= 0.85;
  // الخطوة الطويلة (حصان) لازم ما تقفز فوك ممنوع
  if (Math.abs(d.di) + Math.abs(d.dj) === 3) { const ia = Math.floor(a / NG), ja = a % NG, mi = ia + Math.round(d.di / 2), mj = ja + Math.round(d.dj / 2); const m = idx(mi, mj); if ((F[m] & BLOCK) && !(F[m] & OPEN)) return Infinity; }
  return c * d.L;
}
/** من نقطة لنقطة (أو لأي خلية بالشبكة إذا toNet) */
function astar(sx, sz, tx, tz, gmax, toNet = false, goalR = 0) {
  st++;
  const s = idx(toI(sx), toJ(sz)), t = idx(toI(tx), toJ(tz)), ti = Math.floor(t / NG), tj = t % NG;
  const dG = (k) => Math.hypot(Math.floor(k / NG) - ti, (k % NG) - tj) * C;
  const h = (k) => toNet ? 0 : Math.max(0, dG(k) - goalR) * 0.9;
  const open = new Heap(); gScore[s] = 0; stamp[s] = st; came[s] = -1; open.push(h(s), s);
  let found = -1, n = 0;
  while (open.size) {
    const cur = open.pop(); n++;
    if (toNet ? (F[cur] & NET) && cur !== s : goalR ? dG(cur) <= goalR : cur === t) { found = cur; break; }
    const ci = Math.floor(cur / NG), cj = cur % NG, gc = gScore[cur];
    for (const d of DIRS) {
      const ni = ci + d.di, nj = cj + d.dj; if (ni < 0 || nj < 0 || ni >= NG || nj >= NG) continue;
      const nb = idx(ni, nj), c = edgeCost(cur, nb, d, gmax); if (c === Infinity) continue;
      const g2 = gc + c;
      if (stamp[nb] !== st || g2 < gScore[nb]) { stamp[nb] = st; gScore[nb] = g2; came[nb] = cur; open.push(g2 + h(nb), nb); }
    }
  }
  if (found < 0) throw new Error(`no path ${sx.toFixed(0)},${sz.toFixed(0)} → ${tx.toFixed(0)},${tz.toFixed(0)}`);
  const path = []; for (let k = found; k >= 0; k = came[k]) path.push(k); path.reverse();
  return { cells: path, cost: gScore[found], expanded: n };
}
/** A* ويّا الاتجاه (حالة = خلية × 16 اتجاه): كل لفّة إلها كلفة، فالطريق يطلع بأرجل طويلة ومنعطفات ناعمة وزكزاك حقيقي بالمنحدرات */
const NS = NG * NG * 16; let gD = null, cameD = null, stD = null, stc = 0;
const DANG = DIRS.map((d) => Math.atan2(d.dj, d.di));
function astarDir(sx, sz, gmax, turnK = 60) {
  if (!gD) { gD = new Float32Array(NS); cameD = new Int32Array(NS); stD = new Int32Array(NS); }
  stc++;
  const s = idx(toI(sx), toJ(sz)), open = new Heap();
  for (let d = 0; d < 16; d++) { const k = s * 16 + d; gD[k] = 0; stD[k] = stc; cameD[k] = -1; open.push(0, k); }
  let found = -1, n = 0;
  while (open.size) {
    const cur = open.pop(), cell = (cur / 16) | 0, cd = cur % 16; n++;
    if ((F[cell] & NET) && cell !== s) { found = cur; break; }
    const ci = Math.floor(cell / NG), cj = cell % NG, gc = gD[cur];
    for (let d = 0; d < 16; d++) {
      const D = DIRS[d], ni = ci + D.di, nj = cj + D.dj; if (ni < 0 || nj < 0 || ni >= NG || nj >= NG) continue;
      const nb = idx(ni, nj); let c = edgeCost(cell, nb, D, gmax); if (c === Infinity) continue;
      let dt = Math.abs(DANG[d] - DANG[cd]); if (dt > Math.PI) dt = 2 * Math.PI - dt;
      if (cameD[cur] !== -1 || gc > 0) c += turnK * dt * dt + (dt > 1.2 ? 400 : 0); // لفّة حادة = غالية
      const k = nb * 16 + d, g2 = gc + c;
      if (stD[k] !== stc || g2 < gD[k]) { stD[k] = stc; gD[k] = g2; cameD[k] = cur; open.push(g2, k); }
    }
  }
  if (found < 0) throw new Error('no dir path');
  const path = []; for (let k = found; k >= 0; k = cameD[k]) { const cell = (k / 16) | 0; if (path[path.length - 1] !== cell) path.push(cell); } path.reverse();
  return { cells: path, expanded: n };
}
const openAround = (x, z, r) => { for (let i = toI(x - r); i <= toI(x + r); i++) for (let j = toJ(z - r); j <= toJ(z + r); j++) if (Math.hypot(X(i) - x, Z(j) - z) < r && A[idx(i, j)] > 0.6 && !(I.water(X(i), Z(j), SEA + A[idx(i, j)] + 0.05))) F[idx(i, j)] |= OPEN; };
/** أقرب خلية مفتوحة لنقطة */
function snap(x, z) { let best = null, bd = 1e9; for (let r = 0; r < 30 && !best; r++) for (let i = toI(x) - r; i <= toI(x) + r; i++) for (let j = toJ(z) - r; j <= toJ(z) + r; j++) { if (i < 0 || j < 0 || i >= NG || j >= NG) continue; const k = idx(i, j); if ((F[k] & BLOCK) && !(F[k] & OPEN)) continue; const d = Math.hypot(X(i) - x, Z(j) - z); if (d < bd) { bd = d; best = { x: X(i), z: Z(j) }; } } return best; }

// =========================================================== 3) تبسيط وتليين
const blockedAt = (x, z) => { const k = idx(toI(x), toJ(z)); return (F[k] & BLOCK) && !(F[k] & OPEN); };
const segClear = (a, b) => { const L = Math.hypot(b[0] - a[0], b[1] - a[1]); for (let s = 0; s <= L; s += 4) if (blockedAt(a[0] + (b[0] - a[0]) * s / L, a[1] + (b[1] - a[1]) * s / L)) return false; return true; };
function simplify(P, tol) {
  const keep = new Uint8Array(P.length); keep[0] = keep[P.length - 1] = 1;
  const rec = (i0, i1) => { let md = 0, mi = -1; const [ax, az] = P[i0], [bx, bz] = P[i1], L = Math.hypot(bx - ax, bz - az) || 1; for (let i = i0 + 1; i < i1; i++) { const d = Math.abs((P[i][0] - ax) * (bz - az) - (P[i][1] - az) * (bx - ax)) / L; if (d > md) { md = d; mi = i; } } if (mi > 0 && (md > tol || !segClear(P[i0], P[i1]))) { keep[mi] = 1; rec(i0, mi); rec(mi, i1); } };
  rec(0, P.length - 1); return P.filter((_, i) => keep[i]);
}
/** ارتفاع مليّن (±20 م) بأي نقطة (bilinear) */
const asAt = (x, z) => { const fi = (x + HALF) / C - 0.5, fj = (z + HALF) / C - 0.5, i0 = Math.max(0, Math.min(NG - 2, Math.floor(fi))), j0 = Math.max(0, Math.min(NG - 2, Math.floor(fj))), u = Math.max(0, Math.min(1, fi - i0)), v = Math.max(0, Math.min(1, fj - j0)); return (AS[idx(i0, j0)] * (1 - u) + AS[idx(i0 + 1, j0)] * u) * (1 - v) + (AS[idx(i0, j0 + 1)] * (1 - u) + AS[idx(i0 + 1, j0 + 1)] * u) * v; };
/** الجسر لازم يكون مستقيم: نعدّل الطريق ±(نص الجسر + 15 م) على خط واحد ونليّن الطرفين. يرجّع الجسور (حتى التليين ما يحرّكها) */
function straightenBridges(pts, closed) {
  const n = pts.length, out = []; let i = 0;
  while (i < n) {
    const q = I.nearRiver(pts[i].x, pts[i].z);
    if (!(q && q.d < q.w + 1.5)) { i++; continue; }
    let j = i; while (j + 1 < n) { const q2 = I.nearRiver(pts[j + 1].x, pts[j + 1].z); if (!(q2 && q2.d < q2.w + 1.5)) break; j++; }
    const m = Math.round((i + j) / 2), qm = I.nearRiver(pts[m].x, pts[m].z);
    if (qm.w >= 3) {
      const K = Math.ceil((qm.w + 9 + 40) / 5), at = (k) => pts[closed ? (k + n) % n : Math.max(0, Math.min(n - 1, k))];
      const a = at(m - K), b = at(m + K); let dx = b.x - a.x, dz = b.z - a.z; const l = Math.hypot(dx, dz) || 1; dx /= l; dz /= l;
      const c0 = { x: (a.x + b.x) / 2, z: (a.z + b.z) / 2 };
      for (let k = -K; k <= K; k++) { const kk = closed ? (m + k + n) % n : m + k; if (kk < 0 || kk >= n) continue; const p = pts[kk], t = (p.x - c0.x) * dx + (p.z - c0.z) * dz, w = 1 - smooth(K - 9, K, Math.abs(k)); p.x += (c0.x + dx * t - p.x) * w; p.z += (c0.z + dz * t - p.z) * w; }
      out.push({ c0, dx, dz, half: qm.w + 14 });
    }
    i = j + 1;
  }
  return out;
}
const lockedBy = (bl) => (x, z) => bl.some((b) => { const ax = x - b.c0.x, az = z - b.c0.z; return Math.abs(ax * b.dx + az * b.dz) < b.half && Math.abs(-ax * b.dz + az * b.dx) < 4; });
/** إعادة أخذ عيّنات بمسافات متساوية على طول المسار (خطّي، للمسارات الكثيفة) */
function uniform(P, step, closed) {
  const Q = closed ? P.concat([P[0]]) : P, cum = [0];
  for (let i = 1; i < Q.length; i++) cum.push(cum[i - 1] + Math.hypot(Q[i][0] - Q[i - 1][0], Q[i][1] - Q[i - 1][1]));
  const L = cum[cum.length - 1], n = Math.max(2, Math.round(L / step)), out = []; let j = 0;
  for (let k = 0; k < (closed ? n : n + 1); k++) { const s = (k / n) * L; while (j < Q.length - 2 && cum[j + 1] < s) j++; const t = (s - cum[j]) / Math.max(1e-9, cum[j + 1] - cum[j]); out.push([Q[j][0] + (Q[j + 1][0] - Q[j][0]) * t, Q[j][1] + (Q[j + 1][1] - Q[j][1]) * t]); }
  return out;
}
/** تليين المنعطفات: كل نقطة نصف قطرها أصغر من الحد تنسحب صوب نص جيرانها (بلا ما تدخل ماي أو بناية)، وكل فترة نعيد المسافات 5 م */
function fairCurve(pts, Rmin, closed, gmax, rounds = 12, win = 4, locked = null) {
  let P = pts.map((p) => [p.x, p.z]);
  const n0 = () => P.length, at = (i) => (closed ? P[(i + P.length) % P.length] : P[Math.max(0, Math.min(P.length - 1, i))]);
  const radius = (i) => { const a = at(i - 2), b = at(i), c = at(i + 2); const h1 = Math.atan2(b[1] - a[1], b[0] - a[0]), h2 = Math.atan2(c[1] - b[1], c[0] - b[0]); let dh = Math.abs(h2 - h1); if (dh > Math.PI) dh = 2 * Math.PI - dh; const L = (Math.hypot(b[0] - a[0], b[1] - a[1]) + Math.hypot(c[0] - b[0], c[1] - b[1])) / 2; return L / Math.max(1e-4, dh); };
  for (let round = 0; round < rounds; round++) {
    let bad = 0;
    for (let it = 0; it < 60; it++) {
      bad = 0; const n = n0(), mv = new Uint8Array(n);
      for (let i = closed ? 0 : 2; i < (closed ? n : n - 2); i++) if (radius(i) < Rmin) { bad++; for (let m = -win; m <= win; m++) { const k = closed ? (i + m + n) % n : i + m; if (k > 0 && k < n - 1 || closed) mv[k] = 1; } }
      for (let i = 0; i < n; i++) {
        if (!mv[i] || (!closed && (i === 0 || i === n - 1)) || (locked && locked(P[i][0], P[i][1]))) continue;
        const a = at(i - 1), c = at(i + 1), mx = (a[0] + c[0]) / 2, mz = (a[1] + c[1]) / 2, nx = P[i][0] + (mx - P[i][0]) * 0.5, nz = P[i][1] + (mz - P[i][1]) * 0.5;
        // ما نحرّكه لمكان يخلّي الطريق أشد انحدار هواية (نحافظ على الزكزاك والمنحدرات)
        const gr = (q) => Math.max(Math.abs(asAt(q[0], q[1]) - asAt(a[0], a[1])) / (Math.hypot(q[0] - a[0], q[1] - a[1]) || 1), Math.abs(asAt(c[0], c[1]) - asAt(q[0], q[1])) / (Math.hypot(c[0] - q[0], c[1] - q[1]) || 1)); // على الأرض المليّنة (المطبات الصغيرة والقطوع ما تهم)
        if (!blockedAt(nx, nz) && gr([nx, nz]) <= Math.max(0.2, gr(P[i]) + 0.005)) P[i] = [nx, nz];
      }
      if (!bad) break;
    }
    P = uniform(P, 5, closed);
    if (!bad) break;
  }
  return resample(P, 5, closed).filter((p, i, arr) => i === 0 || Math.hypot(p.x - arr[i - 1].x, p.z - arr[i - 1].z) > 2);
}
const cellsToPts = (cells) => cells.map((k) => [X(Math.floor(k / NG)), Z(k % NG)]);
const markNet = (pts) => { for (const p of pts) for (let i = toI(p.x - 6); i <= toI(p.x + 6); i++) for (let j = toJ(p.z - 6); j <= toJ(p.z + 6); j++) F[idx(i, j)] |= NET; };

// =========================================================== 4) الشبكة نفسها
const Z_ = Object.fromEntries(I.zones.map((z) => [z.id, z])), RST = Object.fromEntries(I.rest.map((r) => [r.id.replace('z_', ''), r]));
const fj = I.fajr, gar = I.garage, isl = I.islet, pl = I.plateau, park = SF.park, mar = I.marsh;
const P = (x, z) => ({ x, z });
const rp = (id, dx = 0, dz = 0) => P(RST[id].fx + dx, RST[id].fz + dz);
const RING = [
  { id: 'fajr', at: P(fj.x - 82, fj.z + 10), r: 0 },
  { id: 'groves', at: P(Z_.groves.x - 40, Z_.groves.z + 40) },
  { id: 'falcons', at: rp('falcons') },
  { id: 'gulls', at: P(Z_.gulls.x - 150, Z_.gulls.z - 170) },
  { id: 'falls', at: P(Z_.falls.x - 120, Z_.falls.z - 110) },
  { id: 'plateau', at: P(pl.x + Math.cos(2.6) * (pl.r + 330), pl.z + Math.sin(2.6) * (pl.r + 330)) },
  { id: 'birds', at: P(isl.bar.ax + 120, isl.bar.az - 140) },
  { id: 'thyme', at: P(Z_.thyme.x - 300, Z_.thyme.z - 120) },
  { id: 'pearl', at: P(SF.O.x + 230, SF.O.z - 230) },
  { id: 'fort', at: P(Z_.fort.x + 110, Z_.fort.z + 80) },
  { id: 'wheat', at: rp('wheat') },
  { id: 'marsh', at: P(mar.x + 470, mar.z + 330) },
  { id: 'lake', at: rp('lake', 40, 40) },
  { id: 'kohlN', at: P(2000, -1750) }, // سرج بين جبل الكحل ورأس المنارة (المنارة فرعية لأنها على لسان)
];
const SPURS = [ // [اسم، من وين، إلى (الشبكة)، النوع]
  { name: 'مدخل ساحة الفجر', from: P(fj.x - 34, fj.z), cls: 'street' },
  { name: 'طريق الكراج', from: P(gar.apron.x - 6, gar.apron.z + 4), cls: 'street' },
  { name: 'طريق الوادي', from: P(Z_.valley.x - 90, Z_.valley.z - 140), cls: 'road' },
  { name: 'طريق الخيّالة', from: P(pl.x + 60, pl.z), cls: 'road', gmax: 0.15 }, // طريق جبلي على منحدر الهضبة
  { name: 'طريق الحطّابين', from: rp('huts', 20, 20), cls: 'road' },
  { name: 'طريق البلوط', from: rp('oaks', 30, 0), cls: 'road' },
  { name: 'جسر الهور', from: rp('mudhif', 30, 30), cls: 'road' },
  { name: 'طريق السفاري', from: P(park.x + Math.cos(park.rot) * -14, park.z + Math.sin(park.rot) * -14), cls: 'road' },
  { name: 'شارع القرية', from: rp('village', 10, 30), cls: 'street' },
  { name: 'طريق المنارة', from: rp('light', -30, 10), cls: 'road' },
  { name: 'طريق الكحل', from: rp('kohl'), cls: 'road' },
  { name: 'طريق الحصن', from: rp('fort', -10, 0), cls: 'road' },
  { name: 'طريق الشلال', from: rp('falls', -10, -10), cls: 'road' },
  { name: 'طريق جزيرة الطيور', from: P(isl.bar.ax + 30, isl.bar.az - 30), cls: 'road' }, // لحد الشاطئ، والباقي مشي بالماي الضحل
];
const GMAX = { hwy: 0.07, road: 0.1, street: 0.12 }, RMIN = { hwy: 60 }, HW = { hwy: 3.6, road: 3.0, street: 3.2 };
// خلايا حوالين الأهداف مفتوحة (حتى نوصل للساحات)
for (const r of RING) openAround(r.at.x, r.at.z, 45);
for (const s of SPURS) openAround(s.from.x, s.from.z, s.name === 'طريق جزيرة الطيور' ? 70 : 55);
openAround(fj.x - 34, fj.z, 40); openAround(park.x, park.z, 30);
for (const r of RING) { const q = snap(r.at.x, r.at.z); if (!q) throw new Error('ring stop ' + r.id); r.at = q; }

const roads = [];
// ---------------- الطريق الدائري
let ringCells = [], from = RING[0].at;
for (let k = 0; k < RING.length; k++) {
  const nxt = RING[(k + 1) % RING.length], b = nxt.at, last = k === RING.length - 1;
  // نمرّ «يم» المنطقة (ضمن نص قطر) بدل ما نلزم نقطة بالضبط، فما يصير لف ودوران؛ آخر رجلة ترجع للبداية بالضبط
  const r = astar(from.x, from.z, b.x, b.z, GMAX.hwy, false, last ? 0 : (nxt.r ?? 110)); log('ring', RING[k].id, '→', nxt.id, 'cells', r.cells.length, 'expanded', r.expanded);
  ringCells = ringCells.concat(k ? r.cells.slice(1) : r.cells);
  const e = r.cells[r.cells.length - 1]; from = { x: X(Math.floor(e / NG)), z: Z(e % NG) };
}
ringCells.pop(); // حلقة: آخر خلية = أول وحدة
{ // نشيل «روحة ورجعة» (الطريق يدخل لنقطة التوقف ويطلع بنفس الدرب): نوصل الطرفين مباشرة
  const xy = (k) => [X(Math.floor(k / NG)), Z(k % NG)]; let cut = 0;
  for (let i = 0; i < ringCells.length; i++) {
    const [xi, zi] = xy(ringCells[i]);
    for (let j = Math.min(ringCells.length - 1, i + 120); j > i + 3; j--) { const [xj, zj] = xy(ringCells[j]); if (Math.hypot(xj - xi, zj - zi) <= 32 && Math.hypot(xj - xi, zj - zi) < (j - i) * C * 0.3 && segClear([xi, zi], [xj, zj])) { cut += j - i - 1; ringCells.splice(i + 1, j - i - 1); break; } }
  }
  log('ring spikes removed:', cut, 'cells');
}
const ringPts = simplify(cellsToPts(ringCells), 7); // حلقة: أول وآخر خلية جيران
const ring0 = resample(ringPts, 5, true, true), rbl = straightenBridges(ring0, true);
const ring = { name: 'الطريق الدائري', cls: 'hwy', closed: true, pts: fairCurve(ring0, RMIN.hwy, true, GMAX.hwy, 12, 4, lockedBy(rbl)) };
straightenBridges(ring.pts, true); // تأكيد
roads.push(ring); markNet(ring.pts);
// ---------------- الفرعية: كل وحدة لأقرب نقطة بالشبكة (تقاطع)
for (const sp of SPURS) {
  const q = snap(sp.from.x, sp.from.z); if (!q) throw new Error('spur ' + sp.name);
  const r = astarDir(q.x, q.z, sp.gmax || GMAX[sp.cls]);
  let raw = cellsToPts(r.cells);
  { // نقصّه عند أول ما يقرّب من طريق موجود (حتى ما يعبره ويرجع)
    const nearNet = (x, z) => { let m = 1e9; for (const rd of roads) for (const p of rd.pts) { const d = Math.abs(p.x - x) + Math.abs(p.z - z); if (d < m) m = d; } return m; };
    const k = raw.findIndex((p, i) => i > 2 && nearNet(p[0], p[1]) < 11); if (k > 0) raw = raw.slice(0, k + 1);
  }
  // آخر نقطة: نلصگها على أقرب نقطة بالطريق اللي وصلناه
  const end = raw[raw.length - 1]; let best = null, bd = 1e9, host = null;
  for (const rd of roads) rd.pts.forEach((p, i) => { const d = Math.hypot(p.x - end[0], p.z - end[1]); if (d < bd) { bd = d; best = { p, i }; host = rd; } });
  raw[raw.length - 1] = [best.p.x, best.p.z];
  let way = simplify(raw, 5);
  // نقصّ الكسرات الحادة (مثل تشايكن) بس إذا القصّة ما تعبر فوك منحدر أو ماي
  { const out = [way[0]];
    for (let m = 1; m < way.length - 1; m++) {
      const v = way[m], a = way[m - 1], c = way[m + 1], la = Math.hypot(a[0] - v[0], a[1] - v[1]), lc = Math.hypot(c[0] - v[0], c[1] - v[1]);
      const ka = Math.min(0.25, 12 / la), kc = Math.min(0.25, 12 / lc), q1 = [v[0] + (a[0] - v[0]) * ka, v[1] + (a[1] - v[1]) * ka], q2 = [v[0] + (c[0] - v[0]) * kc, v[1] + (c[1] - v[1]) * kc], mid = [(q1[0] + q2[0]) / 2, (q1[1] + q2[1]) / 2];
      if (!blockedAt(mid[0], mid[1]) && Math.abs(G.H(mid[0], mid[1]) - G.H(v[0], v[1])) < 1.2) out.push(q1, q2); else out.push(v);
    }
    out.push(way[way.length - 1]); way = out; }
  // كسرات حادة (نص قطر < 9 م، أضيق من لفّة السيارة): نليّنها شوية بس، وإذا التليين خلّى الأرض تحته أشد انحدار نرجع للأصل
  let raw5 = resample(way, 5, false, true);
  { const E = raw5[raw5.length - 1], k = raw5.findIndex((p) => Math.hypot(p.x - E.x, p.z - E.z) < 9); if (k > 0 && k < raw5.length - 1) raw5 = raw5.slice(0, k).concat([E]); } // بلا لفّة ورجعة عند التقاطع
  const sbl = straightenBridges(raw5, false), fair5 = fairCurve(raw5, 9, false, sp.gmax || GMAX[sp.cls], 3, 2, lockedBy(sbl));
  const steep = (pts) => { let m = 0; for (let k = 4; k < pts.length; k++) m = Math.max(m, Math.abs(G.H(pts[k].x, pts[k].z) - G.H(pts[k - 4].x, pts[k - 4].z)) / 20); return m; };
  const pts5 = steep(fair5) <= steep(raw5) + 0.03 ? fair5 : raw5;
  const rd = { name: sp.name, cls: sp.cls, gmax: sp.gmax, closed: false, pts: pts5, host: roads.indexOf(host), hostI: best.i };
  roads.push(rd); markNet(rd.pts);
  log('spur', sp.name, 'len', Math.round(rd.pts.length * 5), 'm → ', host.name);
}

// =========================================================== 5) المقطع الطولي (حفر/ردم) والجسور
const natA = (x, z) => G.H(x, z) - SEA;
const bridges = [], culverts = [];
for (const [ri, rd] of roads.entries()) {
  const pts = rd.pts, n = pts.length, gmax = rd.gmax || GMAX[rd.cls], ds = 5, W = rd.cls === 'hwy' ? 8 : 5;
  const nat = pts.map((p) => natA(p.x, p.z));
  const lb = new Float32Array(n).fill(1.1), fix = new Float32Array(n).fill(NaN);
  // جسور وعبّارات
  let i = 0;
  while (i < n) {
    const q = I.nearRiver(pts[i].x, pts[i].z);
    if (q && q.d < q.w + 1.5) {
      let j = i; while (j + 1 < n) { const q2 = I.nearRiver(pts[j + 1].x, pts[j + 1].z); if (!(q2 && q2.d < q2.w + 1.5)) break; j++; }
      const mid = Math.round((i + j) / 2), qm = I.nearRiver(pts[mid].x, pts[mid].z);
      if (qm.w >= 3) { // جسر: سطح مستوي، فوك الماي ≥ 2.8 م، وما ينزل لقاع الوادي إذا الضفاف عالية (أعمدة أطول)
        const half = Math.ceil((qm.w + 9) / ds), sm = (k) => { let s2 = 0, c2 = 0; for (let m2 = -4; m2 <= 4; m2++) { const kk = Math.max(0, Math.min(n - 1, k + m2)); s2 += nat[kk]; c2++; } return s2 / c2; };
        const deck = Math.max(qm.lv + 2.8, Math.min(sm(Math.max(0, mid - half - 3)), sm(Math.min(n - 1, mid + half + 3))) - 1.5);
        for (let k = mid - half - 1; k <= mid + half + 1; k++) { const kk = rd.closed ? (k + n) % n : k; if (kk >= 0 && kk < n) { lb[kk] = Math.max(lb[kk], deck); fix[kk] = deck; } }
        bridges.push({ road: ri, i: mid, half: half * ds, river: qm.river.id, lv: qm.lv });
      } else culverts.push({ road: ri, i: mid, river: qm.river.id, w: qm.w });
      i = j + 1;
    } else i++;
  }
  // الهور: جسر ترابي 1.3 م فوك الماي
  pts.forEach((p, k) => { const w = I.water(p.x, p.z, G.H(p.x, p.z) + 0.05); if (w && w.kind === 'marsh') for (let m = k - 3; m <= k + 3; m++) if (m >= 0 && m < n) lb[m] = Math.max(lb[m], 1.5); });
  // تقاطع: البداية تلصگ بالطريق الأم
  if (rd.host != null) for (let k = n - 4; k < n; k++) if (k >= 0) fix[k] = roads[rd.host].prof[rd.hostI]; // آخر 15 م مستوية عند التقاطع
  if (rd.name === 'طريق السفاري') fix[0] = fix[1] = park.a;
  // تليين ثم حد الانحدار
  let a = nat.map((_, k) => { let s = 0, c = 0; for (let m = -W; m <= W; m++) { const kk = rd.closed ? (k + m + n) % n : Math.max(0, Math.min(n - 1, k + m)); s += nat[kk]; c++; } return s / c; });
  // حدود: L = أوطى ارتفاع مسموح (الجسور، الهور، النقاط الثابتة) منتشر بحد الانحدار، و U = أعلى ارتفاع (النقاط الثابتة)
  const L = new Float32Array(n), U = new Float32Array(n).fill(1e9), g = gmax * ds;
  for (let k = 0; k < n; k++) { L[k] = lb[k]; if (!Number.isNaN(fix[k])) { L[k] = Math.max(L[k], fix[k]); U[k] = fix[k]; } }
  const spread = (arr, up) => { const pass = (k, ref) => { arr[k] = up ? Math.min(arr[k], arr[ref] + g) : Math.max(arr[k], arr[ref] - g); }; for (let r = 0; r < 2; r++) { if (rd.closed) { for (let m = 1; m <= 2 * n; m++) pass(m % n, (m - 1) % n); for (let m = 2 * n; m >= 1; m--) pass((m - 1) % n, m % n); } else { for (let k = 1; k < n; k++) pass(k, k - 1); for (let k = n - 2; k >= 0; k--) pass(k, k + 1); } } };
  spread(L, false); spread(U, true);
  const box = () => { for (let k = 0; k < n; k++) a[k] = Math.max(L[k], Math.min(U[k] < L[k] ? L[k] : U[k], a[k])); };
  const cl = (k, ref) => { a[k] = Math.min(Math.max(a[k], a[ref] - g), a[ref] + g); };
  box();
  for (let it = 0; it < 120; it++) {
    if (rd.closed) { for (let m = 1; m <= 2 * n; m++) cl(m % n, (m - 1) % n); for (let m = 2 * n; m >= 1; m--) cl((m - 1) % n, m % n); } // حلقة: نلف مرتين
    else { for (let k = 1; k < n; k++) cl(k, k - 1); for (let k = n - 2; k >= 0; k--) cl(k, k + 1); }
    box();
  }
  rd.prof = a; rd.nat = nat;
  { let minR = 1e9, at = 0; for (let k = 2; k < n - 2; k++) { const p0 = pts[k - 2], p1 = pts[k], p2 = pts[k + 2]; const h1 = Math.atan2(p1.z - p0.z, p1.x - p0.x), h2 = Math.atan2(p2.z - p1.z, p2.x - p1.x); let dh = Math.abs(h2 - h1); if (dh > Math.PI) dh = 2 * Math.PI - dh; const R = 10 / Math.max(1e-4, dh); if (R < minR) { minR = R; at = k; } } rd.minR = minR; rd.minRat = at; }
  let cut = 0, fill = 0, maxG = 0, gAt = 0; for (let k = 0; k < n; k++) { const d = a[k] - nat[k]; if (d > 0) fill = Math.max(fill, d); else cut = Math.max(cut, -d); if (k) { const g = Math.abs(a[k] - a[k - 1]) / ds; if (g > maxG) { maxG = g; gAt = k; } } }
  log('profile', rd.name, 'len', n * ds, 'm  max grade', (maxG * 100).toFixed(1) + '% @' + gAt + '/' + n, ' cut', cut.toFixed(1), 'fill', fill.toFixed(1), ' min radius', rd.minR.toFixed(0), 'm @' + rd.minRat);
}

// =========================================================== 6) المسافات واللوحات
// نقاط الشبكة كعقد: كل نقطة 5 م، والفرعية مربوطة بنقطة الأم
const nodes = [], edges = [], nodeOf = [];
for (const [ri, rd] of roads.entries()) { nodeOf[ri] = rd.pts.map((p, i) => { nodes.push({ x: p.x, z: p.z, ri, i }); edges.push([]); return nodes.length - 1; }); }
const link = (a, b) => { const d = Math.hypot(nodes[a].x - nodes[b].x, nodes[a].z - nodes[b].z); edges[a].push([b, d]); edges[b].push([a, d]); };
for (const [ri, rd] of roads.entries()) { const nn = nodeOf[ri]; for (let i = 1; i < nn.length; i++) link(nn[i - 1], nn[i]); if (rd.closed) link(nn[nn.length - 1], nn[0]); if (rd.host != null) link(nn[nn.length - 1], nodeOf[rd.host][rd.hostI]); }
function dijkstra(src) { const dist = new Float64Array(nodes.length).fill(Infinity); dist[src] = 0; const h = new Heap(); h.push(0, src); while (h.size) { const u = h.pop(); for (const [v, w] of edges[u]) { const d2 = dist[u] + w; if (d2 < dist[v]) { dist[v] = d2; h.push(d2, v); } } } return dist; }
// كل منطقة: أقرب عقدة إلها
const DEST = ['fajr', 'groves', 'falcons', 'gulls', 'falls', 'valley', 'plateau', 'birds', 'thyme', 'pearl', 'oaks', 'fort', 'wheat', 'mudhif', 'marsh', 'lake', 'huts', 'kohl', 'light', 'village'].map((id) => {
  const z = Z_[id], t = RST[id] ? { x: RST[id].fx, z: RST[id].fz } : z; let b = 0, bd = 1e9; nodes.forEach((n, k) => { const d = Math.hypot(n.x - t.x, n.z - t.z); if (d < bd) { bd = d; b = k; } });
  return { id, name: z.name, icon: z.icon, node: b, off: bd };
}).filter((d) => d.off < 450);
// سفاري
{ let b = 0, bd = 1e9; nodes.forEach((n, k) => { const d = Math.hypot(n.x - park.x, n.z - park.z); if (d < bd) { bd = d; b = k; } }); DEST.push({ id: 'safari', name: 'سفاري اللؤلؤ', icon: '🏁', node: b, off: bd }); }
const DD = DEST.map((d) => dijkstra(d.node));
// تقاطعات = عقد بيها 3 فروع أو أكثر
const signs = [];
nodes.forEach((nd, k) => {
  if (edges[k].length < 3) return;
  const arms = [];
  for (const [nb] of edges[k]) {
    // نمشي 20 م بهالفرع حتى الاتجاه يكون واضح
    let prev = k, cur = nb, walked = Math.hypot(nodes[nb].x - nd.x, nodes[nb].z - nd.z); while (walked < 20) { const nx = edges[cur].find(([v]) => v !== prev); if (!nx || edges[cur].length > 2) break; walked += nx[1]; prev = cur; cur = nx[0]; }
    const ang = Math.atan2(nodes[cur].z - nd.z, nodes[cur].x - nd.x);
    // أول عقدة حقيقية بهالفرع (نعبر الوصلة اللي طولها صفر بين الفرعية والطريق الأم)
    let fb = nb, fw = Math.hypot(nodes[nb].x - nd.x, nodes[nb].z - nd.z); if (fw < 0.5) { const nx = edges[nb].find(([v]) => v !== k); if (nx) { fb = nx[0]; fw += nx[1]; } }
    // الوجهات اللي أقصر طريق إلها يبدي بهالفرع
    const via = DEST.map((d, di) => ({ d, km: DD[di][k] })).filter(({ d, km }, di) => km > 60 && DD[di][fb] < km - 0.5 && Math.abs(DD[di][fb] + fw - km) < 1).sort((a, b) => a.km - b.km).slice(0, 2);
    if (via.length) arms.push({ ang: +ang.toFixed(3), to: via.map(({ d, km }) => [d.icon + ' ' + d.name, +(km / 1000).toFixed(1)]) });
  }
  if (arms.length >= 2) signs.push({ x: +nd.x.toFixed(1), z: +nd.z.toFixed(1), kind: 'finger', arms });
});
// نشيل التكرار (تقاطع واحد = لوحة وحدة)
const fingers = []; for (const s of signs) if (!fingers.some((f) => Math.hypot(f.x - s.x, f.z - s.z) < 25)) fingers.push(s);
// لوحات «أهلاً» على مداخل المناطق (للي جاي)
const WELCOME_SKIP = new Set(['wild', 'coast', 'sea', 'mount', 'shoulder', 'summit', 'bay', 'silver', 'anbar', 'dates', 'shadows', 'oaks', 'thyme', 'falcons']);
const welcome = [];
for (const [ri, rd] of roads.entries()) {
  let prevZ = null; const n = rd.pts.length;
  for (let k = 0; k < n; k += 2) {
    const p = rd.pts[k], zz = I.zoneAt(p.x, p.z), id = zz.id;
    if (prevZ && id !== prevZ && k > 6 && k < n - 6) {
      const q = rd.pts[Math.max(0, k - 2)], dx = p.x - q.x, dz = p.z - q.z, l = Math.hypot(dx, dz) || 1;
      const add = (zid, zname, sgn) => { if (WELCOME_SKIP.has(zid) || welcome.some((w) => w.id === zid && Math.hypot(w.x - p.x, w.z - p.z) < 250 && w.sgn === sgn && w.road === ri) || fingers.some((f) => Math.hypot(f.x - p.x, f.z - p.z) < 30)) return; welcome.push({ id: zid, road: ri, sgn, x: +p.x.toFixed(1), z: +p.z.toFixed(1), dx: +((sgn * dx) / l).toFixed(3), dz: +((sgn * dz) / l).toFixed(3), text: zname, hw: HW[rd.cls] }); };
      if (!zz.river) add(id, zz.icon + ' ' + zz.name, 1); // داخل للمنطقة بهالاتجاه
      const pz = I.zones.find((q2) => q2.id === prevZ); if (pz) add(prevZ, pz.icon + ' ' + pz.name, -1); // والجاي بالعكس داخل للمنطقة اللي طلعنا منها
    }
    prevZ = id;
  }
}
log('signs', fingers.length, 'junction fingerposts,', welcome.length, 'welcome boards; bridges', bridges.length, 'culverts', culverts.length);

// =========================================================== 7) نكتب الملف (نقاط كل 10 م: x, z, a)
const out = {
  roads: roads.map((rd) => {
    const st = rd.minR < 12 ? 1 : 2; // طرق الزكزاك: كل 5 م (حتى المنعطف الضيق يبقى مضبوط)، والباقي كل 10 م
    const flat = []; for (let k = 0; k < rd.pts.length; k += st) flat.push(+rd.pts[k].x.toFixed(1), +rd.pts[k].z.toFixed(1), +rd.prof[k].toFixed(2));
    if (!rd.closed && (rd.pts.length - 1) % st) { const k = rd.pts.length - 1; flat.push(+rd.pts[k].x.toFixed(1), +rd.pts[k].z.toFixed(1), +rd.prof[k].toFixed(2)); }
    return { name: rd.name, cls: rd.cls, hw: HW[rd.cls], closed: rd.closed, pts: flat };
  }),
  bridges: bridges.map((b) => { const p = roads[b.road].pts[b.i], q = roads[b.road].pts[Math.min(b.i + 1, roads[b.road].pts.length - 1)], o = roads[b.road].pts[Math.max(0, b.i - 1)], l = Math.hypot(q.x - o.x, q.z - o.z); return { road: b.road, x: +p.x.toFixed(1), z: +p.z.toFixed(1), dx: +((q.x - o.x) / l).toFixed(4), dz: +((q.z - o.z) / l).toFixed(4), half: b.half, deck: +roads[b.road].prof[b.i].toFixed(2), river: b.river }; }),
  culverts: culverts.map((c) => { const p = roads[c.road].pts[c.i], q = roads[c.road].pts[Math.min(c.i + 1, roads[c.road].pts.length - 1)], o = roads[c.road].pts[Math.max(0, c.i - 1)], l = Math.hypot(q.x - o.x, q.z - o.z); return { road: c.road, x: +p.x.toFixed(1), z: +p.z.toFixed(1), dx: +((q.x - o.x) / l).toFixed(4), dz: +((q.z - o.z) / l).toFixed(4), a: +roads[c.road].prof[c.i].toFixed(2) }; }),
  signs: fingers, welcome,
};
const total = roads.reduce((s, r) => s + r.pts.length * 5, 0);
const js = `// 🛣️ شبكة الطرق المعبّدة — ملف متولّد من natta/tools/plan-roads.mjs (لا تعدّله باليد، شغّل المخطّط من جديد)\n// ${roads.length} طرق، ~${(total / 1000).toFixed(1)} كم، ${out.bridges.length} جسور، ${out.culverts.length} عبّارات، ${fingers.length} تقاطعات بلوحات اتجاه، ${welcome.length} لوحات «أهلاً».\n// كل طريق: pts = [x, z, a, …] كل 10 م (طرق الزكزاك كل 5 م) (a = ارتفاع سطح الطريق فوك البحر بعد الحفر والردم).\nexport const ROAD_NET = ${JSON.stringify(out)};\n`;
fs.writeFileSync(path.join(here, '../src/world/roadNet.js'), js);
log('wrote roadNet.js', (js.length / 1024).toFixed(0), 'KB, total', (total / 1000).toFixed(1), 'km');
if (process.env.DEBUG_RADII) { const r = roads[0], n = r.pts.length, list = []; for (let k = 0; k < n; k++) { const a = r.pts[(k - 2 + n) % n], b = r.pts[k], c = r.pts[(k + 2) % n]; const h1 = Math.atan2(b.z - a.z, b.x - a.x), h2 = Math.atan2(c.z - b.z, c.x - b.x); let dh = Math.abs(h2 - h1); if (dh > Math.PI) dh = 2 * Math.PI - dh; const R = 10 / Math.max(1e-4, dh); if (R < 40) list.push([k, Math.round(R), Math.round(b.x), Math.round(b.z), I.zoneAt(b.x, b.z).id]); } console.log('tight spots (<40 m):', list.length, JSON.stringify(list.filter((_, i) => i % 3 === 0))); }
