"use client";

import type Lenis from "lenis";

export default function Footer() {
  function scrollTop() {
    (window as unknown as { lenis?: Lenis }).lenis?.scrollTo(0, {
      duration: 1.3,
    });
  }

  return (
    <footer className="border-t border-line py-11">
      <div className="max-w-[1180px] mx-auto px-8 flex justify-between items-center flex-wrap gap-5">
        <div className="font-display font-semibold text-lg">Kreos</div>
        <div className="flex gap-7 text-sm text-muted">
          <a href="#about">About</a>
          <a href="#process">Process</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <button
          onClick={scrollTop}
          aria-label="Back to top"
          className="border border-line rounded-full w-10 h-10 flex items-center justify-center hover:border-maroon-bright hover:-translate-y-0.5 transition-all duration-300"
        >
          ↑
        </button>
      </div>
    </footer>
  );
}
