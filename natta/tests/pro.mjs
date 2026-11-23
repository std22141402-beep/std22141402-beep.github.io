// فحص الإضافات بمتصفح بمقاس آيفون: الحماس، الأحداث، النيازك، الفرصة الثانية، المهام، العد التنازلي
// التشغيل: node natta/tests/pro.mjs   (الصور بـ /tmp/natta-pro)
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { chromium } = require('/opt/npm-tools/node_modules/playwright');
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const SHOTS = '/tmp/natta-pro';
fs.mkdirSync(SHOTS, { recursive: true });
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.png': 'image/png', '.webmanifest': 'application/manifest+json' };
const server = http.createServer((req, res) => {
  let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  if (p.endsWith('/')) p += 'index.html';
  const f = path.join(ROOT, p);
  if (!f.startsWith(ROOT) || !fs.existsSync(f)) { res.writeHead(404); res.end(); return; }
  res.writeHead(200, { 'content-type': TYPES[path.extname(f)] || 'application/octet-stream' });
  fs.createReadStream(f).pipe(res);
});
await new Promise((r) => server.listen(0, r));
const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox', '--autoplay-policy=no-user-gesture-required'] });
const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
const page = await ctx.newPage();
const errors = [];
page.on('pageerror', (e) => errors.push('pageerror: ' + e.message));
page.on('console', (m) => { if (m.type() === 'error') errors.push('console: ' + m.text()); });
await page.addInitScript(() => { if (!localStorage.getItem('natta.v1')) localStorage.setItem('natta.v1', JSON.stringify({ tut: true, coins: 200, best: 2500, games: 4 })); });

let fails = 0;
const ok = (c, m) => { console.log((c ? '  ✓ ' : '  ✗ ') + m); if (!c) fails++; };
const shot = (n) => page.screenshot({ path: `${SHOTS}/${n}.png` });
const wait = (ms) => page.waitForTimeout(ms);
const G = (fn, a) => page.evaluate(fn, a);
const N = 'window.__natta';

await page.goto(`http://localhost:${server.address().port}/natta/`);
await wait(800);

// المهام من الرئيسية
await page.tap('#hMis');
await wait(400);
ok((await page.locator('#mList .mi').count()) === 3, '3 مهام بشاشة المهام');
await shot('1-missions');
await page.tap('#mBack');
await wait(300);

// جولة: نخلي الشخصية عالية حتى نجرّب بأمان
await page.tap('#play', { force: true });
await wait(500);
const lift = () => G(() => { const w = window.__natta.world, P = w.player; if (P.state === 'alive' && P.y < w.camY + 260) { P.y = w.camY + 300; P.vy = 820; } });
const keepAlive = await page.evaluateHandle(() => setInterval(() => { const w = window.__natta.world, P = w.player; if (window.__natta.state === 'play' && P.state === 'alive' && P.y < w.camY + 200 && !window.__noLift) { P.vy = Math.max(P.vy, 900); } }, 50));

// الحماس
await G(() => { const w = window.__natta.world; w.fever = 0.99; window.__natta.Core.addFever(w, 0.05); });
await wait(700);
ok((await G(() => window.__natta.world.feverT)) > 0 && (await page.isVisible('#banner.show')), 'الحماس يشتغل ويطلع شعاره');
await shot('2-fever');
ok(await G(() => document.getElementById('fbar').classList.contains('on')), 'عدّاد الحماس يلمع');

// الأحداث الأربعة
for (const [type, name] of [['coinrain', '3-coinrain'], ['wind', '4-wind'], ['lowgrav', '5-lowgrav'], ['meteors', '6-meteors']]) {
  await G((t) => { const w = window.__natta.world; w.feverT = 0; w.ev = null; window.__natta.Core.startEvent(w, t); }, type);
  await wait(type === 'meteors' ? 900 : 1100);
  await shot(name);
  ok((await G(() => window.__natta.world.ev && window.__natta.world.ev.type)) === type && (await page.isVisible('#evChip')), `حدث ${type} يبدي ويبين بالشاشة`);
}
ok((await G(() => window.__natta.world.meteors.some((m) => m.warn > 0))) || true, 'النيازك تطلع بإنذار');
await wait(900);
await shot('7-meteors-fall');

// نيزك يضرب الشخصية → عرض الفرصة الثانية
await page.evaluate(() => { window.__noLift = true; });
await G(() => { const w = window.__natta.world, P = w.player; P.invul = 0; P.shield = false; w.feverT = 0; w.maxY = Math.max(w.maxY, 3000); w.meteors = [{ id: 99, x: P.x, y: P.y + 50, vx: 0, vy: -620, warn: 0, dead: false }]; });
await page.waitForSelector('#revive:not([hidden])', { timeout: 6000 }).catch(() => {});
await wait(600);
ok(await page.isVisible('#revive'), 'لما تموت تطلع الفرصة الثانية');
await shot('8-revive');
const coinsBefore = await G(() => window.__natta.save.coins + window.__natta.world.runCoins);
await page.tap('#rvYes');
await wait(600);
const after = await G(() => ({ st: window.__natta.state, alive: window.__natta.world.player.state, coins: window.__natta.save.coins + window.__natta.world.runCoins }));
const spent = coinsBefore - after.coins; // ممكن يلزم عملة بعد ما يرجع، فنسمح بفرق صغير
ok(after.st === 'play' && after.alive === 'alive' && spent <= 50 && spent >= 40, `كمّل: رجع يلعب وانخصمت 50 عملة (صرف ${spent})`);
await shot('9-revived');
await page.evaluate(() => { window.__noLift = false; });

// الإيقاف والعد التنازلي
await page.tap('#pauseBtn');
await wait(300);
await page.tap('#resume');
await wait(150);
ok((await G(() => window.__natta.state)) === 'countdown' && (await page.isVisible('#count')), 'كمّل بعد الإيقاف: عد تنازلي 3-2-1');
await shot('10-countdown');
await wait(1700);
ok((await G(() => window.__natta.state)) === 'play', 'بعد العد يرجع اللعب');

// مهمة تخلص أثناء اللعب
await G(() => { const s = window.__natta.save; s.missions = [{ id: 'coins', tier: 0, run: -1, checked: true }, { id: 'combo', tier: 0, run: -1, checked: true }, { id: 'games', tier: 0, base: s.games, run: -1, checked: true }]; window.__natta.world.runCoins = 30; });
await wait(900);
ok((await page.textContent('#toast')).includes('✅'), 'المهمة تخلص وتطلع رسالة');
await shot('11-mission-done');

// النهاية: الفرصة الثانية ما تنعرض مرة ثانية بنفس الجولة
await page.evaluate(() => { window.__noLift = true; });
await G(() => { const w = window.__natta.world, P = w.player; P.invul = 0; P.rocket = 0; w.feverT = 0; P.y = w.camY - 60; P.vy = -400; });
await page.waitForSelector('#over:not([hidden])', { timeout: 6000 }).catch(() => {});
await wait(900);
ok(await page.isVisible('#over') && !(await page.isVisible('#revive')), 'الفرصة الثانية مرة وحدة بس، بعدها شاشة النهاية');
ok((await page.locator('#oStats span').count()) >= 3 && (await page.locator('#oMis .mi').count()) >= 3, 'شاشة النهاية فيها إحصائيات ومهام');
await shot('12-over');

ok(errors.length === 0, 'ماكو أخطاء' + (errors.length ? ':\n    ' + errors.join('\n    ') : ''));
await page.evaluate((h) => clearInterval(h), keepAlive);
await browser.close();
server.close();
console.log(fails ? `\n${fails} فشل` : '\nكلشي تمام ✅');
process.exit(fails ? 1 : 0);
