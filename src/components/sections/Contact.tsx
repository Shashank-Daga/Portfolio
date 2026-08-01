export default function Contact() {
  return (
    <section id="achievements" className="achievements-section">
      <div className="section-head reveal-up">
        <div className="eyebrow">Achievements & Leadership</div>
        <h2>
          Beyond the <span className="text-amber">classroom.</span>
        </h2>
      </div>

      <div className="ach-layout">
        <div className="ach-col awards-col">
          <div className="ach-col-label">Awards</div>
          <div className="award-card reveal-up" id="ach-1">
            <div className="award-year">2025</div>
            <div className="award-icon">🏅</div>
            <h3>Letter of Appreciation</h3>
            <p className="award-org">Vishwakarma Institute of Technology</p>
            <p className="award-desc">Received recognition for coordinating college events while serving as Database Secretary.</p>
          </div>
          <div className="award-card reveal-up" id="ach-2">
            <div className="award-year">2020</div>
            <div className="award-icon">⭐</div>
            <h3>Best Student Award</h3>
            <p className="award-org">Academic Excellence</p>
            <p className="award-desc">Awarded for excellence in academics and extracurricular activities.</p>
          </div>
        </div>

        <div className="ach-col leadership-col">
          <div className="ach-col-label">Leadership</div>
          <div className="leadership-card reveal-up" id="lead-1">
            <div className="lead-header">
              <div>
                <h3>Database Secretary</h3>
                <p className="lead-org">Event Planning & Execution Committee, VIT Pune</p>
              </div>
              <div className="lead-duration">Aug 2024 – May 2025</div>
            </div>
            <ul className="lead-points">
              <li>Managed end-to-end database operations for college events</li>
              <li>Coordinated reporting and cross-functional activities</li>
              <li>Ensured efficient execution of multiple large-scale events</li>
            </ul>
          </div>
          <div className="leadership-card reveal-up" id="lead-2">
            <div className="lead-header">
              <div>
                <h3>EDAI Management Head</h3>
                <p className="lead-org">The Catalyst, VIT Pune</p>
              </div>
              <div className="lead-duration">Aug 2024 – May 2025</div>
            </div>
            <ul className="lead-points">
              <li>Mentored first-year students in technical domains</li>
              <li>Coordinated project support across teams</li>
              <li>Collaborated with faculty and student committees</li>
            </ul>
          </div>
        </div>
      </div>

      <div id="contact" className="contact-section" style={{ marginTop: "3rem" }}>
        <div className="contact-inner">
          <div className="contact-headline reveal-up">
            <div className="eyebrow">Let&apos;s Talk</div>
            <h2>
              Let&apos;s build something
              <br />
              <span className="text-amber">meaningful together.</span>
            </h2>
            <p>
              I&apos;m actively seeking full-time opportunities as a Data Engineer, Backend Developer, or Full Stack Engineer. Open to projects, collaborations, or just a good tech conversation.
            </p>
          </div>

          <div className="contact-channels reveal-up">
            <a href="mailto:shashankdaga2510@gmail.com" className="channel-primary" id="contact-email">
              <div className="channel-icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="channel-info">
                <span className="ch-label">Email</span>
                <span className="ch-val">shashankdaga2510@gmail.com</span>
              </div>
              <svg className="ch-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <div className="channel-row">
              <a href="https://github.com/Shashank-Daga" target="_blank" rel="noopener noreferrer" className="channel-sm" id="contact-github">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-label="GitHub">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.166 6.839 9.489.5.09.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.455-1.157-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.532 1.03 1.532 1.03.891 1.529 2.341 1.089 2.91.833.091-.647.349-1.086.635-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.683-.103-.253-.447-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.548 9.548 0 0112 6.836c.85.004 1.705.114 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.376.202 2.394.1 2.646.64.699 1.026 1.591 1.026 2.683 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/shashank-daga-635466270/" target="_blank" rel="noopener noreferrer" className="channel-sm" id="contact-linkedin">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-label="LinkedIn">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span>LinkedIn</span>
              </a>
              <div className="channel-sm static" id="contact-phone">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                <span>+91 8446542510</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
