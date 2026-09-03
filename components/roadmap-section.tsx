"use client";

import { HeartHandshake, Target, TrendingUp } from "lucide-react";
import { usePortfolio } from "@/components/providers/portfolio-provider";
import { MotionSection } from "@/components/ui/motion-section";
import { SectionHeader } from "@/components/ui/section-header";

const icons = {
  target: Target,
  heart: HeartHandshake,
  growth: TrendingUp,
};

export function RoadmapSection() {
  const { content } = usePortfolio();

  return (
    <section id="rencana" className="field-section section-pad scroll-mt-28 bg-section">
      <div className="section-shell">
        <MotionSection>
          <SectionHeader eyebrow={content.roadmap.eyebrow} heading={content.roadmap.heading} index="06" />
        </MotionSection>

        <div className="relative mt-16 grid gap-5 lg:grid-cols-3">
          <div className="absolute left-[8%] right-[8%] top-6 hidden border-t border-dashed border-accent/35 lg:block" aria-hidden="true" />
          {content.roadmap.items.map((item, index) => {
            const Icon = icons[item.icon];
            return (
              <MotionSection key={item.index} variant="card" order={index} delay={index * 0.09}>
                <article className="playbook-panel group relative h-full overflow-hidden p-7 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-accent sm:p-8">
                  <span className="absolute -right-3 -top-7 font-mono text-[9rem] font-bold leading-none text-foreground/[0.035]" aria-hidden="true">{item.index}</span>
                  <span className="relative grid size-12 place-items-center border border-accent bg-background text-accent">
                    <Icon size={21} aria-hidden="true" />
                  </span>
                  <p className="relative mt-7 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted">{content.roadmap.stepLabel} {item.index}</p>
                  <h3 className="relative mt-3 font-sans text-2xl font-extrabold uppercase leading-[1.02] tracking-[-0.045em] text-foreground">{item.title}</h3>
                  <p className="relative mt-5 text-sm leading-7 text-muted">{item.description}</p>
                </article>
              </MotionSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
