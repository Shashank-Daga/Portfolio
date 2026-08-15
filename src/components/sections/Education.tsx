"use client";

import { motion } from "motion/react";
import { GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";

export function Education() {
  return (
    <section id="education" className="px-6 py-24 sm:px-8 lg:px-10 bg-[#0F1318]">

      <Container className="grid gap-16">

        <div className="flex flex-col gap-3">

          <div className="inline-flex w-fit items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#E8A33D]">
            Education
          </div>
          <h2 className="text-4xl font-extrabold tracking-[-0.03em] text-[#F8FAFC] sm:text-5xl">
            Academic journey.
          </h2>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
        >
          <Card className="rounded-[24px] border-white/10 bg-white/5 shadow-[0_25px_80px_rgba(0,0,0,0.18)] backdrop-blur-xl">
            <CardContent className="flex flex-col gap-6 p-8 sm:flex-row sm:items-center">

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-3xl bg-[#E8A33D]/10 text-[#E8A33D]">
                <GraduationCap className="h-6 w-6" />
              </div>

              <div>

                <div className="text-sm font-semibold uppercase tracking-[0.24em] text-[#E8A33D]">
                  Bachelor of Technology
                </div>
                <h3 className="mt-3 text-2xl font-semibold text-[#F8FAFC]">
                  Information Technology
                </h3>
                <p className="mt-2 text-base text-slate-300">
                  Vishwakarma Institute of Technology, Pune
                </p>
                <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-400">
                  <span>Nov 2022 — Jun 2026</span>
                  <span>CGPA: 8.79</span>
                </div>

              </div>

            </CardContent>
          </Card>
        </motion.div>

      </Container>
      
    </section>
  );
}
