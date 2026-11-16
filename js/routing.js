// =====================================================================
//  routing.js — حساب الطرق عبر OSRM مع خادم احتياطي وإعادة المحاولة
// =====================================================================
import { ROUTERS } from './config.js';
import { buildLine, haversine, bboxOf, normAngle } from './geo.js';
import { isSilent } from './instructions.js';

let preferred = 0;

export class RouteError extends Error {
  constructor(code, message) { super(message || code); this.code = code; }
}

function buildUrl(base, from, to, o) {
  const pts = [from, ...(o.via || []), to];
  const c = pts.map((p) => `${p[0].toFixed(6)},${p[1].toFixed(6)}`).join(';');
  // OSRM يدعم الطرق البديلة بس لما تكون نقطتين
  const alt = o.alternatives && pts.length === 2;
  const q = [
    'overview=full', 'geometries=geojson', 'steps=true', 'annotations=duration',
    `alternatives=${alt ? 'true' : 'false'}`, 'continue_straight=true',
  ];
  if (o.bearing != null && isFinite(o.bearing)) q.push(`bearings=${Math.round(normAngle(o.bearing)) % 360},${o.bearingRange ?? 60}${';'.repeat(pts.length - 1)}`);
  if (o.exclude && o.exclude.length) q.push(`exclude=${o.exclude.join(',')}`);
  return `${base}${c}?${q.join('&')}`;
}

async function getJson(url, signal, timeoutMs) {
  const ctrl = new AbortController();
  const onAbort = () => ctrl.abort();
  if (signal) { if (signal.aborted) ctrl.abort(); else signal.addEventListener('abort', onAbort, { once: true }); }
  const timer = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const res = await fetch(url, { signal: ctrl.signal, headers: { Accept: 'application/json' } });
    let body = null;
    try { body = await res.json(); } catch { /* ignore */ }
    if (!res.ok && !(body && body.code)) throw new RouteError(res.status === 429 ? 'RateLimit' : 'HttpError', `HTTP ${res.status}`);
    return body || {};
  } catch (e) {
    if (signal?.aborted) { const err = new Error('aborted'); err.name = 'AbortError'; throw err; }
    if (e instanceof RouteError) throw e;
    throw new RouteError(e.name === 'AbortError' ? 'Timeout' : 'Network', e.message);
  } finally {
    clearTimeout(timer);
    if (signal) signal.removeEventListener('abort', onAbort);
  }
}

async function requestOnce(base, from, to, o) {
  let opts = { ...o };
  let flags = {};
  for (let attempt = 0; attempt < 3; attempt++) {
    const data = await getJson(buildUrl(base, from, to, opts), o.signal, o.timeoutMs ?? 12000);
    if (data.code === 'Ok' && Array.isArray(data.routes) && data.routes.length) return { data, flags };
    // إذا القيد على الاتجاه منع إيجاد طريق، نعيد بدونه
    if (opts.bearing != null && ['NoSegment', 'NoRoute', 'InvalidValue', 'InvalidOptions', 'InvalidQuery'].includes(data.code)) {
      opts = { ...opts, bearing: null }; flags.bearingIgnored = true; continue;
    }
    if (opts.exclude && opts.exclude.length && ['InvalidValue', 'InvalidOptions', 'InvalidQuery'].includes(data.code)) {
      opts = { ...opts, exclude: [] }; flags.excludeIgnored = true; continue;
    }
    throw new RouteError(data.code || 'Unknown', data.message);
  }
  throw new RouteError('Unknown');
}

/**
 * يجلب الطرق من النقطة from إلى to.
 * @param {[number,number]} from
 * @param {[number,number]} to
 * @param {{alternatives?:boolean, bearing?:number, exclude?:string[], signal?:AbortSignal}} opts
 */
export async function fetchRoutes(from, to, opts = {}) {
  let lastErr = null;
  for (let k = 0; k < ROUTERS.length; k++) {
    const idx = (preferred + k) % ROUTERS.length;
    try {
      const { data, flags } = await requestOnce(ROUTERS[idx].url, from, to, opts);
      preferred = idx;
      const routes = data.routes.map((r, i) => normalizeRoute(r, i)).filter(Boolean);
      if (!routes.length) throw new RouteError('NoRoute');
      routes.flags = flags;
      routes.server = ROUTERS[idx].id;
      return routes;
    } catch (e) {
      if (e.name === 'AbortError') throw e;
      lastErr = e;
      // NoRoute يعني فعلاً ماكو طريق، لكن نجرب الخادم الثاني احتياطاً
    }
  }
  throw lastErr || new RouteError('Unknown');
}

/** يحول استجابة OSRM إلى كائن طريق جاهز للملاحة */
export function normalizeRoute(r, index = 0) {
  const coords = r?.geometry?.coordinates;
  if (!coords || coords.length < 2) return null;
  const line = buildLine(coords);
  const n = coords.length;

  // الخطوات + موقع كل مناورة على الخط
  const steps = [];
  let searchFrom = 0;
  const legs = r.legs || [];
  for (const leg of legs) {
    for (const s of leg.steps || []) {
      const loc = s.maneuver?.location;
      let idx = searchFrom;
      if (loc) {
        let found = -1, bestD = Infinity, bestI = searchFrom;
        for (let j = searchFrom; j < n; j++) {
          const d = haversine(coords[j], loc);
          if (d < 0.75) { found = j; break; }
          if (d < bestD) { bestD = d; bestI = j; }
          // OSRM يعطي نفس الإحداثيات، فما نحتاج نبحث بعيد جداً
          if (j - searchFrom > 4000 && bestD < 5) break;
        }
        idx = found >= 0 ? found : bestI;
      }
      searchFrom = idx;
      const lanes = s.intersections?.[0]?.lanes || null;
      const step = {
        maneuver: s.maneuver || {},
        name: s.name || '',
        ref: s.ref || '',
        destinations: s.destinations || '',
        exits: s.exits || '',
        rotary_name: s.rotary_name || '',
        distance: s.distance || 0,
        duration: s.duration || 0,
        startIdx: idx,
        startDist: line.cum[idx],
        lanes: lanes && lanes.length > 1 ? lanes : null,
      };
      step.silent = isSilent(step);
      steps.push(step);
    }
  }
  if (!steps.length) {
    steps.push({ maneuver: { type: 'depart', location: coords[0], bearing_after: line.brg[0] }, name: '', startIdx: 0, startDist: 0, silent: false, distance: line.total, duration: r.duration || 0 });
    steps.push({ maneuver: { type: 'arrive', location: coords[n - 1] }, name: '', startIdx: n - 1, startDist: line.total, silent: false, distance: 0, duration: 0 });
  }
  // نضمن أن آخر خطوة "وصول" عند نهاية الخط
  const last = steps[steps.length - 1];
  if (last.maneuver.type === 'arrive') { last.startIdx = n - 1; last.startDist = line.total; }
  // المحطات الوسطية: "وصول" مو أخير = محطة، والانطلاق اللي بعدها ما ينحچى
  let wp = 0;
  for (let i = 0; i < steps.length - 1; i++) {
    if (steps[i].maneuver.type === 'arrive') {
      steps[i].waypoint = true;
      steps[i].waypointIndex = wp++;
      if (steps[i + 1] && steps[i + 1].maneuver.type === 'depart') steps[i + 1].silent = true;
    }
  }

  // زمن تراكمي لكل نقطة (لحساب الوقت المتبقي بدقة)
  const durCum = new Float64Array(n);
  const ann = [];
  for (const leg of legs) if (leg.annotation?.duration) ann.push(...leg.annotation.duration);
  if (ann.length === n - 1) {
    for (let i = 1; i < n; i++) durCum[i] = durCum[i - 1] + (ann[i - 1] || 0);
  } else {
    const total = r.duration || line.total / 11;
    for (let i = 1; i < n; i++) durCum[i] = line.total ? (line.cum[i] / line.total) * total : 0;
  }
  const summary = legs.map((l) => l.summary).filter(Boolean).join('، ');

  return {
    id: `r${Date.now().toString(36)}_${index}`,
    index,
    coords,
    line,
    steps,
    durCum,
    distance: r.distance ?? line.total,
    duration: r.duration ?? durCum[n - 1],
    summary,
    waypoints: wp,
    bbox: bboxOf(coords),
  };
}

/** الوقت المتبقي (ثواني) من مسافة معينة على الطريق */
export function remainingDuration(route, along) {
  const { line, durCum } = route;
  const n = line.coords.length;
  if (along <= 0) return durCum[n - 1];
  if (along >= line.total) return 0;
  // بحث ثنائي
  let lo = 0, hi = n - 1;
  while (lo < hi) { const mid = (lo + hi + 1) >> 1; if (line.cum[mid] <= along) lo = mid; else hi = mid - 1; }
  const i = Math.min(lo, n - 2);
  const segLen = line.cum[i + 1] - line.cum[i];
  const t = segLen > 0 ? (along - line.cum[i]) / segLen : 0;
  const done = durCum[i] + (durCum[i + 1] - durCum[i]) * t;
  return Math.max(0, durCum[n - 1] - done);
}
