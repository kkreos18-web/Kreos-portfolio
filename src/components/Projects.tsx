"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";
import { filters, projects, type Category } from "@/lib/data";

export default function Projects() {
  const [active, setActive] = useState<Category>("all");
  const visible =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-[150px]">
      <div className="max-w-[1180px] mx-auto px-8">
        <Reveal className="max-w-[640px] mb-20">
          <span className="block text-[13px] tracking-[0.25em] uppercase text-maroon-bright mb-4">
            Portfolio
          </span>
          <h2 className="text-[clamp(2rem,4vw,2.9rem)] leading-[1.15]">
            Selected work.
          </h2>
        </Reveal>

        <Reveal className="flex flex-wrap gap-2.5 mb-14">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`py-2 px-5 text-xs tracking-wider uppercase rounded-full border transition-colors duration-300 ${
                active === f.value
                  ? "border-maroon-bright text-ivory bg-maroon-bright/10"
                  : "border-line text-muted hover:border-maroon-bright hover:text-ivory hover:bg-maroon-bright/10"
              }`}
            >
              {f.label}
            </button>
          ))}
        </Reveal>

        <div className="grid md:grid-cols-2 gap-px bg-line">
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <motion.a
                key={p.id}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative bg-panel py-11 px-9 overflow-hidden cursor-pointer hover:bg-[#221818] transition-colors duration-500"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_30%_20%,rgba(179,18,63,0.35),transparent_60%)]" />
                <span className="relative block text-xs tracking-[0.12em] uppercase text-maroon-bright">
                  {p.tag}
                </span>
                <h3 className="relative text-2xl font-semibold my-3.5">
                  {p.title}
                </h3>
                <p className="relative text-muted text-[15px] leading-relaxed max-w-[340px]">
                  {p.description}
                </p>
                <span className="relative inline-flex items-center gap-2 mt-5 text-xs tracking-wider uppercase">
                  Watch
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
                    →
                  </span>
                </span>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
