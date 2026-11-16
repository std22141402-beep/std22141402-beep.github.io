// =====================================================================
//  voice.js — الصوت (نطق عربي + نغمة تنبيه قبل التعليمات)
// =====================================================================
export class Voice {
  constructor() {
    this.supported = typeof window !== 'undefined' && 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
    this.enabled = true;
    this.chime = true;
    this.volume = 1;
    this.voice = null;
    this.ctx = null;
    this.unlocked = false;
    this.currentPriority = 0;
    this._timer = null;
    this.active = null;
    this.queue = [];
    if (this.supported) {
      this._pick();
      try { window.speechSynthesis.addEventListener?.('voiceschanged', () => this._pick()); } catch { /* old browsers */ }
      if (!window.speechSynthesis.addEventListener) window.speechSynthesis.onvoiceschanged = () => this._pick();
    }
  }

  _pick() {
    let voices = [];
    try { voices = window.speechSynthesis.getVoices() || []; } catch { voices = []; }
    const ar = voices.filter((v) => /^ar(\b|[-_])/i.test(v.lang) || /arabic|عرب/i.test(v.name));
    const pref = ['ar-IQ', 'ar-SA', 'ar-AE', 'ar-KW', 'ar-JO', 'ar-EG'];
    let best = null;
    for (const p of pref) { best = ar.find((v) => v.lang.replace('_', '-').toLowerCase() === p.toLowerCase()); if (best) break; }
    // نفضل الأصوات المحلية (أسرع وتشتغل بدون نت)
    this.voice = best || ar.find((v) => v.localService) || ar[0] || null;
  }

  hasArabic() { return !!this.voice; }

  /** لازم ينادى من ضغطة المستخدم (iOS/Android يمنع الصوت بدونها) */
  unlock() {
    if (this.unlocked) return;
    this.unlocked = true;
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (AC && !this.ctx) this.ctx = new AC();
      this.ctx?.resume?.();
    } catch { /* ignore */ }
    if (this.supported) {
      try {
        const u = new SpeechSynthesisUtterance(' ');
        u.volume = 0;
        window.speechSynthesis.speak(u);
      } catch { /* ignore */ }
    }
  }

  beep() {
    if (!this.chime || !this.ctx) return;
    try {
      const ctx = this.ctx;
      const t = ctx.currentTime;
      [[880, 0], [1320, 0.12]].forEach(([f, d]) => {
        const o = ctx.createOscillator(), g = ctx.createGain();
        o.type = 'sine'; o.frequency.value = f;
        g.gain.setValueAtTime(0.0001, t + d);
        g.gain.exponentialRampToValueAtTime(0.25 * this.volume, t + d + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, t + d + 0.22);
        o.connect(g).connect(ctx.destination);
        o.start(t + d); o.stop(t + d + 0.25);
      });
    } catch { /* ignore */ }
  }

  /**
   * ينطق نص. الأولوية: 3 = تعليمة "هسه" (تقاطع أي شي)، 2 = مهم، 1 = عادي.
   * الرسائل الأقل أو المساوية للي دا ينطق تنتظر بالطابور بدل ما تنقطع.
   * @param {string} text
   * @param {{priority?:number, chime?:boolean}} opts
   */
  speak(text, opts = {}) {
    if (!this.enabled || !text) return;
    const item = { text, pr: opts.priority ?? 1, chime: opts.chime !== false && this.chime, t: Date.now() };
    if (!this.supported) { if (item.chime) this.beep(); return; }
    if (this.active && item.pr <= this.active.pr && item.pr < 3) {
      this.queue = this.queue || [];
      this.queue.push(item);
      if (this.queue.length > 3) this.queue.shift();
      return;
    }
    this._cancelActive();
    this._play(item);
  }

  _play(item) {
    const synth = window.speechSynthesis;
    this.active = item;
    this.currentPriority = item.pr;
    const done = () => {
      if (this.active !== item) return;
      clearTimeout(this._safety);
      this.active = null;
      this.currentPriority = 0;
      this._next();
    };
    const go = () => {
      if (this.active !== item) return;
      try {
        const u = new SpeechSynthesisUtterance(item.text);
        u.lang = this.voice?.lang || 'ar-SA';
        if (this.voice) u.voice = this.voice;
        u.volume = this.volume;
        u.rate = 1.0;
        u.onend = done;
        u.onerror = done;
        synth.speak(u);
        // بعض المتصفحات ما ترسل onend أحياناً — صمام أمان
        this._safety = setTimeout(done, 2500 + item.text.length * 110);
      } catch { done(); }
    };
    if (item.chime) { this.beep(); this._timer = setTimeout(go, 330); } else this._timer = setTimeout(go, 30);
  }

  _cancelActive() {
    clearTimeout(this._timer);
    clearTimeout(this._safety);
    if (this.active) {
      this.active = null;
      try { window.speechSynthesis.cancel(); } catch { /* ignore */ }
    }
    this.currentPriority = 0;
  }

  _next() {
    const now = Date.now();
    this.queue = (this.queue || []).filter((q) => now - q.t < 8000); // نرمي القديم
    const n = this.queue.shift();
    if (n) this._play(n);
  }

  stop() {
    this.queue = [];
    this._cancelActive();
  }

}
