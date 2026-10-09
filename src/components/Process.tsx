import Reveal from "./Reveal";

const steps = [
  {
    n: 1,
    title: "Client Details",
    body: "Send references, videos, images, and explain the VFX you want.",
  },
  {
    n: 2,
    title: "Progress Updates",
    body: "I create the VFX and send progress updates step by step.",
  },
  {
    n: 3,
    title: "Final Approval",
    body: "You review the VFX and request any final changes.",
  },
  {
    n: 4,
    title: "Payment & Delivery",
    body: "Once satisfied, payment is made and files are delivered.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-[150px]">
      <div className="max-w-[1180px] mx-auto px-8">
        <Reveal className="max-w-[640px] mb-20">
          <span className="block text-[13px] tracking-[0.25em] uppercase text-maroon-bright mb-4">
            Process
          </span>
          <h2 className="text-[clamp(2rem,4vw,2.9rem)] leading-[1.15]">
            Fast, transparent &amp; client-focused.
          </h2>
        </Reveal>

        <Reveal>
          <div className="border-l border-line ml-3.5">
            {steps.map((s, i) => (
              <div
                key={s.n}
                className={`relative pl-12 ${
                  i !== steps.length - 1 ? "pb-16" : ""
                }`}
              >
                <div className="absolute -left-[15px] top-0 w-7 h-7 rounded-full bg-void border border-maroon-bright flex items-center justify-center text-[11px] font-display text-maroon-bright">
                  {s.n}
                </div>
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-muted max-w-[460px] leading-[1.7]">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
