// Server Component — no "use client", renders fully on the server with zero JS.
// The "View Details" links use plain ?project=slug hrefs so they degrade
// gracefully when JS is disabled. ProjectInteractions handles the modal when
// JS is available.

import { Container } from "@/components/ui/Container";
import { projects, statusStyles } from "@/lib/project-data";
import { ProjectInteractions } from "./ProjectInteractions";

export default function Project() {
  return (
    <section id="projects" className="px-6 py-24 sm:px-8 lg:px-10 bg-[#0F1318]">

      <Container className="grid gap-16">

        <div className="flex flex-col gap-3">

          <div className="inline-flex w-fit items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#E8A33D]">
            <span className="h-px w-8 bg-[#E8A33D]" />
            Featured Work
          </div>

          <div className="max-w-3xl">
            <h2 className="text-4xl font-extrabold tracking-[-0.03em] text-[#F8FAFC] sm:text-5xl">
              From problems to <span className="text-[#E8A33D]">production</span>
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              A selection of systems I&apos;ve designed and built to solve real-world problems.
            </p>
          </div>

        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.slug}
              className="group flex h-full flex-col justify-between rounded-[24px] border border-white/10 bg-white/5 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.2)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-[#E8A33D]/40"
            >
              <div className="flex items-start justify-between gap-4">

                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.32em] text-[#E8A33D]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold text-[#F8FAFC]">{project.title}</h3>
                </div>

                <span className={`rounded-lg border px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] ${statusStyles[project.status]}`}>
                  {project.statusLabel}
                </span>
              </div>

              <div className="mt-6 space-y-6 text-sm leading-7 text-slate-300">

                <div>
                  <span className="font-semibold text-slate-100">Problem —</span> {project.problem}
                </div>
                {/* <div>
                  <span className="font-semibold text-slate-100">Impact —</span> {project.impact}
                </div> */}

              </div>

              <div className="mt-8 flex flex-col gap-4">

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-[12px] border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between gap-3">
                  {/* Plain <a> link — works without JS; modal picks it up when JS is on */}
                  <a
                    href={`?project=${project.slug}#projects`}
                    className="inline-flex items-center justify-center rounded-[12px] border border-white/15 bg-white/5 px-5 py-2 text-sm font-semibold text-slate-100 transition hover:border-[#E8A33D]/40 hover:text-[#E8A33D]"
                  >
                    View Details
                  </a>

                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-[12px] border border-[#E8A33D]/40 bg-[#E8A33D]/10 px-5 py-2 text-sm font-semibold text-[#E8A33D] transition hover:bg-[#E8A33D]/15"
                    >
                      GitHub
                    </a>
                  ) : (
                    <span className="inline-flex items-center justify-center rounded-[12px] border border-slate-700/80 bg-slate-950/20 px-5 py-2 text-sm text-slate-400">
                      Code available on request
                    </span>
                  )}
                </div>

              </div>
            </article>
          ))}
        </div>

      </Container>

      {/* Client-only: modal + URL-based state. Nothing renders here without JS. */}
      <ProjectInteractions />
    </section>
  );
}
