// =====================================================================
//  search.js — البحث عن الأماكن (Photon + Nominatim احتياط) + "قريب مني"
// =====================================================================
import { GEOCODERS, MAP } from './config.js';
import { haversine, parseLatLon } from './geo.js';

const KIND = {
  restaurant: 'مطعم', fast_food: 'مطعم سريع', cafe: 'مقهى', fuel: 'محطة وقود', hospital: 'مستشفى', clinic: 'عيادة',
  pharmacy: 'صيدلية', school: 'مدرسة', university: 'جامعة', college: 'كلية', place_of_worship: 'جامع', bank: 'مصرف',
  atm: 'صراف آلي', hotel: 'فندق', marketplace: 'سوق', mall: 'مول', supermarket: 'سوبرماركت', parking: 'كراج',
  city: 'مدينة', town: 'بلدة', village: 'قرية', suburb: 'حي', neighbourhood: 'منطقة', quarter: 'منطقة', hamlet: 'قرية',
  residential: 'شارع', primary: 'شارع رئيسي', secondary: 'شارع', tertiary: 'شارع', trunk: 'طريق سريع', motorway: 'طريق سريع',
  park: 'حديقة', stadium: 'ملعب', museum: 'متحف', police: 'مركز شرطة', bus_station: 'كراج نقل', aerodrome: 'مطار',
  car_repair: 'تصليح سيارات', bakery: 'مخبز', clothes: 'ملابس', mobile_phone: 'موبايلات', state: 'محافظة', county: 'قضاء',
};

const cache = new Map();
function cacheGet(k) { const v = cache.get(k); if (v && Date.now() - v.t < 10 * 60 * 1000) return v.data; return null; }
function cacheSet(k, data) { cache.set(k, { t: Date.now(), data }); if (cache.size > 80) cache.delete(cache.keys().next().value); }

async function getJson(url, signal, timeout = 9000) {
  const ctrl = new AbortController();
  const abort = () => ctrl.abort();
  signal?.addEventListener('abort', abort, { once: true });
  const timer = setTimeout(abort, timeout);
  try {
    const res = await fetch(url, { signal: ctrl.signal, headers: { Accept: 'application/json' } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } finally {
    clearTimeout(timer);
    signal?.removeEventListener('abort', abort);
  }
}

function uniqJoin(parts, exclude) {
  const out = [];
  for (const p of parts) {
    const s = (p || '').trim();
    if (s && s !== exclude && !out.includes(s)) out.push(s);
  }
  return out.join('، ');
}

function fromPhoton(f, near) {
  const p = f.properties || {};
  const [lon, lat] = f.geometry?.coordinates || [];
  if (lon == null) return null;
  const street = p.street ? (p.housenumber ? `${p.street} ${p.housenumber}` : p.street) : '';
  const name = p.name || street || p.district || p.city || p.state || '';
  if (!name) return null;
  return {
    id: `${p.osm_type || ''}${p.osm_id || `${lon},${lat}`}`,
    name,
    sub: uniqJoin([KIND[p.osm_value], street, p.district, p.locality, p.city, p.county, p.state !== p.city ? p.state : ''], name),
    pos: [lon, lat],
    kind: p.osm_value || p.type || '',
    extent: p.extent || null,
    dist: near ? haversine(near, [lon, lat]) : null,
  };
}

function fromNominatim(r, near) {
  const lon = parseFloat(r.lon), lat = parseFloat(r.lat);
  const a = r.address || {};
  const name = r.name || (r.display_name || '').split(',')[0];
  return {
    id: `${r.osm_type || ''}${r.osm_id || r.place_id}`,
    name,
    sub: uniqJoin([KIND[r.type], a.road, a.suburb || a.neighbourhood, a.city || a.town || a.village, a.state], name),
    pos: [lon, lat],
    kind: r.type || '',
    dist: near ? haversine(near, [lon, lat]) : null,
  };
}

/**
 * بحث نصي. near = [lon,lat] لترتيب النتائج حسب القرب
 */
export async function searchPlaces(q, { near = null, signal, full = false } = {}) {
  q = (q || '').trim();
  if (!q) return [];
  const coord = parseLatLon(q);
  if (coord) return [{ id: 'coord', name: `${coord[1].toFixed(5)}, ${coord[0].toFixed(5)}`, sub: 'إحداثيات', pos: coord, kind: 'coord', dist: near ? haversine(near, coord) : null }];

  const key = `${q}|${near ? near.map((x) => x.toFixed(2)).join() : ''}|${full}`;
  const hit = cacheGet(key);
  if (hit) return hit;

  const bias = near || MAP.center;
  const bb = MAP.iraqBBox.join(',');
  let results = [];
  try {
    const url = `${GEOCODERS.photon}/api/?q=${encodeURIComponent(q)}&limit=10&lang=default&lat=${bias[1].toFixed(4)}&lon=${bias[0].toFixed(4)}&bbox=${bb}`;
    const data = await getJson(url, signal);
    results = (data.features || []).map((f) => fromPhoton(f, near)).filter(Boolean);
    if (!results.length && q.length >= 3) {
      const data2 = await getJson(`${GEOCODERS.photon}/api/?q=${encodeURIComponent(q)}&limit=8&lang=default&lat=${bias[1].toFixed(4)}&lon=${bias[0].toFixed(4)}`, signal);
      results = (data2.features || []).map((f) => fromPhoton(f, near)).filter(Boolean);
    }
  } catch (e) {
    if (e.name === 'AbortError' && signal?.aborted) throw e;
    results = [];
  }
  // Nominatim احتياطي (بس عند الضغط على بحث، احتراماً لسياسة الاستخدام)
  if (!results.length && full) {
    try {
      const vb = MAP.iraqBBox;
      const url = `${GEOCODERS.nominatim}/search?format=jsonv2&addressdetails=1&limit=8&accept-language=ar&countrycodes=iq&viewbox=${vb[0]},${vb[3]},${vb[2]},${vb[1]}&q=${encodeURIComponent(q)}`;
      const data = await getJson(url, signal);
      results = (data || []).map((r) => fromNominatim(r, near));
    } catch (e) {
      if (e.name === 'AbortError' && signal?.aborted) throw e;
    }
  }
  // إزالة التكرار
  const seen = new Set();
  results = results.filter((r) => {
    const k = `${r.name}|${r.pos[0].toFixed(3)}|${r.pos[1].toFixed(3)}`;
    if (seen.has(k)) return false; seen.add(k); return true;
  });
  cacheSet(key, results);
  return results;
}

/** اسم المكان من الإحداثيات */
export async function reverseGeocode(pos, signal) {
  try {
    const data = await getJson(`${GEOCODERS.photon}/reverse?lon=${pos[0]}&lat=${pos[1]}&lang=default&limit=1`, signal, 7000);
    const r = data.features?.[0] && fromPhoton(data.features[0]);
    if (r) return { name: r.name, sub: r.sub };
  } catch { /* ignore */ }
  return null;
}

/** أماكن قريبة حسب التصنيف (Overpass) */
export async function nearby(category, center, { radius = 4000, signal } = {}) {
  const [lon, lat] = center;
  const q = `[out:json][timeout:20];nwr${category.filter}(around:${radius},${lat.toFixed(5)},${lon.toFixed(5)});out center 40;`;
  const data = await getJson(`${GEOCODERS.overpass}?data=${encodeURIComponent(q)}`, signal, 25000);
  const out = [];
  for (const el of data.elements || []) {
    const p = el.type === 'node' ? [el.lon, el.lat] : el.center ? [el.center.lon, el.center.lat] : null;
    if (!p) continue;
    const t = el.tags || {};
    const name = t['name:ar'] || t.name || t.brand || category.label;
    out.push({
      id: `${el.type}${el.id}`,
      name,
      sub: uniqJoin([t['addr:street'], t['addr:city'] || t['addr:suburb'], t.opening_hours === '24/7' ? 'مفتوح 24 ساعة' : ''], name),
      pos: p,
      kind: category.id,
      dist: haversine(center, p),
    });
  }
  out.sort((a, b) => a.dist - b.dist);
  return out.slice(0, 30);
}
