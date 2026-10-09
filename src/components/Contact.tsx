import Reveal from "./Reveal";
import MagneticButton from "./MagneticButton";

const checklist = [
  "Description of your VFX request",
  "References and videos",
  "Your deadline",
  "Payment method",
];

export default function Contact() {
  return (
    <section id="contact" className="py-[150px]">
      <div className="max-w-[1180px] mx-auto px-8">
        <Reveal>
          <div className="relative border border-line p-[70px] overflow-hidden">
            <div className="pointer-events-none absolute -top-[100px] -right-[100px] w-[400px] h-[400px] bg-maroon opacity-[0.14] blur-[120px]" />
            <h2 className="relative text-[clamp(1.9rem,3.4vw,2.6rem)] max-w-[560px]">
              Get in touch to discuss your project.
            </h2>
            <p className="relative mt-4 max-w-[480px] text-muted">
              Please include all necessary information in your first message.
            </p>
            <div className="relative mt-9 flex flex-col gap-3.5">
              {checklist.map((c) => (
                <div key={c} className="flex items-center gap-3 text-muted">
                  <span className="text-maroon-bright text-sm">✓</span>
                  {c}
                </div>
              ))}
            </div>
            <MagneticButton
              href="#"
              variant="primary"
              className="relative mt-10 inline-flex"
            >
              Start a Conversation
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
