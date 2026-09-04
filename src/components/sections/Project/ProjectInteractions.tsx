"use client";

import { Suspense } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { projects } from "@/lib/project-data";
import { ProjectModal } from "./ProjectModal";

function ModalController() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const activeSlug = searchParams.get("project");
  const activeProject = projects.find((p) => p.slug === activeSlug) ?? null;

  const closeProject = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("project");
    const query = params.toString();
    router.push(`${pathname}${query ? `?${query}` : ""}#projects`, {
      scroll: false,
    });
  };

  return <ProjectModal project={activeProject} onClose={closeProject} />;
}

/**
 * Drop this anywhere inside (or after) the Projects section.
 * It is fully client-side and renders nothing visible until a project is opened.
 * The static grid in Project.tsx uses plain <a href="?project=slug"> links
 * that work without JS, and this component handles the modal when JS is available.
 */
export function ProjectInteractions() {
  return (
    <Suspense fallback={null}>
      <ModalController />
    </Suspense>
  );
}
