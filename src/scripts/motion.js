// Motion for the site. Rules live in DESIGN.md section 8.
const reduce = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let cleanup = [];

function splitHeadline(el) {
  if (el.dataset.splitDone) return;
  el.dataset.splitDone = '1';
  el.setAttribute('aria-label', el.textContent.replace(/\s+/g, ' ').trim());
  const walk = (node) => {
    [...node.childNodes].forEach((child) => {
      if (child.nodeType === Node.TEXT_NODE) {
        const frag = document.createDocumentFragment();
        child.textContent.split(/(\s+)/).forEach((part) => {
          if (!part) return;
          if (/^\s+$/.test(part)) {
            frag.appendChild(document.createTextNode(' '));
            return;
          }
          const w = document.createElement('span');
          w.className = 'w';
          w.setAttribute('aria-hidden', 'true');
          const wi = document.createElement('span');
          wi.className = 'wi';
          wi.textContent = part;
          w.appendChild(wi);
          frag.appendChild(w);
        });
        child.replaceWith(frag);
      } else if (child.nodeType === Node.ELEMENT_NODE) {
        walk(child);
      }
    });
  };
  walk(el);
  let line = -1;
  let top = null;
  el.querySelectorAll('.w').forEach((w) => {
    const t = Math.round(w.getBoundingClientRect().top);
    if (top === null || Math.abs(t - top) > 6) {
      line += 1;
      top = t;
    }
    w.firstChild.style.setProperty('--l', line);
  });
}

function countUp(el) {
  const target = parseInt(el.dataset.count, 10);
  if (!Number.isFinite(target) || reduce()) return;
  const start = performance.now();
  const dur = 1200;
  const tick = (now) => {
    const p = Math.min(1, (now - start) / dur);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = String(Math.round(target * eased));
    if (p < 1) requestAnimationFrame(tick);
    else el.textContent = String(target);
  };
  el.textContent = '0';
  requestAnimationFrame(tick);
}

function init() {
  cleanup.forEach((fn) => fn());
  cleanup = [];
  document.documentElement.classList.add('js');

  document.querySelectorAll('[data-stagger]').forEach((group) => {
    [...group.children].forEach((child, i) => {
      if (child.hasAttribute('data-reveal')) child.style.setProperty('--i', Math.min(i, 8));
    });
  });

  if (!reduce()) document.querySelectorAll('[data-split]').forEach(splitHeadline);

  // Reveal on scroll
  const seen = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('in');
        entry.target.querySelectorAll?.('[data-count]').forEach(countUp);
        seen.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );
  document.querySelectorAll('[data-reveal], [data-split]').forEach((el) => seen.observe(el));
  cleanup.push(() => seen.disconnect());

  // The journey: pin the section and step through the five stops as the page scrolls
  const journey = document.querySelector('[data-journey]');
  let stepJourney = () => {};
  if (journey && window.innerHeight >= 560) {
    journey.classList.add('live');
    const stops = [...journey.querySelectorAll('.stop')];
    const ticks = [...journey.querySelectorAll('.ticks span')];
    const plates = [...journey.querySelectorAll('.plate')];
    const stack = journey.querySelector('.stack');
    let last = -1;
    stepJourney = () => {
      const r = journey.getBoundingClientRect();
      const span = r.height - window.innerHeight;
      const p = span > 0 ? Math.min(1, Math.max(0, -r.top / span)) : 0;
      const idx = Math.min(stops.length - 1, Math.floor(p * stops.length * 0.999));
      if (stack) stack.style.setProperty('--spread', (0.25 + p * 1.1).toFixed(3));
      if (idx === last) return;
      last = idx;
      stops.forEach((s, i) => {
        s.classList.toggle('on', i === idx);
        s.classList.toggle('past', i < idx);
      });
      ticks.forEach((t, i) => t.classList.toggle('on', i <= idx));
      plates.forEach((pl, i) => pl.classList.toggle('on', i === idx));
    };
    cleanup.push(() => journey.classList.remove('live'));
  }

  // Header and scroll-driven pieces
  const header = document.querySelector('.site-header');
  let lastY = window.scrollY;
  let ticking = false;
  const onFrame = () => {
    ticking = false;
    const y = window.scrollY;
    if (header) {
      header.classList.toggle('solid', y > 24);
      const open = header.classList.contains('menu-open');
      if (!open && y > 240 && y > lastY + 4) header.classList.add('away');
      else if (y < lastY - 4 || y <= 240) header.classList.remove('away');
    }
    lastY = y;
    stepJourney();
  };
  const onScroll = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(onFrame);
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  cleanup.push(() => {
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onScroll);
  });
  onFrame();

  // The object leans gently toward the pointer; cards catch the light
  if (!reduce() && window.matchMedia('(pointer: fine)').matches) {
    const stacks = [...document.querySelectorAll('[data-stack]')];
    const onMove = (e) => {
      const mx = (e.clientX / window.innerWidth - 0.5) * 2;
      const my = (e.clientY / window.innerHeight - 0.5) * 2;
      stacks.forEach((s) => {
        s.style.setProperty('--mx', mx.toFixed(3));
        s.style.setProperty('--my', (-my).toFixed(3));
      });
      const card = e.target.closest?.('.card');
      if (card) {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--px', `${e.clientX - r.left}px`);
        card.style.setProperty('--py', `${e.clientY - r.top}px`);
      }
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    cleanup.push(() => window.removeEventListener('pointermove', onMove));
  }

  // Mobile menu
  const btn = document.querySelector('.menu-btn');
  if (btn && header) {
    const set = (open) => {
      header.classList.toggle('menu-open', open);
      btn.setAttribute('aria-expanded', String(open));
      btn.querySelector('.menu-word').textContent = open ? 'Close' : 'Menu';
      document.body.style.overflow = open ? 'hidden' : '';
    };
    const onClick = () => set(!header.classList.contains('menu-open'));
    const onKey = (e) => {
      if (e.key === 'Escape') set(false);
    };
    btn.addEventListener('click', onClick);
    document.addEventListener('keydown', onKey);
    header.querySelectorAll('.nav a').forEach((a) => a.addEventListener('click', () => set(false)));
    cleanup.push(() => {
      btn.removeEventListener('click', onClick);
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    });
  }
}

document.addEventListener('astro:page-load', init);
