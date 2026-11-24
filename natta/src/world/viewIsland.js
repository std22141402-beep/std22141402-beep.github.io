// 🎨 نطّة — رسم الجزيرة: أرض تتحمّل حوالين الكاميرا (32 م ← 8 م ← 2 م)، شجر بمقاسات حقيقية بثلث درجات تفاصيل،
// البحر والبحيرة والهور والأنهار والشلالات، المباني (بيوت طين، أكواخ، مضيف قصب، منارة، حصن)، ساحة الفجر، نيران الاستراحة، وصورة الخريطة.
import {
  Mesh, Group, InstancedMesh, Object3D, Vector3, Color, BufferGeometry, BufferAttribute, PlaneGeometry, CircleGeometry, CylinderGeometry, ConeGeometry,
  IcosahedronGeometry, DodecahedronGeometry, BoxGeometry, SphereGeometry, TubeGeometry, TorusGeometry, CatmullRomCurve3, MeshLambertMaterial, MeshPhongMaterial, MeshBasicMaterial, Sprite, SpriteMaterial,
  AdditiveBlending, DoubleSide, RepeatWrapping,
} from 'three';
import { TAU, clamp, lerp, smooth, rng, hash2, vnoise, fbm, paint, tf, merge, mix, canvasTex, swayMat, seeThroughMat, palmGeo, bushGeo, rockGeo, reedGeo, tuftGeo, makeMan } from '../lib3d.js';

const K1 = new Color(), K2 = new Color(), K3 = new Color(), KO = new Color(); // KO = لون الناتج (منفصل عن المؤقتات)
const mixK = (out, a, b, t) => out.copy(K1.set(a)).lerp(K2.set(b), clamp(t, 0, 1));

export function createIslandView({ scene, G, U, camera, waterN, glowTex, colorBase, S }) {
  const I = G.I, SEA = G.SEA, M = G.M, HALF = G.HALF;
  const matVC = new MeshLambertMaterial({ vertexColors: true });
  const matFlat = new MeshLambertMaterial({ vertexColors: true, flatShading: true });
  const matSeeFlat = seeThroughMat(matFlat, U);
  const o3 = new Object3D(), col = new Color();

  // ================================================================ ألوان الأرض (حسب المكان والارتفاع والميل)
  function colorIsland(x, y, z, sl, out, lod) {
    const a = y - SEA;
    if (a < 0.4) { mixK(out, '#D9C99A', '#3C7C88', -a / 5); if (a < -5) out.lerp(K3.set('#1E4C69'), clamp((-a - 5) / 22, 0, 1)); return out; }
    mixK(out, '#5C973C', '#9CC45A', fbm(x * 0.02 + 9, z * 0.02) * 1.2 - 0.1);
    out.lerp(K3.set('#B5AE68'), smooth(0.55, 0.8, vnoise(x * 0.008 + 3, z * 0.008)) * 0.42);
    const s = I.coastS(x, z);
    if (lod > 0) { const fl = I.flora(x, z, a, s, sl); out.lerp(K3.set('#3D6629'), clamp(fl.t, 0, 0.9) * 0.6); if (fl.reed > 0.3) out.lerp(K3.set('#6F7E3E'), 0.6); }
    else out.lerp(K3.set('#3D6629'), smooth(0.44, 0.62, fbm(x * 0.0032 + 5, z * 0.0032 - 3)) * 0.45);
    out.lerp(K3.set('#8D8A70'), smooth(300, 390, a) * 0.45);
    const wd = Math.hypot(x + 1500, z + 1650); if (wd < 520) { mixK(K3, '#D2AE52', '#E6CB72', vnoise(x * 0.5, 0) * 0.5 + 0.5 * Math.sin(x * 0.9 + z * 0.15) ** 2); out.lerp(K3, smooth(520, 380, wd) * 0.85); } // سهل السنابل
    if (s < 160 && a < 4.5) out.lerp(K3.set('#E4D3A0'), smooth(4.5, 1.6, a));
    if (sl > 0.72) { const dark = I.peaks.some((p) => p.dark && Math.hypot(x - p.x, z - p.z) < p.r); mixK(K3, dark ? '#3E3A37' : '#6C665C', dark ? '#6A645E' : '#ADA595', vnoise(x * 0.2, y * 0.6)); out.lerp(K3, smooth(0.72, 1.1, sl)); }
    if (lod > 0) {
      const rd = I.nearRoad(x, z); if (rd && rd.d < rd.hw + 1.2) out.lerp(K3.set(lod > 1 ? '#A88A5E' : '#9E8A62'), smooth(rd.hw + 1.2, rd.hw - 0.3, rd.d) * 0.9);
      const rv = I.nearRiver(x, z); if (rv && rv.d < rv.w + 2.5) out.lerp(K3.set('#857A55'), smooth(rv.w + 2.5, rv.w, rv.d) * 0.7);
    }
    return out;
  }

  // ================================================================ الأرض: شجرة قطع (تتقسّم كل ما تقرب)
  const LV = [{ size: 1024, split: 760 }, { size: 256, split: 170 }, { size: 64, split: 0 }], NSEG = 32, X0 = -4608; // نفس التفاصيل (32/8/2 م) بقطع أقل (رسمات أقل للآيفون)
  const tiles = new Map(); // key → { lv, i, j, mesh, x, z }
  const tkey = (lv, i, j) => lv * 1e8 + (i + 5000) * 1e4 + (j + 5000);
  const tmat = matVC;
  function buildTile(lv, i, j) {
    const size = LV[lv].size, step = size / NSEG, x0 = X0 + i * size, z0 = X0 + j * size, n = NSEG + 1, ext = n + 2;
    const Hs = new Float32Array(ext * ext);
    for (let b = 0; b < ext; b++) for (let a = 0; a < ext; a++) Hs[b * ext + a] = G.H(x0 + (a - 1) * step, z0 + (b - 1) * step);
    const hAt = (a, b) => Hs[(b + 1) * ext + (a + 1)];
    const pos = new Float32Array((n * n + 4 * NSEG) * 3), nor = new Float32Array(pos.length), col = new Float32Array(pos.length), idx = [];
    let v = 0;
    for (let b = 0; b < n; b++) for (let a = 0; a < n; a++) {
      const x = x0 + a * step, z = z0 + b * step, y = hAt(a, b);
      const gx = (hAt(a + 1, b) - hAt(a - 1, b)) / (2 * step), gz = (hAt(a, b + 1) - hAt(a, b - 1)) / (2 * step), sl = Math.hypot(gx, gz), nl = Math.hypot(gx, 1, gz);
      pos[v * 3] = x; pos[v * 3 + 1] = y; pos[v * 3 + 2] = z; nor[v * 3] = -gx / nl; nor[v * 3 + 1] = 1 / nl; nor[v * 3 + 2] = -gz / nl;
      if (!colorBase(x, y, z, sl, KO, lv)) colorIsland(x, y, z, sl, KO, lv); col[v * 3] = KO.r; col[v * 3 + 1] = KO.g; col[v * 3 + 2] = KO.b; v++;
      if (a < n - 1 && b < n - 1) { const q = b * n + a; idx.push(q, q + n, q + 1, q + 1, q + n, q + n + 1); }
    }
    const ring = []; for (let a = 0; a < n; a++) ring.push(a); for (let b = 1; b < n; b++) ring.push(b * n + n - 1); for (let a = n - 2; a >= 0; a--) ring.push((n - 1) * n + a); for (let b = n - 2; b > 0; b--) ring.push(b * n);
    const base = v, drop = step * 0.9 + 1;
    for (const r of ring) { pos[v * 3] = pos[r * 3]; pos[v * 3 + 1] = pos[r * 3 + 1] - drop; pos[v * 3 + 2] = pos[r * 3 + 2]; for (let k = 0; k < 3; k++) { nor[v * 3 + k] = nor[r * 3 + k]; col[v * 3 + k] = col[r * 3 + k]; } v++; }
    for (let k = 0; k < ring.length; k++) { const a = ring[k], b = ring[(k + 1) % ring.length], c = base + k, d = base + ((k + 1) % ring.length); idx.push(a, c, b, b, c, d, a, b, c, b, d, c); }
    const g = new BufferGeometry(); g.setAttribute('position', new BufferAttribute(pos, 3)); g.setAttribute('normal', new BufferAttribute(nor, 3)); g.setAttribute('color', new BufferAttribute(col, 3)); g.setIndex(idx); g.computeBoundingSphere();
    const m = new Mesh(g, tmat); m.receiveShadow = true; m.matrixAutoUpdate = false; m.visible = false; scene.add(m);
    return m;
  }
  const deepSea = (i, j) => { const s = LV[0].size, x0 = X0 + i * s, z0 = X0 + j * s; for (let a = 0; a <= 4; a++) for (let b = 0; b <= 4; b++) if (I.coastS(x0 + (a / 4) * s, z0 + (b / 4) * s) > -650) return false; return true; };
  const roots = []; for (let i = 0; i < 9; i++) for (let j = 0; j < 9; j++) if (!deepSea(i, j)) roots.push({ lv: 0, i, j });
  const want = []; // قطع لازم تنبني (بالأولوية)
  function tileOf(lv, i, j) { const k = tkey(lv, i, j); let t = tiles.get(k); if (!t) { t = { lv, i, j, mesh: null, x: X0 + (i + 0.5) * LV[lv].size, z: X0 + (j + 0.5) * LV[lv].size, used: frameNo }; tiles.set(k, t); } return t; }
  const rectDist = (t, cx, cz) => { const h = LV[t.lv].size / 2; return Math.hypot(Math.max(0, Math.abs(cx - t.x) - h), Math.max(0, Math.abs(cz - t.z) - h)); };
  let frameNo = 0;
  /** نختار شنو ينرسم: القطعة القريبة تتقسّم لـ 16 أصغر بس إذا كلهن جاهزات */
  function selectTerrain(cx, cz, cy) {
    frameNo++; want.length = 0;
    const lift = Math.max(0, cy - SEA - 60) * 1.4; // من فوك القمة: تفاصيل أوسع
    const visit = (t) => {
      t.used = frameNo;
      if (!t.mesh) { want.push(t); return false; }
      const d = rectDist(t, cx, cz), sp = LV[t.lv].split + (t.lv === 0 ? lift : lift * 0.15);
      if (t.lv < 2 && d < sp) {
        const kids = [], n = 4; let ready = true;
        for (let a = 0; a < n; a++) for (let b = 0; b < n; b++) { const k = tileOf(t.lv + 1, t.i * n + a, t.j * n + b); kids.push(k); if (!k.mesh) { ready = false; want.push(k); k.used = frameNo; } }
        if (ready) { t.mesh.visible = false; for (const k of kids) visit(k); return true; }
      }
      t.mesh.visible = true; return true;
    };
    for (const r of roots) visit(tileOf(r.lv, r.i, r.j));
    for (const t of tiles.values()) if (t.used !== frameNo && t.mesh) { t.mesh.visible = false; const d = rectDist(t, cx, cz); if (frameNo - t.used > 120 && ((t.lv === 2 && d > 420) || (t.lv === 1 && d > 1700))) { scene.remove(t.mesh); t.mesh.geometry.dispose(); t.mesh = null; tiles.delete(tkey(t.lv, t.i, t.j)); } }
    want.sort((a, b) => (a.lv === 0 ? -1e6 : 0) + rectDist(a, cx, cz) / (a.lv + 1) - ((b.lv === 0 ? -1e6 : 0) + rectDist(b, cx, cz) / (b.lv + 1)));
  }
  for (const r of roots) { const t = tileOf(0, r.i, r.j); t.mesh = buildTile(0, r.i, r.j); }
  function buildSome(budget) { const t0 = performance.now(); let n = 0; while (want.length && (performance.now() - t0 < budget || n === 0)) { const t = want.shift(); if (!t.mesh) { t.mesh = buildTile(t.lv, t.i, t.j); n++; } } return want.length; }

  // ================================================================ 🌲 الشجر بمقاسات حقيقية
  const pineReal = (seed, dark) => {
    const r = rng(seed), Ht = 18, parts = [paint(tf(new CylinderGeometry(0.2, 0.36, Ht * 0.9, 7), 0, Ht * 0.45, 0), '#5B3F27')];
    for (let i = 0; i < 5; i++) {
      const k = i / 4, y = lerp(5.4, Ht - 2.6, k), w = lerp(3.3, 1.0, k) * (0.9 + r() * 0.2), hh = lerp(4.3, 3.0, k);
      parts.push(tf(paint(new ConeGeometry(w, hh, 7, 1), (c, x, yy, zz) => mix(c, dark ? '#1B4226' : '#214F2C', dark ? '#3A7538' : '#4C8C44', 0.3 + (yy / hh + 0.5) * 0.5 + (hash2(x * 7, zz * 7) - 0.5) * 0.2)), (r() - 0.5) * 0.2, y + hh * 0.3, (r() - 0.5) * 0.2, 0, r() * 3, 0));
    }
    return merge(parts);
  };
  const oakReal = (seed) => {
    const r = rng(seed), parts = [paint(tf(new CylinderGeometry(0.3, 0.5, 6, 7), 0, 3, 0), '#5E4630')];
    for (const [bx, bz] of [[1, 0.3], [-0.8, 0.7], [0.2, -1]]) parts.push(paint(tf(new CylinderGeometry(0.1, 0.2, 3.4, 5), bx * 0.9, 6.2, bz * 0.9, bz * 0.5, 0, -bx * 0.5), '#5E4630'));
    for (let i = 0; i < 6; i++) { const a = (i / 6) * TAU + r(), rr = i ? 2.6 + r() * 0.8 : 3.2; parts.push(tf(paint(new IcosahedronGeometry(rr, 0), (c, x, y, z) => mix(c, '#2D5E2A', '#6FA349', 0.35 + y / rr * 0.4 + (hash2(x * 3, z * 3) - 0.5) * 0.3)), i ? Math.cos(a) * 2.8 : 0, i ? 8 + r() * 2.5 : 10.5, i ? Math.sin(a) * 2.8 : 0, 0, 0, 0, 1, 0.8, 1)); }
    return merge(parts);
  };
  const oliveReal = (seed) => {
    const r = rng(seed), parts = [paint(tf(new CylinderGeometry(0.16, 0.3, 2.2, 6), 0, 1.1, 0, 0.12, 0, 0.08), '#6B5640')];
    for (let i = 0; i < 5; i++) { const a = (i / 5) * TAU + r(); parts.push(tf(paint(new IcosahedronGeometry(1.4 + r() * 0.4, 0), (c, x, y) => mix(c, '#5F7A4F', '#A6B98A', 0.4 + y * 0.3)), Math.cos(a) * 1.2, 3.2 + r() * 0.9, Math.sin(a) * 1.2, 0, 0, 0, 1, 0.65, 1)); }
    return merge(parts);
  };
  const boulderGeo = () => paint(new DodecahedronGeometry(1, 0), (c, x, y, z) => mix(c, '#7A746A', '#B9B2A2', 0.4 + y * 0.5 + (hash2(x * 5, z * 5) - 0.5) * 0.35));
  const NEAR = {
    pine: [pineReal(5, false)], oak: [oakReal(7)], palm: [palmGeo(rng(3), 1.1, 9)], olive: [oliveReal(9)],
    bush: [bushGeo()], rock: [rockGeo()], boulder: [boulderGeo()], reed: [reedGeo()],
  };
  const SCALE = { pine: 1, oak: 1, palm: 2.4, olive: 1, bush: 1.7, rock: 1.3, boulder: 1, reed: 2.4 };
  const TINT = { pine: 0.22, oak: 0.18, palm: 0.12, olive: 0.12, bush: 0.2 }; // كل شجرة لونها يختلف شوية
  const nearMat = {
    pine: swayMat(new MeshLambertMaterial({ vertexColors: true, flatShading: true }), 0.0012, 5, U), oak: swayMat(new MeshLambertMaterial({ vertexColors: true, flatShading: true }), 0.0016, 5, U),
    palm: swayMat(new MeshLambertMaterial({ vertexColors: true, side: DoubleSide }), 0.003, 9, U), olive: swayMat(new MeshLambertMaterial({ vertexColors: true, flatShading: true }), 0.004, 2, U),
    bush: matSeeFlat, rock: matFlat, boulder: matFlat, reed: swayMat(new MeshLambertMaterial({ vertexColors: true }), 0.09, 0.2, U),
  };
  // درجة وسطى (لحد 600 م) وبعيدة (لحد 1400 م)
  const midGeo = {
    pine: merge([paint(tf(new CylinderGeometry(0.25, 0.35, 6, 4), 0, 3, 0), '#4B3520'), paint(tf(new ConeGeometry(3.4, 13.5, 5, 1), 0, 11.2, 0), (c, x, y) => mix(c, '#1F4A2A', '#3E7A3A', y / 13.5 + 0.5))]),
    oak: merge([paint(tf(new CylinderGeometry(0.3, 0.45, 6, 4), 0, 3, 0), '#4B3520'), paint(tf(new IcosahedronGeometry(4.6, 0), 0, 9.6, 0, 0, 0, 0, 1, 0.72, 1), (c, x, y) => mix(c, '#2B5A28', '#5E9443', y / 4 + 0.5))]),
    palm: merge([paint(tf(new CylinderGeometry(0.12, 0.17, 5.5, 4), 0, 2.75, 0), '#8B6A3E'), paint(tf(new IcosahedronGeometry(1.25, 0), 0, 5.6, 0, 0, 0, 0, 1, 0.42, 1), '#3F8A36')]),
    olive: paint(tf(new IcosahedronGeometry(2.4, 0), 0, 3.5, 0, 0, 0, 0, 1, 0.7, 1), '#7C9467'),
  };
  const farGeo = paint(tf(new ConeGeometry(0.5, 1, 5, 1), 0, 0.5, 0), (c, x, y) => mix(c, '#BFBFBF', '#FFFFFF', y));
  const FARS = { pine: [6.6, 15, 4, '#24502C'], oak: [9.5, 9, 4.5, '#355F2C'], palm: [5, 3.5, 11, '#3C7B34'], olive: [4.6, 3.6, 1.8, '#6E8A5E'] };
  const lodMat = new MeshLambertMaterial({ vertexColors: true, flatShading: true });
  const CAP_MID = 26000, CAP_FAR = 90000;
  const mid = {}; for (const t of Object.keys(midGeo)) { const im = new InstancedMesh(midGeo[t], lodMat, CAP_MID); im.count = 0; im.frustumCulled = false; im.receiveShadow = true; scene.add(im); mid[t] = im; }
  const far = new InstancedMesh(farGeo, lodMat, CAP_FAR); far.count = 0; far.frustumCulled = false; scene.add(far);
  const NEAR_R = 130, MID_R = 480, FAR_R = 1400, NC = 128; // قطعة القريب 128 م
  const nearChunks = new Map(); // key → { group, x, z }
  const cellsPer = NC / G.VC;
  const spiral = []; { const R = Math.ceil(FAR_R / G.VC); for (let i = -R; i <= R; i++) for (let j = -R; j <= R; j++) { const d = Math.hypot(i, j) * G.VC; if (d <= FAR_R + G.VC) spiral.push([i, j, d]); } spiral.sort((a, b) => a[2] - b[2]); }
  let genCur = 0, genAt = null, refillAt = null, newCells = 0, lastRefill = -1;
  const known = new Set();
  function genCells(cx, cz, budget) {
    const ci = Math.floor(cx / G.VC), cj = Math.floor(cz / G.VC);
    if (!genAt || genAt[0] !== ci || genAt[1] !== cj) { genAt = [ci, cj]; genCur = 0; }
    const t0 = performance.now();
    while (genCur < spiral.length && performance.now() - t0 < budget) {
      const [i, j] = spiral[genCur++], k = (ci + i) * 100003 + (cj + j);
      if (known.has(k)) continue;
      G.vegCell(ci + i, cj + j); known.add(k); newCells++;
    }
    if (known.size > 9000) { for (const k of known) { known.delete(k); if (known.size < 6000) break; } } // ذاكرة
  }
  function buildNear(ci, cj) { // ci, cj: إحداثيات قطعة 128 م
    const by = {};
    for (let a = 0; a < cellsPer; a++) for (let b = 0; b < cellsPer; b++) for (const it of G.vegCell(ci * cellsPer + a, cj * cellsPer + b).items) (by[it.t] = by[it.t] || []).push(it);
    const grp = new Group();
    for (const [t, list] of Object.entries(by)) {
      const vars = NEAR[t]; if (!vars) continue;
      vars.forEach((geo, vi) => {
        const items = list.filter((_, n) => n % vars.length === vi); if (!items.length) return;
        const im = new InstancedMesh(geo, nearMat[t], items.length);
        items.forEach((it, n) => { o3.position.set(it.x, it.y, it.z); o3.rotation.set(it.rx || 0, it.ry || 0, it.rz || 0); o3.scale.setScalar((it.s || 1) * SCALE[t]); o3.updateMatrix(); im.setMatrixAt(n, o3.matrix); if (TINT[t]) im.setColorAt(n, col.setScalar(1).offsetHSL(0, 0, (hash2(it.x, it.z) - 0.5) * TINT[t])); });
        im.castShadow = t !== 'reed' && t !== 'rock'; im.receiveShadow = true; im.computeBoundingSphere(); grp.add(im);
      });
    }
    scene.add(grp); return grp;
  }
  function updateVeg(cx, cz, budget, genBudget = budget * 0.5) {
    const t0 = performance.now();
    genCells(cx, cz, genBudget);
    // القريب
    const ci = Math.floor(cx / NC), cj = Math.floor(cz / NC), need = new Set();
    for (let a = -2; a <= 2; a++) for (let b = -2; b <= 2; b++) { const x = (ci + a + 0.5) * NC, z = (cj + b + 0.5) * NC; if (Math.hypot(Math.max(0, Math.abs(cx - x) - NC / 2), Math.max(0, Math.abs(cz - z) - NC / 2)) < NEAR_R) need.add((ci + a) * 100003 + (cj + b)); }
    let changed = false;
    for (const [k, c] of nearChunks) if (!need.has(k)) { scene.remove(c.group); c.group.children.forEach((m) => m.dispose && m.dispose()); nearChunks.delete(k); changed = true; }
    for (const k of need) if (!nearChunks.has(k) && performance.now() - t0 < budget) { const i = Math.round(k / 100003), j = k - i * 100003; nearChunks.set(k, { group: buildNear(i, j) }); changed = true; }
    // الوسط والبعيد: نعيد ملي القوائم إذا تحرّكت أو تولّدت خلايا جديدة
    const moved = !refillAt || Math.hypot(cx - refillAt[0], cz - refillAt[1]) > 24;
    if ((moved || changed || newCells > 60) && performance.now() - lastRefill > 350) refill(cx, cz);
  }
  function refill(cx, cz) {
    refillAt = [cx, cz]; newCells = 0; lastRefill = performance.now();
    const n = { pine: 0, oak: 0, palm: 0, olive: 0 }; let nf = 0;
    const ci = Math.floor(cx / G.VC), cj = Math.floor(cz / G.VC);
    for (const [i, j, d0] of spiral) {
      if (d0 < NEAR_R - G.VC) continue;
      const k = (ci + i) * 100003 + (cj + j); if (!known.has(k)) continue;
      const c = G.vegCell(ci + i, cj + j);
      if (nearChunks.has(Math.floor(c.ci / cellsPer) * 100003 + Math.floor(c.cj / cellsPer))) continue;
      for (const it of c.items) {
        const f = FARS[it.t]; if (!f) continue;
        const d = Math.hypot(it.x - cx, it.z - cz);
        if (d < MID_R) { const im = mid[it.t]; if (n[it.t] >= CAP_MID) continue; o3.position.set(it.x, it.y, it.z); o3.rotation.set(0, it.ry, 0); o3.scale.setScalar(it.s * (it.t === 'palm' ? 2.4 : 1)); o3.updateMatrix(); im.setMatrixAt(n[it.t]++, o3.matrix); }
        else if (d < FAR_R && nf < CAP_FAR && (it.s > 0.95 || d < 900)) { const s = it.s; o3.position.set(it.x, it.y + f[2] * s, it.z); o3.rotation.set(0, it.ry, 0); o3.scale.set(f[0] * s, f[1] * s, f[0] * s); o3.updateMatrix(); far.setMatrixAt(nf, o3.matrix); far.setColorAt(nf, col.set(f[3]).offsetHSL(0, 0, (hash2(it.x, it.z) - 0.5) * 0.06)); nf++; }
      }
    }
    for (const t in n) { mid[t].count = n[t]; mid[t].instanceMatrix.needsUpdate = true; }
    far.count = nf; far.instanceMatrix.needsUpdate = true; if (far.instanceColor) far.instanceColor.needsUpdate = true;
  }
  // 🌿 عشب حوالين البطل
  const GRASS_N = 1900, grass = new InstancedMesh(tuftGeo(), swayMat(new MeshLambertMaterial({ vertexColors: true, side: DoubleSide }), 0.5, 0, U), GRASS_N);
  grass.frustumCulled = false; grass.count = 0; scene.add(grass);
  let grassAt = null;
  function updateGrass(hx, hz) {
    if (grassAt && Math.hypot(hx - grassAt[0], hz - grassAt[1]) < 8) return; grassAt = [hx, hz];
    let n = 0; const r = rng(((Math.floor(hx / 8) * 7919) ^ (Math.floor(hz / 8) * 104729)) >>> 0);
    for (let k = 0; k < GRASS_N * 1.6 && n < GRASS_N; k++) {
      const a = r() * TAU, d = Math.sqrt(r()) * 42, x = Math.round((hx + Math.cos(a) * d) * 4) / 4, z = Math.round((hz + Math.sin(a) * d) * 4) / 4;
      const y = G.H(x, z), alt = y - SEA; if (alt < 0.6 || (alt < 4 && I.coastS(x, z) < 160) || I.reserved(x, z)) continue;
      const rd = I.nearRoad(x, z); if (rd && rd.d < rd.hw + 0.4) continue;
      if (M.rad(x, z) < 250) { const q = M.nearest(x, z, y, 1); if (M.rad(x, z) < M.RP + 1 || (q && q.d < q.p.hw + 0.3)) continue; }
      const rv = I.nearRiver(x, z); if (rv && rv.d < rv.w + 0.5) continue;
      o3.position.set(x, y, z); o3.rotation.set(0, hash2(x, z) * TAU, 0); o3.scale.setScalar(1.0 + hash2(z, x) * 0.75); // عشب حقيقي 35–60 سم o3.updateMatrix(); grass.setMatrixAt(n++, o3.matrix);
    }
    grass.count = n; grass.instanceMatrix.needsUpdate = true;
  }

  // ================================================================ 🌊 الماي
  const waterMat = (color, opacity, rep) => { const nm = waterN.clone(); nm.wrapS = nm.wrapT = RepeatWrapping; nm.repeat.set(rep, rep); nm.needsUpdate = true; const m = new MeshPhongMaterial({ color, specular: '#FFFFFF', shininess: 110, normalMap: nm, transparent: true, opacity }); m.normalScale.set(0.6, 0.6); return m; };
  const seaMat = waterMat('#2A7DB2', 0.84, 1400);
  const sea = new Mesh(new PlaneGeometry(26000, 26000), seaMat); sea.rotation.x = -Math.PI / 2; sea.position.y = SEA; scene.add(sea);
  const seabed = new Mesh(new PlaneGeometry(26000, 26000), new MeshBasicMaterial({ color: '#174767' })); seabed.rotation.x = -Math.PI / 2; seabed.position.y = SEA - 42; scene.add(seabed);
  const waters = [seaMat];
  for (const L of I.lakes) { const m = waterMat('#3A8FBE', 0.86, 40); waters.push(m); const w = new Mesh(new CircleGeometry(L.r * 1.3 + 30, 48), m); w.rotation.x = -Math.PI / 2; w.position.set(L.x, SEA + L.lv, L.z); scene.add(w); }
  { const mm = waterMat('#4E8C8A', 0.8, 60); waters.push(mm); const w = new Mesh(new CircleGeometry(I.marsh.r, 56), mm); w.rotation.x = -Math.PI / 2; w.position.set(I.marsh.x, SEA + I.marsh.lv, I.marsh.z); scene.add(w); }
  const riverMat = waterMat('#3C95C8', 0.88, 1); waters.push(riverMat);
  for (const rv of I.rivers) {
    const pos = [], uv = [], idx = []; let v = 0, along = 0;
    rv.pts.forEach((p, i) => {
      const a = rv.pts[Math.max(0, i - 1)], b = rv.pts[Math.min(rv.pts.length - 1, i + 1)], tx = b.x - a.x, tz = b.z - a.z, l = Math.hypot(tx, tz) || 1, nx = -tz / l, nz = tx / l, w = p.w + 0.7;
      if (i) along += Math.hypot(p.x - rv.pts[i - 1].x, p.z - rv.pts[i - 1].z);
      pos.push(p.x + nx * w, SEA + p.lv + 0.04, p.z + nz * w, p.x - nx * w, SEA + p.lv + 0.04, p.z - nz * w); uv.push(0, along / 6, 1, along / 6);
      if (i) { const q = (i - 1) * 2; idx.push(q, q + 2, q + 1, q + 1, q + 2, q + 3); }
    });
    const g = new BufferGeometry(); g.setAttribute('position', new BufferAttribute(new Float32Array(pos), 3)); g.setAttribute('uv', new BufferAttribute(new Float32Array(uv), 2)); g.setIndex(idx); g.computeVertexNormals();
    const m = new Mesh(g, riverMat); scene.add(m);
  }
  // الشلالات: ستارة ماي بيضة ورذاذ
  const foamTex = canvasTex(64, 128, (g, w, h) => { g.clearRect(0, 0, w, h); for (let i = 0; i < 90; i++) { g.fillStyle = `rgba(255,255,255,${0.25 + Math.random() * 0.5})`; g.fillRect(Math.random() * w, 0, 1 + Math.random() * 3, h); } }, [3, 1]);
  const fallMat = new MeshLambertMaterial({ map: foamTex, color: '#DDF3FF', transparent: true, opacity: 0.85, side: DoubleSide, depthWrite: false });
  const fallsFx = [];
  for (const f of I.falls) {
    if (f.top - f.bot < 4) continue;
    const l = Math.hypot(f.dx, f.dz) || 1, w = f.w * 2 + 1.2, hgt = f.top - f.bot + 1;
    const m = new Mesh(new PlaneGeometry(w, hgt), fallMat); m.position.set(f.x, SEA + (f.top + f.bot) / 2, f.z); m.rotation.y = Math.atan2(f.dx, f.dz) + Math.PI / 2; m.rotation.order = 'YXZ'; m.rotation.x = -0.25; scene.add(m);
    const sp = new Sprite(new SpriteMaterial({ map: glowTex, color: '#FFFFFF', transparent: true, opacity: 0.55, depthWrite: false })); sp.position.set(f.x + f.dx / l * 3, SEA + f.bot + 1.2, f.z + f.dz / l * 3); sp.scale.setScalar(w * 1.4); scene.add(sp);
    fallsFx.push({ m, sp });
  }

  // ================================================================ 🏠 المباني بمقاسات حقيقية
  const signTex = (text, w = 512, h = 128, size = 56, bg = '#8B5A2B', fg = '#FFF6E0') => canvasTex(w, h, (g) => { g.fillStyle = bg; g.fillRect(0, 0, w, h); g.strokeStyle = '#E8C170'; g.lineWidth = 8; g.strokeRect(4, 4, w - 8, h - 8); g.fillStyle = fg; g.font = `900 ${size}px -apple-system,system-ui,sans-serif`; g.textAlign = 'center'; g.textBaseline = 'middle'; g.direction = 'rtl'; g.fillText(text, w / 2, h / 2 + 4); });
  const box = (w, h, d, c, x = 0, y = 0, z = 0, ry = 0) => tf(paint(new BoxGeometry(w, h, d), c), x, y, z, 0, ry, 0);
  const cyl = (r0, r1, h, c, x = 0, y = 0, z = 0, seg = 10) => tf(paint(new CylinderGeometry(r0, r1, h, seg), c), x, y, z);
  const mud = (t) => (c, x, y, z) => mix(c, t > 0.5 ? '#C79E72' : '#B98D62', t > 0.5 ? '#DDBB8E' : '#D1AE80', 0.45 + (hash2(Math.round(x * 3), Math.round(y * 3 + z * 3)) - 0.5) * 0.35);
  function siteParts(st) {
    const P = [], k = st.kind;
    if (k === 'house') {
      const w = st.w, d = st.d, h = st.h, wall = st.white ? (c) => c.set('#F1ECE2') : mud(st.tint);
      P.push(paint(tf(new BoxGeometry(w, h, d), 0, h / 2, 0), wall));
      for (const [px, pz, pw, pd] of [[0, d / 2 - 0.15, w, 0.3], [0, -d / 2 + 0.15, w, 0.3], [w / 2 - 0.15, 0, 0.3, d], [-w / 2 + 0.15, 0, 0.3, d]]) P.push(paint(tf(new BoxGeometry(pw, 0.55, pd), px, h + 0.27, pz), wall));
      P.push(box(0.12, 2.1, 1.0, '#5B3A1F', w / 2 + 0.03, 1.05, 0));
      for (const fl of st.floors === 2 ? [1.6, 4.8] : [1.6]) for (const sz of [-1, 1]) P.push(box(0.1, 0.8, 0.9, '#3A2A1E', w / 2 + 0.03, fl, sz * d * 0.28));
      if (st.floors === 2) P.push(paint(tf(new BoxGeometry(w + 0.1, 0.18, d + 0.1), 0, 3.25, 0), '#A9825A'));
      P.push(box(1.4, 0.12, 1.4, '#8B6B44', w / 2 + 0.7, 2.3, 0));
    } else if (k === 'hut') {
      const w = st.w, d = st.d;
      P.push(paint(tf(new BoxGeometry(w, 2.4, d), 0, 1.2, 0), (c, x, y) => mix(c, '#7A5434', '#9C7048', ((y + 1.2) * 3.3) % 1)));
      const roof = new CylinderGeometry(0.01, w * 0.78, d + 0.6, 3, 1); P.push(paint(tf(roof, 0, 2.4 + 0.75, 0, Math.PI / 2, 0, 0, 1, 1, 1), '#5C3F27'));
      P.push(box(0.1, 1.9, 0.9, '#3E2A18', w / 2 + 0.03, 0.95, 0));
    } else if (k === 'reedhut' || k === 'mudhif') {
      const w = st.w, d = st.d, hh = st.h, n = Math.round(d / 0.9);
      const arch = new CylinderGeometry(w / 2, w / 2, d, 18, 1, true, -Math.PI / 2, Math.PI);
      P.push(paint(tf(arch, 0, 0, 0, Math.PI / 2, 0, 0, 1, 1, hh / (w / 2)), (c, x, y, z) => mix(c, '#BFA35E', '#E0C98A', 0.5 + Math.sin(z * 9) * 0.25 + (hash2(x * 4, z * 4) - 0.5) * 0.2)));
      for (let i = 0; i <= n; i++) { const z = -d / 2 + (i / n) * d; P.push(paint(tf(new CylinderGeometry(w / 2 + 0.06, w / 2 + 0.06, 0.16, 18, 1, true, -Math.PI / 2, Math.PI), 0, 0, z, Math.PI / 2, 0, 0, 1, 1, hh / (w / 2)), '#8C7038')); }
      if (k === 'mudhif') for (const sx of [-1, 1]) P.push(cyl(0.35, 0.42, hh + 0.8, '#A88A4C', sx * (w / 2 - 0.5), (hh + 0.8) / 2, d / 2 + 0.2, 8));
    } else if (k === 'teahouse') {
      const w = st.w, d = st.d;
      // چايخانة: مفتوحة لقدّام (+X)، حايط ورا وجانبين، سقف خشب، تخوت وطاولات وسماور
      P.push(box(0.3, 3.3, d, '#E3D2B4', -w / 2, 1.65, 0), box(w, 3.3, 0.3, '#E3D2B4', 0, 1.65, -d / 2), box(w, 3.3, 0.3, '#E3D2B4', 0, 1.65, d / 2));
      P.push(box(w + 1.2, 0.25, d + 0.6, '#7B5534', 0.3, 3.4, 0));
      for (const sz of [-1, 1]) P.push(cyl(0.12, 0.12, 3.3, '#6B4A2E', w / 2 + 0.6, 1.65, sz * (d / 2 - 0.2), 6));
      for (let i = 0; i < 3; i++) { P.push(box(0.6, 0.45, 1.8, '#8E5A36', -0.6, 0.23, -3 + i * 3), box(0.9, 0.7, 0.9, '#6B4A2E', 0.6, 0.35, -3 + i * 3)); }
      P.push(cyl(0.22, 0.3, 0.7, '#C9A13B', -w / 2 + 0.6, 1.25, 0, 10));
    } else if (k === 'stall') {
      const cols = ['#E63946', '#2A9D8F', '#F4A261', '#457B9D', '#E9C46A'], c0 = cols[(st.tint || 0) % cols.length];
      for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) P.push(cyl(0.05, 0.05, 2.6, '#6B4A2E', sx * 1.4, 1.3, sz * 1.0, 5));
      P.push(paint(tf(new BoxGeometry(3.1, 0.08, 2.3), 0, 2.62, 0, 0.12, 0, 0), (c, x) => c.set(Math.floor((x + 2) * 2.5) % 2 ? c0 : '#FFF5E0')));
      P.push(box(2.8, 0.85, 1.0, '#8B5E3C', 0, 0.43, 0.3));
      for (let i = 0; i < 6; i++) P.push(box(0.35, 0.3, 0.3, ['#E76F51', '#F4D35E', '#7FB069', '#C2185B', '#FFB703', '#8D6E63'][i], -1.1 + i * 0.44, 1.0, 0.3));
    } else if (k === 'garage') { // 🔧 كراج الفجر (10.4 × 8.4 × 4.6 م): كونكريت، حيطان بلوك، سقف جينكو، باب رول مرفوع، منضدة وعدّة وتايرات وبراميل
      const W = st.w, D = st.d, Hh = 4.2;
      const conc = (c, x, y, z) => mix(c, '#9E9C95', '#BDBAB1', 0.5 + (hash2(Math.round(x * 2), Math.round(z * 2)) - 0.5) * 0.35);
      const block = (c, x, y, z) => { const row = Math.floor((y + 0.01) / 0.2), off = row % 2 ? 0.2 : 0, b = Math.floor((z + x + off + 20) / 0.4); return y < 0.6 ? c.set('#8E877A') : mix(c, '#D4CDBD', '#E9E3D5', hash2(b, row)); };
      P.push(paint(tf(new BoxGeometry(W + 0.4, 0.14, D + 0.4), 0, 0.07, 0), conc));
      P.push(paint(tf(new BoxGeometry(0.28, Hh, D), -W / 2 + 0.14, Hh / 2 + 0.14, 0), block));
      for (const sz of [-1, 1]) {
        P.push(paint(tf(new BoxGeometry(W, Hh, 0.28), 0, Hh / 2 + 0.14, sz * (D / 2 - 0.14)), block));
        P.push(box(0.26, Hh, 0.26, '#59616B', W / 2 - 0.13, Hh / 2 + 0.14, sz * (D / 2 - 0.13))); // عمود حديد
        P.push(box(0.07, Hh - 0.5, 0.1, '#6E7680', W / 2 - 0.32, (Hh - 0.5) / 2 + 0.14, sz * (D / 2 - 0.36))); // سكة الباب
        for (const u of [-3, 0.5]) P.push(box(0.04, 0.9, 1.4, '#7FA6C4', u, 2.4, sz * (D / 2 + 0.005))); // شبابيك
      }
      P.push(paint(tf(new BoxGeometry(0.32, 0.7, D), W / 2 - 0.16, Hh - 0.21, 0), block)); // فوك الباب
      P.push(paint(tf(new CylinderGeometry(0.3, 0.3, D - 0.7, 18), W / 2 - 0.4, Hh - 0.72, 0, Math.PI / 2, 0, 0), (c, x, y) => c.set(Math.floor((Math.atan2(y - Hh + 0.72, x) + 4) * 4) % 2 ? '#9AA3AD' : '#B6BEC6'))); // الباب ملفوف
      P.push(paint(tf(new BoxGeometry(W + 0.9, 0.07, D + 0.7), 0.1, Hh + 0.32, 0, 0, 0, 0.05), (c, x, y, z) => c.set(Math.floor((z + 10) * 5) % 2 ? '#A9B2BA' : '#8D97A1'))); // سقف جينكو
      // جوّه: لوح عدّة ومنضدة ومنگنة وصندوق عدّة
      P.push(box(0.04, 1.3, 3.2, '#C9A878', -W / 2 + 0.31, 1.95, -1.2));
      for (let i = 0; i < 9; i++) P.push(box(0.03, 0.18 + (i % 3) * 0.12, 0.05 + (i % 2) * 0.05, ['#2E2E2E', '#C8283A', '#7A7F86'][i % 3], -W / 2 + 0.35, 2.15 - (i % 2) * 0.45, -2.5 + i * 0.32));
      P.push(box(4.6, 0.08, 0.84, '#8A5A30', -1.2, 0.98, -D / 2 + 0.56));
      for (const u of [-3.4, 1.0]) for (const v of [-D / 2 + 0.24, -D / 2 + 0.88]) P.push(box(0.08, 0.86, 0.08, '#4A4A4A', u, 0.55, v));
      P.push(box(4.4, 0.05, 0.76, '#6B4423', -1.2, 0.42, -D / 2 + 0.56));
      P.push(box(0.55, 0.32, 0.3, '#C8283A', -2.4, 1.18, -D / 2 + 0.5), box(0.5, 0.05, 0.26, '#2E2E2E', -2.4, 1.36, -D / 2 + 0.5));
      P.push(box(0.2, 0.18, 0.16, '#3B4D61', 0.2, 1.11, -D / 2 + 0.4), box(0.3, 0.04, 0.12, '#3B4D61', 0.2, 1.22, -D / 2 + 0.4));
      // تايرات (28 إنج) متراكمة، وبراميل دهن، وجك
      for (let i = 0; i < 4; i++) { P.push(cyl(0.355, 0.355, 0.26, '#1D1D1F', -3.9, 0.27 + i * 0.27, D / 2 - 0.62, 20)); P.push(cyl(0.18, 0.18, 0.265, '#6E7680', -3.9, 0.27 + i * 0.27, D / 2 - 0.62, 14)); }
      P.push(cyl(0.29, 0.29, 0.88, '#B3261E', 2.2, 0.58, D / 2 - 0.45, 16), cyl(0.29, 0.29, 0.88, '#1F5FA8', 3.0, 0.58, D / 2 - 0.45, 16));
      for (const u of [2.2, 3.0]) for (const yy of [0.34, 0.82]) P.push(cyl(0.3, 0.3, 0.03, '#2E2E2E', u, yy, D / 2 - 0.45, 16));
      P.push(paint(tf(new CircleGeometry(1.3, 20), -0.4, 0.145, 0.4, -Math.PI / 2, 0, 0), '#6F6C66')); // بقعة دهن
      P.push(box(0.9, 0.1, 0.3, '#C8283A', 1.6, 0.2, -2.6), box(0.1, 0.5, 0.06, '#C8283A', 1.2, 0.4, -2.6)); // جك
    } else if (k === 'apron') { // ساحة كونكريت قدّام الكراج بخطوط صفرة
      P.push(paint(tf(new BoxGeometry(st.w, 0.1, st.d), 0, 0.03, 0), (c, x, y, z) => mix(c, '#A4A29B', '#BCB9B0', 0.5 + (hash2(Math.round(x * 2), Math.round(z * 2)) - 0.5) * 0.3)));
      for (const sz of [-1, 1]) P.push(box(st.w - 0.6, 0.02, 0.14, '#E8C33A', 0, 0.09, sz * (st.d / 2 - 0.4)));
      for (let i = -2; i <= 2; i++) P.push(box(0.6, 0.02, 0.14, '#F2F2F2', i * 2.2, 0.09, 0));
    } else if (k === 'fuel') { // مضخة بانزين
      P.push(box(1.0, 0.14, 0.8, '#8E8E8E', 0, 0.07, 0), box(0.55, 1.6, 0.45, '#D62839', 0, 0.94, 0), box(0.6, 0.26, 0.5, '#F4F4F4', 0, 1.86, 0));
      P.push(box(0.02, 0.28, 0.3, '#1D2733', 0.285, 1.35, 0), box(0.06, 0.22, 0.1, '#2E2E2E', 0.3, 0.95, 0.12));
      P.push(paint(tf(new TorusGeometry(0.22, 0.02, 5, 14, Math.PI * 1.2), 0.33, 0.72, 0.12, 0, Math.PI / 2, 0), '#1D1D1F'));
    } else if (k === 'board') { // 📜 لوحة الطلبات: دكّة حجر بدرجتين، عمودين خشب منقوش، إطار، سقف قرميد، وأحواض ورد
      const stone = (c, x, y, z) => mix(c, '#C9B596', '#E3D3B5', 0.4 + (hash2(Math.round(x * 3), Math.round(z * 3 + y)) - 0.5) * 0.5);
      P.push(paint(tf(new BoxGeometry(1.9, 0.18, 4.6), 0, 0.09, 0), stone), paint(tf(new BoxGeometry(1.25, 0.16, 4.1), -0.25, 0.26, 0), stone));
      P.push(paint(tf(new BoxGeometry(1.95, 0.03, 4.65), 0, 0.185, 0), '#B39C78'));
      for (const sz of [-1, 1]) {
        P.push(box(0.2, 3.75, 0.2, '#5A3720', -0.3, 0.34 + 1.875, sz * 1.82), box(0.28, 0.16, 0.28, '#7A4E2A', -0.3, 0.42, sz * 1.82), box(0.26, 0.12, 0.26, '#7A4E2A', -0.3, 2.95, sz * 1.82));
        P.push(paint(tf(new ConeGeometry(0.2, 0.22, 4), -0.3, 4.2, sz * 1.82, 0, Math.PI / 4, 0), '#4A2C16'));
        P.push(paint(tf(new BoxGeometry(0.55, 0.42, 0.55), 0.55, 0.55, sz * 1.95), stone), paint(tf(new IcosahedronGeometry(0.3, 1), 0.55, 0.88, sz * 1.95, 0, 0, 0, 1, 0.6, 1), (c, x, y, z) => c.set(['#FF6B9A', '#FFD23F', '#FFFFFF', '#B28DFF', '#E63946', '#7FD16B'][Math.floor(hash2(x * 9 + sz, z * 9) * 6)])));
      }
      P.push(box(0.1, 2.05, 3.5, '#6E4526', -0.34, 0.34 + 0.75 + 1.025, 0)); // اللوح ورا الأوراق
      for (const [y, h] of [[1.06, 0.1], [3.17, 0.1]]) P.push(box(0.16, h, 3.62, '#8A5A30', -0.27, y, 0));
      for (const sz of [-1, 1]) P.push(box(0.16, 2.2, 0.1, '#8A5A30', -0.27, 2.12, sz * 1.76));
      for (const [y, h] of [[1.0, 0.02], [3.23, 0.02]]) P.push(box(0.17, h, 3.64, '#D4AF37', -0.26, y, 0));
      P.push(box(0.12, 0.5, 2.7, '#5A3720', -0.28, 3.55, 0)); // لوحة العنوان
      for (const sx of [-1, 1]) P.push(paint(tf(new BoxGeometry(1.25, 0.08, 4.5), -0.3 + sx * 0.5, 4.22, 0, 0, 0, -sx * 0.62), (c, x, y, z) => c.set(Math.floor((z + 3) * 4.5) % 2 ? '#B5532F' : '#C8653A')));
      P.push(box(0.16, 0.16, 4.6, '#7A3A1E', -0.3, 4.55, 0));
    } else if (k === 'signpost') {
      P.push(cyl(0.08, 0.1, 3.2, '#5B3A1F', 0, 1.6, 0, 6));
    } else if (k === 'gate') {
      for (const sz of [-1, 1]) P.push(paint(tf(new BoxGeometry(1.1, 5.2, 1.1), 0, 2.6, sz * 4.6), mud(0.8)));
      P.push(paint(tf(new BoxGeometry(1.2, 0.9, 10.4), 0, 5.6, 0), mud(0.8)));
    } else if (k === 'fountain') {
      P.push(paint(tf(new CylinderGeometry(st.r, st.r + 0.15, 0.7, 8), 0, 0.35, 0), '#D9CBB0'), cyl(0.45, 0.6, 1.8, '#CDBB9C', 0, 0.9, 0, 8), cyl(1.1, 0.4, 0.35, '#D9CBB0', 0, 1.9, 0, 8));
    } else if (k === 'lamp') {
      P.push(cyl(0.06, 0.09, 3.3, '#2E2E2E', 0, 1.65, 0, 6));
    } else if (k === 'pier') {
      P.push(paint(tf(new BoxGeometry(st.w, 0.22, st.d), 0, 0, 0), (c, x, y, z) => mix(c, '#7E5B3A', '#A47A50', (Math.floor((x + 50) * 1.6) % 2) * 0.6 + 0.2)));
      for (let i = 0; i <= Math.floor(st.w / 4); i++) for (const sz of [-1, 1]) P.push(cyl(0.12, 0.12, 4, '#5B3F27', -st.w / 2 + i * 4, -2, sz * (st.d / 2 - 0.1), 6));
    } else if (k === 'boat' || k === 'canoe') {
      const L = k === 'canoe' ? 6.5 : 5.2, W = k === 'canoe' ? 0.85 : 1.7;
      P.push(paint(tf(new SphereGeometry(1, 14, 6, 0, TAU, Math.PI / 2, Math.PI / 2), 0, 0.42, 0, 0, 0, 0, L / 2, 0.5, W / 2), k === 'canoe' ? '#3B2A1E' : (c, x, y) => mix(c, '#2A6F97', '#F1ECE2', y * -2 + 0.2)));
      if (k === 'boat') P.push(box(0.25, 0.1, W * 0.8, '#7B5534', 0, 0.38, 0));
    } else if (k === 'logs') {
      for (let i = 0; i < 6; i++) P.push(paint(tf(new CylinderGeometry(0.28, 0.28, st.w, 8), 0, 0.3 + (i > 3 ? 0.48 : 0), (i % 4 - 1.5) * 0.48 * (i > 3 ? 0.6 : 1), 0, 0, Math.PI / 2), '#8A6240'));
    } else if (k === 'well') {
      P.push(cyl(st.r, st.r + 0.1, 0.9, '#B8A88A', 0, 0.45, 0, 12));
      for (const sx of [-1, 1]) P.push(cyl(0.06, 0.06, 2.2, '#5B3A1F', sx * 0.9, 1.1, 0, 5));
      P.push(paint(tf(new CylinderGeometry(0.01, 1.2, 0.6, 4), 0, 2.4, 0, 0, Math.PI / 4, 0), '#7B5534'));
    } else if (k === 'lighthouse') {
      P.push(paint(tf(new CylinderGeometry(2.0, 3.0, 17, 16), 0, 8.5, 0), (c, x, y) => c.set(Math.floor((y + 8.5) / 3) % 2 ? '#D62828' : '#FBF7EF')));
      P.push(cyl(2.6, 2.6, 0.4, '#2E2E2E', 0, 17.2, 0, 16), cyl(1.6, 1.6, 1.8, '#9FD8FF', 0, 18.3, 0, 12), paint(tf(new ConeGeometry(1.9, 1.4, 16), 0, 19.9, 0), '#D62828'));
      P.push(box(0.15, 2.2, 1.0, '#5B3A1F', 3.0, 1.1, 0));
    } else if (k === 'fwall') {
      const n = Math.max(2, Math.round(st.w / 2));
      for (let i = 0; i < n; i++) { const hh = st.h * (0.6 + 0.4 * hash2(st.x + i, st.z)); P.push(paint(tf(new BoxGeometry(st.w / n + 0.05, hh, st.d), -st.w / 2 + (i + 0.5) * st.w / n, hh / 2, 0), (c, x, y, z) => mix(c, '#8E8576', '#B8AE9B', 0.4 + hash2(Math.round(x * 2 + st.x), Math.round(y * 2)) * 0.5))); }
    } else if (k === 'ftower') {
      P.push(paint(tf(new CylinderGeometry(st.r * 0.92, st.r, st.h, 12), 0, st.h / 2, 0), (c, x, y, z) => mix(c, '#8E8576', '#B8AE9B', 0.4 + hash2(Math.round(x * 2 + z), Math.round(y * 2)) * 0.5)));
    } else if (k === 'campfire') {
      for (let i = 0; i < 9; i++) { const a = (i / 9) * TAU; P.push(tf(paint(new DodecahedronGeometry(0.22, 0), '#8A857B'), Math.cos(a) * 0.75, 0.12, Math.sin(a) * 0.75)); }
    } else if (k === 'square') {
      P.push(paint(tf(new BoxGeometry(st.w, 0.2, st.d), 0, -0.02, 0), (c, x, y, z) => mix(c, '#CBB894', '#E2D2B2', ((Math.floor(x / 1.5) + Math.floor(z / 1.5)) % 2) * 0.5 + hash2(Math.floor(x / 1.5), Math.floor(z / 1.5)) * 0.35)));
      for (const [px, pz] of [[-20, -26], [20, -26], [-20, 26], [20, 26]]) P.push(paint(tf(new CylinderGeometry(3.2, 3.4, 0.5, 14), px, 0.25, pz), '#9C8466'), paint(tf(new IcosahedronGeometry(2.8, 1), px, 0.6, pz, 0, 0, 0, 1, 0.3, 1), (c, x, y, z) => c.set(['#FF6B9A', '#FFD23F', '#FFFFFF', '#B28DFF', '#E63946'][Math.floor(hash2(x * 3, z * 3) * 5)])));
    }
    return P;
  }
  const siteObjs = [], lamps = [], fires = [], npcs = [], boardLamps = []; let boardTex = null, boardKey = '';
  for (const st of I.sites) {
    const P = siteParts(st), grp = new Group();
    grp.position.set(st.x, st.float ? SEA + 0.15 : st.y, st.z); grp.rotation.y = -(st.rot || 0);
    if (P.length) { const m = new Mesh(merge(P), new MeshLambertMaterial({ vertexColors: true, side: DoubleSide })); m.castShadow = true; m.receiveShadow = true; grp.add(m); }
    if (st.kind === 'palm') { const m = new Mesh(NEAR.palm[0], nearMat.palm); m.scale.setScalar(2.4 * (st.s || 1)); m.castShadow = true; grp.add(m); }
    if (st.kind === 'garage') { // لافتة وضوية جوّه
      const sg = new Mesh(new PlaneGeometry(4.2, 0.6), new MeshLambertMaterial({ map: signTex('🔧 كراج الفجر · 🚙', 1024, 150, 92, '#1F3B57', '#FFE7A8'), emissive: '#0E1E2E', emissiveIntensity: 0.4 })); sg.position.set(st.w / 2 + 0.005, 3.88, 0); sg.rotation.y = Math.PI / 2; grp.add(sg);
      const lampM = new MeshLambertMaterial({ color: '#FFFFFF', emissive: '#FFF4D6', emissiveIntensity: 1 });
      for (const u of [-2.5, 1.5]) { const lb = new Mesh(new BoxGeometry(1.2, 0.06, 0.14), lampM); lb.position.set(u, 4.05, 0); grp.add(lb); const gl = new Sprite(new SpriteMaterial({ map: glowTex, color: '#FFF0C8', transparent: true, opacity: 0.5, depthWrite: false, blending: AdditiveBlending })); gl.position.set(u, 3.9, 0); gl.scale.setScalar(2.4); grp.add(gl); lamps.push(gl); }
    }
    if (st.kind === 'fuel') { const lb = new Mesh(new PlaneGeometry(0.5, 0.2), new MeshLambertMaterial({ map: signTex('⛽ بانزين', 256, 100, 50, '#F4F4F4', '#D62839') })); lb.position.set(0.305, 1.86, 0); lb.rotation.y = Math.PI / 2; grp.add(lb); }
    if (st.kind === 'board') {
      const title = new Mesh(new PlaneGeometry(2.6, 0.46), new MeshLambertMaterial({ map: signTex('📜 طلبات أبو جاسم', 1024, 180, 96, '#5A3720', '#FFE7A8') })); title.position.set(-0.215, 3.55, 0); title.rotation.y = Math.PI / 2; grp.add(title);
      boardTex = canvasTex(1024, 600, () => {}); const cards = new Mesh(new PlaneGeometry(3.4, 1.99), new MeshLambertMaterial({ map: boardTex, emissive: '#2A1C10', emissiveIntensity: 0.25 })); cards.position.set(-0.28, 2.12, 0); cards.rotation.y = Math.PI / 2; grp.add(cards);
      for (const sz of [-1, 1]) { // فانوسين معلّقين
        const ln = new Group(); ln.position.set(0.25, 3.9, sz * 2.05);
        const cage = new Mesh(new CylinderGeometry(0.09, 0.11, 0.26, 6), new MeshLambertMaterial({ color: '#FFD27A', emissive: '#FFB347', emissiveIntensity: 0.9 })); cage.position.y = -0.3; ln.add(cage);
        const cap = new Mesh(new ConeGeometry(0.13, 0.12, 6), new MeshLambertMaterial({ color: '#2E2E2E' })); cap.position.y = -0.12; ln.add(cap);
        const ch2 = new Mesh(new CylinderGeometry(0.008, 0.008, 0.25, 4), new MeshLambertMaterial({ color: '#2E2E2E' })); ch2.position.y = 0.0; ln.add(ch2);
        const gl = new Sprite(new SpriteMaterial({ map: glowTex, color: '#FFC85A', transparent: true, opacity: 0.85, depthWrite: false, blending: AdditiveBlending })); gl.position.y = -0.3; gl.scale.setScalar(1.3); ln.add(gl); lamps.push(gl);
        grp.add(ln); boardLamps.push(ln);
      }
    }
    if (st.kind === 'signpost') ['⛰️ قمة السحاب', '🏘️ قرية الطين', '🌴 بساتين الرطب', '🗼 المنارة'].forEach((t, i) => { const b = new Mesh(new PlaneGeometry(1.9, 0.42), new MeshLambertMaterial({ map: signTex(t, 512, 112, 54), side: DoubleSide })); b.position.set(0, 2.9 - i * 0.5, 0); b.rotation.y = [Math.PI / 2, 0, Math.PI, -Math.PI / 2][i] + 0.2; b.translateX(0.95); grp.add(b); });
    if (st.kind === 'gate') { const b = new Mesh(new PlaneGeometry(4.2, 0.8), new MeshLambertMaterial({ map: signTex('⛰️ طريق القمة', 512, 100, 58), side: DoubleSide })); b.position.set(0.62, 5.6, 0); b.rotation.y = Math.PI / 2; grp.add(b); }
    if (st.kind === 'lamp' || st.kind === 'lighthouse') { const sp = new Sprite(new SpriteMaterial({ map: glowTex, color: '#FFC85A', transparent: true, opacity: 0.8, depthWrite: false, blending: AdditiveBlending })); sp.position.y = st.kind === 'lamp' ? 3.3 : 18.4; sp.scale.setScalar(st.kind === 'lamp' ? 1 : 7); grp.add(sp); lamps.push(sp); }
    if (st.kind === 'fountain') { const w = new Mesh(new CircleGeometry(st.r - 0.2, 24), waters[1]); w.rotation.x = -Math.PI / 2; w.position.y = 0.55; grp.add(w); }
    if (st.kind === 'campfire') fires.push(addFlame(grp));
    if (st.kind === 'teahouse') for (const [x, z, ry] of [[-0.9, -3, Math.PI / 2], [-0.9, 0, Math.PI / 2 + 0.3], [-0.9, 3, Math.PI / 2 - 0.2]]) { const man = makeMan({ thobe: ['#F2EEE4', '#D9D2C3', '#EDE3CF'][npcs.length % 3], bisht: null }); man.root.position.set(x, 0, z); man.root.rotation.y = ry; grp.add(man.root); npcs.push(man); }
    scene.add(grp); siteObjs.push({ grp, x: st.x, z: st.z, st });
  }
  function addFlame(grp) {
    const fl = new Group(); const fm = (c) => new MeshBasicMaterial({ color: c, transparent: true, opacity: 0.9, depthWrite: false, blending: AdditiveBlending });
    [['#FF5A1F', 0.32, 0.9], ['#FF9A2E', 0.24, 0.7], ['#FFE07A', 0.14, 0.45]].forEach(([c, r0, h0]) => { const f = new Mesh(new ConeGeometry(r0, h0, 10, 1, true), fm(c)); f.position.y = h0 / 2 + 0.1; fl.add(f); });
    for (let i = 0; i < 3; i++) { const lg = new Mesh(new CylinderGeometry(0.08, 0.08, 1.1, 6), new MeshLambertMaterial({ color: '#5B3A1F' })); lg.rotation.set(Math.PI / 2, (i / 3) * Math.PI, 0); lg.position.y = 0.12; fl.add(lg); }
    const sp = new Sprite(new SpriteMaterial({ map: glowTex, color: '#FF8A2E', transparent: true, opacity: 0.65, depthWrite: false, blending: AdditiveBlending })); sp.position.y = 0.6; sp.scale.setScalar(2.6); fl.add(sp);
    grp.add(fl); return fl;
  }
  // 🔥 نار بكل نقطة استراحة (مكان الرجعة إذا غبت)
  for (const r of G.restPoints) if (r.fire) {
    const grp = new Group(); grp.position.set(r.fx, G.H(r.fx, r.fz), r.fz);
    const ring = new Mesh(merge(siteParts({ kind: 'campfire' })), new MeshLambertMaterial({ vertexColors: true })); grp.add(ring);
    for (const a of [0.4, 2.5]) { const lg = new Mesh(new CylinderGeometry(0.22, 0.24, 1.8, 8), new MeshLambertMaterial({ color: '#7A5434' })); lg.rotation.set(0, a, Math.PI / 2); lg.position.set(Math.cos(a) * 1.9, 0.22, Math.sin(a) * 1.9); lg.castShadow = true; grp.add(lg); }
    fires.push(addFlame(grp)); scene.add(grp); siteObjs.push({ grp, x: r.x, z: r.z, st: { kind: 'rest' } });
  }
  // 👳 بسطة أبو جاسم بساحة القمة (بين الجرس والمصطبة)
  {
    const a = 80 * Math.PI / 180, x = M.x + Math.cos(a) * 10.1, z = M.z + Math.sin(a) * 10.1, grp = new Group();
    const P = [];
    P.push(paint(tf(new BoxGeometry(2.2, 0.03, 3.2), 0, 0.02, 0), (c, xx, y, zz) => c.set(Math.floor((zz + 2) * 2.2) % 2 ? '#9B2226' : '#CA6702')));
    for (const [sx, sz] of [[-1.1, -1.6], [-1.1, 1.6], [0.9, -1.6], [0.9, 1.6]]) P.push(cyl(0.05, 0.05, 2.4, '#6B4A2E', sx, 1.2, sz, 5));
    P.push(paint(tf(new BoxGeometry(2.4, 0.06, 3.6), -0.1, 2.42, 0, 0, 0, 0.1), (c, xx, y, zz) => c.set(Math.floor((zz + 2) * 2) % 2 ? '#0A9396' : '#E9D8A6')));
    for (let i = 0; i < 5; i++) P.push(paint(tf(new CylinderGeometry(0.28, 0.33, 0.6, 8), -0.7, 0.3, -1.2 + i * 0.6), ['#D4A373', '#CCD5AE', '#E9EDC9', '#FAEDCD', '#BC6C25'][i]));
    P.push(box(0.6, 0.4, 0.9, '#7B5534', 0.1, 0.2, 1.1), box(0.5, 0.3, 0.5, '#B5838D', 0.1, 0.55, 1.1));
    const m = new Mesh(merge(P), new MeshLambertMaterial({ vertexColors: true, side: DoubleSide })); m.castShadow = true; grp.add(m);
    grp.position.set(x, M.HS + 0.01, z); grp.rotation.y = -Math.atan2(M.z - z, M.x - x); scene.add(grp);
  }

  // ================================================================ 🚡 الحبال المنزلقة، 🧗 حبال التسلّق، 🎣 السنارة
  const steel = new MeshLambertMaterial({ color: '#3A3A3A' }), woodM = new MeshLambertMaterial({ color: '#7B5534' });
  const frame = (x, y, z, hgt, ang) => { const g = new Group(); for (const s of [-1, 1]) { const p = new Mesh(new CylinderGeometry(0.14, 0.18, hgt, 6), woodM); p.position.set(-Math.sin(ang) * s * 1.3, hgt / 2, Math.cos(ang) * s * 1.3); p.castShadow = true; g.add(p); } const bar = new Mesh(new BoxGeometry(0.22, 0.22, 2.9), woodM); bar.position.y = hgt; bar.rotation.y = -ang; g.add(bar); g.position.set(x, y, z); scene.add(g); return g; };
  for (const z of G.zips) {
    const pts = []; for (let s = 0; s <= z.L; s += 6) { const p = z.at(s); pts.push(new Vector3(p.x, p.y, p.z)); } const e = z.at(z.L); pts.push(new Vector3(e.x, e.y, e.z));
    const cable = new Mesh(new TubeGeometry(new CatmullRomCurve3(pts), pts.length, 0.04, 4, false), steel); scene.add(cable);
    const ang = Math.atan2(z.uz, z.ux);
    frame(z.S.x, M.HS - 1, z.S.z, 5.6, ang); frame(z.E.x, G.H(z.E.x, z.E.z) - 0.2, z.E.z, 4.6, ang);
    for (const T of z.pts) if (T.tower) { const g = new Group(); for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) { const leg = new Mesh(new CylinderGeometry(0.12, 0.16, 12.6, 5), steel); leg.position.set(sx * 0.9, 6.1, sz * 0.9); leg.rotation.set(sz * 0.07, 0, -sx * 0.07); g.add(leg); } const top = new Mesh(new BoxGeometry(2.4, 0.3, 0.6), steel); top.position.y = 12; top.rotation.y = -ang + Math.PI / 2; g.add(top); g.position.set(T.x, G.H(T.x, T.z) - 0.3, T.z); scene.add(g); }
    const sg = new Mesh(new PlaneGeometry(2.4, 0.6), new MeshLambertMaterial({ map: signTex(`🚡 ${z.name} ${z.icon}`, 512, 128, 56), side: DoubleSide })); sg.position.set(z.stand.x, M.HS + 2.2, z.stand.z); sg.rotation.y = -Math.atan2(z.stand.z - M.z, z.stand.x - M.x) + Math.PI / 2; scene.add(sg);
    const sp = new Mesh(new CylinderGeometry(0.06, 0.06, 2.4, 6), woodM); sp.position.set(z.stand.x, M.HS + 1.2, z.stand.z); scene.add(sp);
  }
  // البكرة على الحبل (2.4 م فوك رجليك) ومقبض تمسكه بإيدينك فوك راسك، وحزام للخصر
  const trolley = new Group(); { const red = new MeshLambertMaterial({ color: '#E63946' }); const wheel = new Mesh(new CylinderGeometry(0.11, 0.11, 0.08, 14), steel); wheel.rotation.x = Math.PI / 2; wheel.position.y = 2.4; trolley.add(wheel); const plate = new Mesh(new BoxGeometry(0.3, 0.2, 0.04), red); plate.position.set(0, 2.38, 0.06); trolley.add(plate); for (const s of [-1, 1]) { const st = new Mesh(new CylinderGeometry(0.012, 0.012, 0.36, 4), steel); st.position.set(0, 2.2, s * 0.17); st.rotation.x = s * 0.35; trolley.add(st); } const bar = new Mesh(new CylinderGeometry(0.022, 0.022, 0.62, 8), new MeshLambertMaterial({ color: '#2E2E2E' })); bar.rotation.x = Math.PI / 2; bar.position.y = 2.03; trolley.add(bar); const lan = new Mesh(new CylinderGeometry(0.012, 0.012, 1.3, 4), red); lan.position.set(0, 1.68, 0); trolley.add(lan); const hb = new Mesh(new TorusGeometry(0.17, 0.025, 6, 18), red); hb.rotation.x = Math.PI / 2; hb.scale.z = 0.72; hb.position.y = 1.0; trolley.add(hb); }
  trolley.visible = false; scene.add(trolley);
  const ropeM = new MeshLambertMaterial({ color: '#C8A46A' }), flagM = new MeshLambertMaterial({ color: '#E63946', side: DoubleSide });
  for (const a of G.anchors) { // 🧗 حبل معلّق على الجرف وعلامة حمرة تحت
    const rpts = [new Vector3(a.top.x, a.top.y + 0.8, a.top.z)]; // الحبل ممدود على وجه الجرف (من الوتد للعلامة)
    for (let i = 1; i <= 16; i++) { const k = i / 16, x = lerp(a.top.x, a.bot.x, k), z = lerp(a.top.z, a.bot.z, k); rpts.push(new Vector3(x, Math.max(G.H(x, z), lerp(a.top.y, a.bot.y, k) - 0.6) + 0.25, z)); }
    const rp = new Mesh(new TubeGeometry(new CatmullRomCurve3(rpts), 40, 0.03, 4, false), ropeM); scene.add(rp);
    const peg = new Mesh(new CylinderGeometry(0.06, 0.06, 1.1, 6), steel); peg.position.set(a.top.x, a.top.y + 0.5, a.top.z); scene.add(peg);
    const pole = new Mesh(new CylinderGeometry(0.03, 0.03, 1.8, 5), woodM); pole.position.set(a.bot.x, a.bot.y + 0.9, a.bot.z); scene.add(pole);
    const fl = new Mesh(new PlaneGeometry(0.5, 0.32), flagM); fl.position.set(a.bot.x + 0.25, a.bot.y + 1.6, a.bot.z); scene.add(fl);
  }

  // ================================================================ 📜 أغراض الطلبات بالعالم: زعتر، محار، خلية نحل، عش صقر (كل وحدة بضو حتى تنلگى)
  const itemObjs = [];
  {
    const thymeG = merge([...Array(9)].map((_, i) => { const a = i * 0.7, h = 0.26 + (i % 3) * 0.06; return paint(tf(new ConeGeometry(0.05, h, 5), Math.cos(a) * 0.07, h / 2, Math.sin(a) * 0.07, Math.sin(a) * 0.2, 0, Math.cos(a) * 0.2), (c, x, y) => mix(c, '#4E7A3A', '#9BBF7A', y / h + 0.3)); }).concat([paint(tf(new TorusGeometry(0.06, 0.012, 5, 12), 0, 0.08, 0, Math.PI / 2), '#C8283A')], [...Array(6)].map((_, i) => paint(tf(new SphereGeometry(0.018, 5, 4), Math.cos(i) * 0.08, 0.3 + (i % 2) * 0.04, Math.sin(i) * 0.08), '#B99CF0'))));
    const shellG = merge([paint(tf(new SphereGeometry(0.11, 12, 6, 0, TAU, 0, Math.PI / 2), 0, 0.02, 0, 0, 0, 0, 1, 0.38, 0.8), (c, x, y, z) => mix(c, '#8A8378', '#D9D2C3', 0.5 + Math.sin(Math.atan2(z, x) * 9) * 0.3)), paint(tf(new SphereGeometry(0.11, 12, 6, 0, TAU, 0, Math.PI / 2), -0.02, 0.09, 0, 0, 0, 1.1, 1, 0.32, 0.8), (c, x, y, z) => mix(c, '#7D776B', '#CFC7B6', 0.5 + Math.sin(Math.atan2(z, x) * 9) * 0.3)), paint(tf(new SphereGeometry(0.03, 10, 8), 0.02, 0.05, 0), '#FFF8EE')]);
    const hiveG = merge([box(0.7, 0.08, 0.7, '#6B4A2E', 0, 0.42, 0), ...[-1, 1].flatMap((sx) => [-1, 1].map((sz) => cyl(0.03, 0.03, 0.42, '#5B3A1F', sx * 0.28, 0.21, sz * 0.28, 5))), paint(tf(new CylinderGeometry(0.27, 0.3, 0.55, 12), 0, 0.73, 0), (c, x, y) => mix(c, '#C9963E', '#E8C170', Math.floor((y + 1) * 9) % 2 ? 0.2 : 0.8)), paint(tf(new ConeGeometry(0.33, 0.22, 12), 0, 1.11, 0), '#8C6A3A'), box(0.1, 0.06, 0.02, '#2A1C10', 0, 0.55, 0.29), paint(tf(new CylinderGeometry(0.09, 0.11, 0.16, 10), 0.24, 0.53, 0.18), '#E0A83A')]);
    const nestG = merge([...Array(26)].map((_, i) => { const a = i * 0.26; return paint(tf(new CylinderGeometry(0.018, 0.018, 0.55, 4), Math.cos(a) * 0.3, 0.1 + (i % 3) * 0.05, Math.sin(a) * 0.3, Math.PI / 2, a + 0.3, 0.2 * (i % 2 ? 1 : -1)), (c) => c.set(i % 3 ? '#7A5A3A' : '#5E4228')); }).concat([paint(tf(new CircleGeometry(0.27, 12), 0, 0.08, 0, -Math.PI / 2), '#5E4228'), paint(tf(new SphereGeometry(0.06, 8, 6), 0.06, 0.12, 0.02, 0, 0, 0, 1, 0.78, 1), '#EFE6D6'), paint(tf(new SphereGeometry(0.06, 8, 6), -0.07, 0.12, -0.03, 0, 0, 0, 1, 0.78, 1), '#E8DCC6')]));
    const featherG = merge([paint(tf(new CylinderGeometry(0.004, 0.006, 0.42, 4), 0, 0.21, 0), '#EFE6D6'), paint(tf(new SphereGeometry(0.06, 10, 6), 0, 0.25, 0, 0, 0, 0, 0.55, 2.6, 0.12), (c, x, y) => mix(c, '#5A3A22', '#D8B98A', 0.5 + Math.sin(y * 70) * 0.5))]);
    const vcM = new MeshLambertMaterial({ vertexColors: true });
    const beamM = new MeshBasicMaterial({ color: '#FFE38A', transparent: true, opacity: 0.22, depthWrite: false, blending: AdditiveBlending, side: DoubleSide });
    const beamG = new CylinderGeometry(0.18, 0.5, 26, 10, 1, true); beamG.translate(0, 13, 0);
    const defs = I.tasks.flatMap((d) => d.items.map((it) => ({ ...it, task: d.id })));
    defs.forEach((it, idx) => {
      const grp = new Group(); grp.position.set(it.x, it.y, it.z);
      const g = it.task === 'thyme' ? thymeG : it.task === 'pearl' ? shellG : it.task === 'honey' ? hiveG : nestG;
      const m = new Mesh(g, vcM); m.castShadow = true; m.rotation.y = hash2(it.x, it.z) * TAU; grp.add(m);
      let fe = null; if (it.task === 'feather') { fe = new Mesh(featherG, vcM); fe.position.set(0.05, 0.12, 0); fe.rotation.z = -0.5; grp.add(fe); }
      if (it.task === 'honey') { const jar = new Mesh(new CylinderGeometry(0.07, 0.08, 0.14, 10), new MeshLambertMaterial({ color: '#F2A922', emissive: '#7A4A00', emissiveIntensity: 0.4 })); jar.position.set(0.24, 0.53, 0.18); grp.add(jar); fe = jar; }
      const beam = new Mesh(beamG, beamM); grp.add(beam); // عمود ضو تشوفه من بعيد
      const gl = new Sprite(new SpriteMaterial({ map: glowTex, color: '#FFE38A', transparent: true, opacity: 0.7, depthWrite: false, blending: AdditiveBlending })); gl.position.y = it.task === 'honey' ? 0.9 : 0.35; gl.scale.setScalar(it.task === 'honey' ? 2.2 : 1.4); grp.add(gl);
      scene.add(grp); itemObjs.push({ it, idx, grp, fe, beam, gl });
    });
  }
  /** يرسم أوراق الطلبات على اللوحة (تتحدّث وية التقدّم) */
  function drawBoard() {
    if (!boardTex) return;
    const key = S.tasks.map((t) => `${t.id}:${t.done ? 'D' : ''}${t.got}`).join('|') + '|' + S.fish + '|' + S.track + '|' + (S.vq.caught ? 1 : 0);
    if (key === boardKey) return; boardKey = key;
    const cv = boardTex.image, g = cv.getContext('2d'), W = cv.width, Hh = cv.height;
    const bg = g.createLinearGradient(0, 0, 0, Hh); bg.addColorStop(0, '#A9794A'); bg.addColorStop(1, '#8E6238'); g.fillStyle = bg; g.fillRect(0, 0, W, Hh);
    for (let i = 0; i < 900; i++) { g.fillStyle = `rgba(${60 + (i % 5) * 20},${35 + (i % 3) * 12},15,.25)`; g.fillRect((i * 97.3) % W, (i * 53.7) % Hh, 3, 2); }
    const cw = 318, chh = 270, gx = 18, gy = 22;
    S.tasks.forEach((t, i) => {
      const d = t.def, col = i % 3, row = Math.floor(i / 3), x = W - gx - cw - col * (cw + 18), y = gy + row * (chh + 18), have = t.id === 'gazelle' ? (S.vq.caught ? 1 : 0) : t.id === 'fish' ? Math.min(S.fish, d.need) : t.got, ready = !t.done && have >= d.need;
      g.save(); g.translate(x + cw / 2, y + chh / 2); g.rotate(((i * 37) % 7 - 3) * 0.008);
      g.fillStyle = 'rgba(0,0,0,.25)'; g.fillRect(-cw / 2 + 6, -chh / 2 + 8, cw, chh);
      g.fillStyle = t.done ? '#E4EFD8' : '#F6E8C6'; g.fillRect(-cw / 2, -chh / 2, cw, chh);
      g.strokeStyle = S.track === t.id && !t.done ? '#E63946' : '#C9A86A'; g.lineWidth = S.track === t.id && !t.done ? 8 : 3; g.strokeRect(-cw / 2 + 4, -chh / 2 + 4, cw - 8, chh - 8);
      g.fillStyle = ['#E63946', '#2A9D8F', '#457B9D'][i % 3]; g.beginPath(); g.arc(0, -chh / 2 + 16, 10, 0, TAU); g.fill();
      g.textAlign = 'center'; g.textBaseline = 'middle'; g.direction = 'rtl';
      g.font = '72px -apple-system,system-ui,"Apple Color Emoji","Noto Color Emoji",sans-serif'; g.fillStyle = '#000'; g.fillText(d.icon, 0, -chh / 2 + 78);
      g.fillStyle = '#3A2614'; g.font = '900 34px -apple-system,system-ui,sans-serif'; g.fillText(d.name, 0, -chh / 2 + 146);
      const zn = (I.zones.find((z) => z.id === d.zone) || {}).name || '';
      g.font = '700 25px -apple-system,system-ui,sans-serif'; g.fillStyle = '#6B4A2B'; g.fillText(d.need > 1 ? `${zn} · ${have}/${d.need}` : zn, 0, -chh / 2 + 186);
      g.font = '900 30px -apple-system,system-ui,sans-serif'; g.fillStyle = '#9A6B00'; g.fillText(`${d.reward} 🪙`, 0, -chh / 2 + 230);
      if (t.done || ready) { g.rotate(-0.22); g.strokeStyle = t.done ? 'rgba(46,140,60,.85)' : 'rgba(214,40,57,.85)'; g.lineWidth = 6; g.strokeRect(-110, -40, 220, 64); g.fillStyle = g.strokeStyle; g.font = '900 38px -apple-system,system-ui,sans-serif'; g.fillText(t.done ? '✔ تم' : 'جاهز 🎒', 0, -8); }
      g.restore();
    });
    boardTex.needsUpdate = true;
  }

  // ================================================================ 🗺️ صورة الخريطة: تنحسب شوية شوية (كل الجزيرة)
  const MAPN = 360, mapA = new Float32Array(MAPN * MAPN), mapF = new Float32Array(MAPN * MAPN); let mapRow = 0, mapCanvas = null;
  function mapRows(budget) {
    const t0 = performance.now(), st = (HALF * 2) / MAPN;
    while (mapRow < MAPN && performance.now() - t0 < budget) {
      const x = HALF - (mapRow + 0.5) * st;
      for (let i = 0; i < MAPN; i++) { const z = -HALF + (i + 0.5) * st, a = I.A(x, z), k = mapRow * MAPN + i; mapA[k] = M.rad(x, z) < 230 ? G.H(x, z) - SEA : a; mapF[k] = a > 0.4 ? I.flora(x, z, a, 999, 0).t : 0; }
      mapRow++;
    }
    return MAPN - mapRow;
  }
  function mapShot(size = 1024) {
    if (mapRow < MAPN) mapRows(1e9);
    const cv = document.createElement('canvas'); cv.width = cv.height = MAPN; const g = cv.getContext('2d'), img = g.createImageData(MAPN, MAPN), st = (HALF * 2) / MAPN;
    for (let j = 0; j < MAPN; j++) for (let i = 0; i < MAPN; i++) {
      const k = j * MAPN + i, a = mapA[k], ax = mapA[Math.min(MAPN - 1, j + 1) * MAPN + i] - mapA[Math.max(0, j - 1) * MAPN + i], az = mapA[j * MAPN + Math.min(MAPN - 1, i + 1)] - mapA[j * MAPN + Math.max(0, i - 1)];
      if (a < 0.35) mixK(K3, '#BFE6EE', '#2A6FA0', clamp(-a / 14, 0, 1));
      else {
        mixK(K3, '#E6D7A6', '#86B55A', a / 4); if (a > 4) mixK(K3, '#86B55A', '#5F9446', (a - 4) / 120);
        K3.lerp(K1.set('#2F6B33'), clamp(mapF[k], 0, 1) * 0.7);
        if (a > 200) K3.lerp(K1.set('#A39B8B'), smooth(200, 330, a)); if (a > 330) K3.lerp(K1.set('#E8E4DA'), smooth(330, 395, a));
        const sh = clamp(1 + (ax * 0.55 - az * 0.55) / st * 0.9, 0.6, 1.3); K3.multiplyScalar(sh);
      }
      img.data[k * 4] = K3.r * 255; img.data[k * 4 + 1] = K3.g * 255; img.data[k * 4 + 2] = K3.b * 255; img.data[k * 4 + 3] = 255;
    }
    g.putImageData(img, 0, 0);
    const out = document.createElement('canvas'); out.width = out.height = size; const o = out.getContext('2d'); o.imageSmoothingEnabled = true; o.drawImage(cv, 0, 0, size, size);
    const P = (x, z) => [((z + HALF) / (2 * HALF)) * size, ((HALF - x) / (2 * HALF)) * size];
    o.lineCap = 'round'; o.lineJoin = 'round';
    for (const rd of I.roads) { o.strokeStyle = 'rgba(120,80,40,.85)'; o.lineWidth = size / 520; o.setLineDash([size / 260, size / 400]); o.beginPath(); rd.pts.forEach((p, i) => { const [u, v] = P(p.x, p.z); i ? o.lineTo(u, v) : o.moveTo(u, v); }); o.stroke(); }
    o.setLineDash([]);
    for (const rv of I.rivers) { o.strokeStyle = '#3F93C8'; o.lineWidth = size / 340; o.beginPath(); rv.pts.forEach((p, i) => { const [u, v] = P(p.x, p.z); i ? o.lineTo(u, v) : o.moveTo(u, v); }); o.stroke(); }
    for (const st2 of I.sites) if (['house', 'hut', 'reedhut', 'mudhif', 'teahouse', 'lighthouse'].includes(st2.kind)) { const [u, v] = P(st2.x, st2.z); o.fillStyle = '#7A4A2A'; o.fillRect(u - 1.5, v - 1.5, 3, 3); }
    mapCanvas = out;
    return { canvas: out, x0: -HALF, x1: HALF, z0: -HALF, z1: HALF };
  }

  // ================================================================ كل فريم
  let waterT = 0;
  function update(t, dt, cam, hero, budget) {
    if (hero) { trolley.visible = hero.mode === 'zip'; if (trolley.visible) { trolley.position.set(hero.x, hero.y, hero.z); trolley.rotation.y = -hero.face; } }
    for (const o of itemObjs) { const live = S.items[o.idx], vis = !(live && live.taken) && (o.it.x - cam.x) ** 2 + (o.it.z - cam.z) ** 2 < 1500 * 1500; o.grp.visible = vis; if (!vis) continue; const d = Math.hypot(o.it.x - cam.x, o.it.z - cam.z); o.beam.visible = d > 6; o.beam.scale.set(1 + d / 220, 1 + d / 500, 1 + d / 220); o.gl.material.opacity = 0.55 + Math.sin(t * 3 + o.it.x) * 0.2; if (o.fe && o.it.task === 'feather') o.fe.rotation.y = t * 0.8; }
    drawBoard(); for (const ln of boardLamps) ln.rotation.z = Math.sin(t * 1.4 + ln.position.z) * 0.06;
    selectTerrain(cam.x, cam.z, cam.y);
    const left = buildSome(budget * 0.45);
    updateVeg(cam.x, cam.z, budget * 0.4);
    if (hero) updateGrass(hero.x, hero.z);
    if (mapRow < MAPN && !left) mapRows(budget * 0.15);
    waterT += dt; for (const m of waters) { m.normalMap.offset.set(waterT * 0.01, waterT * 0.006); }
    fires.forEach((f, fi) => { const k = 0.85 + Math.sin(t * 13 + fi * 1.7) * 0.1 + Math.sin(t * 23 + fi) * 0.06; f.children.slice(0, 3).forEach((c, i) => { c.scale.set(1, k + i * 0.05, 1); c.rotation.y = t * (1 + i); }); });
    for (const s of siteObjs) s.grp.visible = Math.hypot(s.x - cam.x, s.z - cam.z) < (s.st.kind === 'lighthouse' ? 4000 : s.st.kind === 'house' || s.st.kind === 'mudhif' ? 1600 : 700);
    for (const n of npcs) { n.head.rotation.y = Math.sin(t * 0.6 + n.root.position.x) * 0.35; }
    for (const f of fallsFx) f.m.material.map.offset.y = -t * 0.9;
    const snap = (26000 / 1400) * 11; sea.position.x = Math.round(cam.x / snap) * snap; sea.position.z = Math.round(cam.z / snap) * snap;
  }
  /** نجهّز اللي حوالين نقطة مرة وحدة (أول ما تدخل أو تصحى بمكان بعيد) حتى ما تبين أرض خشنة */
  function warm(x, z, y) {
    for (let k = 0; k < 3; k++) { selectTerrain(x, z, y); buildSome(1e9); }
    const ci = Math.floor(x / G.VC), cj = Math.floor(z / G.VC);
    for (const [i, j, d] of spiral) { if (d > 260) break; const kk = (ci + i) * 100003 + (cj + j); if (!known.has(kk)) { G.vegCell(ci + i, cj + j); known.add(kk); } }
    updateVeg(x, z, 1e9, 0); refill(x, z); grassAt = null; updateGrass(x, z);
  }
  const pending = () => want.length + (mapRow < MAPN ? 1 : 0);
  return { update, warm, colorIsland, mapShot, pending, buildSome, selectTerrain, tiles, refill, nearChunks, mid, far, sea, mapRows };
}
