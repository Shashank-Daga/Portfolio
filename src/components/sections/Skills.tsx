import { Container } from "@/components/ui/Container";
import { skills } from "@/lib/profile";

export default function Skills() {
  const rows = [
    { label: "Languages", items: skills.languages },
    { label: "Data & ML", items: skills.dataAndMl },
    { label: "Backend", items: skills.backend },
    { label: "Visualization", items: skills.visualization },
    { label: "Tools", items: skills.tools },
  ];

  return (
    <section id="skills" className="px-6 py-24 sm:px-8 lg:px-10 bg-[#0C0F12]">

      <Container>

        <div className="mb-12">

          <div className="inline-flex w-fit items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#E8A33D]">
            Skills
          </div>
          <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.03em] text-[#F8FAFC] sm:text-5xl">Tech Stack</h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-400">
            The languages, frameworks, and tools I reach for when turning data into something usable.
          </p>

        </div>

        <div className="rounded-[8px] border-t border-white/6 pt-8">

          <div className="space-y-6">

            {rows.map((row) => (
              <div key={row.label} className="flex items-start gap-6 border-b border-white/6 pb-6">
                <div className="w-40 text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                  {row.label}
                </div>
                <div className="flex-1 text-sm text-slate-200">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    {row.items.map((it) => (
                      <span key={it} className="mr-3 inline-block">
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

          </div>

        </div>

      </Container>

    </section>
  );
}
