/* ميزان — يشغّل التطبيق بدون انترنت */
const V = 'mizan-af17354233';
const SHELL = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './icon-maskable-512.png', './apple-touch-icon.png'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(V).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('mizan-') && k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
function withTimeout(p, ms) { return new Promise((res, rej) => { const t = setTimeout(() => rej(new Error('timeout')), ms); p.then(r => { clearTimeout(t); res(r); }, e => { clearTimeout(t); rej(e); }); }); }
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const shellUrl = new URL('./index.html', self.registration.scope).href;
  // الصفحة: من الشبكة إذا متوفرة (حتى توصل التحديثات)، وإلا من النسخة المحفوظة
  if (req.mode === 'navigate') {
    e.respondWith(withTimeout(fetch(req), 4000).then(r => {
      if (r && r.ok) { const c = r.clone(); caches.open(V).then(ca => ca.put(shellUrl, c)); }
      return r;
    }).catch(() => caches.match(shellUrl).then(hit => hit || caches.match('./'))));
    return;
  }
  const same = url.origin === self.location.origin;
  const fonts = url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com';
  if (!same && !fonts) return;
  e.respondWith(caches.match(req).then(hit => {
    const net = fetch(req).then(r => {
      if (r && (r.ok || r.type === 'opaque')) { const c = r.clone(); caches.open(V).then(ca => ca.put(req, c)); }
      return r;
    }).catch(() => hit);
    return hit || net;
  }));
});
