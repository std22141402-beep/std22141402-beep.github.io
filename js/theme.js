// =====================================================================
//  theme.js — ألوان الخريطة (نهاري/ليلي) + ألوان الواجهة
//  يعيد تلوين خريطة OpenFreeMap كاملة حسب ذوقك
// =====================================================================
import { THEME_PRESETS } from './config.js';

export const MAP_PALETTES = {
  // نهاري "لؤلؤي": فاتح وناعم ومريح للعين
  day: {
    bg: '#F6F3EC', water: '#9FD3F2', waterLine: '#86C4EA', park: '#D5ECC9', wood: '#C4E2B3', sand: '#F2E8D0',
    residential: '#EFEBE2', landuseOther: '#EBE5D9', building: '#E4DED2', b3dLow: '#ECE6DA', b3dHigh: '#C9BFAE', aeroway: '#E8E3F0',
    motorway: '#F2C14E', motorwayCasing: '#C99A2E', trunk: '#F8DC8F', trunkCasing: '#D9BC6C',
    primary: '#FFFFFF', primaryCasing: '#CDC5B7', minor: '#FFFFFF', minorCasing: '#DCD5C9',
    path: '#E4DDD1', rail: '#BFB8AC', boundary: '#B19FCB', text: '#2E2C28', waterText: '#2D6E9E', halo: '#FFFFFF',
    rasterBright: 1, rasterSat: 0,
  },
  // ليلي "مخملي": أزرق ليلي عميق وطرق ذهبية
  night: {
    bg: '#070D1A', water: '#0A2341', waterLine: '#0F3157', park: '#0C231C', wood: '#0B2019', sand: '#13120E',
    residential: '#0B1424', landuseOther: '#0C1526', building: '#14213A', b3dLow: '#15223B', b3dHigh: '#2E4A7A', aeroway: '#121A30',
    motorway: '#E2B34A', motorwayCasing: '#6E5418', trunk: '#B98C2E', trunkCasing: '#4A3A16',
    primary: '#2C3E60', primaryCasing: '#121C30', minor: '#1D2A44', minorCasing: '#0F1729',
    path: '#1A263E', rail: '#2A3550', boundary: '#8E7BC4', text: '#D3DCEB', waterText: '#62ABE3', halo: '#070D1A',
    rasterBright: 0.25, rasterSat: -0.7,
  },
};

/** السماء والأفق (تبين لما تميل الخريطة أو بوضع الكرة الأرضية) */
export function skyFor(night) {
  const atm = ['interpolate', ['linear'], ['zoom'], 0, 1, 9, 1, 12, 0];
  return night
    ? { 'sky-color': '#040915', 'horizon-color': '#1E3360', 'fog-color': '#0A1428', 'sky-horizon-blend': 0.7, 'horizon-fog-blend': 0.8, 'fog-ground-blend': 0.9, 'atmosphere-blend': atm }
    : { 'sky-color': '#6EC1F5', 'horizon-color': '#F7EEDB', 'fog-color': '#EAF2F8', 'sky-horizon-blend': 0.5, 'horizon-fog-blend': 0.6, 'fog-ground-blend': 0.85, 'atmosphere-blend': atm };
}

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
      // المباني العالية تاخذ لون أفتح — عمق ثلاثي الأبعاد حقيقي
      out['fill-extrusion-color'] = ['interpolate', ['linear'], ['coalesce', ['get', 'render_height'], ['get', 'height'], 8], 0, P.b3dLow, 80, P.b3dHigh];
      out['fill-extrusion-opacity'] = 0.88;
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
export function transformStyle(style, P, { buildings3d = true, night = false, globe = true } = {}) {
  const s = JSON.parse(JSON.stringify(style));
  s.sky = skyFor(night);
  if (globe) s.projection = { type: 'globe' };
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
export function applyPalette(map, P, night = false) {
  try { map.setSky?.(skyFor(night)); } catch { /* ignore */ }
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
  const preset = THEME_PRESETS[settings.theme] || THEME_PRESETS.royal;
  const custom = !!settings.accent;
  return {
    accent: settings.accent || preset.accent,
    route: settings.routeColor || preset.route,
    accent2: preset.accent2,
    grad: custom ? null : preset.grad || null,
    banner: custom ? null : preset.banner || null,
    bannerIcon: custom ? null : preset.bannerIcon || null,
  };
}

function readableInk(hex) {
  const m = /^#?([0-9a-f]{6})$/i.exec(hex || '');
  if (!m) return '#fff';
  const n = parseInt(m[1], 16);
  const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return lum > 0.6 ? '#10151E' : '#fff';
}

export function applyUiTheme(settings, night) {
  const c = uiColors(settings);
  const root = document.documentElement.style;
  root.setProperty('--accent', c.accent);
  root.setProperty('--accent-ink', readableInk(c.accent));
  root.setProperty('--route', c.route);
  root.setProperty('--accent2', c.accent2);
  root.setProperty('--accent-grad', c.grad || c.accent);
  root.setProperty('--banner', c.banner || c.accent);
  root.setProperty('--banner-ink', c.banner ? '#fff' : readableInk(c.accent));
  root.setProperty('--banner-icon', c.bannerIcon || (c.banner ? '#fff' : readableInk(c.accent)));
  document.body.classList.toggle('night', !!night);
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', night ? '#0A1120' : '#F6F3EC');
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
