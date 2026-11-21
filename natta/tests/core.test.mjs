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
