// =====================================================================
//  سالكة — ملف الإعدادات المركزي
//  كل شي تريد تغيّره (الاسم، الخوادم، أنواع البلاغات، الألوان) موجود هنا.
// =====================================================================

export const APP = {
  name: 'سالكة',
  nameEn: 'Salka',
  version: '1.2.1',
};

export const MAP = {
  // خريطة OpenFreeMap المجانية (بدون مفتاح API)
  styleUrl: 'https://tiles.openfreemap.org/styles/liberty',
  center: [44.3661, 33.3152], // بغداد
  zoom: 11.5,
  // حدود العراق للبحث: [غرب، جنوب، شرق، شمال]
  iraqBBox: [38.79, 29.06, 48.57, 37.38],
  maxPitch: 65,
};

// خوادم حساب الطريق (OSRM). إذا فشل الأول ينتقل للثاني تلقائياً.
export const ROUTERS = [
  { id: 'fossgis', url: 'https://routing.openstreetmap.de/routed-car/route/v1/driving/' },
  { id: 'osrm', url: 'https://router.project-osrm.org/route/v1/driving/' },
];

export const GEOCODERS = {
  photon: 'https://photon.komoot.io',
  nominatim: 'https://nominatim.openstreetmap.org',
  overpass: 'https://overpass-api.de/api/interpreter',
};

// تصنيفات "قريب مني" — أضف تصنيف جديد بسطر (الفلتر بصيغة Overpass)
export const CATEGORIES = [
  { id: 'fuel',     label: 'محطة وقود', icon: 'i-fuel',     filter: '["amenity"="fuel"]' },
  { id: 'food',     label: 'مطاعم',      icon: 'i-food',     filter: '["amenity"~"^(restaurant|fast_food)$"]' },
  { id: 'cafe',     label: 'كافيهات',    icon: 'i-coffee',   filter: '["amenity"="cafe"]' },
  { id: 'hospital', label: 'مستشفى',     icon: 'i-hospital', filter: '["amenity"~"^(hospital|clinic)$"]' },
  { id: 'pharmacy', label: 'صيدلية',     icon: 'i-pharmacy', filter: '["amenity"="pharmacy"]' },
  { id: 'bank',     label: 'مصرف / صراف', icon: 'i-bank',    filter: '["amenity"~"^(bank|atm|bureau_de_change)$"]' },
  { id: 'parking',  label: 'كراج',       icon: 'i-parking',  filter: '["amenity"="parking"]' },
  { id: 'repair',   label: 'تصليح سيارات', icon: 'i-wrench', filter: '["shop"~"^(car_repair|tyres|car_parts)$"]' },
  { id: 'mosque',   label: 'جامع',        icon: 'i-mosque',  filter: '["amenity"="place_of_worship"]["religion"="muslim"]' },
];

export const LIBS = {
  maplibreJs: [
    'https://unpkg.com/maplibre-gl@5.24.0/dist/maplibre-gl.js',
    'https://cdn.jsdelivr.net/npm/maplibre-gl@5.24.0/dist/maplibre-gl.js',
  ],
  maplibreCss: [
    'https://unpkg.com/maplibre-gl@5.24.0/dist/maplibre-gl.css',
    'https://cdn.jsdelivr.net/npm/maplibre-gl@5.24.0/dist/maplibre-gl.css',
  ],
  rtlPlugin: 'https://unpkg.com/@mapbox/mapbox-gl-rtl-text@0.3.0/dist/mapbox-gl-rtl-text.js',
};

// =====================================================================
//  خادم البلاغات المشتركة — يشتغل فوراً بدون إعداد (ntfy.sh مجاني ومفتوح)
//  البلاغات تبقى على الخادم 12 ساعة. إذا تريد قاعدة خاصة بيك، حط رابط
//  Firebase بالإعدادات داخل التطبيق ويتحول لها تلقائياً.
//  غيّر اسم الموضوع (ntfyTopic) إذا تريد شبكة بلاغات منفصلة لتطبيقك.
// =====================================================================
export const SHARED = {
  ntfyBase: 'https://ntfy.sh',
  ntfyTopic: 'salka_iq_road_reports_v1',
  ntfyTrafficTopic: 'salka_iq_traffic_v1',
};

// =====================================================================
//  الازدحام المباشر — من سرعات السواق (مجهولة الهوية: بدون اسم ولا رقم جهاز)
// =====================================================================
export const TRAFFIC = {
  windowMs: 30000,   // كل سيارة ترسل عينة وحدة كل 30 ثانية
  ttlMin: 20,        // العينة تبقى 20 دقيقة
  stillWindows: 3,   // واقف 90 ثانية على الطريق = زحمة
  slowBelow: 0.6,    // أقل من 60% من السرعة الطبيعية = ازدحام
  refSpeed: 11,      // سرعة مرجعية (م/ث) لحساب التأخير
  maxSamples: 4000,
};

// إعدادات الملاحة (بالمتر والثانية)
export const NAV = {
  offRouteMin: 30,          // أقل مسافة عن الطريق تعتبر خروج
  offRouteMax: 75,          // أعلى حد (لما دقة الـGPS ضعيفة)
  offRouteFixes: 2,         // كم قراءة متتالية لازم قبل إعادة الحساب
  wrongWayFixes: 4,         // قراءات بعكس الاتجاه قبل إعادة الحساب
  maxUsableAccuracy: 80,    // قراءات أسوأ من هذا ما تُستخدم لقرار الخروج
  rerouteCooldownMs: 4000,  // أقل فاصل بين إعادتين للحساب
  fasterCheckMs: 5 * 60 * 1000, // فحص طريق أسرع كل 5 دقائق
  fasterMinGainS: 120,      // أقل توفير (ثواني) حتى نقترح طريق جديد
  arriveDist: 30,           // مسافة الوصول
  thenThreshold: 120,       // إذا المناورتين قريبات نقول "ثم"
  reportAheadAlert: 900,    // تنبيه البلاغ قبل هذه المسافة
  reportNearRoute: 40,      // البلاغ يعتبر على الطريق ضمن هذه المسافة
};

// =====================================================================
//  أنواع البلاغات — تكدر تضيف نوع جديد بسطر واحد
//  ttl: مدة بقاء البلاغ بالدقائق | penalty: ثواني تضاف لأي طريق يمر بيه
// =====================================================================
export const REPORT_TYPES = [
  { id: 'traffic',  label: 'ازدحام',        icon: '🚗', color: '#E53935', ttl: 45,  penalty: 420, voice: 'ازدحام' },
  { id: 'jam',      label: 'ازدحام شديد',   icon: '🛑', color: '#B71C1C', ttl: 45,  penalty: 900, voice: 'ازدحام شديد' },
  { id: 'accident', label: 'حادث',          icon: '💥', color: '#FB8C00', ttl: 60,  penalty: 300, voice: 'حادث' },
  { id: 'police',   label: 'شرطة',          icon: '👮', color: '#1E88E5', ttl: 60,  penalty: 0,   voice: 'شرطة' },
  { id: 'hazard',   label: 'خطر بالطريق',   icon: '⚠️', color: '#FDD835', ttl: 120, penalty: 60,  voice: 'خطر على الطريق' },
  { id: 'pothole',  label: 'طسة / حفرة',    icon: '🕳️', color: '#8D6E63', ttl: 1440, penalty: 0,  voice: 'حفرة' },
  { id: 'flood',    label: 'مي أمطار',      icon: '🌊', color: '#039BE5', ttl: 360, penalty: 600, voice: 'تجمع مياه' },
  { id: 'closed',   label: 'طريق مسدود',    icon: '⛔', color: '#212121', ttl: 240, penalty: 3600, voice: 'طريق مغلق' },
  { id: 'camera',   label: 'كاميرا سرعة',   icon: '📷', color: '#7E57C2', ttl: 10080, penalty: 0, voice: 'كاميرا سرعة' },
];

// =====================================================================
//  ثيمات الألوان — غيّر أو أضف ثيمك الخاص
// =====================================================================
export const THEME_PRESETS = {
  royal:  { name: 'ملكي',      accent: '#D4AF37', route: '#3FD0FF', accent2: '#F2A33A',
            grad: 'linear-gradient(135deg,#FBEAB0 0%,#E2B84A 45%,#B08325 100%)',
            banner: 'linear-gradient(135deg,#0D1A31 0%,#1B3157 100%)', bannerIcon: '#F2CF6B' },
  tigris: { name: 'دجلة',      accent: '#1E88E5', route: '#2F80ED', accent2: '#F5B700' },
  palm:   { name: 'نخيل',      accent: '#0E9F6E', route: '#10B981', accent2: '#F59E0B' },
  dates:  { name: 'تمر',       accent: '#B45309', route: '#D97706', accent2: '#0EA5E9' },
  night:  { name: 'ليل بغداد', accent: '#7C3AED', route: '#8B5CF6', accent2: '#22D3EE' },
  rose:   { name: 'جوري',      accent: '#E11D48', route: '#F43F5E', accent2: '#FACC15' },
};

export const DEFAULT_SETTINGS = {
  theme: 'royal',
  accent: null,          // لون مخصص (يتجاوز الثيم)
  routeColor: null,      // لون مسار مخصص
  mode: 'auto',          // auto | day | night
  voice: true,
  dialect: 'iraqi',      // iraqi | msa
  chime: true,
  volume: 1,
  carIcon: 'arrow',      // arrow | car | dot
  tilt: true,            // منظور مائل ثلاثي الأبعاد أثناء الملاحة
  buildings3d: true,
  avoidMotorway: false,
  avoidToll: false,
  speedAlert: 0,         // كم/س، 0 = مطفأ
  autoFaster: true,      // اقتراح طريق أسرع تلقائياً
  shareReports: true,    // مشاركة البلاغات مع باقي المستخدمين
  shareTraffic: true,    // مشاركة سرعتي (مجهولة) لحساب الازدحام
  showTraffic: true,     // عرض الازدحام على الخريطة
  globe: true,           // الكرة الأرضية والسماء
  intro: true,           // افتتاحية الطيران من الفضاء
  firebaseUrl: '',       // رابط قاعدة Firebase خاصة (اختياري — بدونه نستخدم الخادم المجاني)
  batterySaver: false,
  digits: 'latn',        // latn = 123 | arab = ١٢٣
};
