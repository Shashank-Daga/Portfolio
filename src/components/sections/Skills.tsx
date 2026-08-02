import { Container } from "@/components/ui/Container";

export default function Skills() {
  const progressRings = [
    { label: "Python", pct: 95 },
    { label: "SQL", pct: 90 },
    { label: "Java", pct: 85 },
    { label: "R", pct: 75 },
  ];

  const categories = [
    {
      title: "Data Engineering & Analytics",
      items: ["Pandas", "NumPy", "Power BI", "Excel", "Plotly", "Matplotlib", "Statistics"],
    },
    {
      title: "Backend Development",
      items: ["Spring Boot", "Flask", "REST APIs", "MongoDB", "MySQL"],
    },
    {
      title: "Frontend & Tools",
      items: ["React.js", "HTML/CSS", "Git", "GitHub"],
    },
    {
      title: "AI / ML Libraries",
      items: ["scikit-learn", "TensorFlow", "Keras", "Hugging Face", "SHAP", "LIME", "Streamlit"],
    },
  ];

  return (
    <section id="skills" className="px-6 py-24 sm:px-8 lg:px-10">
      <Container>
        <div className="mb-12 flex flex-col gap-3">
          <div className="inline-flex w-fit items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#E8A33D]">
            Capabilities
          </div>
          <h2 className="text-4xl font-extrabold tracking-[-0.03em] text-[#F8FAFC] sm:text-5xl">
            My <span className="text-[#E8A33D]">toolkit.</span>
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {progressRings.map((item) => {
              const circumference = 2 * Math.PI * 40;
              const offset = circumference - (item.pct / 100) * circumference;
              return (
                <div key={item.label} className="rounded-[28px] border border-white/10 bg-white/5 p-6 text-center shadow-[0_24px_80px_rgba(0,0,0,0.16)] backdrop-blur-xl">
                  <div className="mx-auto flex h-28 w-28 items-center justify-center">
                    <svg viewBox="0 0 100 100" className="h-28 w-28 -rotate-90" aria-hidden="true">
                      <circle cx="50" cy="50" r="40" stroke="rgba(255,255,255,0.12)" strokeWidth="8" fill="none" />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="#E8A33D"
                        strokeWidth="8"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                      />
                    </svg>
                    <div className="absolute flex flex-col items-center text-[#F8FAFC]">
                      <span className="text-2xl font-semibold">{item.pct}</span>
                      <span className="text-xs uppercase tracking-[0.25em] text-slate-400">%</span>
                    </div>
                  </div>
                  <div className="mt-4 text-lg font-semibold text-[#F8FAFC]">{item.label}</div>
                </div>
              );
            })}
          </div>

          <div className="space-y-4">
            {categories.map((category) => (
              <div key={category.title} className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.16)] backdrop-blur-xl">
                <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#E8A33D]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M4 7h16M4 12h8m-8 5h16" />
                  </svg>
                  {category.title}
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span key={item} className="rounded-sm border border-white/10 bg-[#050708]/40 px-3 py-1 text-sm text-slate-200">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
