import Image from "next/image";
import { Container } from "@/components/ui/Container";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden px-6 pt-24 pb-24 sm:px-8 lg:px-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_top,_rgba(232,163,61,0.16),_transparent_35%)] opacity-90" />
      <div className="pointer-events-none absolute -left-20 top-20 h-[280px] w-[280px] rounded-full bg-[#E8A33D]/10 blur-3xl" />
      <Container className="flex flex-col gap-16 lg:flex-row lg:items-center">
        <div className="relative z-10 flex-1">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-[#E8A33D] shadow-[0_16px_60px_rgba(232,163,61,0.12)] backdrop-blur-xl">
            <span className="inline-flex h-2.5 w-2.5 rounded-sm bg-[#E8A33D]" />
            Open to opportunities
          </div>

          <div className="mt-8 max-w-[720px]">
            <h1 className="text-[4.8rem] leading-[0.92] tracking-[-0.08em] font-extrabold text-[#F8FAFC] sm:text-[5.8rem] lg:text-[6.4rem]">
              Shashank <br /> Daga<span className="text-[#E8A33D]">.</span>
            </h1>
            <p className="mt-4 inline-flex rounded-sm bg-white/5 px-5 py-2 text-sm uppercase tracking-[0.28em] text-[#E8A33D] shadow-[0_16px_55px_rgba(232,163,61,0.12)]">
              Backend Developer
            </p>

            <p className="mt-10 text-[1.03rem] leading-[1.9] text-[#CAD4E6] sm:text-lg">
              I build <span className="font-semibold text-[#F8FAFC]">scalable data-driven applications</span> and intelligent software systems — turning complex data into actionable, production-ready solutions with measurable impact.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-sm bg-[#E8A33D] px-8 py-4 text-sm font-semibold text-[#0B0E12] transition duration-200 hover:-translate-y-0.5 hover:bg-[#ffb347]"
              >
                Explore Work
                <span className="ml-2">→</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-sm border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-[#F8FAFC] transition duration-200 hover:-translate-y-0.5 hover:border-[#E8A33D] hover:text-[#E8A33D]"
              >
                Get In Touch
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-5 text-sm text-[#90A3BB]">
              <a href="https://github.com/Shashank-Daga" target="_blank" rel="noreferrer" className="transition hover:text-[#E8A33D]">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/shashank-daga-635466270/" target="_blank" rel="noreferrer" className="transition hover:text-[#E8A33D]">
                LinkedIn
              </a>
              <a href="mailto:shashankdaga2510@gmail.com" className="transition hover:text-[#E8A33D]">
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="relative flex-1">
          <div className="relative mx-auto h-[380px] w-[380px] max-w-full rounded-full border border-white/10 bg-[#0D1115]/80 p-4 shadow-[0_35px_120px_rgba(0,0,0,0.35)] sm:h-[440px] sm:w-[440px] lg:h-[520px] lg:w-[520px]">
            <div className="absolute inset-0 rounded-full border border-dashed border-white/10" />
            <div className="absolute -inset-10 rounded-full border border-dashed border-[#E8A33D]/35" />
            <div className="absolute -inset-20 rounded-full border border-dashed border-white/10 opacity-60" />

            <div className="relative h-full w-full overflow-hidden rounded-full bg-[#0B0E12]">
              <Image
                src="/SD.jpg"
                alt="Shashank Daga portrait"
                fill
                priority
                sizes="(max-width: 768px) 320px, 520px"
                className="object-cover"
              />
            </div>

            {/* <div className="absolute left-4 top-4 flex items-center gap-3 rounded-full border border-white/10 bg-[#0F141A]/95 px-3 py-2 text-xs text-[#D0DAE9] backdrop-blur-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-[#E8A33D]" />
              8.79 CGPA
            </div>

            <div className="absolute right-4 top-20 flex items-center gap-3 rounded-full border border-white/10 bg-[#0F141A]/95 px-3 py-2 text-xs text-[#D0DAE9] backdrop-blur-sm">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#F8FAFC]" />
              3 Projects
            </div>

            <div className="absolute left-6 bottom-16 flex items-center gap-2 rounded-full border border-white/10 bg-[#0F141A]/95 px-4 py-3 text-xs text-[#D0DAE9] backdrop-blur-sm">
              <span className="text-[#E8A33D]">📍</span>
              Pune, India
            </div>

            <div className="absolute right-4 bottom-8 flex items-center gap-3 rounded-full border border-white/10 bg-[#0F141A]/95 px-3 py-2 text-xs text-[#D0DAE9] backdrop-blur-sm">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#E8A33D]" />
              99% Fraud Detection
            </div> */}
          </div>
        </div>
      </Container>

      {/* <div className="hero-scroll-cue" aria-hidden="true">
        <div className="scroll-mouse">
          <div className="mouse-wheel" />
        </div>
      </div> */}
    </section>
  );
}
