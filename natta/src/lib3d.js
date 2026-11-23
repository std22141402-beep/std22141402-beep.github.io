// 🧱 نطّة — أدوات وأشكال مشتركة بين الجبل والوادي (three.js)
import {
  WebGLRenderer, Scene, PerspectiveCamera, Color, Fog, HemisphereLight, DirectionalLight, Mesh, Group, InstancedMesh, Object3D,
  Matrix4, Vector3, Quaternion, Euler, PlaneGeometry, SphereGeometry, CylinderGeometry, ConeGeometry, IcosahedronGeometry,
  DodecahedronGeometry, TorusGeometry, LatheGeometry, CapsuleGeometry, BoxGeometry, RingGeometry, CircleGeometry, ShapeGeometry,
  ExtrudeGeometry, TubeGeometry, Shape, Vector2, BufferGeometry, BufferAttribute, MeshLambertMaterial, MeshPhongMaterial,
  MeshBasicMaterial, ShaderMaterial, PointsMaterial, LineBasicMaterial, Points, LineSegments, CanvasTexture, RepeatWrapping,
  SRGBColorSpace, DoubleSide, BackSide, AdditiveBlending, ACESFilmicToneMapping, PCFShadowMap, QuadraticBezierCurve3,
  CatmullRomCurve3, Sprite, SpriteMaterial, OrthographicCamera,
} from 'three';

export const TAU = Math.PI * 2;
export const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
export const lerp = (a, b, k) => a + (b - a) * k;
export const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
export const damp = (a, b, rate, dt) => a + (b - a) * (1 - Math.exp(-rate * dt));
export function rng(seed) { let s = seed >>> 0; return () => { s = (s + 0x6d2b79f5) >>> 0; let t = s; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
export const hash2 = (x, z) => { const s = Math.sin(x * 127.1 + z * 311.7) * 43758.5453; return s - Math.floor(s); };
export function vnoise(x, z) {
  const xi = Math.floor(x), zi = Math.floor(z), xf = x - xi, zf = z - zi, u = xf * xf * (3 - 2 * xf), v = zf * zf * (3 - 2 * zf);
  const a = hash2(xi, zi), b = hash2(xi + 1, zi), c = hash2(xi, zi + 1), d = hash2(xi + 1, zi + 1);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
}
export function fbm(x, z) { let s = 0, a = 0.5, f = 1; for (let i = 0; i < 4; i++) { s += a * vnoise(x * f, z * f); f *= 2.03; a *= 0.5; } return s / 0.9375; }

// ---------------------------------------------------------------- أدوات الأشكال
const _m = new Matrix4(), _q = new Quaternion(), _e = new Euler(), _v = new Vector3(), _s = new Vector3();
export const _c = new Color();
/** يحوّل الشكل لمثلثات مستقلة ويلوّنه (لون ثابت أو دالة حسب الموقع) */
export function paint(g, color) {
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
export function tf(g, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0, sx = 1, sy = sx, sz = sx) {
  _e.set(rx, ry, rz); _q.setFromEuler(_e); _m.compose(_v.set(x, y, z), _q, _s.set(sx, sy, sz)); g.applyMatrix4(_m); return g;
}
export function along(g, a, b) { // يمد الشكل (المبني على محور y) بين نقطتين
  const d = new Vector3().subVectors(b, a), len = d.length();
  _q.setFromUnitVectors(new Vector3(0, 1, 0), d.normalize());
  _m.compose(new Vector3().addVectors(a, b).multiplyScalar(0.5), _q, _s.set(1, 1, 1)); g.applyMatrix4(_m); return len;
}
export function merge(list) {
  let n = 0; for (const g of list) n += g.attributes.position.count;
  const P = new Float32Array(n * 3), N = new Float32Array(n * 3), C = new Float32Array(n * 3);
  let o = 0;
  for (const g of list) { if (!g.attributes.normal) g.computeVertexNormals(); P.set(g.attributes.position.array, o * 3); N.set(g.attributes.normal.array, o * 3); C.set(g.attributes.color.array, o * 3); o += g.attributes.position.count; g.dispose(); }
  const m = new BufferGeometry();
  m.setAttribute('position', new BufferAttribute(P, 3)); m.setAttribute('normal', new BufferAttribute(N, 3)); m.setAttribute('color', new BufferAttribute(C, 3));
  m.computeBoundingSphere(); return m;
}
export const mix = (c, a, b, k) => c.copy(_ca.set(a)).lerp(_cb.set(b), clamp(k, 0, 1));
export const _ca = new Color(), _cb = new Color();
export function canvasTex(w, h, draw, repeat) {
  const cv = document.createElement('canvas'); cv.width = w; cv.height = h;
  draw(cv.getContext('2d'), w, h);
  const t = new CanvasTexture(cv); t.colorSpace = SRGBColorSpace; t.anisotropy = 4;
  if (repeat) { t.wrapS = t.wrapT = RepeatWrapping; t.repeat.set(repeat[0], repeat[1]); }
  return t;
}


export const angDiff = (a, b) => { let d = (b - a) % TAU; if (d > Math.PI) d -= TAU; if (d < -Math.PI) d += TAU; return d; };
export const dampAngle = (a, b, rate, dt) => a + angDiff(a, b) * (1 - Math.exp(-rate * dt));
export const phong = (c, o = {}) => new MeshPhongMaterial({ color: c, shininess: 30, specular: '#2A2A2A', ...o });
export const shadowAll = (g) => g.traverse((o) => { if (o.isMesh) o.castShadow = true; });
export function makeSky(top = '#2F78DA', mid = '#86C4F7', hor = '#F8E6C8', sunDir = new Vector3(0.62, 0.3, -0.73)) {
  const sky = new Mesh(new SphereGeometry(600, 32, 16), new ShaderMaterial({
    side: BackSide, depthWrite: false, fog: false,
    uniforms: { top: { value: new Color(top) }, mid: { value: new Color(mid) }, hor: { value: new Color(hor) }, sunDir: { value: sunDir.clone().normalize() } },
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
  sky.renderOrder = -10; sky.frustumCulled = false; return sky;
}
export function makeRenderer(canvas) {
  const renderer = new WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
  renderer.toneMapping = ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05;
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = PCFShadowMap;
  return renderer;
}
export function supported() {
  try { const c = document.createElement('canvas'); return !!(window.WebGLRenderingContext && (c.getContext('webgl2') || c.getContext('webgl'))); } catch (e) { return false; }
}

export const glowTexture = () => canvasTex(64, 64, (g) => { const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32); gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.35, 'rgba(255,255,255,.5)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = gr; g.fillRect(0, 0, 64, 64); });

export function waterNormalTexture() {
  const t = canvasTex(256, 256, (g, w, h) => {
  const img = g.createImageData(w, h), hgt = (x, y) => vnoise(x / 18, y / 9) * 0.6 + vnoise(x / 7, y / 4) * 0.4;
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const dx = hgt(x + 1, y) - hgt(x - 1, y), dy = hgt(x, y + 1) - hgt(x, y - 1), o = (y * w + x) * 4;
    const nx = -dx * 3, ny = -dy * 3, l = Math.hypot(nx, ny, 1);
    img.data[o] = (nx / l * 0.5 + 0.5) * 255; img.data[o + 1] = (ny / l * 0.5 + 0.5) * 255; img.data[o + 2] = (1 / l * 0.5 + 0.5) * 255; img.data[o + 3] = 255;
  }
  g.putImageData(img, 0, 0);
}, [1, 1]);
  t.colorSpace = ''; return t;
}

export function swayMat(base, amp, h0, U) {
  const m = base.clone();
  m.onBeforeCompile = (sh) => {
    sh.uniforms.uTime = U.time; sh.uniforms.uWind = U.wind || { value: 0 };
    sh.vertexShader = 'uniform float uTime; uniform float uWind;\n' + sh.vertexShader.replace('#include <begin_vertex>', `#include <begin_vertex>
      float hh = max(0.0, transformed.y - ${h0.toFixed(2)});
      float ph = 0.0;
      #ifdef USE_INSTANCING
        ph = instanceMatrix[3].x * 0.37 + instanceMatrix[3].z * 0.23;
      #endif
      float wk = 1.0 + uWind * 6.0;
      transformed.x += ((sin(uTime * (1.25 + uWind * 3.0) + ph) + 0.35 * sin(uTime * 2.7 + ph * 1.7)) * ${amp.toFixed(4)} * wk + uWind * ${(amp * 8).toFixed(4)}) * hh * hh;
      transformed.z += cos(uTime * (1.05 + uWind * 2.5) + ph) * ${(amp * 0.5).toFixed(4)} * wk * hh * hh;`);
  };
  m.customProgramCacheKey = () => 'sway' + amp + '_' + h0 + (base.flatShading ? 'f' : '') + base.side;
  return m;
}

export function palmGeo(r, lean, fronds) {
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

export function treeGeo(r, fruit, palette) {
  const parts = [paint(tf(new CylinderGeometry(0.12, 0.2, 1.7, 7), 0, 0.85, 0), '#7A5230')];
  parts.push(paint(tf(new CylinderGeometry(0.05, 0.08, 0.8, 5), 0.25, 1.55, 0, 0, 0, -0.7), '#7A5230'));
  for (let i = 0; i < 7; i++) {
    const rad = 0.62 + r() * 0.45, px = (r() - 0.5) * 1.3, py = 2.15 + r() * 0.9, pz = (r() - 0.5) * 1.1, tone = r();
    parts.push(tf(paint(new IcosahedronGeometry(rad, 1), (c, x, y, z) => mix(c, palette[0], palette[1], 0.25 + y / rad * 0.45 + tone * 0.3 + (hash2(x * 9, z * 9) - 0.5) * 0.2)), px, py, pz));
  }
  if (fruit) for (let i = 0; i < 9; i++) { const a = r() * TAU, b = r() * 1.3; parts.push(tf(paint(new IcosahedronGeometry(0.08, 1), fruit), Math.cos(a) * 0.95, 2.1 + Math.sin(b) * 0.9, Math.sin(a) * 0.85 + 0.2)); }
  return merge(parts);
}

export const bushGeo = () => merge([0, 1, 2, 3].map((i) => tf(paint(new IcosahedronGeometry(0.42 - i * 0.05, 1), (c, x, y) => mix(c, '#2F8A3C', '#86D05C', 0.4 + y * 0.9 + i * 0.1)), (i - 1.5) * 0.32, 0.3, (i % 2) * 0.2)));
export const rockGeo = () => paint(new DodecahedronGeometry(0.4, 0), (c, x, y, z) => mix(c, '#8C877B', '#C9C4B6', 0.4 + y * 1.2 + hash2(x * 7, z * 7) * 0.3));
export const reedGeo = () => merge([...Array(6)].map((_, i) => {
  const a = i * 1.1, h = 0.8 + (i % 3) * 0.22;
  const blade = paint(new ConeGeometry(0.025, h, 3), (c, x, y) => mix(c, '#3C7F35', '#8CC05A', y / h + 0.5));
  tf(blade, Math.cos(a) * 0.12, h / 2, Math.sin(a) * 0.12, Math.sin(a) * 0.15, 0, Math.cos(a) * 0.15);
  return i % 2 ? merge([blade, tf(paint(new CylinderGeometry(0.035, 0.035, 0.16, 6), '#6B4423'), Math.cos(a) * 0.12 + Math.cos(a) * 0.15 * h, h - 0.05, Math.sin(a) * 0.12)]) : blade;
}));
export const tuftGeo = () => (() => {
  const pos = [], col = [];
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * TAU + 0.3, h = 0.22 + (i % 3) * 0.07, w = 0.035, bx = Math.cos(a) * 0.05, bz = Math.sin(a) * 0.05, tx = bx + Math.cos(a) * 0.1, tz = bz + Math.sin(a) * 0.1;
    const px = -Math.sin(a) * w, pz = Math.cos(a) * w;
    pos.push(bx - px, 0, bz - pz, bx + px, 0, bz + pz, tx, h, tz);
    for (const k of [0, 0, 1]) { mix(_c, '#5AA544', '#B0E47A', k); col.push(_c.r, _c.g, _c.b); }
  }
  const g = new BufferGeometry(); g.setAttribute('position', new BufferAttribute(new Float32Array(pos), 3)); g.setAttribute('color', new BufferAttribute(new Float32Array(col), 3)); g.computeVertexNormals();
  return g;
})();

// ---------------------------------------------------------------- البطل (كل الشخصيات بإكسسواراتها) + المظلة والحبل
export function makeHero(sk, glowTex) {
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
  // الحبل
  const rope = new Mesh(new BufferGeometry(), phong('#8B5A2B', { shininess: 5 })); rope.visible = false; rope.castShadow = true;
  return { id: sk.id, root, inner, eyes, pupils, smile, ooh, feet, acc, flames, bodyMat, fire, chute, canopy, canopyHolder, lines, drop, rope, turn: 0, blink: 0, nextBlink: 2 };
}

// ---------------------------------------------------------------- رجل بالزي العربي (أبو جاسم، بائع الشاي، الناس)
export function makeMan(o = {}) {
  const C = { skin: '#C98E62', thobe: '#F2EEE4', bisht: '#5B3A24', shmagh: '#C8102E', agal: '#141414', beard: '#4A4440', beads: true, gold: true, ...o };
  const root = new Group();
  const skin = phong(C.skin, { shininess: 12 }), thobeM = phong(C.thobe, { shininess: 8 }), bishtM = phong(C.bisht || C.thobe, { shininess: 14, side: DoubleSide });
  const thobe = new Mesh(new LatheGeometry([new Vector2(0.001, 0.0), new Vector2(0.27, 0.0), new Vector2(0.275, 0.1), new Vector2(0.25, 0.5), new Vector2(0.232, 0.9), new Vector2(0.222, 1.2), new Vector2(0.2, 1.34), new Vector2(0.12, 1.42), new Vector2(0.05, 1.45)], 30), thobeM);
  root.add(thobe);
  for (const s of [-1, 1]) { const sd = new Mesh(new BoxGeometry(0.1, 0.04, 0.2), phong('#4A2E18')); sd.position.set(s * 0.09, 0.02, 0.2); root.add(sd); }
  const bisht = new Mesh(new LatheGeometry([new Vector2(0.245, 0.06), new Vector2(0.295, 0.08), new Vector2(0.285, 0.5), new Vector2(0.265, 0.9), new Vector2(0.255, 1.2), new Vector2(0.24, 1.33), new Vector2(0.16, 1.41)], 30, 0.62, TAU - 1.24), bishtM);
  root.add(bisht); bisht.visible = !!C.bisht;
  const goldM = phong('#D4AF37', { shininess: 90, specular: '#FFF2B0' });
  for (const s of [-1, 1]) {
    const a = s * 0.62, pts = [[0.247, 0.08], [0.297, 0.1], [0.287, 0.5], [0.267, 0.9], [0.257, 1.2], [0.242, 1.33], [0.162, 1.41]].map(([r, y]) => new Vector3(Math.sin(a) * (r + 0.006), y, Math.cos(a) * (r + 0.006)));
    if (C.bisht && C.gold) root.add(new Mesh(new TubeGeometry(new CatmullRomCurve3(pts), 20, 0.014, 6), goldM));
  }
  const arms = [];
  for (const s of [-1, 1]) {
    const sh = new Group(); sh.position.set(s * 0.25, 1.3, 0.0); root.add(sh);
    const up = new Mesh(new CapsuleGeometry(0.072, 0.28, 4, 10), bishtM); up.position.y = -0.18; sh.add(up);
    const el = new Group(); el.position.y = -0.36; sh.add(el);
    const lo = new Mesh(new CapsuleGeometry(0.068, 0.22, 4, 10), bishtM); lo.position.y = -0.14; el.add(lo);
    const cuff = new Mesh(new CylinderGeometry(0.055, 0.06, 0.05, 10), thobeM); cuff.position.y = -0.3; el.add(cuff);
    const hand = new Mesh(new SphereGeometry(0.052, 12, 10), skin); hand.position.y = -0.36; hand.scale.set(0.9, 1.1, 0.8); el.add(hand);
    if (s < 0 && C.beads) { const beads = new Mesh(new TorusGeometry(0.06, 0.011, 6, 18), phong('#E0A03C', { shininess: 80, specular: '#FFF0C8' })); beads.position.set(0, -0.44, 0.02); beads.rotation.y = 0.4; el.add(beads); }
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
  const beard = new Mesh(new SphereGeometry(0.16, 24, 10, Math.PI / 2 - 1.2, 2.4, Math.PI * 0.6, Math.PI * 0.3), phong(C.beard === 'none' ? '#000' : C.beard, { side: DoubleSide, shininess: 5 })); head.add(beard); beard.visible = C.beard !== 'none';
  const mouth = new Mesh(new SphereGeometry(0.026, 10, 8), new MeshBasicMaterial({ color: '#4A1A14' })); mouth.position.set(0, -0.07, 0.143); mouth.scale.set(1, 0.3, 0.5); head.add(mouth);
  // الشماغ والعقال
  const shTex = canvasTex(128, 128, (g, w, h) => {
    g.fillStyle = '#FBF8F2'; g.fillRect(0, 0, w, h);
    g.fillStyle = C.shmagh;
    for (let y = 0; y < h; y += 16) for (let x = 0; x < w; x += 16) { g.fillRect(x + 2, y + 2, 7, 7); g.fillRect(x + 9, y + 9, 5, 5); g.fillRect(x + 9, y + 2, 2, 2); g.fillRect(x + 2, y + 11, 2, 2); }
  }, [5, 5]);
  const shM = new MeshLambertMaterial({ map: shTex, side: DoubleSide });
  const cap = new Mesh(new SphereGeometry(0.168, 28, 14, 0, TAU, 0, Math.PI * 0.52), shM); cap.rotation.x = -0.42; cap.position.y = 0.01; head.add(cap);
  const drape = new Mesh(new LatheGeometry([new Vector2(0.168, 0.02), new Vector2(0.18, -0.06), new Vector2(0.2, -0.16), new Vector2(0.24, -0.26), new Vector2(0.28, -0.33)], 28, 1.15, TAU - 2.3), shM); head.add(drape);
  const tailF = new Mesh(new PlaneGeometry(0.2, 0.36), shM); tailF.position.set(0.17, -0.25, 0.1); tailF.rotation.set(-0.15, 0.6, -0.08); head.add(tailF);
  const agalM = phong(C.agal, { shininess: 40 });
  for (const [d, r] of [[0.07, 0.154], [0.097, 0.139]]) { const a = new Mesh(new TorusGeometry(r, 0.015, 8, 36), agalM); a.position.set(0, d * 0.913, -d * 0.408); a.rotation.x = Math.PI / 2 - 0.42; head.add(a); }
  shadowAll(root);
  return { root, head, arms, mouth, yaw: 0 };
}

