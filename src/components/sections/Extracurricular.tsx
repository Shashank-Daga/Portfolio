import { Container } from "@/components/ui/Container";

const roles = [
  {
    number: "01",
    title: "Database Secretary",
    organization: "Event Planning & Execution Committee · VIT Pune",
    period: "Aug 2024 — May 2025",
    description:
      "Managed database operations and supported the coordination and execution of large-scale college events.",
    tags: ["Leadership", "Data Management", "Coordination"],
  },
  {
    number: "02",
    title: "EDAI Management Head",
    organization: "The Catalyst · VIT Pune",
    period: "Aug 2024 — May 2025",
    description:
      "Mentored first-year students in technical domains while coordinating project support and collaborating with student teams.",
    tags: ["Mentorship", "Leadership", "Technical Guidance"],
  },
];

const awards = [
  {
    year: "2025",
    title: "Letter of Appreciation",
    organization: "Vishwakarma Institute of Technology",
    description:
      "Recognized for coordinating college events while serving as Database Secretary.",
    icon: "✦",
  },
  // {
  //   year: "2020",
  //   title: "Best Student Award",
  //   organization: "Academic Excellence",
  //   description:
  //     "Awarded for excellence in academics and extracurricular activities.",
  //   icon: "★",
  // },
];

export default function Extracurricular() {
  return (
    <section
      id="achievements"
      className="relative overflow-hidden bg-[#0C0F12] px-6 py-24 sm:px-8 lg:px-10"
    >
      {/* Subtle background glow */}
      {/* <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#E8A33D]/5 blur-3xl" /> */}

      <Container>
        {/* Header */}
        <div className="relative mb-16 max-w-3xl">
          <div className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#E8A33D]">
            <span className="h-px w-8 bg-[#E8A33D]" />
            Beyond the classroom
          </div>

          <h2 className="text-4xl font-extrabold tracking-[-0.04em] text-[#F8FAFC] sm:text-5xl lg:text-6xl">
            Leadership &{" "}
            <span className="text-[#E8A33D]">recognition</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">
            Experiences that shaped my ability to lead, mentor, collaborate,
            and take responsibility beyond academics.
          </p>
        </div>

        {/* Leadership */}
        <div>
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
              Leadership
            </h3>

            <span className="text-xs text-slate-600">01 — 02</span>
          </div>

          <div className="space-y-4">
            {roles.map((role) => (
              <article
                key={role.number}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.035] p-6 transition-all duration-300 hover:border-[#E8A33D]/30 hover:bg-white/[0.055] sm:p-8"
              >
                {/* Number */}
                <div className="absolute right-6 top-5 text-5xl font-black tracking-[-0.08em] text-white/[0.035] transition-colors duration-300 group-hover:text-[#E8A33D]/10 sm:right-8 sm:text-6xl">
                  {role.number}
                </div>

                <div className="relative grid gap-6 lg:grid-cols-[180px_1fr_auto] lg:items-start">
                  {/* Role number / category */}
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#E8A33D]">
                      Role
                    </span>
                    <div className="mt-2 h-px w-10 bg-[#E8A33D]/40" />
                  </div>

                  {/* Main content */}
                  <div>
                    <h4 className="text-2xl font-semibold tracking-tight text-[#F8FAFC] sm:text-3xl">
                      {role.title}
                    </h4>

                    <p className="mt-2 text-sm text-slate-400">
                      {role.organization}
                    </p>

                    <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
                      {role.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {role.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1 text-xs text-slate-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Date */}
                  <div className="text-left lg:text-right">
                    <span className="text-xs font-medium uppercase tracking-[0.15em] text-slate-500">
                      {role.period}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Awards */}
        <div className="mt-16">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
              Recognition
            </h3>

            <span className="text-xs text-slate-600">Awards & achievements</span>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {awards.map((award) => (
              <article
                key={award.title}
                className="group rounded-[24px] border border-white/10 bg-white/[0.025] p-6 transition-all duration-300 hover:border-[#E8A33D]/25 hover:bg-white/[0.045]"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#E8A33D]">
                    {award.year}
                  </span>

                  <span className="text-lg text-[#E8A33D]/70 transition-transform duration-300 group-hover:scale-110">
                    {award.icon}
                  </span>
                </div>

                <h4 className="mt-6 text-xl font-semibold text-[#F8FAFC]">
                  {award.title}
                </h4>

                <p className="mt-2 text-sm text-slate-500">
                  {award.organization}
                </p>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {award.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
