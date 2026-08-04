import { Container } from "@/components/ui/Container";

export default function About() {
  return (
    <section id="about" className="px-6 py-24 sm:px-8 lg:px-10">

      <Container className="grid gap-28 lg:grid-cols-[1.2fr_1.2fr] lg:items-start">

        <div className="flex flex-col gap-8">

          <div className="inline-flex w-fit items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#E8A33D]">
            About Me
          </div>

          <h2 className="max-w-3xl text-4xl font-bold leading-[0.95] tracking-[-0.03em] text-[#F8FAFC] sm:text-5xl lg:text-[3.8rem]">
            Turning data
            <br />
            into <span className="text-[#E8A33D]">decisions.</span>
          </h2>

          <div className="grid max-w-3xl gap-4 text-base leading-8 text-slate-300">
            <p>
              I recently completed my B.Tech in Information Technology from <strong>Vishwakarma Institute of Technology, Pune</strong> with a CGPA of <strong className="text-[#E8A33D]">8.79</strong>. I have a strong foundation across data engineering, backend development, machine learning, and software architecture.
            </p>
            <p>
              I enjoy the full lifecycle — from designing REST APIs and microservices to building AI-powered analytics systems. I write maintainable code, build production-ready systems, and embrace continuous learning.
            </p>
          </div>

        </div>

        {/* <div className="grid gap-10 p-4 mt-8 sm:grid-cols-2 sm:grid-rows-3 items-start"> */}
        <div className="grid gap-x-10 gap-y-4 p-4 mt-8 sm:grid-cols-2 sm:grid-rows-2 items-start">

          <div className="rounded-[24px] border border-white/10 bg-white/5 p-6">
            <div className="text-4xl font-semibold text-[#E8A33D] sm:text-5xl">8.79</div>
            <div className="mt-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#F8FAFC]">CGPA</div>
            <div className="mt-1 text-sm text-slate-400">VIT Pune · IT</div>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-white/5 p-6">
            <div className="text-4xl font-semibold text-[#E8A33D] sm:text-5xl">3</div>
            <div className="mt-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#F8FAFC]">Projects</div>
            <div className="mt-1 text-sm text-slate-400">AI · Data · Backend</div>
          </div>

          {/* <div className="rounded-[24px] border border-white/10 bg-white/5 p-6 sm:col-start-1 sm:row-start-2">
            <div className="text-4xl font-semibold text-[#E8A33D] sm:text-5xl">5</div>
            <div className="mt-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#F8FAFC]">Certifications</div>
            <div className="mt-1 text-sm text-slate-400">Coursera · Kaggle · Forage</div>
          </div> */}

          <div className="rounded-[24px] border border-white/10 bg-white/5 p-6 sm:col-span-2 sm:row-start-2">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-[#E8A33D]">B.Tech · IT</div>
            <div className="mt-3 text-base font-semibold text-[#F8FAFC]">Vishwakarma Institute of Technology</div>
            <div className="mt-2 text-sm text-slate-400">Nov 2022 – June 2026</div>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-300">
              <li>Databases, DSA, Software Engineering, ML</li>
              <li>Multiple AI & analytics projects</li>
            </ul>
          </div>

        </div>

      </Container>

    </section>
  );
}

