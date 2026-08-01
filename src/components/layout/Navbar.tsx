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
    <header id="site-header">
      <div className="header-inner">
        <a href="#hero" className="header-brand" aria-label="Go to top">
          <div className="brand-initials">SD</div>
          <div className="brand-meta">
            <span className="brand-name">Shashank Daga</span>
            <span className="brand-title">Data Engineer</span>
          </div>
        </a>

        <nav aria-label="Primary">
          <ul className="nav-list" role="list">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} data-nav={link.dataNav}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="mailto:shashankdaga2510@gmail.com" className="hire-btn">
          <span>Hire Me</span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>

        <button className="menu-toggle" id="menuToggle" aria-label="Open menu" aria-expanded="false">
          <div className="toggle-icon">
            <span />
            <span />
          </div>
        </button>
      </div>

      <div className="mobile-drawer" id="mobileDrawer" aria-hidden="true">
        <ul role="list">
          {LINKS.map((link) => (
            <li key={`${link.href}-mobile`}>
              <a href={link.href} className="drawer-link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
