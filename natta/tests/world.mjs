// فحص جزيرة نطّة 🏝️ بمتصفح بمقاس آيفون: جزيرة 75 كم² بمناطق مسمّاة، جبل بالنص، بطل إنسان بطول وسرعة حقيقية، سباحة، حيوانات، لوحة طلبات التاجر، التاجر بالقمة، خريطة.
// التشغيل: node natta/tests/world.mjs   (الصور بـ /tmp/natta-world)
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { chromium } = require('/opt/npm-tools/node_modules/playwright');
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const SHOTS = '/tmp/natta-world';
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
page.on('pageerror', (e) => errors.push('pageerror: ' + e.message + ' @ ' + String(e.stack || '').split('\n').slice(1, 3).join(' ')));
page.on('console', (m) => { if (m.type() === 'error' && !/favicon|404/.test(m.text())) errors.push('console: ' + m.text()); });
await page.addInitScript(() => { window.__r3dPR = 1; window.__seed = 7; if (!localStorage.getItem('natta.v1')) localStorage.setItem('natta.v1', JSON.stringify({ tut: true, coins: 40, best: 3000, games: 9 })); });

let fails = 0;
const ok = (c, m) => { console.log((c ? '  ✓ ' : '  ✗ ') + m); if (!c) fails++; };
const shot = (n) => page.screenshot({ path: `${SHOTS}/${n}.png` });
const wait = (ms) => page.waitForTimeout(ms);
const G = (fn, a) => page.evaluate(fn, a);
const until = async (fn, ms = 20000, a) => { const t0 = Date.now(); while (Date.now() - t0 < ms) { if (await G(fn, a)) return true; await wait(60); } return false; };
// المتصفح الوهمي يرسم بالمعالج (~2 لقطة بالثانية)، فنسرّع وقت اللعبة بالخطوات اللي تعتمد على الوقت
const fast = (k) => G((k) => { window.__timeScale = k; }, k);
const H = () => G(() => { const h = window.__natta.WD.S.hero; return { x: h.x, y: h.y, z: h.z, hp: h.hp, air: h.air, mode: h.mode }; });
const put = (x, z, extra = {}) => G(([x, z, extra]) => { const W = window.__natta.WD, h = W.S.hero; Object.assign(h, { x, z, y: W.G.H(x, z), air: false, vx: 0, vz: 0, vy: 0, stun: 0, mode: 'walk', surf: null }, extra); W.cam.init = false; }, [x, z, extra]);

await page.goto(`http://localhost:${server.address().port}/natta/`);
await wait(500);
ok(await G(() => document.getElementById('play').textContent.includes('العب') && !document.getElementById('playJump').hidden), 'الرئيسية: «العب» للعالم المفتوح و«وضع القفز» لحاله');
ok(await until(() => window.__natta.r3State === 'ready', 30000), 'ملف العالم نزل لوحده من البداية');

// 1) العالم: خريطة وحدة بيها الجبل والوادي
await page.tap('#play', { force: true });
ok(await until(() => window.__natta.state === 'world', 60000), 'زر «العب» يفتح العالم المفتوح');
const info = await G(() => { const W = window.__natta.WD, M = W.info.M, V = W.info.V, I = W.G.I, SEA = W.G.SEA; let len = 0; for (const s of M.segs) for (let k = 1; k < s.pts.length; k++) len += Math.hypot(s.pts[k].x - s.pts[k - 1].x, s.pts[k].z - s.pts[k - 1].z); let road = 0; for (const r of I.roads) for (let k = 1; k < r.pts.length; k++) road += Math.hypot(r.pts[k].x - r.pts[k - 1].x, r.pts[k].z - r.pts[k - 1].z); const h = W.S.hero; return { half: W.info.HALF, summit: Math.round(M.HS - SEA), plaza: Math.round(Math.PI * M.RP * M.RP), len: Math.round(len), road: Math.round(road / 100) / 10, bridges: M.bridges.length, stones: M.stones.length, zones: I.zones.length, rivers: I.rivers.length, lakes: I.lakes.length, falls: I.falls.filter((f) => f.top - f.bot > 4).length, sites: I.sites.length, rest: W.info.rest.filter((r) => r.fire).length, beasts: W.sim.beasts.map((b) => b.kind), valley: [V.VL, V.FLOOR * 2], vdist: Math.round(Math.hypot(V.x - M.x, V.z - M.z)), build: W.info.buildMs, startZone: W.G.zoneAt(h.x, h.z).name, startAlt: Math.round(h.y - SEA) }; });
const area = (info.half * 2 / 1000) ** 2;
ok(area >= 74 && area <= 76, `خريطة ${(info.half * 2 / 1000).toFixed(2)}×${(info.half * 2 / 1000).toFixed(2)} كم = ${area.toFixed(1)} كم² (بناء ${info.build} مللي ثانية)`);
ok(info.zones >= 20 && info.rivers >= 2 && info.lakes >= 1 && info.falls >= 1, `${info.zones} منطقة بأسمائها، ${info.rivers} أنهار، بحيرة، ${info.falls} شلال، ${info.sites} بناية`);
ok(info.summit > 380 && info.summit < 410 && info.plaza > 500 && info.plaza < 600, `قمة السحاب ${info.summit} م فوك البحر وساحتها ${info.plaza} م²`);
ok(info.startZone === 'ساحة الفجر' && info.startAlt < 30, `البداية بـ «${info.startZone}» (${info.startAlt} م فوك البحر)`);
ok(info.valley[0] * info.valley[1] >= 2500 && info.vdist > 1000 && info.vdist < 1700, `وادي الغزلان ${info.valley[0]}×${info.valley[1]} م على كتف الجبل، ${info.vdist} م من القمة`);
ok(info.len > 1000 && info.road > 15 && info.bridges >= 2 && info.stones >= 3 && info.rest >= 15, `درب القمة ${info.len} م، طرق ترابية ${info.road} كم، ${info.rest} نار استراحة`);
ok(info.beasts.filter((k) => k === 'wolf').length >= 6 && info.beasts.filter((k) => k === 'boar').length >= 6, `حيوانات: ${info.beasts.length} (ذيابة وخنازير بمناطقها)`);
await wait(600);
const hero = await G(() => { const W = window.__natta.WD; return { r: W.S.hero.r, ...W.view.heroDims() }; });
ok(hero.height > 1.66 && hero.height < 1.78 && hero.shoulders > 0.36 && hero.shoulders < 0.44 && hero.leg > 0.85 && hero.leg < 0.95 && hero.r < 0.4, `🧍 البطل إنسان: طوله ${hero.height} م، بين الكتوف ${hero.shoulders} م، الورك ${hero.leg} م، نص قطره ${hero.r} م`);
await until(() => !document.getElementById('jumpBtn').hidden, 5000);
const ui = await G(() => ({ jump: !document.getElementById('jumpBtn').hidden, map: !document.getElementById('vMap').hidden, obj: document.getElementById('vobj').textContent, g3d: !document.getElementById('g3d').hidden }));
ok(ui.jump && ui.map && ui.g3d && ui.obj.includes('لوحة'), `الواجهة: نطة، خريطة، والهدف «${ui.obj}»`);
await wait(1500); await shot('01-start');

// 1ب) 📜 لوحة الطلبات بساحة الفجر: تقراها، تختار طلب، تجمعه، وتسلّمه لأبو جاسم بالقمة
ok(await until(() => !document.getElementById('actBtn').hidden && document.getElementById('actBtn').textContent.includes('لوحة'), 5000), '📜 تبدي قبال لوحة الطلبات وزر «اقرا لوحة الطلبات» يطلع');
await page.tap('#actBtn', { force: true });
ok(await until(() => !document.getElementById('mboard').hidden, 4000), 'اللوحة تنفتح');
const bd = await G(() => ({ n: document.querySelectorAll('#mboard .note').length, names: [...document.querySelectorAll('#mboard .note .nm')].map((e) => e.textContent), on: document.querySelector('#mboard .note.on .nm') && document.querySelector('#mboard .note.on .nm').textContent }));
ok(bd.n === 6 && bd.on === 'غزال حي', `بيها ${bd.n} طلبات: ${bd.names.join('، ')} (المتتبَّع: ${bd.on})`);
await shot('01b-board');
await page.tap('#mboard [data-track="thyme"]', { force: true });
ok(await until(() => document.getElementById('mboard').hidden && document.getElementById('vobj').textContent.includes('زعتر'), 4000), `🧭 اختار «زعتر» والهدف صار: «${await G(() => document.getElementById('vobj').textContent)}»`);
const tk = await G(() => { const W = window.__natta.WD, t = W.trackTarget(), h = W.S.hero; return { icon: t.icon, d: Math.round(Math.hypot(t.x - h.x, t.z - h.z)), zone: W.G.zoneAt(t.x, t.z).id, items: W.S.items.filter((i) => i.task === 'thyme').map((i) => W.G.zoneAt(i.x, i.z).id) }; });
ok(tk.icon === '🌿' && tk.items.length === 5 && tk.items.every((z) => z === 'thyme'), `البوصلة تدل على 🌿 (${tk.d} م)، و٥ باقات زعتر كلها بتلال الزعتر`);
const picks = await G(() => { const W = window.__natta.WD, h = W.S.hero; let n = 0; for (const it of W.S.items.filter((i) => i.task === 'thyme')) { Object.assign(h, { x: it.x + 0.6, z: it.z, y: it.y, air: false, vx: 0, vz: 0, mode: 'walk' }); for (let i = 0; i < 6; i++) for (const e of W.sim.step(1 / 60, {})) if (Array.isArray(e) && e[0] === 'pick') n++; } return { n, have: W.have(W.S.tasks.find((t) => t.id === 'thyme')), obj: W.objective() }; });
ok(picks.n === 5 && picks.have === 5 && picks.obj.includes('سلّم'), `🌿 جمع ${picks.n} باقات زعتر، والهدف: «${picks.obj}»`);
const c0 = await G(() => { const W = window.__natta.WD, M = W.info.M, mw = W.S.vq.merW, h = W.S.hero; Object.assign(h, { x: M.x + (mw.x - M.x) * 0.72, z: M.z + (mw.z - M.z) * 0.72, y: M.HS, air: false, vx: 0, vz: 0, mode: 'walk' }); W.warm(h.x, h.z, h.y); return window.__natta.save.coins; });
const handed = await until(() => window.__natta.WD.S.tasks.find((t) => t.id === 'thyme').done && /سلّمت/.test(document.getElementById('bnTitle').textContent), 8000);
const c1 = await G(() => window.__natta.save.coins);
ok(handed && c1 >= c0 + 150, `🎁 سلّم الزعتر لأبو جاسم بالقمة: «${await G(() => document.getElementById('bnTitle').textContent)}» (+${c1 - c0} 🪙 مع مكافأة القمة)`);
await shot('01c-handin');
await G(() => window.__natta.WD.interact('board')); await until(() => !document.getElementById('mboard').hidden, 3000);
ok(await G(() => [...document.querySelectorAll('#mboard .note.done .nm')].map((e) => e.textContent).includes('باقات زعتر بري')), '📜 الطلب صار «✔ تم» باللوحة');
await page.tap('#mboardX', { force: true }); await wait(300);
await G(() => { const W = window.__natta.WD, r = W.info.rest[0]; Object.assign(W.S.hero, { x: r.x, z: r.z, y: W.G.H(r.x, r.z), air: false, mode: 'walk' }); W.S.summit = null; W.warm(r.x, r.z, W.S.hero.y); W.cam.init = false; });
await wait(800);

// 2) جويستك وكاميرا ونطة
const a0 = await H();
await page.mouse.move(80, 650); await page.mouse.down(); await page.mouse.move(80, 590, { steps: 3 });
await wait(1500);
const a1 = await H(); await page.mouse.up();
ok(Math.hypot(a1.x - a0.x, a1.z - a0.z) > 1.5, `الجويستك يمشّي البطل (${Math.hypot(a1.x - a0.x, a1.z - a0.z).toFixed(1)} م)`);
const h0 = await G(() => window.__natta.WD.heading());
await page.mouse.move(250, 450); await page.mouse.down(); await page.mouse.move(330, 450, { steps: 4 }); await page.mouse.up();
await wait(300);
ok(Math.abs((await G(() => window.__natta.WD.heading())) - h0) > 15, 'السحب يمين يلف الكاميرا');
await page.dispatchEvent('#jumpBtn', 'pointerdown');
ok(await until(() => window.__natta.WD.S.hero.air, 2000), 'زر النطة ينطّط البطل');
await wait(800);

// 3) حرية: يمشي بالسهل وبالغابة (مو بس الطريق)، والصخر الشديد ما ينصعد
await put(210, -60, { face: 0 });
const free = await G(() => { const W = window.__natta.WD, h = W.S.hero, x0 = h.x, z0 = h.z; for (let i = 0; i < 180; i++) W.sim.step(1 / 60, { mx: -1, mz: 0.2, mag: 1 }); return [Math.hypot(h.x - x0, h.z - z0), W.G.groundKind(h.x, h.z, h.y)]; });
ok(free[0] > 8, `يمشي بحرية بالسهل وبالغابة (${free[0].toFixed(1)} م، الأرض: ${free[1]})`);
const cliff = await G(() => { const W = window.__natta.WD, M = W.info.M, h = W.S.hero, a = 200 * Math.PI / 180, r0 = 51; Object.assign(h, { x: M.x + Math.cos(a) * r0, z: M.z + Math.sin(a) * r0, air: false, vx: 0, vz: 0, mode: 'walk' }); h.y = W.G.H(h.x, h.z); const r1 = Math.hypot(h.x, h.z); for (let i = 0; i < 240; i++) W.sim.step(1 / 60, { mx: -Math.cos(a), mz: -Math.sin(a), mag: 1 }); return [r1, Math.hypot(h.x, h.z)]; });
ok(cliff[1] > 46.5, `حزام الصخر حوالين المخروط ما ينصعد (${cliff[0].toFixed(1)} ← ${cliff[1].toFixed(1)} م من النص)`);
const swim = await G(() => { const W = window.__natta.WD, sh = W.G.I.shBay, h = W.S.hero; Object.assign(h, { x: sh.x + 60, z: sh.z, y: W.G.SEA, air: false, vx: 0, vz: 0, mode: 'walk' }); for (let i = 0; i < 240; i++) W.sim.step(1 / 60, { mx: 1, mz: 0, mag: 1 }); return { swim: h.swim, y: +(h.y - W.G.SEA).toFixed(2), x: h.x - sh.x - 60, v: +h.speed.toFixed(2), st: 'st' in h }; });
ok(swim.swim && swim.y < 0 && swim.x > 3 && swim.v > 1.2 && swim.v < 1.8 && !swim.st, `🏊 بالبحر يسبح بسرعة إنسان (${swim.v} م/ث، ${swim.x.toFixed(1)} م) وماكو عداد نفَس`);
const gait = await G(() => { const W = window.__natta.WD, h = W.S.hero, f = W.G.I.fajr, sp = {}; for (const [k, mag] of [['walk', 0.58], ['jog', 0.86], ['run', 1]]) { Object.assign(h, { x: f.x - 10, z: f.z - 20, y: W.G.H(f.x - 10, f.z - 20), air: false, vx: 0, vz: 0, mode: 'walk', swim: false, hopPh: 0 }); let steps = 0; for (let i = 0; i < 240; i++) for (const e of W.sim.step(1 / 60, { mx: 0, mz: 1, mag })) if (Array.isArray(e) && e[0] === 'step') steps++; sp[k] = +h.speed.toFixed(2); sp[k + 'Cad'] = +(steps / 4).toFixed(1); } Object.assign(h, { x: f.x - 10, z: f.z - 20, y: W.G.H(f.x - 10, f.z - 20), air: false, vx: 0, vz: 0 }); const y0 = h.y; let top = 0; W.sim.step(1 / 60, { jump: true }); for (let i = 0; i < 90; i++) { W.sim.step(1 / 60, {}); top = Math.max(top, h.y - y0); } sp.jump = +top.toFixed(2); return sp; });
ok(gait.walk > 1.5 && gait.walk < 1.8 && gait.jog > 4.3 && gait.jog < 4.9 && gait.run > 6.0 && gait.run < 6.6, `🏃 مثل ببجي: مشي ${gait.walk} م/ث (${gait.walkCad} خطوة/ث)، ركض ${gait.jog} م/ث، ركض سريع ${gait.run} م/ث (${gait.runCad} خطوة/ث)`);
ok(gait.walkCad > 1.7 && gait.walkCad < 2.5 && gait.runCad > 3.0 && gait.runCad < 3.8 && gait.jump > 0.55 && gait.jump < 0.85, `👣 إيقاع الخطوات طبيعي، والنطة ${gait.jump} م`);

// 4) الضرر: فتحة الجسر توكّعك بالوادي ← تغيب وتصحى بالاستراحة. والذيب ينقّص صحتك
await G(() => { for (const b of window.__natta.WD.sim.beasts) b.cool = 1e9; });
await G(() => { const W = window.__natta.WD, b = W.info.M.bridges[0], p = b.seg.pts[b.i + b.seg.pts.slice(b.i, b.j + 1).findIndex((q) => q.gap)]; Object.assign(W.S.hero, { x: p.x, z: p.z, y: p.y + 0.05, air: false, vx: 0, vz: 0, surf: 'bridge', mode: 'walk', hp: 100 }); });
await fast(3);
ok(await until(() => window.__natta.WD.S.hero.mode === 'faint', 8000), 'من فتحة الجسر يوكع للوادي ويغيب (الصحة خلصت)');
ok(await until(() => window.__natta.WD.S.hero.mode === 'walk' && window.__natta.WD.S.hero.hp === 100, 10000), 'يصحى بآخر استراحة وصحته كاملة');
await fast(0);
ok(/صحيت|رجعت/.test(await G(() => document.getElementById('toast').textContent)), `رسالة: ${await G(() => document.getElementById('toast').textContent)}`);
await G(() => { const W = window.__natta.WD, w = W.sim.beasts[0]; w.cool = 0; w.state = 'idle'; Object.assign(W.S.hero, { x: w.x + 2.5, z: w.z, y: W.G.H(w.x + 2.5, w.z), hp: 100, mode: 'walk', air: false }); });
await fast(2); await until(() => window.__natta.WD.S.hero.hp < 100, 8000); await fast(0);
ok(await G(() => window.__natta.WD.S.hero.hp < 100), `الذيب لزمه ونقّص صحته (${Math.round(await G(() => window.__natta.WD.S.hero.hp))} ❤️)`);
await wait(500); await shot('02-wolf');

// 5) الطلعة كاملة: بوت يمشي الطريق من السفح للقمة (جسور، متاهة، زكزاك، حزامين صخر، حافة، حجار، درج)
const climb = await G(() => {
  const W = window.__natta.WD, M = W.info.M, S = W.S, key = (c) => c[0] * 10 + c[1], adj = new Map();
  for (const s of M.MAZ) { const [u, v] = s.cells.map(key); for (const [a, b, rev] of [[u, v, false], [v, u, true]]) { if (!adj.has(a)) adj.set(a, []); adj.get(a).push([b, s, rev]); } }
  const prev = new Map([[0, null]]), q = [0];
  while (q.length) { const u = q.shift(); if (u === 36) break; for (const [v, s, rev] of adj.get(u) || []) if (!prev.has(v)) { prev.set(v, [u, s, rev]); q.push(v); } }
  const path = []; for (let v = 36; prev.get(v); v = prev.get(v)[0]) path.unshift(prev.get(v));
  let pts = [...M.A.pts, ...M.entrySeg.pts]; for (const [, s, rev] of path) pts = pts.concat(rev ? [...s.pts].reverse() : s.pts);
  pts = pts.concat(M.exitSeg.pts, M.C2.pts, [{ x: M.x, z: M.z - 3 }]);
  const sim = W.sim; sim.enter('classic', { seed: 7 }); for (const b of sim.beasts) b.cool = 1e9;
  Object.assign(S.hero, { x: pts[0].x, z: pts[0].z, y: pts[0].y, air: false }); // من أول درب القمة
  let i = 3, t = 0, jumps = 0, hurts = 0, rests = 0, lastI = 0, stuck = 0;
  while (t < 900) {
    const P = S.hero; if (P.mode !== 'walk') { sim.step(1 / 60, {}); t += 1 / 60; continue; }
    while (i < pts.length - 1 && Math.hypot(pts[i].x - P.x, pts[i].z - P.z) < 0.95) i++;
    const tg = pts[i], dx = tg.x - P.x, dz = tg.z - P.z; let mx = dx, mz = dz, jump = false;
    for (let k = i; k < Math.min(i + 3, pts.length); k++) if (pts[k].gap && !P.air && Math.hypot(pts[k].x - P.x, pts[k].z - P.z) < 2.0) jump = true;
    const onSt = P.surf === 'stone' || pts[i].kind === 'stones';
    if (!P.air && onSt) { const st = M.stones.find((s) => Math.hypot(s.x - P.x, s.z - P.z) > 1 && Math.hypot(s.x - P.x, s.z - P.z) < 3 && ((s.x - P.x) * dx + (s.z - P.z) * dz) > 0); if (st) { mx = st.x - P.x; mz = st.z - P.z; if (P.surf === 'stone' || Math.hypot(mx, mz) < 2.6) jump = true; } else if (P.surf === 'stone') jump = true; }
    const ev = sim.step(1 / 60, { mx, mz, mag: onSt ? 0.55 : 1, jump }); t += 1 / 60;
    for (const e of ev) { const n = Array.isArray(e) ? e[0] : e; if (n === 'jump') jumps++; if (n === 'hurt') hurts++; if (n === 'rest') rests++; if (n === 'summit') return { ok: true, t: Math.round(t), jumps, hurts, rests, len: Math.round(pts.length * 0.8) }; }
    if (Math.floor(t) !== Math.floor(t - 1 / 60)) { if (i === lastI && ++stuck > 20) return { ok: false, i, n: pts.length, at: [P.x, P.y, P.z].map((v) => v.toFixed(1)) }; if (i !== lastI) stuck = 0; lastI = i; }
  }
  return { ok: false, timeout: true, i, n: pts.length };
});
ok(climb.ok, `الطريق كامل يوصل للقمة: ${climb.len} م، ${climb.rests} استراحات، ${climb.jumps} نطّات، ${climb.hurts} ضربات، ${climb.t}ث ركض ${climb.ok ? '' : JSON.stringify(climb)}`);

// 6) القمة من خلال اللعبة: المكافأة والرقم
await G(() => window.__natta.goHome());
await G(() => window.__natta.startWorld({ fresh: true })); await until(() => window.__natta.state === 'world', 30000);
const before = await G(() => ({ coins: window.__natta.save.coins, s: window.__natta.save.mtSummits || 0 }));
await G(() => { const W = window.__natta.WD, s = W.info.M.C2, p = s.pts[s.pts.length - 6]; Object.assign(W.S.hero, { x: p.x, z: p.z, y: p.y, air: false }); W.cam.yaw = Math.atan2(W.info.M.z - p.z, W.info.M.x - p.x); W.cam.init = false; W.S.coinsGot = 7; });
await fast(3); await page.keyboard.down('KeyW'); ok(await until(() => window.__natta.WD.S.summit, 15000), 'يمشي بالدرج ويوصل ساحة القمة'); await page.keyboard.up('KeyW'); await fast(0);
const after = await G(() => ({ coins: window.__natta.save.coins, s: window.__natta.save.mtSummits || 0, best: window.__natta.save.mtBest, ban: document.getElementById('bnTitle').textContent }));
ok(after.s === before.s + 1 && after.coins === before.coins + 207 && after.best > 0, `مكافأة القمة: +200 و+7 عملات الطريق («${after.ban}»)`);
await wait(1500); await shot('03-summit');

// 7) فعاليات الساحة: الشاي يرجّع الصحة، سوالف، جرس، نافورة، تلسكوب
const visit = (id) => G((id) => {
  const W = window.__natta.WD, M = W.info.M, it = M.plaza.inter.find((o) => o.id === id), h = W.S.hero;
  for (const r of [0, 0.5, 1, 1.5]) for (let a = 0; a < 6.3; a += 0.4) { Object.assign(h, { x: it.x + Math.cos(a) * r, z: it.z + Math.sin(a) * r, y: id === 'scope' ? M.HS + 0.09 : M.HS, air: false }); const n = W.nearInteract(); if (n && n.id === id) return true; }
  return false;
}, id);
await G(() => { window.__natta.WD.S.hero.hp = 55; });
for (const id of ['tea', 'chat', 'bell', 'fountain']) {
  const found = await visit(id); await wait(300);
  const lab = await G(() => !document.getElementById('actBtn').hidden && document.getElementById('actBtn').textContent);
  const c0 = await G(() => window.__natta.save.coins);
  if (found && lab) await page.tap('#actBtn', { force: true });
  await wait(400);
  if (id === 'tea') { ok(found && lab && lab.includes('شاي') && (await G(() => window.__natta.WD.S.hero.hp === 100 && document.getElementById('dlgName').textContent.includes('الچايچي'))), `☕ «${lab}»: الچايچي يحچي والصحة رجعت كاملة`); await wait(800); await shot('04-tea'); }
  if (id === 'chat') ok(found && lab && lab.includes('سولف'), `🗣️ «${lab}»`);
  if (id === 'bell') ok(found && lab && lab.includes('الجرس'), `🔔 «${lab}»`);
  if (id === 'fountain') ok(found && (await G(() => window.__natta.save.coins)) === c0 - 1, '🪙 النافورة: رميت عملة');
}
ok(await visit('scope'), 'التلسكوب على السطيحة');
await wait(300); await page.tap('#actBtn', { force: true }); await wait(400);
ok(await G(() => window.__natta.WD.S.scope && document.getElementById('jumpBtn').hidden), '🔭 التلسكوب يقرّب على الوادي الحقيقي');
await wait(1000); await shot('05-scope');
await page.tap('#actBtn', { force: true }); await wait(300);

// 8) الإيقاف: بيه «رجوع لآخر استراحة»
await page.tap('#vPause', { force: true }); await wait(200);
ok(await G(() => window.__natta.state === 'pause' && !document.getElementById('rest').hidden), 'الإيقاف بيه زر «رجوع لآخر استراحة»');
await page.tap('#resume', { force: true });
ok(await until(() => window.__natta.state === 'world', 5000), 'بعد العد يرجع للعالم');

// 9) أبو جاسم بساحة القمة: يصيحك ويطلب غزال من وادي الغزلان (ماكو ريح ولا مظلة)
ok(await G(() => document.getElementById('skip').hidden), 'ماكو زر «تخطّى» ولا ريح بالقمة');
await G(() => { const W = window.__natta.WD, mw = W.S.vq.merW, M = W.info.M, h = W.S.hero; Object.assign(h, { x: M.x - 2, z: M.z + 2, y: M.HS, air: false, vx: 0, vz: 0 }); W.cam.yaw = Math.atan2(mw.z - h.z, mw.x - h.x); W.cam.init = false; });
await fast(1); await page.keyboard.down('KeyW');
const met = await until(() => window.__natta.WD.S.vq.met, 15000);
await page.keyboard.up('KeyW'); await fast(0);
ok(met, '👳 يمشي لأبو جاسم بالقمة ويتعرف عليه' + (met ? '' : ' ' + JSON.stringify(await G(() => { const W = window.__natta.WD, h = W.S.hero, mw = W.S.vq.merW; return { dm: Math.hypot(h.x - mw.x, h.z - mw.z), mode: h.mode, st: window.__natta.state }; }))));
await wait(600);
const mt = await G(() => ({ obj: document.getElementById('vobj').textContent, who: document.getElementById('dlgName').textContent, txt: window.__natta.WS.dlg ? window.__natta.WS.dlg.text : '' }));
ok(mt.who.includes('أبو جاسم') && mt.txt.includes('وادي الغزلان') && mt.obj.includes('غزال'), `يطلب: «${mt.obj}»`);
await shot('06-merchant');
await G(() => { const W = window.__natta.WD, V = W.info.V; window.__natta.WS.zone = null; Object.assign(W.S.hero, { x: V.x + 30, z: V.z + V.riverZ(30) + 3, air: false }); W.S.hero.y = W.G.H(W.S.hero.x, W.S.hero.z); W.warm(W.S.hero.x, W.S.hero.z, W.S.hero.y); W.cam.init = false; });
ok(await until(() => document.getElementById('bnTitle').textContent.includes('وادي الغزلان'), 8000), '🏷️ اسم المنطقة يطلع لمن تدخلها (وادي الغزلان)');
await wait(800); await shot('07-valley');

// 10) الخريطة: العالم كله، علامات
await page.tap('#vMap', { force: true }); await wait(400);
ok(await G(() => !document.getElementById('mapv').hidden), 'الخريطة تنفتح');
const mapBox = await page.locator('#mapC').boundingBox();
await page.mouse.click(mapBox.x + mapBox.width * 0.5, mapBox.y + mapBox.height * 0.3); await wait(200);
ok(await G(() => window.__natta.WS.pins.length === 1), 'تحط علامة عالخريطة');
const z0 = await G(() => window.__natta.WS.mz); await page.mouse.wheel(0, -400); await wait(200);
ok((await G(() => window.__natta.WS.mz)) > z0, 'الخريطة تتكبّر (أصابع/عجلة)');
await shot('10-map');
await page.tap('#mapX', { force: true }); await wait(200);

// 11) الغزال وأبو جاسم ← الجائزة ← تكمل بالعالم
await G(() => { const W = window.__natta.WD, g = W.sim.gz, h = W.S.hero; Object.assign(h, { x: g.x - 9, z: g.z, y: W.G.H(g.x - 9, g.z), air: false, vx: 0, vz: 0 }); W.cam.yaw = 0; W.cam.init = false; g.state = 'graze'; g.sus = 0.3; });
await wait(900);
ok(await G(() => window.__natta.state === 'world'), '🦌 عدّاد شك الغزال يبين لما تقرب منه'); await shot('11-gazelle');
await G(() => { const W = window.__natta.WD, g = W.sim.gz; g.state = 'graze'; g.sus = 0; Object.assign(W.S.hero, { x: g.x - 0.8, z: g.z, y: W.G.H(g.x - 0.8, g.z), air: false }); });
ok(await until(() => window.__natta.WD.S.vq.caught, 6000), '🦌 لزم الغزال');
await G(() => { const W = window.__natta.WD, zw = W.S.vq.zoneW; Object.assign(W.S.hero, { x: zw.x, z: zw.z, y: W.info.M.HS, air: false }); });
ok(await until(() => window.__natta.WD.S.vq.delivered, 6000), '🏔️ رجّعه لأبو جاسم بالقمة وسلّمه');
await fast(3); ok(await until(() => window.__natta.state === 'ending', 20000), 'شاشة نهاية المغامرة'); await fast(0);
ok(await G(() => !document.getElementById('eCont').hidden), 'بيها «كمّل تمشّى بالعالم»');
await page.tap('#eCont', { force: true }); await wait(400);
ok(await G(() => window.__natta.state === 'world' && /زعتر|محار|عسل|ريشة|سمچ|استكشف/.test(document.getElementById('vobj').textContent)), `يرجع للجزيرة ويكمل، والطلب الجاي من اللوحة: «${await G(() => document.getElementById('vobj').textContent)}»`);

// 12) 🛒 دكان أبو جاسم: يشتري أدوات تفتح طرق، 🚡 حبل منزلق، 🧗 تسلّق، 🎣 صيد وبيع
await G(() => { window.__natta.save.coins = 1000; window.__natta.save.tools = {}; window.__natta.WD.setTools({}); const W = window.__natta.WD, M = W.info.M, mw = W.S.vq.merW; Object.assign(W.S.hero, { x: M.x + (mw.x - M.x) * 0.78, z: M.z + (mw.z - M.z) * 0.78, y: M.HS, air: false, mode: 'walk' }); });
ok(await until(() => !document.getElementById('actBtn').hidden && document.getElementById('actBtn').textContent.includes('دكان'), 5000), '🛒 زر «دكان أبو جاسم» يطلع يمّه');
await page.tap('#actBtn', { force: true });
ok(await until(() => !document.getElementById('mshop').hidden, 4000), 'الدكان ينفتح');
for (const t of ['rope', 'boots', 'rod']) await page.click(`#mshop [data-tool="${t}"]`);
ok(await G(() => { const s = window.__natta.save; return !!(s.tools && s.tools.rope && s.tools.boots && s.tools.rod) && s.coins === 300 && window.__natta.WD.S.hero.boots; }), 'اشترى حبل التسلّق والجزمة والسنارة (700 🪙)، والجزمة صارت بالرجل');
await shot('12-shop'); await page.click('#mshopX');
const zr = await G(() => { const W = window.__natta.WD, z = W.G.zips[0], h = W.S.hero, M = W.info.M; Object.assign(h, { x: z.stand.x, z: z.stand.z, y: M.HS, air: false, mode: 'walk' }); const n = W.nearInteract(); if (!n || n.id !== 'zip:0') return { n: n && n.id }; W.interact('zip:0'); let k = 0, minClr = 1e9; while (h.mode === 'zip' && k++ < 20000) { W.sim.step(1 / 60, {}); if (h.mode === 'zip') minClr = Math.min(minClr, h.y - W.G.H(h.x, h.z)); } return { ok: h.mode === 'walk', t: Math.round(k / 60), clr: +minClr.toFixed(1), zone: W.G.zoneAt(h.x, h.z).name, alt: Math.round(h.y - W.G.SEA), L: Math.round(z.L) }; });
ok(zr.ok && zr.clr > 0.3, `🚡 «حبل الفجر» ${zr.L} م من القمة نزل بـ ${zr.t} ث (أقل علو فوك الأرض ${zr.clr} م) ← ${zr.zone} (${zr.alt} م)`);
const cl = await G(() => { const W = window.__natta.WD, a = W.G.anchors.find((q) => q.h < 25), h = W.S.hero; Object.assign(h, { x: a.bot.x, z: a.bot.z, y: a.bot.y, air: false, mode: 'walk' }); const n = W.nearInteract(); const y0 = h.y; if (!n || !n.id.startsWith('rope')) return { n: n && n.id }; W.interact(n.id); let k = 0; while (h.mode === 'climb' && k++ < 6000) W.sim.step(1 / 60, {}); return { ok: h.mode === 'walk', up: +(h.y - y0).toFixed(1), name: a.name }; });
ok(cl.ok && cl.up > 2, `🧗 تسلّق «${cl.name}» بالحبل وصعد ${cl.up} م`);
const fi = await G(() => { const W = window.__natta.WD, h = W.S.hero, p = W.G.I.sites.find((s) => s.kind === 'pier' && !s.lake), c = Math.cos(p.rot), sn = Math.sin(p.rot); Object.assign(h, { x: p.x + c * 20, z: p.z + sn * 20, air: false, mode: 'walk', face: p.rot }); h.y = W.G.surfaceAt(h.x, h.z, h.y + 50).y; const n = W.nearInteract(); if (!n || n.id !== 'fish') return { n: n && n.id, y: h.y - W.G.SEA }; W.interact('fish'); let k = 0; while (h.mode === 'fish' && k++ < 1200) W.sim.step(1 / 60, {}); return { ok: W.S.fish === 1 }; });
ok(fi.ok, '🎣 من رصيف الخليج صاد سمچة' + (fi.ok ? '' : ' ' + JSON.stringify(fi)));
const pw = await G(() => { const W = window.__natta.WD, h = W.S.hero, p = W.G.I.sites.find((s) => s.kind === 'pier' && !s.lake), c = Math.cos(p.rot), sn = Math.sin(p.rot); Object.assign(h, { x: p.x - c * 10, z: p.z - sn * 10, air: false, mode: 'walk', face: p.rot }); h.y = W.G.surfaceAt(h.x, h.z, h.y + 50).y; for (let i = 0; i < 180; i++) W.sim.step(1 / 60, { mx: c, mz: sn, mag: 0.5 }); const u = (h.x - p.x) * c + (h.z - p.z) * sn, v = -(h.x - p.x) * sn + (h.z - p.z) * c; return { u: +u.toFixed(1), v: +v.toFixed(2), y: +(h.y - p.y).toFixed(2), surf: h.surf }; });
ok(Math.abs(pw.v) < 1.6 && pw.u > -8 && Math.abs(pw.y) < 0.2 && pw.surf === 'pier', `🚶 يمشي على رصيف الخليج وما ينسحب لمكان ثاني (${JSON.stringify(pw)})`);

// 11أ) 🔧 كراج الفجر و🚙 البكي: مقاسات حقيقية، تركب، تسوق، وتنزل
const gar = await G(() => { const W = window.__natta.WD, gg = W.G.I.garage, f = W.G.I.fajr, c = W.S.car; return { d: Math.round(Math.hypot(gg.x - f.x, gg.z - f.z)), inGarage: Math.hypot(c.x - gg.x, c.z - gg.z) < 2, ride: +(c.y - W.G.H(c.x, c.z)).toFixed(3), B: W.sim ? null : null }; });
ok(gar.d > 60 && gar.d < 110 && gar.inGarage && Math.abs(gar.ride - 0.525) < 0.03, `🔧 الكراج يم ساحة الفجر (${gar.d} م من النص) والبكي جوّه`);
await G(() => { const W = window.__natta.WD, c = W.S.car, h = W.S.hero, x = c.x + Math.cos(c.yaw) * -0.22 - Math.sin(c.yaw) * -1.6, z = c.z + Math.sin(c.yaw) * -0.22 + Math.cos(c.yaw) * -1.6; Object.assign(h, { x, z, y: W.G.H(x, z), air: false, vx: 0, vz: 0, mode: 'walk', swim: false }); W.warm(x, z, h.y); W.cam.init = false; });
ok(await until(() => document.getElementById('actBtn').textContent.includes('اركب') && !document.getElementById('actBtn').hidden, 4000), '🚙 يم باب السايق يطلع «اركب البكي»');
await page.tap('#actBtn', { force: true });
ok(await until(() => window.__natta.WD.S.hero.mode === 'drive', 4000), 'يفتح الباب ويكعد بالمقعد ويشغّل');
await wait(600); await shot('11a-seated');
{ // 🕹️ الجويستك سرعة بس، و🛞 الدركسون من سحب الشاشة باليمين
  const steer = () => G(() => window.__natta.WD.S.car.steer);
  await page.mouse.move(80, 650); await page.mouse.down(); await page.mouse.move(150, 650, { steps: 4 }); await wait(450);
  const sJoy = await steer(); await page.mouse.up(); await wait(400);
  await page.mouse.move(280, 420); await page.mouse.down(); await page.mouse.move(350, 420, { steps: 5 }); await wait(450);
  const sR = await steer(); await page.mouse.move(210, 420, { steps: 6 }); await wait(500); const sL = await steer(); await page.mouse.up(); await wait(700);
  const s0 = await steer(), cy = await G(() => window.__natta.WD.cam.dragT);
  ok(Math.abs(sJoy) < 0.03 && sR > 0.15 && sL < -0.15 && Math.abs(s0) < 0.08 && !(cy > 0), `🛞 الدركسون بسحب الشاشة: يمين ${sR.toFixed(2)}، يسار ${sL.toFixed(2)}، ترفع إصبعك يرجع ${s0.toFixed(2)}؛ والجويستك جنب ما يلف (${sJoy.toFixed(2)})`);
  await G(() => { const c = window.__natta.WD.S.car; c.vx = c.vz = 0; });
}
const dims = await G(() => { const W = window.__natta.WD, v = W.view.heroDims ? 1 : 0, c = W.S.car; return { hy: +(W.S.hero.y - (c.y - 0.5)).toFixed(2), btn: document.getElementById('jumpBtn').textContent, horn: !document.getElementById('hornBtn').hidden }; });
ok(dims.btn.includes('فرامل') && dims.horn, `بالسيارة: زر «${dims.btn.replace(/\s+/g, ' ')}» وهورن 📯 وعدّاد سرعة`);
const phys = await G(() => {
  const W = window.__natta.WD, c = W.S.car, step = (n, cmd) => { for (let i = 0; i < n; i++) W.sim.step(1 / 60, cmd); };
  // أكثر قطعة مستقيمة ومستوية بالطريق الدائري (إسفلت) قرب الساحة
  const P = W.G.I.pavedRoads[0].pts; let bi = 0, bs = 1e9; for (let i = 5; i < 300; i++) { const a = P[i], b = P[i + 30], h1 = Math.atan2(P[i + 1].z - a.z, P[i + 1].x - a.x), h2 = Math.atan2(b.z - P[i + 29].z, b.x - P[i + 29].x), sc = Math.abs(Math.atan2(Math.sin(h2 - h1), Math.cos(h2 - h1))) + Math.abs(b.a - a.a) / 120 * 5; if (sc < bs) { bs = sc; bi = i; } }
  const p0 = P[bi], p1 = P[bi + 30]; const r = {};
  c.x = p0.x; c.z = p0.z; c.yaw = Math.atan2(p1.z - p0.z, p1.x - p0.x); W.sim.S.hero.x = c.x; c.vx = c.vz = 0; { const yy = W.G.H(c.x, c.z) + 0.53; c.y = yy; } // على الطريق الدائري المستقيم
  let crashes = 0; const step0 = step; const stepC = (n, cmd) => { for (let i = 0; i < n; i++) for (const e of W.sim.step(1 / 60, cmd)) if (e[0] === 'carCrash') crashes++; };
  // تطلع من الكراج وتسرّع على الكونكريت
  step(60, {}); let t = 0, t60 = 0; while (t < 8 && c.vf * 3.6 < 60) { stepC(1, { jx: 0, jy: 1 }); t += 1 / 60; } t60 = t; r.t60 = +t60.toFixed(1);
  r.kind = c.kind; r.rpm = Math.round(c.rpm); r.gear = c.gear;
  // فرامل
  const x0 = c.x, z0 = c.z, v0 = c.vf; let tb = 0; while (c.vf > 0.1 && tb < 6) { stepC(1, { jx: 0, jy: -1 }); tb += 1 / 60; } r.brakeV = +(v0 * 3.6).toFixed(0); r.brakeD = +Math.hypot(c.x - x0, c.z - z0).toFixed(1); r.crashes = crashes;
  // ريوس
  step(90, { jx: 0, jy: -1 }); r.rev = +(c.vf * 3.6).toFixed(1); r.revGear = c.gear; step(40, { jx: 0, jy: 0.4 }); step(240, { jx: 0, jy: 0 }); r.coast = +(c.vf * 3.6).toFixed(1);
  return r;
});
ok(phys.t60 > 1.8 && phys.t60 < 3.2 && phys.rpm > 3000 && phys.gear === 'D' && !phys.crashes, `⚡ 0–60 كم/س بـ ${phys.t60} ث (الدورة ${phys.rpm}، گير ${phys.gear}، أرض ${phys.kind})`);
ok(phys.brakeD > 11 && phys.brakeD < 20 && phys.rev < -3 && phys.revGear === 'R' && Math.abs(phys.coast) < 0.5, `🛑 فرامل من ${phys.brakeV} كم/س بـ ${phys.brakeD} م، ريوس ${phys.rev} كم/س، ولمن تشيل رجلك توكف (${phys.coast})`);
const drv = await G(() => { const W = window.__natta.WD, c = W.S.car, h = W.S.hero; return { seat: Math.hypot(h.x - c.x, h.z - c.z) < 0.6, face: Math.abs(Math.atan2(Math.sin(h.face - c.yaw), Math.cos(h.face - c.yaw))) < 0.01 }; });
ok(drv.seat && drv.face, 'السايق يتحرك ويّا السيارة بمقعده');
ok(await until(() => document.getElementById('actBtn').textContent.includes('انزل'), 3000), 'لمن توكف يطلع «انزل»');
await page.tap('#actBtn', { force: true });
ok(await until(() => window.__natta.WD.S.hero.mode === 'walk', 4000), '🚪 ينزل من الباب اليسار ويمشي');
const outd = await G(() => { const W = window.__natta.WD, c = W.S.car, h = W.S.hero; return { d: +Math.hypot(h.x - c.x, h.z - c.z).toFixed(2), eng: c.engine }; });
ok(outd.d > 0.9 && outd.d < 2.2 && !outd.eng, `واكف يم السيارة (${outd.d} م) والمحرك طافي`);
const water = await G(() => { const W = window.__natta.WD, c = W.S.car, sh = W.G.I.shBay, f = W.G.I.fajr, L = Math.hypot(sh.x - f.x, sh.z - f.z), ux = (sh.x - f.x) / L, uz = (sh.z - f.z) / L; c.x = sh.x - ux * 30; c.z = sh.z - uz * 30; c.y = W.G.H(c.x, c.z) + 0.53; c.vx = c.vz = 0; W.sim.S.hero.mode = 'drive'; c.driven = true; c.engine = true; const ang = Math.atan2(uz, ux); W.sim.S.car.yaw = ang; let deep = false; for (let i = 0; i < 60 * 40; i++) { const ev = W.sim.step(1 / 60, { jx: 0, jy: 1 }); if (ev.some((e) => e[0] === 'deepWater')) { deep = true; break; } const a2 = Math.atan2(sh.z - c.z, sh.x - c.x); c.yaw += Math.atan2(Math.sin(a2 - c.yaw), Math.cos(a2 - c.yaw)) * 0.05; } const w = W.G.water(c.x, c.z, W.G.H(c.x, c.z) + 0.05); return { deep, depth: w ? +(w.level - W.G.H(c.x, c.z)).toFixed(2) : 0 }; });
ok(water.deep && water.depth < 0.9, `🌊 ما يدخل الماي الغميج (وكف على عمق ${water.depth} م)`);
await G(() => { const W = window.__natta.WD; W.interact('tow'); });
ok(await G(() => { const W = window.__natta.WD, c = W.S.car, gg = W.G.I.garage; return W.S.hero.mode === 'walk' && Math.hypot(c.x - gg.x, c.z - gg.z) < 2; }), '🛻 تنسحب للكراج');

// 11ج) 🛣️ الطرق المعبّدة: شبكة تربط كل المناطق، جسور، لوحات، انحدار معقول، والأرض تحتها مضبوطة
const net = await G(() => {
  const W = window.__natta.WD, I = W.G.I, SEA = W.G.SEA, R = I.pavedRoads; let len = 0, maxErr = 0, maxG = 0, ringG = 0; const kinds = {};
  for (const [ri, r] of R.entries()) for (let i = 1; i < r.pts.length; i++) {
    const p = r.pts[i], q = r.pts[i - 1]; len += Math.hypot(p.x - q.x, p.z - q.z);
    if (i >= 3) { let L = 0; for (let k = i - 2; k <= i; k++) L += Math.hypot(r.pts[k].x - r.pts[k - 1].x, r.pts[k].z - r.pts[k - 1].z); const g = Math.abs(p.a - r.pts[i - 3].a) / Math.max(L, 1e-3); maxG = Math.max(maxG, g); if (ri === 0) ringG = Math.max(ringG, g); } // الانحدار على ~12 م مثل ما ينقاس بالطرق
    if (i % 3) continue; if (!I.inBridge(p.x, p.z, 2)) { maxErr = Math.max(maxErr, Math.abs(W.G.H(p.x, p.z) - SEA - p.a)); const k = W.G.groundKind(p.x, p.z, W.G.H(p.x, p.z)); kinds[k] = (kinds[k] || 0) + 1; }
  }
  const skip = new Set(['summit', 'shoulder', 'mount', 'bay', 'falcons', 'shadows', 'marsh']);
  const far = I.zones.filter((z) => !skip.has(z.id)).map((z) => { const rp = I.rest.find((q) => q.id === 'z_' + z.id), t = rp ? { x: rp.fx, z: rp.fz } : z; let d = 1e9; for (const r of R) for (const p of r.pts) d = Math.min(d, Math.hypot(p.x - t.x, p.z - t.z)); return [z.name, Math.round(d)]; }).filter(([, d]) => d > 420);
  const br = I.bridges.map((b) => { const w = I.water(b.x, b.z, W.G.H(b.x, b.z) + 0.05), pl = W.G.platAt(b.x, b.z); return { river: b.river, clear: w ? +(SEA + b.y - w.level).toFixed(1) : 0, plat: !!pl }; });
  return { n: R.length, ring: R[0].closed, km: +(len / 1000).toFixed(1), maxErr: +maxErr.toFixed(2), maxG: +(maxG * 100).toFixed(1), ringG: +(ringG * 100).toFixed(1), kinds, far, br, signs: I.signs.length, welcome: I.welcome.length, arms: I.signs.reduce((s2, g) => s2 + g.arms.length, 0), dirt: I.roads.length };
});
ok(net.n >= 12 && net.ring && net.km > 20, `🛣️ ${net.n} طرق معبّدة (~${net.km} كم): الدائري حلقة كاملة حوالين الجزيرة وفرعيات لكل منطقة`);
ok(!net.far.length, `🗺️ كل المناطق عليها طريق معبّد (ضمن 420 م)${net.far.length ? ' — ناقص: ' + JSON.stringify(net.far) : ''}`);
ok(net.maxErr < 0.6 && net.ringG <= 7.6 && net.maxG <= 20.5, `⛰️ الطريق على الأرض بالضبط (فرق ${net.maxErr} م)، الدائري أشد انحدار ${net.ringG}٪، وطريق الهضبة الجبلي ${net.maxG}٪ بمنعطفات الزكزاك`);
ok(net.kinds.asphalt > 100 && net.kinds.pavers > 10 && net.kinds.cobble > 10, `🧱 إسفلت ${net.kinds.asphalt}، بلاط ${net.kinds.pavers}، حجر ${net.kinds.cobble} (حسب المنطقة)`);
ok(net.br.length >= 2 && net.br.every((b) => b.plat && b.clear > 1.5), `🌉 ${net.br.length} جسور فوك الأنهار (الماي تحتها بـ ${net.br.map((b) => b.clear).join('، ')} م)`);
ok(net.signs >= 8 && net.arms >= 16 && net.welcome >= 15, `🪧 ${net.signs} تقاطعات بلوحات اتجاه (${net.arms} سهم بالمسافات) و${net.welcome} لوحة «أهلاً»`);
const brd = await G(() => { // نعبر جسر نهر الفضة بالبكي
  const W = window.__natta.WD, I = W.G.I, c = W.S.car, b = I.bridges[0], SEA = W.G.SEA; let minY = 1e9, maxDepth = 0, kinds = new Set(), crash = 0;
  W.sim.S.hero.mode = 'drive'; c.driven = true; c.engine = true; c.pitch = c.roll = 0; c.wp = c.wr = c.vy = 0;
  c.x = b.x - b.c * (b.half + 30); c.z = b.z - b.s * (b.half + 30); c.yaw = Math.atan2(b.s, b.c); c.vx = c.vz = 0; c.y = W.G.H(c.x, c.z) + 0.53; W.G.ensureVeg(c.x, c.z, 170);
  for (let i = 0; i < 60 * 9; i++) { const ev = W.sim.step(1 / 60, { kx: 0, ky: c.vf * 3.6 < 40 ? 1 : 0.2 }); if (ev.some((e) => e[0] === 'carCrash')) crash++; const al = (c.x - b.x) * b.c + (c.z - b.z) * b.s; if (Math.abs(al) < b.half - 2) { minY = Math.min(minY, c.y - 0.53 - SEA); maxDepth = Math.max(maxDepth, c.depth); kinds.add(c.kind); } if (al > b.half + 25) break; }
  return { deck: b.y, minY: +minY.toFixed(2), depth: maxDepth, kinds: [...kinds], crash, past: (c.x - b.x) * b.c + (c.z - b.z) * b.s > b.half };
});
ok(brd.past && brd.minY > brd.deck - 0.35 && brd.depth === 0 && !brd.crash, `🚙 يعبر الجسر فوك السطح (${brd.minY} م، السطح ${brd.deck}) بلا ماي ولا ضربة (${brd.kinds.join('/')})`);
// 🏁 السفاري: كثبان، مسار مغلق، قفزة حقيقية، ووقت لفّة
const sf = await G(() => { const W = window.__natta.WD, I = W.G.I, SF = I.safari, z = I.zones.find((q) => q.id === 'safari'); let hi = 0, lo = 1e9; for (let u = 40; u < 600; u += 6) for (let w = 80; w < 240; w += 6) { const p = SF.W(u, w), a = W.G.H(p.x, p.z) - W.G.SEA; hi = Math.max(hi, a); lo = Math.min(lo, a); } const g0 = SF.gates[0]; return { zone: !!z, len: Math.round(SF.len), kick: SF.feat.filter((f) => f.kind === 'kicker').length, relief: +(hi - lo).toFixed(1), kind: W.G.groundKind(g0.x, g0.z, W.G.H(g0.x, g0.z)), dune: W.G.groundKind(SF.W(300, 150).x, SF.W(300, 150).z, W.G.H(SF.W(300, 150).x, SF.W(300, 150).z)) }; });
ok(sf.zone && sf.len > 900 && sf.len < 1300 && sf.kick >= 4 && sf.relief > 4, `🏁 سفاري اللؤلؤ: مسار ${sf.len} م، ${sf.kick} قفزات، كثبان بفرق ${sf.relief} م (${sf.kind} / ${sf.dune})`);
const jmp = await G(() => { // على «الطاولة الكبيرة» بسرعة 65 كم/س
  const W = window.__natta.WD, SF = W.G.I.safari, c = W.S.car, k = SF.feat.find((f) => f.name === 'الطاولة الكبيرة'), N = SF.pts.length;
  let i0 = 0; { let bd = 1e9; SF.pts.forEach((p, i) => { const d = Math.abs(SF.S[i] - (k.at - 70)); if (d < bd) { bd = d; i0 = i; } }); }
  const p0 = SF.pts[i0]; c.x = p0.x; c.z = p0.z; c.yaw = Math.atan2(p0.dz, p0.dx); c.vx = p0.dx * 18; c.vz = p0.dz * 18; c.y = W.G.H(c.x, c.z) + 0.53; c.pitch = c.roll = 0; W.G.ensureVeg(c.x, c.z, 170);
  let air = 0, maxAir = 0, land = 0, flip = false, maxH = 0, idx = i0;
  for (let n = 0; n < 60 * 7; n++) {
    let bd = 1e9; for (let m = idx; m < idx + 20; m++) { const q = SF.pts[m % N], d = Math.hypot(q.x - c.x, q.z - c.z); if (d < bd) { bd = d; idx = m % N; } }
    const tg = SF.pts[(idx + 8) % N], want = Math.atan2(tg.z - c.z, tg.x - c.x); let d = want - c.yaw; d = Math.atan2(Math.sin(d), Math.cos(d));
    const ev = W.sim.step(1 / 60, { kx: Math.max(-1, Math.min(1, d * 2.5)), ky: c.vf * 3.6 < 65 ? 1 : 0.1 });
    for (const e of ev) { if (e[0] === 'carLand') land = Math.max(land, e[1]); if (e[0] === 'carFlip') flip = true; }
    if (c.air) { air += 1 / 60; maxAir = Math.max(maxAir, air); maxH = Math.max(maxH, c.y - 0.53 - W.G.H(c.x, c.z)); } else air = 0;
  }
  return { maxAir: +maxAir.toFixed(2), maxH: +maxH.toFixed(2), land: +land.toFixed(1), flip, hp: W.S.hero.hp };
});
ok(jmp.maxAir > 0.4 && !jmp.flip, `🦘 القفزة الكبيرة: يطير ${jmp.maxAir} ث (فوك الرمل ${jmp.maxH} م) وينزل على النوابض (${jmp.land} م/ث) بلا انقلاب`);
const lap = await G(() => { // لفّة كاملة بسايق آلي: بداية، 3 تفتيش، نهاية
  const W = window.__natta.WD, SF = W.G.I.safari, c = W.S.car, N = SF.pts.length, g0 = SF.gates[0];
  let i0 = 0; { let bd = 1e9; SF.pts.forEach((p, i) => { const d = Math.abs(SF.S[i] - (g0.s - 30)); if (d < bd) { bd = d; i0 = i; } }); }
  const p0 = SF.pts[i0]; c.x = p0.x; c.z = p0.z; c.yaw = Math.atan2(p0.dz, p0.dx); c.vx = c.vz = 0; c.y = W.G.H(c.x, c.z) + 0.53; c.pitch = c.roll = 0; W.S.lap.on = false; W.S.lap.best = null;
  const evs = []; let idx = i0;
  for (let n = 0; n < 60 * 200; n++) {
    let bd = 1e9; for (let m = idx; m < idx + 20; m++) { const q = SF.pts[m % N], d = Math.hypot(q.x - c.x, q.z - c.z); if (d < bd) { bd = d; idx = m % N; } }
    const tg = SF.pts[(idx + 7) % N], want = Math.atan2(tg.z - c.z, tg.x - c.x); let d = want - c.yaw; d = Math.atan2(Math.sin(d), Math.cos(d));
    let kk = 0; for (let m = 0; m < 16; m++) kk = Math.max(kk, Math.abs(SF.pts[(idx + m) % N].k)); const vt = Math.min(48, Math.sqrt(5.5 / Math.max(kk, 1e-3)) * 3.6); // يبطّي قبل المنعطف
    const ev = W.sim.step(1 / 60, { kx: Math.max(-1, Math.min(1, d * 2.5)), ky: c.vf * 3.6 < vt ? 1 : c.vf * 3.6 > vt + 6 ? -0.5 : 0.1 });
    for (const e of ev) if (String(e[0]).startsWith('lap')) evs.push(e);
    if (evs.some((e) => e[0] === 'lapDone')) break;
  }
  const done = evs.find((e) => e[0] === 'lapDone');
  return { kinds: evs.map((e) => e[0]), t: done ? done[1] : null, best: W.S.lap.best, cps: evs.filter((e) => e[0] === 'lapCp').length };
});
ok(lap.t && lap.t > 40 && lap.t < 200 && lap.cps === 3 && lap.best === lap.t, `⏱️ لفّة كاملة بـ ${lap.t} ث (بداية ← تفتيش 1، 2، 3 ← نهاية) وانحفظ أحسن وقت`);
await G(() => { const W = window.__natta.WD; W.S.car.vx = W.S.car.vz = 0; W.interact('tow'); }); // نرجع البكي للكراج والبطل يمشي

// 11ب) 🛟 إذا ضاع الرسم (الآيفون يسويها لمن تطلع من سفاري) ما يطلّعك للرئيسية، والرحلة تنحفظ وترجعلها
const lost = await G(() => { const W = window.__natta.WD, ext = W.renderer.getContext().getExtension('WEBGL_lose_context'); window.__ext = ext; if (!ext) return null; ext.loseContext(); return true; });
await wait(900);
const ls = await G(() => ({ st: window.__natta.state, ov: !document.getElementById('glLost').hidden, ws: !!window.__natta.save.ws }));
ok(lost && ls.st === 'pause' && ls.ov && ls.ws, `🛟 ضاع الرسم: اللعبة توكّف وتحفظ وما تطلع للرئيسية (${JSON.stringify(ls)})`);
await G(() => window.__ext.restoreContext());
ok(await until(() => document.getElementById('glLost').hidden, 6000), '✅ الرسم رجع وحده');
await page.tap('#resume', { force: true });
ok(await until(() => window.__natta.state === 'world', 8000), 'تكمّل من نفس المكان بعد ما رجع الرسم');
await wait(1500);
ok(await G(() => window.__natta.WD.renderer.info.render.calls > 20), `يرسم طبيعي بعد الرجعة (${await G(() => window.__natta.WD.renderer.info.render.calls)} رسمة)`);
await shot('11b-restored');
// 💾 تطلع للرئيسية (أو سفاري يسكّر الصفحة) وترجع: نفس المكان والطلبات والأغراض
const sv = await G(() => { const N = window.__natta, W = N.WD, h = W.S.hero, f = W.G.I.fajr; Object.assign(h, { x: f.x - 6, z: f.z + 9, air: false, vx: 0, vz: 0, mode: 'walk', swim: false }); h.y = W.G.H(h.x, h.z); W.setTrack('honey'); W.S.items[2].taken = true; W.S.tasks.find((t) => t.id === 'thyme').got = 1; N.saveWorld(); return { x: h.x, z: h.z, kb: Math.round(JSON.stringify(N.save.ws).length / 1024) }; });
await G(() => window.__natta.goHome());
const hm = await G(() => ({ play: document.getElementById('play').textContent, nt: !document.getElementById('newTrip').hidden }));
ok(hm.play.includes('كمّل') && hm.nt, `🏠 الرئيسية: «${hm.play}» و«🔄 رحلة جديدة» (الحفظ ${sv.kb} كيلوبايت)`);
await G(() => { const raw = JSON.parse(localStorage.getItem('natta.v1')); window.__natta.save.ws = raw.ws; }); // مثل إعادة تحميل الصفحة: من التخزين
await page.tap('#play', { force: true });
ok(await until(() => window.__natta.state === 'world', 30000), 'كمّل رحلتك ▶');
const rs = await G((sv) => { const W = window.__natta.WD, h = W.S.hero; return { d: +Math.hypot(h.x - sv.x, h.z - sv.z).toFixed(2), track: W.S.track, item: W.S.items[2].taken, thyme: W.S.tasks.find((t) => t.id === 'thyme').got, resumed: window.__natta.WS.resumed, banner: document.getElementById('bnTitle').textContent }; }, sv);
ok(rs.resumed && rs.d < 1 && rs.track === 'honey' && rs.item && rs.thyme === 1 && rs.banner.includes('رحلتك'), `🔄 رجع لنفس مكانه (${rs.d} م) والطلب المتتبَّع 🍯 والأغراض اللي جمعها`);
await G(() => window.__natta.goHome());
await page.tap('#newTrip', { force: true });
ok(await until(() => window.__natta.state === 'world' && !window.__natta.WS.resumed && window.__natta.WD.S.items.every((i) => !i.taken), 30000), '🔄 «رحلة جديدة» تبدي من الساحة بطلبات جديدة');

// 12) الانتقال السريع (بكود سري) يوديك للقمة وللوادي بنفس العالم، وما يكسر الأرقام
await G(() => window.__natta.goHome());
const rec0 = await G(() => [window.__natta.save.mtSummits || 0, window.__natta.save.mtBest || 0]);
await G(() => { window.__natta.unlockWarp(); window.__natta.openCode(); });
await page.tap('#warpValley', { force: true });
ok(await until(() => window.__natta.state === 'world' && window.__natta.WD.G.zoneAt(window.__natta.WD.S.hero.x, window.__natta.WD.S.hero.z).id === 'valley', 20000), 'الانتقال السريع: كبل لوادي الغزلان');
await G(() => window.__natta.goHome()); await G(() => window.__natta.openCode()); await page.tap('#warpSummit', { force: true });
ok(await until(() => window.__natta.state === 'world' && window.__natta.WD.S.summit, 20000), 'الانتقال السريع: كبل لساحة القمة');
const rec1 = await G(() => [window.__natta.save.mtSummits || 0, window.__natta.save.mtBest || 0]);
ok(rec1.every((v, i) => v === rec0[i]), 'الانتقال السريع ما يحسب قمة ولا رقم');

// 13) وضع القفز الكلاسيكي باقي لحاله
await G(() => window.__natta.goHome()); await wait(300);
await page.tap('#playJump', { force: true }); await wait(500);
ok(await G(() => window.__natta.state === 'play' && document.getElementById('g3d').hidden), '🦘 وضع القفز يشتغل لحاله (2D)');
await G(() => window.__natta.goHome());

ok(errors.length === 0, 'ماكو أخطاء' + (errors.length ? ': ' + errors.slice(0, 3).join(' | ') : ''));
await browser.close(); server.close();
console.log(fails ? `\n✗ ${fails} فشل` : '\nكلشي تمام ✅');
process.exit(fails ? 1 : 0);
