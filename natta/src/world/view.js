// 🎨 نطّة — رسم العالم المفتوح (three.js): الأرض قطع بدرجتين تفاصيل، الغابة، الوادي، الساحة، الماي، الكائنات، والكاميرا.
// يقرا من الجغرافيا (geo) والمحاكاة (sim) بس، وما يغيّر بيهم شي.
import {
  Scene, PerspectiveCamera, OrthographicCamera, Color, Fog, HemisphereLight, DirectionalLight, Mesh, Group, InstancedMesh, Object3D, Vector3, Vector4,
  PlaneGeometry, SphereGeometry, CylinderGeometry, ConeGeometry, IcosahedronGeometry, DodecahedronGeometry, TorusGeometry, LatheGeometry,
  CapsuleGeometry, BoxGeometry, CircleGeometry, RingGeometry, TubeGeometry, ShapeGeometry, Shape, Vector2, BufferGeometry, BufferAttribute,
  MeshLambertMaterial, MeshPhongMaterial, MeshBasicMaterial, PointsMaterial, Points, DoubleSide, AdditiveBlending, LineSegments, LineBasicMaterial,
  CatmullRomCurve3, QuadraticBezierCurve3, Sprite, SpriteMaterial,
} from 'three';
import {
  TAU, clamp, lerp, smooth, damp, rng, hash2, vnoise, fbm, paint, tf, along, merge, mix, canvasTex, _c, _ca, _cb, angDiff, dampAngle,
  phong, shadowAll, makeSky, glowTexture, waterNormalTexture, swayMat, seeThroughMat, palmGeo, treeGeo, bushGeo, rockGeo, reedGeo, tuftGeo, makeHero, makeMan,
} from '../lib3d.js';
import { createIslandView } from './viewIsland.js';

const D2R = Math.PI / 180;

export function createView(cfg, G, sim) {
  const renderer = cfg.renderer, M = G.M, V = G.V, S = sim.S;
  const scene = new Scene();
  const FOG = new Color('#CFDFE8');
  scene.background = FOG; scene.fog = new Fog(FOG, 320, 3600);
  const camera = new PerspectiveCamera(62, 0.5, 0.25, 7000);
  const U = { time: { value: 0 }, wind: { value: 0 }, see: { value: new Vector4(0, 0, 0, 0) } };
  const R = rng(4242);
  const hemi = new HemisphereLight('#D2E6FF', '#6A8A4E', 1.0); scene.add(hemi);
  const SUN = new Vector3(0.5, 0.72, 0.45).normalize();
  const sun = new DirectionalLight('#FFE9C4', 2.9);
  sun.castShadow = true; sun.shadow.mapSize.set(2048, 2048);
  Object.assign(sun.shadow.camera, { left: -24, right: 24, top: 24, bottom: -24, near: 1, far: 180 });
  sun.shadow.bias = -0.0005; sun.shadow.normalBias = 0.03; sun.shadow.radius = 2.5;
  scene.add(sun, sun.target);
  const sky = makeSky('#3A7FD6', '#9CCBF2', '#EFE7D6', new Vector3(0.6, 0.35, -0.7)); scene.add(sky);
  const glowTex = glowTexture(), waterN = waterNormalTexture();
  const matVC = new MeshLambertMaterial({ vertexColors: true }), matFlat = new MeshLambertMaterial({ vertexColors: true, flatShading: true });
  const lodMat = new MeshLambertMaterial({ vertexColors: true, flatShading: true });
  const chunks = []; // قطع (نباتات وأرض) تنطفي إذا بعيدة
  const gkey = (cx, cz) => cx * 100003 + cz;

  // ================================================================ الأرض: قطع 64 م، تفاصيل 2 م قريب و8 م بعيد
  const HALF = G.HALF, CH = 64, NC = Math.ceil((HALF * 2) / CH), X0 = -NC * CH / 2;
  function colorAt(x, y, z, sl, out) {
    const r = M.rad(x, z), hv = V.Hv(x, z), inV = hv <= y + 0.02 && hv < 1e8;
    if (inV) { // الوادي: عشب أخضر، رمل يم الساقية، وجدران صخر رملي
      const lx = x - V.x, lz = z - V.z, az = Math.abs(lz), n = fbm(lx * 0.07 + 11, lz * 0.07), n2 = vnoise(lx * 0.5, lz * 0.5);
      mix(out, '#5FAE3E', '#9AD85E', n * 1.3 - 0.15 + n2 * 0.2);
      const rz = Math.abs(lz - V.riverZ(lx)); if (rz < 2.4 && az < V.FLOOR + 1 && lx > -4) out.lerp(_ca.set(rz < 1 ? '#8F8A62' : '#D9C891'), smooth(2.4, 1.3, rz));
      const rock = smooth(1.2, 5, y - V.VF) * smooth(V.FLOOR - 0.5, V.FLOOR + 4, az) + smooth(0.55, 0.9, sl) * 0.8;
      if (rock > 0) { const band = 0.5 + 0.5 * Math.sin(y * 1.9 + fbm(x * 0.05, z * 0.05) * 4); mix(_cb, '#B98F62', '#DDBE8E', band); _cb.lerp(_ca.set('#8E6A48'), vnoise(x * 0.35, y * 0.6) * 0.35); out.lerp(_cb, clamp(rock, 0, 1)); }
      if (lx < 0 && az < 9) out.lerp(_ca.set('#A88C62'), smooth(-2, -12, lx) * smooth(9, 5, az) * 0.6); // طريق المدخل
      return out;
    }
    if (r < 205) { // الجبل
      mix(out, '#3E6E2E', '#6E9A44', fbm(x * 0.06 + 3, z * 0.06) * 1.2 - 0.1);
      if (sl > 0.8) { mix(_ca, '#5E5A55', '#A9A398', vnoise(x * 0.35 + z * 0.2, y * 1.6) * 0.8 + vnoise(x * 2, z * 2 + y) * 0.35); out.lerp(_ca, smooth(0.8, 1.3, sl)); }
      const q = M.nearest(x, z, y, 1); if (q && q.d < q.p.hw + 0.9 && q.p.kind !== 'bridge') out.lerp(_ca.set('#9C7E55'), smooth(q.p.hw + 0.9, q.p.hw - 0.2, q.d) * 0.85);
      if (r < M.RP + 1) out.set('#9A9388');
      if (r > 190) out.lerp(_ca.set('#5E8F3E'), smooth(190, 205, r));
      return out;
    }
    return null; // الباقي: ألوان الجزيرة (viewIsland)
    const e = Math.max(Math.abs(x), Math.abs(z));
    mix(out, '#5E8F3E', '#9BBF5C', fbm(x * 0.02 + 9, z * 0.02) * 1.25 - 0.15);
    out.lerp(_ca.set('#C8B87A'), smooth(0.55, 0.85, vnoise(x * 0.01 + 3, z * 0.01)) * 0.45);
    if (sl > 0.75) { mix(_ca, '#6D675E', '#ABA294', vnoise(x * 0.2, y * 0.7)); out.lerp(_ca, smooth(0.75, 1.2, sl)); }
    if (y > 40) out.lerp(_ca.set('#F2F5F8'), smooth(40, 60, y + (vnoise(x * 0.05, z * 0.05) - 0.5) * 16) * smooth(380, 430, e));
    return out;
  }
  let IV = null; // 🏝️ رسم الجزيرة (ينبني تحت بعد ما تجهز النباتات والماي)
  function buildHi() { return !IV || !IV.pending(); }
  // شريط التراب على الطرق
  {
    const tex = canvasTex(64, 256, (g, w, h) => {
      g.clearRect(0, 0, w, h);
      for (let y = 0; y < h; y += 2) { const e1 = 6 + vnoise(y * 0.06, 1) * 8, e2 = w - 6 - vnoise(y * 0.06, 5) * 8; const gr = g.createLinearGradient(e1, 0, e2, 0); gr.addColorStop(0, 'rgba(150,118,78,0)'); gr.addColorStop(0.2, 'rgba(150,118,78,.95)'); gr.addColorStop(0.8, 'rgba(140,108,70,.95)'); gr.addColorStop(1, 'rgba(140,108,70,0)'); g.fillStyle = gr; g.fillRect(e1, y, e2 - e1, 2); }
      for (let i = 0; i < 260; i++) { g.fillStyle = `rgba(${90 + (i % 5) * 20},${80 + (i % 7) * 12},${60 + (i % 3) * 10},.6)`; g.beginPath(); g.arc(8 + Math.random() * (w - 16), Math.random() * h, 0.5 + Math.random() * 1.4, 0, TAU); g.fill(); }
    }, [1, 1]);
    const pos = [], uv = [], idx = []; let base = 0;
    const flushRun = (run) => {
      if (run.length < 2) return; let v = 0;
      run.forEach((p, i) => {
        const a = run[Math.max(0, i - 1)], b = run[Math.min(run.length - 1, i + 1)], tx = b.x - a.x, tz = b.z - a.z, l = Math.hypot(tx, tz) || 1, nx = -tz / l, nz = tx / l, w = p.hw + 0.35;
        if (i) v += Math.hypot(p.x - run[i - 1].x, p.z - run[i - 1].z) / 6;
        pos.push(p.x + nx * w, p.y + 0.06, p.z + nz * w, p.x - nx * w, p.y + 0.06, p.z - nz * w); uv.push(0, v, 1, v);
        if (i) { const q = base + (i - 1) * 2; idx.push(q, q + 2, q + 1, q + 1, q + 2, q + 3); }
      });
      base += run.length * 2;
    };
    for (const s of M.segs) { let run = []; for (const p of s.pts) { if (p.kind === 'bridge' || p.kind === 'stones' || p.kind === 'stairs') { flushRun(run); run = []; } else run.push(p); } flushRun(run); }
    // طريق مدخل الوادي (من سفح الجبل لقاع الوادي)
    const g = new BufferGeometry(); g.setAttribute('position', new BufferAttribute(new Float32Array(pos), 3)); g.setAttribute('uv', new BufferAttribute(new Float32Array(uv), 2)); g.setIndex(idx); g.computeVertexNormals();
    const m = new Mesh(g, new MeshLambertMaterial({ map: tex, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2, side: DoubleSide }));
    m.receiveShadow = true; scene.add(m);
  }
  // ================================================================ الماي
  {
    const g = M.stream, pos = [], uv = [], idx = []; let n = 0;
    for (let r = g.r0; r <= g.r1; r += 1) { const cx = M.x + Math.cos(g.a) * r, cz = M.z + Math.sin(g.a) * r, nx = -Math.sin(g.a), nz = Math.cos(g.a), y = M.Hnat(cx, cz) + 0.5; pos.push(cx + nx * 2.2, y, cz + nz * 2.2, cx - nx * 2.2, y, cz - nz * 2.2); uv.push(0, r / 4, 1, r / 4); if (n) { const q = (n - 1) * 2; idx.push(q, q + 2, q + 1, q + 1, q + 2, q + 3); } n++; }
    const geo = new BufferGeometry(); geo.setAttribute('position', new BufferAttribute(new Float32Array(pos), 3)); geo.setAttribute('uv', new BufferAttribute(new Float32Array(uv), 2)); geo.setIndex(idx); geo.computeVertexNormals();
    const w = new Mesh(geo, new MeshPhongMaterial({ color: '#4AA6D8', specular: '#FFFFFF', shininess: 140, normalMap: waterN, transparent: true, opacity: 0.9, side: DoubleSide })); w.material.normalScale.set(0.8, 0.8); scene.add(w);
  }
  {
    const pos = [], uv = [], idx = []; let n = 0;
    for (let lx = -6; lx <= V.VL + 6; lx += 0.5) {
      const z = V.riverZ(lx), dz = (V.riverZ(lx + 0.1) - z) / 0.1, l = Math.hypot(1, dz), nxv = -dz / l, nzv = 1 / l, y = V.waterLevel(lx);
      for (const s of [-1.35, 1.35]) { pos.push(V.x + lx + nxv * s, y, V.z + z + nzv * s); uv.push(lx / 3, s > 0 ? 1 : 0); }
      if (n) { const a = (n - 1) * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
      n++;
    }
    const g = new BufferGeometry(); g.setAttribute('position', new BufferAttribute(new Float32Array(pos), 3)); g.setAttribute('uv', new BufferAttribute(new Float32Array(uv), 2)); g.setIndex(idx); g.computeVertexNormals();
    const m = new Mesh(g, new MeshPhongMaterial({ color: '#3D9FD8', specular: '#FFFFFF', shininess: 140, normalMap: waterN, transparent: true, opacity: 0.88 }));
    m.material.normalScale.set(0.7, 0.7); m.receiveShadow = true; scene.add(m);
  }
  // ================================================================ النباتات
  const pineGeo = (r, tiers, h0, w0, dark) => {
    const parts = [paint(tf(new CylinderGeometry(0.13, 0.22, h0 * 0.45, 6), 0, h0 * 0.22, 0), '#5A3E26')];
    for (let i = 0; i < tiers; i++) { const k = i / tiers, w = w0 * (1 - k * 0.62), hh = h0 * 0.42; parts.push(tf(paint(new ConeGeometry(w, hh, 8, 1), (c, x, y) => mix(c, dark ? '#1F4A2B' : '#24572F', dark ? '#3F7A43' : '#4E8C46', 0.25 + (y / hh + 0.5) * 0.6 + (hash2(x * 7, y * 3) - 0.5) * 0.25)), 0, h0 * 0.32 + i * h0 * 0.22 + hh / 2, 0, 0, r() * 3, 0)); }
    return merge(parts);
  };
  const leafyGeo = () => { const r = rng(43); const parts = [paint(tf(new CylinderGeometry(0.14, 0.22, 2.6, 6), 0, 1.3, 0), '#5A3E26')]; for (const [x, y, z, rr] of [[0, 3.1, 0, 1.35], [0.7, 2.6, 0.3, 0.95], [-0.6, 2.7, -0.4, 1.0], [0.1, 3.8, -0.2, 0.9]]) parts.push(tf(paint(new IcosahedronGeometry(rr, 0), (c, px, py) => mix(c, '#2C6B33', '#6FAE4E', 0.3 + (py / rr) * 0.35 + (r() - 0.5) * 0.3)), x, y, z)); return merge(parts); };
  const lodPine = (h0, w0, dark) => paint(tf(new ConeGeometry(w0 * 0.9, h0 * 0.95, 6, 1, true), 0, h0 * 0.62, 0), (c, x, y) => mix(c, dark ? '#1F4A2B' : '#24572F', dark ? '#3F7A43' : '#4E8C46', 0.3 + (y / h0 + 0.5) * 0.5));
  const mats = { pine: swayMat(new MeshLambertMaterial({ vertexColors: true, flatShading: true }), 0.006, 2.0, U), tree: swayMat(new MeshLambertMaterial({ vertexColors: true, flatShading: true }), 0.01, 1.2, U), palm: swayMat(new MeshLambertMaterial({ vertexColors: true, side: DoubleSide }), 0.012, 2.8, U), grass: swayMat(new MeshLambertMaterial({ vertexColors: true, side: DoubleSide }), 0.5, 0, U) };
  const geos = { pineA: pineGeo(rng(5), 4, 7.5, 2.0, false), pineB: pineGeo(rng(6), 3, 6, 2.5, true), oak: leafyGeo() };
  function scatterChunks(geo, mat, list, opts = {}) {
    const by = new Map(), o = new Object3D(), size = opts.size || 26;
    for (const it of list) { const k = gkey(Math.floor(it.x / size), Math.floor(it.z / size)); if (!by.has(k)) by.set(k, []); by.get(k).push(it); }
    for (const items of by.values()) {
      const im = new InstancedMesh(geo, mat, items.length); let cx = 0, cz = 0;
      items.forEach((it, n) => { o.position.set(it.x, it.y, it.z); o.rotation.set(it.rx || 0, it.ry || 0, it.rz || 0); if (it.s3) o.scale.set(...it.s3); else o.scale.setScalar(it.s || 1); o.updateMatrix(); im.setMatrixAt(n, o.matrix); if (it.color) im.setColorAt(n, _c.set(it.color)); cx += it.x; cz += it.z; });
      im.castShadow = !!opts.cast; im.receiveShadow = true; im.computeBoundingSphere(); scene.add(im);
      let lo = null; if (opts.lod) { lo = new InstancedMesh(opts.lod, lodMat, items.length); lo.instanceMatrix = im.instanceMatrix; lo.computeBoundingSphere(); lo.visible = false; scene.add(lo); }
      chunks.push({ m: im, lo, x: cx / items.length, z: cz / items.length, far: opts.far || 105, lodAt: opts.lodAt || 62, small: !!opts.small });
    }
  }
  const vg = G.veg;
  scatterChunks(geos.pineA, mats.pine, vg.pineA, { cast: true, lod: lodPine(7.5, 2.0, false) });
  scatterChunks(geos.pineB, mats.pine, vg.pineB, { cast: true, lod: lodPine(6, 2.5, true) });
  scatterChunks(geos.oak, mats.tree, vg.oak, { cast: true, lod: tf(paint(new IcosahedronGeometry(1.5, 0), '#3E7D3A'), 0, 3.1, 0) });
  const hedgeGeo = merge([tf(paint(new IcosahedronGeometry(0.85, 0), (c, x, y, z) => mix(c, '#1E4A24', '#4C8A3E', 0.35 + y * 0.4 + hash2(x * 9, z * 9) * 0.3)), 0, 0.55, 0, 0, 0, 0, 1, 0.95, 1), tf(paint(new IcosahedronGeometry(0.6, 0), (c, x, y) => mix(c, '#2A5C2C', '#5E9E48', 0.5 + y * 0.5)), 0.25, 1.25, 0.1)]);
  const matSee = seeThroughMat(matFlat, U); // سياج المتاهة والشجيرات: تنفتح إذا غطّت البطل
  scatterChunks(hedgeGeo, matSee, vg.hedge, { size: 26, far: 70, cast: false });
  scatterChunks(bushGeo(), matSee, vg.bush, { size: 30, far: 70, small: true });
  scatterChunks(rockGeo(), matFlat, vg.rock, { size: 30, far: 120 });
  // الوادي
  const palmGeos = [palmGeo(rng(3), 1.1, 9), palmGeo(rng(8), -0.8, 10), palmGeo(rng(15), 0.5, 8)];
  const palmLod = merge([paint(tf(new CylinderGeometry(0.25, 0.4, 8, 5), 0, 4, 0), '#8B6A3E'), paint(tf(new IcosahedronGeometry(1.6, 0), 0, 8.4, 0, 0, 0, 0, 1, 0.55, 1), '#3A7F34')]);
  palmGeos.forEach((geo, i) => scatterChunks(geo, mats.palm, vg.palm[i].map((it) => ({ ...it, s: it.s * 2.2 })), { cast: true, lod: palmLod, lodAt: 70, far: 260 }));
  const fruitGeos = [treeGeo(rng(21), '#E8443A', ['#2F8A3C', '#7CCB55']), treeGeo(rng(33), null, ['#3B9447', '#8AD460']), treeGeo(rng(41), '#FFB52E', ['#2C7F3A', '#6FC24F'])];
  fruitGeos.forEach((geo, i) => scatterChunks(geo, mats.tree, vg.fruit[i].map((it) => ({ ...it, s: it.s * 1.5 })), { cast: true, far: 220 }));
  scatterChunks(bushGeo(), matFlat, vg.vbush, { size: 30, far: 90, small: true });
  scatterChunks(rockGeo(), matFlat, vg.vrock, { size: 30, far: 70, small: true });
  scatterChunks(paint(new DodecahedronGeometry(0.5, 1), (c, x, y, z) => mix(c, '#9C7A56', '#D2B387', 0.45 + y * 0.9 + (hash2(x * 5, z * 5) - 0.5) * 0.4)), matFlat, vg.boulder, { size: 40, far: 260 });
  scatterChunks(merge([tf(paint(new CylinderGeometry(0.15, 0.22, 1.6, 5), '#6B4A2A'), 0, 0.8, 0), tf(paint(new IcosahedronGeometry(1.2, 0), (c, x, y) => mix(c, '#4F7F3A', '#8DB45E', y / 1.2 * 0.5 + 0.5)), 0, 2.3, 0, 0, 0, 0, 1, 0.85, 1)]), matFlat, vg.rim, { size: 40, far: 300 });
  { // عشب وورد وقصب بالوادي، وعشب وسرخس على حافات طرق الجبل
    const vr = rng(5151), W = (lx, lz) => [V.x + lx, V.z + lz];
    const nearCamp = (x, z, r) => V.CAMPS.some((c) => Math.hypot(x - c.x, z - c.z) < r);
    const tufts = [], flowers = [], reeds = [];
    for (let tries = 0; tufts.length < 6000 && tries < 30000; tries++) { const lx = -3 + vr() * (V.VL + 6), lz = (vr() < 0.5 ? -1 : 1) * vr() * (V.FLOOR + 3); if (Math.abs(lz - V.riverZ(lx)) < 1.15 || nearCamp(lx, lz, 3.9)) continue; const [x, z] = W(lx, lz); if (G.slope(x, z) > 0.6) continue; tufts.push({ x, y: G.H(x, z) - 0.02, z, ry: vr() * TAU, s: 0.5 + vr() * 0.7 }); }
    const cols = ['#FF6B9A', '#FFFFFF', '#FFD23F', '#B28DFF', '#FF8C42', '#FF4D6D', '#7FD1FF'];
    for (let i = 0; i < 9000 && flowers.length < 2400; i++) { const lx = -2 + vr() * (V.VL + 4), lz = (vr() < 0.5 ? -1 : 1) * vr() * (V.FLOOR - 0.3); if (Math.abs(lz - V.riverZ(lx)) < 1.3 || nearCamp(lx, lz, 3.9) || vnoise(lx * 0.16, lz * 0.16) < 0.42) continue; const [x, z] = W(lx, lz); flowers.push({ x, y: G.H(x, z), z, ry: vr() * TAU * 0.25, s: 1.2 + vr() * 0.8, color: cols[Math.floor(vnoise(lx * 0.3 + 40, lz * 0.3) * cols.length * 0.999 + vr() * 1.5) % cols.length] }); }
    for (let lx = -4; lx < V.VL + 4; lx += 0.55) for (const side of [-1, 1]) { if (vr() < 0.35) continue; const lz = V.riverZ(lx) + side * (1.05 + vr() * 0.55); if (nearCamp(lx, lz, 5)) continue; const [x, z] = W(lx, lz); reeds.push({ x, y: G.H(x, z) - 0.05, z, ry: vr() * TAU, s: 0.7 + vr() * 0.6 }); }
    scatterChunks(tuftGeo(), mats.grass, tufts, { size: 24, far: 55, small: true });
    const stem = merge([tf(paint(new CylinderGeometry(0.007, 0.01, 0.24, 3, 1, true), '#3E8E36'), 0, 0.12, 0), tf(paint(new CircleGeometry(0.02, 6), '#FFD54A'), 0, 0.248, 0.004, -1.0, 0, 0)]);
    const petals = merge([0, 1, 2, 3, 4].map((i) => { const a = (i / 5) * TAU; return tf(paint(new CircleGeometry(0.036, 5), '#FFFFFF'), Math.cos(a) * 0.035, Math.sin(a) * 0.035, 0, 0, 0, a); })); tf(petals, 0, 0.245, 0, -1.0, 0, 0);
    scatterChunks(stem, swayMat(matVC, 0.8, 0.0, U), flowers.map((s) => ({ ...s, color: null })), { size: 24, far: 45, small: true });
    scatterChunks(petals, swayMat(new MeshLambertMaterial({ vertexColors: true, side: DoubleSide }), 0.8, 0.0, U), flowers, { size: 24, far: 45, small: true });
    scatterChunks(reedGeo(), swayMat(matVC, 0.09, 0.2, U), reeds, { size: 24, far: 70, small: true });
    const mt = [], ferns = [];
    for (const p of M.ALL) {
      if (p.kind === 'bridge' || p.kind === 'stones' || p.k % 2) continue;
      const s = p.seg.pts, nx0 = -(s[Math.min(p.k + 1, s.length - 1)].z - s[Math.max(p.k - 1, 0)].z), nz0 = s[Math.min(p.k + 1, s.length - 1)].x - s[Math.max(p.k - 1, 0)].x, l = Math.hypot(nx0, nz0) || 1;
      for (const sd of [-1, 1]) { const off = p.hw + 0.15 + R() * 1.4, x = p.x + (nx0 / l) * off * sd, z = p.z + (nz0 / l) * off * sd, y = G.H(x, z), r = R(); if (r < 0.55) mt.push({ x, y: y - 0.02, z, ry: R() * TAU, s: 0.6 + R() * 0.7 }); else if (r < 0.8) ferns.push({ x, y, z, ry: R() * TAU, s: 0.7 + R() * 0.6 }); }
    }
    scatterChunks(tuftGeo(), mats.grass, mt, { size: 30, far: 45, small: true });
    const fernGeo = merge([...Array(7)].map((_, i) => {
      const a = (i / 7) * TAU, Lf = 0.55 + (i % 3) * 0.12, pos = [], col = [];
      for (let s = 0; s < 6; s++) { const k0 = s / 6, k1 = (s + 1) / 6, w0 = Math.sin(k0 * Math.PI) * 0.09, w1 = Math.sin(k1 * Math.PI) * 0.09, p0 = [Math.cos(a) * Lf * k0, Math.sin(k0 * Math.PI * 0.8) * 0.3, Math.sin(a) * Lf * k0], p1 = [Math.cos(a) * Lf * k1, Math.sin(k1 * Math.PI * 0.8) * 0.3, Math.sin(a) * Lf * k1], sx = -Math.sin(a), sz = Math.cos(a); pos.push(p0[0] - sx * w0, p0[1], p0[2] - sz * w0, p1[0] - sx * w1, p1[1], p1[2] - sz * w1, p0[0] + sx * w0, p0[1], p0[2] + sz * w0, p0[0] + sx * w0, p0[1], p0[2] + sz * w0, p1[0] - sx * w1, p1[1], p1[2] - sz * w1, p1[0] + sx * w1, p1[1], p1[2] + sz * w1); for (let q = 0; q < 6; q++) { mix(_c, '#2F6B2C', '#79B356', k0 + 0.2); col.push(_c.r, _c.g, _c.b); } }
      const g = new BufferGeometry(); g.setAttribute('position', new BufferAttribute(new Float32Array(pos), 3)); g.setAttribute('color', new BufferAttribute(new Float32Array(col), 3)); g.computeVertexNormals(); return g;
    }));
    scatterChunks(fernGeo, swayMat(new MeshLambertMaterial({ vertexColors: true, side: DoubleSide }), 0.35, 0, U), ferns, { size: 30, far: 50, small: true });
  }
  // ☁️ غيوم فوك الجزيرة، و🏝️ الجزيرة نفسها (أرض تتحمّل، شجر حقيقي، بحر، أنهار، مباني)
  const clouds = new Group(); scene.add(clouds);
  {
    const ctex = canvasTex(256, 128, (g, w, h) => { g.clearRect(0, 0, w, h); const r2 = rng(3); for (let i = 0; i < 22; i++) { const x = w * (0.18 + r2() * 0.64), y = h * (0.42 + r2() * 0.28), rr = 18 + r2() * 30; const gr = g.createRadialGradient(x, y, 0, x, y, rr); gr.addColorStop(0, 'rgba(255,255,255,.95)'); gr.addColorStop(0.6, 'rgba(250,252,255,.55)'); gr.addColorStop(1, 'rgba(240,246,255,0)'); g.fillStyle = gr; g.beginPath(); g.arc(x, y, rr, 0, TAU); g.fill(); } });
    for (let i = 0; i < 46; i++) { const a = R() * TAU, r = 600 + R() * 6200, sp = new Sprite(new SpriteMaterial({ map: ctex, transparent: true, opacity: 0.45 + R() * 0.35, depthWrite: false, fog: false })); const w = 380 + R() * 520; sp.scale.set(w, w * 0.38, 1); sp.position.set(Math.cos(a) * r, G.SEA + 1400 + R() * 800, Math.sin(a) * r); clouds.add(sp); } // غيوم حقيقية (1.4–2.2 كم فوك البحر)
  }
  IV = createIslandView({ scene, G, U, camera, waterN, glowTex, colorBase: colorAt });
  // ================================================================ الجسور، الحجار، الدرج، اللافتات، الاستراحات، صخور الجرف، الجذوع
  const signTex = (text, w = 256, h = 64, size = 34) => canvasTex(w, h, (g) => { g.fillStyle = '#8B5A2B'; g.fillRect(0, 0, w, h); g.strokeStyle = '#E8C170'; g.lineWidth = Math.max(4, h / 16); g.strokeRect(4, 4, w - 8, h - 8); g.fillStyle = '#FFF3D6'; g.font = `900 ${size}px -apple-system, "Geeza Pro", system-ui, sans-serif`; g.textAlign = 'center'; g.textBaseline = 'middle'; try { g.direction = 'rtl'; } catch (e) { /* */ } g.fillText(text, w / 2, h / 2 + 2); });
  const flags = new Map();
  {
    const P = [];
    for (const b of M.bridges) {
      b.seg.pts.slice(b.i, b.j + 1).forEach((p, n) => { if (p.gap) return; const q = b.seg.pts[Math.min(p.k + 1, b.seg.pts.length - 1)], a = Math.atan2(q.z - p.z, q.x - p.x); P.push(tf(paint(new BoxGeometry(0.5, 0.07, 1.45), (c, x, y, z) => mix(c, '#7A5634', '#A57B4C', hash2(n, z * 3) * 0.6 + (y > 0 ? 0.3 : 0))), p.x, p.y - 0.035, p.z, 0, -a, 0)); });
      for (const sd of [-1, 1]) for (const hg of [0.95, 0.45]) { const rope = []; for (let k = b.i - 1; k <= b.j + 1; k++) { const s = b.seg.pts, p = s[clamp(k, 0, s.length - 1)], q = s[clamp(k + 1, 0, s.length - 1)], o = s[clamp(k - 1, 0, s.length - 1)], tx = q.x - o.x, tz = q.z - o.z, l = Math.hypot(tx, tz) || 1; rope.push(new Vector3(p.x - (tz / l) * 0.72 * sd, p.y + hg, p.z + (tx / l) * 0.72 * sd)); } P.push(paint(new TubeGeometry(new CatmullRomCurve3(rope), rope.length * 2, 0.03, 5), '#C9A46B')); }
      for (const e of [b.a, b.b]) for (const sd of [-1, 1]) { const s = e.seg.pts, q = s[Math.min(e.k + 1, s.length - 1)], o = s[Math.max(e.k - 1, 0)], tx = q.x - o.x, tz = q.z - o.z, l = Math.hypot(tx, tz) || 1; P.push(tf(paint(new CylinderGeometry(0.09, 0.11, 1.5, 6), '#5C3A1A'), e.x - (tz / l) * 0.8 * sd, e.y + 0.6, e.z + (tx / l) * 0.8 * sd)); }
    }
    for (const p of M.ALL) if (p.kind === 'stairs') { const s = p.seg.pts, q = s[Math.min(p.k + 1, s.length - 1)], o = s[Math.max(p.k - 1, 0)], a = Math.atan2(q.z - o.z, q.x - o.x); P.push(tf(paint(new BoxGeometry(0.9, 0.5, 2.7), (c, x, y, z) => mix(c, '#7C766B', '#ABA393', y + 0.4 + hash2(p.k, z * 5) * 0.3)), p.x, p.y - 0.25, p.z, 0, -a + (hash2(p.k, 3) - 0.5) * 0.08, 0)); }
    for (const { p, nx, nz, sz } of M.ledgeRocks) { P.push(tf(paint(new DodecahedronGeometry(1, 0).scale(sz, sz * (1.3 + hash2(p.k, 5)), sz * 0.8), (c, x, y, z) => mix(c, '#5E5A55', '#A9A398', 0.35 + y * 0.2 + hash2(x * 5 + p.k, z * 5) * 0.3)), p.x + nx * (p.hw + sz), p.y + sz * 0.3, p.z + nz * (p.hw + sz), hash2(p.k, 2) * 0.4, hash2(p.k, 4) * 3, 0)); if (p.k % 6 === 0) P.push(tf(paint(new DodecahedronGeometry(0.25, 0), '#8A847A'), p.x - nx * (p.hw - 0.05), p.y + 0.08, p.z - nz * (p.hw - 0.05))); }
    for (const s of M.stones) P.push(tf(paint(new CylinderGeometry(s.r, s.r * 1.12, 1.4, 9), (c, x, y) => mix(c, '#7F7A72', '#B7B1A6', y + 0.6 + hash2(x * 9, s.x) * 0.2)), s.x, s.y - 0.7, s.z, 0, R() * 3, 0));
    { // لافتة بداية الطريق
      const c0 = M.rest[0], a = c0.face, sx = -Math.sin(a), sz = Math.cos(a), bx = c0.x + Math.cos(a) * 3, bz = c0.z + Math.sin(a) * 3;
      for (const sd of [-1, 1]) P.push(tf(paint(new CylinderGeometry(0.11, 0.13, 3.4, 7), '#5C3A1A'), bx + sx * 2 * sd, c0.y + 1.7, bz + sz * 2 * sd));
      P.push(tf(paint(new BoxGeometry(0.2, 0.2, 4.6), '#4F3420'), bx, c0.y + 3.35, bz, 0, -a, 0));
      const board = new Mesh(new PlaneGeometry(3.4, 0.85), new MeshLambertMaterial({ map: signTex('⛰️ طريق القمة', 512, 128, 60), side: DoubleSide })); board.position.set(bx, c0.y + 2.85, bz); board.rotation.y = -a - Math.PI / 2; scene.add(board);
    }
    { // لافتة مدخل الوادي
      const lx = -6, x = V.x + lx, z = V.z + 5.5, y = G.H(x, z);
      P.push(tf(paint(new CylinderGeometry(0.08, 0.1, 2.4, 6), '#5C3A1A'), x, y + 1.2, z));
      const board = new Mesh(new PlaneGeometry(2.4, 0.6), new MeshLambertMaterial({ map: signTex('🏞️ وادي الغزلان', 384, 96, 46), side: DoubleSide })); board.position.set(x, y + 2.25, z); board.rotation.y = Math.PI / 2; scene.add(board);
    }
    for (const c of M.rest) if (c.flag) {
      for (let i = 0; i < 6; i++) P.push(tf(paint(new DodecahedronGeometry(0.22 - i * 0.025, 0), '#9D978C'), c.x + 1.6, c.y + 0.15 + i * 0.25, c.z + 1.1));
      P.push(tf(paint(new CylinderGeometry(0.05, 0.06, 2.4, 6), '#5C3A1A'), c.x - 1.4, c.y + 1.2, c.z - 1.1));
      const g = new BufferGeometry(); g.setAttribute('position', new BufferAttribute(new Float32Array([0, 0.32, 0, 0, -0.32, 0, 1.05, 0, 0]), 3)); g.computeVertexNormals();
      const f = new Mesh(g, new MeshLambertMaterial({ color: '#F4F1EA', side: DoubleSide })); f.position.set(c.x - 1.4, c.y + 2.05, c.z - 1.1); scene.add(f); flags.set(c.id, f);
    }
    const mazeSign = signTex('⬅ للقمة');
    for (const s of M.signs) { const y = G.H(s.x, s.z); P.push(tf(paint(new CylinderGeometry(0.06, 0.07, 1.9, 6), '#5C3A1A'), s.x, y + 0.95, s.z)); const board = new Mesh(new PlaneGeometry(1.1, 0.28), new MeshLambertMaterial({ map: mazeSign, side: DoubleSide })); board.position.set(s.x + Math.cos(s.a) * 0.45, y + 1.65, s.z + Math.sin(s.a) * 0.45); board.rotation.y = -s.a + Math.PI; scene.add(board); }
    for (const lg of M.logs) { const y = G.H(lg.x, lg.z); P.push(tf(paint(new CylinderGeometry(0.32, 0.38, 4.2, 8), (c, xx, yy) => c.set(Math.abs(yy) > 2 ? '#C9A36B' : '#5A3E26')), lg.x, y + 0.35, lg.z, 0, lg.a, Math.PI / 2)); }
    const m = new Mesh(merge(P), new MeshLambertMaterial({ vertexColors: true, side: DoubleSide })); m.castShadow = true; m.receiveShadow = true; scene.add(m);
  }
  const coinMax = 200;
  const coinMesh = new InstancedMesh(new CylinderGeometry(0.22, 0.22, 0.05, 20), new MeshPhongMaterial({ color: '#FFC93C', specular: '#FFF4C0', shininess: 90, emissive: '#6B4A00', emissiveIntensity: 0.55 }), coinMax);
  coinMesh.castShadow = true; coinMesh.frustumCulled = false; coinMesh.count = 0; scene.add(coinMesh);

  // ================================================================ ساحة القمة (~555 م²)
  const PL = M.plaza, RP = M.RP, HS = M.HS;
  const plaza = new Group(); plaza.position.set(PL.x, HS, PL.z); scene.add(plaza);
  const npcs = [];
  const fx = { flag: null, flagBase: null, bell: null, lanterns: [], water: null, drops: null, leaves: null, kiosk: null, cups: [], streaks: null, scope: null };
  const pzL = (a, r) => [Math.cos(a * D2R) * r, Math.sin(a * D2R) * r];
  const glassM = new MeshPhongMaterial({ color: '#B5562A', specular: '#FFFFFF', shininess: 120, transparent: true, opacity: 0.85 });
  const brass = new MeshPhongMaterial({ color: '#C9A13B', specular: '#FFE9A8', shininess: 90 });
  {
    const tileTex = canvasTex(512, 512, (g, w, h) => { g.fillStyle = '#B9B1A3'; g.fillRect(0, 0, w, h); for (let ring = 0; ring < 12; ring++) { const r0 = ring * 22, r1 = r0 + 22, n = Math.max(6, Math.round((TAU * (r0 + 11)) / 34)); for (let i = 0; i < n; i++) { const a0 = (i / n) * TAU, a1 = ((i + 1) / n) * TAU, t = 0.82 + ((ring * 7 + i * 3) % 5) * 0.04; g.fillStyle = `rgb(${Math.round(196 * t)},${Math.round(186 * t)},${Math.round(168 * t)})`; g.beginPath(); g.arc(w / 2, h / 2, r1 - 1.5, a0 + 0.01, a1 - 0.01); g.arc(w / 2, h / 2, Math.max(0, r0 + 1.5), a1 - 0.01, a0 + 0.01, true); g.closePath(); g.fill(); } } });
    const floor = new Mesh(new CircleGeometry(RP, 64), new MeshLambertMaterial({ map: tileTex })); floor.rotation.x = -Math.PI / 2; floor.position.y = 0.03; floor.receiveShadow = true; plaza.add(floor);
    const P = [];
    for (let i = 0; i < 64; i++) { const a = (i / 64) * TAU; if (Math.abs(angDiff(a, M.ENTRY_A)) < 0.16 || Math.abs(angDiff(a, M.DECK_A)) < 0.2) continue; P.push(tf(paint(new BoxGeometry(1.36, 0.72, 0.55), (c, x, y, z) => mix(c, '#8E877B', '#B8AF9F', 0.4 + y + hash2(i, z * 4) * 0.3)), Math.cos(a) * (RP - 0.1), 0.36, Math.sin(a) * (RP - 0.1), 0, -a + Math.PI / 2, 0)); }
    for (let k = 0; k < 10; k++) P.push(tf(paint(new BoxGeometry(0.46, 0.08, 3.6), (c, x, y, z) => mix(c, '#7A5634', '#A57B4C', hash2(k, z) * 0.5 + 0.3)), RP - 0.3 + k * 0.48, 0.05, 0));
    for (const sd of [-1, 1]) { P.push(tf(paint(new BoxGeometry(4.8, 0.07, 0.07), '#6B4423'), RP + 2.1, 0.95, sd * 1.8)); for (let k = 0; k < 5; k++) P.push(tf(paint(new CylinderGeometry(0.05, 0.05, 1, 6), '#5C3A1A'), RP + 0.1 + k * 1.1, 0.5, sd * 1.8)); }
    P.push(tf(paint(new BoxGeometry(0.07, 0.07, 3.6), '#6B4423'), RP + 4.5, 0.95, 0));
    for (let k = -1; k <= 1; k++) P.push(tf(paint(new CylinderGeometry(0.06, 0.06, 1, 6), '#5C3A1A'), RP + 4.5, 0.5, k * 1.6));
    for (let k = 0; k < 4; k++) P.push(tf(paint(new CylinderGeometry(0.12, 0.14, 7, 6), '#4F3420'), RP + 0.5 + k * 1.3, -3.4, (k % 2 ? 1 : -1) * 1.5));
    P.push(paint(new LatheGeometry([new Vector2(0.001, 0), new Vector2(2.35, 0), new Vector2(2.45, 0.08), new Vector2(2.4, 0.62), new Vector2(2.15, 0.66), new Vector2(2.1, 0.22), new Vector2(0.001, 0.22)], 40), (c, x, y) => mix(c, '#9F988C', '#D6CFC2', y * 1.5 + 0.2)));
    P.push(paint(new LatheGeometry([new Vector2(0.001, 0.2), new Vector2(0.32, 0.2), new Vector2(0.22, 0.9), new Vector2(0.18, 1.4), new Vector2(0.7, 1.55), new Vector2(0.72, 1.68), new Vector2(0.15, 1.72), new Vector2(0.12, 2.15), new Vector2(0.2, 2.3), new Vector2(0.001, 2.38)], 24), (c, x, y) => mix(c, '#A79F92', '#DCD5C8', y * 0.4)));
    // كشك الشاي
    const kA = PL.kioskA * D2R, [kx, kz] = pzL(PL.kioskA, 9.2), kr = Math.atan2(-Math.cos(kA), -Math.sin(kA));
    const kiosk = [], K2 = (g) => kiosk.push(g), plank = (c, x) => c.set(Math.floor((x + 1.6) / 0.4) % 2 ? '#A97B4C' : '#93683E');
    K2(tf(paint(new BoxGeometry(3.2, 2.4, 0.12), plank), 0, 1.2, -1.05));
    for (const sd of [-1, 1]) K2(tf(paint(new BoxGeometry(0.12, 2.4, 2.2), '#8A5F36'), sd * 1.55, 1.2, 0));
    K2(tf(paint(new BoxGeometry(3.5, 0.12, 2.7), '#6B4423'), 0, 2.45, 0.15));
    K2(tf(paint(new BoxGeometry(3.1, 1.0, 0.5), (c, x, y) => c.set(y > 0.42 ? '#5C3A1A' : Math.floor((x + 1.55) / 0.31) % 2 ? '#A97B4C' : '#93683E')), 0, 0.5, 0.85));
    for (let i = 0; i < 8; i++) K2(tf(paint(new BoxGeometry(0.44, 0.04, 0.9), i % 2 ? '#FAF3E6' : '#2E8B57'), -1.54 + i * 0.44, 2.3, 1.75, 0.35, 0, 0));
    K2(tf(paint(new BoxGeometry(2.6, 0.06, 0.35), '#6B4423'), 0, 1.6, -0.9));
    for (let i = 0; i < 5; i++) K2(tf(paint(new CylinderGeometry(0.07, 0.06, 0.22, 8), ['#2E86AB', '#C0612B', '#F2E3C6', '#9B2335', '#E8C170'][i]), -1 + i * 0.5, 1.75, -0.9));
    const kioskG = new Group(); kioskG.add(new Mesh(merge(kiosk), new MeshLambertMaterial({ vertexColors: true, side: DoubleSide }))); kioskG.position.set(kx, 0, kz); kioskG.rotation.y = kr; plaza.add(kioskG);
    kioskG.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } }); fx.kiosk = kioskG;
    const samovar = new Mesh(new LatheGeometry([new Vector2(0.001, 0), new Vector2(0.14, 0), new Vector2(0.16, 0.05), new Vector2(0.22, 0.2), new Vector2(0.2, 0.42), new Vector2(0.12, 0.5), new Vector2(0.14, 0.56), new Vector2(0.06, 0.62), new Vector2(0.001, 0.64)], 18), brass); samovar.position.set(-1.0, 1.0, 0.85); kioskG.add(samovar);
    for (let i = 0; i < 6; i++) { const cup = new Mesh(new CylinderGeometry(0.045, 0.032, 0.1, 10), glassM); cup.position.set(-0.3 + i * 0.2, 1.05, 0.9); kioskG.add(cup); fx.cups.push(cup); }
    const seller = makeMan({ thobe: '#EDE6DA', bisht: null, shmagh: '#1E1E1E', beard: '#2E2A26', beads: false }); seller.root.position.set(0.35, 0, -0.25); kioskG.add(seller.root);
    npcs.push({ m: seller, base: seller.root.position.clone(), kind: 'seller' });
    for (const d of PL.benches) { const a = d * D2R, [x, z] = pzL(d, 6.6), rot = -a - Math.PI / 2, tx = -Math.sin(a), tz = Math.cos(a); P.push(tf(paint(new BoxGeometry(2.2, 0.1, 0.55), '#8A5F36'), x, 0.45, z, 0, rot, 0)); P.push(tf(paint(new BoxGeometry(2.2, 0.5, 0.08), '#7A5232'), x + Math.cos(a) * 0.3, 0.75, z + Math.sin(a) * 0.3, 0, rot, 0)); for (const sd of [-0.9, 0.9]) P.push(tf(paint(new BoxGeometry(0.1, 0.45, 0.5), '#6B4423'), x + tx * sd, 0.22, z + tz * sd, 0, rot, 0)); }
    const teaGlass = () => { const g = new Mesh(new CylinderGeometry(0.035, 0.026, 0.08, 10), glassM); g.position.set(0, -0.43, 0.05); return g; };
    const looks = { tea: [PL.meet[0] - PL.x, PL.meet[1] - PL.z], stand: [kx, kz] };
    const gm = [makeMan({ thobe: '#D8CDB8', bisht: '#2D3A4E', shmagh: '#C8102E', beads: false, beard: '#5A524C' }), makeMan({ thobe: '#F4F1EA', bisht: null, shmagh: '#F4F1EA', beard: 'none', beads: true }), makeMan({ thobe: '#CFE0E8', bisht: null, shmagh: '#C8102E', beard: '#3A3430', beads: false })];
    PL.guests.forEach((gst, i) => { const m = gm[i], [x, z] = pzL(gst.a, gst.r), lk = looks[gst.kind]; m.root.position.set(x, 0, z); m.root.rotation.y = Math.atan2(lk[0] - x, lk[1] - z); plaza.add(m.root); npcs.push({ m, base: m.root.position.clone(), kind: gst.kind, ph: R() * 6 }); if (gst.kind === 'tea') m.arms[1].el.add(teaGlass()); });
    // الجرس
    const bA = 118 * D2R, [bx, bz] = pzL(118, 9), btx = -Math.sin(bA), btz = Math.cos(bA);
    for (const sd of [-1, 1]) P.push(tf(paint(new BoxGeometry(0.18, 2.8, 0.18), '#5C3A1A'), bx + btx * 0.9 * sd, 1.4, bz + btz * 0.9 * sd));
    P.push(tf(paint(new BoxGeometry(2.3, 0.2, 0.24), '#4F3420'), bx, 2.8, bz, 0, -bA - Math.PI / 2, 0));
    const bell = new Group(); bell.position.set(bx, 2.7, bz); plaza.add(bell);
    const bm = new Mesh(new LatheGeometry([new Vector2(0.001, -0.05), new Vector2(0.18, -0.06), new Vector2(0.24, -0.25), new Vector2(0.3, -0.55), new Vector2(0.42, -0.72), new Vector2(0.4, -0.76), new Vector2(0.001, -0.76)], 24), new MeshPhongMaterial({ color: '#B07A2E', specular: '#FFE2A0', shininess: 100 })); bm.castShadow = true;
    const clap = new Mesh(new SphereGeometry(0.07, 10, 8), phong('#3B2A1A')); clap.position.y = -0.7; bell.add(bm, clap); fx.bell = { g: bell, swing: 0, v: 0 };
    // العلم العراقي
    const [fxp, fzp] = pzL(300, 10.2);
    P.push(tf(paint(new CylinderGeometry(0.08, 0.1, 9, 8), '#D9D9D9'), fxp, 4.5, fzp)); P.push(tf(paint(new SphereGeometry(0.16, 10, 8), '#E8C170'), fxp, 9.05, fzp));
    const flagG = new PlaneGeometry(3.2, 2, 20, 10); flagG.translate(1.6, 0, 0);
    const fcol = new Float32Array(flagG.attributes.position.count * 3);
    for (let i = 0; i < flagG.attributes.position.count; i++) { const y = flagG.attributes.position.getY(i); _c.set(y > 0.33 ? '#CE1126' : y > -0.33 ? '#FFFFFF' : '#141414'); if (Math.abs(y) < 0.2 && Math.abs(flagG.attributes.position.getX(i) - 1.6) < 0.35) _c.set('#007A3D'); fcol.set([_c.r, _c.g, _c.b], i * 3); }
    flagG.setAttribute('color', new BufferAttribute(fcol, 3));
    const flag = new Mesh(flagG, new MeshLambertMaterial({ vertexColors: true, side: DoubleSide })); flag.position.set(fxp + 0.1, 7.9, fzp); flag.castShadow = true; plaza.add(flag);
    fx.flag = flag; fx.flagBase = Float32Array.from(flagG.attributes.position.array);
    // التلسكوب
    const scope = new Group(); scope.position.set(RP + 3.9, 0, 0); plaza.add(scope);
    for (let i = 0; i < 3; i++) { const a = (i / 3) * TAU, leg = new Mesh(new CylinderGeometry(0.03, 0.03, 1.3, 6), phong('#3B3B3B')); leg.position.set(Math.cos(a) * 0.25, 0.6, Math.sin(a) * 0.25); leg.rotation.set(Math.sin(a) * 0.38, 0, -Math.cos(a) * 0.38); scope.add(leg); }
    const tube = new Mesh(new CylinderGeometry(0.09, 0.13, 1.1, 16), brass); tube.rotation.z = Math.PI / 2 - 0.15; tube.position.set(0.1, 1.32, 0); scope.add(tube);
    const lens = new Mesh(new CylinderGeometry(0.14, 0.14, 0.06, 16), phong('#1A2A3A', { shininess: 160, specular: '#FFFFFF' })); lens.rotation.z = Math.PI / 2 - 0.15; lens.position.set(0.66, 1.4, 0); scope.add(lens);
    shadowAll(scope); fx.scope = scope;
    // فوانيس وضوايات ملونة وأحواض ورد
    const lampPosts = PL.lamps.map((d) => d * D2R);
    for (const a of lampPosts) { const x = Math.cos(a) * 12.2, z = Math.sin(a) * 12.2; P.push(tf(paint(new CylinderGeometry(0.06, 0.08, 3.2, 6), '#2E2E2E'), x, 1.6, z)); const lan = new Group(); lan.position.set(x, 3.0, z); const glass = new Mesh(new CylinderGeometry(0.11, 0.11, 0.26, 8), new MeshBasicMaterial({ color: '#FFD36B' })); const halo = new Sprite(new SpriteMaterial({ map: glowTex, color: '#FFC14D', transparent: true, opacity: 0.7, depthWrite: false, blending: AdditiveBlending })); halo.scale.setScalar(0.75); lan.add(glass, halo); plaza.add(lan); fx.lanterns.push(lan); }
    const bulbs = []; for (let i = 0; i < 4; i++) { const a0 = lampPosts[i], a1 = lampPosts[(i + 1) % 4]; let da = angDiff(a0, a1); if (da < 0) da += TAU; for (let k = 1; k < 9; k++) { const a = a0 + (da * k) / 9, sag = Math.sin((k / 9) * Math.PI) * 0.6; bulbs.push([Math.cos(a) * 12.2, 3.05 - sag, Math.sin(a) * 12.2]); } }
    const bulbM = new InstancedMesh(new SphereGeometry(0.07, 8, 6), new MeshBasicMaterial({ color: '#FFFFFF' }), bulbs.length), oo = new Object3D(), bcols = ['#FF5D8F', '#FFD23F', '#7FD1FF', '#8DE26B'];
    bulbs.forEach(([x, y, z], n) => { oo.position.set(x, y, z); oo.updateMatrix(); bulbM.setMatrixAt(n, oo.matrix); bulbM.setColorAt(n, _c.set(bcols[n % 4])); }); plaza.add(bulbM);
    for (const d of PL.beds) { const [x, z] = pzL(d, 11); P.push(tf(paint(new CylinderGeometry(0.7, 0.6, 0.5, 12), '#8E877B'), x, 0.25, z)); for (let i = 0; i < 9; i++) P.push(tf(paint(new IcosahedronGeometry(0.13, 0), ['#FF5D8F', '#FFD23F', '#FFFFFF', '#B28DFF'][i % 4]), x + Math.cos(i) * 0.4, 0.58, z + Math.sin(i) * 0.4)); }
    const pm = new Mesh(merge(P), new MeshLambertMaterial({ vertexColors: true, side: DoubleSide })); pm.castShadow = true; pm.receiveShadow = true; plaza.add(pm);
    scatterChunks(geos.pineA, mats.pine, PL.pines.map((d) => { const [x, z] = pzL(d, 11.6); return { x: PL.x + x, y: HS - 0.1, z: PL.z + z, ry: R() * TAU, s: 0.9 }; }), { cast: true, size: 100, far: 500 });
    const water = new Mesh(new CircleGeometry(2.12, 40), new MeshPhongMaterial({ color: '#4AA6D8', specular: '#FFFFFF', shininess: 140, normalMap: waterN, transparent: true, opacity: 0.88 })); water.rotation.x = -Math.PI / 2; water.position.y = 0.55; plaza.add(water); fx.water = water;
    const dropN = 140, dseed = []; for (let i = 0; i < dropN; i++) dseed.push([R() * TAU, R(), 0.5 + R() * 0.5]);
    const dg = new BufferGeometry(); dg.setAttribute('position', new BufferAttribute(new Float32Array(dropN * 3), 3));
    fx.drops = new Points(dg, new PointsMaterial({ size: 0.16, map: glowTex, color: '#E6F6FF', transparent: true, opacity: 0.9, depthWrite: false })); fx.drops.userData.seed = dseed; fx.drops.frustumCulled = false; plaza.add(fx.drops);
    const leafN = 220, lseed = []; for (let i = 0; i < leafN; i++) lseed.push([R() * 60 - 30, R() * 8, R() * 60 - 30, R()]);
    const lg = new BufferGeometry(); lg.setAttribute('position', new BufferAttribute(new Float32Array(leafN * 3), 3));
    fx.leaves = new Points(lg, new PointsMaterial({ size: 0.22, map: glowTex, color: '#A8D46A', transparent: true, opacity: 0, depthWrite: false })); fx.leaves.userData.seed = lseed; fx.leaves.frustumCulled = false; plaza.add(fx.leaves);
    const stN = 70, stS = []; for (let i = 0; i < stN; i++) stS.push([R() * 50 - 25, R() * 9 - 1, R() * 50 - 25, 0.5 + R()]);
    const stG = new BufferGeometry(); stG.setAttribute('position', new BufferAttribute(new Float32Array(stN * 6), 3));
    fx.streaks = new LineSegments(stG, new LineBasicMaterial({ color: '#FFFFFF', transparent: true, opacity: 0, depthWrite: false })); fx.streaks.userData.seed = stS; fx.streaks.frustumCulled = false; plaza.add(fx.streaks);
  }
  // ================================================================ خيمة أبو جاسم 🏕️ (مكانها يتغير كل مغامرة)
  const campG = new Group(); scene.add(campG);
  const cfx = { flames: [], glows: [], lantern: null };
  {
    const TX = 0, TZ = -2.8, FIRE = new Vector3(4.0, 0, -2.4), P = [];
    const stripes = (c, x) => c.set(Math.floor((x + 1.7) / 0.425) % 2 ? '#EAD9B5' : '#D9C39C');
    P.push(tf(paint(new BoxGeometry(3.4, 1.95, 2.4), stripes), TX, 0.975, TZ));
    for (const s of [-1, 1]) P.push(tf(paint(new BoxGeometry(3.62, 0.07, 1.52), (c, x) => c.set(Math.floor((x + 1.81) / 0.4525) % 2 ? '#C9AE82' : '#B99D70')), TX, 2.32, TZ + s * 0.6, s * 0.59, 0, 0));
    const gable = new Shape(); gable.moveTo(-1.2, 0); gable.lineTo(1.2, 0); gable.lineTo(0, 0.8); gable.closePath();
    for (const s of [-1, 1]) P.push(tf(paint(new ShapeGeometry(gable), '#E3D0A8'), TX + s * 1.7, 1.95, TZ, 0, Math.PI / 2, 0));
    P.push(tf(paint(new BoxGeometry(0.95, 1.55, 0.05), '#3F2412'), TX - 0.25, 0.775, TZ + 1.22));
    for (const s of [-1, 1]) { const flap = new Shape(); flap.moveTo(0, 0); flap.lineTo(0.42 * s, 0); flap.lineTo(0, -1.0); flap.closePath(); P.push(tf(paint(new ShapeGeometry(flap), '#E9D7B0'), TX - 0.25 + s * 0.04, 1.55, TZ + 1.25)); }
    const A0 = new Vector3(0, 2.15, TZ + 1.2), A1 = new Vector3(0, 1.98, TZ + 2.55), alen = A0.distanceTo(A1), aang = Math.atan2(A0.y - A1.y, A1.z - A0.z);
    for (let i = 0; i < 8; i++) { const x = TX - 1.7 + 0.2125 + i * 0.425, col = i % 2 ? '#FAF3E6' : '#D7263D'; P.push(tf(paint(new BoxGeometry(0.425, 0.035, alen), col), x, (A0.y + A1.y) / 2, (A0.z + A1.z) / 2, aang, 0, 0)); P.push(tf(paint(new CircleGeometry(0.2125, 10, Math.PI, Math.PI), col), x, A1.y, A1.z + 0.01)); }
    for (const s of [-1, 1]) P.push(tf(paint(new CylinderGeometry(0.045, 0.055, 2.05, 7), '#5C3A1A'), TX + s * 1.68, 1.02, TZ + 2.55));
    const tbx = TX - 0.78, tbz = TZ + 2.0;
    P.push(tf(paint(new BoxGeometry(1.0, 0.06, 0.55), '#8B5A2B'), tbx, 0.74, tbz));
    for (const [a, b] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) P.push(tf(paint(new CylinderGeometry(0.03, 0.03, 0.72, 5), '#6B4220'), tbx + a * 0.44, 0.36, tbz + b * 0.22));
    const jar = (r0) => new LatheGeometry([new Vector2(0.001, 0), new Vector2(0.09 * r0, 0), new Vector2(0.15 * r0, 0.07), new Vector2(0.16 * r0, 0.17), new Vector2(0.11 * r0, 0.28), new Vector2(0.06 * r0, 0.32), new Vector2(0.075 * r0, 0.36), new Vector2(0.06 * r0, 0.37)], 14);
    P.push(tf(paint(jar(1), (c, x, y) => c.set(y > 0.2 && y < 0.24 ? '#F2E3C6' : '#C0612B')), tbx - 0.3, 0.77, tbz));
    P.push(tf(paint(jar(0.8), (c, x, y) => c.set(y > 0.16 && y < 0.19 ? '#FFFFFF' : '#2E86AB')), tbx + 0.02, 0.77, tbz - 0.05));
    P.push(tf(paint(new SphereGeometry(0.28, 12, 8), (c, x, y) => mix(c, '#C8B18A', '#E2D2AE', y * 2 + 0.5)), TX - 2.05, 0.27, TZ + 1.2, 0, 0, 0, 1, 1.2, 1));
    P.push(tf(paint(new BoxGeometry(0.5, 0.42, 0.42), (c, x, y) => c.set(Math.abs(y) > 0.17 || Math.abs(x) > 0.21 ? '#7A4E25' : '#A0703C')), TX + 1.95, 0.21, TZ + 1.0, 0, 0.3, 0));
    const fence = (a, b) => { const len = a.distanceTo(b), n = Math.max(2, Math.round(len / 0.55)); for (let i = 0; i <= n; i++) { const p = a.clone().lerp(b, i / n); P.push(tf(paint(new CylinderGeometry(0.045, 0.055, 0.85, 6), '#8B5A2B'), p.x, 0.42, p.z)); } for (const y of [0.3, 0.62]) { const g = paint(new BoxGeometry(0.05, 1, 0.035), '#9C6A36'); tf(g, 0, 0, 0, 0, 0, 0, 1, len, 1); along(g, new Vector3(a.x, y, a.z), new Vector3(b.x, y, b.z)); P.push(g); } };
    const f0 = new Vector3(-5.8, 0, -0.75), f1 = new Vector3(-5.8, 0, -2.9), f2 = new Vector3(-3.1, 0, -2.9), f3 = new Vector3(-3.1, 0, -0.75);
    fence(f0, f1); fence(f1, f2); fence(f2, f3);
    P.push(tf(paint(new BoxGeometry(1.0, 0.18, 0.35), '#7A4E25'), -4.45, 0.09, -2.55)); P.push(tf(paint(new BoxGeometry(0.9, 0.06, 0.28), '#D8C26A'), -4.45, 0.2, -2.55));
    P.push(tf(paint(new BoxGeometry(1.75, 0.46, 0.06), '#7A4A22'), TX, 2.66, TZ + 1.25));
    for (let i = 0; i < 9; i++) { const a = (i / 9) * TAU; P.push(tf(paint(new DodecahedronGeometry(0.11, 0), (c, x, y) => mix(c, '#7D776C', '#B5AFA2', y * 4 + 0.5)), FIRE.x + Math.cos(a) * 0.42, 0.06, FIRE.z + Math.sin(a) * 0.42, i, i * 2, 0, 1, 0.7, 1)); }
    for (let i = 0; i < 3; i++) { const a = (i / 3) * Math.PI; P.push(tf(paint(new CylinderGeometry(0.05, 0.05, 0.62, 6), (c, x, y) => c.set(Math.abs(y) > 0.27 ? '#C9A36B' : '#4A2E18')), FIRE.x, 0.1, FIRE.z, 0, a, Math.PI / 2 - 0.25)); }
    const camp = new Mesh(merge(P), new MeshLambertMaterial({ vertexColors: true, side: DoubleSide })); camp.castShadow = true; camp.receiveShadow = true; campG.add(camp);
    const sign = new Mesh(new PlaneGeometry(1.62, 0.38), new MeshLambertMaterial({ map: signTex(cfg.sign || 'خيمة أبو جاسم', 512, 128, 64), emissive: '#3B2410', emissiveIntensity: 0.25 })); sign.position.set(TX, 2.66, TZ + 1.29); campG.add(sign);
    const lan = new Group(); const glass = new Mesh(new CylinderGeometry(0.07, 0.07, 0.16, 8), new MeshBasicMaterial({ color: '#FFD36B' })); const halo = new Sprite(new SpriteMaterial({ map: glowTex, color: '#FFC14D', transparent: true, opacity: 0.75, depthWrite: false, blending: AdditiveBlending })); halo.scale.setScalar(0.9); lan.add(glass, halo); lan.position.set(TX + 1.68, 1.72, TZ + 2.55); campG.add(lan); cfx.lantern = lan;
    const fmat = (c) => new MeshBasicMaterial({ color: c, transparent: true, opacity: 0.9, depthWrite: false, blending: AdditiveBlending });
    [['#FF5A1F', 0.2, 0.55, 0], ['#FF9A2E', 0.15, 0.45, 0.07], ['#FFE07A', 0.09, 0.3, -0.05]].forEach(([c, r0, h0, off], i) => { const f = new Mesh(new ConeGeometry(r0, h0, 10, 1, true), fmat(c)); f.position.set(FIRE.x + off, 0.12 + h0 / 2, FIRE.z - off); f.userData = { h0, i }; campG.add(f); cfx.flames.push(f); });
    const fg = new Sprite(new SpriteMaterial({ map: glowTex, color: '#FF8A2E', transparent: true, opacity: 0.6, depthWrite: false, blending: AdditiveBlending })); fg.position.set(FIRE.x, 0.45, FIRE.z); fg.scale.setScalar(1.8); campG.add(fg); cfx.glows.push(fg);
    const dallah = new Group(); const body = new Mesh(new LatheGeometry([new Vector2(0.001, 0), new Vector2(0.1, 0), new Vector2(0.115, 0.02), new Vector2(0.1, 0.09), new Vector2(0.06, 0.14), new Vector2(0.045, 0.2), new Vector2(0.06, 0.24), new Vector2(0.075, 0.26), new Vector2(0.04, 0.3), new Vector2(0.012, 0.34), new Vector2(0.02, 0.36), new Vector2(0.001, 0.37)], 20), brass); dallah.add(body); dallah.position.set(FIRE.x - 0.75, 0.12, FIRE.z + 0.35); campG.add(dallah);
    const rugTex = canvasTex(256, 160, (g, w, h) => { g.fillStyle = '#8E1B26'; g.fillRect(0, 0, w, h); g.fillStyle = '#1F2F5C'; g.fillRect(10, 10, w - 20, h - 20); g.fillStyle = '#8E1B26'; g.fillRect(20, 20, w - 40, h - 40); g.strokeStyle = '#E8C170'; g.lineWidth = 3; g.strokeRect(16, 16, w - 32, h - 32); const md = (cx, cy, r, c) => { g.fillStyle = c; g.beginPath(); g.moveTo(cx, cy - r); g.lineTo(cx + r * 1.5, cy); g.lineTo(cx, cy + r); g.lineTo(cx - r * 1.5, cy); g.closePath(); g.fill(); }; md(w / 2, h / 2, 44, '#1F2F5C'); md(w / 2, h / 2, 30, '#E8C170'); md(w / 2, h / 2, 16, '#8E1B26'); md(w / 2, h / 2, 6, '#F4EFE6'); });
    const rug = new Mesh(new PlaneGeometry(2.0, 1.25), new MeshLambertMaterial({ map: rugTex })); rug.rotation.x = -Math.PI / 2; rug.rotation.z = 0.04; rug.position.set(TX - 0.2, 0.02, TZ + 1.9); rug.receiveShadow = true; campG.add(rug);
  }
  const zone = new Group();
  {
    const ring = new Mesh(new RingGeometry(0.95, 1.18, 48), new MeshBasicMaterial({ color: '#FFD23F', transparent: true, opacity: 0.9, depthWrite: false, side: DoubleSide })); ring.rotation.x = -Math.PI / 2; ring.position.y = 0.03;
    const disc = new Mesh(new CircleGeometry(0.95, 40), new MeshBasicMaterial({ color: '#FFE38A', transparent: true, opacity: 0.25, depthWrite: false })); disc.rotation.x = -Math.PI / 2; disc.position.y = 0.025;
    const arrow = new Mesh(new ConeGeometry(0.2, 0.42, 4), new MeshPhongMaterial({ color: '#FFB703', emissive: '#FF8A00', emissiveIntensity: 0.6, shininess: 80 })); arrow.rotation.x = Math.PI; arrow.position.y = 1.9;
    zone.add(ring, disc, arrow); zone.userData = { ring, arrow }; zone.visible = false; scene.add(zone);
  }
  // ================================================================ الكائنات
  function makeBeast(kind) {
    const wolf = kind === 'wolf', root = new Group(), body = new Group(); root.add(body);
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
    root.scale.setScalar(1.15); // ذيب ~0.9 م وخنزير ~1 م (مقاسات حقيقية)
    return { root, body, head, tail, legs, yaw: 0 };
  }
  const beastV = sim.beasts.map((b) => ({ e: b, m: makeBeast(b.kind) }));
  const gzM = (() => { // الغزال 🦌
    const root = new Group(), body = new Group(); root.add(body);
    const tan = phong('#D9A066', { shininess: 18 }), light = phong('#ECCB9C', { shininess: 18 }), dark = phong('#3B2A1A', { shininess: 40 });
    const prof = [[-0.56, 0.0], [-0.54, 0.1], [-0.48, 0.17], [-0.36, 0.2], [-0.18, 0.18], [0.0, 0.185], [0.18, 0.21], [0.32, 0.215], [0.44, 0.18], [0.53, 0.11], [0.57, 0.0]];
    let torsoG = new LatheGeometry(prof.map(([x, r]) => new Vector2(r, x)), 36);
    { const p = torsoG.attributes.position; for (let i = 0; i < p.count; i++) { let x = p.getX(i); const y = p.getY(i), z = p.getZ(i), waist = Math.exp(-(((y + 0.1) / 0.22) ** 2)); if (x < 0) x *= 1 - waist * 0.28; p.setXYZ(i, y, -x * (x < 0 ? 0.95 : 1.05), z * 0.82); } torsoG.computeVertexNormals(); }
    torsoG = paint(torsoG, (c, x, y) => { const ny = y / 0.21; if (ny < -0.45) c.set('#FFF6E8'); else if (ny < -0.15) mix(c, '#6A3F1F', '#8A5528', (ny + 0.45) / 0.3); else mix(c, '#D9A066', '#C58A50', (ny - 0.3) * 1.5); if (x < -0.46 && ny < 0.55) c.set('#FFF6E8'); });
    const torso = new Mesh(torsoG, phong('#FFFFFF', { vertexColors: true, shininess: 22 })); torso.position.y = 0.8; body.add(torso);
    const tail = new Group(); tail.position.set(-0.56, 0.86, 0); const tm = new Mesh(new CapsuleGeometry(0.025, 0.1, 3, 6), phong('#2B1D12')); tm.position.y = -0.06; tail.add(tm); tail.rotation.z = 0.5; body.add(tail);
    const neck = new Group(); neck.position.set(0.42, 0.88, 0); body.add(neck);
    const neckM = new Mesh(new CylinderGeometry(0.055, 0.1, 0.5, 14), tan); neckM.position.y = 0.23; neckM.scale.z = 0.85; neck.add(neckM);
    const throat = new Mesh(new CylinderGeometry(0.036, 0.06, 0.42, 10), phong('#FFF6E8')); throat.position.set(0.04, 0.21, 0); throat.rotation.z = -0.08; neck.add(throat);
    neck.rotation.z = -0.6;
    const head = new Group(); head.position.set(0, 0.49, 0); head.scale.setScalar(1.12); neck.add(head);
    const skull = new Mesh(new SphereGeometry(0.11, 24, 16), tan); skull.scale.set(1.35, 0.9, 0.82); head.add(skull);
    const muz = new Mesh(new SphereGeometry(0.075, 18, 12), light); muz.position.set(0.14, -0.045, 0); muz.scale.set(1.25, 0.8, 0.85); head.add(muz);
    const nose = new Mesh(new SphereGeometry(0.03, 10, 8), dark); nose.position.set(0.225, -0.035, 0); head.add(nose);
    for (const s of [-1, 1]) {
      const eye = new Mesh(new SphereGeometry(0.026, 12, 10), phong('#120C08', { shininess: 160, specular: '#FFFFFF' })); eye.position.set(0.035, 0.035, s * 0.083); head.add(eye);
      const ear = new Mesh(new SphereGeometry(0.07, 12, 8), tan); ear.scale.set(0.45, 1.25, 0.25); ear.position.set(-0.08, 0.1, s * 0.08); ear.rotation.set(s * 0.6, 0, 0.6); head.add(ear);
      const horn = new CatmullRomCurve3([new Vector3(-0.02, 0.07, s * 0.035), new Vector3(-0.09, 0.22, s * 0.07), new Vector3(-0.07, 0.38, s * 0.085), new Vector3(0.0, 0.47, s * 0.06)]);
      const hg = new TubeGeometry(horn, 18, 0.019, 7);
      { const p = hg.attributes.position, nr = 8; for (let i = 0; i <= 18; i++) { const c0 = horn.getPointAt(i / 18), k = 1 - (i / 18) * 0.7; for (let j = 0; j < nr; j++) { const v = i * nr + j; p.setXYZ(v, c0.x + (p.getX(v) - c0.x) * k, c0.y + (p.getY(v) - c0.y) * k, c0.z + (p.getZ(v) - c0.z) * k); } } hg.computeVertexNormals(); }
      head.add(new Mesh(paint(hg, (c, x, y) => c.set(Math.floor(y * 55) % 2 ? '#3B2A1A' : '#5A4330')), phong('#FFFFFF', { vertexColors: true, shininess: 50 })));
    }
    const collar = new Object3D(); collar.position.set(0.0, 0.38, 0); neck.add(collar);
    const legs = [];
    for (const [lx, front] of [[0.34, 1], [-0.38, 0]]) for (const s of [-1, 1]) {
      const hip = new Group(); hip.position.set(lx, 0.76, s * 0.09); body.add(hip);
      const th = new Mesh(new SphereGeometry(front ? 0.075 : 0.1, 12, 10), tan); th.scale.set(front ? 1.1 : 1.15, front ? 1.7 : 1.6, front ? 0.6 : 0.55); th.position.set(0.0, front ? -0.05 : -0.07, 0); hip.add(th);
      const up = new Mesh(new CylinderGeometry(front ? 0.026 : 0.03, front ? 0.04 : 0.055, 0.36, 10), tan); up.position.y = -0.2; hip.add(up);
      const knee = new Group(); knee.position.y = -0.38; hip.add(knee);
      knee.add(new Mesh(new SphereGeometry(0.024, 8, 6), light));
      const lo = new Mesh(new CylinderGeometry(0.014, 0.02, 0.34, 8), light); lo.position.y = -0.17; knee.add(lo);
      const hoof = new Mesh(new CylinderGeometry(0.017, 0.024, 0.045, 8), phong('#20150D', { shininess: 60 })); hoof.position.y = -0.355; knee.add(hoof);
      legs.push({ hip, knee, front, s });
    }
    shadowAll(root); scene.add(root);
    return { root, body, neck, head, tail, legs, collar, yaw: -0.25, neckA: -0.6 };
  })();
  const mer = makeMan(); scene.add(mer.root);
  let hero = null;
  // البطل بطول إنسان حقيقي (~1.72 م): شكل «حبّاية» أطول من عرضها حتى يمر من الجسور (1.24 م)
  const HERO_W = 1.15, HERO_H = 1.6;
  function ensureHero(sk) {
    if (hero && hero.id === sk.id) return;
    if (hero) for (const o of [hero.root, hero.chute, hero.drop, hero.rope]) scene.remove(o);
    hero = makeHero(sk, glowTex); hero.root.scale.set(HERO_W, HERO_H, HERO_W); scene.add(hero.root, hero.chute, hero.drop, hero.rope); hero.turn = 0; hero.blink = 0; hero.nextBlink = 2;
  }
  function placeCampVisual() { const c = S.vq.camp; campG.visible = false; campG.position.set(V.x + c.x, V.VF + c.base, V.z + c.z); campG.rotation.y = c.rot; zone.position.set(S.vq.zoneW.x, G.H(S.vq.zoneW.x, S.vq.zoneW.z), S.vq.zoneW.z); mer.root.rotation.y = c.rot; mer.yaw = c.rot; }
  // طيور وفراشات وذرات ضو بالوادي
  const birds = [], butterflies = [];
  {
    const wing = new BufferGeometry(); wing.setAttribute('position', new BufferAttribute(new Float32Array([0, 0, 0, 0.9, 0, -0.25, 0.9, 0, 0.25]), 3)); wing.computeVertexNormals();
    const bm = new MeshBasicMaterial({ color: '#34406A', side: DoubleSide });
    for (let i = 0; i < 9; i++) { const b = new Group(), l = new Mesh(wing, bm), r = new Mesh(wing, bm); r.scale.x = -1; b.add(l, r); const inV = i < 5; b.userData = { ph: R() * 6, sp: 0.25 + R() * 0.2, y: inV ? V.VF + 26 + R() * 14 : 70 + R() * 40, cx: inV ? V.x + 15 + R() * 90 : (R() - 0.5) * 300, cz: inV ? V.z + (R() - 0.5) * 20 : (R() - 0.5) * 300, rad: 10 + R() * 18, l, r }; birds.push(b); scene.add(b); }
    const shape = new Shape(); shape.moveTo(0, 0); shape.bezierCurveTo(0.05, 0.1, 0.16, 0.12, 0.15, 0.02); shape.bezierCurveTo(0.16, -0.05, 0.08, -0.1, 0, -0.02);
    const wg = new ShapeGeometry(shape, 6), cols = ['#FF8FD1', '#FFD23F', '#8FD6FF', '#FFFFFF', '#FF9E5E', '#B28DFF'];
    for (let i = 0; i < 22; i++) { const m = new MeshLambertMaterial({ color: cols[i % cols.length], side: DoubleSide, emissive: cols[i % cols.length], emissiveIntensity: 0.25 }); const b = new Group(), l = new Mesh(wg, m), r = new Mesh(wg, m); r.scale.x = -1; b.add(l, r); b.userData = { l, r, ax: V.x + 6 + R() * 108, az: V.z + (R() - 0.5) * 16, ph: R() * 6 }; butterflies.push(b); scene.add(b); }
  }

  // ================================================================ الكاميرا (وراك وتلفها بإصبعك، ما تدخل بالجبل ولا بالشجر)
  const cam = { yaw: 0, pitch: 0.26, dist: 5.6, init: false, tgt: new Vector3(), pos: new Vector3(), scopeYaw: 0, scopePitch: -0.38, effPitch: null, effDist: null };
  const _ct = new Vector3(), _cp = new Vector3();
  function updateCamera(dt) {
    const h = S.hero; if (!h) return;
    if (S.scope) { const ex = M.x + RP + 4.75, ey = HS + 1.45, ez = M.z, yaw = cam.scopeYaw, pt = cam.scopePitch; cam.pos.set(ex, ey, ez); cam.tgt.set(ex + Math.cos(yaw) * 100 * Math.cos(pt), ey + Math.sin(pt) * 100, ez + Math.sin(yaw) * 100 * Math.cos(pt)); return; }
    const f = S.focus, story = h.mode === 'lift' || h.mode === 'carry', glide = h.mode === 'glide';
    _ct.set(f && f.x != null ? f.x : h.x, h.y + (story || glide ? 0.9 : 1.6), f && f.z != null ? f.z : h.z);
    if (f) cam.yaw = dampAngle(cam.yaw, f.yaw, 2.2, dt);
    if (h.mode === 'carry') cam.yaw = dampAngle(cam.yaw, Math.atan2(h.z - cam.pos.z, h.x - cam.pos.x), 1.5, dt);
    const wantDist = f ? f.dist : h.mode === 'carry' ? 11 : story ? 7 : glide ? 9 : S.summit ? 6.8 : 6.3;
    if (!cam.init) { cam.tgt.copy(_ct); cam.dist = wantDist; cam.effPitch = null; cam.effDist = null; cam.init = true; }
    const k = h.mode === 'faint' ? 2 : story ? 6 : 14;
    cam.tgt.x = damp(cam.tgt.x, _ct.x, k, dt); cam.tgt.z = damp(cam.tgt.z, _ct.z, k, dt); cam.tgt.y = damp(cam.tgt.y, _ct.y, h.air && !story && !glide ? 6 : 10, dt);
    cam.dist = damp(cam.dist, wantDist, 3, dt);
    const dir = (dd, pt) => _cp.set(cam.tgt.x - Math.cos(cam.yaw) * Math.cos(pt) * dd, cam.tgt.y + Math.sin(pt) * dd, cam.tgt.z - Math.sin(cam.yaw) * Math.cos(pt) * dd);
    let bType = '';
    const blocked = (dd, pt) => { // يفحص الخط من جسم البطل (مو بس راسه) للكاميرا
      bType = '';
      for (let i = 1; i <= 8; i++) {
        const kk = i / 8; dir(dd * kk, pt); const gy = G.H(_cp.x, _cp.z);
        if (_cp.y < gy + 0.4 || _cp.y - 0.85 * (1 - kk) < gy + 0.2) { bType = 'terr'; return kk; }
        bType = 'canopy';
        if (!story && G.tallNear(_cp.x, _cp.z, (c) => { const dx = _cp.x - c.x, dz = _cp.z - c.z, d2 = dx * dx + dz * dz; const rr = c.r * (c.tree ? 3.4 : 1.2); return i >= 2 && !S.summit && d2 < rr * rr && _cp.y > gy + 1.9 && _cp.y < gy + 9; })) return kk;
      }
      bType = '';
      return 0;
    };
    let pitch = story ? 0.35 : glide ? Math.max(cam.pitch, 0.42) : cam.pitch, dist = cam.dist, kb = blocked(dist, pitch);
    if (kb && bType === 'canopy') { const low = Math.min(pitch, 0.04), kb2 = blocked(dist, low); if (!kb2 || kb2 > kb) { pitch = low; kb = kb2; } } // تحت الأغصان
    else if (kb) { for (const up of [0.3, 0.6]) { const hi = Math.min(pitch + up, 1.05), kb2 = blocked(dist, hi); if (!kb2 || kb2 > kb) { pitch = hi; kb = kb2; } if (!kb) break; } } // الأرض تغطّيه: نصعد فوك بدل ما نلزگ بيه
    if (kb) dist = Math.max(1.8, dist * (kb - 1 / 8));
    cam.effPitch = cam.effPitch == null ? pitch : damp(cam.effPitch, pitch, pitch < cam.effPitch ? 8 : 2.5, dt);
    cam.effDist = cam.effDist == null ? dist : damp(cam.effDist, dist, dist < cam.effDist ? 10 : 2.5, dt);
    dir(Math.min(cam.effDist, dist + 0.6), cam.effPitch);
    G.tallNear(_cp.x, _cp.z, (c) => { const dx = _cp.x - c.x, dz = _cp.z - c.z, d2 = dx * dx + dz * dz, rr = c.r + 0.35; if (d2 < rr * rr) { const d = Math.sqrt(d2) || 0.01; _cp.x = c.x + (dx / d) * rr; _cp.z = c.z + (dz / d) * rr; } return false; });
    const gh = G.H(_cp.x, _cp.z) + 0.4; if (_cp.y < gh) _cp.y = gh;
    cam.pos.copy(_cp);
  }
  const heading = () => ((cam.yaw * 180) / Math.PI % 360 + 360) % 360;

  // ================================================================ الحركة والرسم كل فريم
  let lastNow = 0, lastT = -1, slow = 0, frames = 0, pr = 2, cssW = 390, cssH = 844;
  const o3 = new Object3D(); o3.rotation.order = 'YXZ';
  const tmp = new Vector3(), tmp2 = new Vector3();
  function setSize(w, h, ratio) { cssW = w; cssH = h; pr = ratio; renderer.setPixelRatio(ratio); renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix(); }
  const heroYaw = (face) => Math.PI / 2 - face;
  function animateHero(t, dt) {
    const e = S.hero, h = hero, walk = e.mode === 'walk' && !e.air;
    const hop = walk ? Math.abs(Math.sin(e.hopPh)) * (e.run ? 0.17 : 0.08) : 0;
    h.root.position.set(e.x, e.y + hop, e.z);
    h.turn = dampAngle(h.turn, heroYaw(e.face), 14, dt); h.root.rotation.y = h.turn;
    const lying = e.mode === 'faint';
    h.inner.rotation.z = lying ? -Math.PI / 2 * Math.min(1, e.faintT * 4) : -e.rot;
    let sq = e.landT > 0 ? e.landT * 2.4 : 0; if (e.air && e.mode === 'walk') sq = -0.12;
    if (walk && e.speed > 0.3) sq += (1 - Math.abs(Math.sin(e.hopPh))) * 0.22 - 0.07;
    h.inner.scale.set(1 + 0.2 * sq, 1 - 0.22 * sq, 1 + 0.2 * sq); h.inner.position.y = 0.55 * (1 - 0.22 * sq);
    for (const [i, f] of h.feet.entries()) f.position.y = -0.49 + (walk && e.speed > 0.3 ? Math.max(0, Math.sin(e.hopPh * 2 + i * Math.PI)) * 0.06 : 0);
    const scared = e.mode !== 'walk' && e.mode !== 'glide' || e.stun > 0 || (e.air && e.vy < -7) || S.wind > 0.5;
    h.nextBlink -= dt; if (h.nextBlink < 0) { h.blink = 0.14; h.nextBlink = 2.5 + Math.random() * 2.5; } h.blink = Math.max(0, h.blink - dt);
    for (const ee of h.eyes) ee.scale.set(scared ? 1.08 : 1, scared ? 1.15 : h.blink > 0 || lying ? 0.12 : 1, 1);
    for (const pp of h.pupils) pp.scale.setScalar(scared ? 0.72 : 1);
    h.smile.visible = !scared; h.ooh.visible = scared;
    if (h.acc.userData.star) h.acc.userData.star.rotation.y = t * 2;
    for (const s of [-1, 1]) { const tl = h.acc.userData['tail' + s]; if (tl) tl.rotation.x = 0.5 + Math.sin(t * 12 + s) * 0.25; }
    if (h.fire) { h.bodyMat.emissiveIntensity = 0.5 + Math.sin(t * 13) * 0.1; for (const f of h.flames) f.scale.set(1, 0.8 + Math.sin(t * 14 + f.userData.ph * 1.7) * 0.25, 1); }
    const ch = h.chute; ch.visible = e.chute > 0.01;
    if (ch.visible) {
      ch.position.copy(h.root.position); ch.rotation.y = h.root.rotation.y;
      const k = e.chute, pop = k < 1 ? lerp(0.15, 1, k) + Math.sin(k * Math.PI) * 0.12 : 1;
      h.canopyHolder.scale.set(pop, lerp(0.4, 1, k), pop); h.canopyHolder.position.y = lerp(1.0, 2.25, k);
      ch.rotation.z = -(Math.hypot(e.vx, e.vz) * 0.05) + Math.sin(t * 1.5) * 0.05; ch.rotation.x = Math.sin(t * 1.1) * 0.05;
      const lp = h.lines.geometry.attributes.position, top = h.canopyHolder.position.y, R0 = 1.7 * Math.sin(Math.PI * 0.42) * pop, ry = top + 1.7 * Math.cos(Math.PI * 0.42) * 0.62 * lerp(0.4, 1, k);
      for (let i = 0; i < 10; i++) { const a = (i / 10) * TAU, sx = i % 2 ? 0.22 : -0.22; lp.setXYZ(i * 2, Math.cos(a) * R0, ry, Math.sin(a) * R0); lp.setXYZ(i * 2 + 1, sx, 0.85, 0); }
      lp.needsUpdate = true;
    }
    const d = S.drop; h.drop.visible = !!(d && d.t < 2.4);
    if (h.drop.visible) { const k = clamp(1 - d.t * 1.2, 0.1, 1); h.drop.position.set(d.x, G.H(d.x, d.z) + 0.02, d.z); h.drop.scale.set(1.05, 0.62 * k, 1.05); h.drop.material.opacity = clamp(1 - (d.t - 1.4), 0, 1); }
  }
  function animateBeasts(t, dt) {
    for (const { e: b, m } of beastV) {
      const far = (b.x - camera.position.x) ** 2 + (b.z - camera.position.z) ** 2 > 140 * 140; m.root.visible = !far; if (far) continue;
      const moving = b.speed > 0.3, fast = b.state === 'chase' || b.state === 'charge';
      m.root.position.set(b.x, b.y, b.z); m.yaw = dampAngle(m.yaw, -b.face, 10, dt); m.root.rotation.y = m.yaw;
      m.body.position.y = moving ? Math.abs(Math.sin(b.ph)) * (fast ? 0.06 : 0.02) : 0;
      m.head.rotation.z = b.state === 'notice' ? -0.25 + Math.sin(t * 20) * 0.04 : moving ? -0.1 : Math.sin(t * 1.3) * 0.15 - 0.2;
      m.tail.rotation.z = (b.kind === 'wolf' ? 0.9 : 0.4) + (fast ? 0.5 : 0) + Math.sin(t * (fast ? 14 : 3)) * 0.15;
      for (const L of m.legs) { const off = L.front ? (L.s > 0 ? 0 : Math.PI) : (L.s > 0 ? Math.PI : 0) + (fast ? 0.6 : 0); if (moving) { L.hip.rotation.z = Math.sin(b.ph + off) * (fast ? 0.7 : 0.4); L.knee.rotation.z = (L.front ? -1 : 1) * Math.max(0, -Math.cos(b.ph + off)) * 0.5; } else { L.hip.rotation.z = damp(L.hip.rotation.z, 0, 8, dt); L.knee.rotation.z = damp(L.knee.rotation.z, 0, 8, dt); } }
    }
  }
  function animateGazelle(t, dt) {
    const g = sim.gz, m = gzM, st = g.state, moving = Math.hypot(g.vx, g.vz) > 0.25;
    m.root.visible = (g.x - camera.position.x) ** 2 + (g.z - camera.position.z) ** 2 < 260 * 260; if (!m.root.visible) return;
    const fast = st === 'flee' || st === 'leap', tired = st === 'tired';
    m.root.position.set(g.x, g.y, g.z); m.body.position.y = moving ? Math.abs(Math.sin(g.ph)) * (fast ? 0.07 : 0.025) : tired ? Math.sin(t * 9) * 0.008 : 0;
    m.yaw = dampAngle(m.yaw, -g.face, fast ? 14 : 8, dt); m.root.rotation.y = m.yaw; m.body.rotation.z = fast ? Math.sin(g.ph * 2) * 0.05 : 0;
    const graze = st === 'graze' || (st === 'pen' && !moving);
    m.neckA = damp(m.neckA, graze ? -2.05 : tired ? -1.15 : fast ? -0.95 : st === 'alert' || st === 'look' || st === 'cornered' ? -0.32 : -0.6, graze ? 3 : 7, dt); m.neck.rotation.z = m.neckA;
    m.head.rotation.z = graze ? 0.5 + Math.sin(t * 7) * 0.08 : st === 'alert' || st === 'look' ? 0.2 : 0.35;
    m.head.rotation.y = st === 'look' || st === 'alert' || st === 'cornered' ? Math.sin(t * 1.6) * 0.25 : 0;
    m.tail.rotation.z = 0.5 + (st === 'alert' || fast ? 0.9 : Math.sin(t * 3) * 0.2);
    const amp = fast ? 0.6 : tired ? 0.28 : 0.36, leap = st === 'leap';
    for (const L of m.legs) { const off = L.front ? (L.s > 0 ? 0 : Math.PI) : (L.s > 0 ? Math.PI : 0) + (fast ? 0.6 : 0); if (leap) { L.hip.rotation.z = L.front ? 0.9 : -0.9; L.knee.rotation.z = L.front ? -1.2 : 1.1; continue; } if (moving) { const w = Math.sin(g.ph + off); L.hip.rotation.z = w * amp; L.knee.rotation.z = (L.front ? -1 : 1) * Math.max(0, -Math.cos(g.ph + off)) * amp * 1.1; } else { L.hip.rotation.z = damp(L.hip.rotation.z, 0, 8, dt); L.knee.rotation.z = damp(L.knee.rotation.z, 0, 8, dt); } }
  }
  function animateMerchant(t, dt, dlg) {
    const m = mer, e = S.hero, vq = S.vq, c = vq.camp, dx = e.x - vq.merW.x, dz = e.z - vq.merW.z, d = Math.hypot(dx, dz);
    m.root.visible = d < 200; if (!m.root.visible) return;
    const near = d < 16 || !!dlg;
    let yaw = near ? Math.atan2(dx, dz) : c.rot + 0.15 * Math.sin(t * 0.3);
    if (S.focus && S.focus.talk) yaw = c.rot + clamp(angDiff(c.rot, Math.atan2(dx, dz)), -0.7, 0.7);
    m.yaw = dampAngle(m.yaw, yaw, 3, dt); m.root.rotation.y = m.yaw; m.root.position.set(vq.merW.x, V.VF + c.base, vq.merW.z); m.root.scale.y = 1 + Math.sin(t * 1.7) * 0.007;
    const talking = !!(dlg && dlg.who === 'merchant' && dlg.shown < [...dlg.text].length);
    m.mouth.scale.y = talking ? 0.25 + Math.abs(Math.sin(t * 15)) * 0.9 : 0.3; m.head.rotation.x = talking ? Math.sin(t * 5) * 0.05 : 0;
    const [Lt, Rt] = m.arms;
    if (vq.delivered) { for (const a of m.arms) { a.sh.rotation.z = damp(a.sh.rotation.z, a.s * 2.5, 6, dt); a.el.rotation.x = damp(a.el.rotation.x, -0.3 + Math.sin(t * 9 + a.s) * 0.3, 8, dt); } m.root.position.y = V.VF + c.base + Math.abs(Math.sin(t * 6)) * 0.06 * (S.focus ? 1 : 0); }
    else if (vq.caught && near) { Rt.sh.rotation.z = damp(Rt.sh.rotation.z, 1.35, 5, dt); Rt.el.rotation.x = damp(Rt.el.rotation.x, 0, 5, dt); Rt.sh.rotation.x = damp(Rt.sh.rotation.x, -0.2, 5, dt); Lt.sh.rotation.z = damp(Lt.sh.rotation.z, -0.12, 5, dt); }
    else if (near && d > 2.5) { Rt.sh.rotation.z = damp(Rt.sh.rotation.z, 2.55, 5, dt); Rt.el.rotation.x = damp(Rt.el.rotation.x, 0, 5, dt); Rt.el.rotation.z = Math.sin(t * 8) * 0.45; Rt.sh.rotation.x = 0; Lt.sh.rotation.z = damp(Lt.sh.rotation.z, -0.12, 5, dt); }
    else for (const a of m.arms) { a.sh.rotation.z = damp(a.sh.rotation.z, a.s * 0.12, 4, dt); a.el.rotation.z = damp(a.el.rotation.z, 0, 4, dt); a.el.rotation.x = damp(a.el.rotation.x, -0.25, 4, dt); a.sh.rotation.x = 0; }
  }
  function updateRope() {
    const r = hero.rope; r.visible = S.vq.caught && !S.vq.delivered && gzM.root.visible;
    if (!r.visible) return;
    hero.root.updateMatrixWorld(); gzM.root.updateMatrixWorld();
    const e = S.hero, a = tmp.set(e.x - Math.cos(e.face) * 0.3, hero.root.position.y + 0.8, e.z - Math.sin(e.face) * 0.3), b = gzM.collar.getWorldPosition(tmp2), mid = a.clone().lerp(b, 0.5); mid.y = Math.min(a.y, b.y) - 0.25;
    r.geometry.dispose(); r.geometry = new TubeGeometry(new QuadraticBezierCurve3(a.clone(), mid, b.clone()), 18, 0.016, 5);
  }
  function animatePlaza(t, dt) {
    const W = S.wind;
    const fp = fx.flag.geometry.attributes.position, base = fx.flagBase;
    for (let i = 0; i < fp.count; i++) { const x = base[i * 3], y = base[i * 3 + 1], k = x / 3.2; fp.setXYZ(i, x * (1 - W * 0.05), y - k * k * 0.25 * (1 - W), Math.sin(t * (4 + W * 12) - x * (1.6 + W * 1.5)) * k * (0.18 + W * 0.42) + Math.sin(t * 7 + y * 3) * 0.04 * k); }
    fp.needsUpdate = true; fx.flag.geometry.computeVertexNormals(); fx.flag.rotation.y = -0.3 * W;
    const b = fx.bell; b.v += (-b.swing * 18 - b.v * 1.4) * dt; b.swing += b.v * dt; b.g.rotation.x = b.swing + W * 0.25 * Math.sin(t * 6);
    for (const l of fx.lanterns) { l.rotation.z = Math.sin(t * (1.6 + W * 8) + l.position.x) * (0.06 + W * 0.45); l.rotation.x = Math.cos(t * (1.3 + W * 7)) * W * 0.3; }
    const dp = fx.drops.geometry.attributes.position, ds = fx.drops.userData.seed;
    for (let i = 0; i < ds.length; i++) { const [a, ph, sp] = ds[i], k = (t * sp * 0.9 + ph) % 1, r = 0.15 + k * 1.6; dp.setXYZ(i, Math.cos(a) * r + W * k * 3.5, 2.35 + Math.sin(k * Math.PI) * 0.7 - k * 1.8, Math.sin(a) * r + W * k * 1.2); }
    dp.needsUpdate = true; waterN.offset.x = t * 0.03; fx.water.material.normalScale.set(0.6 + W, 0.6 + W);
    const sp = fx.streaks.geometry.attributes.position, ss = fx.streaks.userData.seed; fx.streaks.material.opacity = smooth(0.15, 0.8, W) * 0.55;
    for (let i = 0; i < ss.length; i++) { const [, y0, z0, sp0] = ss[i], k = (t * sp0 * (0.6 + W * 1.6) + i * 0.137) % 1, x = -30 + k * 60, len = 1.5 + W * 3.5, z = z0 + Math.sin(t * 2 + i) * 0.6, y = y0 + Math.sin(k * 9 + i) * 0.4; sp.setXYZ(i * 2, x, y, z + k * 12 - 6); sp.setXYZ(i * 2 + 1, x - len, y + 0.05, z + k * 12 - 6 - len * 0.3); }
    sp.needsUpdate = true;
    const lp = fx.leaves.geometry.attributes.position, ls = fx.leaves.userData.seed; fx.leaves.material.opacity = W * 0.9;
    for (let i = 0; i < ls.length; i++) { const [x0, y0, z0, ph] = ls[i], k = (t * (0.5 + ph) * (0.4 + W)) % 1; lp.setXYZ(i, ((x0 + k * 70) % 60) - 30, y0 * 0.6 + 0.4 + Math.sin(t * 3 + i) * 0.5, z0 + Math.sin(t + ph * 6) * 2 + k * 6); }
    lp.needsUpdate = true;
    for (const n of npcs) {
      const m = n.m, [Lt, Rt] = m.arms, k = 1 - Math.exp(-6 * dt);
      m.root.scale.y = 1 + Math.sin(t * 1.6 + n.base.x) * 0.006; m.root.rotation.x = -W * 0.14 + Math.sin(t * 9 + n.base.x) * W * 0.03;
      let lsx = 0, lsz = -0.12, lel = -0.25, rsx = 0, rsz = 0.12, rel = -0.25;
      if (W > 0.25) { lsx = -2.4; lsz = 0; lel = -1.3; }
      if (n.kind === 'seller') { rsx = -0.5 + Math.sin(t * 2) * 0.1; rel = -1.2; if (n.pour > 0) { n.pour -= dt; rsx = -1.0; rel = -0.6; } }
      else if (n.kind === 'tea') { const sip = Math.max(0, Math.sin(t * 0.5 + n.ph)) ** 8; rsx = -0.45 - sip * 0.7; rel = -1.25 - sip * 0.9; }
      else if (n.kind === 'stand') { lsx = W > 0.25 ? lsx : -0.2; rsx = -0.15 + Math.sin(t * 1.1) * 0.25 * (n.talk > 0 ? 1 : 0.3); rel = -0.6; }
      Lt.sh.rotation.x += (lsx - Lt.sh.rotation.x) * k; Lt.sh.rotation.z += (lsz - Lt.sh.rotation.z) * k; Lt.el.rotation.x += (lel - Lt.el.rotation.x) * k;
      Rt.sh.rotation.x += (rsx - Rt.sh.rotation.x) * k; Rt.sh.rotation.z += (rsz - Rt.sh.rotation.z) * k; Rt.el.rotation.x += (rel - Rt.el.rotation.x) * k;
      m.mouth.scale.y = n.talk > 0 ? 0.25 + Math.abs(Math.sin(t * 15)) * 0.9 : 0.3; if (n.talk > 0) n.talk -= dt;
    }
  }
  let builtFor = -1;
  function render(t, opts = {}) {
    const now = performance.now(), rdt = lastNow ? clamp((now - lastNow) / 1000, 0, 0.1) : 1 / 60; lastNow = now;
    const dt = lastT >= 0 ? clamp(t - lastT, 0, 0.1) : 1 / 60; lastT = t;
    U.time.value = t; U.wind.value = damp(U.wind.value, S.wind, 3, dt);
    frames++; slow = slow * 0.97 + (rdt > 1 / 38 ? 1 : 0) * 0.03;
    if (frames > 90 && slow > 0.6 && pr > 1.01) { setSize(cssW, cssH, Math.max(1, pr - 0.25)); slow = 0; frames = 0; }
    const e = S.hero; if (!e || !hero) return;
    if (builtFor !== S.vq.camp) { placeCampVisual(); builtFor = S.vq.camp; }
    buildHi(opts.budget != null ? opts.budget : 4, e.x, e.z);
    animateHero(t, dt); animateBeasts(t, dt); animateGazelle(t, dt); animateMerchant(t, dt, opts.dlg); updateRope();
    if (M.rad(camera.position.x, camera.position.z) < 120 || S.scope) animatePlaza(t, dt);
    let n = 0;
    for (let i = 0; i < S.coins.length && n < coinMax; i++) { const c = S.coins[i]; if (c.taken || (c.x - e.x) ** 2 + (c.z - e.z) ** 2 > 3600) continue; o3.position.set(c.x, c.y + Math.sin(t * 2 + i) * 0.08, c.z); o3.rotation.set(Math.PI / 2, t * 3 + i, 0); o3.scale.setScalar(1); o3.updateMatrix(); coinMesh.setMatrixAt(n++, o3.matrix); }
    coinMesh.count = n; coinMesh.instanceMatrix.needsUpdate = true;
    for (const [id, f] of flags) { f.rotation.y = Math.sin(t * 2 + f.position.x) * 0.3; f.material.color.set(S.reached.has(id) ? '#FFD23F' : '#F4F1EA'); }
    zone.visible = S.vq.caught && !S.vq.delivered;
    if (zone.visible) { const k = 0.5 + 0.5 * Math.sin(t * 5); zone.userData.ring.scale.setScalar(1 + k * 0.08); zone.userData.arrow.position.y = 1.9 + k * 0.25; zone.userData.arrow.rotation.y = t * 2; }
    for (const f of cfx.flames) { const k = 0.75 + Math.sin(t * 13 + f.userData.i * 2) * 0.18; f.scale.set(1, k, 1); f.position.y = 0.12 + (f.userData.h0 * k) / 2; }
    for (const g of cfx.glows) g.material.opacity = 0.5 + Math.sin(t * 11) * 0.08;
    cfx.lantern.rotation.z = Math.sin(t * 1.6) * 0.08;
    const inValley = Math.abs(camera.position.x - (V.x + 60)) < 160 && Math.abs(camera.position.z - V.z) < 90;
    for (const b of butterflies) { b.visible = inValley; if (!inValley) continue; const u = b.userData, x = u.ax + Math.sin(t * 0.45 + u.ph) * 2.2, z = u.az + Math.sin(t * 0.7 + u.ph * 2) * 0.9; b.position.set(x, G.H(x, z) + 0.7 + Math.sin(t * 1.3 + u.ph) * 0.35, z); b.rotation.y = Math.cos(t * 0.45 + u.ph) > 0 ? -Math.PI / 2 : Math.PI / 2; const f = Math.sin(t * 22 + u.ph) * 1.1; u.l.rotation.y = f; u.r.rotation.y = -f; }
    for (const b of birds) { const u = b.userData, a = t * u.sp + u.ph; b.position.set(u.cx + Math.cos(a) * u.rad, u.y + Math.sin(t + u.ph) * 0.8, u.cz + Math.sin(a) * u.rad); b.rotation.y = -a; const f = Math.sin(t * 8 + u.ph) * 0.6; u.l.rotation.z = f; u.r.rotation.z = -f; }
    updateCamera(dt);
    // الضباب: كثيف بالغابة، خفيف بالسهل والوادي، ويصفى بالعالي
    const r = M.rad(e.x, e.z), inForest = smooth(195, 170, r) * smooth(78, 62, e.y), alt = smooth(50, 95, e.y) * smooth(200, 120, r);
    const altSea = Math.max(0, camera.position.y - G.SEA), hiK = smooth(20, 420, altSea);
    const fNear = S.scope ? 900 : lerp(lerp(320, 90, inForest), 900, hiK), fFar = S.scope ? 6500 : lerp(lerp(3600, 1200, inForest), 6200, hiK);
    scene.fog.near = damp(scene.fog.near, fNear, 2, dt); scene.fog.far = damp(scene.fog.far, fFar, 2, dt);
    fx.scope.visible = !S.scope; camera.fov = S.scope ? 13 : 62; camera.updateProjectionMatrix();
    camera.position.copy(cam.pos); camera.lookAt(cam.tgt);
    if (opts.shake > 0) { const m = opts.shake * 0.25; camera.position.x += (Math.random() - 0.5) * m; camera.position.y += (Math.random() - 0.5) * m; }
    sky.position.copy(camera.position);
    const cx = camera.position.x, cz = camera.position.z, bonus = (S.scope ? 500 : 0) + smooth(40, 95, camera.position.y) * 160;
    for (const c of chunks) {
      const d2 = (c.x - cx) ** 2 + (c.z - cz) ** 2, far = c.small ? c.far : c.far + bonus, vis = d2 < far * far;
      if (c.lo) { const near = d2 < c.lodAt * c.lodAt && !S.scope; c.m.visible = vis && near; c.lo.visible = vis && !near; } else c.m.visible = vis;
    }
    IV.update(t, dt, camera.position, e, opts.budget != null ? opts.budget : 6);
    const sx = Math.round(e.x / 0.25) * 0.25, sz = Math.round(e.z / 0.25) * 0.25;
    sun.target.position.set(sx, e.y, sz); sun.position.set(sx + SUN.x * 90, e.y + SUN.y * 90, sz + SUN.z * 90);
    updateSee(e);
    renderer.render(scene, camera);
  }
  const _sv = new Vector3(), _sb = new Vector2();
  function updateSee(e) { // مكان البطل على الشاشة وعمقه، للفتحة بالشجر
    const see = U.see.value;
    if (S.scope || e.mode === 'lift' || e.mode === 'carry') { see.w = 0; return; }
    camera.updateMatrixWorld();
    _sv.set(e.x, e.y + 0.9, e.z).applyMatrix4(camera.matrixWorldInverse); const depth = -_sv.z;
    if (depth < 0.3) { see.w = 0; return; }
    _sv.set(e.x, e.y + 0.9, e.z).project(camera); renderer.getDrawingBufferSize(_sb);
    const rad = (1.6 / (depth * Math.tan((camera.fov * Math.PI) / 360))) * (_sb.y / 2);
    see.set((_sv.x * 0.5 + 0.5) * _sb.x, (_sv.y * 0.5 + 0.5) * _sb.y, depth, rad);
  }
  const _p = new Vector3();
  function project(x, y, z) { _p.set(x, y, z).project(camera); return { x: (_p.x + 1) / 2, y: (1 - _p.y) / 2, vis: _p.z < 1 && _p.z > -1 }; }
  function portrait(size = 160) {
    scene.updateMatrixWorld(); U.see.value.w = 0;
    const hp = new Vector3(); mer.head.getWorldPosition(hp);
    const w = renderer.domElement.width, h = renderer.domElement.height, pc = new PerspectiveCamera(28, w / h, 0.05, 1200);
    const fwd = new Vector3(Math.sin(mer.root.rotation.y), 0, Math.cos(mer.root.rotation.y));
    pc.position.copy(hp).addScaledVector(fwd, 1.75).add(new Vector3(0, 0.05, 0)); pc.lookAt(hp.x, hp.y - 0.02, hp.z);
    sky.position.copy(pc.position); sun.target.position.copy(hp); sun.position.set(hp.x + SUN.x * 60, hp.y + SUN.y * 60, hp.z + SUN.z * 60);
    const was = [hero && hero.root.visible, gzM.root.visible]; if (hero) hero.root.visible = false; gzM.root.visible = false;
    renderer.render(scene, pc);
    if (hero) hero.root.visible = was[0]; gzM.root.visible = was[1];
    const out = document.createElement('canvas'); out.width = out.height = size;
    const s0 = Math.min(w, h); out.getContext('2d').drawImage(renderer.domElement, (w - s0) / 2, (h - s0) / 2, s0, s0, 0, 0, size, size);
    return out.toDataURL('image/jpeg', 0.9);
  }
  /** صورة العالم كله من فوك (راس الصورة = +x = الشرق صوب الوادي... الشمال بالبوصلة). الكائنات والخيمة مخفية: إنت تدوّرهم وتأشّرهم */
  const mapShot = (size = 1024) => IV.mapShot(size);
  const pourTea = () => { for (const n of npcs) if (n.kind === 'seller') { n.pour = 1.4; n.talk = 3; } };
  const talkNpc = (kind) => { const g = npcs.filter((n) => n.kind === kind); if (g.length) g[Math.floor(Math.random() * g.length)].talk = 3; };
  const ringBell = () => { fx.bell.v += 2.4; };
  return { IV, setSize, render, project, heading, cam, portrait, mapShot, buildHi, setHero: ensureHero, pourTea, talkNpc, ringBell, renderer, scene, camera, U, fx, npcs, get pr() { return pr; }, get hiLeft() { return IV.pending(); } };
}
