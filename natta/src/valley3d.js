// 🏞️ نطّة — مشهد الوادي ثلاثي الأبعاد: المظلة، السهل، الغزال، أبو جاسم وخيمته، والبطل.
// هذا رسّام فقط: كل منطق اللعب (الحركة، ذكاء الغزال، التسليم) يبقى بـ game.js ويوصل هنا كل فريم.
// البناء: natta/tools/build-3d.sh  ← يطلع natta/valley3d.js (three.js مدموج وياه)
import {
  WebGLRenderer, Scene, PerspectiveCamera, Color, Fog, HemisphereLight, DirectionalLight, Mesh, Group, InstancedMesh, Object3D,
  Matrix4, Vector3, Quaternion, Euler, PlaneGeometry, SphereGeometry, CylinderGeometry, ConeGeometry, IcosahedronGeometry,
  DodecahedronGeometry, TorusGeometry, LatheGeometry, CapsuleGeometry, BoxGeometry, RingGeometry, CircleGeometry, ShapeGeometry,
  ExtrudeGeometry, TubeGeometry, Shape, Vector2, BufferGeometry, BufferAttribute, MeshLambertMaterial, MeshPhongMaterial,
  MeshBasicMaterial, ShaderMaterial, PointsMaterial, LineBasicMaterial, Points, LineSegments, CanvasTexture, RepeatWrapping,
  SRGBColorSpace, DoubleSide, BackSide, AdditiveBlending, ACESFilmicToneMapping, PCFShadowMap, QuadraticBezierCurve3,
  CatmullRomCurve3, Sprite, SpriteMaterial,
} from 'three';

const K = 1 / 40; // وحدة اللعبة ← متر
const TAU = Math.PI * 2;
const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const lerp = (a, b, k) => a + (b - a) * k;
const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
const damp = (a, b, rate, dt) => a + (b - a) * (1 - Math.exp(-rate * dt));
function rng(seed) { let s = seed >>> 0; return () => { s = (s + 0x6d2b79f5) >>> 0; let t = s; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
const hash2 = (x, z) => { const s = Math.sin(x * 127.1 + z * 311.7) * 43758.5453; return s - Math.floor(s); };
function vnoise(x, z) {
  const xi = Math.floor(x), zi = Math.floor(z), xf = x - xi, zf = z - zi, u = xf * xf * (3 - 2 * xf), v = zf * zf * (3 - 2 * zf);
  const a = hash2(xi, zi), b = hash2(xi + 1, zi), c = hash2(xi, zi + 1), d = hash2(xi + 1, zi + 1);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
}
function fbm(x, z) { let s = 0, a = 0.5, f = 1; for (let i = 0; i < 4; i++) { s += a * vnoise(x * f, z * f); f *= 2.03; a *= 0.5; } return s / 0.9375; }

// ---------------------------------------------------------------- أدوات الأشكال
const _m = new Matrix4(), _q = new Quaternion(), _e = new Euler(), _v = new Vector3(), _s = new Vector3(), _c = new Color();
/** يحوّل الشكل لمثلثات مستقلة ويلوّنه (لون ثابت أو دالة حسب الموقع) */
function paint(g, color) {
  if (g.index) g = g.toNonIndexed();
  if (g.attributes.uv) g.deleteAttribute('uv');
  if (g.attributes.uv1) g.deleteAttribute('uv1');
  const p = g.attributes.position, n = p.count, arr = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    if (typeof color === 'function') color(_c, p.getX(i), p.getY(i), p.getZ(i), i); else _c.set(color);
    arr[i * 3] = _c.r; arr[i * 3 + 1] = _c.g; arr[i * 3 + 2] = _c.b;
  }
  g.setAttribute('color', new BufferAttribute(arr, 3));
  return g;
}
function tf(g, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0, sx = 1, sy = sx, sz = sx) {
  _e.set(rx, ry, rz); _q.setFromEuler(_e); _m.compose(_v.set(x, y, z), _q, _s.set(sx, sy, sz)); g.applyMatrix4(_m); return g;
}
function along(g, a, b) { // يمد الشكل (المبني على محور y) بين نقطتين
  const d = new Vector3().subVectors(b, a), len = d.length();
  _q.setFromUnitVectors(new Vector3(0, 1, 0), d.normalize());
  _m.compose(new Vector3().addVectors(a, b).multiplyScalar(0.5), _q, _s.set(1, 1, 1)); g.applyMatrix4(_m); return len;
}
function merge(list) {
  let n = 0; for (const g of list) n += g.attributes.position.count;
  const P = new Float32Array(n * 3), N = new Float32Array(n * 3), C = new Float32Array(n * 3);
  let o = 0;
  for (const g of list) { if (!g.attributes.normal) g.computeVertexNormals(); P.set(g.attributes.position.array, o * 3); N.set(g.attributes.normal.array, o * 3); C.set(g.attributes.color.array, o * 3); o += g.attributes.position.count; g.dispose(); }
  const m = new BufferGeometry();
  m.setAttribute('position', new BufferAttribute(P, 3)); m.setAttribute('normal', new BufferAttribute(N, 3)); m.setAttribute('color', new BufferAttribute(C, 3));
  m.computeBoundingSphere(); return m;
}
const mix = (c, a, b, k) => c.copy(_ca.set(a)).lerp(_cb.set(b), clamp(k, 0, 1));
const _ca = new Color(), _cb = new Color();
function canvasTex(w, h, draw, repeat) {
  const cv = document.createElement('canvas'); cv.width = w; cv.height = h;
  draw(cv.getContext('2d'), w, h);
  const t = new CanvasTexture(cv); t.colorSpace = SRGBColorSpace; t.anisotropy = 4;
  if (repeat) { t.wrapS = t.wrapT = RepeatWrapping; t.repeat.set(repeat[0], repeat[1]); }
  return t;
}

export function supported() {
  try { const c = document.createElement('canvas'); return !!(window.WebGLRenderingContext && (c.getContext('webgl2') || c.getContext('webgl'))); } catch (e) { return false; }
}

// ================================================================ المشهد
export function create(canvas, cfg) {
  const { VW = 2600, MER_X = 330, ZONE_X = 480 } = cfg || {};
  const renderer = new WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
  renderer.toneMapping = ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05;
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = PCFShadowMap;
  const scene = new Scene();
  const FOG = new Color('#D5E6EE');
  scene.background = FOG; scene.fog = new Fog(FOG, 70, 520);
  const camera = new PerspectiveCamera(40, 0.5, 0.1, 1200);
  const U = { time: { value: 0 } };
  const R = rng(20261123);

  // ---- الإضاءة
  const hemi = new HemisphereLight('#CFE5FF', '#7FA458', 1.05); scene.add(hemi);
  const SUN = new Vector3(0.55, 0.6, 0.5).normalize();
  const sun = new DirectionalLight('#FFE6BC', 3.0);
  sun.castShadow = true; sun.shadow.mapSize.set(2048, 2048);
  Object.assign(sun.shadow.camera, { left: -17, right: 17, top: 17, bottom: -17, near: 1, far: 140 });
  sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.025; sun.shadow.radius = 2.5;
  scene.add(sun, sun.target);

  // ---- السما (تدرّج + هالة شمس)
  const sky = new Mesh(new SphereGeometry(600, 32, 16), new ShaderMaterial({
    side: BackSide, depthWrite: false, fog: false,
    uniforms: { top: { value: new Color('#2F78DA') }, mid: { value: new Color('#86C4F7') }, hor: { value: new Color('#F8E6C8') }, sunDir: { value: new Vector3(0.62, 0.3, -0.73).normalize() } },
    vertexShader: 'varying vec3 vDir; void main(){ vDir = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }',
    fragmentShader: `uniform vec3 top, mid, hor, sunDir; varying vec3 vDir;
      void main(){ vec3 d = normalize(vDir); float y = d.y;
        vec3 c = mix(hor, mid, smoothstep(-0.03, 0.2, y)); c = mix(c, top, smoothstep(0.2, 0.8, y));
        float s = max(dot(d, sunDir), 0.0);
        c += vec3(1.0, 0.86, 0.6) * (pow(s, 10.0) * 0.35 + pow(s, 90.0) * 0.6);
        c = mix(c, vec3(1.0, 0.97, 0.86), smoothstep(0.9982, 0.9992, s));
        gl_FragColor = vec4(c, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
  }));
  sky.renderOrder = -10; sky.frustumCulled = false; scene.add(sky);

  // ---------------------------------------------------------------- الأرض
  const RIVER_Z = -8.2;
  function H(x, z) {
    const az = Math.abs(z);
    let h = (fbm(x * 0.11 + 3.1, z * 0.11) - 0.5) * 0.7 * smooth(1.8, 5, az);
    if (z > 5) h -= (z - 5) * 0.045;
    const rz = z - RIVER_Z;
    h -= Math.exp(-(rz * rz) / 3.2) * 1.05 * smooth(1.6, 4.5, az);
    if (z < -10.5) { const k = smooth(-10.5, -26, z); h += k * (1.6 + fbm(x * 0.035 + 9, z * 0.035) * 9) + smooth(-35, -110, z) * 16 * fbm(x * 0.02, z * 0.02 + 4) - smooth(-150, -260, z) * 10; }
    const edge = smooth(1, -16, x) + smooth(64, 80, x);
    if (edge > 0) h += edge * (7 + fbm(x * 0.06, z * 0.06) * 6) * smooth(-1, 3, -Math.abs(z - RIVER_Z * 0.5) + 30);
    return h;
  }
  {
    const xs = []; for (let x = -75; x <= 145; x += 1.25) xs.push(x); xs.unshift(-260, -180, -120); xs.push(200, 260, 330);
    const zs = []; for (let z = 36; z > 14; z -= 1) zs.push(z); for (let z = 14; z > -10; z -= 0.5) zs.push(z); for (let z = -10; z > -40; z -= 1.25) zs.push(z); for (let z = -40; z > -160; z -= 3.5) zs.push(z); for (let z = -160; z >= -380; z -= 9) zs.push(z);
    const nx = xs.length, nz = zs.length, P = new Float32Array(nx * nz * 3), C = new Float32Array(nx * nz * 3);
    for (let j = 0; j < nz; j++) for (let i = 0; i < nx; i++) {
      const x = xs[i], z = zs[j], y = H(x, z), o = (j * nx + i) * 3;
      P[o] = x; P[o + 1] = y; P[o + 2] = z;
      const n = fbm(x * 0.07 + 11, z * 0.07), n2 = vnoise(x * 0.5, z * 0.5);
      mix(_c, '#5FAE3E', '#9AD85E', n * 1.3 - 0.15 + n2 * 0.2);
      const rz = Math.abs(z - RIVER_Z);
      if (rz < 2.8) _c.lerp(_ca.set(y < -0.35 ? '#8F8A62' : '#D9C891'), smooth(2.8, 1.7, rz));
      if (z < -12) _c.lerp(_ca.set('#4F9A3E'), smooth(-12, -40, z) * 0.6);
      if (y > 6) _c.lerp(_ca.set('#A99A78'), smooth(6, 14, y) * 0.55);
      C[o] = _c.r; C[o + 1] = _c.g; C[o + 2] = _c.b;
    }
    const idx = [];
    for (let j = 0; j < nz - 1; j++) for (let i = 0; i < nx - 1; i++) { const a = j * nx + i, b = a + 1, c = a + nx, d = c + 1; idx.push(a, b, c, b, d, c); }
    const g = new BufferGeometry();
    g.setAttribute('position', new BufferAttribute(P, 3)); g.setAttribute('color', new BufferAttribute(C, 3));
    g.setIndex(idx); g.computeVertexNormals();
    const ground = new Mesh(g, new MeshLambertMaterial({ vertexColors: true }));
    ground.receiveShadow = true; scene.add(ground);
  }
  // درب ترابي على خط المشي
  {
    const tex = canvasTex(1024, 64, (g, w, h) => {
      g.clearRect(0, 0, w, h);
      for (let x = 0; x < w; x += 2) {
        const e1 = 8 + vnoise(x * 0.05, 1) * 10 + vnoise(x * 0.3, 2) * 3, e2 = h - 8 - vnoise(x * 0.05, 5) * 10 - vnoise(x * 0.3, 7) * 3;
        const gr = g.createLinearGradient(0, e1, 0, e2);
        gr.addColorStop(0, 'rgba(214,190,128,0)'); gr.addColorStop(0.18, 'rgba(214,190,128,.92)'); gr.addColorStop(0.82, 'rgba(206,180,118,.92)'); gr.addColorStop(1, 'rgba(206,180,118,0)');
        g.fillStyle = gr; g.fillRect(x, e1, 2, e2 - e1);
      }
      for (let i = 0; i < 700; i++) { g.fillStyle = `rgba(${150 + (i % 5) * 18},${130 + (i % 7) * 10},${95 + (i % 3) * 12},.55)`; g.beginPath(); g.arc(Math.random() * w, 14 + Math.random() * (h - 28), 0.6 + Math.random() * 1.6, 0, TAU); g.fill(); }
    }, [7, 1]);
    const path = new Mesh(new PlaneGeometry(90, 2.1), new MeshLambertMaterial({ map: tex, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 }));
    path.rotation.x = -Math.PI / 2; path.position.set(32, 0.012, 0); path.receiveShadow = true; scene.add(path);
  }
  // النهر (يلمع بالشمس وموجه يمشي)
  const waterNormal = canvasTex(256, 256, (g, w, h) => {
    const img = g.createImageData(w, h), hgt = (x, y) => vnoise(x / 18, y / 9) * 0.6 + vnoise(x / 7, y / 4) * 0.4;
    for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
      const dx = hgt(x + 1, y) - hgt(x - 1, y), dy = hgt(x, y + 1) - hgt(x, y - 1), o = (y * w + x) * 4;
      const nx = -dx * 3, ny = -dy * 3, l = Math.hypot(nx, ny, 1);
      img.data[o] = (nx / l * 0.5 + 0.5) * 255; img.data[o + 1] = (ny / l * 0.5 + 0.5) * 255; img.data[o + 2] = (1 / l * 0.5 + 0.5) * 255; img.data[o + 3] = 255;
    }
    g.putImageData(img, 0, 0);
  }, [40, 2]);
  waterNormal.colorSpace = '';
  const river = new Mesh(new PlaneGeometry(240, 4.4), new MeshPhongMaterial({ color: '#3D9FD8', specular: '#FFFFFF', shininess: 140, normalMap: waterNormal, transparent: true, opacity: 0.9 }));
  river.material.normalScale.set(0.7, 0.7);
  river.rotation.x = -Math.PI / 2; river.position.set(35, -0.34, RIVER_Z); river.receiveShadow = true; scene.add(river);

  // ---------------------------------------------------------------- الجبال البعيدة (وبيها القمة اللي وكع منها 🏔️)
  {
    const list = [];
    const mountain = (x, z, h, r, seed, snowAt) => {
      let g = new ConeGeometry(r, h, 30, 12);
      const p = g.attributes.position;
      for (let i = 0; i < p.count; i++) {
        const px = p.getX(i), py = p.getY(i), pz = p.getZ(i), a = Math.atan2(pz, px), k = (py + h / 2) / h;
        const d = 1 + (vnoise(a * 2.2 + seed, k * 3.5) - 0.5) * 0.45 * (1 - k * 0.4);
        p.setXYZ(i, px * d, py + (vnoise(a * 4 + seed * 2, k * 5) - 0.5) * h * 0.07 * (1 - k), pz * d);
      }
      g = paint(g, (c, px, py, pz) => {
        const k = (py + h / 2) / h, n = vnoise(Math.atan2(pz, px) * 6 + seed, k * 9);
        mix(c, '#5E7FA6', '#93A9CE', k * 1.15 + n * 0.3);
        if (snowAt < 1 && k > snowAt - 0.06 + n * 0.08) c.set('#F7FAFF');
      });
      list.push(tf(g, x, h / 2 - 2, z));
    };
    mountain(70, -360, 125, 80, 1.3, 0.6); // القمة
    const spots = [[-90, -330, 70, 70], [-30, -350, 88, 75], [15, -320, 60, 60], [30, -390, 100, 85], [125, -350, 90, 75], [170, -320, 64, 62], [215, -370, 82, 72], [-150, -380, 95, 85], [100, -300, 42, 50], [-20, -290, 38, 46], [150, -290, 40, 44]];
    spots.forEach(([x, z, h, r], i) => mountain(x, z, h, r, i * 3.7, h > 75 ? 0.76 : 2));
    const m = new Mesh(merge(list), new MeshLambertMaterial({ vertexColors: true, flatShading: true }));
    scene.add(m);
    // علم القمة
    const flag = new Group();
    const pole = new Mesh(new CylinderGeometry(0.25, 0.25, 9, 6), new MeshLambertMaterial({ color: '#5C3A1A' })); pole.position.y = 4.5;
    const cloth = new Mesh(new PlaneGeometry(6, 3.6), new MeshBasicMaterial({ color: '#FFB703', side: DoubleSide, fog: false })); cloth.position.set(3, 7, 0);
    flag.add(pole, cloth); flag.position.set(70, 121, -360); flag.scale.setScalar(1.6); scene.add(flag);
  }

  // ---------------------------------------------------------------- مواد عامة
  const matVC = new MeshLambertMaterial({ vertexColors: true });
  const matFlat = new MeshLambertMaterial({ vertexColors: true, flatShading: true });
  function swayMat(base, amp, h0) {
    const m = base.clone();
    m.onBeforeCompile = (sh) => {
      sh.uniforms.uTime = U.time;
      sh.vertexShader = 'uniform float uTime;\n' + sh.vertexShader.replace('#include <begin_vertex>', `#include <begin_vertex>
        float hh = max(0.0, transformed.y - ${h0.toFixed(2)});
        float ph = 0.0;
        #ifdef USE_INSTANCING
          ph = instanceMatrix[3].x * 0.37 + instanceMatrix[3].z * 0.23;
        #endif
        transformed.x += (sin(uTime * 1.25 + ph) + 0.35 * sin(uTime * 2.7 + ph * 1.7)) * ${amp.toFixed(4)} * hh * hh;
        transformed.z += cos(uTime * 1.05 + ph) * ${(amp * 0.5).toFixed(4)} * hh * hh;`);
    };
    m.customProgramCacheKey = () => 'sway' + amp + '_' + h0 + (base.flatShading ? 'f' : '') + base.side;
    return m;
  }
  const occupied = (x, z, r) => Math.abs(z) < 1.25 + r || (x > 2.6 && x < 15.4 && z > -5.4 && z < 1.8) || Math.abs(z - RIVER_Z) < 2.4 + r;
  function scatter(geo, mat, count, place, opts = {}) {
    const im = new InstancedMesh(geo, mat, count), o = new Object3D();
    let n = 0;
    for (let tries = 0; n < count && tries < count * 30; tries++) {
      const s = place(o, n);
      if (!s) continue;
      o.updateMatrix(); im.setMatrixAt(n, o.matrix);
      if (opts.color) im.setColorAt(n, _c.set(opts.color(n)));
      n++;
    }
    im.count = n; im.castShadow = !!opts.cast; im.receiveShadow = opts.receive !== false;
    scene.add(im); return im;
  }

  // ---------------------------------------------------------------- النخل 🌴
  function palmGeo(r, lean, fronds) {
    const parts = [], H0 = 4.6 + r() * 1.6;
    const curve = new CatmullRomCurve3([new Vector3(0, -0.2, 0), new Vector3(lean * 0.2, H0 * 0.35, 0.05), new Vector3(lean * 0.6, H0 * 0.7, 0.1), new Vector3(lean, H0, 0.12)]);
    const segs = 13;
    for (let i = 0; i < segs; i++) {
      const a = curve.getPoint(i / segs), b = curve.getPoint((i + 1) / segs), rr = lerp(0.25, 0.14, i / segs);
      const g = paint(new CylinderGeometry(rr * 1.13, rr * 0.9, 1, 9, 1, true), (c, x, y) => mix(c, i % 2 ? '#7E5E3C' : '#8D6C46', '#A9875C', y + 0.5));
      const len = a.distanceTo(b); tf(g, 0, 0, 0, 0, 0, 0, 1, len * 1.04, 1); along(g, a, b); parts.push(g);
    }
    const T = curve.getPoint(1), up = new Vector3(0, 1, 0);
    parts.push(tf(paint(new IcosahedronGeometry(0.28, 1), '#6B5A2E'), T.x, T.y, T.z));
    for (let f = 0; f < fronds; f++) {
      const a = (f / fronds) * TAU + r() * 0.35, dir = new Vector3(Math.cos(a), 0, Math.sin(a)), L = 2.6 + r() * 0.9, droop = 0.7 + r() * 0.6;
      const spine = new CatmullRomCurve3([T.clone(), T.clone().addScaledVector(dir, L * 0.3).addScaledVector(up, 0.55), T.clone().addScaledVector(dir, L * 0.65).addScaledVector(up, 0.35 - droop * 0.2), T.clone().addScaledVector(dir, L).addScaledVector(up, -droop)]);
      const N = 14, pos = [], col = [];
      const pts = [];
      for (let s = 0; s <= N; s++) {
        const k = s / N, p = spine.getPoint(k), tg = spine.getTangent(k), side = new Vector3().crossVectors(tg, up).normalize();
        const w = Math.pow(Math.sin(Math.PI * Math.min(1, k * 1.15)), 0.7) * 0.5 * (s % 2 ? 1 : 0.72);
        pts.push([p, p.clone().addScaledVector(side, w).addScaledVector(up, -w * 0.42), p.clone().addScaledVector(side, -w).addScaledVector(up, -w * 0.42), k]);
      }
      const push = (v, k, edge) => { pos.push(v.x, v.y, v.z); mix(_c, '#2E7A30', '#6CC24A', k * 0.9 + edge * 0.25); col.push(_c.r, _c.g, _c.b); };
      for (let s = 0; s < N; s++) {
        const [c0, l0, r0, k0] = pts[s], [c1, l1, r1, k1] = pts[s + 1];
        push(c0, k0, 0); push(l0, k0, 1); push(c1, k1, 0); push(l0, k0, 1); push(l1, k1, 1); push(c1, k1, 0);
        push(c0, k0, 0); push(c1, k1, 0); push(r0, k0, 1); push(r0, k0, 1); push(c1, k1, 0); push(r1, k1, 1);
      }
      const g = new BufferGeometry(); g.setAttribute('position', new BufferAttribute(new Float32Array(pos), 3)); g.setAttribute('color', new BufferAttribute(new Float32Array(col), 3)); g.computeVertexNormals();
      parts.push(g);
    }
    for (let i = 0; i < 2; i++) { // عذوق تمر
      const a = r() * TAU;
      for (let k = 0; k < 7; k++) parts.push(tf(paint(new IcosahedronGeometry(0.085, 0), k % 2 ? '#B85C1C' : '#D07A26'), T.x + Math.cos(a) * 0.32 + (r() - 0.5) * 0.16, T.y - 0.32 - r() * 0.3, T.z + Math.sin(a) * 0.32 + (r() - 0.5) * 0.16));
    }
    return merge(parts);
  }
  const palmMat = swayMat(new MeshLambertMaterial({ vertexColors: true, side: DoubleSide }), 0.012, 2.8);
  const palmSpots = [[2.4, -3.6], [11.8, -5.7], [15.6, -3.9], [0.6, -5.2]];
  for (let x = 17; x < 64; x += 5.5 + R() * 4) palmSpots.push([x, -(3.4 + R() * 2.4)]);
  for (let x = -6; x < 70; x += 4.5 + R() * 5) palmSpots.push([x, RIVER_Z - 3.2 - R() * 4]);
  for (let x = -8; x < 70; x += 7 + R() * 7) palmSpots.push([x, RIVER_Z + 3.0 + R() * 0.6]);
  const palmGeos = [palmGeo(rng(3), 1.1, 9), palmGeo(rng(8), -0.8, 10), palmGeo(rng(15), 0.5, 8)];
  palmGeos.forEach((geo, gi) => {
    for (const near of [true, false]) { // بس اللي قريبة من الدرب ترمي ظل (أخف على الموبايل)
      const mine = palmSpots.filter((sp, i) => i % 3 === gi && (sp[1] > -7) === near);
      let i = 0;
      if (mine.length) scatter(geo, palmMat, mine.length, (o) => { const [x, z] = mine[i++]; o.position.set(x, H(x, z) - 0.05, z); o.rotation.set(0, R() * TAU, 0); o.scale.setScalar(0.85 + R() * 0.35); return true; }, { cast: near });
    }
  });

  // ---------------------------------------------------------------- أشجار مدوّرة وشجيرات وصخور
  function treeGeo(r, fruit, palette) {
    const parts = [paint(tf(new CylinderGeometry(0.12, 0.2, 1.7, 7), 0, 0.85, 0), '#7A5230')];
    parts.push(paint(tf(new CylinderGeometry(0.05, 0.08, 0.8, 5), 0.25, 1.55, 0, 0, 0, -0.7), '#7A5230'));
    for (let i = 0; i < 7; i++) {
      const rad = 0.62 + r() * 0.45, px = (r() - 0.5) * 1.3, py = 2.15 + r() * 0.9, pz = (r() - 0.5) * 1.1, tone = r();
      parts.push(tf(paint(new IcosahedronGeometry(rad, 1), (c, x, y, z) => mix(c, palette[0], palette[1], 0.25 + y / rad * 0.45 + tone * 0.3 + (hash2(x * 9, z * 9) - 0.5) * 0.2)), px, py, pz));
    }
    if (fruit) for (let i = 0; i < 9; i++) { const a = r() * TAU, b = r() * 1.3; parts.push(tf(paint(new IcosahedronGeometry(0.08, 1), fruit), Math.cos(a) * 0.95, 2.1 + Math.sin(b) * 0.9, Math.sin(a) * 0.85 + 0.2)); }
    return merge(parts);
  }
  const treeMat = swayMat(new MeshLambertMaterial({ vertexColors: true, flatShading: true }), 0.01, 1.2);
  const treeKinds = [treeGeo(rng(21), '#E8443A', ['#2F8A3C', '#7CCB55']), treeGeo(rng(33), null, ['#3B9447', '#8AD460']), treeGeo(rng(41), '#FFB52E', ['#2C7F3A', '#6FC24F'])];
  treeKinds.forEach((geo, gi) => scatter(geo, treeMat, gi === 1 ? 6 : 12, (o) => {
    const x = -6 + R() * 76, z = gi === 1 ? -(4.6 + R() * 2) : RIVER_Z - 4 - R() * 16;
    if (occupied(x, z, 1.6) || Math.abs(x - 9) < 7 && z > -6) return false;
    o.position.set(x, H(x, z) - 0.05, z); o.rotation.set(0, R() * TAU, 0); o.scale.setScalar(gi === 1 ? 0.6 + R() * 0.25 : 0.75 + R() * 0.45); return true;
  }, { cast: gi === 1 }));
  const bushGeo = merge([0, 1, 2, 3].map((i) => tf(paint(new IcosahedronGeometry(0.42 - i * 0.05, 1), (c, x, y) => mix(c, '#2F8A3C', '#86D05C', 0.4 + y * 0.9 + i * 0.1)), (i - 1.5) * 0.32, 0.3, (i % 2) * 0.2)));
  scatter(bushGeo, matFlat, 70, (o) => {
    const front = R() < 0.3, x = -8 + R() * 80, z = front ? 1.9 + R() * 1.4 : -(2.2 + R() * 4.5);
    if (occupied(x, z, 0.6)) return false;
    o.position.set(x, H(x, z), z); o.rotation.y = R() * TAU; o.scale.setScalar(front ? 0.4 + R() * 0.3 : 0.6 + R() * 0.7); return true;
  }, { cast: true });
  const rockGeo = paint(new DodecahedronGeometry(0.4, 0), (c, x, y, z) => mix(c, '#8C877B', '#C9C4B6', 0.4 + y * 1.2 + hash2(x * 7, z * 7) * 0.3));
  scatter(rockGeo, matFlat, 55, (o) => {
    const x = -8 + R() * 80, z = R() < 0.5 ? -(1.6 + R() * 6) : 1.6 + R() * 2.2;
    if (occupied(x, z, 0.3) && !(Math.abs(z - RIVER_Z) < 3.4 && Math.abs(z - RIVER_Z) > 1.6)) return false;
    o.position.set(x, H(x, z) + 0.05, z); o.rotation.set(R() * 3, R() * 3, R() * 3); const k = z > 0 ? 0.45 : 1; o.scale.set((0.4 + R() * 0.9) * k, (0.3 + R() * 0.5) * k, (0.4 + R() * 0.8) * k); return true;
  }, { cast: true });
  // أشجار صغيرة على التلال البعيدة (تعطي عمق)
  scatter(merge([tf(paint(new CylinderGeometry(0.15, 0.22, 1.6, 5), '#6B4A2A'), 0, 0.8, 0), tf(paint(new IcosahedronGeometry(1.2, 0), (c, x, y) => mix(c, '#2F7A38', '#68B24E', y / 1.2 * 0.5 + 0.5)), 0, 2.3, 0, 0, 0, 0, 1, 0.85, 1), tf(paint(new IcosahedronGeometry(0.8, 0), (c, x, y) => mix(c, '#3A8740', '#78C05A', y / 0.8 * 0.5 + 0.5)), 0.6, 2.9, 0.2)]), matFlat, 170, (o) => {
    const x = -50 + R() * 170, z = -24 - R() * 70, h = H(x, z);
    if (vnoise(x * 0.05, z * 0.05) < 0.42) return false;
    o.position.set(x, h - 0.2, z); o.rotation.y = R() * TAU; o.scale.setScalar(1 + R() * 1.4); return true;
  });
  // قصب يم النهر
  const reedGeo = merge([...Array(6)].map((_, i) => {
    const a = i * 1.1, h = 0.8 + (i % 3) * 0.22;
    const blade = paint(new ConeGeometry(0.025, h, 3), (c, x, y) => mix(c, '#3C7F35', '#8CC05A', y / h + 0.5));
    tf(blade, Math.cos(a) * 0.12, h / 2, Math.sin(a) * 0.12, Math.sin(a) * 0.15, 0, Math.cos(a) * 0.15);
    return i % 2 ? merge([blade, tf(paint(new CylinderGeometry(0.035, 0.035, 0.16, 6), '#6B4423'), Math.cos(a) * 0.12 + Math.cos(a) * 0.15 * h, h - 0.05, Math.sin(a) * 0.12)]) : blade;
  }));
  scatter(reedGeo, swayMat(matVC, 0.09, 0.2), 90, (o) => {
    const x = -8 + R() * 82, z = RIVER_Z + (R() < 0.5 ? -1 : 1) * (1.75 + R() * 0.5);
    o.position.set(x, H(x, z) - 0.05, z); o.rotation.y = R() * TAU; o.scale.setScalar(0.8 + R() * 0.5); return true;
  });

  // ---------------------------------------------------------------- عشب وورد 🌼
  const tuftGeo = (() => {
    const pos = [], col = [];
    for (let i = 0; i < 5; i++) {
      const a = (i / 5) * TAU + 0.3, h = 0.22 + (i % 3) * 0.07, w = 0.035, bx = Math.cos(a) * 0.05, bz = Math.sin(a) * 0.05, tx = bx + Math.cos(a) * 0.1, tz = bz + Math.sin(a) * 0.1;
      const px = -Math.sin(a) * w, pz = Math.cos(a) * w;
      pos.push(bx - px, 0, bz - pz, bx + px, 0, bz + pz, tx, h, tz);
      for (const k of [0, 0, 1]) { mix(_c, '#3A8A34', '#A6E070', k); col.push(_c.r, _c.g, _c.b); }
    }
    const g = new BufferGeometry(); g.setAttribute('position', new BufferAttribute(new Float32Array(pos), 3)); g.setAttribute('color', new BufferAttribute(new Float32Array(col), 3)); g.computeVertexNormals();
    return g;
  })();
  scatter(tuftGeo, swayMat(new MeshLambertMaterial({ vertexColors: true, side: DoubleSide }), 0.5, 0.0), 3200, (o) => {
    const x = -8 + R() * 82, z = -7 + R() * 17;
    if (Math.abs(z) < 0.95 || Math.abs(z - RIVER_Z) < 2.2 || (x > 7.6 && x < 11.8 && z > -4.2 && z < -0.2)) return false;
    o.position.set(x, H(x, z) - 0.02, z); o.rotation.y = R() * TAU; o.scale.setScalar(z > 4 ? 0.5 + R() * 0.5 : 0.7 + R() * 0.9); return true;
  }, { receive: true });
  {
    const stem = merge([tf(paint(new CylinderGeometry(0.007, 0.01, 0.24, 3, 1, true), '#3E8E36'), 0, 0.12, 0), tf(paint(new CircleGeometry(0.02, 6), '#FFD54A'), 0, 0.248, 0.004, -1.0, 0, 0)]);
    const petals = merge([0, 1, 2, 3, 4].map((i) => { const a = (i / 5) * TAU; return tf(paint(new CircleGeometry(0.036, 5), '#FFFFFF'), Math.cos(a) * 0.035, Math.sin(a) * 0.035, 0, 0, 0, a); }));
    tf(petals, 0, 0.245, 0, -1.0, 0, 0);
    const spots = [], cols = ['#FF6B9A', '#FFFFFF', '#FFD23F', '#B28DFF', '#FF8C42', '#FF4D6D', '#7FD1FF'];
    for (let i = 0; i < 1500 && spots.length < 1400; i++) {
      const x = -6 + R() * 78, z = -6 + R() * 9.4;
      if (Math.abs(z) < 0.95 || Math.abs(z - RIVER_Z) < 2.3 || (x > 7.2 && x < 12.2 && z > -4.4 && z < -0.1)) continue;
      if (vnoise(x * 0.18, z * 0.18) < 0.38) continue; // الورد يطلع بقع
      spots.push([x, z, R() * TAU, 1.2 + R() * 0.8, cols[Math.floor(vnoise(x * 0.3 + 40, z * 0.3) * cols.length * 0.999 + R() * 1.5) % cols.length]]);
    }
    const flowerMat = new MeshLambertMaterial({ vertexColors: true, side: DoubleSide });
    let i = 0;
    scatter(stem, swayMat(matVC, 0.8, 0.0), spots.length, (o) => { const [x, z, ry, s] = spots[i++]; o.position.set(x, H(x, z), z); o.rotation.set(0, ry * 0.25, 0); o.scale.setScalar(s); return true; });
    i = 0;
    scatter(petals, swayMat(flowerMat, 0.8, 0.0), spots.length, (o) => { const [x, z, ry, s] = spots[i++]; o.position.set(x, H(x, z), z); o.rotation.set(0, ry * 0.25, 0); o.scale.setScalar(s); return true; }, { color: (n) => spots[n][4] });
  }

  // ---------------------------------------------------------------- الغيوم والطيور والفراشات وذرات الضو
  const clouds = new Group(); scene.add(clouds);
  {
    const cmat = new MeshLambertMaterial({ color: '#FFFFFF', emissive: '#C9D8E6', emissiveIntensity: 0.35, flatShading: false, fog: true });
    for (let i = 0; i < 11; i++) {
      const g = new Group();
      for (let k = 0; k < 6; k++) { const s = new Mesh(new IcosahedronGeometry(1, 2), cmat); s.position.set((k - 2.5) * 2.1 + R(), R() * 1.4, R() * 1.5); s.scale.set(2.2 + R() * 1.6, 1.5 + R() * 1.1, 1.8 + R()); g.add(s); }
      g.position.set(-60 + R() * 200, 28 + R() * 22, -70 - R() * 90); g.userData.v = 0.4 + R() * 0.6;
      clouds.add(g);
    }
  }
  const birds = [];
  {
    const wing = new BufferGeometry(); wing.setAttribute('position', new BufferAttribute(new Float32Array([0, 0, 0, 0.9, 0, -0.25, 0.9, 0, 0.25]), 3)); wing.computeVertexNormals();
    const bm = new MeshBasicMaterial({ color: '#34406A', side: DoubleSide });
    for (let i = 0; i < 6; i++) {
      const b = new Group(), l = new Mesh(wing, bm), r = new Mesh(wing, bm); r.scale.x = -1; b.add(l, r);
      b.userData = { ph: R() * 6, sp: 2 + R() * 2, y: 18 + R() * 14, z: -30 - R() * 40, x0: R() * 200, l, r };
      birds.push(b); scene.add(b);
    }
  }
  const butterflies = [];
  {
    const shape = new Shape(); shape.moveTo(0, 0); shape.bezierCurveTo(0.05, 0.1, 0.16, 0.12, 0.15, 0.02); shape.bezierCurveTo(0.16, -0.05, 0.08, -0.1, 0, -0.02);
    const wg = new ShapeGeometry(shape, 6);
    const cols = ['#FF8FD1', '#FFD23F', '#8FD6FF', '#FFFFFF', '#FF9E5E', '#B28DFF'];
    for (let i = 0; i < 9; i++) {
      const m = new MeshLambertMaterial({ color: cols[i % cols.length], side: DoubleSide, emissive: cols[i % cols.length], emissiveIntensity: 0.25 });
      const b = new Group(), l = new Mesh(wg, m), r = new Mesh(wg, m); r.scale.x = -1;
      const body = new Mesh(new CapsuleGeometry(0.012, 0.07, 3, 5), new MeshBasicMaterial({ color: '#2B2233' })); body.rotation.x = Math.PI / 2;
      b.add(l, r, body);
      b.userData = { l, r, ax: 3 + i * 7.5 + R() * 3, az: (i % 3 === 0 ? 1.8 : -1.8) + R() * 1.5, ph: R() * 6 };
      butterflies.push(b); scene.add(b);
    }
  }
  const glowTex = canvasTex(64, 64, (g) => { const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32); gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.35, 'rgba(255,255,255,.5)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = gr; g.fillRect(0, 0, 64, 64); });
  const motes = (() => {
    const n = 160, pos = new Float32Array(n * 3), seeds = [];
    for (let i = 0; i < n; i++) seeds.push([R() * 30 - 15, 0.3 + R() * 3.5, -4 + R() * 12, R() * 6]);
    const g = new BufferGeometry(); g.setAttribute('position', new BufferAttribute(pos, 3));
    const p = new Points(g, new PointsMaterial({ size: 0.07, map: glowTex, color: '#FFF4C4', transparent: true, opacity: 0.85, depthWrite: false, blending: AdditiveBlending }));
    p.frustumCulled = false; scene.add(p); p.userData.seeds = seeds; return p;
  })();

  // ================================================================ خيمة أبو جاسم 🏕️
  const TX = 9.7, TZ = -2.8, FIRE = new Vector3(13.7, 0, -2.4), MER3 = 10.75; // أبو جاسم واكف يم مكان التسليم
  const fx = { flames: [], glows: [], lantern: null, merchant: null };
  {
    const P = [];
    const stripes = (c, x) => c.set(Math.floor((x + 1.7) / 0.425) % 2 ? '#EAD9B5' : '#D9C39C');
    P.push(tf(paint(new BoxGeometry(3.4, 1.95, 2.4), stripes), TX, 0.975, TZ));
    for (const s of [-1, 1]) P.push(tf(paint(new BoxGeometry(3.62, 0.07, 1.52), (c, x) => c.set(Math.floor((x + 1.81) / 0.4525) % 2 ? '#C9AE82' : '#B99D70')), TX, 2.32, TZ + s * 0.6, s * 0.59, 0, 0));
    const gable = new Shape(); gable.moveTo(-1.2, 0); gable.lineTo(1.2, 0); gable.lineTo(0, 0.8); gable.closePath();
    for (const s of [-1, 1]) P.push(tf(paint(new ShapeGeometry(gable), '#E3D0A8'), TX + s * 1.7, 1.95, TZ, 0, Math.PI / 2, 0));
    P.push(tf(paint(new BoxGeometry(0.95, 1.55, 0.05), '#3F2412'), TX - 0.25, 0.775, TZ + 1.22));
    for (const s of [-1, 1]) { const flap = new Shape(); flap.moveTo(0, 0); flap.lineTo(0.42 * s, 0); flap.lineTo(0, -1.0); flap.closePath(); P.push(tf(paint(new ShapeGeometry(flap), '#E9D7B0'), TX - 0.25 + s * 0.04, 1.55, TZ + 1.25)); }
    // المظلة المخططة
    const A0 = new Vector3(0, 2.15, TZ + 1.2), A1 = new Vector3(0, 1.98, TZ + 2.55), alen = A0.distanceTo(A1), aang = Math.atan2(A0.y - A1.y, A1.z - A0.z);
    for (let i = 0; i < 8; i++) {
      const x = TX - 1.7 + 0.2125 + i * 0.425, col = i % 2 ? '#FAF3E6' : '#D7263D';
      P.push(tf(paint(new BoxGeometry(0.425, 0.035, alen), col), x, (A0.y + A1.y) / 2, (A0.z + A1.z) / 2, aang, 0, 0));
      P.push(tf(paint(new CircleGeometry(0.2125, 10, Math.PI, Math.PI), col), x, A1.y, A1.z + 0.01));
    }
    for (const s of [-1, 1]) P.push(tf(paint(new CylinderGeometry(0.045, 0.055, 2.05, 7), '#5C3A1A'), TX + s * 1.68, 1.02, TZ + 2.55));
    P.push(tf(paint(new CylinderGeometry(0.03, 0.03, 0.5, 5), '#5C3A1A'), TX, 2.95, TZ + 1.22, 0, 0, 0));
    // طاولة وبضاعة
    const tbx = TX - 0.78, tbz = TZ + 2.0;
    P.push(tf(paint(new BoxGeometry(1.0, 0.06, 0.55), '#8B5A2B'), tbx, 0.74, tbz));
    for (const [a, b] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) P.push(tf(paint(new CylinderGeometry(0.03, 0.03, 0.72, 5), '#6B4220'), tbx + a * 0.44, 0.36, tbz + b * 0.22));
    const jar = (r0) => new LatheGeometry([new Vector2(0.001, 0), new Vector2(0.09 * r0, 0), new Vector2(0.15 * r0, 0.07), new Vector2(0.16 * r0, 0.17), new Vector2(0.11 * r0, 0.28), new Vector2(0.06 * r0, 0.32), new Vector2(0.075 * r0, 0.36), new Vector2(0.06 * r0, 0.37)], 14);
    P.push(tf(paint(jar(1), (c, x, y) => c.set(y > 0.2 && y < 0.24 ? '#F2E3C6' : '#C0612B')), tbx - 0.3, 0.77, tbz));
    P.push(tf(paint(jar(0.8), (c, x, y) => c.set(y > 0.16 && y < 0.19 ? '#FFFFFF' : '#2E86AB')), tbx + 0.02, 0.77, tbz - 0.05));
    P.push(tf(paint(new CylinderGeometry(0.07, 0.07, 0.42, 10), (c, x, y) => c.set(Math.abs(y) > 0.17 ? '#E8C170' : Math.floor((y + 0.2) / 0.06) % 2 ? '#9B2335' : '#1F3A68')), tbx + 0.3, 0.84, tbz, 0, 0, Math.PI / 2));
    P.push(tf(paint(new SphereGeometry(0.28, 12, 8), (c, x, y) => mix(c, '#C8B18A', '#E2D2AE', y * 2 + 0.5)), TX - 2.05, 0.27, TZ + 1.2, 0, 0, 0, 1, 1.2, 1));
    P.push(tf(paint(new SphereGeometry(0.22, 12, 8), (c, x, y) => mix(c, '#C8B18A', '#E2D2AE', y * 2 + 0.5)), TX - 2.0, 0.22, TZ + 1.75, 0, 0, 0, 1, 1.15, 1));
    P.push(tf(paint(new BoxGeometry(0.5, 0.42, 0.42), (c, x, y, z) => c.set(Math.abs(y) > 0.17 || Math.abs(x) > 0.21 ? '#7A4E25' : '#A0703C')), TX + 1.95, 0.21, TZ + 1.0, 0, 0.3, 0));
    // الحظيرة
    const fence = (a, b) => { const len = a.distanceTo(b), n = Math.max(2, Math.round(len / 0.55)); for (let i = 0; i <= n; i++) { const p = a.clone().lerp(b, i / n); P.push(tf(paint(new CylinderGeometry(0.045, 0.055, 0.85, 6), '#8B5A2B'), p.x, 0.42, p.z)); } for (const y of [0.3, 0.62]) { const g = paint(new BoxGeometry(0.05, 1, 0.035), '#9C6A36'); tf(g, 0, 0, 0, 0, 0, 0, 1, len, 1); along(g, new Vector3(a.x, y, a.z), new Vector3(b.x, y, b.z)); P.push(g); } };
    const f0 = new Vector3(3.9, 0, -0.75), f1 = new Vector3(3.9, 0, -2.9), f2 = new Vector3(6.6, 0, -2.9), f3 = new Vector3(6.6, 0, -0.75);
    fence(f0, f1); fence(f1, f2); fence(f2, f3);
    P.push(tf(paint(new BoxGeometry(1.0, 0.18, 0.35), '#7A4E25'), 5.25, 0.09, -2.55)); // معلف
    P.push(tf(paint(new BoxGeometry(0.9, 0.06, 0.28), '#D8C26A'), 5.25, 0.2, -2.55));
    // اللوحة
    P.push(tf(paint(new BoxGeometry(1.75, 0.46, 0.06), '#7A4A22'), TX, 2.66, TZ + 1.25));
    // النار
    for (let i = 0; i < 9; i++) { const a = (i / 9) * TAU; P.push(tf(paint(new DodecahedronGeometry(0.11, 0), (c, x, y) => mix(c, '#7D776C', '#B5AFA2', y * 4 + 0.5)), FIRE.x + Math.cos(a) * 0.42, 0.06, FIRE.z + Math.sin(a) * 0.42, i, i * 2, 0, 1, 0.7, 1)); }
    for (let i = 0; i < 3; i++) { const a = (i / 3) * Math.PI; P.push(tf(paint(new CylinderGeometry(0.05, 0.05, 0.62, 6), (c, x, y) => c.set(Math.abs(y) > 0.27 ? '#C9A36B' : '#4A2E18')), FIRE.x, 0.1, FIRE.z, 0, a, Math.PI / 2 - 0.25)); }
    P.push(tf(paint(new CylinderGeometry(0.22, 0.25, 0.12, 9), '#9A948A'), FIRE.x - 0.75, 0.06, FIRE.z + 0.35)); // حجرة الدلة
    for (const [dx, dz] of [[-0.55, 0.75], [-0.35, 0.82]]) P.push(tf(paint(new LatheGeometry([new Vector2(0.001, 0), new Vector2(0.022, 0), new Vector2(0.03, 0.045), new Vector2(0.026, 0.046)], 10), '#F4EFE6'), FIRE.x + dx, 0.12, FIRE.z + dz)); // فناجين
    const camp = new Mesh(merge(P), new MeshLambertMaterial({ vertexColors: true, side: DoubleSide }));
    camp.castShadow = true; camp.receiveShadow = true; scene.add(camp);
    // اللوحة المكتوبة
    const signTex = canvasTex(512, 128, (g, w, h) => {
      g.fillStyle = '#8B5A2B'; g.fillRect(0, 0, w, h);
      g.strokeStyle = '#E8C170'; g.lineWidth = 6; g.strokeRect(8, 8, w - 16, h - 16);
      g.fillStyle = '#FFF3D6'; g.font = '900 64px -apple-system, "SF Arabic", "Geeza Pro", system-ui, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
      try { g.direction = 'rtl'; } catch (e) { /* */ }
      g.fillText(cfg.sign || 'خيمة أبو جاسم', w / 2, h / 2 + 4);
    });
    const sign = new Mesh(new PlaneGeometry(1.62, 0.38), new MeshLambertMaterial({ map: signTex, emissive: '#3B2410', emissiveIntensity: 0.25 }));
    sign.position.set(TX, 2.66, TZ + 1.29); scene.add(sign);
    // سجادة
    const rugTex = canvasTex(256, 160, (g, w, h) => {
      g.fillStyle = '#8E1B26'; g.fillRect(0, 0, w, h);
      g.fillStyle = '#1F2F5C'; g.fillRect(10, 10, w - 20, h - 20); g.fillStyle = '#8E1B26'; g.fillRect(20, 20, w - 40, h - 40);
      g.strokeStyle = '#E8C170'; g.lineWidth = 3; g.strokeRect(16, 16, w - 32, h - 32);
      g.fillStyle = '#E8C170';
      for (let i = 0; i < 14; i++) { g.beginPath(); g.arc(24 + i * 16.3, 14, 3, 0, TAU); g.arc(24 + i * 16.3, h - 14, 3, 0, TAU); g.fill(); }
      const md = (cx, cy, r, c) => { g.fillStyle = c; g.beginPath(); g.moveTo(cx, cy - r); g.lineTo(cx + r * 1.5, cy); g.lineTo(cx, cy + r); g.lineTo(cx - r * 1.5, cy); g.closePath(); g.fill(); };
      md(w / 2, h / 2, 44, '#1F2F5C'); md(w / 2, h / 2, 30, '#E8C170'); md(w / 2, h / 2, 16, '#8E1B26'); md(w / 2, h / 2, 6, '#F4EFE6');
      for (const [x, y] of [[50, 45], [w - 50, 45], [50, h - 45], [w - 50, h - 45]]) md(x, y, 12, '#2E86AB');
      g.fillStyle = '#F4EFE6'; for (let y = 4; y < h; y += 8) { g.fillRect(0, y, 4, 3); g.fillRect(w - 4, y, 4, 3); }
    });
    const rug = new Mesh(new PlaneGeometry(2.0, 1.25), new MeshLambertMaterial({ map: rugTex }));
    rug.rotation.x = -Math.PI / 2; rug.rotation.z = 0.04; rug.position.set(TX - 0.2, 0.02, TZ + 1.9); rug.receiveShadow = true; scene.add(rug);
    // الفانوس
    const lan = new Group();
    const glass = new Mesh(new CylinderGeometry(0.07, 0.07, 0.16, 8), new MeshBasicMaterial({ color: '#FFD36B' }));
    const capTop = new Mesh(new ConeGeometry(0.1, 0.08, 8), new MeshLambertMaterial({ color: '#3B2A1A' })); capTop.position.y = 0.12;
    const capBot = new Mesh(new CylinderGeometry(0.085, 0.07, 0.03, 8), new MeshLambertMaterial({ color: '#3B2A1A' })); capBot.position.y = -0.09;
    const halo = new Sprite(new SpriteMaterial({ map: glowTex, color: '#FFC14D', transparent: true, opacity: 0.75, depthWrite: false, blending: AdditiveBlending })); halo.scale.setScalar(0.9);
    lan.add(glass, capTop, capBot, halo); lan.position.set(TX + 1.68, 1.72, TZ + 2.55); scene.add(lan); fx.lantern = lan;
    // اللهب
    const fmat = (c) => new MeshBasicMaterial({ color: c, transparent: true, opacity: 0.9, depthWrite: false, blending: AdditiveBlending });
    [['#FF5A1F', 0.2, 0.55, 0], ['#FF9A2E', 0.15, 0.45, 0.07], ['#FFE07A', 0.09, 0.3, -0.05]].forEach(([c, r0, h0, off], i) => {
      const f = new Mesh(new ConeGeometry(r0, h0, 10, 1, true), fmat(c)); f.position.set(FIRE.x + off, 0.12 + h0 / 2, FIRE.z - off); f.userData = { h0, i }; scene.add(f); fx.flames.push(f);
    });
    const fg = new Sprite(new SpriteMaterial({ map: glowTex, color: '#FF8A2E', transparent: true, opacity: 0.6, depthWrite: false, blending: AdditiveBlending })); fg.position.set(FIRE.x, 0.45, FIRE.z); fg.scale.setScalar(1.8); scene.add(fg); fx.glows.push(fg);
    // الدلة
    const brass = new MeshPhongMaterial({ color: '#C9A13B', specular: '#FFE9A8', shininess: 90 });
    const dallah = new Group();
    const body = new Mesh(new LatheGeometry([new Vector2(0.001, 0), new Vector2(0.1, 0), new Vector2(0.115, 0.02), new Vector2(0.1, 0.09), new Vector2(0.06, 0.14), new Vector2(0.045, 0.2), new Vector2(0.06, 0.24), new Vector2(0.075, 0.26), new Vector2(0.04, 0.3), new Vector2(0.012, 0.34), new Vector2(0.02, 0.36), new Vector2(0.001, 0.37)], 20), brass);
    const spout = new Mesh(new TubeGeometry(new CatmullRomCurve3([new Vector3(0.07, 0.07, 0), new Vector3(0.14, 0.14, 0), new Vector3(0.17, 0.25, 0), new Vector3(0.23, 0.3, 0)]), 10, 0.016, 6), brass);
    const handle = new Mesh(new TorusGeometry(0.07, 0.01, 6, 14, Math.PI * 1.2), brass); handle.position.set(-0.07, 0.15, 0); handle.rotation.z = Math.PI * 0.4;
    dallah.add(body, spout, handle); dallah.position.set(FIRE.x - 0.75, 0.12, FIRE.z + 0.35); dallah.rotation.y = -0.6;
    dallah.traverse((o) => { o.castShadow = true; }); scene.add(dallah);
  }

  // ================================================================ الشخصيات
  const phong = (c, o = {}) => new MeshPhongMaterial({ color: c, shininess: 30, specular: '#2A2A2A', ...o });
  const shadowAll = (g) => g.traverse((o) => { if (o.isMesh) o.castShadow = true; });

  // ---------------------------------------------------------------- البطل
  let hero = null;
  function buildHero(sk) {
    const root = new Group(), inner = new Group(); root.add(inner); inner.position.y = 0.55;
    const fire = sk.body === 'fire', rainbow = sk.body === 'rainbow';
    let bodyMat;
    if (rainbow) bodyMat = phong('#FFFFFF', { vertexColors: true, shininess: 50 });
    else if (fire) bodyMat = phong('#FF8A1F', { emissive: '#FF3D00', emissiveIntensity: 0.55, shininess: 20 });
    else bodyMat = phong(sk.body, { shininess: 38 });
    let bodyGeo = new SphereGeometry(0.5, 48, 32);
    if (rainbow) bodyGeo = paint(bodyGeo, (c, x, y, z) => c.setHSL(((Math.atan2(z, x) / TAU + 1) % 1 + y * 0.3) % 1, 0.75, 0.62));
    const body = new Mesh(bodyGeo, bodyMat); body.scale.set(1.05, 1.0, 0.95);
    const outline = new Mesh(new SphereGeometry(0.5, 32, 20), new MeshBasicMaterial({ color: sk.dark, side: BackSide })); outline.scale.set(1.05 * 1.035, 1.035, 0.95 * 1.035);
    const belly = new Mesh(new SphereGeometry(0.3, 32, 16), phong(fire || rainbow ? sk.belly : new Color(sk.body).lerp(new Color(sk.belly), 0.5), { shininess: 20 })); belly.position.set(0, -0.25, 0.345); belly.scale.set(0.78, 0.5, 0.32);
    inner.add(body, outline, belly);
    const feet = [];
    for (const s of [-1, 1]) { const f = new Mesh(new SphereGeometry(0.15, 20, 12), phong(sk.dark, { shininess: 20 })); f.scale.set(1.2, 0.55, 1.45); f.position.set(s * 0.22, -0.49, 0.07); inner.add(f); feet.push(f); }
    const eyes = [], pupils = [];
    const eyeMat = phong('#FFFFFF', { shininess: 90, specular: '#FFFFFF' }), pupMat = phong('#1B1F3B', { shininess: 120, specular: '#FFFFFF' }), ringMat = new MeshBasicMaterial({ color: sk.dark });
    for (const s of [-1, 1]) {
      const eg = new Group(); eg.position.set(s * 0.185, 0.15, 0.36);
      const ring = new Mesh(new SphereGeometry(0.162, 24, 16), ringMat); ring.scale.set(1, 1.15, 0.6); ring.position.z = -0.012;
      const e = new Mesh(new SphereGeometry(0.15, 24, 16), eyeMat); e.scale.set(1, 1.15, 0.72);
      const p = new Group(); p.position.z = 0.074;
      const pp = new Mesh(new SphereGeometry(0.07, 16, 12), pupMat); pp.scale.z = 0.6;
      const hl = new Mesh(new SphereGeometry(0.024, 8, 6), new MeshBasicMaterial({ color: '#FFFFFF' })); hl.position.set(0.028, 0.035, 0.04);
      p.add(pp, hl); eg.add(ring, e, p); inner.add(eg); eyes.push(eg); pupils.push(p);
    }
    const smile = new Mesh(new TorusGeometry(0.075, 0.017, 6, 16, Math.PI * 0.8), new MeshBasicMaterial({ color: '#1B1F3B' }));
    smile.rotation.z = Math.PI + Math.PI * 0.1; smile.position.set(0, 0.0, 0.462); smile.rotation.x = -0.2;
    const ooh = new Mesh(new SphereGeometry(0.05, 12, 10), new MeshBasicMaterial({ color: '#7A1F2B' })); ooh.scale.set(1, 1.25, 0.4); ooh.position.set(0, -0.04, 0.47); ooh.visible = false;
    inner.add(smile, ooh);
    // الإكسسوارات
    const acc = new Group(); inner.add(acc);
    const flames = [];
    if (sk.acc === 'blush' || sk.id === 'orange') for (const s of [-1, 1]) { const b = new Mesh(new CircleGeometry(0.07, 16), new MeshBasicMaterial({ color: '#FF7896', transparent: true, opacity: 0.5 })); b.position.set(s * 0.33, -0.06, 0.36); b.rotation.y = s * 0.75; b.scale.y = 0.62; acc.add(b); }
    if (sk.acc === 'leaf') {
      const st = new Mesh(new CylinderGeometry(0.018, 0.022, 0.14, 6), phong('#6B3E1F')); st.position.set(0, 0.54, 0); st.rotation.z = -0.15;
      const lf = new Mesh(new SphereGeometry(0.15, 16, 8), phong('#3FB950')); lf.scale.set(1, 0.18, 0.5); lf.position.set(0.13, 0.6, 0); lf.rotation.z = 0.45;
      acc.add(st, lf);
    } else if (sk.acc === 'antenna') {
      for (const s of [-1, 1]) {
        const st = new Mesh(new CylinderGeometry(0.014, 0.014, 0.32, 6), phong(sk.dark)); st.position.set(s * 0.18, 0.58, 0); st.rotation.z = -s * 0.35;
        const ball = new Mesh(new SphereGeometry(0.06, 12, 10), phong('#FF5DA2', { emissive: '#FF5DA2', emissiveIntensity: 0.3 })); ball.position.set(s * 0.235, 0.73, 0);
        acc.add(st, ball);
      }
    } else if (sk.acc === 'crown') {
      const gold = phong('#FFC400', { shininess: 110, specular: '#FFF2B0', emissive: '#5A3D00', emissiveIntensity: 0.3 });
      const band = new Mesh(new CylinderGeometry(0.25, 0.23, 0.12, 28, 1, true), gold); band.material.side = DoubleSide; band.position.y = 0.48;
      acc.add(band);
      for (let i = 0; i < 6; i++) { const a = (i / 6) * TAU; const sp = new Mesh(new ConeGeometry(0.05, 0.16, 6), gold); sp.position.set(Math.sin(a) * 0.24, 0.6, Math.cos(a) * 0.24); acc.add(sp); const gem = new Mesh(new SphereGeometry(0.028, 8, 6), phong(i % 2 ? '#2EA8FF' : '#E63946', { shininess: 140, specular: '#FFFFFF' })); gem.position.set(Math.sin(a) * 0.255, 0.48, Math.cos(a) * 0.255); acc.add(gem); }
    } else if (sk.acc === 'star') {
      const sh = new Shape(); for (let i = 0; i < 10; i++) { const a = (i / 10) * TAU - Math.PI / 2, r = i % 2 ? 0.06 : 0.14; i ? sh.lineTo(Math.cos(a) * r, -Math.sin(a) * r) : sh.moveTo(Math.cos(a) * r, -Math.sin(a) * r); }
      const st = new Mesh(new ExtrudeGeometry(sh, { depth: 0.04, bevelEnabled: true, bevelSize: 0.012, bevelThickness: 0.012, bevelSegments: 1 }), phong('#FFE066', { emissive: '#FFB703', emissiveIntensity: 0.5, shininess: 90 }));
      st.position.set(0, 0.74, -0.02); acc.add(st); acc.userData.star = st;
    } else if (sk.acc === 'band') {
      const red = phong('#E63946');
      const b = new Mesh(new TorusGeometry(0.43, 0.05, 8, 40), red); b.rotation.x = Math.PI / 2 - 0.08; b.position.y = 0.2; b.scale.set(1.05, 0.95, 1); acc.add(b);
      for (const s of [-1, 1]) { const t = new Mesh(new BoxGeometry(0.06, 0.03, 0.3), red); t.position.set(s * 0.06, 0.18, -0.55); t.rotation.set(0.5, s * 0.3, 0); acc.add(t); acc.userData['tail' + s] = t; }
    } else if (sk.acc === 'hat') {
      const khaki = phong('#946232', { shininess: 14 }), dark = phong('#4A2E14', { shininess: 12 });
      const brim = new Mesh(new CylinderGeometry(0.46, 0.48, 0.035, 36), khaki); brim.position.y = 0.4;
      const crown = new Mesh(new SphereGeometry(0.29, 28, 14, 0, TAU, 0, Math.PI / 2), khaki); crown.position.y = 0.41; crown.scale.y = 0.75;
      const bnd = new Mesh(new CylinderGeometry(0.292, 0.295, 0.06, 28, 1, true), dark); bnd.material.side = DoubleSide; bnd.position.y = 0.45;
      const hat = new Group(); hat.add(brim, crown, bnd); hat.rotation.set(-0.12, 0, 0.06); acc.add(hat);
      const red = phong('#E63946', { shininess: 15, side: DoubleSide });
      const scarf = new Mesh(new TorusGeometry(0.34, 0.04, 8, 36), red); scarf.rotation.x = Math.PI / 2; scarf.position.y = -0.4; scarf.scale.set(1.05, 0.95, 1); acc.add(scarf);
      const tri = new Shape(); tri.moveTo(-0.2, 0); tri.lineTo(0.2, 0); tri.lineTo(0.02, -0.17); tri.closePath();
      const band = new Mesh(new ShapeGeometry(tri), red); band.position.set(0, -0.38, 0.33); band.rotation.x = -0.55; acc.add(band);
    }
    if (fire) {
      for (let i = 0; i < 7; i++) {
        const a = (i / 7) * Math.PI - Math.PI / 2, f = new Mesh(new ConeGeometry(0.09, 0.4, 8, 1, true), new MeshBasicMaterial({ color: i % 2 ? '#FFB13B' : '#FF5A1F', transparent: true, opacity: 0.9, depthWrite: false, blending: AdditiveBlending }));
        f.position.set(Math.sin(a) * 0.28, 0.42 + Math.cos(a) * 0.05, -0.12 - Math.abs(Math.cos(a)) * 0.08); f.userData.ph = i; inner.add(f); flames.push(f);
      }
      const g = new Sprite(new SpriteMaterial({ map: glowTex, color: '#FF6A1F', transparent: true, opacity: 0.55, depthWrite: false, blending: AdditiveBlending })); g.scale.setScalar(2.2); inner.add(g);
    }
    shadowAll(root); outline.castShadow = false;
    // المظلة
    const chute = new Group();
    const gcol = ['#E63946', '#FFFFFF', '#FFB703', '#FFFFFF', '#2EA8FF', '#FFFFFF'];
    const cg = paint(new SphereGeometry(1.7, 24, 8, 0, TAU, 0, Math.PI * 0.42), (c, x, y, z) => c.set(gcol[Math.floor(((Math.atan2(z, x) / TAU + 1) % 1) * 12 + 0.0001) % 6]));
    const cmat = new MeshLambertMaterial({ vertexColors: true, side: DoubleSide, transparent: true, opacity: 1 });
    const canopy = new Mesh(cg, cmat); canopy.scale.set(1, 0.62, 1); canopy.castShadow = true;
    const lp = new Float32Array(10 * 6), lines = new LineSegments(new BufferGeometry(), new LineBasicMaterial({ color: '#4A4A5A', transparent: true, opacity: 0.85 }));
    lines.geometry.setAttribute('position', new BufferAttribute(lp, 3)); lines.frustumCulled = false;
    const canopyHolder = new Group(); canopyHolder.position.y = 1.6; canopyHolder.add(canopy);
    chute.add(canopyHolder, lines); chute.visible = false;
    const drop = new Mesh(cg, cmat.clone()); drop.visible = false; drop.castShadow = false;
    scene.add(chute, drop);
    // الحبل
    const rope = new Mesh(new BufferGeometry(), phong('#8B5A2B', { shininess: 5 })); rope.visible = false; rope.castShadow = true; scene.add(rope);
    scene.add(root);
    return { id: sk.id, root, inner, eyes, pupils, smile, ooh, feet, acc, flames, bodyMat, fire, chute, canopy, canopyHolder, lines, drop, rope, turn: 0, blink: 0, nextBlink: 2 };
  }
  function disposeHero() {
    if (!hero) return;
    for (const o of [hero.root, hero.chute, hero.drop, hero.rope]) { scene.remove(o); o.traverse((m) => { if (m.geometry) m.geometry.dispose(); if (m.material) [].concat(m.material).forEach((x) => x.dispose()); }); }
    hero = null;
  }

  // ---------------------------------------------------------------- الغزال 🦌
  const gz = (() => {
    const root = new Group(), body = new Group(); root.add(body);
    const tan = phong('#D9A066', { shininess: 18 }), light = phong('#ECCB9C', { shininess: 18 }), dark = phong('#3B2A1A', { shininess: 40 });
    // جذع بشكل حقيقي: صدر عميق، خصر ضامر، ورِدف مدوّر (lathe على محور x)
    const prof = [[-0.56, 0.0], [-0.54, 0.1], [-0.48, 0.17], [-0.36, 0.2], [-0.18, 0.18], [0.0, 0.185], [0.18, 0.21], [0.32, 0.215], [0.44, 0.18], [0.53, 0.11], [0.57, 0.0]];
    let torsoG = new LatheGeometry(prof.map(([x, r]) => new Vector2(r, x)), 36);
    {
      const p = torsoG.attributes.position;
      for (let i = 0; i < p.count; i++) {
        let x = p.getX(i), y = p.getY(i), z = p.getZ(i); // y هنا هو طول الجسم
        const waist = Math.exp(-(((y + 0.1) / 0.22) ** 2));
        if (x < 0) x *= 1 - waist * 0.28; // البطن ضامر
        p.setXYZ(i, y, -x * (x < 0 ? 0.95 : 1.05), z * 0.82);
      }
      torsoG.computeVertexNormals();
    }
    torsoG = paint(torsoG, (c, x, y) => {
      const ny = y / 0.21;
      if (ny < -0.45) c.set('#FFF6E8'); else if (ny < -0.15) mix(c, '#6A3F1F', '#8A5528', (ny + 0.45) / 0.3); else mix(c, '#D9A066', '#C58A50', (ny - 0.3) * 1.5);
      if (x < -0.46 && ny < 0.55) c.set('#FFF6E8');
    });
    const torso = new Mesh(torsoG, phong('#FFFFFF', { vertexColors: true, shininess: 22 })); torso.position.y = 0.8;
    body.add(torso);
    const tail = new Group(); tail.position.set(-0.56, 0.86, 0);
    const tm = new Mesh(new CapsuleGeometry(0.025, 0.1, 3, 6), phong('#2B1D12')); tm.position.y = -0.06; tail.add(tm); tail.rotation.z = 0.5; body.add(tail);
    // الرقبة والراس
    const neck = new Group(); neck.position.set(0.42, 0.88, 0); body.add(neck);
    const neckM = new Mesh(new CylinderGeometry(0.055, 0.1, 0.5, 14), tan); neckM.position.y = 0.23; neckM.scale.z = 0.85; neck.add(neckM);
    const throat = new Mesh(new CylinderGeometry(0.036, 0.06, 0.42, 10), phong('#FFF6E8')); throat.position.set(0.04, 0.21, 0); throat.rotation.z = -0.08; neck.add(throat);
    neck.rotation.z = -0.6;
    const head = new Group(); head.position.set(0, 0.49, 0); head.scale.setScalar(1.12); neck.add(head);
    const skull = new Mesh(new SphereGeometry(0.11, 24, 16), tan); skull.scale.set(1.35, 0.9, 0.82); head.add(skull);
    const muz = new Mesh(new SphereGeometry(0.075, 18, 12), light); muz.position.set(0.14, -0.045, 0); muz.scale.set(1.25, 0.8, 0.85); head.add(muz);
    const nose = new Mesh(new SphereGeometry(0.03, 10, 8), dark); nose.position.set(0.225, -0.035, 0); head.add(nose);
    for (const s of [-1, 1]) {
      const st = new Mesh(new SphereGeometry(1, 10, 6), phong('#5A3518')); st.scale.set(0.1, 0.012, 0.01); st.position.set(0.1, -0.012, s * 0.07); st.rotation.z = -0.28; head.add(st);
      const wh = new Mesh(new SphereGeometry(1, 10, 6), phong('#FFF6E8')); wh.scale.set(0.095, 0.012, 0.01); wh.position.set(0.085, 0.022, s * 0.074); wh.rotation.z = -0.22; head.add(wh);
      const eye = new Mesh(new SphereGeometry(0.026, 12, 10), phong('#120C08', { shininess: 160, specular: '#FFFFFF' })); eye.position.set(0.035, 0.035, s * 0.083); head.add(eye);
      const ear = new Mesh(new SphereGeometry(0.07, 12, 8), tan); ear.scale.set(0.45, 1.25, 0.25); ear.position.set(-0.08, 0.1, s * 0.08); ear.rotation.set(s * 0.6, 0, 0.6); head.add(ear);
      const horn = new CatmullRomCurve3([new Vector3(-0.02, 0.07, s * 0.035), new Vector3(-0.09, 0.22, s * 0.07), new Vector3(-0.07, 0.38, s * 0.085), new Vector3(0.0, 0.47, s * 0.06)]);
      const hg = new TubeGeometry(horn, 18, 0.019, 7);
      { const p = hg.attributes.position, nr = 8; for (let i = 0; i <= 18; i++) { const c0 = horn.getPointAt(i / 18), k = 1 - (i / 18) * 0.7; for (let j = 0; j < nr; j++) { const v = i * nr + j; p.setXYZ(v, c0.x + (p.getX(v) - c0.x) * k, c0.y + (p.getY(v) - c0.y) * k, c0.z + (p.getZ(v) - c0.z) * k); } } hg.computeVertexNormals(); }
      const hp = paint(hg, (c, x, y) => c.set(Math.floor(y * 55) % 2 ? '#3B2A1A' : '#5A4330'));
      head.add(new Mesh(hp, phong('#FFFFFF', { vertexColors: true, shininess: 50 })));
    }
    const collar = new Object3D(); collar.position.set(0.0, 0.38, 0); neck.add(collar);
    // الرجلين
    const legs = [];
    for (const [lx, front] of [[0.34, 1], [-0.38, 0]]) for (const s of [-1, 1]) {
      const hip = new Group(); hip.position.set(lx, 0.76, s * 0.09); body.add(hip);
      if (!front) { const thigh = new Mesh(new SphereGeometry(0.1, 14, 10), tan); thigh.scale.set(1.15, 1.6, 0.55); thigh.position.set(0.0, -0.07, 0); hip.add(thigh); }
      else { const sh = new Mesh(new SphereGeometry(0.075, 12, 10), tan); sh.scale.set(1.1, 1.7, 0.6); sh.position.set(0.01, -0.05, 0); hip.add(sh); }
      const up = new Mesh(new CylinderGeometry(front ? 0.026 : 0.03, front ? 0.04 : 0.055, 0.36, 10), tan); up.position.y = -0.2; hip.add(up);
      const knee = new Group(); knee.position.y = -0.38; hip.add(knee);
      const joint = new Mesh(new SphereGeometry(0.024, 8, 6), light); knee.add(joint);
      const lo = new Mesh(new CylinderGeometry(0.014, 0.02, 0.34, 8), light); lo.position.y = -0.17; knee.add(lo);
      const hoof = new Mesh(new CylinderGeometry(0.017, 0.024, 0.045, 8), phong('#20150D', { shininess: 60 })); hoof.position.y = -0.355; knee.add(hoof);
      legs.push({ hip, knee, front, s });
    }
    shadowAll(root); scene.add(root);
    return { root, body, neck, head, tail, legs, collar, yaw: -0.25, z: 0, neckA: -0.6 };
  })();

  // ---------------------------------------------------------------- أبو جاسم 👳
  const mer = (() => {
    const root = new Group();
    const skin = phong('#C98E62', { shininess: 12 }), thobeM = phong('#F2EEE4', { shininess: 8 }), bishtM = phong('#5B3A24', { shininess: 14, side: DoubleSide });
    const thobe = new Mesh(new LatheGeometry([new Vector2(0.001, 0.0), new Vector2(0.27, 0.0), new Vector2(0.275, 0.1), new Vector2(0.25, 0.5), new Vector2(0.232, 0.9), new Vector2(0.222, 1.2), new Vector2(0.2, 1.34), new Vector2(0.12, 1.42), new Vector2(0.05, 1.45)], 30), thobeM);
    root.add(thobe);
    for (const s of [-1, 1]) { const sd = new Mesh(new BoxGeometry(0.1, 0.04, 0.2), phong('#4A2E18')); sd.position.set(s * 0.09, 0.02, 0.2); root.add(sd); }
    const bisht = new Mesh(new LatheGeometry([new Vector2(0.245, 0.06), new Vector2(0.295, 0.08), new Vector2(0.285, 0.5), new Vector2(0.265, 0.9), new Vector2(0.255, 1.2), new Vector2(0.24, 1.33), new Vector2(0.16, 1.41)], 30, 0.62, TAU - 1.24), bishtM);
    root.add(bisht);
    const goldM = phong('#D4AF37', { shininess: 90, specular: '#FFF2B0' });
    for (const s of [-1, 1]) {
      const a = s * 0.62, pts = [[0.247, 0.08], [0.297, 0.1], [0.287, 0.5], [0.267, 0.9], [0.257, 1.2], [0.242, 1.33], [0.162, 1.41]].map(([r, y]) => new Vector3(Math.sin(a) * (r + 0.006), y, Math.cos(a) * (r + 0.006)));
      root.add(new Mesh(new TubeGeometry(new CatmullRomCurve3(pts), 20, 0.014, 6), goldM));
    }
    const arms = [];
    for (const s of [-1, 1]) {
      const sh = new Group(); sh.position.set(s * 0.25, 1.3, 0.0); root.add(sh);
      const up = new Mesh(new CapsuleGeometry(0.072, 0.28, 4, 10), bishtM); up.position.y = -0.18; sh.add(up);
      const el = new Group(); el.position.y = -0.36; sh.add(el);
      const lo = new Mesh(new CapsuleGeometry(0.068, 0.22, 4, 10), bishtM); lo.position.y = -0.14; el.add(lo);
      const cuff = new Mesh(new CylinderGeometry(0.055, 0.06, 0.05, 10), thobeM); cuff.position.y = -0.3; el.add(cuff);
      const hand = new Mesh(new SphereGeometry(0.052, 12, 10), skin); hand.position.y = -0.36; hand.scale.set(0.9, 1.1, 0.8); el.add(hand);
      if (s < 0) { const beads = new Mesh(new TorusGeometry(0.06, 0.011, 6, 18), phong('#E0A03C', { shininess: 80, specular: '#FFF0C8' })); beads.position.set(0, -0.44, 0.02); beads.rotation.y = 0.4; el.add(beads); }
      sh.rotation.z = s * 0.12; el.rotation.x = -0.25;
      arms.push({ sh, el, s });
    }
    const neck = new Mesh(new CylinderGeometry(0.06, 0.07, 0.1, 10), skin); neck.position.y = 1.46; root.add(neck);
    const head = new Group(); head.position.y = 1.6; root.add(head);
    const skull = new Mesh(new SphereGeometry(0.155, 28, 20), skin); skull.scale.set(0.94, 1.08, 1); head.add(skull);
    const nose = new Mesh(new SphereGeometry(0.034, 10, 8), phong('#B97C52')); nose.position.set(0, -0.005, 0.15); nose.scale.set(0.85, 1.1, 1.25); head.add(nose);
    for (const s of [-1, 1]) {
      const eye = new Mesh(new SphereGeometry(0.019, 10, 8), phong('#1B140F', { shininess: 120, specular: '#FFFFFF' })); eye.position.set(s * 0.055, 0.025, 0.135); head.add(eye);
      const brow = new Mesh(new BoxGeometry(0.065, 0.016, 0.02), phong('#3A3430')); brow.position.set(s * 0.056, 0.058, 0.138); brow.rotation.z = -s * 0.12; head.add(brow);
      const mus = new Mesh(new CapsuleGeometry(0.019, 0.06, 3, 6), phong('#2A2420')); mus.position.set(s * 0.034, -0.045, 0.142); mus.rotation.z = s * 1.15; head.add(mus);
    }
    const beard = new Mesh(new SphereGeometry(0.16, 24, 10, Math.PI / 2 - 1.2, 2.4, Math.PI * 0.6, Math.PI * 0.3), phong('#4A4440', { side: DoubleSide, shininess: 5 })); head.add(beard);
    const mouth = new Mesh(new SphereGeometry(0.026, 10, 8), new MeshBasicMaterial({ color: '#4A1A14' })); mouth.position.set(0, -0.07, 0.143); mouth.scale.set(1, 0.3, 0.5); head.add(mouth);
    // الشماغ والعقال
    const shTex = canvasTex(128, 128, (g, w, h) => {
      g.fillStyle = '#FBF8F2'; g.fillRect(0, 0, w, h);
      g.fillStyle = '#C8102E';
      for (let y = 0; y < h; y += 16) for (let x = 0; x < w; x += 16) { g.fillRect(x + 2, y + 2, 7, 7); g.fillRect(x + 9, y + 9, 5, 5); g.fillRect(x + 9, y + 2, 2, 2); g.fillRect(x + 2, y + 11, 2, 2); }
    }, [5, 5]);
    const shM = new MeshLambertMaterial({ map: shTex, side: DoubleSide });
    const cap = new Mesh(new SphereGeometry(0.168, 28, 14, 0, TAU, 0, Math.PI * 0.52), shM); cap.rotation.x = -0.42; cap.position.y = 0.01; head.add(cap);
    const drape = new Mesh(new LatheGeometry([new Vector2(0.168, 0.02), new Vector2(0.18, -0.06), new Vector2(0.2, -0.16), new Vector2(0.24, -0.26), new Vector2(0.28, -0.33)], 28, 1.15, TAU - 2.3), shM); head.add(drape);
    const tailF = new Mesh(new PlaneGeometry(0.2, 0.36), shM); tailF.position.set(0.17, -0.25, 0.1); tailF.rotation.set(-0.15, 0.6, -0.08); head.add(tailF);
    const agalM = phong('#141414', { shininess: 40 });
    for (const [d, r] of [[0.07, 0.154], [0.097, 0.139]]) { const a = new Mesh(new TorusGeometry(r, 0.015, 8, 36), agalM); a.position.set(0, d * 0.913, -d * 0.408); a.rotation.x = Math.PI / 2 - 0.42; head.add(a); }
    shadowAll(root); root.position.set(MER3, 0, -0.5); scene.add(root);
    return { root, head, arms, mouth, yaw: 0 };
  })();

  // ---------------------------------------------------------------- عملات الهوا ومكان التسليم
  const coinMesh = new InstancedMesh(new CylinderGeometry(0.22, 0.22, 0.05, 22), new MeshPhongMaterial({ color: '#FFC93C', specular: '#FFF4C0', shininess: 90, emissive: '#6B4A00', emissiveIntensity: 0.55 }), 40);
  coinMesh.castShadow = true; coinMesh.count = 0; coinMesh.frustumCulled = false; scene.add(coinMesh);
  const zone = new Group();
  {
    const ring = new Mesh(new RingGeometry(0.95, 1.18, 48), new MeshBasicMaterial({ color: '#FFD23F', transparent: true, opacity: 0.9, depthWrite: false, side: DoubleSide }));
    ring.rotation.x = -Math.PI / 2; ring.position.y = 0.03;
    const disc = new Mesh(new CircleGeometry(0.95, 40), new MeshBasicMaterial({ color: '#FFE38A', transparent: true, opacity: 0.25, depthWrite: false }));
    disc.rotation.x = -Math.PI / 2; disc.position.y = 0.025;
    const arrow = new Mesh(new ConeGeometry(0.2, 0.42, 4), new MeshPhongMaterial({ color: '#FFB703', emissive: '#FF8A00', emissiveIntensity: 0.6, shininess: 80 }));
    arrow.rotation.x = Math.PI; arrow.position.y = 1.9;
    zone.add(ring, disc, arrow); zone.userData = { ring, arrow };
    zone.position.set(ZONE_X * K, 0, 0); zone.visible = false; scene.add(zone);
  }

  // ================================================================ الكاميرا
  const cam = { pos: new Vector3(), look: new Vector3(), init: false, dist: 10, cx: 0 };
  function desiredCamera(V, out) {
    if (V.debugCam) { out.pos.fromArray(V.debugCam[0]); out.look.fromArray(V.debugCam[1]); return; }
    const p = V.p, hx = p.x * K, hy = p.y * K, aspect = camera.aspect, tanV = Math.tan((camera.fov * Math.PI) / 360);
    if (V.phase !== 'walk') {
      const alt = hy;
      out.pos.set(hx - 1.4, hy - 0.4, 14);
      out.look.set(hx, hy - 0.55, 0);
      return;
    }
    let lo = hx, hi = hx;
    const add = (x) => { lo = Math.min(lo, x); hi = Math.max(hi, x); };
    if (V.focus && V.focus.t > 0) { // لقطة قريبة سينمائية (لما يلزم الغزال، ولما يسلّمه)
      for (const x of V.focus.xs) add(x * K);
      const half = (hi - lo) / 2 + 1.0, dist = clamp(half / (tanV * aspect), 5.6, 14), cx = (lo + hi) / 2, cy = 0.75 + dist * 0.09;
      const pitch = Math.atan(cy / dist) - Math.atan(0.16 * 2 * tanV);
      out.pos.set(cx + 0.6, cy, dist); out.look.set(cx, cy - dist * Math.tan(pitch), -0.3); return;
    }
    const g = V.gz.x * K;
    if (V.caught || Math.abs(V.gz.x - p.x) < 320) add(g);
    if (Math.abs(p.x - MER_X) < 560 || V.delivered || (V.caught && Math.abs(p.x - ZONE_X) < 700)) { add(TX - 1.4); add(MER3 + 0.4); if (V.caught && !V.delivered) add(ZONE_X * K + 0.6); }
    const half = (hi - lo) / 2 + 1.35, dist = clamp(half / (tanV * aspect), 7.2, 26), vis = dist * tanV * aspect;
    const cx = clamp((lo + hi) / 2, hx - vis + 1.1, hx + vis - 1.1); // البطل دايماً جوّه الإطار
    // نختار ميلان الكاميرا حتى يكون الدرب دايماً على نفس الارتفاع بالشاشة (أقرب = أعلى شوية، أبعد = أوطى ونشوف مشهد أكثر)
    const cy = 0.95 + dist * 0.105, f = lerp(0.665, 0.735, clamp((dist - 7.2) / 18, 0, 1));
    const pitch = Math.atan(cy / dist) - Math.atan((f - 0.5) * 2 * tanV);
    out.pos.set(cx, cy, dist);
    out.look.set(cx, cy - dist * Math.tan(pitch), 0);
  }
  const want = { pos: new Vector3(), look: new Vector3() };

  // ================================================================ التحديث والرسم كل فريم
  let lastNow = 0, lastT = -1, slow = 0, frames = 0, pr = 2, cssW = 390, cssH = 844;
  const tmp = new Vector3(), tmp2 = new Vector3(), o3 = new Object3D(); o3.rotation.order = 'YXZ';
  function setSize(w, h, ratio) {
    cssW = w; cssH = h; pr = ratio;
    renderer.setPixelRatio(ratio); renderer.setSize(w, h, false);
    camera.aspect = w / h; camera.updateProjectionMatrix();
  }
  function enter(sk) {
    if (!hero || hero.id !== sk.id) { disposeHero(); hero = buildHero(sk); }
    cam.init = false; slow = 0; frames = 0; lastT = -1;
  }
  function animateHero(V, t, dt) {
    const p = V.p, h = hero, walk = V.phase === 'walk';
    const hop = walk ? Math.abs(Math.sin(p.hopPh)) * (Math.abs(p.vx) > 160 ? 0.25 : 0.12) : 0;
    h.root.position.set(p.x * K, p.y * K + hop, 0);
    const wantTurn = (p.face || 1) * (walk ? 0.62 : 0.35);
    h.turn = damp(h.turn, wantTurn, 9, dt); h.root.rotation.y = h.turn;
    h.inner.rotation.z = -p.rot;
    let sq = p.landT > 0 ? p.landT * 2.4 : 0;
    if (walk && Math.abs(p.vx) > 10) sq += (1 - Math.abs(Math.sin(p.hopPh))) * 0.25 - 0.08;
    h.inner.scale.set(1 + 0.2 * sq, 1 - 0.22 * sq, 1 + 0.2 * sq);
    h.inner.position.y = 0.55 * (1 - 0.22 * sq);
    for (const [i, f] of h.feet.entries()) f.position.y = -0.49 + (walk && Math.abs(p.vx) > 10 ? Math.max(0, Math.sin(p.hopPh * 2 + i * Math.PI)) * 0.06 : 0);
    const scared = V.phase === 'fall';
    h.nextBlink -= dt; if (h.nextBlink < 0) { h.blink = 0.14; h.nextBlink = 2.5 + Math.random() * 2.5; }
    h.blink = Math.max(0, h.blink - dt);
    const ey = scared ? 1.15 : h.blink > 0 ? 0.12 : 1;
    for (const e of h.eyes) e.scale.set(scared ? 1.08 : 1, ey, 1);
    const lookX = walk ? 0.03 * (p.face || 1) : 0, lookY = walk ? 0 : -0.035;
    for (const pp of h.pupils) { pp.scale.setScalar(scared ? 0.72 : 1); pp.position.x = lookX; pp.position.y = lookY; }
    h.smile.visible = !scared; h.ooh.visible = scared;
    if (h.acc.userData.star) h.acc.userData.star.rotation.y = t * 2;
    for (const s of [-1, 1]) { const tl = h.acc.userData['tail' + s]; if (tl) tl.rotation.x = 0.5 + Math.sin(t * 12 + s) * 0.25; }
    if (h.fire) { h.bodyMat.emissiveIntensity = 0.5 + Math.sin(t * 13) * 0.1 + Math.sin(t * 7.3) * 0.08; for (const f of h.flames) { const k = 0.8 + Math.sin(t * 14 + f.userData.ph * 1.7) * 0.25; f.scale.set(1, k, 1); } }
    // المظلة
    const ch = h.chute;
    ch.visible = p.chute > 0.01;
    if (ch.visible) {
      ch.position.copy(h.root.position);
      const k = p.chute, pop = k < 1 ? lerp(0.15, 1, k) + Math.sin(k * Math.PI) * 0.12 : 1;
      h.canopyHolder.scale.set(pop, lerp(0.4, 1, k), pop);
      h.canopyHolder.position.y = lerp(1.0, 2.25, k);
      ch.rotation.z = -(p.vx * 0.0011 + Math.sin(t * 1.5) * 0.06); ch.rotation.x = Math.sin(t * 1.1) * 0.05;
      const lp = h.lines.geometry.attributes.position, top = h.canopyHolder.position.y, R0 = 1.7 * Math.sin(Math.PI * 0.42) * pop, ry = top + 1.7 * Math.cos(Math.PI * 0.42) * 0.62 * lerp(0.4, 1, k);
      for (let i = 0; i < 10; i++) {
        const a = (i / 10) * TAU, sx = i % 2 ? 0.22 : -0.22;
        lp.setXYZ(i * 2, Math.cos(a) * R0, ry, Math.sin(a) * R0); lp.setXYZ(i * 2 + 1, sx, 0.85, 0);
      }
      lp.needsUpdate = true;
    }
    const d = V.chuteDrop;
    h.drop.visible = !!(d && d.t < 2.4);
    if (h.drop.visible) {
      const k = clamp(1 - d.t * 1.2, 0.1, 1);
      h.drop.position.set((d.x + d.face * 40) * K, 0.02, -0.3); h.drop.scale.set(1.05, 0.62 * k, 1.05);
      h.drop.material.opacity = clamp(1 - (d.t - 1.4), 0, 1);
    }
  }
  function animateGazelle(V, t, dt) {
    const g = V.gz, m = gz, st = g.state, moving = Math.abs(g.vx) > 5;
    const tz = st === 'pen' ? -1.75 : 0;
    m.z = damp(m.z, tz, 2, dt);
    const fast = st === 'flee' || st === 'leap', tired = st === 'tired';
    const bob = moving ? Math.abs(Math.sin(g.ph)) * (fast ? 0.07 : 0.025) : tired ? Math.sin(t * 9) * 0.008 : 0;
    m.root.position.set(g.x * K, g.y * K, m.z);
    m.body.position.y = bob;
    const wantYaw = (g.face || 1) > 0 ? -0.28 : -Math.PI + 0.28;
    m.yaw = damp(m.yaw, wantYaw, fast ? 10 : 6, dt); m.root.rotation.y = m.yaw;
    m.body.rotation.z = fast ? Math.sin(g.ph * 2) * 0.05 : 0;
    const graze = st === 'graze' || (st === 'pen' && !moving);
    const wantNeck = graze ? -2.05 : tired ? -1.15 : fast ? -0.95 : st === 'alert' || st === 'look' || st === 'cornered' ? -0.32 : -0.6;
    m.neckA = damp(m.neckA, wantNeck, graze ? 3 : 7, dt); m.neck.rotation.z = m.neckA;
    m.head.rotation.z = graze ? 0.5 + Math.sin(t * 7) * 0.08 : st === 'alert' || st === 'look' ? 0.2 : 0.35;
    m.head.rotation.y = st === 'look' || st === 'alert' || st === 'cornered' ? Math.sin(t * 1.6) * 0.25 + 0.35 : 0;
    m.tail.rotation.z = 0.5 + (st === 'alert' || fast ? 0.9 : Math.sin(t * 3) * 0.2);
    const amp = fast ? 0.6 : tired ? 0.28 : 0.36, leap = st === 'leap';
    for (const L of m.legs) {
      const off = L.front ? (L.s > 0 ? 0 : Math.PI) : (L.s > 0 ? Math.PI : 0) + (fast ? 0.6 : 0);
      if (leap) { L.hip.rotation.z = L.front ? 0.9 : -0.9; L.knee.rotation.z = L.front ? -1.2 : 1.1; continue; }
      if (moving) { const w = Math.sin(g.ph + off); L.hip.rotation.z = w * amp; L.knee.rotation.z = (L.front ? -1 : 1) * Math.max(0, -Math.cos(g.ph + off)) * amp * 1.1; }
      else { L.hip.rotation.z = damp(L.hip.rotation.z, 0, 8, dt); L.knee.rotation.z = damp(L.knee.rotation.z, 0, 8, dt); }
    }
  }
  function animateMerchant(V, t, dt) {
    const m = mer, p = V.p, hx = p.x * K, d = hx - m.root.position.x;
    const near = Math.abs(V.p.x * K - MER3) < 14 || !!V.dlg;
    const yaw = near ? clamp(Math.atan2(d, 2.2), -1.1, 1.1) : 0.15 * Math.sin(t * 0.3);
    m.yaw = damp(m.yaw, yaw, 3, dt); m.root.rotation.y = m.yaw;
    m.root.scale.y = 1 + Math.sin(t * 1.7) * 0.007;
    const talking = !!(V.dlg && V.dlg.shown < [...V.dlg.text].length);
    m.mouth.scale.y = talking ? 0.25 + Math.abs(Math.sin(t * 15)) * 0.9 : 0.3;
    m.head.rotation.x = talking ? Math.sin(t * 5) * 0.05 : 0;
    const [L, Rr] = m.arms; // L: يساره (−x)، Rr: يمينه (+x) — يأشّر باتجاه البطل
    if (V.delivered) {
      for (const a of m.arms) { a.sh.rotation.z = damp(a.sh.rotation.z, a.s * 2.5, 6, dt); a.el.rotation.x = damp(a.el.rotation.x, -0.3 + Math.sin(t * 9 + a.s) * 0.3, 8, dt); }
      m.root.position.y = Math.abs(Math.sin(t * 6)) * 0.06;
    } else if (V.caught && near) { // يأشّر على مكان التسليم
      Rr.sh.rotation.z = damp(Rr.sh.rotation.z, 1.35, 5, dt); Rr.el.rotation.x = damp(Rr.el.rotation.x, 0, 5, dt); Rr.sh.rotation.x = damp(Rr.sh.rotation.x, -0.2, 5, dt);
      L.sh.rotation.z = damp(L.sh.rotation.z, -0.12, 5, dt); m.root.position.y = 0;
    } else if (near) { // يأشّر/يلوّح
      Rr.sh.rotation.z = damp(Rr.sh.rotation.z, 2.55, 5, dt); Rr.el.rotation.x = damp(Rr.el.rotation.x, 0, 5, dt); Rr.el.rotation.z = Math.sin(t * 8) * 0.45; Rr.sh.rotation.x = 0;
      L.sh.rotation.z = damp(L.sh.rotation.z, -0.12, 5, dt); m.root.position.y = 0;
    } else {
      for (const a of m.arms) { a.sh.rotation.z = damp(a.sh.rotation.z, a.s * 0.12, 4, dt); a.el.rotation.z = damp(a.el.rotation.z, 0, 4, dt); a.el.rotation.x = damp(a.el.rotation.x, -0.25, 4, dt); a.sh.rotation.x = 0; }
      m.root.position.y = 0;
    }
  }
  function updateRope(V) {
    const r = hero.rope;
    r.visible = !!V.caught && !V.delivered;
    if (!r.visible) return;
    hero.root.updateMatrixWorld(); gz.root.updateMatrixWorld();
    const a = tmp.set(hero.root.position.x + Math.sign(hero.turn || 1) * 0.36, hero.root.position.y + 0.5, 0.15);
    const b = gz.collar.getWorldPosition(tmp2);
    const mid = a.clone().lerp(b, 0.5); mid.y = Math.min(a.y, b.y) - 0.25;
    r.geometry.dispose(); r.geometry = new TubeGeometry(new QuadraticBezierCurve3(a.clone(), mid, b.clone()), 18, 0.016, 5);
  }
  function render(V, t, opts = {}) {
    const now = performance.now(), rdt = lastNow ? clamp((now - lastNow) / 1000, 0, 0.1) : 1 / 60; lastNow = now;
    const dt = lastT >= 0 ? clamp(t - lastT, 0, 0.1) : 1 / 60; lastT = t; // وقت اللعبة (يوكف ويه الإيقاف ويمشي ويه البطيء)
    U.time.value = t;
    // جودة تتكيّف: إذا الجهاز تعبان نقلل دقة الرسم
    frames++; slow = slow * 0.97 + (rdt > 1 / 38 ? 1 : 0) * 0.03;
    if (frames > 90 && slow > 0.6 && pr > 1.01) { setSize(cssW, cssH, Math.max(1, pr - 0.25)); slow = 0; frames = 0; }
    if (!hero) return;
    animateHero(V, t, dt); animateGazelle(V, t, dt); animateMerchant(V, t, dt); updateRope(V);
    // العملات
    let n = 0;
    for (let i = 0; i < V.coins.length && n < 40; i++) {
      const c = V.coins[i]; if (c.taken) continue;
      o3.position.set(c.x * K, c.y * K, 0); o3.rotation.set(Math.PI / 2, t * 3 + i, 0); o3.scale.setScalar(1); o3.updateMatrix(); coinMesh.setMatrixAt(n++, o3.matrix);
    }
    coinMesh.count = n; coinMesh.instanceMatrix.needsUpdate = true;
    // مكان التسليم
    zone.visible = !!(V.caught && !V.delivered);
    if (zone.visible) { const k = 0.5 + 0.5 * Math.sin(t * 5); zone.userData.ring.scale.setScalar(1 + k * 0.08); zone.userData.arrow.position.y = 1.9 + k * 0.25; zone.userData.arrow.rotation.y = t * 2; }
    // نار، فانوس، فراشات، طيور، غيوم، ذرات
    for (const f of fx.flames) { const k = 0.75 + Math.sin(t * 13 + f.userData.i * 2) * 0.18 + Math.sin(t * 23 + f.userData.i) * 0.08; f.scale.set(1 + Math.sin(t * 9 + f.userData.i) * 0.08, k, 1); f.position.y = 0.12 + (f.userData.h0 * k) / 2; }
    for (const g of fx.glows) g.material.opacity = 0.5 + Math.sin(t * 11) * 0.08;
    fx.lantern.rotation.z = Math.sin(t * 1.6) * 0.08;
    for (const b of butterflies) {
      const u = b.userData, x = u.ax + Math.sin(t * 0.45 + u.ph) * 2.2, z = u.az + Math.sin(t * 0.7 + u.ph * 2) * 0.9, y = 0.7 + Math.sin(t * 1.3 + u.ph) * 0.35 + Math.abs(Math.sin(t * 4 + u.ph)) * 0.12;
      b.position.set(x, y, z); b.rotation.y = Math.cos(t * 0.45 + u.ph) > 0 ? -Math.PI / 2 : Math.PI / 2;
      const f = Math.sin(t * 22 + u.ph) * 1.1; u.l.rotation.y = f; u.r.rotation.y = -f;
    }
    for (const b of birds) { const u = b.userData; b.position.set(((u.x0 + t * u.sp) % 220) - 60, u.y + Math.sin(t + u.ph) * 0.8, u.z); const f = Math.sin(t * 8 + u.ph) * 0.6; u.l.rotation.z = f; u.r.rotation.z = -f; }
    for (const c of clouds.children) { c.position.x += c.userData.v * dt; if (c.position.x > 150) c.position.x = -70; }
    // الكاميرا
    desiredCamera(V, want);
    if (!cam.init) { cam.pos.copy(want.pos); cam.look.copy(want.look); cam.init = true; }
    const fall = V.phase !== 'walk';
    const rate = fall ? 5 : 2.4;
    cam.pos.x = damp(cam.pos.x, want.pos.x, rate, dt); cam.pos.y = damp(cam.pos.y, want.pos.y, fall ? 8 : rate, dt); cam.pos.z = damp(cam.pos.z, want.pos.z, rate * 0.8, dt);
    cam.look.x = damp(cam.look.x, want.look.x, rate, dt); cam.look.y = damp(cam.look.y, want.look.y, fall ? 8 : rate, dt); cam.look.z = damp(cam.look.z, want.look.z, rate, dt);
    if (cam.pos.y < H(cam.pos.x, cam.pos.z) + 0.8) cam.pos.y = H(cam.pos.x, cam.pos.z) + 0.8;
    camera.position.copy(cam.pos); camera.lookAt(cam.look);
    if (opts.shake > 0) { const m = opts.shake * 0.25; camera.position.x += (Math.random() - 0.5) * m; camera.position.y += (Math.random() - 0.5) * m; }
    sky.position.copy(camera.position);
    // ذرات ضو حول الكاميرا
    {
      const sd = motes.userData.seeds, pa = motes.geometry.attributes.position;
      for (let i = 0; i < sd.length; i++) { const [x, y, z, ph] = sd[i]; pa.setXYZ(i, cam.look.x + x + Math.sin(t * 0.3 + ph) * 0.8, y + Math.sin(t * 0.5 + ph * 2) * 0.3, z + Math.cos(t * 0.25 + ph) * 0.6); }
      pa.needsUpdate = true;
    }
    // الشمس والظل يتبعون المشهد
    const sx = Math.round(cam.look.x / 0.25) * 0.25;
    sun.target.position.set(sx, 0, -1); sun.position.set(sx + SUN.x * 60, SUN.y * 60, -1 + SUN.z * 60);
    renderer.render(scene, camera);
  }
  const _p = new Vector3();
  function project(x, y, zm = 0) {
    _p.set(x * K, y * K, zm).project(camera);
    return { x: (_p.x + 1) / 2, y: (1 - _p.y) / 2, vis: _p.z < 1 };
  }
  function gazelleZ() { return gz.z; }
  /** صورة وجه أبو جاسم من الموديل نفسه (للمربع اللي يحچي بيه) */
  function portrait(size = 160) {
    scene.updateMatrixWorld();
    const hp = new Vector3(); mer.head.getWorldPosition(hp);
    const w = renderer.domElement.width, h = renderer.domElement.height;
    const pc = new PerspectiveCamera(28, w / h, 0.05, 1200);
    pc.position.set(hp.x + 0.35, hp.y + 0.05, hp.z + 1.75); pc.lookAt(hp.x, hp.y - 0.02, hp.z);
    sky.position.copy(pc.position);
    const sv = sun.shadow.autoUpdate; sun.target.position.set(hp.x, 0, hp.z); sun.position.set(hp.x + SUN.x * 60, SUN.y * 60, hp.z + SUN.z * 60);
    renderer.render(scene, pc);
    sun.shadow.autoUpdate = sv;
    const out = document.createElement('canvas'); out.width = out.height = size;
    const s0 = Math.min(w, h);
    out.getContext('2d').drawImage(renderer.domElement, (w - s0) / 2, (h - s0) / 2, s0, s0, 0, 0, size, size);
    return out.toDataURL('image/jpeg', 0.9);
  }
  function dispose() { renderer.dispose(); }
  return { setSize, enter, render, project, gazelleZ, portrait, dispose, renderer, scene, camera, get pr() { return pr; } };
}
