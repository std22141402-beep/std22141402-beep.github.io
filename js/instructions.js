// =====================================================================
//  instructions.js — تحويل مناورات OSRM إلى تعليمات عربية (فصحى/عراقية)
//  + أيقونات الاتجاهات + تنسيق المسافات والأوقات
// =====================================================================

const ORD_MSA = ['', 'الأول', 'الثاني', 'الثالث', 'الرابع', 'الخامس', 'السادس', 'السابع', 'الثامن', 'التاسع', 'العاشر'];

const T = {
  msa: {
    right: 'انعطف يميناً', left: 'انعطف يساراً',
    'slight right': 'انعطف قليلاً إلى اليمين', 'slight left': 'انعطف قليلاً إلى اليسار',
    'sharp right': 'انعطف بحدة إلى اليمين', 'sharp left': 'انعطف بحدة إلى اليسار',
    straight: 'استمر مستقيماً', uturn: 'استدر للخلف',
    roundabout: (ord) => `في الدوار، اسلك المخرج ${ord}`,
    roundaboutNoExit: 'ادخل الدوار',
    exitRoundabout: 'اخرج من الدوار',
    mergeR: 'اندمج يميناً', mergeL: 'اندمج يساراً', merge: 'اندمج مع الطريق',
    onRampR: 'اسلك المدخل على اليمين', onRampL: 'اسلك المدخل على اليسار', onRamp: 'اسلك المدخل',
    offRampR: 'اسلك المخرج على اليمين', offRampL: 'اسلك المخرج على اليسار', offRamp: 'اسلك المخرج',
    forkR: 'الزم اليمين عند التفرع', forkL: 'الزم اليسار عند التفرع', fork: 'الزم المسار عند التفرع',
    endOfRoad: 'في نهاية الطريق، ',
    cont: 'استمر', contOn: (r) => `استمر على ${r}`,
    depart: (dir) => `انطلق باتجاه ${dir}`,
    arrive: 'لقد وصلت إلى وجهتك', arriveR: 'وجهتك على اليمين', arriveL: 'وجهتك على اليسار',
    arriveSoon: 'وجهتك',
    to: (r) => ` إلى ${r}`, toward: (r) => ` باتجاه ${r}`,
    then: 'ثم', after: 'بعد',
    m: (n) => `${n} متر`,
    km1: 'كيلومتر واحد', km15: 'كيلومتر ونصف', km2: 'كيلومترين', km25: 'كيلومترين ونصف',
    kmN: (n) => (n <= 10 && Number.isInteger(n) ? `${n} كيلومترات` : `${n} كيلومتر`),
    continueFor: (d) => `استمر على الطريق لمسافة ${d}`,
    rerouted: 'تم تحديث المسار',
    offRoute: 'خرجت عن المسار، يتم إيجاد طريق جديد',
    faster: (m) => `يوجد طريق أسرع يوفر ${m} دقيقة`,
    report: (name, d) => `انتبه، ${name} بعد ${d}`,
    speed: 'انتبه، تجاوزت حد السرعة',
    dirs: ['الشمال', 'الشمال الشرقي', 'الشرق', 'الجنوب الشرقي', 'الجنوب', 'الجنوب الغربي', 'الغرب', 'الشمال الغربي'],
    ord: (n) => ORD_MSA[n] || `رقم ${n}`,
  },
  iraqi: {
    right: 'لِف يمين', left: 'لِف يسار',
    'slight right': 'ميّل لليمين', 'slight left': 'ميّل لليسار',
    'sharp right': 'لِف يمين حادة', 'sharp left': 'لِف يسار حادة',
    straight: 'كمّل سيدا', uturn: 'سوّي يوتيرن',
    roundabout: (ord) => `بالفلكة، اطلع من الفرع ${ord}`,
    roundaboutNoExit: 'ادخل الفلكة',
    exitRoundabout: 'اطلع من الفلكة',
    mergeR: 'ادخل يمين ويه السير', mergeL: 'ادخل يسار ويه السير', merge: 'ادخل ويه السير',
    onRampR: 'خذ المدخل اللي على يمينك', onRampL: 'خذ المدخل اللي على يسارك', onRamp: 'خذ المدخل',
    offRampR: 'اطلع من المخرج اللي على يمينك', offRampL: 'اطلع من المخرج اللي على يسارك', offRamp: 'اطلع من المخرج',
    forkR: 'بالتفرعة خليك يمين', forkL: 'بالتفرعة خليك يسار', fork: 'بالتفرعة انتبه للمسار',
    endOfRoad: 'بنهاية الشارع، ',
    cont: 'كمّل', contOn: (r) => `كمّل على ${r}`,
    depart: (dir) => `اطلع باتجاه ${dir}`,
    arrive: 'وصلت لوجهتك، الحمد لله على السلامة', arriveR: 'وجهتك على يمينك', arriveL: 'وجهتك على يسارك',
    arriveSoon: 'وجهتك',
    to: (r) => ` على ${r}`, toward: (r) => ` باتجاه ${r}`,
    then: 'وبعدين', after: 'بعد',
    m: (n) => `${n} متر`,
    km1: 'كيلو', km15: 'كيلو ونص', km2: 'كيلوين', km25: 'كيلوين ونص',
    kmN: (n) => `${n} كيلو`,
    continueFor: (d) => `كمّل سيدا ${d}`,
    rerouted: 'تم تحديث الطريق',
    offRoute: 'طلعت من الطريق، دا أدورلك طريق جديد',
    faster: (m) => `اكو طريق أسرع يوفرلك ${m} دقايق`,
    report: (name, d) => `انتبه، اكو ${name} بعد ${d}`,
    speed: 'انتبه، سرعتك عالية',
    dirs: ['الشمال', 'الشمال الشرقي', 'الشرق', 'الجنوب الشرقي', 'الجنوب', 'الجنوب الغربي', 'الغرب', 'الشمال الغربي'],
    ord: (n) => ORD_MSA[n] || `رقم ${n}`,
  },
};

export function phrases(dialect) { return T[dialect] || T.msa; }

/** اسم الطريق المناسب للعرض والنطق */
export function roadName(step) {
  if (!step) return '';
  const name = (step.name || '').trim();
  const ref = (step.ref || '').trim();
  if (name && ref && !name.includes(ref)) return `${name} (${ref})`;
  return name || ref || '';
}

const sideOf = (mod) => (mod && mod.includes('left') ? 'L' : mod && mod.includes('right') ? 'R' : '');

/**
 * هل هذه المناورة تحتاج إعلان؟ (تغيير اسم الشارع فقط ما يحتاج)
 */
export function isSilent(step) {
  const { type, modifier } = step.maneuver;
  if (type === 'depart' || type === 'arrive') return false;
  if (type === 'notification' || type === 'exit roundabout' || type === 'exit rotary') return true;
  if ((type === 'new name' || type === 'continue' || type === 'use lane') && (!modifier || modifier === 'straight')) return true;
  return false;
}

/**
 * يولّد نص التعليمة للخطوة.
 * @returns {{text:string, road:string, short:string}}
 */
export function instructionFor(step, dialect = 'msa') {
  const P = phrases(dialect);
  const m = step.maneuver || {};
  const type = m.type;
  const mod = m.modifier || 'straight';
  const road = roadName(step);
  const dest = (step.destinations || '').split(',')[0].trim();
  const side = sideOf(mod);
  const turn = P[mod] || P.straight;
  let text = '';
  let withRoad = true;

  switch (type) {
    case 'depart': {
      const dir = P.dirs[Math.round(((m.bearing_after ?? 0) % 360) / 45) % 8];
      text = P.depart(dir);
      break;
    }
    case 'arrive':
      text = side === 'R' ? P.arriveR : side === 'L' ? P.arriveL : P.arrive;
      withRoad = false;
      break;
    case 'roundabout':
    case 'rotary':
      text = m.exit ? P.roundabout(P.ord(m.exit)) : P.roundaboutNoExit;
      break;
    case 'exit roundabout':
    case 'exit rotary':
      text = P.exitRoundabout;
      break;
    case 'merge':
      text = side === 'R' ? P.mergeR : side === 'L' ? P.mergeL : P.merge;
      break;
    case 'on ramp':
      text = side === 'R' ? P.onRampR : side === 'L' ? P.onRampL : P.onRamp;
      break;
    case 'off ramp':
      text = side === 'R' ? P.offRampR : side === 'L' ? P.offRampL : P.offRamp;
      break;
    case 'fork':
      text = side === 'R' ? P.forkR : side === 'L' ? P.forkL : P.fork;
      break;
    case 'end of road':
      text = P.endOfRoad + turn;
      break;
    case 'new name':
    case 'continue':
    case 'use lane':
    case 'notification':
      if (mod === 'straight') { text = road ? P.contOn(road) : P.cont; withRoad = false; }
      else text = turn;
      break;
    case 'roundabout turn':
    case 'turn':
    default:
      text = turn;
  }

  let spokenTail = '';
  if (withRoad) {
    if ((type === 'off ramp' || type === 'fork') && dest) spokenTail = P.toward(dest);
    else if (road && type !== 'depart') spokenTail = P.to(road);
    else if (road && type === 'depart') spokenTail = P.to(road);
  }
  return { text: text + spokenTail, short: text, road: type === 'arrive' ? '' : (dest && (type === 'off ramp' || type === 'fork') ? dest : road) };
}

/** تقريب المسافة للنطق */
export function roundSpoken(d) {
  if (d < 100) return Math.max(10, Math.round(d / 10) * 10);
  if (d < 500) return Math.round(d / 50) * 50;
  if (d < 1000) return Math.round(d / 100) * 100;
  return Math.round(d / 500) * 500;
}

/** نص المسافة المنطوق: "300 متر" / "كيلومترين" ... */
export function spokenDistance(d, dialect = 'msa') {
  const P = phrases(dialect);
  const r = roundSpoken(d);
  if (r < 1000) return P.m(r);
  const km = r / 1000;
  if (km === 1) return P.km1;
  if (km === 1.5) return P.km15;
  if (km === 2) return P.km2;
  if (km === 2.5) return P.km25;
  return P.kmN(km % 1 === 0 ? km : km.toFixed(1));
}

export function withDistance(d, text, dialect = 'msa') {
  const P = phrases(dialect);
  return `${P.after} ${spokenDistance(d, dialect)}، ${text}`;
}

// ---------------------------------------------------------------------
// تنسيق الأرقام للعرض
// ---------------------------------------------------------------------
let DIGITS = 'latn';
export function setDigits(d) { DIGITS = d === 'arab' ? 'arab' : 'latn'; }
export function num(n) {
  const s = String(n);
  return DIGITS === 'arab' ? s.replace(/\d/g, (x) => '٠١٢٣٤٥٦٧٨٩'[x]) : s;
}

export function fmtDistance(d) {
  if (d == null || !isFinite(d)) return { value: '–', unit: '' };
  if (d < 1000) {
    const v = d < 100 ? Math.max(0, Math.round(d / 5) * 5) : Math.round(d / 10) * 10;
    return { value: num(v), unit: 'م' };
  }
  const km = d / 1000;
  return { value: num(km < 10 ? km.toFixed(1) : Math.round(km)), unit: 'كم' };
}

export function fmtDistanceStr(d) {
  const f = fmtDistance(d);
  return `${f.value} ${f.unit}`;
}

export function fmtDuration(sec) {
  if (sec == null || !isFinite(sec)) return '–';
  const m = Math.max(1, Math.round(sec / 60));
  if (m < 60) return `${num(m)} د`;
  const h = Math.floor(m / 60), mm = m % 60;
  return mm ? `${num(h)} س ${num(mm)} د` : `${num(h)} س`;
}

export function fmtClock(date) {
  try {
    return new Intl.DateTimeFormat(DIGITS === 'arab' ? 'ar-IQ' : 'ar-IQ-u-nu-latn', { hour: 'numeric', minute: '2-digit' }).format(date);
  } catch {
    const h = date.getHours(), m = String(date.getMinutes()).padStart(2, '0');
    return num(`${((h + 11) % 12) + 1}:${m}`);
  }
}

// ---------------------------------------------------------------------
// أيقونات المناورات (SVG)
// ---------------------------------------------------------------------
const HEAD = (x, y, ang) => {
  // رأس سهم عند (x,y) باتجاه الزاوية ang (درجات، 0=أعلى)
  const r = (a) => (a * Math.PI) / 180;
  const L = 13, W = 11;
  const bx = x - Math.sin(r(ang)) * L, by = y + Math.cos(r(ang)) * L;
  const px = Math.cos(r(ang)) * W, py = Math.sin(r(ang)) * W;
  return `<path d="M${x.toFixed(1)} ${y.toFixed(1)} L${(bx + px).toFixed(1)} ${(by + py).toFixed(1)} L${(bx - px).toFixed(1)} ${(by - py).toFixed(1)} Z" fill="currentColor"/>`;
};
const STROKE = 'fill="none" stroke="currentColor" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"';

function shapeRight(kind) {
  switch (kind) {
    case 'straight': return `<path d="M32 58 V20" ${STROKE}/>${HEAD(32, 8, 0)}`;
    case 'right': return `<path d="M24 58 V36 Q24 26 34 26 H44" ${STROKE}/>${HEAD(56, 26, 90)}`;
    case 'slight right': return `<path d="M26 58 V40 L42 22" ${STROKE}/>${HEAD(50, 13, 42)}`;
    case 'sharp right': return `<path d="M22 58 V24 Q22 14 30 20 L40 32" ${STROKE}/>${HEAD(48, 42, 140)}`;
    case 'uturn': return `<path d="M42 58 V28 Q42 14 30 14 Q18 14 18 28 V36" ${STROKE}/>${HEAD(18, 50, 180)}`;
    default: return `<path d="M32 58 V20" ${STROKE}/>${HEAD(32, 8, 0)}`;
  }
}

const wrap = (inner, mirror) => `<svg viewBox="0 0 64 64" width="100%" height="100%" aria-hidden="true">${mirror ? `<g transform="translate(64,0) scale(-1,1)">${inner}</g>` : inner}</svg>`;

export function maneuverIcon(step) {
  const m = step?.maneuver || {};
  const type = m.type, mod = m.modifier || 'straight';
  const isLeft = mod.includes('left');
  const base = mod.replace('left', 'right');
  if (type === 'arrive') {
    return wrap(`<path d="M32 60 C32 60 14 40 14 27 A18 18 0 0 1 50 27 C50 40 32 60 32 60 Z" fill="currentColor"/><circle cx="32" cy="27" r="7" fill="var(--banner-bg,#1E88E5)"/>`);
  }
  if (type === 'depart') {
    return wrap(`<circle cx="32" cy="50" r="8" fill="currentColor"/><path d="M32 40 V18" ${STROKE}/>${HEAD(32, 8, 0)}`);
  }
  if (type === 'roundabout' || type === 'rotary' || type === 'roundabout turn') {
    const angles = { straight: 0, 'slight right': 45, right: 90, 'sharp right': 135, uturn: 180, 'slight left': -45, left: -90, 'sharp left': -135 };
    const a = angles[mod] ?? 0;
    const r = (x) => (x * Math.PI) / 180;
    const cx = 32, cy = 30, R0 = 11;
    const ex = cx + Math.sin(r(a)) * R0, ey = cy - Math.cos(r(a)) * R0;
    const ox = cx + Math.sin(r(a)) * 27, oy = cy - Math.cos(r(a)) * 27;
    const exitTxt = m.exit ? `<text x="32" y="35" text-anchor="middle" font-size="14" font-weight="700" fill="currentColor">${num(m.exit)}</text>` : '';
    return wrap(`<circle cx="${cx}" cy="${cy}" r="${R0}" fill="none" stroke="currentColor" stroke-width="5" opacity="0.55"/><path d="M32 60 V${cy + R0}" ${STROKE}/><path d="M${ex.toFixed(1)} ${ey.toFixed(1)} L${(cx + Math.sin(r(a)) * 16).toFixed(1)} ${(cy - Math.cos(r(a)) * 16).toFixed(1)}" ${STROKE}/>${HEAD(ox, oy, a)}${exitTxt}`);
  }
  if (type === 'merge') {
    return wrap(`<path d="M18 58 Q18 40 32 30 V20" ${STROKE}/><path d="M46 58 Q46 44 36 36" fill="none" stroke="currentColor" stroke-width="5" opacity=".5" stroke-linecap="round"/>${HEAD(32, 8, 0)}`, isLeft);
  }
  if (type === 'fork' || type === 'off ramp' || type === 'on ramp') {
    return wrap(`<path d="M28 58 V40 Q28 32 22 24 L18 18" fill="none" stroke="currentColor" stroke-width="5" opacity=".45" stroke-linecap="round"/><path d="M28 58 V40 Q28 30 38 22" ${STROKE}/>${HEAD(46, 14, 45)}`, isLeft);
  }
  const known = ['right', 'slight right', 'sharp right', 'uturn', 'straight'];
  return wrap(shapeRight(known.includes(base) ? base : 'straight'), isLeft);
}

/** أيقونة حارة (مسار) صغيرة */
export function laneIcon(indications, active) {
  const ind = (indications && indications[0]) || 'straight';
  const kind = ind === 'none' ? 'straight' : ind;
  const isLeft = kind.includes('left');
  const base = kind.replace('left', 'right');
  const allowed = ['straight', 'right', 'slight right', 'sharp right', 'uturn'];
  return `<span class="lane ${active ? 'on' : ''}">${wrap(shapeRight(allowed.includes(base) ? base : 'straight'), isLeft)}</span>`;
}
