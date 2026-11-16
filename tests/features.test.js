import test from 'node:test';
import assert from 'node:assert/strict';
import { destination, pointAt, haversine, buildLine, nearestOnLine, snapToLine, GpsSmoother, sampleLine } from '../js/geo.js';
import { normalizeRoute } from '../js/routing.js';
import { NavEngine } from '../js/navengine.js';
import { trafficDelay, TrafficProbe, TrafficStore } from '../js/traffic.js';
import { mockRoute, mockMultiLeg } from './mock-osrm.js';

const B = [44.3661, 33.3152];
function rng(seed) { let s = seed; return () => ((s = (s * 16807) % 2147483647) / 2147483647); }

test('الفهرس الشبكي يعطي نفس نتيجة البحث الكامل', () => {
  const vs = [B]; for (let i = 1; i < 12; i++) vs.push(destination(vs[i - 1], i % 2 ? 30 : 120, 1500));
  const r = normalizeRoute(mockRoute(vs, []));
  const R = rng(3);
  for (let k = 0; k < 200; k++) {
    const p = destination(pointAt(r.line, R() * r.line.total).point, R() * 360, R() * 50);
    const a = nearestOnLine(r.line, p, 60);
    const b = snapToLine(r.line, p);
    if (b.dist <= 55) { assert.ok(a, 'should find'); assert.ok(Math.abs(a.dist - b.dist) < 0.5, `${a.dist} vs ${b.dist}`); }
  }
});

test('الازدحام: التأخير يرتفع على الطريق المزدحم وبس باتجاهه', () => {
  const a = B, b = destination(a, 90, 3000);
  const r = normalizeRoute(mockRoute([a, b], ['طريق']));
  const jam = { t: Date.now(), r: 0.2, s: [destination(a, 90, 1000), destination(a, 90, 1300)] };
  jam.len = 300; jam.mid = destination(a, 90, 1150); jam.brg = 90;
  const opposite = { ...jam, brg: 270 };
  const fine = { ...jam, r: 0.95 };
  const d1 = trafficDelay(r, [jam]);
  assert.ok(d1.delay > 60 && d1.delay < 200, `delay ${d1.delay}`);
  assert.equal(trafficDelay(r, [opposite]).delay, 0, 'عكس الاتجاه ما يأثر');
  assert.equal(trafficDelay(r, [fine]).delay, 0, 'السير الطبيعي ما يأثر');
  assert.equal(trafficDelay(r, [jam], 2000).delay, 0, 'الزحمة اللي ورانا ما تحسب');
  // نفس الزحمة من 5 سيارات ما تنحسب 5 مرات
  const d5 = trafficDelay(r, [jam, { ...jam }, { ...jam }, { ...jam }, { ...jam }]);
  assert.equal(d5.delay, d1.delay);
});

test('الازدحام: عينة السيارة تنحسب صح كل 30 ثانية', () => {
  const a = B, b = destination(a, 0, 5000);
  const r = normalizeRoute(mockRoute([a, b], ['طريق'], 12)); // السرعة الطبيعية 12 م/ث
  const probe = new TrafficProbe();
  const out = [];
  let along = 0;
  for (let t = 0; t <= 95; t++) {
    const s = probe.update({ route: r, along, t: t * 1000, onRoute: true });
    if (s) out.push(s);
    along += 6; // نص السرعة الطبيعية
  }
  assert.equal(out.length, 3);
  for (const s of out) { assert.ok(Math.abs(s.r - 0.5) < 0.05, `r=${s.r}`); assert.ok(s.s.length >= 2 && s.s.length <= 10); }
  assert.ok(JSON.stringify(out[0]).length < 400, 'الرسالة صغيرة');
  // واقف بالزحمة 90 ثانية = عينة زحمة شديدة
  const p2 = new TrafficProbe(); const out2 = [];
  for (let t = 0; t <= 100; t++) { const s = p2.update({ route: r, along: 1000, t: t * 1000, onRoute: true }); if (s) out2.push(s); }
  assert.equal(out2.length, 1);
  assert.ok(out2[0].r < 0.1);
  // خارج الطريق ما يرسل شي
  const p3 = new TrafficProbe();
  for (let t = 0; t < 100; t++) assert.equal(p3.update({ route: r, along: t * 10, t: t * 1000, onRoute: false }), null);
});

test('الازدحام: رسائل خربانة أو كبيرة تنرفض', () => {
  const st = new TrafficStore();
  st._msg({ id: '1', time: Date.now() / 1000, message: 'not json' });
  st._msg({ id: '2', time: Date.now() / 1000, message: JSON.stringify({ s: [[1, 2]], r: 0.3 }) });
  st._msg({ id: '3', time: Date.now() / 1000, message: JSON.stringify({ s: [[1, 2], ['x', 3]], r: 0.3 }) });
  st._msg({ id: '4', time: Date.now() / 1000, message: JSON.stringify({ s: Array(40).fill([44, 33]), r: 0.3 }) });
  st._msg({ id: '5', time: Date.now() / 1000 - 3600, message: JSON.stringify({ s: [[44, 33], [44.01, 33]], r: 0.3 }) });
  st._msg({ id: '6', time: Date.now() / 1000, message: JSON.stringify({ s: [[44, 33], [44.01, 33]], r: 0.3 }) });
  st._msg({ id: '6', time: Date.now() / 1000, message: JSON.stringify({ s: [[44, 33], [44.01, 33]], r: 0.3 }) });
  assert.equal(st.samples.size, 1);
  assert.equal(st.geojson().features.length, 1);
  clearTimeout(st._emitT);
});

test('تنعيم الـGPS: يشيل الارتجاج وما يأخر السيارة السريعة', () => {
  const R = rng(9);
  const f = new GpsSmoother();
  let errRaw = 0, errSm = 0;
  for (let i = 0; i < 60; i++) {
    const raw = destination(B, R() * 360, R() * 12);
    const sm = f.process(raw, 10, i * 1000, 0);
    if (i > 10) { errRaw += haversine(raw, B); errSm += haversine(sm, B); }
  }
  assert.ok(errSm < errRaw * 0.6, `smoothed ${errSm} vs raw ${errRaw}`);
  const g = new GpsSmoother();
  let lag = 0;
  for (let i = 0; i < 30; i++) {
    const truth = destination(B, 0, i * 25);
    const sm = g.process(truth, 6, i * 1000, 25);
    lag = haversine(sm, truth);
  }
  assert.ok(lag < 6, `lag ${lag}m at 90km/h`);
});

test('أكثر من وجهة: المحطات والإعلانات والوصول', () => {
  const p0 = B, p1 = destination(destination(B, 90, 1500), 0, 800), p2 = destination(destination(p1, 90, 1500), 0, 800);
  const r = normalizeRoute(mockMultiLeg([p0, p1, p2]).routes[0]);
  const wps = r.steps.filter((s) => s.waypoint);
  assert.equal(wps.length, 1);
  assert.equal(r.waypoints, 1);
  assert.ok(haversine(r.coords[wps[0].startIdx], p1) < 2);
  assert.equal(r.steps.at(-1).waypoint, undefined);
  const eng = new NavEngine(r, { dialect: 'iraqi' });
  const said = []; let arrived = false;
  for (let along = 0; along <= r.line.total + 30 && !arrived; along += 10) {
    const p = pointAt(r.line, Math.min(along, r.line.total));
    const st = eng.update({ pos: p.point, heading: p.bearing, speed: 10, accuracy: 5, t: along * 100 });
    said.push(...st.announcements.map((a) => a.text));
    arrived = st.arrived;
  }
  assert.ok(arrived, 'لازم يوصل للنهاية بس مو عند المحطة');
  assert.ok(said.some((t) => t.includes('وصلت للوقفة الأولى')), said.join(' | '));
  assert.ok(said.some((t) => t.includes('الوقفة الأولى') && t.includes('بعد')), 'إعلان قبل الوقفة');
  assert.ok(!said.some((t) => t.includes('اطلع باتجاه')), 'ما يعيد "اطلع" بعد الوقفة');
});

test('sampleLine يحافظ على البداية والنهاية', () => {
  const c = []; for (let i = 0; i < 100; i++) c.push(destination(B, 45, i * 10));
  const s = sampleLine(c, 8);
  assert.equal(s.length, 8);
  assert.ok(haversine(s[0], c[0]) < 0.01 && haversine(s[7], c[99]) < 0.01);
});
