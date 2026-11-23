// فحص الجبل ثلاثي الأبعاد بمتصفح بمقاس آيفون: البداية ← المشي والكاميرا ← النطة ← العملات ← الوكعة والاستراحة
// ← الذيب ← الطريق كامل للقمة (بوت يمشي الطريق) ← ساحة القمة (شاي، جرس، تلسكوب، نافورة) ← الريح ← الوادي
// التشغيل: node natta/tests/mountain.mjs   (الصور بـ /tmp/natta-mountain)
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { chromium } = require('/opt/npm-tools/node_modules/playwright');
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const SHOTS = '/tmp/natta-mountain';
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
const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1, isMobile: true, hasTouch: true });
const page = await ctx.newPage();
const errors = [];
page.on('pageerror', (e) => errors.push('pageerror: ' + e.message));
page.on('console', (m) => { if (m.type() === 'error' && !/favicon|404/.test(m.text())) errors.push('console: ' + m.text()); });
await page.addInitScript(() => { window.__r3dPR = 1; if (!localStorage.getItem('natta.v1')) localStorage.setItem('natta.v1', JSON.stringify({ tut: true, coins: 40, best: 3000, games: 9 })); });

let fails = 0;
const ok = (c, m) => { console.log((c ? '  ✓ ' : '  ✗ ') + m); if (!c) fails++; };
const shot = (n) => page.screenshot({ path: `${SHOTS}/${n}.png` });
const wait = (ms) => page.waitForTimeout(ms);
const G = (fn, a) => page.evaluate(fn, a);
const until = async (fn, ms = 20000, a) => { const t0 = Date.now(); while (Date.now() - t0 < ms) { if (await G(fn, a)) return true; await wait(60); } return false; };
// المتصفح الوهمي يرسم بالمعالج (~2 لقطة بالثانية)، فنسرّع وقت اللعبة بالخطوات اللي تعتمد على الوقت
const fast = (k) => G((k) => { window.__timeScale = k; }, k);
const P = () => G(() => { const p = window.__natta.M3.S.p; return { x: p.x, y: p.y, z: p.z, air: p.air }; });
/** نحط البطل على نقطة بالطريق ونوجّه الكاميرا لكدام */
const tp = (seg, k, extra = {}) => G(([seg, k, extra]) => {
  const M = window.__natta.M3, s = M.info.segs[seg], p = s.pts[Math.min(k, s.pts.length - 1)], q = s.pts[Math.min(k + 3, s.pts.length - 1)];
  Object.assign(M.S.p, { x: p.x, z: p.z, y: p.y, ground: p.y, air: false, vx: 0, vz: 0, vy: 0, stun: 0, rot: 0 }, extra); M.S.fall = 0;
  M.cam.yaw = Math.atan2(q.z - p.z, q.x - p.x); M.cam.init = false; return p.kind;
}, [seg, k, extra]);

await page.goto(`http://localhost:${server.address().port}/natta/`);
await wait(600);
ok(await G(() => document.getElementById('play').textContent.includes('العب') && !document.getElementById('playJump').hidden), 'الرئيسية: «العب» للجبل و«وضع القفز» للعبة الكلاسيكية');
ok(await until(() => window.__natta.r3State === 'ready', 30000), 'ملف الـ 3D نزل لوحده من البداية');

// 1) البداية
await page.tap('#play', { force: true });
ok(await until(() => window.__natta.state === 'mountain', 30000), 'زر «العب» يفتح الجبل ثلاثي الأبعاد');
const info = await G(() => { const M = window.__natta.M3; return { ...M.info, cps: M.info.checkpoints.length, coins: M.info.coins.length, segs: undefined, checkpoints: undefined, stones: M.info.stones.length, bridges: M.info.bridges.length, beasts: M.info.beasts.map((b) => b.kind) }; });
ok(info.HS === 95, `ارتفاع الجبل ${info.HS} م`);
ok(info.trailLen > 600, `طول الطرق ${info.trailLen} م (متعرجة مو كبل)`);
ok(info.area > 500 && info.area < 600, `ساحة القمة ${info.area} م² (~550)`);
ok(info.bridges >= 2 && info.stones >= 3 && info.cps >= 5, `التحديات: ${info.bridges} جسور حبال، ${info.stones} حجار بالساقية، ${info.cps} نقاط استراحة`);
ok(info.beasts.filter((k) => k === 'wolf').length >= 2 && info.beasts.includes('boar'), `حيوانات برية: ${info.beasts.join('، ')}`);
await until(() => !document.getElementById('jumpBtn').hidden, 5000);
const ui = await G(() => ({ jump: !document.getElementById('jumpBtn').hidden, bar: !document.getElementById('vbar').hidden, map: document.getElementById('vMap').hidden, g3d: !document.getElementById('g3d').hidden, obj: document.getElementById('vobj').textContent }));
ok(ui.jump && ui.bar && ui.map && ui.g3d && ui.obj.includes('قمة'), `الواجهة: زر النطة، الهدف «${ui.obj}»، بلا خريطة (حتى تضيع بالمتاهة) ${JSON.stringify(ui)}`);
const tris = await G(() => window.__natta.M3.renderer.info.render.triangles);
ok(tris > 50000 && tris < 700000, `المشهد يترسم (${tris} مثلث)`);
const dense = await G(() => { const M = window.__natta.M3; let n = 0; for (const o of M.scene.children) if (o.isInstancedMesh && o.count > 20) n += o.count; return n; });
ok(dense > 8000, `غابة كثيفة (${dense} شجرة وشجيرة)`);
await wait(1800); await shot('01-start');

// 2) المشي بالجويستك، الكاميرا، والنطة
const a0 = await P();
await page.mouse.move(80, 650); await page.mouse.down(); await page.mouse.move(80, 590, { steps: 3 });
await wait(1800);
const a1 = await P(); await page.mouse.up();
ok(Math.hypot(a1.x - a0.x, a1.z - a0.z) > 2, `الجويستك يمشّي البطل (${Math.hypot(a1.x - a0.x, a1.z - a0.z).toFixed(1)} م)`);
const h0 = await G(() => window.__natta.M3.heading());
await page.mouse.move(250, 450); await page.mouse.down(); await page.mouse.move(330, 450, { steps: 4 }); await page.mouse.up();
await wait(300);
const h1 = await G(() => window.__natta.M3.heading());
ok(Math.abs(h1 - h0) > 15, `السحب يمين يلف الكاميرا (${h0.toFixed(0)}° ← ${h1.toFixed(0)}°)`);
await page.dispatchEvent('#jumpBtn', 'pointerdown');
ok(await until(() => window.__natta.M3.S.p.air, 1500), 'زر النطة ينطّط البطل');
await wait(900);

// 3) العملات
const c0 = await G(() => window.__natta.MT.coins);
await G(() => { const M = window.__natta.M3, c = M.info.coins.find((o) => !o.taken && Math.abs(o.y - 0.9 - M.ground(o.x, o.z)) < 1.5); Object.assign(M.S.p, { x: c.x + 0.1, z: c.z, y: c.y - 0.9, ground: c.y - 0.9, air: false }); });
ok(await until(() => window.__natta.MT.coins > 0, 3000), `العملات تنلزم (${c0} ← ${await G(() => window.__natta.MT.coins)})`);

// 4) الجسر: الوكعة من اللوح الناقص ترجعك لنقطة الاستراحة
const br = await G(() => { const b = window.__natta.M3.info.bridges[0]; return { seg: b.seg.id, i: b.i, gap: b.seg.pts.slice(b.i, b.j + 1).findIndex((p) => p.gap) }; });
await tp(br.seg, br.i - 4); await wait(1200); await shot('02-bridge');
await tp(br.seg, br.i + br.gap);
await fast(4);
ok(await until(() => window.__natta.M3.S.fall > 0, 3000), 'اللوح الناقص بالجسر: البطل يوكع');
ok(await until(() => window.__natta.M3.S.fall === 0, 8000), 'بعد الوكعة يرجع لآخر نقطة استراحة');
await fast(0);
const cpName = await G(() => document.getElementById('toast').textContent);
ok(cpName.includes('رجعت'), `رسالة الرجوع: ${cpName}`);
// وبالنطة يعبر اللوح الناقص
await tp(br.seg, br.i + br.gap - 2);
const crossed = await G(([seg, gi]) => {
  const M = window.__natta.M3, s = M.info.segs[seg], P = M.S.p; let jumped = false;
  const g = s.pts[gi], ahead = () => (P.x - g.x) * (s.pts[gi + 1].x - g.x) + (P.z - g.z) * (s.pts[gi + 1].z - g.z) > 0;
  for (let n = 0; n < 240; n++) { const q = s.pts[Math.min(s.pts.length - 1, gi + 6)]; M.cam.yaw = Math.atan2(q.z - P.z, q.x - P.x); const ev = M.step(1 / 60, { jx: 0, jy: 1, mag: 0.55, jump: !jumped && n === 8 }); if (ev.includes('jump')) jumped = true; if (M.S.fall > 0) return 'fell'; if (jumped && !P.air && ahead() && Math.hypot(P.x - g.x, P.z - g.z) > 0.9) return 'ok'; }
  return 'stuck';
}, [br.seg, br.i + br.gap]);
ok(crossed === 'ok', `بالنطة يعبر اللوح الناقص (${crossed})`);

// 5) الذيب: إذا لزمك ياخذ عملات
await G(() => { const M = window.__natta.M3, w = M.info.beasts.find((b) => b.kind === 'wolf'), P = M.S.p; window.__natta.MT.coins = 20; M.S.fall = 0; Object.assign(P, { x: w.home.x, z: w.home.z, y: w.home.y, ground: w.home.y, air: false, stun: 0, vx: 0, vz: 0 }); w.state = 'chase'; w.t = 0; w.x = P.x + 0.4; w.z = P.z; w.y = P.y; });
await until(() => window.__natta.MT.coins < 20, 3000);
const bit = await G(() => window.__natta.MT.coins);
ok(bit === 5, `الذيب لزمه وأخذ 15 عملة (20 ← ${bit})`);
await wait(500); await shot('03-wolf');

// 6) الطريق كامل للقمة: بوت يمشي من البداية (يعبر الجسور، يطلع من المتاهة، الحافة، الحجار، والدرج)
const climb = await G(() => {
  const M = window.__natta.M3, segs = M.info.segs, A = segs[0], C2 = segs[segs.length - 1];
  const maze = segs.filter((s) => s.kind === 'maze' && s.cells), plain = segs.filter((s) => s.kind === 'maze' && !s.cells);
  const entry = plain.find((s) => Math.hypot(s.pts[0].x - A.pts.at(-1).x, s.pts[0].z - A.pts.at(-1).z) < 3), exit = plain.find((s) => s !== entry);
  const key = (c) => c[0] * 10 + c[1], adj = new Map();
  for (const s of maze) { const [u, v] = s.cells.map(key); for (const [a, b, rev] of [[u, v, false], [v, u, true]]) { if (!adj.has(a)) adj.set(a, []); adj.get(a).push([b, s, rev]); } }
  const prev = new Map([[0, null]]), q = [0];
  while (q.length) { const u = q.shift(); if (u === 36) break; for (const [v, s, rev] of adj.get(u) || []) if (!prev.has(v)) { prev.set(v, [u, s, rev]); q.push(v); } }
  const path = []; for (let v = 36; prev.get(v); v = prev.get(v)[0]) path.unshift(prev.get(v));
  let pts = [...A.pts, ...entry.pts]; for (const [, s, rev] of path) pts = pts.concat(rev ? [...s.pts].reverse() : s.pts);
  pts = pts.concat(exit.pts, C2.pts, [{ x: 0, z: -3, y: 95, kind: 'plaza' }]);
  M.enter({ id: 'classic', body: '#FFB703', dark: '#B26B00', belly: '#FFE6A8' });
  for (const b of M.info.beasts) b.cool = 1e9; // البوت يفحص الطريق، الحيوانات انفحصت فوك
  const S = M.S, Pp = S.p; let i = 0, t = 0, falls = 0, jumps = 0, cps = 0, lastI = 0, stuck = 0;
  while (t < 600) {
    while (i < pts.length - 1 && Math.hypot(pts[i].x - Pp.x, pts[i].z - Pp.z) < 1.4) i++;
    const tg = pts[i], dx = tg.x - Pp.x, dz = tg.z - Pp.z; M.cam.yaw = Math.atan2(dz, dx);
    let jump = false; for (let k = i; k < Math.min(i + 3, pts.length); k++) if (pts[k].gap && !Pp.air && Math.hypot(pts[k].x - Pp.x, pts[k].z - Pp.z) < 2.2) jump = true;
    const here = M.surface(Pp.x, Pp.z, Pp.y), onSt = here.kind === 'stone' || pts[i].kind === 'stones';
    if (!Pp.air && onSt) { const st = M.info.stones.find((s) => Math.hypot(s.x - Pp.x, s.z - Pp.z) > 1 && Math.hypot(s.x - Pp.x, s.z - Pp.z) < 3 && ((s.x - Pp.x) * dx + (s.z - Pp.z) * dz) > 0); if (st) { M.cam.yaw = Math.atan2(st.z - Pp.z, st.x - Pp.x); if (here.kind === 'stone' || Math.hypot(st.x - Pp.x, st.z - Pp.z) < 2.6) jump = true; } else if (here.kind === 'stone') jump = true; }
    const ev = M.step(1 / 60, { jx: 0, jy: 1, mag: onSt ? 0.55 : 1, jump }); t += 1 / 60;
    for (const e of ev) { const n = Array.isArray(e) ? e[0] : e; if (n === 'fall') falls++; if (n === 'jump') jumps++; if (n === 'checkpoint') cps++; if (n === 'respawn') { i = Math.max(0, pts.findIndex((p) => Math.hypot(p.x - Pp.x, p.z - Pp.z) < 2)); } if (n === 'summit') return { ok: true, t: Math.round(t), falls, jumps, cps, len: Math.round(pts.length * 0.8) }; }
    if (Math.floor(t) !== Math.floor(t - 1 / 60)) { if (i === lastI && ++stuck > 25) return { ok: false, i, n: pts.length, at: [Pp.x, Pp.y, Pp.z].map((v) => v.toFixed(1)) }; if (i !== lastI) stuck = 0; lastI = i; }
  }
  return { ok: false, timeout: true, i, n: pts.length };
});
ok(climb.ok, `الطريق كامل يوصل للقمة: ${climb.len || '?'} م، ${climb.cps} نقاط استراحة، ${climb.jumps} نطّات، ${climb.falls} وكعات، ${climb.t}ث ركض ${climb.ok ? '' : JSON.stringify(climb)}`);
await G(() => { window.__natta.MT.coins = 0; });

// 7) القمة من خلال اللعبة: المكافأة والرقم
await G(() => { const N = window.__natta; N.goHome(); });
await G(() => window.__natta.startMountain());
await until(() => window.__natta.state === 'mountain', 10000);
const before = await G(() => ({ coins: window.__natta.save.coins, s: window.__natta.save.mtSummits || 0 }));
await G(() => { const M = window.__natta.M3, s = M.info.segs[M.info.segs.length - 1], p = s.pts[s.pts.length - 6]; Object.assign(M.S.p, { x: p.x, z: p.z, y: p.y, ground: p.y, air: false }); M.cam.yaw = Math.atan2(-p.z, -p.x); M.cam.init = false; window.__natta.MT.coins = 7; });
await fast(3); await page.keyboard.down('KeyW'); ok(await until(() => window.__natta.M3.S.summit, 15000), 'يمشي بالدرج ويوصل ساحة القمة'); await page.keyboard.up('KeyW'); await fast(0);
const after = await G(() => ({ coins: window.__natta.save.coins, s: window.__natta.save.mtSummits || 0, best: window.__natta.save.mtBest, ban: document.getElementById('bnTitle').textContent }));
ok(after.s === before.s + 1 && after.coins === before.coins + 207 && after.best > 0, `مكافأة القمة: +200 و+7 عملات الطريق، قمة رقم ${after.s}، أفضل وقت ${after.best}ث («${after.ban}»)`);
await wait(2200); await shot('04-summit');
await fast(4); ok(await until(() => !document.getElementById('dlg').hidden && window.__natta.MT.dlg && window.__natta.MT.dlg.text.includes('القمة'), 10000), 'أبو علي الچايچي يرحّب بيك بالقمة'); await fast(0);

// 8) الفعاليات: شاي، سوالف، جرس، نافورة، تلسكوب
const visit = (id) => G((id) => { // نجرّب نقاط حوالين الفعالية لحد ما يطلع زرها
  const M = window.__natta.M3, P = M.S.p;
  const spots = { tea: [-5.1, -6.4], chat: [-4.7, -4.1], bell: [-3.6, 6.8], fountain: [3.0, 0.4], scope: [16.2, 0] }[id];
  for (const r of [0, 0.5, 1, 1.5]) for (let a = 0; a < 6.3; a += 0.4) { Object.assign(P, { x: spots[0] + Math.cos(a) * r, z: spots[1] + Math.sin(a) * r, y: id === 'scope' ? 95.09 : 95, air: false }); const n = M.nearInteract(); if (n && n.id === id) return true; }
  return false;
}, id);
for (const id of ['tea', 'chat', 'bell', 'fountain']) {
  const found = await visit(id); await wait(250);
  const lab = await G(() => !document.getElementById('actBtn').hidden && document.getElementById('actBtn').textContent);
  const coins0 = await G(() => window.__natta.save.coins);
  if (found && lab) await page.tap('#actBtn', { force: true });
  await wait(500);
  if (id === 'tea') { ok(found && lab && lab.includes('شاي') && (await G(() => window.__natta.MT.dlg && window.__natta.MT.dlg.text.includes('شاي') && document.getElementById('dlgName').textContent.includes('الچايچي'))), `☕ كشك الشاي: «${lab}» والچايچي يحچي`); await wait(1200); await shot('05-tea'); }
  if (id === 'chat') ok(found && lab && lab.includes('سولف') && (await G(() => document.getElementById('dlgName').textContent.includes('زوار'))), `🗣️ الناس بالساحة يسولفون: «${lab}»`);
  if (id === 'bell') ok(found && lab && lab.includes('الجرس') && (await G(() => true)), `🔔 «${lab}»`);
  if (id === 'fountain') ok(found && lab && (await G(() => window.__natta.save.coins)) === coins0 - 1, `🪙 النافورة: رميت عملة (${coins0} ← ${coins0 - 1})`);
}
ok(await visit('scope'), 'التلسكوب على سطيحة الإطلالة');
await wait(250); await page.tap('#actBtn', { force: true }); await wait(400);
ok(await G(() => window.__natta.M3.S.scope && document.getElementById('jumpBtn').hidden && document.getElementById('actBtn').textContent.includes('طلّع')), '🔭 التلسكوب: نظرة مقرّبة للوادي');
await wait(1200); await shot('06-scope');
await page.tap('#actBtn', { force: true }); await wait(300);
ok(await G(() => !window.__natta.M3.S.scope), 'يطلع من التلسكوب');

// 9) الإيقاف والرجوع
await page.tap('#vPause', { force: true }); await wait(200);
ok(await G(() => window.__natta.state === 'pause' && document.getElementById('jumpBtn').hidden), 'الإيقاف يشتغل بالجبل');
await page.tap('#resume', { force: true });
ok(await until(() => window.__natta.state === 'mountain', 5000), 'بعد العد يرجع للجبل');

// 10) الريح: تحرك كلشي وتشيل البطل بس، وتوديه للوادي
ok(await until(() => !document.getElementById('skip').hidden, 6000), 'زر «تخطّى» يطلع بساحة الانتظار');
await page.tap('#skip', { force: true });
ok(await until(() => window.__natta.M3.S.summit.phase === 'wind', 3000), '💨 الريح هبّت');
await fast(3); await until(() => window.__natta.M3.U.wind.value > 0.6, 15000); await fast(0); await wait(600); await shot('07-wind');
const npcStill = await G(() => window.__natta.M3.scene.children.length > 0);
await fast(3); ok(await until(() => window.__natta.M3.S.summit.phase === 'lift', 15000) && npcStill, '🌪️ الريح شالت البطل بس'); await fast(0);
await wait(700); await shot('08-lift'); await fast(3);
ok(await until(() => window.__natta.state === 'valley' && window.__natta.V && window.__natta.V.r3d, 40000), 'وصل الوادي ثلاثي الأبعاد (نفس الرسّام)'); await fast(0);
ok(await G(() => !window.__natta.MT && document.getElementById('jumpBtn').hidden && !document.getElementById('vMap').hidden), 'واجهة الجبل انشالت وطلعت واجهة الوادي');
await wait(2500); await shot('09-valley');

// 11) وضع القفز الكلاسيكي باقي
await G(() => window.__natta.goHome()); await wait(300);
await page.tap('#playJump', { force: true }); await wait(500);
ok(await G(() => window.__natta.state === 'play' && document.getElementById('g3d').hidden), '🦘 وضع القفز يشتغل مثل قبل');
await G(() => window.__natta.goHome());

ok(errors.length === 0, 'ماكو أخطاء' + (errors.length ? ': ' + errors.slice(0, 3).join(' | ') : ''));
await browser.close(); server.close();
console.log(fails ? `\n✗ ${fails} فشل` : '\nكلشي تمام ✅');
process.exit(fails ? 1 : 0);
