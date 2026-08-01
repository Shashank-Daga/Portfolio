export default function Project() {
  return (
    <section id="projects" className="projects-section">
      <div className="section-head reveal-up">
        <div className="eyebrow">Featured Work</div>
        <h2>
          Projects that <span className="text-amber">ship.</span>
        </h2>
      </div>

      <div className="projects-tape">
        <div className="project-strip reveal-up" id="proj-dataprepx">
          <div className="strip-index">01</div>
          <div className="strip-body">
            <div className="strip-top">
              <div className="strip-type">AI / Data Analytics Platform</div>
              <span className="pill pill-gold">FEATURED</span>
            </div>
            <h3 className="strip-name">DataPrepX</h3>
            <p className="strip-desc">
              An end-to-end analytics platform that automates data preprocessing, feature engineering, ML modelling, visualization, and PDF/DOCX report generation — for faster business decision-making with Explainable AI built-in via SHAP and LIME.
            </p>
            <div className="strip-kpi-row">
              <div className="kpi">
                <span className="kpi-n">100K</span>
                <span className="kpi-l">Records Supported</span>
              </div>
              <div className="kpi">
                <span className="kpi-n">SHAP</span>
                <span className="kpi-l">Explainable AI</span>
              </div>
              <div className="kpi">
                <span className="kpi-n">PDF+DOCX</span>
                <span className="kpi-l">Auto Reports</span>
              </div>
            </div>
            <div className="strip-stack">
              <span>Python</span>
              <span>Pandas</span>
              <span>NumPy</span>
              <span>scikit-learn</span>
              <span>Streamlit</span>
              <span>SHAP</span>
              <span>LIME</span>
              <span>Plotly</span>
              <span>ReportLab</span>
            </div>
          </div>
          <div className="strip-glow" aria-hidden="true" />
        </div>

        <div className="project-strip reveal-up" id="proj-fraudshield">
          <div className="strip-index">02</div>
          <div className="strip-body">
            <div className="strip-top">
              <div className="strip-type">AI Security Platform</div>
              <span className="pill pill-gold">FEATURED</span>
            </div>
            <h3 className="strip-name">FraudShield</h3>
            <p className="strip-desc">
              An intelligent fraud analytics platform detecting SMS scams, metadata fraud, and deepfake voice attacks in real-time using machine learning and deep learning. Achieves industry-leading accuracy across three distinct fraud vectors.
            </p>
            <div className="strip-kpi-row">
              <div className="kpi">
                <span className="kpi-n">99.01%</span>
                <span className="kpi-l">SMS Detection</span>
              </div>
              <div className="kpi">
                <span className="kpi-n">92%+</span>
                <span className="kpi-l">Metadata Fraud</span>
              </div>
              <div className="kpi">
                <span className="kpi-n">95%+</span>
                <span className="kpi-l">Deepfake Audio</span>
              </div>
            </div>
            <div className="strip-stack">
              <span>Python</span>
              <span>Flask</span>
              <span>TensorFlow</span>
              <span>Keras</span>
              <span>Hugging Face</span>
              <span>scikit-learn</span>
              <span>HTML/CSS</span>
            </div>
          </div>
          <div className="strip-glow" aria-hidden="true" />
        </div>

        <div className="project-strip reveal-up" id="proj-finsentinel">
          <div className="strip-index">03</div>
          <div className="strip-body">
            <div className="strip-top">
              <div className="strip-type">Enterprise Fraud Detection</div>
              <span className="pill pill-green">IN PROGRESS</span>
            </div>
            <h3 className="strip-name">FinSentinel</h3>
            <p className="strip-desc">
              A hybrid fraud detection platform combining rule-based validation with ML-based anomaly detection for financial transaction analysis. Built on Java Spring Boot microservices with explainable AI risk scoring and a MySQL transaction engine.
            </p>
            <div className="strip-kpi-row">
              <div className="kpi">
                <span className="kpi-n">REST</span>
                <span className="kpi-l">Microservices</span>
              </div>
              <div className="kpi">
                <span className="kpi-n">XAI</span>
                <span className="kpi-l">Risk Scoring</span>
              </div>
              <div className="kpi">
                <span className="kpi-n">MySQL</span>
                <span className="kpi-l">Transaction Engine</span>
              </div>
            </div>
            <div className="strip-stack">
              <span>Java</span>
              <span>Spring Boot</span>
              <span>Python</span>
              <span>MySQL</span>
              <span>REST APIs</span>
              <span>Pandas</span>
              <span>scikit-learn</span>
            </div>
          </div>
          <div className="strip-glow" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
