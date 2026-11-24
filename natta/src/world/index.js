// 🌍 نطّة — العالم المفتوح: جغرافيا + محاكاة + رسم بنظام واحد.
// الإدخال (جويستك نسبةً للكاميرا) يتحول هنا لأمر بالعالم (اتجاه + نطة)، نفس الشكل اللي راح يوصل للسيرفر بالأونلاين.
import { buildGeo, NATTA_MAP } from './geo.js';
import { createSim } from './sim.js';
import { createView } from './view.js';
import { clamp } from '../lib3d.js';

export function createWorld(canvas, cfg = {}) {
  const t0 = performance.now();
  const G = buildGeo(cfg.map || NATTA_MAP);
  const tGeo = performance.now() - t0;
  const sim = createSim(G);
  const view = createView({ renderer: cfg.renderer, sign: cfg.sign }, G, sim);
  const S = sim.S, cam = view.cam;
  const buildMs = Math.round(performance.now() - t0);
  function enter(sk, opts = {}) {
    view.setHero(sk);
    const info = sim.enter(sk.id, opts);
    cam.yaw = S.hero.face; cam.pitch = 0.26; cam.init = false;
    view.IV.warm(S.hero.x, S.hero.z, S.hero.y + 3);
    return info;
  }
  function step(dt, inp = {}) {
    if (S.scope) { cam.scopeYaw = clamp(cam.scopeYaw + (inp.dyaw || 0) * 0.35, -0.9, 0.9); cam.scopePitch = clamp(cam.scopePitch + (inp.dpitch || 0) * -0.3, -0.75, 0.2); }
    else { cam.yaw += inp.dyaw || 0; cam.pitch = clamp(cam.pitch + (inp.dpitch || 0), -0.3, 1.15); if (inp.dyaw) cam.dragT = 1.6; } // تكدر تباوع لفوك شوية (القمة من الوادي)؛ بالسيارة الكاميرا ترجع وراك بعد ثانية ونص
    const jx = inp.jx || 0, jy = inp.jy || 0, cy = Math.cos(cam.yaw), sy = Math.sin(cam.yaw);
    const cmd = { mx: cy * jy - sy * jx, mz: sy * jy + cy * jx, mag: inp.mag || 0, jump: !!inp.jump, sneak: !!inp.sneak, jx, jy, kx: inp.kx, ky: inp.ky, hand: !!inp.hand }; // jx/jy الخام للسواقة
    const ev = sim.step(dt, cmd);
    for (const e of ev) if (Array.isArray(e) && e[0] === 'respawn') { cam.yaw = S.hero.face; cam.init = false; view.IV.warm(S.hero.x, S.hero.z, S.hero.y + 3); }
    return ev;
  }
  function interact(id) {
    if (id === 'scope') { sim.interact('scope'); cam.scopeYaw = 0.0; cam.scopePitch = -0.2; return S.scope; } // التلسكوب يباوع على خليج الفجر
    if (id === 'tea') { sim.interact('tea'); view.pourTea(); return true; }
    if (id === 'chat') { view.talkNpc('tea'); return true; }
    if (id === 'bell') { view.ringBell(); return true; }
    return sim.interact(id);
  }
  const threats = () => sim.beasts.filter((b) => b.state === 'chase' || b.state === 'charge' || b.state === 'notice').map((b) => ({ kind: b.kind, x: b.x, y: b.y, z: b.z, state: b.state }));
  return {
    G, sim, view, S, cam, enter, step, interact, threats,
    render: view.render, setSize: view.setSize, project: view.project, heading: view.heading,
    nearInteract: sim.nearInteract, skipWait: sim.skipWait, objective: sim.objective, trackTarget: sim.trackTarget, setTrack: sim.setTrack, have: sim.have, snapshot: sim.snapshot, restore: (sn) => { const ok = sim.restore(sn); if (ok) { const h = sim.S.hero; view.IV.warm(h.x, h.z, h.y + 3); view.cam.init = false; view.cam.yaw = h.face; } return ok; }, respawn: sim.respawn, setTools: sim.setTools,
    mapShot: view.mapShot, portrait: view.portrait, ground: G.H,
    warm: (x, z, y) => view.IV.warm(x, z, y), info: { HALF: G.HALF, M: G.M, V: G.V, I: G.I, SEA: G.SEA, rest: G.restPoints, buildMs, geoMs: Math.round(tGeo) },
    renderer: view.renderer, scene: view.scene, camera: view.camera, U: view.U, get pr() { return view.pr; },
  };
}
