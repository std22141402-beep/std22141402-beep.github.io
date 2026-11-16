// =====================================================================
//  backend.js — حفظ إعلانات العقارات
//  • Firebase (مشترك ومباشر لكل المستخدمين): دخول مجهول + قاعدة Realtime
//  • محلي (على الجهاز) لما Firebase مو مفعّل بعد — حتى تكدر تجرب كلشي
// =====================================================================
import { ESTATE } from '../config.js';
import { store, deviceId } from '../storage.js';
import { geohash } from './shape.js';
import { cleanListing } from './model.js';

export class EstateError extends Error {
  constructor(code, msg) { super(msg || code); this.code = code; }
}

function newId() {
  const t = Date.now().toString(36).padStart(9, '0');
  const r = Array.from(crypto.getRandomValues(new Uint8Array(8)), (b) => 'abcdefghijkmnpqrstuvwxyz23456789'[b % 32]).join('');
  return `${t}${r}`;
}

export function estateConfig() {
  const o = store.get('estateCfg');
  const c = o && o.databaseURL ? o : ESTATE.firebase;
  const url = (c.databaseURL || '').trim().replace(/\/+$/, '');
  if (!c.apiKey || !/^https:\/\/[a-z0-9.-]+\.(firebaseio\.com|firebasedatabase\.app)$/i.test(url)) return null;
  return { apiKey: c.apiKey.trim(), databaseURL: url };
}

// ---------------------------------------------------------------------
// تخزين محلي بسيط فوق IndexedDB (مع بديل بالذاكرة)
// ---------------------------------------------------------------------
class KV {
  constructor(name) {
    this.mem = new Map();
    this.ready = new Promise((resolve) => {
      try {
        const req = indexedDB.open(name, 1);
        req.onupgradeneeded = () => req.result.createObjectStore('kv');
        req.onsuccess = () => { this.db = req.result; resolve(); };
        req.onerror = () => resolve();
      } catch { resolve(); }
    });
  }
  async _tx(mode, fn) {
    await this.ready;
    if (!this.db) return fn(null);
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction('kv', mode);
      const st = tx.objectStore('kv');
      let out;
      Promise.resolve(fn(st)).then((v) => { out = v; });
      tx.oncomplete = () => resolve(out);
      tx.onerror = () => reject(tx.error);
      tx.onabort = () => reject(tx.error || new Error('abort'));
    });
  }
  get(k) {
    return this._tx('readonly', (st) => (st ? new Promise((r) => { const q = st.get(k); q.onsuccess = () => r(q.result); q.onerror = () => r(undefined); }) : this.mem.get(k)));
  }
  set(k, v) { return this._tx('readwrite', (st) => { if (st) st.put(v, k); else this.mem.set(k, v); }); }
  del(k) { return this._tx('readwrite', (st) => { if (st) st.delete(k); else this.mem.delete(k); }); }
  values(prefix) {
    return this._tx('readonly', (st) => {
      if (!st) return [...this.mem.entries()].filter(([k]) => k.startsWith(prefix)).map(([, v]) => v);
      return new Promise((r) => {
        const out = [];
        const q = st.openCursor(IDBKeyRange.bound(prefix, `${prefix}￿`));
        q.onsuccess = () => { const c = q.result; if (c) { out.push(c.value); c.continue(); } else r(out); };
        q.onerror = () => r(out);
      });
    });
  }
}

export class LocalBackend {
  constructor() { this.kv = new KV('salka-estate'); this.mode = 'local'; }
  async uid() { return `local-${deviceId()}`; }
  async query() { const all = await this.kv.values('l:'); return new Map(all.map((l) => [l.id, l])); }
  async get(id) { return this.kv.get(`l:${id}`); }
  async mine() { const u = await this.uid(); return (await this.kv.values('l:')).filter((l) => l.u === u); }
  async thumb(id) { return (await this.kv.get(`t:${id}`)) || null; }
  async photos(id) { return (await this.kv.get(`p:${id}`)) || []; }
  async publish(listing, photos = [], thumb = null, onProgress) {
    const id = listing.id || newId();
    const now = Date.now();
    const l = cleanListing({ ...listing, id, u: await this.uid(), g: geohash(listing.y, listing.x, 7), t: listing.t || now, e: now, nph: photos.length });
    onProgress?.(0.3);
    await this.kv.set(`l:${id}`, l);
    if (photos.length) await this.kv.set(`p:${id}`, photos); else await this.kv.del(`p:${id}`);
    if (thumb) await this.kv.set(`t:${id}`, thumb); else await this.kv.del(`t:${id}`);
    onProgress?.(1);
    return l;
  }
  /** replace=true: يستبدل الإعلان كامل (تعديل) — false: يدمج (تجديد) */
  async update(id, patch, { replace = false } = {}) {
    const l = await this.get(id);
    if (!l) throw new EstateError('notfound', 'الإعلان مو موجود');
    const base = replace ? { t: l.t, nph: l.nph } : l;
    const m = { ...base, ...patch, id, u: l.u, e: Date.now() };
    m.g = geohash(m.y, m.x, 7);
    const n = cleanListing(m);
    await this.kv.set(`l:${id}`, n);
    return n;
  }
  async remove(id) { await Promise.all([this.kv.del(`l:${id}`), this.kv.del(`p:${id}`), this.kv.del(`t:${id}`)]); }
  async report() { return true; }
}

// ---------------------------------------------------------------------
// Firebase Realtime Database عبر REST (بدون مكتبات ثقيلة)
// ---------------------------------------------------------------------
export class FirebaseBackend {
  constructor(cfg) {
    this.cfg = cfg;
    this.mode = 'firebase';
    this.auth = store.get('fbAuth') || null;
    this.noIndex = false;
  }

  async _json(res) {
    let body = null;
    try { body = await res.json(); } catch { /* ignore */ }
    if (!res.ok) {
      const msg = body?.error?.message || body?.error || `HTTP ${res.status}`;
      if (res.status === 401 || /permission/i.test(String(msg))) throw new EstateError('denied', 'قاعدة البيانات رفضت الطلب (تأكد من القواعد Rules)');
      throw new EstateError('http', String(msg));
    }
    return body;
  }

  async _signUp() {
    const res = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${encodeURIComponent(this.cfg.apiKey)}`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ returnSecureToken: true }),
    });
    let b = null; try { b = await res.json(); } catch { /* ignore */ }
    if (!res.ok) {
      const m = b?.error?.message || '';
      if (/ADMIN_ONLY|OPERATION_NOT_ALLOWED/.test(m)) throw new EstateError('anon-off', 'لازم تفعّل الدخول المجهول (Anonymous) بـ Firebase');
      if (/API key/i.test(m)) throw new EstateError('bad-key', 'مفتاح Firebase غير صحيح');
      throw new EstateError('auth', m || 'تعذر تسجيل الدخول');
    }
    return { idToken: b.idToken, refreshToken: b.refreshToken, uid: b.localId, exp: Date.now() + (+b.expiresIn || 3600) * 1000 };
  }

  async _refresh(rt) {
    const res = await fetch(`https://securetoken.googleapis.com/v1/token?key=${encodeURIComponent(this.cfg.apiKey)}`, {
      method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: `grant_type=refresh_token&refresh_token=${encodeURIComponent(rt)}`,
    });
    let b = null; try { b = await res.json(); } catch { /* ignore */ }
    if (!res.ok) { const e = new EstateError('refresh', b?.error?.message || 'refresh failed'); e.fatal = res.status === 400; throw e; }
    return { idToken: b.id_token, refreshToken: b.refresh_token, uid: b.user_id, exp: Date.now() + (+b.expires_in || 3600) * 1000 };
  }

  async token() {
    if (this.auth && this.auth.exp > Date.now() + 60000) return this.auth.idToken;
    if (!this._tokP) {
      this._tokP = (async () => {
        let a = null;
        if (this.auth?.refreshToken) {
          try { a = await this._refresh(this.auth.refreshToken); } catch (e) { if (!e.fatal) throw e; }
        }
        if (!a) a = await this._signUp();
        this.auth = a;
        store.set('fbAuth', a);
        return a.idToken;
      })().finally(() => { this._tokP = null; });
    }
    return this._tokP;
  }

  async uid() { await this.token(); return this.auth.uid; }

  _url(path, params = '') { return `${this.cfg.databaseURL}/${path}.json${params ? `?${params}` : ''}`; }

  async _get(path, params) {
    const res = await fetch(this._url(path, params));
    return this._json(res);
  }

  /** إعلانات مربعات geohash */
  async query(cells) {
    const out = new Map();
    if (this.noIndex) {
      const all = (await this._get('re/l')) || {};
      for (const [id, l] of Object.entries(all)) if (l && cells.some((c) => (l.g || '').startsWith(c))) out.set(id, { ...l, id });
      return out;
    }
    await Promise.all(cells.map(async (c) => {
      const q = `orderBy=${encodeURIComponent('"g"')}&startAt=${encodeURIComponent(`"${c}"`)}&endAt=${encodeURIComponent(`"${c}"`)}`;
      try {
        const r = (await this._get('re/l', q)) || {};
        for (const [id, l] of Object.entries(r)) if (l) out.set(id, { ...l, id });
      } catch (e) {
        if (/index/i.test(e.message)) { this.noIndex = true; }
        else throw e;
      }
    }));
    if (this.noIndex && !out.size) return this.query(cells);
    return out;
  }

  async get(id) { const l = await this._get(`re/l/${id}`); return l ? { ...l, id } : null; }
  async thumb(id) { return (await this._get(`re/t/${id}`)) || null; }
  async photos(id) { const p = (await this._get(`re/p/${id}`)) || []; return Array.isArray(p) ? p.filter(Boolean) : Object.keys(p).sort((a, b) => a - b).map((k) => p[k]); }

  async mine() {
    const uid = await this.uid();
    try {
      const r = (await this._get('re/l', `orderBy=${encodeURIComponent('"u"')}&equalTo=${encodeURIComponent(`"${uid}"`)}`)) || {};
      return Object.entries(r).map(([id, l]) => ({ ...l, id }));
    } catch {
      const all = (await this._get('re/l')) || {};
      return Object.entries(all).filter(([, l]) => l?.u === uid).map(([id, l]) => ({ ...l, id }));
    }
  }

  /** كتابة عدة مسارات مرة وحدة (ذرّية) مع نسبة التقدم */
  _patch(body, onProgress) {
    return this.token().then((tok) => new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('PATCH', this._url('re', `auth=${encodeURIComponent(tok)}`));
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.upload.onprogress = (e) => { if (e.lengthComputable) onProgress?.(e.loaded / e.total); };
      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) { onProgress?.(1); resolve(); return; }
        if (xhr.status === 401 || xhr.status === 403) reject(new EstateError('denied', 'قاعدة البيانات رفضت الطلب (تأكد من القواعد Rules)'));
        else reject(new EstateError('http', `HTTP ${xhr.status}`));
      };
      xhr.onerror = () => reject(new EstateError('network', 'تعذر الاتصال. تأكد من الانترنت'));
      xhr.ontimeout = () => reject(new EstateError('network', 'الاتصال بطيء جداً، حاول مرة ثانية'));
      xhr.timeout = 120000;
      xhr.send(JSON.stringify(body));
    }));
  }

  async publish(listing, photos = [], thumb = null, onProgress) {
    const uid = await this.uid();
    const id = listing.id || newId();
    const now = Date.now();
    const l = cleanListing({ ...listing, id: undefined, u: uid, g: geohash(listing.y, listing.x, 7), t: listing.t || now, e: now, nph: photos.length });
    const body = { [`l/${id}`]: l, [`t/${id}`]: thumb || null, [`p/${id}`]: photos.length ? Object.fromEntries(photos.map((p, i) => [String(i), p])) : null };
    await this._patch(body, onProgress);
    return { ...l, id };
  }

  /** replace=true: يستبدل الإعلان كامل (تعديل) — false: يدمج (تجديد) */
  async update(id, patch, { replace = false } = {}) {
    if (replace) {
      const cur = await this.get(id);
      if (!cur) throw new EstateError('notfound', 'الإعلان مو موجود');
      const m = { t: cur.t, nph: cur.nph, ...patch, u: cur.u, e: Date.now() };
      m.g = geohash(m.y, m.x, 7);
      const l = cleanListing({ ...m, id: undefined });
      await this._patch({ [`l/${id}`]: l });
      return { ...l, id };
    }
    const tok = await this.token();
    const p = cleanListing({ ...patch, e: Date.now() });
    if (Number.isFinite(p.x) && Number.isFinite(p.y)) p.g = geohash(p.y, p.x, 7);
    delete p.id; delete p.u;
    const res = await fetch(this._url(`re/l/${id}`, `auth=${encodeURIComponent(tok)}`), { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(p) });
    await this._json(res);
    return this.get(id);
  }

  async remove(id) { await this._patch({ [`l/${id}`]: null, [`t/${id}`]: null, [`p/${id}`]: null }); }

  async report(id) {
    const tok = await this.token();
    const res = await fetch(this._url(`re/rp/${id}/${this.auth.uid}`, `auth=${encodeURIComponent(tok)}`), { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: '1' });
    await this._json(res);
    return true;
  }
}

export function makeBackend() {
  const cfg = estateConfig();
  return cfg ? new FirebaseBackend(cfg) : new LocalBackend();
}
