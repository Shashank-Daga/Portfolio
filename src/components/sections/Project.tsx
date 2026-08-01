export default function Project() {
  return (
    <section id="projects" className="px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-3">
          <div className="inline-flex w-fit items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#E8A33D]">
            Featured Work
          </div>
          <h2 className="text-4xl font-extrabold tracking-[-0.03em] text-[#F8FAFC] sm:text-5xl">
            Projects that <span className="text-[#E8A33D]">ship.</span>
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <article className="flex h-full flex-col rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.2)] backdrop-blur-xl">
            <div className="text-xs font-semibold uppercase tracking-[0.32em] text-[#E8A33D]">01</div>
            <div className="mt-5 flex items-center justify-between gap-3">
              <div className="text-sm font-medium uppercase tracking-[0.28em] text-slate-400">AI / DATA ANALYTICS PLATFORM</div>
              <div className="rounded-full border border-[#E8A33D]/30 bg-[#E8A33D]/10 px-3 py-1 text-xs font-semibold text-[#E8A33D]">
                Featured
              </div>
            </div>
            <h3 className="mt-4 text-2xl font-semibold text-[#F8FAFC]">DataPrepX</h3>
            <p className="mt-4 text-sm leading-8 text-slate-300">
              An end-to-end analytics platform that automates data preprocessing, feature engineering, ML modelling, visualization, and PDF/DOCX report generation — for faster business decision-making with Explainable AI built-in via SHAP and LIME.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-[#050708]/40 p-3">
                <strong className="block text-sm text-[#F8FAFC]">100K</strong>
                <span className="mt-1 block text-xs text-slate-400">Records supported</span>
              </div>
              <div className="rounded-2xl border border-white/10 bg-[#050708]/40 p-3">
                <strong className="block text-sm text-[#F8FAFC]">SHAP</strong>
                <span className="mt-1 block text-xs text-slate-400">Explainable AI</span>
              </div>
              <div className="rounded-2xl border border-white/10 bg-[#050708]/40 p-3">
                <strong className="block text-sm text-[#F8FAFC]">PDF+DOCX</strong>
                <span className="mt-1 block text-xs text-slate-400">Auto reports</span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {['Python', 'Pandas', 'NumPy', 'scikit-learn', 'Streamlit', 'SHAP', 'LIME', 'Plotly', 'ReportLab'].map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200">
                  {tag}
                </span>
              ))}
            </div>
          </article>

          <article className="flex h-full flex-col rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.2)] backdrop-blur-xl">
            <div className="text-xs font-semibold uppercase tracking-[0.32em] text-[#E8A33D]">02</div>
            <div className="mt-5 flex items-center justify-between gap-3">
              <div className="text-sm font-medium uppercase tracking-[0.28em] text-slate-400">AI SECURITY PLATFORM</div>
              <div className="rounded-full border border-[#E8A33D]/30 bg-[#E8A33D]/10 px-3 py-1 text-xs font-semibold text-[#E8A33D]">
                Featured
              </div>
            </div>
            <h3 className="mt-4 text-2xl font-semibold text-[#F8FAFC]">FraudShield</h3>
            <p className="mt-4 text-sm leading-8 text-slate-300">
              An intelligent fraud analytics platform detecting SMS scams, metadata fraud, and deepfake voice attacks in real-time using machine learning and deep learning. Achieves industry-leading accuracy across three distinct fraud vectors.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-[#050708]/40 p-3">
                <strong className="block text-sm text-[#F8FAFC]">99.01%</strong>
                <span className="mt-1 block text-xs text-slate-400">SMS detection</span>
              </div>
              <div className="rounded-2xl border border-white/10 bg-[#050708]/40 p-3">
                <strong className="block text-sm text-[#F8FAFC]">92%+</strong>
                <span className="mt-1 block text-xs text-slate-400">Metadata fraud</span>
              </div>
              <div className="rounded-2xl border border-white/10 bg-[#050708]/40 p-3">
                <strong className="block text-sm text-[#F8FAFC]">95%+</strong>
                <span className="mt-1 block text-xs text-slate-400">Deepfake audio</span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {['Python', 'Flask', 'TensorFlow', 'Keras', 'Hugging Face', 'scikit-learn', 'HTML/CSS'].map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200">
                  {tag}
                </span>
              ))}
            </div>
          </article>

          <article className="flex h-full flex-col rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.2)] backdrop-blur-xl">
            <div className="text-xs font-semibold uppercase tracking-[0.32em] text-[#E8A33D]">03</div>
            <div className="mt-5 flex items-center justify-between gap-3">
              <div className="text-sm font-medium uppercase tracking-[0.28em] text-slate-400">ENTERPRISE FRAUD DETECTION</div>
              <div className="rounded-full border border-[#E8A33D]/30 bg-[#E8A33D]/10 px-3 py-1 text-xs font-semibold text-[#E8A33D]">
                In progress
              </div>
            </div>
            <h3 className="mt-4 text-2xl font-semibold text-[#F8FAFC]">FinSentinel</h3>
            <p className="mt-4 text-sm leading-8 text-slate-300">
              A hybrid fraud detection platform combining rule-based validation with ML-based anomaly detection for financial transaction analysis. Built on Java Spring Boot microservices with explainable AI risk scoring and a MySQL transaction engine.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-[#050708]/40 p-3">
                <strong className="block text-sm text-[#F8FAFC]">REST</strong>
                <span className="mt-1 block text-xs text-slate-400">Microservices</span>
              </div>
              <div className="rounded-2xl border border-white/10 bg-[#050708]/40 p-3">
                <strong className="block text-sm text-[#F8FAFC]">XAI</strong>
                <span className="mt-1 block text-xs text-slate-400">Risk scoring</span>
              </div>
              <div className="rounded-2xl border border-white/10 bg-[#050708]/40 p-3">
                <strong className="block text-sm text-[#F8FAFC]">MySQL</strong>
                <span className="mt-1 block text-xs text-slate-400">Transaction engine</span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {['Java', 'Spring Boot', 'Python', 'MySQL', 'REST APIs', 'Pandas', 'scikit-learn'].map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
