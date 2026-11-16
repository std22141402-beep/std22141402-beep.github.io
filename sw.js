// =====================================================================
//  Service Worker — يخلي التطبيق يفتح بسرعة وبدون نت، ويحفظ الخريطة اللي شفتها
//  غيّر VERSION كل ما تحدّث ملفات التطبيق حتى توصل النسخة الجديدة للمستخدمين
// =====================================================================
const VERSION = 'salka-v1.4.1';
const SHELL_CACHE = `${VERSION}-shell`;
const LIB_CACHE = 'salka-libs-v1';
const TILE_CACHE = 'salka-tiles-v1';
const MAX_TILES = 4000;

const SHELL = [
  './', './index.html', './css/app.css', './manifest.webmanifest',
  './js/app.js', './js/config.js', './js/geo.js', './js/instructions.js', './js/routing.js', './js/navengine.js',
  './js/search.js', './js/voice.js', './js/mapview.js', './js/theme.js', './js/reports.js', './js/location.js', './js/storage.js', './js/traffic.js',
  './js/estate/shape.js', './js/estate/model.js', './js/estate/backend.js', './js/estate/photos.js', './js/estate/ui.js',
  './icons/icon.svg', './icons/icon-192.png', './icons/icon-512.png', './icons/icon-monochrome-512.png',
  './icons/sc-search-192.png', './icons/sc-estate-192.png', './icons/sc-add-192.png', './icons/sc-home-192.png',
];

self.addEventListener('install', (event) => {
  // cache: 'reload' = نجيب الملفات الجديدة من الخادم مباشرة، مو من ذاكرة المتصفح القديمة
  event.waitUntil(caches.open(SHELL_CACHE)
    .then((c) => c.addAll(SHELL.map((u) => new Request(u, { cache: 'reload' }))))
    .catch(() => {})
    .then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((k) => k.endsWith('-shell') && k !== SHELL_CACHE).map((k) => caches.delete(k)));
    await self.clients.claim();
  })());
});

let putCount = 0;
async function trimTiles() {
  const cache = await caches.open(TILE_CACHE);
  const keys = await cache.keys();
  if (keys.length > MAX_TILES) {
    const drop = keys.slice(0, keys.length - MAX_TILES);
    await Promise.all(drop.map((k) => cache.delete(k)));
  }
}

async function cacheFirst(req, cacheName, isTile) {
  const cache = await caches.open(cacheName);
  const hit = await cache.match(req);
  if (hit) return hit;
  const res = await fetch(req);
  if (res.ok) {
    cache.put(req, res.clone());
    if (isTile && ++putCount % 100 === 0) trimTiles();
  }
  return res;
}

/** ملفات التطبيق: الأحدث من الخادم دائماً (مع فحص سريع)، وإذا ماكو نت نستخدم المحفوظ */
async function networkFirst(req, cacheName, timeoutMs = 5000) {
  const cache = await caches.open(cacheName);
  try {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), timeoutMs);
    const res = await fetch(req.url, { cache: 'no-cache', credentials: 'same-origin', signal: ctrl.signal });
    clearTimeout(timer);
    if (res.ok) { cache.put(req, res.clone()); return res; }
    const hit = await cache.match(req, { ignoreSearch: true });
    return hit || res;
  } catch {
    const hit = await cache.match(req, { ignoreSearch: true });
    if (hit) return hit;
    if (req.mode === 'navigate') { const idx = await cache.match('./index.html'); if (idx) return idx; }
    return new Response('offline', { status: 503 });
  }
}

async function staleWhileRevalidate(req, cacheName) {
  const cache = await caches.open(cacheName);
  const hit = await cache.match(req);
  const net = fetch(req).then((res) => { if (res.ok) cache.put(req, res.clone()); return res; }).catch(() => null);
  return hit || (await net) || new Response('offline', { status: 503 });
}

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // ملف الـAPK وملفات التحقق تروح للشبكة مباشرة (ما نخزن 3 ميغا بلا داعي)
  if (url.origin === self.location.origin && (/\.(apk|aab)$/.test(url.pathname) || url.pathname.includes('/.well-known/'))) return;

  // ملفات التطبيق نفسه
  if (url.origin === self.location.origin) {
    event.respondWith(networkFirst(req, SHELL_CACHE));
    return;
  }

  // المكتبات والخطوط
  if (/(^|\.)unpkg\.com$|cdn\.jsdelivr\.net$|fonts\.(googleapis|gstatic)\.com$/.test(url.hostname)) {
    event.respondWith(cacheFirst(req, LIB_CACHE, false));
    return;
  }

  // الخريطة: الستايل يتحدث بالخلفية، التايلات والخطوط والأيقونات تنحفظ
  if (url.hostname === 'tiles.openfreemap.org') {
    if (url.pathname.startsWith('/styles/') || /\/planet\/?$/.test(url.pathname)) {
      event.respondWith(staleWhileRevalidate(req, LIB_CACHE));
    } else {
      event.respondWith(cacheFirst(req, TILE_CACHE, true));
    }
  }
  // باقي الطلبات (حساب الطرق، البحث، البلاغات) تروح للشبكة مباشرة
});
