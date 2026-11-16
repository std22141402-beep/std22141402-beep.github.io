// اختبار شامل للتطبيق داخل متصفح حقيقي (كروم) مع خوادم وهمية
// التشغيل: node tests/e2e.mjs
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import { mockOsrmResponse } from './mock-osrm.js';
import { destination } from '../js/geo.js';

const require = createRequire(import.meta.url);
const { chromium } = require('/opt/npm-tools/node_modules/playwright');
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const MOCK_ML = fs.readFileSync(path.join(ROOT, 'tests/mock-maplibre.js'), 'utf8');
const BAGHDAD = [44.3661, 33.3152];

// ستايل يشبه OpenFreeMap liberty
const STYLE = {
  version: 8,
  sources: { openmaptiles: { type: 'vector', url: 'https://tiles.openfreemap.org/planet' }, ne2: { type: 'raster', tiles: ['x'] } },
  glyphs: 'https://tiles.openfreemap.org/fonts/{fontstack}/{range}.pbf',
  layers: [
    { id: 'background', type: 'background', paint: { 'background-color': '#f8f4f0' } },
    { id: 'natural_earth', type: 'raster', source: 'ne2', paint: { 'raster-opacity': 0.4 } },
    { id: 'park', type: 'fill', source: 'openmaptiles', 'source-layer': 'park', paint: { 'fill-color': '#d8e8c8' } },
    { id: 'landuse_residential', type: 'fill', source: 'openmaptiles', 'source-layer': 'landuse', paint: { 'fill-color': 'x' } },
    { id: 'landcover_sand', type: 'fill', source: 'openmaptiles', 'source-layer': 'landcover', paint: { 'fill-color': 'x' } },
    { id: 'water', type: 'fill', source: 'openmaptiles', 'source-layer': 'water', paint: { 'fill-color': 'x' } },
    { id: 'waterway_river', type: 'line', source: 'openmaptiles', 'source-layer': 'waterway', paint: { 'line-color': 'x' } },
    { id: 'road_motorway_casing', type: 'line', source: 'openmaptiles', 'source-layer': 'transportation', paint: { 'line-color': 'x' } },
    { id: 'road_motorway', type: 'line', source: 'openmaptiles', 'source-layer': 'transportation', paint: { 'line-color': 'x' } },
    { id: 'road_trunk_primary', type: 'line', source: 'openmaptiles', 'source-layer': 'transportation', paint: { 'line-color': 'x' } },
    { id: 'road_minor', type: 'line', source: 'openmaptiles', 'source-layer': 'transportation', paint: { 'line-color': 'x' } },
    { id: 'road_path_pedestrian', type: 'line', source: 'openmaptiles', 'source-layer': 'transportation', paint: { 'line-color': 'x' } },
    { id: 'building', type: 'fill', source: 'openmaptiles', 'source-layer': 'building', paint: { 'fill-color': 'x' } },
    { id: 'building-3d', type: 'fill-extrusion', source: 'openmaptiles', 'source-layer': 'building', paint: { 'fill-extrusion-color': 'x' } },
    { id: 'boundary_2', type: 'line', source: 'openmaptiles', 'source-layer': 'boundary', paint: { 'line-color': 'x' } },
    { id: 'water_name', type: 'symbol', source: 'openmaptiles', 'source-layer': 'water_name', layout: { 'text-field': '{name:latin}' }, paint: {} },
    { id: 'highway-name-major', type: 'symbol', source: 'openmaptiles', 'source-layer': 'transportation_name', layout: { 'text-field': ['coalesce', ['get', 'name_en'], ['get', 'name']] }, paint: {} },
    { id: 'highway-shield', type: 'symbol', source: 'openmaptiles', 'source-layer': 'transportation_name', layout: { 'text-field': '{ref}' }, paint: {} },
    { id: 'housenumber', type: 'symbol', source: 'openmaptiles', 'source-layer': 'housenumber', layout: { 'text-field': '{housenumber}' }, paint: {} },
    { id: 'label_city', type: 'symbol', source: 'openmaptiles', 'source-layer': 'place', layout: { 'text-field': '{name:latin}\n{name:nonlatin}' }, paint: {} },
  ],
};

const PHOTON = {
  features: [
    { geometry: { type: 'Point', coordinates: [44.3402, 33.3075] }, properties: { name: 'المنصور مول', osm_key: 'shop', osm_value: 'mall', city: 'بغداد', district: 'المنصور', osm_id: 1, osm_type: 'W' } },
    { geometry: { type: 'Point', coordinates: [44.3505, 33.3221] }, properties: { name: 'شارع 14 رمضان', osm_key: 'highway', osm_value: 'primary', city: 'بغداد', osm_id: 2, osm_type: 'W' } },
  ],
};

function serve() {
  const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.webmanifest': 'application/manifest+json', '.png': 'image/png', '.svg': 'image/svg+xml' };
  const srv = http.createServer((req, res) => {
    let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
    if (p === '/') p = '/index.html';
    const f = path.join(ROOT, p);
    if (!f.startsWith(ROOT) || !fs.existsSync(f)) { res.writeHead(404); res.end(); return; }
    res.writeHead(200, { 'Content-Type': types[path.extname(f)] || 'application/octet-stream' });
    fs.createReadStream(f).pipe(res);
  });
  return new Promise((r) => srv.listen(0, '127.0.0.1', () => r(srv)));
}

const results = [];
function check(name, ok, info = '') {
  results.push({ name, ok, info });
  console.log(`${ok ? '✅' : '❌'} ${name}${info ? ` — ${info}` : ''}`);
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function waitFor(fn, ms = 8000, step = 100) {
  const t0 = Date.now();
  while (Date.now() - t0 < ms) { try { if (await fn()) return true; } catch { /* retry */ } await sleep(step); }
  return false;
}

async function main() {
  const srv = await serve();
  const base = `http://127.0.0.1:${srv.address().port}/`;
  const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] });
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true,
    locale: 'ar-IQ', geolocation: { latitude: BAGHDAD[1], longitude: BAGHDAD[0], accuracy: 8 }, permissions: ['geolocation'],
    serviceWorkers: 'block',
  });
  const errors = [];
  const osrmCalls = [];
  // خادم بلاغات وهمي (نفس واجهة ntfy.sh)
  const ntfyMsgs = [];
  const ntfyPosts = [];
  let ntfySeq = 0;
  const ntfyAdd = (obj) => ntfyMsgs.push({ id: `m${++ntfySeq}`, time: Math.floor(Date.now() / 1000), event: 'message', topic: 'salka_iq_road_reports_v1', message: JSON.stringify(obj) });
  // بلاغ من مستخدم ثاني موجود قبل ما نفتح التطبيق + تصويت عليه
  ntfyAdd({ k: 'police', x: 44.3702, y: 33.3181, d: 'otheruser1', c: 'otheruser1-abc' });
  ntfyAdd({ vote: 'otheruser1-abc', v: 1, d: 'otheruser2' });
  ntfyMsgs.push({ id: 'junk1', time: 1, event: 'message', topic: 't', message: 'not json {' });
  let failFirstRouter = true;

  await context.addInitScript(() => {
    window.__spoken = [];
    const synth = {
      speaking: false, pending: false,
      speak(u) { window.__spoken.push(u.text); this.speaking = true; setTimeout(() => { this.speaking = false; u.onend && u.onend(); }, 20); },
      cancel() { this.speaking = false; }, getVoices() { return [{ lang: 'ar-SA', name: 'Test Arabic', localService: true }]; },
      addEventListener() {}, removeEventListener() {},
    };
    Object.defineProperty(window, 'speechSynthesis', { value: synth, configurable: true });
    window.SpeechSynthesisUtterance = class { constructor(t) { this.text = t; } };
  });

  await context.route('**/*', async (route) => {
    const url = new URL(route.request().url());
    const h = url.hostname;
    if (h === '127.0.0.1') return route.continue();
    if (url.pathname.endsWith('maplibre-gl.js')) return route.fulfill({ contentType: 'text/javascript', body: MOCK_ML });
    if (url.pathname.endsWith('maplibre-gl.css')) return route.fulfill({ contentType: 'text/css', body: '/* mock */' });
    if (url.pathname.includes('rtl-text')) return route.fulfill({ contentType: 'text/javascript', body: '' });
    if (h === 'fonts.googleapis.com') return route.fulfill({ contentType: 'text/css', body: '' });
    if (h === 'tiles.openfreemap.org') return route.fulfill({ contentType: 'application/json', body: JSON.stringify(STYLE) });
    if (h === 'photon.komoot.io') {
      if (url.pathname.startsWith('/reverse')) return route.fulfill({ contentType: 'application/json', body: JSON.stringify({ features: [{ geometry: { coordinates: [44.39, 33.33] }, properties: { name: 'ساحة الأندلس', city: 'بغداد', osm_value: 'square' } }] }) });
      return route.fulfill({ contentType: 'application/json', body: JSON.stringify(PHOTON) });
    }
    if (h === 'ntfy.sh') {
      const req = route.request();
      if (req.method() === 'POST') {
        const body = req.postData();
        ntfyPosts.push(JSON.parse(body));
        ntfyAdd(JSON.parse(body));
        return route.fulfill({ contentType: 'application/json', headers: { 'Access-Control-Allow-Origin': '*' }, body: '{"id":"x"}' });
      }
      if (url.pathname.endsWith('/sse')) {
        const since = url.searchParams.get('since');
        let list = ntfyMsgs;
        const i = ntfyMsgs.findIndex((m) => m.id === since);
        if (i >= 0) list = ntfyMsgs.slice(i + 1);
        const open = { id: 'open', time: Math.floor(Date.now() / 1000), event: 'open', topic: 't' };
        const body = [open, ...list].map((m) => `data: ${JSON.stringify(m)}\n\n`).join('');
        return route.fulfill({ status: 200, headers: { 'Content-Type': 'text/event-stream', 'Access-Control-Allow-Origin': '*' }, body });
      }
    }
    if (h === 'overpass-api.de') return route.fulfill({ contentType: 'application/json', body: JSON.stringify({ elements: [{ type: 'node', id: 9, lat: 33.318, lon: 44.37, tags: { amenity: 'fuel', name: 'محطة الكرادة' } }] }) });
    if (h === 'routing.openstreetmap.de' || h === 'router.project-osrm.org') {
      osrmCalls.push(url.href);
      if (h === 'routing.openstreetmap.de' && failFirstRouter) { failFirstRouter = false; return route.fulfill({ status: 503, body: 'down' }); }
      const m = url.pathname.match(/driving\/([\d.\-]+),([\d.\-]+);([\d.\-]+),([\d.\-]+)/);
      const from = [+m[1], +m[2]], to = [+m[3], +m[4]];
      const alt = url.searchParams.get('alternatives') === 'true';
      await sleep(120);
      return route.fulfill({ contentType: 'application/json', body: JSON.stringify(mockOsrmResponse(from, to, alt)) });
    }
    return route.abort();
  });

  const page = await context.newPage();
  page.on('pageerror', (e) => errors.push(`pageerror: ${e.message}`));
  page.on('console', (m) => { if (m.type() === 'error') errors.push(`console: ${m.text()}`); });

  // ---------------------------------------------------------------- 1) الإقلاع
  const ENTRY = process.env.ENTRY || '';
  console.log('ENTRY:', ENTRY || 'index.html');
  await page.goto(base + ENTRY);
  check('الإقلاع: الشاشة الافتتاحية تختفي', await waitFor(() => page.evaluate(() => document.getElementById('splash').classList.contains('hidden'))));
  const style = await page.evaluate(() => window.__map.getStyle().layers.map((l) => ({ id: l.id, type: l.type, tf: l.layout?.['text-field'], paint: l.paint })));
  const city = style.find((l) => l.id === 'label_city');
  check('الخريطة: الأسماء بالعربي', JSON.stringify(city.tf).includes('name:ar'));
  check('الخريطة: أرقام البيوت والشواخص ما تتغير', style.find((l) => l.id === 'housenumber').tf === '{housenumber}' && style.find((l) => l.id === 'highway-shield').tf === '{ref}');
  check('الخريطة: طبقات المسار انضافت', ['salka-route-line', 'salka-route-casing', 'salka-alts-line', 'salka-acc'].every((id) => style.some((l) => l.id === id)));
  check('الخريطة: المسار تحت أسماء الشوارع', style.findIndex((l) => l.id === 'salka-route-line') < style.findIndex((l) => l.type === 'symbol'));
  check('GPS: وصل الموقع', await waitFor(() => page.evaluate(() => !!window.__salka.S.me)));
  check('البلاغات المشتركة: متصل بالخادم', await waitFor(() => page.evaluate(() => window.__salka.reports.status === 'live' && window.__salka.reports.mode === 'ntfy')));
  check('البلاغات المشتركة: بلاغ مستخدم ثاني يظهر', await waitFor(() => page.evaluate(() => document.querySelectorAll('.rep-marker').length === 1)));
  check('البلاغات المشتركة: تصويت الآخرين وصل', await page.evaluate(() => { const r = window.__salka.reports.list().find((x) => x.c === 'otheruser1-abc'); return r && r.v.otheruser2 === 1 && !r.mine; }));
  await page.screenshot({ path: '/tmp/shot-1-home.png' });

  // ---------------------------------------------------------------- 2) البحث
  await page.click('#searchInput');
  check('البحث: اللوحة تنفتح', await page.isVisible('#searchPanel'));
  await page.fill('#searchInput', 'المنصور');
  check('البحث: تظهر النتائج', await waitFor(() => page.evaluate(() => document.querySelectorAll('#searchResults .item').length === 2)));
  const firstName = await page.textContent('#searchResults .item .item-name');
  check('البحث: الاسم العربي صحيح', firstName.includes('المنصور مول'), firstName);
  await page.screenshot({ path: '/tmp/shot-2-search.png' });
  await page.click('#searchResults .item');

  // ---------------------------------------------------------------- 3) معاينة الطرق
  check('المعاينة: تظهر خيارات الطرق', await waitFor(() => page.evaluate(() => document.querySelectorAll('.route-opt').length === 2)));
  check('الخادم الاحتياطي: لما الأول عطلان يشتغل الثاني', osrmCalls.some((u) => u.includes('router.project-osrm.org')), `${osrmCalls.length} calls`);
  await page.screenshot({ path: '/tmp/shot-3-preview.png' });
  await page.click('.route-opt[data-r="1"]');
  check('المعاينة: اختيار طريق بديل', await page.evaluate(() => window.__salka.S.routeIdx === 1));
  await page.click('.route-opt[data-r="0"]');
  // حفظ المكان فوق المعاينة ثم الرجوع
  await page.click('[data-a="save"]');
  check('اللوحات: الحفظ ينفتح فوق المعاينة', await waitFor(() => page.evaluate(() => document.getElementById('sheet').dataset.name === 'save')));
  await page.click('[data-k="fav"]');
  check('اللوحات: بعد الحفظ نرجع للمعاينة', await waitFor(() => page.evaluate(() => document.getElementById('sheet').dataset.name === 'preview' && document.querySelectorAll('.route-opt').length === 2)));

  // ---------------------------------------------------------------- 4) تجربة القيادة
  await page.click('[data-a="sim"]');
  check('الملاحة: الواجهة تظهر', await waitFor(() => page.isVisible('#navTop')));
  await page.evaluate(() => { const s = window.__salka.sim; s.stop(); s.tickMs = 200; s.timeScale = 5; s.start(70); });
  check('الملاحة: البانر فيه مسافة', await waitFor(() => page.evaluate(() => /\d/.test(document.getElementById('mDist').textContent))));
  check('الملاحة: وقت الوصول ظاهر', await waitFor(() => page.evaluate(() => /\d/.test(document.getElementById('etaTime').textContent))));
  check('الصوت: تعليمة الانطلاق انقالت', await waitFor(() => page.evaluate(() => window.__spoken.some((t) => t.includes('اطلع باتجاه') || t.includes('انطلق')))));
  await sleep(1500);
  const jumps = await page.evaluate(() => window.__mapCalls.jumpTo);
  check('الحركة السلسة: الكاميرا تتحدث كل فريم', jumps > 40, `${jumps} frames`);
  await page.screenshot({ path: '/tmp/shot-4-nav.png' });

  // انحراف → إعادة حساب
  const before = osrmCalls.length;
  const routeIdBefore = await page.evaluate(() => window.__salka.nav.route.id);
  await page.evaluate(() => window.__salka.sim.deviate());
  check('إعادة الحساب: تطلب طريق جديد بعد الانحراف', await waitFor(() => osrmCalls.length > before, 8000), `${osrmCalls.length - before} new calls`);
  check('إعادة الحساب: الطريق تبدّل', await waitFor(() => page.evaluate((id) => window.__salka.nav && window.__salka.nav.route.id !== id, routeIdBefore), 6000));
  const rerouteUrl = osrmCalls[osrmCalls.length - 1];
  check('إعادة الحساب: ترسل اتجاه السيارة (bearings)', rerouteUrl.includes('bearings='), rerouteUrl.split('?')[1]);
  check('الصوت: أعلن الخروج عن المسار', await waitFor(() => page.evaluate(() => window.__spoken.some((t) => t.includes('طريق جديد') || t.includes('طلعت')))));
  await page.screenshot({ path: '/tmp/shot-5-reroute.png' });

  // بلاغ أثناء الملاحة
  await page.click('#btnReport');
  check('البلاغ: حالة الخادم ظاهرة', await page.evaluate(() => document.getElementById('sheetBody').textContent.includes('متصل')));
  await page.click('[data-t="accident"]');
  check('البلاغ: انضاف أثناء الملاحة', await waitFor(() => page.evaluate(() => document.querySelectorAll('.rep-marker').length === 2)));
  check('البلاغ: انرسل للخادم المشترك', await waitFor(() => ntfyPosts.some((p) => p.k === 'accident' && typeof p.x === 'number' && p.c && p.d)), JSON.stringify(ntfyPosts[0] || {}));
  check('البلاغ: الواجهة رجعت للخريطة', await page.evaluate(() => document.getElementById('sheet').classList.contains('hidden')));

  // قائمة الملاحة
  await page.click('#btnNavMenu');
  check('قائمة الملاحة تنفتح', await waitFor(() => page.isVisible('[data-a="overview"]')));
  await page.click('[data-a="simplus"]');
  check('قائمة الملاحة: زيادة سرعة المحاكاة', await page.evaluate(() => window.__salka.S.simSpeed === 70));
  await page.click('[data-a="overview"]');
  check('عرض الطريق كامل + زر المتابعة', await waitFor(() => page.isVisible('#btnRecenter')));
  await page.click('#btnRecenter');

  // الوصول
  await page.evaluate(() => { const s = window.__salka.sim; s.setSpeed(160); });
  check('الوصول: تظهر شاشة الوصول', await waitFor(() => page.evaluate(() => document.getElementById('sheet').dataset.name === 'arrived' && !document.getElementById('sheet').classList.contains('hidden')), 90000, 250));
  check('الصوت: أعلن الوصول', await waitFor(() => page.evaluate(() => window.__spoken.some((t) => t.includes('وصلت')))));
  const said = await page.evaluate(() => window.__spoken);
  check('الصوت: انقالت تعليمات انعطاف', said.some((t) => t.includes('لِف') || t.includes('انعطف')), said.slice(0, 6).join(' | '));
  await page.screenshot({ path: '/tmp/shot-6-arrived.png' });
  await page.click('[data-a="done"]');
  check('إنهاء: رجعنا لوضع التصفح', await waitFor(() => page.evaluate(() => !window.__salka.nav && !document.body.classList.contains('navigating') && !document.getElementById('topbar').classList.contains('hidden'))));

  // بعد إعادة الاتصال، بلاغي يرجع من الخادم بس ما يتكرر
  await sleep(4500);
  check('البلاغات المشتركة: بلاغي ما يتكرر بعد ما يرجع من الخادم', await page.evaluate(() => document.querySelectorAll('.rep-marker').length === 2 && window.__salka.reports.remote.size === 2));

  // ---------------------------------------------------------------- 5) ملاحة GPS حقيقية
  const dest = destination(destination(BAGHDAD, 90, 900), 0, 700);
  await page.evaluate((d) => window.__salka.previewRoutes({ name: 'اختبار GPS', sub: '', pos: d }), dest);
  await waitFor(() => page.evaluate(() => document.querySelectorAll('.route-opt').length >= 1));
  await page.click('[data-a="go"]');
  check('GPS: بدأت الملاحة الحقيقية', await waitFor(() => page.evaluate(() => window.__salka.nav && !window.__salka.nav.sim)));
  const coords = await page.evaluate(() => window.__salka.nav.route.coords);
  // نمشي على الطريق بالـGPS الوهمي
  for (let i = 0; i < 30; i += 3) {
    const c = coords[Math.min(i, coords.length - 1)];
    await context.setGeolocation({ latitude: c[1], longitude: c[0], accuracy: 6 });
    await sleep(250);
  }
  check('GPS: التقدم على الطريق', await page.evaluate(() => window.__salka.nav.state.along > 50), String(await page.evaluate(() => Math.round(window.__salka.nav.state.along))));
  const n1 = osrmCalls.length;
  // انحراف 150م يمين الطريق
  const c0 = coords[30];
  for (let k = 1; k <= 6; k++) {
    const p = destination(c0, 180, 40 * k);
    await context.setGeolocation({ latitude: p[1], longitude: p[0], accuracy: 6 });
    await sleep(600);
  }
  check('GPS: إعادة الحساب بعد الانحراف الحقيقي', await waitFor(() => osrmCalls.length > n1, 6000));
  await page.click('#btnEndNav');
  await page.click('[data-a="end"]');
  check('GPS: الإيقاف اليدوي', await waitFor(() => page.evaluate(() => !window.__salka.nav)));

  // ---------------------------------------------------------------- 6) الضغطة المطولة والرجوع
  await page.evaluate(() => window.__salka.mapView.h.onLongPress([44.39, 33.33]));
  check('الضغط المطول: يظهر الدبوس', await waitFor(() => page.evaluate(() => document.getElementById('sheet').dataset.name === 'pin')));
  check('الضغط المطول: اسم المكان من الخادم', await waitFor(() => page.evaluate(() => document.getElementById('sheetBody').textContent.includes('ساحة الأندلس'))));
  await page.goBack();
  check('زر الرجوع يسد اللوحة', await waitFor(() => page.evaluate(() => document.getElementById('sheet').classList.contains('hidden'))));

  // ---------------------------------------------------------------- 7) قريب مني
  await page.click('.chip[data-cat="fuel"]');
  check('قريب مني: محطات الوقود', await waitFor(() => page.evaluate(() => document.getElementById('searchResults').textContent.includes('محطة الكرادة'))));
  await page.goBack();
  check('زر الرجوع يسد البحث', await waitFor(() => page.evaluate(() => document.getElementById('searchPanel').classList.contains('hidden'))));

  // ---------------------------------------------------------------- 8) الإعدادات
  await page.click('#btnMenu');
  await page.click('[data-a="settings"]');
  check('الإعدادات تنفتح', await waitFor(() => page.isVisible('[data-theme="palm"]')));
  await page.click('[data-theme="palm"]');
  check('الثيم: اللون تغيّر', await page.evaluate(() => getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() === '#0E9F6E'));
  await page.click('[data-seg="mode"][data-v="night"]');
  check('الوضع الليلي: الواجهة', await page.evaluate(() => document.body.classList.contains('night')));
  check('الوضع الليلي: الخريطة', await page.evaluate(() => window.__map.getLayer('background').paint['background-color'] === '#171E2B'));
  await page.click('[data-seg="dialect"][data-v="msa"]');
  await page.click('[data-seg="carIcon"][data-v="car"]');
  await page.click('[data-a="testvoice"]');
  check('الإعدادات: تجربة الصوت بالفصحى', await waitFor(() => page.evaluate(() => window.__spoken.some((t) => t.includes('انعطف يميناً')))));
  await page.screenshot({ path: '/tmp/shot-7-settings.png' });
  const saved = await page.evaluate(() => JSON.parse(localStorage.getItem('salka:settings')));
  check('الإعدادات تنحفظ', saved.theme === 'palm' && saved.mode === 'night' && saved.dialect === 'msa' && saved.carIcon === 'car');
  await page.click('[data-a="close"]');

  // ---------------------------------------------------------------- 9) إعادة التحميل
  await page.reload();
  check('بعد إعادة التحميل: الإعدادات باقية', await waitFor(() => page.evaluate(() => document.body.classList.contains('night') && window.__salka.S.settings.theme === 'palm')));
  check('بعد إعادة التحميل: البلاغات باقية', await waitFor(() => page.evaluate(() => document.querySelectorAll('.rep-marker').length >= 1)));
  await page.screenshot({ path: '/tmp/shot-8-night.png' });

  // حذف بلاغي يوصل للكل
  const mine = await page.evaluate(() => window.__salka.reports.list().find((r) => r.mine));
  await page.evaluate((c) => { const m = [...document.querySelectorAll('.rep-marker')].find((e) => e._rep && e._rep.c === c); m.click(); }, mine.c);
  await page.click('[data-a="del"]');
  check('حذف البلاغ: ينرسل للخادم', await waitFor(() => ntfyPosts.some((p) => p.del === mine.c)));
  check('حذف البلاغ: يختفي من الخريطة', await waitFor(() => page.evaluate(() => document.querySelectorAll('.rep-marker').length === 1)));

  // ---------------------------------------------------------------- النتيجة
  const mapErr = await page.evaluate(() => window.__mapCalls.errors);
  check('لا أخطاء باستدعاءات الخريطة', mapErr.length === 0, mapErr.slice(0, 5).join(' | '));
  // 503 متوقع: الخادم الأول معطّل عمداً لاختبار الخادم الاحتياطي
  const realErrors = errors.filter((e) => !e.includes('ERR_FAILED') && !e.includes('net::') && !e.includes('status of 503'));
  check('لا أخطاء JavaScript', realErrors.length === 0, realErrors.slice(0, 5).join(' | '));

  await browser.close();
  srv.close();
  const failed = results.filter((r) => !r.ok);
  console.log(`\n${results.length - failed.length}/${results.length} نجحت`);
  process.exit(failed.length ? 1 : 0);
}

main().catch((e) => { console.error(e); process.exit(2); });
