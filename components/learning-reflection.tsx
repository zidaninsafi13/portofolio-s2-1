"use client";

import { CheckCircle2, Clock3 } from "lucide-react";
import { usePortfolio } from "@/components/providers/portfolio-provider";
import { MotionSection } from "@/components/ui/motion-section";
import { SectionHeader } from "@/components/ui/section-header";

export function LearningReflection() {
  const { content } = usePortfolio();

  return (
    <section id="refleksi" className="field-section section-pad scroll-mt-28 bg-section">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
          <MotionSection>
            <div className="lg:sticky lg:top-32">
              <SectionHeader
                eyebrow={content.learning.eyebrow}
                heading={content.learning.heading}
                description={content.learning.intro}
                index="02"
              />
            </div>
          </MotionSection>

          <div className="space-y-5">
            {content.learning.semesters.map((semester, index) => (
              <MotionSection key={semester.title} variant="card" order={index} delay={index * 0.1}>
                <article className={`playbook-panel relative overflow-hidden p-7 sm:p-9 ${semester.available ? "border-accent/40" : ""}`}>
                  <div className="absolute right-5 top-2 font-mono text-[7rem] font-bold leading-none text-foreground/[0.035]" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="relative flex flex-wrap items-start justify-between gap-5">
                    <div>
                      <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted">{semester.label}</p>
                      <h3 className="mt-2 font-sans text-3xl font-extrabold uppercase tracking-[-0.05em] text-foreground sm:text-4xl">{semester.title}</h3>
                    </div>
                    <div className="text-right">
                      <p className={`font-mono text-5xl font-bold ${semester.available ? "text-accent" : "text-muted"}`}>{semester.count}</p>
                      <p className="mt-1 text-[0.62rem] uppercase tracking-[0.15em] text-muted">{semester.countLabel}</p>
                    </div>
                  </div>
                  <p className="relative mt-8 text-base leading-8 text-muted">{semester.description}</p>
                  <div className={`relative mt-7 inline-flex items-center gap-2 border px-3 py-1.5 font-mono text-[0.62rem] font-semibold uppercase tracking-[0.12em] ${semester.available ? "border-accent/35 text-accent" : "border-border text-muted"}`}>
                    {semester.available ? <CheckCircle2 size={13} aria-hidden="true" /> : <Clock3 size={13} aria-hidden="true" />}
                    {semester.status}
                  </div>
                </article>
              </MotionSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
