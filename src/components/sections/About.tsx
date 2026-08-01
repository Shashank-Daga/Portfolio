export default function About() {
  return (
    <section id="about">
      <div className="about-container">
        <div className="about-left">
          <div className="eyebrow reveal-up">About Me</div>
          <h2 className="about-h2 reveal-up">
            Turning data
            <br />
            into <span className="text-amber">decisions.</span>
          </h2>
          <div className="about-body reveal-up">
            <p>
              I recently completed my B.Tech in Information Technology from <strong>Vishwakarma Institute of Technology, Pune</strong> with a CGPA of <strong className="amber">8.79</strong>. I have a strong foundation across data engineering, backend development, machine learning, and software architecture.
            </p>
            <p>
              I enjoy the full lifecycle — from designing REST APIs and microservices to building AI-powered analytics systems. I write maintainable code, build production-ready systems, and embrace continuous learning.
            </p>
          </div>

          <div className="about-pillars reveal-up">
            <div className="pillar">
              <div className="pillar-icon">🎯</div>
              <div>
                <strong>Mission</strong>
                <p>Build scalable, intelligent software that helps organizations make faster, data-driven decisions.</p>
              </div>
            </div>
            <div className="pillar">
              <div className="pillar-icon">🚀</div>
              <div>
                <strong>Vision</strong>
                <p>Become a Data Engineer creating impactful AI-powered systems used by real people.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-right">
          <div className="bento-grid reveal-up">
            <div className="bento-cell cell-cgpa">
              <div className="bento-big-num" data-count="8.79" data-dec="2">
                0
              </div>
              <div className="bento-label">CGPA</div>
              <div className="bento-sub">VIT Pune · IT</div>
            </div>
            <div className="bento-cell cell-projects">
              <div className="bento-big-num" data-count="3" data-dec="0">
                0
              </div>
              <div className="bento-label">Projects</div>
              <div className="bento-sub">AI · Data · Backend</div>
            </div>
            <div className="bento-cell cell-certs">
              <div className="bento-big-num" data-count="5" data-dec="0">
                0
              </div>
              <div className="bento-label">Certifications</div>
              <div className="bento-sub">Coursera · Kaggle · Forage</div>
            </div>
            <div className="bento-cell cell-edu">
              <div className="edu-tag">B.Tech · IT</div>
              <div className="edu-school">Vishwakarma Institute of Technology</div>
              <div className="edu-dates">Nov 2022 – June 2026</div>
              <ul className="edu-bullets">
                <li>Databases, DSA, Software Engineering, ML</li>
                <li>Multiple AI & analytics projects</li>
              </ul>
            </div>
            <div className="bento-cell cell-location">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E8A33D" strokeWidth="1.8" aria-hidden="true">
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Pune, India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

