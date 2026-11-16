// =====================================================================
//  reports.js — بلاغات الطريق المشتركة بين كل المستخدمين
//  الوضع الافتراضي: خادم ntfy.sh المجاني (يشتغل فوراً بدون أي إعداد)
//  اختياري: قاعدة Firebase خاصة بيك (إذا حطيت رابطها بالإعدادات)
// =====================================================================
import { REPORT_TYPES, NAV, SHARED } from './config.js';
import { store } from './storage.js';
import { snapToLine } from './geo.js';

export const TYPE = Object.fromEntries(REPORT_TYPES.map((t) => [t.id, t]));
const FB_RE = /^https:\/\/[a-z0-9-]+(\.[a-z0-9-]+)*\.(firebaseio\.com|firebasedatabase\.app)$/i;
const dayKey = (ms) => new Date(ms).toISOString().slice(0, 10).replace(/-/g, '');
const okNum = (n) => typeof n === 'number' && Number.isFinite(n);

export function normalizeFirebaseUrl(url) {
  const u = (url || '').trim().replace(/\/+$/, '').replace(/\.json$/, '');
  return FB_RE.test(u) ? u : null;
}

function setPath(tree, segs, val) {
  if (!segs.length) return val;
  const root = tree && typeof tree === 'object' ? tree : {};
  let node = root;
  for (let i = 0; i < segs.length - 1; i++) {
    if (!node[segs[i]] || typeof node[segs[i]] !== 'object') node[segs[i]] = {};
    node = node[segs[i]];
  }
  const last = segs[segs.length - 1];
  if (val === null) delete node[last]; else node[last] = val;
  return root;
}

export class ReportStore {
  constructor({ deviceId, onChange }) {
    this.dev = deviceId;
    this.onChange = onChange || (() => {});
    this.local = store.get('reports', []);
    this.myVotes = store.get('myVotes', {});
    this.outbox = store.get('outbox', []);   // رسائل ما انرسلت (النت مقطوع)
    this.mode = 'off';         // off | ntfy | firebase
    this.status = 'off';       // off | connecting | live | error
    this.remote = new Map();   // بلاغات ntfy حسب c
    this.voteBuf = new Map();
    this.seen = new Set();
    this.lastId = null;
    this.days = {};            // بيانات Firebase حسب اليوم
    this.base = null;
    this.es = null;
    this.lastSent = {};
    this._retry = 0;
    this._timers = [];
    this._emitT = null;
    this._prune();
    if (typeof window !== 'undefined') window.addEventListener?.('online', () => { this._flush(); if (this.mode === 'ntfy' && this.status !== 'live') this._ntfyOpen(); });
  }

  /** يربط بالخادم: Firebase إذا الرابط صحيح، وإلا ntfy. shared=false يطفي المشاركة */
  connect(firebaseUrl, { shared = true } = {}) {
    this.disconnect();
    if (!shared || typeof EventSource === 'undefined') { this._emit(); return; }
    const fb = normalizeFirebaseUrl(firebaseUrl);
    if (fb) {
      this.mode = 'firebase';
      this.base = fb;
      this.status = 'connecting';
      this._fbOpen();
      this._fbLoadDay(dayKey(Date.now() - 86400000));
      this._timers.push(setInterval(() => {
        if (this.streamDay !== dayKey(Date.now())) { this._fbOpen(); this._fbLoadDay(dayKey(Date.now() - 86400000)); }
      }, 60000));
    } else {
      this.mode = 'ntfy';
      this.status = 'connecting';
      this._ntfyOpen();
    }
    this._timers.push(setInterval(() => { this._prune(); this._flush(); this._emit(); }, 60000));
    this._flush();
    this._emit();
  }

  disconnect() {
    try { this.es?.close(); } catch { /* ignore */ }
    this.es = null;
    this._timers.forEach((t) => { clearInterval(t); clearTimeout(t); });
    this._timers = [];
    clearTimeout(this._reconnectT);
    this.base = null;
    this.days = {};
    this.mode = 'off';
    this.status = 'off';
  }

  // --------------------------- ntfy ---------------------------
  _ntfyOpen() {
    try { this.es?.close(); } catch { /* ignore */ }
    clearTimeout(this._reconnectT);
    const since = this.lastId || '12h';
    const es = new EventSource(`${SHARED.ntfyBase}/${SHARED.ntfyTopic}/sse?since=${encodeURIComponent(since)}`);
    this.es = es;
    es.onopen = () => { this._retry = 0; this.status = 'live'; this._emitSoon(); this._flush(); };
    es.onmessage = (ev) => {
      let m; try { m = JSON.parse(ev.data); } catch { return; }
      if (!m || (m.event && m.event !== 'message')) return;
      this._ntfyMsg(m);
    };
    es.onerror = () => {
      if (this.es !== es) return;
      try { es.close(); } catch { /* ignore */ }
      this._retry++;
      if (this._retry >= 3) this.status = 'error';
      this._emitSoon();
      const delay = Math.min(60000, 2000 * 2 ** Math.min(this._retry, 5));
      this._reconnectT = setTimeout(() => { if (this.mode === 'ntfy') this._ntfyOpen(); }, delay);
    };
  }

  _ntfyMsg(m) {
    if (!m.id || this.seen.has(m.id)) return;
    if (this.seen.size > 5000) this.seen.clear();
    this.seen.add(m.id);
    this.lastId = m.id;
    let p; try { p = JSON.parse(m.message); } catch { return; }
    if (!p || typeof p !== 'object') return;
    const d = typeof p.d === 'string' ? p.d.slice(0, 40) : '';
    if (p.k && TYPE[p.k] && okNum(p.x) && okNum(p.y) && typeof p.c === 'string' && p.c.length < 80) {
      const t = okNum(m.time) ? m.time * 1000 : Date.now();
      const prev = this.remote.get(p.c);
      const v = { ...(prev?.v || {}), ...(this.voteBuf.get(p.c) || {}) };
      this.voteBuf.delete(p.c);
      this.remote.set(p.c, { id: p.c, k: p.k, x: p.x, y: p.y, t, d, c: p.c, v });
    } else if (typeof p.vote === 'string' && (p.v === 1 || p.v === -1) && d) {
      const r = this.remote.get(p.vote);
      if (r) r.v = { ...r.v, [d]: p.v };
      else this.voteBuf.set(p.vote, { ...(this.voteBuf.get(p.vote) || {}), [d]: p.v });
    } else if (typeof p.del === 'string' && d) {
      const r = this.remote.get(p.del);
      if (r && r.d === d) this.remote.delete(p.del);
    }
    this._emitSoon();
  }

  // --------------------------- Firebase ---------------------------
  _fbOpen() {
    try { this.es?.close(); } catch { /* ignore */ }
    if (!this.base) return;
    const day = dayKey(Date.now());
    this.streamDay = day;
    const es = new EventSource(`${this.base}/salka/reports/${day}.json`);
    this.es = es;
    const handle = (kind) => (ev) => {
      let msg; try { msg = JSON.parse(ev.data); } catch { return; }
      if (!msg || typeof msg.path !== 'string') return;
      const segs = msg.path.split('/').filter(Boolean);
      if (kind === 'put') this.days[day] = setPath(this.days[day], segs, msg.data);
      else if (msg.data && typeof msg.data === 'object') {
        for (const [k, v] of Object.entries(msg.data)) this.days[day] = setPath(this.days[day], [...segs, ...k.split('/').filter(Boolean)], v);
      }
      this.status = 'live';
      this._emitSoon();
    };
    es.addEventListener('put', handle('put'));
    es.addEventListener('patch', handle('patch'));
    es.addEventListener('cancel', () => { this.status = 'error'; this._emit(); });
    es.onerror = () => { if (this.status !== 'live') this.status = 'error'; this._emit(); };
  }

  async _fbLoadDay(day) {
    if (!this.base) return;
    try {
      const res = await fetch(`${this.base}/salka/reports/${day}.json`);
      if (res.ok) { this.days[day] = (await res.json()) || {}; this._emit(); }
    } catch { /* ignore */ }
  }

  async testConnection(url) {
    const base = normalizeFirebaseUrl(url);
    if (!base) return { ok: false, msg: 'الرابط غير صحيح. لازم يكون مثل https://اسم-المشروع.firebaseio.com' };
    try {
      const res = await fetch(`${base}/salka/reports/${dayKey(Date.now())}.json?shallow=true`);
      if (res.status === 401 || res.status === 403) return { ok: false, msg: 'القاعدة موجودة بس الصلاحيات (Rules) تمنع القراءة.' };
      if (!res.ok) return { ok: false, msg: `خطأ من الخادم (${res.status})` };
      return { ok: true, msg: 'تم الاتصال بنجاح ✓' };
    } catch {
      return { ok: false, msg: 'تعذر الوصول للقاعدة. تأكد من الرابط والانترنت.' };
    }
  }

  // --------------------------- الإرسال ---------------------------
  _send(item) {
    this.outbox.push(item);
    if (this.outbox.length > 50) this.outbox.shift();
    store.set('outbox', this.outbox);
    this._flush();
  }

  async _flush() {
    if (this._flushing || !this.outbox.length || this.mode === 'off') return;
    this._flushing = true;
    try {
      while (this.outbox.length) {
        const item = this.outbox[0];
        // نتخلص من الرسائل القديمة جداً
        if (Date.now() - (item.at || 0) > 6 * 3600 * 1000) { this.outbox.shift(); continue; }
        let res;
        if (this.mode === 'ntfy' && item.kind === 'ntfy') {
          res = await fetch(`${SHARED.ntfyBase}/${SHARED.ntfyTopic}`, { method: 'POST', body: JSON.stringify(item.body) });
        } else if (this.mode === 'firebase' && item.kind === 'fb') {
          res = await fetch(`${this.base}${item.path}`, { method: item.method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(item.body) });
        } else { this.outbox.shift(); continue; }
        if (res.status === 429) break; // نحاول بعدين
        this.outbox.shift();
      }
    } catch {
      /* بدون نت — نحاول بعدين */
    } finally {
      store.set('outbox', this.outbox);
      this._flushing = false;
    }
  }

  // --------------------------- البلاغات ---------------------------
  /** يضيف بلاغ. يرجع false إذا مكرر خلال فترة قصيرة */
  add(typeId, pos) {
    const t = TYPE[typeId];
    if (!t || !pos) return false;
    const now = Date.now();
    if (this.lastSent[typeId] && now - this.lastSent[typeId] < 30000) return false;
    this.lastSent[typeId] = now;
    const c = `${this.dev}-${now.toString(36)}`;
    const rep = { id: c, k: typeId, x: +pos[0].toFixed(6), y: +pos[1].toFixed(6), t: now, d: this.dev, c, v: {} };
    this.local.push(rep);
    store.set('reports', this.local);
    if (this.mode === 'ntfy') this._send({ kind: 'ntfy', at: now, body: { k: typeId, x: rep.x, y: rep.y, d: this.dev, c } });
    if (this.mode === 'firebase') this._send({ kind: 'fb', at: now, method: 'POST', path: `/salka/reports/${dayKey(now)}.json`, body: { k: typeId, x: rep.x, y: rep.y, t: { '.sv': 'timestamp' }, d: this.dev, c } });
    this._emit();
    return true;
  }

  vote(rep, val) {
    if (!rep || (val !== 1 && val !== -1)) return;
    const key = rep.c || rep.id;
    this.myVotes[rep.id] = val;
    store.set('myVotes', this.myVotes);
    const loc = this.local.find((x) => x.c === key || x.id === rep.id);
    if (loc) { loc.v = { ...(loc.v || {}), [this.dev]: val }; store.set('reports', this.local); }
    const rem = this.remote.get(key);
    if (rem) rem.v = { ...rem.v, [this.dev]: val };
    if (this.mode === 'ntfy') this._send({ kind: 'ntfy', at: Date.now(), body: { vote: key, v: val, d: this.dev } });
    else if (this.mode === 'firebase' && rep.day) this._send({ kind: 'fb', at: Date.now(), method: 'PUT', path: `/salka/reports/${rep.day}/${encodeURIComponent(rep.id)}/v/${this.dev}.json`, body: val });
    this._emit();
  }

  /** حذف بلاغي (يوصل للكل) */
  remove(rep) {
    const key = rep.c || rep.id;
    this.local = this.local.filter((x) => x.id !== rep.id && x.c !== key);
    store.set('reports', this.local);
    this.myVotes[rep.id] = -1;
    store.set('myVotes', this.myVotes);
    this.remote.delete(key);
    if (this.mode === 'ntfy') this._send({ kind: 'ntfy', at: Date.now(), body: { del: key, d: this.dev } });
    else if (this.mode === 'firebase' && rep.day) this._send({ kind: 'fb', at: Date.now(), method: 'PUT', path: `/salka/reports/${rep.day}/${encodeURIComponent(rep.id)}/v/${this.dev}.json`, body: -1 });
    this._emit();
  }

  /** كل البلاغات الفعالة */
  list(now = Date.now()) {
    const out = [];
    const remoteKeys = new Set();
    if (this.mode === 'firebase') {
      for (const [day, tree] of Object.entries(this.days)) {
        if (!tree || typeof tree !== 'object') continue;
        for (const [id, r] of Object.entries(tree)) {
          if (!r || typeof r !== 'object' || !TYPE[r.k] || !okNum(r.x) || !okNum(r.y)) continue;
          if (r.c) remoteKeys.add(r.c);
          out.push({ ...r, id, day, src: 'remote', t: okNum(r.t) ? r.t : now });
        }
      }
    } else if (this.mode === 'ntfy') {
      for (const r of this.remote.values()) { remoteKeys.add(r.c); out.push({ ...r, src: 'remote' }); }
    }
    for (const r of this.local) if (!remoteKeys.has(r.c)) out.push({ ...r, src: 'local' });
    return out.filter((r) => this.isActive(r, now)).map((r) => ({ ...r, mine: r.d === this.dev, type: TYPE[r.k] }));
  }

  isActive(r, now = Date.now()) {
    const type = TYPE[r.k];
    if (!type) return false;
    const votes = Object.values(r.v || {});
    const up = votes.filter((x) => x === 1).length;
    const down = votes.filter((x) => x === -1).length;
    if (this.myVotes[r.id] === -1) return false;
    if (down >= up + 2) return false;
    const ttl = type.ttl * 60000;
    const life = ttl + Math.min(up, 4) * ttl * 0.5;
    return now - r.t < life && now - r.t > -5 * 60000;
  }

  _prune() {
    const before = this.local.length;
    this.local = this.local.filter((r) => this.isActive(r) || Date.now() - r.t < 60000);
    if (this.local.length !== before) store.set('reports', this.local);
  }

  _emitSoon() {
    if (this._emitT) return;
    this._emitT = setTimeout(() => { this._emitT = null; this._emit(); }, 120);
  }

  _emit() { try { this.onChange(this); } catch (e) { console.error(e); } }
}

/**
 * يحسب البلاغات اللي على طريق معين (ومكانها على الطريق)
 * @returns {{penalty:number, hits:Array}}
 */
export function reportsOnRoute(route, reports, fromAlong = 0) {
  let penalty = 0;
  const hits = [];
  if (!route || !reports?.length) return { penalty, hits };
  const [w, s, e, n] = route.bbox;
  const pad = 0.002;
  for (const r of reports) {
    if (r.x < w - pad || r.x > e + pad || r.y < s - pad || r.y > n + pad) continue;
    const snap = snapToLine(route.line, [r.x, r.y]);
    if (snap.dist > NAV.reportNearRoute || snap.along < fromAlong) continue;
    hits.push({ rep: r, along: snap.along });
    penalty += r.type?.penalty || 0;
  }
  hits.sort((a, b) => a.along - b.along);
  return { penalty, hits };
}
