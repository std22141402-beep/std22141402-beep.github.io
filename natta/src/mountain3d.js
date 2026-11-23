// ⛰️ نطّة — الجبل ثلاثي الأبعاد: طريق متعرج يلف حوالين الجبل وسط غابة كثيفة كلش، وتحديات، وساحة القمة.
// الجبل ارتفاعه 95 م. طريقه ~700 م: يلف حوالين الكتف الأسفل، يعبر وادي بجسر حبال، يدخل غابة متاهة على مصطبة،
// يصعد بزكزاك، يمشي على حافة جرف ضيقة، يعبر ساقية بالحجار، وجسر ثاني، ويوصل ساحة القمة (~555 م²).
// برّة الطريق: غابة ما تنعبر. ذيابة وخنازير برية تطاردك. نقاط استراحة ترجعك إذا وكعت.
import {
  Scene, PerspectiveCamera, Color, Fog, HemisphereLight, DirectionalLight, Mesh, Group, InstancedMesh, Object3D, Vector3,
  PlaneGeometry, SphereGeometry, CylinderGeometry, ConeGeometry, IcosahedronGeometry, DodecahedronGeometry, TorusGeometry, LatheGeometry,
  CapsuleGeometry, BoxGeometry, CircleGeometry, RingGeometry, TubeGeometry, Vector2, BufferGeometry, BufferAttribute,
  MeshLambertMaterial, MeshPhongMaterial, MeshBasicMaterial, PointsMaterial, Points, DoubleSide, AdditiveBlending, LineSegments, LineBasicMaterial,
  CatmullRomCurve3, Sprite, SpriteMaterial,
} from 'three';
import {
  TAU, clamp, lerp, smooth, damp, rng, hash2, vnoise, fbm, paint, tf, along, merge, mix, canvasTex, _c, _ca, angDiff, dampAngle,
  phong, shadowAll, makeSky, glowTexture, waterNormalTexture, swayMat, treeGeo, bushGeo, rockGeo, tuftGeo, makeHero, makeMan,
} from './lib3d.js';

export function createMountain(cfg) {
  cfg = cfg || {};
  const renderer = cfg.renderer;
  const scene = new Scene();
  const FOG = new Color('#C6D6DE');
  scene.background = FOG; scene.fog = new Fog(FOG, 22, 120);
  const camera = new PerspectiveCamera(62, 0.5, 0.1, 1600);
  const U = { time: { value: 0 }, wind: { value: 0 } };
  const R = rng(9091);
  const hemi = new HemisphereLight('#D2E6FF', '#5E7F48', 1.0); scene.add(hemi);
  const SUN = new Vector3(0.5, 0.75, 0.42).normalize();
  const sun = new DirectionalLight('#FFE9C4', 2.8);
  sun.castShadow = true; sun.shadow.mapSize.set(2048, 2048);
  Object.assign(sun.shadow.camera, { left: -24, right: 24, top: 24, bottom: -24, near: 1, far: 160 });
  sun.shadow.bias = -0.0005; sun.shadow.normalBias = 0.03; sun.shadow.radius = 2.5;
  scene.add(sun, sun.target);
  const sky = makeSky('#3A7FD6', '#9CCBF2', '#EFE7D6', new Vector3(0.6, 0.35, -0.7)); scene.add(sky);
  const glowTex = glowTexture();
  const matVC = new MeshLambertMaterial({ vertexColors: true }), matFlat = new MeshLambertMaterial({ vertexColors: true, flatShading: true });

  // ================================================================ شكل الجبل
  const RP = 13.3, HS = 95, DECK_A = 0; // DECK_A: الإطلالة باتجاه الوادي (+x)
  // نص قطر ساحة القمة (مساحتها π·13.3² ≈ 555 م²) وارتفاعها
  const D2R = Math.PI / 180, P2 = (r, a) => [Math.cos(a * D2R) * r, Math.sin(a * D2R) * r];
  function prof(r) { // جبل بطبقتين: كتف تحتاني، مصطبة غابة (72–120 م)، ومخروط فوكاني لحد القمة
    if (r <= RP + 1) return HS;
    const up = 40 + 55 * Math.pow(1 - clamp((r - RP - 1) / (72 - RP - 1), 0, 1), 1.12);
    const ter = 36 + 4 * (1 - clamp((r - 72) / 48, 0, 1));
    const low = 36 * Math.pow(1 - clamp((r - 120) / 60, 0, 1), 1.25) - smooth(180, 230, r) * 14;
    return lerp(lerp(up, ter, smooth(68, 76, r)), low, smooth(116, 124, r));
  }
  const gullies = []; // وديان تقطع الجبل (تحت الجسور والساقية)
  const Hbase = (x, z) => { const r = Math.hypot(x, z); return prof(r) + (fbm(x * 0.028 + 5, z * 0.028) - 0.5) * 9 * smooth(RP + 2, RP + 12, r) * (1 - smooth(200, 260, r) * 0.5); };
  const Hnat = (x, z) => {
    const r = Math.hypot(x, z);
    let h = Hbase(x, z);
    for (const g of gullies) {
      const a = Math.atan2(z, x), lat = Math.abs(angDiff(g.a, a)) * r;
      if (r > g.r0 && r < g.r1 && lat < g.w) h -= g.depth * smooth(g.w, g.w * 0.25, lat) * smooth(g.r0, g.r0 + 4, r) * smooth(g.r1, g.r1 - 4, r);
    }
    return h;
  };
  gullies.push({ a: 118.5 * D2R, r0: 108, r1: 190, w: 7, depth: 13 }); // وادي الجسر الأول
  gullies.push({ a: 101 * D2R, r0: 22, r1: 64, w: 5.5, depth: 11 }); // وادي الجسر الثاني
  gullies.push({ a: 58 * D2R, r0: 26, r1: 72, w: 4.5, depth: 1.6, water: true }); // الساقية

  // ================================================================ شبكة الطرق
  // كل طريق: نقاط كل 0.8 م، بيها الارتفاع ونص العرض والنوع (طريق/حافة/جسر/حجار/متاهة)
  const segs = [];
  const KIND = { trail: 0, maze: 1, ledge: 2, bridge: 3, stones: 4 };
  function addPath(way, opts = {}) {
    const pts = way.map(([r, a]) => { const [x, z] = P2(r, a); return new Vector3(x, 0, z); });
    const curve = new CatmullRomCurve3(pts, false, 'centripetal');
    const fine = [], sub = 30;
    for (let i = 0; i < (pts.length - 1) * sub; i++) { const t = i / ((pts.length - 1) * sub); const p = curve.getPoint(t); fine.push([p.x, p.z, Math.floor(i / sub)]); }
    const last = curve.getPoint(1); fine.push([last.x, last.z, pts.length - 2]);
    const out = []; let acc = 0;
    out.push(fine[0]);
    for (let i = 1; i < fine.length; i++) {
      const d = Math.hypot(fine[i][0] - fine[i - 1][0], fine[i][1] - fine[i - 1][1]); acc += d;
      if (acc >= 0.8) { out.push(fine[i]); acc = 0; }
    }
    const seg = { id: segs.length, kind: opts.kind || 'trail', pts: out.map(([x, z, wi]) => ({ x, z, wi, y: 0, hw: opts.hw || 1.35, kind: (opts.kinds && opts.kinds[wi]) || opts.kind || 'trail' })) };
    // الارتفاع: الأرض الطبيعية بعد تنعيم قوي، حتى الطريق يصعد بهدوء
    const raw = seg.pts.map((p) => Hbase(p.x, p.z));
    seg.pts.forEach((p, i) => { let s = 0, n = 0; for (let k = -12; k <= 12; k++) { const j = clamp(i + k, 0, raw.length - 1); s += raw[j]; n++; } p.y = s / n; });
    if (opts.y0 != null || opts.y1 != null) { // نثبت الطرفين حتى تتصل الطرق ببعض بنفس المستوى
      const n = seg.pts.length - 1, a = opts.y0 != null ? opts.y0 - seg.pts[0].y : 0, b = opts.y1 != null ? opts.y1 - seg.pts[n].y : 0;
      seg.pts.forEach((p, i) => { p.y += lerp(a, b, i / (n || 1)); });
    }
    for (const p of seg.pts) if (p.kind === 'ledge') p.hw = 0.72; else if (p.kind === 'bridge') p.hw = 0.62; else if (p.kind === 'stones') p.hw = 0.6;
    segs.push(seg); return seg;
  }
  // ---- الطريق الرئيسي: الكتف التحتاني ← الجسر الأول ← باب المصطبة
  const A = addPath([[166, 12], [160, 40], [153, 68], [146, 94], [142.5, 114.6], [140, 122.4], [134, 146], [127, 172], [121, 194], [117, 206]], { kinds: { 4: 'bridge' } });
  // ---- غابة المتاهة على المصطبة: شبكة 4×7 خلايا، متاهة عشوائية ثابتة (ممر واحد صح وطرق مسدودة)
  const MR = [110, 98, 86, 74], MA = [212, 224, 236, 248, 260, 272, 284];
  const cellP = (i, j) => P2(MR[i], MA[j]);
  const cellY = (i, j) => { const [x, z] = cellP(i, j); let s = 0; for (let k = 0; k < 9; k++) s += Hbase(x + Math.cos(k) * 4, z + Math.sin(k) * 4); return s / 9; };
  const mazeEdges = [], seen = new Set(), mr = rng(77);
  const key = (i, j) => i * 10 + j;
  (function dfs(i, j) {
    seen.add(key(i, j));
    const nb = [[i + 1, j], [i - 1, j], [i, j + 1], [i, j - 1]].filter(([a, b]) => a >= 0 && a < 4 && b >= 0 && b < 7 && !seen.has(key(a, b)));
    for (let k = nb.length - 1; k > 0; k--) { const q = Math.floor(mr() * (k + 1)); [nb[k], nb[q]] = [nb[q], nb[k]]; }
    for (const [a, b] of nb) if (!seen.has(key(a, b))) { mazeEdges.push([[i, j], [a, b]]); dfs(a, b); }
  })(0, 0);
  mazeEdges.push([[1, 2], [1, 3]], [[2, 4], [3, 4]]); // حلقتين زايدات حتى تضيّع أكثر
  const uniq = new Map(); for (const e of mazeEdges) { const k1 = key(...e[0]) * 100 + key(...e[1]), k2 = key(...e[1]) * 100 + key(...e[0]); if (!uniq.has(k1) && !uniq.has(k2)) uniq.set(k1, e); }
  const MZ = [], mazeDeg = new Map();
  for (const [[i, j], [a, b]] of uniq.values()) {
    const [x0, z0] = cellP(i, j), [x1, z1] = cellP(a, b), mx = (x0 + x1) / 2 + (mr() - 0.5) * 3, mz = (z0 + z1) / 2 + (mr() - 0.5) * 3;
    const toRA = (x, z) => [Math.hypot(x, z), Math.atan2(z, x) / D2R];
    const s = addPath([toRA(x0, z0), toRA(mx, mz), toRA(x1, z1)].map(([r, a]) => [r, (a + 360) % 360]), { kind: 'maze', hw: 1.25, y0: cellY(i, j), y1: cellY(a, b) });
    s.cells = [[i, j], [a, b]]; MZ.push(s);
    for (const c of s.cells) mazeDeg.set(key(...c), (mazeDeg.get(key(...c)) || 0) + 1);
  }
  addPath([[117, 206], [113, 209], [MR[0], MA[0]]], { kind: 'maze', hw: 1.3, y0: A.pts[A.pts.length - 1].y, y1: cellY(0, 0) });
  const exitSeg = addPath([[MR[3], MA[6]], [70, 287], [66, 292]], { kind: 'maze', hw: 1.3, y0: cellY(3, 6) });
  // ---- الطريق الفوكاني: زكزاك ← حافة الجرف ← حجار الساقية ← الجسر الثاني ← القمة
  const Cw = [[66, 292], [62, 306], [58, 334], [54, 308], [50, 336], [46, 309], [43, 330], [41, 344], [40, 0], [39.3, 16], [38.6, 30], [37.5, 42], [36.6, 53], [35.8, 63], [34.4, 75], [32.4, 86], [31.2, 92], [29.6, 110.5], [27.4, 122], [24, 138], [20, 154], [RP + 0.4, 168]];
  const C2 = addPath(Cw, { y0: exitSeg.pts[exitSeg.pts.length - 1].y, kinds: { 7: 'ledge', 8: 'ledge', 9: 'ledge', 12: 'stones', 16: 'bridge' } });
  { // آخر الطريق: يوصل بالضبط لمستوى الساحة، والمكان الشديد يصير درج حجر
    const P = C2.pts; let d = 0;
    for (let k = P.length - 1; k >= 0; k--) { if (k < P.length - 1) d += Math.hypot(P[k + 1].x - P[k].x, P[k + 1].z - P[k].z); P[k].y = Math.max(P[k].y, HS - d * 0.42); if (d > 60) break; }
    P[P.length - 1].y = HS;
    for (let k = Math.max(1, P.length - 80); k < P.length; k++) { const g = (P[k].y - P[k - 1].y) / (Math.hypot(P[k].x - P[k - 1].x, P[k].z - P[k - 1].z) || 1); if (g > 0.24 && P[k].kind === 'trail') { P[k].kind = 'stairs'; P[k].hw = 1.25; } }
  }
  // الجسور: الارتفاع خط مستقيم بين الطرفين + ترخية بالنص، وبعض الألواح ناقصة
  const bridges = [];
  for (const seg of [A, C2]) {
    let i = 0;
    while (i < seg.pts.length) {
      if (seg.pts[i].kind !== 'bridge') { i++; continue; }
      let j = i; while (j + 1 < seg.pts.length && seg.pts[j + 1].kind === 'bridge') j++;
      const a = seg.pts[Math.max(0, i - 1)], b = seg.pts[Math.min(seg.pts.length - 1, j + 1)], n = j - i + 1;
      const gaps = n > 10 ? [Math.floor(n * 0.38), Math.floor(n * 0.66)] : [Math.floor(n / 2)];
      for (let k = i; k <= j; k++) {
        const t = (k - i + 1) / (n + 1), p = seg.pts[k];
        p.y = lerp(a.y, b.y, t) - Math.sin(t * Math.PI) * 0.7;
        p.gap = gaps.some((g) => Math.abs(k - i - g) <= 0) ; // لوح ناقص (لازم تنط)
      }
      bridges.push({ seg, i, j, a, b }); i = j + 1;
    }
  }
  // حجار الساقية: تمشي بس على الحجار
  const stones = [];
  for (const seg of [C2]) for (let k = 0; k < seg.pts.length; k++) {
    const p = seg.pts[k]; if (p.kind !== 'stones') continue;
    if (!stones.length || Math.hypot(p.x - stones[stones.length - 1].x, p.z - stones[stones.length - 1].z) > 2.25) {
      const off = (R() - 0.5) * 0.5, nx = -(seg.pts[Math.min(k + 1, seg.pts.length - 1)].z - p.z), nz = seg.pts[Math.min(k + 1, seg.pts.length - 1)].x - p.x, l = Math.hypot(nx, nz) || 1;
      stones.push({ x: p.x + (nx / l) * off, z: p.z + (nz / l) * off, y: p.y + 0.05, r: 0.72 });
    }
  }
  // ---- شبكة بحث سريعة لأقرب نقطة طريق
  const ALL = []; for (const s of segs) s.pts.forEach((p, k) => { p.seg = s; p.k = k; ALL.push(p); });
  const CELL = 4, grid = new Map(), gk = (cx, cz) => cx * 10007 + cz;
  for (const p of ALL) { const k = gk(Math.floor(p.x / CELL), Math.floor(p.z / CELL)); if (!grid.has(k)) grid.set(k, []); grid.get(k).push(p); }
  /** أقرب نقطة طريق، ويفضّل نفس المستوى (حتى ما يخلط بين لفّات الزكزاك) */
  function nearest(x, z, yRef, reach = 1) {
    const cx = Math.floor(x / CELL), cz = Math.floor(z / CELL);
    let best = null, bd = Infinity;
    for (let i = -reach; i <= reach; i++) for (let j = -reach; j <= reach; j++) {
      const list = grid.get(gk(cx + i, cz + j)); if (!list) continue;
      for (const p of list) {
        const d2 = (p.x - x) ** 2 + (p.z - z) ** 2 + (yRef != null ? Math.max(0, Math.abs(p.y - yRef) - 1.2) ** 2 * 9 : 0);
        if (d2 < bd) { bd = d2; best = p; }
      }
    }
    if (!best) return null;
    // مسافة جانبية دقيقة على القطعة بين النقطتين الجيران
    const s = best.seg.pts, q = s[Math.min(best.k + 1, s.length - 1)], o = s[Math.max(best.k - 1, 0)];
    let d = Math.hypot(x - best.x, z - best.z), y = best.y, tx = q.x - o.x, tz = q.z - o.z; const tl = Math.hypot(tx, tz) || 1; tx /= tl; tz /= tl;
    for (const [a, b] of [[o, best], [best, q]]) {
      const vx = b.x - a.x, vz = b.z - a.z, L2 = vx * vx + vz * vz || 1, k = clamp(((x - a.x) * vx + (z - a.z) * vz) / L2, 0, 1);
      const dd = Math.hypot(x - (a.x + vx * k), z - (a.z + vz * k)); if (dd < d) { d = dd; y = lerp(a.y, b.y, k); }
    }
    const side = (x - best.x) * -tz + (z - best.z) * tx; // موجب = جهة اليسار
    return { p: best, d, y, tx, tz, side };
  }

  // ================================================================ الأرض (تتسوّى حوالين الطريق مثل حفر بجنب الجبل)
  const checkpoints = [];
  function H(x, z) {
    const r = Math.hypot(x, z);
    let h = Hnat(x, z);
    if (r < RP + 1.5) return lerp(h, HS, smooth(RP + 1.5, RP + 0.3, r));
    const q = nearest(x, z, null, 2);
    if (q && q.d < q.p.hw + 3.2) {
      const k = q.p.kind;
      if (k === 'bridge') { /* الوادي يبقى تحت الجسر */ }
      else if (k === 'stones') h = Math.min(h, q.y - 0.55);
      else {
        h = lerp(h, q.y - 0.04, smooth(q.p.hw + 3.2, q.p.hw + 0.5, q.d));
        if (k === 'ledge') { // جرف: جهة الخارج تنزل، وجهة الداخل صخر عالي
          const outer = r > Math.hypot(q.p.x, q.p.z) ? 1 : -1;
          const dOut = q.d - q.p.hw;
          if (dOut > 0) { if (outer > 0) h = Math.min(h, q.y - smooth(0, 2.2, dOut) * 11); else h = Math.max(h, q.y + smooth(0.3, 2.4, dOut) * 4.5); }
        }
      }
    }
    return h;
  }
  // نقاط الاستراحة (قبل كل تحدي)
  const cpAt = (seg, k, name) => { const p = seg.pts[clamp(k, 0, seg.pts.length - 1)]; const c = { x: p.x, z: p.z, y: p.y, name, seg, k, active: false }; checkpoints.push(c); return c; };
  const firstKind = (seg, kind) => seg.pts.findIndex((p) => p.kind === kind);
  cpAt(A, 3, 'سفح الجبل');
  cpAt(A, firstKind(A, 'bridge') - 7, 'قبل الجسر');
  cpAt(A, A.pts.length - 2, 'باب غابة المتاهة');
  cpAt(C2, 4, 'طلعة الزكزاك');
  cpAt(C2, firstKind(C2, 'ledge') - 6, 'قبل حافة الجرف');
  cpAt(C2, firstKind(C2, 'stones') - 5, 'قبل الساقية');
  cpAt(C2, firstKind(C2, 'bridge') - 6, 'قبل الجسر الثاني');
  const TERR_R = 300;
  {
    const xs = []; for (let x = -TERR_R; x <= TERR_R; x += x * x < 190 * 190 ? 1.7 : 9) xs.push(x);
    const nx = xs.length, P = new Float32Array(nx * nx * 3), C = new Float32Array(nx * nx * 3);
    for (let j = 0; j < nx; j++) for (let i = 0; i < nx; i++) { const x = xs[i], z = xs[j], o = (j * nx + i) * 3; P[o] = x; P[o + 1] = Math.hypot(x, z) > 200 ? Hnat(x, z) : H(x, z); P[o + 2] = z; }
    const Y = (i, j) => P[(clamp(j, 0, nx - 1) * nx + clamp(i, 0, nx - 1)) * 3 + 1];
    for (let j = 0; j < nx; j++) for (let i = 0; i < nx; i++) {
      const o = (j * nx + i) * 3, x = P[o], y = P[o + 1], z = P[o + 2], r = Math.hypot(x, z);
      const n = fbm(x * 0.06 + 3, z * 0.06);
      mix(_c, '#3E6E2E', '#6E9A44', n * 1.2 - 0.1);
      const slope = Math.hypot((Y(i + 1, j) - Y(i - 1, j)) / (xs[clamp(i + 1, 0, nx - 1)] - xs[clamp(i - 1, 0, nx - 1)]), (Y(i, j + 1) - Y(i, j - 1)) / (xs[clamp(j + 1, 0, nx - 1)] - xs[clamp(j - 1, 0, nx - 1)]));
      if (slope > 0.8) { mix(_ca, '#5E5A55', '#A9A398', vnoise(x * 0.35 + z * 0.2, y * 1.6) * 0.8 + vnoise(x * 2, z * 2 + y) * 0.35); _c.lerp(_ca, smooth(0.8, 1.3, slope)); } // صخر بطبقات
      if (r < 200) { const q = nearest(x, z, y, 1); if (q && q.d < q.p.hw + 0.9 && q.p.kind !== 'bridge') _c.lerp(_ca.set('#9C7E55'), smooth(q.p.hw + 0.9, q.p.hw - 0.2, q.d) * 0.85); }
      if (r < RP + 1) _c.set('#9A9388');
      if (y < -4) _c.lerp(_ca.set('#5D7F4A'), 0.4);
      C[o] = _c.r; C[o + 1] = _c.g; C[o + 2] = _c.b;
    }
    const idx = []; for (let j = 0; j < nx - 1; j++) for (let i = 0; i < nx - 1; i++) { const a = j * nx + i, b = a + 1, c = a + nx, d = c + 1; idx.push(a, c, b, b, c, d); }
    const g = new BufferGeometry(); g.setAttribute('position', new BufferAttribute(P, 3)); g.setAttribute('color', new BufferAttribute(C, 3)); g.setIndex(idx); g.computeVertexNormals();
    const ground = new Mesh(g, matVC); ground.receiveShadow = true; scene.add(ground);
  }
  // شريط التراب على الطرق (ناعم وأوضح من ألوان الأرض)
  {
    const tex = canvasTex(64, 256, (g, w, h) => {
      g.clearRect(0, 0, w, h);
      for (let y = 0; y < h; y += 2) {
        const e1 = 6 + vnoise(y * 0.06, 1) * 8, e2 = w - 6 - vnoise(y * 0.06, 5) * 8;
        const gr = g.createLinearGradient(e1, 0, e2, 0); gr.addColorStop(0, 'rgba(150,118,78,0)'); gr.addColorStop(0.2, 'rgba(150,118,78,.95)'); gr.addColorStop(0.8, 'rgba(140,108,70,.95)'); gr.addColorStop(1, 'rgba(140,108,70,0)');
        g.fillStyle = gr; g.fillRect(e1, y, e2 - e1, 2);
      }
      for (let i = 0; i < 260; i++) { g.fillStyle = `rgba(${90 + (i % 5) * 20},${80 + (i % 7) * 12},${60 + (i % 3) * 10},.6)`; g.beginPath(); g.arc(8 + Math.random() * (w - 16), Math.random() * h, 0.5 + Math.random() * 1.4, 0, TAU); g.fill(); }
    }, [1, 1]);
    const pos = [], uv = [], idx = []; let base = 0;
    for (const s of segs) {
      let run = [];
      const flush = () => {
        if (run.length < 2) { run = []; return; }
        let v = 0;
        run.forEach((p, i) => {
          const a = run[Math.max(0, i - 1)], b = run[Math.min(run.length - 1, i + 1)], tx = b.x - a.x, tz = b.z - a.z, l = Math.hypot(tx, tz) || 1, nx = -tz / l, nz = tx / l, w = p.hw + 0.35;
          if (i) v += Math.hypot(p.x - run[i - 1].x, p.z - run[i - 1].z) / 6;
          pos.push(p.x + nx * w, p.y + 0.035, p.z + nz * w, p.x - nx * w, p.y + 0.035, p.z - nz * w); uv.push(0, v, 1, v);
          if (i) { const q = base + (i - 1) * 2; idx.push(q, q + 2, q + 1, q + 1, q + 2, q + 3); }
        });
        base += run.length * 2; run = [];
      };
      for (const p of s.pts) { if (p.kind === 'bridge' || p.kind === 'stones' || p.kind === 'stairs') flush(); else run.push(p); }
      flush();
    }
    const g = new BufferGeometry(); g.setAttribute('position', new BufferAttribute(new Float32Array(pos), 3)); g.setAttribute('uv', new BufferAttribute(new Float32Array(uv), 2)); g.setIndex(idx); g.computeVertexNormals();
    const m = new Mesh(g, new MeshLambertMaterial({ map: tex, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2, side: DoubleSide }));
    m.receiveShadow = true; scene.add(m);
  }
  // الساقية تحت الحجار
  const waterN = waterNormalTexture();
  {
    const g = gullies[2], pos = [], uv = [], idx = []; let n = 0;
    for (let r = g.r0; r <= g.r1; r += 1) {
      const [cx, cz] = P2(r, g.a / D2R), [tx, tz] = [Math.cos(g.a), Math.sin(g.a)], nx = -tz, nz = tx, y = Hnat(cx, cz) + 0.5;
      pos.push(cx + nx * 2.2, y, cz + nz * 2.2, cx - nx * 2.2, y, cz - nz * 2.2); uv.push(0, r / 4, 1, r / 4);
      if (n) { const q = (n - 1) * 2; idx.push(q, q + 2, q + 1, q + 1, q + 2, q + 3); }
      n++;
    }
    const geo = new BufferGeometry(); geo.setAttribute('position', new BufferAttribute(new Float32Array(pos), 3)); geo.setAttribute('uv', new BufferAttribute(new Float32Array(uv), 2)); geo.setIndex(idx); geo.computeVertexNormals();
    const water = new Mesh(geo, new MeshPhongMaterial({ color: '#4AA6D8', specular: '#FFFFFF', shininess: 140, normalMap: waterN, transparent: true, opacity: 0.9, side: DoubleSide }));
    water.material.normalScale.set(0.8, 0.8); scene.add(water);
  }
  // ================================================================ الغابة الكثيفة
  const colliders = [];
  const pineGeo = (r, tiers, h0, w0, dark) => {
    const parts = [paint(tf(new CylinderGeometry(0.13, 0.22, h0 * 0.45, 6), 0, h0 * 0.22, 0), '#5A3E26')];
    for (let i = 0; i < tiers; i++) {
      const k = i / tiers, w = w0 * (1 - k * 0.62), hh = h0 * 0.42;
      parts.push(tf(paint(new ConeGeometry(w, hh, 8, 1), (c, x, y) => mix(c, dark ? '#1F4A2B' : '#24572F', dark ? '#3F7A43' : '#4E8C46', 0.25 + (y / hh + 0.5) * 0.6 + (hash2(x * 7, y * 3) - 0.5) * 0.25)), 0, h0 * 0.32 + i * h0 * 0.22 + hh / 2, 0, 0, r() * 3, 0));
    }
    return merge(parts);
  };
  const forestMats = { pine: swayMat(new MeshLambertMaterial({ vertexColors: true, flatShading: true }), 0.006, 2.0, U), tree: swayMat(new MeshLambertMaterial({ vertexColors: true, flatShading: true }), 0.01, 1.2, U) };
  const leafyGeo = () => { const r = rng(43); const parts = [paint(tf(new CylinderGeometry(0.14, 0.22, 2.6, 6), 0, 1.3, 0), '#5A3E26')]; for (const [x, y, z, rr] of [[0, 3.1, 0, 1.35], [0.7, 2.6, 0.3, 0.95], [-0.6, 2.7, -0.4, 1.0], [0.1, 3.8, -0.2, 0.9]]) parts.push(tf(paint(new IcosahedronGeometry(rr, 0), (c, px, py) => mix(c, '#2C6B33', '#6FAE4E', 0.3 + (py / rr) * 0.35 + (r() - 0.5) * 0.3)), x, y, z)); return merge(parts); };
  const geos = { pineA: pineGeo(rng(5), 4, 7.5, 2.0, false), pineB: pineGeo(rng(6), 3, 6, 2.5, true), oak: leafyGeo() };
  const chunks = []; // قطع غابة (تنطفي إذا بعيدة)
  const spots = { pineA: [], pineB: [], oak: [], bush: [], rock: [], tuft: [], fern: [] };
  const clearOf = (x, z, extra) => {
    const r = Math.hypot(x, z); if (r < RP + 3) return false;
    const q = nearest(x, z, null, 2); if (q && q.d < q.p.hw + extra) return false;
    for (const c of checkpoints) if (Math.hypot(x - c.x, z - c.z) < 4.6) return false;
    return true;
  };
  for (let x = -195; x <= 195; x += 2.3) for (let z = -195; z <= 195; z += 2.3) {
    const r = Math.hypot(x, z); if (r > 192) continue;
    const jx = x + (R() - 0.5) * 2, jz = z + (R() - 0.5) * 2;
    const q = nearest(jx, jz, null, 6);
    const nearT = q ? q.d : 99;
    if (nearT > 26 && R() < 0.62) continue; // بعيد عن الطرق: أخف شوية (ما ينشاف بالضباب)
    if (!clearOf(jx, jz, 1.05)) continue;
    const y = H(jx, jz); let kind = R(), s = 0.8 + R() * 0.55;
    if (y > 84) { if (R() < 0.3 && clearOf(jx, jz, 0.4)) spots.rock.push({ x: jx, y: y + 0.05, z: jz, rx: R() * 3, ry: R() * 3, rz: R() * 3, s3: [0.8 + R() * 1.4, 0.5 + R() * 0.8, 0.8 + R() * 1.4] }); else if (R() < 0.35) spots.bush.push({ x: jx, y, z: jz, ry: R() * TAU, s: 0.5 + R() * 0.6 }); continue; } // فوك خط الأشجار: صخور وشجيرات
    if (y > 72) { if (R() < 0.45) continue; s *= lerp(1, 0.6, smooth(72, 84, y)); }
    if (Math.abs(angDiff(Math.atan2(jz, jx), DECK_A)) < 0.55 && y + 9 * s > HS - 7) continue; // الإطلالة مفتوحة
    if (y > 48) kind = kind * 0.86; // فوك: صنوبر أكثر
    const it = { x: jx, y: y - 0.15, z: jz, ry: R() * TAU, s };
    if (kind < 0.46) spots.pineA.push(it); else if (kind < 0.82) spots.pineB.push(it); else spots.oak.push({ ...it, s: s * 0.95 });
    colliders.push({ x: jx, z: jz, r: 0.42 * s, tall: 1 });
    if (nearT < 9 && R() < 0.5) { const bx = jx + (R() - 0.5) * 1.6, bz = jz + (R() - 0.5) * 1.6; if (clearOf(bx, bz, 0.25)) spots.bush.push({ x: bx, y: H(bx, bz), z: bz, ry: R() * TAU, s: 0.5 + R() * 0.7 }); }
  }
  for (const p of ALL) { // حافات الطريق: عشب وشجيرات وسرخس وصخور
    if (p.kind === 'bridge' || p.kind === 'stones' || p.k % 2) continue;
    const nx = -(p.seg.pts[Math.min(p.k + 1, p.seg.pts.length - 1)].z - p.seg.pts[Math.max(p.k - 1, 0)].z), nz = p.seg.pts[Math.min(p.k + 1, p.seg.pts.length - 1)].x - p.seg.pts[Math.max(p.k - 1, 0)].x, l = Math.hypot(nx, nz) || 1;
    for (const sd of [-1, 1]) {
      const off = p.hw + 0.15 + R() * 1.4, x = p.x + (nx / l) * off * sd, z = p.z + (nz / l) * off * sd;
      if (p.kind === 'ledge' && sd * 1 !== 0 && R() < 0.5) continue;
      const y = H(x, z), r = R();
      if (r < 0.55) spots.tuft.push({ x, y: y - 0.02, z, ry: R() * TAU, s: 0.6 + R() * 0.7 });
      else if (r < 0.78) spots.fern.push({ x, y, z, ry: R() * TAU, s: 0.7 + R() * 0.6 });
      else if (r < 0.9) spots.bush.push({ x, y, z, ry: R() * TAU, s: 0.4 + R() * 0.5 });
      else spots.rock.push({ x, y: y + 0.05, z, rx: R() * 3, ry: R() * 3, rz: R() * 3, s3: [0.5 + R(), 0.4 + R() * 0.5, 0.5 + R()] });
    }
  }
  const fernGeo = merge([...Array(7)].map((_, i) => {
    const a = (i / 7) * TAU, L = 0.55 + (i % 3) * 0.12, pos = [], col = [];
    for (let s = 0; s < 6; s++) {
      const k0 = s / 6, k1 = (s + 1) / 6, w0 = Math.sin(k0 * Math.PI) * 0.09, w1 = Math.sin(k1 * Math.PI) * 0.09;
      const p0 = [Math.cos(a) * L * k0, Math.sin(k0 * Math.PI * 0.8) * 0.3, Math.sin(a) * L * k0], p1 = [Math.cos(a) * L * k1, Math.sin(k1 * Math.PI * 0.8) * 0.3, Math.sin(a) * L * k1];
      const sx = -Math.sin(a), sz = Math.cos(a);
      pos.push(p0[0] - sx * w0, p0[1], p0[2] - sz * w0, p1[0] - sx * w1, p1[1], p1[2] - sz * w1, p0[0] + sx * w0, p0[1], p0[2] + sz * w0, p0[0] + sx * w0, p0[1], p0[2] + sz * w0, p1[0] - sx * w1, p1[1], p1[2] - sz * w1, p1[0] + sx * w1, p1[1], p1[2] + sz * w1);
      for (let q = 0; q < 6; q++) { mix(_c, '#2F6B2C', '#79B356', k0 + 0.2); col.push(_c.r, _c.g, _c.b); }
    }
    const g = new BufferGeometry(); g.setAttribute('position', new BufferAttribute(new Float32Array(pos), 3)); g.setAttribute('color', new BufferAttribute(new Float32Array(col), 3)); g.computeVertexNormals(); return g;
  }));
  const lodMat = new MeshLambertMaterial({ vertexColors: true, flatShading: true });
  function scatterChunks(geo, mat, list, opts = {}) {
    const by = new Map(), o = new Object3D(), size = opts.size || 26;
    for (const it of list) { const k = gk(Math.floor(it.x / size), Math.floor(it.z / size)); if (!by.has(k)) by.set(k, []); by.get(k).push(it); }
    for (const items of by.values()) {
      const im = new InstancedMesh(geo, mat, items.length); let cx = 0, cz = 0;
      items.forEach((it, n) => {
        o.position.set(it.x, it.y, it.z); o.rotation.set(it.rx || 0, it.ry || 0, it.rz || 0);
        if (it.s3) o.scale.set(...it.s3); else o.scale.setScalar(it.s || 1);
        o.updateMatrix(); im.setMatrixAt(n, o.matrix); cx += it.x; cz += it.z;
      });
      im.castShadow = !!opts.cast; im.receiveShadow = true; im.computeBoundingSphere(); scene.add(im);
      let lo = null; if (opts.lod) { lo = new InstancedMesh(opts.lod, lodMat, items.length); lo.instanceMatrix = im.instanceMatrix; lo.computeBoundingSphere(); lo.visible = false; scene.add(lo); }
      chunks.push({ m: im, lo, x: cx / items.length, z: cz / items.length, far: opts.far || 105 });
    }
  }
  const lodPine = (h0, w0, dark) => paint(tf(new ConeGeometry(w0 * 0.9, h0 * 0.95, 6, 1, true), 0, h0 * 0.62, 0), (c, x, y) => mix(c, dark ? '#1F4A2B' : '#24572F', dark ? '#3F7A43' : '#4E8C46', 0.3 + (y / h0 + 0.5) * 0.5));
  scatterChunks(geos.pineA, forestMats.pine, spots.pineA, { cast: true, lod: lodPine(7.5, 2.0, false) });
  scatterChunks(geos.pineB, forestMats.pine, spots.pineB, { cast: true, lod: lodPine(6, 2.5, true) });
  scatterChunks(geos.oak, forestMats.tree, spots.oak, { cast: true, lod: tf(paint(new IcosahedronGeometry(1.5, 0), '#3E7D3A'), 0, 3.1, 0) });
  scatterChunks(bushGeo(), matFlat, spots.bush, { size: 30, far: 70 });
  scatterChunks(rockGeo(), matFlat, spots.rock, { size: 30, far: 80 });
  scatterChunks(tuftGeo(), swayMat(new MeshLambertMaterial({ vertexColors: true, side: DoubleSide }), 0.5, 0, U), spots.tuft, { size: 30, far: 45 });
  scatterChunks(fernGeo, swayMat(new MeshLambertMaterial({ vertexColors: true, side: DoubleSide }), 0.35, 0, U), spots.fern, { size: 30, far: 50 });
  // غيوم ناعمة بعيدة (تحت مستوى القمة: من فوك تحس روحك فوك الغيم)
  const clouds = new Group(); scene.add(clouds);
  {
    const ctex = canvasTex(256, 128, (g, w, h) => {
      g.clearRect(0, 0, w, h); const r2 = rng(3);
      for (let i = 0; i < 22; i++) { const x = w * (0.18 + r2() * 0.64), y = h * (0.42 + r2() * 0.28), rr = 18 + r2() * 30; const gr = g.createRadialGradient(x, y, 0, x, y, rr); gr.addColorStop(0, 'rgba(255,255,255,.95)'); gr.addColorStop(0.6, 'rgba(250,252,255,.55)'); gr.addColorStop(1, 'rgba(240,246,255,0)'); g.fillStyle = gr; g.beginPath(); g.arc(x, y, rr, 0, TAU); g.fill(); }
    });
    for (let i = 0; i < 46; i++) {
      const a = R() * TAU, r = 230 + R() * 330, sp = new Sprite(new SpriteMaterial({ map: ctex, transparent: true, opacity: 0.75 + R() * 0.25, depthWrite: false, fog: false }));
      const w = 60 + R() * 90; sp.scale.set(w, w * 0.42, 1); sp.position.set(Math.cos(a) * r, 18 + R() * 40, Math.sin(a) * r); clouds.add(sp);
    }
  }
  // جبال بعيدة + الوادي البعيد (يبين بالتلسكوب)
  {
    const list = [];
    const mountain = (x, z, h, rr, seed, snowAt) => {
      let g = new ConeGeometry(rr, h, 28, 10); const p = g.attributes.position;
      for (let i = 0; i < p.count; i++) { const px = p.getX(i), py = p.getY(i), pz = p.getZ(i), a = Math.atan2(pz, px), k = (py + h / 2) / h; const d = 1 + (vnoise(a * 2.2 + seed, k * 3.5) - 0.5) * 0.45 * (1 - k * 0.4); p.setXYZ(i, px * d, py, pz * d); }
      g = paint(g, (c, px, py, pz) => { const k = (py + h / 2) / h, n = vnoise(Math.atan2(pz, px) * 6 + seed, k * 9); mix(c, '#A9BCD2', '#D3DEEA', k * 0.9 + n * 0.35); if (snowAt < 1 && k > snowAt - 0.06 + n * 0.08) c.set('#F4F8FC'); });
      list.push(tf(g, x, h / 2 - 20, z));
    };
    for (let i = 0; i < 22; i++) { const a = (i / 22) * TAU + 0.2 + Math.sin(i * 3.1) * 0.08, r = 560 + (i % 3) * 110; if (Math.abs(angDiff(a, 0)) < 0.4) continue; mountain(Math.cos(a) * r, Math.sin(a) * r, 95 + (i % 4) * 28, 190 + (i % 3) * 50, i * 2.1, i % 3 ? 0.7 : 2); }
    const m = new Mesh(merge(list), new MeshLambertMaterial({ vertexColors: true, flatShading: true, fog: false })); scene.add(m);
    // الوادي البعيد باتجاه الشرق (+x): وادي بين سلسلتين، نهر يتلوّى، نخيل، وخيام بعيدة (هناك راح توصل)
    const VX0 = 230, VX1 = 980, VW = 260, riv = (x) => Math.sin(x * 0.011) * 22 + Math.sin(x * 0.027 + 1) * 8;
    const vh = (x, z) => { const d = Math.abs(z - riv(x)); return -26 + smooth(18, 110, d) * 70 + fbm(x * 0.012, z * 0.012) * 10 * smooth(10, 60, d) - smooth(VX0 + 60, VX0, x) * 0; };
    const nxv = 90, nzv = 40, vg = new BufferGeometry(), vpos = [], vcol = [], vidx = [];
    for (let j = 0; j <= nzv; j++) for (let i = 0; i <= nxv; i++) {
      const x = VX0 + ((VX1 - VX0) * i) / nxv, z = -VW + (2 * VW * j) / nzv, y = vh(x, z), d = Math.abs(z - riv(x));
      vpos.push(x, y, z); mix(_c, '#C9A56B', '#E0C28A', fbm(x * 0.02, z * 0.02)); if (d < 40) _c.lerp(_ca.set('#5E9A3E'), smooth(40, 14, d)); if (y > 20) _c.lerp(_ca.set('#B8946A'), smooth(20, 40, y) * 0.7); vcol.push(_c.r, _c.g, _c.b);
      if (i < nxv && j < nzv) { const a0 = j * (nxv + 1) + i; vidx.push(a0, a0 + nxv + 1, a0 + 1, a0 + 1, a0 + nxv + 1, a0 + nxv + 2); }
    }
    vg.setAttribute('position', new BufferAttribute(new Float32Array(vpos), 3)); vg.setAttribute('color', new BufferAttribute(new Float32Array(vcol), 3)); vg.setIndex(vidx); vg.computeVertexNormals();
    scene.add(new Mesh(vg, new MeshLambertMaterial({ vertexColors: true })));
    const rp = [], ri = []; for (let i = 0; i <= 160; i++) { const x = VX0 + ((VX1 - VX0) * i) / 160, z = riv(x), w = 4.5 + Math.sin(i * 0.3) * 1.2; rp.push(x, -25.3, z - w, x, -25.3, z + w); if (i) { const q = (i - 1) * 2; ri.push(q, q + 1, q + 2, q + 1, q + 3, q + 2); } }
    const rg = new BufferGeometry(); rg.setAttribute('position', new BufferAttribute(new Float32Array(rp), 3)); rg.setIndex(ri); rg.computeVertexNormals();
    scene.add(new Mesh(rg, new MeshPhongMaterial({ color: '#3D9FD8', specular: '#FFFFFF', shininess: 120, side: DoubleSide })));
    const palm = merge([paint(tf(new CylinderGeometry(0.3, 0.45, 9, 5), 0, 4.5, 0), '#8B6A3E'), paint(tf(new IcosahedronGeometry(1.6, 0), 0, 9.2, 0, 0, 0, 0, 1, 0.55, 1), '#3A7F34'), ...[0, 1, 2, 3, 4, 5].map((i) => paint(tf(tf(tf(new ConeGeometry(0.7, 4.6, 3), 0, 2.3, 0), 0, 0, 0, 1.9, 0, 0), 0, 9.3, 0, 0, (i / 6) * TAU, 0), '#4C9A3E'))]);
    const pl = []; const rv = rng(12); for (let i = 0; i < 260; i++) { const x = VX0 + 20 + rv() * (VX1 - VX0 - 40), side = rv() < 0.5 ? -1 : 1, z = riv(x) + side * (7 + rv() * 26); pl.push([x, vh(x, z), z, rv() * TAU, 0.8 + rv() * 0.5]); }
    const pim = new InstancedMesh(palm, new MeshLambertMaterial({ vertexColors: true, flatShading: true }), pl.length), po = new Object3D();
    pl.forEach(([x, y, z, ry, sc], n) => { po.position.set(x, y, z); po.rotation.set(0, ry, 0); po.scale.setScalar(sc); po.updateMatrix(); pim.setMatrixAt(n, po.matrix); }); scene.add(pim);
    const tents = []; for (const [x, dz] of [[330, 16], [345, 19], [420, -18], [520, 15]]) { const z = riv(x) + dz, y = vh(x, z); tents.push(paint(tf(new ConeGeometry(3.4, 3.4, 4), x, y + 1.7, z, 0, 0.6, 0), (c, px, py) => c.set(py > 1 ? '#F4ECDC' : '#3B2A20'))); }
    scene.add(new Mesh(merge(tents), new MeshLambertMaterial({ vertexColors: true, flatShading: true })));
  }

  // ================================================================ الجسور، الحجار، اللافتات، نقاط الاستراحة، العملات
  {
    const P = [];
    for (const b of bridges) {
      const pts = b.seg.pts.slice(b.i, b.j + 1);
      pts.forEach((p, n) => {
        if (p.gap) return;
        const q = b.seg.pts[Math.min(p.k + 1, b.seg.pts.length - 1)], ang = Math.atan2(q.z - p.z, q.x - p.x);
        P.push(tf(paint(new BoxGeometry(0.5, 0.07, 1.45), (c, x, y, z) => mix(c, '#7A5634', '#A57B4C', hash2(n, z * 3) * 0.6 + (y > 0 ? 0.3 : 0))), p.x, p.y - 0.035, p.z, 0, -ang, 0));
      });
      for (const sd of [-1, 1]) for (const hgt of [0.95, 0.45]) { // حبال
        const rope = [];
        for (let k = b.i - 1; k <= b.j + 1; k++) { const p = b.seg.pts[clamp(k, 0, b.seg.pts.length - 1)], q = b.seg.pts[clamp(k + 1, 0, b.seg.pts.length - 1)], o = b.seg.pts[clamp(k - 1, 0, b.seg.pts.length - 1)]; const tx = q.x - o.x, tz = q.z - o.z, l = Math.hypot(tx, tz) || 1; rope.push(new Vector3(p.x - (tz / l) * 0.72 * sd, p.y + hgt, p.z + (tx / l) * 0.72 * sd)); }
        P.push(paint(new TubeGeometry(new CatmullRomCurve3(rope), rope.length * 2, 0.03, 5), '#C9A46B'));
      }
      for (const e of [b.a, b.b]) for (const sd of [-1, 1]) { // أعمدة الطرفين
        const q = e.seg.pts[Math.min(e.k + 1, e.seg.pts.length - 1)], o = e.seg.pts[Math.max(e.k - 1, 0)], tx = q.x - o.x, tz = q.z - o.z, l = Math.hypot(tx, tz) || 1;
        P.push(tf(paint(new CylinderGeometry(0.09, 0.11, 1.5, 6), '#5C3A1A'), e.x - (tz / l) * 0.8 * sd, e.y + 0.6, e.z + (tx / l) * 0.8 * sd));
      }
    }
    for (const p of ALL) if (p.kind === 'stairs') { const q = p.seg.pts[Math.min(p.k + 1, p.seg.pts.length - 1)], o = p.seg.pts[Math.max(p.k - 1, 0)], ang = Math.atan2(q.z - o.z, q.x - o.x); P.push(tf(paint(new BoxGeometry(0.9, 0.5, 2.7), (c, x, y, z) => mix(c, '#7C766B', '#ABA393', y + 0.4 + hash2(p.k, z * 5) * 0.3)), p.x, p.y - 0.25, p.z, 0, -ang + (hash2(p.k, 3) - 0.5) * 0.08, 0)); }
    for (const p of ALL) if (p.kind === 'ledge' && p.k % 2 === 0) {
      const q = p.seg.pts[Math.min(p.k + 1, p.seg.pts.length - 1)], o = p.seg.pts[Math.max(p.k - 1, 0)], tx = q.x - o.x, tz = q.z - o.z, l = Math.hypot(tx, tz) || 1;
      let nx = -tz / l, nz = tx / l; if (Math.hypot(p.x + nx, p.z + nz) > Math.hypot(p.x, p.z)) { nx = -nx; nz = -nz; } // للداخل (جهة الجبل)
      const sz = 0.9 + hash2(p.k, 1) * 0.8;
      P.push(tf(paint(new DodecahedronGeometry(1, 0).scale(sz, sz * (1.3 + hash2(p.k, 5)), sz * 0.8), (c, x, y, z) => mix(c, '#5E5A55', '#A9A398', 0.35 + y * 0.2 + hash2(x * 5 + p.k, z * 5) * 0.3)), p.x + nx * (p.hw + sz * 1.0), p.y + sz * 0.3, p.z + nz * (p.hw + sz * 1.0), hash2(p.k, 2) * 0.4, hash2(p.k, 4) * 3, 0));
      colliders.push({ x: p.x + nx * (p.hw + sz), z: p.z + nz * (p.hw + sz), r: sz * 0.8, tall: 1 });
      if (p.k % 6 === 0) P.push(tf(paint(new DodecahedronGeometry(0.25, 0), '#8A847A'), p.x - nx * (p.hw - 0.05), p.y + 0.08, p.z - nz * (p.hw - 0.05)));
    }
    for (const s of stones) P.push(tf(paint(new CylinderGeometry(s.r, s.r * 1.12, 1.4, 9), (c, x, y) => mix(c, '#7F7A72', '#B7B1A6', y + 0.6 + hash2(x * 9, s.x) * 0.2)), s.x, s.y - 0.7, s.z, 0, R() * 3, 0));
    { // لافتة بداية الطريق
      const c0 = checkpoints[0], q = A.pts[8], a = Math.atan2(q.z - c0.z, q.x - c0.x), sx = -Math.sin(a), sz = Math.cos(a);
      for (const sd of [-1, 1]) P.push(tf(paint(new CylinderGeometry(0.11, 0.13, 3.4, 7), '#5C3A1A'), c0.x + Math.cos(a) * 3 + sx * 2 * sd, c0.y + 1.7, c0.z + Math.sin(a) * 3 + sz * 2 * sd));
      P.push(tf(paint(new BoxGeometry(0.2, 0.2, 4.6), '#4F3420'), c0.x + Math.cos(a) * 3, c0.y + 3.35, c0.z + Math.sin(a) * 3, 0, -a, 0));
      const st = canvasTex(512, 128, (g, w, h) => { g.fillStyle = '#7A4E26'; g.fillRect(0, 0, w, h); g.strokeStyle = '#E8C170'; g.lineWidth = 8; g.strokeRect(6, 6, w - 12, h - 12); g.fillStyle = '#FFF3D6'; g.font = '900 60px -apple-system, "Geeza Pro", system-ui, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; try { g.direction = 'rtl'; } catch (e) { /* */ } g.fillText('⛰️ طريق القمة', w / 2, h / 2 + 4); });
      const board = new Mesh(new PlaneGeometry(3.4, 0.85), new MeshLambertMaterial({ map: st, side: DoubleSide })); board.position.set(c0.x + Math.cos(a) * 3, c0.y + 2.85, c0.z + Math.sin(a) * 3); board.rotation.y = -a - Math.PI / 2; scene.add(board);
    }
    // نقاط الاستراحة: كومة حجار وعمود وراية
    for (const c of checkpoints) {
      for (let i = 0; i < 6; i++) P.push(tf(paint(new DodecahedronGeometry(0.22 - i * 0.025, 0), '#9D978C'), c.x + 1.6, c.y + 0.15 + i * 0.25, c.z + 1.1));
      P.push(tf(paint(new CylinderGeometry(0.05, 0.06, 2.4, 6), '#5C3A1A'), c.x - 1.4, c.y + 1.2, c.z - 1.1));
    }
    // لافتات بمفترقات المتاهة (بس على الطريق الصح، وبعضها ماكو)
    const nextOnSolution = new Map();
    { // أقصر طريق بالمتاهة (BFS)
      const adj = new Map(); for (const s of MZ) { const [u, v] = s.cells.map((c) => key(...c)); if (!adj.has(u)) adj.set(u, []); if (!adj.has(v)) adj.set(v, []); adj.get(u).push(v); adj.get(v).push(u); }
      const start = key(0, 0), goal = key(3, 6), prev = new Map([[start, -1]]), qq = [start];
      while (qq.length) { const u = qq.shift(); if (u === goal) break; for (const v of adj.get(u) || []) if (!prev.has(v)) { prev.set(v, u); qq.push(v); } }
      for (let v = goal; prev.get(v) !== -1 && prev.has(v); v = prev.get(v)) nextOnSolution.set(prev.get(v), v);
    }
    const signTex = canvasTex(256, 64, (g, w, h) => { g.fillStyle = '#8B5A2B'; g.fillRect(0, 0, w, h); g.strokeStyle = '#E8C170'; g.lineWidth = 4; g.strokeRect(4, 4, w - 8, h - 8); g.fillStyle = '#FFF3D6'; g.font = '900 34px -apple-system, "Geeza Pro", system-ui, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; try { g.direction = 'rtl'; } catch (e) { /* */ } g.fillText('⬅ للقمة', w / 2, h / 2 + 2); });
    let signN = 0;
    for (const [u, v] of nextOnSolution) {
      if ((mazeDeg.get(u) || 0) < 3 || signN % 3 === 2) { signN++; continue; } // بعض المفترقات بلا لافتة
      signN++;
      const ui = Math.floor(u / 10), uj = u % 10, vi = Math.floor(v / 10), vj = v % 10, [x0, z0] = cellP(ui, uj), [x1, z1] = cellP(vi, vj);
      const ang = Math.atan2(z1 - z0, x1 - x0), sx = x0 + Math.cos(ang + 0.9) * 1.9, sz = z0 + Math.sin(ang + 0.9) * 1.9, y = H(sx, sz);
      P.push(tf(paint(new CylinderGeometry(0.06, 0.07, 1.9, 6), '#5C3A1A'), sx, y + 0.95, sz));
      const board = new Mesh(new PlaneGeometry(1.1, 0.28), new MeshLambertMaterial({ map: signTex, side: DoubleSide }));
      board.position.set(sx + Math.cos(ang) * 0.45, y + 1.65, sz + Math.sin(ang) * 0.45); board.rotation.y = -ang + Math.PI; scene.add(board);
    }
    // جذوع واقعة بنهايات المتاهة المسدودة
    for (const [k, deg] of mazeDeg) {
      if (deg !== 1 || k === key(0, 0) || k === key(3, 6)) continue;
      const [x, z] = cellP(Math.floor(k / 10), k % 10), y = H(x, z), a = R() * TAU;
      P.push(tf(paint(new CylinderGeometry(0.32, 0.38, 4.2, 8), (c, xx, yy) => c.set(Math.abs(yy) > 2 ? '#C9A36B' : '#5A3E26')), x, y + 0.35, z, 0, a, Math.PI / 2));
      colliders.push({ x, z, r: 0.9 });
    }
    const m = new Mesh(merge(P), new MeshLambertMaterial({ vertexColors: true, side: DoubleSide })); m.castShadow = true; m.receiveShadow = true; scene.add(m);
  }
  const cpFlags = checkpoints.map((c) => {
    const g = new BufferGeometry(); g.setAttribute('position', new BufferAttribute(new Float32Array([0, 0.32, 0, 0, -0.32, 0, 1.05, 0, 0]), 3)); g.computeVertexNormals();
    const f = new Mesh(g, new MeshLambertMaterial({ color: '#F4F1EA', side: DoubleSide })); f.position.set(c.x - 1.4, c.y + 2.05, c.z - 1.1); scene.add(f); return f;
  });
  // عملات: على الطريق الرئيسي، وكومة بكل نهاية مسدودة بالمتاهة
  const coins = [];
  for (const s of [A, C2]) for (let k = 6; k < s.pts.length - 4; k += 14) { const p = s.pts[k]; if (p.kind === 'trail') coins.push({ x: p.x, y: p.y + 0.9, z: p.z, taken: false }); }
  for (const [k, deg] of mazeDeg) { if (deg !== 1 || k === key(0, 0) || k === key(3, 6)) continue; const [x0, z0] = cellP(Math.floor(k / 10), k % 10), q = nearest(x0, z0, null, 2), x = q ? q.p.x : x0, z = q ? q.p.z : z0, y = q ? q.y : H(x0, z0); for (let i = 0; i < 4; i++) { const pp = q.p.seg.pts[clamp(q.p.k + (i - 1.5) * 2 | 0, 0, q.p.seg.pts.length - 1)]; coins.push({ x: pp.x, y: pp.y + 0.9, z: pp.z, taken: false }); } } // كنز بالطرق المسدودة
  const coinMesh = new InstancedMesh(new CylinderGeometry(0.22, 0.22, 0.05, 20), new MeshPhongMaterial({ color: '#FFC93C', specular: '#FFF4C0', shininess: 90, emissive: '#6B4A00', emissiveIntensity: 0.55 }), coins.length);
  coinMesh.castShadow = true; coinMesh.frustumCulled = false; scene.add(coinMesh);

  // ================================================================ ساحة القمة (~555 م²)
  const plaza = new Group(); plaza.position.set(0, HS, 0); scene.add(plaza);
  const lastP = C2.pts[C2.pts.length - 1], ENTRY_A = Math.atan2(lastP.z, lastP.x); // وين يوصل الطريق
  const inter = []; // أشياء تتفاعل وياها
  const npcs = [];
  const fx = { flag: null, flagBase: null, bell: null, lanterns: [], water: null, drops: null, leaves: null, kiosk: null, cups: [] };
  {
    const tileTex = canvasTex(512, 512, (g, w, h) => {
      g.fillStyle = '#B9B1A3'; g.fillRect(0, 0, w, h);
      for (let ring = 0; ring < 12; ring++) {
        const r0 = ring * 22, r1 = r0 + 22, n = Math.max(6, Math.round((TAU * (r0 + 11)) / 34));
        for (let i = 0; i < n; i++) {
          const a0 = (i / n) * TAU, a1 = ((i + 1) / n) * TAU, t = 0.82 + ((ring * 7 + i * 3) % 5) * 0.04;
          g.fillStyle = `rgb(${Math.round(196 * t)},${Math.round(186 * t)},${Math.round(168 * t)})`;
          g.beginPath(); g.arc(w / 2, h / 2, r1 - 1.5, a0 + 0.01, a1 - 0.01); g.arc(w / 2, h / 2, Math.max(0, r0 + 1.5), a1 - 0.01, a0 + 0.01, true); g.closePath(); g.fill();
        }
      }
    });
    const floor = new Mesh(new CircleGeometry(RP, 64), new MeshLambertMaterial({ map: tileTex })); floor.rotation.x = -Math.PI / 2; floor.position.y = 0.03; floor.receiveShadow = true; plaza.add(floor);
    const P = [];
    // سور حجري واطي بفتحتين (الطريق والإطلالة)
    for (let i = 0; i < 64; i++) {
      const a = (i / 64) * TAU; if (Math.abs(angDiff(a, ENTRY_A)) < 0.16 || Math.abs(angDiff(a, DECK_A)) < 0.2) continue;
      P.push(tf(paint(new BoxGeometry(1.36, 0.72, 0.55), (c, x, y, z) => mix(c, '#8E877B', '#B8AF9F', 0.4 + y + hash2(i, z * 4) * 0.3)), Math.cos(a) * (RP - 0.1), 0.36, Math.sin(a) * (RP - 0.1), 0, -a + Math.PI / 2, 0));
    }
    // سطيحة الإطلالة الخشبية + سياج
    for (let k = 0; k < 10; k++) P.push(tf(paint(new BoxGeometry(0.46, 0.08, 3.6), (c, x, y, z) => mix(c, '#7A5634', '#A57B4C', hash2(k, z) * 0.5 + 0.3)), RP - 0.3 + k * 0.48, 0.05, 0));
    for (const sd of [-1, 1]) { P.push(tf(paint(new BoxGeometry(4.8, 0.07, 0.07), '#6B4423'), RP + 2.1, 0.95, sd * 1.8)); for (let k = 0; k < 5; k++) P.push(tf(paint(new CylinderGeometry(0.05, 0.05, 1, 6), '#5C3A1A'), RP + 0.1 + k * 1.1, 0.5, sd * 1.8)); }
    P.push(tf(paint(new BoxGeometry(0.07, 0.07, 3.6), '#6B4423'), RP + 4.5, 0.95, 0));
    for (let k = -1; k <= 1; k++) P.push(tf(paint(new CylinderGeometry(0.06, 0.06, 1, 6), '#5C3A1A'), RP + 4.5, 0.5, k * 1.6));
    for (let k = 0; k < 4; k++) P.push(tf(paint(new CylinderGeometry(0.12, 0.14, 7, 6), '#4F3420'), RP + 0.5 + k * 1.3, -3.4, (k % 2 ? 1 : -1) * 1.5)); // دعامات
    // النافورة بالنص
    P.push(paint(new LatheGeometry([new Vector2(0.001, 0), new Vector2(2.35, 0), new Vector2(2.45, 0.08), new Vector2(2.4, 0.62), new Vector2(2.15, 0.66), new Vector2(2.1, 0.22), new Vector2(0.001, 0.22)], 40), (c, x, y) => mix(c, '#9F988C', '#D6CFC2', y * 1.5 + 0.2)));
    P.push(paint(new LatheGeometry([new Vector2(0.001, 0.2), new Vector2(0.32, 0.2), new Vector2(0.22, 0.9), new Vector2(0.18, 1.4), new Vector2(0.7, 1.55), new Vector2(0.72, 1.68), new Vector2(0.15, 1.72), new Vector2(0.12, 2.15), new Vector2(0.2, 2.3), new Vector2(0.001, 2.38)], 24), (c, x, y) => mix(c, '#A79F92', '#DCD5C8', y * 0.4)));
    // كشك الشاي
    const kA = 236 * D2R, kx = Math.cos(kA) * 9.2, kz = Math.sin(kA) * 9.2, kr = Math.atan2(-Math.cos(kA), -Math.sin(kA)); // الواجهة للنافورة
    const kiosk = []; const K2 = (g) => kiosk.push(g);
    const plank = (c, x) => c.set(Math.floor((x + 1.6) / 0.4) % 2 ? '#A97B4C' : '#93683E');
    K2(tf(paint(new BoxGeometry(3.2, 2.4, 0.12), plank), 0, 1.2, -1.05)); // الحايط الخلفي
    for (const sd of [-1, 1]) K2(tf(paint(new BoxGeometry(0.12, 2.4, 2.2), '#8A5F36'), sd * 1.55, 1.2, 0));
    K2(tf(paint(new BoxGeometry(3.5, 0.12, 2.7), '#6B4423'), 0, 2.45, 0.15)); // السقف
    K2(tf(paint(new BoxGeometry(3.1, 1.0, 0.5), (c, x, y) => c.set(y > 0.42 ? '#5C3A1A' : Math.floor((x + 1.55) / 0.31) % 2 ? '#A97B4C' : '#93683E')), 0, 0.5, 0.85)); // الكاونتر
    for (let i = 0; i < 8; i++) K2(tf(paint(new BoxGeometry(0.44, 0.04, 0.9), i % 2 ? '#FAF3E6' : '#2E8B57'), -1.54 + i * 0.44, 2.3, 1.75, 0.35, 0, 0)); // مظلة مخططة
    K2(tf(paint(new BoxGeometry(2.6, 0.06, 0.35), '#6B4423'), 0, 1.6, -0.9)); // رف
    for (let i = 0; i < 5; i++) K2(tf(paint(new CylinderGeometry(0.07, 0.06, 0.22, 8), ['#2E86AB', '#C0612B', '#F2E3C6', '#9B2335', '#E8C170'][i]), -1 + i * 0.5, 1.75, -0.9));
    const kioskG = new Group(); kioskG.add(new Mesh(merge(kiosk), new MeshLambertMaterial({ vertexColors: true, side: DoubleSide }))); kioskG.position.set(kx, 0, kz); kioskG.rotation.y = kr; plaza.add(kioskG);
    kioskG.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
    fx.kiosk = kioskG;
    // سماور/دلة واستكانات عالكاونتر
    const brass = new MeshPhongMaterial({ color: '#C9A13B', specular: '#FFE9A8', shininess: 90 });
    const samovar = new Mesh(new LatheGeometry([new Vector2(0.001, 0), new Vector2(0.14, 0), new Vector2(0.16, 0.05), new Vector2(0.22, 0.2), new Vector2(0.2, 0.42), new Vector2(0.12, 0.5), new Vector2(0.14, 0.56), new Vector2(0.06, 0.62), new Vector2(0.001, 0.64)], 18), brass);
    samovar.position.set(-1.0, 1.0, 0.85); kioskG.add(samovar);
    const glassM = new MeshPhongMaterial({ color: '#B5562A', specular: '#FFFFFF', shininess: 120, transparent: true, opacity: 0.85 });
    for (let i = 0; i < 6; i++) { const cup = new Mesh(new CylinderGeometry(0.045, 0.032, 0.1, 10), glassM); cup.position.set(-0.3 + i * 0.2, 1.05, 0.9); kioskG.add(cup); fx.cups.push(cup); }
    const seller = makeMan({ thobe: '#EDE6DA', bisht: null, shmagh: '#1E1E1E', beard: '#2E2A26', beads: false }); seller.root.position.set(0.35, 0, -0.25); kioskG.add(seller.root);
    npcs.push({ m: seller, base: seller.root.position.clone(), home: 0, kind: 'seller' });
    inter.push({ id: 'tea', x: kx - Math.cos(kA) * 2.1, z: kz - Math.sin(kA) * 2.1, r: 2.3, label: '☕ اشرب شاي' });
    // ناس كاعدين على مصطبة
    const benchAt = (a, r) => { // مصطبة بالعرض (مماس للدائرة)
      const x = Math.cos(a) * r, z = Math.sin(a) * r, rot = -a - Math.PI / 2, tx = -Math.sin(a), tz = Math.cos(a);
      P.push(tf(paint(new BoxGeometry(2.2, 0.1, 0.55), '#8A5F36'), x, 0.45, z, 0, rot, 0));
      P.push(tf(paint(new BoxGeometry(2.2, 0.5, 0.08), '#7A5232'), x + Math.cos(a) * 0.3, 0.75, z + Math.sin(a) * 0.3, 0, rot, 0));
      for (const sd of [-0.9, 0.9]) P.push(tf(paint(new BoxGeometry(0.1, 0.45, 0.5), '#6B4423'), x + tx * sd, 0.22, z + tz * sd, 0, rot, 0));
      colliders.push({ x, z, r: 0.75 }, { x: x + tx * 0.8, z: z + tz * 0.8, r: 0.5 }, { x: x - tx * 0.8, z: z - tz * 0.8, r: 0.5 });
      return [x, z, tx, tz];
    };
    benchAt(185 * D2R, 6.6); benchAt(150 * D2R, 6.6); benchAt(30 * D2R, 6.6);
    const teaGlass = () => { const g = new Mesh(new CylinderGeometry(0.035, 0.026, 0.08, 10), glassM); g.position.set(0, -0.43, 0.05); return g; };
    const stand = (m, a, r, look, kind) => { const x = Math.cos(a) * r, z = Math.sin(a) * r; m.root.position.set(x, 0, z); m.root.rotation.y = Math.atan2(look[0] - x, look[1] - z); plaza.add(m.root); const n = { m, base: m.root.position.clone(), kind, ph: R() * 6 }; npcs.push(n); colliders.push({ x, z, r: 0.42 }); return n; };
    const guest1 = makeMan({ thobe: '#D8CDB8', bisht: '#2D3A4E', shmagh: '#C8102E', beads: false, beard: '#5A524C' });
    const guest2 = makeMan({ thobe: '#F4F1EA', bisht: null, shmagh: '#F4F1EA', beard: 'none', beads: true });
    const guest3 = makeMan({ thobe: '#CFE0E8', bisht: null, shmagh: '#C8102E', beard: '#3A3430', beads: false });
    const meet = [Math.cos(221 * D2R) * 6.2, Math.sin(221 * D2R) * 6.2]; // نقطة سوالفهم
    stand(guest1, 212 * D2R, 6.9, meet, 'tea'); stand(guest2, 229 * D2R, 6.9, meet, 'tea'); stand(guest3, 219 * D2R, 5.2, [kx, kz], 'stand');
    guest1.arms[1].el.add(teaGlass()); guest2.arms[1].el.add(teaGlass());
    inter.push({ id: 'chat', x: meet[0], z: meet[1], r: 2.2, label: '🗣️ سولف وياهم' });
    // الجرس
    const bA = 118 * D2R, bx = Math.cos(bA) * 9, bz = Math.sin(bA) * 9, btx = -Math.sin(bA), btz = Math.cos(bA);
    for (const sd of [-1, 1]) P.push(tf(paint(new BoxGeometry(0.18, 2.8, 0.18), '#5C3A1A'), bx + btx * 0.9 * sd, 1.4, bz + btz * 0.9 * sd));
    P.push(tf(paint(new BoxGeometry(2.3, 0.2, 0.24), '#4F3420'), bx, 2.8, bz, 0, -bA - Math.PI / 2, 0));
    const bell = new Group(); bell.position.set(bx, 2.7, bz); plaza.add(bell);
    const bronze = new MeshPhongMaterial({ color: '#B07A2E', specular: '#FFE2A0', shininess: 100 });
    const bm = new Mesh(new LatheGeometry([new Vector2(0.001, -0.05), new Vector2(0.18, -0.06), new Vector2(0.24, -0.25), new Vector2(0.3, -0.55), new Vector2(0.42, -0.72), new Vector2(0.4, -0.76), new Vector2(0.001, -0.76)], 24), bronze); bm.castShadow = true;
    const clap = new Mesh(new SphereGeometry(0.07, 10, 8), phong('#3B2A1A')); clap.position.y = -0.7;
    bell.add(bm, clap); fx.bell = { g: bell, swing: 0, v: 0 };
    inter.push({ id: 'bell', x: bx * 0.84, z: bz * 0.84, r: 2.2, label: '🔔 دك الجرس' });
    // العلم
    const fA = 300 * D2R, fxp = Math.cos(fA) * 10.2, fzp = Math.sin(fA) * 10.2;
    P.push(tf(paint(new CylinderGeometry(0.08, 0.1, 9, 8), '#D9D9D9'), fxp, 4.5, fzp));
    P.push(tf(paint(new SphereGeometry(0.16, 10, 8), '#E8C170'), fxp, 9.05, fzp));
    const flagG = new PlaneGeometry(3.2, 2, 20, 10); flagG.translate(1.6, 0, 0);
    const fcol = new Float32Array(flagG.attributes.position.count * 3);
    for (let i = 0; i < flagG.attributes.position.count; i++) { const y = flagG.attributes.position.getY(i); _c.set(y > 0.33 ? '#CE1126' : y > -0.33 ? '#FFFFFF' : '#141414'); if (Math.abs(y) < 0.33 && Math.abs(flagG.attributes.position.getX(i) - 1.6) < 0.35 && Math.abs(y) < 0.2) _c.set('#007A3D'); fcol.set([_c.r, _c.g, _c.b], i * 3); }
    flagG.setAttribute('color', new BufferAttribute(fcol, 3));
    const flag = new Mesh(flagG, new MeshLambertMaterial({ vertexColors: true, side: DoubleSide })); flag.position.set(fxp + 0.1, 7.9, fzp); flag.castShadow = true; plaza.add(flag);
    fx.flag = flag; fx.flagBase = Float32Array.from(flagG.attributes.position.array);
    // التلسكوب على الإطلالة
    const scope = new Group(); scope.position.set(RP + 3.9, 0, 0); plaza.add(scope);
    for (let i = 0; i < 3; i++) { const a = (i / 3) * TAU; const leg = new Mesh(new CylinderGeometry(0.03, 0.03, 1.3, 6), phong('#3B3B3B')); leg.position.set(Math.cos(a) * 0.25, 0.6, Math.sin(a) * 0.25); leg.rotation.set(Math.sin(a) * 0.38, 0, -Math.cos(a) * 0.38); scope.add(leg); }
    const tube = new Mesh(new CylinderGeometry(0.09, 0.13, 1.1, 16), brass); tube.rotation.z = Math.PI / 2 - 0.15; tube.position.set(0.1, 1.32, 0); scope.add(tube);
    const lens = new Mesh(new CylinderGeometry(0.14, 0.14, 0.06, 16), phong('#1A2A3A', { shininess: 160, specular: '#FFFFFF' })); lens.rotation.z = Math.PI / 2 - 0.15; lens.position.set(0.66, 1.4, 0); scope.add(lens);
    shadowAll(scope); fx.scope = scope;
    inter.push({ id: 'scope', x: RP + 3.1, z: 0, r: 1.8, label: '🔭 باوع بالتلسكوب' });
    inter.push({ id: 'fountain', x: 0, z: 0, r: 3.4, label: '🪙 ارمِ عملة بالنافورة' });
    // فوانيس وأضواء ملونة
    const lampPosts = [45, 165 - 20, 255, 330].map((d) => d * D2R);
    for (const a of lampPosts) { const x = Math.cos(a) * 12.2, z = Math.sin(a) * 12.2; P.push(tf(paint(new CylinderGeometry(0.06, 0.08, 3.2, 6), '#2E2E2E'), x, 1.6, z)); const lan = new Group(); lan.position.set(x, 3.0, z); const glass = new Mesh(new CylinderGeometry(0.11, 0.11, 0.26, 8), new MeshBasicMaterial({ color: '#FFD36B' })); const halo = new Sprite(new SpriteMaterial({ map: glowTex, color: '#FFC14D', transparent: true, opacity: 0.7, depthWrite: false, blending: AdditiveBlending })); halo.scale.setScalar(1.2); lan.add(glass, halo); plaza.add(lan); fx.lanterns.push(lan); }
    const bulbs = []; for (let i = 0; i < 4; i++) { const a0 = lampPosts[i], a1 = lampPosts[(i + 1) % 4]; let da = angDiff(a0, a1); if (da < 0) da += TAU; for (let k = 1; k < 9; k++) { const a = a0 + (da * k) / 9, sag = Math.sin((k / 9) * Math.PI) * 0.6; bulbs.push([Math.cos(a) * 12.2, 3.05 - sag, Math.sin(a) * 12.2, k]); } }
    const bulbM = new InstancedMesh(new SphereGeometry(0.07, 8, 6), new MeshBasicMaterial({ color: '#FFFFFF' }), bulbs.length), oo = new Object3D(), bcols = ['#FF5D8F', '#FFD23F', '#7FD1FF', '#8DE26B'];
    bulbs.forEach(([x, y, z, k], n) => { oo.position.set(x, y, z); oo.updateMatrix(); bulbM.setMatrixAt(n, oo.matrix); bulbM.setColorAt(n, _c.set(bcols[n % 4])); });
    plaza.add(bulbM);
    // أحواض ورد
    for (const d of [80, 175, 280, 350]) { const a = d * D2R, x = Math.cos(a) * 11, z = Math.sin(a) * 11; P.push(tf(paint(new CylinderGeometry(0.7, 0.6, 0.5, 12), '#8E877B'), x, 0.25, z)); for (let i = 0; i < 9; i++) P.push(tf(paint(new IcosahedronGeometry(0.13, 0), ['#FF5D8F', '#FFD23F', '#FFFFFF', '#B28DFF'][i % 4]), x + Math.cos(i) * 0.4, 0.58, z + Math.sin(i) * 0.4)); }
    const pm = new Mesh(merge(P), new MeshLambertMaterial({ vertexColors: true, side: DoubleSide })); pm.castShadow = true; pm.receiveShadow = true; plaza.add(pm);
    // صنوبرات داخل السور (تتمايل ويه الريح)
    const pl = [62, 100, 200, 320].map((d) => { const a = d * D2R; return { x: Math.cos(a) * 11.6, y: HS - 0.1, z: Math.sin(a) * 11.6, ry: R() * TAU, s: 0.9 }; });
    scatterChunks(geos.pineA, forestMats.pine, pl, { cast: true, size: 100, far: 400 });
    for (const t of pl) colliders.push({ x: t.x, z: t.z, r: 0.5, tall: 1 });
    // مي النافورة
    const water = new Mesh(new CircleGeometry(2.12, 40), new MeshPhongMaterial({ color: '#4AA6D8', specular: '#FFFFFF', shininess: 140, normalMap: waterN, transparent: true, opacity: 0.88 }));
    water.rotation.x = -Math.PI / 2; water.position.y = 0.55; plaza.add(water); fx.water = water;
    const dropN = 140, dpos = new Float32Array(dropN * 3), dseed = []; for (let i = 0; i < dropN; i++) dseed.push([R() * TAU, R(), 0.5 + R() * 0.5]);
    const dg = new BufferGeometry(); dg.setAttribute('position', new BufferAttribute(dpos, 3));
    fx.drops = new Points(dg, new PointsMaterial({ size: 0.16, map: glowTex, color: '#E6F6FF', transparent: true, opacity: 0.9, depthWrite: false })); fx.drops.userData.seed = dseed; fx.drops.frustumCulled = false; plaza.add(fx.drops);
    const leafN = 220, lpos = new Float32Array(leafN * 3), lseed = []; for (let i = 0; i < leafN; i++) lseed.push([R() * 60 - 30, R() * 8, R() * 60 - 30, R()]);
    const lg = new BufferGeometry(); lg.setAttribute('position', new BufferAttribute(lpos, 3));
    fx.leaves = new Points(lg, new PointsMaterial({ size: 0.22, map: glowTex, color: '#A8D46A', transparent: true, opacity: 0, depthWrite: false })); fx.leaves.userData.seed = lseed; fx.leaves.frustumCulled = false; plaza.add(fx.leaves);
    // خطوط ريح (تبين بس لمن تهب)
    const stN = 70, stP = new Float32Array(stN * 6), stS = []; for (let i = 0; i < stN; i++) stS.push([R() * 50 - 25, R() * 9 - 1, R() * 50 - 25, 0.5 + R()]);
    const stG = new BufferGeometry(); stG.setAttribute('position', new BufferAttribute(stP, 3));
    fx.streaks = new LineSegments(stG, new LineBasicMaterial({ color: '#FFFFFF', transparent: true, opacity: 0, depthWrite: false })); fx.streaks.userData.seed = stS; fx.streaks.frustumCulled = false; plaza.add(fx.streaks);
    // دوائر تصادم للساحة
    colliders.push({ x: 0, z: 0, r: 2.6, tall: 1 });
    for (const k of [-1.1, 0, 1.1]) colliders.push({ x: kx + Math.cos(kA + Math.PI / 2) * k - Math.cos(kA) * 0.0, z: kz + Math.sin(kA + Math.PI / 2) * k, r: 1.05 });
    colliders.push({ x: bx + btx * 0.9, z: bz + btz * 0.9, r: 0.25 }, { x: bx - btx * 0.9, z: bz - btz * 0.9, r: 0.25 }, { x: fxp, z: fzp, r: 0.3 });
    for (const d of [80, 175, 280, 350]) { const a = d * D2R; colliders.push({ x: Math.cos(a) * 11, z: Math.sin(a) * 11, r: 0.75 }); }
  }
  // ================================================================ حيوانات برية
  function makeBeast(kind) {
    const wolf = kind === 'wolf';
    const root = new Group(), body = new Group(); root.add(body);
    const fur = phong(wolf ? '#7E8088' : '#4E3626', { shininess: 8 }), lightM = phong(wolf ? '#C9CACF' : '#6E5038', { shininess: 8 }), dark = phong(wolf ? '#3E4048' : '#2B1D12', { shininess: 20 });
    const L = wolf ? 0.95 : 1.0, Hh = wolf ? 0.72 : 0.62, B = wolf ? 0.22 : 0.33;
    const torso = new Mesh(new SphereGeometry(1, 22, 14), fur); torso.scale.set(L / 2, B, B * (wolf ? 0.85 : 0.9)); torso.position.y = Hh; body.add(torso);
    const belly = new Mesh(new SphereGeometry(1, 16, 10), lightM); belly.scale.set(L / 2.3, B * 0.6, B * 0.75); belly.position.set(0, Hh - B * 0.4, 0); body.add(belly);
    if (!wolf) { const ridge = new Mesh(new BoxGeometry(L * 0.8, 0.12, 0.08), dark); ridge.position.set(0, Hh + B * 0.95, 0); body.add(ridge); }
    const head = new Group(); head.position.set(L / 2 + 0.05, Hh + (wolf ? 0.16 : 0.0), 0); body.add(head);
    const skull = new Mesh(new SphereGeometry(wolf ? 0.16 : 0.2, 16, 12), fur); skull.scale.set(1.2, 0.95, 0.9); head.add(skull);
    const snout = new Mesh(new CylinderGeometry(wolf ? 0.05 : 0.09, wolf ? 0.09 : 0.13, wolf ? 0.26 : 0.22, 10), wolf ? lightM : fur); snout.rotation.z = -Math.PI / 2; snout.position.set(wolf ? 0.24 : 0.25, -0.04, 0); head.add(snout);
    const nose = new Mesh(new SphereGeometry(wolf ? 0.035 : 0.07, 10, 8), dark); nose.position.set(wolf ? 0.37 : 0.36, -0.03, 0); if (!wolf) nose.scale.set(0.5, 1, 1.1); head.add(nose);
    for (const s of [-1, 1]) {
      const eye = new Mesh(new SphereGeometry(0.025, 8, 6), new MeshBasicMaterial({ color: wolf ? '#F2C14E' : '#1A0E08' })); eye.position.set(0.12, 0.06, s * 0.09); head.add(eye);
      const ear = new Mesh(new ConeGeometry(wolf ? 0.06 : 0.05, wolf ? 0.16 : 0.1, 6), fur); ear.position.set(-0.02, wolf ? 0.17 : 0.15, s * 0.08); ear.rotation.set(s * 0.25, 0, wolf ? -0.1 : 0.4); head.add(ear);
      if (!wolf) { const tusk = new Mesh(new ConeGeometry(0.018, 0.12, 6), phong('#F4EFE6')); tusk.position.set(0.36, -0.04, s * 0.08); tusk.rotation.z = 0.6; head.add(tusk); }
    }
    const tail = new Group(); tail.position.set(-L / 2, Hh + 0.05, 0); body.add(tail);
    const tm = new Mesh(wolf ? new CapsuleGeometry(0.06, 0.36, 4, 8) : new CylinderGeometry(0.015, 0.02, 0.18, 6), fur); tm.position.y = wolf ? -0.2 : -0.09; tail.add(tm); tail.rotation.z = wolf ? 0.9 : 0.4;
    const legs = [];
    for (const [lx, front] of [[L * 0.33, 1], [-L * 0.33, 0]]) for (const s of [-1, 1]) {
      const hip = new Group(); hip.position.set(lx, Hh - B * 0.4, s * B * 0.55); body.add(hip);
      const up = new Mesh(new CylinderGeometry(0.045, 0.06, (Hh - B * 0.4) * 0.55, 8), fur); up.position.y = -((Hh - B * 0.4) * 0.55) / 2; hip.add(up);
      const knee = new Group(); knee.position.y = -(Hh - B * 0.4) * 0.55; hip.add(knee);
      const lo = new Mesh(new CylinderGeometry(0.03, 0.04, (Hh - B * 0.4) * 0.45, 8), wolf ? fur : dark); lo.position.y = -((Hh - B * 0.4) * 0.45) / 2; knee.add(lo);
      legs.push({ hip, knee, front, s });
    }
    shadowAll(root); scene.add(root);
    return { root, body, head, tail, legs, yaw: 0 };
  }
  const beasts = [];
  const homeAt = (seg, k) => { const p = seg.pts[clamp(k, 0, seg.pts.length - 1)]; return { x: p.x, z: p.z, y: p.y }; };
  const addBeast = (kind, home, ox = 0) => {
    const m = makeBeast(kind);
    beasts.push({ kind, m, home, x: home.x + ox, z: home.z, y: home.y, vx: 0, vz: 0, face: R() * TAU, state: 'idle', t: R() * 2, ph: 0, cool: 0, tx: home.x, tz: home.z, charge: null });
  };
  addBeast('wolf', homeAt(A, Math.floor(A.pts.length * 0.22)), 0); addBeast('wolf', homeAt(A, Math.floor(A.pts.length * 0.22) + 4), 1.5);
  addBeast('wolf', homeAt(C2, firstKind(C2, 'ledge') - 26), 0); addBeast('wolf', homeAt(C2, firstKind(C2, 'ledge') - 22), 1.2);
  { const mid = MZ[Math.floor(MZ.length * 0.4)], mid2 = MZ[Math.floor(MZ.length * 0.75)]; addBeast('boar', homeAt(mid, Math.floor(mid.pts.length / 2))); addBeast('boar', homeAt(mid2, Math.floor(mid2.pts.length / 2))); }

  // ================================================================ البطل والمحاكاة
  let hero = null;
  const S = { phase: 'climb', t: 0, p: null, cp: 0, coinsGot: 0, summit: null, scope: false, fall: 0, focus: null, best: 0, startT: 0 };
  function surface(x, z, yRef, air) { // وين تكدر توكف: يرجّع الارتفاع، أو null + سبب
    const r = Math.hypot(x, z);
    if (r < RP - 0.45 || (r < RP + 1.3 && Math.abs(angDiff(Math.atan2(z, x), ENTRY_A)) < 0.24)) return { y: HS, kind: 'plaza' }; // مدخل الساحة عريض
    if (x > RP - 1 && x < RP + 4.35 && Math.abs(z) < 1.65) return { y: HS + 0.09, kind: 'deck' };
    const q = nearest(x, z, yRef, 1);
    if (!q) return { y: null, edge: 'wall' };
    const p = q.p;
    if (p.kind === 'stones') {
      for (const s of stones) if (Math.hypot(x - s.x, z - s.z) < s.r + (air ? 0.5 : 0)) return { y: s.y, kind: 'stone', stone: s }; // بالهوا: الحجرة تسحبك عليها شوية
      return q.d < 2.5 ? { y: null, edge: 'fall', water: true, q } : { y: null, edge: 'wall', q };
    }
    if (q.d <= p.hw) {
      if (p.kind === 'bridge' && p.gap) { const al = (x - p.x) * q.tx + (z - p.z) * q.tz; if (Math.abs(al) < 0.32) return { y: null, edge: 'fall', q }; } // الفتحة بس مكان اللوح الناقص
      return { y: q.y, kind: p.kind, q };
    }
    if (p.kind === 'bridge') return { y: null, edge: 'fall', q };
    if (p.kind === 'ledge') { const outer = Math.hypot(x, z) > Math.hypot(p.x, p.z); return { y: null, edge: outer ? 'fall' : 'wall', q }; }
    return { y: null, edge: 'wall', q };
  }
  function enter(sk, opts = {}) {
    if (!hero || hero.id !== sk.id) {
      if (hero) for (const o of [hero.root, hero.chute, hero.drop, hero.rope]) scene.remove(o);
      hero = makeHero(sk, glowTex); scene.add(hero.root, hero.chute, hero.drop, hero.rope); hero.turn = 0; hero.blink = 0; hero.nextBlink = 2;
    }
    for (const c of coins) c.taken = false;
    checkpoints.forEach((c, i) => { c.active = i === 0; cpFlags[i].material.color.set(i === 0 ? '#FFD23F' : '#F4F1EA'); });
    S.cp = 0; S.coinsGot = 0; S.summit = null; S.scope = false; S.fall = 0; S.focus = null; S.t = 0; S.phase = 'climb';
    const c0 = checkpoints[0], nxt = A.pts[6];
    S.p = { x: c0.x, z: c0.z, y: c0.y, vx: 0, vz: 0, vy: 0, air: false, face: Math.atan2(nxt.z - c0.z, nxt.x - c0.x), speed: 0, run: false, hopPh: 0, landT: 0, stun: 0, rot: 0, chute: 0, ground: c0.y };
    if (opts.at === 'summit') { Object.assign(S.p, { x: -RP + 2.5, z: 2, y: HS, ground: HS }); }
    for (const b of beasts) { b.x = b.home.x; b.z = b.home.z; b.state = 'idle'; b.cool = 0; }
    cam.yaw = S.p.face; cam.pitch = 0.24; cam.init = false; lastT = -1;
    U.wind.value = 0;
    return { checkpoints: checkpoints.length, coins: coins.length, trail: Math.round(ALL.length * 0.8) };
  }
  function respawn(ev) {
    const c = checkpoints[S.cp], p = S.p;
    const nxt = c.seg.pts[Math.min(c.k + 6, c.seg.pts.length - 1)];
    Object.assign(p, { x: c.x, z: c.z, y: c.y, vx: 0, vz: 0, vy: 0, air: false, stun: 0, rot: 0, ground: c.y, face: Math.atan2(nxt.z - c.z, nxt.x - c.x) });
    S.fall = 0; cam.yaw = p.face; cam.init = false; ev.push(['respawn', c.name]);
  }
  function moveOnGround(p, nx, nz, ev, beast) {
    const s = surface(nx, nz, p.y);
    if (s.y != null && Math.abs(s.y - p.y) < 1.1) return { x: nx, z: nz, y: s.y };
    if (!beast && s.edge === 'fall' && !p.air) return { fall: true, water: s.water };
    // نزلق على طول الطريق بدل ما نوكف
    if (s.q) {
      const dx = nx - p.x, dz = nz - p.z, along = dx * s.q.tx + dz * s.q.tz, ax = p.x + s.q.tx * along, az = p.z + s.q.tz * along, s2 = surface(ax, az, p.y);
      if (s2.y != null && Math.abs(s2.y - p.y) < 1.1) return { x: ax, z: az, y: s2.y };
    }
    return null;
  }
  function step(dt, inp) {
    const ev = [], p = S.p; if (!p) return ev;
    S.t += dt;
    cam.yaw += inp.dyaw || 0; cam.pitch = clamp(cam.pitch + (inp.dpitch || 0), 0.06, 1.15);
    if (S.scope) { cam.scopeYaw = clamp((cam.scopeYaw || 0) + (inp.dyaw || 0) * 0.35, -0.9, 0.9); cam.scopePitch = clamp((cam.scopePitch || -0.2) + (inp.dpitch || 0) * -0.3, -0.55, 0.2); updateCamera(dt); return ev; }
    const cfx = Math.cos(cam.yaw), cfz = Math.sin(cam.yaw), crx = -Math.sin(cam.yaw), crz = Math.cos(cam.yaw);
    let mx = cfx * (inp.jy || 0) + crx * (inp.jx || 0), mz = cfz * (inp.jy || 0) + crz * (inp.jx || 0);
    const ml = Math.hypot(mx, mz); if (ml > 1e-4) { mx /= ml; mz /= ml; }
    let mag = clamp(inp.mag || 0, 0, 1);
    const sm = S.summit;
    if (sm && sm.phase === 'lift') { updateLift(dt, ev); updateCamera(dt); return ev; }
    if (S.fall > 0) { // وكع: يطيح وبعدين يرجع لآخر استراحة
      S.fall += dt; p.vy -= 22 * dt; p.y += p.vy * dt; p.x += p.vx * dt * 0.5; p.z += p.vz * dt * 0.5; p.rot += dt * 7;
      if (S.fall > 1.25) respawn(ev);
      updateCamera(dt); return ev;
    }
    if (p.stun > 0) { p.stun -= dt; mag = 0; }
    const run = mag > 0.62 && !inp.sneak, target = mag < 0.08 ? 0 : run ? 5.6 : 2.3 * clamp(mag / 0.62, 0.4, 1);
    let wx = 0, wz = 0; if (sm && sm.wind > 0) { wx = sm.wdx * sm.wind * 1.6; wz = sm.wdz * sm.wind * 1.6; } // الريح تدفعك
    const ctrl = p.air ? 3 : 10, tg = p.air ? Math.max(target, p.airSpd || 0) : target; // بالهوا يحافظ على اندفاعة النطة
    p.vx = damp(p.vx, mx * tg + wx, ctrl, dt); p.vz = damp(p.vz, mz * tg + wz, ctrl, dt);
    if (inp.jump && !p.air && p.stun <= 0) { // النطة تدفعك لكدام (حتى تعبر اللوح الناقص)
      p.air = true; p.vy = 6.0; p.ground = p.y; ev.push('jump');
      const hs = Math.hypot(p.vx, p.vz); if (hs > 0.4 && hs < 3.4) { p.vx *= 3.4 / hs; p.vz *= 3.4 / hs; } p.airSpd = mag > 0.08 ? Math.max(3.4, hs) : 0;
    }
    let nx = p.x + p.vx * dt, nz = p.z + p.vz * dt;
    [nx, nz] = collide(nx, nz, 0.4);
    if (p.air) {
      p.vy -= 14 * dt; const ny = p.y + p.vy * dt;
      const s = surface(nx, nz, p.y, true);
      if (s.y != null && ny <= s.y && p.vy <= 0 && s.y - p.y < 0.9) {
        p.x = nx; p.z = nz; p.y = s.y; p.air = false; p.vy = 0; p.landT = 0.25; ev.push(s.kind === 'stone' ? 'landStone' : 'land');
        if (s.stone) { const d = Math.hypot(p.x - s.stone.x, p.z - s.stone.z), m = 0.35; if (d > m) { p.x = s.stone.x + ((p.x - s.stone.x) / d) * m; p.z = s.stone.z + ((p.z - s.stone.z) / d) * m; } p.vx *= 0.2; p.vz *= 0.2; }
      }
      else if (s.y == null && s.edge === 'wall') { p.y = ny; } // ما يطلع بالغابة: يبقى مكانه أفقياً
      else { p.x = nx; p.z = nz; p.y = ny; }
      if (p.air && p.y < p.ground - 1.6) { S.fall = 0.01; ev.push(['fall', s.water ? 'water' : 'drop']); }
    } else {
      const r = moveOnGround(p, nx, nz, ev);
      if (r && r.fall) { p.x = nx; p.z = nz; S.fall = 0.01; p.vy = 0; ev.push(['fall', r.water ? 'water' : 'drop']); }
      else if (r) { p.speed = Math.hypot(r.x - p.x, r.z - p.z) / dt; p.x = r.x; p.z = r.z; p.y = r.y; }
      else { p.speed = 0; p.vx *= 0.5; p.vz *= 0.5; }
    }
    p.run = run && p.speed > 3;
    if (p.speed > 0.3 && !p.air) p.face = dampAngle(p.face, Math.atan2(p.vz - wz, p.vx - wx), 12, dt);
    else if (p.air && Math.hypot(p.vx, p.vz) > 0.5) p.face = dampAngle(p.face, Math.atan2(p.vz, p.vx), 8, dt);
    const prev = p.hopPh; p.hopPh = p.speed < 0.3 || p.air ? 0 : p.hopPh + p.speed * dt * 2.1;
    if (p.hopPh && Math.floor(prev / Math.PI) !== Math.floor(p.hopPh / Math.PI)) ev.push(['step', p.run, surface(p.x, p.z, p.y).kind]);
    p.landT = Math.max(0, p.landT - dt);
    // نقاط الاستراحة
    checkpoints.forEach((c, i) => { if (i > S.cp && Math.hypot(p.x - c.x, p.z - c.z) < 3.2 && Math.abs(p.y - c.y) < 2.5) { S.cp = i; c.active = true; cpFlags[i].material.color.set('#FFD23F'); ev.push(['checkpoint', c.name, i]); } });
    // العملات
    for (const c of coins) if (!c.taken && Math.hypot(c.x - p.x, c.z - p.z) < 1.0 && Math.abs(c.y - (p.y + 0.6)) < 1.2) { c.taken = true; S.coinsGot++; ev.push(['coin', c]); }
    updateBeasts(dt, ev);
    // القمة
    if (!sm && Math.hypot(p.x, p.z) < RP - 1 && Math.abs(p.y - HS) < 1) { S.summit = { t: 0, phase: 'wait', wind: 0, wdx: 1, wdz: 0.3 }; S.phase = 'summit'; ev.push('summit'); }
    if (S.summit) updateSummitSeq(dt, ev);
    updateCamera(dt);
    return ev;
  }
  function collide(x, z, r) {
    for (const c of colliders) { const dx = x - c.x, dz = z - c.z, rr = r + c.r, d2 = dx * dx + dz * dz; if (d2 < rr * rr && d2 > 1e-8) { const d = Math.sqrt(d2), k = (rr - d) / d; x += dx * k; z += dz * k; } }
    return [x, z];
  }
  // ---- الحيوانات: تحوم بمكانها، تنتبه إذا قربت (أكثر إذا تركض)، تطاردك، وإذا لزمتك توكّعك
  function updateBeasts(dt, ev) {
    const p = S.p;
    for (const b of beasts) {
      b.t += dt; b.cool = Math.max(0, b.cool - dt);
      const dx = p.x - b.x, dz = p.z - b.z, d = Math.hypot(dx, dz), dy = Math.abs(p.y - b.y);
      const sense = p.run ? 14 : p.speed > 0.4 ? 9 : 5.5, wolf = b.kind === 'wolf';
      const go = (tx, tz, spd) => {
        const ax = tx - b.x, az = tz - b.z, l = Math.hypot(ax, az); if (l < 0.05) { b.vx = b.vz = 0; return l; }
        b.vx = damp(b.vx, (ax / l) * spd, 6, dt); b.vz = damp(b.vz, (az / l) * spd, 6, dt);
        const r = moveOnGround(b, b.x + b.vx * dt, b.z + b.vz * dt, ev, true);
        if (r) { b.x = r.x; b.z = r.z; b.y = r.y; } else { b.vx *= 0.3; b.vz *= 0.3; }
        b.face = dampAngle(b.face, Math.atan2(b.vz, b.vx), 8, dt); return l;
      };
      switch (b.state) {
        case 'idle':
          if (b.cool <= 0 && d < sense && dy < 3 && S.fall <= 0 && !S.summit) { b.state = 'notice'; b.t = 0; ev.push([wolf ? 'growl' : 'grunt', b]); break; }
          if (b.t > 3 + Math.random() * 3) { b.t = 0; const a = Math.random() * TAU; b.tx = b.home.x + Math.cos(a) * 5; b.tz = b.home.z + Math.sin(a) * 5; }
          if (Math.hypot(b.tx - b.x, b.tz - b.z) > 0.6) go(b.tx, b.tz, 1.0); else { b.vx = b.vz = 0; }
          break;
        case 'notice':
          b.vx = b.vz = 0; b.face = dampAngle(b.face, Math.atan2(dz, dx), 10, dt);
          if (b.t > (wolf ? 0.6 : 0.9)) { b.state = wolf ? 'chase' : 'charge'; b.t = 0; if (!wolf) { const l = d || 1; b.charge = [dx / l, dz / l]; } ev.push([wolf ? 'howl' : 'grunt', b]); }
          break;
        case 'chase':
          go(p.x, p.z, 4.7);
          if (d > 22 || b.t > 7 || Math.hypot(b.x - b.home.x, b.z - b.home.z) > 32) { b.state = 'return'; b.cool = 3; }
          break;
        case 'charge': { // الخنزير يركض خط مستقيم بسرعة
          const sp = 7.8, r = moveOnGround(b, b.x + b.charge[0] * sp * dt, b.z + b.charge[1] * sp * dt, ev, true);
          if (r) { b.x = r.x; b.z = r.z; b.y = r.y; b.vx = b.charge[0] * sp; b.vz = b.charge[1] * sp; b.face = Math.atan2(b.charge[1], b.charge[0]); }
          if (!r || b.t > 1.8) { b.vx = b.vz = 0; b.state = d < 12 && b.t < 6 ? 'notice' : 'return'; b.t = 0; }
          break;
        }
        case 'return':
          if (go(b.home.x, b.home.z, 2.2) < 1) { b.state = 'idle'; b.t = 0; }
          break;
      }
      if ((b.state === 'chase' || b.state === 'charge') && d < 0.95 && dy < 1.2 && p.stun <= 0 && S.fall <= 0) { // لزمك!
        const l = d || 1; p.vx = (dx / l) * 6; p.vz = (dz / l) * 6; p.stun = 0.9; p.landT = 0.3;
        b.state = 'return'; b.cool = 6; ev.push(['bitten', b.kind]);
      }
    }
  }
  // ---- القمة: انتظار وفعاليات ← الريح تقوى وتحرك كلشي ← تقلع البطل بس
  const WAIT = 45;
  function updateSummitSeq(dt, ev) {
    const sm = S.summit; sm.t += dt;
    if (sm.phase === 'wait' && sm.t >= WAIT) { sm.phase = 'wind'; sm.t = 0; ev.push('windStart'); }
    if (sm.phase === 'wind') {
      sm.wind = clamp(sm.t / 7, 0, 1); U.wind.value = sm.wind;
      if (sm.t > 8.5) { sm.phase = 'lift'; sm.t = 0; const p = S.p; sm.from = [p.x, p.y, p.z]; p.air = true; S.scope = false; ev.push('lift'); }
    }
  }
  function updateLift(dt, ev) {
    const sm = S.summit, p = S.p; sm.t += dt; U.wind.value = 1;
    const k = sm.t;
    p.x = sm.from[0] + sm.wdx * k * k * 2.2; p.z = sm.from[2] + sm.wdz * k * k * 2.2; p.y = sm.from[1] + k * k * 3.2 + Math.sin(k * 6) * 0.2;
    p.rot += dt * (4 + k * 3);
    if (k > 2.6 && !sm.done) { sm.done = true; ev.push('toValley'); }
  }
  function threats() { const out = []; for (const b of beasts) if (b.state === 'chase' || b.state === 'charge' || b.state === 'notice') out.push({ kind: b.kind, x: b.x, y: b.y, z: b.z, state: b.state }); return out; }
  function skipWait() { if (S.summit && S.summit.phase === 'wait') S.summit.t = WAIT; }
  function interact(id) {
    const p = S.p;
    if (id === 'bell') { fx.bell.v += 2.4; return true; }
    if (id === 'tea') { for (const n of npcs) if (n.kind === 'seller') { n.pour = 1.4; n.talk = 3; } return true; }
    if (id === 'chat') { const g = npcs.filter((n) => n.kind === 'tea'); g[Math.floor(Math.random() * g.length)].talk = 3; return true; }
    if (id === 'scope') { S.scope = !S.scope; cam.scopeYaw = 0.03; cam.scopePitch = -0.2; return true; }
    return true;
  }
  function nearInteract() {
    const p = S.p; if (!S.summit || S.summit.phase === 'lift') return null;
    let best = null, bd = 1e9;
    for (const it of inter) { const d = Math.hypot(p.x - it.x, p.z - it.z); if (d < it.r && d < bd) { bd = d; best = it; } }
    return best;
  }

  // ================================================================ الكاميرا (وراك، تلفها بإصبعك)
  let cgrid = null;
  const cam = { yaw: 0, pitch: 0.24, dist: 5.6, init: false, tgt: new Vector3(), pos: new Vector3() };
  const _ct = new Vector3(), _cp = new Vector3();
  function updateCamera(dt) {
    const p = S.p, lifting = S.summit && S.summit.phase === 'lift';
    if (S.scope) { // من التلسكوب: نباوع بعيد للوادي
      const ex = RP + 3.9 - 0.4, ey = HS + 1.45, yaw = cam.scopeYaw || 0, pt = cam.scopePitch || -0.2;
      cam.pos.set(ex, ey, 0); cam.tgt.set(ex + Math.cos(yaw) * 100 * Math.cos(pt), ey + Math.sin(pt) * 100, Math.sin(yaw) * 100 * Math.cos(pt)); return;
    }
    _ct.set(p.x, p.y + (lifting ? 0.6 : 1.45), p.z);
    const wantDist = lifting ? 7 : S.summit ? 6.4 : 5.6;
    if (!cam.init) { cam.tgt.copy(_ct); cam.dist = wantDist; cam.effPitch = null; cam.effDist = null; cam.init = true; }
    const k = S.fall > 0 ? 2 : 14;
    cam.tgt.x = damp(cam.tgt.x, _ct.x, k, dt); cam.tgt.z = damp(cam.tgt.z, _ct.z, k, dt); cam.tgt.y = damp(cam.tgt.y, _ct.y, S.fall > 0 ? 1.5 : 10, dt);
    cam.dist = damp(cam.dist, wantDist, 3, dt);
    if (!cgrid) { cgrid = new Map(); for (const c of colliders) if (c.tall) { const k = gk(Math.floor(c.x / 4), Math.floor(c.z / 4)); if (!cgrid.has(k)) cgrid.set(k, []); cgrid.get(k).push(c); } }
    const near = (x, z, f) => { const cx = Math.floor(x / 4), cz = Math.floor(z / 4); for (let i = -1; i <= 1; i++) for (let j = -1; j <= 1; j++) { const l = cgrid.get(gk(cx + i, cz + j)); if (l) for (const c of l) if (f(c)) return true; } return false; };
    const dir = (dd, pt) => _cp.set(cam.tgt.x - Math.cos(cam.yaw) * Math.cos(pt) * dd, cam.tgt.y + Math.sin(pt) * dd, cam.tgt.z - Math.sin(cam.yaw) * Math.cos(pt) * dd);
    /** وين ينسد الخط بين البطل والكاميرا (أرض أو تاج شجرة)؟ يرجّع النسبة، أو 0 إذا مفتوح */
    const blocked = (dd, pt) => {
      for (let i = 1; i <= 8; i++) {
        const kk = i / 8; dir(dd * kk, pt); const gy = H(_cp.x, _cp.z);
        if (_cp.y < gy + 0.4) return kk;
        if (i >= 2 && !S.summit && near(_cp.x, _cp.z, (c) => { const rr = c.r * 3.4, dx = _cp.x - c.x, dz = _cp.z - c.z; return dx * dx + dz * dz < rr * rr && _cp.y > gy + 1.9 && _cp.y < gy + 9; })) return kk;
      }
      return 0;
    };
    // إذا تاج شجرة يسد: أول شي ننزل الكاميرا تحت الأغصان، وإذا ما كفى نقرّبها
    let pitch = cam.pitch, dist = cam.dist, kb = blocked(dist, pitch);
    if (kb) { const low = Math.min(pitch, 0.04), kb2 = blocked(dist, low); if (!kb2 || kb2 > kb) { pitch = low; kb = kb2; } if (kb) dist = Math.max(1.8, dist * (kb - 1 / 8)); }
    cam.effPitch = cam.effPitch == null ? pitch : damp(cam.effPitch, pitch, pitch < cam.effPitch ? 8 : 2.5, dt);
    cam.effDist = cam.effDist == null ? dist : damp(cam.effDist, dist, dist < cam.effDist ? 10 : 2.5, dt);
    dir(Math.min(cam.effDist, dist + 0.6), cam.effPitch);
    near(_cp.x, _cp.z, (c) => { const dx = _cp.x - c.x, dz = _cp.z - c.z, d2 = dx * dx + dz * dz, rr = c.r + 0.35; if (d2 < rr * rr) { const d = Math.sqrt(d2) || 0.01; _cp.x = c.x + (dx / d) * rr; _cp.z = c.z + (dz / d) * rr; } return false; });
    const gh = H(_cp.x, _cp.z) + 0.4; if (_cp.y < gh) _cp.y = gh;
    cam.pos.copy(_cp);
  }
  function heading() { return ((cam.yaw * 180) / Math.PI % 360 + 360) % 360; }

  // ================================================================ الرسم
  let lastNow = 0, lastT = -1, slow = 0, frames = 0, pr = 2, cssW = 390, cssH = 844;
  const o3 = new Object3D(); o3.rotation.order = 'YXZ';
  function setSize(w, h, ratio) { cssW = w; cssH = h; pr = ratio; renderer.setPixelRatio(ratio); renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix(); }
  function animateHero(t, dt) {
    const p = S.p, h = hero, walk = !p.air && S.fall <= 0;
    const hop = walk ? Math.abs(Math.sin(p.hopPh)) * (p.run ? 0.17 : 0.08) : 0;
    h.root.position.set(p.x, p.y + hop, p.z);
    h.turn = dampAngle(h.turn, Math.PI / 2 - p.face, 14, dt); h.root.rotation.y = h.turn;
    h.inner.rotation.z = -p.rot; if (!(S.fall > 0) && !(S.summit && S.summit.phase === 'lift')) p.rot *= Math.pow(0.001, dt);
    let sq = p.landT > 0 ? p.landT * 2.4 : 0; if (p.air) sq = -0.12;
    if (walk && p.speed > 0.3) sq += (1 - Math.abs(Math.sin(p.hopPh))) * 0.22 - 0.07;
    h.inner.scale.set(1 + 0.2 * sq, 1 - 0.22 * sq, 1 + 0.2 * sq); h.inner.position.y = 0.55 * (1 - 0.22 * sq);
    for (const [i, f] of h.feet.entries()) f.position.y = -0.49 + (walk && p.speed > 0.3 ? Math.max(0, Math.sin(p.hopPh * 2 + i * Math.PI)) * 0.06 : 0);
    const scared = S.fall > 0 || p.stun > 0 || (S.summit && (S.summit.phase === 'lift' || S.summit.wind > 0.5));
    h.nextBlink -= dt; if (h.nextBlink < 0) { h.blink = 0.14; h.nextBlink = 2.5 + Math.random() * 2.5; } h.blink = Math.max(0, h.blink - dt);
    for (const e of h.eyes) e.scale.set(scared ? 1.08 : 1, scared ? 1.15 : h.blink > 0 ? 0.12 : 1, 1);
    for (const pp of h.pupils) pp.scale.setScalar(scared ? 0.72 : 1);
    h.smile.visible = !scared; h.ooh.visible = scared;
    if (h.acc.userData.star) h.acc.userData.star.rotation.y = t * 2;
    if (h.fire) { h.bodyMat.emissiveIntensity = 0.5 + Math.sin(t * 13) * 0.1; for (const f of h.flames) f.scale.set(1, 0.8 + Math.sin(t * 14 + f.userData.ph * 1.7) * 0.25, 1); }
    h.chute.visible = false; h.drop.visible = false; h.rope.visible = false;
  }
  function animateBeasts(t, dt) {
    for (const b of beasts) {
      const m = b.m, moving = Math.hypot(b.vx, b.vz) > 0.3, fast = b.state === 'chase' || b.state === 'charge';
      b.ph += dt * (fast ? 16 : moving ? 8 : 0);
      m.root.position.set(b.x, b.y, b.z); m.yaw = dampAngle(m.yaw, -b.face, 10, dt); m.root.rotation.y = m.yaw;
      m.body.position.y = moving ? Math.abs(Math.sin(b.ph)) * (fast ? 0.06 : 0.02) : 0;
      m.head.rotation.z = b.state === 'notice' ? -0.25 + Math.sin(t * 20) * 0.04 : moving ? -0.1 : Math.sin(t * 1.3) * 0.15 - 0.2;
      m.tail.rotation.z = (b.kind === 'wolf' ? 0.9 : 0.4) + (fast ? 0.5 : 0) + Math.sin(t * (fast ? 14 : 3)) * 0.15;
      for (const L of m.legs) { const off = L.front ? (L.s > 0 ? 0 : Math.PI) : (L.s > 0 ? Math.PI : 0) + (fast ? 0.6 : 0); if (moving) { L.hip.rotation.z = Math.sin(b.ph + off) * (fast ? 0.7 : 0.4); L.knee.rotation.z = (L.front ? -1 : 1) * Math.max(0, -Math.cos(b.ph + off)) * 0.5; } else { L.hip.rotation.z = damp(L.hip.rotation.z, 0, 8, dt); L.knee.rotation.z = damp(L.knee.rotation.z, 0, 8, dt); } }
    }
  }
  function animatePlaza(t, dt) {
    const sm = S.summit, w = sm ? sm.wind : 0, lift = sm && sm.phase === 'lift';
    const W = lift ? 1 : w;
    // العلم يرفرف (أقوى ويه الريح)
    const fp = fx.flag.geometry.attributes.position, base = fx.flagBase;
    for (let i = 0; i < fp.count; i++) { const x = base[i * 3], y = base[i * 3 + 1], k = x / 3.2; fp.setXYZ(i, x * (1 - W * 0.05), y - k * k * 0.25 * (1 - W), Math.sin(t * (4 + W * 12) - x * (1.6 + W * 1.5)) * k * (0.18 + W * 0.42) + Math.sin(t * 7 + y * 3) * 0.04 * k); }
    fp.needsUpdate = true; fx.flag.geometry.computeVertexNormals(); fx.flag.rotation.y = -0.3 * W;
    // الجرس
    const b = fx.bell; b.v += (-b.swing * 18 - b.v * 1.4) * dt; b.swing += b.v * dt; b.g.rotation.x = b.swing + W * 0.25 * Math.sin(t * 6);
    for (const l of fx.lanterns) { l.rotation.z = Math.sin(t * (1.6 + W * 8) + l.position.x) * (0.06 + W * 0.45); l.rotation.x = Math.cos(t * (1.3 + W * 7)) * W * 0.3; }
    // قطرات النافورة (الريح تطيّرها)
    const dp = fx.drops.geometry.attributes.position, ds = fx.drops.userData.seed;
    for (let i = 0; i < ds.length; i++) { const [a, ph, sp] = ds[i], k = (t * sp * 0.9 + ph) % 1, r = 0.15 + k * 1.6; dp.setXYZ(i, Math.cos(a) * r + W * k * 3.5, 2.35 + Math.sin(k * Math.PI) * 0.7 - k * 1.8, Math.sin(a) * r + W * k * 1.2); }
    dp.needsUpdate = true; waterN.offset.x = t * 0.03; fx.water.material.normalScale.set(0.6 + W, 0.6 + W);
    // خطوط الريح
    const sp = fx.streaks.geometry.attributes.position, ss = fx.streaks.userData.seed; fx.streaks.material.opacity = smooth(0.15, 0.8, W) * 0.55;
    for (let i = 0; i < ss.length; i++) { const [x0, y0, z0, sp0] = ss[i], k = (t * sp0 * (0.6 + W * 1.6) + i * 0.137) % 1, x = -30 + k * 60, len = 1.5 + W * 3.5, z = z0 + Math.sin(t * 2 + i) * 0.6, y = y0 + Math.sin(k * 9 + i) * 0.4; sp.setXYZ(i * 2, x, y, z + k * 12 - 6); sp.setXYZ(i * 2 + 1, x - len, y + 0.05, z + k * 12 - 6 - len * 0.3); }
    sp.needsUpdate = true;
    // ورق طاير ويه الريح
    const lp = fx.leaves.geometry.attributes.position, ls = fx.leaves.userData.seed; fx.leaves.material.opacity = W * 0.9;
    for (let i = 0; i < ls.length; i++) { const [x0, y0, z0, ph] = ls[i], k = (t * (0.5 + ph) * (0.4 + W)) % 1; lp.setXYZ(i, ((x0 + k * 70) % 60) - 30, y0 * 0.6 + 0.4 + Math.sin(t * 3 + i) * 0.5, z0 + Math.sin(t + ph * 6) * 2 + k * 20 * 0.3); }
    lp.needsUpdate = true;
    // الناس: يتنفسون، يباوعون، ويمسكون شماغهم ويه الريح
    for (const n of npcs) {
      const m = n.m, [Lt, Rt] = m.arms, k = 1 - Math.exp(-6 * dt);
      m.root.scale.y = 1 + Math.sin(t * 1.6 + n.base.x) * 0.006;
      m.root.rotation.x = -W * 0.14 + Math.sin(t * 9 + n.base.x) * W * 0.03; // يميل ضد الريح
      let lsx = 0, lsz = -0.12, lel = -0.25, rsx = 0, rsz = 0.12, rel = -0.25;
      if (W > 0.25) { lsx = -2.4; lsz = 0; lel = -1.3; } // ماسك شماغه
      if (n.kind === 'seller') { rsx = -0.5 + Math.sin(t * 2) * 0.1; rel = -1.2; if (n.pour > 0) { n.pour -= dt; rsx = -1.0; rel = -0.6; } }
      else if (n.kind === 'tea') { const sip = Math.max(0, Math.sin(t * 0.5 + n.ph)) ** 8; rsx = -0.45 - sip * 0.7; rel = -1.25 - sip * 0.9; }
      else if (n.kind === 'stand') { lsx = W > 0.25 ? lsx : -0.2; rsx = -0.15 + Math.sin(t * 1.1) * 0.25 * (n.talk > 0 ? 1 : 0.3); rel = -0.6; }
      Lt.sh.rotation.x += (lsx - Lt.sh.rotation.x) * k; Lt.sh.rotation.z += (lsz - Lt.sh.rotation.z) * k; Lt.el.rotation.x += (lel - Lt.el.rotation.x) * k;
      Rt.sh.rotation.x += (rsx - Rt.sh.rotation.x) * k; Rt.sh.rotation.z += (rsz - Rt.sh.rotation.z) * k; Rt.el.rotation.x += (rel - Rt.el.rotation.x) * k;
      m.mouth.scale.y = n.talk > 0 ? 0.25 + Math.abs(Math.sin(t * 15)) * 0.9 : 0.3; if (n.talk > 0) n.talk -= dt;
    }
    for (const c of fx.cups) c.position.x += W * dt * 0.05 * Math.sin(t * 13 + c.position.z * 20);
    fx.kiosk.children[0].rotation.z = W * 0.01 * Math.sin(t * 17);
  }
  function render(t, opts = {}) {
    const now = performance.now(), rdt = lastNow ? clamp((now - lastNow) / 1000, 0, 0.1) : 1 / 60; lastNow = now;
    const dt = lastT >= 0 ? clamp(t - lastT, 0, 0.1) : 1 / 60; lastT = t;
    U.time.value = t;
    frames++; slow = slow * 0.97 + (rdt > 1 / 38 ? 1 : 0) * 0.03;
    if (frames > 90 && slow > 0.6 && pr > 1.01) { setSize(cssW, cssH, Math.max(1, pr - 0.25)); slow = 0; frames = 0; }
    if (!hero || !S.p) return;
    animateHero(t, dt); animateBeasts(t, dt);
    if (Math.hypot(S.p.x, S.p.z) < 60 || S.scope) animatePlaza(t, dt);
    let n = 0;
    for (let i = 0; i < coins.length; i++) { const c = coins[i]; if (c.taken) continue; if ((c.x - S.p.x) ** 2 + (c.z - S.p.z) ** 2 > 3600) continue; o3.position.set(c.x, c.y + Math.sin(t * 2 + i) * 0.08, c.z); o3.rotation.set(Math.PI / 2, t * 3 + i, 0); o3.scale.setScalar(1); o3.updateMatrix(); coinMesh.setMatrixAt(n++, o3.matrix); }
    coinMesh.count = n; coinMesh.instanceMatrix.needsUpdate = true;
    cpFlags.forEach((f, i) => { f.rotation.y = Math.sin(t * 2 + i) * 0.3; });
    clouds.rotation.y = t * 0.003; clouds.visible = S.p.y > 30 || S.scope;
    // الضباب: كثيف بالغابة، ويصفى كل ما تصعد للقمة
    const alt = smooth(55, 90, S.p.y);
    scene.fog.near = lerp(20, 90, alt); scene.fog.far = S.scope ? 1500 : lerp(115, 700, alt);
    fx.scope.visible = !S.scope; camera.fov = S.scope ? 13 : 62; camera.updateProjectionMatrix();
    camera.position.copy(cam.pos); camera.lookAt(cam.tgt);
    if (opts.shake > 0) { const m = opts.shake * 0.25; camera.position.x += (Math.random() - 0.5) * m; camera.position.y += (Math.random() - 0.5) * m; }
    sky.position.copy(camera.position);
    for (const c of chunks) {
      const d2 = (c.x - camera.position.x) ** 2 + (c.z - camera.position.z) ** 2, vis = d2 < (c.far + (S.scope ? 400 : 0) + alt * 110) ** 2;
      if (c.lo) { const near = d2 < 62 * 62 && !S.scope; c.m.visible = vis && near; c.lo.visible = vis && !near; } else c.m.visible = vis;
    }
    const sx = Math.round(S.p.x / 0.25) * 0.25, sz = Math.round(S.p.z / 0.25) * 0.25;
    sun.target.position.set(sx, S.p.y, sz); sun.position.set(sx + SUN.x * 80, S.p.y + SUN.y * 80, sz + SUN.z * 80);
    renderer.render(scene, camera);
  }
  const _p = new Vector3();
  function project(x, y, z) { _p.set(x, y, z).project(camera); return { x: (_p.x + 1) / 2, y: (1 - _p.y) / 2, vis: _p.z < 1 && _p.z > -1 }; }
  function talkNpc(kind, sec = 3) { for (const n of npcs) if (n.kind === kind) n.talk = sec; }
  return {
    setSize, enter, step, render, project, heading, interact, nearInteract, skipWait, talkNpc, threats, ground: H, surface, S, cam, U,
    info: { RP, HS, checkpoints, coins, segs, stones, bridges, beasts, trailLen: Math.round(ALL.length * 0.8), area: Math.round(Math.PI * RP * RP) },
    renderer, scene, camera, get pr() { return pr; },
  };
}
