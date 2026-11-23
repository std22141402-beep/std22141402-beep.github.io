/* نطّة — يخلي اللعبة تشتغل بدون انترنت بعد أول فتحة */
const V = 'natta-c559f84c7d';
const SHELL = ['./', './index.html', './core.js', './game.js', './manifest.webmanifest', './icon-192.png', './icon-512.png', './icon-maskable-512.png', './apple-touch-icon.png'];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(V).then((c) => c.addAll(SHELL.map((u) => new Request(u, { cache: 'reload' })))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k.startsWith('natta-') && k !== V).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
// الملفات: من الشبكة إذا متوفرة (حتى توصل التحديثات)، وإلا من النسخة المحفوظة
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  e.respondWith((async () => {
    const cache = await caches.open(V);
    try {
      const ctrl = new AbortController();
      const timer = setTimeout(() => ctrl.abort(), 3500);
      const res = await fetch(req, { cache: 'no-cache', signal: ctrl.signal });
      clearTimeout(timer);
      if (res.ok) cache.put(req.mode === 'navigate' ? './index.html' : req, res.clone());
      return res;
    } catch (err) {
      const hit = await cache.match(req.mode === 'navigate' ? './index.html' : req, { ignoreSearch: true });
      return hit || new Response('offline', { status: 503 });
    }
  })());
});
