import { useEffect, useRef } from "react";

// ─── CONFIG ────────────────────────────────────────────────────────────────
// All visual parameters live here — change freely without touching the logic.
const CONFIG = {
  // Particles
  PARTICLE_COUNT: 100,          // number of floating dots
  PARTICLE_SIZE: 1.8,          // dot radius in px
  PARTICLE_SPEED: 0.3,         // base drift speed multiplier
  PARTICLE_OPACITY: 0.7,       // base dot opacity  (0–1)

  // Connection lines
  LINE_DIST: 120,              // max px distance to draw a connecting line
  LINE_OPACITY_MAX: 0.35,      // opacity of the closest connections (0–1)
  LINE_WIDTH: 0.7,             // stroke width in px

  // Mouse interaction
  MOUSE_RADIUS: 100,          // repulsion bubble radius in px
  MOUSE_REPEL_FORCE: 3.5,      // how strongly dots flee the cursor
  MOUSE_DAMPING: 0.88,         // how quickly the repulsion fades (0–1)
  MOUSE_CURSOR_DOT_SIZE: 3.5,  // the custom cursor dot radius in px
  MOUSE_RING_OPACITY: 0.08,    // opacity of the subtle ring around the cursor

  // Colors  (CSS color strings — supports rgba / hex / hsl)
  // Set to null to auto-detect from prefers-color-scheme
  PARTICLE_COLOR_LIGHT: "rgba(20, 20, 20,",   // prefix, alpha appended at runtime
  PARTICLE_COLOR_DARK: "rgba(255, 255, 255,",
  LINE_COLOR_LIGHT: "rgba(20, 20, 20,",
  LINE_COLOR_DARK: "rgba(255, 255, 255,",

  // Canvas
  CANVAS_STYLE: {              // any valid React inline-style object
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "auto",     // set to "auto" if you want mouse events on canvas only
  },
};
// ───────────────────────────────────────────────────────────────────────────

function getColors() {
  const dark =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  return {
    particle: dark ? CONFIG.PARTICLE_COLOR_DARK : CONFIG.PARTICLE_COLOR_LIGHT,
    line: dark ? CONFIG.LINE_COLOR_DARK : CONFIG.LINE_COLOR_LIGHT,
  };
}

export default function Dots({ style = {}, className = "" }) {
  const canvasRef = useRef(null);
  const stateRef = useRef({ particles: [], mouse: { x: -9999, y: -9999 }, raf: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const state = stateRef.current;

    // ── helpers ──────────────────────────────────────────────────────────
    function logicalSize() {
      const rect = canvas.getBoundingClientRect();
      return { w: rect.width, h: rect.height };
    }

    function resize() {
      const { w, h } = logicalSize();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initParticles(w, h);
    }

    function initParticles(w, h) {
      state.particles = Array.from({ length: CONFIG.PARTICLE_COUNT }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * CONFIG.PARTICLE_SPEED,
        vy: (Math.random() - 0.5) * CONFIG.PARTICLE_SPEED,
        ox: 0,
        oy: 0,
      }));
    }

    // ── draw loop ─────────────────────────────────────────────────────────
    function frame() {
      const { w, h } = logicalSize();
      const { particle: pc, line: lc } = getColors();
      const { particles, mouse } = state;

      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // mouse repulsion
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONFIG.MOUSE_RADIUS && dist > 0) {
          const force = (1 - dist / CONFIG.MOUSE_RADIUS) * CONFIG.MOUSE_REPEL_FORCE;
          p.ox -= (dx / dist) * force;
          p.oy -= (dy / dist) * force;
        }
        p.ox *= CONFIG.MOUSE_DAMPING;
        p.oy *= CONFIG.MOUSE_DAMPING;

        // move
        p.x += p.vx + p.ox;
        p.y += p.vy + p.oy;

        // wrap edges
        if (p.x < 0) p.x = w;
        else if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        else if (p.y > h) p.y = 0;

        // draw dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, CONFIG.PARTICLE_SIZE, 0, Math.PI * 2);
        ctx.fillStyle = `${pc}${CONFIG.PARTICLE_OPACITY})`;
        ctx.fill();

        // draw connecting lines
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const ex = p.x - q.x;
          const ey = p.y - q.y;
          const ed = Math.sqrt(ex * ex + ey * ey);
          if (ed < CONFIG.LINE_DIST) {
            const alpha = (1 - ed / CONFIG.LINE_DIST) * CONFIG.LINE_OPACITY_MAX;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `${lc}${alpha})`;
            ctx.lineWidth = CONFIG.LINE_WIDTH;
            ctx.stroke();
          }
        }
      }

      // custom cursor
      const mx = mouse.x, my = mouse.y;
      if (mx > -1000) {
        ctx.beginPath();
        ctx.arc(mx, my, CONFIG.MOUSE_CURSOR_DOT_SIZE, 0, Math.PI * 2);
        ctx.fillStyle = `${pc}0.9)`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(mx, my, CONFIG.MOUSE_RADIUS, 0, Math.PI * 2);
        ctx.strokeStyle = `${lc}${CONFIG.MOUSE_RING_OPACITY})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      state.raf = requestAnimationFrame(frame);
    }

    // ── event listeners ───────────────────────────────────────────────────
    function onMouseMove(e) {
      const rect = canvas.getBoundingClientRect();
      state.mouse.x = e.clientX - rect.left;
      state.mouse.y = e.clientY - rect.top;
    }
    // function onMouseLeave() {
    //   state.mouse.x = -9999;
    //   state.mouse.y = -9999;
    // }

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", resize);

    resize();
    state.raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(state.raf);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ ...CONFIG.CANVAS_STYLE, ...style }}
      aria-hidden="true"
    />
  );
}