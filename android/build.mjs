// =====================================================================
//  بناء تطبيق الأندرويد (Trusted Web Activity) على سيرفرات GitHub
//  1) PWABuilder (نفس خدمة pwabuilder.com)  2) احتياطي: Bubblewrap مباشرة
//  المخرجات:
//    _out/public  → salka.apk + assetlinks.json + build-info.json (عامة)
//    _out/secure.bin + secure.json → مفتاح التوقيع وملف AAB (مشفرة بمفتاح عام)
// =====================================================================
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { execFileSync, spawnSync } from 'node:child_process';
import { createRequire } from 'node:module';

const ROOT = process.cwd();
const OUT = path.join(ROOT, '_out');
const PUB = path.join(OUT, 'public');
const SEC = path.join(OUT, 'secure');
const WORK = path.join(ROOT, '_work');
for (const d of [PUB, SEC, WORK]) fs.mkdirSync(d, { recursive: true });

const cfg = JSON.parse(fs.readFileSync('android/config.json', 'utf8'));
const req = JSON.parse(fs.readFileSync('android/request.json', 'utf8'));
// مفتاح موجود (من أسرار GitHub) — ضروري لأي تحديث للتطبيق المنشور
const EXIST = process.env.SALKA_KEYSTORE_B64 ? {
  b64: process.env.SALKA_KEYSTORE_B64.replace(/^data:[^,]*,/, '').replace(/\s+/g, ''),
  storePass: process.env.SALKA_KEYSTORE_PASS || '',
  keyPass: process.env.SALKA_KEY_PASS || process.env.SALKA_KEYSTORE_PASS || '',
  alias: process.env.SALKA_KEY_ALIAS || 'salka',
} : null;
const PASS = EXIST ? EXIST.storePass : crypto.randomBytes(18).toString('base64url');
console.log(`::add-mask::${PASS}`);
const PUBLISHED = fs.existsSync('download/build-info.json') ? JSON.parse(fs.readFileSync('download/build-info.json', 'utf8')) : null;

const lines = [];
const SECRETS = [PASS];
function addSecret(v) { if (v && v.length >= 4 && !SECRETS.includes(v)) { SECRETS.push(v); console.log(`::add-mask::${v}`); } }
const clean = (s) => SECRETS.reduce((t, x) => t.split(x).join('***'), String(s));
function log(...a) { const s = clean(a.join(' ')); console.log(s); lines.push(s); }
function saveLog(status) {
  fs.writeFileSync(path.join(OUT, 'build-log.txt'), lines.join('\n') + '\n');
  fs.writeFileSync(path.join(OUT, 'status.json'), JSON.stringify({ status, at: new Date().toISOString(), run: process.env.GITHUB_RUN_ID || null }, null, 2));
}
function run(cmd, args, opts = {}) {
  try {
    const out = execFileSync(cmd, args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], maxBuffer: 64 << 20, ...opts });
    return out;
  } catch (e) {
    const msg = `${cmd} ${args.map(clean).join(' ')}\n${clean(e.stdout || '').slice(-4000)}\n${clean(e.stderr || '').slice(-4000)}`;
    throw new Error(msg);
  }
}
/** يشغل أمر طويل ويحفظ كل مخرجاته بملف، وإذا فشل يطلع سبب الفشل */
function runLogged(cmd, args, logFile, opts = {}) {
  const r = spawnSync(cmd, args, { encoding: 'utf8', maxBuffer: 256 << 20, ...opts });
  const all = clean(`${r.stdout || ''}\n${r.stderr || ''}`);
  fs.writeFileSync(logFile, all);
  if (r.status !== 0) {
    const i = all.indexOf('What went wrong');
    const why = i >= 0 ? all.slice(i, i + 3000) : all.split('\n').filter((l) => /error|FAILED|Exception/i.test(l)).slice(0, 40).join('\n');
    throw new Error(`${path.basename(cmd)} فشل (${r.status ?? r.signal}):\n${why}`);
  }
  return all;
}
const abs = (p) => (p.startsWith('http') ? p : cfg.origin + p);
function walk(dir) {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(p)); else out.push(p);
  }
  return out;
}

// --------------------------------------------------------------- أدوات أندرويد
function buildTools() {
  const home = process.env.ANDROID_HOME || process.env.ANDROID_SDK_ROOT;
  if (!home) throw new Error('ANDROID_HOME غير موجود');
  const bt = path.join(home, 'build-tools');
  const vers = fs.readdirSync(bt).filter((v) => /^\d+\.\d+\.\d+$/.test(v)).sort((a, b) => {
    const pa = a.split('.').map(Number), pb = b.split('.').map(Number);
    for (let i = 0; i < 3; i++) if (pa[i] !== pb[i]) return pa[i] - pb[i];
    return 0;
  });
  const dir = path.join(bt, vers[vers.length - 1]);
  log('build-tools:', vers[vers.length - 1]);
  return { apksigner: path.join(dir, 'apksigner'), zipalign: path.join(dir, 'zipalign'), aapt2: path.join(dir, 'aapt2'), aapt: path.join(dir, 'aapt') };
}

function certSha256(keystore, storePass = PASS, alias = cfg.keyAlias) {
  const out = run('keytool', ['-list', '-v', '-keystore', keystore, '-storepass', storePass, '-alias', alias]);
  const m = /SHA256:\s*([0-9A-F:]{95})/i.exec(out);
  if (!m) throw new Error('ما لكيت بصمة SHA256 بالمفتاح');
  return m[1].toUpperCase();
}

function newKeystore(file) {
  run('keytool', ['-genkeypair', '-v', '-keystore', file, '-storetype', 'PKCS12', '-alias', cfg.keyAlias, '-keyalg', 'RSA', '-keysize', '4096',
    '-validity', '12000', '-storepass', PASS, '-keypass', PASS, '-dname', cfg.certDname]);
}

// --------------------------------------------------------------- 1) PWABuilder
/** الاختصارات بصيغة المانيفست (مثل ما يرسلها موقع PWABuilder) */
function manifestShortcuts() {
  return cfg.shortcuts.map((s) => ({ name: s.name, short_name: s.shortName, url: abs(s.url), icons: [{ src: abs(s.icon), sizes: '192x192', type: 'image/png', purpose: 'any' }] }));
}
/** الاختصارات بصيغة Bubblewrap */
function bubblewrapShortcuts() {
  return cfg.shortcuts.map((s) => ({ name: s.name, shortName: s.shortName, url: abs(s.url), chosenIconUrl: abs(s.icon) }));
}

const PWAB = 'https://pwabuilder-cloudapk.azurewebsites.net';

function pwaBuilderBody(withShortcuts) {
  // نفس الحقول اللي يرسلها موقع pwabuilder.com (createAndroidPackageOptionsFromManifest)
  return {
    analysisId: null,
    appVersion: req.versionName,
    appVersionCode: req.versionCode,
    backgroundColor: cfg.backgroundColor,
    display: 'standalone',
    enableNotifications: false,
    enableSiteSettingsShortcut: true,
    fallbackType: 'customtabs',
    features: { locationDelegation: { enabled: true }, playBilling: { enabled: false } },
    host: new URL(cfg.origin).host,
    iconUrl: abs(cfg.icon),
    includeSourceCode: false,
    isChromeOSOnly: false,
    isMetaQuest: false,
    launcherName: cfg.launcherName,
    maskableIconUrl: abs(cfg.maskableIcon),
    monochromeIconUrl: abs(cfg.monochromeIcon),
    name: cfg.name,
    navigationColor: cfg.navigationColor,
    navigationColorDark: cfg.navigationColorDark,
    navigationDividerColor: cfg.navigationDividerColor,
    navigationDividerColorDark: cfg.navigationDividerColorDark,
    orientation: 'default',
    packageId: cfg.packageId,
    pwaUrl: cfg.origin + '/',
    shortcuts: withShortcuts ? manifestShortcuts() : [],
    signing: EXIST ? {
      file: `data:application/octet-stream;base64,${EXIST.b64}`, alias: EXIST.alias, fullName: 'Salka', organization: 'Salka', organizationalUnit: 'Mobile', countryCode: 'IQ',
      keyPassword: EXIST.keyPass, storePassword: EXIST.storePass,
    } : {
      file: null, alias: cfg.keyAlias, fullName: 'Salka', organization: 'Salka', organizationalUnit: 'Mobile', countryCode: 'IQ',
      keyPassword: PASS, storePassword: PASS,
    },
    signingMode: EXIST ? 'mine' : 'new',
    splashScreenFadeOutDuration: 300,
    startUrl: cfg.startUrl,
    themeColor: cfg.themeColor,
    themeColorDark: cfg.themeColorDark,
    webManifestUrl: abs(cfg.manifest),
    fullScopeUrl: cfg.origin + '/',
    minSdkVersion: cfg.minSdkVersion,
  };
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const isZip = (b) => b.length > 4 && b[0] === 0x50 && b[1] === 0x4b;
const jobText = (j) => clean([].concat(j?.errors || [], j?.logs || []).map((x) => (typeof x === 'string' ? x : JSON.stringify(x))).join('\n')).slice(-3000);

/** طريقة موقع PWABuilder الحالية: طابور → متابعة → تنزيل */
async function pwaBuilderQueue(body) {
  log('PWABuilder (الطابور الرسمي) → enqueuePackageJob');
  const res = await fetch(`${PWAB}/enqueuePackageJob`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body), signal: AbortSignal.timeout(60000) });
  const txt = await res.text();
  if (!res.ok) throw new Error(`enqueue HTTP ${res.status}: ${clean(txt).slice(0, 1200)}`);
  const receipt = JSON.parse(txt);
  if (!receipt?.id || !/^[A-Za-z0-9_-]{43}$/.test(receipt.accessToken || '')) throw new Error('رد الطابور غير متوقع');
  log('رقم المهمة:', receipt.id, '• مرجع الدعم:', receipt.supportReference);
  const auth = { Authorization: `Bearer ${receipt.accessToken}` };
  const t0 = Date.now();
  let last = '';
  while (Date.now() - t0 < 20 * 60 * 1000) {
    await sleep(8000);
    const jr = await fetch(`${PWAB}/getPackageJob?id=${encodeURIComponent(receipt.id)}`, { headers: auth, cache: 'no-store', signal: AbortSignal.timeout(30000) });
    if (!jr.ok) { log(`getPackageJob HTTP ${jr.status}`); continue; }
    const job = await jr.json();
    if (job.status !== last) { last = job.status; log(`حالة المهمة: ${job.status} (${Math.round((Date.now() - t0) / 1000)}ث)`); }
    if (job.status === 'Failed') throw new Error(`PWABuilder فشل:\n${jobText(job)}`);
    if (job.status === 'Completed') {
      const zr = await fetch(`${PWAB}/downloadPackageZip?id=${encodeURIComponent(receipt.id)}`, { headers: auth, signal: AbortSignal.timeout(5 * 60000) });
      const buf = Buffer.from(await zr.arrayBuffer());
      if (!zr.ok || !isZip(buf)) throw new Error(`تنزيل الحزمة HTTP ${zr.status}: ${clean(buf.toString('utf8', 0, 600))}`);
      return buf;
    }
  }
  throw new Error('PWABuilder طوّل أكثر من 20 دقيقة');
}

/** الطريق المباشر القديم */
async function pwaBuilderDirect(body) {
  log('PWABuilder (مباشر) → generateAppPackage');
  const res = await fetch(`${PWAB}/generateAppPackage`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body), signal: AbortSignal.timeout(10 * 60 * 1000) });
  const buf = Buffer.from(await res.arrayBuffer());
  log(`PWABuilder: HTTP ${res.status}, ${buf.length} bytes`);
  if (!res.ok || !isZip(buf)) throw new Error(`PWABuilder رد بخطأ: ${clean(buf.toString('utf8', 0, Math.min(buf.length, 2500)))}`);
  return buf;
}

async function viaPwaBuilder(mode, withShortcuts) {
  const body = pwaBuilderBody(withShortcuts);
  const buf = mode === 'queue' ? await pwaBuilderQueue(body) : await pwaBuilderDirect(body);
  const zip = path.join(WORK, 'pwabuilder.zip');
  fs.writeFileSync(zip, buf);
  const dir = path.join(WORK, 'pwabuilder');
  fs.rmSync(dir, { recursive: true, force: true });
  run('unzip', ['-q', '-o', zip, '-d', dir]);
  const files = walk(dir);
  log('محتويات الحزمة:', files.map((f) => path.relative(dir, f)).join(', '));
  const apk = files.find((f) => /\.apk$/i.test(f) && !/unsigned/i.test(f));
  const aab = files.find((f) => /\.aab$/i.test(f));
  const ks = files.find((f) => /\.keystore$|\.jks$/i.test(f));
  const info = files.find((f) => /signing-key-info\.txt$/i.test(f));
  if (!apk || !ks || !info) throw new Error('الحزمة ناقصة (APK أو المفتاح أو معلوماته)');
  // PWABuilder يولّد كلمات سر خاصة بيه للمفتاح الجديد ويكتبها بهذا الملف
  const txt = fs.readFileSync(info, 'utf8');
  const field = (name) => (new RegExp(`^${name}:[ \\t]*(.+?)\\s*$`, 'mi').exec(txt) || [])[1] || '';
  const storePass = field('Key store password'), keyPass = field('Key password'), alias = field('Key alias');
  addSecret(storePass); addSecret(keyPass);
  if (!storePass || !keyPass || !alias) throw new Error('ما كدرت أقرا معلومات المفتاح من signing-key-info.txt');
  log('اسم المفتاح:', alias);
  const theirLinks = files.find((f) => /assetlinks\.json$/i.test(f));
  fs.copyFileSync(zip, path.join(SEC, 'pwabuilder-package.zip'));
  return { source: `pwabuilder-${mode}`, apk, aab, keystore: ks, storePass, keyPass, alias, theirLinks };
}

// --------------------------------------------------------------- 2) Bubblewrap
async function viaBubblewrap() {
  log('Bubblewrap: تنصيب @bubblewrap/core');
  const bw = path.join(WORK, 'bw');
  fs.mkdirSync(bw, { recursive: true });
  fs.writeFileSync(path.join(bw, 'package.json'), '{"name":"bw","private":true}');
  run('npm', ['install', '--no-audit', '--no-fund', '@bubblewrap/core@latest'], { cwd: bw });
  const require = createRequire(path.join(bw, 'index.js'));
  const core = require('@bubblewrap/core');
  log('Bubblewrap core:', require('@bubblewrap/core/package.json').version);
  const ksFile = path.join(WORK, 'salka.keystore');
  if (EXIST) fs.writeFileSync(ksFile, Buffer.from(EXIST.b64, 'base64')); else newKeystore(ksFile);
  const bwAlias = EXIST ? EXIST.alias : cfg.keyAlias, bwKeyPass = EXIST ? EXIST.keyPass : PASS;
  const json = {
    packageId: cfg.packageId,
    host: new URL(cfg.origin).host,
    name: cfg.name,
    launcherName: cfg.launcherName,
    display: 'standalone',
    orientation: 'default',
    themeColor: cfg.themeColor,
    themeColorDark: cfg.themeColorDark,
    navigationColor: cfg.navigationColor,
    navigationColorDark: cfg.navigationColorDark,
    navigationDividerColor: cfg.navigationDividerColor,
    navigationDividerColorDark: cfg.navigationDividerColorDark,
    backgroundColor: cfg.backgroundColor,
    enableNotifications: false,
    startUrl: cfg.startUrl,
    iconUrl: abs(cfg.icon),
    maskableIconUrl: abs(cfg.maskableIcon),
    monochromeIconUrl: abs(cfg.monochromeIcon),
    splashScreenFadeOutDuration: 300,
    signingKey: { path: ksFile, alias: bwAlias },
    appVersionName: req.versionName,
    appVersionCode: req.versionCode,
    appVersion: req.versionName,
    shortcuts: bubblewrapShortcuts(),
    generatorApp: 'salka-ci',
    webManifestUrl: abs(cfg.manifest),
    fallbackType: 'customtabs',
    features: { locationDelegation: { enabled: true } },
    alphaDependencies: { enabled: false },
    enableSiteSettingsShortcut: true,
    isChromeOSOnly: false,
    isMetaQuest: false,
    fullScopeUrl: cfg.origin + '/',
    minSdkVersion: cfg.minSdkVersion,
    fingerprints: [],
    additionalTrustedOrigins: [],
    retainedBundles: [],
  };
  const twa = new core.TwaManifest(json);
  const proj = path.join(WORK, 'twa');
  fs.rmSync(proj, { recursive: true, force: true });
  fs.mkdirSync(proj, { recursive: true });
  await new core.TwaGenerator().createTwaProject(proj, twa, new core.ConsoleLog('twa'), () => {});
  log('Bubblewrap: انولد مشروع الأندرويد، هسه Gradle');
  const gradlew = path.join(proj, 'gradlew');
  fs.chmodSync(gradlew, 0o755);
  runLogged(gradlew, ['assembleRelease', 'bundleRelease', '--no-daemon', '--stacktrace'], path.join(OUT, 'gradle.log'), { cwd: proj, timeout: 25 * 60 * 1000 });
  const files = walk(path.join(proj, 'app', 'build', 'outputs'));
  const unsigned = files.find((f) => /\.apk$/i.test(f));
  const aab = files.find((f) => /\.aab$/i.test(f));
  if (!unsigned || !aab) throw new Error(`مخرجات Gradle ناقصة: ${files.join(', ')}`);
  const t = buildTools();
  const aligned = path.join(WORK, 'aligned.apk');
  const signed = path.join(WORK, 'salka-signed.apk');
  run(t.zipalign, ['-f', '-p', '4', unsigned, aligned]);
  run(t.apksigner, ['sign', '--ks', ksFile, '--ks-key-alias', bwAlias, '--ks-pass', `pass:${PASS}`, '--key-pass', `pass:${bwKeyPass}`, '--out', signed, aligned]);
  run('jarsigner', ['-keystore', ksFile, '-storepass', PASS, '-keypass', bwKeyPass, '-sigalg', 'SHA256withRSA', '-digestalg', 'SHA-256', aab, bwAlias]);
  fs.copyFileSync(path.join(proj, 'twa-manifest.json'), path.join(SEC, 'twa-manifest.json'));
  return { source: 'bubblewrap', apk: signed, aab, keystore: ksFile, storePass: PASS, keyPass: bwKeyPass, alias: bwAlias };
}

// --------------------------------------------------------------- 3) مخصص: Bubblewrap + طبقة الموقع الأصلية
function copyDir(src, dst) {
  fs.mkdirSync(dst, { recursive: true });
  for (const e of fs.readdirSync(src, { withFileTypes: true })) {
    const a = path.join(src, e.name), b = path.join(dst, e.name);
    if (e.isDirectory()) copyDir(a, b); else fs.copyFileSync(a, b);
  }
}

/** نزرع طبقة الموقع الأصلية (android/native) بمشروع Bubblewrap */
function patchNative(proj) {
  const javaDir = path.join(proj, 'app', 'src', 'main', 'java');
  copyDir(path.join(ROOT, 'android', 'native'), javaDir);
  // 1) DelegationService: معالج الموقع مالتنا بدل مكتبة گوگل
  const ds = path.join(javaDir, ...cfg.packageId.split('.'), 'DelegationService.java');
  let d = fs.readFileSync(ds, 'utf8');
  if (!d.includes('super.onCreate();')) throw new Error('DelegationService بدون super.onCreate()');
  if (/LocationDelegationExtraCommandHandler/.test(d)) throw new Error('مكتبة الموقع القديمة بعدها مفعلة');
  d = d.replace('super.onCreate();', 'super.onCreate();\n        registerExtraCommandHandler(new iq.salka.app.loc.SalkaLocationHandler());');
  fs.writeFileSync(ds, d);
  // 2) AndroidManifest: الصلاحيات + النوافذ
  const mf = path.join(proj, 'app', 'src', 'main', 'AndroidManifest.xml');
  let m = fs.readFileSync(mf, 'utf8');
  const appTag = m.search(/<application[\s>]/);
  if (appTag < 0 || !m.includes('</application>')) throw new Error('AndroidManifest غير متوقع');
  m = m.slice(0, appTag)
    + '<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>\n    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION"/>\n\n    '
    + m.slice(appTag);
  const acts = `
        <activity android:name="iq.salka.app.loc.PermissionActivity"
            android:theme="@android:style/Theme.Translucent.NoTitleBar"
            android:exported="false"
            android:excludeFromRecents="true" />
        <activity android:name="iq.salka.app.loc.LocationSetupActivity"
            android:theme="@android:style/Theme.Translucent.NoTitleBar"
            android:exported="true"
            android:excludeFromRecents="true"
            android:launchMode="singleTop">
            <intent-filter>
                <action android:name="android.intent.action.VIEW" />
                <category android:name="android.intent.category.DEFAULT" />
                <category android:name="android.intent.category.BROWSABLE" />
                <data android:scheme="salka" android:host="location" />
            </intent-filter>
        </activity>
    </application>`;
  m = m.replace('</application>', acts);
  fs.writeFileSync(mf, m);
  // 3) خدمات گوگل للموقع
  const gf = path.join(proj, 'app', 'build.gradle');
  let g = fs.readFileSync(gf, 'utf8');
  const dep = "implementation fileTree(include: ['*.jar'], dir: 'libs')";
  if (!g.includes(dep)) throw new Error('app/build.gradle غير متوقع');
  g = g.replace(dep, `${dep}\n    implementation 'com.google.android.gms:play-services-location:${cfg.playServicesLocation || '21.3.0'}'`);
  fs.writeFileSync(gf, g);
  log('طبقة الموقع الأصلية انزرعت ✓ (DelegationService + AndroidManifest + build.gradle)');
}

/** مكتبة apksig (Apache-2.0) من Maven Central — للتوقيع خارج GitHub (المفتاح ما يطلع للسيرفر) */
async function fetchApksig() {
  const v = cfg.apksigVersion || '8.7.3';
  const base = `https://repo1.maven.org/maven2/com/android/tools/build/apksig/${v}/apksig-${v}.jar`;
  const jar = Buffer.from(await (await fetch(base, { signal: AbortSignal.timeout(60000) })).arrayBuffer());
  const sha1 = (await (await fetch(`${base}.sha1`, { signal: AbortSignal.timeout(30000) })).text()).trim().slice(0, 40);
  const got = crypto.createHash('sha1').update(jar).digest('hex');
  if (!jar.length || got !== sha1) throw new Error(`apksig: بصمة غير مطابقة (${got} ≠ ${sha1})`);
  fs.writeFileSync(path.join(PUB, `apksig-${v}.jar`), jar);
  log(`apksig ${v} ✓ (sha1 ${sha1})`);
}

async function viaCustom() {
  log('مخصص: تنصيب @bubblewrap/core');
  const bw = path.join(WORK, 'bw');
  fs.mkdirSync(bw, { recursive: true });
  fs.writeFileSync(path.join(bw, 'package.json'), '{"name":"bw","private":true}');
  run('npm', ['install', '--no-audit', '--no-fund', '@bubblewrap/core@latest'], { cwd: bw });
  const require = createRequire(path.join(bw, 'index.js'));
  const core = require('@bubblewrap/core');
  log('Bubblewrap core:', require('@bubblewrap/core/package.json').version);
  const json = {
    packageId: cfg.packageId, host: new URL(cfg.origin).host, name: cfg.name, launcherName: cfg.launcherName,
    display: 'standalone', orientation: 'default',
    themeColor: cfg.themeColor, themeColorDark: cfg.themeColorDark, navigationColor: cfg.navigationColor, navigationColorDark: cfg.navigationColorDark,
    navigationDividerColor: cfg.navigationDividerColor, navigationDividerColorDark: cfg.navigationDividerColorDark, backgroundColor: cfg.backgroundColor,
    enableNotifications: false, startUrl: req.startUrl || cfg.startUrl,
    iconUrl: abs(cfg.icon), maskableIconUrl: abs(cfg.maskableIcon), monochromeIconUrl: abs(cfg.monochromeIcon),
    splashScreenFadeOutDuration: 300, signingKey: { path: './unused.keystore', alias: cfg.keyAlias },
    appVersionName: req.versionName, appVersionCode: req.versionCode, appVersion: req.versionName,
    shortcuts: bubblewrapShortcuts(), generatorApp: 'salka-ci', webManifestUrl: abs(cfg.manifest), fallbackType: 'customtabs',
    features: {}, alphaDependencies: { enabled: false }, enableSiteSettingsShortcut: true, isChromeOSOnly: false, isMetaQuest: false,
    fullScopeUrl: cfg.origin + '/', minSdkVersion: cfg.minSdkVersion, fingerprints: [], additionalTrustedOrigins: [], retainedBundles: [],
  };
  const twa = new core.TwaManifest(json);
  const proj = path.join(WORK, 'twa');
  fs.rmSync(proj, { recursive: true, force: true });
  fs.mkdirSync(proj, { recursive: true });
  await new core.TwaGenerator().createTwaProject(proj, twa, new core.ConsoleLog('twa'), () => {});
  patchNative(proj);
  log('Gradle: assembleRelease + bundleRelease');
  const gradlew = path.join(proj, 'gradlew');
  fs.chmodSync(gradlew, 0o755);
  runLogged(gradlew, ['assembleRelease', 'bundleRelease', '--no-daemon', '--stacktrace'], path.join(OUT, 'gradle.log'), { cwd: proj, timeout: 30 * 60 * 1000 });
  const files = walk(path.join(proj, 'app', 'build', 'outputs'));
  const apk = files.find((f) => /\.apk$/i.test(f));
  const aab = files.find((f) => /\.aab$/i.test(f));
  if (!apk || !aab) throw new Error(`مخرجات Gradle ناقصة: ${files.join(', ')}`);
  // فحص المانيفست النهائي داخل الـAPK
  const t = buildTools();
  const xml = run(t.aapt2, ['dump', 'xmltree', '--file', 'AndroidManifest.xml', apk]);
  for (const need of ['iq.salka.app.loc.LocationSetupActivity', 'iq.salka.app.loc.PermissionActivity', 'android.permission.ACCESS_FINE_LOCATION', 'salka']) {
    if (!xml.includes(need)) throw new Error(`المانيفست النهائي ناقص: ${need}`);
  }
  const dex = run('unzip', ['-l', apk]);
  if (!/classes\.dex/.test(dex)) throw new Error('ماكو classes.dex');
  const badge = run(t.aapt2, ['dump', 'badging', apk]);
  const pk = /package: name='([^']+)' versionCode='(\d+)' versionName='([^']+)'/.exec(badge);
  log('الحزمة (غير موقعة):', pk ? `${pk[1]} • ${pk[2]} • ${pk[3]}` : '?');
  if (!pk || pk[1] !== cfg.packageId || +pk[2] !== +req.versionCode) throw new Error('اسم الحزمة أو versionCode غير صحيح');
  fs.writeFileSync(path.join(OUT, 'manifest-dump.txt'), xml);
  fs.copyFileSync(apk, path.join(PUB, 'salka-unsigned.apk'));
  fs.copyFileSync(aab, path.join(PUB, 'salka-unsigned.aab'));
  fs.copyFileSync(path.join(proj, 'twa-manifest.json'), path.join(PUB, 'twa-manifest.json'));
  await fetchApksig();
  fs.writeFileSync(path.join(PUB, 'build-info.json'), JSON.stringify({
    packageId: cfg.packageId, versionName: req.versionName, versionCode: req.versionCode, unsigned: true,
    sha256: crypto.createHash('sha256').update(fs.readFileSync(apk)).digest('hex'), source: 'custom', builtAt: new Date().toISOString(),
  }, null, 2) + '\n');
  log('✅ الحزمة جاهزة للتوقيع خارج GitHub');
}

// --------------------------------------------------------------- التحقق والتغليف
function verify(pkg) {
  const t = buildTools();
  const fp = certSha256(pkg.keystore, pkg.storePass, pkg.alias);
  if (pkg.theirLinks) {
    const theirs = fs.readFileSync(pkg.theirLinks, 'utf8');
    log(theirs.toUpperCase().includes(fp) ? 'بصمة assetlinks من PWABuilder مطابقة ✓' : '⚠️ assetlinks من PWABuilder ما بيها نفس البصمة — راح نستخدم بصمتنا المحسوبة');
  }
  const certs = run(t.apksigner, ['verify', '--verbose', '--print-certs', pkg.apk]);
  const m = /certificate SHA-256 digest:\s*([0-9a-f]{64})/i.exec(certs);
  if (!m) throw new Error('apksigner ما طلع بصمة الشهادة');
  const apkFp = m[1].toUpperCase().match(/../g).join(':');
  if (apkFp !== fp) throw new Error(`بصمة الـAPK (${apkFp}) غير بصمة المفتاح (${fp})`);
  const schemes = certs.split('\n').filter((l) => /Verified using/.test(l)).join(' | ');
  log('توقيع الـAPK سليم ومطابق للمفتاح ✓', schemes);
  let badging = '';
  try { badging = run(t.aapt2, ['dump', 'badging', pkg.apk]); } catch { try { badging = run(t.aapt, ['dump', 'badging', pkg.apk]); } catch { badging = ''; } }
  const pk = /package: name='([^']+)' versionCode='(\d+)' versionName='([^']+)'/.exec(badging);
  if (pk) {
    log(`الحزمة: ${pk[1]} • versionCode ${pk[2]} • versionName ${pk[3]}`);
    if (pk[1] !== cfg.packageId) throw new Error(`اسم الحزمة ${pk[1]} مو ${cfg.packageId}`);
    if (+pk[2] !== +req.versionCode) throw new Error(`versionCode ${pk[2]} مو ${req.versionCode}`);
  }
  const sdk = /sdkVersion:'(\d+)'/.exec(badging), tsdk = /targetSdkVersion:'(\d+)'/.exec(badging);
  if (sdk || tsdk) log(`minSdk ${sdk?.[1]} • targetSdk ${tsdk?.[1]}`);
  const label = /application-label:'([^']*)'/.exec(badging);
  if (label) log('اسم التطبيق:', label[1]);
  const perms = [...badging.matchAll(/uses-permission: name='([^']+)'/g)].map((x) => x[1].replace('android.permission.', ''));
  if (perms.length) log('الصلاحيات:', perms.join(', '));
  if (pkg.aab) {
    const jv = run('jarsigner', ['-verify', pkg.aab]);
    if (!/jar verified/i.test(jv)) throw new Error('توقيع الـAAB غير سليم');
    log('توقيع الـAAB سليم ✓');
  }
  return { fp, targetSdk: tsdk?.[1] || null, minSdk: sdk?.[1] || null };
}

function encryptSecure() {
  const tgz = path.join(WORK, 'secure.tgz');
  run('tar', ['czf', tgz, '-C', SEC, '.']);
  const data = fs.readFileSync(tgz);
  const key = crypto.randomBytes(32), iv = crypto.randomBytes(12);
  const c = crypto.createCipheriv('aes-256-gcm', key, iv);
  const enc = Buffer.concat([c.update(data), c.final()]);
  const pub = fs.readFileSync('android/deploy-pub.pem', 'utf8');
  const wrapped = crypto.publicEncrypt({ key: pub, padding: crypto.constants.RSA_PKCS1_OAEP_PADDING, oaepHash: 'sha256' }, key);
  fs.writeFileSync(path.join(OUT, 'secure.bin'), enc);
  fs.writeFileSync(path.join(OUT, 'secure.json'), JSON.stringify({ v: 1, alg: 'RSA-OAEP-256+AES-256-GCM', key: wrapped.toString('base64'), iv: iv.toString('base64'), tag: c.getAuthTag().toString('base64'), sha256: crypto.createHash('sha256').update(data).digest('hex') }, null, 2));
  fs.rmSync(SEC, { recursive: true, force: true });
  log(`تشفير الملفات الحساسة: ${enc.length} bytes ✓`);
}

// --------------------------------------------------------------- التشغيل
async function main() {
  log(`بناء ${cfg.packageId} الإصدار ${req.versionName} (${req.versionCode})`);
  if (req.method === 'custom') {
    if (PUBLISHED && +req.versionCode <= +PUBLISHED.versionCode) throw new Error(`versionCode لازم يكون أكبر من ${PUBLISHED.versionCode}`);
    await viaCustom();
    return;
  }
  // حماية: التطبيق منشور بمفتاح، فأي بناء بمفتاح جديد ما يكدر يحدّث النسخ المثبتة
  if (PUBLISHED && !EXIST && !req.allowNewKey) {
    throw new Error(`التطبيق منشور بالمفتاح ${PUBLISHED.certSha256}. حتى تبني تحديث، أضف المفتاح لأسرار GitHub (SALKA_KEYSTORE_B64 و SALKA_KEYSTORE_PASS و SALKA_KEY_ALIAS) — أو ضع "allowNewKey": true بملف request.json إذا تريد تطبيق جديد بمفتاح جديد عن قصد.`);
  }
  if (PUBLISHED && +req.versionCode <= +PUBLISHED.versionCode && !req.allowNewKey) {
    throw new Error(`versionCode لازم يكون أكبر من ${PUBLISHED.versionCode} (المنشور حالياً)`);
  }
  if (EXIST) { addSecret(EXIST.keyPass); log('التوقيع بالمفتاح الموجود (من أسرار GitHub)'); }
  let pkg = null;
  const errors = [];
  if (req.method !== 'bubblewrap') {
    for (const [mode, sc] of [['queue', true], ['direct', true], ['queue', false]]) {
      try { pkg = await viaPwaBuilder(mode, sc); break; } catch (e) { errors.push(e.message); log('فشل:', e.message.slice(0, 2500)); }
    }
  }
  if (!pkg) {
    try { pkg = await viaBubblewrap(); } catch (e) { errors.push(e.message); log('Bubblewrap فشل:', e.message.slice(0, 6000)); }
  }
  if (!pkg) throw new Error('كل الطرق فشلت');
  log('طريقة البناء:', pkg.source);
  const v = verify(pkg);
  if (EXIST && PUBLISHED && v.fp !== PUBLISHED.certSha256) throw new Error(`المفتاح المستخدم (${v.fp}) مو نفس مفتاح النسخة المنشورة (${PUBLISHED.certSha256})`);
  const apkOut = path.join(PUB, 'salka.apk');
  fs.copyFileSync(pkg.apk, apkOut);
  const apkBuf = fs.readFileSync(apkOut);
  const assetlinks = [{
    relation: ['delegate_permission/common.handle_all_urls'],
    target: { namespace: 'android_app', package_name: cfg.packageId, sha256_cert_fingerprints: [v.fp, ...(req.extraFingerprints || [])] },
  }];
  fs.writeFileSync(path.join(PUB, 'assetlinks.json'), JSON.stringify(assetlinks, null, 2) + '\n');
  fs.writeFileSync(path.join(PUB, 'build-info.json'), JSON.stringify({
    packageId: cfg.packageId, versionName: req.versionName, versionCode: req.versionCode, size: apkBuf.length,
    sha256: crypto.createHash('sha256').update(apkBuf).digest('hex'), certSha256: v.fp, minSdk: v.minSdk, targetSdk: v.targetSdk,
    source: pkg.source, builtAt: new Date().toISOString(),
  }, null, 2) + '\n');
  fs.copyFileSync(pkg.keystore, path.join(SEC, 'salka-signing.keystore'));
  if (pkg.aab) fs.copyFileSync(pkg.aab, path.join(SEC, 'salka-play-store.aab'));
  fs.writeFileSync(path.join(SEC, 'signing-key-info.txt'), [
    'مفتاح توقيع تطبيق سالكة — احفظه بمكان آمن ولا تشاركه وية أحد',
    '',
    `Package ID:      ${cfg.packageId}`,
    `Keystore file:   salka-signing.keystore (PKCS12)`,
    `Key alias:       ${pkg.alias}`,
    `Store password:  ${pkg.storePass}`,
    `Key password:    ${pkg.keyPass}`,
    `SHA-256:         ${v.fp}`,
    `Version:         ${req.versionName} (${req.versionCode})`,
    `Built:           ${new Date().toISOString()} via ${pkg.source}`,
    '',
    'هذا المفتاح لازم لكل تحديث جاي للتطبيق، وإذا ضاع ما تكدر تحدث التطبيق المثبت عند الناس.',
  ].join('\n') + '\n');
  encryptSecure();
  if (errors.length) log('ملاحظات المحاولات السابقة:', errors.map((e) => e.slice(0, 300)).join(' || '));
  log('✅ خلص البناء');
}

main().then(() => saveLog('ok')).catch((e) => {
  log('❌', e.message);
  fs.rmSync(SEC, { recursive: true, force: true });
  saveLog('failed');
  process.exit(1);
});
