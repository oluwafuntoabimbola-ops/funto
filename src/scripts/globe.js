// A slowly turning globe. Countries she has lived in, presented in or researched are lit.
import { geoOrthographic, geoPath, geoGraticule10, geoCentroid, geoContains, geoInterpolate } from 'd3-geo';
import { feature } from 'topojson-client';
import world from 'world-atlas/countries-110m.json';

export function mount(canvas, group) {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const countries = feature(world, world.objects.countries).features;
  const byId = new Map(countries.map((c) => [c.id, c]));
  const lit = canvas.dataset.lit.split(',').filter((id) => byId.has(id));
  const litSet = new Set(lit);
  const centres = new Map(lit.map((id) => [id, geoCentroid(byId.get(id))]));
  // a few countries span so much of the map that their centre is far from where she was
  centres.set('643', [37.6, 55.75]);
  centres.set('840', [-90, 35]);
  centres.set('124', [-79.4, 43.7]);

  const ctx = canvas.getContext('2d');
  const projection = geoOrthographic().clipAngle(90).precision(0.6);
  const path = geoPath(projection, ctx);
  const grid = geoGraticule10();

  let active = '566';
  let rot = [-8, -9, 0];
  let fly = null;
  let dragging = false;
  let moved = 0;
  let last = null;
  let alive = true;
  let size = 0;

  const fit = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    size = canvas.clientWidth * dpr;
    canvas.width = size;
    canvas.height = size;
    projection.translate([size / 2, size / 2]).scale(size / 2 - 6 * dpr);
  };

  const draw = (now) => {
    if (!alive) return;
    if (!canvas.isConnected || canvas.clientWidth === 0) {
      requestAnimationFrame(draw);
      return;
    }
    if (Math.abs(canvas.clientWidth * Math.min(window.devicePixelRatio || 1, 2) - size) > 2) fit();
    if (fly) {
      const p = Math.min(1, (now - fly.start) / fly.dur);
      const e = 1 - Math.pow(1 - p, 3);
      const [lon, lat] = fly.at(e);
      rot = [-lon, -lat, 0];
      if (p === 1) fly = null;
    } else if (!dragging && !reduce) {
      rot = [rot[0] + 0.05, rot[1], 0];
    }
    projection.rotate(rot);
    const dpr = size / canvas.clientWidth;
    ctx.clearRect(0, 0, size, size);

    // the sphere
    const r = projection.scale();
    const g = ctx.createRadialGradient(size * 0.36, size * 0.3, r * 0.1, size / 2, size / 2, r);
    g.addColorStop(0, '#1d3a63');
    g.addColorStop(1, '#081428');
    ctx.beginPath();
    path({ type: 'Sphere' });
    ctx.fillStyle = g;
    ctx.fill();
    ctx.lineWidth = 1 * dpr;
    ctx.strokeStyle = 'rgba(227, 201, 135, 0.55)';
    ctx.stroke();

    ctx.beginPath();
    path(grid);
    ctx.strokeStyle = 'rgba(246, 241, 231, 0.07)';
    ctx.lineWidth = 0.6 * dpr;
    ctx.stroke();

    countries.forEach((c) => {
      ctx.beginPath();
      path(c);
      if (c.id === active) ctx.fillStyle = 'rgba(217, 138, 108, 0.95)';
      else if (litSet.has(c.id)) ctx.fillStyle = 'rgba(201, 162, 75, 0.7)';
      else ctx.fillStyle = 'rgba(246, 241, 231, 0.08)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(227, 201, 135, 0.28)';
      ctx.lineWidth = 0.5 * dpr;
      ctx.stroke();
    });

    // a point of light on each lit country, so the small ones can be found
    const pulse = 0.5 + 0.5 * Math.sin(now / 700);
    lit.forEach((id) => {
      const c = centres.get(id);
      // skip points on the far side
      const [lon, lat] = c;
      const l = ((lon + rot[0]) * Math.PI) / 180;
      const f = (lat * Math.PI) / 180;
      const f0 = (-rot[1] * Math.PI) / 180;
      if (Math.sin(f0) * Math.sin(f) + Math.cos(f0) * Math.cos(f) * Math.cos(l) < 0.05) return;
      const [x, y] = projection(c);
      const on = id === active;
      ctx.beginPath();
      ctx.arc(x, y, (on ? 4.5 : 2.6) * dpr, 0, Math.PI * 2);
      ctx.fillStyle = on ? '#f6f1e7' : '#e3c987';
      ctx.fill();
      if (on) {
        ctx.beginPath();
        ctx.arc(x, y, (9 + pulse * 9) * dpr, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(246, 241, 231, ${(0.7 - pulse * 0.6).toFixed(2)})`;
        ctx.lineWidth = 1.2 * dpr;
        ctx.stroke();
      }
    });
    requestAnimationFrame(draw);
  };

  const flyTo = (id) => {
    if (!centres.has(id)) return;
    active = id;
    const to = centres.get(id);
    if (reduce) {
      rot = [-to[0], -to[1], 0];
      return;
    }
    fly = { start: performance.now(), dur: 1800, at: geoInterpolate([-rot[0], -rot[1]], to) };
  };

  const onPick = (e) => flyTo(e.detail);
  const down = (e) => {
    dragging = true;
    moved = 0;
    last = [e.clientX, e.clientY];
    fly = null;
  };
  const move = (e) => {
    if (!dragging) return;
    const dx = e.clientX - last[0];
    const dy = e.clientY - last[1];
    moved += Math.abs(dx) + Math.abs(dy);
    last = [e.clientX, e.clientY];
    rot = [rot[0] + dx * 0.35, Math.max(-70, Math.min(70, rot[1] - dy * 0.35)), 0];
  };
  const up = (e) => {
    if (!dragging) return;
    dragging = false;
    if (moved > 6) return;
    // a tap: which lit country is under the finger?
    const box = canvas.getBoundingClientRect();
    const k = size / box.width;
    const spot = projection.invert([(e.clientX - box.left) * k, (e.clientY - box.top) * k]);
    if (!spot) return;
    let hit = lit.find((id) => geoContains(byId.get(id), spot));
    if (!hit) {
      // small countries: accept a near miss
      let best = 6;
      lit.forEach((id) => {
        const c = centres.get(id);
        const d = Math.hypot(c[0] - spot[0], c[1] - spot[1]);
        if (d < best) {
          best = d;
          hit = id;
        }
      });
    }
    if (hit) group.querySelector(`[data-pick="${hit}"]`)?.click();
  };

  group.addEventListener('pick', onPick);
  canvas.addEventListener('pointerdown', down);
  window.addEventListener('pointermove', move, { passive: true });
  window.addEventListener('pointerup', up);
  fit();
  requestAnimationFrame(draw);

  return () => {
    alive = false;
    group.removeEventListener('pick', onPick);
    canvas.removeEventListener('pointerdown', down);
    window.removeEventListener('pointermove', move);
    window.removeEventListener('pointerup', up);
  };
}
