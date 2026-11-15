// The opening experience: the cinematic introduction, the world, and the chapters.
// Rules live in DESIGN.md (version 4).
const reduce = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const wide = () => window.matchMedia('(min-width: 900px)').matches;

let teardown = [];

function init() {
  teardown.forEach((fn) => fn());
  teardown = [];
  const exp = document.querySelector('[data-exp]');
  if (!exp) return;

  const on = (el, type, fn, opts) => {
    if (!el) return;
    el.addEventListener(type, fn, opts);
    teardown.push(() => el.removeEventListener(type, fn, opts));
  };
  const timers = new Set();
  const later = (fn, ms) => {
    const id = setTimeout(() => {
      timers.delete(id);
      fn();
    }, ms);
    timers.add(id);
    return id;
  };
  const clearTimers = () => {
    timers.forEach(clearTimeout);
    timers.clear();
  };
  teardown.push(clearTimers);

  const intro = exp.querySelector('[data-intro]');
  const cam = exp.querySelector('.cam');
  const cap = exp.querySelector('[data-cap]');
  const cams = JSON.parse(exp.dataset.cams);
  const panel = exp.querySelector('[data-panel]');
  const panelBody = exp.querySelector('[data-panel-body]');
  const shelf = exp.querySelector('[data-chapters]');
  const scene = exp.querySelector('[data-scene]');
  const chapters = [...exp.querySelectorAll('[data-chapter]')];
  const ids = chapters.map((c) => c.id);

  // ---------- the opening sequence ----------
  const setCam = (key, seconds) => {
    const c = cams[key];
    cam.style.transitionDuration = `${seconds}s`;
    cam.style.transform = `translate(500px, 250px) rotate(${c.r}deg) scale(${c.s}) translate(${-c.p[0]}px, ${-c.p[1]}px)`;
  };
  const caption = (text) => {
    cap.classList.remove('show');
    if (!text) return;
    later(() => {
      cap.textContent = text;
      cap.classList.add('show');
    }, 900);
  };
  const step = (n) => {
    intro.dataset.step = String(n);
  };
  const finale = () => {
    clearTimers();
    setCam('ilesa', 0);
    caption('');
    step(8);
  };
  const play = () => {
    clearTimers();
    exp.dataset.state = 'intro';
    step(0);
    setCam('world', 0);
    caption('');
    startMotes();
    if (reduce()) {
      finale();
      return;
    }
    const beats = [
      [1300, () => step(1)],
      [2800, () => (step(2), setCam('west', 4.4), caption('West Africa'))],
      [4600, () => (step(3), setCam('nigeria', 4.2), caption('Nigeria'))],
      [4600, () => (step(4), setCam('osun', 3.8), caption('Osun State'))],
      [4200, () => (step(5), setCam('ilesa', 3.6), caption('Ilesa'))],
      [4400, () => (step(6), caption(''))],
      [5000, () => step(7)],
      [5800, () => step(8)],
    ];
    let t = 0;
    beats.forEach(([wait, fn]) => {
      t += wait;
      later(fn, t);
    });
  };

  // ---------- floating particles ----------
  const canvas = exp.querySelector('.motes');
  let motesOn = false;
  let motes = [];
  const sizeMotes = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = canvas.clientWidth * dpr;
    canvas.height = canvas.clientHeight * dpr;
  };
  const drawMotes = (now) => {
    if (!motesOn) return;
    const ctx = canvas.getContext('2d');
    const { width: w, height: h } = canvas;
    ctx.clearRect(0, 0, w, h);
    motes.forEach((m) => {
      m.y -= m.v;
      m.x += Math.sin(now / 4000 + m.p) * 0.12;
      if (m.y < -10) {
        m.y = h + 10;
        m.x = Math.random() * w;
      }
      const a = (0.25 + 0.55 * (0.5 + 0.5 * Math.sin(now / 1800 + m.p))) * m.a;
      ctx.beginPath();
      ctx.fillStyle = `rgba(227, 201, 135, ${a.toFixed(3)})`;
      ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2);
      ctx.fill();
    });
    requestAnimationFrame(drawMotes);
  };
  function startMotes() {
    if (motesOn || reduce()) return;
    sizeMotes();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    motes = Array.from({ length: 70 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: (0.5 + Math.random() * 1.6) * dpr,
      v: (0.08 + Math.random() * 0.22) * dpr,
      a: 0.4 + Math.random() * 0.6,
      p: Math.random() * 6.28,
    }));
    motesOn = true;
    requestAnimationFrame(drawMotes);
  }
  const stopMotes = () => {
    motesOn = false;
  };
  teardown.push(stopMotes);
  on(window, 'resize', () => motesOn && sizeMotes());

  // ---------- a soft tone, only if the visitor asks for it ----------
  let audio = null;
  const soundBtn = exp.querySelector('[data-sound]');
  const setSound = (want) => {
    if (want && !audio) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      const ctx = new AC();
      const out = ctx.createGain();
      out.gain.value = 0;
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 520;
      [110, 164.81, 220.4, 329.2].forEach((f, i) => {
        const o = ctx.createOscillator();
        o.type = 'sine';
        o.frequency.value = f;
        const g = ctx.createGain();
        g.gain.value = [0.5, 0.32, 0.22, 0.1][i];
        o.connect(g).connect(filter);
        o.start();
      });
      const lfo = ctx.createOscillator();
      lfo.frequency.value = 0.07;
      const depth = ctx.createGain();
      depth.gain.value = 0.012;
      lfo.connect(depth).connect(out.gain);
      lfo.start();
      filter.connect(out).connect(ctx.destination);
      audio = { ctx, out };
    }
    if (!audio) return;
    if (want) audio.ctx.resume();
    audio.out.gain.linearRampToValueAtTime(want ? 0.04 : 0, audio.ctx.currentTime + 2.5);
    soundBtn.setAttribute('aria-pressed', String(want));
    soundBtn.textContent = want ? 'Sound: on' : 'Sound: off';
  };
  on(soundBtn, 'click', () => setSound(soundBtn.getAttribute('aria-pressed') !== 'true'));
  teardown.push(() => {
    if (audio) audio.ctx.close();
    audio = null;
  });

  // ---------- entering the world ----------
  const enter = () => {
    clearTimers();
    exp.dataset.state = 'world';
    try {
      sessionStorage.setItem('intro-seen', '1');
    } catch {}
    later(stopMotes, 1800);
  };
  on(exp.querySelector('[data-enter]'), 'click', enter);
  on(exp.querySelector('[data-skip]'), 'click', finale);
  on(exp.querySelector('[data-replay]'), 'click', play);

  // ---------- counters ----------
  const countUp = (el) => {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || '';
    const show = (n) => (el.textContent = n.toLocaleString('en-GB') + suffix);
    if (reduce()) return show(target);
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - start) / 1600);
      show(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  // ---------- travelling to a chapter ----------
  let current = null;
  let lastPlace = null;
  const aim = (id) => {
    const place = scene.querySelector(`[data-place="${id}"]`);
    if (!place || !wide()) return place;
    const s = scene.getBoundingClientRect();
    const p = place.getBoundingClientRect();
    const zoom = 3.4;
    scene.style.setProperty('--cs', zoom);
    scene.style.setProperty('--cx', `${(s.left + s.width / 2 - (p.left + p.width / 2)) * zoom}px`);
    scene.style.setProperty('--cy', `${(s.top + s.height / 2 - (p.top + p.height / 2)) * zoom}px`);
    return place;
  };
  const release = () => {
    scene.style.setProperty('--cs', 1);
    scene.style.setProperty('--cx', '0px');
    scene.style.setProperty('--cy', '0px');
    scene.querySelectorAll('.going').forEach((el) => el.classList.remove('going'));
  };
  const seat = (id) => {
    if (current) {
      current.classList.remove('on');
      shelf.appendChild(current);
    }
    current = chapters.find((c) => c.id === id);
    panelBody.appendChild(current);
    panel.setAttribute('aria-label', current.querySelector('h2').textContent);
    panel.scrollTop = 0;
    // restart the entrance animations
    void current.offsetWidth;
    current.classList.add('on');
    current.querySelectorAll('[data-count]').forEach(countUp);
    if (id === 'international') loadGlobe(current);
  };
  const open = (id, push = true) => {
    if (!ids.includes(id)) return;
    clearTimers();
    if (exp.dataset.state === 'intro') enter();
    const already = !panel.hidden;
    const place = aim(id);
    lastPlace = place;
    if (place) place.classList.add('going');
    exp.dataset.state = 'chapter';
    if (push && location.hash !== `#${id}`) history.pushState(null, '', `#${id}`);
    const arrive = () => {
      panel.classList.remove('leaving');
      panel.hidden = false;
      seat(id);
      panelBody.focus({ preventScroll: true });
    };
    if (already) {
      panel.style.animation = 'none';
      void panel.offsetWidth;
      panel.style.animation = '';
      arrive();
    } else {
      later(arrive, reduce() || !wide() ? 0 : 1000);
    }
  };
  const close = (push = true) => {
    if (panel.hidden) return;
    clearTimers();
    panel.classList.add('leaving');
    if (push && location.hash) history.pushState(null, '', location.pathname);
    exp.dataset.state = 'world';
    release();
    later(
      () => {
        panel.hidden = true;
        panel.classList.remove('leaving');
        if (current) {
          current.classList.remove('on');
          shelf.appendChild(current);
          current = null;
        }
        if (lastPlace) lastPlace.focus({ preventScroll: true });
      },
      reduce() ? 0 : 750,
    );
  };
  const stepBy = (d) => {
    if (!current) return;
    const next = ids[(ids.indexOf(current.id) + d + ids.length) % ids.length];
    release();
    open(next);
  };

  on(scene, 'click', (e) => {
    const place = e.target.closest('[data-place]');
    if (!place) return;
    e.preventDefault();
    open(place.dataset.place);
  });
  on(exp.querySelector('[data-close]'), 'click', () => close());
  on(exp.querySelector('[data-prev]'), 'click', () => stepBy(-1));
  on(exp.querySelector('[data-next]'), 'click', () => stepBy(1));
  on(document, 'keydown', (e) => {
    if (e.key === 'Escape') close();
  });
  on(window, 'popstate', () => {
    const id = location.hash.slice(1);
    if (id && ids.includes(id)) open(id, false);
    else close(false);
  });

  // ---------- things that take turns: books, talks, countries, connections ----------
  on(exp, 'click', (e) => {
    const pick = e.target.closest('[data-pick]');
    if (pick) {
      const group = pick.closest('[data-picks]');
      const id = pick.dataset.pick;
      group.querySelectorAll('[data-pick]').forEach((b) => b.setAttribute('aria-pressed', String(b === pick)));
      group.querySelectorAll('[data-pane]').forEach((p) => p.classList.toggle('on', p.dataset.pane === id));
      group.dispatchEvent(new CustomEvent('pick', { detail: id }));
      return;
    }
    const copy = e.target.closest('[data-copy]');
    if (copy && navigator.clipboard) {
      navigator.clipboard.writeText(copy.dataset.copy).then(() => {
        const note = exp.querySelector('[data-copied]');
        if (note) note.textContent = `Copied: ${copy.dataset.copy}`;
      });
    }
  });

  // ---------- the globe loads only when someone visits it ----------
  let globeLoaded = false;
  function loadGlobe(chapter) {
    if (globeLoaded) return;
    globeLoaded = true;
    const c = chapter.querySelector('[data-globe]');
    import('./globe.js').then((m) => {
      const stop = m.mount(c, chapter.querySelector('[data-picks]'));
      teardown.push(stop);
    });
  }

  // ---------- where to begin ----------
  const hash = location.hash.slice(1);
  let seen = false;
  try {
    seen = sessionStorage.getItem('intro-seen') === '1';
  } catch {}
  setCam('world', 0);
  if (hash && ids.includes(hash)) {
    finale();
    exp.dataset.state = 'world';
    open(hash, false);
  } else if (seen) {
    finale();
    exp.dataset.state = 'world';
  } else {
    play();
  }
}

document.addEventListener('astro:page-load', init);
