// =====================================================================
//  navengine.js — محرك الملاحة (منطق صافي بدون واجهة، قابل للاختبار)
//  يتابع موقعك على الطريق، يكتشف الخروج عن المسار، ويقرر متى يحچي.
// =====================================================================
import { NAV } from './config.js';
import { snapToLine, angleDiff, haversine, clamp } from './geo.js';
import { remainingDuration } from './routing.js';
import { instructionFor, withDistance, phrases, spokenDistance } from './instructions.js';

export class NavEngine {
  /**
   * @param {object} route  طريق من normalizeRoute
   * @param {{dialect?:string, rerouted?:boolean}} opts
   */
  constructor(route, opts = {}) {
    this.route = route;
    this.line = route.line;
    this.steps = route.steps;
    this.dialect = opts.dialect || 'msa';
    this.along = 0;
    this.stepIdx = 0;
    this.offCount = 0;
    this.offSince = 0;
    this.wrongCount = 0;
    this.joined = false;
    this.initialDist = null;
    this.spoken = new Map();
    this.continueSaid = new Set();
    this.arrived = false;
    this.speed = 0;
    this.lastNextIdx = -1;
    this.rerouted = !!opts.rerouted;
    this.lastState = null;
  }

  setDialect(d) { this.dialect = d; }

  nextNonSilent(from) {
    for (let k = from + 1; k < this.steps.length; k++) if (!this.steps[k].silent) return k;
    return this.steps.length - 1;
  }

  prevNonSilent(from) {
    for (let k = from; k >= 0; k--) if (!this.steps[k].silent) return k;
    return 0;
  }

  /** نص التعليمة لمناورة معينة (مع "ثم" إذا اللي بعدها قريبة) */
  instruction(k) {
    const step = this.steps[k];
    const ins = instructionFor(step, this.dialect);
    if (step.maneuver.type === 'arrive') {
      const P = phrases(this.dialect);
      const mod = step.maneuver.modifier || '';
      ins.soon = mod.includes('right') ? P.arriveR : mod.includes('left') ? P.arriveL : P.arriveSoon;
    }
    return ins;
  }

  /**
   * تحديث بقراءة GPS جديدة
   * @param {{pos:[number,number], heading?:number|null, speed?:number|null, accuracy?:number|null, t:number}} fix
   */
  update(fix) {
    const acc = fix.accuracy != null && isFinite(fix.accuracy) ? fix.accuracy : 15;
    const rawSpeed = fix.speed != null && isFinite(fix.speed) && fix.speed >= 0 ? fix.speed : null;
    if (rawSpeed != null) this.speed = this.speed * 0.4 + rawSpeed * 0.6;
    const heading = fix.heading != null && isFinite(fix.heading) ? fix.heading : null;
    const tol = clamp(acc * 1.5, NAV.offRouteMin, NAV.offRouteMax);
    const reliable = acc <= NAV.maxUsableAccuracy;

    const snap = snapToLine(this.line, fix.pos, {
      heading, speed: this.speed,
      fromAlong: this.joined ? this.along : null,
      windowBack: 150,
      windowAhead: Math.max(1200, this.speed * 40),
    });

    let needReroute = false;
    let offRoute = false;
    let reason = null;

    if (!this.joined) {
      if (snap.dist <= tol) {
        this.joined = true;
        this.along = snap.along;
      } else {
        if (this.initialDist == null) this.initialDist = snap.dist;
        // المستخدم يبتعد عن الطريق بدل ما يقترب منه
        if (reliable && snap.dist > this.initialDist + 150 && snap.dist > 200) { needReroute = true; reason = 'away'; }
        if (snap.dist < tol * 2) this.along = snap.along;
      }
    } else {
      if (snap.dist > tol) {
        offRoute = true;
        if (reliable) {
          if (this.offCount === 0) this.offSince = fix.t;
          this.offCount++;
        }
      } else {
        this.offCount = 0;
        // نتجاهل الرجوع البسيط للخلف (ارتجاج الـGPS)
        if (snap.along >= this.along || this.along - snap.along > 30) this.along = snap.along;
      }
      // سير بعكس اتجاه الطريق
      if (heading != null && this.speed > 4 && snap.dist <= tol * 1.5 && Math.abs(angleDiff(heading, snap.bearing)) > 135) this.wrongCount++;
      else if (this.wrongCount > 0) this.wrongCount = 0;

      if (this.offCount >= NAV.offRouteFixes && fix.t - this.offSince >= 1500) { needReroute = true; reason = 'off'; }
      if (this.wrongCount >= NAV.wrongWayFixes) { needReroute = true; reason = 'wrongway'; }
    }

    // الخطوة الحالية
    while (this.stepIdx < this.steps.length - 1 && this.steps[this.stepIdx + 1].startDist <= this.along + 0.5) this.stepIdx++;
    const nextIdx = this.nextNonSilent(this.stepIdx);
    const next = this.steps[nextIdx];
    const distToNext = Math.max(0, next.startDist - this.along);
    let thenIdx = -1;
    if (next.maneuver.type !== 'arrive') {
      const t = this.nextNonSilent(nextIdx);
      if (t !== nextIdx && this.steps[t].startDist - next.startDist < NAV.thenThreshold) thenIdx = t;
    }

    const remainingDist = Math.max(0, this.line.total - this.along);
    const remainingTime = remainingDuration(this.route, this.along);

    // الوصول
    const end = this.line.coords[this.line.coords.length - 1];
    if (!this.arrived && this.joined && !offRoute &&
        (remainingDist <= NAV.arriveDist || (remainingDist < 80 && haversine(fix.pos, end) <= NAV.arriveDist + acc * 0.5))) {
      this.arrived = true;
    }

    const announcements = [];
    if (this.joined && !offRoute && !this.arrived) this._announce(nextIdx, thenIdx, distToNext, announcements);

    const state = {
      snapped: snap.point,
      snapDist: snap.dist,
      along: this.along,
      bearing: snap.bearing,
      joined: this.joined,
      offRoute,
      needReroute,
      reason,
      stepIdx: this.stepIdx,
      nextIdx,
      thenIdx,
      distToNext,
      remainingDist,
      remainingTime,
      speed: this.speed,
      arrived: this.arrived,
      announcements,
      tolerance: tol,
    };
    this.lastState = state;
    return state;
  }

  _announce(nextIdx, thenIdx, dist, out) {
    const step = this.steps[nextIdx];
    const isArrive = step.maneuver.type === 'arrive';
    const v = Math.max(this.speed, 5);
    const prevIdx = this.prevNonSilent(this.stepIdx);
    const segLen = step.startDist - this.steps[prevIdx].startDist;
    let done = this.spoken.get(nextIdx);
    if (!done) { done = new Set(); this.spoken.set(nextIdx, done); }

    // "كمّل سيدا X" بعد إكمال مناورة والطريق طويل قدامك
    if (this.lastNextIdx !== -1 && this.lastNextIdx !== nextIdx && dist > 2500 && !this.continueSaid.has(nextIdx) && !done.size) {
      this.continueSaid.add(nextIdx);
      out.push({ kind: 'continue', text: phrases(this.dialect).continueFor(spokenDistance(dist, this.dialect)), priority: 1 });
    }
    this.lastNextIdx = nextIdx;

    const ins = this.instruction(nextIdx);
    let thenTxt = '';
    if (thenIdx >= 0) thenTxt = `، ${phrases(this.dialect).then} ${this.instruction(thenIdx).short}`;

    const nowD = Math.max(45, v * 5.5);
    const midHi = Math.max(250, v * 16), midLo = Math.max(60, v * 6.5);
    const farHi = Math.max(1000, v * 40), farLo = Math.max(500, v * 22);

    if (dist <= nowD) {
      if (!done.has('now') && !isArrive) {
        ['now', 'mid', 'far'].forEach((b) => done.add(b));
        out.push({ kind: 'maneuver', band: 'now', text: ins.text + thenTxt, priority: 3, stepIdx: nextIdx });
      }
      return;
    }
    if (dist <= midHi && dist > midLo && segLen > 250) {
      if (!done.has('mid')) {
        done.add('mid'); done.add('far');
        const txt = isArrive ? ins.soon : ins.text + thenTxt;
        out.push({ kind: 'maneuver', band: 'mid', text: withDistance(dist, txt, this.dialect), priority: 2, stepIdx: nextIdx });
      }
      return;
    }
    if (dist <= farHi && dist > farLo && segLen > 1300) {
      if (!done.has('far')) {
        done.add('far');
        const txt = isArrive ? ins.soon : ins.text;
        out.push({ kind: 'maneuver', band: 'far', text: withDistance(dist, txt, this.dialect), priority: 1, stepIdx: nextIdx });
      }
    }
  }
}
