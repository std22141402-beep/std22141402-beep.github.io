// =====================================================================
//  model.js — نموذج إعلان العقار: الأنواع، الحقول، الأسعار، الفلاتر
//  مبني على شكل الإعلانات العراقية: طابو صرف، واجهة × نزال، مليون دينار…
//  تريد تضيف نوع أو ميزة؟ سطر واحد هنا.
// =====================================================================
import { haversine } from '../geo.js';

export const DUNAM = 2500; // الدونم العراقي = 2500 م²
export const LISTING_DAYS = 90; // الإعلان يبقى 90 يوم (ويتجدد بضغطة)

export const DEALS = {
  sale: { label: 'بيع', verb: 'للبيع', color: '#D4AF37', pill: 'pill-sale', ink: '#10151E' },
  rent: { label: 'إيجار', verb: 'للإيجار', color: '#3FD0FF', pill: 'pill-rent', ink: '#06202B' },
};

// group: residential | apartment | land | agri | building | commercial | farm
// point: يكفي تحديد الموقع (بدون رسم حدود)
export const KINDS = {
  house:     { label: 'بيت',            icon: '🏠', group: 'residential' },
  villa:     { label: 'فيلا',            icon: '🏰', group: 'residential' },
  annex:     { label: 'مشتمل',           icon: '🏘️', group: 'residential' },
  apartment: { label: 'شقة',             icon: '🏢', group: 'apartment', point: true },
  res_land:  { label: 'أرض سكنية',       icon: '📐', group: 'land' },
  agri_land: { label: 'أرض زراعية',      icon: '🌾', group: 'agri' },
  orchard:   { label: 'بستان',           icon: '🌴', group: 'agri' },
  building:  { label: 'عمارة',           icon: '🏬', group: 'building' },
  shop:      { label: 'محل',             icon: '🏪', group: 'commercial', point: true },
  office:    { label: 'مكتب',            icon: '💼', group: 'commercial', point: true },
  warehouse: { label: 'مخزن / معمل',     icon: '🏭', group: 'commercial' },
  farm:      { label: 'مزرعة / استراحة', icon: '🏡', group: 'farm' },
};

export const PRICE_TYPES = {
  total: { label: 'السعر الكلي', short: '' },
  m2:    { label: 'سعر المتر',   short: '/م²' },
  dunam: { label: 'سعر الدونم',  short: '/دونم' },
  day:   { label: 'يومي',        short: '/يوم' },
  month: { label: 'شهري',        short: '/شهر' },
  year:  { label: 'سنوي',        short: '/سنة' },
};

export const DEEDS = {
  sarf:      'طابو صرف (ملك صرف)',
  zirai:     'طابو زراعي',
  aqd:       'عقد زراعي',
  musha:     'حصة مشاعة',
  musataha:  'مساطحة',
  other:     'أخرى',
};

export const FACADES = { n: 'شمالية', ne: 'شمالية شرقية', e: 'شرقية', se: 'جنوبية شرقية', s: 'جنوبية', sw: 'جنوبية غربية', w: 'غربية', nw: 'شمالية غربية' };
export const AGES = { new: 'جديد', '1-5': '1–5 سنوات', '6-10': '6–10 سنوات', '11-20': '11–20 سنة', '20+': 'أكثر من 20 سنة' };
export const LISTERS = { owner: 'المالك', broker: 'وسيط (دلال)', office: 'مكتب عقار' };
export const WATER_SRC = { river: 'نهر', canal: 'جدول / ساقية', well: 'بئر' };

export const FEATURES = {
  annex: ['مشتمل', '🏘️'], garden: ['حديقة', '🌳'], garage: ['كراج', '🚗'], pool: ['مسبح', '🏊'],
  ac: ['تكييف مركزي', '❄️'], solar: ['طاقة شمسية', '☀️'], well: ['بئر ماء', '💧'], gen: ['اشتراك مولدة', '🔌'],
  grid: ['كهرباء وطنية', '⚡'], water: ['ماء إسالة', '🚿'], sewer: ['مجاري', '🕳️'], paved: ['شارع مبلط', '🛣️'],
  net: ['انترنت فايبر', '📶'], elev: ['مصعد', '🛗'], security: ['حراسة وكاميرات', '🛡️'], kitchen: ['مطبخ جاهز', '🍳'],
  roof: ['سطح', '🏙️'], store: ['مخزن', '📦'], bbq: ['منطقة شواء', '🔥'], kids: ['ألعاب أطفال', '🎠'],
  majlis: ['مجلس / ديوان', '🛋️'], river: ['إطلالة نهر', '🌊'], palms: ['نخيل', '🌴'], citrus: ['حمضيات', '🍊'],
  corner: ['ركن (زاوية)', '📐'], mainst: ['على شارع رئيسي', '🚦'], parking: ['موقف سيارات', '🅿️'],
};

const FEATS_BY_GROUP = {
  residential: ['annex', 'garden', 'garage', 'pool', 'ac', 'solar', 'well', 'gen', 'grid', 'water', 'sewer', 'paved', 'net', 'kitchen', 'roof', 'store', 'security', 'corner', 'mainst', 'river'],
  apartment: ['elev', 'ac', 'solar', 'gen', 'grid', 'net', 'kitchen', 'security', 'parking', 'river'],
  land: ['paved', 'water', 'grid', 'sewer', 'corner', 'mainst', 'river'],
  agri: ['well', 'river', 'palms', 'citrus', 'grid', 'paved', 'mainst', 'solar'],
  building: ['elev', 'gen', 'grid', 'paved', 'corner', 'mainst', 'parking', 'security', 'solar'],
  commercial: ['mainst', 'corner', 'gen', 'grid', 'ac', 'net', 'security', 'store', 'parking', 'paved'],
  farm: ['pool', 'bbq', 'kids', 'majlis', 'garden', 'kitchen', 'ac', 'gen', 'security', 'river', 'palms', 'parking'],
};

/** الحقول اللي تظهر حسب النوع والصفقة */
export function fieldsFor(kind, deal) {
  const g = KINDS[kind]?.group || 'residential';
  const f = new Set(['a']);
  if (['residential', 'land', 'building'].includes(g) || kind === 'warehouse') { f.add('fw'); f.add('dp'); f.add('sw'); }
  if (['residential', 'land'].includes(g)) f.add('fa');
  if (['residential', 'building'].includes(g)) f.add('fl');
  if (['apartment', 'commercial'].includes(g) && kind !== 'warehouse') f.add('flno');
  if (['residential', 'apartment', 'farm'].includes(g)) { f.add('br'); f.add('ba'); }
  if (kind === 'office') f.add('ba');
  if (!['land', 'agri'].includes(g)) f.add('ag');
  if (g === 'agri') { f.add('ws'); if (kind === 'orchard') f.add('tr'); }
  if (g === 'farm') f.add('cap');
  if (deal === 'sale') { f.add('de'); f.add('mo'); f.add('pay'); }
  if (deal === 'rent') {
    if (['residential', 'apartment', 'farm'].includes(g) || kind === 'office') f.add('fu');
    if (['residential', 'apartment', 'farm'].includes(g)) f.add('fam');
    f.add('dep');
    if (g === 'farm') f.add('wk');
  }
  return f;
}

export function featuresFor(kind) {
  return FEATS_BY_GROUP[KINDS[kind]?.group || 'residential'] || [];
}

export function priceTypesFor(kind, deal) {
  const g = KINDS[kind]?.group;
  if (deal === 'rent') return g === 'farm' ? ['day', 'month'] : ['month', 'year', 'day'];
  if (g === 'agri') return ['total', 'dunam', 'm2'];
  if (g === 'land') return ['total', 'm2'];
  return ['total', 'm2'];
}

// ---------------------------------------------------------------------
// تنسيق الأسعار والمساحات
// ---------------------------------------------------------------------
const trim = (n, d = 2) => String(Math.round(n * 10 ** d) / 10 ** d);
const group3 = (n) => String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export function fmtIQD(n) {
  if (n >= 1e9) return `${trim(n / 1e9)} مليار`;
  if (n >= 1e6) return `${trim(n / 1e6)} مليون`;
  if (n >= 1e3) return `${trim(n / 1e3, 1)} ألف`;
  return `${group3(n)}`;
}

export function fmtPrice(p, c, pt = 'total', { short = false } = {}) {
  if (!(p > 0)) return 'السعر عند الاتصال';
  const suffix = PRICE_TYPES[pt]?.short || '';
  if (c === 'USD') {
    if (short) {
      const s = p >= 1e6 ? `$${trim(p / 1e6, 1)}M` : p >= 1e4 ? `$${trim(p / 1e3, 0)}K` : `$${group3(p)}`;
      return s + suffix;
    }
    return `$${group3(p)}${suffix}`;
  }
  const s = fmtIQD(p);
  return short ? s + suffix : `${s} دينار${suffix}`;
}

export function fmtArea(a, kind) {
  if (!(a > 0)) return '';
  if (KINDS[kind]?.group === 'agri' && a >= DUNAM) return `${trim(a / DUNAM, 2)} دونم`;
  if (a >= 1e6) return `${trim(a / 1e6, 2)} كم²`;
  return `${group3(a)} م²`;
}

/** السعر الكلي (للمقارنة والترتيب) */
export function totalPrice(l) {
  if (!(l.p > 0)) return 0;
  if (l.pt === 'm2') return l.p * (l.a || 0);
  if (l.pt === 'dunam') return l.p * ((l.a || 0) / DUNAM);
  return l.p;
}

/** سعر المتر (للبيع فقط) */
export function pricePerM2(l) {
  if (l.d !== 'sale' || !(l.a > 0)) return 0;
  if (l.pt === 'm2') return l.p;
  return totalPrice(l) / l.a;
}

export function autoTitle(l) {
  const k = KINDS[l.k]?.label || 'عقار';
  const area = l.a > 0 ? ` ${fmtArea(l.a, l.k)}` : '';
  const place = l.ar ? ` — ${l.ar.split('،')[0]}` : '';
  return `${k}${area} ${DEALS[l.d]?.verb || ''}${place}`.replace(/\s+/g, ' ').trim();
}

// ---------------------------------------------------------------------
// رقم الهاتف العراقي
// ---------------------------------------------------------------------
export function normalizePhone(raw) {
  if (!raw) return null;
  let s = String(raw).replace(/[٠-٩]/g, (d) => '٠١٢٣٤٥٦٧٨٩'.indexOf(d)).replace(/[^\d+]/g, '');
  if (s.startsWith('00')) s = `+${s.slice(2)}`;
  if (s.startsWith('+964')) s = s.slice(4);
  else if (s.startsWith('964')) s = s.slice(3);
  if (s.startsWith('0')) s = s.slice(1);
  if (!/^7[3-9]\d{8}$/.test(s)) return null;
  return `+964${s}`;
}

export function displayPhone(p) {
  const n = normalizePhone(p);
  if (!n) return p || '';
  const s = `0${n.slice(4)}`;
  return `${s.slice(0, 4)} ${s.slice(4, 7)} ${s.slice(7)}`;
}

// ---------------------------------------------------------------------
// التحقق قبل النشر
// ---------------------------------------------------------------------
export function validateListing(l) {
  const errs = [];
  if (!DEALS[l.d]) errs.push('اختار بيع لو إيجار');
  if (!KINDS[l.k]) errs.push('اختار نوع العقار');
  if (!(Number.isFinite(l.x) && Number.isFinite(l.y))) errs.push('حدد موقع العقار على الخريطة');
  if (!KINDS[l.k]?.point && !(l.poly && l.poly.length >= 6)) errs.push('ارسم حدود القطعة على الخريطة');
  if (!(l.p > 0)) errs.push('اكتب السعر');
  if (!['IQD', 'USD'].includes(l.c)) errs.push('اختار العملة');
  if (!PRICE_TYPES[l.pt]) errs.push('اختار نوع السعر');
  if (l.pt === 'm2' && !(l.a > 0)) errs.push('سعر المتر يحتاج المساحة');
  if (!(l.a > 0) && !KINDS[l.k]?.point) errs.push('المساحة مطلوبة');
  if (!normalizePhone(l.ph)) errs.push('رقم الموبايل غير صحيح (مثال: 07701234567)');
  if (l.ds && l.ds.length > 1500) errs.push('الوصف طويل (أقصى حد 1500 حرف)');
  return errs;
}

// ---------------------------------------------------------------------
// الفلاتر والترتيب
// ---------------------------------------------------------------------
export const DEFAULT_FILTER = { d: 'sale', kinds: [], cur: 'IQD', pmin: 0, pmax: 0, amin: 0, amax: 0, brmin: 0, deeds: [], feats: [], ownerOnly: false, sort: 'new' };

export function isActive(l, now = Date.now()) {
  return now - (l.e || l.t || 0) < LISTING_DAYS * 86400000;
}

export function matches(l, f) {
  if (!l || !isActive(l)) return false;
  if (f.d && l.d !== f.d) return false;
  if (f.kinds?.length && !f.kinds.includes(l.k)) return false;
  if (f.pmin > 0 || f.pmax > 0) {
    if (l.c !== f.cur) return false;
    const tp = l.d === 'rent' ? l.p : totalPrice(l);
    if (f.pmin > 0 && tp < f.pmin) return false;
    if (f.pmax > 0 && tp > f.pmax) return false;
  }
  if (f.amin > 0 && !(l.a >= f.amin)) return false;
  if (f.amax > 0 && !(l.a <= f.amax)) return false;
  if (f.brmin > 0 && !(l.br >= f.brmin)) return false;
  if (f.deeds?.length && !f.deeds.includes(l.de)) return false;
  if (f.feats?.length && !f.feats.every((x) => (l.f || []).includes(x))) return false;
  if (f.ownerOnly && l.ow !== 'owner') return false;
  return true;
}

export function sortListings(list, sort = 'new', center = null) {
  const arr = list.slice();
  const price = (l) => (l.d === 'rent' ? l.p : totalPrice(l)) || Infinity;
  switch (sort) {
    case 'cheap': arr.sort((a, b) => (a.c === b.c ? price(a) - price(b) : a.c === 'IQD' ? -1 : 1)); break;
    case 'expensive': arr.sort((a, b) => (a.c === b.c ? price(b) - price(a) : a.c === 'IQD' ? -1 : 1)); break;
    case 'big': arr.sort((a, b) => (b.a || 0) - (a.a || 0)); break;
    case 'near': if (center) arr.sort((a, b) => haversine(center, [a.x, a.y]) - haversine(center, [b.x, b.y])); break;
    default: arr.sort((a, b) => (b.e || b.t || 0) - (a.e || a.t || 0));
  }
  return arr;
}

/** مقارنة سعر المتر بمعدل المنطقة (وسيط العقارات المشابهة ضمن 3 كم) */
export function areaComparison(l, all) {
  const mine = pricePerM2(l);
  if (!(mine > 0)) return null;
  const g = KINDS[l.k]?.group;
  const vals = [];
  for (const o of all) {
    if (o.id === l.id || o.d !== 'sale' || o.c !== l.c || KINDS[o.k]?.group !== g) continue;
    if (haversine([l.x, l.y], [o.x, o.y]) > 3000) continue;
    const v = pricePerM2(o);
    if (v > 0) vals.push(v);
  }
  if (vals.length < 3) return null;
  vals.sort((a, b) => a - b);
  const med = vals.length % 2 ? vals[(vals.length - 1) / 2] : (vals[vals.length / 2 - 1] + vals[vals.length / 2]) / 2;
  return { median: med, diffPct: Math.round(((mine - med) / med) * 100), n: vals.length };
}

/** ملخص خفيف للإعلان (يتحمّل مع الخريطة) */
export const SUMMARY_KEYS = ['id', 'u', 'd', 'k', 'x', 'y', 'g', 'poly', 'a', 'p', 'c', 'pt', 'n', 't', 'e', 'ti', 'ar', 'f', 'de', 'fl', 'flno', 'br', 'ba', 'ag', 'fu', 'fa', 'fw', 'dp', 'sw', 'mo', 'pay', 'dep', 'fam', 'cap', 'wk', 'ws', 'tr', 'ph', 'wa', 'nm', 'ow', 'ds', 'nph'];

export function cleanListing(l) {
  const out = {};
  for (const k of SUMMARY_KEYS) {
    const v = l[k];
    if (v === undefined || v === null || v === '' || (Array.isArray(v) && !v.length)) continue;
    if (typeof v === 'number' && !Number.isFinite(v)) continue;
    out[k] = v;
  }
  return out;
}
