import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg-mesh" aria-hidden="true">
        <div className="mesh-orb orb-1" />
        <div className="mesh-orb orb-2" />
        <div className="mesh-orb orb-3" />
        <div className="mesh-lines" />
      </div>

      <div className="hero-layout">
        <div className="hero-text-col">
          <div className="hero-badge">
            <span className="badge-dot" />
            Open to opportunities
          </div>

          <h1 className="hero-heading">
            <span className="line-wrap">
              <em className="hero-name-word" style={{ animationDelay: ".05s" }}>
                Shashank
              </em>
            </span>
            <span className="line-wrap">
              <em className="hero-name-word" style={{ animationDelay: ".2s" }}>
                Daga<span className="heading-dot">.</span>
              </em>
            </span>
          </h1>

          <div className="hero-descriptor">
            <div className="descriptor-track" id="descriptorTrack">
              <span>Data Engineer</span>
              <span>Backend Developer</span>
              <span>Full Stack Developer</span>
              <span>AI/ML Enthusiast</span>
            </div>
          </div>

          <p className="hero-intro">
            I build <strong>scalable data-driven applications</strong> and intelligent software systems — turning complex data into actionable, production-ready solutions with measurable impact.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="cta-primary" id="cta-projects">
              Explore Work
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M3 9h12M11 5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#contact" className="cta-ghost" id="cta-contact">
              Get In Touch
            </a>
          </div>

          <div className="hero-links">
            <a href="https://github.com/Shashank-Daga" target="_blank" rel="noopener noreferrer" id="hero-github">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-label="GitHub">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.166 6.839 9.489.5.09.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.455-1.157-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.532 1.03 1.532 1.03.891 1.529 2.341 1.089 2.91.833.091-.647.349-1.086.635-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.683-.103-.253-.447-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.548 9.548 0 0112 6.836c.85.004 1.705.114 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.376.202 2.394.1 2.646.64.699 1.026 1.591 1.026 2.683 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/shashank-daga-635466270/" target="_blank" rel="noopener noreferrer" id="hero-linkedin">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-label="LinkedIn">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
            <a href="mailto:shashankdaga2510@gmail.com" id="hero-email">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-label="Email">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email
            </a>
          </div>
        </div>

        <div className="hero-visual-col">
          <div className="hero-photo-ring">
            <svg className="ring-svg" viewBox="0 0 440 440" fill="none" aria-hidden="true">
              <circle cx="220" cy="220" r="210" stroke="rgba(232,163,61,0.12)" strokeWidth="1" strokeDasharray="6 10" />
              <circle cx="220" cy="220" r="180" stroke="rgba(232,163,61,0.08)" strokeWidth="1" strokeDasharray="2 14" />
            </svg>
            <div className="hero-photo-frame">
              <Image src="/SD.jpg" alt="Shashank Daga" width={320} height={380} className="hero-photo" priority />
              <div className="photo-shimmer" aria-hidden="true" />
            </div>

            <div className="float-chip chip-1">
              <span className="chip-val">8.79</span>
              <span className="chip-lbl">CGPA</span>
            </div>
            <div className="float-chip chip-2">
              <span className="chip-val">3</span>
              <span className="chip-lbl">Projects</span>
            </div>
            <div className="float-chip chip-3">
              <span className="chip-val">99%</span>
              <span className="chip-lbl">Fraud Detection</span>
            </div>
            <div className="float-chip chip-4">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E8A33D" strokeWidth="2">
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Pune, India
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll-cue" aria-hidden="true">
        <div className="scroll-mouse">
          <div className="mouse-wheel" />
        </div>
      </div>
    </section>
  );
}
