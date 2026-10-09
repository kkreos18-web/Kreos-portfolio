import Reveal from "./Reveal";
import { socialLinks } from "@/lib/data";

export default function Links() {
  return (
    <section id="links" className="py-[150px]">
      <div className="max-w-[1180px] mx-auto px-8">
        <Reveal className="max-w-[640px] mb-20">
          <span className="block text-[13px] tracking-[0.25em] uppercase text-maroon-bright mb-4">
            Links
          </span>
          <h2 className="text-[clamp(2rem,4vw,2.9rem)] leading-[1.15]">
            Find me elsewhere.
          </h2>
        </Reveal>

        <Reveal className="flex flex-wrap gap-px bg-line">
          {socialLinks.map((l) => (
            <a
              key={l.platform}
              href={l.href}
              className="flex-1 min-w-[220px] bg-panel py-9 px-9 hover:bg-[#221818] transition-colors duration-300"
            >
              <span className="block text-[11px] tracking-[0.14em] uppercase text-muted-dim mb-2.5">
                {l.platform}
              </span>
              <h3 className="text-xl font-semibold text-maroon-bright">
                {l.handle}
              </h3>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
