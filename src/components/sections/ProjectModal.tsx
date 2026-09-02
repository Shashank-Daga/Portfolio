"use client";

import { Modal } from "@/components/ui/Modal";
import { Project as ProjectType, statusStyles } from "@/lib/project-data";

interface ProjectModalProps {
  project: ProjectType | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <Modal isOpen={!!project} onClose={onClose}>
      {project && (
        <div className="flex flex-col gap-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span
                className={`inline-block rounded-lg border px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] ${statusStyles[project.status]}`}
              >
                {project.statusLabel}
              </span>
              <h3 className="mt-4 text-3xl font-semibold text-[#F8FAFC]">
                {project.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              aria-label="Close"
              className="shrink-0 rounded-full border border-white/10 bg-white/5 p-2 text-slate-300 transition hover:border-[#E8A33D]/40 hover:text-[#E8A33D]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <p className="text-base leading-7 text-slate-300">{project.summary}</p>

          <div className="space-y-5 text-sm leading-7 text-slate-300">
            <div>
              <span className="font-semibold text-slate-100">Problem — </span>
              {project.problem}
            </div>
            <div>
              <span className="font-semibold text-slate-100">Approach — </span>
              {project.approach}
            </div>
            <div>
              <span className="font-semibold text-slate-100">Impact — </span>
              {project.impact}
            </div>
          </div>

          {project.images && project.images.length > 0 && (
            <div className="grid gap-3 sm:grid-cols-2">
              {project.images.map((src) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={src}
                  src={src}
                  alt={`${project.title} screenshot`}
                  className="rounded-xl border border-white/10 object-cover"
                />
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-2">
            {project.stack.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200"
              >
                {tag}
              </span>
            ))}
          </div>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center justify-center rounded-full border border-[#E8A33D]/40 bg-[#E8A33D]/10 px-5 py-2 text-sm font-semibold text-[#E8A33D] transition hover:bg-[#E8A33D]/15"
            >
              View Code
            </a>
          )}
        </div>
      )}
    </Modal>
  );
}
