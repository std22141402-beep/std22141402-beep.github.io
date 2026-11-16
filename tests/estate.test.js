import test from 'node:test';
import assert from 'node:assert/strict';
import { destination, haversine } from '../js/geo.js';
import { polygonArea, sideLengths, perimeter, centroid, pointInPolygon, selfIntersects, rectangle, approxDims, geohash, geohashBounds, geohashCover, nearestSegmentBearing } from '../js/estate/shape.js';
import { fmtPrice, fmtArea, normalizePhone, displayPhone, validateListing, matches, sortListings, areaComparison, totalPrice, pricePerM2, autoTitle, fieldsFor, DEFAULT_FILTER, cleanListing } from '../js/estate/model.js';

const B = [44.3661, 33.3152];
const near = (a, b, tol) => Math.abs(a - b) <= tol;

test('مستطيل 10×20: المساحة 200 والأبعاد صحيحة بأي دوران', () => {
  for (const rot of [0, 37, 90, 145]) {
    const r = rectangle(B, 10, 20, rot);
    assert.ok(near(polygonArea(r), 200, 1), `rot ${rot}: ${polygonArea(r)}`);
    const s = sideLengths(r).map((x) => Math.round(x * 10) / 10).sort((a, b) => a - b);
    assert.deepEqual(s, [10, 10, 20, 20]);
    assert.ok(near(perimeter(r), 60, 0.2));
    const d = approxDims(r);
    assert.ok(near(d.frontage, 10, 0.1) && near(d.depth, 20, 0.1) && d.rectangular, JSON.stringify(d));
    assert.ok(haversine(centroid(r), B) < 0.5);
  }
});

test('شكل L (مقعر): المساحة صحيحة والمركز داخله', () => {
  // 30×30 ناقص مربع 15×15 = 675 م²
  const o = B;
  const pts = [o, destination(o, 90, 30), destination(destination(o, 90, 30), 0, 15), destination(destination(o, 90, 15), 0, 15), destination(destination(o, 90, 15), 0, 30), destination(o, 0, 30)];
  assert.ok(near(polygonArea(pts), 675, 2), `${polygonArea(pts)}`);
  assert.ok(pointInPolygon(centroid(pts), pts));
  assert.equal(selfIntersects(pts), false);
  assert.equal(approxDims(pts).rectangular, false);
});

test('شكل متقاطع (فراشة) ينكشف', () => {
  const r = rectangle(B, 10, 20, 0);
  assert.equal(selfIntersects([r[0], r[2], r[1], r[3]]), true);
  assert.equal(selfIntersects(r), false);
});

test('أرض زراعية 4 دونم', () => {
  const r = rectangle(B, 50, 200, 12);
  assert.ok(near(polygonArea(r), 10000, 10));
  assert.equal(fmtArea(10000, 'agri_land'), '4 دونم');
  assert.equal(fmtArea(412.4, 'house'), '412 م²');
});

test('geohash: قيمة معروفة + التغطية', () => {
  assert.equal(geohash(57.64911, 10.40744, 11), 'u4pruydqqvj');
  const h = geohash(B[1], B[0], 7);
  const b = geohashBounds(h);
  assert.ok(B[0] >= b[0] && B[0] <= b[2] && B[1] >= b[1] && B[1] <= b[3]);
  const bbox = [44.30, 33.27, 44.45, 33.36];
  const cells = geohashCover(bbox, 5, 12);
  assert.ok(cells.length >= 1 && cells.length <= 12, `${cells.length}`);
  assert.ok(cells.some((c) => h.startsWith(c)), 'لازم يغطي المركز');
  // كل زاوية مغطاة
  for (const [x, y] of [[bbox[0], bbox[1]], [bbox[2], bbox[3]], [bbox[0], bbox[3]], [bbox[2], bbox[1]]]) {
    const g = geohash(y, x, 7);
    assert.ok(cells.some((c) => g.startsWith(c)), `corner ${x},${y}`);
  }
});

test('محاذاة مع الشارع', () => {
  const road = [destination(B, 270, 100), destination(B, 90, 100)]; // شرق-غرب
  const brg = nearestSegmentBearing([road], destination(B, 0, 15));
  assert.ok(near(brg % 180, 90, 1), `${brg}`);
});

test('تنسيق الأسعار بالطريقة العراقية', () => {
  assert.equal(fmtPrice(185000000, 'IQD'), '185 مليون دينار');
  assert.equal(fmtPrice(185000000, 'IQD', 'total', { short: true }), '185 مليون');
  assert.equal(fmtPrice(1250000000, 'IQD', 'total', { short: true }), '1.25 مليار');
  assert.equal(fmtPrice(750000, 'IQD', 'month', { short: true }), '750 ألف/شهر');
  assert.equal(fmtPrice(185000, 'USD', 'total', { short: true }), '$185K');
  assert.equal(fmtPrice(1500, 'USD', 'm2'), '$1,500/م²');
  assert.equal(fmtPrice(2400000, 'USD', 'total', { short: true }), '$2.4M');
  assert.equal(fmtPrice(0, 'IQD'), 'السعر عند الاتصال');
});

test('أرقام الموبايل العراقية', () => {
  for (const x of ['07701234567', '7701234567', '+9647701234567', '009647701234567', '٠٧٧٠١٢٣٤٥٦٧', '0770 123 4567']) assert.equal(normalizePhone(x), '+9647701234567', x);
  for (const x of ['0123', '07001234567', '0770123456', 'abc', '']) assert.equal(normalizePhone(x), null, x);
  assert.equal(displayPhone('+9647701234567'), '0770 123 4567');
});

const base = (o = {}) => ({ id: 'a', d: 'sale', k: 'house', x: B[0], y: B[1], poly: [1, 2, 3, 4, 5, 6], a: 200, p: 200000000, c: 'IQD', pt: 'total', ph: '07701234567', t: Date.now(), ...o });

test('التحقق قبل النشر', () => {
  assert.deepEqual(validateListing(base()), []);
  assert.ok(validateListing(base({ p: 0 })).some((e) => e.includes('السعر')));
  assert.ok(validateListing(base({ ph: '123' })).some((e) => e.includes('الموبايل')));
  assert.ok(validateListing(base({ poly: null })).some((e) => e.includes('ارسم')));
  assert.deepEqual(validateListing(base({ k: 'apartment', poly: null, a: 0 })), [], 'الشقة يكفي موقعها');
});

test('السعر الكلي وسعر المتر', () => {
  assert.equal(totalPrice(base({ pt: 'm2', p: 1500, c: 'USD', a: 200 })), 300000);
  assert.equal(totalPrice(base({ pt: 'dunam', p: 100000000, a: 5000 })), 200000000);
  assert.equal(pricePerM2(base({ p: 200000000, a: 200 })), 1000000);
});

test('الفلاتر والترتيب', () => {
  const L = [
    base({ id: '1', p: 100e6 }), base({ id: '2', p: 300e6, f: ['garden', 'garage'] }), base({ id: '3', d: 'rent', p: 750e3, pt: 'month' }),
    base({ id: '4', c: 'USD', p: 150000 }), base({ id: '5', k: 'res_land', a: 600, p: 90e6 }), base({ id: '6', t: Date.now() - 100 * 86400000 }),
  ];
  const f = (o) => L.filter((l) => matches(l, { ...DEFAULT_FILTER, ...o })).map((l) => l.id);
  assert.deepEqual(f({}), ['1', '2', '4', '5'], 'الإعلانات المنتهية ما تظهر');
  assert.deepEqual(f({ d: 'rent' }), ['3']);
  assert.deepEqual(f({ kinds: ['res_land'] }), ['5']);
  assert.deepEqual(f({ pmax: 150e6 }), ['1', '5']);
  assert.deepEqual(f({ feats: ['garden'] }), ['2']);
  assert.deepEqual(f({ amin: 500 }), ['5']);
  assert.deepEqual(sortListings(L.filter((l) => l.d === 'sale' && l.c === 'IQD'), 'cheap').map((l) => l.id).slice(0, 3), ['5', '1', '6']);
});

test('مقارنة بمعدل المنطقة', () => {
  const others = [1, 2, 3, 4].map((i) => base({ id: `o${i}`, p: 200e6 + i * 10e6, x: B[0] + i * 0.001 }));
  const cheap = base({ id: 'me', p: 160e6 });
  const cmp = areaComparison(cheap, others);
  assert.ok(cmp && cmp.diffPct < -20 && cmp.n === 4, JSON.stringify(cmp));
  assert.equal(areaComparison(cheap, others.slice(0, 2)), null, 'يحتاج 3 على الأقل');
});

test('العنوان التلقائي والحقول حسب النوع', () => {
  assert.equal(autoTitle(base({ ar: 'المنصور، بغداد' })), 'بيت 200 م² للبيع — المنصور');
  assert.ok(fieldsFor('farm', 'rent').has('cap') && fieldsFor('farm', 'rent').has('wk'));
  assert.ok(fieldsFor('house', 'sale').has('de') && fieldsFor('house', 'sale').has('fw'));
  assert.ok(!fieldsFor('apartment', 'rent').has('de'));
  const c = cleanListing({ ...base(), junk: 1, empty: '', nan: NaN, br: NaN });
  assert.ok(!('junk' in c) && !('br' in c));
});
