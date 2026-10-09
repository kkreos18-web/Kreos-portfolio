"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Global smooth-scroll driver.
 *
 * The original bug ("Lenis is not defined") happened because Lenis was
 * loaded from a <script src="..."> CDN tag and referenced as a global —
 * if that tag hadn't finished loading yet (or wasn't present at all in
 * the render that ran the inline script), `Lenis` didn't exist yet.
 *
 * The fix: import Lenis as a real ES module from the npm package, and
 * only ever instantiate it inside a `useEffect` in a "use client"
 * component. useEffect only runs in the browser after mount, so this
 * never executes during SSR or the Next.js build — there's no
 * `window`/`document` access at build time, and no dependency on
 * external script load order.
 */
export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
    });

    // Expose the instance so other client components (footer back-to-top
    // button, etc.) can call lenis.scrollTo(...) without prop drilling.
    (window as unknown as { lenis?: Lenis }).lenis = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Broadcast scroll position so Nav / ScrollProgress can react without
    // each of them creating their own Lenis instance.
    lenis.on("scroll", ({ scroll, limit }: { scroll: number; limit: number }) => {
      window.dispatchEvent(
        new CustomEvent("lenis-scroll", { detail: { scroll, limit } })
      );
    });

    // Smooth-scroll any in-page anchor link (`href="#section"`).
    function handleClick(e: MouseEvent) {
      const target = (e.target as HTMLElement)?.closest('a[href^="#"]');
      if (!target) return;
      const href = target.getAttribute("href");
      if (!href || href === "#") return;
      const el = document.querySelector(href);
      if (el) {
        e.preventDefault();
        lenis.scrollTo(el as HTMLElement, { offset: -10, duration: 1.3 });
      }
    }
    document.addEventListener("click", handleClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", handleClick);
      lenis.destroy();
      (window as unknown as { lenis?: Lenis }).lenis = undefined;
    };
  }, []);

  return null;
}
