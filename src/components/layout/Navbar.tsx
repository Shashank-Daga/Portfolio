"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";

const LINKS = [
  { label: "About", href: "#about", dataNav: "about" },
  { label: "Projects", href: "#projects", dataNav: "projects" },
  { label: "Skills", href: "#skills", dataNav: "skills" },
  { label: "Awards", href: "#achievements", dataNav: "achievements" },
  { label: "Contact", href: "#contact", dataNav: "contact" },
];

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const sectionIds = ["hero", ...LINKS.map((link) => link.dataNav)];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((section) => observerRef.current?.observe(section));

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <header id="site-header" className="sticky top-0 z-40 w-full bg-[#0B0E12]/90 backdrop-blur-xl">

      <Container className="flex items-center justify-between gap-6 py-4">

        <a href="#hero" className="inline-flex items-center gap-3" aria-label="Go to top">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#E8A33D] text-sm font-black tracking-[0.08em] text-[#050708]">
            SD
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-[#F8FAFC]">Shashank Daga</span>
            {/* <span className="text-xs text-slate-400">Data Engineer</span> */}
          </div>
        </a>

        <nav aria-label="Primary" className="hidden flex-1 lg:block">
          <ul className="flex items-center justify-center gap-7" role="list">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  data-nav={link.dataNav}
                  aria-current={activeSection === link.dataNav ? "true" : undefined}
                  className={`text-sm transition hover:text-[#E8A33D] ${
                    activeSection === link.dataNav ? "text-[#E8A33D]" : "text-slate-200"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="mailto:shashankdaga2510@gmail.com"
          className="hidden items-center gap-2 rounded-sm bg-[#E8A33D] px-5 py-3 text-sm font-semibold text-[#050708] transition hover:-translate-y-0.5 hover:bg-[#ffb347] md:inline-flex"
        >
          <span>Hire Me</span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>

        <button
          className="inline-flex rounded-full border border-white/10 p-2 text-[#F8FAFC] lg:hidden"
          id="menuToggle"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobileDrawer"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <div className="flex h-5 w-5 flex-col justify-center gap-[5px]">
            <span
              className={`block h-0.5 w-full rounded-full bg-current transition-transform duration-200 ${
                isOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full rounded-full bg-current transition-opacity duration-200 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-full rounded-full bg-current transition-transform duration-200 ${
                isOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>

      </Container>

      <div
        className={`${isOpen ? "block" : "hidden"} border-t border-white/10 bg-[#050708]/95 px-6 py-4 lg:hidden`}
        id="mobileDrawer"
        aria-hidden={!isOpen}
      >
        <ul role="list" className="flex flex-col gap-3">
          {LINKS.map((link) => (
            <li key={`${link.href}-mobile`}>
              <a
                href={link.href}
                data-nav={link.dataNav}
                aria-current={activeSection === link.dataNav ? "true" : undefined}
                className={`block text-sm transition hover:text-[#E8A33D] ${
                  activeSection === link.dataNav ? "text-[#E8A33D]" : "text-slate-200"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

    </header>
  );
}
