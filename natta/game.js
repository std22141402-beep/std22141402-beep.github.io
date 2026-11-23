/* =====================================================================
   نطّة — الرسم والواجهة والصوت والتحكم (مصممة لسفاري على الآيفون أولاً)
   ===================================================================== */
(() => {
  'use strict';
  const Core = window.NattaCore;
  const { C } = Core;
  const $ = (id) => document.getElementById(id);
  const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
  const lerp = (a, b, k) => a + (b - a) * k;
  const pick = (a) => a[(Math.random() * a.length) | 0];
  const rnd = (a, b) => a + Math.random() * (b - a);
  const TAU = Math.PI * 2;
  const rand32 = () => (Math.random() * 4294967296) >>> 0;

  // ---------------------------------------------------------------- الحفظ
  const KEY = 'natta.v1';
  const DEF = { best: 0, coins: 0, owned: ['green'], skin: 'green', control: 'touch', sound: true, music: true, tut: false, games: 0, a2hs: false, hero: false };
  let save;
  try { save = Object.assign({}, DEF, JSON.parse(localStorage.getItem(KEY) || '{}')); } catch (e) { save = Object.assign({}, DEF); }
  save.owned = Array.isArray(save.owned) ? save.owned.slice() : ['green'];
  if (!save.owned.includes('green')) save.owned.unshift('green');
  function persist() { try { localStorage.setItem(KEY, JSON.stringify(save)); } catch (e) { /* وضع التصفح الخاص */ } }

  // ---------------------------------------------------------------- الشخصيات
  const SKINS = [
    { id: 'green', name: 'نطّوط', body: '#5BD16B', dark: '#2C8F43', belly: '#C4F7BC', price: 0 },
    { id: 'orange', name: 'برتقالة', body: '#FF9F3D', dark: '#C9620F', belly: '#FFDDB0', price: 60, acc: 'leaf' },
    { id: 'ghost', name: 'شبح', body: '#F2F5FF', dark: '#9AA6D6', belly: '#FFFFFF', price: 150, acc: 'blush' },
    { id: 'ninja', name: 'نينجا', body: '#30354A', dark: '#14172A', belly: '#565C7A', price: 300, acc: 'band' },
    { id: 'alien', name: 'فضائي', body: '#A4F07F', dark: '#4FA637', belly: '#E1FFD2', price: 500, acc: 'antenna' },
    { id: 'fire', name: 'ناري', body: 'fire', dark: '#8E1A00', belly: '#FFF1A8', price: 700 }, // نفس نطّوط بس جسمه يلتهب
    { id: 'king', name: 'الملك', body: '#FFD23F', dark: '#C99300', belly: '#FFF2B3', price: 900, acc: 'crown' },
    { id: 'rainbow', name: 'أسطورة', body: 'rainbow', dark: '#6C3FA0', belly: '#FFFFFF', unlockScore: 5000, acc: 'star' },
    { id: 'explorer', name: 'المغامر', body: '#E9B872', dark: '#9A6326', belly: '#FFF1D6', story: true, acc: 'hat' }, // جائزة التاجر بنهاية المغامرة
  ];
  const skinById = (id) => SKINS.find((s) => s.id === id) || SKINS[0];

  // ---------------------------------------------------------------- الصوت (كله مولّد، بدون ملفات)
  const mf = (m) => 440 * Math.pow(2, (m - 69) / 12); // رقم النوتة ← تردد

  /** مُركّب أصوات صغير: يشتغل على الصوت الحقيقي، أو على OfflineAudioContext للفحص وتسجيل العينات */
  function createSynth(ac, dest, irSec = 1.4) {
    const out = ac.createGain(); out.gain.value = 1.1;
    const comp = ac.createDynamicsCompressor();
    comp.threshold.value = -12; comp.knee.value = 12; comp.ratio.value = 4;
    out.connect(comp); comp.connect(dest || ac.destination);
    // صدى غرفة خفيف (reverb) يخلي الأصوات أنعم وأحلى
    const len = Math.floor(ac.sampleRate * irSec), ir = ac.createBuffer(2, len, ac.sampleRate);
    for (let c = 0; c < 2; c++) { const d = ir.getChannelData(c); for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3.2); }
    const conv = ac.createConvolver(); conv.buffer = ir;
    const revIn = ac.createGain(); revIn.gain.value = 0.5; revIn.connect(conv); conv.connect(comp);
    // صدى يتكرر (echo) — للشبح
    const echoIn = ac.createGain(), dl = ac.createDelay(1), fb = ac.createGain(), lp = ac.createBiquadFilter();
    dl.delayTime.value = 0.21; fb.gain.value = 0.38; lp.type = 'lowpass'; lp.frequency.value = 2200;
    echoIn.connect(dl); dl.connect(lp); lp.connect(fb); fb.connect(dl); lp.connect(comp);
    const noiseBuf = ac.createBuffer(1, ac.sampleRate, ac.sampleRate);
    { const d = noiseBuf.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1; }

    const D = { rev: 0.12, echo: 0, t0: 0, gain: 1 };
    const at = (o) => ac.currentTime + D.t0 + (o.t || 0);
    /** صوت يمشي من جهة لجهة (يمين/يسار) إذا الجهاز يدعم */
    function pan(g, o, t, dur) {
      if (o.pan == null || !ac.createStereoPanner) return g;
      const p = ac.createStereoPanner(); p.pan.setValueAtTime(o.pan, t);
      if (o.pan1 != null) p.pan.linearRampToValueAtTime(o.pan1, t + dur);
      g.connect(p); return p;
    }
    function route(g, o) {
      g.connect(out);
      const r = o.rev != null ? o.rev : D.rev, e = o.echo != null ? o.echo : D.echo;
      if (r > 0) { const s = ac.createGain(); s.gain.value = r; g.connect(s); s.connect(revIn); }
      if (e > 0) { const s = ac.createGain(); s.gain.value = e; g.connect(s); s.connect(echoIn); }
    }
    function env(g, t, a, v, dur) {
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(v, t + a);
      g.gain.exponentialRampToValueAtTime(0.0001, t + Math.max(dur, a + 0.01));
    }
    function voice(o) {
      if (!(o.vol * D.gain > 0.0002) || !(o.dur > 0)) return; // نوتة صامتة: ما نعزفها
      const t = at(o), dur = o.dur, osc = ac.createOscillator();
      osc.type = o.type || 'sine';
      osc.frequency.setValueAtTime(o.f, t);
      if (o.f1 && o.f1 !== o.f) osc.frequency.exponentialRampToValueAtTime(o.f1, t + (o.glide || dur));
      if (o.detune) osc.detune.value = o.detune;
      let node = osc;
      if (o.vib) {
        const l = ac.createOscillator(), lg = ac.createGain();
        l.frequency.value = o.vib[0]; lg.gain.value = o.vib[1];
        l.connect(lg); lg.connect(osc.frequency); l.start(t); l.stop(t + dur + 0.05);
      }
      if (o.filter) {
        const fl = ac.createBiquadFilter(); fl.type = o.filter[0];
        fl.frequency.setValueAtTime(o.filter[1], t);
        if (o.filter[2]) fl.frequency.exponentialRampToValueAtTime(o.filter[2], t + dur);
        fl.Q.value = o.filter[3] || 0.7; node.connect(fl); node = fl;
      }
      const g = ac.createGain(); env(g, t, o.attack || 0.006, o.vol * D.gain, dur);
      node.connect(g); route(pan(g, o, t, dur), o);
      osc.start(t); osc.stop(t + dur + 0.05);
    }
    function noise(o) {
      if (!(o.vol * D.gain > 0.0002) || !(o.dur > 0)) return null;
      const t = at(o), dur = o.dur, s = ac.createBufferSource(), fl = ac.createBiquadFilter();
      s.buffer = noiseBuf; s.loop = true;
      fl.type = o.type || 'lowpass'; fl.frequency.setValueAtTime(o.f, t);
      if (o.f1) fl.frequency.exponentialRampToValueAtTime(o.f1, t + (o.glide || dur));
      fl.Q.value = o.q || 0.8;
      const g = ac.createGain(); env(g, t, o.attack || 0.01, o.vol * D.gain, dur);
      s.connect(fl); fl.connect(g); route(pan(g, o, t, dur), o);
      s.start(t, Math.random() * 0.5); s.stop(t + dur + 0.05);
      return { s, g };
    }
    /** طقطقة نار */
    function crackle(n, span, vol, t0 = 0) {
      for (let i = 0; i < n; i++) {
        noise({ t: t0 + Math.random() * span, dur: 0.012 + Math.random() * 0.012, type: 'highpass', f: 2500 + Math.random() * 3000, vol: vol * (0.4 + Math.random() * 0.6), attack: 0.001, rev: 0.05 });
      }
    }
    return { ac, D, voice, noise, crackle };
  }

  // آلات صغيرة تستعملها الشخصيات
  const pluck = (S, f, t = 0, vol = 0.12, dur = 0.5) =>            // وتر مثل الكوتو الياباني
    S.voice({ type: 'sawtooth', f, t, dur, vol, attack: 0.003, filter: ['lowpass', Math.min(f * 8, 9000), f * 1.2, 1.5] });
  const brass = (S, f, t = 0, dur = 0.2, vol = 0.1, vib) => {       // بوق ملكي
    S.voice({ type: 'sawtooth', f: f * 0.96, f1: f, glide: 0.04, t, dur, vol, attack: 0.025, filter: ['lowpass', Math.min(f * 6, 9000), f * 2, 1.2], vib });
    S.voice({ type: 'square', f, t, dur, vol: vol * 0.3, attack: 0.03, filter: ['lowpass', Math.min(f * 3, 9000), f * 1.5] });
  };
  const bell = (S, f, t = 0, vol = 0.16, dur = 0.7) => {             // جرس سحري
    S.voice({ f, t, dur, vol, attack: 0.003 });
    S.voice({ f: f * 2, t, dur: dur * 0.5, vol: vol * 0.35, attack: 0.003 });
    S.voice({ f: f * 3, t, dur: dur * 0.25, vol: vol * 0.15, attack: 0.002 });
    S.voice({ f: f * 4, t, dur: dur * 0.35, vol: vol * 0.08, detune: 9, attack: 0.003 });
  };

  /**
   * أصوات كل شخصية: jump (كل قفزة، نوتاتها تمشي على سلّم موسيقي حتى تطلع لحن)،
   * boost (نابض/ترامبولين)، lose (الخسارة)، hello (لما تختارها بالمتجر)
   */
  const PACKS = {
    // نطّوط: «بوينغ» مطاطي مرح
    green: {
      rev: 0.12, scale: [67, 69, 72, 74, 76, 79],
      gain: { jump: 0.82, boost: 1.0, lose: 0.62, hello: 0.82 },
      jump(S, f) { S.voice({ f: f * 0.7, f1: f * 1.5, dur: 0.15, vol: 0.26 }); S.voice({ type: 'triangle', f: f * 0.35, f1: f * 0.75, dur: 0.1, vol: 0.1 }); },
      boost(S, k) { S.voice({ f: 200 * k, f1: 950 * k, glide: 0.35, dur: 0.5, vol: 0.26, vib: [16, 35] }); S.voice({ type: 'triangle', f: 100 * k, f1: 480 * k, glide: 0.3, dur: 0.35, vol: 0.1 }); },
      lose(S) { S.voice({ f: 660, dur: 0.2, vol: 0.2, vib: [6, 8] }); S.voice({ f: 494, f1: 180, glide: 0.7, t: 0.2, dur: 0.8, vol: 0.22, vib: [6, 10] }); },
      hello(S) { [72, 79].forEach((m, i) => S.voice({ f: mf(m) * 0.7, f1: mf(m) * 1.5, t: i * 0.13, dur: 0.16, vol: 0.24 })); },
    },
    // برتقالة: «بلوب» عصيري مثل قطرة
    orange: {
      rev: 0.14, scale: [69, 72, 74, 76, 79, 81],
      gain: { jump: 0.6, boost: 0.94, lose: 1.2, hello: 0.88 },
      jump(S, f) {
        S.voice({ f: f * 2.2, f1: f * 0.8, dur: 0.045, vol: 0.2, attack: 0.002 });
        S.voice({ f: f * 0.8, f1: f * 1.6, t: 0.035, dur: 0.09, vol: 0.24 });
        S.noise({ type: 'bandpass', f: 2800, q: 2, dur: 0.04, vol: 0.06 });
      },
      boost(S, k) { S.noise({ f: 3500, f1: 300, dur: 0.35, vol: 0.2 }); [0, 0.07, 0.14].forEach((t, i) => S.voice({ f: (350 + i * 220) * k, f1: (700 + i * 400) * k, t, dur: 0.09, vol: 0.18 })); },
      lose(S) { S.noise({ f: 1500, f1: 120, dur: 0.4, vol: 0.28 }); S.voice({ f: 300, f1: 70, dur: 0.4, vol: 0.2 }); S.voice({ f: 520, f1: 260, t: 0.35, dur: 0.5, vol: 0.12, vib: [5, 6] }); },
      hello(S) { [0, 0.09, 0.18].forEach((t, i) => { const f = mf(72 + i * 4); S.voice({ f: f * 2, f1: f * 0.8, t, dur: 0.04, vol: 0.16 }); S.voice({ f: f * 0.8, f1: f * 1.6, t: t + 0.03, dur: 0.09, vol: 0.2 }); }); },
    },
    // شبح: «ووووو» هوائي مع صدى
    ghost: {
      rev: 0.35, echo: 0.35, scale: [62, 65, 67, 69, 72, 74],
      gain: { jump: 1.15, boost: 0.95, lose: 0.86, hello: 1.25 },
      jump(S, f) { S.voice({ f: f * 0.92, f1: f * 1.15, dur: 0.38, vol: 0.13, attack: 0.05, vib: [5, f * 0.015] }); S.noise({ type: 'bandpass', f: f * 3, q: 6, dur: 0.3, vol: 0.03, attack: 0.05 }); },
      boost(S, k) { S.voice({ f: 280 * k, f1: 720 * k, glide: 0.6, dur: 0.85, vol: 0.16, attack: 0.08, vib: [5.5, 9] }); S.voice({ type: 'triangle', f: 420 * k, f1: 1080 * k, glide: 0.6, dur: 0.7, vol: 0.05, attack: 0.1 }); },
      lose(S) { S.voice({ f: 520, f1: 170, glide: 1.1, dur: 1.3, vol: 0.17, attack: 0.08, vib: [4.5, 10] }); S.noise({ type: 'bandpass', f: 900, f1: 300, q: 4, dur: 1.1, vol: 0.04 }); },
      hello(S) { S.voice({ f: mf(62), f1: mf(69), glide: 0.35, dur: 0.5, vol: 0.14, attack: 0.08, vib: [5, 6] }); S.voice({ f: mf(69), f1: mf(65), t: 0.45, glide: 0.4, dur: 0.6, vol: 0.13, attack: 0.08, vib: [5, 6] }); },
    },
    // نينجا: «شّش» سيف بالهوا ووتر ياباني
    ninja: {
      rev: 0.1, scale: [64, 65, 69, 71, 72, 76],
      gain: { jump: 2.5, boost: 1.8, lose: 1.04, hello: 1.05 },
      jump(S, f) { S.noise({ type: 'bandpass', f: 5000, f1: 1200, q: 1.4, dur: 0.11, vol: 0.2, attack: 0.004 }); S.voice({ type: 'triangle', f: f * 2, dur: 0.05, vol: 0.12, attack: 0.002 }); },
      boost(S, k) {
        S.noise({ type: 'bandpass', f: 6000, f1: 900, q: 1.2, dur: 0.22, vol: 0.22 });
        const f = 2400 * k; // «شِنغ!» معدني
        S.voice({ f, t: 0.05, dur: 0.6, vol: 0.06, attack: 0.002 }); S.voice({ f: f * 1.51, t: 0.05, dur: 0.45, vol: 0.04, attack: 0.002 }); S.voice({ f: f * 2.24, t: 0.05, dur: 0.3, vol: 0.03, attack: 0.002 });
      },
      lose(S) { S.noise({ f: 500, f1: 150, dur: 0.18, vol: 0.3 }); [76, 72, 69, 64].forEach((m, i) => pluck(S, mf(m), 0.12 + i * 0.16, 0.13, 0.6)); },
      hello(S) { [64, 69, 71, 76].forEach((m, i) => pluck(S, mf(m), i * 0.08, 0.12, 0.5)); S.noise({ type: 'bandpass', f: 5000, f1: 1500, q: 1.4, t: 0.32, dur: 0.12, vol: 0.18 }); },
    },
    // فضائي: «بيووو» خيال علمي
    alien: {
      rev: 0.16, scale: [60, 62, 64, 66, 68, 70, 72],
      gain: { jump: 2.4, boost: 2.5, lose: 1.03, hello: 2.6 },
      jump(S, f) { S.voice({ type: 'square', f, f1: f * 2.4, dur: 0.12, vol: 0.07, vib: [32, f * 0.08], filter: ['lowpass', 3500] }); S.voice({ f: f * 2, f1: f * 4, dur: 0.08, vol: 0.06 }); },
      boost(S, k) { S.voice({ type: 'sawtooth', f: 300 * k, f1: 1800 * k, glide: 0.45, dur: 0.55, vol: 0.08, vib: [12, 60], filter: ['lowpass', 4000, 1500, 3] }); S.voice({ f: 600 * k, f1: 2400 * k, glide: 0.45, dur: 0.5, vol: 0.07 }); },
      lose(S) { S.voice({ f: 520, f1: 110, glide: 1, dur: 1.1, vol: 0.18, vib: [7, 35] }); S.voice({ type: 'square', f: 260, f1: 55, glide: 1, dur: 1.1, vol: 0.04, vib: [7, 18], filter: ['lowpass', 1500] }); },
      hello(S) { [72, 79, 67, 84, 76].forEach((m, i) => S.voice({ type: 'square', f: mf(m), f1: mf(m) * (i % 2 ? 0.8 : 1.25), t: i * 0.07, dur: 0.065, vol: 0.06, filter: ['lowpass', 4000] })); },
    },
    // ناري: «فووش» لهب وطقطقة، وبالخسارة «تشّش» مثل نار انطفت
    fire: {
      rev: 0.16, scale: [57, 60, 62, 64, 67, 69],
      gain: { jump: 1.6, boost: 1.26, lose: 1.0, hello: 1.0 },
      jump(S, f) { S.noise({ f: 350, f1: 2600, glide: 0.08, dur: 0.2, vol: 0.2, q: 1.5 }); S.voice({ type: 'triangle', f: f * 0.5, f1: f * 0.75, dur: 0.14, vol: 0.14 }); S.crackle(3, 0.15, 0.12); },
      boost(S, k) { S.noise({ f: 250, f1: 5000 * k, glide: 0.25, dur: 0.6, vol: 0.28, q: 1.2 }); S.voice({ f: 70, f1: 140, dur: 0.5, vol: 0.2 }); S.crackle(8, 0.5, 0.14); },
      lose(S) { S.noise({ type: 'highpass', f: 5000, f1: 1500, dur: 1.2, vol: 0.12, attack: 0.02 }); S.noise({ type: 'bandpass', f: 3000, f1: 800, q: 2, dur: 1.0, vol: 0.08 }); S.voice({ f: 220, f1: 55, glide: 0.9, dur: 1.0, vol: 0.16 }); S.crackle(6, 0.4, 0.1); },
      hello(S) { S.crackle(10, 0.25, 0.14); S.noise({ f: 300, f1: 4500, glide: 0.3, t: 0.15, dur: 0.55, vol: 0.26, q: 1.3 }); S.voice({ f: 90, f1: 160, t: 0.15, dur: 0.45, vol: 0.16 }); },
    },
    // الملك: أبواق ملكية، وبالخسارة «واه واه واااه» الحزينة
    king: {
      rev: 0.22, scale: [60, 64, 67, 72, 76, 79],
      gain: { jump: 2.25, boost: 1.6, lose: 1.46, hello: 1.75 },
      jump(S, f) { brass(S, f, 0, 0.16, 0.09); },
      boost(S, k) { brass(S, mf(67) * k, 0, 0.12, 0.09); brass(S, mf(72) * k, 0.13, 0.42, 0.1, [5.5, 4]); },
      lose(S) { [70, 69, 68].forEach((m, i) => brass(S, mf(m) * 0.5, i * 0.3, 0.28, 0.1)); brass(S, mf(67) * 0.5, 0.9, 0.9, 0.1, [6, 3]); },
      hello(S) { [60, 64, 67].forEach((m, i) => brass(S, mf(m), i * 0.11, 0.1, 0.09)); brass(S, mf(72), 0.33, 0.55, 0.1, [5.5, 5]); },
    },
    // أسطورة: أجراس سحرية تعزف لحن وإنت تصعد
    rainbow: {
      rev: 0.38, scale: [72, 74, 76, 79, 81, 84, 86, 88],
      gain: { jump: 0.85, boost: 0.57, lose: 0.6, hello: 0.7 },
      jump(S, f) { bell(S, f, 0, 0.14, 0.6); },
      boost(S, k) { [72, 76, 79, 84, 88, 91].forEach((m, i) => bell(S, mf(m) * k, i * 0.045, 0.1, 0.6)); },
      lose(S) { [88, 84, 81, 79, 76, 72, 69].forEach((m, i) => bell(S, mf(m), i * 0.11, 0.11, 0.8)); },
      hello(S) { [72, 76, 79, 84].forEach((m, i) => bell(S, mf(m), i * 0.07, 0.12, 0.7)); [72, 76, 79].forEach((m) => bell(S, mf(m + 12), 0.35, 0.06, 1.0)); },
    },
    // المغامر: صفّارة خشب ونقرة طبل صغير، مثل رحّالة بالبر
    explorer: {
      rev: 0.2, scale: [67, 69, 71, 74, 76, 79],
      gain: { jump: 1, boost: 1, lose: 1, hello: 1 },
      jump(S, f) {
        S.voice({ f: f * 0.92, f1: f * 1.04, glide: 0.05, dur: 0.14, vol: 0.2, attack: 0.012, vib: [7, f * 0.01] });
        S.noise({ type: 'bandpass', f: Math.min(f * 2, 8000), q: 9, dur: 0.1, vol: 0.03, attack: 0.01 });
        S.voice({ type: 'triangle', f: 520, f1: 380, dur: 0.04, vol: 0.12, attack: 0.002 });
      },
      boost(S, k) { [67, 71, 74, 79].forEach((m, i) => S.voice({ f: mf(m) * k, t: i * 0.07, dur: i === 3 ? 0.4 : 0.1, vol: 0.18, attack: 0.012, vib: [6, 5] })); S.voice({ type: 'triangle', f: 300, f1: 180, dur: 0.08, vol: 0.14 }); },
      lose(S) { S.voice({ f: mf(79), f1: mf(67), glide: 0.7, dur: 0.8, vol: 0.17, attack: 0.02, vib: [5, 7] }); S.voice({ f: mf(67), f1: mf(60), t: 0.75, glide: 0.5, dur: 0.6, vol: 0.15, attack: 0.02, vib: [5, 6] }); },
      hello(S) { [74, 79, 76, 83].forEach((m, i) => S.voice({ f: mf(m), t: i * 0.1, dur: i === 3 ? 0.35 : 0.09, vol: 0.18, attack: 0.01, vib: [6, 5] })); },
    },
  };
  /** أصوات عالم النار العامة (تستعملها اللعبة والفحص) */
  const FXS = {
    boom(S, s = 1) {
      S.D.rev = 0.25; const v = 0.3 * Math.min(1.3, s);
      S.noise({ f: 900 * s + 200, f1: 60, dur: 0.55 + 0.3 * s, vol: v, q: 0.7, attack: 0.004 });
      S.voice({ f: 110, f1: 32, dur: 0.5 + 0.2 * s, vol: v, attack: 0.004 });
      S.crackle(Math.round(6 * s), 0.35, 0.12);
    },
    lavaPop(S) { S.D.rev = 0.2; S.voice({ f: 180, f1: 520, dur: 0.08, vol: 0.12 }); S.noise({ type: 'bandpass', f: 900, q: 3, dur: 0.05, vol: 0.05 }); },
    /** رعد: «طق» حاد إذا قريب، وبعده هدير يتدحرج */
    /** وضع الحماس: صعود قوي وبعده كورد لامع */
    fever(S) {
      S.D.rev = 0.35;
      S.noise({ type: 'bandpass', f: 300, f1: 4000, glide: 0.5, dur: 0.6, vol: 0.18, attack: 0.45, q: 1.5 });
      [0, 4, 7, 12].forEach((k, i) => S.voice({ type: 'sawtooth', f: mf(62 + k), t: 0.45 + i * 0.05, dur: 0.6, vol: 0.06, attack: 0.01, filter: ['lowpass', 4000, 1200, 1] }));
      S.voice({ type: 'square', f: mf(74), t: 0.45, dur: 0.5, vol: 0.05, vib: [7, 8], filter: ['lowpass', 3000] });
    },
    feverEnd(S) { S.D.rev = 0.3; S.voice({ type: 'sawtooth', f: 600, f1: 150, dur: 0.5, vol: 0.06, filter: ['lowpass', 2000, 400] }); S.noise({ type: 'bandpass', f: 3000, f1: 300, dur: 0.5, vol: 0.08, q: 1.2 }); },
    combo(S, n = 5) { S.D.rev = 0.25; const b = 72 + Math.min(12, (n / 5 - 1) * 2); [0, 4, 7].forEach((k, i) => S.voice({ type: 'triangle', f: mf(b + k), t: i * 0.05, dur: 0.25, vol: 0.1, attack: 0.003 })); },
    slowmo(S) { S.D.rev = 0.5; S.voice({ f: 220, f1: 70, dur: 0.6, vol: 0.18, attack: 0.02 }); S.noise({ f: 1200, f1: 200, dur: 0.6, vol: 0.12, attack: 0.25 }); },
    warn(S) { S.D.rev = 0.15; [0, 0.1].forEach((t) => S.voice({ type: 'square', f: 1320, t, dur: 0.06, vol: 0.045, attack: 0.002, filter: ['lowpass', 4000] })); },
    /** بداية حدث: «ووش» وبعده صفارة للخطر أو نغمة حلوة للهدايا */
    event(S, danger = 0) {
      S.D.rev = 0.35; S.noise({ type: 'highpass', f: 800, f1: 5000, dur: 0.45, vol: 0.12, attack: 0.3 });
      if (danger) [880, 660, 880, 660].forEach((f, i) => S.voice({ type: 'square', f, t: 0.35 + i * 0.16, dur: 0.14, vol: 0.05, filter: ['lowpass', 3000] }));
      else [76, 79, 84].forEach((m, i) => S.voice({ f: mf(m), t: 0.35 + i * 0.08, dur: 0.4, vol: 0.12, attack: 0.003 }));
    },
    revive(S) { S.D.rev = 0.45; [60, 64, 67, 72, 76, 79, 84].forEach((m, i) => S.voice({ type: 'triangle', f: mf(m), t: i * 0.05, dur: 0.5, vol: 0.1, attack: 0.003 })); S.noise({ type: 'highpass', f: 3000, f1: 8000, dur: 0.6, vol: 0.06, attack: 0.3 }); },
    mission(S) { S.D.rev = 0.35; [79, 84, 88, 91].forEach((m, i) => { S.voice({ f: mf(m), t: i * 0.07, dur: 0.6, vol: 0.12, attack: 0.003 }); S.voice({ f: mf(m) * 2, t: i * 0.07, dur: 0.3, vol: 0.04, attack: 0.002 }); }); },
    // ---- أصوات المغامرة
    flag(S) { S.D.rev = 0.35; S.voice({ f: 140, f1: 60, dur: 0.25, vol: 0.3 }); [67, 72, 76, 79, 84].forEach((m, i) => S.voice({ type: 'triangle', f: mf(m), t: 0.15 + i * 0.09, dur: i === 4 ? 0.7 : 0.2, vol: 0.12 })); },
    wind(S, dur = 9) {
      S.D.rev = 0.4;
      S.noise({ type: 'bandpass', f: 280, f1: 1400, glide: dur, dur, vol: 0.13, attack: dur * 0.8, q: 3 });
      S.noise({ type: 'bandpass', f: 650, f1: 2400, glide: dur, dur, vol: 0.08, attack: dur * 0.85, q: 7, t: 0.3 });
    },
    gust(S) { S.D.rev = 0.4; S.noise({ f: 2600, f1: 200, dur: 1.8, vol: 0.42, attack: 0.04, q: 0.7 }); S.noise({ type: 'highpass', f: 3200, f1: 800, dur: 1.2, vol: 0.15, attack: 0.02 }); S.voice({ f: 60, f1: 35, dur: 1.2, vol: 0.2 }); },
    chute(S) { S.D.rev = 0.2; S.noise({ type: 'bandpass', f: 900, q: 1, dur: 0.18, vol: 0.3, attack: 0.003 }); S.noise({ type: 'bandpass', f: 600, q: 1, t: 0.08, dur: 0.25, vol: 0.2, attack: 0.003 }); S.voice({ f: 90, f1: 60, dur: 0.25, vol: 0.2 }); },
    thud(S) { S.D.rev = 0.15; S.voice({ f: 120, f1: 50, dur: 0.25, vol: 0.3 }); S.noise({ f: 800, f1: 200, dur: 0.2, vol: 0.15 }); },
    step(S, k = 0) { S.D.rev = 0.05; S.noise({ type: 'bandpass', f: 700 + k * 300, q: 0.8, dur: 0.07, vol: 0.22 + k * 0.1, attack: 0.004 }); S.voice({ f: 130, f1: 70, dur: 0.05, vol: 0.08 + k * 0.04, attack: 0.003 }); },
    snort(S) { S.D.rev = 0.2; S.noise({ type: 'bandpass', f: 1500, f1: 600, q: 1.2, dur: 0.2, vol: 0.55, attack: 0.012 }); S.noise({ type: 'bandpass', f: 900, f1: 500, q: 1.2, t: 0.22, dur: 0.14, vol: 0.35, attack: 0.01 }); },
    catchIt(S) { S.D.rev = 0.3; S.noise({ type: 'bandpass', f: 1500, f1: 4000, q: 2, dur: 0.3, vol: 0.12 }); [72, 76, 79, 84].forEach((m, i) => S.voice({ type: 'triangle', f: mf(m), t: 0.25 + i * 0.07, dur: 0.3, vol: 0.1 })); },
    splash(S) { S.D.rev = 0.1; S.noise({ type: 'bandpass', f: 1900, f1: 650, q: 1.1, dur: 0.17, vol: 0.2, attack: 0.004 }); S.noise({ type: 'highpass', f: 3200, t: 0.03, dur: 0.08, vol: 0.06, attack: 0.003 }); },
    talk(S) { S.D.rev = 0.1; for (let i = 0; i < 3; i++) S.voice({ type: 'square', f: 170 + Math.random() * 110, t: i * 0.06, dur: 0.05, vol: 0.03, attack: 0.004, filter: ['lowpass', 1500] }); },
    reward(S) {
      S.D.rev = 0.35;
      for (let i = 0; i < 14; i++) S.voice({ type: 'square', f: 1100 + Math.random() * 900, t: i * 0.05, dur: 0.08, vol: 0.04, filter: ['lowpass', 6000] });
      [60, 64, 67, 72, 76, 79, 84].forEach((m, i) => S.voice({ type: 'triangle', f: mf(m), t: 0.2 + i * 0.07, dur: 0.5, vol: 0.1 }));
    },
    count(S, n = 1) { S.D.rev = 0.2; S.voice({ type: 'square', f: n ? 660 : 1320, dur: n ? 0.12 : 0.3, vol: 0.07, attack: 0.003, filter: ['lowpass', 4000] }); },
    /** طيارة نفاثة تعبر: هدير يعلى ويوطى (دوبلر) ويمشي من جهة لجهة */
    jet(S, dir = 1) {
      S.D.rev = 0.3; const d = dir >= 0 ? 1 : -1;
      S.noise({ type: 'bandpass', f: 450, f1: 1500, dur: 1.5, vol: 0.13, q: 1.1, attack: 1.2, pan: -0.85 * d, pan1: 0 });
      S.noise({ type: 'bandpass', f: 1500, f1: 350, t: 1.3, dur: 1.7, vol: 0.13, q: 1.1, attack: 0.06, pan: 0, pan1: 0.85 * d });
      S.voice({ type: 'sawtooth', f: 92, f1: 60, dur: 3, vol: 0.05, attack: 1.2, filter: ['lowpass', 380], pan: -0.6 * d, pan1: 0.6 * d });
    },
    whoosh(S) { S.D.rev = 0.3; S.noise({ type: 'highpass', f: 1200, f1: 4500, dur: 0.5, vol: 0.18, attack: 0.08 }); S.noise({ type: 'bandpass', f: 900, f1: 300, t: 0.15, dur: 0.9, vol: 0.12 }); },
    coin(S) { S.voice({ type: 'square', f: 988, dur: 0.06, vol: 0.06, filter: ['lowpass', 5000] }); S.voice({ type: 'square', f: 1319, t: 0.06, dur: 0.22, vol: 0.06, filter: ['lowpass', 5000] }); },
    // ---- أصوات الجبل
    howl(S) { S.D.rev = 0.55; S.voice({ type: 'triangle', f: 330, f1: 560, dur: 1.5, vol: 0.13, attack: 0.3, vib: [5, 10], filter: ['lowpass', 1800] }); S.voice({ type: 'sine', f: 335, f1: 545, t: 0.05, dur: 1.4, vol: 0.08, attack: 0.35, vib: [5.5, 8] }); S.noise({ type: 'bandpass', f: 900, q: 6, dur: 1.2, vol: 0.03, attack: 0.3 }); },
    growl(S) { S.D.rev = 0.15; S.voice({ type: 'sawtooth', f: 78, f1: 66, dur: 0.7, vol: 0.12, attack: 0.05, vib: [22, 7], filter: ['lowpass', 520] }); S.noise({ type: 'bandpass', f: 260, q: 3, dur: 0.6, vol: 0.2, attack: 0.05 }); },
    grunt(S) { S.D.rev = 0.12; [0, 0.2].forEach((t) => { S.noise({ type: 'bandpass', f: 420, f1: 230, q: 2.2, t, dur: 0.16, vol: 0.38, attack: 0.008 }); S.voice({ type: 'sawtooth', f: 120, f1: 85, t, dur: 0.15, vol: 0.06, filter: ['lowpass', 700] }); }); },
    creak(S) { S.D.rev = 0.12; S.voice({ type: 'sawtooth', f: 210 + Math.random() * 60, f1: 150, dur: 0.32, vol: 0.035, attack: 0.04, vib: [28, 18], filter: ['lowpass', 1300] }); },
    toll(S) { S.D.rev = 0.7; [[1, 0.2, 3.2], [2, 0.09, 2.2], [2.4, 0.07, 1.6], [3, 0.05, 1.3], [4.2, 0.03, 0.9], [0.5, 0.12, 3.6]].forEach(([k, v, d]) => S.voice({ f: 330 * k, dur: d, vol: v, attack: 0.002 })); S.noise({ type: 'highpass', f: 2500, dur: 0.05, vol: 0.08, attack: 0.001 }); },
    pour(S) { S.D.rev = 0.15; S.noise({ type: 'bandpass', f: 1300, f1: 2600, q: 4, dur: 1.0, vol: 0.13, attack: 0.08 }); [0, 1.1].forEach((t) => S.voice({ f: 2600, t, dur: 0.18, vol: 0.05, attack: 0.002 })); },
    hurt(S) { S.D.rev = 0.15; S.noise({ f: 1100, f1: 200, dur: 0.18, vol: 0.28 }); S.voice({ type: 'square', f: 420, f1: 140, dur: 0.22, vol: 0.07, filter: ['lowpass', 2500] }); },
    fallW(S) { S.D.rev = 0.3; S.voice({ type: 'sine', f: 1000, f1: 280, dur: 0.9, vol: 0.1, attack: 0.01 }); },
    thunder(S, near = 1, delay = 0) {
      S.D.rev = 0.4;
      if (near) S.noise({ type: 'highpass', f: 2600, f1: 700, t: delay, dur: 0.16, vol: 0.3, attack: 0.002 });
      S.noise({ f: 420, f1: 70, t: delay + 0.03, dur: 2.2, vol: near ? 0.4 : 0.28, attack: 0.04, q: 0.6 });
      S.noise({ f: 200, f1: 55, t: delay + 0.4, dur: 1.7, vol: near ? 0.26 : 0.18, attack: 0.12 });
      S.voice({ f: 58, f1: 30, t: delay, dur: 1.9, vol: near ? 0.24 : 0.15, attack: 0.02 });
      S.crackle(near ? 9 : 3, 0.5, 0.11, delay);
    },
  };
  const packOf = (id) => PACKS[id] || PACKS.green;
  /** يجهّز صدى الشخصية وتوازن صوتها (gain) حتى كل الشخصيات تطلع بنفس العلو تقريباً */
  const usePack = (S, id, kind) => { const p = packOf(id); S.D.rev = p.rev; S.D.echo = p.echo || 0; S.D.gain = (p.gain && p.gain[kind]) || 1; return p; };

  const Sfx = (() => {
    let ac = null, S = null, rocketNode = null;
    const noteIdx = {};
    function init() {
      if (ac) { if (ac.state !== 'running') ac.resume().catch(() => {}); return; }
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      // ambient = يحترم زر الصامت بالآيفون وما يوقف أغانيك
      try { if (navigator.audioSession) navigator.audioSession.type = 'ambient'; } catch (e) { /* */ }
      ac = new AC();
      S = createSynth(ac);
      Music.attach(ac);
      const b = ac.createBufferSource(); b.buffer = ac.createBuffer(1, 1, 22050); b.connect(ac.destination); b.start(0); // يفك قفل الصوت بسفاري
      if (ac.state !== 'running') ac.resume().catch(() => {});
    }
    const ok = () => save.sound && S && ac.state !== 'closed';
    /** النوتة الجاية: تمشي خطوة لفوك أو لجوه على سلّم الشخصية، فالقفزات تطلع لحن */
    function nextNote(id, p) {
      let i = noteIdx[id] != null ? noteIdx[id] : p.scale.length >> 1;
      i += pick([-1, 1, 1, -2, 2, -1, 1]);
      if (i < 0) i = 1; else if (i >= p.scale.length) i = p.scale.length - 2;
      noteIdx[id] = i;
      return mf(Music.snap(p.scale[i])); // القفزة تنعزف من نغمات الكورد الحالي
    }
    const plain = () => { S.D.rev = 0.12; S.D.echo = 0; S.D.gain = 1; return S; };
    const api = {
      init,
      jump(id) { if (!ok()) return; const p = usePack(S, id, 'jump'); p.jump(S, nextNote(id, p)); },
      boost(id, kind) { if (!ok()) return; usePack(S, id, 'boost').boost(S, kind === 'tramp' ? 1.25 : 1); },
      lose(id, how) {
        if (!ok()) return;
        if (how === 'hit') plain().noise({ f: 900, f1: 200, dur: 0.15, vol: 0.25 });
        usePack(S, id, 'lose').lose(S);
      },
      hello(id) { if (!ok()) return; usePack(S, id, 'hello').hello(S); },
      coin() { if (ok()) FXS.coin(plain()); },
      brk() { if (!ok()) return; const s = plain(); s.noise({ f: 1400, f1: 300, dur: 0.2, vol: 0.24 }); s.voice({ type: 'triangle', f: 200, f1: 70, dur: 0.18, vol: 0.18 }); },
      vanish() { if (!ok()) return; plain().voice({ f: 1200, f1: 400, dur: 0.14, vol: 0.12 }); },
      rocket() {
        if (!ok()) return; api.rocketStop(); const s = plain();
        rocketNode = s.noise({ type: 'bandpass', f: 500, f1: 1400, dur: C.ROCKET_T, vol: 0.14 });
        s.voice({ type: 'sawtooth', f: 90, f1: 260, dur: C.ROCKET_T * 0.9, vol: 0.04 });
      },
      rocketStop() {
        if (!rocketNode) return;
        try { rocketNode.g.gain.cancelScheduledValues(ac.currentTime); rocketNode.g.gain.setTargetAtTime(0.0001, ac.currentTime, 0.05); rocketNode.s.stop(ac.currentTime + 0.3); } catch (e) { /* */ }
        rocketNode = null;
      },
      shield() { if (!ok()) return; const s = plain(); [660, 880, 1320].forEach((f, i) => s.voice({ f, t: i * 0.06, dur: 0.18, vol: 0.14 })); },
      shieldBreak() { if (!ok()) return; const s = plain(); s.noise({ type: 'highpass', f: 3000, dur: 0.3, vol: 0.17 }); s.voice({ f: 900, f1: 200, dur: 0.3, vol: 0.15 }); },
      stomp() { if (!ok()) return; const s = plain(); s.voice({ type: 'square', f: 520, f1: 140, dur: 0.14, vol: 0.1 }); s.voice({ f: 300, f1: 1000, t: 0.05, dur: 0.18, vol: 0.2 }); },
      record() { if (!ok()) return; const s = plain(); [523, 659, 784, 1047, 1319].forEach((f, i) => s.voice({ type: 'square', f, t: i * 0.08, dur: i === 4 ? 0.35 : 0.12, vol: 0.07, filter: ['lowpass', 5000] })); },
      milestone() { if (!ok()) return; const s = plain(); [784, 1047].forEach((f, i) => s.voice({ type: 'triangle', f, t: i * 0.09, dur: 0.16, vol: 0.16 })); },
      /** انفجار: s = الحجم */
      boom(s = 1) { if (ok()) { FXS.boom(plain(), s); if (s >= 0.6) Music.duck(0.55, 0.3); } },
      lavaPop() { if (ok()) FXS.lavaPop(plain()); },
      thunder(near, delay) { if (ok()) FXS.thunder(plain(), near ? 1 : 0, delay || 0); },
      jet(dir) { if (ok()) FXS.jet(plain(), dir); },
      fever() { if (ok()) FXS.fever(plain()); }, feverEnd() { if (ok()) FXS.feverEnd(plain()); },
      combo(n) { if (ok()) FXS.combo(plain(), n); }, slowmo() { if (ok()) FXS.slowmo(plain()); },
      warn() { if (ok()) FXS.warn(plain()); }, event(danger) { if (ok()) FXS.event(plain(), danger ? 1 : 0); },
      revive() { if (ok()) FXS.revive(plain()); }, mission() { if (ok()) FXS.mission(plain()); }, count(n) { if (ok()) FXS.count(plain(), n); },
      flag() { if (ok()) FXS.flag(plain()); }, wind(d) { if (ok()) FXS.wind(plain(), d); }, gust() { if (ok()) FXS.gust(plain()); },
      chute() { if (ok()) FXS.chute(plain()); }, thud() { if (ok()) FXS.thud(plain()); }, step(k) { if (ok()) FXS.step(plain(), k); },
      snort() { if (ok()) FXS.snort(plain()); }, catchIt() { if (ok()) FXS.catchIt(plain()); }, talk() { if (ok()) FXS.talk(plain()); }, splash() { if (ok()) FXS.splash(plain()); }, reward() { if (ok()) FXS.reward(plain()); },
      whoosh() { if (ok()) FXS.whoosh(plain()); },
      howl() { if (ok()) FXS.howl(plain()); }, growl() { if (ok()) FXS.growl(plain()); }, grunt() { if (ok()) FXS.grunt(plain()); }, creak() { if (ok()) FXS.creak(plain()); },
      toll() { if (ok()) FXS.toll(plain()); }, pour() { if (ok()) FXS.pour(plain()); }, hurt() { if (ok()) FXS.hurt(plain()); }, fallW() { if (ok()) FXS.fallW(plain()); },
      click() { if (!ok()) return; plain().voice({ f: 620, f1: 820, dur: 0.06, vol: 0.12, rev: 0 }); },
      buy() { if (!ok()) return; const s = plain(); [880, 1175, 1568].forEach((f, i) => s.voice({ type: 'square', f, t: i * 0.07, dur: 0.1, vol: 0.07, filter: ['lowpass', 5000] })); },
    };
    return api;
  })();

  /** للفحص: يسجّل أصوات بدون سماعات ويرجّع العينات */
  function renderSounds(list, seconds) {
    const OAC = window.OfflineAudioContext || window.webkitOfflineAudioContext;
    const sr = 44100, oac = new OAC(1, Math.ceil(sr * seconds), sr), S = createSynth(oac);
    for (const [id, kind, t, note] of list) {
      if (id === 'fx') { S.D.echo = 0; S.D.gain = 1; S.D.t0 = t; FXS[kind](S, note != null ? note : 1); continue; }
      const p = usePack(S, id, kind); S.D.t0 = t;
      if (kind === 'jump') p.jump(S, mf(p.scale[note != null ? note : 2]));
      else if (kind === 'boost') p.boost(S, 1);
      else p[kind](S);
    }
    return oac.startRendering().then((buf) => buf.getChannelData(0));
  }
  const vibrate = (ms) => { try { if (navigator.vibrate) navigator.vibrate(ms); } catch (e) { /* */ } };

  // ================================================================ موسيقى الخلفية 🎵 (تتولد وتتكيف مع اللعب)
  // - كل ما تصعد: تدخل آلات جديدة (طبل، باص، لحن…) والسرعة تزيد شوية شوية
  // - اللحن والمقام يتغيرون ويا السما: نهار ← غروب ← ليل ← فضاء، وعالم «ناري» مقام حجاز بإيقاع مقسوم
  // - الصاروخ يرفع الحماس، قرب الرقم القياسي يطلع صوت «تصاعد»، ولما تكسره الموسيقى تصعد نغمتين
  // - الإيقاف يكتم الموسيقى (كأنها جاية من ورا باب)، والطيحة توقفها مثل شريط كاسيت
  // - قفزات الشخصية تنعزف من نغمات الكورد الحالي، فتصير جزء من الموسيقى
  const SCALES = {
    major: [0, 2, 4, 5, 7, 9, 11], minor: [0, 2, 3, 5, 7, 8, 10], dorian: [0, 2, 3, 5, 7, 9, 10],
    hijaz: [0, 1, 4, 5, 7, 8, 10], // مقام الحجاز: ري مي♭ فا# صول لا سي♭ دو
  };
  const MI = { // آلات الموسيقى
    padSoft(S, f, d, v) { S.voice({ type: 'triangle', f, dur: d, vol: v, attack: d * 0.25 }); S.voice({ f: f * 2, dur: d, vol: v * 0.3, attack: d * 0.3, detune: 6 }); },
    padWarm(S, f, d, v) { S.voice({ type: 'sawtooth', f, dur: d, vol: v * 0.6, attack: d * 0.2, filter: ['lowpass', 1300, 700, 0.6], detune: -7 }); S.voice({ type: 'sawtooth', f, dur: d, vol: v * 0.6, attack: d * 0.2, filter: ['lowpass', 1300, 700, 0.6], detune: 7 }); },
    padGlass(S, f, d, v) { S.voice({ f, dur: d, vol: v, attack: d * 0.35 }); S.voice({ f: f * 3, dur: d * 0.8, vol: v * 0.12, attack: d * 0.4, detune: 5 }); },
    padDark(S, f, d, v) { S.voice({ type: 'sawtooth', f, dur: d, vol: v * 0.8, attack: d * 0.15, filter: ['lowpass', 800, 450, 1] }); },
    pluck(S, f, d, v, pan) { S.voice({ type: 'square', f, dur: Math.max(0.12, d), vol: v, attack: 0.003, filter: ['lowpass', Math.min(f * 6, 8000), f * 1.1, 1.2], pan }); },
    bell(S, f, d, v, pan) { S.voice({ f, dur: 0.5, vol: v, attack: 0.003, pan }); S.voice({ f: f * 2, dur: 0.25, vol: v * 0.3, attack: 0.002, pan }); },
    qanun(S, f, d, v, pan) { S.voice({ type: 'sawtooth', f, dur: 0.35, vol: v, attack: 0.002, filter: ['lowpass', Math.min(f * 7, 8000), f * 1.3, 2], pan }); },
    bass(S, f, d, v) { S.voice({ f, dur: d, vol: v, attack: 0.006 }); S.voice({ type: 'triangle', f: f * 2, dur: d * 0.6, vol: v * 0.25, attack: 0.006 }); },
    bassDist(S, f, d, v) { S.voice({ type: 'sawtooth', f, dur: d, vol: v * 0.55, attack: 0.005, filter: ['lowpass', 520, 180, 3] }); S.voice({ f: f / 2, dur: d, vol: v * 0.5, attack: 0.005 }); },
    leadBell(S, f, d, v) { S.voice({ type: 'triangle', f, dur: d + 0.25, vol: v, attack: 0.004 }); S.voice({ f: f * 2, dur: d * 0.6, vol: v * 0.25, attack: 0.003 }); },
    leadSquare(S, f, d, v) { S.voice({ type: 'square', f, dur: d + 0.1, vol: v * 0.55, attack: 0.02, vib: [5.5, f * 0.012], filter: ['lowpass', 2600] }); },
    leadEcho(S, f, d, v) { S.voice({ f, dur: d + 0.3, vol: v, attack: 0.03, vib: [5, f * 0.01], echo: 0.45 }); },
    leadGlass(S, f, d, v) { S.voice({ f, dur: d + 0.5, vol: v * 0.9, attack: 0.04, rev: 0.6 }); S.voice({ f: f * 2.01, dur: d + 0.3, vol: v * 0.2, attack: 0.05, rev: 0.6 }); },
    // مزمار: نفخة مع «سحبة» صغيرة لفوك وترعيشة، مثل النايات والمزامير الشرقية
    leadFlute(S, f, d, v) { S.voice({ f, dur: d + 0.15, vol: v * 0.9, attack: 0.05, vib: [5, f * 0.012] }); S.noise({ type: 'bandpass', f: Math.min(f * 2, 8000), q: 8, dur: Math.min(0.3, d + 0.05), vol: v * 0.08, attack: 0.03 }); },
    leadMizmar(S, f, d, v) { S.voice({ type: 'sawtooth', f: f * 0.94, f1: f, glide: 0.06, dur: d + 0.12, vol: v * 0.5, attack: 0.03, vib: [6.2, f * 0.016], filter: ['lowpass', Math.min(f * 5, 6000), f * 2.5, 2] }); },
  };
  const DR = { // طبول
    kick(S, v) { S.voice({ f: 150, f1: 45, glide: 0.12, dur: 0.28, vol: 0.55 * v, attack: 0.002, rev: 0.02 }); S.noise({ f: 2000, dur: 0.02, vol: 0.12 * v, attack: 0.001, rev: 0 }); },
    snare(S, v) { S.noise({ type: 'bandpass', f: 1900, q: 0.8, dur: 0.16, vol: 0.26 * v, attack: 0.002 }); S.voice({ type: 'triangle', f: 190, f1: 150, dur: 0.09, vol: 0.16 * v, attack: 0.002 }); },
    clap(S, v) { for (let i = 0; i < 3; i++) S.noise({ type: 'bandpass', f: 1400, q: 1.2, t: i * 0.011, dur: 0.06 + i * 0.03, vol: 0.18 * v, attack: 0.001 }); },
    hat(S, v, open, pan) { S.noise({ type: 'highpass', f: 7500, dur: open ? 0.16 : 0.035, vol: 0.08 * v, attack: 0.001, rev: 0.05, pan }); },
    crash(S, v) { S.noise({ type: 'highpass', f: 4500, f1: 3000, dur: 1.6, vol: 0.13 * v, attack: 0.003, rev: 0.3 }); },
    dum(S, v) { S.voice({ f: 120, f1: 68, glide: 0.1, dur: 0.3, vol: 0.5 * v, attack: 0.002 }); S.noise({ f: 600, dur: 0.06, vol: 0.12 * v, attack: 0.001 }); },
    tek(S, v, pan) { S.noise({ type: 'bandpass', f: 3200, q: 2.5, dur: 0.06, vol: 0.24 * v, attack: 0.001, pan }); S.voice({ type: 'triangle', f: 980, f1: 700, dur: 0.035, vol: 0.07 * v, attack: 0.001, pan }); },
    ka(S, v, pan) { S.noise({ type: 'bandpass', f: 2600, q: 2, dur: 0.04, vol: 0.13 * v, attack: 0.001, pan }); },
    riq(S, v, pan) { S.noise({ type: 'bandpass', f: 8000, q: 1.5, dur: 0.05, vol: 0.06 * v, attack: 0.001, pan }); },
    taiko(S, v) { S.voice({ f: 85, f1: 38, glide: 0.3, dur: 0.7, vol: 0.5 * v, attack: 0.003 }); S.noise({ f: 400, f1: 80, dur: 0.4, vol: 0.18 * v }); },
  };
  /** الأنماط: مقام، تتابع الكوردات (درجات بالمقام)، السرعة، الإيقاع، والآلات */
  const STY = {
    day: { key: 60, scale: 'major', prog: [0, 4, 5, 3], bpm: [100, 120], beat: 'pop', rev: 0.22, pad: 'padSoft', arp: 'pluck', lead: 'leadBell', bass: 'bass' },
    sunset: { key: 57, scale: 'minor', prog: [0, 5, 2, 6], bpm: [104, 122], beat: 'pop', rev: 0.28, pad: 'padWarm', arp: 'pluck', lead: 'leadSquare', bass: 'bass' },
    night: { key: 62, scale: 'dorian', prog: [0, 3, 0, 6], bpm: [106, 124], beat: 'half', rev: 0.38, pad: 'padWarm', arp: 'bell', lead: 'leadEcho', bass: 'bass' },
    space: { key: 64, scale: 'minor', prog: [0, 5, 3, 4], bpm: [96, 112], beat: 'half', rev: 0.55, pad: 'padGlass', arp: 'bell', lead: 'leadGlass', bass: 'bass', sev: true },
    summit: { key: 65, scale: 'major', prog: [0, 3, 5, 4], bpm: [80, 100], beat: 'half', rev: 0.5, pad: 'padGlass', arp: 'bell', lead: 'leadGlass', bass: 'bass' },
    valley: { key: 67, scale: 'major', prog: [0, 4, 5, 3], bpm: [100, 116], beat: 'pop', rev: 0.25, pad: 'padSoft', arp: 'pluck', lead: 'leadFlute', bass: 'bass' },
    forest: { key: 62, scale: 'dorian', prog: [0, 3, 4, 0], bpm: [96, 112], beat: 'pop', rev: 0.35, pad: 'padWarm', arp: 'pluck', lead: 'leadFlute', bass: 'bass' },
    fire: { key: 62, scale: 'hijaz', prog: [0, 1, 0, 6], bpm: [112, 138], beat: 'maqsum', rev: 0.24, pad: 'padDark', arp: 'qanun', lead: 'leadMizmar', bass: 'bassDist' },
  };
  const BASS = { pop: [[0, 0], [6, 0], [8, 0], [11, 7], [14, 12]], half: [[0, 0], [10, 7]], maqsum: [[0, 0], [3, 0], [6, 0], [8, 0], [12, 7]] };
  const RHY = [[1, 0, 1, 1, 0, 1, 0, 0], [1, 1, 0, 1, 0, 1, 1, 0], [1, 0, 0, 1, 1, 0, 1, 0], [1, 0, 1, 0, 1, 1, 0, 0], [1, 1, 1, 0, 1, 0, 0, 0], [0, 1, 1, 0, 1, 1, 0, 1]];

  function noteAt(m, sty, deg) {
    const sc = SCALES[sty.scale], n = sc.length, oct = Math.floor(deg / n), d = ((deg % n) + n) % n;
    return sty.key + m.mod + sc[d] + 12 * oct;
  }
  /** لحن صغير (8 نوطات ثُمن) يتكرر بشكل A A B A حتى ينحفظ بالذاكرة، ويتجدد كل 8 بارات */
  function genMotif(r) {
    const tones = [-3, 0, 2, 4, 7];
    const snapTone = (d) => tones.reduce((a, b) => (Math.abs(b - d) < Math.abs(a - d) ? b : a));
    const mk = (rh, start) => {
      let d = start;
      return rh.map((on, i) => {
        if (!on) return null;
        if (i > 0) d += [-2, -1, -1, 1, 1, 2, 0][(r() * 7) | 0];
        d = clamp(d, -2, 7);
        if (i % 4 === 0) d = snapTone(d);
        return d;
      });
    };
    const holds = (a) => a.map((v, i) => { if (v == null) return 0; let k = i + 1; while (k < a.length && a[k] == null) k++; return Math.min(3, k - i); });
    const a = mk(RHY[(r() * RHY.length) | 0], [0, 2, 4][(r() * 3) | 0]);
    const b = mk(RHY[(r() * RHY.length) | 0], [2, 4][(r() * 2) | 0]);
    const a2 = a.slice(); for (let i = a2.length - 1; i >= 0; i--) if (a2[i] != null) { a2[i] = 0; break; } // نهاية تستقر
    return { a, b, a2, ha: holds(a), hb: holds(b), ha2: holds(a2) };
  }

  /** محرك موسيقى على AudioContext (حقيقي أو Offline للفحص) */
  function createMusic(ac, dest) {
    const bus = ac.createGain(), lp = ac.createBiquadFilter();
    lp.type = 'lowpass'; lp.frequency.value = 16000; lp.Q.value = 0.5;
    bus.connect(lp); lp.connect(dest);
    const m = { ac, bus, lp, S: createSynth(ac, bus, 1.1), style: 'day', wantStyle: 'day', inten: 0.6, bpm: 96, mod: 0, modNext: 0,
      step: 0, nextT: 0, motif: null, section: -1, riser: false, fill: false, crashNext: false, chord: [60, 64, 67], rnd: Core.mulberry32((Math.random() * 1e9) | 0) };
    const w = (th) => clamp(m.inten - th + 0.5, 0, 1); // وزن الطبقة: تدخل بالتدريج حوالين العتبة th
    function onBar(barN, T, sty) {
      if (m.wantStyle !== m.style) { m.style = m.wantStyle; m.section = -1; if (m.inten > 1) m.crashNext = true; }
      if (m.modNext !== m.mod) { m.mod = m.modNext; m.crashNext = true; }
      const sec = barN >> 3;
      if (sec !== m.section || !m.motif) { m.section = sec; m.motif = genMotif(m.rnd); }
    }
    function playStep(step, T) {
      const s = step & 15, barN = step >> 4;
      let sty = STY[m.style];
      if (s === 0) { onBar(barN, T, sty); sty = STY[m.style]; }
      const S = m.S, I = m.inten, b16 = 60 / m.bpm / 4, bar = b16 * 16;
      S.D.t0 = Math.max(0, T - ac.currentTime); S.D.gain = 1; S.D.echo = 0; S.D.rev = sty.rev;
      const deg = sty.prog[barN % sty.prog.length];
      const chord = [0, 2, 4].concat(sty.sev ? [6] : []).map((k) => noteAt(m, sty, deg + k));
      if (s === 0) m.chord = chord;
      // كوردات خلفية
      if (s === 0) chord.forEach((n) => MI[sty.pad](S, mf(n - 12), bar * 0.98, I < 1 ? 0.07 : 0.045));
      if (s === 0 && m.crashNext) { DR.crash(S, 1); m.crashNext = false; }
      // أربيجو
      const aw = w(0.6);
      const sixteen = I >= 3;
      if (aw > 0 && (sixteen || s % 2 === 0)) {
        const idx = sixteen ? s : s >> 1, n = chord[idx % chord.length] + 12 * ((idx / chord.length) % 2 < 1 ? 0 : 1);
        MI[sty.arp](S, mf(n), b16 * 1.5, 0.05 * aw, idx % 2 ? 0.3 : -0.3);
        if (I >= 3.8 && s % 4 === 2) MI[sty.arp](S, mf(n + 12), b16, 0.025 * w(3.8), 0);
      }
      // باص
      const bw = w(1.2);
      if (bw > 0) for (const [st, off] of BASS[sty.beat]) if (st === s) MI[sty.bass](S, mf(chord[0] - 24 + off), b16 * (sty.beat === 'half' ? 6 : 2.5), 0.16 * bw);
      // طبول
      if (sty.beat === 'maqsum') { // دُم تك . تك دُم . تك .
        if (s === 0 || s === 8) DR.dum(S, w(1.2));
        if ((s === 2 || s === 6 || s === 12) && w(1.4) > 0) DR.tek(S, w(1.4), s === 6 ? 0.25 : -0.15);
        if ((s === 4 || s === 10 || s === 14 || s === 15) && w(3) > 0) DR.ka(S, w(3) * (s === 15 ? 0.6 : 1), 0.3);
        if (w(2.4) > 0 && s % 2 === 1) DR.riq(S, w(2.4), -0.3);
        if (s === 0 && barN % 2 === 0 && w(3.5) > 0) DR.taiko(S, w(3.5));
      } else if (sty.beat === 'half') {
        if (s === 0 || (s === 10 && I >= 3)) DR.kick(S, w(1.2));
        if (s === 8 && w(2) > 0) DR.clap(S, w(2));
        if (s % 2 === 0 && w(2.5) > 0) DR.hat(S, w(2.5) * (s % 4 === 2 ? 1 : 0.5), false, 0.2);
        if (s % 2 === 1 && w(3.5) > 0) DR.riq(S, w(3.5), -0.2);
      } else {
        if (s === 0 || s === 8 || (s === 10 && I >= 3.2)) DR.kick(S, w(1.2));
        if ((s === 4 || s === 12) && w(2) > 0) DR.snare(S, w(2));
        if (w(2) > 0 && (s % 2 === 0 || I >= 3)) DR.hat(S, w(2) * (s % 4 === 2 ? 1 : 0.55), s === 14 && I >= 3.5, 0.2);
      }
      // «فل» طبول آخر البار (عند كل 1000 نقطة)
      if (m.fill && s >= 12) { DR[sty.beat === 'maqsum' ? 'tek' : 'snare'](S, 0.5 + (s - 12) * 0.15); if (s === 15) { m.fill = false; m.crashNext = true; } }
      // صوت تصاعد قرب الرقم القياسي
      if (m.riser && s === 0 && barN % 2 === 0) S.noise({ type: 'bandpass', f: 400, f1: 5000, glide: bar * 2, dur: bar * 2, vol: 0.07, attack: bar * 1.8, q: 2, rev: 0.3 });
      // اللحن
      const lw = w(1.8);
      if (lw > 0 && s % 2 === 0) {
        const slot = s >> 1, pb = barN % 4, mo = m.motif;
        const arr = pb === 2 ? mo.b : pb === 3 ? mo.a2 : mo.a, hd = pb === 2 ? mo.hb : pb === 3 ? mo.ha2 : mo.ha;
        if (arr[slot] != null) MI[sty.lead](S, mf(noteAt(m, sty, deg + arr[slot]) + 12), hd[slot] * b16 * 2 * 0.9, 0.085 * lw);
      }
    }
    m.scheduleUntil = (until) => { while (m.nextT < until) { playStep(m.step, m.nextT); m.nextT += 60 / m.bpm / 4; m.step++; } };
    return m;
  }

  const MUSIC_VOL = 0.27; // أوطى من المؤثرات حتى تبقى خلفية
  const Music = (() => {
    let m = null, ac = null, mode = 'home', want = -1, duckUntil = 0;
    const LP = { home: 9000, play: 16000, pause: 650, over: 1300 };
    function attach(a) { ac = a; m = createMusic(ac, ac.destination); m.bus.gain.value = 0.0001; m.nextT = ac.currentTime + 0.1; }
    const active = () => m && save.sound && save.music && ac.state === 'running';
    function setGain(g, tc = 0.3) { const t = ac.currentTime; m.bus.gain.cancelScheduledValues(t); m.bus.gain.setTargetAtTime(Math.max(0.0001, g), t, tc); }
    function setLp(f, tc = 0.15) { const t = ac.currentTime; m.lp.frequency.cancelScheduledValues(t); m.lp.frequency.setTargetAtTime(f, t, tc); }
    return {
      attach,
      setMode(md) { mode = md; if (m) setLp(LP[md] || 16000); want = -1; },
      /** كل فريم: نحدّث النمط والحماس والسرعة ونجدول النوطات الجاية */
      update(dt, info) {
        if (!m) return;
        const target = active() ? MUSIC_VOL * (mode === 'pause' ? 0.5 : mode === 'over' ? 0.6 : 1) : 0;
        if (Math.abs(target - want) > 0.001 && ac.currentTime > duckUntil) { setGain(target); want = target; }
        if (!active()) { m.nextT = ac.currentTime + 0.1; m.step = (m.step + 15) & ~15; return; }
        m.wantStyle = info.style;
        m.inten += clamp(info.intensity - m.inten, -dt * 0.7, dt * 0.7);
        m.bpm += (info.bpm - m.bpm) * Math.min(1, dt * 0.4);
        m.riser = !!info.riser;
        if (m.nextT < ac.currentTime - 0.25) { m.nextT = ac.currentTime + 0.05; m.step = (m.step + 15) & ~15; }
        m.scheduleUntil(ac.currentTime + 0.16);
      },
      /** يوطّي الموسيقى لحظة حتى يبين صوت انفجار/رعد */
      duck(depth = 0.4, hold = 0.35) {
        if (!active() || want <= 0) return;
        const t = ac.currentTime; m.bus.gain.cancelScheduledValues(t);
        m.bus.gain.setTargetAtTime(want * depth, t, 0.03); m.bus.gain.setTargetAtTime(want, t + hold, 0.4);
        duckUntil = t + hold + 0.8;
      },
      /** إيقاف مثل الكاسيت لما تطيح */
      tapeStop() {
        if (!m) return; const t = ac.currentTime;
        m.lp.frequency.cancelScheduledValues(t); m.lp.frequency.setValueAtTime(m.lp.frequency.value, t); m.lp.frequency.exponentialRampToValueAtTime(220, t + 0.7);
        m.bus.gain.cancelScheduledValues(t); m.bus.gain.setTargetAtTime(Math.max(0.0001, want * 0.35), t, 0.25);
        duckUntil = t + 0.9; mode = 'over';
      },
      fill() { if (m) m.fill = true; },
      /** الحركة البطيئة: الموسيقى تنكتم لحظة وترجع */
      slowmo() { if (!m) return; const t = ac.currentTime; m.lp.frequency.cancelScheduledValues(t); m.lp.frequency.setTargetAtTime(900, t, 0.05); m.lp.frequency.setTargetAtTime(LP[mode] || 16000, t + 0.45, 0.2); },
      celebrate() { if (m) { m.modNext = m.mod + 2; m.fill = true; } },
      reset() { if (m) { m.mod = 0; m.modNext = 0; m.section = -1; m.inten = Math.min(m.inten, 1); m.crashNext = true; m.fill = false; } },
      /** نوتة القفزة: أقرب نغمة من الكورد اللي ينعزف هسه */
      snap(midi) {
        if (!active()) return midi;
        const pcs = m.chord.map((n) => ((n % 12) + 12) % 12);
        let best = midi, bd = 99;
        for (let d = -6; d <= 6; d++) { const pc = (((midi + d) % 12) + 12) % 12; if (pcs.includes(pc) && Math.abs(d) < bd) { bd = Math.abs(d); best = midi + d; } }
        return best;
      },
    };
  })();

  /** للفحص وتسجيل عيّنة: يعزف خطة (نمط/حماس/سرعة على الزمن) بدون سماعات */
  function renderMusic(timeline, seconds) {
    const OAC = window.OfflineAudioContext || window.webkitOfflineAudioContext;
    const sr = 44100, oac = new OAC(2, Math.ceil(sr * seconds), sr), m = createMusic(oac, oac.destination);
    m.bus.gain.value = MUSIC_VOL; m.nextT = 0.05;
    let ti = 0;
    while (m.nextT < seconds - 1) {
      while (ti < timeline.length && timeline[ti][0] <= m.nextT) {
        const c = timeline[ti][1];
        if (c.style) m.wantStyle = c.style;
        if (c.intensity != null) m.inten = c.intensity;
        if (c.bpm) m.bpm = c.bpm;
        if (c.riser != null) m.riser = c.riser;
        if (c.celebrate) { m.modNext = m.mod + 2; m.fill = true; }
        if (c.fill) m.fill = true;
        ti++;
      }
      m.scheduleUntil(m.nextT + 0.001);
    }
    return oac.startRendering().then((b) => [b.getChannelData(0), b.getChannelData(1)]);
  }

  // ---------------------------------------------------------------- الشاشة
  const cvs = $('game');
  const ctx = cvs.getContext('2d'); // شفاف، حتى يبين الوادي ثلاثي الأبعاد من تحته
  let cssW = 0, cssH = 0, dpr = 1, S = 1, viewH = 860, camY = 0;
  let world = null;
  function resize() {
    const vw = window.innerWidth, vh = window.innerHeight;
    cssW = Math.min(vw, Math.round(vh * 0.6)); cssH = vh;
    const st = document.documentElement.style;
    st.setProperty('--app-w', cssW + 'px'); st.setProperty('--app-h', cssH + 'px');
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    cvs.width = Math.round(cssW * dpr); cvs.height = Math.round(cssH * dpr);
    S = cssW / C.W; viewH = cssH / S;
    if (world) world.viewH = viewH;
    if (WD && WS) WD.setSize(cssW, cssH, window.__r3dPR || Math.min(window.devicePixelRatio || 1, 2));
  }
  const Y = (y) => camY + viewH - y; // من إحداثيات العالم لإحداثيات الشاشة

  function rr(g, x, y, w, h, r) {
    r = Math.min(r, h / 2, w / 2);
    g.beginPath(); g.moveTo(x + r, y);
    g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r);
    g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath();
  }
  const hash = (n) => { const x = Math.sin(n * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); };

  // ---------------------------------------------------------------- السما
  const SKY = [
    [0, [110, 198, 255], [212, 241, 255]],
    [900, [120, 180, 255], [255, 226, 196]],
    [1700, [255, 128, 128], [255, 206, 140]],
    [2700, [52, 48, 120], [150, 84, 150]],
    [3800, [14, 18, 58], [36, 46, 110]],
    [5500, [6, 4, 16], [30, 12, 62]],
    [6350, [8, 6, 30], [40, 20, 80]],
    [6950, [255, 150, 120], [255, 214, 160]], // 🌅 فجر فوك الغيوم عند القمة
  ];
  const mix = (a, b, k) => a.map((v, i) => Math.round(v + (b[i] - v) * k));
  function skyAt(s, T = SKY) {
    let i = 0;
    while (i < T.length - 1 && s > T[i + 1][0]) i++;
    if (i === T.length - 1) return [T[i][1], T[i][2]];
    const a = T[i], b = T[i + 1], k = clamp((s - a[0]) / (b[0] - a[0]), 0, 1);
    return [mix(a[1], b[1], k), mix(a[2], b[2], k)];
  }
  const rgb = (c) => `rgb(${c[0]},${c[1]},${c[2]})`;
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  let themeTick = 0;

  function drawCloud(x, y, s, a, col = '#fff') {
    ctx.globalAlpha = a; ctx.fillStyle = col;
    ctx.beginPath();
    ctx.arc(x, y, 22 * s, 0, TAU); ctx.arc(x + 24 * s, y + 5 * s, 17 * s, 0, TAU);
    ctx.arc(x - 24 * s, y + 6 * s, 15 * s, 0, TAU); ctx.arc(x + 8 * s, y - 12 * s, 17 * s, 0, TAU);
    ctx.fill();
    rr(ctx, x - 38 * s, y + 2 * s, 78 * s, 19 * s, 9 * s); ctx.fill();
    ctx.globalAlpha = 1;
  }

  function drawBackground(t) {
    if (FT) return drawFireBackground(t);
    const s = (camY + viewH / 2) / C.SCORE_DIV;
    const [top, bot] = skyAt(s);
    const g = ctx.createLinearGradient(0, 0, 0, viewH);
    g.addColorStop(0, rgb(top)); g.addColorStop(1, rgb(bot));
    ctx.fillStyle = g; ctx.fillRect(-4, -4, C.W + 8, viewH + 8);
    if (++themeTick % 30 === 0 && themeMeta) themeMeta.content = rgb(top);

    // نجوم
    const starA = clamp((s - 2300) / 1200, 0, 1) * (1 - clamp((s - 6450) / 400, 0, 1)); // النجوم تختفي ويا الفجر
    if (starA > 0) {
      const f = 0.12, py = camY * f, cell = 70;
      ctx.fillStyle = '#fff';
      for (let i = Math.floor(py / cell) - 1, e = Math.floor((py + viewH) / cell) + 1; i <= e; i++) {
        for (let k = 0; k < 2; k++) {
          const x = hash(i * 3.1 + k * 17.7) * C.W, y = viewH - (i * cell + hash(i * 7.3 + k * 5.1) * cell - py);
          ctx.globalAlpha = starA * (0.55 + 0.45 * Math.sin(t * 2 + i + k * 3));
          ctx.beginPath(); ctx.arc(x, y, 0.8 + hash(i * 1.7 + k * 9.9) * 1.6, 0, TAU); ctx.fill();
        }
      }
      ctx.globalAlpha = 1;
    }
    // كواكب
    const spaceA = clamp((s - 4200) / 1200, 0, 1) * (1 - clamp((s - 6450) / 400, 0, 1));
    if (spaceA > 0) {
      const f = 0.06, py = camY * f, cell = 520, cols = ['#ff8fab', '#7bdff2', '#f7d794', '#b8a1ff'];
      for (let i = Math.floor(py / cell) - 1, e = Math.floor((py + viewH) / cell) + 1; i <= e; i++) {
        if (hash(i * 9.1) > 0.6) continue;
        const r = 16 + hash(i * 4.4) * 34, x = 30 + hash(i * 2.2) * (C.W - 60), y = viewH - (i * cell + hash(i * 6.6) * cell - py);
        ctx.globalAlpha = spaceA * 0.9; ctx.fillStyle = cols[(hash(i * 3.3) * cols.length) | 0];
        ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill();
        ctx.globalAlpha = spaceA * 0.25; ctx.fillStyle = '#000';
        ctx.beginPath(); ctx.arc(x + r * 0.35, y + r * 0.2, r * 0.85, 0, TAU); ctx.fill();
        if (hash(i * 5.5) > 0.5) {
          ctx.globalAlpha = spaceA * 0.7; ctx.strokeStyle = '#fff'; ctx.lineWidth = 2.5;
          ctx.beginPath(); ctx.ellipse(x, y, r * 1.7, r * 0.45, -0.35, 0, TAU); ctx.stroke();
        }
      }
      ctx.globalAlpha = 1;
    }
    // غيوم
    const cloudA = 1 - clamp((s - 2000) / 1000, 0, 1);
    if (cloudA > 0) {
      const f = 0.35, py = camY * f, cell = 240;
      for (let i = Math.floor(py / cell) - 1, e = Math.floor((py + viewH) / cell) + 1; i <= e; i++) {
        const x = hash(i * 2.3) * (C.W + 120) - 60 + Math.sin(t * 0.15 + i) * 14;
        const y = viewH - (i * cell + hash(i * 8.8) * 120 - py);
        drawCloud(x, y, 0.6 + hash(i * 4.7) * 0.7, 0.8 * cloudA);
      }
    }
  }

  function drawGround() {
    if (FT) return drawFireGround(time);
    const gy = Y(0);
    if (gy > viewH + 5) return;
    const hy = gy - 30 + (camY + 60) * -0.5;
    ctx.fillStyle = '#93dea0';
    ctx.beginPath(); ctx.arc(70, hy + 90, 130, 0, TAU); ctx.arc(330, hy + 110, 150, 0, TAU); ctx.fill();
    ctx.fillStyle = '#7ccf8b';
    ctx.beginPath(); ctx.arc(210, hy + 120, 140, 0, TAU); ctx.fill();
    ctx.fillStyle = '#a0683c'; ctx.fillRect(-4, gy + 20, C.W + 8, viewH - gy + 20);
    ctx.fillStyle = '#48bf58'; ctx.fillRect(-4, gy, C.W + 8, 24);
    ctx.fillStyle = '#6fe07c'; ctx.fillRect(-4, gy, C.W + 8, 7);
    for (let i = 0; i < 11; i++) {
      const x = i * 38 + 12 + hash(i) * 14;
      ctx.fillStyle = '#3aa64a';
      ctx.beginPath(); ctx.moveTo(x - 5, gy + 1); ctx.lineTo(x, gy - 9 - hash(i * 3) * 6); ctx.lineTo(x + 5, gy + 1); ctx.fill();
      if (hash(i * 7) > 0.55) {
        ctx.fillStyle = pickColor(i);
        ctx.beginPath(); ctx.arc(x + 10, gy - 6, 4, 0, TAU); ctx.fill();
        ctx.fillStyle = '#fff6b0'; ctx.beginPath(); ctx.arc(x + 10, gy - 6, 1.6, 0, TAU); ctx.fill();
      }
    }
  }
  const pickColor = (i) => ['#ff6b9a', '#ffd23f', '#ffffff', '#b28dff'][i % 4];

  // ---------------------------------------------------------------- المنصات والعناصر
  const PLAT = {
    n: ['#62D26F', '#2F9A48', '#B4F5B1'],
    m: ['#5AAEFF', '#2A6FD1', '#C2E2FF'],
    v: ['#F4F6FF', '#A9B2D8', '#FFFFFF'],
    b: ['#B57A4F', '#7A4A2A', '#DDB08A'],
  };
  // ---- انحناء المنصة تحت الشخصية: مكان الضربة ينزل، الطرفين يتقوسون، وبعدين ترجف وترجع
  const bending = new Set();
  function bendPlatform(p, px, fv, kind) {
    if (!p || p.type === 'g' || p.type === 'v' || p.type === 'b') return;
    const force = clamp(Math.abs(fv || 500) / 820, 0, 1.4); // كل ما تنزل أقوى، الانحناء أعمق
    const depth = (7 + 5.5 * force) * (kind === 'jump' ? 1 : 0.65); // النابض والترامبولين ياخذون جزء من الضربة
    const hx = clamp(Core.wrapDx(px, p.x + p.w / 2), -p.w * 0.25, p.w * 0.25);
    p.bend = { a: p.bend ? p.bend.a : 0, v: depth * 32, hx };
    bending.add(p);
  }
  function updateBends(dt) {
    if (window.__freezeBend) return; // للفحص فقط
    for (const p of bending) {
      const b = p.bend;
      if (!b) { bending.delete(p); continue; }
      b.v += (-1000 * b.a - 10 * b.v) * dt; // نابض مخمَّد (مثل الجيلي)
      b.a += b.v * dt;
      if (Math.abs(b.a) < 0.04 && Math.abs(b.v) < 0.8) { p.bend = null; bending.delete(p); }
    }
  }
  /** شكل الانحناء: أعمق نقطة مكان الضربة، ويقل كل ما نبتعد، والطرفين يرتفعون شوية */
  const bendDy = (p, x) => {
    const b = p.bend;
    if (!b) return 0;
    const d = (x - (p.x + p.w / 2 + b.hx)) / (p.w * 0.5);
    return b.a * (1.3 * Math.exp(-2.2 * d * d) - 0.3); // المركز ينزل كامل، والطرفين يرتفعون حوالي ربع
  };
  function bentPath(p, y0, h, inset = 0) {
    const r = h / 2, x0 = p.x + inset, w = p.w - inset * 2, n = 14;
    ctx.beginPath();
    for (let i = 0; i <= n; i++) { const x = x0 + r + ((w - 2 * r) * i) / n, yy = y0 + bendDy(p, x); if (i) ctx.lineTo(x, yy); else ctx.moveTo(x, yy); }
    const slope = (x) => Math.atan(bendDy(p, x + 0.5) - bendDy(p, x - 0.5)); // الأطراف تلف ويا الانحناء
    const xr = x0 + w - r, aR = slope(xr); ctx.arc(xr, y0 + bendDy(p, xr) + r, r, aR - Math.PI / 2, aR + Math.PI / 2);
    for (let i = n; i >= 0; i--) { const x = x0 + r + ((w - 2 * r) * i) / n; ctx.lineTo(x, y0 + bendDy(p, x) + h); }
    const xl = x0 + r, aL = slope(xl); ctx.arc(xl, y0 + bendDy(p, xl) + r, r, aL + Math.PI / 2, aL + Math.PI * 1.5);
    ctx.closePath();
  }

  function drawPlatform(p, t) {
    if (p.type === 'g') return;
    if (p.type === 's') { drawSummitRock(p, t); return; }
    const y = Y(p.y);
    if (y < -60 || y > viewH + 40) return;
    const [main, dark, hi] = p.rescue ? ['#FFD23F', '#C99300', '#FFF6C4'] : (FT ? PLAT_FIRE : PLAT)[p.type]; // منصة الإنقاذ ذهبية
    if (p.broken) {
      ctx.save(); ctx.globalAlpha = clamp(1 - p.rot / 2.5, 0, 1);
      for (const side of [-1, 1]) {
        ctx.save();
        ctx.translate(p.x + p.w / 2 + side * (p.w / 4 + p.rot * 5), y + C.PH / 2);
        ctx.rotate(side * p.rot * 0.5);
        rr(ctx, -p.w / 4, -C.PH / 2, p.w / 2 - 1, C.PH, 6); ctx.fillStyle = main; ctx.fill();
        ctx.restore();
      }
      ctx.restore(); return;
    }
    if (p.gone) {
      if (p.pop > 0.3) return;
      const k = p.pop / 0.3;
      ctx.save(); ctx.globalAlpha = 1 - k; ctx.translate(p.x + p.w / 2, y + C.PH / 2); ctx.scale(1 + k * 0.6, 1 + k * 0.6);
      rr(ctx, -p.w / 2, -C.PH / 2, p.w, C.PH, 8); ctx.fillStyle = main; ctx.fill(); ctx.restore();
      return;
    }
    const bent = p.bend && Math.abs(p.bend.a) > 0.05;
    if (bent) { // منصة منحنية
      bentPath(p, y, C.PH); ctx.fillStyle = dark; ctx.fill();
      bentPath(p, y, C.PH - 5); ctx.fillStyle = main; ctx.fill();
      ctx.strokeStyle = hi; ctx.lineWidth = 3; ctx.lineCap = 'round'; ctx.beginPath();
      for (let i = 0; i <= 10; i++) { const x = p.x + 10.5 + ((p.w - 21) * i) / 10, yy = y + 4.5 + bendDy(p, x); if (i) ctx.lineTo(x, yy); else ctx.moveTo(x, yy); }
      ctx.stroke(); ctx.lineCap = 'butt';
    } else {
      rr(ctx, p.x, y, p.w, C.PH, 8); ctx.fillStyle = dark; ctx.fill();
      rr(ctx, p.x, y, p.w, C.PH - 5, 8); ctx.fillStyle = main; ctx.fill();
      rr(ctx, p.x + 9, y + 3, p.w - 18, 3, 2); ctx.fillStyle = hi; ctx.fill();
    }
    if (FT) { // حافة متوهجة حتى تبين المنصة بالسما الغامقة
      ctx.strokeStyle = p.type === 'b' ? 'rgba(255,90,30,.35)' : 'rgba(255,170,90,.6)'; ctx.lineWidth = 1.5;
      if (bent) bentPath(p, y - 0.5, C.PH + 1, -0.5); else rr(ctx, p.x - 0.5, y - 0.5, p.w + 1, C.PH + 1, 8.5);
      ctx.stroke();
    }
    if (FT && (p.type === 'n' || p.type === 'm')) { // شق متوهج بالصخر
      const cx = p.x + 14 + (p.id % 4) * 11, cy = y + bendDy(p, cx + 2);
      ctx.strokeStyle = `rgba(255,140,40,${0.55 + 0.3 * Math.sin(t * 3 + p.id)})`; ctx.lineWidth = 1.6;
      ctx.beginPath(); ctx.moveTo(cx, cy + 5); ctx.lineTo(cx + 5, cy + 8); ctx.lineTo(cx + 2, cy + 11); ctx.stroke();
    }
    if (p.type === 'b') {
      ctx.strokeStyle = FT ? `rgba(255,224,102,${0.7 + 0.3 * Math.sin(t * 6 + p.id)})` : dark; ctx.lineWidth = 2; ctx.beginPath();
      ctx.moveTo(p.x + 22, y + 1); ctx.lineTo(p.x + 27, y + 7); ctx.lineTo(p.x + 23, y + C.PH - 2);
      ctx.moveTo(p.x + 48, y + 1); ctx.lineTo(p.x + 43, y + 8); ctx.lineTo(p.x + 47, y + C.PH - 2);
      ctx.stroke();
    } else if (p.type === 'v') {
      ctx.save(); ctx.setLineDash([4, 4]); ctx.strokeStyle = dark; ctx.lineWidth = 1.5;
      rr(ctx, p.x + 1, y + 1, p.w - 2, C.PH - 2, 7); ctx.stroke(); ctx.restore();
    } else if (p.type === 'm') {
      ctx.fillStyle = FT ? 'rgba(255,160,80,.95)' : 'rgba(255,255,255,.85)';
      for (const s of [-1, 1]) {
        const cx = p.x + p.w / 2 + s * 24, ay = y + bendDy(p, cx);
        ctx.beginPath(); ctx.moveTo(cx + s * 5, ay + 5.5); ctx.lineTo(cx - s * 2, ay + 1.5); ctx.lineTo(cx - s * 2, ay + 9.5); ctx.fill();
      }
    }
    if (p.item) { // العنصر فوك المنصة ينزل وياها
      const it = p.item, ix = p.x + it.ox + (it.kind === 'tramp' ? 25 : it.kind === 'shield' ? 0 : 11);
      drawItem(p, y + bendDy(p, ix), t);
    }
  }

  function drawRocketShape(g, cx, by) {
    g.fillStyle = '#E63946';
    g.beginPath(); g.moveTo(cx - 8, by - 4); g.lineTo(cx - 14, by); g.lineTo(cx - 8, by - 15); g.fill();
    g.beginPath(); g.moveTo(cx + 8, by - 4); g.lineTo(cx + 14, by); g.lineTo(cx + 8, by - 15); g.fill();
    g.beginPath(); g.moveTo(cx, by - 36);
    g.quadraticCurveTo(cx + 11, by - 24, cx + 9, by - 4); g.lineTo(cx - 9, by - 4);
    g.quadraticCurveTo(cx - 11, by - 24, cx, by - 36); g.closePath();
    g.fillStyle = '#F6F7FF'; g.fill(); g.lineWidth = 2; g.strokeStyle = '#8D96B8'; g.stroke();
    g.beginPath(); g.moveTo(cx, by - 36); g.quadraticCurveTo(cx + 6, by - 31, cx + 7.5, by - 27); g.lineTo(cx - 7.5, by - 27); g.quadraticCurveTo(cx - 6, by - 31, cx, by - 36);
    g.fillStyle = '#E63946'; g.fill();
    g.beginPath(); g.arc(cx, by - 18, 4.2, 0, TAU); g.fillStyle = '#4FB3FF'; g.fill(); g.stroke();
    g.fillStyle = '#3B4675'; g.fillRect(cx - 5, by - 4, 10, 4);
  }

  function drawItem(p, y, t) {
    const it = p.item, x = p.x + it.ox;
    if (it.kind === 'spring') {
      const h = it.anim > 0 ? 24 : 12;
      ctx.strokeStyle = '#8D96B8'; ctx.lineWidth = 2.5; ctx.beginPath();
      for (let i = 0; i <= 4; i++) { const yy = y - (i / 4) * h, xx = x + (i % 2 ? 18 : 4); if (i) ctx.lineTo(xx, yy); else ctx.moveTo(xx, yy); }
      ctx.stroke();
      rr(ctx, x - 1, y - h - 5, 24, 6, 3); ctx.fillStyle = '#FF5D5D'; ctx.fill();
    } else if (it.kind === 'tramp') {
      const dip = it.anim > 0 ? 7 * Math.sin((it.anim / 0.35) * Math.PI) : 0;
      ctx.strokeStyle = '#3B4675'; ctx.lineWidth = 3; ctx.beginPath();
      ctx.moveTo(x + 4, y); ctx.lineTo(x + 8, y - 10); ctx.moveTo(x + 46, y); ctx.lineTo(x + 42, y - 10); ctx.stroke();
      ctx.strokeStyle = '#2EA8FF'; ctx.lineWidth = 5; ctx.beginPath();
      ctx.moveTo(x + 5, y - 11); ctx.quadraticCurveTo(x + 25, y - 11 + dip * 2, x + 45, y - 11); ctx.stroke();
      ctx.fillStyle = '#FF5D5D';
      ctx.beginPath(); ctx.arc(x + 5, y - 11, 3.5, 0, TAU); ctx.arc(x + 45, y - 11, 3.5, 0, TAU); ctx.fill();
    } else if (it.kind === 'rocket' && !it.taken) {
      const cx = x + 11;
      ctx.globalAlpha = 0.35 + 0.2 * Math.sin(t * 5);
      ctx.fillStyle = '#fff3b0'; ctx.beginPath(); ctx.arc(cx, y - 18, 26, 0, TAU); ctx.fill();
      ctx.globalAlpha = 1;
      drawRocketShape(ctx, cx, y);
    } else if (it.kind === 'shield' && !it.taken) {
      const cy = y - 34 + Math.sin(t * 3) * 3;
      const gr = ctx.createRadialGradient(x - 4, cy - 5, 2, x, cy, 16);
      gr.addColorStop(0, 'rgba(255,255,255,.95)'); gr.addColorStop(0.5, 'rgba(120,220,255,.6)'); gr.addColorStop(1, 'rgba(40,160,255,.35)');
      ctx.fillStyle = gr; ctx.beginPath(); ctx.arc(x, cy, 15, 0, TAU); ctx.fill();
      ctx.strokeStyle = '#7fdcff'; ctx.lineWidth = 2; ctx.stroke();
      ctx.font = '900 13px -apple-system,system-ui,sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillStyle = '#1d6fb8'; ctx.fillText('★', x, cy + 1);
    }
  }

  function drawCoin(c, t) {
    const y = Y(c.y);
    if (y < -20 || y > viewH + 20) return;
    const sx = Math.abs(Math.cos(t * 3 + c.x * 0.05)) * 0.8 + 0.2;
    ctx.save(); ctx.translate(c.x, y); ctx.scale(sx, 1);
    ctx.beginPath(); ctx.arc(0, 0, 10, 0, TAU); ctx.fillStyle = '#E09B00'; ctx.fill();
    ctx.beginPath(); ctx.arc(0, -0.5, 7.5, 0, TAU); ctx.fillStyle = '#FFD23F'; ctx.fill();
    ctx.fillStyle = '#FFF6C4'; ctx.fillRect(-1.5, -5, 3, 9);
    ctx.restore();
  }

  function drawEnemy(e, t, P) {
    if (FT) return drawFireEnemy(e, t, P);
    const y = Y(e.y);
    if (y < -50 || y > viewH + 50) return;
    ctx.save(); ctx.translate(e.x, y);
    if (e.dead) { ctx.rotate(e.rot); }
    const flap = Math.sin(t * 14 + e.ph);
    ctx.fillStyle = '#D2C2FF';
    for (const s of [-1, 1]) {
      ctx.save(); ctx.scale(s, 1); ctx.translate(18, -6); ctx.rotate(-0.5 + flap * 0.45);
      ctx.beginPath(); ctx.ellipse(10, 0, 13, 6.5, 0, 0, TAU); ctx.fill(); ctx.restore();
    }
    ctx.fillStyle = '#5A2FD6';
    ctx.beginPath(); ctx.moveTo(-13, -11); ctx.lineTo(-9, -24); ctx.lineTo(-4, -14); ctx.fill();
    ctx.beginPath(); ctx.moveTo(13, -11); ctx.lineTo(9, -24); ctx.lineTo(4, -14); ctx.fill();
    ctx.beginPath(); ctx.ellipse(0, 0, 23, 17, 0, 0, TAU);
    ctx.fillStyle = '#7B4DFF'; ctx.fill(); ctx.lineWidth = 2.5; ctx.strokeStyle = '#3C1D99'; ctx.stroke();
    const lx = clamp(Core.wrapDx(P.x, e.x) / 60, -1, 1) * 2.2, ly = clamp((e.y - (P.y + 20)) / 60, -1, 1) * 2.2;
    for (const s of [-1, 1]) {
      ctx.beginPath(); ctx.arc(s * 8, -3, 6, 0, TAU); ctx.fillStyle = '#fff'; ctx.fill();
      if (e.dead) {
        ctx.strokeStyle = '#1b1f3b'; ctx.lineWidth = 2; ctx.beginPath();
        ctx.moveTo(s * 8 - 3, -6); ctx.lineTo(s * 8 + 3, 0); ctx.moveTo(s * 8 + 3, -6); ctx.lineTo(s * 8 - 3, 0); ctx.stroke();
      } else {
        ctx.beginPath(); ctx.arc(s * 8 + lx, -3 + ly, 3, 0, TAU); ctx.fillStyle = '#1b1f3b'; ctx.fill();
      }
      ctx.strokeStyle = '#2a1170'; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.moveTo(s * 3, -10); ctx.lineTo(s * 13, -13); ctx.stroke();
    }
    ctx.fillStyle = '#2a1170'; rr(ctx, -9, 6, 18, 6, 3); ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.beginPath(); ctx.moveTo(-7, 6); ctx.lineTo(-4, 10); ctx.lineTo(-1, 6); ctx.moveTo(1, 6); ctx.lineTo(4, 10); ctx.lineTo(7, 6); ctx.fill();
    ctx.restore();
  }

  // ---------------------------------------------------------------- اللاعب
  function bodyFill(g, sk, t) {
    if (sk.body === 'fire') {
      // قلب حار أصفر يطلع لبرتقالي وأحمر عالحواف، ويرجف شوية
      const fl = Math.sin(t * 13) * 0.04 + Math.sin(t * 7.3) * 0.03;
      const gr = g.createRadialGradient(0, -15, 2, 0, -20, 25);
      gr.addColorStop(0, '#FFF6C2'); gr.addColorStop(0.3 + fl, '#FFC93C');
      gr.addColorStop(0.65 + fl, '#FF7A00'); gr.addColorStop(1, '#D92A00');
      return gr;
    }
    if (sk.body !== 'rainbow') return sk.body;
    const gr = g.createLinearGradient(-22, -42, 22, 0);
    for (let i = 0; i < 6; i++) gr.addColorStop(i / 5, `hsl(${(t * 80 + i * 60) % 360},90%,63%)`);
    return gr;
  }
  /** ألسنة نار ترتفع من نص الجسم الفوقاني (تنرسم ورا الجسم) */
  function drawFlames(g, t) {
    const glow = g.createRadialGradient(0, -24, 6, 0, -28, 36);
    glow.addColorStop(0, 'rgba(255,170,40,.38)'); glow.addColorStop(1, 'rgba(255,80,0,0)');
    g.fillStyle = glow; g.beginPath(); g.arc(0, -28, 36, 0, TAU); g.fill();
    const layers = [[9, 1, '#E62200', '#FF8A00'], [7, 0.66, '#FF8A00', '#FFE066']];
    for (const [n, k, tip, base] of layers) {
      for (let i = 0; i < n; i++) {
        const a = Math.PI * (1.06 + (0.88 * i) / (n - 1));
        const bx = Math.cos(a) * 17, by = -22 + Math.sin(a) * 16;
        const fl = Math.sin(t * 11 + i * 2.3) * 0.5 + Math.sin(t * 17 + i * 5.1) * 0.5;
        const L = (8 + 10 * Math.sin((Math.PI * i) / (n - 1)) + 4 * fl) * k + 4;
        const w = 7 * k;
        const tx = bx + Math.sin(t * 8 + i * 1.3) * 3 * k + Math.cos(a) * 0.3 * L, ty = by - L;
        const gr = g.createLinearGradient(0, by, 0, ty);
        gr.addColorStop(0, base); gr.addColorStop(1, tip);
        g.fillStyle = gr;
        g.beginPath(); g.moveTo(bx - w, by + 3);
        g.quadraticCurveTo(bx - w * 0.9, by - L * 0.55, tx, ty);
        g.quadraticCurveTo(bx + w * 0.9, by - L * 0.55, bx + w, by + 3);
        g.closePath(); g.fill();
      }
    }
  }
  function drawHero(g, sk, o) {
    const f = o.face || 1, sq = o.squash || 0, st = o.stretch || 0;
    g.save();
    g.scale(1 + 0.22 * sq - 0.06 * st, 1 - 0.22 * sq + 0.1 * st);
    const rot = o.flip > 0 ? f * (1 - o.flip) * TAU : o.rot || 0;
    if (rot) { g.translate(0, -22); g.rotate(rot); g.translate(0, 22); }

    if (o.rocket) {
      const jx = -f * 19;
      const fl = 14 + Math.random() * 12;
      g.fillStyle = '#FF9F1C'; g.beginPath(); g.moveTo(jx - 6, -14); g.lineTo(jx + 6, -14); g.lineTo(jx, -14 + fl); g.fill();
      g.fillStyle = '#FFE066'; g.beginPath(); g.moveTo(jx - 3, -14); g.lineTo(jx + 3, -14); g.lineTo(jx, -14 + fl * 0.6); g.fill();
      rr(g, jx - 7, -38, 14, 25, 5); g.fillStyle = '#C9CFE6'; g.fill(); g.lineWidth = 2; g.strokeStyle = '#6E7799'; g.stroke();
      g.fillStyle = '#E63946'; rr(g, jx - 7, -38, 14, 7, 4); g.fill();
    }
    if (sk.body === 'fire') drawFlames(g, o.t || 0);
    g.fillStyle = sk.dark;
    g.beginPath(); g.ellipse(-9, -3, 7, 4, 0, 0, TAU); g.ellipse(9, -3, 7, 4, 0, 0, TAU); g.fill();

    g.beginPath(); g.ellipse(0, -22, 21, 20, 0, 0, TAU);
    g.fillStyle = bodyFill(g, sk, o.t || 0); g.fill();
    if (sk.acc === 'band') {
      g.save(); g.clip(); g.fillStyle = '#E63946'; g.fillRect(-24, -38, 48, 6); g.restore();
      g.strokeStyle = '#E63946'; g.lineWidth = 3.5; g.lineCap = 'round';
      const w1 = Math.sin((o.t || 0) * 12) * 3;
      g.beginPath(); g.moveTo(-f * 19, -35); g.lineTo(-f * 30, -38 + w1); g.moveTo(-f * 19, -34); g.lineTo(-f * 29, -30 - w1); g.stroke();
      g.lineCap = 'butt';
    }
    g.lineWidth = 2.5; g.strokeStyle = sk.dark;
    g.beginPath(); g.ellipse(0, -22, 21, 20, 0, 0, TAU); g.stroke();
    g.beginPath(); g.ellipse(f * 2, -14, 12, 8.5, 0, 0, TAU);
    g.globalAlpha *= 0.85; g.fillStyle = sk.belly; g.fill(); g.globalAlpha /= 0.85;

    const ex = f * 4;
    for (const s of [-1, 1]) {
      const x = ex + s * 7.5, y = -27;
      g.beginPath(); g.ellipse(x, y, o.scared ? 7 : 6, o.scared ? 8 : 7, 0, 0, TAU);
      g.fillStyle = '#fff'; g.fill(); g.lineWidth = 1.5; g.strokeStyle = sk.dark; g.stroke();
      if (o.dead) {
        g.strokeStyle = '#1b1f3b'; g.lineWidth = 2; g.beginPath();
        g.moveTo(x - 3, y - 3); g.lineTo(x + 3, y + 3); g.moveTo(x + 3, y - 3); g.lineTo(x - 3, y + 3); g.stroke();
      } else {
        const px = x + f * 1.6, py = y + (o.lookY || 0);
        g.beginPath(); g.arc(px, py, o.scared ? 2.4 : 3.3, 0, TAU); g.fillStyle = '#1b1f3b'; g.fill();
        g.beginPath(); g.arc(px + 1.1, py - 1.2, 1.1, 0, TAU); g.fillStyle = '#fff'; g.fill();
      }
    }
    g.strokeStyle = '#1b1f3b'; g.lineWidth = 2; g.lineCap = 'round';
    if (o.dead || o.scared) { g.beginPath(); g.ellipse(f * 4, -15, 3, 3.8, 0, 0, TAU); g.fillStyle = '#7a1f2b'; g.fill(); }
    else { g.beginPath(); g.arc(f * 4, -18, 5, 0.2, Math.PI - 0.2); g.stroke(); }
    g.lineCap = 'butt';

    if (sk.acc === 'blush' || sk.id === 'orange') {
      g.fillStyle = 'rgba(255,120,150,.45)';
      g.beginPath(); g.ellipse(ex - 13, -18, 4, 2.6, 0, 0, TAU); g.ellipse(ex + 13, -18, 4, 2.6, 0, 0, TAU); g.fill();
    }
    if (sk.acc === 'leaf') {
      g.strokeStyle = '#6B3E1F'; g.lineWidth = 2.5; g.beginPath(); g.moveTo(0, -41); g.lineTo(1, -47); g.stroke();
      g.fillStyle = '#3FB950'; g.beginPath(); g.ellipse(7, -48, 7, 3.6, -0.5, 0, TAU); g.fill();
    } else if (sk.acc === 'antenna') {
      g.strokeStyle = sk.dark; g.lineWidth = 2;
      g.beginPath(); g.moveTo(-6, -40); g.lineTo(-10, -52); g.moveTo(6, -40); g.lineTo(10, -52); g.stroke();
      g.fillStyle = '#FF5DA2'; g.beginPath(); g.arc(-10, -53, 3.5, 0, TAU); g.arc(10, -53, 3.5, 0, TAU); g.fill();
    } else if (sk.acc === 'crown') {
      g.fillStyle = '#FFC400'; g.strokeStyle = '#B07D00'; g.lineWidth = 1.5;
      g.beginPath(); g.moveTo(-12, -38); g.lineTo(-13, -51); g.lineTo(-6, -44); g.lineTo(0, -54); g.lineTo(6, -44); g.lineTo(13, -51); g.lineTo(12, -38); g.closePath();
      g.fill(); g.stroke();
      g.fillStyle = '#E63946'; g.beginPath(); g.arc(0, -42, 2.4, 0, TAU); g.fill();
      g.fillStyle = '#2EA8FF'; g.beginPath(); g.arc(-7, -41, 1.8, 0, TAU); g.arc(7, -41, 1.8, 0, TAU); g.fill();
    } else if (sk.acc === 'star') {
      g.save(); g.translate(0, -52); g.rotate((o.t || 0) * 2); star(g, 0, 0, 7, 3, '#FFE066'); g.restore();
    } else if (sk.acc === 'hat') { // قبعة المغامر ووشاح
      g.fillStyle = '#8A5A2B';
      g.beginPath(); g.ellipse(0, -38, 25, 5.5, 0, 0, TAU); g.fill(); // الحافة
      g.beginPath(); g.moveTo(-14, -39); g.quadraticCurveTo(-13, -54, 0, -55); g.quadraticCurveTo(13, -54, 14, -39); g.closePath(); g.fill();
      g.fillStyle = '#4A2E14'; g.fillRect(-14, -44, 28, 4.5); // الشريط
      g.fillStyle = '#E63946'; g.beginPath(); g.moveTo(-f * 12, -9); g.lineTo(f * 12, -9); g.lineTo(-f * 2, -2); g.closePath(); g.fill(); // وشاح
    }
    if (o.shield) {
      g.beginPath(); g.arc(0, -22, 33, 0, TAU);
      g.fillStyle = 'rgba(120,220,255,.2)'; g.fill(); g.strokeStyle = 'rgba(140,230,255,.95)'; g.lineWidth = 2.5; g.stroke();
      g.beginPath(); g.arc(0, -22, 27, -2.6, -1.9); g.strokeStyle = 'rgba(255,255,255,.9)'; g.lineWidth = 3; g.stroke();
    }
    g.restore();
  }
  function star(g, x, y, R, r, col) {
    g.beginPath();
    for (let i = 0; i < 10; i++) { const a = (i * Math.PI) / 5 - Math.PI / 2, rad = i % 2 ? r : R; g.lineTo(x + Math.cos(a) * rad, y + Math.sin(a) * rad); }
    g.closePath(); g.fillStyle = col; g.fill();
  }

  function drawPlayer(P, t) {
    const sk = skinById(save.skin);
    const o = {
      squash: P.squash, stretch: P.squash > 0 ? 0 : clamp(P.vy / 900, 0, 1), face: P.face, t,
      rocket: P.rocket > 0, shield: P.shield, flip: P.flip, lookY: P.vy > 0 ? -1.6 : 1.6,
      dead: P.state === 'hit', scared: P.state === 'fall' || P.state === 'cinema' || (P.state === 'summit' && SUM && SUM.wind > 0.35),
      rot: P.state === 'hit' ? P.deadT * 9 : P.state === 'cinema' && SUM ? SUM.spin : 0,
    };
    const blink = P.invul > 0 && P.rocket <= 0 && Math.floor(t * 12) % 2;
    if (blink) ctx.globalAlpha = 0.45;
    const y = Y(P.y);
    for (const off of [0, -C.W, C.W]) {
      const x = P.x + off;
      if (x < -45 || x > C.W + 45) continue;
      if (world.feverT > 0) { // هالة الحماس
        const ag = ctx.createRadialGradient(x, y - 22, 6, x, y - 22, 46);
        ag.addColorStop(0, `hsla(${(t * 200) % 360},100%,70%,.55)`); ag.addColorStop(1, 'rgba(255,200,0,0)');
        ctx.fillStyle = ag; ctx.beginPath(); ctx.arc(x, y - 22, 46, 0, TAU); ctx.fill();
      }
      ctx.save(); ctx.translate(x, y); drawHero(ctx, sk, o); ctx.restore();
    }
    ctx.globalAlpha = 1;
  }

  // ================================================================ عالم «ناري» 🌋
  // يشتغل لما تختار شخصية «ناري»: سما بركانية، براكين تثور، حمم، نيازك، انفجارات
  let FT = false; // هل عالم النار شغّال هسه
  const isFireSkin = () => skinById(save.skin).body === 'fire';
  const SKY_FIRE = [
    [0, [70, 16, 22], [255, 112, 40]],
    [1200, [48, 12, 26], [200, 56, 32]],
    [2600, [26, 8, 20], [120, 26, 32]],
    [4000, [12, 4, 12], [66, 12, 28]],
    [5500, [6, 2, 8], [36, 6, 26]],
    [6350, [16, 4, 14], [60, 12, 30]],
    [6950, [255, 120, 70], [255, 196, 120]], // 🌅 فجر ناري عند القمة
  ];
  const PLAT_FIRE = {
    n: ['#8A6A5C', '#3E2A22', '#FFC27A'], // صخر بركاني فاتح حوافه متوهجة (واضح بالسما الغامقة)
    m: ['#7B5BA6', '#33204D', '#FFB07A'], // زجاج بركاني بنفسجي
    v: ['#C4BBB4', '#6E6661', '#EEE8E3'], // رماد ينفخ ويختفي
    b: ['#4A1A10', '#220904', '#B8441C'], // قشرة غامقة مشققة: فخ، تنفجر إذا دست عليها
  };
  const LAVA_COLS = ['#FFE066', '#FFB000', '#FF6A00', '#FF3D00'];
  const SMOKE_COLS = ['rgba(60,40,38,.9)', 'rgba(85,62,58,.9)', 'rgba(40,28,26,.9)'];
  const VOLC = [
    { x: 300, w: 300, h: 210, par: 0.3, col: '#4A1A15', per: 6.5, next: 0, smokeT: 0 },
    { x: 80, w: 230, h: 150, par: 0.5, col: '#2C120E', per: 4.8, next: 0, smokeT: 0 },
  ];
  const volcBase = (v) => viewH - 40 + (world.camY + 60) * v.par;

  function flameTongue(g, x, y, w, h, t, seed) { // لسان نار يطلع لفوك من (x,y)
    const fl = 1 + 0.18 * Math.sin(t * 15 + seed * 3.1);
    const tip = y - h * fl, sway = Math.sin(t * 9 + seed) * w * 0.35;
    const gr = g.createLinearGradient(0, y, 0, tip);
    gr.addColorStop(0, '#FFE066'); gr.addColorStop(0.5, '#FF8A00'); gr.addColorStop(1, 'rgba(230,34,0,.85)');
    g.fillStyle = gr;
    g.beginPath(); g.moveTo(x - w / 2, y);
    g.quadraticCurveTo(x - w * 0.55, y - h * 0.55, x + sway, tip);
    g.quadraticCurveTo(x + w * 0.55, y - h * 0.55, x + w / 2, y);
    g.closePath(); g.fill();
  }

  function drawMeteors(t) {
    const per = 2.4;
    ctx.lineCap = 'round';
    for (let k = Math.floor(t / per) - 1; k <= Math.floor(t / per); k++) {
      const age = t - k * per;
      if (age < 0 || age > 1.4 || hash(k * 4.4) < 0.25) continue;
      const dir = hash(k * 2.7) < 0.5 ? -1 : 1;
      const x0 = (dir > 0 ? -30 : C.W + 30) + dir * hash(k * 1.3) * 160, y0 = hash(k * 5.9) * viewH * 0.45 - 20;
      const vx = dir * (230 + hash(k * 3.1) * 120), vy = 260 + hash(k * 6.2) * 140;
      const x = x0 + vx * age, y = y0 + vy * age, a = clamp(1.4 - age, 0, 1);
      const tx = x - vx * 0.22, ty = y - vy * 0.22;
      const g = ctx.createLinearGradient(tx, ty, x, y);
      g.addColorStop(0, 'rgba(255,120,30,0)'); g.addColorStop(1, `rgba(255,200,80,${a})`);
      ctx.strokeStyle = g; ctx.lineWidth = 3.5;
      ctx.beginPath(); ctx.moveTo(tx, ty); ctx.lineTo(x, y); ctx.stroke();
      ctx.globalAlpha = a * 0.35; ctx.fillStyle = '#FF9A3D'; ctx.beginPath(); ctx.arc(x, y, 8, 0, TAU); ctx.fill();
      ctx.globalAlpha = a; ctx.fillStyle = '#FFF3B0'; ctx.beginPath(); ctx.arc(x, y, 3.4, 0, TAU); ctx.fill();
      ctx.globalAlpha = 1;
    }
    ctx.lineCap = 'butt';
  }

  function drawFireBackground(t) {
    const s = (camY + viewH / 2) / C.SCORE_DIV;
    const [top, bot] = skyAt(s, SKY_FIRE);
    const g = ctx.createLinearGradient(0, 0, 0, viewH);
    g.addColorStop(0, rgb(top)); g.addColorStop(1, rgb(bot));
    ctx.fillStyle = g; ctx.fillRect(-4, -4, C.W + 8, viewH + 8);
    if (++themeTick % 30 === 0 && themeMeta) themeMeta.content = rgb(top);
    // سديم أحمر بالفضاء
    const spaceA = clamp((s - 3800) / 1500, 0, 1) * (1 - clamp((s - 6450) / 400, 0, 1));
    if (spaceA > 0) {
      const f = 0.05, py = camY * f, cell = 600;
      for (let i = Math.floor(py / cell) - 1, e = Math.floor((py + viewH) / cell) + 1; i <= e; i++) {
        if (hash(i * 7.7) > 0.75) continue;
        const x = hash(i * 2.9) * C.W, y = viewH - (i * cell + hash(i * 3.7) * cell - py), r = 110 + hash(i * 5.3) * 110;
        const ng = ctx.createRadialGradient(x, y, 0, x, y, r);
        ng.addColorStop(0, hash(i) > 0.5 ? 'rgba(255,70,40,.32)' : 'rgba(170,40,120,.3)'); ng.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.globalAlpha = spaceA; ctx.fillStyle = ng; ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill();
      }
      ctx.globalAlpha = 1;
    }
    // دخان بركاني بدل الغيوم
    const smokeA = 1 - clamp((s - 2600) / 1200, 0, 1);
    if (smokeA > 0) {
      const f = 0.35, py = camY * f, cell = 240;
      for (let i = Math.floor(py / cell) - 1, e = Math.floor((py + viewH) / cell) + 1; i <= e; i++) {
        const x = hash(i * 2.3) * (C.W + 120) - 60 + Math.sin(t * 0.15 + i) * 14;
        const y = viewH - (i * cell + hash(i * 8.8) * 120 - py);
        drawCloud(x, y, 0.7 + hash(i * 4.7) * 0.8, 0.45 * smokeA, 'rgb(45,20,20)');
      }
    }
    // جمر يصعد بالهوا
    const span = viewH + 40;
    for (let i = 0; i < 36; i++) {
      const sp = 20 + hash(i * 5.7) * 50;
      const y = viewH + 20 - ((((t * sp + hash(i * 3.3) * span + camY * 0.2) % span) + span) % span);
      const x = hash(i * 1.9) * C.W + Math.sin(t * (0.6 + hash(i)) + i) * 12;
      ctx.globalAlpha = 0.35 + 0.35 * Math.sin(t * 4 + i);
      ctx.fillStyle = ['#FFB347', '#FF6A00', '#FFD166'][i % 3];
      ctx.beginPath(); ctx.arc(x, y, 1 + hash(i * 8.1) * 1.8, 0, TAU); ctx.fill();
    }
    ctx.globalAlpha = 1;
    drawMeteors(t);
  }

  function drawVolcano(v, t) {
    const by = volcBase(v), ty = by - v.h;
    if (ty > viewH + 10) return;
    const cx = v.x, hw = v.w / 2, cw = v.w * 0.1;
    ctx.fillStyle = v.col;
    ctx.beginPath(); ctx.moveTo(cx - hw, by + 60);
    ctx.quadraticCurveTo(cx - hw * 0.35, by - v.h * 0.55, cx - cw, ty); ctx.lineTo(cx + cw, ty);
    ctx.quadraticCurveTo(cx + hw * 0.35, by - v.h * 0.55, cx + hw, by + 60); ctx.closePath(); ctx.fill();
    const gl = ctx.createRadialGradient(cx, ty, 2, cx, ty, v.w * 0.3);
    gl.addColorStop(0, 'rgba(255,210,90,.95)'); gl.addColorStop(0.3, 'rgba(255,120,30,.5)'); gl.addColorStop(1, 'rgba(255,60,0,0)');
    ctx.fillStyle = gl; ctx.beginPath(); ctx.arc(cx, ty, v.w * 0.3, 0, TAU); ctx.fill();
    ctx.lineCap = 'round';
    for (let i = 0; i < 3; i++) { // أنهار حمم نازلة على الجوانب
      const s = i - 1, a = 0.6 + 0.4 * Math.sin(t * 2.5 + i * 1.7 + v.x);
      ctx.strokeStyle = `rgba(255,${110 + i * 30},30,${a})`; ctx.lineWidth = 3.2 - i * 0.6;
      ctx.beginPath(); ctx.moveTo(cx + s * cw * 0.6, ty + 2);
      ctx.quadraticCurveTo(cx + s * (cw + 12) + Math.sin(i * 3) * 6, ty + v.h * 0.35, cx + s * (cw + 30 + i * 8), ty + v.h * (0.6 + 0.1 * i));
      ctx.stroke();
    }
    ctx.lineCap = 'butt';
  }

  function drawFireGround(t) {
    for (const v of VOLC) drawVolcano(v, t);
    const gy = Y(0);
    if (gy > viewH + 5) return;
    ctx.fillStyle = '#2B1B18'; ctx.fillRect(-4, gy, C.W + 8, viewH - gy + 20);
    ctx.fillStyle = '#4A302A'; ctx.fillRect(-4, gy, C.W + 8, 6);
    ctx.lineWidth = 2; ctx.lineCap = 'round';
    for (let i = 0; i < 6; i++) { // عروق حمم بالصخر
      const x = 20 + i * 65 + hash(i) * 20;
      ctx.strokeStyle = `rgba(255,${130 + (i % 3) * 30},40,${0.5 + 0.35 * Math.sin(t * 3 + i)})`;
      ctx.beginPath(); ctx.moveTo(x, gy + 7); ctx.lineTo(x + 7, gy + 16); ctx.lineTo(x + 2, gy + 26); ctx.lineTo(x + 9, gy + 38); ctx.stroke();
    }
    ctx.lineCap = 'butt';
    for (let i = 0; i < 9; i++) flameTongue(ctx, i * 46 + 14 + hash(i * 2) * 16, gy + 1, 8, 7 + hash(i * 5) * 7, t, i);
  }

  // بحيرة الحمم بأسفل الشاشة (إذا وكعت بيها تخسر)
  const bubbles = [];
  let bubbleT = 0;
  function drawLava(t) {
    const base = viewH - 16;
    const gl = ctx.createLinearGradient(0, base - 70, 0, base);
    gl.addColorStop(0, 'rgba(255,90,0,0)'); gl.addColorStop(1, 'rgba(255,120,20,.38)');
    ctx.fillStyle = gl; ctx.fillRect(-4, base - 70, C.W + 8, 70);
    ctx.beginPath(); ctx.moveTo(-4, viewH + 6);
    for (let x = -4; x <= C.W + 8; x += 8) ctx.lineTo(x, base + Math.sin(x * 0.045 + t * 2.2) * 3.5 + Math.sin(x * 0.11 - t * 3.1) * 1.8);
    ctx.lineTo(C.W + 8, viewH + 6); ctx.closePath();
    const g = ctx.createLinearGradient(0, base - 4, 0, viewH);
    g.addColorStop(0, '#FFE066'); g.addColorStop(0.25, '#FF8C1A'); g.addColorStop(1, '#B3200B');
    ctx.fillStyle = g; ctx.fill();
    ctx.fillStyle = 'rgba(110,24,10,.45)'; // قشور غامقة تمشي على السطح
    for (let i = 0; i < 6; i++) {
      const x = ((((hash(i) * C.W + t * (10 + i * 3) * (i % 2 ? 1 : -1)) % (C.W + 40)) + C.W + 40) % (C.W + 40)) - 20;
      ctx.beginPath(); ctx.ellipse(x, base + 9, 14, 2.8, 0, 0, TAU); ctx.fill();
    }
    for (const b of bubbles) {
      const r = b.r * Math.min(1, b.t / 0.5);
      ctx.fillStyle = '#FFD166'; ctx.strokeStyle = '#FF7A1A'; ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.arc(b.x, base + 1, r, Math.PI, 0); ctx.fill(); ctx.stroke();
    }
  }

  function explode(x, y, s = 1) { // انفجار: وميض + حمم + دخان + اهتزاز
    if (parts.length > 600) return;
    parts.push({ x, y, vx: 0, vy: 0, g: 0, life: 0.28, max: 0.28, r: 16 * s, c: '#fff', kind: 'flash', rot: 0, drag: 0 });
    burst(x, y, Math.round(18 * s), { sp: 260 * s, vy0: -120 * s, vy1: 320 * s, g: 500, life: 0.65, r: 4 * s, colors: LAVA_COLS, kind: 'lava', drag: 2.5 });
    burst(x, y, Math.round(7 * s), { sp: 80 * s, vy0: 20, vy1: 120, g: -60, life: 1.1, r: 8 * s, colors: SMOKE_COLS, kind: 'smoke', drag: 1.5, spread: 10 });
    shake = Math.max(shake, 0.16 * s);
  }
  function lavaSplash(x) {
    const y = world.camY + 16;
    parts.push({ x, y, vx: 0, vy: 0, g: 0, life: 0.3, max: 0.3, r: 20, c: '#fff', kind: 'flash', rot: 0, drag: 0 });
    burst(x, y, 28, { sp: 160, vy0: 250, vy1: 650, g: 1300, life: 0.9, r: 4.5, colors: LAVA_COLS, kind: 'lava' });
    burst(x, y, 10, { sp: 70, vy0: 40, vy1: 140, g: -40, life: 1.4, r: 10, colors: ['rgba(230,225,220,.8)', 'rgba(190,185,180,.8)'], kind: 'smoke', drag: 1.2, spread: 18 });
    shake = Math.max(shake, 0.3);
  }
  function erupt(v, wy) {
    const s = v.par < 0.4 ? 0.8 : 1;
    parts.push({ x: v.x, y: wy, vx: 0, vy: 0, g: 0, life: 0.35, max: 0.35, r: 18 * s, c: '#fff', kind: 'flash', rot: 0, drag: 0 });
    burst(v.x, wy, 24, { sp: 120 * s, vy0: 280 * s, vy1: 650 * s, g: 700, life: 1.6, r: 3.8 * s, colors: LAVA_COLS, kind: 'lava' });
    burst(v.x, wy, 8, { sp: 40, vy0: 60, vy1: 140, g: -30, life: 2.2, r: 10 * s, colors: SMOKE_COLS, kind: 'smoke', drag: 0.6, spread: 10 });
    if (state === 'play') Sfx.boom(0.45 * s);
  }
  /** تحديث عالم النار: ثوران البراكين، دخانها، وفقاعات الحمم */
  function updateFire(dt) {
    for (const v of VOLC) {
      const ty = volcBase(v) - v.h;
      if (ty > viewH) continue;
      const wy = world.camY + viewH - ty;
      if (!(v.next > 0)) v.next = time + rnd(0.6, 2.5);
      v.smokeT -= dt;
      if (v.smokeT <= 0 && parts.length < 600) {
        v.smokeT = rnd(0.25, 0.45);
        const life = rnd(1.8, 2.6);
        parts.push({ x: v.x + rnd(-8, 8), y: wy, vx: rnd(-8, 22), vy: rnd(30, 60), g: -25, life, max: life, r: rnd(6, 9), c: pick(SMOKE_COLS), kind: 'smoke', rot: 0, drag: 0.3 });
      }
      if (time > v.next) { v.next = time + v.per * rnd(0.7, 1.3); erupt(v, wy); }
    }
    updateLightning(dt);
    updateSquads(dt);
    bubbleT -= dt;
    if (bubbleT <= 0) { bubbleT = rnd(0.35, 0.9); bubbles.push({ x: rnd(10, C.W - 10), t: 0, r: rnd(3, 7), loud: Math.random() < 0.35 }); }
    for (let i = bubbles.length - 1; i >= 0; i--) {
      const b = bubbles[i];
      b.t += dt;
      if (b.t > 0.6) {
        burst(b.x, world.camY + 17, 5, { sp: 50, vy0: 80, vy1: 200, g: 900, life: 0.5, r: 2, colors: LAVA_COLS, kind: 'lava' });
        if (b.loud && state === 'play') Sfx.lavaPop();
        bubbles.splice(i, 1);
      }
    }
  }

  function drawFireEnemy(e, t, P) { // وحش حمم بجناحين من نار
    const y = Y(e.y);
    if (y < -50 || y > viewH + 50) return;
    ctx.save(); ctx.translate(e.x, y);
    if (e.dead) ctx.rotate(e.rot);
    const gl = ctx.createRadialGradient(0, 0, 4, 0, 0, 42);
    gl.addColorStop(0, 'rgba(255,120,30,.45)'); gl.addColorStop(1, 'rgba(255,60,0,0)');
    ctx.fillStyle = gl; ctx.beginPath(); ctx.arc(0, 0, 42, 0, TAU); ctx.fill();
    const flap = Math.sin(t * 14 + e.ph);
    for (const s of [-1, 1]) {
      ctx.save(); ctx.scale(s, 1); ctx.translate(17, -2); ctx.rotate(Math.PI / 2 - 0.5 + flap * 0.45);
      flameTongue(ctx, 0, 0, 13, 22, t, e.ph + s); ctx.restore();
    }
    ctx.fillStyle = '#2B0A06';
    ctx.beginPath(); ctx.moveTo(-13, -11); ctx.lineTo(-10, -26); ctx.lineTo(-4, -14); ctx.fill();
    ctx.beginPath(); ctx.moveTo(13, -11); ctx.lineTo(10, -26); ctx.lineTo(4, -14); ctx.fill();
    const g = ctx.createRadialGradient(-4, -5, 2, 0, 0, 24);
    g.addColorStop(0, '#FFE08A'); g.addColorStop(0.45, '#FF7A1A'); g.addColorStop(1, '#B3200B');
    ctx.beginPath(); ctx.ellipse(0, 0, 23, 17, 0, 0, TAU); ctx.fillStyle = g; ctx.fill();
    ctx.lineWidth = 2.5; ctx.strokeStyle = '#5C1006'; ctx.stroke();
    ctx.fillStyle = 'rgba(70,20,10,.55)';
    ctx.beginPath(); ctx.ellipse(-14, 6, 5, 3, 0.3, 0, TAU); ctx.ellipse(13, 8, 4, 2.5, -0.3, 0, TAU); ctx.fill();
    const lx = clamp(Core.wrapDx(P.x, e.x) / 60, -1, 1) * 2, ly = clamp((e.y - (P.y + 20)) / 60, -1, 1) * 2;
    for (const s of [-1, 1]) {
      ctx.beginPath(); ctx.ellipse(s * 8, -3, 6, 5.5, 0, 0, TAU); ctx.fillStyle = '#FFF3A0'; ctx.fill();
      if (e.dead) {
        ctx.strokeStyle = '#1B0A05'; ctx.lineWidth = 2; ctx.beginPath();
        ctx.moveTo(s * 8 - 3, -6); ctx.lineTo(s * 8 + 3, 0); ctx.moveTo(s * 8 + 3, -6); ctx.lineTo(s * 8 - 3, 0); ctx.stroke();
      } else { ctx.beginPath(); ctx.ellipse(s * 8 + lx, -3 + ly, 1.7, 4.2, 0, 0, TAU); ctx.fillStyle = '#1B0A05'; ctx.fill(); }
      ctx.strokeStyle = '#3B0A06'; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.moveTo(s * 3, -10); ctx.lineTo(s * 13, -14); ctx.stroke();
    }
    ctx.fillStyle = '#3B0A06'; rr(ctx, -9, 6, 18, 6, 3); ctx.fill();
    ctx.fillStyle = '#FFE066';
    ctx.beginPath(); ctx.moveTo(-7, 6); ctx.lineTo(-4, 10); ctx.lineTo(-1, 6); ctx.moveTo(1, 6); ctx.lineTo(4, 10); ctx.lineTo(7, 6); ctx.fill();
    ctx.restore();
  }

  // ---------------------------------------------------------------- برق ورعد نار ⚡ (عالم «ناري»)
  const bolts = [];
  let boltT = 2, skyFlash = 0;
  /** خط برق متعرج بطريقة «إزاحة النص» (إحداثيات العالم) */
  function boltPath(x0, y0, x1, y1, disp, levels) {
    let pts = [[x0, y0], [x1, y1]], d = disp;
    for (let l = 0; l < levels; l++) {
      const np = [pts[0]];
      for (let i = 1; i < pts.length; i++) {
        const [ax, ay] = pts[i - 1], [bx, by] = pts[i];
        np.push([(ax + bx) / 2 + rnd(-d, d), (ay + by) / 2 + rnd(-d, d) * 0.3], [bx, by]);
      }
      pts = np; d *= 0.55;
    }
    return pts;
  }
  /** صاعقة: تختار هدف (منصة، حمم، دخان بركان، أو بالهوا)، تومّض الشاشة، وترعد */
  function strike() {
    if (!world || bolts.length > 3) return false;
    const w = world, top = w.camY + viewH + 30;
    let x1, y1, hit = 'air';
    const vis = w.demo ? [] : w.platforms.filter((p) => p.type !== 'g' && !p.broken && !p.gone && Y(p.y) > 140 && Y(p.y) < viewH - 120);
    const roll = Math.random();
    const volc = VOLC.filter((v) => volcBase(v) - v.h < viewH - 40);
    if (w.demo && volc.length && roll < 0.55) { // برق بدخان البركان (يصير بالحقيقة!)
      const v = pick(volc), cy = w.camY + viewH - (volcBase(v) - v.h);
      x1 = v.x + rnd(-25, 25); y1 = cy + rnd(50, 120); hit = 'plume';
    } else if (vis.length && roll < 0.45) {
      const p = pick(vis); x1 = p.x + rnd(10, p.w - 10); y1 = p.y; hit = 'platform';
    } else if (roll < 0.72) {
      x1 = rnd(20, C.W - 20); y1 = w.camY + 16; hit = 'lava';
    } else {
      x1 = rnd(30, C.W - 30); y1 = w.camY + viewH * rnd(0.35, 0.65);
    }
    const x0 = clamp(x1 + rnd(-90, 90), 10, C.W - 10), len = top - y1;
    const b = { x0, y0: top, main: boltPath(x0, top, x1, y1, len * 0.16, 6), branches: [], t: 0, life: 0.5 };
    for (let k = 0, n = 1 + ((Math.random() * 3) | 0); k < n; k++) {
      const [bx, by] = b.main[Math.floor(b.main.length * rnd(0.15, 0.65))], dir = Math.random() < 0.5 ? -1 : 1;
      b.branches.push(boltPath(bx, by, bx + dir * rnd(40, 110), by - rnd(60, 170), 22, 4));
    }
    bolts.push(b);
    skyFlash = 0.32;
    jetsEvade(x1);
    if (hit === 'platform') { explode(x1, y1, 0.5); burst(x1, y1, 10, FX.spark); }
    else if (hit === 'lava') { burst(x1, y1, 14, { sp: 120, vy0: 200, vy1: 480, g: 1200, life: 0.7, r: 3.5, colors: LAVA_COLS, kind: 'lava' }); parts.push({ x: x1, y: y1, vx: 0, vy: 0, g: 0, life: 0.25, max: 0.25, r: 14, c: '#fff', kind: 'flash', rot: 0, drag: 0 }); }
    else if (hit === 'plume') burst(x1, y1, 8, FX.spark);
    if (state === 'play') {
      const near = hit !== 'air';
      Sfx.thunder(near, near ? rnd(0.03, 0.15) : rnd(0.3, 0.8));
      if (near) Music.duck(0.45, 0.5);
      if (near) vibrate(25);
    }
    return true;
  }
  function updateLightning(dt) {
    skyFlash = Math.max(0, skyFlash - dt * 1.6);
    for (let i = bolts.length - 1; i >= 0; i--) { bolts[i].t += dt; if (bolts[i].t > bolts[i].life) bolts.splice(i, 1); }
    boltT -= dt;
    if (boltT <= 0) {
      const s = (world.camY + viewH / 2) / C.SCORE_DIV, base = 7 - 3.5 * clamp(s / 5000, 0, 1); // كل ما تصعد العاصفة تشتد
      boltT = rnd(base * 0.6, base * 1.3);
      strike();
    }
  }
  const boltAlpha = (b) => { const t = b.t; return t < 0.06 ? 1 : t < 0.1 ? 0.25 : t < 0.16 ? 1 : clamp(1 - (t - 0.16) / (b.life - 0.16), 0, 1); };
  function strokeBolt(pts, widths, alpha) {
    const cols = [`rgba(255,110,30,${0.35 * alpha})`, `rgba(255,150,40,${alpha})`, `rgba(255,248,210,${alpha})`];
    for (let k = 0; k < 3; k++) {
      ctx.strokeStyle = cols[k]; ctx.lineWidth = widths[k];
      ctx.beginPath(); ctx.moveTo(pts[0][0], Y(pts[0][1]));
      for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0], Y(pts[i][1]));
      ctx.stroke();
    }
  }
  function drawLightning() {
    if (!bolts.length) return;
    ctx.save(); ctx.lineJoin = 'round'; ctx.lineCap = 'round';
    for (const b of bolts) {
      const a = boltAlpha(b);
      // غيمة عاصفة تضوي من جوه
      const cy = Y(b.y0) + 6;
      drawCloud(b.x0, cy, 1.35, 0.9, 'rgb(46,18,16)');
      const g = ctx.createRadialGradient(b.x0, cy, 4, b.x0, cy, 60);
      g.addColorStop(0, `rgba(255,170,70,${0.55 * a})`); g.addColorStop(1, 'rgba(255,90,0,0)');
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(b.x0, cy, 60, 0, TAU); ctx.fill();
      strokeBolt(b.main, [9, 3.6, 1.5], a);
      for (const br of b.branches) strokeBolt(br, [5, 2, 0.9], a * 0.8);
    }
    ctx.restore();
  }
  function drawSkyFlash() {
    if (skyFlash <= 0) return;
    ctx.fillStyle = `rgba(255,185,120,${skyFlash})`;
    ctx.fillRect(-4, -4, C.W + 8, viewH + 8);
  }

  // ---------------------------------------------------------------- أسراب طائرات ✈️ (عالم «ناري»)
  // كل سرب: قائد يمشي على خطة مناورة، والباقين يمسكون مواقعهم بالتشكيل بـ«توجيه» ذكي:
  // يلحكون مواقعهم بنعومة (نابض + تخميد)، ما يتقاربون هواية من بعض، يتفادون الشخصية،
  // ويسوون لفّة هروب إذا البرق ضرب يمّهم. الطيارات بطبقة سما (تتحرك أبطأ من المنصات)
  const JPAR = 0.35, JV = 250;
  const squads = [];
  let squadT = 6, lastMan = '';
  const JET_SMOKE = ['#FF3D1F', '#FF8C1A', '#FFD23F', '#FFF1DC', '#FF6A3D', '#FFB000'];
  const FORMS = { // مواقع الطيارات ورا القائد: [لورا، لفوك]
    V: [[-30, 20], [-30, -20], [-60, 40], [-60, -40], [-90, 60]],
    trail: [[-40, 0], [-80, 0], [-120, 0], [-160, 0], [-200, 0]],
    echelon: [[-28, -20], [-56, -40], [-84, -60], [-112, -80], [-140, -100]],
    diamond: [[-30, 22], [-30, -22], [-60, 0], [-90, 0], [-120, 0]],
  };
  const MANEUVERS = ['flyby', 'loop', 'roll', 'burst', 'change', 'cross'];
  const jetScreenY = (ly) => viewH - (ly - world.camY * JPAR);
  const toJetY = (sy) => viewH - sy + world.camY * JPAR;
  /** خطة القائد: مقاطع، كل مقطع مدته وسرعة دورانه وشكل التشكيل */
  function plan(man, dir) {
    const r = 70, wl = (JV / r) * dir;
    switch (man) {
      case 'loop': return [{ t: 1.05, w: 0, f: 'V' }, { t: TAU / (JV / r), w: wl, f: 'V' }, { t: 3, w: 0, f: 'V' }];
      case 'roll': return [{ t: 0.9, w: 0, f: 'echelon' }, { t: 1.4, w: 0, f: 'echelon', roll: 2 }, { t: 3, w: 0, f: 'echelon' }];
      case 'burst': return [{ t: 0.85, w: 0, f: 'diamond' }, { t: (Math.PI / 2) / (JV / 60), w: (JV / 60) * dir, f: 'diamond' }, { t: 0.55, w: 0, f: 'diamond' }, { t: 4, w: 0, f: 'diamond', burst: true }];
      case 'change': return [{ t: 1.0, w: 0.12 * dir, f: 'trail' }, { t: 1.1, w: -0.12 * dir, f: 'V' }, { t: 3, w: 0, f: 'echelon' }];
      case 'cross': return [{ t: 4.5, w: 0, f: 'echelon' }];
      default: return [{ t: 4.5, w: 0.05 * dir, f: 'V' }];
    }
  }
  function slotPos(sq, f, i) {
    const L = sq.L, lead = sq.jets[0], F = FORMS[f] || FORMS.V;
    const [sx, sy0] = F[(i - 1) % F.length], sy = sy0 * sq.dir, c = Math.cos(L.ang), s = Math.sin(L.ang);
    return [L.x + lead.ox + c * sx - s * sy, L.y + lead.oy + s * sx + c * sy];
  }
  function makeSquad(man, dir, ly, n) {
    const ang = dir > 0 ? 0 : Math.PI;
    const sq = { man, dir, segs: plan(man, dir), si: 0, st: 0, age: 0, gone: 0, free: false, L: { x: dir > 0 ? -50 : C.W + 50, y: ly, ang }, jets: [] };
    const rot = (Math.random() * JET_SMOKE.length) | 0;
    for (let i = 0; i < n; i++) {
      const j = { x: sq.L.x, y: ly, vx: Math.cos(ang) * JV, vy: 0, ang, ox: 0, oy: 0, ovx: 0, ovy: 0, trail: [], trT: 0,
        col: JET_SMOKE[(i + rot) % JET_SMOKE.length], roll: 0, rollTo: 0, rollWait: 0, knife: false, free: false, fw: 0 };
      sq.jets.push(j);
      if (i) { const [x, y] = slotPos(sq, sq.segs[0].f, i); j.x = x; j.y = y; }
    }
    squads.push(sq);
    return sq;
  }
  function spawnSquad(man, ly, dir) {
    man = man || pick(MANEUVERS.filter((m) => m !== lastMan));
    lastMan = man;
    dir = dir || (Math.random() < 0.5 ? 1 : -1);
    if (man === 'cross') { // سربين يتعاكسون ويعبرون يم بعض بوضع «حافة السكين»
      const y = ly != null ? ly : toJetY(viewH * (world.demo ? rnd(0.62, 0.7) : rnd(0.3, 0.5)));
      makeSquad('cross', dir, y + 10, 3); makeSquad('cross', -dir, y - 10, 3);
      if (state === 'play') { Sfx.jet(dir); Sfx.jet(-dir); }
      return;
    }
    // بالرئيسية نطيّرهم جوه الأزرار حتى يبينون فوك البراكين
    const home = world.demo;
    const frac = man === 'burst' ? (home ? rnd(0.76, 0.8) : rnd(0.5, 0.58)) : man === 'loop' ? (home ? rnd(0.72, 0.76) : rnd(0.42, 0.52)) : home ? rnd(0.6, 0.72) : rnd(0.2, 0.48);
    makeSquad(man, dir, ly != null ? ly : toJetY(viewH * frac), man === 'burst' ? 5 : 4 + ((Math.random() * 2) | 0));
    if (state === 'play') Sfx.jet(dir);
  }
  function startSeg(sq, seg) {
    if (seg.roll) sq.jets.forEach((j, i) => { j.rollTo += seg.roll * TAU; j.rollWait = i * 0.09; }); // لفّة متموجة ورا بعض
    if (seg.burst) { // «انفجار القنبلة»: كل طيارة تطلع بزاوية مثل المروحة
      sq.free = true;
      const L = sq.L;
      sq.jets.forEach((j, i) => {
        let sp = clamp((j.x + j.ox - L.x) / 40, -1, 1);
        if (i && Math.abs(sp) < 0.2) sp += i % 2 ? 0.3 : -0.3;
        j.free = true; j.ang = Math.PI / 2 - sp * 1.15; j.fw = -sp * 0.55; j.rollTo += TAU;
      });
      burst(L.x, L.y + world.camY * (1 - JPAR), 14, FX.spark);
      if (state === 'play') Sfx.whoosh();
    }
  }
  const _f = [0, 0];
  /**
   * تفادي ذكي: الطيارة تتوقع وين راح تكون هي ووين راح تكون الشخصية خلال 0.6 ثانية
   * (مع قوس القفزة والجاذبية)، وإذا شافت إنهم راح يقربون، تنحرف باتجاه يكبّر المسافة لحظة أقرب نقطة
   */
  function avoidForce(j) {
    _f[0] = 0; _f[1] = 0;
    const P = world.player;
    if (P.state !== 'alive') return _f;
    const px = P.x, py = P.y + 20 - world.camY * (1 - JPAR);
    const jx = j.x + j.ox, jy = j.y + j.oy, vx = j.vx + j.ovx, vy = j.vy + j.ovy;
    let best = 1e9, bx = 0, by = 0, bt = 0;
    for (let t = 0; t <= 0.6001; t += 0.05) {
      const ex = jx + vx * t - (px + P.vx * t), ey = jy + vy * t - (py + P.vy * t - 0.5 * C.G * t * t);
      const d2 = ex * ex + ey * ey;
      if (d2 < best) { best = d2; bx = ex; by = ey; bt = t; }
    }
    const d = Math.sqrt(best), RS = 95;
    if (d < RS) {
      let nx = bx, ny = by;
      if (d < 1) { nx = -vy; ny = vx; }
      const nl = Math.hypot(nx, ny) || 1, mag = Math.min(24000, (11000 * (1 - d / RS)) / (bt * 3 + 0.4));
      _f[0] = (nx / nl) * mag; _f[1] = (ny / nl) * mag;
    }
    return _f;
  }
  /** البرق ضرب يم السرب: الطيارات القريبة تسوي لفّة هروب */
  function jetsEvade(x) {
    for (const sq of squads) for (const j of sq.jets) {
      const dx = j.x + j.ox - x;
      if (Math.abs(dx) < 70) { j.ovx += (dx >= 0 ? 1 : -1) * 420; j.ovy += 140; j.rollTo += TAU; }
    }
  }
  function updateSquads(dt) {
    squadT -= dt;
    if (squadT <= 0) { squadT = rnd(13, 22); if (squads.length < 2) spawnSquad(); }
    // خطوات صغيرة حتى التفادي يبقى دقيق حتى لو الجهاز بطيء
    const n = Math.max(1, Math.ceil(dt * 90));
    for (let i = 0; i < n; i++) stepSquads(dt / n);
  }
  function stepSquads(dt) {
    for (let k = squads.length - 1; k >= 0; k--) {
      const sq = squads[k], L = sq.L;
      sq.age += dt;
      let seg = sq.segs[sq.si];
      if (!sq.free) {
        sq.st += dt;
        if (sq.st > seg.t && sq.si < sq.segs.length - 1) { sq.st = 0; sq.si++; seg = sq.segs[sq.si]; startSeg(sq, seg); }
        if (!sq.free) { L.ang += (seg.w || 0) * dt; L.x += Math.cos(L.ang) * JV * dt; L.y += Math.sin(L.ang) * JV * dt; }
      }
      let onScreen = false;
      sq.jets.forEach((j, i) => {
        if (j.free) {
          j.ang += j.fw * dt; j.vx = Math.cos(j.ang) * JV; j.vy = Math.sin(j.ang) * JV; j.x += j.vx * dt; j.y += j.vy * dt;
        } else if (i === 0) {
          j.x = L.x; j.y = L.y; j.ang = L.ang; j.vx = Math.cos(L.ang) * JV; j.vy = Math.sin(L.ang) * JV;
        } else { // يلحك موقعه بالتشكيل
          const [tx, ty] = slotPos(sq, seg.f, i), lvx = Math.cos(L.ang) * JV, lvy = Math.sin(L.ang) * JV;
          let ax = (tx - j.x) * 16 - (j.vx - lvx) * 6.5, ay = (ty - j.y) * 16 - (j.vy - lvy) * 6.5;
          for (const o of sq.jets) { // ما يتقاربون هواية
            if (o === j) continue;
            const dx = j.x - o.x, dy = j.y - o.y, d2 = dx * dx + dy * dy;
            if (d2 < 676 && d2 > 0.01) { const d = Math.sqrt(d2), s = ((26 - d) * 90) / d; ax += dx * s; ay += dy * s; }
          }
          const m = Math.hypot(ax, ay);
          if (m > 2600) { ax *= 2600 / m; ay *= 2600 / m; }
          j.vx += ax * dt; j.vy += ay * dt; j.x += j.vx * dt; j.y += j.vy * dt;
          j.ang = Math.atan2(j.vy, j.vx);
        }
        // تفادي الشخصية (نابض ناعم يرجّع الطيارة لمسارها بعد ما تعبر)
        avoidForce(j);
        j.ovx += (_f[0] - j.ox * 26 - j.ovx * 7.5) * dt; j.ovy += (_f[1] - j.oy * 26 - j.ovy * 7.5) * dt;
        j.ox += j.ovx * dt; j.oy += j.ovy * dt;
        // اللف حول نفسها
        j.knife = sq.man === 'cross' && Math.abs(j.x + j.ox - C.W / 2) < 75;
        if (j.rollWait > 0) j.rollWait -= dt;
        else { const goal = j.rollTo + (j.knife ? Math.PI / 2 : 0); j.roll += clamp(goal - j.roll, -14 * dt, 14 * dt); }
        // الدخان
        const rx = j.x + j.ox, ry = j.y + j.oy, sy = jetScreenY(ry);
        const vis = rx > -60 && rx < C.W + 60 && sy > -80 && sy < viewH + 80;
        if (vis) onScreen = true;
        j.trT -= dt;
        if (j.trT <= 0) { j.trT = 0.035; j.trail.push(vis ? [rx, ry] : null); if (j.trail.length > 40) j.trail.shift(); }
      });
      sq.gone = onScreen ? 0 : sq.gone + dt;
      if (sq.gone > 1.6 || sq.age > 25) squads.splice(k, 1);
    }
  }
  function drawJet(g, col, c, s) { // c = cos(اللفّة) للجنب، s = sin(اللفّة) للجناحين من فوك
    const fl = 9 + Math.random() * 7;
    const fg = g.createLinearGradient(-15, 0, -15 - fl, 0);
    fg.addColorStop(0, 'rgba(255,240,180,.95)'); fg.addColorStop(0.4, 'rgba(255,140,30,.8)'); fg.addColorStop(1, 'rgba(255,60,0,0)');
    g.fillStyle = fg; g.beginPath(); g.moveTo(-15, -2.4); g.lineTo(-15 - fl, 0); g.lineTo(-15, 2.4); g.fill();
    if (Math.abs(s) > 0.05) {
      g.save(); g.scale(1, s);
      g.fillStyle = '#B9C0CF'; g.beginPath();
      g.moveTo(6, 0); g.lineTo(-8, 15); g.lineTo(-12, 15); g.lineTo(-9, 0); g.lineTo(-12, -15); g.lineTo(-8, -15); g.closePath(); g.fill();
      g.fillStyle = col; g.fillRect(-12, 12.5, 4, 2.5); g.fillRect(-12, -15, 4, 2.5);
      g.restore();
    }
    g.save(); g.scale(1, c);
    g.fillStyle = '#C9CFDC'; g.beginPath(); g.moveTo(-8, -3); g.lineTo(-15, -3); g.lineTo(-16.5, -11); g.lineTo(-12, -11); g.closePath(); g.fill();
    g.fillStyle = col; g.fillRect(-16.5, -11, 4.5, 2.6);
    g.fillStyle = '#EEF1F7'; g.beginPath();
    g.moveTo(19, 0.6); g.quadraticCurveTo(12, -4.6, -4, -4); g.lineTo(-15, -3.2); g.lineTo(-15, 3.2); g.lineTo(-4, 4); g.quadraticCurveTo(12, 4.4, 19, 0.6);
    g.closePath(); g.fill(); g.strokeStyle = 'rgba(60,70,95,.6)'; g.lineWidth = 0.8; g.stroke();
    g.fillStyle = col; g.beginPath(); g.moveTo(14, -1.2); g.lineTo(-13, -1.6); g.lineTo(-13, 1.6); g.lineTo(14, 1); g.closePath(); g.fill();
    g.fillStyle = '#23345C'; g.beginPath(); g.ellipse(8, -3.4, 5.5, 2.4, -0.08, Math.PI, 0); g.fill();
    g.fillStyle = 'rgba(255,255,255,.6)'; g.beginPath(); g.ellipse(9.5, -4.4, 2, 0.8, -0.1, 0, TAU); g.fill();
    g.fillStyle = '#AEB6C6'; g.beginPath(); g.moveTo(3, 2); g.lineTo(-10, 2.5); g.lineTo(-12, 5.5); g.lineTo(-7, 5.5); g.closePath(); g.fill();
    g.restore();
  }
  function drawSquads() {
    if (!squads.length) return;
    ctx.save(); ctx.lineCap = 'round';
    for (const sq of squads) for (const j of sq.jets) { // الدخان: يتوسع ويخف كل ما يعتق
      const tr = j.trail, n = tr.length;
      ctx.strokeStyle = j.col;
      for (let i = 1; i < n; i++) {
        const a = tr[i - 1], b = tr[i];
        if (!a || !b) continue;
        const age = 1 - i / n;
        ctx.globalAlpha = 0.5 * (1 - age); ctx.lineWidth = 1.6 + age * 6;
        ctx.beginPath(); ctx.moveTo(a[0], jetScreenY(a[1])); ctx.lineTo(b[0], jetScreenY(b[1])); ctx.stroke();
      }
    }
    ctx.globalAlpha = 1;
    for (const sq of squads) for (const j of sq.jets) {
      const x = j.x + j.ox, y = jetScreenY(j.y + j.oy);
      if (x < -50 || x > C.W + 50 || y < -50 || y > viewH + 50) continue;
      ctx.save(); ctx.translate(x, y); ctx.rotate(-j.ang); ctx.scale(1.3, 1.3 * sq.dir);
      drawJet(ctx, j.col, Math.cos(j.roll), Math.sin(j.roll));
      ctx.restore();
    }
    ctx.restore();
  }

  // ---------------------------------------------------------------- مؤثرات
  const parts = [], texts = [];
  function burst(x, y, n, o) {
    if (parts.length > 650) return;
    for (let i = 0; i < n; i++) {
      const life = o.life * rnd(0.6, 1.2);
      parts.push({ x: x + rnd(-o.spread || 0, o.spread || 0), y, vx: rnd(-1, 1) * o.sp, vy: rnd(o.vy0, o.vy1), g: o.g, life, max: life, r: o.r * rnd(0.6, 1.4), c: pick(o.colors), kind: o.kind || 'dot', rot: rnd(0, 6), drag: o.drag || 0 });
    }
  }
  const FX = {
    dust: { sp: 70, vy0: 10, vy1: 70, g: 150, life: 0.35, r: 4, colors: ['rgba(255,255,255,.9)'], spread: 10 },
    boost: { sp: 140, vy0: 40, vy1: 180, g: 300, life: 0.6, r: 3.5, colors: ['#FFE066', '#FF9F1C', '#ffffff'], kind: 'star' },
    chunk: { sp: 90, vy0: 0, vy1: 120, g: 1100, life: 0.8, r: 5, colors: ['#B57A4F', '#7A4A2A', '#DDB08A'], kind: 'rect', spread: 25 },
    puff: { sp: 120, vy0: -40, vy1: 100, g: 0, life: 0.4, r: 5, colors: ['#ffffff', '#E8ECFF'], spread: 25 },
    spark: { sp: 110, vy0: -40, vy1: 140, g: 200, life: 0.45, r: 2.6, colors: ['#FFD23F', '#FFF6C4', '#FFB703'], kind: 'star' },
    stars: { sp: 180, vy0: 0, vy1: 220, g: 600, life: 0.7, r: 4.5, colors: ['#FFE066', '#ffffff', '#C2A8FF'], kind: 'star' },
    glass: { sp: 200, vy0: -50, vy1: 200, g: 500, life: 0.6, r: 3, colors: ['#9FE7FF', '#ffffff'], kind: 'rect' },
    emberDust: { sp: 70, vy0: 20, vy1: 90, g: -30, life: 0.45, r: 2.6, colors: ['#FFB000', '#FF6A00', '#FFE066'], spread: 12 },
    ash: { sp: 110, vy0: -20, vy1: 90, g: 60, life: 0.7, r: 5, colors: ['rgba(140,130,125,.9)', 'rgba(90,82,80,.9)'], kind: 'smoke', spread: 25, drag: 2 },
    magma: { sp: 120, vy0: 40, vy1: 220, g: 1000, life: 0.9, r: 5, colors: ['#D9480F', '#7C1D06', '#FFB000'], kind: 'rect', spread: 25 },
  };
  function floatText(x, y, text, color) { texts.push({ x, y, text, color, t: 0 }); }
  function confetti() {
    const top = world.camY + viewH;
    for (let i = 0; i < 70; i++) {
      parts.push({ x: rnd(0, C.W), y: top + rnd(0, 60), vx: rnd(-90, 90), vy: rnd(-120, 40), g: 160, life: 2.4, max: 2.4, r: rnd(3.5, 6), c: pick(['#ff595e', '#ffca3a', '#8ac926', '#1982c4', '#6a4c93', '#ff924c']), kind: 'conf', rot: rnd(0, 6) });
    }
  }
  let shake = 0, emberAcc = 0;
  function updateFx(dt) {
    updateBends(dt);
    for (let i = parts.length - 1; i >= 0; i--) {
      const p = parts[i];
      p.life -= dt;
      if (p.life <= 0) { parts[i] = parts[parts.length - 1]; parts.pop(); continue; }
      p.vy -= p.g * dt;
      if (p.drag) { const k = Math.max(0, 1 - p.drag * dt); p.vx *= k; p.vy *= k; }
      p.x += p.vx * dt; p.y += p.vy * dt; p.rot += dt * 6;
      if (p.kind === 'conf') p.vx *= 0.99;
    }
    for (let i = texts.length - 1; i >= 0; i--) { texts[i].t += dt; if (texts[i].t > 0.9) texts.splice(i, 1); }
    shake = Math.max(0, shake - dt);
    const P = world.player;
    // شرار يطير من الشخصية النارية
    if (skinById(save.skin).body === 'fire' && P.state === 'alive') {
      emberAcc += dt;
      while (emberAcc > 0.045) {
        emberAcc -= 0.045;
        if (parts.length >= 650) break;
        const life = rnd(0.35, 0.7);
        parts.push({ x: P.x + rnd(-12, 12), y: P.y + rnd(40, 54), vx: rnd(-25, 25), vy: rnd(40, 110), g: -40, life, max: life, r: rnd(1.4, 2.8), c: pick(['#FFE066', '#FFB000', '#FF6A00', '#FF3D00']), kind: 'dot', rot: 0 });
      }
    }
    if (FT) updateFire(dt);
    if (P.rocket > 0 && parts.length < 650) {
      for (let k = 0; k < 2; k++) {
        const life = rnd(0.2, 0.35);
        parts.push({ x: P.x - P.face * 19 + rnd(-3, 3), y: P.y - 2, vx: rnd(-30, 30), vy: rnd(-380, -220), g: 0, life, max: life, r: rnd(3, 7), c: pick(['#FFE066', '#FF9F1C', '#FF5D3D', '#ffffff']), kind: 'dot', rot: 0 });
      }
    }
  }
  function drawFx() {
    for (const p of parts) {
      const y = Y(p.y);
      if (y < -20 || y > viewH + 20) continue;
      ctx.globalAlpha = clamp(p.life / p.max, 0, 1);
      if (p.kind === 'star') star(ctx, p.x, y, p.r * 1.6, p.r * 0.7, p.c);
      else if (p.kind === 'rect' || p.kind === 'conf') {
        ctx.save(); ctx.translate(p.x, y); ctx.rotate(p.rot); ctx.fillStyle = p.c;
        ctx.fillRect(-p.r, -p.r * (p.kind === 'conf' ? 0.5 : 0.8), p.r * 2, p.r * (p.kind === 'conf' ? 1 : 1.6)); ctx.restore();
      } else if (p.kind === 'flash') {
        const r = p.r * (1 + (1 - p.life / p.max) * 2.2), g = ctx.createRadialGradient(p.x, y, 0, p.x, y, r);
        g.addColorStop(0, 'rgba(255,255,230,1)'); g.addColorStop(0.35, 'rgba(255,200,80,.85)'); g.addColorStop(1, 'rgba(255,90,0,0)');
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(p.x, y, r, 0, TAU); ctx.fill();
      } else if (p.kind === 'smoke') {
        ctx.globalAlpha = (p.life / p.max) * 0.55; ctx.fillStyle = p.c;
        ctx.beginPath(); ctx.arc(p.x, y, p.r * (1 + (1 - p.life / p.max) * 1.8), 0, TAU); ctx.fill();
      } else if (p.kind === 'lava') {
        ctx.fillStyle = p.c; ctx.beginPath(); ctx.arc(p.x, y, p.r, 0, TAU); ctx.fill();
        ctx.globalAlpha *= 0.3; ctx.beginPath(); ctx.arc(p.x, y, p.r * 2.2, 0, TAU); ctx.fill();
      } else { ctx.fillStyle = p.c; ctx.beginPath(); ctx.arc(p.x, y, p.r * (0.5 + 0.5 * p.life / p.max), 0, TAU); ctx.fill(); }
    }
    ctx.globalAlpha = 1;
    try { ctx.direction = 'ltr'; } catch (e) { /* الصفحة RTL، والأرقام مثل +1 لازم تنكتب LTR */ }
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.font = '900 20px -apple-system,system-ui,sans-serif'; ctx.lineJoin = 'round';
    for (const tx of texts) {
      try { ctx.direction = /[\u0600-\u06FF]/.test(tx.text) ? 'rtl' : 'ltr'; } catch (e) { /* */ }
      const y = Y(tx.y + tx.t * 60);
      ctx.globalAlpha = clamp(1.4 - tx.t * 1.6, 0, 1);
      ctx.lineWidth = 5; ctx.strokeStyle = '#24305e'; ctx.strokeText(tx.text, tx.x, y);
      ctx.fillStyle = tx.color; ctx.fillText(tx.text, tx.x, y);
    }
    ctx.globalAlpha = 1;
  }

  // ---------------------------------------------------------------- خط أفضل نتيجة
  let bestAtStart = 0, record = false, deathCause = '';
  function drawBestLine() {
    if (bestAtStart <= 0) return;
    const y = Y(bestAtStart * C.SCORE_DIV);
    if (y < -40 || y > viewH + 20) return;
    ctx.save();
    ctx.setLineDash([10, 8]); ctx.lineWidth = 3; ctx.strokeStyle = record ? 'rgba(255,210,63,.6)' : 'rgba(255,255,255,.85)';
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(C.W, y); ctx.stroke(); ctx.setLineDash([]);
    ctx.strokeStyle = '#24305e'; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(C.W - 22, y); ctx.lineTo(C.W - 22, y - 38); ctx.stroke();
    ctx.fillStyle = '#FF4D6D'; ctx.beginPath(); ctx.moveTo(C.W - 22, y - 38); ctx.lineTo(C.W - 46, y - 31); ctx.lineTo(C.W - 22, y - 24); ctx.fill();
    ctx.font = '900 15px -apple-system,system-ui,sans-serif'; ctx.textAlign = 'right'; ctx.textBaseline = 'alphabetic';
    try { ctx.direction = 'rtl'; } catch (e) { /* */ }
    ctx.lineJoin = 'round'; ctx.lineWidth = 4; ctx.strokeStyle = '#24305e';
    const label = 'أفضل نتيجة ' + bestAtStart;
    ctx.strokeText(label, C.W - 52, y - 9); ctx.fillStyle = '#fff'; ctx.fillText(label, C.W - 52, y - 9);
    try { ctx.direction = 'ltr'; } catch (e) { /* */ }
    ctx.restore();
  }

  // ---------------------------------------------------------------- التحكم
  const ptr = new Map();
  let keyL = false, keyR = false, tilt = 0, tiltOn = false;
  function sideOf(e) { const r = cvs.getBoundingClientRect(); return e.clientX - r.left < r.width / 2 ? -1 : 1; }
  cvs.addEventListener('pointerdown', (e) => {
    Sfx.init();
    if (state === 'world') { e.preventDefault(); valleyPointer('down', e); return; }
    if (state !== 'play' && state !== 'valley') return;
    e.preventDefault();
    ptr.delete(e.pointerId); ptr.set(e.pointerId, sideOf(e));
    try { cvs.setPointerCapture(e.pointerId); } catch (err) { /* */ }
    tutSeen();
  });
  cvs.addEventListener('pointermove', (e) => { if (state === 'world') { valleyPointer('move', e); return; } if (ptr.has(e.pointerId)) ptr.set(e.pointerId, sideOf(e)); });
  const lift = (e) => { valleyPointer('up', e); ptr.delete(e.pointerId); };
  ['pointerup', 'pointercancel', 'lostpointercapture'].forEach((ev) => cvs.addEventListener(ev, lift));
  cvs.addEventListener('contextmenu', (e) => e.preventDefault());

  function inputDir() {
    if (ptr.size) { let last = 0; for (const v of ptr.values()) last = v; return last; }
    if (keyL || keyR) return (keyR ? 1 : 0) - (keyL ? 1 : 0);
    if (save.control === 'tilt') return tilt;
    return 0;
  }
  window.addEventListener('keydown', (e) => {
    if (e.target && e.target.tagName === 'INPUT') { if (e.key === 'Enter') { e.preventDefault(); tryCode(); } return; }
    if ((e.code === 'ArrowUp' || e.code === 'KeyW') && state === 'play') { useTurbo(); return; }
    if (state === 'world' && e.code === 'Space') { e.preventDefault(); mtJump(); return; }
    if (state === 'world' && (e.code === 'KeyF' || e.code === 'Enter')) { e.preventDefault(); mtAction(); return; }
    if (e.code === 'ArrowLeft' || e.code === 'KeyA') { keyL = true; tutSeen(); }
    else if (e.code === 'ArrowRight' || e.code === 'KeyD') { keyR = true; tutSeen(); }
    else if (e.code === 'ArrowUp' || e.code === 'KeyW') keyU = true;
    else if (e.code === 'ArrowDown' || e.code === 'KeyS') keyD = true;
    else if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') keySh = true;
    else if (e.code === 'KeyQ') keyQ = true;
    else if (e.code === 'KeyE') keyE = true;
    else if (e.code === 'KeyM' && state === 'world' && WS) { if (WS.mapOpen) closeMap(); else openMap(); }
    else if (e.code === 'Escape' || e.code === 'KeyP') { if (state === 'play' || state === 'valley' || state === 'world') pause(); else if (state === 'pause') resume(); }
    else if (e.code === 'Space' || e.code === 'Enter') {
      if (state === 'home') { e.preventDefault(); startWorld(); }
      else if (state === 'over' && !$('over').hidden) { e.preventDefault(); startRun(); }
      else if (state === 'pause') resume();
    } else return;
    Sfx.init();
  });
  window.addEventListener('keyup', (e) => {
    if (e.code === 'ArrowLeft' || e.code === 'KeyA') keyL = false;
    if (e.code === 'ArrowRight' || e.code === 'KeyD') keyR = false;
    if (e.code === 'ArrowUp' || e.code === 'KeyW') keyU = false;
    if (e.code === 'ArrowDown' || e.code === 'KeyS') keyD = false;
    if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') keySh = false;
    if (e.code === 'KeyQ') keyQ = false;
    if (e.code === 'KeyE') keyE = false;
  });

  function onOrient(e) {
    if (e.gamma == null) return;
    const ang = screen.orientation && typeof screen.orientation.angle === 'number' ? screen.orientation.angle : window.orientation || 0;
    let v = e.gamma;
    if (ang === 90) v = e.beta; else if (ang === -90 || ang === 270) v = -e.beta;
    const dz = 2.5, max = 22, a = Math.abs(v);
    tilt = a < dz ? 0 : Math.sign(v) * Math.min(1, (a - dz) / (max - dz));
  }
  /** لازم تنطلب من ضغطة زر بسفاري (iOS 13+) */
  function enableTilt() {
    if (typeof DeviceOrientationEvent === 'undefined') return Promise.resolve(false);
    const on = () => { if (!tiltOn) { window.addEventListener('deviceorientation', onOrient); tiltOn = true; } return true; };
    if (typeof DeviceOrientationEvent.requestPermission === 'function') {
      return DeviceOrientationEvent.requestPermission().then((r) => (r === 'granted' ? on() : false)).catch(() => false);
    }
    return Promise.resolve(on());
  }

  // منع الزوم والسحب بسفاري
  document.addEventListener('gesturestart', (e) => e.preventDefault());
  document.addEventListener('dblclick', (e) => e.preventDefault(), { passive: false });
  document.addEventListener('touchmove', (e) => { if (!e.target.closest || !e.target.closest('.grid')) e.preventDefault(); }, { passive: false });

  // ---------------------------------------------------------------- الواجهة
  let state = 'home', tutTimer = 0, lastScore = -1, lastCoins = -1;
  const SCREENS = ['home', 'pause', 'over', 'shop', 'code', 'revive', 'missions', 'ending'];
  function show(id) { for (const s of SCREENS) $(s).hidden = s !== id; }
  let toastT = 0;
  function toast(text, ms = 1300) {
    const el = $('toast'); el.textContent = text; el.classList.toggle('long', [...text].length > 18); el.classList.add('show');
    clearTimeout(toastT); toastT = setTimeout(() => el.classList.remove('show'), ms);
  }
  function tutSeen() {
    if (!$('tut').hidden && tutTimer > 1.2) tutTimer = 1.2;
  }

  const isIOS = /iP(hone|ad|od)/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const standalone = navigator.standalone === true || (window.matchMedia && matchMedia('(display-mode: standalone)').matches);

  function refreshHome() {
    $('hBest').textContent = save.best; $('hCoins').textContent = save.coins;
    $('ctrl').textContent = save.control === 'tilt' ? '📱 ميلان' : '👆 لمس';
    $('snd').textContent = save.sound ? '🔊' : '🔇';
    $('mus').textContent = save.music && save.sound ? '🎵' : '🔕';
    const coarse = window.matchMedia && matchMedia('(pointer: coarse)').matches;
    $('how').textContent = coarse ? '⛰️ إبهامك اليسار يمشي، اليمين يلف الكاميرا، وزر 🦘 للنطة'
      : '⛰️ امشي بـ WASD، لف الكاميرا بـ Q و E، والمسافة للنطة';
    $('a2hs').hidden = !(isIOS && !standalone && !save.a2hs);
    $('hHero').hidden = !save.hero;
    $('hSum').textContent = save.mtSummits ? `⛰️ ×${save.mtSummits}${save.mtBest ? ' • ⏱️ ' + fmtTime(save.mtBest) : ''}` : '⛰️ 95م';
    $('tag').textContent = 'عالم مفتوح… اطلع للقمة إذا تكدر! ⛰️';
  }
  function clearSky() { squads.length = 0; bolts.length = 0; squadT = rnd(5, 8); }
  function newDemo() { world = Core.createWorld(rand32(), { viewH, demo: true }); parts.length = 0; texts.length = 0; clearSky(); }
  function goHome() {
    if (WS) leaveWorld();
    if (V) leaveValley(); SUM = null; $('skip').hidden = true;
    state = 'home'; newDemo(); show('home'); $('turbo').hidden = true;
    $('hud').hidden = true; $('tut').hidden = true; Sfx.rocketStop(); refreshHome();
    Music.setMode('home'); Music.reset();
  }
  function startRun() {
    Sfx.init();
    if (WS) leaveWorld();
    if (V) leaveValley(); SUM = null; $('skip').hidden = true; resumeTo = 'play';
    if (save.control === 'tilt') enableTilt();
    FT = isFireSkin(); deathCause = ''; clearSky();
    world = Core.createWorld(rand32(), { viewH, hero: !!save.hero, lava: FT });
    runId++; doneThisRun = []; slowT = 0; lastCombo = -1; misTimer = 1;
    ensureMissions(); for (const m of save.missions) { m.run = -1; m.fresh = false; m.checked = true; }
    $('banner').classList.remove('show'); $('count').hidden = true;
    state = 'play'; record = false; bestAtStart = save.best;
    $('turbo').hidden = !save.hero; $('heroChip').hidden = !save.hero;
    parts.length = 0; texts.length = 0; ptr.clear(); lastScore = -1; lastCoins = -1; shake = 0;
    show(null); $('hud').hidden = false; $('pbar').hidden = true;
    if (!save.tut) { $('tut').hidden = false; $('tut').style.opacity = '1'; tutTimer = 6; } else $('tut').hidden = true;
    Sfx.click(); Music.reset(); Music.setMode('play');
  }
  function pause() {
    if (V && V.mapOpen) closeMap();
    J.id = null; CAMD.id = null;
    if (state !== 'play' && state !== 'countdown' && state !== 'valley' && state !== 'world') return;
    if (state !== 'countdown') resumeTo = state === 'valley' || state === 'world' ? state : 'play';
    $('jumpBtn').hidden = true; $('actBtn').hidden = true; $('skip').hidden = true;
    clearTimeout(countTimer); $('count').hidden = true; $('vbar').hidden = true; $('dlg').hidden = true;
    state = 'pause'; show('pause'); $('rest').hidden = resumeTo !== 'world'; Sfx.rocketStop(); ptr.clear(); keyL = keyR = false; $('turbo').hidden = true; Music.setMode('pause');
  }
  function resume() {
    if (state !== 'pause') return;
    startCountdown(); // 3-2-1 حتى تلحك تحط إصبعك
  }
  function countUp(el, to) {
    const t0 = performance.now(), dur = 700;
    const tick = (n) => { const k = Math.min(1, (n - t0) / dur); el.textContent = Math.round(to * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(tick); };
    requestAnimationFrame(tick);
  }
  function endRun() {
    if (state !== 'play') return;
    state = 'over';
    const sc = Core.score(world), gained = world.runCoins, prevBest = save.best;
    save.coins += gained; save.games++; save.tut = true;
    const hero = world.hero; // جولات وضع البطل ما تكسر أفضل نتيجة الحقيقية
    const isRec = !hero && sc > prevBest;
    if (isRec) save.best = sc;
    let unlocked = null;
    for (const sk of SKINS) if (sk.unlockScore && sc >= sk.unlockScore && !save.owned.includes(sk.id)) { save.owned.push(sk.id); unlocked = sk; }
    persist();
    $('hud').hidden = true; $('tut').hidden = true; $('turbo').hidden = true; Sfx.rocketStop(); ptr.clear();

    $('oHero').hidden = !hero;
    checkMissions(true);
    $('oTitle').textContent = hero ? '🦸 خلصت جولة البطل'
      : deathCause === 'meteor' ? 'ضربك نيزك! ☄️'
      : FT && deathCause === 'fall' ? 'ذبت بالحمم! 🌋' : FT && deathCause === 'hit' ? 'انفجرت! 💥' : isRec && prevBest > 0 ? 'عاشت إيدك! 🔥'
      : prevBest > 0 && sc >= prevBest * 0.8 ? 'قربت كلش! 😮'
      : pick(['وكعت! 😵', 'أوف! 😅', 'ولا يهمك 💪', 'مرة لخ! 🙌']);
    $('oRecord').hidden = !(isRec && prevBest > 0);
    $('oBest').textContent = save.best; $('oCoins').textContent = '+' + gained;
    const st = $('oStats'); st.textContent = '';
    for (const s of [`⚡ أعلى كومبو ${world.maxCombo}`, `🔥 حماس ×${world.fevers}`, `👾 ${world.stomps}`, world.revives ? '💪 فرصة ثانية' : '', world.clutches ? `😮 نجاة ×${world.clutches}` : '']) {
      if (!s) continue; const sp = document.createElement('span'); sp.textContent = s; st.appendChild(sp);
    }
    const om = $('oMis'); om.textContent = '';
    if (!hero) { const r = runStats(); for (const d of doneThisRun) om.appendChild(missionRow(d, null, true)); for (const m of save.missions) om.appendChild(missionRow(m, r, false)); }
    $('oMisWrap').hidden = hero;
    $('oScore').textContent = '0';

    const nx = $('oNext');
    const target = SKINS.filter((s) => !s.unlockScore && !s.story && !save.owned.includes(s.id)).sort((a, b) => a.price - b.price)[0];
    nx.hidden = false;
    if (unlocked) nx.textContent = `🎉 فتحت شخصية «${unlocked.name}»! روح للشخصيات`;
    else if (!target) nx.hidden = true;
    else if (save.coins >= target.price) nx.textContent = `🎨 عملاتك تكفي «${target.name}» — اضغط هنا!`;
    else {
      nx.textContent = `باقي 🪙 ${target.price - save.coins} وتفتح «${target.name}»`;
      const bar = document.createElement('div'); bar.className = 'bar';
      const i = document.createElement('i'); i.style.width = Math.round((save.coins / target.price) * 100) + '%';
      bar.appendChild(i); nx.appendChild(bar);
    }
    setTimeout(() => {
      if (state !== 'over') return;
      show('over'); Sfx.click(); Music.setMode('over'); countUp($('oScore'), sc);
      if (isRec && prevBest > 0) setTimeout(() => Sfx.record(), 600);
    }, 550);
  }

  // ---- الشخصيات
  let previews = [];
  function openShop() { state = 'shop'; if (!world.demo) newDemo(); show('shop'); buildShop(); Sfx.click(); }
  function buildShop() {
    const grid = $('grid'); grid.textContent = ''; previews = [];
    $('sCoins').textContent = save.coins;
    for (const sk of SKINS) {
      const owned = save.owned.includes(sk.id), sel = save.skin === sk.id;
      const b = document.createElement('button');
      b.className = 'skin' + (sel ? ' sel' : '') + (owned ? '' : ' locked');
      const c = document.createElement('canvas'); c.width = 144; c.height = 144; b.appendChild(c);
      const nm = document.createElement('div'); nm.className = 'nm'; nm.textContent = sk.name; b.appendChild(nm);
      const st = document.createElement('div'); st.className = 'st';
      if (sel) st.textContent = '✓ مختار';
      else if (owned) st.textContent = 'اختار';
      else if (sk.story) st.textContent = '🔒 كمّل المغامرة';
      else if (sk.unlockScore) st.textContent = `🔒 وصّل ${sk.unlockScore}`;
      else { const s = document.createElement('span'); s.className = 'buy' + (save.coins >= sk.price ? '' : ' no'); s.textContent = `🪙 ${sk.price}`; st.appendChild(s); }
      b.appendChild(st);
      b.onclick = () => {
        Sfx.init();
        // كل ضغطة تسمّعك صوت الشخصية، حتى لو بعدها مقفولة
        if (owned) { save.skin = sk.id; persist(); Sfx.hello(sk.id); buildShop(); return; }
        if (sk.story) { Sfx.hello(sk.id); toast('وصّل القمة 🏔️ ولزم الغزال 🦌 حتى تفتحها'); return; }
        if (sk.unlockScore) { Sfx.hello(sk.id); toast(`وصّل ${sk.unlockScore} حتى تفتحها`); return; }
        if (save.coins < sk.price) { Sfx.hello(sk.id); toast(`تحتاج 🪙 ${sk.price - save.coins} بعد`); return; }
        save.coins -= sk.price; save.owned.push(sk.id); save.skin = sk.id; persist();
        Sfx.buy(); setTimeout(() => Sfx.hello(sk.id), 320);
        toast(`🎉 «${sk.name}» صارت إلك!`); buildShop();
      };
      grid.appendChild(b);
      previews.push({ g: c.getContext('2d'), sk, sel });
    }
  }
  function drawPreviews(t) {
    for (const pv of previews) {
      const g = pv.g;
      g.setTransform(1, 0, 0, 1, 0, 0); g.clearRect(0, 0, 144, 144);
      const ph = pv.sel ? (t * 3.2) % Math.PI : 0;
      const hop = Math.sin(ph) * 10, sq = pv.sel ? Math.max(0, 1 - ph * 6) * 0.8 : 0;
      g.setTransform(2, 0, 0, 2, 72, 134 - hop * 2);
      drawHero(g, pv.sk, { face: 1, t, squash: sq, lookY: -1 });
    }
  }

  // ---- الأزرار
  $('play').onclick = () => startWorld();
  $('playJump').onclick = startRun;
  $('again').onclick = startRun;
  $('toHome').onclick = () => { Sfx.click(); goHome(); };
  // إنهاء الجولة من الإيقاف: تنحسب العملات والنتيجة وتطلع شاشة النهاية
  $('quit').onclick = () => { Sfx.click(); if (state !== 'pause') return; if (resumeTo === 'valley' || resumeTo === 'world') { goHome(); return; } state = 'play'; endRun(); };
  $('skip').onclick = () => { if (state === 'world' && WD) { WD.skipWait(); Sfx.click(); return; } skipSummit(); }; $('vPause').onclick = () => { Sfx.click(); pause(); };
  $('eWear').onclick = () => { Sfx.click(); save.skin = 'explorer'; persist(); Sfx.hello('explorer'); toast('🤠 لبست المغامر!'); $('eWear').hidden = true; };
  $('eAgain').onclick = () => startWorld();
  $('eCont').onclick = () => { if (!WS) { goHome(); return; } Sfx.click(); show(null); state = 'world'; resumeTo = 'world'; $('vbar').hidden = false; lastT = performance.now(); acc = 0; toast('🌍 العالم مفتوح… تمشّى وين ما تريد', 2600); };
  $('rest').onclick = () => { if (!WS || state !== 'pause') return; Sfx.click(); WD.respawn(); resume(); }; $('eHome').onclick = () => { Sfx.click(); goHome(); };
  $('eShare').onclick = async () => {
    Sfx.click();
    const url = location.href.split('#')[0].split('?')[0], text = 'وصلت القمة 🏔️ بلعبة نطّة، طرت بالمظلة 🪂 ولزمت الغزال 🦌! تكدر توصل؟';
    try { if (navigator.share) { await navigator.share({ title: 'نطّة', text, url }); return; } } catch (e) { if (e && e.name === 'AbortError') return; }
    try { await navigator.clipboard.writeText(text + '\n' + url); toast('انسخ الرابط ✅'); } catch (e) { toast('انسخ الرابط من فوك ⬆️'); }
  };
  $('resume').onclick = () => { Sfx.click(); resume(); };
  $('pauseBtn').onclick = () => { Sfx.click(); pause(); };
  $('openShop').onclick = openShop;
  $('oNext').onclick = openShop;
  $('rvYes').onclick = acceptRevive; $('rvNo').onclick = () => { Sfx.click(); declineRevive(); };
  $('hMis').onclick = openMissions; $('mBack').onclick = () => { Sfx.click(); goHome(); };
  $('shopBack').onclick = () => { Sfx.click(); goHome(); };
  $('mus').onclick = () => { Sfx.init(); save.music = !save.music; persist(); refreshHome(); Sfx.click(); if (save.music) toast('🎵 الموسيقى شغّالة'); };
  $('snd').onclick = () => { Sfx.init(); save.sound = !save.sound; if (!save.sound) Sfx.rocketStop(); persist(); refreshHome(); Sfx.click(); };
  $('a2hsX').onclick = () => { save.a2hs = true; persist(); refreshHome(); };
  $('ctrl').onclick = () => {
    Sfx.init(); Sfx.click();
    if (save.control === 'tilt') { save.control = 'touch'; persist(); refreshHome(); return; }
    if (!(window.matchMedia && matchMedia('(pointer: coarse)').matches)) { toast('الميلان يشتغل على الموبايل بس 📱'); return; }
    enableTilt().then((ok) => {
      if (!ok) { toast('ما انطت صلاحية الميلان'); return; }
      save.control = 'tilt'; persist(); refreshHome(); toast('ميّل الموبايل حتى تتحرك 📱');
    });
  };
  $('share').onclick = async () => {
    Sfx.click();
    const url = location.href.split('#')[0].split('?')[0];
    const text = `وصلت ${Core.score(world)} بلعبة نطّة 🚀 تكدر تغلبني؟`;
    try { if (navigator.share) { await navigator.share({ title: 'نطّة', text, url }); return; } }
    catch (e) { if (e && e.name === 'AbortError') return; }
    try { await navigator.clipboard.writeText(text + '\n' + url); toast('انسخ الرابط ✅'); } catch (e) { toast('انسخ الرابط من فوك ⬆️'); }
  };
  document.addEventListener('visibilitychange', () => { if (document.hidden) pause(); });
  // أول لمسة بأي مكان تشغّل الصوت والموسيقى (سفاري يحتاج لمسة)
  document.addEventListener('pointerdown', () => Sfx.init());
  window.addEventListener('pagehide', pause);
  window.addEventListener('resize', resize);
  if (window.visualViewport) window.visualViewport.addEventListener('resize', resize);
  window.addEventListener('orientationchange', () => setTimeout(resize, 250));

  // ---------------------------------------------------------------- الأحداث من المحرك
  function handleEvents() {
    const evs = world.events;
    if (!evs.length) return;
    const live = state === 'play';
    for (const e of evs) {
      switch (e.type) {
        case 'jump':
          bendPlatform(e.ref, e.x, e.fv, e.v);
          if (e.v === 'jump') { burst(e.x, e.y, FT ? 6 : 5, FT ? FX.emberDust : FX.dust); if (live) Sfx.jump(save.skin); }
          else { if (FT) explode(e.x, e.y + 4, 0.55); else burst(e.x, e.y, 14, FX.boost); if (live) Sfx.boost(save.skin, e.v); }
          break;
        case 'break':
          if (FT) { explode(e.x, e.y, 0.7); burst(e.x, e.y, 10, FX.magma); if (live) Sfx.boom(0.6); }
          else { burst(e.x, e.y, 12, FX.chunk); if (live) Sfx.brk(); }
          break;
        case 'vanish': burst(e.x, e.y, 12, FT ? FX.ash : FX.puff); if (live) Sfx.vanish(); break;
        case 'coin': burst(e.x, e.y, 7, FX.spark); floatText(e.x, e.y + 10, '+1', '#FFD23F'); if (live) Sfx.coin(); break;
        case 'rocket': if (live) { Sfx.rocket(); if (e.v !== 'turbo') toast('🚀 صاروخ!'); } break;
        case 'rocketEnd': Sfx.rocketStop(); break;
        case 'shield': if (live) { Sfx.shield(); toast('🛡️ درع!'); } break;
        case 'shieldBreak': burst(e.x, e.y, 16, FX.glass); shake = 0.25; if (live) Sfx.shieldBreak(); break;
        case 'stomp':
          if (FT) { explode(e.x, e.y, 1); if (live) Sfx.boom(1); } else { burst(e.x, e.y, 14, FX.stars); shake = Math.max(shake, 0.12); }
          if (e.v) floatText(e.x, e.y + 20, '+' + e.v, '#FFD23F'); if (live) Sfx.stomp(); break;
        case 'hit': deathCause = e.v === 'meteor' ? 'meteor' : 'hit'; if (e.v === 'meteor') explode(e.x, e.y, 1); shake = 0.5; if (live) Music.tapeStop(); if (FT) { explode(e.x, e.y, 1.2); if (live) Sfx.boom(1.2); } if (live) { Sfx.lose(save.skin, 'hit'); vibrate(120); } break;
        case 'fall': deathCause = 'fall'; if (FT) lavaSplash(e.x); if (live) Music.tapeStop(); if (live) { Sfx.lose(save.skin, 'fall'); vibrate(60); } break;
        case 'milestone': if (FT) { strike(); setTimeout(strike, 180); } if (live) { Sfx.milestone(); Music.fill(); toast(`${pick(FT ? ['🌋 بركان!', '🔥 نار!', '💥 انفجار!', '☄️ نيزك!', '⚡ صاعقة!'] : ['🎉 كفو!', '🔥 وحش!', '⭐ استمر!', '💪 بطل!'])} ${e.v}`); } break;
        case 'over': offerRevive(); break;
        case 'summit': if (live) startSummit(); break;
        case 'fever': if (live) { banner('🔥', 'حماس!', 'ما تموت · عملات ×2 · مغناطيس', 'fever'); Sfx.fever(); shake = Math.max(shake, 0.2); burst(e.x, e.y + 20, 24, FX.boost); } break;
        case 'feverEnd': if (live) Sfx.feverEnd(); break;
        case 'combo': floatText(e.x, e.y + 70, `كومبو ${e.v}! +1`, '#C9B6FF'); if (live) Sfx.combo(e.v); break;
        case 'clutch': slowmo('😮 نجاة!'); break;
        case 'nearMiss': slowmo('😮 فلتت!', 0.32); break;
        case 'eventStart': {
          const I = EVENT_INFO[e.v];
          const sub = e.v === 'wind' ? (world.ev && world.ev.dir > 0 ? 'تدفعك يمين ➡️' : 'تدفعك يسار ⬅️') : I.sub;
          if (live) { banner(I.icon, I.title, sub, I.cls); Sfx.event(e.v === 'meteors'); }
          break;
        }
        case 'eventEnd':
          if (live && e.v === 'meteors' && world.player.state === 'alive') { world.runCoins += 5; floatText(world.player.x, world.player.y + 70, 'نجيت! +5', '#FFD23F'); toast('✅ نجيت من النيازك!'); Sfx.mission(); }
          break;
        case 'meteorWarn': if (live) Sfx.warn(); break;
        case 'meteorBlock': if (FT) explode(e.x, e.y, 0.6); else burst(e.x, e.y, 16, FX.stars); if (live) Sfx.boom(0.5); break;
        case 'revive': burst(e.x, e.y, 30, FX.boost); if (live) { Sfx.revive(); toast('💪 كمّل!'); } break;
      }
    }
    evs.length = 0;
    if (live && !record && !world.hero && !world.warp && bestAtStart > 0 && Core.score(world) > bestAtStart) {
      record = true; Sfx.record(); Music.celebrate(); toast('🏆 رقم قياسي جديد!', 1800); confetti();
    }
  }

  // ---------------------------------------------------------------- الكود السري ووضع البطل
  // الكود محفوظ كـ«بصمة» مو كنص، حتى اللي يقرا الكود ما يعرفه مباشرة
  const CODE_HASHES = [3773636336, 2348092680];
  const WARP_HASHES = [1100595954]; // كود الانتقال السريع للقمة والوادي (محفوظ بصمته بس)
  const normCode = (s) => String(s).normalize('NFKC').toLowerCase().replace(/[ً-ْٰـ\s]/g, '').replace(/[أإآ]/g, 'ا').replace(/ة/g, 'ه').replace(/ى/g, 'ي');
  const hashCode = (s) => { let h = 5381; for (const ch of normCode(s)) h = (Math.imul(h, 33) ^ ch.codePointAt(0)) >>> 0; return h; };
  let logoTaps = 0, logoT = 0;
  document.querySelector('.logo').addEventListener('pointerdown', () => {
    if (state !== 'home') return;
    const now = performance.now();
    logoTaps = now - logoT < 700 ? logoTaps + 1 : 1; logoT = now;
    if (logoTaps >= 5) { logoTaps = 0; openCode(); }
  });
  function openCode() {
    Sfx.init(); Sfx.click();
    $('codeOff').hidden = !!(save.hero && save.warp); $('codeOn').hidden = !save.hero; $('codeWarp').hidden = !save.warp;
    $('codeIn').value = ''; show('code');
    if (!(save.hero && save.warp)) setTimeout(() => { try { $('codeIn').focus(); } catch (e) { /* */ } }, 60);
  }
  function tryCode() {
    const el = $('codeIn');
    const h = hashCode(el.value);
    if (CODE_HASHES.includes(h)) {
      save.hero = true; persist(); el.blur(); goHome();
      Sfx.hello(save.skin); toast('🦸 وضع البطل شغّال!', 1800);
    } else if (WARP_HASHES.includes(h)) {
      save.warp = true; persist(); el.blur(); Sfx.reward(); openCode(); toast('🚀 الانتقال السريع انفتح!', 1800);
    } else {
      el.classList.remove('bad'); void el.offsetWidth; el.classList.add('bad');
      Sfx.vanish(); toast('كود غلط ❌');
    }
  }
  $('codeGo').onclick = tryCode;
  $('codeX').onclick = () => { Sfx.click(); $('codeIn').blur(); goHome(); };
  $('codeKill').onclick = () => { save.hero = false; persist(); Sfx.click(); goHome(); toast('وضع البطل انطفى'); };
  $('warpKill').onclick = () => { save.warp = false; persist(); Sfx.click(); openCode(); toast('الانتقال السريع انقفل'); };
  $('warpSummit').onclick = () => warpTo('summit');
  $('warpValley').onclick = () => warpTo('valley');
  /** 🚀 انتقال سريع (بكود سري): كبل للقمة، أو كبل للوادي. ما يكسر أفضل نتيجة ولا يحسب قمة */
  function warpTo(where) {
    if (!save.warp) return;
    Sfx.click(); $('codeIn').blur();
    if (r3State !== 'failed' && !window.__no3d) { startWorld({ at: where, warp: true }); return; }
    want3D(); startRun();
    const w = world; w.warp = true;
    $('tut').hidden = true; save.tut = true;
    if (where === 'summit') {
      Core.genUntil(w, C.SUMMIT_Y + 1200);
      const s = w.platforms.find((p) => p.type === 's');
      w.enemies = []; w.meteors = []; w.ev = null; w.nextEv = Infinity;
      Object.assign(w.player, { x: s.x + s.w / 2, y: s.y + 170, vy: 80, vx: 0, rocket: 0, state: 'alive' });
      w.camY = s.y - w.viewH * 0.45;
      toast('🚀 للقمة!', 1300);
      return;
    }
    state = 'warp'; $('hud').hidden = true; $('turbo').hidden = true; // ننتظر ملف الوادي إذا بعده ينزل
    const t0 = performance.now();
    const go = () => {
      if (state !== 'warp' || world !== w) return;
      if (r3State === 'loading' && performance.now() - t0 < 9000) { setTimeout(go, 120); return; }
      startValley();
    };
    if (r3State === 'loading') toast('⏳ نجهّز الوادي…', 2500);
    go();
  }
  $('hHero').onclick = openCode;
  function useTurbo() {
    if (state !== 'play' || !Core.turbo(world)) return;
    burst(world.player.x, world.player.y, 12, FX.boost);
  }
  $('turbo').addEventListener('pointerdown', (e) => { e.preventDefault(); e.stopPropagation(); Sfx.init(); useTurbo(); });
  /** الشبكة الذهبية اللي تحمي البطل من الطيحة */
  function drawNet(t) {
    const y = viewH - 12;
    ctx.save();
    const g = ctx.createLinearGradient(0, y - 12, 0, y + 12);
    g.addColorStop(0, 'rgba(255,215,64,0)'); g.addColorStop(0.5, 'rgba(255,215,64,.55)'); g.addColorStop(1, 'rgba(255,215,64,0)');
    ctx.fillStyle = g; ctx.fillRect(0, y - 12, C.W, 24);
    ctx.strokeStyle = '#FFD23F'; ctx.lineWidth = 3; ctx.setLineDash([14, 8]); ctx.lineDashOffset = -t * 40;
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(C.W, y); ctx.stroke();
    ctx.restore();
  }

  // ---------------------------------------------------------------- الحلقة
  const pbarI = $('pbar').firstElementChild;
  function updateHud(dt) {
    const sc = Core.score(world);
    if (sc !== lastScore) { $('score').textContent = sc; lastScore = sc; }
    if (world.runCoins !== lastCoins) { $('runCoins').textContent = world.runCoins; lastCoins = world.runCoins; }
    const r = world.player.rocket;
    $('pbar').hidden = !(r > 0);
    if (r > 0) pbarI.style.transform = `scaleX(${r / C.ROCKET_T})`;
    // عدّاد الحماس والكومبو والحدث
    const fb = $('fbar'), on = world.feverT > 0;
    fb.firstElementChild.style.width = Math.round((on ? world.feverT / C.FEVER_T : world.fever) * 100) + '%';
    fb.classList.toggle('on', on); fb.classList.toggle('full', !on && world.fever > 0.85);
    const cb = $('combo'), c = world.combo;
    if (c !== lastCombo) { lastCombo = c; cb.hidden = c < 3; if (c >= 3) { cb.textContent = `⚡ ${c}`; cb.classList.remove('pop'); void cb.offsetWidth; cb.classList.add('pop'); } }
    const ev = world.ev, ec = $('evChip');
    ec.hidden = !ev;
    if (ev) ec.textContent = `${EVENT_INFO[ev.type].icon} ${Math.max(0, Math.ceil(ev.dur - ev.t))}`;
    misTimer -= dt; if (misTimer <= 0) { misTimer = 0.5; checkMissions(false); }
    const left = C.SUMMIT - sc, smc = $('sumChip'); // كم باقي للقمة
    smc.hidden = sc < 4500; if (!smc.hidden) smc.textContent = `🏔️ ${Math.max(0, left)}`;
    if (sc > 5200) want3D(); // نجهّز الوادي ثلاثي الأبعاد من هسه
    if (tutTimer > 0) {
      tutTimer -= dt;
      if (tutTimer < 0.5) $('tut').style.opacity = String(Math.max(0, tutTimer / 0.5));
      if (tutTimer <= 0) $('tut').hidden = true;
    }
  }

  // ================================================================ تشويق: حماس، أحداث، نجاة، مهام، فرصة ثانية
  let slowT = 0, bannerTimer = 0, reviveT = 0, runId = 0, doneThisRun = [], misTimer = 0, lastCombo = 0;
  const REVIVE_COST = 50;
  const EVENT_INFO = {
    coinrain: { icon: '🪙', title: 'مطر عملات!', sub: 'اجمعها قبل ما توكع', cls: 'gold' },
    wind: { icon: '💨', title: 'رياح قوية!', sub: '', cls: '' },
    meteors: { icon: '☄️', title: 'مطر نيازك!', sub: 'ابتعد عن العلامة الحمرة ⚠️', cls: 'danger' },
    lowgrav: { icon: '🪶', title: 'جاذبية خفيفة!', sub: 'قفزاتك صارت أعلى', cls: '' },
  };
  function banner(icon, title, sub, cls = '', ms = 2300) {
    const b = $('banner');
    $('bnIcon').textContent = icon; $('bnTitle').textContent = title; $('bnSub').textContent = sub || '';
    $('bnSub').hidden = !sub;
    b.className = cls; void b.offsetWidth; b.classList.add('show');
    clearTimeout(bannerTimer); bannerTimer = setTimeout(() => b.classList.remove('show'), ms);
  }
  /** حركة بطيئة لحظة (نجاة بأعجوبة) */
  function slowmo(text, dur = 0.45) {
    if (state !== 'play') return;
    slowT = dur;
    const P = world.player;
    floatText(P.x, P.y + 60, text, '#FFFFFF');
    Sfx.slowmo(); Music.slowmo();
  }

  // ---- رسم المؤثرات الجديدة
  function drawFeverFx(t) {
    const ft = world.feverT, k = Math.min(1, ft / 0.6, (C.FEVER_T - ft) / 0.3);
    if (k <= 0) return;
    const hue = (t * 140) % 360;
    const g = ctx.createRadialGradient(C.W / 2, viewH / 2, viewH * 0.28, C.W / 2, viewH / 2, viewH * 0.78);
    g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(1, `hsla(${hue},100%,60%,${0.38 * k})`);
    ctx.fillStyle = g; ctx.fillRect(-4, -4, C.W + 8, viewH + 8);
    ctx.strokeStyle = `rgba(255,255,255,${0.32 * k})`; ctx.lineWidth = 2; ctx.lineCap = 'round';
    for (let i = 0; i < 16; i++) { // خطوط سرعة
      const x = hash(i * 3.3) * C.W, len = 60 + hash(i * 7.1) * 90, sp = 900 + hash(i * 1.7) * 600;
      const y = ((t * sp + hash(i * 5.5) * viewH * 2) % (viewH + len * 2)) - len;
      ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, y + len); ctx.stroke();
    }
    ctx.lineCap = 'butt';
  }
  function drawWind(t, ev) {
    const k = ev.k, dir = ev.dir;
    ctx.save(); ctx.lineCap = 'round'; ctx.lineWidth = 2;
    ctx.strokeStyle = FT ? `rgba(255,190,140,${0.32 * k})` : `rgba(255,255,255,${0.5 * k})`;
    for (let i = 0; i < 18; i++) {
      const y = hash(i * 2.7) * viewH, len = 40 + hash(i * 4.1) * 70, sp = 520 + hash(i * 6.3) * 420, span = C.W + len * 2;
      let x = ((t * sp + hash(i * 9.1) * span) % span) - len;
      if (dir < 0) x = C.W - x;
      ctx.beginPath(); ctx.moveTo(x, y); ctx.quadraticCurveTo(x - dir * len * 0.5, y + Math.sin(t * 3 + i) * 5, x - dir * len, y); ctx.stroke();
    }
    for (let i = 0; i < 10; i++) { // ورق شجر بالعالم العادي، ورماد بعالم النار
      const sp = 260 + hash(i * 3.1) * 200, span = C.W + 40;
      let x = ((t * sp + hash(i * 8.3) * span) % span) - 20; if (dir < 0) x = C.W - x;
      const y = hash(i * 5.9) * viewH + Math.sin(t * 2 + i) * 20;
      ctx.save(); ctx.translate(x, y); ctx.rotate(t * 4 + i); ctx.globalAlpha = 0.85 * k;
      ctx.fillStyle = FT ? '#6E625C' : ['#7ED957', '#FFB347', '#9BE15D'][i % 3];
      ctx.beginPath(); ctx.ellipse(0, 0, 5, 2.4, 0, 0, TAU); ctx.fill(); ctx.restore();
    }
    ctx.restore();
  }
  function drawLowGrav(t, ev) {
    ctx.fillStyle = `rgba(150,110,255,${0.09 * ev.k})`; ctx.fillRect(-4, -4, C.W + 8, viewH + 8);
    ctx.lineWidth = 1.5;
    for (let i = 0; i < 22; i++) {
      const x = hash(i * 3.9) * C.W + Math.sin(t + i) * 10, span = viewH + 20;
      const y = viewH - ((t * (30 + hash(i) * 40) + hash(i * 7.7) * span) % span);
      ctx.strokeStyle = `rgba(255,255,255,${0.55 * ev.k})`;
      ctx.beginPath(); ctx.arc(x, y, 2 + hash(i * 2.2) * 4, 0, TAU); ctx.stroke();
    }
  }
  function drawMeteorsFx(t) {
    for (const m of world.meteors) {
      if (m.warn > 0) { // علامة إنذار بمكان النيزك
        const a = 0.55 + 0.45 * Math.sin(t * 22), x = m.x;
        const g = ctx.createLinearGradient(0, 0, 0, viewH * 0.6);
        g.addColorStop(0, `rgba(255,40,40,${0.3 * a})`); g.addColorStop(1, 'rgba(255,40,40,0)');
        ctx.fillStyle = g; ctx.fillRect(x - 18, 0, 36, viewH * 0.6);
        const ty = 122;
        ctx.fillStyle = `rgba(230,30,30,${0.65 + 0.35 * a})`;
        ctx.beginPath(); ctx.moveTo(x, ty - 18); ctx.lineTo(x + 17, ty + 12); ctx.lineTo(x - 17, ty + 12); ctx.closePath(); ctx.fill();
        ctx.fillStyle = '#fff'; ctx.font = '900 20px -apple-system,system-ui,sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.fillText('!', x, ty + 3);
        continue;
      }
      const y = Y(m.y);
      if (y < -60 || y > viewH + 60) continue;
      const tx = m.x - m.vx * 0.18, ty = Y(m.y - m.vy * 0.18);
      const g = ctx.createLinearGradient(tx, ty, m.x, y);
      g.addColorStop(0, 'rgba(255,120,30,0)'); g.addColorStop(1, 'rgba(255,210,90,.95)');
      ctx.strokeStyle = g; ctx.lineWidth = 15; ctx.lineCap = 'round';
      ctx.beginPath(); ctx.moveTo(tx, ty); ctx.lineTo(m.x, y); ctx.stroke(); ctx.lineCap = 'butt';
      ctx.fillStyle = 'rgba(255,140,40,.35)'; ctx.beginPath(); ctx.arc(m.x, y, 22, 0, TAU); ctx.fill();
      ctx.fillStyle = '#5A4038'; ctx.beginPath(); ctx.arc(m.x, y, 13, 0, TAU); ctx.fill();
      ctx.strokeStyle = '#FF8A3D'; ctx.lineWidth = 2; ctx.stroke();
      ctx.fillStyle = '#3E2B25';
      ctx.beginPath(); ctx.arc(m.x - 4, y - 3, 3.2, 0, TAU); ctx.arc(m.x + 5, y + 4, 2.4, 0, TAU); ctx.fill();
    }
  }
  function drawSlowmo() {
    const k = Math.min(1, slowT / 0.15);
    const g = ctx.createRadialGradient(C.W / 2, viewH / 2, viewH * 0.25, C.W / 2, viewH / 2, viewH * 0.75);
    g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(1, `rgba(20,30,80,${0.5 * k})`);
    ctx.fillStyle = g; ctx.fillRect(-4, -4, C.W + 8, viewH + 8);
  }

  // ---- المهام 📋
  const MISSIONS = {
    coins: { icon: '🪙', t: [25, 50, 90, 140, 200], txt: (n) => `اجمع ${n} عملة بجولة وحدة`, val: (r) => r.coins },
    stomp: { icon: '👾', t: [1, 3, 5, 8, 12], txt: (n) => (n === 1 ? 'دوس على وحش' : `دوس على ${n} وحوش بجولة`), val: (r) => r.stomps },
    score: { icon: '🏔️', t: [800, 1500, 2500, 4000, 6000], txt: (n) => `وصّل نتيجة ${n}`, val: (r) => r.score },
    fever: { icon: '🔥', t: [1, 2, 3, 4, 5], txt: (n) => (n === 1 ? 'شغّل وضع الحماس' : `شغّل الحماس ${n} مرات بجولة`), val: (r) => r.fevers },
    combo: { icon: '⚡', t: [8, 12, 18, 25, 35], txt: (n) => `سوّي كومبو ${n}`, val: (r) => r.combo },
    springs: { icon: '🌀', t: [3, 6, 10, 15, 20], txt: (n) => `انط على ${n} نوابض بجولة`, val: (r) => r.springs },
    clutch: { icon: '😮', t: [1, 2, 4, 6, 8], txt: (n) => (n === 1 ? 'انجى بأعجوبة' : `انجى بأعجوبة ${n} مرات بجولة`), val: (r) => r.clutches },
    meteors: { icon: '☄️', t: [1, 2, 3, 4, 5], txt: (n) => (n === 1 ? 'انجى من مطر النيازك' : `انجى من النيازك ${n} مرات بجولة`), val: (r) => r.meteors },
    games: { icon: '🎮', t: [3, 5, 10, 15, 20], txt: (n) => `العب ${n} جولات`, val: (r, m) => save.games - (m.base || 0), total: true },
  };
  const misTarget = (id, tier) => { const t = MISSIONS[id].t; return tier < t.length ? t[tier] : Math.round(t[t.length - 1] * Math.pow(1.5, tier - t.length + 1)); };
  const misReward = (tier) => 20 + tier * 15;
  function ensureMissions() {
    if (!Array.isArray(save.missions)) save.missions = [];
    if (!save.mtier || typeof save.mtier !== 'object') save.mtier = {};
    save.missions = save.missions.filter((m) => m && MISSIONS[m.id]);
    const ids = Object.keys(MISSIONS);
    while (save.missions.length < 3) {
      const free = ids.filter((id) => !save.missions.some((m) => m.id === id));
      const id = pick(free), m = { id, tier: save.mtier[id] || 0, run: runId };
      if (MISSIONS[id].total) m.base = save.games;
      save.missions.push(m);
    }
  }
  const runStats = () => ({ coins: world.runCoins, stomps: world.stomps, score: Core.score(world), fevers: world.fevers, combo: world.maxCombo, springs: world.springs, clutches: world.clutches, meteors: world.meteorsSurvived });
  /** يفحص المهام: اللي تخلص تنطي عملات وتنبدل بمهمة أصعب */
  function checkMissions(final) {
    if (!world || world.demo || world.hero || world.warp) return;
    const r = runStats();
    for (let i = 0; i < save.missions.length; i++) {
      const m = save.missions[i], d = MISSIONS[m.id], tg = misTarget(m.id, m.tier);
      if (d.total ? !final : m.run === runId && m.fresh) continue; // المهمة الجديدة تبدي من الجولة الجاية
      if ((d.val(r, m) || 0) < tg) continue;
      const rw = misReward(m.tier);
      save.coins += rw; save.mtier[m.id] = m.tier + 1;
      doneThisRun.push({ icon: d.icon, txt: d.txt(tg), rw });
      save.missions.splice(i, 1); i--;
      ensureMissions();
      for (const n of save.missions) if (n.run === runId && !n.checked) { n.fresh = true; n.checked = true; }
      persist();
      if (!final) { toast(`✅ ${d.icon} ${d.txt(tg)}  +🪙${rw}`, 2200); Sfx.mission(); }
    }
  }
  function missionRow(m, r, done) {
    const d = MISSIONS[m.id] || {}, tg = done ? 0 : misTarget(m.id, m.tier);
    const el = document.createElement('div'); el.className = 'mi' + (done ? ' done' : '');
    const ic = document.createElement('div'); ic.className = 'ic'; ic.textContent = done ? '✅' : d.icon;
    const tx = document.createElement('div'); tx.className = 'tx'; tx.textContent = done ? m.txt : d.txt(tg);
    if (!done && r) {
      const v = Math.min(tg, Math.max(0, d.val(r, m) || 0));
      const pb = document.createElement('div'); pb.className = 'pb';
      const i = document.createElement('i'); i.style.width = Math.round((v / tg) * 100) + '%'; pb.appendChild(i); tx.appendChild(pb);
    }
    const rw = document.createElement('div'); rw.className = 'rw'; rw.textContent = `🪙 ${done ? '+' + m.rw : misReward(m.tier)}`;
    el.append(ic, tx, rw);
    return el;
  }
  function openMissions() {
    ensureMissions(); persist();
    state = 'missions'; show('missions'); Sfx.click();
    $('mCoins').textContent = save.coins;
    const L = $('mList'); L.textContent = '';
    for (const m of save.missions) L.appendChild(missionRow(m, MISSIONS[m.id].total ? {} : null, false));
  }

  // ---- الفرصة الثانية
  const canRevive = () => !world.hero && world.revives === 0 && Core.score(world) >= 150 && save.coins + world.runCoins >= REVIVE_COST;
  function offerRevive() {
    if (state !== 'play') return;
    if (!canRevive()) { endRun(); return; }
    state = 'revive'; reviveT = 4;
    $('rvCost').textContent = REVIVE_COST; $('turbo').hidden = true;
    show('revive'); Sfx.click();
  }
  function acceptRevive() {
    if (state !== 'revive') return;
    let cost = REVIVE_COST; // ندفع من عملات الجولة أول، وبعدين من المحفوظة
    const fromRun = Math.min(world.runCoins, cost); world.runCoins -= fromRun; cost -= fromRun; save.coins -= cost; persist();
    Core.revive(world);
    state = 'play'; show(null); lastT = performance.now(); acc = 0;
    $('turbo').hidden = !world.hero; Music.setMode('play');
  }
  function declineRevive() { if (state !== 'revive') return; state = 'play'; endRun(); }
  function updateRevive(dt) {
    reviveT -= dt;
    const k = Math.max(0, reviveT / 4);
    $('rvArc').style.strokeDashoffset = String(276.5 * (1 - k));
    $('rvNum').textContent = Math.max(0, Math.ceil(reviveT));
    if (reviveT <= 0) declineRevive();
  }

  // ---- عد تنازلي بعد الإيقاف
  let countTimer = 0;
  function startCountdown() {
    show(null); $('turbo').hidden = !(world.hero && resumeTo === 'play');
    if (resumeTo === 'valley' || resumeTo === 'world') $('vbar').hidden = false;
    if (resumeTo === 'world') $('jumpBtn').hidden = false;
    state = 'countdown';
    let n = 3; const el = $('count');
    const showN = () => { el.hidden = false; el.textContent = n; el.classList.remove('pop'); void el.offsetWidth; el.classList.add('pop'); Sfx.count(1); };
    showN();
    const tick = () => {
      if (state !== 'countdown') { el.hidden = true; return; }
      n--;
      if (n > 0) { showN(); countTimer = setTimeout(tick, 520); return; }
      el.hidden = true; Sfx.count(0);
      state = resumeTo; lastT = performance.now(); acc = 0; Music.setMode('play');
      if ((state === 'valley' && V && V.dlg) || (state === 'world' && WS && WS.dlg)) $('dlg').hidden = false;
    };
    clearTimeout(countTimer); countTimer = setTimeout(tick, 520);
  }

  // ================================================================ 🏔️ القمة ← 💨 الهوا ← 🪂 المظلة ← 🏞️ الوادي ← 🦌 الغزال ← 🏕️ التاجر
  let SUM = null, V = null, resumeTo = 'play';
  const vparts = [];
  const VW = 2600; // عرض الوادي
  const V_GROUND = 0.66; // وين تكون الأرض عالشاشة (نسبة من الطول)
  const MER_X = 330, ZONE_X = 480, GZ_MIN = 780, GZ_MAX = VW - 140;
  const inValley = () => !!V && (state === 'valley' || state === 'ending' || ((state === 'pause' || state === 'countdown') && resumeTo === 'valley'));

  // ---------------------------------------------------------------- القمة
  function startSummit() {
    want3D();
    state = 'summit';
    SUM = { t: 0, flag: 0, wind: 0, spin: 0, blown: false, bt: 0, msg: 0, dir: Math.random() < 0.5 ? -1 : 1, fade: 0 };
    const sc = Core.score(world);
    const warp = !!world.warp; // بالانتقال السريع: ما ينحسب رقم ولا قمة ولا مكافأة
    if (!world.hero && !warp && sc > save.best) save.best = sc;
    if (!warp) { save.summits = (save.summits || 0) + 1; save.coins += world.runCoins + 200; } else save.coins += world.runCoins;
    world.runCoins = 0;
    if (!warp) for (const sk of SKINS) if (sk.unlockScore && sc >= sk.unlockScore && !save.owned.includes(sk.id)) save.owned.push(sk.id);
    persist();
    $('hud').hidden = true; $('turbo').hidden = true; $('tut').hidden = true; $('skip').hidden = false;
    Sfx.rocketStop(); Sfx.flag(); Music.celebrate();
    banner('🏔️', 'وصلت القمة!', warp ? 'انتقال سريع 🚀' : 'أعلى مكان باللعبة   +200 🪙', 'gold', 3600);
    confetti();
  }
  function skipSummit() { if (state === 'summit' && SUM && !SUM.blown) { SUM.t = Math.max(SUM.t, 24.5); if (SUM.msg < 2) { SUM.msg = 2; Sfx.wind(2); } Sfx.click(); } }
  function updateSummit(dt) {
    const s = SUM, P = world.player;
    s.t += dt;
    s.flag = Math.min(1, s.t / 1.4);
    if (s.t > 4 && s.msg === 0) { s.msg = 1; toast('استمتع بالمنظر… 🌅', 2600); }
    s.wind = clamp((s.t - 17) / 9, 0, 1);
    if (s.t > 17 && s.msg === 1) { s.msg = 2; banner('💨', 'الهوا ديقوى!', 'تمسّك زين…', 'danger', 3200); Sfx.wind(9); }
    if (s.wind > 0 && !s.blown) {
      shake = Math.max(shake, s.wind * 0.05);
      P.squash = Math.max(P.squash, Math.abs(Math.sin(s.t * 13)) * 0.35 * s.wind);
      for (let i = 0; i < 3; i++) if (Math.random() < s.wind) {
        const life = rnd(0.6, 1.1);
        parts.push({ x: s.dir > 0 ? rnd(-40, C.W * 0.6) : rnd(C.W * 0.4, C.W + 40), y: world.camY + rnd(0, viewH), vx: s.dir * rnd(380, 700) * s.wind, vy: rnd(-40, 40), g: 0, life, max: life, r: rnd(1.4, 3), c: '#FFFFFF', kind: 'dot', rot: 0, drag: 0 });
      }
    }
    if (s.t >= 26 && !s.blown) { // 🌪️ الهوا يجرفه
      s.blown = true; s.bt = 0; P.state = 'cinema'; P.vx = s.dir * 380; P.vy = 520;
      $('skip').hidden = true;
      Sfx.gust(); shake = 0.7; banner('🌪️', 'الهوا جرفه!', '', 'danger', 1700);
    }
    if (s.blown) {
      s.bt += dt; s.spin += dt * 9 * s.dir;
      P.vy -= 900 * dt; P.x += P.vx * dt; P.y += P.vy * dt;
      s.fade = clamp((s.bt - 1.1) / 0.5, 0, 1);
      if (s.bt > 1.7) startValley();
    }
  }
  /** الجبل يطلع ورا المنصات بآخر الصعود، وقمته هي صخرة القمة */
  function drawSummitMountain() {
    const topY = world.summitY || C.SUMMIT_Y, py = Y(topY);
    if (py > viewH + 40 || py < -1500) return;
    const cx = C.W / 2, base = viewH + 40, hw = (yy) => 110 + (yy - py) * 0.8;
    ctx.save();
    // سلسلة جبال ورا
    ctx.fillStyle = FT ? 'rgba(70,24,20,.75)' : 'rgba(120,138,190,.6)';
    ctx.beginPath(); ctx.moveTo(-10, base); ctx.lineTo(-10, py + 330); ctx.lineTo(50, py + 250); ctx.lineTo(95, py + 300); ctx.lineTo(130, py + 230);
    ctx.lineTo(C.W - 120, py + 220); ctx.lineTo(C.W - 70, py + 290); ctx.lineTo(C.W - 30, py + 240); ctx.lineTo(C.W + 10, py + 300); ctx.lineTo(C.W + 10, base); ctx.closePath(); ctx.fill();
    // الجبل الكبير
    const g = ctx.createLinearGradient(0, py, 0, base);
    g.addColorStop(0, FT ? '#6B3226' : '#9AA8CF'); g.addColorStop(1, FT ? '#24100C' : '#3A4870');
    ctx.fillStyle = g;
    ctx.beginPath(); ctx.moveTo(cx - hw(base), base);
    for (let i = 8; i >= 1; i--) { const yy = py + ((base - py) * i) / 8; ctx.lineTo(cx - hw(yy) + (i % 2 ? 12 : -8), yy); }
    ctx.lineTo(cx - 100, py + 6); ctx.lineTo(cx, py - 14); ctx.lineTo(cx + 100, py + 6);
    for (let i = 1; i <= 8; i++) { const yy = py + ((base - py) * i) / 8; ctx.lineTo(cx + hw(yy) + (i % 2 ? -12 : 8), yy); }
    ctx.closePath(); ctx.fill();
    // ظل الجهة اليمنى
    ctx.fillStyle = 'rgba(20,24,60,.18)';
    ctx.beginPath(); ctx.moveTo(cx, py - 14); ctx.lineTo(cx + 100, py + 6);
    for (let i = 1; i <= 8; i++) { const yy = py + ((base - py) * i) / 8; ctx.lineTo(cx + hw(yy) + (i % 2 ? -12 : 8), yy); }
    ctx.lineTo(cx + 30, base); ctx.closePath(); ctx.fill();
    // ثلج القمة
    const sh = 150, yb = py + sh;
    ctx.fillStyle = FT ? 'rgba(255,214,190,.95)' : '#F4F8FF';
    ctx.beginPath(); ctx.moveTo(cx - 100, py + 6); ctx.lineTo(cx, py - 14); ctx.lineTo(cx + 100, py + 6); ctx.lineTo(cx + hw(yb) * 0.9, yb);
    for (let k = 1; k < 8; k++) { const xx = cx + hw(yb) * 0.9 - (hw(yb) * 1.8 * k) / 8; ctx.lineTo(xx, yb + (k % 2 ? -26 : 4)); }
    ctx.lineTo(cx - hw(yb) * 0.9, yb); ctx.closePath(); ctx.fill();
    ctx.restore();
  }
  /** صخرة القمة: ثلج، كومة حجار، والعلم يطلع لما توصل */
  function drawSummitRock(p, t) {
    const y = Y(p.y);
    if (y < -120 || y > viewH + 80) return;
    const x = p.x, w = p.w;
    ctx.fillStyle = FT ? '#4A2A24' : '#6E7A96'; rr(ctx, x, y, w, 34, 14); ctx.fill();
    ctx.fillStyle = FT ? '#3A1E1A' : '#58637E'; rr(ctx, x + 6, y + 18, w - 12, 16, 8); ctx.fill();
    ctx.fillStyle = '#FFFFFF'; rr(ctx, x - 3, y - 5, w + 6, 13, 7); ctx.fill();
    for (let i = 0; i < 9; i++) { // أصابع جليد
      const ix = x + 12 + i * ((w - 24) / 8), ih = 5 + hash(i * 3.3) * 8;
      ctx.beginPath(); ctx.moveTo(ix - 4, y + 7); ctx.lineTo(ix, y + 7 + ih); ctx.lineTo(ix + 4, y + 7); ctx.fill();
    }
    ctx.fillStyle = '#8A93A8'; // كومة حجار
    for (const [dx, dy, r] of [[28, -4, 7], [40, -4, 6], [34, -13, 5.5]]) { ctx.beginPath(); ctx.arc(x + dx, y + dy, r, 0, TAU); ctx.fill(); }
    if (!SUM) return;
    const k = SUM.flag, fx = x + w * 0.74, top = y - 74 * k; // العلم
    ctx.strokeStyle = '#5C3A1A'; ctx.lineWidth = 3; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(fx, y); ctx.lineTo(fx, top); ctx.stroke(); ctx.lineCap = 'butt';
    if (k < 0.6) return;
    const amp = 3 + SUM.wind * 7, sp = 6 + SUM.wind * 14, dir = SUM.blown ? SUM.dir : SUM.wind > 0 ? SUM.dir : 1;
    ctx.beginPath(); ctx.moveTo(fx, top);
    for (let i = 0; i <= 8; i++) ctx.lineTo(fx + dir * i * 5, top + Math.sin(t * sp - i * 0.7) * amp * (i / 8));
    for (let i = 8; i >= 0; i--) ctx.lineTo(fx + dir * i * 5, top + 26 + Math.sin(t * sp - i * 0.7) * amp * (i / 8));
    ctx.closePath(); ctx.fillStyle = '#FFB703'; ctx.fill();
    star(ctx, fx + dir * 20, top + 13 + Math.sin(t * sp - 2.8) * amp * 0.5, 6, 2.6, '#E63946');
  }
  /** بحر غيوم تحت القمة (يطلع بس لما توصل) */
  function drawCloudSea(t) {
    if (!SUM || !world.summitY) return;
    const k = Math.min(1, SUM.t / 2), y0 = Y(world.summitY - 210);
    if (y0 > viewH + 40) return;
    const col = FT ? 'rgb(255,196,160)' : 'rgb(255,236,236)';
    ctx.globalAlpha = 0.93 * k; ctx.fillStyle = col; ctx.fillRect(-4, y0 + 34, C.W + 8, viewH - y0 + 40); ctx.globalAlpha = 1;
    for (let i = 0; i < 10; i++) {
      const x = ((((i * 52 + t * (6 + i % 3 * 3) * (i % 2 ? 1 : -1)) % (C.W + 140)) + C.W + 140) % (C.W + 140)) - 70;
      drawCloud(x, y0 + 24 + (i % 3) * 16, 1.1 + hash(i) * 0.6, 0.95 * k, col);
    }
  }

  // ---------------------------------------------------------------- الوادي
  function startValley() {
    state = 'valley';
    $('skip').hidden = true; $('vbar').hidden = false; $('hud').hidden = true; $('banner').classList.remove('show');
    const dir = SUM ? SUM.dir : 1;
    V = {
      t: 0, phase: 'fall', fade: 1, coinsGot: 0, caught: false, delivered: false, metMerchant: false, dlg: null, endT: 0, chuteDrop: null,
      p: { x: 1500, y: 1500, vx: dir * 120, vy: -150, face: dir, chute: 0, hopPh: 0, holdT: 0, rot: 0, landT: 0 },
      cam: { x: 1500, y: 1500 - viewH * 0.55 },
      gz: { x: 2150, y: 0, vx: 0, face: -1, state: 'graze', t: 0, gt: 2.5, sus: 0, stamina: 4, ph: 0, dir: 1, triedLeap: false },
      coins: [],
    };
    for (let i = 0; i < 20; i++) V.coins.push({ x: 1500 + dir * 40 + Math.sin(i * 0.7) * 170, y: 1330 - i * 58, taken: false });
    vparts.length = 0; parts.length = 0; SUM = null;
    V.r3d = false; // الوادي الـ 3D صار جزء من العالم المفتوح؛ وضع القفز يبقى 2D
    $('vobj').textContent = '🪂 انزل بالمظلة';
    Music.setMode('play');
  }
  function leaveValley() {
    if (!V) return;
    if (!V.delivered && V.coinsGot) { save.coins += V.coinsGot; persist(); }
    if (V.mapOpen) closeMap();
    V = null; vparts.length = 0; J.id = null; CAMD.id = null; uparts.length = 0;
    $('vbar').hidden = true; $('dlg').hidden = true; $('g3d').hidden = true; $('vign').hidden = true; $('app').classList.remove('v3d');
  }
  function vburst(x, y, n, o) {
    for (let i = 0; i < n; i++) {
      const life = o.life * rnd(0.6, 1.2);
      vparts.push({ x: x + rnd(-(o.spread || 0), o.spread || 0), y, vx: rnd(-1, 1) * o.sp, vy: rnd(o.vy0, o.vy1), g: o.g, life, max: life, r: o.r * rnd(0.7, 1.3), c: pick(o.colors), kind: o.kind || 'dot', rot: rnd(0, 6) });
    }
  }
  /** كلام التاجر يطلع حرف حرف ويه صوت */
  function updateDialog(dt, v = V) {
    if (!v || !v.dlg) return;
    const d = v.dlg, chars = [...d.text];
    d.shown = Math.min(chars.length, d.shown + dt * 38);
    const n = Math.floor(d.shown);
    $('dlgText').textContent = chars.slice(0, n).join('');
    if (n - d.blip >= 4 && n < chars.length) { d.blip = n; Sfx.talk(); }
    d.t -= dt;
    if (d.t <= 0) { v.dlg = null; $('dlg').classList.remove('show'); setTimeout(() => { const h = WS || V; if (!h || !h.dlg) $('dlg').hidden = true; }, 300); }
  }
  function say(text, sec = 5, who) {
    const h = WS || V; if (!h) return;
    h.dlg = { text, t: sec, shown: 0, blip: 0, who: who === MERCHANT ? 'merchant' : who ? 'npc' : 'merchant' };
    if (who) { if (who === MERCHANT && WS && WS.portrait) $('dlgWho').innerHTML = WS.portrait; else $('dlgWho').textContent = who[0]; $('dlgName').textContent = who[1]; }
    $('dlg').hidden = false; $('dlgText').textContent = '';
    $('dlg').classList.remove('show'); void $('dlg').offsetWidth; $('dlg').classList.add('show');
  }
  function updateValley(dt) {
    const v = V, p = v.p;
    v.t += dt;
    v.fade = Math.max(0, v.fade - dt * 1.4);
    const dir = state === 'valley' ? inputDir() : 0;
    if (v.phase === 'fall' || v.phase === 'glide') {
      if (v.phase === 'fall') {
        p.rot += dt * 8 * p.face; p.vy = Math.max(p.vy - 900 * dt, -420);
        if (v.t > 1.1) { // 🪂 تنفتح المظلة
          v.phase = 'glide'; Sfx.chute();
          banner('🪂', 'انفتحت المظلة!', 'وجّه نفسك يمين ويسار واجمع العملات', '', 2600);
          vburst(p.x, p.y + 110, 12, { sp: 90, vy0: -30, vy1: 60, g: 0, life: 0.7, r: 4, colors: ['#FFFFFF', '#FFE066'], kind: 'star' });
        }
      } else {
        p.chute = Math.min(1, p.chute + dt * 3);
        p.rot *= Math.pow(0.015, dt);
        p.vy += (-95 - p.vy) * Math.min(1, dt * 3);
      }
      const tvx = dir * (v.phase === 'glide' ? 170 : 60);
      p.vx += (tvx - p.vx) * Math.min(1, dt * 3);
      p.x = clamp(p.x + p.vx * dt, 80, VW - 80); p.y += p.vy * dt;
      if (Math.abs(dir) > 0.1) p.face = dir > 0 ? 1 : -1;
      for (const c of v.coins) {
        if (!c.taken && Math.abs(c.x - p.x) < 30 && Math.abs(c.y - (p.y + 21)) < 32) {
          c.taken = true; v.coinsGot++; Sfx.coin();
          vburst(c.x, c.y, 6, { sp: 90, vy0: -20, vy1: 120, g: 150, life: 0.45, r: 2.6, colors: ['#FFD23F', '#FFF6C4'], kind: 'star' });
        }
      }
      if (p.y <= 0) { // 🏞️ الهبوط
        p.y = 0; p.vy = 0; p.rot = 0; v.phase = 'walk'; p.landT = 0.35;
        v.chuteDrop = { x: p.x, t: 0, face: p.face }; p.chute = 0;
        Sfx.thud(); shake = 0.15;
        vburst(p.x, 0, 14, { sp: 110, vy0: 20, vy1: 110, g: 300, life: 0.6, r: 4, colors: ['#FFFFFF', '#DFF5C8'], spread: 10 });
        banner('🏞️', 'وادي الغزلان', 'دوّر على الغزال 🦌 وحاول تلزمه', 'gold', 3000);
        $('vobj').textContent = '🦌 الزم الغزال';
        setTimeout(() => { if (V && !V.caught && state === 'valley') toast('🤫 اقترب بضغطات قصيرة وهو ياكل، وأوكف لما يرفع راسه 👀', 4200); }, 3300);
      }
    } else {
      p.holdT = dir ? p.holdT + dt : 0;
      const analog = save.control === 'tilt' && !ptr.size && !keyL && !keyR;
      const sp = analog ? Math.abs(dir) * 250 : p.holdT < 0.45 ? 105 : 250; // ضغطات قصيرة = مشي هادئ، ضغطة طويلة = ركض
      const tv = dir ? Math.sign(dir) * sp : 0;
      p.vx += (tv - p.vx) * Math.min(1, dt * 10);
      p.x = clamp(p.x + p.vx * dt, 70, VW - 70);
      if (Math.abs(p.vx) > 10) p.face = p.vx > 0 ? 1 : -1;
      const prev = p.hopPh;
      p.hopPh = Math.abs(p.vx) < 10 ? 0 : p.hopPh + Math.abs(p.vx) * dt * 0.05;
      if (p.hopPh && Math.floor(prev / Math.PI) !== Math.floor(p.hopPh / Math.PI)) Sfx.step(Math.abs(p.vx) > 160 ? 1 : 0);
      p.landT = Math.max(0, p.landT - dt);
      updateGazelle(dt);
      if (v.caught && !v.delivered && Math.abs(p.x - ZONE_X) < 60) deliver();
    }
    if (v.chuteDrop) v.chuteDrop.t += dt;
    if (v.focus) v.focus.t -= dt;
    if (v.delivered) { v.endT += dt; if (v.endT > 4.3 && state === 'valley') showEnding(); if (Math.random() < dt * 6) vburst(MER_X - 120 + rnd(-20, 20), 50, 1, { sp: 20, vy0: 30, vy1: 60, g: -20, life: 1.2, r: 5, colors: ['#FF5D8F'], kind: 'heart' }); }
    // الكاميرا
    const camTx = p.x < 760 ? lerp(345, p.x, clamp((p.x - 480) / 280, 0, 1)) : p.x; // قرب الخيمة نبيّن الخيمة والحظيرة ومكان التسليم سوا
    v.cam.x += (clamp(camTx, C.W / 2, VW - C.W / 2) - v.cam.x) * Math.min(1, dt * 4);
    const ty = Math.max(-viewH * (1 - V_GROUND), p.y - viewH * 0.5);
    v.cam.y = v.phase === 'fall' ? ty : v.cam.y + (ty - v.cam.y) * Math.min(1, dt * 4);
    updateDialog(dt);
    for (let i = vparts.length - 1; i >= 0; i--) {
      const q = vparts[i];
      q.life -= dt;
      if (q.life <= 0) { vparts[i] = vparts[vparts.length - 1]; vparts.pop(); continue; }
      q.vy -= q.g * dt; q.x += q.vx * dt; q.y += q.vy * dt; q.rot += dt * 5;
    }
    shake = Math.max(0, shake - dt);
  }
  function startFlee() {
    const g = V.gz;
    g.state = 'flee'; g.t = 0; g.dir = g.x >= V.p.x ? 1 : -1;
    if ((g.dir > 0 && g.x >= GZ_MAX - 20) || (g.dir < 0 && g.x <= GZ_MIN + 20)) g.dir = -g.dir;
    Sfx.snort();
  }
  /**
   * ذكاء الغزال: يرعى (راسه نازل) ويرفع راسه يتلفّت كل شوية.
   * «الشك» يزيد إذا تتحرك وهو يباوع، أو تركض حتى لو ياكل، ويكثر كل ما تقرب.
   * نص الشك = ينتبه ❗، الشك الكامل = يهرب. يهرب ← يتعب ← تكدر تلزمه، أو يتحاصر بطرف الوادي ويحاول يقفز فوكك.
   */
  function updateGazelle(dt) {
    const g = V.gz, p = V.p;
    g.t += dt;
    const moving = Math.abs(g.vx) > 5;
    g.ph += dt * (g.state === 'flee' ? 15 : moving ? 8 : 0);
    const d = Math.abs(p.x - g.x), away = g.x >= p.x ? 1 : -1, sp = Math.abs(p.vx);
    if (g.state !== 'flee' && g.state !== 'leap') g.stamina = Math.min(4, g.stamina + dt * (g.state === 'tired' ? 0.5 : 0.8));
    const calm = g.state === 'graze' || g.state === 'look' || g.state === 'walk' || g.state === 'alert';
    if (calm) {
      const near = d < 340 ? 1 + (1 - d / 340) * 1.6 : 0;
      const watching = g.state !== 'graze';
      const rate = sp > 160 ? (watching ? 2.6 : 1.4) : sp > 20 ? (watching ? 1.1 : 0.06) : 0; // واكف = الشك ينزل
      const up = rate * near;
      g.sus = clamp((g.sus || 0) + (up > 0 ? up : -0.3) * dt, 0, 1);
    }
    switch (g.state) {
      case 'graze':
        g.vx = 0;
        if (g.sus > 0.5) { g.state = 'alert'; g.t = 0; Sfx.snort(); }
        else if (g.t > (g.gt || 2)) { // يرفع راسه يتلفّت
          g.state = Math.random() < 0.8 ? 'look' : 'walk'; g.t = 0;
          if (g.state === 'walk') { g.vx = (g.x > (GZ_MIN + GZ_MAX) / 2 ? -1 : 1) * 38; g.face = Math.sign(g.vx); }
        }
        break;
      case 'look':
        g.vx = 0; if (d < 380) g.face = -away;
        if (g.sus > 0.5) { g.state = 'alert'; g.t = 0; Sfx.snort(); }
        else if (g.t > 1.1) { g.state = 'graze'; g.t = 0; g.gt = 1.4 + Math.random() * 1.8; }
        break;
      case 'walk':
        g.x = clamp(g.x + g.vx * dt, GZ_MIN, GZ_MAX);
        if (g.sus > 0.5) { g.state = 'alert'; g.t = 0; g.vx = 0; Sfx.snort(); }
        else if (g.t > 1.4) { g.state = 'graze'; g.t = 0; g.vx = 0; g.gt = 1.4 + Math.random() * 1.8; }
        break;
      case 'alert':
        g.vx = 0; g.face = -away;
        if (g.sus >= 1 || d < 60) startFlee();
        else if (g.sus < 0.3) { g.state = 'graze'; g.t = 0; g.gt = 1.2 + Math.random() * 1.2; }
        break;
      case 'flee': {
        g.stamina -= dt;
        g.vx = g.dir * 330 * (0.55 + (0.45 * Math.max(0, g.stamina)) / 4); g.face = g.dir;
        g.x += g.vx * dt;
        if (g.x <= GZ_MIN || g.x >= GZ_MAX) { g.x = clamp(g.x, GZ_MIN, GZ_MAX); g.state = 'cornered'; g.t = 0; g.vx = 0; g.face = -g.dir; }
        else if (g.stamina <= 0) { g.state = 'tired'; g.t = 0; toast('الغزال تعب! 😮‍💨 هسه فرصتك', 2400); }
        else if (d > 600 && g.t > 1.5) { g.state = 'graze'; g.t = 0; g.vx = 0; g.sus = 0.35; g.gt = 1.5; }
        break;
      }
      case 'tired':
        g.vx = d < 220 ? away * 105 : 0;
        g.x = clamp(g.x + g.vx * dt, GZ_MIN, GZ_MAX);
        if (g.vx) g.face = away;
        if (g.stamina > 3.2 && g.t > 2.2) { g.sus = 0.45; g.state = d < 160 ? (startFlee(), 'flee') : 'graze'; g.t = 0; }
        break;
      case 'cornered':
        g.vx = 0; g.face = -away;
        if (!g.triedLeap && d < 110 && g.t > 0.4) { // يحاول يقفز فوكك مرة وحدة
          g.triedLeap = true; g.state = 'leap'; g.t = 0; g.from = g.x; g.to = clamp(p.x - away * 180, GZ_MIN, GZ_MAX); Sfx.snort();
        } else if (g.t > 4 && d > 240) { g.state = 'graze'; g.t = 0; g.sus = 0.4; }
        break;
      case 'leap': {
        const k = Math.min(1, g.t / 0.7);
        g.x = lerp(g.from, g.to, k); g.y = Math.sin(k * Math.PI) * 120; g.face = Math.sign(g.to - g.from) || 1; g.vx = (g.to - g.from) / 0.7;
        if (k >= 1) { g.y = 0; startFlee(); }
        break;
      }
      case 'follow': {
        const tx = p.x - p.face * 58;
        g.vx += ((tx - g.x) * 4 - g.vx) * Math.min(1, dt * 5); g.x += g.vx * dt;
        if (Math.abs(g.vx) > 8) g.face = Math.sign(g.vx);
        break;
      }
      case 'pen':
        g.vx = (MER_X - 120 - g.x) * 1.5; g.x += g.vx * dt * 0.6;
        if (Math.abs(g.vx) > 8) g.face = Math.sign(g.vx);
        break;
    }
    if (!V.caught && ['graze', 'look', 'walk', 'alert', 'tired', 'cornered'].includes(g.state) && d < 40 && g.y < 10) catchGazelle();
    V.walkT = (V.walkT || 0) + dt;
    if (!V.metMerchant && (g.state === 'flee' || g.state === 'alert' || V.walkT > 7)) {
      V.metMerchant = true;
      say('يا بطل! تعال 👋 آني أبو جاسم التاجر. إذا تلزم هالغزال 🦌 جيبه لخيمتي يم النهر ⬅️ وأنطيك جائزة كبيرة 🎁', 7);
    }
  }
  function catchGazelle() {
    const g = V.gz;
    V.caught = true; g.state = 'follow'; g.y = 0; g.vx = 0;
    Sfx.catchIt(); shake = 0.12; V.focus = { t: 2.2, xs: [V.p.x, g.x] };
    vburst(g.x, 40, 14, { sp: 120, vy0: 20, vy1: 160, g: 120, life: 0.9, r: 5, colors: ['#FF5D8F', '#FFD23F', '#FFFFFF'], kind: 'heart' });
    banner('🦌', 'لزمته!', 'ودّيه لخيمة التاجر 🏕️ ⬅️', 'gold', 2800);
    $('vobj').textContent = '🏕️ ودّيه للتاجر';
    if (V.metMerchant) say('عفية عليك! 👏 هسه جيبه لهنا، للدائرة اللي يم خيمتي ⬅️', 5);
    else { V.metMerchant = true; say('هلا يا بطل! 👋 آني أبو جاسم التاجر. جيبلي الغزال لخيمتي يم النهر ⬅️ وأنطيك جائزة 🎁', 6); }
  }
  function deliver() {
    V.delivered = true; V.endT = 0; V.gz.state = 'pen'; V.focus = { t: 4.4, xs: [ZONE_X - 50, V.p.x] }; // لقطة قريبة: البطل وأبو جاسم
    save.coins += 500 + V.coinsGot; V.paid = true;
    if (!save.owned.includes('explorer')) save.owned.push('explorer');
    save.adventures = (save.adventures || 0) + 1;
    persist();
    Sfx.reward(); Music.celebrate();
    say('تسلم إيدك يا بطل! 🙌 هاي جائزتك: 500 عملة 💰 وقبعة المغامر 🤠', 5);
    banner('🎁', 'الجائزة!', '+500 🪙  وشخصية «المغامر» 🤠', 'gold', 3600);
    for (let i = 0; i < 40; i++) vburst(MER_X + 20, 80, 1, { sp: 160, vy0: 120, vy1: 380, g: 600, life: 1.4, r: 5, colors: ['#FFD23F', '#FFB703'], kind: 'coin' });
    $('vobj').textContent = '🎉 خلصت المغامرة';
  }
  function showEnding() {
    state = 'ending';
    $('vbar').hidden = true; $('dlg').hidden = true; $('jumpBtn').hidden = true; $('actBtn').hidden = true;
    $('eCoins').textContent = '+' + (WS ? WS.endCoins || 500 : 500 + V.coinsGot);
    $('eCont').hidden = !WS;
    $('eWear').hidden = save.skin === 'explorer';
    show('ending'); Sfx.record();
  }

  // ---- رسم الوادي
  const vX = (x) => x - V.cam.x + C.W / 2;
  const vY = (y) => V.cam.y + viewH - y;
  const layerY = (f, lift) => viewH * V_GROUND + (vY(0) - viewH * V_GROUND) * f - lift;
  const layerX = (wx, f) => (wx - V.cam.x) * f + C.W / 2;
  function vRidge(f, lift, col, amp, freq, extra) {
    const base = layerY(f, lift);
    if (base - amp * 3 > viewH + 20) return;
    ctx.fillStyle = col; ctx.beginPath(); ctx.moveTo(-10, viewH + 20);
    for (let sx = -10; sx <= C.W + 10; sx += 10) {
      const u = (sx - C.W / 2) / f + V.cam.x;
      let h = amp * (0.6 + 0.4 * Math.sin(u * freq) + 0.25 * Math.sin(u * freq * 2.7 + 1));
      if (extra) h += extra(u);
      ctx.lineTo(sx, base - h);
    }
    ctx.lineTo(C.W + 10, viewH + 20); ctx.closePath(); ctx.fill();
  }
  function drawPalm(x, base, s, t, seed) {
    ctx.save(); ctx.translate(x, base); ctx.scale(s, s);
    const sway = Math.sin(t * 0.9 + seed) * 0.05;
    ctx.strokeStyle = '#8B6B43'; ctx.lineWidth = 7; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(0, 0); ctx.quadraticCurveTo(8, -45, 4 + sway * 40, -90); ctx.stroke();
    ctx.strokeStyle = 'rgba(70,45,20,.35)'; ctx.lineWidth = 7;
    for (let i = 1; i < 8; i++) { const yy = -i * 11; ctx.beginPath(); ctx.moveTo(-3 + i * 0.6, yy); ctx.lineTo(4 + i * 0.6, yy - 2); ctx.stroke(); }
    ctx.translate(4 + sway * 40, -90);
    for (let i = 0; i < 7; i++) { // سعف
      const a = -Math.PI / 2 + (i - 3) * 0.48 + sway;
      ctx.save(); ctx.rotate(a);
      ctx.fillStyle = i % 2 ? '#3FA34D' : '#56BC5E';
      ctx.beginPath(); ctx.moveTo(0, 0); ctx.quadraticCurveTo(22, -10, 46, 6); ctx.quadraticCurveTo(22, 2, 0, 4); ctx.fill();
      ctx.restore();
    }
    ctx.fillStyle = '#C9772B'; ctx.beginPath(); ctx.arc(-4, 6, 4, 0, TAU); ctx.arc(4, 7, 4, 0, TAU); ctx.arc(0, 11, 4, 0, TAU); ctx.fill(); // تمر
    ctx.restore();
  }
  function drawRoundTree(x, base, s, col, t, seed) {
    ctx.save(); ctx.translate(x, base); ctx.scale(s, s);
    ctx.fillStyle = '#7A5230'; rr(ctx, -5, -40, 10, 40, 4); ctx.fill();
    const sw = Math.sin(t * 1.1 + seed) * 2;
    ctx.fillStyle = col;
    ctx.beginPath(); ctx.arc(sw, -58, 26, 0, TAU); ctx.arc(-18 + sw, -44, 18, 0, TAU); ctx.arc(18 + sw, -44, 18, 0, TAU); ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,.18)'; ctx.beginPath(); ctx.arc(-8 + sw, -66, 10, 0, TAU); ctx.fill();
    if (hash(seed) > 0.5) { ctx.fillStyle = '#FF5D5D'; for (const [a, b] of [[-10, -50], [8, -62], [14, -44]]) { ctx.beginPath(); ctx.arc(a + sw, b, 3, 0, TAU); ctx.fill(); } }
    ctx.restore();
  }
  function drawTentCamp(t) {
    const x = vX(MER_X), base = vY(0);
    if (x < -260 || x > C.W + 260) return;
    // الحظيرة
    const px = vX(MER_X - 120);
    ctx.strokeStyle = '#8B5A2B'; ctx.lineWidth = 4; ctx.lineCap = 'round';
    for (let i = 0; i < 5; i++) { ctx.beginPath(); ctx.moveTo(px - 50 + i * 25, base); ctx.lineTo(px - 50 + i * 25, base - 30); ctx.stroke(); }
    ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(px - 56, base - 22); ctx.lineTo(px + 56, base - 22); ctx.moveTo(px - 56, base - 10); ctx.lineTo(px + 56, base - 10); ctx.stroke();
    ctx.lineCap = 'butt';
    // الخيمة
    ctx.fillStyle = '#E9D8B4'; ctx.beginPath(); ctx.moveTo(x - 60, base); ctx.lineTo(x - 50, base - 70); ctx.lineTo(x + 70, base - 70); ctx.lineTo(x + 80, base); ctx.closePath(); ctx.fill();
    ctx.fillStyle = '#6B3A1E'; ctx.beginPath(); ctx.moveTo(x - 10, base); ctx.lineTo(x + 5, base - 55); ctx.lineTo(x + 30, base - 55); ctx.lineTo(x + 40, base); ctx.closePath(); ctx.fill();
    for (let i = 0; i < 8; i++) { // مظلة مخططة
      ctx.fillStyle = i % 2 ? '#FFFFFF' : '#E63946';
      const a = x - 66 + i * 19;
      ctx.beginPath(); ctx.moveTo(a, base - 70); ctx.lineTo(a + 19, base - 70); ctx.lineTo(a + 19, base - 86); ctx.lineTo(a, base - 86); ctx.fill();
      ctx.beginPath(); ctx.arc(a + 9.5, base - 70, 9.5, 0, Math.PI); ctx.fill();
    }
    ctx.strokeStyle = '#5C3A1A'; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(x - 64, base); ctx.lineTo(x - 64, base - 86); ctx.moveTo(x + 86, base); ctx.lineTo(x + 86, base - 86); ctx.stroke();
    // فانوس
    const lw = Math.sin(t * 1.6) * 0.15;
    ctx.save(); ctx.translate(x + 74, base - 86); ctx.rotate(lw);
    ctx.strokeStyle = '#3B2A1A'; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, 12); ctx.stroke();
    ctx.fillStyle = 'rgba(255,200,80,.35)'; ctx.beginPath(); ctx.arc(0, 20, 14, 0, TAU); ctx.fill();
    ctx.fillStyle = '#FFC93C'; rr(ctx, -5, 12, 10, 14, 3); ctx.fill();
    ctx.restore();
    // طاولة وبضاعة
    ctx.fillStyle = '#8B5A2B'; ctx.fillRect(x + 44, base - 28, 46, 6); ctx.fillRect(x + 48, base - 22, 4, 22); ctx.fillRect(x + 82, base - 22, 4, 22);
    ctx.fillStyle = '#C0612B'; ctx.beginPath(); ctx.ellipse(x + 56, base - 36, 7, 8, 0, 0, TAU); ctx.fill(); // جرة
    ctx.fillStyle = '#2E86AB'; ctx.beginPath(); ctx.ellipse(x + 72, base - 34, 6, 6, 0, 0, TAU); ctx.fill();
    ctx.fillStyle = '#9B2335'; rr(ctx, x + 78, base - 38, 12, 10, 3); ctx.fill(); // سجادة ملفوفة
    // اللوحة
    ctx.fillStyle = '#8B5A2B'; rr(ctx, x - 52, base - 112, 120, 22, 6); ctx.fill();
    ctx.fillStyle = '#FFF3D6'; ctx.font = '900 13px -apple-system,system-ui,sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    try { ctx.direction = 'rtl'; } catch (e) { /* */ }
    ctx.fillText('خيمة أبو جاسم', x + 8, base - 101);
    try { ctx.direction = 'ltr'; } catch (e) { /* */ }
    drawMerchant(x - 30, base, t, V.dlg || Math.abs(V.p.x - MER_X) < 420);
  }
  function drawMerchant(x, base, t, wave) {
    ctx.save(); ctx.translate(x, base);
    ctx.fillStyle = '#F1E7D2'; rr(ctx, -15, -50, 30, 50, 12); ctx.fill(); // دشداشة
    ctx.fillStyle = '#7A4E2D'; // بشت
    ctx.beginPath(); ctx.moveTo(-17, -46); ctx.lineTo(-20, 0); ctx.lineTo(-7, 0); ctx.lineTo(-6, -44); ctx.fill();
    ctx.beginPath(); ctx.moveTo(17, -46); ctx.lineTo(20, 0); ctx.lineTo(7, 0); ctx.lineTo(6, -44); ctx.fill();
    // الإيد (تأشر)
    const a = wave ? -1.9 + Math.sin(t * 8) * 0.35 : -0.25;
    ctx.save(); ctx.translate(14, -40); ctx.rotate(a);
    ctx.strokeStyle = '#7A4E2D'; ctx.lineWidth = 7; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, 18); ctx.stroke();
    ctx.fillStyle = '#D9A273'; ctx.beginPath(); ctx.arc(0, 21, 4.5, 0, TAU); ctx.fill();
    ctx.restore();
    ctx.fillStyle = '#D9A273'; ctx.beginPath(); ctx.arc(0, -62, 13, 0, TAU); ctx.fill(); // الوجه
    ctx.fillStyle = '#FFFFFF'; // اليشماغ
    ctx.beginPath(); ctx.moveTo(-16, -60); ctx.quadraticCurveTo(-16, -80, 0, -80); ctx.quadraticCurveTo(16, -80, 16, -60); ctx.lineTo(20, -40); ctx.lineTo(13, -44); ctx.lineTo(12, -64); ctx.lineTo(-12, -64); ctx.lineTo(-13, -44); ctx.lineTo(-20, -40); ctx.closePath(); ctx.fill();
    ctx.fillStyle = '#D62828';
    for (let i = -3; i <= 3; i++) for (let j = 0; j < 2; j++) { ctx.fillRect(i * 4 - 1, -78 + j * 6 + (i % 2 ? 3 : 0), 2.4, 2.4); }
    ctx.strokeStyle = '#1B1B1B'; ctx.lineWidth = 3; ctx.beginPath(); ctx.ellipse(0, -73, 13, 3.4, 0, 0, TAU); ctx.stroke(); // العقال
    ctx.fillStyle = '#1B1F3B'; ctx.beginPath(); ctx.arc(-4.5, -63, 1.8, 0, TAU); ctx.arc(4.5, -63, 1.8, 0, TAU); ctx.fill();
    ctx.fillStyle = '#3B2A1A'; ctx.beginPath(); ctx.ellipse(-4, -56.5, 5, 2, 0.2, 0, TAU); ctx.ellipse(4, -56.5, 5, 2, -0.2, 0, TAU); ctx.fill(); // شوارب
    ctx.strokeStyle = '#8B3A2A'; ctx.lineWidth = 1.6; ctx.beginPath(); ctx.arc(0, -55, 4, 0.3, Math.PI - 0.3); ctx.stroke();
    ctx.restore();
  }
  function drawGazelle(x, base, g, t) {
    ctx.save(); ctx.translate(x, base); ctx.scale(g.face || 1, 1);
    const run = Math.abs(g.vx) > 5, fast = g.state === 'flee' || g.state === 'leap';
    const bob = run ? Math.abs(Math.sin(g.ph)) * (fast ? 7 : 3) : 0;
    ctx.translate(0, -bob);
    ctx.fillStyle = 'rgba(0,0,0,.12)'; ctx.beginPath(); ctx.ellipse(0, bob + 1, 24, 4, 0, 0, TAU); ctx.fill();
    ctx.strokeStyle = '#A9713F'; ctx.lineWidth = 3.4; ctx.lineCap = 'round';
    for (const [lx, off] of [[14, 0], [9, Math.PI], [-13, Math.PI * 0.5], [-18, Math.PI * 1.5]]) {
      const sw = run ? Math.sin(g.ph + off) * (fast ? 0.75 : 0.45) : 0;
      ctx.beginPath(); ctx.moveTo(lx, -24); ctx.lineTo(lx + Math.sin(sw) * 9, -12); ctx.lineTo(lx + Math.sin(sw) * 15, bob); ctx.stroke();
    }
    ctx.lineCap = 'butt';
    ctx.fillStyle = '#7A4A22'; ctx.beginPath(); ctx.ellipse(-25, -34, 4.5, 2.6, -0.6, 0, TAU); ctx.fill(); // ذيل
    ctx.fillStyle = '#D9A066'; ctx.beginPath(); ctx.ellipse(0, -30, 25, 11, 0, 0, TAU); ctx.fill();
    ctx.fillStyle = '#FFF6E8'; ctx.beginPath(); ctx.ellipse(1, -24, 18, 5.5, 0, 0, TAU); ctx.fill();
    ctx.strokeStyle = '#7A4A22'; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(-19, -28); ctx.quadraticCurveTo(0, -24, 19, -28); ctx.stroke();
    const graze = g.state === 'graze' || g.state === 'pen';
    const hx = graze ? 31 : 27, hy = graze ? -14 : -58;
    ctx.strokeStyle = '#D9A066'; ctx.lineWidth = 9; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(16, -36); ctx.quadraticCurveTo(25, graze ? -28 : -46, hx - 2, hy + 3); ctx.stroke(); ctx.lineCap = 'butt';
    ctx.fillStyle = '#D9A066'; ctx.beginPath(); ctx.ellipse(hx + 3, hy, 9.5, 6.5, graze ? 0.9 : 0.25, 0, TAU); ctx.fill();
    ctx.fillStyle = '#FFF6E8'; ctx.beginPath(); ctx.ellipse(hx + 8, hy + 2, 4, 2.8, graze ? 0.9 : 0.25, 0, TAU); ctx.fill();
    ctx.strokeStyle = '#3B2A1A'; ctx.lineWidth = 2.2; ctx.lineCap = 'round'; // قرون
    ctx.beginPath(); ctx.moveTo(hx - 1, hy - 5); ctx.quadraticCurveTo(hx - 8, hy - 16, hx - 3, hy - 24); ctx.moveTo(hx + 2, hy - 5); ctx.quadraticCurveTo(hx - 3, hy - 16, hx + 2, hy - 23); ctx.stroke(); ctx.lineCap = 'butt';
    ctx.fillStyle = '#C48A50'; ctx.beginPath(); ctx.ellipse(hx - 5, hy - 3, 5.5, 2.4, -0.5, 0, TAU); ctx.fill();
    ctx.fillStyle = '#1B1F3B'; ctx.beginPath(); ctx.arc(hx + 4, hy - 1.5, 1.9, 0, TAU); ctx.fill();
    ctx.restore();
    drawGzMarks(x, base, g, t);
  }
  /** فوك الغزال: عدّاد الشك، ❗ لما ينتبه، 💦 لما يتعب */
  function drawGzMarks(x, base, g, t, caught = !!(V && V.caught)) {
    if (!caught && (g.sus || 0) > 0.06 && g.state !== 'flee' && g.state !== 'alert' && g.state !== 'cornered' && g.state !== 'tired') { // عدّاد الشك
      const k = g.sus / 0.5;
      ctx.fillStyle = 'rgba(36,48,94,.55)'; rr(ctx, x - 17, base - 84, 34, 7, 4); ctx.fill();
      ctx.fillStyle = k > 0.7 ? '#FF7A3D' : '#FFD23F'; rr(ctx, x - 16, base - 83, 32 * Math.min(1, k), 5, 3); ctx.fill();
      ctx.font = '900 15px -apple-system,system-ui,sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.lineWidth = 3.5; ctx.strokeStyle = '#24305e'; ctx.strokeText('?', x, base - 98); ctx.fillStyle = '#FFFFFF'; ctx.fillText('?', x, base - 98);
    }
    if (g.state === 'tired') { ctx.font = '18px -apple-system,system-ui,sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('💦', x + (g.face || 1) * 30, base - 74 + Math.sin(t * 6) * 3); }
    if (g.state === 'alert' || g.state === 'cornered') { // علامة انتباه
      ctx.font = '900 18px -apple-system,system-ui,sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.lineWidth = 4; ctx.strokeStyle = '#24305e'; ctx.strokeText('!', x, base - 86); ctx.fillStyle = '#FFD23F'; ctx.fillText('!', x, base - 86);
    }
  }
  function drawChute(px, py, k, t, p) {
    const tilt = Math.sin(t * 1.5) * 0.06 + p.vx * 0.0007;
    ctx.save(); ctx.translate(px, py - 30); ctx.rotate(tilt);
    const w = 118 * k, h = 62 * k, top = -112 * k;
    ctx.strokeStyle = 'rgba(60,60,80,.7)'; ctx.lineWidth = 1.2;
    for (const sx of [-1, -0.45, 0.45, 1]) { ctx.beginPath(); ctx.moveTo(sx * w / 2, top + 4); ctx.lineTo(sx * 10, 8); ctx.stroke(); }
    const cols = ['#E63946', '#FFFFFF', '#FFB703', '#FFFFFF', '#2EA8FF', '#FFFFFF'];
    for (let i = 0; i < 6; i++) {
      const a0 = Math.PI + (i * Math.PI) / 6, a1 = Math.PI + ((i + 1) * Math.PI) / 6;
      ctx.fillStyle = cols[i];
      ctx.beginPath(); ctx.moveTo(0, top + h * 0.15);
      ctx.ellipse(0, top + h * 0.15, w / 2, h, 0, a0, a1); ctx.closePath(); ctx.fill();
    }
    ctx.strokeStyle = 'rgba(0,0,0,.15)'; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.ellipse(0, top + h * 0.15, w / 2, h, 0, Math.PI, TAU); ctx.stroke();
    ctx.restore();
  }
  function drawCoinAt(x, y, t, seed) {
    const sx = Math.abs(Math.cos(t * 3 + seed * 0.05)) * 0.8 + 0.2;
    ctx.save(); ctx.translate(x, y); ctx.scale(sx, 1);
    ctx.beginPath(); ctx.arc(0, 0, 10, 0, TAU); ctx.fillStyle = '#E09B00'; ctx.fill();
    ctx.beginPath(); ctx.arc(0, -0.5, 7.5, 0, TAU); ctx.fillStyle = '#FFD23F'; ctx.fill();
    ctx.fillStyle = '#FFF6C4'; ctx.fillRect(-1.5, -5, 3, 9);
    ctx.restore();
  }
  function drawValleyFx(map) {
    for (const q of vparts) {
      let x = vX(q.x), y = vY(q.y);
      if (map) { const m = map(q.x, q.y); x = m.x; y = m.y; }
      ctx.globalAlpha = clamp(q.life / q.max, 0, 1);
      if (q.kind === 'star') star(ctx, x, y, q.r * 1.5, q.r * 0.6, q.c);
      else if (q.kind === 'heart') { ctx.fillStyle = q.c; ctx.font = `${q.r * 3.2}px -apple-system,system-ui,sans-serif`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('♥', x, y); }
      else if (q.kind === 'coin') { ctx.save(); ctx.translate(x, y); ctx.scale(Math.abs(Math.cos(q.rot)), 1); ctx.fillStyle = '#E09B00'; ctx.beginPath(); ctx.arc(0, 0, q.r * 1.6, 0, TAU); ctx.fill(); ctx.fillStyle = '#FFD23F'; ctx.beginPath(); ctx.arc(0, 0, q.r * 1.2, 0, TAU); ctx.fill(); ctx.restore(); }
      else { ctx.fillStyle = q.c; ctx.beginPath(); ctx.arc(x, y, q.r, 0, TAU); ctx.fill(); }
    }
    ctx.globalAlpha = 1;
  }
  function renderValley() {
    const v = V, p = v.p, t = time;
    let sx = 0, sy = 0;
    if (shake > 0) { const m = shake * 12 * S * dpr; sx = rnd(-m, m); sy = rnd(-m, m); }
    ctx.setTransform(S * dpr, 0, 0, S * dpr, sx, sy);
    // السما والشمس
    const g = ctx.createLinearGradient(0, 0, 0, viewH);
    g.addColorStop(0, '#5DB8FF'); g.addColorStop(0.6, '#BDE6FF'); g.addColorStop(1, '#FFF1D2');
    ctx.fillStyle = g; ctx.fillRect(-4, -4, C.W + 8, viewH + 8);
    const sunX = C.W * 0.8, sunY = 130;
    ctx.save(); ctx.translate(sunX, sunY); ctx.rotate(t * 0.05);
    ctx.fillStyle = 'rgba(255,240,180,.25)';
    for (let i = 0; i < 12; i++) { ctx.rotate(TAU / 12); ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(-14, -170); ctx.lineTo(14, -170); ctx.fill(); }
    ctx.restore();
    ctx.fillStyle = '#FFF4B8'; ctx.beginPath(); ctx.arc(sunX, sunY, 34, 0, TAU); ctx.fill();
    ctx.fillStyle = '#FFE066'; ctx.beginPath(); ctx.arc(sunX, sunY, 27, 0, TAU); ctx.fill();
    // الجبال البعيدة، وبيها القمة اللي كنت فوكها 🏔️
    const peakU = 2300, peakH = (u) => 250 * Math.exp(-(((u - peakU) / 1000) ** 2)) * (1 + 0.06 * Math.sin(u * 0.02));
    vRidge(0.12, 150, '#A9BEDF', 95, 0.004, peakH);
    { // ثلج القمة البعيدة
      const base = layerY(0.12, 150), top = (sx) => { const u = (sx - C.W / 2) / 0.12 + V.cam.x; return base - (95 * (0.6 + 0.4 * Math.sin(u * 0.004) + 0.25 * Math.sin(u * 0.0108 + 1)) + peakH(u)); };
      const pk = (peakU - V.cam.x) * 0.12 + C.W / 2;
      if (pk > -160 && pk < C.W + 160) {
        const line = top(pk) + 70;
        ctx.fillStyle = '#F4F8FF'; ctx.beginPath();
        let first = true;
        for (let sx = pk - 160; sx <= pk + 160; sx += 6) { const y = top(sx); if (y > line) continue; if (first) { ctx.moveTo(sx, y); first = false; } else ctx.lineTo(sx, y); }
        for (let sx = pk + 160; sx >= pk - 160; sx -= 14) { const y = top(sx); if (y > line) continue; ctx.lineTo(sx, Math.min(line + (Math.round(sx / 14) % 2 ? -10 : 4), y + 30)); }
        ctx.closePath(); ctx.fill();
        const fy = top(pk);
        ctx.strokeStyle = '#5C3A1A'; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(pk + 2, fy + 2); ctx.lineTo(pk + 2, fy - 14); ctx.stroke();
        ctx.fillStyle = '#FFB703'; ctx.fillRect(pk + 2, fy - 14, 9, 6);
      }
    }
    for (let i = 0; i < 6; i++) { // غيوم
      const cx = ((((i * 170 - V.cam.x * 0.2 + t * (6 + i)) % 760) + 760) % 760) - 180;
      drawCloud(cx, layerY(0.2, 560 + (i % 3) * 70), 0.8 + hash(i) * 0.6, 0.85, '#FFFFFF');
    }
    ctx.strokeStyle = '#3B4675'; ctx.lineWidth = 1.6; ctx.lineCap = 'round'; // طيور
    for (let i = 0; i < 4; i++) {
      const bx = ((t * (22 + i * 6) + i * 140) % (C.W + 160)) - 80, by = layerY(0.25, 430 + i * 35), fl = Math.sin(t * 9 + i) * 4;
      ctx.beginPath(); ctx.moveTo(bx - 7, by - fl); ctx.lineTo(bx, by); ctx.lineTo(bx + 7, by - fl); ctx.stroke();
    }
    vRidge(0.32, 70, '#93D79A', 60, 0.006);
    vRidge(0.5, 36, '#73C979', 42, 0.009);
    // النهر
    const rb = layerY(0.7, 18);
    if (rb < viewH + 30) {
      const rg = ctx.createLinearGradient(0, rb - 16, 0, rb + 6);
      rg.addColorStop(0, '#7FD3FF'); rg.addColorStop(1, '#3AA0E0');
      ctx.fillStyle = rg; ctx.fillRect(-4, rb - 16, C.W + 8, 22);
      ctx.strokeStyle = 'rgba(255,255,255,.7)'; ctx.lineWidth = 1.6;
      for (let i = 0; i < 9; i++) { const wx = ((((i * 61 - V.cam.x * 0.7 + t * 30) % (C.W + 60)) + C.W + 60) % (C.W + 60)) - 30; ctx.beginPath(); ctx.moveTo(wx, rb - 8 + (i % 3) * 4); ctx.lineTo(wx + 14, rb - 8 + (i % 3) * 4); ctx.stroke(); }
    }
    // أشجار بعيدة
    for (let k = 0; k < 34; k++) {
      const wx = k * 85 + hash(k) * 50, x = layerX(wx, 0.8), base = layerY(0.8, 8);
      if (x < -60 || x > C.W + 60 || base > viewH + 120) continue;
      if (hash(k * 3.1) < 0.5) drawPalm(x, base, 0.62 + hash(k * 2) * 0.2, t, k);
      else drawRoundTree(x, base, 0.6 + hash(k * 5) * 0.2, ['#4FB35A', '#5CC067', '#3E9E4C'][k % 3], t, k);
    }
    // الأرض
    const gy = vY(0);
    if (gy < viewH + 10) {
      const gg = ctx.createLinearGradient(0, gy, 0, viewH);
      gg.addColorStop(0, '#7ED957'); gg.addColorStop(1, '#4CAF50');
      ctx.fillStyle = gg; ctx.fillRect(-4, gy, C.W + 8, viewH - gy + 10);
      ctx.fillStyle = '#9BE36D'; ctx.fillRect(-4, gy, C.W + 8, 5);
      const x0 = Math.floor((V.cam.x - C.W / 2 - 40) / 26), x1 = Math.ceil((V.cam.x + C.W / 2 + 40) / 26);
      for (let k = x0; k <= x1; k++) { // عشب على خط المشي
        const x = vX(k * 26 + hash(k) * 18);
        ctx.fillStyle = '#5DBB4C'; ctx.beginPath(); ctx.moveTo(x - 4, gy + 1); ctx.lineTo(x + Math.sin(t * 2 + k) * 2, gy - 8 - hash(k * 3) * 6); ctx.lineTo(x + 4, gy + 1); ctx.fill();
      }
      ctx.fillStyle = 'rgba(214,190,120,.45)'; ctx.fillRect(-4, gy + 4, C.W + 8, 9); // درب ترابي
      const depth = viewH - gy;
      for (let r = 0; r < 4; r++) { // ورود وحجار على عمق الأرض، الأقرب يتحرك أسرع
        const f = 1 + r * 0.18, yy = gy + 22 + (depth - 40) * (r / 4), sz = 2.6 + r * 0.9, step = 30 + r * 8;
        const a0 = Math.floor(((V.cam.x - C.W / 2 / f) - 40) / step), a1 = Math.ceil(((V.cam.x + C.W / 2 / f) + 40) / step);
        for (let k = a0; k <= a1; k++) {
          const seed = k * 13.7 + r * 101, wx = k * step + hash(seed) * step, x = (wx - V.cam.x) * f + C.W / 2, y = yy + hash(seed * 1.7) * 26;
          const h = hash(seed * 3.3);
          if (h > 0.93) { ctx.fillStyle = '#B9B4A6'; ctx.beginPath(); ctx.ellipse(x, y, sz * 3, sz * 1.8, 0, 0, TAU); ctx.fill(); ctx.fillStyle = 'rgba(255,255,255,.35)'; ctx.beginPath(); ctx.ellipse(x - sz, y - sz * 0.6, sz, sz * 0.5, 0, 0, TAU); ctx.fill(); }
          else if (h > 0.4) {
            ctx.strokeStyle = '#3E9E4C'; ctx.lineWidth = 1.4; ctx.beginPath(); ctx.moveTo(x, y + sz * 2.4); ctx.lineTo(x + Math.sin(t * 1.8 + k) * 1.5, y); ctx.stroke();
            ctx.fillStyle = ['#FF6B9A', '#FFD23F', '#FFFFFF', '#B28DFF', '#FF8C42'][(k + r) % 5];
            for (let q = 0; q < 5; q++) { const a = (q * TAU) / 5 + k; ctx.beginPath(); ctx.arc(x + Math.cos(a) * sz * 0.9, y + Math.sin(a) * sz * 0.9, sz * 0.7, 0, TAU); ctx.fill(); }
            ctx.fillStyle = '#FFE9A8'; ctx.beginPath(); ctx.arc(x, y, sz * 0.55, 0, TAU); ctx.fill();
          } else { ctx.fillStyle = '#4FAE45'; ctx.beginPath(); ctx.moveTo(x - sz * 1.4, y + sz * 2); ctx.lineTo(x, y - sz * 2); ctx.lineTo(x + sz * 1.4, y + sz * 2); ctx.fill(); }
        }
      }
      for (const [wx, kind, s] of [[160, 'palm', 1.05], [620, 'tree', 1], [1080, 'palm', 1.1], [1700, 'tree', 1.05], [2050, 'palm', 1], [2480, 'tree', 1.1]]) { // أشجار قريبة
        const x = vX(wx);
        if (x < -90 || x > C.W + 90) continue;
        if (kind === 'palm') drawPalm(x, gy + 2, s, t, wx); else drawRoundTree(x, gy + 2, s, '#3FA34D', t, wx);
      }
    }
    drawTentCamp(t);
    if (v.caught && !v.delivered) { // مكان التسليم
      const zx = vX(ZONE_X), pulse = 0.5 + 0.5 * Math.sin(t * 5);
      ctx.strokeStyle = `rgba(255,210,63,${0.6 + 0.4 * pulse})`; ctx.lineWidth = 4;
      ctx.beginPath(); ctx.ellipse(zx, gy + 6, 46 + pulse * 6, 10, 0, 0, TAU); ctx.stroke();
      ctx.fillStyle = 'rgba(255,210,63,.18)'; ctx.fill();
      ctx.font = '900 26px -apple-system,system-ui,sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillStyle = '#FFB703'; ctx.fillText('⬇', zx, gy - 70 - pulse * 10);
    }
    if (v.chuteDrop && v.chuteDrop.t < 2.4) { // المظلة طايحة عالأرض
      const cx = vX(v.chuteDrop.x + v.chuteDrop.face * 40), a = clamp(1 - (v.chuteDrop.t - 1.4), 0, 1), k = clamp(1 - v.chuteDrop.t * 1.2, 0.12, 1);
      ctx.globalAlpha = a; ctx.fillStyle = '#E63946';
      ctx.beginPath(); ctx.ellipse(cx, gy - 6 * k, 50, 26 * k + 4, 0, Math.PI, TAU); ctx.fill(); ctx.globalAlpha = 1;
    }
    const gzX = vX(v.gz.x), gzY = vY(v.gz.y);
    const pHop = v.phase === 'walk' ? Math.abs(Math.sin(v.p.hopPh)) * (Math.abs(p.vx) > 160 ? 10 : 5) : 0;
    const px = vX(p.x), py = vY(p.y + pHop);
    if (v.caught) { // الحبل
      ctx.strokeStyle = '#8B5A2B'; ctx.lineWidth = 2;
      const hx = px + p.face * 14, hy = py - 22, gx = gzX + (v.gz.face || 1) * 22, gy2 = gzY - 46;
      ctx.beginPath(); ctx.moveTo(hx, hy); ctx.quadraticCurveTo((hx + gx) / 2, Math.max(hy, gy2) + 22, gx, gy2); ctx.stroke();
    }
    if (gzX > -80 && gzX < C.W + 80) drawGazelle(gzX, gzY, v.gz, t);
    for (const c of v.coins) if (!c.taken) { const cy = vY(c.y); if (cy > -20 && cy < viewH + 20) drawCoinAt(vX(c.x), cy, t, c.x); }
    if (p.chute > 0) drawChute(px, py, p.chute, t, p);
    const sk = skinById(save.skin);
    ctx.save(); ctx.translate(px, py);
    drawHero(ctx, sk, { face: p.face, t, squash: p.landT > 0 ? p.landT * 2.4 : 0, rot: p.rot, scared: v.phase === 'fall', lookY: v.phase === 'walk' ? 0 : 1.6 });
    ctx.restore();
    // أعشاب قدّام
    if (gy < viewH + 10) {
      ctx.fillStyle = '#3E9E4C';
      for (let k = 0; k < 14; k++) {
        const x = ((((k * 37 - V.cam.x * 1.25) % (C.W + 60)) + C.W + 60) % (C.W + 60)) - 30, h = 14 + hash(k) * 12;
        ctx.beginPath(); ctx.moveTo(x - 5, viewH + 4); ctx.lineTo(x + Math.sin(t * 2.2 + k) * 4, viewH - h); ctx.lineTo(x + 5, viewH + 4); ctx.fill();
      }
    }
    for (let i = 0; i < 6; i++) { // فراشات
      const wx = 250 + i * 420 + Math.sin(t * 0.6 + i) * 70, x = vX(wx), y = vY(40 + i % 3 * 22 + Math.sin(t * 1.7 + i * 2) * 16);
      if (x < -20 || x > C.W + 20) continue;
      const fl = Math.abs(Math.sin(t * 14 + i));
      ctx.fillStyle = ['#FF8FD1', '#FFD23F', '#8FD6FF'][i % 3];
      ctx.beginPath(); ctx.ellipse(x - 4 * fl, y, 4 * fl + 0.5, 3, 0, 0, TAU); ctx.ellipse(x + 4 * fl, y, 4 * fl + 0.5, 3, 0, 0, TAU); ctx.fill();
    }
    drawValleyFx();
    if (v.phase === 'walk' && !v.delivered) drawTargetArrow(vX(v.caught ? ZONE_X : v.gz.x), viewH - 210);
    if (v.fade > 0) { ctx.fillStyle = `rgba(255,255,255,${v.fade})`; ctx.fillRect(-4, -4, C.W + 8, viewH + 8); }
  }

  /** سهم يأشّر عالهدف (الغزال أو الخيمة) إذا طالع برّة الشاشة، وبيه المسافة وعدّاد الشك */
  function drawTargetArrow(sxT, ay) {
    const v = V, p = v.p;
    if (sxT >= 8 && sxT <= C.W - 8) return;
    const tx = v.caught ? ZONE_X : v.gz.x, right = sxT > C.W, ax = right ? C.W - 26 : 26, m = Math.round(Math.abs(tx - p.x) / 10);
    const sus = !v.caught && (v.gz.sus || 0) > 0.06 ? Math.min(1, v.gz.sus / 0.5) : 0;
    ctx.fillStyle = 'rgba(36,48,94,.85)'; rr(ctx, ax - 22, ay - 38, 44, sus ? 74 : 64, 14); ctx.fill();
    ctx.fillStyle = '#FFD23F'; ctx.beginPath();
    if (right) { ctx.moveTo(ax + 12, ay); ctx.lineTo(ax - 4, ay - 10); ctx.lineTo(ax - 4, ay + 10); } else { ctx.moveTo(ax - 12, ay); ctx.lineTo(ax + 4, ay - 10); ctx.lineTo(ax + 4, ay + 10); }
    ctx.fill();
    ctx.font = '20px -apple-system,system-ui,sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(v.caught ? '🏕️' : '🦌', ax, ay - 22);
    ctx.font = '900 11px -apple-system,system-ui,sans-serif'; ctx.fillStyle = '#FFFFFF'; ctx.fillText(m + 'م', ax, ay + 18);
    if (sus) { ctx.fillStyle = 'rgba(255,255,255,.25)'; rr(ctx, ax - 15, ay + 27, 30, 5, 3); ctx.fill(); ctx.fillStyle = sus > 0.7 ? '#FF7A3D' : '#FFD23F'; rr(ctx, ax - 15, ay + 27, 30 * sus, 5, 3); ctx.fill(); }
  }

  // ---------------------------------------------------------------- 🌍 العالم المفتوح (اللعبة الرئيسية)
  // جبل الغابة + القمة + وادي الغزلان بعالم واحد بلا قطع (world3d.js). الجغرافيا والمحاكاة منفصلة عن الرسم، فبالمستقبل تشتغل على سيرفر.
  // الرسّام (WebGL) واحد. إذا الجهاز ما يدعم 3D، «العب» يفتح وضع القفز.
  let r3State = 'none', WD = null, WS = null, RR = null;
  function want3D() {
    if (r3State !== 'none' || window.__no3d) return;
    r3State = 'loading';
    const sc = document.createElement('script');
    sc.src = 'world3d.js'; sc.async = true;
    sc.onload = () => { try { r3State = self.NattaWorld3D && self.NattaWorld3D.supported() ? 'ready' : 'failed'; } catch (e) { r3State = 'failed'; } };
    sc.onerror = () => { r3State = 'failed'; };
    document.head.appendChild(sc);
  }
  const inWorld = () => !!WS && (state === 'world' || state === 'ending' || ((state === 'pause' || state === 'countdown') && resumeTo === 'world'));
  const fmtTime = (s) => { s = Math.max(0, Math.round(s)); return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`; };
  const TEA_SELLER = ['🧔🏻‍♂️', 'أبو علي الچايچي'], GUESTS = ['👳🏻‍♂️', 'زوار القمة'], MERCHANT = ['👳🏻‍♂️', 'أبو جاسم التاجر'];
  function sharedRenderer() {
    if (!RR) {
      RR = self.NattaWorld3D.makeRenderer($('g3d'));
      $('g3d').addEventListener('webglcontextlost', (e) => { e.preventDefault(); r3State = 'failed'; $('g3d').hidden = true; $('vign').hidden = true; if (WS) { goHome(); toast('صار خلل بالرسم 😕 جرّب وضع القفز 🦘', 3000); } });
    }
    return RR;
  }

  // ---------------------------------------------------------------- 🕹️ التحكم (مثل ببجي موبايل)
  // إبهام يسار = جويستك (دفعة خفيفة مشي هادئ، دفعة كاملة ركض)، إصبع يمين = تلف الكاميرا. كيبورد: WASD/الأسهم، Shift هادئ، Q/E كاميرا، المسافة نطة، F فعالية، M خريطة
  const JOY_R = 52;
  const J = { id: null, cx: 0, cy: 0, x: 0, y: 0 }, CAMD = { id: null, x: 0, y: 0, dx: 0, dy: 0 };
  let keyU = false, keyD = false, keySh = false, keyQ = false, keyE = false;
  const MINI = { x: () => C.W - 60, y: () => 150, r: 46 };
  const toLogical = (e) => { const r = cvs.getBoundingClientRect(); return { x: (e.clientX - r.left) / S, y: (e.clientY - r.top) / S }; };
  function valleyPointer(type, e) {
    const h = WS; if (!h) return;
    const q = toLogical(e);
    if (type === 'down') {
      if (h.mapOpen) return;
      if (h.map && Math.hypot(q.x - MINI.x(), q.y - MINI.y()) < MINI.r + 8) { openMap(); return; }
      if (q.x < C.W * 0.5 && J.id === null) { Object.assign(J, { id: e.pointerId, cx: q.x, cy: q.y, x: q.x, y: q.y }); h.usedJ = true; }
      else if (CAMD.id === null) { Object.assign(CAMD, { id: e.pointerId, x: q.x, y: q.y }); h.usedCam = true; }
      try { cvs.setPointerCapture(e.pointerId); } catch (err) { /* */ }
    } else if (type === 'move') {
      if (e.pointerId === J.id) { J.x = q.x; J.y = q.y; }
      else if (e.pointerId === CAMD.id) { CAMD.dx += q.x - CAMD.x; CAMD.dy += q.y - CAMD.y; CAMD.x = q.x; CAMD.y = q.y; }
    } else {
      if (e.pointerId === J.id) J.id = null;
      if (e.pointerId === CAMD.id) CAMD.id = null;
    }
  }
  function valleyInput(dt) {
    let jx = 0, jy = 0, mag = 0;
    if (J.id !== null) {
      let dx = J.x - J.cx, dy = J.y - J.cy, l = Math.hypot(dx, dy);
      if (l > JOY_R) { J.cx += (dx / l) * (l - JOY_R); J.cy += (dy / l) * (l - JOY_R); dx = J.x - J.cx; dy = J.y - J.cy; l = JOY_R; }
      if (l > 4) { const k = Math.min(1, l / JOY_R); jx = (dx / l) * k; jy = (-dy / l) * k; mag = k; }
    } else if (keyL || keyR || keyU || keyD) {
      jx = (keyR ? 1 : 0) - (keyL ? 1 : 0); jy = (keyU ? 1 : 0) - (keyD ? 1 : 0);
      const l = Math.hypot(jx, jy) || 1; jx /= l; jy /= l; mag = keySh ? 0.5 : 1;
    }
    const dyaw = CAMD.dx * 0.0085 + ((keyE ? 1 : 0) - (keyQ ? 1 : 0)) * 1.9 * dt, dpitch = CAMD.dy * 0.006;
    CAMD.dx = 0; CAMD.dy = 0;
    return { jx, jy, mag, sneak: keySh, dyaw, dpitch };
  }
  const uparts = [];
  function sparkleAt(x, y, z, colors, kind = 'star', n = 8, spd = 1) {
    if (!WD) return;
    const q = WD.project(x, y, z); if (!q.vis) return;
    const sx = q.x * C.W, sy = q.y * viewH;
    for (let i = 0; i < n; i++) { const life = rnd(0.55, 1.2); uparts.push({ x: sx, y: sy, vx: rnd(-90, 90) * spd, vy: rnd(-200, -40) * spd, g: 300, life, max: life, r: rnd(2.6, 4.6), c: pick(colors), kind, rot: rnd(0, 6) }); }
  }

  // ---------------------------------------------------------------- البداية والنهاية
  /** opts.at: 'summit' | 'valley' (نازل بالمظلة) | بلا = سفح الجبل */
  function startWorld(opts = {}) {
    Sfx.init(); want3D();
    if (r3State === 'failed' || window.__no3d) { startRun(); return; }
    if (r3State !== 'ready' || !WD) {
      state = 'warp'; show(null); toast(r3State === 'ready' ? '⏳ نبني العالم…' : '⏳ نجهّز العالم…', 3000);
      const t0 = performance.now();
      const go = () => {
        if (state !== 'warp') return;
        if (r3State === 'ready') {
          if (!WD) { try { WD = self.NattaWorld3D.createWorld(null, { renderer: sharedRenderer(), sign: 'خيمة أبو جاسم' }); } catch (e) { console.warn('world', e); r3State = 'failed'; startRun(); return; } }
          startWorld(opts);
        } else if (r3State === 'failed' || performance.now() - t0 > 15000) startRun(); else setTimeout(go, 150);
      };
      setTimeout(go, 60); return;
    }
    if (V) leaveValley(); if (WS) leaveWorld(); SUM = null;
    if (!world) newDemo();
    WS = { t: 0, fade: 1, fadeCol: '255,255,255', warp: !!opts.warp, paid: 0, jumpBuf: 0, dlg: null, act: null, threat: 0, warned: {}, usedJ: false, usedCam: false, landedT: 0, pins: [], mapOpen: false, map: null, fog: null, lastReveal: null, revealed: 0, delivered: false, endT: 0, obj: '', hurtT: 0, mapHi: false, portrait: null, phase: 'walk' };
    WD.setSize(cssW, cssH, window.__r3dPR || Math.min(window.devicePixelRatio || 1, 2));
    const seed = window.__seed != null ? window.__seed : (Math.random() * 4294967295) >>> 0;
    WS.info = WD.enter(skinById(save.skin), { at: opts.at, seed });
    state = 'world'; resumeTo = 'world';
    clearTimeout(toastT); $('toast').classList.remove('show'); // رسالة «نجهّز العالم» تختفي أول ما يبين
    show(null); $('hud').hidden = true; $('turbo').hidden = true; $('tut').hidden = true; $('banner').classList.remove('show'); $('count').hidden = true;
    $('g3d').hidden = false; $('vign').hidden = false; $('app').classList.add('v3d');
    $('vbar').hidden = false; $('vMap').hidden = false; $('jumpBtn').hidden = false; $('actBtn').hidden = true; $('skip').hidden = true;
    J.id = null; CAMD.id = null; uparts.length = 0; ptr.clear();
    makeMap();
    try { WS.portrait = `<img alt="" src="${WD.portrait()}">`; } catch (e) { WS.portrait = null; }
    Music.reset(); Music.setMode('play'); Sfx.click();
    if (opts.at === 'summit') toast('🚀 للقمة!', 1300);
    else if (opts.at === 'valley') toast('🚀 للوادي!', 1300);
    else {
      banner('⛰️', 'جبل الغابة', 'اطلع للقمة 95م — والعالم كله مفتوح إلك 🌍', 'gold', 3400);
      setTimeout(() => { if (WS && state === 'world' && !WS.usedJ) toast('🕹️ إبهامك اليسار يمشي، ودفعة كاملة = ركض', 3400); }, 3600);
      setTimeout(() => { if (WS && state === 'world' && !WD.S.summit) toast('🦘 زر النطة للألواح الناقصة والحجار', 3200); }, 7400);
    }
  }
  function makeMap() {
    WS.map = WD.mapShot(1024); WS.mapHi = !WD.view.hiLeft;
    if (!WS.fog) { WS.fog = document.createElement('canvas'); WS.fog.width = WS.map.canvas.width; WS.fog.height = WS.map.canvas.height; const fg = WS.fog.getContext('2d'); fg.fillStyle = 'rgba(14,20,38,0.9)'; fg.fillRect(0, 0, WS.fog.width, WS.fog.height); }
  }
  function payCoins() { const S3 = WD.S, due = Math.max(0, S3.coinsGot - WS.paid); if (due) { save.coins += due; WS.paid += due; persist(); } return due; }
  function leaveWorld() {
    if (!WS) return;
    payCoins();
    if (WS.mapOpen) closeMap();
    WD.S.scope = false;
    WS = null; J.id = null; CAMD.id = null; uparts.length = 0;
    $('jumpBtn').hidden = true; $('jumpBtn').classList.remove('on'); $('actBtn').hidden = true; $('skip').hidden = true; $('dlg').hidden = true;
    $('vbar').hidden = true; $('g3d').hidden = true; $('vign').hidden = true; $('app').classList.remove('v3d');
  }
  function mtJump() { if (WS && state === 'world') WS.jumpBuf = 0.18; }
  function mtAction() {
    if (!WS || state !== 'world') return;
    const S3 = WD.S, id = S3.scope ? 'scope' : WS.act;
    if (!id) return;
    Sfx.click();
    switch (id) {
      case 'tea': {
        const heal = S3.hero.hp < S3.hero.maxHp; WD.interact('tea'); Sfx.pour(); WS.tea = (WS.tea || 0) + 1;
        say(WS.tea === 1 ? 'هلا بالبطل! ☕ تفضّل استكان شاي مهيّل… حار ويرد الروح بعد هالطلعة 😄' : pick(['ثاني استكان؟ 😄 تدلل، الشاي هنا ما يخلص ☕', 'اشرب على راحتك… بس انتبه، الهوا هنا يقلب الدنيا فجأة 💨', 'الشاي بالقمة غير طعم! ☕✨']), 5, TEA_SELLER);
        if (heal) setTimeout(() => toast('❤️ الشاي رجّعلك صحتك!', 2000), 900);
        break;
      }
      case 'chat': WD.interact('chat'); Sfx.talk(); say(pick(['شفت الوادي بالتلسكوب؟ 🔭 يكولون بيه غزال 🦌 محد كدر يلزمه!', 'إحنا كل جمعة نصعد هنا… بس الريح بالقمة ما تتأمّن 💨', 'دك الجرس 🔔 حظ حلو! وارمي عملة بالنافورة وتمنّى ✨', 'الطريق المتاهة ضيّعنا ساعة 😅 اللافتات تساعد، بس مو بكل مكان', 'الوادي يم الجبل، تنزله مشي من السهل أو… تطير 😉']), 5.5, GUESTS); break;
      case 'bell': WD.interact('bell'); Sfx.toll(); shake = 0.05; break;
      case 'scope': if (WD.interact('scope')) toast('👆 حرّك إصبعك حتى تباوع… شوف الوادي والنخل 🌴', 2600); Sfx.whoosh(); break;
      case 'fountain':
        if (save.coins < 1) { toast('ما عندك عملات 🪙'); break; }
        save.coins -= 1; persist(); Sfx.coin(); setTimeout(() => Sfx.splash(), 380);
        sparkleAt(WD.info.M.x, WD.info.M.HS + 0.6, WD.info.M.z, ['#FFD23F', '#BDE8FF', '#FFFFFF'], 'star', 12, 0.8);
        toast(pick(['🪙 رميت عملة… وتمنّيت ✨', '🪙 أمنيتك راح تتحقق! ✨', '🪙 طشّ! بالنص بالضبط 🎯', '🪙 تمنّى توصل الوادي بسلامة 😄']), 2400);
        break;
    }
  }
  function onWorldEvent(type, a) {
    const S3 = WD.S, m = WS, h = S3.hero;
    switch (type) {
      case 'jump': Sfx.jump(save.skin); break;
      case 'land': Sfx.step(1); break;
      case 'landStone': Sfx.step(1); Sfx.splash(); break;
      case 'step': Sfx.step(a[0] ? 1 : 0); if (a[1] === 'bridge' && Math.random() < 0.4) Sfx.creak(); break;
      case 'splash': Sfx.splash(); break;
      case 'coin': { Sfx.coin(); const c = a[0]; sparkleAt(c.x, c.y, c.z, ['#FFD23F', '#FFF6C4'], 'star', 7); break; }
      case 'hurt': m.hurtT = 0.5; shake = Math.max(shake, Math.min(0.35, a[0] / 120)); if (a[1] === 'fall') { Sfx.thud(); toast(a[0] >= 40 ? `😵 وكعة قوية! -${a[0]} ❤️` : `🤕 -${a[0]} ❤️`, 1500); } else Sfx.hurt(); break;
      case 'faint': Sfx.fallW(); toast('😵 غِبت عن الوعي…', 1600); m.fade = 0.01; m.fadeCol = '18,22,40'; break;
      case 'swept': Sfx.splash(); toast('💦 الساقية سحبتك!', 1800); break;
      case 'respawn': m.fade = 0.85; m.fadeCol = '18,22,40'; toast(a[1] ? `🚩 صحيت بـ «${a[0]}» وخسرت ${a[1]} 🪙` : `🚩 رجعت لـ «${a[0]}»`, 2200); break;
      case 'rest': Sfx.mission(); banner('🚩', 'نقطة استراحة', a[0], '', 2000); break;
      case 'growl': Sfx.growl(); if (!m.warned.wolf) { m.warned.wolf = 1; toast('🐺 ذيب! اركض بعيد عنه', 2400); } break;
      case 'howl': Sfx.howl(); break;
      case 'grunt': Sfx.grunt(); if (!m.warned.boar) { m.warned.boar = 1; toast('🐗 خنزير بري! يهجم بخط مستقيم… تنحّى عن طريقه', 2800); } break;
      case 'bitten': shake = 0.3; toast(`${a[0] === 'wolf' ? '🐺' : '🐗'} لزمك! -${a[1]} ❤️`, 1800); break;
      case 'summit': {
        const first = a[1], tm = a[0];
        let sub = 'ساحة القمة ☕';
        if (first) {
          if (!m.warp) {
            const rec = !save.mtBest || tm < save.mtBest;
            save.mtSummits = (save.mtSummits || 0) + 1; save.coins += 200; if (rec) save.mtBest = Math.round(tm);
            sub = `⏱️ ${fmtTime(tm)}${rec ? ' — رقم قياسي! 🏆' : ''}   +200 🪙`;
          } else sub = 'انتقال سريع 🚀';
          payCoins(); persist();
          Sfx.flag(); Music.celebrate(); shake = 0.1;
          sparkleAt(h.x, h.y + 1.5, h.z, ['#FFD23F', '#FF5D8F', '#7FD1FF', '#8DE26B'], 'star', 26, 1.4);
        }
        banner('🏔️', 'وصلت القمة!', sub, 'gold', 4200);
        setTimeout(() => { if (WS && state === 'world' && WD.S.summit && WD.S.summit.phase === 'wait') say('هلا بيك بالقمة يا بطل! 🏔️ تعال اشرب استكان شاي ☕ وباوع بالتلسكوب عالوادي 🔭', 6, TEA_SELLER); }, 2600);
        break;
      }
      case 'windStart': Sfx.wind(9); banner('💨', 'الريح هبّت!', 'كلشي ديتحرك… تمسّك!', 'danger', 3200); if (m.dlg) m.dlg.t = Math.min(m.dlg.t, 0.5); break;
      case 'lift': Sfx.gust(); Sfx.whoosh(); shake = 0.25; banner('🌪️', 'الريح شالتك!', 'رايح وين؟! 😱', '', 2600); break;
      case 'carry': Sfx.whoosh(); break;
      case 'chute': Sfx.chute(); banner('🪂', 'انفتحت المظلة!', 'وجّه بالإبهام اليسار 🕹️ واجمع العملات', '', 2600); break;
      case 'landChute':
        Sfx.thud(); shake = 0.15; m.landedT = m.t;
        banner('🏞️', 'وادي الغزلان', 'دوّر على الغزال 🦌 وعلى خيمة التاجر 🏕️', 'gold', 3200);
        setTimeout(() => { if (WS && state === 'world' && !WD.S.vq.caught) toast('🗺️ الخريطة فوك: أشّر بيها الأماكن اللي تلگاها', 3400); }, 3600);
        break;
      case 'snort': Sfx.snort(); break;
      case 'tired': toast('الغزال تعب! 😮‍💨 هسه فرصتك', 2400); break;
      case 'call': say('يا بطل! 👋 آني أبو جاسم التاجر… تعال لخيمتي، عندي إلك شغلة وجائزة 🎁', 6, MERCHANT); break;
      case 'meet':
        if (!S3.vq.caught) say('هلا بيك يا بطل! 🤝 بالوادي اكو غزال 🦌، إذا تلزمه جيبه لهنا لخيمتي وأنطيك جائزة كبيرة 🎁. أشّر مكاني بالخريطة 🗺️ حتى ما تضيع', 8, MERCHANT);
        else say('عفية عليك! 👏 جيبه لهنا، للدائرة الصفرة اللي يم الخيمة', 5, MERCHANT);
        if (!m.pins.some((p) => p.type === 'camp')) setTimeout(() => { if (WS && state === 'world' && !WS.pins.some((p) => p.type === 'camp')) toast('🗺️ افتح الخريطة وأشّر مكان التاجر 🏕️', 3000); }, 4200);
        break;
      case 'catch': {
        Sfx.catchIt(); shake = 0.12;
        banner('🦌', 'لزمته!', S3.vq.met ? 'رجّعه لخيمة أبو جاسم 🏕️' : 'هسه دوّر على أبو جاسم التاجر 🔎', 'gold', 3000);
        const g = WD.sim.gz; sparkleAt(g.x, g.y + 1.2, g.z, ['#FF5D8F', '#FFD23F', '#FFFFFF'], 'heart', 14);
        if (S3.vq.met) setTimeout(() => { if (WS && !WS.delivered) say('عفية عليك! 👏 هسه جيبه لخيمتي', 4, MERCHANT); }, 1600);
        break;
      }
      case 'deliver': {
        m.delivered = true; m.endT = 0;
        const got = payCoins();
        save.coins += 500; m.endCoins = 500 + got;
        if (!save.owned.includes('explorer')) save.owned.push('explorer');
        save.adventures = (save.adventures || 0) + 1; persist();
        Sfx.reward(); Music.celebrate();
        say('تسلم إيدك يا بطل! 🙌 هاي جائزتك: 500 عملة 💰 وقبعة المغامر 🤠', 5, MERCHANT);
        banner('🎁', 'الجائزة!', '+500 🪙  وشخصية «المغامر» 🤠', 'gold', 3600);
        const mw = S3.vq.merW; sparkleAt(mw.x, h.y + 1.7, mw.z, ['#FFD23F', '#FFB703'], 'coin', 34, 1.5);
        break;
      }
    }
  }
  function revealFog() {
    const mp = WS.map, h = WD.S.hero;
    if (!mp || (WS.lastReveal && Math.hypot(h.x - WS.lastReveal[0], h.z - WS.lastReveal[1]) < 2)) return;
    WS.lastReveal = [h.x, h.z];
    const g = WS.fog.getContext('2d'), Wd = WS.fog.width, Hh = WS.fog.height, ppm = Wd / (mp.z1 - mp.z0);
    const u = ((h.z - mp.z0) / (mp.z1 - mp.z0)) * Wd, vv = ((mp.x1 - h.x) / (mp.x1 - mp.x0)) * Hh, rad = (h.mode === 'walk' ? 26 : h.mode === 'glide' ? 40 : 60) * ppm;
    g.save(); g.globalCompositeOperation = 'destination-out';
    const gr = g.createRadialGradient(u, vv, rad * 0.5, u, vv, rad); gr.addColorStop(0, 'rgba(0,0,0,1)'); gr.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = gr; g.beginPath(); g.arc(u, vv, rad, 0, TAU); g.fill(); g.restore();
    WS.revealed++;
  }
  function updateWorld(dt) {
    const m = WS, S3 = WD.S;
    m.t += dt;
    if (m.fade > 0 && !(S3.hero.mode === 'faint')) m.fade = Math.max(0, m.fade - dt * (m.fadeCol === '255,255,255' ? 1.1 : 1.6));
    else if (S3.hero.mode === 'faint') m.fade = Math.min(0.9, m.fade + dt * 1.2);
    m.hurtT = Math.max(0, m.hurtT - dt);
    if (state === 'world' && !m.mapOpen) {
      const inp = valleyInput(dt);
      const n = Math.max(1, Math.ceil(dt / (1 / 60) - 0.01)), hs = dt / n;
      for (let i = 0; i < n; i++) {
        inp.jump = m.jumpBuf > 0;
        const ev = WD.step(hs, inp); inp.dyaw = 0; inp.dpitch = 0;
        m.jumpBuf = Math.max(0, m.jumpBuf - hs);
        for (const e of ev) { if (e === 'jump') m.jumpBuf = 0; if (Array.isArray(e)) onWorldEvent(e[0], e.slice(1)); else onWorldEvent(e, []); }
        if (!WS) return;
      }
    }
    if (m.map && !m.mapHi && !WD.view.hiLeft) makeMap(); // الخريطة تتحسّن لمن تخلص التفاصيل
    // زر الفعالية والنطة والتخطّي
    const it = state === 'world' ? WD.nearInteract() : null;
    m.act = it ? it.id : null;
    const label = S3.scope ? '🔭 طلّع من التلسكوب' : it ? it.label : '';
    const ab = $('actBtn');
    if (state === 'world' && label) { if (ab.hidden || ab.textContent !== label) { ab.textContent = label; ab.hidden = false; } } else if (!ab.hidden) ab.hidden = true;
    $('jumpBtn').hidden = !(state === 'world' && !S3.scope && S3.hero.mode === 'walk' && !(S3.summit && S3.summit.phase !== 'wait'));
    const sk = state === 'world' && S3.summit && S3.summit.phase === 'wait' && S3.summit.t > 3;
    if ($('skip').hidden === !!sk) $('skip').hidden = !sk;
    const obj = WD.objective(); if (m.obj !== obj) { m.obj = obj; $('vobj').textContent = obj; }
    m.threat = WD.threats().length;
    revealFog();
    updateDialog(dt, m);
    if (m.delivered && !m.endShown) { m.endT += dt; if (m.endT > 4.8 && state === 'world') { m.endShown = true; showEnding(); } }
    for (let i = uparts.length - 1; i >= 0; i--) {
      const q = uparts[i]; q.life -= dt;
      if (q.life <= 0) { uparts[i] = uparts[uparts.length - 1]; uparts.pop(); continue; }
      q.vy += q.g * dt; q.x += q.vx * dt; q.y += q.vy * dt; q.rot += dt * 5;
    }
    shake = Math.max(0, shake - dt);
  }

  // ---------------------------------------------------------------- 🗺️ الخريطة: العالم كله، تنكشف بس اللي مشيت بيه، وإنت تحط العلامات
  const PIN_ICON = { camp: '🏕️', gazelle: '🦌', flag: '📍' };
  let pinTool = 'camp';
  const mapUV = (m, x, z) => [(z - m.z0) / (m.z1 - m.z0), (m.x1 - x) / (m.x1 - m.x0)];
  function openMap() {
    if (!WS || !WS.map || state !== 'world') return;
    WS.mapOpen = true; J.id = null; CAMD.id = null;
    $('mapv').hidden = false; Sfx.click();
    drawFullMap();
  }
  function closeMap() { if (!WS) return; WS.mapOpen = false; $('mapv').hidden = true; }
  function mapFit() {
    const cv = $('mapC'), m = WS.map, r = cv.getBoundingClientRect(), d = Math.min(window.devicePixelRatio || 1, 2);
    if (cv.width !== Math.round(r.width * d) || cv.height !== Math.round(r.height * d)) { cv.width = Math.round(r.width * d); cv.height = Math.round(r.height * d); }
    const k = Math.min(cv.width / m.canvas.width, cv.height / m.canvas.height);
    return { cv, d, k, ox: (cv.width - m.canvas.width * k) / 2, oy: (cv.height - m.canvas.height * k) / 2 };
  }
  function drawFullMap() {
    if (!WS || !WS.mapOpen) return;
    const m = WS.map, f = mapFit(), g = f.cv.getContext('2d'), p = WD.S.hero, W = m.canvas.width * f.k, Hh = m.canvas.height * f.k;
    g.setTransform(1, 0, 0, 1, 0, 0); g.clearRect(0, 0, f.cv.width, f.cv.height);
    g.save(); rr(g, f.ox, f.oy, W, Hh, 18 * f.d); g.clip();
    g.drawImage(m.canvas, f.ox, f.oy, W, Hh); g.drawImage(WS.fog, f.ox, f.oy, W, Hh);
    g.restore();
    g.strokeStyle = 'rgba(255,255,255,.5)'; g.lineWidth = 2 * f.d; rr(g, f.ox, f.oy, W, Hh, 18 * f.d); g.stroke();
    const at = (x, z) => { const [u, v] = mapUV(m, x, z); return [f.ox + u * W, f.oy + v * Hh]; };
    g.textAlign = 'center'; g.textBaseline = 'middle';
    for (const pin of WS.pins) { const [x, y] = at(pin.x, pin.z); g.font = `${24 * f.d}px -apple-system,system-ui,sans-serif`; g.fillText(PIN_ICON[pin.type], x, y - 10 * f.d); g.fillStyle = 'rgba(0,0,0,.35)'; g.beginPath(); g.ellipse(x, y + 3 * f.d, 6 * f.d, 2.5 * f.d, 0, 0, TAU); g.fill(); }
    const [px, py] = at(p.x, p.z);
    drawArrow(g, px, py, p.face, 11 * f.d, '#FFD23F');
    g.font = `900 ${13 * f.d}px -apple-system,system-ui,sans-serif`; g.fillStyle = '#FFFFFF';
    g.fillText('⬆ ش', f.cv.width / 2, f.oy + 16 * f.d);
  }
  function drawArrow(g, x, y, face, s, col) {
    const a = Math.atan2(-Math.cos(face), Math.sin(face));
    g.save(); g.translate(x, y); g.rotate(a);
    g.beginPath(); g.moveTo(s, 0); g.lineTo(-s * 0.7, s * 0.65); g.lineTo(-s * 0.35, 0); g.lineTo(-s * 0.7, -s * 0.65); g.closePath();
    g.fillStyle = col; g.fill(); g.lineWidth = s * 0.22; g.strokeStyle = '#24305e'; g.stroke();
    g.restore();
  }
  function mapTap(e) {
    if (!WS || !WS.mapOpen) return;
    const f = mapFit(), r = f.cv.getBoundingClientRect(), m = WS.map;
    const cx = (e.clientX - r.left) * f.d, cy = (e.clientY - r.top) * f.d;
    const u = (cx - f.ox) / (m.canvas.width * f.k), v = (cy - f.oy) / (m.canvas.height * f.k);
    if (u < 0 || u > 1 || v < 0 || v > 1) return;
    const z = m.z0 + u * (m.z1 - m.z0), x = m.x1 - v * (m.x1 - m.x0);
    const near = WS.pins.findIndex((pin) => { const [pu, pv] = mapUV(m, pin.x, pin.z); return Math.hypot((pu - u) * m.canvas.width * f.k, (pv - v) * m.canvas.height * f.k) < 28 * f.d; });
    if (near >= 0 && (pinTool === 'del' || WS.pins[near].type === pinTool)) { WS.pins.splice(near, 1); Sfx.click(); }
    else if (pinTool !== 'del') {
      if (pinTool === 'camp') WS.pins = WS.pins.filter((pin) => pin.type !== 'camp');
      WS.pins.push({ type: pinTool, x, z }); Sfx.coin();
    }
    drawFullMap();
  }
  $('mapC').addEventListener('pointerdown', (e) => { e.preventDefault(); mapTap(e); });
  $('mapX').onclick = () => { Sfx.click(); closeMap(); };
  $('vMap').onclick = () => { if (WS && state === 'world') { if (WS.map) openMap(); else toast('⏳ الخريطة تتجهز…'); } };
  document.querySelectorAll('#mapv .pin').forEach((b) => { b.onclick = () => { pinTool = b.dataset.t; document.querySelectorAll('#mapv .pin').forEach((o) => o.classList.toggle('on', o === b)); Sfx.click(); }; });

  // ---------------------------------------------------------------- الرسم فوك المشهد: جويستك، بوصلة، خريطة صغيرة، صحة، تهديدات
  function drawUParts() {
    for (const q of uparts) {
      ctx.globalAlpha = clamp(q.life / q.max, 0, 1);
      if (q.kind === 'star') star(ctx, q.x, q.y, q.r * 1.5, q.r * 0.6, q.c);
      else if (q.kind === 'heart') { ctx.fillStyle = q.c; ctx.font = `${q.r * 3.2}px -apple-system,system-ui,sans-serif`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('♥', q.x, q.y); }
      else { ctx.save(); ctx.translate(q.x, q.y); ctx.scale(Math.abs(Math.cos(q.rot)), 1); ctx.fillStyle = '#E09B00'; ctx.beginPath(); ctx.arc(0, 0, q.r * 1.6, 0, TAU); ctx.fill(); ctx.fillStyle = '#FFD23F'; ctx.beginPath(); ctx.arc(0, 0, q.r * 1.2, 0, TAU); ctx.fill(); ctx.restore(); }
    }
    ctx.globalAlpha = 1;
  }
  function drawJoystick(t, h = WS) {
    if (J.id !== null) {
      const dx = J.x - J.cx, dy = J.y - J.cy, l = Math.hypot(dx, dy), k = l > JOY_R ? JOY_R / l : 1, run = l > JOY_R * 0.62;
      ctx.fillStyle = 'rgba(255,255,255,.14)'; ctx.beginPath(); ctx.arc(J.cx, J.cy, JOY_R, 0, TAU); ctx.fill();
      ctx.strokeStyle = 'rgba(255,255,255,.55)'; ctx.lineWidth = 2; ctx.stroke();
      ctx.setLineDash([4, 5]); ctx.beginPath(); ctx.arc(J.cx, J.cy, JOY_R * 0.62, 0, TAU); ctx.stroke(); ctx.setLineDash([]);
      ctx.fillStyle = run ? 'rgba(255,183,3,.9)' : 'rgba(255,255,255,.85)'; ctx.beginPath(); ctx.arc(J.cx + dx * k, J.cy + dy * k, 21, 0, TAU); ctx.fill();
      ctx.font = '900 11px -apple-system,system-ui,sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillStyle = '#24305e';
      ctx.fillText(run ? 'ركض' : 'هادئ', J.cx + dx * k, J.cy + dy * k);
    } else if (!h.usedJ || h.t - (h.landedT || 0) < 12) {
      const a = 0.35 + 0.15 * Math.sin(t * 3), x = 74, y = viewH - 170;
      ctx.globalAlpha = a; ctx.strokeStyle = '#FFFFFF'; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(x, y, JOY_R, 0, TAU); ctx.stroke();
      ctx.fillStyle = '#FFFFFF'; ctx.beginPath(); ctx.arc(x, y, 18, 0, TAU); ctx.fill(); ctx.globalAlpha = 1;
      if (!h.usedCam) { ctx.globalAlpha = a; ctx.font = '30px -apple-system,system-ui,sans-serif'; ctx.textAlign = 'center'; ctx.fillText('👆', C.W - 80, viewH - 250 + Math.sin(t * 3) * 6); ctx.font = '900 12px -apple-system,system-ui,sans-serif'; ctx.fillStyle = '#FFFFFF'; ctx.fillText('⟷ لف الكاميرا', C.W - 80, viewH - 208); ctx.globalAlpha = 1; }
    }
  }
  function drawCompass() {
    const hd = WD.heading(), cx = C.W / 2, y = 82, w = 220, ppd = w / 110, p = WD.S.hero;
    ctx.save();
    ctx.fillStyle = 'rgba(20,28,56,.42)'; rr(ctx, cx - w / 2 - 8, y - 15, w + 16, 30, 15); ctx.fill();
    ctx.beginPath(); ctx.rect(cx - w / 2, y - 16, w, 32); ctx.clip();
    const lab = { 0: 'ش', 90: 'ق', 180: 'ج', 270: 'غ' };
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    for (let a = 0; a < 360; a += 15) {
      const d = ((a - hd + 540) % 360) - 180; if (Math.abs(d) > 58) continue;
      const x = cx + d * ppd;
      if (lab[a]) { ctx.font = '900 13px -apple-system,system-ui,sans-serif'; ctx.fillStyle = a === 0 ? '#FFD23F' : '#FFFFFF'; ctx.fillText(lab[a], x, y + 1); }
      else { ctx.strokeStyle = 'rgba(255,255,255,.6)'; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(x, y - (a % 45 ? 3 : 6)); ctx.lineTo(x, y + (a % 45 ? 3 : 6)); ctx.stroke(); }
    }
    ctx.font = '15px -apple-system,system-ui,sans-serif';
    const marks = [...WS.pins.map((pin) => [pin.x, pin.z, PIN_ICON[pin.type]])];
    if (!WD.S.climb.done) marks.push([WD.info.M.x, WD.info.M.z, '🏔️']);
    for (const [mx, mz, ic] of marks) {
      const b = ((Math.atan2(mz - p.z, mx - p.x) * 180) / Math.PI + 360) % 360, d = ((b - hd + 540) % 360) - 180;
      if (Math.abs(d) > 58) continue;
      ctx.fillText(ic, cx + d * ppd, y - 1);
    }
    ctx.restore();
    ctx.fillStyle = '#FFD23F'; ctx.beginPath(); ctx.moveTo(cx, y + 13); ctx.lineTo(cx - 5, y + 20); ctx.lineTo(cx + 5, y + 20); ctx.closePath(); ctx.fill();
  }
  function drawMinimap() {
    const m = WS.map; if (!m) return;
    const cx = MINI.x(), cy = MINI.y(), r = MINI.r, p = WD.S.hero, Wd = m.canvas.width, Hh = m.canvas.height;
    const ppmMap = Wd / (m.z1 - m.z0), view = 55, sc = r / view / ppmMap;
    const [u, v] = mapUV(m, p.x, p.z);
    ctx.save();
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, TAU); ctx.fillStyle = 'rgba(14,20,38,.85)'; ctx.fill(); ctx.clip();
    ctx.translate(cx, cy); ctx.scale(sc, sc); ctx.translate(-u * Wd, -v * Hh);
    ctx.drawImage(m.canvas, 0, 0); ctx.drawImage(WS.fog, 0, 0);
    ctx.restore();
    ctx.save(); ctx.beginPath(); ctx.arc(cx, cy, r, 0, TAU); ctx.clip();
    const yaw = (WD.heading() * Math.PI) / 180, ca = Math.atan2(-Math.cos(yaw), Math.sin(yaw));
    const gr = ctx.createRadialGradient(cx, cy, 0, cx, cy, r); gr.addColorStop(0, 'rgba(255,255,255,.35)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = gr; ctx.beginPath(); ctx.moveTo(cx, cy); ctx.arc(cx, cy, r, ca - 0.45, ca + 0.45); ctx.closePath(); ctx.fill();
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.font = '15px -apple-system,system-ui,sans-serif';
    for (const pin of WS.pins) { let dx = (pin.z - p.z) * (r / view), dy = -(pin.x - p.x) * (r / view); const l = Math.hypot(dx, dy); if (l > r - 9) { dx *= (r - 9) / l; dy *= (r - 9) / l; } ctx.fillText(PIN_ICON[pin.type], cx + dx, cy + dy); }
    ctx.restore();
    drawArrow(ctx, cx, cy, p.face, 8, '#FFD23F');
    ctx.strokeStyle = 'rgba(255,255,255,.85)'; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.arc(cx, cy, r, 0, TAU); ctx.stroke();
    ctx.font = '900 11px -apple-system,system-ui,sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillStyle = '#FFD23F'; ctx.fillText('ش', cx, cy - r + 9);
    ctx.fillStyle = 'rgba(255,255,255,.9)'; ctx.font = '900 10px -apple-system,system-ui,sans-serif'; ctx.fillText('🗺️ اضغط', cx, cy + r + 10);
  }
  function drawStatus() { // صحة، عملات، ارتفاع (كل شارة لحالها حتى ما تتلخبط الأرقام ويه العربي)
    const h = WD.S.hero, y = 104;
    ctx.save(); ctx.font = '900 13px -apple-system,system-ui,sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    const chip = (txt, cx, w) => { w = w || ctx.measureText(txt).width + 22; ctx.fillStyle = 'rgba(20,28,56,.5)'; rr(ctx, cx - w / 2, y, w, 26, 13); ctx.fill(); ctx.fillStyle = '#FFFFFF'; ctx.fillText(txt, cx, y + 13.5); };
    // الصحة
    const hw = 96, hx = C.W / 2 - 60, k = clamp(h.hp / h.maxHp, 0, 1);
    ctx.fillStyle = 'rgba(20,28,56,.5)'; rr(ctx, hx - hw / 2, y, hw, 26, 13); ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,.18)'; rr(ctx, hx - hw / 2 + 24, y + 9, hw - 32, 8, 4); ctx.fill();
    ctx.fillStyle = k > 0.5 ? '#5BD46B' : k > 0.25 ? '#FFC23D' : '#FF4D4D'; if (k > 0) { rr(ctx, hx - hw / 2 + 24, y + 9, (hw - 32) * k, 8, 4); ctx.fill(); }
    ctx.fillText(WS.hurtT > 0 && Math.sin(time * 40) > 0 ? '💔' : '❤️', hx - hw / 2 + 13, y + 13.5);
    const onMt = WD.info.M.rad(h.x, h.z) < 230 && h.y > 0; // الارتفاع بس على الجبل (الوادي تحت مستوى السهل)
    chip(`🪙 ${WD.S.coinsGot}`, onMt ? C.W / 2 + 22 : C.W / 2 + 40);
    if (onMt) chip(`⛰️ ${Math.round(h.y)}م`, C.W / 2 + 82);
    ctx.restore();
  }
  function drawAltitude() { // شريط الطلعة على اليمين (بس على الجبل)
    const h = WD.S.hero, M = WD.info.M; if (M.rad(h.x, h.z) > 200 || WD.S.climb.done) return;
    const alt = clamp((h.y - 9) / 86, 0, 1), x = C.W - 24, y0 = 240, y1 = 430, cy = (k) => y1 - (y1 - y0) * k;
    ctx.save();
    ctx.fillStyle = 'rgba(20,28,56,.42)'; rr(ctx, x - 9, y0 - 26, 18, y1 - y0 + 40, 9); ctx.fill();
    const g = ctx.createLinearGradient(0, y1, 0, y0); g.addColorStop(0, '#4FB86A'); g.addColorStop(0.6, '#9BD86B'); g.addColorStop(1, '#FFFFFF');
    ctx.fillStyle = g; rr(ctx, x - 4, cy(alt), 8, Math.max(4, y1 - cy(alt)), 4); ctx.fill();
    for (const c of M.rest) { if (!c.flag) continue; const k = clamp((c.y - 9) / 86, 0, 1); ctx.fillStyle = WD.S.reached.has(c.id) ? '#FFD23F' : 'rgba(255,255,255,.55)'; ctx.fillRect(x - 8, cy(k) - 1, 16, 2.5); }
    ctx.font = '15px -apple-system,system-ui,sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('🏔️', x, y0 - 14);
    ctx.fillStyle = '#FFFFFF'; ctx.beginPath(); ctx.arc(x, cy(alt), 6.5, 0, TAU); ctx.fill(); ctx.fillStyle = '#FF7A3D'; ctx.beginPath(); ctx.arc(x, cy(alt), 4, 0, TAU); ctx.fill();
    ctx.restore();
  }
  function drawThreats(t) {
    const th = WD.threats(); if (!th.length) return;
    ctx.save();
    const a = 0.18 + 0.12 * Math.sin(t * 10), gr = ctx.createRadialGradient(C.W / 2, viewH / 2, Math.min(C.W, viewH) * 0.35, C.W / 2, viewH / 2, Math.max(C.W, viewH) * 0.75);
    gr.addColorStop(0, 'rgba(255,40,40,0)'); gr.addColorStop(1, `rgba(255,40,40,${a})`); ctx.fillStyle = gr; ctx.fillRect(0, 0, C.W, viewH);
    ctx.font = '26px -apple-system,system-ui,sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    for (const b of th) {
      const q = WD.project(b.x, b.y + 0.8, b.z);
      if (q.vis && q.x > 0.04 && q.x < 0.96 && q.y > 0.08 && q.y < 0.92) { if (b.state === 'notice') ctx.fillText('❗', q.x * C.W, q.y * viewH - 34); continue; }
      let dx = q.x - 0.5, dy = q.y - 0.5; if (!q.vis) { dx = -dx; dy = -dy; }
      const k = Math.min(0.42 / Math.abs(dx || 1e-3), 0.42 / Math.abs(dy || 1e-3)), sx = C.W * (0.5 + dx * k), sy = viewH * (0.5 + dy * k);
      ctx.fillStyle = 'rgba(200,30,30,.85)'; ctx.beginPath(); ctx.arc(sx, sy, 22, 0, TAU); ctx.fill();
      ctx.fillText(b.kind === 'wolf' ? '🐺' : '🐗', sx, sy + 1);
    }
    ctx.restore();
  }
  function drawScopeMask() {
    const r = Math.min(C.W, viewH) * 0.47, cx = C.W / 2, cy = viewH / 2;
    ctx.save(); ctx.fillStyle = '#05070D'; ctx.beginPath(); ctx.rect(-4, -4, C.W + 8, viewH + 8); ctx.arc(cx, cy, r, 0, TAU, true); ctx.fill();
    const g = ctx.createRadialGradient(cx, cy, r * 0.7, cx, cy, r); g.addColorStop(0, 'rgba(5,7,13,0)'); g.addColorStop(1, 'rgba(5,7,13,.85)'); ctx.fillStyle = g; ctx.beginPath(); ctx.arc(cx, cy, r, 0, TAU); ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,.35)'; ctx.lineWidth = 1.2; ctx.beginPath(); ctx.moveTo(cx - 16, cy); ctx.lineTo(cx + 16, cy); ctx.moveTo(cx, cy - 16); ctx.lineTo(cx, cy + 16); ctx.stroke();
    ctx.strokeStyle = 'rgba(201,161,59,.9)'; ctx.lineWidth = 6; ctx.beginPath(); ctx.arc(cx, cy, r + 2, 0, TAU); ctx.stroke();
    ctx.restore();
  }
  function renderWorld() {
    const m = WS, t = time, S3 = WD.S, h = S3.hero;
    WD.render(t, { shake, dlg: m.dlg });
    ctx.setTransform(S * dpr, 0, 0, S * dpr, 0, 0);
    ctx.clearRect(-10, -10, C.W + 20, viewH + 20);
    if (S3.scope) drawScopeMask();
    const g = WD.sim.gz;
    if (h.mode === 'walk' && !S3.vq.caught && Math.hypot(g.x - h.x, g.z - h.z) < 24) { // عدّاد الشك: بس إذا الغزال قدامك وقريب
      const q = WD.project(g.x, g.y + 1.95, g.z);
      if (q.vis && q.x > 0.02 && q.x < 0.98 && q.y > 0.05 && q.y < 0.95) drawGzMarks(q.x * C.W, q.y * viewH + 84, { sus: g.sus, state: g.state, face: 1 }, t, false);
    }
    drawUParts();
    const live = state === 'world' && !S3.scope && !m.mapOpen && (h.mode === 'walk' || h.mode === 'glide');
    if (live) { if (h.mode === 'walk') drawThreats(t); drawCompass(); drawMinimap(); drawStatus(); drawAltitude(); drawJoystick(t, m); }
    if (m.hurtT > 0) { ctx.fillStyle = `rgba(255,30,30,${m.hurtT * 0.45})`; ctx.fillRect(-4, -4, C.W + 8, viewH + 8); }
    if (m.fade > 0) { ctx.fillStyle = `rgba(${m.fadeCol},${m.fade})`; ctx.fillRect(-4, -4, C.W + 8, viewH + 8); }
  }
  $('jumpBtn').addEventListener('pointerdown', (e) => { e.preventDefault(); Sfx.init(); mtJump(); $('jumpBtn').classList.add('on'); });
  ['pointerup', 'pointercancel', 'pointerleave'].forEach((ev) => $('jumpBtn').addEventListener(ev, () => $('jumpBtn').classList.remove('on')));
  $('actBtn').onclick = () => mtAction();

  /** شنو لازم تعزف الموسيقى هسه: النمط حسب العالم والارتفاع، والحماس حسب النتيجة والصاروخ */
  function musicInfo() {
    if (!world) return { style: 'day', intensity: 0.6, bpm: 92 };
    if (inWorld()) {
      const S3 = WD.S, sm = S3.summit, h = S3.hero, V3 = WD.info.V, lx = h.x - V3.x, inV = lx > -70 && lx < V3.VL + 25 && Math.abs(h.z - V3.z) < 45;
      if (h.mode === 'lift' || h.mode === 'carry') return { style: 'summit', intensity: 3.6, bpm: 118, riser: true };
      if (sm) return { style: 'summit', intensity: sm.phase === 'wait' ? 1.1 : 1 + (sm.wind || 1) * 2.6, bpm: sm.phase === 'wait' ? 86 : 84 + (sm.wind || 1) * 34, riser: sm.phase !== 'wait' };
      if (h.mode === 'glide' || inV) { const g = WD.sim.gz.state, vq = S3.vq; return { style: 'valley', intensity: vq.delivered || state === 'ending' ? 3.6 : h.mode === 'glide' ? 1.3 : g === 'flee' || g === 'leap' ? 3.2 : vq.caught ? 2.6 : 1.9, bpm: g === 'flee' ? 116 : 104 }; }
      const chase = WS.threat > 0, alt = clamp((h.y - 9) / 86, 0, 1);
      return { style: 'forest', intensity: 1.5 + alt * 1.3 + (chase ? 1.3 : 0), bpm: 98 + alt * 10 + (chase ? 12 : 0), riser: chase };
    }
    if (inValley()) { const g = V.gz.state; return { style: 'valley', intensity: V.delivered || state === 'ending' ? 3.6 : V.phase !== 'walk' ? 1.3 : g === 'flee' || g === 'leap' ? 3.2 : V.caught ? 2.6 : 1.9, bpm: g === 'flee' ? 116 : 104 }; }
    if (state === 'summit' && SUM) return { style: 'summit', intensity: 1 + SUM.wind * 2.6, bpm: 84 + SUM.wind * 34, riser: SUM.wind > 0.15 };
    if (state !== 'play' && state !== 'pause' && state !== 'over' && state !== 'revive' && state !== 'countdown') return { style: FT ? 'fire' : 'day', intensity: 0.7, bpm: FT ? 100 : 92 };
    const sc = Core.score(world), camS = (world.camY + viewH / 2) / C.SCORE_DIV;
    const style = FT ? 'fire' : camS < 1300 ? 'day' : camS < 2600 ? 'sunset' : camS < 4200 ? 'night' : 'space';
    let I = 1.4 + clamp(sc / 400, 0, 1) + clamp((sc - 400) / 1100, 0, 1) + clamp((sc - 1500) / 2000, 0, 1);
    if (world.player.rocket > 0) I += 0.8;
    if (world.feverT > 0) I += 1.2;
    if (state === 'over') I = 0.5;
    const sty = STY[style], bpm = sty.bpm[0] + (sty.bpm[1] - sty.bpm[0]) * clamp(sc / 5000, 0, 1);
    const riser = (state === 'play' && !record && !world.hero && bestAtStart > 200 && sc > bestAtStart * 0.85 && sc < bestAtStart) || (world.ev && world.ev.type === 'meteors');
    return { style, intensity: Math.min(I, 4.6), bpm, riser };
  }

  const STEP = 1 / 120;
  let lastT = performance.now(), acc = 0, time = 0;
  function render() {
    if (inWorld()) { renderWorld(); return; }
    if (inValley()) { renderValley(); return; }
    const P = world.player;
    let sx = 0, sy = 0;
    if (shake > 0) { const m = shake * 12 * S * dpr; sx = rnd(-m, m); sy = rnd(-m, m); }
    ctx.setTransform(S * dpr, 0, 0, S * dpr, sx, sy);
    camY = world.camY;
    drawBackground(time);
    if (!world.demo) drawSummitMountain();
    drawGround();
    if (FT) { drawLightning(); drawSquads(); }
    if (!world.demo) {
      // بالرئيسية نخلي الخلفية نظيفة: سما وأرض والشخصية بس
      if (world.hero && !FT) drawNet(time);
      drawBestLine();
      for (const p of world.platforms) drawPlatform(p, time);
      drawCloudSea(time);
      for (const c of world.coins) if (!c.taken) drawCoin(c, time);
    }
    if (world.ev && world.ev.type === 'lowgrav') drawLowGrav(time, world.ev);
    for (const e of world.enemies) drawEnemy(e, time, P);
    drawMeteorsFx(time);
    drawPlayer(P, time);
    if (FT) { drawLava(time); if (world.hero && !world.demo) drawNet(time); }
    drawFx();
    if (FT) drawSkyFlash();
    if (world.ev && world.ev.type === 'wind') drawWind(time, world.ev);
    if (world.feverT > 0) drawFeverFx(time);
    if (SUM && SUM.wind > 0) drawWind(time, { k: SUM.wind, dir: SUM.dir });
    if (SUM && SUM.fade > 0) { ctx.fillStyle = `rgba(255,255,255,${SUM.fade})`; ctx.fillRect(-4, -4, C.W + 8, viewH + 8); }
    if (slowT > 0) drawSlowmo();
    if (state === 'shop') drawPreviews(time);
  }
  function frame(now) {
    requestAnimationFrame(frame);
    FT = isFireSkin();
    let dt = (now - lastT) / 1000; lastT = now;
    if (!(dt > 0)) dt = 0;
    if (dt > 0.1) dt = 0.1;
    if (window.__timeScale) dt *= window.__timeScale; // للتصوير البطيء فقط
    if (state === 'revive') updateRevive(dt);
    const frozen = state === 'pause' || state === 'revive' || state === 'countdown' || state === 'warp';
    const realDt = dt;
    if (slowT > 0) { slowT -= realDt; dt *= 0.33; } // حركة بطيئة
    if (!frozen) {
      time += dt; acc += dt;
      const dir = state === 'play' ? inputDir() : Math.sin(time * 0.7) * 0.45;
      let n = 0;
      if (inValley() || inWorld()) acc = 0;
      while (acc >= STEP && n < 20) { Core.step(world, STEP, dir); acc -= STEP; n++; }
      if (n >= 20) acc = 0;
      if (inValley()) updateValley(dt);
      else if (inWorld()) updateWorld(dt);
      else {
        handleEvents();
        updateFx(dt);
        if (state === 'summit' && SUM) updateSummit(dt);
        if (state === 'play') updateHud(realDt);
      }
    }
    Music.update(realDt, musicInfo());
    render();
  }

  // ---------------------------------------------------------------- تشغيل
  resize();
  goHome();
  setTimeout(want3D, 300); // الجبل هو اللعبة الرئيسية: نحمّل ملف الـ 3D من البداية
  requestAnimationFrame((t) => { lastT = t; frame(t); });

  // للفحص فقط
  window.__natta = { get world() { return world; }, get state() { return state; }, save, startRun, goHome, openShop, Core, Sfx, renderSounds, SKINS, explode, lavaSplash, VOLC, strike, get bolts() { return bolts; }, spawnSquad, squads, Music, renderMusic, offerRevive, checkMissions, bendPlatform, get slowT() { return slowT; }, startSummit, startValley, skipSummit, get V() { return V; }, get SUM() { return SUM; }, openCode, unlockWarp: () => { save.warp = true; persist(); }, warpTo, want3D, get r3State() { return r3State; }, openMap, closeMap, get J() { return J; }, startWorld, startMountain: startWorld, get WD() { return WD; }, get WS() { return WS; }, mtJump, mtAction };
})();
