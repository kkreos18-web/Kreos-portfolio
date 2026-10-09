import Reveal from "./Reveal";

const stats: [string, string][] = [
  ["1+", "Years"],
  ["30+", "Projects"],
  ["100%", "Clients"],
];

export default function About() {
  return (
    <section id="about" className="py-[150px]">
      <div className="max-w-[1180px] mx-auto px-8 grid md:grid-cols-[1.1fr_0.9fr] gap-20 items-start">
        <Reveal>
          <span className="block text-[13px] tracking-[0.25em] uppercase text-maroon-bright mb-4">
            About
          </span>
          <h2 className="text-[clamp(2rem,4vw,2.9rem)] leading-[1.15] mb-7">
            A year of shipping effects players actually notice.
          </h2>
          <p className="text-muted text-lg leading-[1.85] mb-5">
            I&apos;m a Roblox VFX artist with over one year of experience
            creating high-quality visual effects — from aura particles to
            full ability sequences.
          </p>
          <p className="text-muted text-lg leading-[1.85]">
            Every project starts with your references and ends with files
            that drop straight into your game, no rework required.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="grid grid-cols-3 border-t border-line">
            {stats.map(([n, label], i) => (
              <div
                key={label}
                className={`py-7 border-b border-line ${
                  i !== stats.length - 1 ? "border-r" : ""
                }`}
              >
                <h3 className="text-[2.6rem] text-maroon-bright">{n}</h3>
                <span className="text-[11px] tracking-[0.12em] uppercase text-muted-dim">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
