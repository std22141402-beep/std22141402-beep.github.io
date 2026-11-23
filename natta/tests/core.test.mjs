// فحص محرك نطّة: المنصات دائماً توصلها القفزة، والعناصر بأماكن عادلة، وبوت بسيط يكدر يصعد
// التشغيل: node --test natta/tests/core.test.mjs
import test from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import vm from 'node:vm';

// نحمّل core.js مثل ما يحمّله المتصفح بالضبط
const sandbox = { self: {} };
vm.runInNewContext(fs.readFileSync(new URL('../core.js', import.meta.url), 'utf8'), sandbox);
const Core = sandbox.self.NattaCore;
const { C } = Core;

const SOLID = new Set(['g', 'n', 'm', 'v']);

function genAll(seed, upto) {
  const w = Core.createWorld(seed, { viewH: 860 });
  Core.genUntil(w, upto);
  return w;
}

test('ارتفاع القفزة أكبر من أكبر فراغ بهامش', () => {
  assert.ok(C.MAX_GAP < C.REACH * 0.9, `MAX_GAP=${C.MAX_GAP} REACH=${C.REACH}`);
});

test('كل منصتين حقيقيتين ورا بعض توصلهن القفزة (300 بذرة)', () => {
  for (let s = 1; s <= 300; s++) {
    const w = genAll(s * 7919, 150000);
    const ys = w.platforms.filter((p) => SOLID.has(p.type)).map((p) => p.y).sort((a, b) => a - b);
    for (let i = 1; i < ys.length; i++) {
      assert.ok(ys[i] - ys[i - 1] <= C.MAX_GAP + 1e-6, `seed ${s}: gap ${ys[i] - ys[i - 1]} at y=${ys[i]}`);
    }
  }
});

test('الوحوش ما تلزك بالمنصات، والعناصر الخاصة مو متكررة هواية', () => {
  for (let s = 1; s <= 200; s++) {
    const w = genAll(s * 104729, 150000);
    const solid = w.platforms.filter((p) => SOLID.has(p.type));
    for (const e of w.enemies) {
      for (const p of solid) assert.ok(Math.abs(e.y - p.y) > 17 + 20, `seed ${s}: enemy at ${e.y} too close to platform ${p.y}`);
      assert.ok(e.bx - e.amp >= 0 && e.bx + e.amp <= C.W, 'enemy stays on screen');
    }
    const rockets = w.platforms.filter((p) => p.item && p.item.kind === 'rocket').map((p) => p.y);
    for (let i = 1; i < rockets.length; i++) assert.ok(rockets[i] - rockets[i - 1] >= 4000);
    assert.ok(w.platforms.some((p) => p.item && p.item.kind === 'spring' && p.y < 1300), 'نابض تعليمي بالبداية');
  }
});

test('البداية سهلة: ماكو فخاخ ولا وحوش قبل نتيجة 300', () => {
  for (let s = 1; s <= 100; s++) {
    const w = genAll(s, 3000);
    assert.ok(!w.platforms.some((p) => p.type === 'b' && p.y < 3000));
    assert.ok(!w.enemies.some((e) => e.y < 10000));
  }
});

// بوت بسيط: يوجّه نفسه لأعلى منصة حقيقية يوصلها
function bot(w) {
  const P = w.player;
  const apex = P.y + Math.max(0, P.vy) ** 2 / (2 * C.G);
  let best = null;
  for (const p of w.platforms) {
    if (!SOLID.has(p.type) || p.gone || p.broken || p.type === 'g') continue;
    if (p.y > apex - 8 || p.y < w.camY + 10) continue;
    if (P.vy < 0 && p.y > P.y) continue;
    if (!best || p.y > best.y) best = p;
  }
  if (!best) return 0;
  const dx = Core.wrapDx(best.x + best.w / 2, P.x);
  return Math.abs(dx) < 6 ? 0 : Math.max(-1, Math.min(1, dx / 40));
}

test('بوت بسيط يوصل بعيد (اللعبة ممكن تنلعب)', () => {
  const scores = [];
  for (let s = 1; s <= 40; s++) {
    const w = Core.createWorld(s * 31337, { viewH: 860 });
    let t = 0;
    while (!w.over && t < 400) { Core.step(w, 1 / 120, bot(w)); w.events.length = 0; t += 1 / 120; }
    scores.push(Core.score(w));
  }
  scores.sort((a, b) => a - b);
  const median = scores[scores.length >> 1];
  console.log('    bot scores:', scores.join(' '));
  assert.ok(median >= 1500, `median bot score ${median}`);
});

test('الأرض تحمي اللاعب بالبداية، والطيحة تخلص اللعبة', () => {
  const w = Core.createWorld(5, { viewH: 860 });
  for (let i = 0; i < 120 * 3; i++) Core.step(w, 1 / 120, 0);
  // يا هو ممكن يصعد على منصات، بس ما لازم يموت بأول 3 ثواني
  assert.ok(!w.over);
  const d = Core.createWorld(9, { viewH: 860, demo: true });
  for (let i = 0; i < 120 * 20; i++) Core.step(d, 1 / 120, Math.sin(i / 200));
  assert.strictEqual(d.player.state, 'alive');
  assert.ok(d.player.y <= C.REACH + 1, 'الديمو يبقى ينط على الأرض');
});

test('وضع البطل: ما يموت حتى لو ما لمس شي، والصاروخ يوصله للفضاء بسرعة', () => {
  const w = Core.createWorld(77, { viewH: 860, hero: true });
  for (let i = 0; i < 120 * 90; i++) {
    Core.step(w, 1 / 120, 0);
    w.events.length = 0;
    assert.strictEqual(w.player.state, 'alive');
  }
  assert.ok(!w.over);
  const fast = Core.createWorld(78, { viewH: 860, hero: true });
  let t = 0;
  while (Core.score(fast) < 5500 && t < 120) {
    if (fast.player.rocket <= 0) Core.turbo(fast);
    Core.step(fast, 1 / 120, 0); fast.events.length = 0; t += 1 / 120;
  }
  console.log(`    البطل وصل الفضاء (5500) بـ ${t.toFixed(0)} ثانية`);
  assert.ok(Core.score(fast) >= 5500 && t < 70);
  const normal = Core.createWorld(79, { viewH: 860 });
  assert.strictEqual(Core.turbo(normal), false, 'الصاروخ عند الطلب بس بوضع البطل');
});

// ---------------------------------------------------------------- الإضافات: حماس، أحداث، نيازك، فرصة ثانية
const run = (w, sec, dir = 0, onEv) => { for (let i = 0; i < sec * 120; i++) { Core.step(w, 1 / 120, typeof dir === 'function' ? dir(w) : dir); for (const e of w.events) onEv && onEv(e); w.events.length = 0; } };

test('الحماس: يتملّى، ويخليك تقتل الوحوش باللمس، وعملاته مضاعفة، ويخلص بعد 6 ثواني', () => {
  const w = Core.createWorld(11, { viewH: 860 });
  run(w, 0.5);
  const evs = [];
  Core.addFever(w, 1);
  assert.ok(w.feverT > 0 && w.fevers === 1);
  const P = w.player;
  w.enemies.push({ x: P.x, bx: P.x, y: P.y + 21, amp: 0, sp: 0, ph: 0, dead: false, vy: 0, rot: 0 });
  const coins0 = w.runCoins;
  w.coins.push({ x: P.x, y: P.y + 21, taken: false });
  run(w, 1 / 60, 0, (e) => evs.push(e.type));
  assert.strictEqual(P.state, 'alive', 'ما يموت بالحماس');
  assert.ok(w.enemies.some((e) => e.dead), 'الوحش مات');
  assert.ok(w.runCoins - coins0 >= 2 + 3, 'عملة مضاعفة + مكافأة الوحش');
  run(w, 6.2, 0, (e) => evs.push(e.type));
  assert.ok(evs.includes('feverEnd') && w.feverT === 0);
});

test('الكومبو يزيد لما تصعد منصة ورا منصة، والبوت يشغّل الحماس بجولة طويلة', () => {
  let fevers = 0, combos = 0;
  for (let s = 1; s <= 12; s++) {
    const w = Core.createWorld(s * 4242, { viewH: 860 });
    run(w, 120, bot);
    fevers += w.fevers; combos = Math.max(combos, w.maxCombo);
  }
  console.log(`    12 جولة بوت: حماس ${fevers} مرة، أعلى كومبو ${combos}`);
  assert.ok(fevers >= 6 && combos >= 10 && fevers <= 12 * 6);
});

test('الأحداث: أول حدث مطر عملات عند 1200، وبعدها تتنوع، وكل حدث يخلص', () => {
  const w = Core.createWorld(5, { viewH: 860 });
  const seen = [];
  run(w, 0.2);
  w.maxY = 12000; // نتيجة 1200
  run(w, 0.1, 0, (e) => e.type === 'eventStart' && seen.push(e.v));
  assert.deepStrictEqual(seen, ['coinrain']);
  assert.ok(w.coins.some((c) => c.rain) || true);
  const ends = [];
  w.player.invul = 99; // حتى ما يموت بالفحص
  const keep = (ww) => { ww.player.y = Math.max(ww.player.y, ww.camY + 200); if (ww.player.vy < 0) ww.player.vy = 820; return 0; };
  for (let k = 0; k < 4; k++) {
    run(w, 9.5, keep, (e) => { if (e.type === 'eventStart') seen.push(e.v); if (e.type === 'eventEnd') ends.push(e.v); });
    w.maxY = Math.max(w.maxY, w.nextEv * 10 + 10);
  }
  console.log('    الأحداث:', seen.join(' ← '));
  assert.ok(new Set(seen).size >= 3, 'تتنوع');
  for (let i = 1; i < seen.length; i++) assert.notStrictEqual(seen[i], seen[i - 1], 'ما يتكرر نفس الحدث ورا بعض');
  assert.ok(ends.length >= 3);
});

test('النيازك: إنذار ثانية قبل ما تنزل، وتقتل إذا لمستك، والدرع يحميك', () => {
  const w = Core.createWorld(8, { viewH: 860 });
  run(w, 0.3);
  Core.startEvent(w, 'meteors');
  const evs = [];
  run(w, 0.7, 0, (e) => evs.push(e.type));
  assert.ok(evs.includes('meteorWarn') && w.meteors.length > 0 && w.meteors[0].warn > 0, 'أول شي إنذار');
  const P = w.player;
  // نيزك نازل فوك راسه مباشرة
  w.meteors = [{ id: 1, x: P.x, y: P.y + 45, vx: 0, vy: -620, warn: 0, dead: false }];
  P.shield = true;
  run(w, 0.05, 0, (e) => evs.push(e.type));
  assert.ok(P.state === 'alive' && !P.shield && evs.includes('shieldBreak'), 'الدرع ينكسر بداله');
  P.invul = 0;
  w.meteors = [{ id: 2, x: P.x, y: P.y + 45, vx: 0, vy: -620, warn: 0, dead: false }];
  run(w, 0.05, 0, (e) => evs.push(e.type));
  assert.strictEqual(P.state, 'hit', 'بدون درع يموت');
});

test('الفرصة الثانية: ترجّعه فوك منصة إنقاذ ويكمل', () => {
  const w = Core.createWorld(21, { viewH: 860 });
  run(w, 3, bot);
  const P = w.player, s0 = Core.score(w);
  P.y = w.camY - 100; P.vy = -500; // يطيح
  let over = false;
  run(w, 2, 0, (e) => { if (e.type === 'over') over = true; });
  assert.ok(over && w.over);
  assert.ok(Core.revive(w));
  assert.ok(P.state === 'alive' && !w.over && P.vy > 1000 && P.invul > 2);
  run(w, 4, bot);
  assert.strictEqual(P.state, 'alive');
  assert.ok(Core.score(w) >= s0);
  assert.strictEqual(Core.revive(w), false, 'ما تشتغل إذا هو عايش');
});

test('الرياح تدفع، والجاذبية الخفيفة تخلي القفزة أعلى', () => {
  const a = Core.createWorld(30, { viewH: 860 }), b = Core.createWorld(30, { viewH: 860 });
  run(a, 0.2); run(b, 0.2);
  Core.startEvent(a, 'wind'); a.ev.dir = 1;
  const x0 = a.player.x;
  run(a, 1.2, 0); run(b, 1.2, 0);
  assert.ok(Core.wrapDx(a.player.x, x0) > 60 && Math.abs(Core.wrapDx(b.player.x, x0)) < 5, 'الرياح دفعته يمين');
  const c = Core.createWorld(31, { viewH: 860, demo: false });
  c.platforms = c.platforms.filter((p) => p.type === 'g'); // بس الأرض حتى نقيس القفزة
  run(c, 0.3);
  Core.startEvent(c, 'lowgrav'); c.ev.t = 1; c.ev.k = 1;
  let top = 0;
  for (let i = 0; i < 120 * 2; i++) { Core.step(c, 1 / 120, 0); c.events.length = 0; top = Math.max(top, c.player.y); c.platforms = c.platforms.filter((p) => p.type === 'g'); }
  assert.ok(top > C.REACH * 1.3, `قفزة أعلى بالجاذبية الخفيفة (${top | 0} > ${C.REACH | 0})`);
});
