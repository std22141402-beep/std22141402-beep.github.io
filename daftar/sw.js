/* =====================================================================
   دفتر — Service Worker
   - يخلي التطبيق يفتح بدون انترنت.
   - الصفحة (index.html) تنجلب من الموقع أول شي كل مرة يتوفر نت، فأي تعديل
     ترفعه على GitHub يوصل للتطبيق تلقائياً. ما تحتاج تغيّر أي رقم هنا.
   ===================================================================== */
const V = 'daftar-v1';            // ملفات التطبيق
const LIBS = 'daftar-libs-v1';    // الخطوط ومكتبة قارئ الكاميرا
const SHELL = ['./', './index.html', './manifest.webmanifest', './icon.svg', './icon-192.png',
  './icon-512.png', './icon-maskable-512.png', './apple-touch-icon.png', './favicon-32.png'];
const OPTIONAL = ['https://cdn.jsdelivr.net/npm/@zxing/library@0.21.3/umd/index.min.js'];

const scope = () => self.registration.scope;
const shellUrl = () => new URL('./index.html', scope()).href;

self.addEventListener('install', (e) => {
  e.waitUntil((async () => {
    const c = await caches.open(V);
    await c.addAll(SHELL.map((u) => new Request(u, { cache: 'reload' }))).catch(() => {});
    const l = await caches.open(LIBS);
    await Promise.all(OPTIONAL.map((u) => l.match(u).then((hit) => hit || fetch(u).then((r) => r.ok && l.put(u, r))).catch(() => {})));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    const keep = [V, LIBS];
    const keys = await caches.keys();
    await Promise.all(keys.filter((k) => k.startsWith('daftar-') && !keep.includes(k)).map((k) => caches.delete(k)));
    await self.clients.claim();
  })());
});

/* الصفحة: آخر نسخة من الموقع (نتجاوز ذاكرة GitHub المؤقتة)، وإذا النت بطيء أو مقطوع نفتح المحفوظة فوراً */
async function page() {
  const cache = await caches.open(V);
  const url = new URL('./index.html', scope());
  url.searchParams.set('v', Date.now());
  const net = fetch(url.href, { cache: 'no-store', credentials: 'same-origin' }).then((r) => {
    if (r && r.ok) { const c = r.clone(); cache.put(shellUrl(), c); }
    return r;
  });
  const saved = await cache.match(shellUrl());
  if (!saved) return net.catch(() => cache.match('./')).then((r) => r || new Response('offline', { status: 503 }));
  const slow = new Promise((res) => setTimeout(() => res(null), 3500));
  const r = await Promise.race([net.catch(() => null), slow]);
  return (r && r.ok) ? r : saved;
}

/* باقي ملفات التطبيق: المحفوظة فوراً، وتتحدث بالخلفية */
async function swr(req, name) {
  const cache = await caches.open(name);
  const hit = await cache.match(req);
  const net = fetch(req).then((r) => { if (r && (r.ok || r.type === 'opaque')) cache.put(req, r.clone()); return r; }).catch(() => null);
  return hit || (await net) || new Response('', { status: 504 });
}

async function cacheFirst(req, name) {
  const cache = await caches.open(name);
  const hit = await cache.match(req);
  if (hit) return hit;
  const r = await fetch(req);
  if (r && (r.ok || r.type === 'opaque')) cache.put(req, r.clone());
  return r;
}

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || req.cache === 'no-store') return;   // فحص التحديثات يروح للموقع مباشرة
  const url = new URL(req.url);
  const sc = new URL(scope());

  if (url.origin === sc.origin && url.pathname.startsWith(sc.pathname)) {
    const isPage = req.mode === 'navigate' && (url.pathname === sc.pathname || url.pathname === sc.pathname + 'index.html');
    e.respondWith(isPage ? page() : swr(req, V));
    return;
  }
  if (url.hostname === 'fonts.googleapis.com') { e.respondWith(swr(req, LIBS)); return; }
  if (url.hostname === 'fonts.gstatic.com' || url.hostname === 'cdn.jsdelivr.net' || url.hostname === 'unpkg.com') {
    e.respondWith(cacheFirst(req, LIBS));
  }
});
