// اختبار شامل للعقارات داخل كروم: وضع محلي + Firebase (خادم وهمي بنفس واجهة REST)
// التشغيل: node tests/e2e-estate.mjs
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import { destination } from '../js/geo.js';

const require = createRequire(import.meta.url);
const { chromium } = require('/opt/npm-tools/node_modules/playwright');
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ML = fs.readFileSync(path.join(ROOT, 'tests/mock-maplibre.js'), 'utf8');
const B = [44.3661, 33.3152];
const DB = 'https://salka-test-default-rtdb.firebaseio.com';
const ENTRY = process.env.ENTRY || '';
const STYLE = { version: 8, sources: { o: { type: 'vector', url: 'x' } }, layers: [
  { id: 'background', type: 'background', paint: {} },
  { id: 'road_minor', type: 'line', source: 'o', 'source-layer': 'transportation', paint: {} },
  { id: 'label', type: 'symbol', source: 'o', 'source-layer': 'place', layout: { 'text-field': '{name}', 'text-font': ['Noto Sans Regular'] }, paint: {} },
  { id: 'label-b', type: 'symbol', source: 'o', 'source-layer': 'place', layout: { 'text-field': '{name}', 'text-font': ['Noto Sans Bold'] }, paint: {} },
] };

// ------------------------------------------------ Firebase وهمي
const fb = { l: {}, t: {}, p: {}, rp: {}, toks: {}, n: 0, writes: 0, denied: 0 };
function fbHandle(url, method, body) {
  const u = new URL(url);
  if (u.hostname === 'identitytoolkit.googleapis.com') {
    const i = ++fb.n; fb.toks[`tok${i}`] = `uid${i}`;
    return [200, { idToken: `tok${i}`, refreshToken: `rt${i}`, localId: `uid${i}`, expiresIn: '3600' }];
  }
  if (u.hostname === 'securetoken.googleapis.com') {
    const rt = new URLSearchParams(body).get('refresh_token'); const i = rt.slice(2);
    return [200, { id_token: `tok${i}`, refresh_token: rt, user_id: `uid${i}`, expires_in: '3600' }];
  }
  const p = u.pathname.replace(/\.json$/, '').split('/').filter(Boolean);
  const q = Object.fromEntries(u.searchParams);
  const uid = fb.toks[q.auth];
  const unq = (s) => (s ? JSON.parse(s) : s);
  if (method === 'GET') {
    if (p.join('/') === 're/l') {
      let entries = Object.entries(fb.l);
      if (q.orderBy) {
        const k = unq(q.orderBy);
        if (k !== 'g' && k !== 'u') return [400, { error: 'Index not defined' }];
        if (q.equalTo) entries = entries.filter(([, v]) => v[k] === unq(q.equalTo));
        if (q.startAt) entries = entries.filter(([, v]) => v[k] >= unq(q.startAt) && v[k] <= unq(q.endAt));
      }
      return [200, entries.length ? Object.fromEntries(entries) : null];
    }
    let node = { re: { l: fb.l, t: fb.t, p: fb.p, rp: fb.rp } };
    for (const s of p) node = node?.[s];
    return [200, node ?? null];
  }
  if (!uid) { fb.denied++; return [401, { error: 'Permission denied' }]; }
  if (method === 'PATCH' && p.join('/') === 're') {
    const upd = JSON.parse(body);
    for (const [k, v] of Object.entries(upd)) {
      const [col, id] = k.split('/');
      const owner = fb.l[id]?.u;
      if (col === 'l') {
        if (owner && owner !== uid) { fb.denied++; return [401, { error: 'Permission denied' }]; }
        if (v && v.u !== uid) { fb.denied++; return [401, { error: 'Permission denied' }]; }
      } else if ((owner && owner !== uid) || (!owner && upd[`l/${id}`]?.u !== uid)) { fb.denied++; return [401, { error: 'Permission denied' }]; }
    }
    for (const [k, v] of Object.entries(upd)) { const [col, id] = k.split('/'); if (v === null) delete fb[col][id]; else fb[col][id] = v; }
    fb.writes++;
    return [200, upd];
  }
  if (method === 'PATCH' && p[0] === 're' && p[1] === 'l') {
    const id = p[2];
    if (!fb.l[id] || fb.l[id].u !== uid) { fb.denied++; return [401, { error: 'Permission denied' }]; }
    fb.l[id] = { ...fb.l[id], ...JSON.parse(body) }; fb.writes++;
    return [200, JSON.parse(body)];
  }
  if (method === 'PUT' && p[1] === 'rp') { (fb.rp[p[2]] ||= {})[p[3]] = 1; return [200, 1]; }
  return [404, { error: 'not found' }];
}

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
const check = (name, ok, info = '') => { results.push({ name, ok }); console.log(`${ok ? '✅' : '❌'} ${name}${info ? ` — ${info}` : ''}`); };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function waitFor(fn, ms = 8000) { const t0 = Date.now(); while (Date.now() - t0 < ms) { try { if (await fn()) return true; } catch { /* retry */ } await sleep(100); } return false; }

async function newPage(browser, base, { firebase = false, suffix = '' } = {}) {
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, locale: 'ar-IQ', geolocation: { latitude: B[1], longitude: B[0], accuracy: 8 }, permissions: ['geolocation'], serviceWorkers: 'block' });
  await ctx.addInitScript(({ firebase, DB }) => {
    try { sessionStorage.setItem('salka:intro', '1'); } catch { /* ignore */ }
    if (firebase) localStorage.setItem('salka:estateCfg', JSON.stringify({ apiKey: 'test-key', databaseURL: DB }));
    window.speechSynthesis && Object.defineProperty(window, 'speechSynthesis', { value: { speak() {}, cancel() {}, getVoices() { return []; }, addEventListener() {} }, configurable: true });
  }, { firebase, DB });
  await ctx.route('**/*', async (route) => {
    const req = route.request();
    const u = new URL(req.url());
    const h = u.hostname;
    if (h === '127.0.0.1') return route.continue();
    if (u.pathname.endsWith('maplibre-gl.js')) return route.fulfill({ contentType: 'text/javascript', body: ML });
    if (u.pathname.endsWith('.css') || h === 'fonts.googleapis.com') return route.fulfill({ contentType: 'text/css', body: '' });
    if (u.pathname.includes('rtl-text')) return route.fulfill({ contentType: 'text/javascript', body: '' });
    if (h === 'tiles.openfreemap.org') return route.fulfill({ contentType: 'application/json', body: JSON.stringify(STYLE) });
    if (h === 'photon.komoot.io') return route.fulfill({ contentType: 'application/json', body: JSON.stringify({ features: [{ geometry: { coordinates: B }, properties: { name: 'حي الجامعة', city: 'بغداد' } }] }) });
    if (h === 'overpass-api.de') return route.fulfill({ contentType: 'application/json', body: JSON.stringify({ elements: [
      { type: 'node', id: 1, lat: B[1] + 0.002, lon: B[0], tags: { amenity: 'school' } },
      { type: 'node', id: 2, lat: B[1], lon: B[0] + 0.004, tags: { amenity: 'place_of_worship', religion: 'muslim' } },
      { type: 'way', id: 3, center: { lat: B[1] - 0.008, lon: B[0] }, tags: { amenity: 'hospital' } }] }) });
    if (h === 'server.arcgisonline.com') return route.fulfill({ status: 204, body: '' });
    if (h.endsWith('googleapis.com') || h.endsWith('firebaseio.com')) {
      if (req.method() === 'OPTIONS') return route.fulfill({ status: 204, headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': '*', 'Access-Control-Allow-Headers': '*' } });
      const [st, body] = fbHandle(req.url(), req.method(), req.postData());
      return route.fulfill({ status: st, contentType: 'application/json', headers: { 'Access-Control-Allow-Origin': '*' }, body: JSON.stringify(body) });
    }
    return route.abort();
  });
  const page = await ctx.newPage();
  page.errors = [];
  page.on('pageerror', (e) => page.errors.push(e.message));
  page.on('console', (m) => { if (m.type() === 'error' && !/net::|Failed to load resource/.test(m.text())) page.errors.push(m.text()); });
  await page.goto(base + ENTRY + suffix);
  await waitFor(() => page.evaluate(() => document.getElementById('splash').classList.contains('hidden') && !!window.__salka?.estate));
  return { ctx, page };
}

/** يكمل المعالج كامل من الواجهة */
async function publishViaWizard(page, { kind = 'house', deal = 'sale', rect = true, price = '185000000', photos = true } = {}) {
  await page.click('#reAdd');
  await waitFor(() => page.isVisible('.re-kind'));
  await page.click(`[data-deal="${deal}"]`);
  await page.click(`.re-kind[data-kind="${kind}"]`);
  await page.click('[data-a="next"]');
  await waitFor(() => page.isVisible('.re-draw-ui'));
  if (rect) {
    await page.click('.tool[data-t="rect"]');
    await waitFor(() => page.isVisible('[data-r="fw"]'));
    await page.fill('[data-r="fw"]', '12');
    await page.fill('[data-r="dp"]', '25');
    await page.click('[data-a="ok"]');
  }
  await page.click('#reDone');
  await waitFor(() => page.isVisible('[data-w="p"]'));
  await page.fill('[data-w="p"]', price);
  await page.click('[data-seg="de"][data-v="sarf"]', { timeout: 800 }).catch(() => {});
  await page.click('[data-feat="garden"]', { timeout: 800 }).catch(() => {});
  await page.fill('[data-w="br"]', '4', { timeout: 800 }).catch(() => {});
  await page.screenshot({ path: `/tmp/re-5-form-${kind}.png` });
  await page.click('[data-a="next"]');
  await waitFor(() => page.isVisible('[data-w="ph"]'));
  if (photos) {
    await page.setInputFiles('#rePhIn', ['/tmp/ph1.jpg', '/tmp/ph2.jpg']);
    await waitFor(() => page.evaluate(() => document.querySelectorAll('.re-ph img').length === 2), 15000);
  }
  await page.fill('[data-w="ph"]', '07701234567');
  await page.fill('[data-w="ds"]', 'بيت بناء حديث قريب من السوق');
  await page.click('[data-a="next"]');
  await waitFor(() => page.isVisible('[data-a="pub"]'));
  await page.click('[data-a="pub"]');
  return waitFor(() => page.evaluate(() => document.getElementById('sheet').dataset.name === 're-detail' && !document.getElementById('sheet').classList.contains('hidden')), 15000);
}

async function main() {
  const srv = await serve();
  const base = `http://127.0.0.1:${srv.address().port}/`;
  console.log('ENTRY:', ENTRY || 'index.html');
  const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] });

  // ============================================== 1) الوضع المحلي
  const { page } = await newPage(browser, base);
  await page.click('.chip[data-go="estate"]');
  check('الدخول لوضع العقارات', await waitFor(() => page.evaluate(() => document.body.classList.contains('estate') && !!document.getElementById('reBar'))));
  check('طبقات العقارات (حبوب الأسعار + التجمعات + الحدود)', await page.evaluate(() => ['re-pills', 're-clusters', 're-fill', 're-line'].every((id) => !!window.__map.getLayer(id)) && window.__map.hasImage('pill-sale')));
  check('خط عريض لحبوب الأسعار من الستايل', await page.evaluate(() => JSON.stringify(window.__map.getLayer('re-pills').layout['text-font']) === '["Noto Sans Bold"]'));
  check('رسالة لما ماكو عقارات', await page.evaluate(() => document.querySelector('.re-empty')?.textContent.includes('أول واحد')));
  check('وضع تجريبي محلي (بدون Firebase)', await page.evaluate(() => window.__salka.estate.mode === 'local'));
  await page.screenshot({ path: '/tmp/re-1-mode.png' });

  // المعالج: الرسم بالنقاط أولاً (نتأكد من الحساب) ثم إلغاء
  await page.click('#reAdd');
  await page.click('.re-kind[data-kind="res_land"]');
  await page.click('[data-a="next"]');
  check('شاشة الرسم + القمر الصناعي', await waitFor(() => page.isVisible('.re-draw-ui')) && await page.evaluate(() => !!window.__map.getLayer('re-sat')));
  const pts = [B, destination(B, 90, 20), destination(destination(B, 90, 20), 0, 30), destination(B, 0, 30)];
  for (const p of pts) await page.evaluate((ll) => window.__salka.estate.handleClick(ll, { x: 1, y: 1 }), p);
  const dt = await page.textContent('#reDT');
  check('الرسم بالنقاط: المساحة 600 م² تنحسب فوراً', dt.includes('600'), dt);
  await page.evaluate(() => { const e = window.__salka.estate; const p = e.draw.pts[1]; const q = window.__map.project(p); e.handleClick([p[0] + 1e-6, p[1]], q); });
  check('ضغطة على زاوية موجودة ما تضيف نقطة مكررة', await page.evaluate(() => window.__salka.estate.draw.pts.length === 4));
  check('أطوال الأضلاع على الخريطة', await page.evaluate(() => [...document.querySelectorAll('.re-len')].map((e) => e.textContent).join('|')) === '20.0 م|30.0 م|20.0 م|30.0 م');
  // سحب زاوية يحدّث المساحة
  await page.evaluate((ll) => { const m = window.__salka.estate.draw.markers[2]; m._drag(ll); }, destination(destination(B, 90, 20), 0, 40));
  check('سحب الزاوية يحدّث المساحة', (await page.textContent('#reDT')).match(/\d+/)[0] === '700', await page.textContent('#reDT'));
  await page.screenshot({ path: '/tmp/re-2-draw.png' });
  // شكل متقاطع يمنع "تم"
  await page.evaluate(() => { const e = window.__salka.estate; const p = e.draw.pts; e.draw.pts = [p[0], p[2], p[1], p[3]]; e._drawRefresh(); });
  check('الشكل المتقاطع ينكشف ويمنع الحفظ', await page.evaluate(() => document.getElementById('reDone').disabled && document.getElementById('reDT').textContent.includes('متقاطعة')));
  await page.click('[data-t="cancel"]');
  check('رجوع من الرسم للخطوة الأولى', await waitFor(() => page.isVisible('.re-kind')));
  await page.goBack();
  await sleep(300);

  // المعالج كامل مع الأبعاد والصور
  if (!(await page.evaluate(() => document.body.classList.contains('estate')))) await page.click('.chip[data-go="estate"]');
  const ok = await publishViaWizard(page);
  check('النشر الكامل (مستطيل بالأبعاد + صور + تفاصيل)', ok);
  const det = await page.textContent('#sheetBody');
  check('التفاصيل: السعر بالطريقة العراقية', det.includes('185 مليون دينار'));
  check('التفاصيل: المساحة 300 م² والواجهة × النزال', det.includes('300 م²') && det.includes('12 × 25'), det.slice(0, 200));
  check('التفاصيل: سعر المتر محسوب', det.includes('للمتر'));
  check('التفاصيل: السند والمميزات', det.includes('طابو صرف') && det.includes('حديقة'));
  check('التفاصيل: الخدمات القريبة تلقائياً', await waitFor(() => page.evaluate(() => /مدرسة.*م/.test(document.getElementById('reNear')?.textContent || ''))));
  check('التفاصيل: الصور انضغطت وانحفظت', await waitFor(() => page.evaluate(() => document.querySelectorAll('#reGal img').length === 2 && document.querySelector('#reGal img').src.length < 600000)));
  check('التفاصيل: زر واتساب برسالة جاهزة', await page.evaluate(() => /wa\.me\/9647701234567\?text=/.test(document.querySelector('.btn.wa')?.href || '')));
  check('التفاصيل: أزرار المالك (تعديل/تجديد/انباع)', await page.evaluate(() => !!document.querySelector('[data-a="sold"]') && !!document.querySelector('[data-a="edit"]')));
  await page.screenshot({ path: '/tmp/re-3-detail.png' });
  const pill = await page.evaluate(() => window.__map.getSource('re-pts').data.features[0]?.properties);
  check('حبة السعر على الخريطة', pill?.lb === '185 مليون' && pill?.sel === true, JSON.stringify(pill));
  check('حدود القطعة على الخريطة', await page.evaluate(() => window.__map.getSource('re-polys').data.features[0]?.geometry.coordinates[0].length === 5));
  // المفضلة
  await page.click('[data-a="fav"]');
  check('الحفظ بالمفضلة', await page.evaluate(() => JSON.parse(localStorage.getItem('salka:reFavs')).length === 1));
  await page.goBack(); await sleep(200);
  // الفلاتر
  check('البطاقات بالأسفل', await page.evaluate(() => document.querySelectorAll('#reCards .re-card').length === 1));
  await page.click('[data-deal="rent"]');
  check('فلتر الإيجار يخفي إعلان البيع', await waitFor(() => page.evaluate(() => document.querySelectorAll('#reCards .re-card').length === 0 && window.__map.getSource('re-pts').data.features.length === 0)));
  await page.click('[data-deal="sale"]');
  await page.click('[data-act="filters"]');
  await page.fill('[data-k="pmax"]', '100000000');
  await page.click('[data-act="apply"]');
  check('فلتر السعر الأعلى', await waitFor(() => page.evaluate(() => document.querySelectorAll('#reCards .re-card').length === 0)));
  await page.click('[data-act="filters"]');
  await page.click('[data-act="reset"]');
  check('تصفير الفلاتر', await waitFor(() => page.evaluate(() => document.querySelectorAll('#reCards .re-card').length === 1)));
  await page.screenshot({ path: '/tmp/re-4-cards.png' });
  // تعديل السعر
  await page.click('#reCards .re-card');
  await waitFor(() => page.isVisible('[data-a="edit"]'));
  await page.click('[data-a="edit"]');
  await waitFor(() => page.isVisible('[data-w="p"]'));
  await page.fill('[data-w="p"]', '170000000');
  await page.click('[data-a="next"]'); await page.click('[data-a="next"]');
  await page.click('[data-a="pub"]');
  check('تعديل السعر', await waitFor(() => page.evaluate(() => document.getElementById('sheetBody').textContent.includes('170 مليون'))));
  // إعلاناتي
  await page.goBack(); await sleep(200);
  await page.evaluate(() => window.__salka.estate.openMine());
  check('إعلاناتي', await waitFor(() => page.evaluate(() => document.getElementById('sheetBody').textContent.includes('إعلاناتي (1)'))));
  await page.click('#sheetBody .re-card');
  await waitFor(() => page.isVisible('[data-a="sold"]'));
  await page.click('[data-a="sold"]');
  await page.click('[data-a="sold"]');
  check('انباع: الإعلان ينشال من الخريطة', await waitFor(() => page.evaluate(() => window.__map.getSource('re-pts').data.features.length === 0)));
  // المسودة
  await page.click('#reAdd');
  await page.click('.re-kind[data-kind="farm"]');
  await page.goBack(); await sleep(200);
  await page.click('#reAdd');
  check('المسودة ترجع لو سديت بالغلط', await waitFor(() => page.evaluate(() => document.querySelector('.re-kind.on')?.dataset.kind === 'farm')));
  await page.goBack(); await sleep(200);
  // زر الرجوع يطلع من العقارات
  await page.goBack(); await sleep(300);
  check('زر الرجوع يطلع من العقارات', await page.evaluate(() => !document.body.classList.contains('estate') && !window.__map.getLayer('re-pills').layout?.visibility?.includes('visible')));
  check('لا أخطاء (محلي)', page.errors.length === 0, page.errors.slice(0, 3).join(' | '));

  // ============================================== 2) Firebase مشترك
  const A = await newPage(browser, base, { firebase: true });
  check('Firebase: الوضع المشترك', await A.page.evaluate(() => window.__salka.estate.mode === 'firebase'));
  await A.page.click('.chip[data-go="estate"]');
  await sleep(500);
  const okA = await publishViaWizard(A.page, { kind: 'farm', deal: 'rent', rect: true, price: '250000' });
  check('Firebase: نشر مزرعة للإيجار مع الصور', okA && Object.keys(fb.l).length === 1 && Object.keys(fb.p).length === 1, `writes=${fb.writes}`);
  const saved = Object.values(fb.l)[0];
  check('Firebase: البيانات المحفوظة نظيفة', saved && saved.u === 'uid1' && saved.g?.length === 7 && saved.ph === '+9647701234567' && !('id' in saved) && Array.isArray(saved.poly), JSON.stringify(saved).slice(0, 160));
  // مستخدم ثاني
  const Bp = await newPage(browser, base, { firebase: true });
  await Bp.page.click('.chip[data-go="estate"]');
  await Bp.page.click('[data-deal="rent"]');
  check('Firebase: المستخدم الثاني يشوف الإعلان', await waitFor(() => Bp.page.evaluate(() => window.__map.getSource('re-pts').data.features.length === 1), 6000));
  const id = Object.keys(fb.l)[0];
  await Bp.page.evaluate((i) => window.__salka.estate.open(i), id);
  check('Firebase: الثاني ما عنده أزرار المالك', await waitFor(() => Bp.page.isVisible('[data-a="report"]')) && !(await Bp.page.$('[data-a="sold"]')));
  const denied = await Bp.page.evaluate((i) => window.__salka.estate.backend.remove(i).then(() => 'removed', (e) => e.code), id);
  check('Firebase: الحماية — ما يكدر يحذف إعلان غيره', denied === 'denied' && !!fb.l[id], denied);
  await Bp.page.click('[data-a="report"]');
  check('Firebase: الإبلاغ عن إعلان', await waitFor(() => !!fb.rp[id]));
  // تعديل كامل: نقل الموقع + حذف حقل → الفهرس يتحدث والحقل ينحذف
  const moved = destination(B, 45, 3000);
  const upd = await A.page.evaluate(async ({ i, mv }) => {
    const e = window.__salka.estate; const cur = await e.backend.get(i);
    const { ds, poly, ...rest } = cur;
    return e.backend.update(i, { ...rest, x: mv[0], y: mv[1], p: 300000 }, { replace: true });
  }, { i: id, mv: moved });
  check('Firebase: التعديل الكامل يحدّث الفهرس ويحذف الحقول المشالة', fb.l[id].g !== saved.g && fb.l[id].p === 300000 && !('ds' in fb.l[id]) && !('poly' in fb.l[id]) && fb.l[id].u === 'uid1' && fb.l[id].nph === 2 && upd.id === id, JSON.stringify(fb.l[id]).slice(0, 120));
  await A.page.evaluate(async ({ i, s }) => { const e = window.__salka.estate; const cur = await e.backend.get(i); return e.backend.update(i, { ...cur, x: s.x, y: s.y, poly: s.poly, ds: s.ds, p: 250000 }, { replace: true }); }, { i: id, s: saved });
  // رابط مشاركة
  const C = await newPage(browser, base, { firebase: true, suffix: `#l-${id}` });
  check('رابط المشاركة يفتح الإعلان مباشرة', await waitFor(() => C.page.evaluate(() => document.getElementById('sheet').dataset.name === 're-detail' && /250 ألف.*(يوم|ليلة)/.test(document.getElementById('sheetBody').textContent))));
  // المالك يحذف
  await A.page.evaluate((i) => window.__salka.estate.open(i), id);
  await waitFor(() => A.page.isVisible('[data-a="sold"]'));
  await A.page.click('[data-a="sold"]'); await A.page.click('[data-a="sold"]');
  check('Firebase: المالك يشيل إعلانه (مع الصور)', await waitFor(() => !fb.l[id] && !fb.p[id] && !fb.t[id]));
  await Bp.page.evaluate(() => window.__salka.estate.load(true));
  check('Firebase: يختفي عند الكل', await waitFor(() => Bp.page.evaluate(() => window.__map.getSource('re-pts').data.features.length === 0)));
  // اختصارات أيقونة الأندرويد
  const D = await newPage(browser, base, { suffix: '?go=estate&source=twa' });
  check('اختصار الأندرويد: ?go=estate يفتح العقارات وينظف الرابط', await waitFor(() => D.page.evaluate(() => document.body.classList.contains('estate') && !location.search && localStorage.getItem('salka:twa') === '1')));
  const E = await newPage(browser, base, { suffix: '?go=estate-add' });
  check('اختصار الأندرويد: ?go=estate-add يفتح معالج النشر', await waitFor(() => E.page.isVisible('.re-kind')));
  const errs = [...A.page.errors, ...Bp.page.errors, ...C.page.errors, ...D.page.errors, ...E.page.errors];
  check('لا أخطاء (Firebase)', errs.length === 0, errs.slice(0, 3).join(' | '));

  await browser.close();
  srv.close();
  const failed = results.filter((r) => !r.ok);
  console.log(`\n${results.length - failed.length}/${results.length} نجحت`);
  process.exit(failed.length ? 1 : 0);
}

main().catch((e) => { console.error(e); process.exit(2); });
