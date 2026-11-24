// 🚙 نطّة — شكل بكي الصحراء بمقاسات حقيقية (3.38 × 1.69 × 1.68 م، قاعدة 2.59 م، تاير 28 إنج):
// شاصي وقفص حماية أنابيب، بدي برتقالي، مقعدين رياضيين، دركسون، داشبورد، أبواب نص، تعليق طويل (مقصّات قدّام وذراع ورا ونوابض)،
// تايرات ترابية بجنوط بيدلوك، ضويات LED قدّام وورا، بار ضوية بالسقف، تاير احتياط، اكزوز، وعلم أمان طويل يرفرف.
// المحاور المحلية: +x قدّام، +y فوك، +z يمين. الأصل = مرجع الجسم (0.525 م فوك الگاع وهي واكفة).
import {
  Mesh, Group, Vector3, Quaternion, BufferGeometry, BoxGeometry, CylinderGeometry, SphereGeometry, TorusGeometry, LatheGeometry, PlaneGeometry,
  TubeGeometry, CatmullRomCurve3, Shape, ExtrudeGeometry, Vector2, MeshLambertMaterial, MeshPhongMaterial, MeshBasicMaterial, DoubleSide,
} from 'three';
import { TAU, paint, tf, merge, mix, hash2, canvasTex } from '../lib3d.js';
import { BUGGY } from './vehicle.js';

const ORANGE = '#F26B1D', ORANGE2 = '#D9551A', BLACK = '#1E2126', CAGE = '#24272C', SEAT = '#2B2E33', GREY = '#8A9099', ROOF = '#C9CDD2';
const box = (w, h, d, c, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0) => tf(paint(new BoxGeometry(w, h, d), c), x, y, z, rx, ry, rz);
const cylX = (r, len, c, x, y, z, seg = 12) => tf(paint(new CylinderGeometry(r, r, len, seg), c), x, y, z, 0, 0, Math.PI / 2);
/** أنبوب قفص الحماية بين نقاط (بثنيات ناعمة) */
const tube = (pts, r = 0.028, c = CAGE) => paint(new TubeGeometry(new CatmullRomCurve3(pts.map((p) => new Vector3(...p)), false, 'catmullrom', 0.05), Math.max(4, pts.length * 6), r, 7, false), c);
/** جسم من مقطع جانبي (x,y) ممدود بالعرض */
function profile(pts, width, c, z0 = 0) {
  const sh = new Shape(); pts.forEach(([x, y], i) => (i ? sh.lineTo(x, y) : sh.moveTo(x, y))); sh.closePath();
  const g = new ExtrudeGeometry(sh, { depth: width, bevelEnabled: true, bevelThickness: 0.025, bevelSize: 0.025, bevelSegments: 2, curveSegments: 4 });
  g.translate(0, 0, -width / 2 + z0); return paint(g, c);
}
/** تاير ترابي 28 إنج (قطر 0.71 م، عرض 0.26) بجنط 14 إنج بيدلوك */
function wheelGeo() {
  const R = BUGGY.R, w = 0.26, rim = 0.18;
  const prof = [[rim, -w / 2], [0.29, -w / 2 - 0.006], [0.335, -w / 2 + 0.01], [R, -w / 2 + 0.05], [R, w / 2 - 0.05], [0.335, w / 2 - 0.01], [0.29, w / 2 + 0.006], [rim, w / 2]].map(([r, y]) => new Vector2(r, y));
  const tire = paint(new LatheGeometry(prof, 30), (c, x, y, z) => mix(c, '#141517', '#26282C', Math.abs(y) / (w / 2) * 0.7));
  const parts = [tire];
  for (let i = 0; i < 24; i++) for (const row of [-1, 1]) { // دعسات التاير
    const a = (i / 24) * TAU + (row > 0 ? TAU / 48 : 0);
    parts.push(tf(paint(new BoxGeometry(0.075, 0.022, 0.1), '#18191C'), Math.cos(a) * (R + 0.008), row * 0.065, Math.sin(a) * (R + 0.008), 0, -a, 0));
  }
  // الجنط: حلقة بيدلوك ومركز وستة أذرع
  parts.push(tf(paint(new TorusGeometry(0.168, 0.016, 6, 24), '#3A3D44'), 0, w / 2 - 0.01, 0, Math.PI / 2, 0, 0), tf(paint(new TorusGeometry(0.168, 0.016, 6, 24), '#3A3D44'), 0, -w / 2 + 0.01, 0, Math.PI / 2, 0, 0));
  parts.push(paint(new CylinderGeometry(0.165, 0.165, w - 0.05, 20, 1, true), '#2A2D33'));
  parts.push(tf(paint(new CylinderGeometry(0.05, 0.06, 0.06, 10), '#9AA0A8'), 0, w / 2 - 0.02, 0));
  for (let i = 0; i < 6; i++) { const a = (i / 6) * TAU; parts.push(tf(paint(new BoxGeometry(0.11, 0.025, 0.035), '#33363D'), Math.cos(a) * 0.105, w / 2 - 0.03, Math.sin(a) * 0.105, 0, -a, 0)); }
  for (let i = 0; i < 12; i++) { const a = (i / 12) * TAU; parts.push(tf(paint(new CylinderGeometry(0.009, 0.009, 0.02, 5), '#C8CCD2'), Math.cos(a) * 0.168, w / 2 + 0.006, Math.sin(a) * 0.168)); }
  const g = merge(parts); g.rotateX(Math.PI / 2); return g; // المحور على z
}

export function makeBuggy() {
  const B = BUGGY, hl = B.WB / 2, hw = B.track / 2, rest = -0.169;
  const root = new Group(); // الموقع + الاتجاه
  const body = new Group(); root.add(body); // الجسم (يميل بالتعليق)
  body.rotation.order = 'YZX';
  const vc = new MeshPhongMaterial({ vertexColors: true, shininess: 40, specular: '#3A3A3A' });
  const P = [];
  // ---- الشاصي والأرضية
  P.push(box(2.55, 0.06, 0.86, '#2B2E33', 0, -0.14, 0), box(1.55, 0.1, 1.22, '#33363D', -0.18, -0.07, 0), box(1.1, 0.28, 0.22, BLACK, -0.06, 0.1, 0));
  for (const sz of [-1, 1]) P.push(box(1.15, 0.08, 0.12, BLACK, -0.12, -0.02, sz * 0.63)); // دعّاسات
  // ---- البدي البرتقالي: الغطاء الأمامي والخلفي والرفارف
  P.push(profile([[0.42, 0.02], [1.5, 0.04], [1.66, 0.2], [1.62, 0.4], [1.12, 0.54], [0.56, 0.62], [0.4, 0.5]], 1.12, (c, x, y) => mix(c, ORANGE2, ORANGE, y * 1.6)));
  P.push(profile([[1.5, 0.02], [1.7, 0.12], [1.66, 0.22]], 1.0, BLACK)); // صدّام قدّام
  P.push(profile([[-0.6, 0.0], [-1.6, 0.03], [-1.72, 0.28], [-1.62, 0.7], [-0.95, 0.8], [-0.62, 0.76]], 1.16, (c, x, y) => mix(c, ORANGE2, ORANGE, y * 1.4)));
  P.push(box(0.5, 0.04, 1.0, '#2A2D33', -1.25, 0.82, 0)); // شبك الجنطة
  for (let i = 0; i < 5; i++) P.push(box(0.03, 0.02, 0.9, '#1A1C20', -1.45 + i * 0.1, 0.845, 0));
  for (const sx of [1, -1]) for (const sz of [-1, 1]) { // رفارف واسعة (التعليق الطويل)
    P.push(tf(paint(new CylinderGeometry(0.52, 0.52, 0.34, 18, 1, true, Math.PI * 0.69, Math.PI * 0.62), sx > 0 ? ORANGE : ORANGE2), sx * hl, rest + 0.08, sz * (hw + 0.02), Math.PI / 2, sx > 0 ? 0 : Math.PI, 0));
  }
  // شبك اكزوز وفتحات هوا
  for (let i = 0; i < 4; i++) P.push(box(0.4, 0.015, 0.06, '#15171A', -1.1, 0.79, -0.42 + i * 0.09));
  P.push(cylX(0.05, 0.28, '#7A7F86', -1.78, 0.22, 0.32), cylX(0.06, 0.04, '#2A2A2A', -1.93, 0.22, 0.32)); // اكزوز
  // ---- القمرة: داشبورد، كونسول، مقاعد
  P.push(box(0.32, 0.26, 1.16, BLACK, 0.44, 0.47, 0), box(0.06, 0.1, 0.34, '#101214', 0.29, 0.6, -0.36));
  for (const sz of [-1, 1]) {
    const z = sz * 0.36;
    P.push(box(0.5, 0.12, 0.46, SEAT, -0.3, 0.1, z), box(0.44, 0.04, 0.2, GREY, -0.28, 0.17, z));
    P.push(box(0.13, 0.7, 0.48, SEAT, -0.6, 0.47, z, 0, 0, 0.22), box(0.04, 0.5, 0.18, GREY, -0.53, 0.5, z, 0, 0, 0.22));
    for (const b of [-1, 1]) P.push(box(0.16, 0.6, 0.06, SEAT, -0.57, 0.42, z + b * 0.22, 0, 0, 0.22)); // جوانب المقعد
    P.push(box(0.12, 0.2, 0.3, SEAT, -0.74, 0.92, z, 0, 0, 0.22)); // مسند راس
    P.push(box(0.02, 0.6, 0.05, ORANGE, -0.52, 0.5, z - 0.1, 0, 0, 0.22), box(0.02, 0.6, 0.05, ORANGE, -0.52, 0.5, z + 0.1, 0, 0, 0.22)); // حزام أمان
  }
  P.push(tf(paint(new TorusGeometry(0.09, 0.015, 6, 14, Math.PI), BLACK), 0.36, 0.66, 0.36, 0, Math.PI / 2, 0)); // مسكة الراكب
  // ---- قفص الحماية (أنابيب حديد)
  const cage = [];
  for (const sz of [-1, 1]) {
    cage.push(tube([[-0.62, 0.0, sz * 0.62], [-0.64, 0.6, sz * 0.62], [-0.67, 1.08, sz * 0.58], [-0.62, 1.15, sz * 0.5]]));
    cage.push(tube([[0.58, 0.55, sz * 0.6], [0.36, 0.86, sz * 0.58], [0.14, 1.12, sz * 0.55]]));
    cage.push(tube([[0.14, 1.12, sz * 0.55], [-0.24, 1.16, sz * 0.56], [-0.62, 1.15, sz * 0.5]]));
    cage.push(tube([[-0.66, 1.0, sz * 0.52], [-1.05, 0.88, sz * 0.5], [-1.45, 0.78, sz * 0.48]]));
    cage.push(tube([[0.5, 0.5, sz * 0.64], [-0.1, 0.62, sz * 0.66], [-0.62, 0.6, sz * 0.63]], 0.022)); // بار الباب
  }
  cage.push(tube([[0.14, 1.12, -0.55], [0.14, 1.13, 0.55]]), tube([[-0.62, 1.15, -0.5], [-0.62, 1.15, 0.5]]), tube([[-0.64, 0.74, -0.6], [-0.64, 0.74, 0.6]], 0.024));
  cage.push(tube([[1.74, 0.02, -0.52], [1.8, 0.05, -0.2], [1.8, 0.05, 0.2], [1.74, 0.02, 0.52]], 0.03, BLACK)); // بار الصدّام
  P.push(...cage);
  P.push(box(0.82, 0.03, 1.16, ROOF, -0.25, 1.165, 0), box(0.07, 0.08, 0.92, BLACK, 0.12, 1.22, 0)); // سقف ألمنيوم + بار ضوية
  for (const sz of [-1, 1]) P.push(box(0.04, 0.07, 0.12, BLACK, 0.3, 0.92, sz * 0.66)); // مرايات
  // ---- تاير احتياط على الشبك
  const spare = wheelGeo(); spare.rotateX(Math.PI / 2); spare.translate(-1.25, 0.98, 0); P.push(spare);
  P.push(box(0.04, 0.02, 0.76, '#3A3D44', -1.25, 1.12, 0));
  const shell = new Mesh(merge(P), vc); shell.castShadow = true; shell.receiveShadow = true; body.add(shell);

  // ---- الضويات (مواد مضيئة تتغير بالفرامل والريوس)
  const headM = new MeshBasicMaterial({ color: '#F4FAFF' }), tailM = new MeshPhongMaterial({ color: '#7A0A0A', emissive: '#FF1A1A', emissiveIntensity: 0.35 }), barM = new MeshBasicMaterial({ color: '#E8F2FF' });
  const heads = new Mesh(merge([box(0.05, 0.045, 0.3, '#FFFFFF', 1.645, 0.36, -0.36, 0, 0.18, 0), box(0.05, 0.045, 0.3, '#FFFFFF', 1.645, 0.36, 0.36, 0, -0.18, 0), box(0.04, 0.03, 0.12, '#FFFFFF', 1.6, 0.44, -0.42), box(0.04, 0.03, 0.12, '#FFFFFF', 1.6, 0.44, 0.42)]), headM); body.add(heads);
  const tails = new Mesh(merge([box(0.04, 0.07, 0.2, '#FFFFFF', -1.7, 0.52, -0.44), box(0.04, 0.07, 0.2, '#FFFFFF', -1.7, 0.52, 0.44)]), tailM); body.add(tails);
  const bar = new Mesh(merge([...Array(6)].map((_, i) => box(0.02, 0.04, 0.1, '#FFFFFF', 0.158, 1.22, -0.33 + i * 0.132))), barM); body.add(bar);
  const dashM = new MeshBasicMaterial({ map: canvasTex(128, 64, (g) => { g.fillStyle = '#0A1220'; g.fillRect(0, 0, 128, 64); g.fillStyle = '#5EE7FF'; g.font = '900 28px sans-serif'; g.textAlign = 'center'; g.fillText('N', 64, 42); }) });
  const dash = new Mesh(new PlaneGeometry(0.16, 0.08), dashM); dash.position.set(0.32, 0.66, -0.36); dash.rotation.set(0, -Math.PI / 2, 0); dash.rotateX(-0.5); body.add(dash);

  // ---- الدركسون (يلف ويّا التوجيه)
  const col = new Group(); col.position.set(0.08, 0.66, -0.36); col.rotation.z = -0.62; body.add(col);
  col.add(new Mesh(tf(paint(new CylinderGeometry(0.018, 0.022, 0.5, 8), '#2A2D33'), 0.25, 0, 0, 0, 0, Math.PI / 2), vc));
  const wheelSpin = new Group(); col.add(wheelSpin);
  wheelSpin.add(new Mesh(merge([tf(paint(new TorusGeometry(0.175, 0.022, 8, 28), '#15171A'), 0, 0, 0, 0, Math.PI / 2, 0), ...[0, 1, 2].map((i) => { const a = Math.PI / 2 + (i * TAU) / 3; return tf(paint(new BoxGeometry(0.03, 0.16, 0.03), '#2A2D33'), 0, Math.sin(a) * 0.085, Math.cos(a) * 0.085, -a + Math.PI / 2, 0, 0); }), tf(paint(new CylinderGeometry(0.05, 0.05, 0.04, 12), ORANGE), 0, 0, 0, 0, 0, Math.PI / 2)]), vc));

  // ---- أبواب نص (الباب اليسار يتفتح لمن تركب وتنزل)
  const doors = [];
  for (const sz of [-1, 1]) {
    const dg = new Group(); dg.position.set(0.42, 0, sz * 0.645); body.add(dg);
    const dp = merge([box(0.9, 0.46, 0.05, (c, x, y) => mix(c, ORANGE2, ORANGE, (y - 0.1) * 2.5), -0.46, 0.33, 0), box(0.9, 0.05, 0.06, BLACK, -0.46, 0.1, 0), box(0.7, 0.07, 0.055, BLACK, -0.5, 0.42, 0)]);
    const dm = new Mesh(dp, vc); dm.castShadow = true; dg.add(dm);
    const decal = new Mesh(new PlaneGeometry(0.42, 0.13), new MeshBasicMaterial({ map: canvasTex(256, 80, (g) => { g.clearRect(0, 0, 256, 80); g.fillStyle = '#FFFFFF'; g.font = '900 54px -apple-system,system-ui,sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.direction = 'rtl'; g.fillText('نطّة 🏝️', 128, 44); }), transparent: true }));
    decal.position.set(-0.46, 0.28, sz * 0.03); decal.rotation.y = sz > 0 ? 0 : Math.PI; dg.add(decal);
    doors.push(dg);
  }
  // ---- علم الأمان (عمود 2 م بعلم برتقالي يرفرف)
  const flag = new Group(); flag.position.set(-1.45, 0.78, 0.46); body.add(flag);
  flag.add(new Mesh(tf(paint(new CylinderGeometry(0.008, 0.012, 2.0, 6), '#1A1A1A'), 0, 1.0, 0), vc));
  const flagG = new PlaneGeometry(0.42, 0.26, 6, 1); flagG.translate(-0.21, 0, 0);
  const flagM = new Mesh(flagG, new MeshLambertMaterial({ color: '#FF5A1F', side: DoubleSide, emissive: '#5A1A00', emissiveIntensity: 0.3 })); flagM.position.y = 1.86; flag.add(flagM);

  // ---- التعليق والتايرات
  const susM = new MeshPhongMaterial({ color: '#2E3238', shininess: 50 }), shockM = new MeshPhongMaterial({ color: '#B9BEC6', shininess: 90, specular: '#FFFFFF' }), springM = new MeshPhongMaterial({ color: '#FF6A1A', shininess: 60 });
  const unitY = new Geo1(); // أسطوانة طولها 1 على محور y (تنمد بين نقطتين)
  const wg = wheelGeo(), tireM = new MeshPhongMaterial({ vertexColors: true, shininess: 18 });
  const coil = (() => { const pts = []; for (let i = 0; i <= 64; i++) { const t = i / 64, a = t * TAU * 7; pts.push(new Vector3(Math.cos(a) * 0.045, t - 0.5, Math.sin(a) * 0.045)); } return new TubeGeometry(new CatmullRomCurve3(pts), 96, 0.008, 5, false); })();
  const wheels = [[hl, -hw], [hl, hw], [-hl, -hw], [-hl, hw]].map(([ox, oz], i) => {
    const front = i < 2, sz = oz > 0 ? 1 : -1;
    const hub = new Group(); hub.position.set(ox, rest, oz + sz * 0.0); body.add(hub);
    const steer = new Group(); hub.add(steer); const spin = new Group(); steer.add(spin);
    const tm = new Mesh(wg, tireM); tm.castShadow = true; spin.add(tm); if (sz < 0) tm.rotation.y = Math.PI; // الجنط لبرّه
    const arms = front ? [new Mesh(unitY.g(0.022), susM), new Mesh(unitY.g(0.022), susM)] : [new Mesh(unitY.g(0.035), susM)];
    const shock = new Mesh(unitY.g(0.028), shockM), spring = new Mesh(coil, springM);
    for (const m of [...arms, shock, spring]) { m.castShadow = true; body.add(m); }
    const inner = front ? [[ox, 0.1, sz * 0.27], [ox, -0.13, sz * 0.27]] : [[-0.35, -0.05, sz * 0.42]];
    const top = front ? [ox - 0.08, 0.5, sz * 0.36] : [-0.92, 0.58, sz * 0.42];
    return { i, front, sz, ox, oz, hub, steer, spin, arms, shock, spring, inner, top };
  });
  const _a = new Vector3(), _b = new Vector3(), _d = new Vector3(), _q = new Quaternion(), UP = new Vector3(0, 1, 0);
  function between(m, a, b, scaleR = 1) { _d.subVectors(b, a); const len = _d.length(); m.position.addVectors(a, b).multiplyScalar(0.5); m.quaternion.setFromUnitVectors(UP, _d.multiplyScalar(1 / len)); m.scale.set(scaleR, len, scaleR); }
  /** يحدّث الشكل من حالة الفيزياء */
  function update(car, t, dt) {
    root.position.set(car.x, car.y, car.z); root.rotation.y = -car.yaw;
    body.rotation.set(-car.roll, 0, car.pitch);
    for (const w of wheels) {
      const pw = car.wheels[w.i], hy = -pw.d; // محور التاير تحت نقطة التثبيت
      w.hub.position.y = hy;
      w.steer.rotation.y = w.front ? -car.steer : 0;
      w.spin.rotation.z = -pw.spin;
      const hubOut = w.sz * (hw + 0.0);
      if (w.front) {
        between(w.arms[0], _a.set(...w.inner[0]), _b.set(w.ox, hy + 0.1, hubOut - w.sz * 0.1));
        between(w.arms[1], _a.set(...w.inner[1]), _b.set(w.ox, hy - 0.11, hubOut - w.sz * 0.1));
        _a.set(...w.top); _b.set(w.ox - 0.02, hy - 0.06, hubOut - w.sz * 0.2);
      } else {
        between(w.arms[0], _a.set(...w.inner[0]), _b.set(w.ox, hy, hubOut - w.sz * 0.12));
        _a.set(...w.top); _b.set(w.ox + 0.18, hy + 0.04, hubOut - w.sz * 0.2);
      }
      between(w.shock, _a, _b);
      between(w.spring, _a.clone().lerp(_b, 0.12), _a.clone().lerp(_b, 0.62), 1);
    }
    wheelSpin.rotation.x = car.steer * 4.2; // الدركسون يلف ~ 4 أضعاف التاير
    const brake = car.brake > 0.1 || car.hand && car.driven, rev = car.gear === 'R';
    tailM.emissiveIntensity = brake ? 1.6 : rev ? 1.0 : car.engine ? 0.45 : 0.12;
    headM.color.set(car.engine ? '#F4FAFF' : '#9AA0A8'); barM.color.set(car.engine ? '#E8F2FF' : '#8A9099');
    // العلم يرفرف حسب السرعة
    const sp = Math.min(1, Math.hypot(car.vx, car.vz) / 20), pa = flagG.attributes.position;
    for (let i = 0; i < pa.count; i++) { const x = pa.getX(i); pa.setZ(i, Math.sin(t * (5 + sp * 9) + x * 14) * 0.05 * (-x / 0.42) * (0.4 + sp)); }
    pa.needsUpdate = true; flagM.rotation.y = Math.sin(t * 1.3) * 0.3 * (1 - sp);
    doors[0].rotation.y = -car.door * 1.15; // الباب اليسار
  }
  return { root, body, wheels, doors, update, seat: B.seat };
}
/** أسطوانة بطول 1 على محور y بأنصاف أقطار مختلفة (مخزّنة) */
function Geo1() { const cache = {}; this.g = (r) => cache[r] || (cache[r] = new CylinderGeometry(r, r, 1, 8)); }
