// 🛣️ نطّة — رسم الطرق المعبّدة والسفاري:
//   - شريط الطريق (إسفلت بخطوط: خط وسط متقطع 3 م / فراغ 9 م، خطوط حافّة، كتف حصو؛ بلاط متداخل بحجر رصيف؛ حجر بازلت)
//   - جسور كونكريت بأعمدة ودرابزين، عبّارات للسواقي، حواجز معدنية على الردم العالي، أسهم تحذير بالمنعطفات الحادة
//   - لوحات اتجاهات خضرة بالتقاطعات (الوجهة والمسافة بالكيلو)، ولوحات «أهلاً» زرگة على مداخل المناطق، وأعمدة إنارة بالشوارع
//   - السفاري: أعلام على الجنبين، جدار تايرات، قوس البداية، بوابات التفتيش، علامات القفزات، والموقف
// كل شي يتقسّم قطع وينطفي البعيد (للآيفون).
import {
  Mesh, Group, InstancedMesh, Object3D, BufferGeometry, BufferAttribute, MeshLambertMaterial, MeshBasicMaterial,
  BoxGeometry, CylinderGeometry, TorusGeometry, PlaneGeometry, ConeGeometry, DoubleSide, Color, RepeatWrapping,
} from 'three';
import { TAU, clamp, rng, canvasTex, paint, tf, merge } from '../lib3d.js';

const FONT = '-apple-system, "Geeza Pro", system-ui, sans-serif', EMOJI = '-apple-system, system-ui, "Apple Color Emoji", "Noto Color Emoji", sans-serif';

export function createRoadsView({ scene, G }) {
  const I = G.I, SEA = G.SEA, H = G.H, o3 = new Object3D();
  const root = new Group(); scene.add(root);
  const chunks = []; // { obj, x, z, far }
  const addChunk = (obj, x, z, far = 1500) => { root.add(obj); chunks.push({ obj, x, z, far }); obj.visible = false; return obj; };

  // ================================================================ أنسجة الطرق
  const SHOULDER = { hwy: 0.7, road: 0.5, street: 0.35 };
  const noise = (g, w, h, n, c0, c1, a = 0.25) => { const r = rng(w * 7 + h); for (let i = 0; i < n; i++) { g.fillStyle = r() < 0.5 ? c0 : c1; g.globalAlpha = a * (0.4 + r() * 0.6); const s = 1 + r() * 2.2; g.fillRect(r() * w, r() * h, s, s); } g.globalAlpha = 1; };
  /** إسفلت: العرض الكلي = 2×(نص العرض + الكتف)، الطول = 12 م (خط 3 م + فراغ 9 م) */
  function asphaltTex(hw, sh, edges, center) {
    const Wm = 2 * (hw + sh), PX = 256 / Wm, Lm = 12, PY = 512 / Lm;
    const t = canvasTex(256, 512, (g, w, h) => {
      g.fillStyle = '#8C8470'; g.fillRect(0, 0, w, h); noise(g, w, h, 2600, '#6E6858', '#ABA28B', 0.5); // كتف حصو
      const x0 = sh * PX, x1 = w - sh * PX; g.fillStyle = '#45474A'; g.fillRect(x0, 0, x1 - x0, h); noise(g, w, h, 5200, '#2E3033', '#6A6C70', 0.28);
      // مسارات التايرات (أغمق شوية) والحافّة المتآكلة
      g.fillStyle = 'rgba(25,25,28,.09)'; for (const m of [-hw * 0.75, -hw * 0.25, hw * 0.25, hw * 0.75]) g.fillRect(w / 2 + m * PX - 0.35 * PX, 0, 0.7 * PX, h);
      g.fillStyle = 'rgba(0,0,0,.18)'; g.fillRect(x0 - 1, 0, 2, h); g.fillRect(x1 - 1, 0, 2, h);
      if (edges) { g.fillStyle = '#ECEBE6'; const lw = 0.15 * PX; g.fillRect(x0 + 0.25 * PX, 0, lw, h); g.fillRect(x1 - 0.25 * PX - lw, 0, lw, h); }
      if (center) { g.fillStyle = '#F2F0EA'; const lw = 0.13 * PX; g.fillRect(w / 2 - lw / 2, 0, lw, 3 * PY); }
      noise(g, w, h, 500, '#5A5C60', '#2A2C2E', 0.35); // بقع ورقع
    });
    t.wrapS = t.wrapT = RepeatWrapping; return { tex: t, Lm, Wm };
  }
  /** بلاط متداخل (أحمر وبيج) بحجر رصيف رمادي على الحافّتين */
  function paversTex(hw) {
    const curb = 0.3, Wm = 2 * (hw + curb), PX = 256 / Wm, Lm = 4, PY = 256 / Lm;
    const t = canvasTex(256, 256, (g, w, h) => {
      g.fillStyle = '#9A8F80'; g.fillRect(0, 0, w, h);
      const r = rng(11), bw = 0.2 * PX, bh = 0.1 * PY * 2;
      for (let y = 0, row = 0; y < h; y += bh, row++) for (let x = curb * PX - (row % 2 ? bw / 2 : 0); x < w - curb * PX; x += bw) {
        const k = r();
        g.fillStyle = k < 0.05 ? '#9A6A52' : k < 0.45 ? '#C2A68A' : k < 0.8 ? '#B59878' : '#A88A6C'; g.fillRect(x + 0.6, y + 0.6, bw - 1.2, bh - 1.2);
      }
      noise(g, w, h, 1400, '#7D6F60', '#D8C6AD', 0.22);
      g.fillStyle = '#B9B6AE'; g.fillRect(0, 0, curb * PX, h); g.fillRect(w - curb * PX, 0, curb * PX, h); // حجر الرصيف
      g.fillStyle = 'rgba(0,0,0,.25)'; for (let y = 0; y < h; y += PY) { g.fillRect(0, y, curb * PX, 1.5); g.fillRect(w - curb * PX, y, curb * PX, 1.5); }
      g.fillRect(curb * PX - 1, 0, 1.5, h); g.fillRect(w - curb * PX, 0, 1.5, h);
    });
    t.wrapS = t.wrapT = RepeatWrapping; return { tex: t, Lm, Wm };
  }
  /** حجر بازلت (كوبل) بحجر حافّة */
  function cobbleTex(hw) {
    const curb = 0.35, Wm = 2 * (hw + curb), PX = 256 / Wm, Lm = 3, PY = 256 / Lm;
    const t = canvasTex(256, 256, (g, w, h) => {
      g.fillStyle = '#8F8574'; g.fillRect(0, 0, w, h);
      const r = rng(5), cs = 0.16 * PX;
      for (let y = 0, row = 0; y < h + cs; y += cs * 0.92, row++) for (let x = curb * PX + (row % 2 ? cs / 2 : 0); x < w - curb * PX; x += cs) {
        const k = r(), rr = cs * (0.4 + r() * 0.08);
        g.fillStyle = k < 0.4 ? '#5D5852' : k < 0.75 ? '#6B655D' : '#4E4A45'; g.beginPath(); g.ellipse(x + (r() - 0.5) * 2, y + (r() - 0.5) * 2, rr, rr * 0.86, r() * 3, 0, TAU); g.fill();
        g.fillStyle = 'rgba(255,255,255,.10)'; g.beginPath(); g.arc(x - rr * 0.25, y - rr * 0.3, rr * 0.45, 0, TAU); g.fill();
      }
      g.fillStyle = '#A39C90'; g.fillRect(0, 0, curb * PX, h); g.fillRect(w - curb * PX, 0, curb * PX, h);
      g.fillStyle = 'rgba(0,0,0,.25)'; for (let y = 0; y < h; y += PY * 0.5) { g.fillRect(0, y, curb * PX, 1.5); g.fillRect(w - curb * PX, y, curb * PX, 1.5); }
    });
    t.wrapS = t.wrapT = RepeatWrapping; return { tex: t, Lm, Wm };
  }
  const TEX = new Map();
  const styleTex = (road, style) => {
    const key = road.cls + ':' + style; if (TEX.has(key)) return TEX.get(key);
    const sh = SHOULDER[road.cls] || 0.5;
    const t = style === 'pavers' ? paversTex(road.hw) : style === 'cobble' ? cobbleTex(road.hw) : asphaltTex(road.hw, sh, road.cls === 'hwy', road.cls !== 'street');
    t.mat = new MeshLambertMaterial({ map: t.tex, polygonOffset: true, polygonOffsetFactor: road.cls === 'hwy' ? -3 : -2, polygonOffsetUnits: road.cls === 'hwy' ? -3 : -2 });
    TEX.set(key, t); return t;
  };

  // ================================================================ شرائط الطرق (قطع ~200 م)
  const LIFT = { hwy: 0.04, road: 0.035, street: 0.03 }; // الرئيسي فوك (بالتقاطع خطّه يكمل)
  for (const road of I.pavedRoads) {
    const P = road.pts, n = P.length, closed = road.closed, cum = [0];
    for (let i = 1; i < n; i++) cum.push(cum[i - 1] + Math.hypot(P[i].x - P[i - 1].x, P[i].z - P[i - 1].z));
    const last = closed ? n : n - 1;
    let i0 = 0;
    while (i0 < last) {
      const style = P[i0].style; let i1 = i0;
      while (i1 < last && i1 - i0 < 50 && P[i1].style === style) i1++;
      const T = styleTex(road, style), half = T.Wm / 2, idx = [], pos = [], uv = [], nor = [];
      for (let i = i0; i <= i1; i++) {
        const p = P[i % n], a = P[(i - 1 + n) % n], b = P[(i + 1) % n];
        const pa = closed || i > 0 ? a : p, pb = closed || i < n - 1 ? b : p; let dx = pb.x - pa.x, dz = pb.z - pa.z; const l = Math.hypot(dx, dz) || 1; dx /= l; dz /= l;
        const y = SEA + p.a + LIFT[road.cls], v = (i === n && closed ? cum[n - 1] + Math.hypot(P[0].x - P[n - 1].x, P[0].z - P[n - 1].z) : cum[i % n]) / T.Lm;
        for (const sd of [-1, 1]) { pos.push(p.x - dz * sd * half, y, p.z + dx * sd * half); uv.push(sd < 0 ? 0 : 1, v); nor.push(0, 1, 0); }
        if (i > i0) { const q = (i - i0) * 2; idx.push(q - 2, q - 1, q, q - 1, q + 1, q); }
      }
      const g = new BufferGeometry(); g.setAttribute('position', new BufferAttribute(new Float32Array(pos), 3)); g.setAttribute('normal', new BufferAttribute(new Float32Array(nor), 3)); g.setAttribute('uv', new BufferAttribute(new Float32Array(uv), 2)); g.setIndex(idx); g.computeBoundingSphere();
      const m = new Mesh(g, T.mat); m.receiveShadow = true; m.matrixAutoUpdate = false;
      const c = P[Math.floor((i0 + i1) / 2) % n]; addChunk(m, c.x, c.z, 1700);
      i0 = i1;
    }
  }

  // ================================================================ أثاث الطرق (instanced لكل قطعة كبيرة 600 م)
  const concrete = new MeshLambertMaterial({ color: '#B8B2A6' }), metal = new MeshLambertMaterial({ color: '#9EA4A8' }), dark = new MeshLambertMaterial({ color: '#2B2D30' });
  const buckets = new Map(); // key → { items: { kind: [matrices] } }
  const bucketOf = (x, z) => { const k = Math.floor(x / 600) * 1000 + Math.floor(z / 600); let b = buckets.get(k); if (!b) { b = { x: (Math.floor(x / 600) + 0.5) * 600, z: (Math.floor(z / 600) + 0.5) * 600, items: {} }; buckets.set(k, b); } return b; };
  const put = (kind, x, y, z, ry = 0, sx = 1, sy = 1, sz = 1, col = null) => { const b = bucketOf(x, z); (b.items[kind] ||= []).push([x, y, z, ry, sx, sy, sz, col]); };
  const KIND = {
    railPost: { geo: new BoxGeometry(0.12, 0.75, 0.12), mat: metal, y0: 0.375 },
    rail: { geo: paint(new BoxGeometry(1, 0.32, 0.05), (c, x, y) => c.set(Math.abs(y) < 0.04 ? '#7E858A' : '#C6CBCE')), mat: new MeshLambertMaterial({ vertexColors: true }), y0: 0.6 },
    lampPole: { geo: merge([paint(tf(new CylinderGeometry(0.06, 0.09, 5.6, 6), 0, 2.8, 0), '#5E6468'), paint(tf(new BoxGeometry(1.3, 0.07, 0.07), 0.62, 5.5, 0), '#5E6468'), paint(tf(new BoxGeometry(0.55, 0.14, 0.26), 1.2, 5.42, 0), '#4A4E52'), paint(tf(new BoxGeometry(0.46, 0.04, 0.2), 1.2, 5.33, 0), '#FFF3C4')]), mat: new MeshLambertMaterial({ vertexColors: true }), y0: 0 },
    chevron: { geo: new PlaneGeometry(0.62, 0.78), mat: null, y0: 1.15 },
    chevPost: { geo: new BoxGeometry(0.07, 1.2, 0.07), mat: dark, y0: 0.6 },
    pole: { geo: paint(new CylinderGeometry(0.035, 0.035, 1.8, 5, 6), (c, x, y) => c.set(Math.floor((y + 0.9) / 0.3 + 0.01) % 2 ? '#E9E6E0' : '#D9431C')), mat: new MeshLambertMaterial({ vertexColors: true }), y0: 0.9 },
    flag: { geo: tf(new PlaneGeometry(0.62, 0.4), 0.31, 0, 0), mat: new MeshLambertMaterial({ color: '#FFFFFF', side: DoubleSide }), y0: 1.6 },
    tire: { geo: merge([0, 1, 2].map((k) => paint(tf(new TorusGeometry(0.33, 0.13, 6, 12), 0, 0.13 + k * 0.25, 0, Math.PI / 2, 0, 0), k === 1 ? '#E9E6E0' : '#1F1F21'))), mat: new MeshLambertMaterial({ vertexColors: true }), y0: 0 },
  };
  KIND.chevron.mat = new MeshLambertMaterial({ map: canvasTex(64, 80, (g, w, h) => { g.fillStyle = '#F4C21A'; g.fillRect(0, 0, w, h); g.fillStyle = '#111'; for (const y0 of [10, 44]) { g.beginPath(); g.moveTo(16, y0); g.lineTo(44, y0 + 13); g.lineTo(16, y0 + 26); g.lineTo(24, y0 + 26); g.lineTo(52, y0 + 13); g.lineTo(24, y0); g.closePath(); g.fill(); } g.strokeStyle = '#111'; g.lineWidth = 3; g.strokeRect(1.5, 1.5, w - 3, h - 3); }), side: DoubleSide });

  // ---- حواجز معدنية على الردم العالي (> 2 م)، وأسهم تحذير على برّا المنعطفات الحادة، وإنارة الشوارع المبلّطة
  for (const road of I.pavedRoads) {
    const P = road.pts, n = P.length, closed = road.closed, dir = (i) => { const a = P[(i - 1 + n) % n], b = P[(i + 1) % n]; const pa = closed || i > 0 ? a : P[i], pb = closed || i < n - 1 ? b : P[i]; const dx = pb.x - pa.x, dz = pb.z - pa.z, l = Math.hypot(dx, dz) || 1; return [dx / l, dz / l]; };
    const off = road.hw + (SHOULDER[road.cls] || 0.4) + 0.25;
    for (let i = 1; i < n - 1; i++) {
      const p = P[i], [dx, dz] = dir(i);
      if (I.inBridge(p.x, p.z, 4)) continue;
      for (const sd of [-1, 1]) {
        const sx = p.x - dz * sd * (road.hw + 4.5), sz = p.z + dx * sd * (road.hw + 4.5), drop = p.a - (H(sx, sz) - SEA);
        if (drop > 2.1) { const x = p.x - dz * sd * off, z = p.z + dx * sd * off, y = SEA + p.a; put('rail', x, y, z, -Math.atan2(dz, dx), 4.05, 1, 1); if (i % 1 === 0) put('railPost', x, y, z, 0); }
      }
      if (road.cls !== 'street' && i % 3 === 0 && i > 2 && i < n - 3) { // نص قطر المنعطف
        const a = P[i - 2], b = P[i + 2]; const h1 = Math.atan2(p.z - a.z, p.x - a.x), h2 = Math.atan2(b.z - p.z, b.x - p.x); let dh = h2 - h1; dh = Math.atan2(Math.sin(dh), Math.cos(dh));
        const R = 8 / Math.max(1e-4, Math.abs(dh));
        if (R < 48) { const out = dh > 0 ? -1 : 1, x = p.x - dz * out * (off + 0.6), z = p.z + dx * out * (off + 0.6), y = SEA + p.a; put('chevron', x, y, z, Math.atan2(-dx, -dz), dh > 0 ? 1 : -1); put('chevPost', x, y, z, 0); } // يواجه الجاي، والسهم صوب اللفّة (والراجع يشوفه بالمقلوب = صح إله)
      }
      if (p.style === 'pavers' && i % 6 === 0) { const sd = (i / 6) % 2 ? 1 : -1, x = p.x - dz * sd * (road.hw + 0.55), z = p.z + dx * sd * (road.hw + 0.55); put('lampPole', x, SEA + p.a, z, -Math.atan2(-dx * sd, dz * sd)); } // الذراع صوب نص الشارع
    }
  }

  // ---- 🌉 الجسور: سطح كونكريت، رصيفين، درابزين، أعمدة بالنهر، وجدران على الطرفين
  for (const b of I.bridges) {
    const grp = new Group(), yaw = -Math.atan2(b.s, b.c), L = b.half * 2, W = b.hw * 2 + 1.8, y = SEA + b.y;
    grp.position.set(b.x, 0, b.z); grp.rotation.y = yaw;
    const deck = new Mesh(new BoxGeometry(L, 0.75, W), concrete); deck.position.y = y - 0.4; grp.add(deck);
    for (const sd of [-1, 1]) {
      const curb = new Mesh(new BoxGeometry(L, 0.22, 0.6), concrete); curb.position.set(0, y + 0.1, sd * (b.hw + 0.55)); grp.add(curb);
      for (let k = -b.half + 1; k <= b.half - 1; k += 2) { const p = new Mesh(new BoxGeometry(0.1, 1.05, 0.1), metal); p.position.set(k, y + 0.72, sd * (b.hw + 0.78)); grp.add(p); }
      for (const hy of [0.55, 1.15]) { const r = new Mesh(new BoxGeometry(L - 1.6, 0.07, 0.07), metal); r.position.set(0, y + hy, sd * (b.hw + 0.78)); grp.add(r); }
      const ab = new Mesh(new BoxGeometry(1.2, 6, W + 1.2), concrete); ab.position.set(sd * (b.half - 0.4), y - 3.4, 0); grp.add(ab); // جدار الطرف (يدخل بالأرض)
    }
    for (const k of [-b.half * 0.36, b.half * 0.36]) { const wx = b.x + b.c * k, wz = b.z + b.s * k, gy = H(wx, wz) - 1.5, hh = y - 0.75 - gy; if (hh > 0.5) { const pier = new Mesh(new CylinderGeometry(0.55, 0.65, hh, 10), concrete); pier.position.set(k, gy + hh / 2, 0); grp.add(pier); } }
    addChunk(grp, b.x, b.z, 1400);
  }
  // ---- عبّارات: جدار كونكريت وفتحة أنبوب على جنبين الطريق
  for (const c of I.culverts) {
    const grp = new Group(); grp.position.set(c.x, 0, c.z); grp.rotation.y = -Math.atan2(c.dz, c.dx);
    for (const sd of [-1, 1]) {
      const zz = sd * (c.hw + 3.2), gy = H(c.x - c.dz * sd * (c.hw + 3.2), c.z + c.dx * sd * (c.hw + 3.2));
      const wall = new Mesh(new BoxGeometry(3.2, 1.6, 0.35), concrete); wall.position.set(0, gy + 0.5, zz); grp.add(wall);
      const hole = new Mesh(new CylinderGeometry(0.55, 0.55, 0.4, 14), dark); hole.rotation.x = Math.PI / 2; hole.position.set(0, gy + 0.35, zz + sd * 0.05); grp.add(hole);
    }
    addChunk(grp, c.x, c.z, 700);
  }

  // ================================================================ 🪧 اللوحات (أنسجة تنرسم أول ما تقرب)
  const lazy = []; // { x, z, build, done }
  const textBoard = (w, h, draw) => canvasTex(w, h, (g) => { draw(g, w, h); });
  const drawArm = (g, w, h, lines, tipRight) => {
    g.clearRect(0, 0, w, h); const tip = h * 0.42, x0 = tipRight ? 0 : tip, x1 = tipRight ? w - tip : w;
    g.fillStyle = '#0E6B3B'; g.beginPath();
    if (tipRight) { g.moveTo(0, 4); g.lineTo(x1, 4); g.lineTo(w - 2, h / 2); g.lineTo(x1, h - 4); g.lineTo(0, h - 4); } else { g.moveTo(w, 4); g.lineTo(x0, 4); g.lineTo(2, h / 2); g.lineTo(x0, h - 4); g.lineTo(w, h - 4); }
    g.closePath(); g.fill(); g.strokeStyle = '#F2F2EA'; g.lineWidth = 5; g.stroke();
    g.fillStyle = '#FFFFFF'; g.textBaseline = 'middle'; try { g.direction = 'rtl'; } catch (e) { /* */ }
    lines.forEach(([name, km], k) => { const yy = h * (lines.length === 1 ? 0.5 : 0.3 + k * 0.42); g.font = `800 ${lines.length === 1 ? 40 : 32}px ${EMOJI}`; g.textAlign = 'right'; g.fillText(name, x1 - 14, yy); g.font = `900 ${lines.length === 1 ? 40 : 32}px ${FONT}`; g.textAlign = 'left'; g.fillText(`${km} كم`, x0 + 14, yy); });
  };
  for (const sg of I.signs) {
    lazy.push({ x: sg.px, z: sg.pz, build() {
      const grp = new Group(), gy = H(sg.px, sg.pz); grp.position.set(sg.px, gy, sg.pz);
      const pole = new Mesh(new CylinderGeometry(0.07, 0.09, 3.6, 8), metal); pole.position.y = 1.8; grp.add(pole);
      const cap = new Mesh(new ConeGeometry(0.12, 0.2, 8), metal); cap.position.y = 3.7; grp.add(cap);
      sg.arms.forEach((arm, k) => {
        const lines = arm.to, hgt = lines.length > 1 ? 0.62 : 0.4, len = 2.3;
        const front = textBoard(512, lines.length > 1 ? 140 : 92, (g, w, h) => drawArm(g, w, h, lines, true));
        const back = textBoard(512, lines.length > 1 ? 140 : 92, (g, w, h) => drawArm(g, w, h, lines, false));
        const a = new Group(); a.position.y = 3.2 - k * 0.75; a.rotation.y = -arm.ang; // +x محلي = اتجاه الفرع
        const pf = new Mesh(new PlaneGeometry(len, hgt), new MeshLambertMaterial({ map: front, transparent: true, alphaTest: 0.3 })); pf.position.set(len / 2 + 0.08, 0, 0.03); a.add(pf);
        const pb = new Mesh(new PlaneGeometry(len, hgt), new MeshLambertMaterial({ map: back, transparent: true, alphaTest: 0.3 })); pb.position.set(len / 2 + 0.08, 0, -0.03); pb.rotation.y = Math.PI; a.add(pb);
        grp.add(a);
      });
      return grp;
    } });
  }
  for (const w of I.welcome) {
    lazy.push({ x: w.px, z: w.pz, build() {
      const grp = new Group(), gy = H(w.px, w.pz); grp.position.set(w.px, gy, w.pz); grp.rotation.y = -Math.atan2(-w.dz, -w.dx) + Math.PI / 2; // الوجه صوب الجاي
      const tex = textBoard(512, 220, (g, W2, H2) => { g.fillStyle = '#1D4F8F'; g.fillRect(0, 0, W2, H2); g.strokeStyle = '#FFFFFF'; g.lineWidth = 8; g.strokeRect(10, 10, W2 - 20, H2 - 20); g.fillStyle = '#FFFFFF'; g.textAlign = 'center'; g.textBaseline = 'middle'; try { g.direction = 'rtl'; } catch (e) { /* */ } g.font = `900 60px ${EMOJI}`; g.fillText(w.text, W2 / 2, H2 * 0.4); g.font = `700 34px ${FONT}`; g.fillStyle = '#D7E6FA'; g.fillText('أهلاً وسهلاً', W2 / 2, H2 * 0.76); });
      const board = new Mesh(new PlaneGeometry(2.6, 1.12), new MeshLambertMaterial({ map: tex })); board.position.y = 2.25; grp.add(board);
      const backM = new Mesh(new PlaneGeometry(2.6, 1.12), metal); backM.position.set(0, 2.25, -0.03); backM.rotation.y = Math.PI; grp.add(backM);
      for (const sd of [-1, 1]) { const p = new Mesh(new CylinderGeometry(0.05, 0.06, 2.8, 6), metal); p.position.set(sd * 1.2, 1.4, -0.06); grp.add(p); }
      return grp;
    } });
  }

  // ================================================================ 🏁 السفاري
  const SF = I.safari, FU = SF.furn;
  for (const p of FU.poles) { put('pole', p.x, H(p.x, p.z), p.z, 0); put('flag', p.x, H(p.x, p.z), p.z, -p.yaw + Math.PI, 1, 1, 1, p.c ? '#FF6A13' : '#FFFFFF'); }
  for (const t of FU.tires) put('tire', t.x, H(t.x, t.z) - 0.05, t.z, (t.x * 13.7) % TAU);
  { // قوس البداية/النهاية: برجين وعارضة بيها مربعات وكتابة
    const g0 = FU.gates[0], grp = new Group(), gy = H(g0.x, g0.z); grp.position.set(g0.x, gy, g0.z); grp.rotation.y = -g0.yaw;
    const span = SF.hw + 1.4, towerM = new MeshLambertMaterial({ color: '#2A2A2E' });
    for (const sd of [-1, 1]) { const t = new Mesh(new BoxGeometry(0.8, 5.6, 0.8), towerM); t.position.set(0, 2.8, sd * span); grp.add(t); const stripe = new Mesh(new BoxGeometry(0.84, 0.5, 0.84), new MeshLambertMaterial({ color: '#FF6A13' })); stripe.position.set(0, 4.6, sd * span); grp.add(stripe); }
    const bt = canvasTex(1024, 160, (g, w, h) => { const sq = 20; for (let x = 0; x < w; x += sq) for (let y = 0; y < h; y += sq) { g.fillStyle = ((x + y) / sq) % 2 ? '#111' : '#F4F4F0'; g.fillRect(x, y, sq, sq); } g.fillStyle = '#111'; g.fillRect(150, 22, w - 300, h - 44); g.fillStyle = '#FFD23F'; g.font = `900 78px ${EMOJI}`; g.textAlign = 'center'; g.textBaseline = 'middle'; try { g.direction = 'rtl'; } catch (e) { /* */ } g.fillText('🏁 سفاري اللؤلؤ', w / 2, h / 2 + 4); });
    for (const sd of [1, -1]) { const banner = new Mesh(new PlaneGeometry(span * 2 + 0.8, 1.25), new MeshLambertMaterial({ map: bt })); banner.position.set(sd * 0.42, 5.1, 0); banner.rotation.y = sd > 0 ? Math.PI / 2 : -Math.PI / 2; grp.add(banner); }
    const beam = new Mesh(new BoxGeometry(0.8, 1.3, span * 2 + 0.8), towerM); beam.position.y = 5.1; beam.scale.set(0.98, 0.98, 1); grp.add(beam);
    const line = new Mesh(new PlaneGeometry(0.6, SF.hw * 2), new MeshLambertMaterial({ map: canvasTex(32, 256, (g, w, h) => { for (let y = 0; y < h; y += 16) for (let x = 0; x < w; x += 16) { g.fillStyle = ((x + y) / 16) % 2 ? '#111' : '#EEE'; g.fillRect(x, y, 16, 16); } }), polygonOffset: true, polygonOffsetFactor: -4 })); line.rotation.x = -Math.PI / 2; line.position.y = 0.05; grp.add(line);
    addChunk(grp, g0.x, g0.z, 1200);
  }
  FU.gates.slice(1).forEach((g, k) => { // بوابات التفتيش: رايتين طويلات (feather) برقم
    const grp = new Group(); grp.position.set(g.x, H(g.x, g.z), g.z); grp.rotation.y = -g.yaw;
    const tex = canvasTex(96, 320, (c, w, h) => { c.fillStyle = '#FF6A13'; c.fillRect(0, 0, w, h); c.fillStyle = '#FFF'; c.font = `900 70px ${FONT}`; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText(String(k + 1), w / 2, h * 0.3); c.font = `800 26px ${FONT}`; c.fillText('تفتيش', w / 2, h * 0.62); });
    for (const sd of [-1, 1]) { const p = new Mesh(new CylinderGeometry(0.04, 0.05, 3.4, 6), metal); p.position.set(0, 1.7, sd * (SF.hw + 0.9)); grp.add(p); const f = new Mesh(new PlaneGeometry(0.62, 2.1), new MeshLambertMaterial({ map: tex, side: DoubleSide })); f.position.set(0.33, 2.3, sd * (SF.hw + 0.9)); grp.add(f); }
    addChunk(grp, g.x, g.z, 900);
  });
  for (const kk of FU.kickers) { // علامات القفزة: لوحين مخطّطين على الحافّة ولوحة تحذير قبلها
    const grp = new Group(); root.add(grp);
    const stripeM = new MeshLambertMaterial({ map: canvasTex(64, 64, (g, w, h) => { for (let i = -64; i < 128; i += 16) { g.fillStyle = (i / 16) % 2 ? '#FF6A13' : '#FFFFFF'; g.beginPath(); g.moveTo(i, 0); g.lineTo(i + 16, 0); g.lineTo(i + 16 - 64, 64); g.lineTo(i - 64, 64); g.fill(); } }) });
    for (const q of [kk.l, kk.r]) { const b = new Mesh(new BoxGeometry(1.4, 0.5, 0.12), stripeM); b.position.set(q.x, H(q.x, q.z) + 0.45, q.z); b.rotation.y = -kk.yaw; grp.add(b); }
    const st = canvasTex(256, 256, (g, w, h) => { g.fillStyle = '#F4C21A'; g.save(); g.translate(w / 2, h / 2); g.rotate(Math.PI / 4); g.fillRect(-82, -82, 164, 164); g.strokeStyle = '#111'; g.lineWidth = 8; g.strokeRect(-74, -74, 148, 148); g.restore(); g.fillStyle = '#111'; g.font = `900 46px ${FONT}`; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('قفزة!', w / 2, h / 2 - 12); g.font = `700 26px ${FONT}`; g.fillText(`${kk.h} م`, w / 2, h / 2 + 34); });
    const sgn = new Mesh(new PlaneGeometry(1.1, 1.1), new MeshLambertMaterial({ map: st, transparent: true, alphaTest: 0.3, side: DoubleSide })); sgn.position.set(kk.sign.x, H(kk.sign.x, kk.sign.z) + 1.9, kk.sign.z); sgn.rotation.y = -kk.yaw + Math.PI / 2; grp.add(sgn);
    const post = new Mesh(new BoxGeometry(0.07, 1.6, 0.07), dark); post.position.set(kk.sign.x, H(kk.sign.x, kk.sign.z) + 0.8, kk.sign.z); grp.add(post);
    root.remove(grp); addChunk(grp, kk.x, kk.z, 900);
  }
  { // 🅿️ موقف السفاري: إسفلت بخطوط، كشك، ولوحة
    const pk = SF.park, grp = new Group(), y = SEA + pk.a + 0.03; grp.position.set(pk.x, y, pk.z); grp.rotation.y = -pk.rot;
    const lot = new Mesh(new PlaneGeometry(pk.w, pk.d), new MeshLambertMaterial({ map: canvasTex(512, 330, (g, w, h) => { g.fillStyle = '#4A4C4F'; g.fillRect(0, 0, w, h); noise(g, w, h, 5000, '#2F3134', '#6E7074', 0.3); g.fillStyle = '#F0EEE8'; for (let x = 20; x < w; x += 44) { g.fillRect(x, 8, 4, h * 0.36); g.fillRect(x, h - 8 - h * 0.36, 4, h * 0.36); } }), polygonOffset: true, polygonOffsetFactor: -2 }));
    lot.rotation.x = -Math.PI / 2; grp.add(lot);
    const kiosk = new Group(); kiosk.position.set(-pk.w / 2 + 3, 0, -pk.d / 2 - 2.5);
    const kb = new Mesh(new BoxGeometry(3.2, 2.4, 2.4), new MeshLambertMaterial({ color: '#E8DCC2' })); kb.position.y = 1.2; kiosk.add(kb);
    const roof = new Mesh(new ConeGeometry(2.6, 1.3, 4), new MeshLambertMaterial({ color: '#D9431C' })); roof.position.y = 3.05; roof.rotation.y = Math.PI / 4; kiosk.add(roof);
    const kt = canvasTex(512, 128, (g, w, h) => { g.fillStyle = '#111'; g.fillRect(0, 0, w, h); g.fillStyle = '#FFD23F'; g.font = `900 54px ${EMOJI}`; g.textAlign = 'center'; g.textBaseline = 'middle'; try { g.direction = 'rtl'; } catch (e) { /* */ } g.fillText('🏁 سفاري اللؤلؤ', w / 2, h / 2 + 3); });
    const ksign = new Mesh(new PlaneGeometry(3, 0.75), new MeshLambertMaterial({ map: kt })); ksign.position.set(0, 2.05, 1.22); kiosk.add(ksign);
    grp.add(kiosk);
    addChunk(grp, pk.x, pk.z, 1000);
  }

  // ---- نحوّل الأثاث لـ InstancedMesh لكل بكت
  const col = new Color();
  for (const b of buckets.values()) {
    const grp = new Group();
    for (const [kind, list] of Object.entries(b.items)) {
      const K = KIND[kind], im = new InstancedMesh(K.geo, K.mat, list.length);
      list.forEach(([x, y, z, ry, sx, sy, sz, c], i) => { o3.position.set(x, y + K.y0 * sy, z); o3.rotation.set(0, ry, 0); o3.scale.set(sx, sy, sz); o3.updateMatrix(); im.setMatrixAt(i, o3.matrix); if (c) im.setColorAt(i, col.set(c)); });
      im.instanceMatrix.needsUpdate = true; if (im.instanceColor) im.instanceColor.needsUpdate = true; im.computeBoundingSphere(); grp.add(im);
    }
    addChunk(grp, b.x, b.z, 900);
  }

  // ================================================================ كل فريم: نطفي البعيد، ونبني اللوحات القريبة
  let tick = 0;
  function update(cam) {
    if ((tick++ & 7) !== 0) return; // كل 8 فريمات يكفي
    for (const c of chunks) c.obj.visible = (c.x - cam.x) ** 2 + (c.z - cam.z) ** 2 < c.far * c.far;
    for (const l of lazy) if (!l.done && (l.x - cam.x) ** 2 + (l.z - cam.z) ** 2 < 420 * 420) { l.done = true; addChunk(l.build(), l.x, l.z, 600); }
  }
  /** للخريطة: الطرق المعبّدة (الدائري أصفر بحافّة غامقة، الفرعي أبيض، الشوارع وردي فاتح)، الجسور، ومسار السفاري */
  function drawMap(o, P, size) {
    const k = size / 1024;
    const pathOf = (pts, closed) => { o.beginPath(); pts.forEach((p, i) => { const [u, v] = P(p.x, p.z); i ? o.lineTo(u, v) : o.moveTo(u, v); }); if (closed) o.closePath(); };
    const order = ['street', 'road', 'hwy'];
    for (const cls of order) for (const r of I.pavedRoads) if (r.cls === cls) { pathOf(r.pts, r.closed); o.strokeStyle = 'rgba(40,34,28,.85)'; o.lineWidth = (cls === 'hwy' ? 6 : 4.4) * k; o.stroke(); }
    for (const cls of order) for (const r of I.pavedRoads) if (r.cls === cls) { pathOf(r.pts, r.closed); o.strokeStyle = cls === 'hwy' ? '#FFC93C' : cls === 'road' ? '#FFFFFF' : '#F7D9C9'; o.lineWidth = (cls === 'hwy' ? 3.8 : 2.4) * k; o.stroke(); }
    pathOf(SF.pts, true); o.strokeStyle = '#7A4A1E'; o.lineWidth = 3.2 * k; o.stroke(); o.setLineDash([5 * k, 4 * k]); o.strokeStyle = '#FFF'; o.lineWidth = 1.2 * k; o.stroke(); o.setLineDash([]);
  }
  return { update, drawMap, chunks };
}
