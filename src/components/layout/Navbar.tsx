const LINKS = [
  { label: "About", href: "#about", dataNav: "about" },
  { label: "Projects", href: "#projects", dataNav: "projects" },
  { label: "Skills", href: "#skills", dataNav: "skills" },
  { label: "Certs", href: "#certifications", dataNav: "certifications" },
  { label: "Awards", href: "#achievements", dataNav: "achievements" },
  { label: "Contact", href: "#contact", dataNav: "contact" },
];

export function Nav() {
  return (
    <header id="site-header" className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#050708]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-8">
        <a href="#hero" className="inline-flex items-center gap-3" aria-label="Go to top">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E8A33D] text-sm font-black tracking-[0.08em] text-[#050708]">
            SD
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-[#F8FAFC]">Shashank Daga</span>
            <span className="text-xs text-slate-400">Data Engineer</span>
          </div>
        </a>

        <nav aria-label="Primary" className="hidden flex-1 lg:block">
          <ul className="flex items-center justify-center gap-7" role="list">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} data-nav={link.dataNav} className="text-sm text-slate-200 transition hover:text-[#E8A33D]">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="mailto:shashankdaga2510@gmail.com"
          className="hidden items-center gap-2 rounded-full bg-[#E8A33D] px-5 py-3 text-sm font-semibold text-[#050708] transition hover:-translate-y-0.5 hover:bg-[#ffb347] md:inline-flex"
        >
          <span>Hire Me</span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>

        <button className="inline-flex rounded-full border border-white/10 p-2 text-[#F8FAFC] lg:hidden" id="menuToggle" aria-label="Open menu" aria-expanded="false">
          <div className="flex h-5 w-5 flex-col justify-between">
            <span className="block h-0.5 w-full rounded-full bg-current" />
            <span className="block h-0.5 w-full rounded-full bg-current" />
            <span className="block h-0.5 w-full rounded-full bg-current" />
          </div>
        </button>
      </div>

      <div className="hidden border-t border-white/10 bg-[#050708]/95 px-6 py-4 lg:hidden" id="mobileDrawer" aria-hidden="true">
        <ul role="list" className="flex flex-col gap-3">
          {LINKS.map((link) => (
            <li key={`${link.href}-mobile`}>
              <a href={link.href} className="block text-sm text-slate-200 transition hover:text-[#E8A33D]">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
