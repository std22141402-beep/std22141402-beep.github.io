// =====================================================================
//  location.js — مصدر الموقع: GPS حقيقي أو محاكاة قيادة
// =====================================================================
import { haversine, bearing, destination, pointAt, clamp, GpsSmoother } from './geo.js';

/**
 * مصدر الـGPS الحقيقي — مصمم ما يوكف أبداً أثناء السياقة:
 *  • إذا الإشارة انقطعت (جسر، بنايات، نفق) أندرويد يوقف التحديثات ويرسل خطأ
 *    «Location not available» — هنا نعيد التشغيل تلقائياً بفواصل متزايدة.
 *  • مراقب (watchdog): إذا ما وصلت قراءة خلال ثواني، نعيد تشغيل المتابعة.
 *  • قراءة سريعة تقريبية (شبكة/واي فاي) لحد ما تقفل الأقمار الصناعية.
 *  • نرتب القراءات بوقت الاستلام (ساعة الـGPS أحياناً تختلف عن ساعة الموبايل).
 *  • نكتشف: الموقع مطفي بالموبايل، الصلاحية مرفوضة، الموقع «التقريبي» بدل الدقيق.
 * الحالات (state): idle | searching | ok | weak | lost | off | denied | coarse | unsupported
 */
export class GpsSource {
  constructor(onFix, onError, opts = {}) {
    this.onFix = onFix;
    this.onError = onError;
    this.onState = opts.onState || null;
    this.geo = opts.geo !== undefined ? opts.geo : (typeof navigator !== 'undefined' && navigator.geolocation) || null;
    this.now = opts.now || (() => Date.now());
    this.cfg = {
      dogMs: 2000,          // كل كم نفحص
      staleNavMs: 8000,     // أثناء الملاحة: بعد كم بدون قراءة نعيد التشغيل
      staleIdleMs: 20000,   // بدون ملاحة
      lostMs: 5000,         // بعد كم ثانية بدون قراءة (والسيارة ماشية) نكول «الإشارة ضعيفة»
      retryMin: 800, retryMax: 8000,
      offAfterMs: 20000,    // أخطاء متكررة وماكو ولا قراءة = الموقع مطفي بالموبايل
      coarseAcc: 1000, coarseAfterMs: 25000,
      maxStaleAgeMs: 5 * 60000,
      ...opts.cfg,
    };
    this.watchId = null;
    this.last = null;
    this.lastRaw = null;
    this.lastRecv = 0;
    this.lastGoodT = 0;
    this.watchStart = 0;
    this.startedAt = 0;
    this.active = false;
    this.navMode = false;
    this.state = 'idle';
    this.restarts = 0;
    this.unavailable = 0;
    this.coarseSince = 0;
    this.retryT = null;
    this.dog = null;
    this.waiters = [];
    this.prevAny = null;
    this.skew = 0;
    this.skewSet = false;
    this.smoother = new GpsSmoother();
    this._hooked = false;
  }

  get available() { return !!this.geo; }

  /** أثناء الملاحة المراقب أسرع */
  setNavMode(on) { this.navMode = !!on; }

  start() {
    if (!this.available) { this._setState('unsupported'); this.onError?.({ code: 0, message: 'no geolocation' }); return; }
    if (this.active) return;
    this.active = true;
    this.startedAt = this.now();
    this.unavailable = 0;
    if (!this.last || this.last.stale) this._setState('searching');
    this._watch();
    this._quick();
    this._installHooks();
    clearInterval(this.dog);
    this.dog = setInterval(() => this._watchdog(), this.cfg.dogMs);
  }

  stop() {
    this.active = false;
    this._clear();
    clearInterval(this.dog); this.dog = null;
    clearTimeout(this.retryT); this.retryT = null;
  }

  /** إعادة تشغيل فورية (زر «حاول مرة ثانية» أو رجعنا للتطبيق) */
  restart() {
    if (!this.available) return;
    clearTimeout(this.retryT); this.retryT = null;
    if (!this.active) { this.start(); return; }
    this.restarts++;
    this._watch();
    this._quick();
  }

  /** ينتظر قراءة حديثة (مو قديمة محفوظة) — يرجع القراءة أو null */
  waitForFix(timeoutMs = 10000) {
    if (this.last && !this.last.stale && this.now() - this.lastRecv < 10000) return Promise.resolve(this.last);
    return new Promise((resolve) => {
      const w = { resolve, timer: setTimeout(() => { this.waiters = this.waiters.filter((x) => x !== w); resolve(null); }, timeoutMs) };
      this.waiters.push(w);
    });
  }

  // ------------------------------------------------------------------ داخلي
  _watch() {
    this._clear();
    this.watchStart = this.now();
    try {
      this.watchId = this.geo.watchPosition(
        (p) => this._handle(p, 'watch'),
        (e) => this._err(e),
        { enableHighAccuracy: true, maximumAge: 0, timeout: 27000 },
      );
    } catch (e) { this._err({ code: 2, message: String(e?.message || e) }); }
  }

  _clear() {
    if (this.watchId != null) { try { this.geo.clearWatch(this.watchId); } catch { /* ignore */ } }
    this.watchId = null;
  }

  /** قراءة سريعة تقريبية حتى ما ينتظر المستخدم قفل الأقمار */
  _quick() {
    if (this.lastRecv && this.now() - this.lastRecv < 4000) return;
    try {
      this.geo.getCurrentPosition((p) => this._handle(p, 'quick'), () => {}, { enableHighAccuracy: false, maximumAge: 15000, timeout: 12000 });
    } catch { /* ignore */ }
  }

  _handle(p, src) {
    if (!this.active) return;
    const c = p && p.coords;
    if (!c || !Number.isFinite(c.latitude) || !Number.isFinite(c.longitude)) return;
    if (Math.abs(c.latitude) > 90 || Math.abs(c.longitude) > 180 || (c.latitude === 0 && c.longitude === 0)) return;
    const recv = this.now();
    const gpsT = Number.isFinite(p.timestamp) && p.timestamp > 0 ? p.timestamp : recv;
    // نفس القراءة مكررة
    if (this.lastRaw && this.lastRaw.gpsT === gpsT && this.lastRaw.lat === c.latitude && this.lastRaw.lon === c.longitude) return;
    // فرق ساعة الموبايل عن ساعة الـGPS: من قراءات متتالية حية (فرق وقتها = فرق وصولها)
    const prev = this.prevAny;
    this.prevAny = { gpsT, recv };
    if (prev && gpsT > prev.gpsT) {
      const dg = gpsT - prev.gpsT, dr = recv - prev.recv;
      if (dr >= 300 && Math.abs(dg - dr) < 3000) {
        const sk = recv - gpsT;
        this.skew = this.skewSet ? this.skew * 0.7 + sk * 0.3 : sk;
        this.skewSet = true;
      }
    }
    const age = recv - gpsT - (this.skewSet ? this.skew : 0);
    // قراءة قديمة محفوظة (مثل آخر موقع معروف عند إعادة التشغيل)
    const stale = age > 20000;
    if (stale && (age > this.cfg.maxStaleAgeMs || (this.last && !this.last.stale))) return;
    // القراءة التقريبية السريعة ما تغطي على قراءة دقيقة حديثة
    if (src === 'quick' && this.last && !this.last.stale && recv - this.lastRecv < 6000) return;
    let accuracy = Number.isFinite(c.accuracy) && c.accuracy > 0 ? c.accuracy : 50;
    // قراءة سيئة جداً وعدنا قراءة زينة قبل شوية
    if (accuracy > 150 && this.lastGoodT && recv - this.lastGoodT < 10000) return;
    if (stale) accuracy = Math.max(accuracy, 120);
    this.lastRaw = { gpsT, lat: c.latitude, lon: c.longitude };

    const devSpeed = c.speed != null && Number.isFinite(c.speed) && c.speed >= 0 ? c.speed : null;
    const devHeading = c.heading != null && Number.isFinite(c.heading) && c.heading >= 0 ? c.heading % 360 : null;
    const raw = [c.longitude, c.latitude];
    if (stale) this.smoother.reset();
    const pos = this.smoother.process(raw, accuracy, recv, devSpeed, devSpeed != null && devSpeed >= 1 ? devHeading : null);
    const fSpeed = this.smoother.speed;
    const speed = devSpeed != null ? devSpeed : (Number.isFinite(fSpeed) ? fSpeed : null);
    let heading = null;
    if (devHeading != null && (speed ?? 0) >= 1.5) heading = devHeading;
    else if (this.smoother.heading != null) heading = this.smoother.heading;
    else heading = this.last?.heading ?? null;

    const fix = { pos, raw, accuracy, speed, heading, t: recv, gpsT, sim: false, stale, src };
    if (!stale && accuracy <= 60) this.lastGoodT = recv;
    this.last = fix;
    this.lastRecv = recv;
    if (!stale) { this.restarts = 0; this.unavailable = 0; }
    // الموقع التقريبي (صلاحية «تقريبي» بأندرويد 12+): دقة 1 كم أو أسوأ بشكل مستمر
    if (accuracy >= this.cfg.coarseAcc && !stale) { if (!this.coarseSince) this.coarseSince = recv; } else if (!stale) this.coarseSince = 0;
    let state;
    if (stale) state = 'searching';
    else if (this.coarseSince && recv - this.coarseSince >= this.cfg.coarseAfterMs) state = 'coarse';
    else state = accuracy > 60 ? 'weak' : 'ok';
    this._setState(state);
    if (!stale && this.waiters.length) {
      const ws = this.waiters; this.waiters = [];
      for (const w of ws) { clearTimeout(w.timer); w.resolve(fix); }
    }
    this.onFix(fix);
  }

  _err(e) {
    if (!this.active) return;
    const code = e?.code ?? 2;
    if (code === 1) {
      this._clear();
      clearTimeout(this.retryT); this.retryT = null;
      this._setState('denied');
      this.onError?.(e);
      return;
    }
    if (code === 2) this.unavailable++;
    // تطبيق الأندرويد يبلغ صراحة إذا الموقع مطفي بالموبايل
    if (code === 2 && /disabled/i.test(e?.message || '')) {
      this._scheduleRestart();
      this._setState('off');
      this.onError?.(e);
      return;
    }
    // أندرويد يوقف التحديثات بعد «الموقع غير متوفر» — لازم نعيد التشغيل
    if (code === 2 || this.now() - this.lastRecv > this.cfg.staleIdleMs) this._scheduleRestart();
    const noFixFor = this.now() - (this.lastRecv || this.startedAt);
    if (code === 2 && this.unavailable >= 3 && noFixFor >= this.cfg.offAfterMs) this._setState('off');
    else if (!this.last || this.last.stale) this._setState('searching');
    this.onError?.(e);
  }

  _scheduleRestart() {
    if (this.retryT || !this.active) return;
    const delay = Math.min(this.cfg.retryMax, this.cfg.retryMin * Math.pow(2, Math.min(this.restarts, 4)));
    this.retryT = setTimeout(() => {
      this.retryT = null;
      if (!this.active || this.state === 'denied') return;
      this.restarts++;
      this._watch();
      this._quick();
    }, delay);
  }

  _hidden() { return typeof document !== 'undefined' && document.visibilityState === 'hidden'; }

  _watchdog() {
    if (!this.active || this._hidden() || this.state === 'denied') return;
    const now = this.now();
    const since = now - (this.lastRecv || this.startedAt);
    const moving = (this.last?.speed ?? 0) >= 1;
    // الإشارة انقطعت والسيارة ماشية
    if (this.last && !this.last.stale && moving && since >= this.cfg.lostMs && this.state !== 'off') this._setState('lost');
    // ماكو قراءات: نعيد تشغيل المتابعة (أندرويد أحياناً يوقفها بدون أي خطأ)
    const limit = this.navMode && (moving || !this.last) ? this.cfg.staleNavMs : this.cfg.staleIdleMs;
    if (since >= limit && now - this.watchStart >= limit && !this.retryT) {
      this.restarts++;
      this._watch();
      this._quick();
    }
  }

  _installHooks() {
    if (this._hooked) return;
    this._hooked = true;
    // رجعنا للتطبيق (مثلاً من إعدادات الموقع): نعيد المحاولة فوراً حتى لو كانت مرفوضة
    const wake = () => {
      if (!this.active || this._hidden()) return;
      if (this.state === 'denied' || this.state === 'off' || this.now() - this.lastRecv > 3000) this.restart();
    };
    if (typeof document !== 'undefined') document.addEventListener('visibilitychange', wake);
    if (typeof window !== 'undefined') {
      window.addEventListener('online', wake);
      window.addEventListener('pageshow', wake);
    }
    // تغيير الصلاحية من الإعدادات بدون ما يعيد فتح التطبيق
    try {
      navigator.permissions?.query({ name: 'geolocation' }).then((st) => {
        if (st.state === 'denied' && !this.last) this._setState('denied');
        st.onchange = () => {
          if (st.state === 'granted' || st.state === 'prompt') { if (this.state === 'denied') this._setState('searching'); this.restart(); }
          else if (st.state === 'denied') { this._clear(); this._setState('denied'); }
        };
      }).catch(() => {});
    } catch { /* ignore */ }
  }

  _setState(s) {
    if (s === this.state) return;
    this.state = s;
    this.onState?.(s);
  }
}

/**
 * محاكاة قيادة على الطريق — للتجربة بالبيت أو للعرض
 */
export class SimSource {
  constructor(onFix) {
    this.onFix = onFix;
    this.route = null;
    this.along = 0;
    this.speedKmh = 50;
    this.v = 0;
    this.timer = null;
    this.deviating = 0;
    this.pos = null;
    this.heading = 0;
    this.t = Date.now();
    this.tickMs = 1000;   // كل كم ملي ثانية نبعث قراءة
    this.timeScale = 1;   // لتسريع المحاكاة (للاختبار)
    this.vt = Date.now(); // ساعة افتراضية
  }

  setRoute(route, startAlong = 0) {
    this.route = route;
    this.along = startAlong;
    this.deviating = 0;
  }

  /** يكمل من موقعه الحالي على طريق جديد (بعد إعادة الحساب) */
  continueOn(route) {
    this.route = route;
    this.along = 0;
    this.deviating = 0;
  }

  start(speedKmh) {
    if (speedKmh) this.speedKmh = speedKmh;
    this.stop();
    this.t = Date.now();
    this.timer = setInterval(() => this._tick(), this.tickMs);
    this._tick();
  }

  stop() { clearInterval(this.timer); this.timer = null; }

  setSpeed(kmh) { this.speedKmh = clamp(kmh, 10, 180); }

  /** ينحرف عن الطريق (يلف يمين ويكمل) حتى نجرب إعادة الحساب */
  deviate() {
    if (!this.pos) return;
    this.deviating = 40;
    this.heading = (this.heading + 75) % 360;
    if (this.v < 8) this.v = 8;
  }

  _tick() {
    if (!this.route) return;
    const now = Date.now();
    const dt = clamp((now - this.t) / 1000, 0.05, 2) * this.timeScale;
    this.t = now;
    this.vt = Math.max(this.vt + dt * 1000, now);
    const line = this.route.line;
    // نبطّئ قرب المنعطفات مثل السائق الحقيقي
    let target = this.speedKmh / 3.6;
    const next = this.route.steps.find((s) => !s.silent && s.startDist > this.along + 1);
    if (next && next.maneuver.type !== 'arrive') {
      const d = next.startDist - this.along;
      if (d < 120) target = Math.min(target, 6 + d * 0.08);
    } else if (next) {
      const d = next.startDist - this.along;
      if (d < 150) target = Math.min(target, 3 + d * 0.06);
    }
    this.v += clamp(target - this.v, -3.5 * dt, 2.5 * dt);
    if (this.v < 0.5 && this.along >= line.total - 1) this.v = 0;

    if (this.deviating > 0) {
      this.deviating--;
      this.pos = destination(this.pos, this.heading, this.v * dt);
    } else {
      this.along = Math.min(line.total, this.along + this.v * dt);
      const p = pointAt(line, this.along);
      this.pos = p.point;
      this.heading = p.bearing;
      if (this.along >= line.total) this.v = 0;
    }
    // ضوضاء خفيفة مثل GPS حقيقي
    const jitter = destination(this.pos, Math.random() * 360, Math.random() * 2.5);
    this.onFix({ pos: jitter, accuracy: 6, speed: this.v, heading: this.heading, t: this.vt, sim: true });
  }
}
