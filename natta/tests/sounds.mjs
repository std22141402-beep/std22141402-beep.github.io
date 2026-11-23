// فحص أصوات الشخصيات: كل صوت مسموع، ما يتشوه (clipping)، وطوله معقول
// ويسجّل عيّنة لكل الشخصيات بـ /tmp/natta-sounds.wav حتى تنسمع
// التشغيل: node natta/tests/sounds.mjs
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { chromium } = require('/opt/npm-tools/node_modules/playwright');
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
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
const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] });
const page = await browser.newPage();
const errors = [];
page.on('pageerror', (e) => errors.push(e.message));
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
await page.goto(`http://localhost:${server.address().port}/natta/`);
await page.waitForFunction(() => window.__natta);

let fails = 0;
const ok = (c, m) => { console.log((c ? '  ✓ ' : '  ✗ ') + m); if (!c) fails++; };

// 1) كل صوت لوحده
const stats = await page.evaluate(async () => {
  const N = window.__natta, out = [];
  for (const sk of N.SKINS) {
    for (const kind of ['jump', 'boost', 'lose', 'hello']) {
      const d = await N.renderSounds([[sk.id, kind, 0]], 3);
      let peak = 0;
      for (let i = 0; i < d.length; i++) peak = Math.max(peak, Math.abs(d[i]));
      // الطول = لحد ما ينزل الصوت تحت 3% من أعلى نقطة، والعلو = متوسط القوة (RMS) بهالفترة
      let last = 0, sum = 0, zc = 0;
      for (let i = 0; i < d.length; i++) if (Math.abs(d[i]) > peak * 0.03) last = i;
      for (let i = 1; i <= last; i++) { sum += d[i] * d[i]; if ((d[i - 1] < 0) !== (d[i] < 0)) zc++; }
      const n = Math.max(1, last);
      out.push({ id: sk.id, name: sk.name, kind, peak: +peak.toFixed(3), rms: +Math.sqrt(sum / n).toFixed(4), dur: +(last / 44100).toFixed(2), bright: Math.round((zc / n) * 44100 / 2) });
    }
  }
  return out;
});
const LIMIT = { jump: 1.0, boost: 1.6, lose: 2.6, hello: 1.8 }; // الشبح عنده صدى فقفزته أطول
console.log('\n  الشخصية   الصوت   أعلى  متوسط  الطول  حدّة(Hz)');
for (const s of stats) {
  console.log(`  ${s.name.padEnd(8)} ${s.kind.padEnd(6)} ${String(s.peak).padEnd(5)} ${String(s.rms).padEnd(6)} ${String(s.dur).padEnd(5)} ${s.bright}`);
}
console.log('');
const kinds = ['jump', 'boost', 'lose', 'hello'];
const median = (a) => { const b = [...a].sort((x, y) => x - y); return b[b.length >> 1]; };
const spread = {};
for (const k of kinds) {
  const r = stats.filter((s) => s.kind === k).map((s) => s.rms);
  spread[k] = 20 * Math.log10(Math.max(...r) / Math.min(...r));
  const m = median(r);
  if (process.env.SUGGEST) console.log(k, stats.filter((s) => s.kind === k).map((s) => `${s.id}:${(m / s.rms).toFixed(2)}`).join(' '));
}
for (const k of kinds) ok(spread[k] < 7, `علو أصوات «${k}» متقارب بين الشخصيات (الفرق ${spread[k].toFixed(1)} dB)`);
for (const s of stats) {
  const bad = !(s.peak > 0.05) ? 'ما ينسمع' : s.peak > 0.99 ? 'يتشوه' : s.dur > LIMIT[s.kind] ? `طويل (${s.dur}s)` : '';
  if (bad) ok(false, `${s.name} / ${s.kind}: ${bad}`);
}
ok(stats.every((s) => s.peak > 0.05 && s.peak <= 0.99 && s.dur <= LIMIT[s.kind]), `كل الـ ${stats.length} صوت مسموعة، بلا تشويه، وبطول مناسب`);
// كل شخصية لازم صوت قفزتها يختلف عن الباقين
const jumps = stats.filter((s) => s.kind === 'jump').map((s) => `${s.bright}-${s.dur}-${s.rms}`);
ok(new Set(jumps).size === jumps.length, 'صوت القفزة يختلف بين كل الشخصيات');

// 2) عيّنة وحدة فيها كل الشخصيات ورا بعض
const plan = await page.evaluate(() => {
  const list = []; let t = 0.3; const marks = [];
  for (const sk of window.__natta.SKINS) {
    marks.push([sk.name, +t.toFixed(2)]);
    list.push([sk.id, 'hello', t]); t += 1.0;
    [2, 3, 1, 4, 2].forEach((n) => { list.push([sk.id, 'jump', t, n]); t += 0.42; });
    t += 0.15; list.push([sk.id, 'boost', t]); t += 1.0;
    list.push([sk.id, 'lose', t]); t += 2.0;
  }
  return { list, total: t + 0.5, marks };
});
const pcm = await page.evaluate(async ({ list, total }) => Array.from(await window.__natta.renderSounds(list, total)), plan);
function writeWav(file, pcm) {
  const sr = 44100, buf = Buffer.alloc(44 + pcm.length * 2);
  buf.write('RIFF', 0); buf.writeUInt32LE(36 + pcm.length * 2, 4); buf.write('WAVE', 8); buf.write('fmt ', 12);
  buf.writeUInt32LE(16, 16); buf.writeUInt16LE(1, 20); buf.writeUInt16LE(1, 22); buf.writeUInt32LE(sr, 24);
  buf.writeUInt32LE(sr * 2, 28); buf.writeUInt16LE(2, 32); buf.writeUInt16LE(16, 34); buf.write('data', 36); buf.writeUInt32LE(pcm.length * 2, 40);
  pcm.forEach((v, i) => buf.writeInt16LE(Math.round(Math.max(-1, Math.min(1, v)) * 32767), 44 + i * 2));
  fs.writeFileSync(file, buf);
}
writeWav('/tmp/natta-sounds.wav', pcm);
console.log('  العيّنة: /tmp/natta-sounds.wav  —', plan.marks.map(([n, t]) => `${n} ${t}s`).join(' | '));

// 3) أصوات عالم النار: انفجار، رعد قريب وبعيد، فقاعة حمم
const fxStats = await page.evaluate(async () => {
  const out = [];
  for (const [k, n, name] of [['boom', 1, 'انفجار'], ['thunder', 1, 'رعد قريب'], ['thunder', 0, 'رعد بعيد'], ['lavaPop', 1, 'فقاعة حمم'], ['jet', 1, 'طيارة تعبر'], ['whoosh', 1, 'انفجار السرب'], ['fever', 1, 'الحماس'], ['feverEnd', 1, 'نهاية الحماس'], ['combo', 10, 'كومبو'], ['slowmo', 1, 'حركة بطيئة'], ['warn', 1, 'إنذار نيزك'], ['event', 1, 'حدث خطر'], ['event', 0, 'حدث هدية'], ['revive', 1, 'فرصة ثانية'], ['mission', 1, 'مهمة'], ['count', 1, 'عد تنازلي']]) {
    const d = await window.__natta.renderSounds([['fx', k, 0, n]], 3.5);
    let peak = 0; for (let i = 0; i < d.length; i++) peak = Math.max(peak, Math.abs(d[i]));
    out.push({ name, peak });
  }
  return out;
});
for (const f of fxStats) ok(f.peak > 0.02 && f.peak < 0.99, `${f.name}: مسموع وبلا تشويه (${f.peak.toFixed(2)})`);
const firePcm = await page.evaluate(async () => Array.from(await window.__natta.renderSounds([
  ['fx', 'thunder', 0.2, 0], ['fx', 'thunder', 3.0, 1], ['fire', 'jump', 5.4, 1], ['fire', 'jump', 5.85, 3], ['fx', 'boom', 6.3, 1],
  ['fx', 'lavaPop', 7.4], ['fx', 'lavaPop', 7.8], ['fx', 'lavaPop', 8.1], ['fire', 'boost', 8.5], ['fx', 'thunder', 9.4, 1], ['fire', 'lose', 11.6],
], 13.5)));
writeWav('/tmp/natta-fire-sounds.wav', firePcm);
console.log('  عيّنة عالم النار: /tmp/natta-fire-sounds.wav');
writeWav('/tmp/natta-jets.wav', await page.evaluate(async () => Array.from(await window.__natta.renderSounds([
  ['fx', 'jet', 0.2, 1], ['fx', 'jet', 3.6, -1], ['fx', 'jet', 3.75, 1], ['fx', 'whoosh', 7.2], ['fx', 'thunder', 8.0, 0],
], 10.5))));
console.log('  عيّنة الطيارات: /tmp/natta-jets.wav');

// 4) موسيقى الخلفية: كل نمط يعزف بعلو مناسب، وأوطى من المؤثرات
const mus = await page.evaluate(async () => {
  const out = [];
  for (const style of ['day', 'sunset', 'night', 'space', 'fire']) {
    const [L] = await window.__natta.renderMusic([[0, { style, intensity: 0.7, bpm: 96 }], [4, { intensity: 4.4, bpm: 120, riser: true, fill: true }], [7, { celebrate: true }]], 10);
    let peak = 0, a = 0, b = 0; const h = L.length >> 1;
    for (let i = 0; i < L.length; i++) { peak = Math.max(peak, Math.abs(L[i])); if (i < 44100 * 3.5) a += L[i] * L[i]; else if (i > 44100 * 4.5) b += L[i] * L[i]; }
    out.push({ style, peak, calm: Math.sqrt(a / (44100 * 3.5)), full: Math.sqrt(b / (L.length - 44100 * 4.5)) });
  }
  return out;
});
for (const m of mus) ok(m.peak < 0.6 && m.calm > 0.003 && m.full > m.calm * 1.5, `موسيقى «${m.style}»: هادئة بالبداية (${m.calm.toFixed(3)}) وتقوى مع الحماس (${m.full.toFixed(3)})، أعلى نقطة ${m.peak.toFixed(2)}`);

ok(errors.length === 0, 'ماكو أخطاء' + (errors.length ? ': ' + errors.join(' / ') : ''));
await browser.close(); server.close();
console.log(fails ? `\n${fails} فشل` : '\nكلشي تمام ✅');
process.exit(fails ? 1 : 0);
