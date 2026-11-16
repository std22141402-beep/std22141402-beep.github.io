// =====================================================================
//  location.js — مصدر الموقع: GPS حقيقي أو محاكاة قيادة
// =====================================================================
import { haversine, bearing, destination, pointAt, clamp } from './geo.js';

export class GpsSource {
  constructor(onFix, onError) {
    this.onFix = onFix;
    this.onError = onError;
    this.watchId = null;
    this.last = null;
    this.lastGoodT = 0;
  }

  get available() { return typeof navigator !== 'undefined' && 'geolocation' in navigator; }

  start() {
    if (!this.available) { this.onError?.({ code: 0, message: 'no geolocation' }); return; }
    if (this.watchId != null) return;
    try {
      this.watchId = navigator.geolocation.watchPosition(
        (p) => this._handle(p),
        (e) => this.onError?.(e),
        { enableHighAccuracy: true, maximumAge: 1000, timeout: 20000 },
      );
    } catch (e) { this.onError?.(e); }
  }

  stop() {
    if (this.watchId != null) { try { navigator.geolocation.clearWatch(this.watchId); } catch { /* ignore */ } }
    this.watchId = null;
  }

  _handle(p) {
    const c = p.coords;
    if (c == null || !isFinite(c.latitude) || !isFinite(c.longitude)) return;
    const t = p.timestamp || Date.now();
    const pos = [c.longitude, c.latitude];
    const accuracy = isFinite(c.accuracy) ? c.accuracy : 50;
    // نتجاهل القراءات السيئة جداً إذا عدنا قراءة زينة حديثة
    if (accuracy > 150 && this.last && t - this.lastGoodT < 15000) return;
    if (this.last && t <= this.last.t) return;
    let speed = c.speed != null && isFinite(c.speed) && c.speed >= 0 ? c.speed : null;
    let heading = c.heading != null && isFinite(c.heading) ? c.heading : null;
    if (this.last) {
      const d = haversine(this.last.pos, pos);
      const dt = (t - this.last.t) / 1000;
      if (speed == null && dt > 0) speed = d / dt;
      if ((heading == null || (speed ?? 0) < 1.2) && d > Math.max(4, accuracy * 0.4)) heading = bearing(this.last.pos, pos);
      else if (heading == null) heading = this.last.heading;
    }
    if (accuracy <= 50) this.lastGoodT = t;
    const fix = { pos, accuracy, speed, heading, t, sim: false };
    this.last = fix;
    this.onFix(fix);
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
