import test from 'node:test';
import assert from 'node:assert/strict';
import { haversine, buildLine, pointAt, snapToLine, mercFraction, destination, bearing, angleDiff, parseLatLon } from '../js/geo.js';
import { normalizeRoute, remainingDuration } from '../js/routing.js';
import { NavEngine } from '../js/navengine.js';
import { instructionFor, spokenDistance, maneuverIcon, isSilent, fmtDistance, fmtDuration } from '../js/instructions.js';
import { mockRoute, mockOsrmResponse } from './mock-osrm.js';

const BAGHDAD = [44.3661, 33.3152];

// مولد أرقام عشوائية ثابت (حتى تتكرر النتائج)
function rng(seed) { let s = seed; return () => ((s = (s * 16807) % 2147483647) / 2147483647); }

function drive(engine, route, { speed = 12, dt = 1, noise = 4, accuracy = 8, seed = 1, until = Infinity, startAlong = 0, onFix } = {}) {
  const r = rng(seed);
  const log = { said: [], reroute: null, arrivedAt: null, states: [] };
  let along = startAlong, t = 0;
  while (along <= route.line.total + 40 && t < 5000) {
    const p = pointAt(route.line, Math.min(along, route.line.total));
    const off = destination(p.point, p.bearing + 90, (r() - 0.5) * 2 * noise);
    const fix = { pos: off, heading: p.bearing + (r() - 0.5) * 6, speed, accuracy, t: t * 1000 };
    const extra = onFix ? onFix(fix, t, along) : null;
    const st = engine.update(extra || fix);
    log.states.push(st);
    for (const a of st.announcements) log.said.push({ t, d: Math.round(st.distToNext), text: a.text, band: a.band });
    if (st.needReroute && !log.reroute) { log.reroute = { t, reason: st.reason }; }
    if (st.arrived && log.arrivedAt == null) { log.arrivedAt = t; break; }
    along += speed * dt; t += dt;
    if (t > until) break;
  }
  return log;
}

test('haversine: بغداد ← البصرة تقريباً 450 كم', () => {
  const basra = [47.7804, 30.5085];
  const d = haversine(BAGHDAD, basra);
  assert.ok(d > 440000 && d < 460000, `got ${d}`);
});

test('pointAt / snapToLine متطابقين', () => {
  const r = normalizeRoute(mockOsrmResponse(BAGHDAD, [44.40, 33.34]).routes[0]);
  for (const d of [0, 10, 333, 1234, r.line.total / 2, r.line.total - 1]) {
    const p = pointAt(r.line, d);
    const s = snapToLine(r.line, p.point, { fromAlong: Math.max(0, d - 50) });
    assert.ok(Math.abs(s.along - d) < 1, `d=${d} snapped=${s.along}`);
    assert.ok(s.dist < 0.5);
  }
  let prev = -1;
  for (let d = 0; d <= r.line.total; d += r.line.total / 50) {
    const f = mercFraction(r.line, d);
    assert.ok(f >= prev); prev = f;
  }
  assert.ok(Math.abs(mercFraction(r.line, r.line.total) - 1) < 1e-9);
});

test('normalizeRoute: كل مناورة بمكانها الصحيح على الخط', () => {
  const r = normalizeRoute(mockOsrmResponse(BAGHDAD, [44.40, 33.34]).routes[0]);
  assert.equal(r.steps[0].maneuver.type, 'depart');
  assert.equal(r.steps.at(-1).maneuver.type, 'arrive');
  for (const s of r.steps) {
    const p = r.coords[s.startIdx];
    assert.ok(haversine(p, s.maneuver.location) < 1, 'maneuver location mismatch');
  }
  for (let i = 1; i < r.steps.length; i++) assert.ok(r.steps[i].startDist >= r.steps[i - 1].startDist);
  assert.ok(Math.abs(remainingDuration(r, 0) - r.duration) < 1);
  assert.equal(remainingDuration(r, r.line.total), 0);
  assert.ok(r.steps[1].lanes && r.steps[1].lanes.length === 3);
});

test('قيادة عادية: إعلانات صحيحة، بدون إعادة حساب، ويوصل', () => {
  const r = normalizeRoute(mockOsrmResponse(BAGHDAD, [44.40, 33.34]).routes[0]);
  const eng = new NavEngine(r, { dialect: 'msa' });
  const log = drive(eng, r, { speed: 12, noise: 6 });
  assert.equal(log.reroute, null, 'لازم ما يعيد الحساب');
  assert.ok(log.arrivedAt != null, 'لازم يوصل');
  const nows = log.said.filter((s) => s.band === 'now');
  assert.ok(nows.length >= 2, 'لازم يعلن عند كل منعطف');
  // كل منعطف ينعلن مرة وحدة بس لكل نطاق
  const keys = log.said.map((s) => s.band + s.text);
  assert.equal(new Set(keys).size, keys.length, 'لا تكرار');
  // الإعلان "الآن" يصير قريب من المنعطف
  for (const s of nows) assert.ok(s.d <= 80, `now announced at ${s.d}m`);
  console.log('   إعلانات:', log.said.map((s) => `[${s.d}م] ${s.text}`).join(' | '));
});

test('قيادة سريعة على طريق طويل: إعلان بعيد + متوسط + الآن', () => {
  const a = BAGHDAD, b = destination(a, 0, 6000), c = destination(b, 90, 3000);
  const r = normalizeRoute(mockRoute([a, b, c], ['طريق المطار', 'شارع الكندي', '']));
  const eng = new NavEngine(r, { dialect: 'iraqi' });
  const log = drive(eng, r, { speed: 25, noise: 5 });
  const bands = log.said.filter((s) => s.text.includes('لِف')).map((s) => s.band);
  assert.deepEqual(bands, ['far', 'mid', 'now']);
  assert.ok(log.said.some((s) => s.text.includes('كيلو')));
});

test('ضوضاء GPS عالية (20م) ما تسبب إعادة حساب خاطئة', () => {
  const r = normalizeRoute(mockOsrmResponse(BAGHDAD, [44.41, 33.35]).routes[0]);
  const eng = new NavEngine(r);
  const log = drive(eng, r, { speed: 14, noise: 20, accuracy: 20, seed: 7 });
  assert.equal(log.reroute, null);
  assert.ok(log.arrivedAt != null);
});

test('الخروج عن المسار يكتشف خلال ثانيتين-ثلاث', () => {
  const r = normalizeRoute(mockOsrmResponse(BAGHDAD, [44.40, 33.34]).routes[0]);
  const eng = new NavEngine(r);
  let devStart = null;
  const log = drive(eng, r, {
    speed: 12, noise: 3,
    onFix: (fix, t, along) => {
      if (along > 600) {
        if (devStart == null) devStart = t;
        const p = pointAt(r.line, 600);
        const away = (t - devStart + 1) * 12;
        return { ...fix, pos: destination(p.point, p.bearing + 90, away), heading: p.bearing + 90 };
      }
      return null;
    },
  });
  assert.ok(log.reroute, 'لازم يطلب إعادة حساب');
  assert.ok(log.reroute.t - devStart <= 4, `took ${log.reroute.t - devStart}s`);
});

test('السير بعكس الاتجاه يطلب طريق جديد', () => {
  const r = normalizeRoute(mockOsrmResponse(BAGHDAD, [44.40, 33.34]).routes[0]);
  const eng = new NavEngine(r);
  // نقود للأمام 30 ثانية ثم نرجع
  let flip = null;
  const log = drive(eng, r, {
    speed: 10, noise: 2,
    onFix: (fix, t) => {
      if (t >= 30) {
        if (flip == null) flip = t;
        const back = 300 - (t - flip) * 10;
        const p = pointAt(r.line, Math.max(0, back));
        return { ...fix, pos: p.point, heading: (p.bearing + 180) % 360 };
      }
      return null;
    },
  });
  assert.ok(log.reroute && log.reroute.reason === 'wrongway', JSON.stringify(log.reroute));
});

test('البداية بعيدة عن الطريق (موقف سيارات) ما تسبب إعادة حساب', () => {
  const r = normalizeRoute(mockOsrmResponse(BAGHDAD, [44.40, 33.34]).routes[0]);
  const eng = new NavEngine(r);
  const start = r.coords[0];
  for (let i = 0; i < 10; i++) {
    const p = destination(start, 180, 70 - i * 7);
    const st = eng.update({ pos: p, heading: 0, speed: 3, accuracy: 10, t: i * 1000 });
    assert.equal(st.needReroute, false);
  }
  assert.equal(eng.joined, true);
});

test('الابتعاد عن الطريق من البداية يطلب طريق جديد', () => {
  const r = normalizeRoute(mockOsrmResponse(BAGHDAD, [44.40, 33.34]).routes[0]);
  const eng = new NavEngine(r);
  const start = r.coords[0];
  let got = false;
  for (let i = 0; i < 40 && !got; i++) {
    const p = destination(start, 180, 60 + i * 12);
    got = eng.update({ pos: p, heading: 180, speed: 12, accuracy: 10, t: i * 1000 }).needReroute;
  }
  assert.ok(got);
});

test('التعليمات العربية لكل أنواع المناورات', () => {
  const mk = (type, modifier, extra = {}) => ({ maneuver: { type, modifier, ...extra }, name: 'شارع فلسطين', ref: '', destinations: 'الكرادة, الجادرية' });
  const cases = [
    ['turn', 'right', 'انعطف يميناً إلى شارع فلسطين', 'لِف يمين على شارع فلسطين'],
    ['turn', 'left', 'انعطف يساراً', 'لِف يسار'],
    ['turn', 'slight right', 'قليلاً إلى اليمين', 'ميّل لليمين'],
    ['turn', 'sharp left', 'بحدة إلى اليسار', 'يسار حادة'],
    ['turn', 'uturn', 'استدر للخلف', 'يوتيرن'],
    ['roundabout', 'right', 'المخرج الثاني', 'الفرع الثاني'],
    ['off ramp', 'right', 'المخرج على اليمين باتجاه الكرادة', 'المخرج اللي على يمينك'],
    ['fork', 'left', 'الزم اليسار', 'خليك يسار'],
    ['merge', 'left', 'اندمج يساراً', 'ادخل يسار'],
    ['end of road', 'right', 'في نهاية الطريق، انعطف يميناً', 'بنهاية الشارع، لِف يمين'],
    ['arrive', 'left', 'وجهتك على اليسار', 'وجهتك على يسارك'],
    ['depart', undefined, 'انطلق باتجاه الشرق', 'اطلع باتجاه الشرق'],
  ];
  for (const [type, mod, msa, iq] of cases) {
    const s = mk(type, mod, { exit: 2, bearing_after: 90 });
    const a = instructionFor(s, 'msa').text, b = instructionFor(s, 'iraqi').text;
    assert.ok(a.includes(msa), `${type}/${mod} msa: ${a}`);
    assert.ok(b.includes(iq), `${type}/${mod} iraqi: ${b}`);
    assert.ok(maneuverIcon(s).startsWith('<svg'));
  }
  assert.equal(isSilent(mk('new name', 'straight')), true);
  assert.equal(isSilent(mk('turn', 'right')), false);
});

test('نطق وتنسيق المسافات', () => {
  assert.equal(spokenDistance(287, 'msa'), '300 متر');
  assert.equal(spokenDistance(1020, 'msa'), 'كيلومتر واحد');
  assert.equal(spokenDistance(1980, 'iraqi'), 'كيلوين');
  assert.equal(spokenDistance(1600, 'iraqi'), 'كيلو ونص');
  assert.equal(spokenDistance(5200, 'msa'), '5 كيلومترات');
  assert.equal(spokenDistance(42, 'msa'), '40 متر');
  assert.deepEqual(fmtDistance(1530), { value: '1.5', unit: 'كم' });
  assert.deepEqual(fmtDistance(240), { value: '240', unit: 'م' });
  assert.equal(fmtDuration(65 * 60), '1 س 5 د');
});

test('قراءة الإحداثيات المكتوبة', () => {
  assert.deepEqual(parseLatLon('33.31, 44.36'), [44.36, 33.31]);
  assert.deepEqual(parseLatLon('٣٣.٣١، ٤٤.٣٦'), [44.36, 33.31]);
  assert.equal(parseLatLon('شارع فلسطين'), null);
});

test('أداء: 2000 تحديث على طريق 20 ألف نقطة أقل من نصف ثانية', () => {
  const vs = [BAGHDAD];
  for (let i = 1; i < 40; i++) vs.push(destination(vs[i - 1], i % 2 ? 0 : 90, 7500));
  const r = normalizeRoute(mockRoute(vs, []));
  assert.ok(r.coords.length > 19000, `coords=${r.coords.length}`);
  const eng = new NavEngine(r);
  const t0 = performance.now();
  drive(eng, r, { speed: 30, until: 2000 });
  const ms = performance.now() - t0;
  assert.ok(ms < 500, `took ${ms}ms`);
});
