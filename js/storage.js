// تخزين آمن (ما ينهار إذا المتصفح منع التخزين)
const PREFIX = 'salka:';
const mem = new Map();

export const store = {
  get(key, def) {
    try {
      const v = localStorage.getItem(PREFIX + key);
      return v == null ? def : JSON.parse(v);
    } catch {
      return mem.has(key) ? mem.get(key) : def;
    }
  },
  set(key, val) {
    try { localStorage.setItem(PREFIX + key, JSON.stringify(val)); } catch { mem.set(key, val); }
  },
  del(key) {
    try { localStorage.removeItem(PREFIX + key); } catch { mem.delete(key); }
  },
  clearAll() {
    try {
      Object.keys(localStorage).filter((k) => k.startsWith(PREFIX)).forEach((k) => localStorage.removeItem(k));
    } catch { mem.clear(); }
  },
};

export function deviceId() {
  let id = store.get('device');
  if (!id) {
    const a = new Uint8Array(9);
    (globalThis.crypto || {}).getRandomValues?.(a);
    id = Array.from(a, (b) => (b % 36).toString(36)).join('') + Date.now().toString(36).slice(-4);
    store.set('device', id);
  }
  return id;
}

export function escapeHtml(s) {
  return String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
