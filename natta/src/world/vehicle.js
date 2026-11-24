// 🚙 نطّة — بكي الصحراء (سيارة طلعات السفاري): فيزياء سيارة حقيقية مبسّطة.
// • تعليق مستقل لكل تاير: نابض + ممتص صدمات (مشوار 50 سم)، فالجسم يميل بالتسارع والفرامل والدوران، ويطير من الطعسات وينزل.
// • محرك 120 حصان بنقل CVT: قوة محدودة بتماسك التايرات، مقاومة هوا وتدحرج (الرمل يثگل أكثر من الطريق).
// • توجيه حسب السرعة (بالسرعة العالية تقل زاوية الدركسون)، انزلاق جانبي إذا تجاوزت التماسك، فرامل يد للتفحيط.
// • المنحدرات تبطّئك أو تسحبك، الحيطان والشجر تصدّك، الماي الغميج ما تعبره، وإذا انقلبت ترجع تعدل وحدها.
// المحاور: +x شمال، +z شرق. yaw: الاتجاه (cos yaw, sin yaw). اليمين = (−sin yaw, cos yaw).
import { clamp, lerp, damp, angDiff } from '../lib3d.js';

// مقاسات حقيقية (مرجع: بكي صحراوي «سايد باي سايد» بطول 3.38 م):
export const BUGGY = {
  L: 3.38, W: 1.69, H: 1.68, WB: 2.59, track: 1.42, R: 0.356, clearance: 0.356,
  mass: 830, // 750 كغم فارغة + السايق
  hp: 120, power: 76000, // واط واصلة للتايرات (~102 حصان من 120)
  fMax: 6800, // أقصى قوة دفع بالسرعات الواطية (نيوتن)
  vmax: 31, // ~112 كم/س
  vrev: 7.5,
  droop: 0.3, bump: 0.2, // مشوار التعليق: 30 سم نزول + 20 سم صعود
  K: 15500, C: 1400, // نابض وممتص لكل تاير (~1.4 هرتز)
  Ip: 900, Ir: 300, hcg: 0.45, // عزم القصور: ميلان قدّام/ورا، يمين/يسار، وارتفاع مركز الثقل
  CdA: 1.25, // ½ρ·Cd·A
  steerMax: 0.6, // ~34° زاوية التاير
  seat: { ox: -0.22, oz: -0.36, oy: -0.47 }, // مكان السايق: يسار (المقود يسار)، الأرضية تحت مقعده
  door: { ox: -0.22, oz: -1.25 },
  rideY: 0.525, // ارتفاع مرجع الجسم فوك الگاع وهو واكف (محور التايرات + 17 سم)
};
// تماسك ومقاومة تدحرج حسب الأرض
const SURF = {
  plaza: [1.0, 0.015], path: [0.92, 0.03], pier: [0.9, 0.02], grass: [0.82, 0.045], forest: [0.78, 0.05], sand: [0.62, 0.085],
  rock: [0.88, 0.035], trail: [0.9, 0.03], snow: [0.5, 0.06], mud: [0.55, 0.11], water: [0.5, 0.14],
  asphalt: [1.02, 0.013], pavers: [0.95, 0.017], cobble: [0.86, 0.024], // معبّد
  track: [0.74, 0.05], dune: [0.6, 0.095], // 🏁 رمل مرصوص بالمسار، ورمل طري بالكثبان
};
/** أرض صلبة (بلا غبار، صوت تاير ناعم) */
export const HARD = new Set(['plaza', 'asphalt', 'pavers', 'cobble', 'pier']);
const g0 = 9.81;

export function createBuggy(G, spawn) {
  const B = BUGGY, hl = B.WB / 2, hw = B.track / 2;
  const wheels = [[hl, -hw], [hl, hw], [-hl, -hw], [-hl, hw]].map(([ox, oz], i) => ({ i, ox, oz, front: i < 2, d: 0.17, dv: 0, q: 0, F: 0, contact: false, g: 0, kind: 'grass', spin: 0, x: 0, z: 0 }));
  const car = {
    x: spawn.x, z: spawn.z, yaw: spawn.yaw || 0, y: 0, pitch: 0, roll: 0, vx: 0, vz: 0, vy: 0, wp: 0, wr: 0, yawRate: 0,
    steer: 0, throttle: 0, brake: 0, hand: false, rpm: 0, gear: 'N', vf: 0, vl: 0, slip: 0, air: false, airT: 0, flipT: 0,
    depth: 0, engine: false, driven: false, sleep: true, wheels, kind: 'grass', mu: 0.8, crashT: 0, deepT: 0, landV: 0, horn: false,
    home: { x: spawn.x, z: spawn.z, yaw: spawn.yaw || 0 }, door: 0,
  };
  const ev = [];
  function place(x, z, yaw) {
    Object.assign(car, { x, z, yaw, vx: 0, vz: 0, vy: 0, wp: 0, wr: 0, yawRate: 0, pitch: 0, roll: 0, air: false, flipT: 0, steer: 0 });
    sampleGround(); const gm = (wheels[0].g + wheels[1].g + wheels[2].g + wheels[3].g) / 4;
    car.y = gm + B.rideY;
    car.pitch = Math.atan(((wheels[0].g + wheels[1].g) - (wheels[2].g + wheels[3].g)) / 2 / B.WB);
    car.roll = Math.atan(((wheels[1].g + wheels[3].g) - (wheels[0].g + wheels[2].g)) / 2 / B.track);
    for (const w of wheels) { w.d = 0.17; w.dv = 0; }
    car.sleep = true;
  }
  const fx = () => Math.cos(car.yaw), fz = () => Math.sin(car.yaw);
  function sampleGround() {
    const c = Math.cos(car.yaw), s = Math.sin(car.yaw);
    for (const w of wheels) {
      w.x = car.x + c * w.ox - s * w.oz; w.z = car.z + s * w.ox + c * w.oz;
      w.g = groundY(w.x, w.z);
    }
  }
  /** ارتفاع الأرض تحت التاير: الأرض أو سطح جسر/رصيف إذا السيارة فوكه (مو جوّه) */
  function groundY(x, z) {
    const g = G.H(x, z), pl = G.platAt ? G.platAt(x, z) : null;
    return pl && pl.y > g && pl.y < car.y + 0.9 ? pl.y : g;
  }
  /** نوع الأرض تحت السيارة (كل 6 فريمات يكفي) */
  let kindT = 0;
  function sampleKind() {
    const gk = G.groundKind ? G.groundKind(car.x, car.z, car.y - B.rideY) : 'grass';
    const k = typeof gk === 'string' ? gk : (gk && gk.kind) || 'grass';
    car.kind = SURF[k] ? k : 'grass';
    const gy = groundY(car.x, car.z), w = G.water(car.x, car.z, gy + 0.05); car.depth = w ? Math.max(0, w.level - gy) : 0;
    if (car.depth > 0.12) car.kind = 'water';
  }
  /** 🧭 خطوة فيزياء (dt ثابت 1/60، مقسومة لنصّين حتى النوابض تبقى ثابتة) */
  function step(dt, inp) {
    if (car.driven) {
      car.engine = true;
      const ty = clamp(inp.ty || 0, -1, 1), sx = clamp(inp.sx || 0, -1, 1);
      // دعسة البنزين لقدّام، ولورا: فرامل، وإذا وكفت = ريوس
      if (ty > 0.05) { car.throttle = ty; car.brake = car.vf < -0.6 ? ty : 0; car.gear = car.vf < -0.6 ? 'R' : 'D'; }
      else if (ty < -0.05) { if (car.vf > 0.6) { car.brake = -ty; car.throttle = 0; } else { car.brake = 0; car.throttle = ty; car.gear = 'R'; } }
      else { car.throttle = 0; car.brake = 0; if (Math.abs(car.vf) < 0.3) car.gear = 'N'; }
      car.hand = !!inp.hand;
      const vabs = Math.abs(car.vf), dmax = B.steerMax / (1 + vabs / 13);
      car.steer = damp(car.steer, sx * dmax, Math.abs(sx * dmax) > Math.abs(car.steer) ? 7 : 9, dt);
    } else { car.throttle = 0; car.brake = car.engine ? 0 : 1; car.hand = !car.engine; car.steer = damp(car.steer, 0, 4, dt); if (Math.abs(car.vf) < 0.3) car.gear = 'N'; }
    const moving = Math.hypot(car.vx, car.vz) > 0.05 || Math.abs(car.vy) > 0.05 || car.air || Math.abs(car.wp) > 0.02 || Math.abs(car.wr) > 0.02;
    if (!car.driven && !moving && car.sleep) { car.rpm = car.engine ? damp(car.rpm, 1100, 3, dt) : 0; return ev.splice(0); }
    car.sleep = false;
    if ((kindT -= dt) <= 0) { kindT = 0.1; sampleKind(); }
    for (let k = 0; k < 2; k++) sub(dt / 2);
    if (car.landV > 3.5) ev.push(['carLand', +car.landV.toFixed(1)]); car.landV = 0;
    // الدورة (صوت المحرك): CVT يخلي الدورة عالية وانت دايس، وتنزل للخمول لمن تشيل رجلك
    const vabs = Math.abs(car.vf), want = !car.engine ? 0 : car.throttle !== 0 ? (car.air ? 8200 : clamp(3600 + 3800 * (vabs / B.vmax) + 1400 * Math.abs(car.throttle), 3600, 8000)) : clamp(1150 + vabs * 95, 1150, 3600);
    car.rpm = damp(car.rpm, want, want > car.rpm ? 5 : 2.6, dt);
    if (!car.driven && !car.air && Math.hypot(car.vx, car.vz) < 0.05 && Math.abs(car.vy) < 0.05) car.sleep = true;
    return ev.splice(0);
  }
  function sub(dt) {
    sampleGround();
    const c = Math.cos(car.yaw), s = Math.sin(car.yaw), sp = Math.sin(car.pitch), sr = Math.sin(car.roll);
    // ---- التعليق: كل تاير نابض بين الجسم والگاع
    let Fsum = 0, Mp = 0, Mr = 0, nc = 0;
    for (const w of wheels) {
      const attach = car.y + w.ox * sp + w.oz * sr; // نقطة تثبيت التعليق بالجسم
      let d = attach - (w.g + B.R); // شگد الجسم فوك محور التاير
      const pd = w.d;
      if (d >= B.droop) { w.contact = false; w.d = damp(w.d, B.droop, 14, dt); w.F = 0; w.q = 0; continue; }
      w.contact = true; nc++;
      w.d = d; w.dv = (d - pd) / dt;
      const q = B.droop - d; w.q = q;
      let F = B.K * q - B.C * w.dv;
      if (d < -B.bump) F += 90000 * (-B.bump - d) - 4000 * w.dv; // صدّام التعليق
      F = Math.max(0, F); w.F = F;
      Fsum += F; Mp += F * w.ox; Mr += F * w.oz;
    }
    const wasAir = car.air; car.air = nc === 0; car.airT = car.air ? car.airT + dt : 0;
    // ---- القوى الأفقية
    const f = [c, s], r = [-s, c];
    let vf = car.vx * f[0] + car.vz * f[1], vl = car.vx * r[0] + car.vz * r[1];
    const [mu0, crr0] = SURF[car.kind] || SURF.grass, mu = mu0 * (car.depth > 0.12 ? 0.75 : 1);
    car.mu = mu;
    const N = Math.max(Fsum, 0), m = B.mass, grip = nc / 4;
    let aF = 0, aL = 0;
    if (nc > 0) {
      // ميلان الگاع (من التايرات الأربعة) يسحبك لتحت
      const gF = ((wheels[0].g + wheels[1].g) - (wheels[2].g + wheels[3].g)) / 2 / B.WB, gR = ((wheels[1].g + wheels[3].g) - (wheels[0].g + wheels[2].g)) / 2 / B.track;
      const nn = Math.sqrt(1 + gF * gF + gR * gR);
      const aSlope = -(g0 * gF / nn) * grip; aF += aSlope; aL -= (g0 * gR / nn) * grip;
      const tracMax = (mu * N) / nn; // أقصى قوة تماسك (على المنحدر الضغط على التايرات أقل)
      const vf0 = vf;
      // محرك
      if (car.throttle > 0 && car.engine) { const v = Math.max(Math.abs(vf), 1.5), Fe = Math.min(B.fMax, B.power / v) * car.throttle * (vf > B.vmax ? 0 : 1); aF += Math.min(Fe, tracMax) / m; }
      else if (car.throttle < 0 && car.engine) { if (vf > -B.vrev) aF += Math.max(-3200 * -car.throttle, -tracMax) / m * 1; }
      // فرامل وفرامل يد
      const sgn = vf > 0 ? 1 : -1;
      let Fb = car.brake * 0.92 * tracMax + (car.hand ? 0.45 * tracMax * 0.5 : 0);
      if (!car.driven && !car.engine) Fb = Math.max(Fb, tracMax); // واكفة: هاندبريك
      // تدحرج + هوا + ماي
      const Fr = crr0 * N + (car.depth > 0.12 ? 900 * Math.min(car.depth, 0.8) * Math.abs(vf) : 0) + (car.driven && car.throttle === 0 && car.brake === 0 ? m * 0.9 : 0); // + كبح المحرك (CVT) لمن تشيل رجلك
      const dvb = ((Fb + Fr) / m) * dt;
      vf += aF * dt; vf -= (B.CdA * vf * Math.abs(vf) / m) * dt;
      if (Math.abs(vf) <= dvb && (car.throttle === 0 || !car.engine)) vf = 0; else vf -= sgn * Math.min(dvb, Math.abs(vf));
      // جانبي: التايرات تلغي الانزلاق لحد حد التماسك (فرامل اليد تقلّل تماسك الورا)
      vl += aL * dt;
      const latMax = (mu * g0 * grip * (car.hand ? 0.55 : 1) * dt) / nn;
      const vlBefore = vl;
      vl -= clamp(vl, -latMax, latMax);
      car.slip = Math.abs(vl) * 0.8 + Math.abs(vlBefore) * 0.2 + (car.throttle > 0.6 && Math.abs(vf) < 5 && !HARD.has(car.kind) ? (1 - Math.abs(vf) / 5) * 2.5 * car.throttle : 0) + (car.hand && Math.abs(vf) > 3 ? 1.5 : 0) + (car.brake > 0.8 && Math.abs(vf) > 8 ? 1.2 : 0);
      // الاتجاه: الدراجة المبسطة + حد التماسك (بالسرعة العالية ما يلف حاد = أندرستير)
      let wt = vf * Math.tan(car.steer) / B.WB;
      const wLim = (0.96 * mu * g0 * Math.max(grip, 0.5)) / (Math.max(Math.abs(vf), 2) * nn); // ما يطلب أكثر من تماسك التايرات → ما يتزحلق جانبي بلا سبب
      if (!car.hand) wt = clamp(wt, -wLim, wLim) + clamp(vl / Math.max(Math.abs(vf), 3), -0.7, 0.7) * 2.6 * Math.sign(vf || 1); else wt = wt * 1.7 + car.steer * Math.sign(vf) * 0.9; // بلا فرامل يد: الجسم يرجع يتعدّل ويّا اتجاه الحركة (يطلع من الزحلقة)
      car.yawRate = damp(car.yawRate, wt, (car.hand ? 3.5 : 9) * grip, dt);
      // لحظة الجسم من التسارع: يرفع راسه لمن تدوس، ويدنّك لمن تفرمل، ويميل بالدوران
      const along = (vf - vf0) / dt - aSlope, alat = vf * car.yawRate;
      Mp += m * along * B.hcg; Mr += m * alat * B.hcg;
    } else { car.yawRate = damp(car.yawRate, 0, 0.4, dt); car.slip = 0; vf -= (B.CdA * vf * Math.abs(vf) / m) * dt; }
    car.vf = vf; car.vl = vl;
    car.vx = f[0] * vf + r[0] * vl; car.vz = f[1] * vf + r[1] * vl;
    // ---- عمودي وميلان
    car.vy += (Fsum / m - g0) * dt;
    car.wp += (Mp * Math.cos(car.pitch) / B.Ip) * dt; car.wr += (Mr * Math.cos(car.roll) / B.Ir) * dt;
    if (car.air) { car.wp *= 1 - 0.6 * dt; car.wr *= 1 - 0.6 * dt; car.wp += -car.pitch * 0.9 * dt; car.wr += -car.roll * 0.9 * dt; } // بالهوا: يعدل شوية
    else { car.wp *= 1 - 1.2 * dt; car.wr *= 1 - 1.2 * dt; }
    // ---- تحريك
    const ox = car.x, oz = car.z, ovy = car.vy;
    car.x += car.vx * dt; car.z += car.vz * dt; car.y += car.vy * dt;
    car.yaw += car.yawRate * dt; car.pitch += car.wp * dt; car.roll += car.wr * dt;
    // ---- ماي غميج: ما تعبره (المحرك يغرگ)
    {
      const gy = groundY(car.x, car.z), hd = G.water(car.x, car.z, gy + 0.05), dd = hd ? hd.level - gy : 0;
      // يرجع إذا الخطوة تغمّگه أكثر من 75 سم (ويكدر يطلع لمكان أضحل)
      if (dd > 0.75 && dd > car.depth) { car.x = ox; car.z = oz; const vin = car.vx * car.vx + car.vz * car.vz; car.vx *= -0.2; car.vz *= -0.2; if (vin > 4 && car.deepT <= 0) { ev.push(['deepWater']); car.deepT = 3; } }
    }
    car.deepT -= dt;
    // ---- تصادم: ثلاث دوائر على طول السيارة ضد الشجر والصخر والبيوت
    collide(dt);
    // ---- الصدّام قدّام/ورا بحايط تراب (جرف أعلى من الجسم)
    for (const sd of [1, -1]) {
      const bx = car.x + Math.cos(car.yaw) * sd * (B.L / 2 + 0.05), bz = car.z + Math.sin(car.yaw) * sd * (B.L / 2 + 0.05), gb = G.H(bx, bz), bottom = car.y - 0.17 + sd * (B.L / 2) * Math.sin(car.pitch);
      if (gb > bottom + 0.42 && car.vf * sd > 0) { const v = Math.abs(car.vf); car.x -= Math.cos(car.yaw) * sd * Math.min(0.2, v * dt * 2); car.z -= Math.sin(car.yaw) * sd * Math.min(0.2, v * dt * 2); bump(v, -Math.cos(car.yaw) * sd, -Math.sin(car.yaw) * sd); }
    }
    // ---- ما ينزل الجسم جوه الگاع
    const gc = G.H(car.x, car.z);
    if (car.y < gc + 0.16) { car.y = gc + 0.16; if (car.vy < 0) { car.landV = Math.max(car.landV, -car.vy); car.vy = 0; } } // الجسم لزم الگاع
    if (wasAir && !car.air) car.landV = Math.max(car.landV, -ovy);
    // ---- انقلاب: إذا مال هواية ووكف، يرجع يعدل وحده
    const flipped = Math.abs(car.roll) > 1.15 || Math.abs(car.pitch) > 1.2;
    car.pitch = clamp(car.pitch, -1.5, 1.5); car.roll = clamp(car.roll, -1.6, 1.6);
    if (flipped && !car.air) { car.flipT += dt; if (car.flipT > 2.2) { ev.push(['carFlip']); place(car.x, car.z, car.yaw); car.sleep = false; } } else car.flipT = 0;
    for (const w of wheels) { if (w.contact) w.spin += (vf / B.R) * dt; else if (car.throttle > 0) w.spin += 40 * car.throttle * dt; }
  }
  function bump(v, nx, nz) {
    // نشيل الحركة باتجاه الحايط + شوية ارتداد
    const vn = car.vx * nx + car.vz * nz;
    if (vn < 0) { car.vx -= 1.2 * vn * nx; car.vz -= 1.2 * vn * nz; }
    const vfNew = car.vx * Math.cos(car.yaw) + car.vz * Math.sin(car.yaw); car.vf = vfNew;
    if (-vn > 3.5 && car.crashT <= 0) { ev.push(['carCrash', +(-vn).toFixed(1)]); car.crashT = 0.6; }
  }
  const circles = [1.05, 0, -1.05];
  function collide(dt) {
    car.crashT -= dt;
    for (let it = 0; it < 2; it++) {
      let bx = 0, bz = 0, bl = 0, bo = 0;
      for (const o of circles) {
        const cx = car.x + Math.cos(car.yaw) * o, cz = car.z + Math.sin(car.yaw) * o;
        const [px, pz] = G.collide(cx, cz, 0.86);
        const dx = px - cx, dz = pz - cz, l = Math.hypot(dx, dz);
        if (l > bl) { bl = l; bx = dx; bz = dz; bo = o; }
      }
      if (bl < 1e-4) return;
      car.x += bx; car.z += bz;
      bump(Math.hypot(car.vx, car.vz), bx / bl, bz / bl);
      car.yawRate = car.yawRate * 0.6 + (bo ? -Math.sign(bo) * ((bz * Math.cos(car.yaw) - bx * Math.sin(car.yaw)) / bl) * Math.min(1.2, Math.abs(car.vf) * 0.08) : 0); // ضربة بالزاوية تلفّها
    }
  }
  /** مكان السايق بالعالم (يتحرك ويّا ميلان الجسم) */
  function seatWorld(local = B.seat) {
    const c = Math.cos(car.yaw), s = Math.sin(car.yaw), sp = Math.sin(car.pitch), sr = Math.sin(car.roll);
    return { x: car.x + c * local.ox - s * local.oz, z: car.z + s * local.ox + c * local.oz, y: car.y + (local.oy || 0) + local.ox * sp + local.oz * sr };
  }
  place(spawn.x, spawn.z, spawn.yaw || 0);
  return { car, step, place, seatWorld, B };
}
