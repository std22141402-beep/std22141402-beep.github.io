// اختبارات موثوقية الـGPS أثناء السياقة
import test from 'node:test';
import assert from 'node:assert/strict';
import { GpsSource } from '../js/location.js';
import { GpsSmoother, destination, haversine } from '../js/geo.js';

const B = [44.3661, 33.3152];
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let seed = 11;
const rnd = () => ((seed = (seed * 1103515245 + 12345) % 2147483648) / 2147483648);
const gauss = () => Math.sqrt(-2 * Math.log(rnd() + 1e-12)) * Math.cos(2 * Math.PI * rnd());

/** نفس سلوك أندرويد/TWA: عند «الموقع غير متوفر» يوقف التحديثات نهائياً */
class FakeGeo {
  constructor() { this.watches = new Map(); this.id = 0; this.watchCalls = 0; this.quick = []; }
  watchPosition(ok, err, opts) { const id = ++this.id; this.watches.set(id, { ok, err, opts }); this.watchCalls++; return id; }
  clearWatch(id) { this.watches.delete(id); }
  getCurrentPosition(ok, err, opts) { this.quick.push({ ok, err, opts }); }
  emit(p, { acc = 8, speed = null, heading = null, ts = Date.now() } = {}) {
    for (const w of [...this.watches.values()]) w.ok({ coords: { latitude: p[1], longitude: p[0], accuracy: acc, speed, heading }, timestamp: ts });
  }
  unavailable() { const ws = [...this.watches.values()]; this.watches.clear(); for (const w of ws) w.err({ code: 2, message: 'Location not available.' }); }
  deny() { for (const w of [...this.watches.values()]) w.err({ code: 1, message: 'denied' }); }
  silentDeath() { this.watches.clear(); }
}

const FAST = { dogMs: 20, staleNavMs: 150, staleIdleMs: 300, lostMs: 90, retryMin: 30, retryMax: 120, offAfterMs: 200, coarseAfterMs: 100 };
function make(cfg = {}, opts = {}) {
  const geo = new FakeGeo();
  const fixes = [], states = [], errors = [];
  const src = new GpsSource((f) => fixes.push(f), (e) => errors.push(e), { geo, cfg: { ...FAST, ...cfg }, onState: (s) => states.push(s), ...opts });
  return { geo, src, fixes, states, errors };
}

test('GPS: يرجع يشتغل وحده بعد ما أندرويد يوقف التحديثات (الإشارة انقطعت)', async () => {
  const { geo, src, fixes } = make();
  src.start();
  geo.emit(B);
  assert.equal(fixes.length, 1);
  geo.unavailable();                       // جسر / بنايات: أندرويد يوقف
  geo.emit(destination(B, 0, 20));         // ماكو أحد يستلم
  assert.equal(fixes.length, 1);
  await sleep(120);
  assert.ok(geo.watchCalls >= 2, 'لازم يعيد تشغيل المتابعة');
  geo.emit(destination(B, 0, 40));
  assert.equal(fixes.length, 2, 'القراءات رجعت توصل');
  src.stop();
});

test('GPS: المراقب يعيد التشغيل إذا القراءات وكفت بدون أي خطأ، ويكول «الإشارة ضعيفة»', async () => {
  const { geo, src, fixes, states } = make();
  src.setNavMode(true);
  src.start();
  geo.emit(B, { speed: 14, heading: 0 });
  geo.emit(destination(B, 0, 14), { speed: 14, heading: 0, ts: Date.now() + 1 });
  geo.silentDeath();
  await sleep(260);
  assert.ok(states.includes('lost'), `الحالات: ${states}`);
  assert.ok(geo.watchCalls >= 2, 'إعادة تشغيل من المراقب');
  geo.emit(destination(B, 0, 60), { speed: 14, heading: 0, ts: Date.now() + 2 });
  assert.equal(fixes.at(-1).stale, false);
  assert.equal(src.state, 'ok');
  src.stop();
});

test('GPS: قراءة سريعة تقريبية قبل ما تقفل الأقمار الصناعية', () => {
  const { geo, src, fixes } = make();
  src.start();
  assert.equal(geo.quick.length, 1);
  assert.equal(geo.quick[0].opts.enableHighAccuracy, false);
  assert.ok(geo.quick[0].opts.maximumAge <= 15000, 'ما نقبل موقع قديم من دقايق');
  geo.quick[0].ok({ coords: { latitude: B[1], longitude: B[0], accuracy: 35 }, timestamp: Date.now() });
  assert.equal(fixes.length, 1);
  assert.equal(fixes[0].src, 'quick');
  // القراءة الدقيقة تغطي عليها، والتقريبية بعدها ما تأثر
  geo.emit(destination(B, 90, 5), { acc: 6, ts: Date.now() + 5 });
  geo.quick[0].ok({ coords: { latitude: B[1] + 0.001, longitude: B[0], accuracy: 40 }, timestamp: Date.now() + 10 });
  assert.equal(fixes.length, 2);
  src.stop();
});

test('GPS: القراءة القديمة المحفوظة تنعلّم «قديمة» وما تغطي على الحديثة', () => {
  const { geo, src, fixes } = make();
  src.start();
  geo.emit(B, { acc: 10, ts: Date.now() - 3 * 60000 });
  assert.equal(fixes.length, 1);
  assert.equal(fixes[0].stale, true);
  assert.ok(fixes[0].accuracy >= 120);
  assert.equal(src.state, 'searching');
  geo.emit(destination(B, 0, 500), { acc: 8 });
  assert.equal(fixes[1].stale, false);
  geo.emit(B, { acc: 10, ts: Date.now() - 2 * 60000 });
  assert.equal(fixes.length, 2, 'القديمة بعد الحديثة تنرفض');
  geo.emit(B, { acc: 10, ts: Date.now() - 60 * 60000 });
  assert.equal(fixes.length, 2);
  src.stop();
});

test('GPS: ساعة الموبايل غلط بـ10 دقايق — ما نرفض القراءات الحية', () => {
  let T = 1_800_000_000_000;
  const { geo, src, fixes } = make({}, { now: () => T });
  src.start();
  for (let i = 0; i < 4; i++) {
    geo.emit(destination(B, 0, i * 12), { acc: 8, speed: 12, heading: 0, ts: T - 600000 });
    T += 1000;
  }
  assert.ok(fixes.length >= 3, `وصلت ${fixes.length}`);
  assert.equal(fixes.at(-1).stale, false);
  src.stop();
});

test('GPS: ما يعتمد على وقت الـGPS بالترتيب (ساعة الـGPS ترجع لورا شوية)', () => {
  let T = 1_800_000_000_000;
  const { geo, src, fixes } = make({}, { now: () => T });
  src.start();
  geo.emit(B, { ts: T }); T += 1000;
  geo.emit(destination(B, 0, 10), { ts: T - 1500 }); T += 1000;  // وقت GPS أقدم من السابقة
  assert.equal(fixes.length, 2, 'القراءة الحية ما تنرفض بسبب فرق الساعة');
  src.stop();
});

test('GPS: الصلاحية مرفوضة — يوكف ويبلغ وما يعيد المحاولة بلا فائدة', async () => {
  const { geo, src, states, errors } = make();
  src.start();
  geo.deny();
  assert.equal(src.state, 'denied');
  assert.equal(errors[0].code, 1);
  const n = geo.watchCalls;
  await sleep(150);
  assert.equal(geo.watchCalls, n);
  assert.ok(states.includes('denied'));
  src.stop();
});

test('GPS: الموقع مطفي بالموبايل — يكتشفه بعد أخطاء متكررة', async () => {
  const { geo, src } = make();
  src.start();
  const t0 = Date.now();
  while (Date.now() - t0 < 450 && src.state !== 'off') { geo.unavailable(); await sleep(40); }
  assert.equal(src.state, 'off');
  geo.emit(B);                       // شغّل الموقع: أول قراءة ترجعه طبيعي
  await sleep(150);
  geo.emit(B, { ts: Date.now() + 1 });
  assert.equal(src.state, 'ok');
  src.stop();
});

test('GPS: يكتشف صلاحية «الموقع التقريبي» (دقة 2 كم)', async () => {
  const { geo, src } = make();
  src.start();
  geo.emit(B, { acc: 2000 });
  await sleep(130);
  geo.emit(destination(B, 0, 30), { acc: 2000, ts: Date.now() + 1 });
  assert.equal(src.state, 'coarse');
  geo.emit(B, { acc: 8, ts: Date.now() + 2 });
  assert.equal(src.state, 'ok');
  src.stop();
});

test('GPS: waitForFix ينتظر قراءة حديثة', async () => {
  const { geo, src } = make();
  src.start();
  const w = src.waitForFix(500);
  setTimeout(() => geo.emit(B), 40);
  const f = await w;
  assert.ok(f && !f.stale);
  src.stop();
  const m = make();
  m.src.start();
  assert.equal(await m.src.waitForFix(60), null);
  m.src.stop();
});

test('فلتر كالمان: ما يتأخر ورا السيارة (90 كم/س بدقة 25 م)', () => {
  const f = new GpsSmoother();
  const errs = [];
  for (let i = 0; i < 60; i++) {
    const truth = destination(B, 0, i * 25);
    const raw = destination(destination(truth, 90, gauss() * 16), 0, gauss() * 16);
    const sm = f.process(raw, 25, i * 1000, 25 + gauss() * 0.3, gauss() * 3);
    if (i > 8) errs.push(haversine(sm, truth));
  }
  const mean = errs.reduce((a, b) => a + b, 0) / errs.length;
  assert.ok(mean < 9, `متوسط الخطأ ${mean.toFixed(1)} م`);
  assert.ok(Math.abs(f.speed - 25) < 2, `السرعة ${f.speed}`);
  assert.ok(Math.abs(((f.heading + 540) % 360) - 180) < 8, `الاتجاه ${f.heading}`);
});

test('فلتر كالمان: بدون سرعة من الجهاز يبقى أدق من القراءة الخام', () => {
  const f = new GpsSmoother();
  const errs = [], rawErrs = [];
  for (let i = 0; i < 80; i++) {
    const truth = destination(B, 45, i * 20);
    const raw = destination(destination(truth, 90, gauss() * 10), 0, gauss() * 10);
    const sm = f.process(raw, 15, i * 1000, null, null);
    if (i > 10) { errs.push(haversine(sm, truth)); rawErrs.push(haversine(raw, truth)); }
  }
  const mean = (a) => a.reduce((x, y) => x + y, 0) / a.length;
  assert.ok(mean(errs) < mean(rawErrs) * 0.85, `الفلتر ${mean(errs).toFixed(1)} م مقابل الخام ${mean(rawErrs).toFixed(1)} م`);
  assert.ok(Math.abs(f.speed - 20) < 3, `السرعة المحسوبة ${f.speed.toFixed(1)}`);
});

test('فلتر كالمان: السيارة واكفة بالإشارة ما ترجف', () => {
  const f = new GpsSmoother();
  const out = [];
  for (let i = 0; i < 40; i++) {
    const raw = destination(destination(B, 90, gauss() * 10), 0, gauss() * 10);
    out.push(f.process(raw, 15, i * 1000, 0, null));
  }
  const spread = out.slice(10).map((p) => haversine(p, B));
  const rms = Math.sqrt(spread.reduce((a, b) => a + b * b, 0) / spread.length);
  assert.ok(rms < 4, `الارتجاج ${rms.toFixed(1)} م`);
  assert.equal(f.heading, null);
});

test('فلتر كالمان: يرفض قفزة غلط وحدة، ويقبل التغيير الحقيقي (طلعنا من نفق)', () => {
  const f = new GpsSmoother();
  for (let i = 0; i < 10; i++) f.process(destination(B, 0, i * 15), 8, i * 1000, 15, 0);
  const before = f.last;
  const wild = f.process(destination(B, 90, 500), 8, 10000, 15, 0);
  assert.ok(haversine(wild, before) < 30, 'القفزة الوحدة تنرفض');
  f.process(destination(B, 0, 900), 8, 20000, 15, 0);
  const after = f.process(destination(B, 0, 915), 8, 21000, 15, 0);
  assert.ok(haversine(after, destination(B, 0, 915)) < 20, 'التغيير الحقيقي ينقبل');
});
