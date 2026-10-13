import { useEffect, useRef } from "react";

const TAU = Math.PI * 2;

export default function ParticleField({ pulse = 0 }) {
  const canvasRef = useRef(null);
  const pulseRef = useRef(0);

  useEffect(() => {
    pulseRef.current = Math.min(pulseRef.current + 1, 3);
  }, [pulse]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let width = 0;
    let height = 0;
    let particles = [];
    let ripples = [];
    let boost = 0;
    let lastScroll = window.scrollY;
    let raf = 0;
    const pointer = { x: -9999, y: -9999, active: false };

    const spawn = () => {
      const count = Math.max(70, Math.min(220, Math.round((width * height) / 9000)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        r: Math.random() * 1.6 + 0.5,
        a: Math.random() * 0.55 + 0.35,
        tw: Math.random() * TAU,
      }));
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      spawn();
    };

    const onMove = (e) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.active = true;
    };
    const onLeave = () => {
      pointer.active = false;
      pointer.x = -9999;
      pointer.y = -9999;
    };
    const onDown = (e) => {
      ripples.push({ x: e.clientX, y: e.clientY, r: 0, life: 1 });
      boost = Math.min(boost + 0.7, 2.4);
    };
    const onScroll = () => {
      const delta = window.scrollY - lastScroll;
      lastScroll = window.scrollY;
      boost = Math.min(boost + Math.abs(delta) * 0.012, 3);
    };

    const step = () => {
      ctx.clearRect(0, 0, width, height);
      boost *= 0.95;
      if (pulseRef.current > 0) pulseRef.current = Math.max(0, pulseRef.current - 0.02);

      for (const p of particles) {
        p.vx += (Math.random() - 0.5) * 0.06;
        p.vy += (Math.random() - 0.5) * 0.06;

        if (pointer.active) {
          const dx = p.x - pointer.x;
          const dy = p.y - pointer.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 26000 && d2 > 0.01) {
            const d = Math.sqrt(d2);
            const force = (1 - d / 162) * 0.9;
            p.vx += (dx / d) * force;
            p.vy += (dy / d) * force;
          }
        }

        for (const rp of ripples) {
          const dx = p.x - rp.x;
          const dy = p.y - rp.y;
          const d = Math.hypot(dx, dy) || 1;
          const edge = Math.abs(d - rp.r);
          if (edge < 42) {
            const force = (1 - edge / 42) * 1.5 * rp.life;
            p.vx += (dx / d) * force;
            p.vy += (dy / d) * force;
          }
        }

        const speed = Math.hypot(p.vx, p.vy);
        const cap = 0.9 + boost * 0.5;
        if (speed > cap) {
          p.vx = (p.vx / speed) * cap;
          p.vy = (p.vy / speed) * cap;
        }

        p.x += p.vx * (1 + boost * 0.3);
        p.y += p.vy * (1 + boost * 0.3);
        p.vx *= 0.985;
        p.vy *= 0.985;
        p.tw += 0.03 + boost * 0.04;

        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        const alpha = Math.min(1, p.a * (0.7 + 0.3 * Math.sin(p.tw)) + pulseRef.current * 0.3);

        ctx.fillStyle = `rgba(255,255,255,${alpha * 0.12})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 3.4, 0, TAU);
        ctx.fill();

        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, TAU);
        ctx.fill();
      }

      ripples = ripples.filter((rp) => rp.life > 0.02);
      for (const rp of ripples) {
        rp.r += 3.2 + boost;
        rp.life *= 0.96;
        ctx.strokeStyle = `rgba(150,190,255,${rp.life * 0.5})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(rp.x, rp.y, rp.r, 0, TAU);
        ctx.stroke();
      }

      raf = requestAnimationFrame(step);
    };

    resize();
    raf = requestAnimationFrame(step);
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerleave", onLeave);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none fixed inset-0 z-0" />;
}