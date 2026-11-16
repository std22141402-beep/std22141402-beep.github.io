/* سوبرماركت برو — Service Worker: يخلي التطبيق يشتغل بدون إنترنت */
const VERSION = 'smpro-v2.5.1';
const SHELL = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './icon-maskable.png', './apple-touch-icon.png'];
const RUNTIME_HOSTS = /(^|\.)(fonts\.googleapis\.com|fonts\.gstatic\.com|cdn\.jsdelivr\.net|unpkg\.com)$/;

self.addEventListener('install', event => {
  event.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith('smpro-') && k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// الضغط على إشعار يفتح التطبيق
self.addEventListener('notificationclick', event => {
  event.notification.close();
  const url = (event.notification.data && event.notification.data.url) || './';
  event.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
    for (const c of list) { if ('focus' in c) return c.focus(); }
    return self.clients.openWindow ? self.clients.openWindow(url) : null;
  }));
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.pathname.endsWith('.apk')) return; // ملف التطبيق ينزل مباشرة بدون تخزين

  // الصفحة نفسها: نجيب الأحدث من النت، وإذا ما في نت نفتح النسخة المحفوظة
  if (req.mode === 'navigate') {
    event.respondWith(networkFirst(req));
    return;
  }
  if (url.origin === self.location.origin || RUNTIME_HOSTS.test(url.hostname)) {
    event.respondWith(staleWhileRevalidate(req, event));
  }
});

async function networkFirst(req) {
  const cache = await caches.open(VERSION);
  try {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 4000);
    const res = await fetch(req, { signal: ctrl.signal });
    clearTimeout(timer);
    if (res && res.ok) { cache.put('./index.html', res.clone()); return res; }
    // الموقع ما رد صح (انحذف أو عطلان): نفتح النسخة المحفوظة بالموبايل حتى يكمل الشغل
    return (await cache.match('./index.html')) || (await cache.match('./')) || res;
  } catch (e) {
    return (await cache.match('./index.html')) || (await cache.match('./')) || Response.error();
  }
}

async function staleWhileRevalidate(req, event) {
  const cache = await caches.open(VERSION);
  const cached = await cache.match(req);
  const network = fetch(req)
    .then(res => {
      if (res && (res.ok || res.type === 'opaque')) cache.put(req, res.clone());
      return res;
    })
    .catch(() => null);
  if (cached) {
    event.waitUntil(network);
    return cached;
  }
  return (await network) || Response.error();
}
