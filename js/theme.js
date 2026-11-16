// =====================================================================
//  theme.js — ألوان الخريطة (نهاري/ليلي) + ألوان الواجهة
//  يعيد تلوين خريطة OpenFreeMap كاملة حسب ذوقك
// =====================================================================
import { THEME_PRESETS } from './config.js';

export const MAP_PALETTES = {
  day: {
    bg: '#F2F1EC', water: '#A9D6F0', waterLine: '#8EC7EA', park: '#D3EBC6', wood: '#C3E2B3', sand: '#F1E7CF',
    residential: '#ECEAE3', landuseOther: '#E9E5DC', building: '#E0DCD3', building3d: '#E3DED5', aeroway: '#E6E2EE',
    motorway: '#FFC94A', motorwayCasing: '#D9A730', trunk: '#FFE18F', trunkCasing: '#DCC072',
    primary: '#FFFFFF', primaryCasing: '#CFC9BE', minor: '#FFFFFF', minorCasing: '#DAD4CA',
    path: '#E2DCD1', rail: '#C2BCB2', boundary: '#B4A3C6', text: '#3B3934', waterText: '#3274A3', halo: '#FFFFFF',
    rasterBright: 1, rasterSat: 0,
  },
  night: {
    bg: '#171E2B', water: '#0E2A45', waterLine: '#16395B', park: '#1B3026', wood: '#1A2E23', sand: '#2C2A22',
    residential: '#1D2534', landuseOther: '#1E2635', building: '#262F40', building3d: '#2A3446', aeroway: '#252B40',
    motorway: '#BF8F2E', motorwayCasing: '#7D5E22', trunk: '#7A6635', trunkCasing: '#4B4130',
    primary: '#45526A', primaryCasing: '#2B3446', minor: '#38445A', minorCasing: '#252E3F',
    path: '#2F394B', rail: '#3C475B', boundary: '#6A5A8A', text: '#D6DCE6', waterText: '#6EA7D6', halo: '#121823',
    rasterBright: 0.35, rasterSat: -0.6,
  },
};

const has = (s, ...keys) => keys.some((k) => s.includes(k));

function roadClass(id) {
  if (has(id, 'motorway')) return 'motorway';
  if (has(id, 'trunk')) return 'trunk';
  if (has(id, 'primary', 'secondary', 'tertiary')) return 'primary';
  if (has(id, 'rail', 'transit', 'subway', 'tram')) return 'rail';
  if (has(id, 'path', 'pedestrian', 'track', 'steps', 'cycle', 'footway', 'bridleway')) return 'path';
  return 'minor';
}

/** يحسب خصائص الألوان لطبقة واحدة */
export function paintFor(layer, P) {
  const id = (layer.id || '').toLowerCase();
  const sl = (layer['source-layer'] || '').toLowerCase();
  const out = {};
  switch (layer.type) {
    case 'background':
      out['background-color'] = P.bg;
      break;
    case 'raster':
      out['raster-brightness-max'] = P.rasterBright;
      out['raster-saturation'] = P.rasterSat;
      break;
    case 'fill': {
      if (sl === 'water' || has(id, 'water', 'ocean', 'lake', 'river')) out['fill-color'] = P.water;
      else if (sl === 'building' || has(id, 'building')) { out['fill-color'] = P.building; out['fill-outline-color'] = P.building; }
      else if (has(id, 'wood', 'forest', 'tree')) out['fill-color'] = P.wood;
      else if (has(id, 'park', 'grass', 'garden', 'meadow', 'farm', 'scrub', 'wetland', 'cemetery', 'pitch', 'golf')) out['fill-color'] = P.park;
      else if (has(id, 'sand', 'beach', 'desert', 'bare', 'rock')) out['fill-color'] = P.sand;
      else if (has(id, 'residential', 'suburb', 'neighbourhood')) out['fill-color'] = P.residential;
      else if (sl === 'aeroway' || has(id, 'aeroway', 'airport')) out['fill-color'] = P.aeroway;
      else if (sl === 'transportation' || has(id, 'road', 'bridge', 'pier', 'area')) out['fill-color'] = P.minor;
      else if (sl === 'landuse' || sl === 'landcover' || has(id, 'landuse', 'landcover')) out['fill-color'] = P.landuseOther;
      break;
    }
    case 'fill-extrusion':
      out['fill-extrusion-color'] = P.building3d;
      out['fill-extrusion-opacity'] = 0.75;
      break;
    case 'line': {
      if (sl === 'waterway' || has(id, 'waterway', 'river', 'canal', 'stream')) { out['line-color'] = P.waterLine; break; }
      if (sl === 'boundary' || has(id, 'boundary', 'admin')) { out['line-color'] = P.boundary; break; }
      if (sl === 'aeroway' || has(id, 'aeroway', 'runway', 'taxiway')) { out['line-color'] = P.aeroway; break; }
      if (sl === 'transportation' || has(id, 'road', 'highway', 'tunnel', 'bridge', 'street', 'motorway', 'path', 'rail')) {
        const cls = roadClass(id);
        const casing = has(id, 'casing', 'outline');
        if (cls === 'rail') out['line-color'] = P.rail;
        else if (cls === 'path') out['line-color'] = P.path;
        else out['line-color'] = casing ? P[`${cls}Casing`] : P[cls];
        break;
      }
      if (has(id, 'park', 'landuse', 'landcover')) out['line-color'] = P.park;
      break;
    }
    case 'symbol': {
      const lay = layer.layout || {};
      if (lay['text-field'] != null) {
        out['text-color'] = sl === 'water_name' || has(id, 'water', 'ocean', 'sea', 'lake', 'river') ? P.waterText : P.text;
        out['text-halo-color'] = P.halo;
      }
      break;
    }
    default:
  }
  return out;
}

/** هل حقل النص يستعمل الاسم؟ (حتى نستبدله بالعربي) */
function usesName(tf) {
  const s = typeof tf === 'string' ? tf : JSON.stringify(tf);
  return /name/.test(s) && !/housenumber/.test(s);
}

export const AR_NAME = ['coalesce', ['get', 'name:ar'], ['get', 'name'], ['get', 'name_int'], ['get', 'name:latin']];

/** تحويل ستايل الخريطة قبل أول رسم (بدون وميض) */
export function transformStyle(style, P, { buildings3d = true } = {}) {
  const s = JSON.parse(JSON.stringify(style));
  for (const layer of s.layers || []) {
    const paint = paintFor(layer, P);
    if (Object.keys(paint).length) layer.paint = { ...(layer.paint || {}), ...paint };
    if (layer.type === 'symbol' && layer.layout && layer.layout['text-field'] != null && usesName(layer.layout['text-field'])) {
      layer.layout['text-field'] = AR_NAME;
    }
    if (layer.type === 'fill-extrusion') {
      layer.layout = { ...(layer.layout || {}), visibility: buildings3d ? 'visible' : 'none' };
    }
  }
  return s;
}

/** تطبيق الألوان على خريطة شغالة (تبديل نهاري/ليلي بدون إعادة تحميل) */
export function applyPalette(map, P) {
  const layers = map.getStyle()?.layers || [];
  for (const layer of layers) {
    if (layer.id.startsWith('salka-')) continue;
    const paint = paintFor(layer, P);
    for (const [k, v] of Object.entries(paint)) {
      try { map.setPaintProperty(layer.id, k, v); } catch { /* بعض الطبقات ما تدعم الخاصية */ }
    }
  }
}

export function setBuildings3d(map, on) {
  for (const layer of map.getStyle()?.layers || []) {
    if (layer.type === 'fill-extrusion') {
      try { map.setLayoutProperty(layer.id, 'visibility', on ? 'visible' : 'none'); } catch { /* ignore */ }
    }
  }
}

// ---------------------------------------------------------------------
// ألوان الواجهة
// ---------------------------------------------------------------------
export function uiColors(settings) {
  const preset = THEME_PRESETS[settings.theme] || THEME_PRESETS.tigris;
  return {
    accent: settings.accent || preset.accent,
    route: settings.routeColor || preset.route,
    accent2: preset.accent2,
  };
}

function readableInk(hex) {
  const m = /^#?([0-9a-f]{6})$/i.exec(hex || '');
  if (!m) return '#fff';
  const n = parseInt(m[1], 16);
  const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return lum > 0.68 ? '#10151E' : '#fff';
}

export function applyUiTheme(settings, night) {
  const c = uiColors(settings);
  const root = document.documentElement.style;
  root.setProperty('--accent', c.accent);
  root.setProperty('--accent-ink', readableInk(c.accent));
  root.setProperty('--route', c.route);
  root.setProperty('--accent2', c.accent2);
  document.body.classList.toggle('night', !!night);
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', night ? '#161D2A' : c.accent);
  return c;
}

// ---------------------------------------------------------------------
// الوضع الليلي التلقائي حسب ارتفاع الشمس (معادلة فلكية مبسطة)
// ---------------------------------------------------------------------
export function solarElevation(date, lat, lon) {
  const rad = Math.PI / 180;
  const d = date.getTime() / 86400000 - 10957.5;
  const g = (357.529 + 0.98560028 * d) * rad;
  const q = 280.459 + 0.98564736 * d;
  const L = (q + 1.915 * Math.sin(g) + 0.02 * Math.sin(2 * g)) * rad;
  const e = (23.439 - 0.00000036 * d) * rad;
  const ra = Math.atan2(Math.cos(e) * Math.sin(L), Math.cos(L));
  const dec = Math.asin(Math.sin(e) * Math.sin(L));
  const gmst = ((18.697374558 + 24.06570982441908 * d) % 24 + 24) % 24;
  const H = (gmst * 15 + lon) * rad - ra;
  return Math.asin(Math.sin(lat * rad) * Math.sin(dec) + Math.cos(lat * rad) * Math.cos(dec) * Math.cos(H)) / rad;
}

export function isNight(mode, pos, date = new Date()) {
  if (mode === 'night') return true;
  if (mode === 'day') return false;
  const [lon, lat] = pos || [44.37, 33.31];
  return solarElevation(date, lat, lon) < -3;
}
