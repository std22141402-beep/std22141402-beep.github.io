/* =====================================================================
   نطّة — الرسم والواجهة والصوت والتحكم (مصممة لسفاري على الآيفون أولاً)
   ===================================================================== */
(() => {
  'use strict';
  const Core = window.NattaCore;
  const { C } = Core;
  const $ = (id) => document.getElementById(id);
  const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
  const pick = (a) => a[(Math.random() * a.length) | 0];
  const rnd = (a, b) => a + Math.random() * (b - a);
  const TAU = Math.PI * 2;
  const rand32 = () => (Math.random() * 4294967296) >>> 0;

  // ---------------------------------------------------------------- الحفظ
  const KEY = 'natta.v1';
  const DEF = { best: 0, coins: 0, owned: ['green'], skin: 'green', control: 'touch', sound: true, tut: false, games: 0, a2hs: false, hero: false };
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
  ];
  const skinById = (id) => SKINS.find((s) => s.id === id) || SKINS[0];

  // ---------------------------------------------------------------- الصوت (كله مولّد، بدون ملفات)
  const mf = (m) => 440 * Math.pow(2, (m - 69) / 12); // رقم النوتة ← تردد

  /** مُركّب أصوات صغير: يشتغل على الصوت الحقيقي، أو على OfflineAudioContext للفحص وتسجيل العينات */
  function createSynth(ac) {
    const out = ac.createGain(); out.gain.value = 1.1;
    const comp = ac.createDynamicsCompressor();
    comp.threshold.value = -12; comp.knee.value = 12; comp.ratio.value = 4;
    out.connect(comp); comp.connect(ac.destination);
    // صدى غرفة خفيف (reverb) يخلي الأصوات أنعم وأحلى
    const len = Math.floor(ac.sampleRate * 1.4), ir = ac.createBuffer(2, len, ac.sampleRate);
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
      node.connect(g); route(g, o);
      osc.start(t); osc.stop(t + dur + 0.05);
    }
    function noise(o) {
      const t = at(o), dur = o.dur, s = ac.createBufferSource(), fl = ac.createBiquadFilter();
      s.buffer = noiseBuf; s.loop = true;
      fl.type = o.type || 'lowpass'; fl.frequency.setValueAtTime(o.f, t);
      if (o.f1) fl.frequency.exponentialRampToValueAtTime(o.f1, t + (o.glide || dur));
      fl.Q.value = o.q || 0.8;
      const g = ac.createGain(); env(g, t, o.attack || 0.01, o.vol * D.gain, dur);
      s.connect(fl); fl.connect(g); route(g, o);
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
      return mf(p.scale[i]);
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
      coin() { if (!ok()) return; const s = plain(); s.voice({ type: 'square', f: 988, dur: 0.06, vol: 0.06, filter: ['lowpass', 5000] }); s.voice({ type: 'square', f: 1319, t: 0.06, dur: 0.22, vol: 0.06, filter: ['lowpass', 5000] }); },
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
      const p = usePack(S, id, kind); S.D.t0 = t;
      if (kind === 'jump') p.jump(S, mf(p.scale[note != null ? note : 2]));
      else if (kind === 'boost') p.boost(S, 1);
      else p[kind](S);
    }
    return oac.startRendering().then((buf) => buf.getChannelData(0));
  }
  const vibrate = (ms) => { try { if (navigator.vibrate) navigator.vibrate(ms); } catch (e) { /* */ } };

  // ---------------------------------------------------------------- الشاشة
  const cvs = $('game');
  const ctx = cvs.getContext('2d', { alpha: false });
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
  ];
  const mix = (a, b, k) => a.map((v, i) => Math.round(v + (b[i] - v) * k));
  function skyAt(s) {
    let i = 0;
    while (i < SKY.length - 1 && s > SKY[i + 1][0]) i++;
    if (i === SKY.length - 1) return [SKY[i][1], SKY[i][2]];
    const a = SKY[i], b = SKY[i + 1], k = clamp((s - a[0]) / (b[0] - a[0]), 0, 1);
    return [mix(a[1], b[1], k), mix(a[2], b[2], k)];
  }
  const rgb = (c) => `rgb(${c[0]},${c[1]},${c[2]})`;
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  let themeTick = 0;

  function drawCloud(x, y, s, a) {
    ctx.globalAlpha = a; ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(x, y, 22 * s, 0, TAU); ctx.arc(x + 24 * s, y + 5 * s, 17 * s, 0, TAU);
    ctx.arc(x - 24 * s, y + 6 * s, 15 * s, 0, TAU); ctx.arc(x + 8 * s, y - 12 * s, 17 * s, 0, TAU);
    ctx.fill();
    rr(ctx, x - 38 * s, y + 2 * s, 78 * s, 19 * s, 9 * s); ctx.fill();
    ctx.globalAlpha = 1;
  }

  function drawBackground(t) {
    const s = (camY + viewH / 2) / C.SCORE_DIV;
    const [top, bot] = skyAt(s);
    const g = ctx.createLinearGradient(0, 0, 0, viewH);
    g.addColorStop(0, rgb(top)); g.addColorStop(1, rgb(bot));
    ctx.fillStyle = g; ctx.fillRect(-4, -4, C.W + 8, viewH + 8);
    if (++themeTick % 30 === 0 && themeMeta) themeMeta.content = rgb(top);

    // نجوم
    const starA = clamp((s - 2300) / 1200, 0, 1);
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
    const spaceA = clamp((s - 4200) / 1200, 0, 1);
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
  function drawPlatform(p, t) {
    if (p.type === 'g') return;
    const y = Y(p.y);
    if (y < -60 || y > viewH + 40) return;
    const [main, dark, hi] = PLAT[p.type];
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
    rr(ctx, p.x, y, p.w, C.PH, 8); ctx.fillStyle = dark; ctx.fill();
    rr(ctx, p.x, y, p.w, C.PH - 5, 8); ctx.fillStyle = main; ctx.fill();
    rr(ctx, p.x + 9, y + 3, p.w - 18, 3, 2); ctx.fillStyle = hi; ctx.fill();
    if (p.type === 'b') {
      ctx.strokeStyle = dark; ctx.lineWidth = 2; ctx.beginPath();
      ctx.moveTo(p.x + 22, y + 1); ctx.lineTo(p.x + 27, y + 7); ctx.lineTo(p.x + 23, y + C.PH - 2);
      ctx.moveTo(p.x + 48, y + 1); ctx.lineTo(p.x + 43, y + 8); ctx.lineTo(p.x + 47, y + C.PH - 2);
      ctx.stroke();
    } else if (p.type === 'v') {
      ctx.save(); ctx.setLineDash([4, 4]); ctx.strokeStyle = dark; ctx.lineWidth = 1.5;
      rr(ctx, p.x + 1, y + 1, p.w - 2, C.PH - 2, 7); ctx.stroke(); ctx.restore();
    } else if (p.type === 'm') {
      ctx.fillStyle = 'rgba(255,255,255,.85)';
      for (const s of [-1, 1]) {
        const cx = p.x + p.w / 2 + s * 24;
        ctx.beginPath(); ctx.moveTo(cx + s * 5, y + 5.5); ctx.lineTo(cx - s * 2, y + 1.5); ctx.lineTo(cx - s * 2, y + 9.5); ctx.fill();
      }
    }
    if (p.item) drawItem(p, y, t);
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
      dead: P.state === 'hit', scared: P.state === 'fall', rot: P.state === 'hit' ? P.deadT * 9 : 0,
    };
    const blink = P.invul > 0 && P.rocket <= 0 && Math.floor(t * 12) % 2;
    if (blink) ctx.globalAlpha = 0.45;
    const y = Y(P.y);
    for (const off of [0, -C.W, C.W]) {
      const x = P.x + off;
      if (x < -45 || x > C.W + 45) continue;
      ctx.save(); ctx.translate(x, y); drawHero(ctx, sk, o); ctx.restore();
    }
    ctx.globalAlpha = 1;
  }

  // ---------------------------------------------------------------- مؤثرات
  const parts = [], texts = [];
  function burst(x, y, n, o) {
    if (parts.length > 420) return;
    for (let i = 0; i < n; i++) {
      const life = o.life * rnd(0.6, 1.2);
      parts.push({ x: x + rnd(-o.spread || 0, o.spread || 0), y, vx: rnd(-1, 1) * o.sp, vy: rnd(o.vy0, o.vy1), g: o.g, life, max: life, r: o.r * rnd(0.6, 1.4), c: pick(o.colors), kind: o.kind || 'dot', rot: rnd(0, 6) });
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
    for (let i = parts.length - 1; i >= 0; i--) {
      const p = parts[i];
      p.life -= dt;
      if (p.life <= 0) { parts[i] = parts[parts.length - 1]; parts.pop(); continue; }
      p.vy -= p.g * dt; p.x += p.vx * dt; p.y += p.vy * dt; p.rot += dt * 6;
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
        if (parts.length >= 420) break;
        const life = rnd(0.35, 0.7);
        parts.push({ x: P.x + rnd(-12, 12), y: P.y + rnd(40, 54), vx: rnd(-25, 25), vy: rnd(40, 110), g: -40, life, max: life, r: rnd(1.4, 2.8), c: pick(['#FFE066', '#FFB000', '#FF6A00', '#FF3D00']), kind: 'dot', rot: 0 });
      }
    }
    if (P.rocket > 0 && parts.length < 420) {
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
      } else { ctx.fillStyle = p.c; ctx.beginPath(); ctx.arc(p.x, y, p.r * (0.5 + 0.5 * p.life / p.max), 0, TAU); ctx.fill(); }
    }
    ctx.globalAlpha = 1;
    try { ctx.direction = 'ltr'; } catch (e) { /* الصفحة RTL، والأرقام مثل +1 لازم تنكتب LTR */ }
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.font = '900 20px -apple-system,system-ui,sans-serif'; ctx.lineJoin = 'round';
    for (const tx of texts) {
      const y = Y(tx.y + tx.t * 60);
      ctx.globalAlpha = clamp(1.4 - tx.t * 1.6, 0, 1);
      ctx.lineWidth = 5; ctx.strokeStyle = '#24305e'; ctx.strokeText(tx.text, tx.x, y);
      ctx.fillStyle = tx.color; ctx.fillText(tx.text, tx.x, y);
    }
    ctx.globalAlpha = 1;
  }

  // ---------------------------------------------------------------- خط أفضل نتيجة
  let bestAtStart = 0, record = false;
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
    if (state !== 'play') return;
    e.preventDefault();
    ptr.delete(e.pointerId); ptr.set(e.pointerId, sideOf(e));
    try { cvs.setPointerCapture(e.pointerId); } catch (err) { /* */ }
    tutSeen();
  });
  cvs.addEventListener('pointermove', (e) => { if (ptr.has(e.pointerId)) ptr.set(e.pointerId, sideOf(e)); });
  const lift = (e) => ptr.delete(e.pointerId);
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
    if (e.code === 'ArrowLeft' || e.code === 'KeyA') { keyL = true; tutSeen(); }
    else if (e.code === 'ArrowRight' || e.code === 'KeyD') { keyR = true; tutSeen(); }
    else if (e.code === 'Escape' || e.code === 'KeyP') { if (state === 'play') pause(); else if (state === 'pause') resume(); }
    else if (e.code === 'Space' || e.code === 'Enter') {
      if (state === 'home' || (state === 'over' && !$('over').hidden)) { e.preventDefault(); startRun(); }
      else if (state === 'pause') resume();
    } else return;
    Sfx.init();
  });
  window.addEventListener('keyup', (e) => {
    if (e.code === 'ArrowLeft' || e.code === 'KeyA') keyL = false;
    if (e.code === 'ArrowRight' || e.code === 'KeyD') keyR = false;
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
  const SCREENS = ['home', 'pause', 'over', 'shop', 'code'];
  function show(id) { for (const s of SCREENS) $(s).hidden = s !== id; }
  let toastT = 0;
  function toast(text, ms = 1300) {
    const el = $('toast'); el.textContent = text; el.classList.add('show');
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
    const coarse = window.matchMedia && matchMedia('(pointer: coarse)').matches;
    $('how').textContent = save.control === 'tilt'
      ? 'ميّل الموبايل يمين ويسار حتى تتحرك — القفز تلقائي 🦘'
      : coarse ? 'اضغط يمين أو يسار الشاشة حتى تتحرك — القفز تلقائي 🦘'
        : 'تحرك بالأسهم ← → أو بالماوس — القفز تلقائي 🦘';
    $('a2hs').hidden = !(isIOS && !standalone && !save.a2hs);
    $('hHero').hidden = !save.hero;
  }
  function newDemo() { world = Core.createWorld(rand32(), { viewH, demo: true }); parts.length = 0; texts.length = 0; }
  function goHome() {
    state = 'home'; newDemo(); show('home'); $('turbo').hidden = true;
    $('hud').hidden = true; $('tut').hidden = true; Sfx.rocketStop(); refreshHome();
  }
  function startRun() {
    Sfx.init();
    if (save.control === 'tilt') enableTilt();
    world = Core.createWorld(rand32(), { viewH, hero: !!save.hero });
    state = 'play'; record = false; bestAtStart = save.best;
    $('turbo').hidden = !save.hero; $('heroChip').hidden = !save.hero;
    parts.length = 0; texts.length = 0; ptr.clear(); lastScore = -1; lastCoins = -1; shake = 0;
    show(null); $('hud').hidden = false; $('pbar').hidden = true;
    if (!save.tut) { $('tut').hidden = false; $('tut').style.opacity = '1'; tutTimer = 6; } else $('tut').hidden = true;
    Sfx.click();
  }
  function pause() {
    if (state !== 'play') return;
    state = 'pause'; show('pause'); Sfx.rocketStop(); ptr.clear(); keyL = keyR = false; $('turbo').hidden = true;
  }
  function resume() {
    if (state !== 'pause') return;
    state = 'play'; show(null); lastT = performance.now(); acc = 0; $('turbo').hidden = !world.hero;
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
    $('oTitle').textContent = hero ? '🦸 خلصت جولة البطل' : isRec && prevBest > 0 ? 'عاشت إيدك! 🔥'
      : prevBest > 0 && sc >= prevBest * 0.8 ? 'قربت كلش! 😮'
      : pick(['وكعت! 😵', 'أوف! 😅', 'ولا يهمك 💪', 'مرة لخ! 🙌']);
    $('oRecord').hidden = !(isRec && prevBest > 0);
    $('oBest').textContent = save.best; $('oCoins').textContent = '+' + gained;
    $('oScore').textContent = '0';

    const nx = $('oNext');
    const target = SKINS.filter((s) => !s.unlockScore && !save.owned.includes(s.id)).sort((a, b) => a.price - b.price)[0];
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
      show('over'); Sfx.click(); countUp($('oScore'), sc);
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
      else if (sk.unlockScore) st.textContent = `🔒 وصّل ${sk.unlockScore}`;
      else { const s = document.createElement('span'); s.className = 'buy' + (save.coins >= sk.price ? '' : ' no'); s.textContent = `🪙 ${sk.price}`; st.appendChild(s); }
      b.appendChild(st);
      b.onclick = () => {
        Sfx.init();
        // كل ضغطة تسمّعك صوت الشخصية، حتى لو بعدها مقفولة
        if (owned) { save.skin = sk.id; persist(); Sfx.hello(sk.id); buildShop(); return; }
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
  $('play').onclick = startRun;
  $('again').onclick = startRun;
  $('toHome').onclick = () => { Sfx.click(); goHome(); };
  // إنهاء الجولة من الإيقاف: تنحسب العملات والنتيجة وتطلع شاشة النهاية
  $('quit').onclick = () => { Sfx.click(); if (state !== 'pause') return; state = 'play'; endRun(); };
  $('resume').onclick = () => { Sfx.click(); resume(); };
  $('pauseBtn').onclick = () => { Sfx.click(); pause(); };
  $('openShop').onclick = openShop;
  $('oNext').onclick = openShop;
  $('shopBack').onclick = () => { Sfx.click(); goHome(); };
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
          if (e.v === 'jump') { burst(e.x, e.y, 5, FX.dust); if (live) Sfx.jump(save.skin); }
          else { burst(e.x, e.y, 14, FX.boost); if (live) Sfx.boost(save.skin, e.v); }
          break;
        case 'break': burst(e.x, e.y, 12, FX.chunk); if (live) Sfx.brk(); break;
        case 'vanish': burst(e.x, e.y, 12, FX.puff); if (live) Sfx.vanish(); break;
        case 'coin': burst(e.x, e.y, 7, FX.spark); floatText(e.x, e.y + 10, '+1', '#FFD23F'); if (live) Sfx.coin(); break;
        case 'rocket': if (live) { Sfx.rocket(); if (e.v !== 'turbo') toast('🚀 صاروخ!'); } break;
        case 'rocketEnd': Sfx.rocketStop(); break;
        case 'shield': if (live) { Sfx.shield(); toast('🛡️ درع!'); } break;
        case 'shieldBreak': burst(e.x, e.y, 16, FX.glass); shake = 0.25; if (live) Sfx.shieldBreak(); break;
        case 'stomp': burst(e.x, e.y, 14, FX.stars); shake = Math.max(shake, 0.12); if (e.v) floatText(e.x, e.y + 20, '+' + e.v, '#FFD23F'); if (live) Sfx.stomp(); break;
        case 'hit': shake = 0.5; if (live) { Sfx.lose(save.skin, 'hit'); vibrate(120); } break;
        case 'fall': if (live) { Sfx.lose(save.skin, 'fall'); vibrate(60); } break;
        case 'milestone': if (live) { Sfx.milestone(); toast(`${pick(['🎉 كفو!', '🔥 وحش!', '⭐ استمر!', '💪 بطل!'])} ${e.v}`); } break;
        case 'over': endRun(); break;
      }
    }
    evs.length = 0;
    if (live && !record && !world.hero && bestAtStart > 0 && Core.score(world) > bestAtStart) {
      record = true; Sfx.record(); toast('🏆 رقم قياسي جديد!', 1800); confetti();
    }
  }

  // ---------------------------------------------------------------- الكود السري ووضع البطل
  // الكود محفوظ كـ«بصمة» مو كنص، حتى اللي يقرا الكود ما يعرفه مباشرة
  const CODE_HASHES = [3773636336, 2348092680];
  const normCode = (s) => String(s).normalize('NFKC').toLowerCase().replace(/[ً-ْٰـ\s]/g, '').replace(/[أإآ]/g, 'ا');
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
    $('codeOff').hidden = !!save.hero; $('codeOn').hidden = !save.hero;
    $('codeIn').value = ''; show('code');
    if (!save.hero) setTimeout(() => { try { $('codeIn').focus(); } catch (e) { /* */ } }, 60);
  }
  function tryCode() {
    const el = $('codeIn');
    if (CODE_HASHES.includes(hashCode(el.value))) {
      save.hero = true; persist(); el.blur(); goHome();
      Sfx.hello(save.skin); toast('🦸 وضع البطل شغّال!', 1800);
    } else {
      el.classList.remove('bad'); void el.offsetWidth; el.classList.add('bad');
      Sfx.vanish(); toast('كود غلط ❌');
    }
  }
  $('codeGo').onclick = tryCode;
  $('codeX').onclick = () => { Sfx.click(); $('codeIn').blur(); goHome(); };
  $('codeKill').onclick = () => { save.hero = false; persist(); Sfx.click(); goHome(); toast('وضع البطل انطفى'); };
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
    if (tutTimer > 0) {
      tutTimer -= dt;
      if (tutTimer < 0.5) $('tut').style.opacity = String(Math.max(0, tutTimer / 0.5));
      if (tutTimer <= 0) $('tut').hidden = true;
    }
  }

  const STEP = 1 / 120;
  let lastT = performance.now(), acc = 0, time = 0;
  function render() {
    const P = world.player;
    let sx = 0, sy = 0;
    if (shake > 0) { const m = shake * 12 * S * dpr; sx = rnd(-m, m); sy = rnd(-m, m); }
    ctx.setTransform(S * dpr, 0, 0, S * dpr, sx, sy);
    camY = world.camY;
    drawBackground(time);
    drawGround();
    if (!world.demo) {
      // بالرئيسية نخلي الخلفية نظيفة: سما وأرض والشخصية بس
      if (world.hero) drawNet(time);
      drawBestLine();
      for (const p of world.platforms) drawPlatform(p, time);
      for (const c of world.coins) if (!c.taken) drawCoin(c, time);
    }
    for (const e of world.enemies) drawEnemy(e, time, P);
    drawPlayer(P, time);
    drawFx();
    if (state === 'shop') drawPreviews(time);
  }
  function frame(now) {
    requestAnimationFrame(frame);
    let dt = (now - lastT) / 1000; lastT = now;
    if (!(dt > 0)) dt = 0;
    if (dt > 0.1) dt = 0.1;
    if (state !== 'pause') {
      time += dt; acc += dt;
      const dir = state === 'play' ? inputDir() : Math.sin(time * 0.7) * 0.45;
      let n = 0;
      while (acc >= STEP && n < 20) { Core.step(world, STEP, dir); acc -= STEP; n++; }
      if (n >= 20) acc = 0;
      handleEvents();
      updateFx(dt);
      if (state === 'play') updateHud(dt);
    }
    render();
  }

  // ---------------------------------------------------------------- تشغيل
  resize();
  goHome();
  requestAnimationFrame((t) => { lastT = t; frame(t); });

  // للفحص فقط
  window.__natta = { get world() { return world; }, get state() { return state; }, save, startRun, goHome, openShop, Core, Sfx, renderSounds, SKINS };
})();
