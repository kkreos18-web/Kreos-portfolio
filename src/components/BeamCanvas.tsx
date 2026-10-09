"use client";

import { useEffect, useRef } from "react";

export default function BeamCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0,
      h = 0;
    function resize() {
      w = canvas!.width = canvas!.offsetWidth;
      h = canvas!.height = canvas!.offsetHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    const mouse = { x: -1000, y: -1000 };
    function onMove(e: MouseEvent) {
      const r = canvas!.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    }
    canvas.addEventListener("mousemove", onMove);

    class Particle {
      x = 0;
      y = 0;
      vx = 0;
      vy = 0;
      r = 0;
      alpha = 0;
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.r = Math.random() * 1.6 + 0.4;
        this.alpha = Math.random() * 0.5 + 0.15;
      }
      update() {
        const dx = this.x - mouse.x,
          dy = this.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 160) {
          const f = (160 - dist) / 160;
          this.x += (dx / dist) * f * 2.2;
          this.y += (dy / dist) * f * 2.2;
        }
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > w) this.vx *= -1;
        if (this.y < 0 || this.y > h) this.vy *= -1;
      }
      draw() {
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(242,236,231,${this.alpha})`;
        ctx!.fill();
      }
    }

    class Beam {
      points: { x: number; y: number }[] = [];
      angle = Math.random() * Math.PI * 2;
      x = Math.random() * w;
      y = Math.random() * h;
      speed = 0.6 + Math.random() * 0.5;
      turn = (Math.random() - 0.5) * 0.02;
      update() {
        this.angle += this.turn;
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        if (this.x < -50) this.x = w + 50;
        if (this.x > w + 50) this.x = -50;
        if (this.y < -50) this.y = h + 50;
        if (this.y > h + 50) this.y = -50;
        this.points.push({ x: this.x, y: this.y });
        if (this.points.length > 60) this.points.shift();
      }
      draw() {
        for (let i = 1; i < this.points.length; i++) {
          const p0 = this.points[i - 1],
            p1 = this.points[i];
          const alpha = (i / this.points.length) * 0.5;
          ctx!.beginPath();
          ctx!.moveTo(p0.x, p0.y);
          ctx!.lineTo(p1.x, p1.y);
          ctx!.strokeStyle = `rgba(179,18,63,${alpha})`;
          ctx!.lineWidth = (i / this.points.length) * 2;
          ctx!.stroke();
        }
      }
    }

    const particles = Array.from({ length: 110 }, () => new Particle());
    const beams = Array.from({ length: 4 }, () => new Beam());

    let raf = 0;
    function loop() {
      ctx!.clearRect(0, 0, w, h);
      beams.forEach((b) => {
        b.update();
        b.draw();
      });
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      raf = requestAnimationFrame(loop);
    }
    loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}
