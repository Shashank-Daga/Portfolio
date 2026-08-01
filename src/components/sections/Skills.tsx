export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="section-head reveal-up">
        <div className="eyebrow">Capabilities</div>
        <h2>
          My <span className="text-amber">toolkit.</span>
        </h2>
      </div>

      <div className="skills-layout">
        <div className="skills-radials reveal-up">
          <div className="radial-group">
            <div className="radial-item" id="rad-python">
              <svg className="radial-svg" viewBox="0 0 100 100" aria-hidden="true">
                <circle cx="50" cy="50" r="40" className="radial-track" />
                <circle cx="50" cy="50" r="40" className="radial-fill" style={{ ["--pct" as string]: 95 }} />
              </svg>
              <div className="radial-center">
                <span className="radial-pct">95</span>
                <span>%</span>
              </div>
              <div className="radial-name">Python</div>
            </div>
            <div className="radial-item" id="rad-sql">
              <svg className="radial-svg" viewBox="0 0 100 100" aria-hidden="true">
                <circle cx="50" cy="50" r="40" className="radial-track" />
                <circle cx="50" cy="50" r="40" className="radial-fill" style={{ ["--pct" as string]: 90 }} />
              </svg>
              <div className="radial-center">
                <span className="radial-pct">90</span>
                <span>%</span>
              </div>
              <div className="radial-name">SQL</div>
            </div>
            <div className="radial-item" id="rad-java">
              <svg className="radial-svg" viewBox="0 0 100 100" aria-hidden="true">
                <circle cx="50" cy="50" r="40" className="radial-track" />
                <circle cx="50" cy="50" r="40" className="radial-fill" style={{ ["--pct" as string]: 85 }} />
              </svg>
              <div className="radial-center">
                <span className="radial-pct">85</span>
                <span>%</span>
              </div>
              <div className="radial-name">Java</div>
            </div>
            <div className="radial-item" id="rad-r">
              <svg className="radial-svg" viewBox="0 0 100 100" aria-hidden="true">
                <circle cx="50" cy="50" r="40" className="radial-track" />
                <circle cx="50" cy="50" r="40" className="radial-fill" style={{ ["--pct" as string]: 75 }} />
              </svg>
              <div className="radial-center">
                <span className="radial-pct">75</span>
                <span>%</span>
              </div>
              <div className="radial-name">R</div>
            </div>
          </div>
        </div>

        <div className="skills-cats reveal-up">
          <div className="scat">
            <div className="scat-name">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E8A33D" strokeWidth="2" aria-hidden="true">
                <path d="M4 7h16M4 12h8m-8 5h16" />
              </svg>
              Data Engineering & Analytics
            </div>
            <div className="scat-chips">
              <span className="chip-tag">Pandas</span>
              <span className="chip-tag">NumPy</span>
              <span className="chip-tag">Power BI</span>
              <span className="chip-tag">Excel</span>
              <span className="chip-tag">Plotly</span>
              <span className="chip-tag">Matplotlib</span>
              <span className="chip-tag">Statistics</span>
            </div>
          </div>
          <div className="scat">
            <div className="scat-name">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E8A33D" strokeWidth="2" aria-hidden="true">
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0110 0v4" />
              </svg>
              Backend Development
            </div>
            <div className="scat-chips">
              <span className="chip-tag">Spring Boot</span>
              <span className="chip-tag">Flask</span>
              <span className="chip-tag">REST APIs</span>
              <span className="chip-tag">MongoDB</span>
              <span className="chip-tag">MySQL</span>
            </div>
          </div>
          <div className="scat">
            <div className="scat-name">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E8A33D" strokeWidth="2" aria-hidden="true">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
              Frontend & Tools
            </div>
            <div className="scat-chips">
              <span className="chip-tag">React.js</span>
              <span className="chip-tag">HTML/CSS</span>
              <span className="chip-tag">Git</span>
              <span className="chip-tag">GitHub</span>
            </div>
          </div>
          <div className="scat">
            <div className="scat-name">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E8A33D" strokeWidth="2" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4l3 3" />
              </svg>
              AI / ML Libraries
            </div>
            <div className="scat-chips">
              <span className="chip-tag">scikit-learn</span>
              <span className="chip-tag">TensorFlow</span>
              <span className="chip-tag">Keras</span>
              <span className="chip-tag">Hugging Face</span>
              <span className="chip-tag">SHAP</span>
              <span className="chip-tag">LIME</span>
              <span className="chip-tag">Streamlit</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
