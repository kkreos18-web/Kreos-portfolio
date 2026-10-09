"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    function onScroll(e: Event) {
      const { scroll, limit } = (e as CustomEvent<{ scroll: number; limit: number }>).detail;
      setPct(limit > 0 ? (scroll / limit) * 100 : 0);
    }
    window.addEventListener("lenis-scroll", onScroll);
    return () => window.removeEventListener("lenis-scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-[2px] z-[200] bg-gradient-to-r from-maroon to-maroon-bright transition-[width] duration-100 ease-linear"
      style={{ width: `${pct}%` }}
    />
  );
}
