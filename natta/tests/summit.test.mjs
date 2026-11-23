// فحص القمة 🏔️: تطلع بنتيجة 7000، توصلها القفزة، بدون وحوش أو فخاخ قبلها، والوقوف عليها
// التشغيل: node --test natta/tests/summit.test.mjs
import test from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import vm from 'node:vm';

const sandbox = { self: {} };
vm.runInNewContext(fs.readFileSync(new URL('../core.js', import.meta.url), 'utf8'), sandbox);
const Core = sandbox.self.NattaCore;
const { C } = Core;
const SOLID = new Set(['g', 'n', 'm', 'v', 's']);

test('القمة وحدة، بنتيجة 7000 تقريباً، عريضة، وتوصلها القفزة من المنصة اللي قبلها', () => {
  for (let s = 1; s <= 150; s++) {
    const w = Core.createWorld(s * 7717, { viewH: 860 });
    Core.genUntil(w, C.SUMMIT_Y + 3000);
    const tops = w.platforms.filter((p) => p.type === 's');
    assert.strictEqual(tops.length, 1, `seed ${s}`);
    const top = tops[0];
    assert.ok(Math.abs(top.y - C.SUMMIT_Y) <= 45, `القمة عند ${top.y}`);
    assert.strictEqual(top.w, C.SUMMIT_W);
    assert.ok(!w.platforms.some((p) => p.y > top.y), 'ماكو شي فوك القمة');
    const ys = w.platforms.filter((p) => SOLID.has(p.type)).map((p) => p.y).sort((a, b) => a - b);
    for (let i = 1; i < ys.length; i++) assert.ok(ys[i] - ys[i - 1] <= C.MAX_GAP + 1e-6, `seed ${s}: فراغ ${ys[i] - ys[i - 1]}`);
    assert.ok(!w.enemies.some((e) => e.y > C.SUMMIT_Y - 900), 'ماكو وحوش قرب القمة');
    assert.ok(!w.platforms.some((p) => p.type === 'b' && p.y > C.SUMMIT_Y - 900), 'ماكو فخاخ قرب القمة');
    assert.strictEqual(w.summitY, top.y);
  }
});

test('النزول على القمة يوكّف الشخصية، والكاميرا تتمركز، والجاذبية ما تشتغل', () => {
  const w = Core.createWorld(99, { viewH: 860 });
  Core.genUntil(w, C.SUMMIT_Y + 1000);
  const top = w.platforms.find((p) => p.type === 's');
  const P = w.player;
  Object.assign(P, { x: top.x + top.w / 2, y: top.y + 120, vy: -10 });
  w.camY = top.y - 400; w.maxY = top.y - 10;
  const evs = [];
  for (let i = 0; i < 120 * 3; i++) { Core.step(w, 1 / 120, 0); evs.push(...w.events.map((e) => e.type)); w.events.length = 0; }
  assert.ok(evs.includes('summit'));
  assert.strictEqual(P.state, 'summit');
  assert.strictEqual(P.y, top.y, 'واكف فوكها وما يطيح');
  assert.ok(Core.score(w) >= C.SUMMIT - 5, `النتيجة ${Core.score(w)}`);
  assert.ok(Math.abs(w.camY - (top.y - 860 * 0.42)) < 30, 'الكاميرا على المنظر');
});

test('الصاروخ ما يعبر القمة', () => {
  const w = Core.createWorld(5, { viewH: 860 });
  Core.genUntil(w, C.SUMMIT_Y + 1000);
  const top = w.platforms.find((p) => p.type === 's');
  const P = w.player;
  Object.assign(P, { x: top.x + top.w / 2, y: top.y - 300, vy: 600, rocket: 2.6 });
  w.camY = top.y - 700; w.maxY = top.y - 300;
  for (let i = 0; i < 120 * 4 && P.state === 'alive'; i++) { Core.step(w, 1 / 120, 0); w.events.length = 0; }
  assert.strictEqual(P.state, 'summit');
  assert.ok(P.y < top.y + 1);
});

test('قرب القمة ما تبدي أحداث مفاجئة', () => {
  const w = Core.createWorld(6, { viewH: 860 });
  for (let i = 0; i < 30; i++) Core.step(w, 1 / 120, 0);
  w.maxY = (C.SUMMIT - 500) * C.SCORE_DIV; w.nextEv = 0;
  w.player.y = w.maxY; w.camY = w.maxY - 300; w.player.invul = 9;
  for (let i = 0; i < 60; i++) { Core.step(w, 1 / 120, 0); w.events.length = 0; }
  assert.strictEqual(w.ev, null);
});
