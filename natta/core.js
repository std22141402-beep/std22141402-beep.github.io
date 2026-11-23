/* =====================================================================
   نطّة — محرك اللعبة: الفيزياء وتوليد المنصات والعناصر
   هذا الملف ما يرسم أي شي، حتى نكدر نفحصه بسهولة (node --test natta/tests/core.test.mjs)
   الإحداثيات: x من 0 إلى W، و y يزيد كل ما نصعد لفوك. y اللاعب = مكان رجليه.
   ===================================================================== */
(function (root) {
  'use strict';

  const C = {
    W: 400,            // عرض العالم
    G: 1500,           // الجاذبية
    JUMP: 820,         // سرعة القفزة العادية  → ارتفاع ≈ 224
    SPRING: 1350,      // النابض              → ارتفاع ≈ 607
    TRAMP: 1750,       // الترامبولين         → ارتفاع ≈ 1020
    ROCKET_V: 1150,    // سرعة الصاروخ
    ROCKET_T: 2.6,     // مدة الصاروخ بالثواني
    MAXVX: 430,        // أقصى سرعة يمين/يسار
    MAX_FALL: 1700,
    PW: 70, PH: 16,    // حجم المنصة
    FOOT: 15,          // نص عرض رجلين اللاعب (للهبوط)
    BODY_W: 34, BODY_H: 42,
    GAP_MIN: 58, GAP_MAX: 178,
    MAX_GAP: 192,      // أكبر فراغ بين منصتين حقيقيتين (أقل من ارتفاع القفزة بهامش)
    SCORE_DIV: 10,     // النتيجة = أعلى ارتفاع ÷ 10
  };
  C.REACH = (C.JUMP * C.JUMP) / (2 * C.G);
  C.FEVER_T = 6;      // مدة وضع الحماس
  C.EVENT_T = 9;      // مدة الحدث المفاجئ

  function mulberry32(a) {
    return function () {
      a |= 0; a = (a + 0x6d2b79f5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
  const lerp = (a, b, t) => a + (b - a) * t;
  /** أقصر مسافة أفقية بين نقطتين (الشاشة تلف من اليمين لليسار) */
  const wrapDx = (a, b) => {
    let d = (a - b) % C.W;
    if (d > C.W / 2) d -= C.W; else if (d < -C.W / 2) d += C.W;
    return d;
  };
  function overlapX(px, half, left, width) {
    for (const off of [0, C.W, -C.W]) {
      const x = px + off;
      if (x + half > left && x - half < left + width) return true;
    }
    return false;
  }

  /** الصعوبة من 0 (سهل) إلى 1 (أصعب شي) حسب الارتفاع */
  function difficulty(y) { return clamp((y - 3000) / 45000, 0, 1); }

  function emit(w, type, x, y, v) { w.events.push({ type, x, y, v }); }

  function addPlatform(w, x, y, type, d) {
    const p = { id: w.nextId++, x, y, w: C.PW, type, vx: 0, broken: false, fallV: 0, rot: 0, gone: false, pop: 0, item: null };
    if (type === 'm') p.vx = lerp(60, 150, d) * (w.rnd() < 0.5 ? -1 : 1);
    if (type === 'g') { p.x = 0; p.w = C.W; }
    w.platforms.push(p);
    return p;
  }

  /** يولّد منصة حقيقية وحدة فوك آخر وحدة، مع العناصر اللي حولها */
  function genStep(w) {
    const r = w.rnd, y0 = w.genY, d = difficulty(y0);
    const early = y0 < 1200; // البداية: منصات قريبة وعادية حتى يتعود اللاعب

    let gap = early ? lerp(55, 85, r()) : lerp(C.GAP_MIN, C.GAP_MAX, d) * (0.72 + 0.43 * r());
    gap = clamp(gap, 45, C.MAX_GAP);
    const y = y0 + gap;

    // إذا الفراغ كبير، نخلي المنصة مو بعيدة أفقياً حتى تبقى اللعبة عادلة
    let x;
    if (gap > 140) x = clamp(w.lastMainX + (r() * 2 - 1) * 150, 0, C.W - C.PW);
    else x = r() * (C.W - C.PW);

    let type = 'n';
    if (!early) {
      const pm = y > 1500 ? lerp(0.1, 0.35, d) : 0;   // متحركة
      const pv = y > 7000 ? lerp(0.06, 0.2, d) : 0;   // تختفي بعد قفزة
      const roll = r();
      if (roll < pm) type = 'm'; else if (roll < pm + pv) type = 'v';
    }
    const p = addPlatform(w, x, y, type, d);
    w.lastMainX = x;

    // ---- العناصر فوك المنصة ----
    if (type !== 'v') {
      const roll = r();
      if (!w.tutSpring && y > 650) {
        p.item = { kind: 'spring', ox: 24, anim: 0 }; w.tutSpring = true; w.lastSpringY = y;
      } else if (y > 4000 && y - w.lastRocketY > 4000 && roll < 0.014) {
        p.item = { kind: 'rocket', ox: C.PW / 2 - 11, taken: false, anim: 0 }; w.lastRocketY = y;
      } else if (y > 9000 && y - w.lastShieldY > 5000 && roll < 0.026) {
        p.item = { kind: 'shield', ox: C.PW / 2, taken: false, anim: 0 }; w.lastShieldY = y;
      } else if (y > 4000 && roll < 0.06) {
        p.item = { kind: 'tramp', ox: 10, anim: 0 };
      } else if (roll < 0.13 && y - w.lastSpringY > 400) {
        p.item = { kind: 'spring', ox: 8 + r() * (C.PW - 30), anim: 0 }; w.lastSpringY = y;
      }
    }

    // ---- العملات ----
    const cr = r();
    if (cr < 0.16) {
      w.coins.push({ x: p.x + C.PW / 2, y: y + 46, taken: false });
    } else if (cr < 0.2 && !early) {
      const cx = 30 + r() * (C.W - 60);
      for (let i = 0; i < 5; i++) w.coins.push({ x: cx, y: y + 60 + i * 34, taken: false });
    }

    // ---- الوحوش (بعد نتيجة 1000) ----
    let enemy = false;
    if (y0 > 10000 && gap > 110 && y - w.lastEnemyY > 900 && r() < lerp(0.05, 0.16, d)) {
      const amp = 30 + r() * 70;
      const bx = amp + 25 + r() * (C.W - 2 * (amp + 25));
      w.enemies.push({ x: bx, bx, y: y0 + gap * 0.5, amp, sp: 0.8 + r() * 1.4, ph: r() * 6.28, dead: false, vy: 0, rot: 0 });
      w.lastEnemyY = y; enemy = true;
    }

    // ---- منصة تتكسر (فخ) بين المنصتين ----
    if (!enemy && !early && y0 > 3000 && gap > 75 && r() < lerp(0.18, 0.45, d)) {
      addPlatform(w, r() * (C.W - C.PW), y0 + gap * (0.35 + 0.3 * r()), 'b', d);
    }

    w.genY = y;
  }

  function createWorld(seed, opts) {
    opts = opts || {};
    const w = {
      seed: seed >>> 0, rnd: mulberry32((seed >>> 0) || 1), t: 0, nextId: 1,
      demo: !!opts.demo,
      lava: !!opts.lava, // عالم النار: تحت الشاشة حمم، فالكاميرا ما تلحك اللاعب لما يطيح
      hero: !!opts.hero, // وضع البطل (الكود السري): ما يموت، شبكة تحميه، وقفزات أقوى
      viewH: opts.viewH || 860,
      camY: -60,
      platforms: [], coins: [], enemies: [], events: [],
      genY: 0, lastMainX: C.W / 2 - C.PW / 2,
      lastRocketY: -1e9, lastShieldY: -1e9, lastEnemyY: -1e9, lastSpringY: -1e9, tutSpring: false,
      maxY: 0, runCoins: 0, stomps: 0, milestone: 0, over: false,
      // الحماس والكومبو
      fever: 0, feverT: 0, fevers: 0, combo: 0, comboT: 0, maxCombo: 0, lastLandY: 0,
      springs: 0, clutches: 0, revives: 0,
      // الأحداث المفاجئة (عندها مولّد عشوائي خاص حتى ما تأثر على توليد المنصات)
      erng: mulberry32(((seed >>> 0) ^ 0x9e3779b9) || 7), ev: null, nextEv: 1200, evCount: 0, evOrder: [],
      evSurvived: 0, meteorsSurvived: 0, meteors: [],
      player: {
        x: C.W / 2, y: 0, vx: 0, vy: C.JUMP, face: 1,
        rocket: 0, shield: false, invul: 0, state: 'alive', deadT: 0, squash: 0, flip: 0,
      },
    };
    addPlatform(w, 0, 0, 'g', 0); // الأرض: تحميك ببداية اللعبة فقط
    genUntil(w, w.camY + w.viewH + 300);
    return w;
  }

  function genUntil(w, yLimit) { while (w.genY < yLimit) genStep(w); }

  function landCheck(w, prevY) {
    const P = w.player;
    for (const p of w.platforms) {
      if (p.gone || p.broken) continue;
      if (w.demo && p.type !== 'g') continue;
      if (!(prevY >= p.y && P.y <= p.y)) continue;
      if (!overlapX(P.x, C.FOOT, p.x, p.w)) continue;

      if (p.type === 'b') { p.broken = true; emit(w, 'break', p.x + p.w / 2, p.y); continue; }

      const fallV = P.vy;
      P.y = p.y;
      let v = C.JUMP * (w.hero ? 1.3 : 1), kind = 'jump';
      const it = p.item;
      if (it && (it.kind === 'spring' || it.kind === 'tramp')) {
        const iw = it.kind === 'spring' ? 22 : 50;
        if (overlapX(P.x, C.FOOT - 3, p.x + it.ox, iw)) {
          kind = it.kind; v = kind === 'spring' ? C.SPRING : C.TRAMP; it.anim = 0.35;
          if (kind === 'tramp') P.flip = 1;
        }
      }
      if (w.feverT > 0 && kind === 'jump') v *= 1.15;
      P.vy = v; P.squash = 1;
      emit(w, 'jump', P.x, p.y, kind);
      if (!w.demo) landed(w, p, kind, fallV);
      if (p.type === 'v') { p.gone = true; p.pop = 0.0001; emit(w, 'vanish', p.x + p.w / 2, p.y); }
      return;
    }
  }

  function pickups(w, dt) {
    const P = w.player, cy = P.y + C.BODY_H / 2, mag = w.feverT > 0;
    for (const p of w.platforms) {
      const it = p.item;
      if (!it || it.taken || (it.kind !== 'rocket' && it.kind !== 'shield') || p.gone) continue;
      const ix = p.x + it.ox + (it.kind === 'rocket' ? 11 : 0);
      const iy = p.y + (it.kind === 'rocket' ? 18 : 34);
      if (Math.abs(wrapDx(P.x, ix)) < 30 && Math.abs(cy - iy) < 36) {
        it.taken = true;
        if (it.kind === 'rocket') { P.rocket = C.ROCKET_T; P.vy = Math.max(P.vy, 400); emit(w, 'rocket', ix, iy); }
        else { P.shield = true; emit(w, 'shield', ix, iy); }
      }
    }
    for (const c of w.coins) {
      if (c.taken) continue;
      if (mag) { // الحماس: العملات تنسحب لك مثل المغناطيس
        const dx = wrapDx(P.x, c.x), dy = cy - c.y;
        if (dx * dx + dy * dy < 150 * 150) { const k = Math.min(1, dt * 9); c.x = (c.x + dx * k + C.W) % C.W; c.y += dy * k; }
      }
      if (Math.abs(wrapDx(P.x, c.x)) < 26 && Math.abs(cy - c.y) < 30) {
        const val = w.feverT > 0 ? 2 : 1;
        c.taken = true; w.runCoins += val; addFever(w, 0.02); emit(w, 'coin', c.x, c.y, val);
      }
    }
  }

  function enemyCheck(w, prevY) {
    const P = w.player;
    for (const e of w.enemies) {
      if (e.dead) continue;
      // «نجاة بأعجوبة»: عبرت يم الوحش بدون ما يلمسك
      const ndx = wrapDx(P.x, e.x), ndy = P.y + 21 - e.y, nd = Math.hypot(ndx, ndy);
      if (nd < 64) e.near = true;
      else if (e.near && nd > 90 && !e.missed && !w.demo) { e.missed = true; w.clutches++; addFever(w, 0.12); emit(w, 'nearMiss', e.x, e.y); }
      if (Math.abs(ndx) >= 36) continue;
      if (!(P.y < e.y + 17 && P.y + C.BODY_H > e.y - 17)) continue;
      const kill = (vy) => { e.dead = true; e.vy = vy; };
      if (w.feverT > 0) { kill(300); w.runCoins += 3; w.stomps++; e.missed = true; emit(w, 'stomp', e.x, e.y, 3); continue; }
      if (P.rocket > 0 || w.hero) { kill(300); e.missed = true; emit(w, 'stomp', e.x, e.y, 0); continue; }
      if (P.vy < 0 && prevY >= e.y) {                 // دعسة من فوك
        kill(0); e.missed = true; P.vy = C.JUMP * 1.1; P.squash = 1; w.runCoins += 3; w.stomps++; addFever(w, 0.2);
        emit(w, 'stomp', e.x, e.y, 3); continue;
      }
      if (P.invul > 0) continue;
      if (P.shield) { P.shield = false; P.invul = 1; kill(200); emit(w, 'shieldBreak', P.x, P.y + 20); continue; }
      P.state = 'hit'; P.vx = 0; P.vy = 250; P.deadT = 0;
      emit(w, 'hit', P.x, P.y + 20);
      return;
    }
  }

  function score(w) { return Math.floor(w.maxY / C.SCORE_DIV); }

  /** خطوة وحدة من الزمن. dir: من ‎-1 (يسار) إلى 1 (يمين) */
  function step(w, dt, dir) {
    w.t += dt;
    const P = w.player;

    for (const p of w.platforms) {
      if (p.type === 'm' && !p.broken && !p.gone) {
        p.x += p.vx * dt;
        if (p.x < 0) { p.x = 0; p.vx = -p.vx; } else if (p.x > C.W - p.w) { p.x = C.W - p.w; p.vx = -p.vx; }
      }
      if (p.broken) { p.fallV -= C.G * dt; p.y += p.fallV * dt; p.rot += dt * 3; }
      if (p.pop > 0) p.pop += dt;
      if (p.item && p.item.anim > 0) p.item.anim = Math.max(0, p.item.anim - dt);
    }
    for (const e of w.enemies) {
      if (!e.dead) e.x = e.bx + Math.sin(w.t * e.sp + e.ph) * e.amp;
      else { e.vy -= C.G * dt; e.y += e.vy * dt; e.rot += dt * 8; }
    }

    for (const c of w.coins) if (c.vy && !c.taken) c.y += c.vy * dt; // مطر العملات
    P.squash = Math.max(0, P.squash - dt * 5);
    P.flip = Math.max(0, P.flip - dt * 1.6);
    P.invul = Math.max(0, P.invul - dt);

    if (P.state === 'alive') {
      const target = clamp(dir || 0, -1, 1) * C.MAXVX;
      P.vx += (target - P.vx) * Math.min(1, dt * 12);
      if (Math.abs(dir) > 0.15) P.face = dir > 0 ? 1 : -1;
      P.x += P.vx * dt;
      const ev = w.ev;
      if (ev && ev.type === 'wind') P.x += ev.dir * (95 + 55 * Math.sin(ev.t * 1.7)) * ev.k * dt; // الرياح تدفعك
      if (P.x < 0) P.x += C.W; else if (P.x >= C.W) P.x -= C.W;

      const prevY = P.y;
      if (P.rocket > 0) {
        P.rocket -= dt;
        P.vy += (C.ROCKET_V - P.vy) * Math.min(1, dt * 6);
        if (P.rocket <= 0) { P.rocket = 0; P.invul = Math.max(P.invul, 0.6); emit(w, 'rocketEnd', P.x, P.y); }
      } else {
        const gs = ev && ev.type === 'lowgrav' ? 1 - 0.38 * ev.k : 1; // الجاذبية الخفيفة
        P.vy = Math.max(P.vy - C.G * gs * dt, -C.MAX_FALL);
      }
      P.y += P.vy * dt;
      if (P.vy < 0 && P.rocket <= 0) landCheck(w, prevY);
      pickups(w, dt);
      enemyCheck(w, prevY);
      // وضع البطل: شبكة ذهبية بأسفل الشاشة تردّه لفوك بدل ما يطيح
      if (w.hero && P.vy < 0 && P.rocket <= 0 && P.y < w.camY + 12) {
        P.y = w.camY + 12; P.vy = C.TRAMP; P.squash = 1; emit(w, 'jump', P.x, P.y, 'net');
      }

      if (!w.demo) {
        if (w.feverT > 0) { w.feverT -= dt; if (w.feverT <= 0) { w.feverT = 0; P.invul = Math.max(P.invul, 0.8); emit(w, 'feverEnd', P.x, P.y); } }
        else w.fever = Math.max(0, w.fever - 0.02 * dt);
        if (w.comboT > 0) { w.comboT -= dt; if (w.comboT <= 0) w.combo = 0; }
      }

      // الكاميرا تصعد ويا اللاعب وما تنزل أبداً
      const target2 = P.y - w.viewH * 0.42;
      if (target2 > w.camY) w.camY += (target2 - w.camY) * Math.min(1, dt * 10);
      if (P.y - w.camY > w.viewH * 0.8) w.camY = P.y - w.viewH * 0.8;

      if (P.y > w.maxY) {
        w.maxY = P.y;
        const m = Math.floor(score(w) / 1000);
        if (m > w.milestone) { w.milestone = m; emit(w, 'milestone', P.x, P.y, m * 1000); }
      }
      if (P.state === 'alive' && P.y < w.camY - 30) { P.state = 'fall'; P.deadT = 0; P.rocket = 0; w.camAtFall = w.camY; emit(w, 'fall', P.x, P.y); }
    } else {
      // اللاعب طايح: جاذبية بس، بلا اصطدام
      P.deadT += dt;
      P.vy = Math.max(P.vy - C.G * dt, -C.MAX_FALL);
      P.y += P.vy * dt;
      P.x += P.vx * dt;
      if (P.state === 'fall') {
        // الكاميرا تلحكه شوية لجوه حتى تبين الطيحة
        if (P.deadT < 0.9 && !w.lava) w.camY = Math.min(w.camY, P.y - w.viewH * 0.3);
        if (P.deadT > 0.9 && !w.over) { w.over = true; emit(w, 'over', P.x, P.y); }
      } else if (P.y < w.camY - 80 && !w.over) { w.over = true; emit(w, 'over', P.x, P.y); }
    }

    updateEvents(w, dt);

    if (P.state === 'alive') {
      genUntil(w, w.camY + w.viewH + 300);
      // نمسح اللي نزل بعيد تحت الشاشة
      const cut = w.camY - w.viewH * 1.3 - 100;
      if (w.platforms.length > 80 || (w.t * 120 | 0) % 60 === 0) {
        w.platforms = w.platforms.filter((p) => p.y > cut || p.type === 'g' && w.camY < 400);
        w.coins = w.coins.filter((c) => c.y > cut && !(c.taken && c.y < w.camY));
        w.enemies = w.enemies.filter((e) => e.y > cut);
      }
    }
  }

  // ================================================================ الحماس والكومبو
  /** يملّي عدّاد الحماس، ولما يتملّى يشتغل وضع الحماس: ما تموت من الوحوش، عملات مضاعفة، ومغناطيس */
  function addFever(w, v) {
    if (w.demo || w.feverT > 0) return;
    w.fever = Math.min(1, w.fever + v);
    if (w.fever >= 1) { w.fever = 0; w.feverT = C.FEVER_T; w.fevers++; emit(w, 'fever', w.player.x, w.player.y); }
  }
  function landed(w, p, kind, fallV) {
    const P = w.player;
    if (kind === 'spring' || kind === 'tramp') { w.springs++; addFever(w, 0.08); }
    // نجاة بأعجوبة: لزمت منصة وإنت طايح بسرعة بأسفل الشاشة
    if (p.type !== 'g' && fallV < -900 && p.y < w.camY + 70) { w.clutches++; addFever(w, 0.15); emit(w, 'clutch', P.x, p.y); }
    if (p.y > w.lastLandY + 20) { // كل منصة أعلى من اللي قبلها تزيد الكومبو
      w.combo = w.comboT > 0 ? w.combo + 1 : 1; w.comboT = 1.7;
      if (w.combo > w.maxCombo) w.maxCombo = w.combo;
      addFever(w, 0.03 + Math.min(0.03, w.combo * 0.003));
      if (w.combo >= 5 && w.combo % 5 === 0) { w.runCoins += 1; emit(w, 'combo', P.x, p.y, w.combo); }
    } else if (p.y < w.lastLandY - 30) { w.combo = 0; w.comboT = 0; }
    w.lastLandY = p.y;
  }

  // ================================================================ الأحداث المفاجئة
  const EVENT_TYPES = ['wind', 'meteors', 'lowgrav', 'coinrain'];
  function startEvent(w, type) {
    if (!type) {
      if (w.evCount === 0) type = 'coinrain'; // أول حدث هدية حتى تتعود
      else {
        if (!w.evOrder.length) {
          w.evOrder = EVENT_TYPES.slice();
          for (let i = w.evOrder.length - 1; i > 0; i--) { const j = (w.erng() * (i + 1)) | 0; [w.evOrder[i], w.evOrder[j]] = [w.evOrder[j], w.evOrder[i]]; }
          if (w.lastEv && w.evOrder[w.evOrder.length - 1] === w.lastEv) w.evOrder.unshift(w.evOrder.pop());
        }
        type = w.evOrder.pop();
      }
    }
    w.ev = { type, t: 0, dur: C.EVENT_T, k: 0, spawn: 0.6, dir: w.erng() < 0.5 ? -1 : 1 };
    w.evCount++; w.lastEv = type;
    emit(w, 'eventStart', w.player.x, w.player.y, type);
  }
  function spawnMeteor(w) {
    const P = w.player, aim = w.erng() < 0.55;
    const x = aim ? clamp(P.x + (w.erng() * 2 - 1) * 40, 15, C.W - 15) : 15 + w.erng() * (C.W - 30);
    w.meteors.push({ id: w.nextId++, x, y: w.camY + w.viewH + 70, vx: (w.erng() * 2 - 1) * 40, vy: -620, warn: 1.0, dead: false });
    emit(w, 'meteorWarn', x, 0);
  }
  function updateEvents(w, dt) {
    if (w.demo) return;
    const P = w.player;
    if (!w.ev && P.state === 'alive' && score(w) >= w.nextEv) startEvent(w);
    const ev = w.ev;
    if (ev) {
      ev.t += dt;
      ev.k = Math.max(0, Math.min(1, ev.t / 0.8, (ev.dur - ev.t) / 0.8));
      if (ev.type === 'meteors' && ev.t < ev.dur - 1.6) {
        ev.spawn -= dt;
        if (ev.spawn <= 0) { ev.spawn = lerp(1.05, 0.6, difficulty(w.maxY)) * (0.8 + 0.4 * w.erng()); spawnMeteor(w); }
      }
      if (ev.type === 'coinrain' && ev.t < ev.dur - 1) {
        ev.spawn -= dt;
        if (ev.spawn <= 0) { ev.spawn = 0.22; w.coins.push({ x: 20 + w.erng() * (C.W - 40), y: w.camY + w.viewH + 30, taken: false, vy: -150 - w.erng() * 60, rain: true }); }
      }
      if (ev.t >= ev.dur) {
        if (P.state === 'alive') { w.evSurvived++; if (ev.type === 'meteors') w.meteorsSurvived++; }
        emit(w, 'eventEnd', P.x, P.y, ev.type);
        w.ev = null; w.nextEv = score(w) + 1400 + Math.floor(w.erng() * 600);
      }
    }
    // النيازك: إنذار ثانية وحدة بمكانها، بعدين تنزل
    for (const m of w.meteors) {
      if (m.warn > 0) { m.warn -= dt; m.y = w.camY + w.viewH + 70; if (m.warn <= 0) emit(w, 'meteorFall', m.x, m.y); continue; }
      m.x += m.vx * dt; m.y += m.vy * dt;
      if (m.dead || P.state !== 'alive') continue;
      const dx = wrapDx(P.x, m.x), dy = P.y + 21 - m.y;
      if (dx * dx + dy * dy < 30 * 30) {
        m.dead = true;
        if (P.rocket > 0 || w.hero || w.feverT > 0 || P.invul > 0) emit(w, 'meteorBlock', m.x, m.y);
        else if (P.shield) { P.shield = false; P.invul = 1; emit(w, 'shieldBreak', P.x, P.y + 20); }
        else { P.state = 'hit'; P.vx = 0; P.vy = 250; P.deadT = 0; emit(w, 'hit', P.x, P.y + 20, 'meteor'); }
      }
    }
    if (w.meteors.length) w.meteors = w.meteors.filter((m) => !m.dead && m.y > w.camY - 120);
  }

  // ================================================================ فرصة ثانية
  /** يرجّع اللاعب للحياة فوك منصة إنقاذ، ويشيل الخطر القريب */
  function revive(w) {
    const P = w.player;
    if (P.state === 'alive') return false;
    if (w.camAtFall != null) { w.camY = Math.max(w.camY, w.camAtFall); w.camAtFall = null; } // نرجّع الكاميرا لمكانها قبل الطيحة
    const y = w.camY + w.viewH * 0.22;
    const p = addPlatform(w, clamp(P.x - C.PW / 2, 0, C.W - C.PW), y, 'n', 0);
    p.rescue = true;
    Object.assign(P, { state: 'alive', deadT: 0, x: p.x + C.PW / 2, y, vx: 0, vy: C.SPRING, invul: 3, rocket: 0, squash: 1, flip: 0 });
    w.over = false; w.revives++; w.lastLandY = y; w.combo = 0;
    for (const e of w.enemies) if (!e.dead && Math.abs(e.y - y) < 600) { e.dead = true; e.vy = 200; }
    w.meteors = [];
    if (w.ev && w.ev.type === 'meteors') w.ev.t = Math.max(w.ev.t, w.ev.dur - 1.6);
    emit(w, 'revive', P.x, y);
    return true;
  }

  /** وضع البطل: صاروخ وقت ما تريد */
  function turbo(w) {
    const P = w.player;
    if (!w.hero || P.state !== 'alive') return false;
    P.rocket = C.ROCKET_T; P.vy = Math.max(P.vy, 400); emit(w, 'rocket', P.x, P.y, 'turbo');
    return true;
  }

  const Core = { C, createWorld, step, score, difficulty, mulberry32, wrapDx, overlapX, genUntil, turbo, revive, addFever, startEvent };
  if (typeof module === 'object' && module.exports) module.exports = Core;
  else root.NattaCore = Core;
})(typeof self !== 'undefined' ? self : this);
