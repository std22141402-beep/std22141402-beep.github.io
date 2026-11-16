// مولّد استجابات OSRM وهمية للاختبار (نفس بنية الخادم الحقيقي)
import { haversine, bearing, angleDiff, destination } from '../js/geo.js';

function modifierFor(turn) {
  const a = Math.abs(turn);
  const side = turn > 0 ? 'right' : 'left';
  if (a < 20) return 'straight';
  if (a < 60) return `slight ${side}`;
  if (a < 140) return side;
  if (a < 170) return `sharp ${side}`;
  return 'uturn';
}

/**
 * @param {Array<[number,number]>} vertices رؤوس الطريق
 * @param {string[]} names اسم كل ضلع
 */
export function mockRoute(vertices, names = [], speed = 12) {
  const coords = [];
  const segStart = [];
  for (let i = 0; i < vertices.length - 1; i++) {
    const a = vertices[i], b = vertices[i + 1];
    const d = haversine(a, b);
    const n = Math.max(1, Math.ceil(d / 15));
    const brg = bearing(a, b);
    segStart.push(coords.length);
    for (let k = 0; k < n; k++) coords.push(k === 0 ? a : destination(a, brg, (d * k) / n));
  }
  segStart.push(coords.length);
  coords.push(vertices[vertices.length - 1]);

  const ann = [];
  for (let i = 1; i < coords.length; i++) ann.push(haversine(coords[i - 1], coords[i]) / speed);
  const steps = [];
  for (let i = 0; i < vertices.length; i++) {
    const idx = segStart[i];
    const endIdx = i < vertices.length - 1 ? segStart[i + 1] : idx;
    const geom = coords.slice(idx, endIdx + 1);
    let dist = 0; for (let k = 1; k < geom.length; k++) dist += haversine(geom[k - 1], geom[k]);
    let maneuver;
    if (i === 0) maneuver = { type: 'depart', location: vertices[0], bearing_before: 0, bearing_after: Math.round(bearing(vertices[0], vertices[1])) };
    else if (i === vertices.length - 1) maneuver = { type: 'arrive', location: vertices[i], modifier: 'right', bearing_before: 0, bearing_after: 0 };
    else {
      const turn = angleDiff(bearing(vertices[i - 1], vertices[i]), bearing(vertices[i], vertices[i + 1]));
      const mod = modifierFor(turn);
      maneuver = { type: mod === 'straight' ? 'new name' : 'turn', modifier: mod, location: vertices[i], bearing_before: 0, bearing_after: 0 };
    }
    steps.push({
      maneuver, name: names[i] || '', distance: dist, duration: dist / speed,
      geometry: { type: 'LineString', coordinates: geom.length > 1 ? geom : [geom[0], geom[0]] },
      intersections: [{ location: maneuver.location, lanes: i === 1 ? [{ indications: ['left'], valid: false }, { indications: ['straight'], valid: false }, { indications: ['right'], valid: true }] : undefined }],
      mode: 'driving',
    });
  }
  let total = 0; for (const a of ann) total += a * speed;
  return {
    geometry: { type: 'LineString', coordinates: coords },
    distance: total, duration: total / speed, weight: total / speed,
    legs: [{ steps, summary: names.filter(Boolean).slice(0, 2).join(', '), distance: total, duration: total / speed, annotation: { duration: ann } }],
  };
}

/** طريق على شكل حرف L/Z من نقطة لنقطة (يستخدمه الخادم الوهمي) */
export function mockOsrmResponse(from, to, alternatives) {
  const mid = [(from[0] + to[0]) / 2, from[1]];
  const v1 = [from, mid, [mid[0], to[1]], to];
  const routes = [mockRoute(v1, ['شارع الربيعي', 'شارع فلسطين', 'شارع 14 رمضان', ''])];
  if (alternatives) {
    const v2 = [from, [from[0], to[1]], to];
    routes.push(mockRoute(v2, ['طريق محمد القاسم', 'شارع الصناعة', ''], 10));
  }
  return { code: 'Ok', routes, waypoints: [] };
}
