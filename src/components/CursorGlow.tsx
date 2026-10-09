"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let gx = 0,
      gy = 0,
      cx = 0,
      cy = 0,
      raf = 0;

    function onMove(e: MouseEvent) {
      gx = e.clientX;
      gy = e.clientY;
      el!.style.opacity = "0.9";
    }

    // Delegated so it keeps working for elements added/removed later
    // (e.g. project cards that come and go with the portfolio filter).
    function onOver(e: MouseEvent) {
      const hovering = (e.target as HTMLElement)?.closest("a, button");
      el!.classList.toggle("scale-[2.3]", !!hovering);
      el!.classList.toggle("bg-maroon-bright/10", !!hovering);
    }

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);

    function loop() {
      cx += (gx - cx) * 0.18;
      cy += (gy - cy) * 0.18;
      if (el) {
        el.style.left = cx + "px";
        el.style.top = cy + "px";
      }
      raf = requestAnimationFrame(loop);
    }
    loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="hidden md:block fixed w-[22px] h-[22px] rounded-full border border-maroon-bright pointer-events-none z-[300] -translate-x-1/2 -translate-y-1/2 opacity-0 transition-[opacity,transform,background-color] duration-300 mix-blend-screen"
    />
  );
}
