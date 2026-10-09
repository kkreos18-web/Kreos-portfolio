import BeamCanvas from "./BeamCanvas";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <BeamCanvas />
      <div className="relative z-[2] w-full max-w-[1180px] mx-auto px-8">
        <div className="flex items-center gap-3 text-[13px] tracking-[0.25em] uppercase text-maroon-bright mb-6 opacity-0 animate-[fadeUp_0.9s_0.2s_forwards]">
          <span className="w-[26px] h-px bg-maroon-bright" />
          Roblox VFX Artist
        </div>
        <h1 className="text-[clamp(3rem,8vw,6.4rem)] leading-[1.02] opacity-0 animate-[fadeUp_1s_0.35s_forwards]">
          Beams, trails &amp;
          <br />
          <em className="not-italic text-maroon-bright">particle</em> systems.
        </h1>
        <p className="mt-6 max-w-[520px] text-muted text-lg leading-[1.7] opacity-0 animate-[fadeUp_1s_0.55s_forwards]">
          I&apos;m Kreos — I build high-quality, game-ready visual effects for
          Roblox. One year in, thirty-plus projects delivered, clients kept
          happy.
        </p>
        <div className="flex gap-4 mt-11 opacity-0 animate-[fadeUp_1s_0.75s_forwards]">
          <MagneticButton href="#projects" variant="primary">
            View Projects
          </MagneticButton>
          <MagneticButton href="#contact" variant="ghost">
            Contact Me
          </MagneticButton>
        </div>
      </div>
      <div className="absolute bottom-14 left-8 right-8 z-[2] flex justify-between flex-wrap gap-3.5 text-[11px] tracking-[0.14em] uppercase text-muted-dim opacity-0 animate-[fadeUp_1s_1s_forwards]">
        <span>Beam Effects</span>
        <span>Trail Systems</span>
        <span>Particle Systems</span>
        <span>Visual Design</span>
      </div>
    </section>
  );
}
