// 🧠 نطّة — محاكاة العالم المفتوح: كائنات (البطل، الذيابة، الخنازير، الغزال، الناس) بنفس القوانين.
// كل كائن يتحرك بأوامر (مشي باتجاه، نطة، فعالية): البطل من اللاعب، والحيوانات من «عقل» بسيط.
// بالمستقبل أوامر اللاعبين الثانيين تجي من الإنترنت بنفس الشكل، والمحاكاة تشتغل على السيرفر (ما بيها رسم).
import { TAU, clamp, lerp, smooth, damp, rng, angDiff, dampAngle } from '../lib3d.js';

const GRAV = 14, SLOPE_MAX = 1.0, SLIDE = 1.15;

export function createSim(G, opts = {}) {
  const M = G.M, V = G.V;
  const ents = [];
  let nextId = 1;
  const S = {
    t: 0, hero: null, rest: null, reached: new Set(), coins: [], coinsGot: 0,
    climb: { done: false, time: 0 }, summit: null, scope: false, wind: 0,
    vq: { camp: null, merW: { x: 0, z: 0 }, zoneW: { x: 0, z: 0 }, penW: { x: 0, z: 0 }, met: false, called: false, caught: false, delivered: false },
    carry: null, focus: null, seed: 1,
  };
  const ev = [];
  const emit = (...a) => ev.push(a.length === 1 ? a[0] : a);

  // ---------------------------------------------------------------- إنشاء الكائنات
  function spawn(kind, x, z, extra = {}) {
    const e = { id: nextId++, kind, x, z, y: G.H(x, z), vx: 0, vy: 0, vz: 0, face: 0, air: false, peak: 0, r: 0.4, speed: 0, run: false, hopPh: 0, landT: 0, stun: 0, rot: 0, surf: null, ...extra };
    ents.push(e); return e;
  }
  const beasts = M.beasts.map((b) => spawn(b.kind, b.home.x + (b.ox || 0), b.home.z, { home: b.home, r: b.kind === 'boar' ? 0.45 : 0.38, state: 'idle', t: Math.random() * 2, cool: 0, tx: b.home.x, tz: b.home.z, charge: null, ph: 0, face: Math.random() * TAU }));
  const gz = spawn('gazelle', V.x + 60, V.z, { r: 0.42, state: 'graze', t: 0, gt: 2.5, sus: 0, stamina: 4, ph: 0, triedLeap: false, tx: 0, tz: 0, fx: 1, fz: 0, stuck: 0, hy: 0 });
  const merchant = spawn('merchant', V.x + 20, V.z, { r: 0.42 });

  // ---------------------------------------------------------------- الحركة المشتركة (البطل والحيوانات)
  /** يمشّي الكائن باتجاه (wx,wz) بسرعة spd: منحدرات، جروف، جسور بحبال، عوائق، وماي */
  function moveChar(e, wx, wz, spd, dt, o = {}) {
    const ctrl = e.air ? 3 : 10, tg = e.air ? Math.max(spd, e.airSpd || 0) : spd;
    const px = o.pushX || 0, pz = o.pushZ || 0;
    e.vx = damp(e.vx, wx * tg + px, ctrl, dt); e.vz = damp(e.vz, wz * tg + pz, ctrl, dt);
    const ox = e.x, oz = e.z;
    let nx = e.x + e.vx * dt, nz = e.z + e.vz * dt;
    [nx, nz] = G.collide(nx, nz, e.r, o.collFilter);
    if (!e.air) {
      if (e.surf === 'bridge') { // حبال الجسر: ما توكع من الجنب
        const b = G.bridgeAt(nx, nz);
        if (b && b.off) { const dx = nx - e.x, dz = nz - e.z, al = dx * b.tx + dz * b.tz; nx = e.x + b.tx * al; nz = e.z + b.tz * al; }
      } else if (e.surf === 'deck') { const d = G.deck; nz = clamp(nz, d.z0 + 0.35, d.z1 - 0.35); nx = Math.min(nx, d.x1 - 0.35); }
      let s = G.surfaceAt(nx, nz, e.y + 0.4);
      const dist = Math.hypot(nx - e.x, nz - e.z), dh = s.y - e.y;
      const STEP = s.kind === 'path' ? 0.75 : 0.35; // على الطريق تكدر تصعد درجة (لفّات الزكزاك الضيقة)
      if (dist > 1e-5 && dh > STEP && dh > dist * SLOPE_MAX) { // صعدة شديدة: ننزلق ويا الحايط
        const tryM = (ax, az) => { const s2 = G.surfaceAt(ax, az, e.y + 0.4), d2 = Math.hypot(ax - e.x, az - e.z), h2 = s2.y - e.y; return h2 <= (s2.kind === 'path' ? 0.75 : 0.35) || h2 <= d2 * SLOPE_MAX ? [ax, az, s2] : null; };
        const r1 = tryM(nx, e.z) || tryM(e.x, nz);
        if (r1) { nx = r1[0]; nz = r1[1]; s = r1[2]; } else { nx = e.x; nz = e.z; s = G.surfaceAt(nx, nz, e.y); e.vx *= 0.3; e.vz *= 0.3; }
      }
      const d2 = Math.hypot(nx - e.x, nz - e.z);
      if (s.y < e.y - Math.max(0.45, d2 * 1.45)) { // حافة: يطيح
        if (o.cautious) { nx = e.x; nz = e.z; e.vx = e.vz = 0; s = G.surfaceAt(nx, nz, e.y); e.y = s.y; }
        else { e.air = true; e.vy = Math.min(0, e.vy); e.peak = e.y; e.x = nx; e.z = nz; }
      } else { e.x = nx; e.z = nz; e.y = s.y; e.surf = s.kind; e.plat = s.plat; }
      if (!e.air && !e.surf && !o.noSlide) { // منحدر شديد: ينزلق لجوه
        const hx = G.H(e.x + 0.4, e.z) - G.H(e.x - 0.4, e.z), hz = G.H(e.x, e.z + 0.4) - G.H(e.x, e.z - 0.4), sl = Math.hypot(hx, hz) / 0.8;
        if (sl > SLIDE) { const k = (sl - SLIDE) * 9 * dt; e.vx -= (hx / 0.8) * k; e.vz -= (hz / 0.8) * k; }
      }
    } else {
      e.vy -= GRAV * dt;
      const ny = e.y + e.vy * dt;
      let s = G.surfaceAt(nx, nz, Math.max(e.y, ny) + 0.05, true);
      if (s.y > e.y + 0.45) { nx = e.x; nz = e.z; e.vx *= -0.15; e.vz *= -0.15; s = G.surfaceAt(nx, nz, e.y + 0.05, true); } // ضرب بحايط وهو بالهوا
      if (ny <= s.y && e.vy <= 0) {
        const drop = (e.peak || e.y) - s.y;
        e.x = nx; e.z = nz; e.y = s.y; e.air = false; e.vy = 0; e.landT = 0.25; e.surf = s.kind; e.plat = s.plat;
        if (s.kind === 'stone' && s.plat) { const d = Math.hypot(e.x - s.plat.x, e.z - s.plat.z), m = 0.35; if (d > m) { e.x = s.plat.x + ((e.x - s.plat.x) / d) * m; e.z = s.plat.z + ((e.z - s.plat.z) / d) * m; } e.vx *= 0.2; e.vz *= 0.2; }
        e.onLand && e.onLand(drop, s);
      } else { e.x = nx; e.z = nz; e.y = ny; e.peak = Math.max(e.peak || ny, ny); }
    }
    e.speed = Math.hypot(e.x - ox, e.z - oz) / dt;
  }

  // ---------------------------------------------------------------- البطل
  function makeHero(skinId, at) {
    const h = spawn('hero', at.x, at.z, { skin: skinId, hp: 100, maxHp: 100, lastHurt: -99, mode: 'walk', chute: 0, airSpd: 0, water: null, inTorrent: 0, faintT: 0, face: at.face || 0 });
    h.y = at.y != null ? at.y : G.H(at.x, at.z);
    h.onLand = (drop, s) => {
      emit(s.kind === 'stone' ? 'landStone' : 'land');
      if (drop > 4.2) hurt(h, Math.round((drop - 4.2) * 14), 'fall');
    };
    return h;
  }
  function hurt(e, dmg, cause) {
    if (e.kind !== 'hero' || e.mode !== 'walk' || dmg <= 0) return;
    e.hp = Math.max(0, e.hp - dmg); e.lastHurt = S.t;
    emit(['hurt', dmg, cause, e.hp]);
    if (e.hp <= 0) { e.mode = 'faint'; e.faintT = 0; e.vx = e.vz = 0; emit(['faint', cause]); }
  }
  function respawn(e, why) {
    const r = S.rest || G.restPoints[0];
    Object.assign(e, { x: r.x, z: r.z, y: G.H(r.x, r.z), vx: 0, vy: 0, vz: 0, air: false, stun: 0, rot: 0, mode: 'walk', face: r.face || 0, inTorrent: 0, surf: null });
    if (r.plaza) e.y = M.HS;
    if (why === 'faint') { e.hp = e.maxHp; const lose = Math.ceil(S.coinsGot * 0.2); S.coinsGot -= lose; emit(['respawn', r.name, lose]); }
    else emit(['respawn', r.name, 0]);
    S.focus = null;
  }
  function stepHero(h, c, dt) {
    if (h.mode === 'faint') { h.faintT += dt; if (h.faintT > 1.6) respawn(h, 'faint'); return; }
    if (h.mode !== 'walk') return stepAirborneStory(h, c, dt);
    if (S.scope) { h.vx = h.vz = 0; h.speed = 0; return; }
    let mag = clamp(c.mag || 0, 0, 1);
    if (h.stun > 0) { h.stun -= dt; mag = 0; }
    const run = mag > 0.62 && !c.sneak;
    let spd = mag < 0.08 ? 0 : run ? 5.6 : 2.3 * clamp(mag / 0.62, 0.4, 1);
    const w = G.water(h.x, h.z, h.y); h.water = w ? w.kind : null;
    const gk = !h.air ? (h.surf && h.surf !== 'path' ? h.surf : G.groundKind(h.x, h.z, h.y)) : null;
    if (gk === 'forest') spd *= 0.78; else if (gk === 'rock') spd *= 0.85;
    if (w && w.kind === 'river') spd *= 0.6;
    let pushX = 0, pushZ = 0;
    if (S.summit && S.summit.wind > 0) { pushX = S.summit.wind * 1.6; pushZ = S.summit.wind * 0.48; }
    if (w && w.kind === 'torrent' && !h.air) { pushX += w.dx * 3.4; pushZ += w.dz * 3.4; h.inTorrent += dt; if (h.inTorrent > 0.9) { emit('swept'); hurt(h, 12, 'water'); if (h.mode === 'walk') respawn(h, 'swept'); return; } }
    else h.inTorrent = 0;
    if (c.jump && !h.air && h.stun <= 0) {
      h.air = true; h.vy = 6.0; h.peak = h.y; emit('jump');
      const hs = Math.hypot(h.vx, h.vz); if (hs > 0.4 && hs < 3.4) { h.vx *= 3.4 / hs; h.vz *= 3.4 / hs; }
      h.airSpd = mag > 0.08 ? Math.max(3.4, hs) : 0;
    }
    const ml = Math.hypot(c.mx || 0, c.mz || 0), wx = ml > 1e-4 ? c.mx / ml : 0, wz = ml > 1e-4 ? c.mz / ml : 0;
    moveChar(h, wx, wz, spd, dt, { pushX, pushZ });
    h.run = run && h.speed > 3;
    if (h.speed > 0.3 && !h.air) h.face = dampAngle(h.face, Math.atan2(h.vz - pushZ, h.vx - pushX), 12, dt);
    else if (h.air && Math.hypot(h.vx, h.vz) > 0.5) h.face = dampAngle(h.face, Math.atan2(h.vz, h.vx), 8, dt);
    if (h.air && h.vy < -7) h.rot += dt * 5; else if (!h.air) h.rot *= Math.pow(0.001, dt);
    const prev = h.hopPh; h.hopPh = h.speed < 0.3 || h.air ? 0 : h.hopPh + h.speed * dt * 2.1;
    if (h.hopPh && Math.floor(prev / Math.PI) !== Math.floor(h.hopPh / Math.PI)) emit(h.water ? 'splash' : ['step', h.run, gk]);
    h.landT = Math.max(0, h.landT - dt);
    if (S.t - h.lastHurt > 6 && h.hp < h.maxHp) h.hp = Math.min(h.maxHp, h.hp + dt * 3); // ترتاح وترجع صحتك شوية شوية
    // نقاط الاستراحة
    for (const r of G.restPoints) if (!r.dyn || r.on) {
      if (Math.hypot(h.x - r.x, h.z - r.z) < (r.plaza ? M.RP - 1 : 3.2) && Math.abs(h.y - (r.plaza ? M.HS : r.y)) < 2.5) {
        if (S.rest !== r) { S.rest = r; if (!S.reached.has(r.id)) { S.reached.add(r.id); if (r.flag || r.id === 'valley') emit(['rest', r.name, r.id]); } }
      }
    }
    // العملات
    for (const k of S.coins) if (!k.taken && Math.abs(k.x - h.x) < 1.25 && Math.abs(k.z - h.z) < 1.25 && Math.hypot(k.x - h.x, k.z - h.z) < 1.0 && Math.abs(k.y - (h.y + 0.6)) < 1.2) { k.taken = true; S.coinsGot++; emit(['coin', k]); }
    // القمة
    if (!S.summit && M.rad(h.x, h.z) < M.RP - 1 && Math.abs(h.y - M.HS) < 1 && !S.carry) {
      S.summit = { t: 0, phase: 'wait', wind: 0 };
      if (!S.climb.done) { S.climb.done = true; S.climb.time = S.t - (S.climb.t0 || 0); emit(['summit', S.climb.time, true]); } else emit(['summit', 0, false]);
    }
    if (S.summit && S.summit.phase === 'wait' && M.rad(h.x, h.z) > M.RP + 8) S.summit = null; // طلع من الساحة
  }
  // ---- الريح تشيل البطل ← تطيّره للوادي ← مظلة ← ينزل
  function stepAirborneStory(h, c, dt) {
    const K = S.carry;
    if (h.mode === 'lift') {
      K.t += dt; const k = K.t;
      h.x = K.from[0] + k * k * 2.2; h.z = K.from[2] + k * k * 0.66; h.y = K.from[1] + k * k * 3.2 + Math.sin(k * 6) * 0.2; h.rot += dt * (4 + k * 3);
      if (k > 2.6) { h.mode = 'carry'; K.t = 0; K.p0 = [h.x, h.y, h.z]; emit('carry'); }
      return;
    }
    if (h.mode === 'carry') {
      K.t += dt; const u = clamp(K.t / K.dur, 0, 1), e = u * u * (3 - 2 * u);
      const P = [K.p0, [M.x + 80, M.HS + 48, M.z + 14], [V.x - 50, V.VF + 78, V.z], K.end];
      const b = (i) => { const a = 1 - e; return a * a * a * P[0][i] + 3 * a * a * e * P[1][i] + 3 * a * e * e * P[2][i] + e * e * e * P[3][i]; };
      const nx = b(0), ny = b(1), nz = b(2);
      h.face = Math.atan2(nz - h.z, nx - h.x); h.x = nx; h.y = ny; h.z = nz; h.rot += dt * lerp(9, 2, u);
      S.wind = lerp(1, 0.25, u);
      if (u >= 1) { h.mode = 'glide'; h.vy = -3; h.vx = h.vz = 0; h.chute = 0; emit('chute'); dropSkyCoins(h); }
      return;
    }
    if (h.mode === 'glide') {
      h.chute = Math.min(1, h.chute + dt * 3); h.rot *= Math.pow(0.015, dt);
      h.vy += (-3.2 - h.vy) * Math.min(1, dt * 3);
      const mag = clamp(c.mag || 0, 0, 1), ml = Math.hypot(c.mx || 0, c.mz || 0), wx = ml > 1e-4 ? c.mx / ml : 0, wz = ml > 1e-4 ? c.mz / ml : 0;
      h.vx = damp(h.vx, wx * 4.6 * mag, 3, dt); h.vz = damp(h.vz, wz * 4.6 * mag, 3, dt);
      h.x += h.vx * dt; h.z += h.vz * dt; h.y += h.vy * dt;
      [h.x, h.z] = G.collide(h.x, h.z, 0.4, (o) => o.tall);
      if (mag > 0.1) h.face = dampAngle(h.face, Math.atan2(wz, wx), 5, dt);
      for (const k of S.coins) if (!k.taken && Math.hypot(k.x - h.x, k.z - h.z) < 1.25 && Math.abs(k.y - (h.y + 0.55)) < 1.3) { k.taken = true; S.coinsGot++; emit(['coin', k]); }
      S.wind = Math.max(0, S.wind - dt * 0.2);
      const s = G.surfaceAt(h.x, h.z, h.y + 0.5);
      if (h.y <= s.y) { h.y = s.y; h.vy = 0; h.rot = 0; h.chute = 0; h.landT = 0.35; h.mode = 'walk'; h.air = false; h.surf = s.kind; S.carry = null; S.drop = { x: h.x + Math.cos(h.face) * 1.2, z: h.z + Math.sin(h.face) * 1.2, t: 0, face: h.face }; emit(['landChute']); }
    }
  }
  function dropSkyCoins(h) {
    S.coins = S.coins.filter((k) => !k.sky);
    for (let i = 0; i < 20; i++) { const a = i * 0.62; S.coins.push({ x: h.x + Math.cos(a) * 3.2, z: h.z + Math.sin(a) * 3.2, y: h.y - 4 - i * 1.55, sky: true }); }
  }
  function updateSummit(dt) {
    const sm = S.summit; if (!sm || S.carry) return;
    sm.t += dt;
    if (sm.phase === 'wait' && sm.t >= 45) { sm.phase = 'wind'; sm.t = 0; emit('windStart'); }
    if (sm.phase === 'wind') {
      sm.wind = clamp(sm.t / 7, 0, 1); S.wind = sm.wind;
      if (sm.t > 8.5) { // تشيل البطل بس
        const h = S.hero; S.scope = false;
        const [lx, lz] = pickLanding();
        S.carry = { t: 0, from: [h.x, h.y, h.z], dur: 6.2, end: [V.x + lx, V.VF + G.V.H0(lx, lz) + 34, V.z + lz] };
        h.mode = 'lift'; h.air = true; sm.phase = 'lift'; emit('lift');
      }
    }
    if (sm.phase === 'lift' && !S.carry) S.summit = null;
  }
  function pickLanding() { // مكان مفتوح بالقاع: بعيد عن الخيمة وعن جذوع النخل والأشجار حتى الكاميرا تشوف زين
    const r = rng((S.seed * 7 + 13) >>> 0), open = (lx, lz) => !G.tallNear(V.x + lx, V.z + lz, (c) => Math.hypot(c.x - V.x - lx, c.z - V.z - lz) < 4.5 + c.r);
    let best = null;
    for (let k = 0; k < 80; k++) {
      const lx = 32 + r() * 56, side = r() < 0.5 ? -1 : 1, lz = clamp(V.riverZ(lx) + side * (4.5 + r() * 3), -V.FLOOR + 2.5, V.FLOOR - 2.5);
      if (Math.hypot(lx - S.vq.camp.x, lz - S.vq.camp.z) < 16) continue;
      if (open(lx, lz)) return [lx, lz];
      if (!best) best = [lx, lz];
    }
    return best || [60, V.riverZ(60) + 5];
  }
  function skipWait() { if (S.summit && S.summit.phase === 'wait') S.summit.t = 45; }

  // ---------------------------------------------------------------- الحيوانات البرية (حركة حرة: تطاردك بالغابة)
  function updateBeasts(dt) {
    const h = S.hero, alive = h.mode === 'walk' && !S.summit;
    for (const b of beasts) {
      b.t += dt; b.cool = Math.max(0, b.cool - dt);
      const dx = h.x - b.x, dz = h.z - b.z, d = Math.hypot(dx, dz), dy = Math.abs(h.y - b.y);
      if (d > 120 && b.state === 'idle') { b.vx = b.vz = 0; b.speed = 0; continue; } // بعيد: نوفّر
      const sense = h.run ? 14 : h.speed > 0.4 ? 9 : 5.5, wolf = b.kind === 'wolf';
      const go = (tx, tz, spd) => { const ax = tx - b.x, az = tz - b.z, l = Math.hypot(ax, az); if (l < 0.05) { moveChar(b, 0, 0, 0, dt, { cautious: true }); return l; } moveChar(b, ax / l, az / l, spd, dt, { cautious: true, collFilter: (c) => !c.hedge || true }); if (b.speed > 0.2) b.face = dampAngle(b.face, Math.atan2(b.vz, b.vx), 8, dt); return l; };
      switch (b.state) {
        case 'idle':
          if (alive && b.cool <= 0 && d < sense && dy < 3) { b.state = 'notice'; b.t = 0; emit([wolf ? 'growl' : 'grunt', b.kind]); break; }
          if (b.t > 3 + Math.random() * 3) { b.t = 0; const a = Math.random() * TAU; b.tx = b.home.x + Math.cos(a) * 5; b.tz = b.home.z + Math.sin(a) * 5; }
          if (Math.hypot(b.tx - b.x, b.tz - b.z) > 0.6) go(b.tx, b.tz, 1.0); else go(b.x, b.z, 0);
          break;
        case 'notice':
          go(b.x, b.z, 0); b.face = dampAngle(b.face, Math.atan2(dz, dx), 10, dt);
          if (!alive) { b.state = 'return'; break; }
          if (b.t > (wolf ? 0.6 : 0.9)) { b.state = wolf ? 'chase' : 'charge'; b.t = 0; if (!wolf) { const l = d || 1; b.charge = [dx / l, dz / l]; } emit([wolf ? 'howl' : 'grunt', b.kind]); }
          break;
        case 'chase':
          go(h.x, h.z, 4.7);
          if (!alive || d > 22 || b.t > 7 || Math.hypot(b.x - b.home.x, b.z - b.home.z) > 32) { b.state = 'return'; b.cool = 3; }
          break;
        case 'charge': {
          const ox = b.x, oz = b.z; moveChar(b, b.charge[0], b.charge[1], 7.8, dt, { cautious: true }); b.face = Math.atan2(b.charge[1], b.charge[0]);
          if (Math.hypot(b.x - ox, b.z - oz) < 7.8 * dt * 0.3 || b.t > 1.8) { b.state = alive && d < 12 && b.t < 6 ? 'notice' : 'return'; b.t = 0; }
          break;
        }
        case 'return':
          if (go(b.home.x, b.home.z, 2.2) < 1 || b.t > 20) { b.state = 'idle'; b.t = 0; }
          break;
      }
      b.ph += dt * (b.state === 'chase' || b.state === 'charge' ? 16 : b.speed > 0.3 ? 8 : 0);
      if ((b.state === 'chase' || b.state === 'charge') && d < 0.95 && dy < 1.2 && h.stun <= 0 && alive) {
        const l = d || 1; h.vx = (dx / l) * 6; h.vz = (dz / l) * 6; h.stun = 0.9; h.landT = 0.3;
        b.state = 'return'; b.cool = 6;
        const dmg = wolf ? 18 : 25; emit(['bitten', b.kind, dmg]); hurt(h, dmg, b.kind);
      }
    }
  }

  // ---------------------------------------------------------------- الوادي: الغزال وأبو جاسم
  const L = (x, z) => [x - V.x, z - V.z];
  const CAMP_LOCAL = { mer: [1.05, -0.5], zone: [2.35, 0.35], pen: [-4.45, -1.75] };
  const CAMP_COLL = [[-1.1, -2.8, 1.25], [0, -2.8, 1.3], [1.1, -2.8, 1.25], [-0.78, -0.8, 0.55], [4.0, -2.4, 0.62], [1.95, -1.8, 0.35], [-2.05, -1.6, 0.4], [1.68, -0.25, 0.14], [-1.68, -0.25, 0.14], [1.05, -0.5, 0.42], [-5.8, -1.0, 0.3], [-5.8, -1.8, 0.3], [-5.8, -2.6, 0.3], [-5.1, -2.9, 0.3], [-4.45, -2.9, 0.3], [-3.8, -2.9, 0.3], [-3.1, -2.6, 0.3], [-3.1, -1.8, 0.3], [-3.1, -1.0, 0.3]];
  let campColl = [];
  const campRest = { id: 'camp', x: 0, z: 0, y: 0, name: 'خيمة أبو جاسم', face: 0, flag: false, dyn: true, on: false };
  G.restPoints.push(campRest);
  function campToWorld(c, lx, lz) { const cs = Math.cos(c.rot), sn = Math.sin(c.rot); return { x: V.x + c.x + lx * cs + lz * sn, z: V.z + c.z - lx * sn + lz * cs }; }
  function placeCamp(c) {
    for (const k of campColl) G.removeColl(k);
    S.vq.camp = c;
    S.vq.merW = campToWorld(c, ...CAMP_LOCAL.mer); S.vq.zoneW = campToWorld(c, ...CAMP_LOCAL.zone); S.vq.penW = campToWorld(c, ...CAMP_LOCAL.pen);
    campColl = CAMP_COLL.map(([x, z, r]) => G.addColl({ ...campToWorld(c, x, z), r }));
    Object.assign(merchant, { x: S.vq.merW.x, z: S.vq.merW.z, y: V.VF + c.base, face: c.rot });
    const f = campToWorld(c, 0, 3.2); Object.assign(campRest, { x: f.x, z: f.z, y: G.H(f.x, f.z), face: c.rot + Math.PI / 2 });
  }
  function startFlee(g) { g.state = 'flee'; g.t = 0; g.stuck = 0; const h = S.hero, d = Math.hypot(g.x - h.x, g.z - h.z) || 1; g.fx = (g.x - h.x) / d; g.fz = (g.z - h.z) / d; emit('snort'); }
  function updateGazelle(dt) {
    const g = gz, h = S.hero, vq = S.vq;
    g.t += dt;
    const dx = h.x - g.x, dz = h.z - g.z, d = Math.hypot(dx, dz) || 0.001, toP = Math.atan2(dz, dx);
    if (d > 140 && !vq.caught) { g.vx = g.vz = 0; return; }
    const sp = h.mode === 'walk' ? h.speed : 0, moving = Math.hypot(g.vx, g.vz) > 0.2;
    g.ph += dt * (g.state === 'flee' ? 15 : moving ? 8 : 0);
    if (g.state !== 'flee' && g.state !== 'leap') g.stamina = Math.min(4, g.stamina + dt * (g.state === 'tired' ? 0.5 : 0.8));
    if (!vq.caught && ['graze', 'look', 'walk', 'alert'].includes(g.state)) {
      const near = d < 22 ? 1 + (1 - d / 22) * 1.6 : 0, watching = g.state !== 'graze';
      const rate = sp > 4 ? (watching ? 2.6 : 1.4) : sp > 0.5 ? (watching ? 1.1 : 0.06) : 0;
      g.sus = clamp(g.sus + (rate * near > 0 ? rate * near : -0.3) * dt, 0, 1);
    }
    const okAt = (x, z) => { const [lx, lz] = L(x, z); return G.slope(x, z) < 0.7 && lx > 1 && lx < V.VL - 1 && Math.abs(lz) < V.FLOOR + 1; };
    const goTo = (tx, tz, spd) => {
      const ddx = tx - g.x, ddz = tz - g.z, l = Math.hypot(ddx, ddz);
      if (l < 0.05) { g.vx = g.vz = 0; return l; }
      g.vx = damp(g.vx, (ddx / l) * spd, 6, dt); g.vz = damp(g.vz, (ddz / l) * spd, 6, dt);
      let nx = g.x + g.vx * dt, nz = g.z + g.vz * dt;
      [nx, nz] = G.collide(nx, nz, 0.42);
      if (okAt(nx, nz)) { g.x = nx; g.z = nz; }
      g.face = dampAngle(g.face, Math.atan2(g.vz, g.vx), 7, dt);
      return l;
    };
    const [glx, glz] = L(g.x, g.z);
    switch (g.state) {
      case 'graze':
        g.vx = g.vz = 0;
        if (g.sus > 0.5) { g.state = 'alert'; g.t = 0; emit('snort'); }
        else if (g.t > g.gt) {
          g.t = 0;
          if (Math.random() < 0.72) g.state = 'look';
          else for (let k = 0; k < 12; k++) { const tlx = glx + (Math.random() - 0.5) * 14, tlz = glz + (Math.random() - 0.5) * 10; if (V.onFloor(tlx, tlz) && Math.abs(tlz - V.riverZ(tlx)) > 1.6) { g.tx = V.x + tlx; g.tz = V.z + tlz; g.state = 'walk'; break; } }
        }
        break;
      case 'look':
        g.vx = g.vz = 0; if (d < 26) g.face = dampAngle(g.face, toP, 4, dt);
        if (g.sus > 0.5) { g.state = 'alert'; g.t = 0; emit('snort'); }
        else if (g.t > 1.1) { g.state = 'graze'; g.t = 0; g.gt = 1.4 + Math.random() * 1.8; }
        break;
      case 'walk':
        if (g.sus > 0.5) { g.state = 'alert'; g.t = 0; g.vx = g.vz = 0; emit('snort'); break; }
        if (goTo(g.tx, g.tz, 1.1) < 0.4 || g.t > 6) { g.state = 'graze'; g.t = 0; g.vx = g.vz = 0; g.gt = 1.4 + Math.random() * 1.8; }
        break;
      case 'alert':
        g.vx = g.vz = 0; g.face = dampAngle(g.face, toP, 8, dt);
        if (g.sus >= 1 || d < 1.6) startFlee(g);
        else if (g.sus < 0.3) { g.state = 'graze'; g.t = 0; g.gt = 1.2 + Math.random() * 1.2; }
        break;
      case 'flee': {
        g.stamina -= dt;
        const spd = 8.2 * (0.55 + (0.45 * Math.max(0, g.stamina)) / 4);
        let ax = -dx / d, az = -dz / d;
        if (Math.abs(glz) > 5.5) az -= Math.sign(glz) * (Math.abs(glz) - 5.5) * 0.45;
        if (glx < 8) ax += (8 - glx) * 0.35; if (glx > V.VL - 8) ax -= (glx - V.VL + 8) * 0.35;
        const al = Math.hypot(ax, az) || 1;
        g.fx = damp(g.fx, ax / al, 5, dt); g.fz = damp(g.fz, az / al, 5, dt);
        const fl = Math.hypot(g.fx, g.fz) || 1, fx = g.fx / fl, fz = g.fz / fl;
        let nx = g.x + fx * spd * dt, nz = g.z + fz * spd * dt;
        [nx, nz] = G.collide(nx, nz, 0.42);
        const moved = Math.hypot(nx - g.x, nz - g.z);
        if (okAt(nx, nz)) { g.vx = (nx - g.x) / dt; g.vz = (nz - g.z) / dt; g.x = nx; g.z = nz; }
        g.stuck = moved < spd * dt * 0.35 ? g.stuck + dt : 0;
        g.face = dampAngle(g.face, Math.atan2(fz, fx), 10, dt);
        if (g.stuck > 0.35 && d < 10) { g.state = 'cornered'; g.t = 0; g.vx = g.vz = 0; }
        else if (g.stamina <= 0) { g.state = 'tired'; g.t = 0; emit('tired'); }
        else if (d > 32 && g.t > 1.5) { g.state = 'graze'; g.t = 0; g.vx = g.vz = 0; g.sus = 0.35; g.gt = 1.5; }
        break;
      }
      case 'tired':
        if (d < 9) goTo(g.x - (dx / d) * 2, g.z - (dz / d) * 2, 2.3); else g.vx = g.vz = 0;
        if (g.stamina > 3.2 && g.t > 2.2) { g.sus = 0.45; if (d < 6) startFlee(g); else { g.state = 'graze'; g.t = 0; } }
        break;
      case 'cornered':
        g.vx = g.vz = 0; g.face = dampAngle(g.face, toP, 8, dt);
        if (!g.triedLeap && d < 4 && g.t > 0.4) {
          let tx = h.x + (dx / d) * 4.5, tz = h.z + (dz / d) * 4.5;
          const [tlx, tlz] = L(tx, tz); if (!V.onFloor(tlx, tlz)) { tx = h.x + (dx / d) * 3; tz = V.z + clamp(L(0, h.z + (dz / d) * 3)[1], -(V.FLOOR - 2), V.FLOOR - 2); }
          Object.assign(g, { triedLeap: true, state: 'leap', t: 0, from: [g.x, g.z], to: [tx, tz] }); emit('snort');
        } else if (g.t > 4 && d > 9) { g.state = 'graze'; g.t = 0; g.sus = 0.4; }
        break;
      case 'leap': {
        const k = Math.min(1, g.t / 0.75);
        g.x = lerp(g.from[0], g.to[0], k); g.z = lerp(g.from[1], g.to[1], k); g.hy = Math.sin(k * Math.PI) * 1.5;
        g.vx = (g.to[0] - g.from[0]) / 0.75; g.vz = (g.to[1] - g.from[1]) / 0.75; g.face = Math.atan2(g.vz, g.vx);
        if (k >= 1) { g.hy = 0; startFlee(g); }
        break;
      }
      case 'follow': {
        const tx = h.x - Math.cos(h.face) * 1.45, tz = h.z - Math.sin(h.face) * 1.45, l = Math.hypot(tx - g.x, tz - g.z);
        if (l > 12) { g.x = tx; g.z = tz; } // ما يضيع منك (إذا طحت أو صعدت)
        else if (l > 0.08) { g.vx = damp(g.vx, ((tx - g.x) / l) * Math.min(7, l * 3.2), 6, dt); g.vz = damp(g.vz, ((tz - g.z) / l) * Math.min(7, l * 3.2), 6, dt); let nx = g.x + g.vx * dt, nz = g.z + g.vz * dt; [nx, nz] = G.collide(nx, nz, 0.42); g.x = nx; g.z = nz; g.face = dampAngle(g.face, Math.atan2(g.vz, g.vx), 7, dt); }
        else g.vx = g.vz = 0;
        break;
      }
      case 'pen': {
        const p = vq.penW, l = Math.hypot(p.x - g.x, p.z - g.z);
        if (l > 0.3) { g.vx = ((p.x - g.x) / l) * 1.3; g.vz = ((p.z - g.z) / l) * 1.3; g.x += g.vx * dt; g.z += g.vz * dt; g.face = dampAngle(g.face, Math.atan2(g.vz, g.vx), 6, dt); }
        else g.vx = g.vz = 0;
        break;
      }
    }
    g.y = G.H(g.x, g.z) + (g.hy || 0);
    if (!vq.caught && h.mode === 'walk' && ['graze', 'look', 'walk', 'alert', 'tired', 'cornered'].includes(g.state) && d < 1.2 && (g.hy || 0) < 0.25 && Math.abs(h.y - g.y) < 1.5) {
      vq.caught = true; g.state = 'follow'; g.vx = g.vz = 0; g.sus = 0;
      S.focus = { t: 2.2, dist: 5.2, yaw: Math.atan2(g.z - h.z, g.x - h.x) - Math.PI / 2 };
      emit('catch');
    }
  }
  function updateValleyQuest(dt) {
    const h = S.hero, vq = S.vq;
    if (h.mode !== 'walk') return;
    const dm = Math.hypot(h.x - vq.merW.x, h.z - vq.merW.z), c = vq.camp;
    const talkYaw = Math.atan2(-Math.cos(c.rot), -Math.sin(c.rot));
    if (!vq.called && dm < 24 && Math.abs(h.y - merchant.y) < 8) { vq.called = true; emit('call'); }
    if (!vq.met && dm < 4.2) { vq.met = true; campRest.on = true; S.focus = { t: 3.4, dist: 6.2, x: (h.x + vq.merW.x) / 2, z: (h.z + vq.merW.z) / 2, yaw: talkYaw, talk: true }; emit('meet'); }
    if (vq.caught && !vq.delivered && Math.hypot(h.x - vq.zoneW.x, h.z - vq.zoneW.z) < 1.7) {
      vq.delivered = true; gz.state = 'pen';
      S.focus = { t: 4.6, dist: 6.6, x: (h.x + vq.merW.x) / 2, z: (h.z + vq.merW.z) / 2, yaw: talkYaw, talk: true };
      emit('deliver');
    }
  }

  // ---------------------------------------------------------------- بداية العالم
  /** يبدي مغامرة جديدة: at = 'start' (سفح الجبل) | 'summit' | 'valley' (نازل بالمظلة) */
  function enter(skinId, o = {}) {
    S.seed = (o.seed != null ? o.seed : (Math.random() * 4294967295)) >>> 0;
    const r = rng(S.seed);
    ents.length = 0; ents.push(...beasts, gz, merchant);
    for (const b of beasts) Object.assign(b, { x: b.home.x, z: b.home.z, y: b.home.y, vx: 0, vz: 0, vy: 0, air: false, state: 'idle', cool: 0, t: Math.random() * 2 });
    placeCamp(V.CAMPS[Math.floor(r() * V.CAMPS.length)]);
    // مكان الغزال: بعيد عن الخيمة وعن مدخل الوادي
    let gx = 60, gzz = 0;
    for (let k = 0; k < 400; k++) { const lx = 6 + r() * (V.VL - 12), lz = (r() - 0.5) * 2 * (V.FLOOR - 2.5); if (lx < 22 || Math.hypot(lx - S.vq.camp.x, lz - S.vq.camp.z) < 24 || Math.abs(lz - V.riverZ(lx)) < 2.2 || !V.onFloor(lx, lz)) continue; gx = lx; gzz = lz; break; }
    Object.assign(gz, { x: V.x + gx, z: V.z + gzz, vx: 0, vz: 0, state: 'graze', t: 0, gt: 2.5, sus: 0, stamina: 4, triedLeap: false, hy: 0, face: r() * TAU });
    gz.y = G.H(gz.x, gz.z);
    Object.assign(S.vq, { met: false, called: false, caught: false, delivered: false }); campRest.on = false;
    S.coins = M.coins.map((k) => ({ ...k, taken: false }));
    S.coinsGot = 0; S.summit = null; S.scope = false; S.carry = null; S.focus = null; S.wind = 0; S.t = 0; S.drop = null;
    S.climb = { done: false, time: 0, t0: 0 };
    S.reached = new Set();
    const start = G.restPoints[0];
    S.rest = start; S.reached.add(start.id);
    S.hero = makeHero(skinId, start); ents.push(S.hero);
    const h = S.hero;
    if (o.at === 'summit') { Object.assign(h, { x: M.x - M.RP + 2.5, z: M.z + 2, y: M.HS }); S.rest = G.restPoints.find((p) => p.id === 'summit'); S.climb.done = true; }
    if (o.at === 'valley') { // نازل بالمظلة على الوادي
      const [lx, lz] = pickLanding(); Object.assign(h, { x: V.x + lx, z: V.z + lz, y: V.VF + V.H0(lx, lz) + 34, mode: 'glide', air: true, chute: 0.01, vy: -3 }); S.carry = { t: 0 }; S.climb.done = true; dropSkyCoins(h); emit('chute');
    }
    return { camp: V.CAMPS.indexOf(S.vq.camp), gazelle: [gz.x, gz.z], start: [h.x, h.z] };
  }
  function interact(id) {
    if (id === 'scope') { S.scope = !S.scope; return true; }
    if (id === 'tea') { S.hero.hp = S.hero.maxHp; return true; }
    return true;
  }
  function nearInteract() {
    const h = S.hero; if (h.mode !== 'walk' || !S.summit || S.summit.phase !== 'wait') return null;
    let best = null, bd = 1e9;
    for (const it of M.plaza.inter) { const d = Math.hypot(h.x - it.x, h.z - it.z); if (d < it.r && d < bd) { bd = d; best = it; } }
    return best;
  }
  function objective() {
    const h = S.hero, vq = S.vq, [lx, lz] = L(h.x, h.z), inV = lx > -70 && lx < V.VL + 25 && Math.abs(lz) < 45;
    if (h.mode === 'lift' || h.mode === 'carry') return '🌪️ الريح شالتك!';
    if (h.mode === 'glide') return '🪂 انزل بالمظلة';
    if (h.mode === 'faint') return '😵 …';
    if (S.summit) return S.summit.phase === 'wait' ? '☕ استريح بالساحة' : '💨 الريح!';
    if (inV || (S.climb.done && !vq.delivered)) return vq.delivered ? '🌍 تمشّى بالعالم' : !vq.caught ? (vq.called && !vq.met ? '🔎 دوّر على الغزال والتاجر' : '🔎 دوّر على الغزال') : vq.met ? '🏕️ رجّعه لأبو جاسم' : '🔎 دوّر على التاجر';
    if (!S.climb.done) return '⛰️ اطلع للقمة';
    return '🌍 تمشّى بالعالم';
  }

  // ---------------------------------------------------------------- خطوة وحدة
  function step(dt, cmd) {
    ev.length = 0;
    S.t += dt;
    const h = S.hero; if (!h) return [];
    stepHero(h, cmd || {}, dt);
    updateSummit(dt);
    if (!S.summit && !S.carry) S.wind = Math.max(0, S.wind - dt * 0.35);
    updateBeasts(dt);
    updateGazelle(dt);
    updateValleyQuest(dt);
    if (S.drop) S.drop.t += dt;
    if (S.focus) { S.focus.t -= dt; if (S.focus.t <= 0) S.focus = null; }
    return ev.slice();
  }
  return { S, ents, beasts, gz, merchant, step, enter, interact, nearInteract, skipWait, objective, respawn: () => { if (S.hero && S.hero.mode === 'walk') respawn(S.hero, 'menu'); }, hurt: (d) => hurt(S.hero, d, 'test') };
}
