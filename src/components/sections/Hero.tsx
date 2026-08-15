import Image from "next/image";
import { Container } from "@/components/ui/Container";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden px-6 pt-14 pb-24 sm:px-8 lg:px-10 bg-[#0B0E12]">

      {/* <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_top,_rgba(232,163,61,0.16),_transparent_35%)] opacity-90" />
      <div className="pointer-events-none absolute -left-20 top-20 h-[280px] w-[280px] rounded-full bg-[#E8A33D]/10 blur-3xl" /> */}

      <Container className="flex flex-col gap-16 lg:flex-row lg:items-center">

        <div className="relative z-10 flex-1">

          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-[#E8A33D] shadow-[0_16px_60px_rgba(232,163,61,0.12)] backdrop-blur-xl">
            <span className="inline-flex h-2.5 w-2.5 rounded-sm bg-[#E8A33D]" />
            Open to opportunities
          </div>

          <div className="mt-8 max-w-[720px]">
            <h1 className="text-[4.8rem] leading-[0.92] tracking-[-0.08em] font-bold text-[#F8FAFC] sm:text-[5.8rem] lg:text-[5.0rem]">
              Shashank <br /> Daga<span className="text-[#E8A33D]">.</span>
            </h1>

            <div className="mt-6 h-8 overflow-hidden">

              <div className="flex flex-col animate-role-slider">
                <span className="h-8 leading-8 text-base font-medium text-[#E8A33D]">
                  Data Engineer
                </span>

                <span className="h-8 leading-8 text-base font-medium text-[#E8A33D]">
                  Backend Developer
                </span>

                <span className="h-8 leading-8 text-base font-medium text-[#E8A33D]">
                  Full Stack Developer
                </span>

                <span className="h-8 leading-8 text-base font-medium text-[#E8A33D]">
                  AI/ML Enthusiast
                </span>

                {/* Duplicate first item for smooth looping */}
                <span className="h-8 leading-8 text-base font-medium text-[#E8A33D]">
                  Data Engineer
                </span>
              </div>
              
            </div>

            <p className="mt-5 text-[1.03rem] leading-[1.9] text-[#CAD4E6] sm:text-base">
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

          <div className="relative mx-auto h-[320px] w-[320px] max-w-full rounded-full border border-white/10 bg-[#0D1115]/80 p-4 shadow-[0_35px_120px_rgba(0,0,0,0.35)] sm:h-[380px] sm:w-[380px] lg:h-[450px] lg:w-[450px]">

            {/* <div className="absolute inset-0 rounded-full border border-dashed border-white/10" />
            <div className="absolute -inset-10 rounded-full border border-dashed border-[#E8A33D]/35" />
            <div className="absolute -inset-20 rounded-full border border-dashed border-white/10 opacity-60" /> */}

            <div className="relative h-full w-full overflow-hidden rounded-full bg-[#0B0E12]">
              <Image
                src="/SD.jpg"
                alt="Shashank Daga portrait"
                fill
                priority
                sizes="(max-width: 750px) 320px, 520px"
                className="object-cover"
              />
            </div>

          </div>

        </div>

        <div
          aria-hidden="true"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in delay-[1200ms] hidden md:block"
        >
          <div className="flex h-9 w-6 justify-center rounded-full border border-[#90A3BB] pt-1.5">
            <div className="h-2 w-1 rounded-full bg-[#E8A33D] animate-wheel" />
          </div>
        </div>

      </Container>

    </section>
  );
}
