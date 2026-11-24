// 🚶 نطّة — حركة البطل الإنسان: دورة مشي وركض مأخوذة من منحنيات مشية الإنسان الحقيقية (الفخذ، الركبة، القدم)،
// الحوض يصعد وينزل حسب الرجل اللي واكفة عالگاع، الإيدين عكس الرجلين، والجذع يلف عكس الحوض.
// وفوكها: نطة، هبوط، تسلّل، سباحة، تسلّق بالحبل، حبل منزلق، صيد، غيبة، ومظلة.
import { TAU, clamp, lerp, smooth, damp, dampAngle, angDiff, BODY } from '../lib3d.js';

// دورة رجل وحدة (10 نقاط متساوية)، 0 = كعبها يلمس الگاع. th: الفخذ لقدّام (راديان)، kn: ثني الركبة، ft: القدم (+ = الأصابع لفوك)
const WALK = {
  th: [0.36, 0.28, 0.15, 0.02, -0.12, -0.24, -0.2, 0.02, 0.29, 0.4],
  kn: [0.05, 0.24, 0.28, 0.14, 0.08, 0.14, 0.58, 1.05, 0.68, 0.16],
  ft: [0.22, 0.0, 0.0, 0.0, -0.06, -0.28, -0.62, -0.22, 0.06, 0.2],
};
const RUN = { // وقفة قصيرة (~35٪) وطيران، والركبة تنثني هواية بالرجعة
  th: [0.42, 0.22, -0.02, -0.3, -0.5, -0.36, 0.06, 0.52, 0.8, 0.66],
  kn: [0.32, 0.56, 0.48, 0.36, 0.5, 1.42, 1.95, 1.7, 0.9, 0.42],
  ft: [0.12, 0.0, -0.08, -0.48, -0.8, -0.4, 0.0, 0.2, 0.24, 0.18],
};
/** عيّنة ناعمة (Catmull-Rom) من منحنى دوري */
function cyc(a, u) {
  const n = a.length, x = (((u % 1) + 1) % 1) * n, i = Math.floor(x), f = x - i;
  const p0 = a[(i - 1 + n) % n], p1 = a[i % n], p2 = a[(i + 1) % n], p3 = a[(i + 2) % n];
  return 0.5 * (2 * p1 + (-p0 + p2) * f + (2 * p0 - 5 * p1 + 4 * p2 - p3) * f * f + (-p0 + 3 * p1 - 3 * p2 + p3) * f * f * f);
}
const KEYS = ['bx', 'bz', 'by', 'px', 'py', 'pry', 'prz', 'sx', 'sy', 'sz', 'nx', 'ny',
  'Lsx', 'Lsz', 'Lsy', 'Le', 'Rsx', 'Rsz', 'Rsy', 'Re', 'Lhx', 'Lhz', 'Lk', 'La', 'Rhx', 'Rhz', 'Rk', 'Ra'];
const ANG = new Set(['Lsx', 'Rsx']); // الكتف يلف دورة كاملة بالسباحة
/** امتداد الرجل تحت الورك (حتى يبقى كعب الرجل الواكفة عالگاع) */
const ext = (th, kn, ft) => BODY.thigh * Math.cos(th) + BODY.shin * Math.cos(kn - th) + BODY.ankle + (ft < 0 ? 0.13 * Math.sin(-ft) : 0);

export function createHeroAnimator() {
  const C = {}, T = {};
  for (const k of KEYS) { C[k] = 0; T[k] = 0; }
  C.py = T.py = BODY.hip;
  const st = { lookT: 2, lookYaw: 0, lastFace: null, turn: 0, inited: false };

  function setLeg(side, th, kn, ft, abd = 0) { T[side + 'hx'] = th; T[side + 'k'] = kn; T[side + 'a'] = -ft + th - kn; T[side + 'hz'] = abd; return ext(th, kn, ft); }
  function setArm(side, flex, abd, el, tw = 0) { T[side + 'sx'] = flex; T[side + 'sz'] = abd; T[side + 'e'] = el; T[side + 'sy'] = tw; }
  function base() { for (const k of KEYS) T[k] = 0; T.py = BODY.hip; }

  /** يحسب الوضعية المطلوبة حسب حالة البطل */
  function targets(e, S, t, dt, look) {
    base();
    const v = e.mode === 'walk' && !e.air && !e.swim ? e.speed : 0;
    const faceRate = st.lastFace == null ? 0 : angDiff(st.lastFace, e.face) / Math.max(dt, 1e-3); st.lastFace = e.face;
    st.turn = damp(st.turn, clamp(faceRate, -4, 4), 6, dt);
    let rk = 0;
    if (e.mode === 'faint') {
      const k = Math.min(1, e.faintT * 2.6);
      T.bx = -1.47 * k; T.by = -0.86 * k; T.sx = 0.05; T.nx = 0.15 * k;
      setLeg('L', 0.05, 0.15, 0.1, 0.16); setLeg('R', 0.0, 0.25, 0.1, 0.12);
      setArm('L', 0.2, 1.15 * k + 0.1, 0.3); setArm('R', 0.1, 0.9 * k + 0.1, 0.5);
      return;
    }
    if (e.mode === 'zip' && S.zip) { // معلّك: الإيدين فوك الراس ماسكة المقبض، الرجلين مطويات شوية ويتمرجح
      const sp = S.zip.v || 0;
      T.bx = -0.05 - 0.12 * smooth(4, 27, sp) + 0.05 * Math.sin(t * 2.3); T.bz = 0.03 * Math.sin(t * 1.7);
      setArm('L', 2.92, 0.12, 0.18); setArm('R', 2.92, 0.12, 0.18);
      T.py = BODY.hip - 0.02; setLeg('L', 0.62 + 0.08 * Math.sin(t * 2), 0.85, 0.2); setLeg('R', 0.48 + 0.08 * Math.sin(t * 2 + 1), 0.7, 0.2);
      T.sx = 0.06; T.nx = -0.15;
      return;
    }
    if (e.mode === 'climb' && S.climbing) { // تسلّق بالحبل: إيد فوك إيد، ورجل تدفع بالجرف
      const cp = S.climbing.t * 3.4, a = Math.sin(cp), b = Math.sin(cp + 1.6);
      T.bx = -0.2; T.sx = 0.12; T.nx = -0.35; T.py = BODY.hip - 0.12;
      setArm('L', 2.45 + 0.38 * a, 0.22, 0.55 - 0.42 * a); setArm('R', 2.45 - 0.38 * a, 0.22, 0.55 + 0.42 * a);
      setLeg('L', 0.85 + 0.38 * b, 1.25 - 0.38 * b, 0.45, 0.1); setLeg('R', 0.85 - 0.38 * b, 1.25 + 0.38 * b, 0.45, 0.1);
      return;
    }
    if (e.mode === 'fish') { // واكف وماسك السنارة بالإيدين
      const pull = S.fishing ? smooth(S.fishing.bite - 0.6, S.fishing.bite, S.fishing.t) : 0, br = Math.sin(t * 1.6) * 0.012;
      const yl = setLeg('L', 0.14, 0.12, 0.0, 0.05), yr = setLeg('R', -0.12, 0.08, 0.0, 0.07);
      T.py = Math.max(yl, yr) - 0.005; T.pry = 0.1; T.sy = -0.18; T.sx = 0.06 - pull * 0.2 + br; T.nx = 0.18;
      setArm('R', 0.5 + pull * 0.5, -0.12, 1.25 - pull * 0.4); setArm('L', 0.82 + pull * 0.45, -0.2, 0.78 - pull * 0.3);
      return;
    }
    if (e.mode === 'glide') { setArm('L', 2.6, 0.45, 0.4); setArm('R', 2.6, 0.45, 0.4); setLeg('L', 0.25, 0.4, 0.15); setLeg('R', 0.15, 0.3, 0.15); return; }
    if (e.mode === 'lift' || e.mode === 'carry') { setArm('L', 2.2 + Math.sin(t * 12) * 0.5, 1.2, 0.6); setArm('R', 2.0 + Math.sin(t * 11 + 1) * 0.5, 1.2, 0.6); setLeg('L', 0.5 + Math.sin(t * 9) * 0.4, 0.8, 0.2); setLeg('R', 0.3 + Math.sin(t * 9 + 2) * 0.4, 0.9, 0.2); return; }
    if (e.swim) { // 🏊 سباحة حرة إذا تتحرك، وتطفو (تحرّك إيديك ورجليك) إذا واكف
      const sw = smooth(0.12, 0.6, e.speed), a = e.hopPh || 0;
      T.bx = lerp(0.12, 1.32, sw); T.by = lerp(-0.8, -0.42, sw); T.nx = lerp(0.05, -0.75, sw);
      for (const [s, o] of [['L', 0], ['R', Math.PI]]) {
        const ca = a + o, tr = Math.sin(t * 2.6 + o);
        T[s + 'sx'] = lerp(0.45 + 0.25 * tr, -(Math.PI + ca), sw); T[s + 'sz'] = lerp(1.15, 0.15, sw); T[s + 'e'] = lerp(0.65, 1.1 * Math.max(0, Math.sin(ca)), sw);
        const kick = Math.sin(a * 2.4 + o);
        const th = lerp(0.5 + 0.3 * Math.sin(t * 2.6 + o), 0.22 * kick, sw), kn = lerp(0.95 + 0.4 * Math.sin(t * 2.6 + o + 1), 0.28 + 0.22 * Math.sin(a * 2.4 + o + 1), sw);
        setLeg(s, th, kn, lerp(-0.2, -0.6, sw), 0.06);
      }
      T.sy = 0.15 * Math.sin(a) * sw; T.pry = -0.1 * Math.sin(a) * sw;
      return;
    }
    if (e.air && e.mode === 'walk') { // 🦘 نطة: الركبة تنطوي بالصعود، والرجلين تنمد للهبوط، والإيدين للتوازن
      const dn = smooth(0.6, -1.6, e.vy), fall = smooth(-5.5, -8.5, e.vy);
      setLeg('L', lerp(0.78, 0.38, dn), lerp(1.15, 0.38, dn), 0.1); setLeg('R', lerp(0.08, 0.14, dn), lerp(0.62, 0.28, dn), lerp(-0.4, 0.1, dn));
      setArm('L', lerp(1.25, 0.45, dn), lerp(0.2, 0.85, dn), lerp(0.6, 0.35, dn)); setArm('R', lerp(0.95, 0.35, dn), lerp(0.2, 0.85, dn), lerp(0.6, 0.35, dn));
      T.sx = lerp(0.12, 0.04, dn); T.py = BODY.hip;
      if (fall > 0) { // طيحة طويلة: يرفرف
        for (const [s, o] of [['L', 0], ['R', 2]]) { T[s + 'sz'] = lerp(T[s + 'sz'], 1.7 + 0.45 * Math.sin(t * 13 + o), fall); T[s + 'sx'] = lerp(T[s + 'sx'], 0.6 * Math.sin(t * 11 + o), fall); }
        setLeg('L', lerp(T.Lhx, 0.45 + 0.4 * Math.sin(t * 10), fall), 0.6, 0); setLeg('R', lerp(T.Rhx, 0.45 + 0.4 * Math.sin(t * 10 + 3), fall), 0.7, 0);
      }
      return;
    }
    // 🚶 على الگاع: وكفة ← مشي ← ركض
    const gw = smooth(0.12, 0.55, v), amp = lerp(0.5, 1, smooth(0.45, 1.35, v)) * (1 + 0.16 * smooth(4.7, 6.3, v)); rk = smooth(2.0, 3.6, v);
    const spr = smooth(4.7, 6.3, v); // ركض سريع: الركبة تصعد أكثر والجسم يميل أكثر
    const sn = e.sneak ? 1 : 0, u = (e.hopPh || 0) / TAU, land = clamp((e.landT || 0) / 0.25, 0, 1), stun = clamp((e.stun || 0) / 0.9, 0, 1);
    const leg = (uu) => ({ th: lerp(cyc(WALK.th, uu), cyc(RUN.th, uu), rk) * amp * gw, kn: lerp(cyc(WALK.kn, uu), cyc(RUN.kn, uu), rk) * lerp(0.8, 1, amp) * gw, ft: lerp(cyc(WALK.ft, uu), cyc(RUN.ft, uu), rk) * gw });
    const L = leg(u), R = leg(u + 0.5);
    const idle = 1 - gw, sway = Math.sin(t * 0.45);
    L.th += idle * 0.035; R.th -= idle * 0.03; L.kn += idle * (0.05 + 0.04 * Math.max(0, -sway)); R.kn += idle * (0.07 + 0.05 * Math.max(0, sway));
    for (const q of [L, R]) { q.th += sn * 0.34 + land * 0.48; q.kn += sn * 0.6 + land * 1.0; q.ft *= 1 - land; }
    const eL = setLeg('L', L.th, L.kn, L.ft, 0.025 + idle * 0.03), eR = setLeg('R', R.th, R.kn, R.ft, 0.025 + idle * 0.03);
    const flight = rk * 0.045 * Math.pow(Math.max(0, Math.cos(TAU * 2 * (u - 0.43))), 2);
    T.py = Math.max(eL, eR) + flight - 0.004;
    T.prz = (lerp(0.045, 0.03, rk) * Math.sin(TAU * u)) * gw + idle * 0.02 * sway; T.px = 0.016 * Math.sin(TAU * u) * gw * (1 - rk) - idle * 0.012 * sway;
    T.pry = -0.13 * (L.th - R.th) * gw; T.sy = -1.7 * T.pry;
    const breath = Math.sin(t * 1.65) * 0.012 * idle;
    T.sx = 0.03 * gw + 0.13 * rk + 0.07 * spr + sn * 0.32 + land * 0.3 + breath - stun * 0.28;
    T.sz = -T.prz * 0.7;
    T.bz = clamp(-st.turn * v * 0.018, -0.2, 0.2);
    // الإيدين: عكس الرجل المقابلة، وبالركض الكوع منطوي ~90°
    const armK = lerp(0.85, 0.62, rk) + 0.18 * spr;
    for (const [s, opp] of [['L', R], ['R', L]]) {
      const sw = armK * opp.th, fl = sw + rk * 0.02 + sn * 0.25 + land * 0.5 + stun * 1.5 + idle * 0.03;
      setArm(s, fl, lerp(0.09, 0.13, rk) + idle * 0.02, lerp(0.2 + 0.32 * Math.max(0, sw), 1.5 + 0.35 * sw, rk) + sn * 0.5 + stun * 1.6 + idle * 0.08, 0);
    }
    if (S.vq && S.vq.caught && !S.vq.delivered) setArm('R', -0.12 + T.Rsx * 0.25, 0.14, 0.5); // ماسك حبل الغزال
    // الراس: يثبت ويباوع (على أبو جاسم، الغزال، اللوحة، أو يتلفت إذا واكف)
    st.lookT -= dt;
    let ly = 0;
    if (look) ly = clamp(angDiff(Math.PI / 2 - e.face, look) , -1.25, 1.25);
    else if (idle > 0.8) { if (st.lookT < 0) { st.lookT = 2.5 + Math.random() * 3.5; st.lookYaw = Math.random() < 0.45 ? 0 : (Math.random() - 0.5) * 1.6; } ly = st.lookYaw; }
    T.ny = -(T.pry + T.sy) + ly * 0.75; T.sy += ly * 0.25;
    T.nx = -T.sx * 0.65 + stun * -0.2;
  }

  /** يطبّق الوضعية على الهيكل (بتنعيم حتى الانتقال بين الحالات يكون طبيعي) */
  function apply(hm, dt, fast) {
    const k = fast ? 22 : 12;
    for (const key of KEYS) if (!Number.isFinite(T[key])) T[key] = key === 'py' ? BODY.hip : 0;
    for (const key of KEYS) C[key] = ANG.has(key) ? dampAngle(C[key], T[key], k, dt) : damp(C[key], T[key], key === 'py' || key === 'by' ? 18 : k, dt);
    hm.body.rotation.set(C.bx, 0, C.bz);
    hm.pelvis.position.set(C.px, C.py, 0); hm.pelvis.rotation.set(0, C.pry, C.prz);
    hm.spine.rotation.set(C.sx, C.sy, C.sz);
    hm.neck.rotation.set(C.nx * 0.4, C.ny * 0.4, 0); hm.head.rotation.set(C.nx * 0.6, C.ny * 0.6, 0);
    for (const a of hm.arms) { const s = a.s > 0 ? 'L' : 'R'; a.sh.rotation.set(-C[s + 'sx'], a.s * C[s + 'sy'], a.s * C[s + 'sz']); a.el.rotation.x = -C[s + 'e']; }
    for (const l of hm.legs) { const s = l.s > 0 ? 'L' : 'R'; l.hp.rotation.set(-C[s + 'hx'], 0, l.s * C[s + 'hz']); l.kn.rotation.x = C[s + 'k']; l.an.rotation.x = C[s + 'a']; }
  }
  return {
    update(hm, e, S, t, dt, look) {
      if (!st.inited) { st.inited = true; targets(e, S, t, dt, look); for (const k of KEYS) C[k] = T[k]; }
      targets(e, S, t, dt, look);
      apply(hm, dt, e.mode === 'walk' && !e.swim);
      return C;
    },
    reset() { st.inited = false; st.lastFace = null; },
    pose: C,
  };
}
