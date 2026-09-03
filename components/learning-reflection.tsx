"use client";

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
            {content.learning.paragraphs.map((paragraph, index) => (
              <MotionSection key={paragraph.label} variant="card" order={index} delay={index * 0.1}>
                <article className="playbook-panel relative overflow-hidden p-7 sm:p-9">
                  <div className="absolute right-5 top-2 font-mono text-[7rem] font-bold leading-none text-foreground/[0.035]" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="relative">
                    <p className="inline-flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-accent">
                      <span className="inline-block h-px w-8 bg-accent/60" aria-hidden="true" />
                      {paragraph.label}
                    </p>
                    <p className="mt-5 text-base leading-8 text-muted">{paragraph.text}</p>
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
