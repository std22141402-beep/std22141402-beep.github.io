// فحص نطّة داخل متصفح حقيقي بمقاس آيفون: كل الشاشات، اللمس، اللعب، الموت، الحفظ
// التشغيل: node natta/tests/e2e.mjs   (الصور تنحفظ بـ /tmp/natta-shots)
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { chromium } = require('/opt/npm-tools/node_modules/playwright');
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const SHOTS = '/tmp/natta-shots';
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
const URL0 = `http://localhost:${server.address().port}/natta/`;

const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox', '--autoplay-policy=no-user-gesture-required'] });
const ctx = await browser.newContext({
  viewport: { width: 390, height: 844 }, deviceScaleFactor: 3, isMobile: true, hasTouch: true,
  userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1',
});
const page = await ctx.newPage();
const errors = [];
page.on('pageerror', (e) => errors.push('pageerror: ' + e.message));
page.on('console', (m) => { if (m.type() === 'error') errors.push('console: ' + m.text()); });

let fails = 0;
const ok = (cond, msg) => { console.log((cond ? '  ✓ ' : '  ✗ ') + msg); if (!cond) fails++; };
const shot = (name) => page.screenshot({ path: `${SHOTS}/${name}.png` });
const wait = (ms) => page.waitForTimeout(ms);
const G = (fn, arg) => page.evaluate(fn, arg);

await page.goto(URL0);
await wait(1200);
await shot('1-home');
ok(await page.isVisible('#home'), 'الرئيسية تبين');
ok(await page.isVisible('#a2hs'), 'تلميح «إضافة إلى الشاشة الرئيسية» يبين بسفاري الآيفون');
ok((await G(() => window.__natta.world.player.state)) === 'alive', 'الشخصية تنط بالرئيسية');

// الشخصيات
await page.tap('#openShop');
await wait(700);
await shot('2-shop');
ok((await page.locator('.skin').count()) === 7, '7 شخصيات');
await page.locator('.skin').nth(1).tap();
await wait(300);
ok((await page.textContent('#toast')).includes('تحتاج'), 'ما تكدر تشتري بلا عملات');
await page.tap('#shopBack');
await wait(300);

// بداية اللعب
await page.tap('#play', { force: true });
await wait(900);
await shot('3-play-start');
ok((await G(() => window.__natta.state)) === 'play', 'اللعبة بدت');
ok(await page.isVisible('#tut'), 'التعليمات تبين أول مرة');

// اللمس: نضغط يسار الشاشة ونتأكد يمشي يسار
const box = await page.locator('#game').boundingBox();
await page.mouse.move(box.x + 40, box.y + 500);
await page.mouse.down();
await wait(250);
const vxL = await G(() => window.__natta.world.player.vx);
await page.mouse.up();
await page.mouse.move(box.x + box.width - 40, box.y + 500);
await page.mouse.down();
await wait(250);
const vxR = await G(() => window.__natta.world.player.vx);
await page.mouse.up();
ok(vxL < -100 && vxR > 100, `الضغط يسار/يمين يحرك الشخصية (vx ${vxL | 0} / ${vxR | 0})`);

// بوت يلعب بالكيبورد (يمر بنفس مسار التحكم الحقيقي)
await G(() => {
  const N = window.__natta, C = N.Core.C;
  let held = null;
  const press = (k) => { if (held === k) return; if (held) window.dispatchEvent(new KeyboardEvent('keyup', { code: held })); held = k; if (k) window.dispatchEvent(new KeyboardEvent('keydown', { code: k })); };
  const loop = () => {
    if (window.__botOff) { press(null); return; }
    const w = N.world, P = w.player;
    if (N.state === 'play' && P.state === 'alive') {
      const apex = P.y + Math.max(0, P.vy) ** 2 / (2 * C.G);
      let best = null;
      for (const p of w.platforms) {
        if (p.type === 'b' || p.type === 'g' || p.gone || p.broken) continue;
        if (p.y > apex - 8 || p.y < w.camY + 10 || (P.vy < 0 && p.y > P.y)) continue;
        if (!best || p.y > best.y) best = p;
      }
      const dx = best ? N.Core.wrapDx(best.x + best.w / 2, P.x) : 0;
      press(Math.abs(dx) < 8 ? null : dx > 0 ? 'ArrowRight' : 'ArrowLeft');
    }
    requestAnimationFrame(loop);
  };
  loop();
});
await page.waitForFunction(() => window.__natta.Core.score(window.__natta.world) > 400 || window.__natta.state !== 'play', null, { timeout: 30000 }).catch(() => {});
const s1 = await G(() => window.__natta.Core.score(window.__natta.world));
await shot('4-play-climb');
ok(s1 > 400, `البوت صعد (${s1})`);

// نروح لارتفاعات عالية حتى نشوف الغروب/الليل/الفضاء والوحوش
async function teleport(y, name) {
  await G((y) => {
    const w = window.__natta.world, P = w.player;
    P.y = y; P.vy = 820; w.camY = y - w.viewH * 0.42; w.maxY = Math.max(w.maxY, y);
    w.genY = Math.max(w.genY, w.camY - 50);
    w.platforms = w.platforms.filter((p) => p.y > w.camY - 400);
    P.rocket = 0; P.invul = 3;
  }, y);
  await wait(1100);
  await shot(name);
}
await teleport(17500, '5-sunset');
await teleport(32000, '6-night');
await G(() => { const w = window.__natta.world; w.player.rocket = 2.6; w.player.shield = true; });
await wait(600);
await shot('7-rocket-shield');
await teleport(60000, '8-space');
ok((await G(() => window.__natta.world.enemies.length)) > 0, 'الوحوش تطلع بالمراحل العالية');

// نوقف ونكمل
await page.tap('#pauseBtn');
await wait(300);
ok((await G(() => window.__natta.state)) === 'pause', 'زر الإيقاف يشتغل');
await shot('9-pause');
await page.tap('#resume');
await wait(200);
ok((await G(() => window.__natta.state)) === 'play', 'كمّل يرجع للعب');

// الطيحة
await G(() => { window.__botOff = true; const w = window.__natta.world; w.player.y = w.camY - 100; w.player.vy = -200; w.player.rocket = 0; });
await page.waitForSelector('#over:not([hidden])', { timeout: 5000 });
await wait(900);
await shot('10-over');
const saved = await G(() => JSON.parse(localStorage.getItem('natta.v1')));
ok(saved.games === 1 && saved.best >= 6000 && saved.tut === true, `النتيجة انحفظت (best ${saved.best}, coins ${saved.coins})`);
ok(saved.owned.includes('rainbow'), 'شخصية «أسطورة» انفتحت بعد 5000');

// مرة ثانية: خط أفضل نتيجة وبدون تعليمات
await page.tap('#again');
await wait(500);
ok((await G(() => window.__natta.state)) === 'play' && !(await page.isVisible('#tut')), 'مرة ثانية تبدي فوراً وبدون تعليمات');
await G(() => { const w = window.__natta.world; const by = window.__natta.save.best * 10; w.player.y = by - 300; w.player.vy = 820; w.camY = by - 300 - w.viewH * 0.42; w.maxY = by - 300; w.genY = w.camY; w.platforms = []; w.player.invul = 3; });
await wait(700);
await shot('11-best-line');

// الشخصيات بعد ما صار عنده عملات
await G(() => { window.__natta.save.coins = 1000; window.__natta.goHome(); window.__natta.openShop(); });
await wait(300);
await page.locator('.skin').nth(5).tap();
await wait(500);
await shot('12-shop-bought');
ok((await G(() => window.__natta.save.skin)) === 'king', 'الشراء والاختيار يشتغلون');

// شاشة صغيرة (آيفون SE) وشاشة كمبيوتر
await page.setViewportSize({ width: 375, height: 667 });
await G(() => window.__natta.goHome());
await wait(600);
await shot('13-home-se');
await page.setViewportSize({ width: 1280, height: 800 });
await wait(600);
await shot('14-desktop');

ok(errors.length === 0, 'ماكو أخطاء بالكونسول' + (errors.length ? ':\n    ' + errors.join('\n    ') : ''));
await browser.close();
server.close();
console.log(fails ? `\n${fails} فشل` : '\nكلشي تمام ✅');
process.exit(fails ? 1 : 0);
