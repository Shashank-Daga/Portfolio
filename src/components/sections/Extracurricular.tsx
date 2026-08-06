import { Container } from "@/components/ui/Container";

export default function Extracurricular() {
  return (
    <section id="achievements" className="px-6 py-24 sm:px-8 lg:px-10">
      <Container>
        <div className="mb-12 flex flex-col gap-3">
          <div className="inline-flex w-fit items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#E8A33D]">
            Extracurricular Activities & Awards
          </div>
          <h2 className="text-4xl font-extrabold tracking-[-0.03em] text-[#F8FAFC] sm:text-5xl">
            Beyond the <span className="text-[#E8A33D]">classroom.</span>
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">Awards</div>
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.16)] backdrop-blur-xl" id="ach-1">
              <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[#E8A33D]">2025</div>
              <div className="mt-3 text-3xl">🏅</div>
              <h3 className="mt-3 text-xl font-semibold text-[#F8FAFC]">Letter of Appreciation</h3>
              <p className="mt-2 text-sm text-slate-400">Vishwakarma Institute of Technology</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">Received recognition for coordinating college events while serving as Database Secretary.</p>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.16)] backdrop-blur-xl" id="ach-2">
              <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[#E8A33D]">2020</div>
              <div className="mt-3 text-3xl">⭐</div>
              <h3 className="mt-3 text-xl font-semibold text-[#F8FAFC]">Best Student Award</h3>
              <p className="mt-2 text-sm text-slate-400">Academic Excellence</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">Awarded for excellence in academics and extracurricular activities.</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">Leadership</div>
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.16)] backdrop-blur-xl" id="lead-1">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-[#F8FAFC]">Database Secretary</h3>
                  <p className="mt-2 text-sm text-slate-400">Event Planning & Execution Committee, VIT Pune</p>
                </div>
                <div className="text-sm text-[#E8A33D]">Aug 2024 – May 2025</div>
              </div>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-300">
                <li>Managed end-to-end database operations for college events</li>
                <li>Coordinated reporting and cross-functional activities</li>
                <li>Ensured efficient execution of multiple large-scale events</li>
              </ul>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.16)] backdrop-blur-xl" id="lead-2">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-[#F8FAFC]">EDAI Management Head</h3>
                  <p className="mt-2 text-sm text-slate-400">The Catalyst, VIT Pune</p>
                </div>
                <div className="text-sm text-[#E8A33D]">Aug 2024 – May 2025</div>
              </div>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-300">
                <li>Mentored first-year students in technical domains</li>
                <li>Coordinated project support across teams</li>
                <li>Collaborated with faculty and student committees</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
