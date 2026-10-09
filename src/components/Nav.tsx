"use client";

import { useEffect, useState } from "react";
import MagneticButton from "./MagneticButton";

const links = [
  { href: "#about", label: "About" },
  { href: "#process", label: "Process" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll(e: Event) {
      const { scroll } = (e as CustomEvent<{ scroll: number }>).detail;
      setScrolled(scroll > 40);
    }
    window.addEventListener("lenis-scroll", onScroll);
    return () => window.removeEventListener("lenis-scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between backdrop-blur-md transition-all duration-500 ease-out ${
          scrolled
            ? "py-3.5 px-6 md:px-10 bg-void/70 border-b border-line"
            : "py-5 px-6 md:px-10 bg-gradient-to-b from-void/85 to-transparent border-b border-transparent"
        }`}
      >
        <a href="#" className="font-display font-semibold text-xl tracking-tight">
          Kreos
        </a>

        <div className="hidden md:flex gap-9 text-[13px] tracking-wider uppercase text-muted">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative group hover:text-ivory transition-colors duration-300"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 w-0 h-px bg-maroon-bright transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <MagneticButton
          href="#contact"
          variant="ghost"
          className="hidden md:inline-flex py-2.5 px-5"
        >
          Contact
        </MagneticButton>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="md:hidden flex flex-col gap-[5px] p-1.5 z-[110]"
        >
          <span
            className={`w-[22px] h-px bg-ivory transition-transform duration-300 ${
              open ? "translate-y-[6px] rotate-45" : ""
            }`}
          />
          <span
            className={`w-[22px] h-px bg-ivory transition-opacity duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-[22px] h-px bg-ivory transition-transform duration-300 ${
              open ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-[105] bg-void flex flex-col items-center justify-center gap-9 transition-all duration-500 md:hidden ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="font-display text-3xl"
          >
            {l.label}
          </a>
        ))}
      </div>
    </>
  );
}
