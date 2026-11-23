// فحص المغامرة كاملة بمتصفح بمقاس آيفون: القمة ← الهوا ← المظلة ← الوادي ← الغزال (بالتسلّل) ← التاجر ← الجائزة
// التشغيل: node natta/tests/story.mjs   (الصور بـ /tmp/natta-story)
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { chromium } = require('/opt/npm-tools/node_modules/playwright');
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const SHOTS = '/tmp/natta-story';
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
await page.addInitScript(() => { if (!localStorage.getItem('natta.v1')) localStorage.setItem('natta.v1', JSON.stringify({ tut: true, coins: 100, best: 3000, games: 9 })); });

let fails = 0;
const ok = (c, m) => { console.log((c ? '  ✓ ' : '  ✗ ') + m); if (!c) fails++; };
const shot = (n) => page.screenshot({ path: `${SHOTS}/${n}.png` });
const wait = (ms) => page.waitForTimeout(ms);
const G = (fn, a) => page.evaluate(fn, a);
const until = async (fn, ms = 20000, a) => { const t0 = Date.now(); while (Date.now() - t0 < ms) { if (await G(fn, a)) return true; await wait(60); } return false; };

await page.goto(`http://localhost:${server.address().port}/natta/`);
await wait(700);
await shot('01-home');
ok(await G(() => document.getElementById('hSum').textContent.includes('7000')), 'الرئيسية تبيّن هدف القمة 🏔️ 7000');

// 1) نوصل قرب القمة وننزل عليها
await page.tap('#play', { force: true }); await wait(300);
const coins0 = await G(() => window.__natta.save.coins);
await G(() => {
  const N = window.__natta, w = N.world, C = N.Core.C;
  N.Core.genUntil(w, C.SUMMIT_Y + 1200);
  const s = w.platforms.find((p) => p.type === 's');
  w.platforms = w.platforms.filter((p) => p === s || p.y < s.y - 400);
  w.enemies = []; w.meteors = []; w.ev = null;
  Object.assign(w.player, { x: s.x + s.w / 2, y: s.y + 260, vy: 200, vx: 0, rocket: 0, state: 'alive' });
  w.camY = s.y - w.viewH * 0.5; w.maxY = s.y; w.runCoins = 7;
});
await wait(250); await shot('02-final-climb');
ok(await until(() => window.__natta.state === 'summit', 6000), 'لما ينزل عالصخرة يوكف بالقمة');
await wait(2200); await shot('03-summit-flag');
const sv = await G(() => ({ coins: window.__natta.save.coins, summits: window.__natta.save.summits, hud: document.getElementById('hud').hidden, skip: !document.getElementById('skip').hidden, y: window.__natta.world.player.y, sy: window.__natta.world.summitY }));
ok(sv.coins - coins0 >= 207 && sv.coins - coins0 <= 300 && sv.summits === 1, `مكافأة القمة انحسبت (+${sv.coins - coins0}: 200 وعملات الجولة) والقمم = ${sv.summits}`);
ok(sv.hud && sv.skip, 'العدّاد يختفي ويطلع زر «تخطّى»');
ok(Math.abs(sv.y - sv.sy) < 1, 'واكف بمكانه فوك القمة');

// 2) الهوا يقوى (نقدّم الوقت بالتخطّي) ← العاصفة تجرفه
await page.tap('#skip', { force: true });
await until(() => window.__natta.SUM && window.__natta.SUM.wind > 0.8, 4000);
await shot('04-summit-wind');
ok(await until(() => window.__natta.SUM && window.__natta.SUM.blown, 4000), 'العاصفة جرفته من القمة');
await wait(500); await shot('05-blown-away');

// 3) المظلة
ok(await until(() => window.__natta.state === 'valley', 5000), 'صار بالوادي');
ok(await until(() => window.__natta.V && window.__natta.V.phase === 'glide', 4000), 'انفتحت المظلة');
await wait(900); await shot('06-parachute');
const x0 = await G(() => window.__natta.V.p.x);
await page.keyboard.down('ArrowRight'); await wait(900); await page.keyboard.up('ArrowRight');
const x1 = await G(() => window.__natta.V.p.x);
ok(x1 - x0 > 60, `يتوجّه بالمظلة يمين (${Math.round(x1 - x0)})`);
await G(() => { window.__timeScale = 4; });
ok(await until(() => window.__natta.V.phase === 'walk', 12000), 'نزل عالأرض بسلام');
await G(() => { window.__timeScale = 1; });
const got = await G(() => window.__natta.V.coinsGot);
console.log('    عملات الهوا:', got);
await wait(1400); await shot('07-valley-landing');

// 4) تسلّل للغزال: نمشي بضغطات قصيرة بس وهو ياكل، ونوكف إذا رفع راسه
await G(() => { const V = window.__natta.V; V.p.x = 1700; V.cam.x = 1700; });
let pressing = false, maxSus = 0, sawLook = false, merchant = false;
const t0 = Date.now();
while (Date.now() - t0 < 45000) {
  const s = await G(() => { const V = window.__natta.V; return { st: V.gz.state, sus: V.gz.sus, d: V.gz.x - V.p.x, caught: V.caught, hold: V.p.holdT, dlg: !document.getElementById('dlg').hidden }; });
  if (s.caught) break;
  maxSus = Math.max(maxSus, s.sus); if (s.st === 'look') sawLook = true; if (s.dlg) merchant = true;
  const go = s.st === 'graze' && s.sus < 0.4 && s.d > 0;
  if (go && !pressing && s.hold === 0) { await page.keyboard.down('ArrowRight'); pressing = true; }
  else if (pressing && (!go || s.hold > 0.32)) { await page.keyboard.up('ArrowRight'); pressing = false; }
  if (s.st === 'look' || s.st === 'alert') await shot('08-sneak-' + s.st);
  await wait(30);
}
if (pressing) await page.keyboard.up('ArrowRight');
const caught = await G(() => window.__natta.V.caught);
ok(caught, `تسلّل ولزم الغزال بدون ما يهرب (أعلى شك ${maxSus.toFixed(2)}${sawLook ? '، ورفع راسه بالطريق' : ''})`);
ok(merchant, 'التاجر «أبو جاسم» نادى عليه أثناء الصيد');
if (!caught) await G(() => { const V = window.__natta.V; V.p.x = V.gz.x - 30; V.gz.state = 'tired'; });
await wait(600); await shot('09-caught');

// 5) الركض يخلّيه يهرب: نجرّب على غزال ثاني (نعيد الحالة)
const fled = await G(async () => {
  const V = window.__natta.V, save = { ...V.gz }, ps = V.p.x;
  Object.assign(V.gz, { state: 'graze', sus: 0, t: 0, gt: 9, x: ps + 300, stamina: 4 });
  V.caught = false;
  return { save, ps };
});
await page.keyboard.down('ArrowRight');
const ranAway = await until(() => window.__natta.V.gz.state === 'flee', 4000);
await page.keyboard.up('ArrowRight');
ok(ranAway, 'إذا تركض عليه ينتبه ويهرب');
await shot('10-flee');
await G(() => { const V = window.__natta.V; V.gz.state = 'tired'; V.gz.stamina = 0; V.gz.t = 0; V.p.x = V.gz.x - 90; });
await page.keyboard.down('ArrowRight');
ok(await until(() => window.__natta.V.caught, 5000), 'لما يتعب تلحكه وتلزمه');
await page.keyboard.up('ArrowRight');

// 6) نودّيه للتاجر
ok(await until(() => window.__natta.V.gz.state === 'follow', 1000), 'الغزال يمشي وراه بالحبل');
await G(() => { window.__timeScale = 3; });
await page.keyboard.down('ArrowLeft');
const deliv = await until(() => window.__natta.V.delivered, 15000);
await page.keyboard.up('ArrowLeft');
await G(() => { window.__timeScale = 1; });
ok(deliv, 'سلّمه بمكان التسليم يم الخيمة');
await wait(700); await shot('11-merchant-reward');
const rw = await G(() => ({ owned: window.__natta.save.owned.includes('explorer'), adv: window.__natta.save.adventures }));
ok(rw.owned && rw.adv === 1, 'انفتحت شخصية «المغامر» وانحسبت المغامرة');
ok(await until(() => window.__natta.state === 'ending', 8000), 'طلعت شاشة نهاية المغامرة');
await wait(600); await shot('12-ending');
const total = await G(() => window.__natta.save.coins);
ok(total >= coins0 + 207 + 500, `الجائزة وصلت (${total - coins0 - 207} عملة بعد القمة)`);

// 7) نلبس المغامر ونرجع للرئيسية، ونشوفه بالمتجر
await page.tap('#eWear', { force: true }); await wait(300);
ok(await G(() => window.__natta.save.skin === 'explorer'), 'لبس شخصية المغامر');
await page.tap('#eHome', { force: true }); await wait(500);
ok(await G(() => window.__natta.state === 'home' && !window.__natta.V), 'رجع للرئيسية ونظّف الوادي');
await shot('13-home-explorer');

// 8) الإيقاف بنص الوادي يرجّع للوادي (مو للصعود)
await page.tap('#play', { force: true }); await wait(200);
await G(() => window.__natta.startValley());
await G(() => { window.__timeScale = 4; }); await until(() => window.__natta.V.phase === 'walk', 12000); await G(() => { window.__timeScale = 1; });
await page.tap('#vPause', { force: true }); await wait(200);
ok(await G(() => window.__natta.state === 'pause'), 'زر الإيقاف يشتغل بالوادي');
await page.tap('#resume', { force: true });
ok(await until(() => window.__natta.state === 'valley', 5000), 'بعد العد يرجع للوادي');
await page.keyboard.press('Escape'); await wait(200);
await page.tap('#quit', { force: true }); await wait(400);
ok(await G(() => window.__natta.state === 'home'), '«إنهاء» من الوادي يرجّع للرئيسية');

// 9) شخصية المغامر مقفولة بالمتجر لغير اللي خلّصها
await G(() => { const s = window.__natta.save; s.owned = s.owned.filter((x) => x !== 'explorer'); s.skin = 'green'; window.__natta.openShop(); });
await wait(400); await shot('14-shop-locked');
ok(await G(() => [...document.querySelectorAll('#grid *')].some((e) => e.textContent === '🔒 كمّل المغامرة')), 'بالمتجر: «🔒 كمّل المغامرة»');

ok(errors.length === 0, 'ماكو أخطاء بالكونسول' + (errors.length ? ': ' + errors.slice(0, 3).join(' | ') : ''));
await browser.close(); server.close();
console.log(fails ? `\n✗ ${fails} فشل` : '\n✓ كلشي تمام');
process.exit(fails ? 1 : 0);
