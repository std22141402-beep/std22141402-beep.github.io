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
await G(() => window.__natta.startWorld()); await until(() => window.__natta.state === 'world', 30000);
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
