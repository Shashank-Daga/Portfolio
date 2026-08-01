export default function About() {
  return (
    <section id="about" className="px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-start">
        <div className="flex flex-col gap-8">
          <div className="inline-flex w-fit items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#E8A33D]">
            About Me
          </div>
          <h2 className="max-w-3xl text-4xl font-extrabold leading-[0.95] tracking-[-0.03em] text-[#F8FAFC] sm:text-5xl lg:text-[3.8rem]">
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

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.16)] backdrop-blur-xl">
              <div className="mb-3 text-2xl">🎯</div>
              <div className="font-semibold text-[#F8FAFC]">Mission</div>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Build scalable, intelligent software that helps organizations make faster, data-driven decisions.
              </p>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.16)] backdrop-blur-xl">
              <div className="mb-3 text-2xl">🚀</div>
              <div className="font-semibold text-[#F8FAFC]">Vision</div>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Become a Data Engineer creating impactful AI-powered systems used by real people.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 rounded-[32px] border border-white/10 bg-[#0B0E12]/70 p-4 shadow-[0_25px_100px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:grid-cols-2">
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
          <div className="rounded-[24px] border border-white/10 bg-white/5 p-6">
            <div className="text-4xl font-semibold text-[#E8A33D] sm:text-5xl">5</div>
            <div className="mt-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#F8FAFC]">Certifications</div>
            <div className="mt-1 text-sm text-slate-400">Coursera · Kaggle · Forage</div>
          </div>
          <div className="rounded-[24px] border border-white/10 bg-white/5 p-6">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-[#E8A33D]">B.Tech · IT</div>
            <div className="mt-3 text-base font-semibold text-[#F8FAFC]">Vishwakarma Institute of Technology</div>
            <div className="mt-2 text-sm text-slate-400">Nov 2022 – June 2026</div>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-300">
              <li>Databases, DSA, Software Engineering, ML</li>
              <li>Multiple AI & analytics projects</li>
            </ul>
          </div>
          <div className="sm:col-span-2 flex items-center gap-3 rounded-[24px] border border-white/10 bg-[#E8A33D]/10 p-6 text-sm text-slate-200">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E8A33D" strokeWidth="1.8" aria-hidden="true">
              <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Pune, India</span>
          </div>
        </div>
      </div>
    </section>
  );
}

