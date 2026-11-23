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
const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox', '--autoplay-policy=no-user-gesture-required', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
const page = await ctx.newPage();
const errors = [];
page.on('pageerror', (e) => errors.push('pageerror: ' + e.message));
page.on('console', (m) => { if (m.type() === 'error') errors.push('console: ' + m.text()); });
// منطق المغامرة كله ينفحص بالوادي الـ 2D (أسرع بالمتصفح الوهمي)، والـ 3D له قسم خاص بالآخر
await page.addInitScript(() => { window.__no3d = true; });
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
await G(() => window.__natta.startRun()); await wait(300);
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

// 10) الوادي ثلاثي الأبعاد 🏞️: عالم مفتوح، جويستك وكاميرا مثل ببجي، خريطة وعلامات، والتاجر والغزال بمكان عشوائي
{
  const ctx3 = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1, isMobile: true, hasTouch: true });
  const p3 = await ctx3.newPage();
  const errs3 = [];
  p3.on('pageerror', (e) => errs3.push('pageerror: ' + e.message));
  p3.on('console', (m) => { if (m.type() === 'error') errs3.push('console: ' + m.text()); });
  await p3.addInitScript(() => { window.__r3dPR = 1; window.__seed = 7; localStorage.setItem('natta.v1', JSON.stringify({ tut: true, coins: 100, best: 3000, games: 9, skin: 'explorer', owned: ['green', 'explorer'] })); });
  const G3 = (fn, a) => p3.evaluate(fn, a);
  const until3 = async (fn, ms = 20000) => { const t0 = Date.now(); while (Date.now() - t0 < ms) { if (await G3(fn)) return true; await p3.waitForTimeout(80); } return false; };
  const shot3 = (n) => p3.screenshot({ path: `${SHOTS}/${n}.png` });
  const pos = () => G3(() => { const p = window.__natta.R3.S.p; return [p.x, p.z]; });
  await p3.goto(`http://localhost:${server.address().port}/natta/`);
  await p3.waitForTimeout(500);
  ok(await G3(() => !document.querySelector('script[src="valley3d.js"]')), 'ملف الـ 3D ما ينزل ويه أول فتحة (اللعبة تفتح خفيفة)');
  await G3(() => { const N = window.__natta; N.startRun(); const w = N.world; N.Core.genUntil(w, N.Core.C.SUMMIT_Y + 1200); const s = w.platforms.find((p) => p.type === 's'); w.enemies = []; Object.assign(w.player, { x: s.x + s.w / 2, y: s.y + 120, vy: 100, state: 'alive' }); w.camY = s.y - w.viewH * 0.5; });
  ok(await until3(() => window.__natta.state === 'summit', 8000), '3D: وصل القمة');
  ok(await until3(() => window.__natta.r3State === 'ready', 20000), '3D: الوادي ثلاثي الأبعاد نزل وجاهز وقت القمة');
  await p3.tap('#skip', { force: true });
  ok(await until3(() => window.__natta.state === 'valley', 20000), '3D: صار بالوادي');
  const info = await G3(() => { const R = window.__natta.R3, c = document.getElementById('g3d'); return { r3d: window.__natta.V.r3d, shown: !c.hidden && c.clientWidth > 300, tris: R.renderer.info.render.triangles, VL: R.info.VL, FL: R.info.FLOOR }; });
  ok(info.r3d && info.shown && info.tris > 10000, `3D: المشهد يترسم (${info.tris} مثلث)`);
  ok(info.VL * info.FL * 2 >= 2500, `3D: قاع الوادي ${info.VL}×${info.FL * 2} م = ${info.VL * info.FL * 2} م² (دونم عراقي 2500 م²)`);
  const wallH = await G3(() => { const R = window.__natta.R3; return [R.ground(60, 0), R.ground(60, 30), R.ground(60, -30)]; });
  ok(wallH[1] - wallH[0] > 15 && wallH[2] - wallH[0] > 15, `3D: جوانب الوادي ترتفع (${wallH[1].toFixed(0)} و ${wallH[2].toFixed(0)} م)`);
  await until3(() => window.__natta.V.phase === 'glide', 10000);
  const a0 = await pos();
  await p3.mouse.move(80, 650); await p3.mouse.down(); await p3.mouse.move(80, 598, { steps: 3 });
  await p3.waitForTimeout(2200);
  const a1 = await pos();
  await p3.mouse.up();
  ok(Math.hypot(a1[0] - a0[0], a1[1] - a0[1]) > 0.6, `3D: الجويستك يوجّه المظلة (${Math.hypot(a1[0] - a0[0], a1[1] - a0[1]).toFixed(1)} م)`);
  await shot3('3d-01-parachute');
  await G3(() => { window.__timeScale = 6; }); await until3(() => window.__natta.V.phase === 'walk', 60000); await G3(() => { window.__timeScale = 1; });
  ok(await G3(() => window.__natta.V.phase === 'walk'), '3D: نزل بالمظلة عالأرض');
  ok(await G3(() => document.getElementById('vobj').textContent.includes('دوّر على الغزال')), '3D: المهمة «دوّر على الغزال» بدون أي سهم يدلّك');
  await p3.waitForTimeout(1500); await shot3('3d-02-landing');
  const w0 = await pos();
  await p3.keyboard.down('KeyW'); await p3.waitForTimeout(2200); await p3.keyboard.up('KeyW');
  const w1 = await pos();
  ok(Math.hypot(w1[0] - w0[0], w1[1] - w0[1]) > 1, `3D: يمشي بكل الاتجاهات (${Math.hypot(w1[0] - w0[0], w1[1] - w0[1]).toFixed(1)} م)`);
  const h0 = await G3(() => window.__natta.R3.heading());
  await p3.mouse.move(300, 520); await p3.mouse.down(); await p3.mouse.move(370, 520, { steps: 4 }); await p3.mouse.up();
  await p3.waitForTimeout(600);
  const h1 = await G3(() => window.__natta.R3.heading());
  ok(Math.abs(h1 - h0) > 15, `3D: السحب يمين يلف الكاميرا (${h0.toFixed(0)}° ← ${h1.toFixed(0)}°)`);
  // الخريطة: تنفتح من الخريطة الصغيرة، تنكشف بس اللي مشيت بيه، وتحط علامة
  await p3.mouse.click(330, 150); await p3.waitForTimeout(500);
  ok(await G3(() => !document.getElementById('mapv').hidden), '3D: الخريطة تنفتح من الخريطة الصغيرة');
  const box = await p3.locator('#mapC').boundingBox();
  await p3.mouse.click(box.x + box.width * 0.5, box.y + box.height * 0.35); await p3.waitForTimeout(300);
  await p3.tap('#mapv .pin[data-t="flag"]', { force: true });
  await p3.mouse.click(box.x + box.width * 0.62, box.y + box.height * 0.6); await p3.waitForTimeout(300);
  const pins = await G3(() => window.__natta.V.pins.map((p) => p.type));
  ok(pins.includes('camp') && pins.includes('flag'), `3D: تحط علامات عالخريطة (${pins.join('، ')})`);
  await shot3('3d-03-map');
  await p3.tap('#mapX', { force: true }); await p3.waitForTimeout(300);
  ok(await G3(() => document.getElementById('mapv').hidden), '3D: الخريطة تنسد');
  // نلگه التاجر: يصيحك من بعيد، ويحچي وياك إذا وصلته
  await G3(() => { const S = window.__natta.R3.S; S.p.x = S.merW.x + 14; S.p.z = S.merW.z; });
  ok(await until3(() => window.__natta.R3.S.called, 4000), '3D: أبو جاسم يصيحك لما تقرب');
  await G3(() => { const S = window.__natta.R3.S; S.p.x = S.merW.x + 2.6; S.p.z = S.merW.z + 1.2; });
  ok(await until3(() => window.__natta.R3.S.met && !document.getElementById('dlg').hidden, 4000), '3D: وصلت التاجر وحچى وياك');
  await p3.waitForTimeout(2000); await shot3('3d-04-merchant');
  ok(await G3(() => (document.querySelector('#dlgWho img') || {}).src?.startsWith('data:image')), '3D: صورة أبو جاسم بمربع الكلام مرسومة من الموديل');
  // الغزال: نلزمه، ويمشي ورانا للخيمة
  await G3(() => { const S = window.__natta.R3.S, g = S.gz; S.p.x = g.x - 0.9; S.p.z = g.z; g.state = 'tired'; g.stamina = 0; g.t = 0; });
  ok(await until3(() => window.__natta.R3.S.caught, 5000), '3D: لزم الغزال');
  await p3.waitForTimeout(1500); await shot3('3d-05-caught');
  await G3(() => { const S = window.__natta.R3.S; S.p.x = S.zoneW.x + 0.3; S.p.z = S.zoneW.z + 0.2; S.gz.x = S.p.x - 1.4; S.gz.z = S.p.z; });
  ok(await until3(() => window.__natta.R3.S.delivered, 6000), '3D: سلّمه لأبو جاسم بالدائرة يم الخيمة');
  await p3.waitForTimeout(1800); await shot3('3d-06-deliver');
  await G3(() => { window.__timeScale = 3; });
  ok(await until3(() => window.__natta.state === 'ending', 40000), '3D: شاشة نهاية المغامرة');
  await G3(() => { window.__timeScale = 1; });
  const first = await G3(() => window.__natta.V.info);
  await p3.tap('#eHome', { force: true }); await p3.waitForTimeout(400);
  ok(await G3(() => document.getElementById('g3d').hidden && window.__natta.state === 'home'), '3D: الرجوع للرئيسية يخفي المشهد');
  // مغامرة ثانية: التاجر والغزال بمكان ثاني
  await G3(() => { window.__seed = 99; const N = window.__natta; N.startRun(); N.startValley(); });
  const second = await G3(() => window.__natta.V.info);
  ok(second && (second.camp !== first.camp || Math.hypot(second.gazelle[0] - first.gazelle[0], second.gazelle[1] - first.gazelle[1]) > 10), `3D: كل مغامرة التاجر والغزال بمكان جديد (خيمة ${first.camp + 1} ← ${second.camp + 1})`);
  await G3(() => window.__natta.goHome());
  ok(errs3.length === 0, '3D: ماكو أخطاء' + (errs3.length ? ': ' + errs3.slice(0, 3).join(' | ') : ''));
  await ctx3.close();
}
await browser.close(); server.close();
console.log(fails ? `\n✗ ${fails} فشل` : '\n✓ كلشي تمام');
process.exit(fails ? 1 : 0);
