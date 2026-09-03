"use client";

import { Globe2, GraduationCap } from "lucide-react";
import { usePortfolio } from "@/components/providers/portfolio-provider";
import { MotionSection } from "@/components/ui/motion-section";
import { SectionHeader } from "@/components/ui/section-header";

export function IdentitySection() {
  const { content } = usePortfolio();

  return (
    <section id="identitas" className="field-section section-pad relative scroll-mt-28 overflow-hidden">
      <div className="section-shell relative">
        <MotionSection>
          <SectionHeader eyebrow={content.identity.eyebrow} heading={content.identity.heading} index="01" />
        </MotionSection>

        <div className="relative mt-16 grid gap-5 lg:grid-cols-2">
          <div className="absolute left-1/2 top-1/2 hidden size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-accent bg-background font-mono text-xs font-bold text-accent lg:grid" aria-hidden="true">VS</div>
          {content.identity.cards.map((card, index) => {
            const Icon = card.icon === "globe" ? Globe2 : GraduationCap;
            const isGold = card.tone === "gold";
            return (
              <MotionSection key={card.index} variant="card" order={index} delay={index * 0.1}>
                <article className="playbook-panel group h-full p-7 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-accent sm:p-9 lg:p-10">
                  <div className="flex items-center gap-4">
                    <span className={`grid size-12 place-items-center border ${isGold ? "border-gold/40 bg-gold-soft text-gold" : "border-accent/40 bg-accent-soft text-accent"}`}>
                      <Icon size={21} aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted">{card.index}</p>
                      <h3 className="mt-1 font-sans text-2xl font-extrabold uppercase tracking-[-0.04em] text-foreground">{card.title}</h3>
                    </div>
                  </div>
                  <div className="tactical-rule mt-7" aria-hidden="true" />
                  <p className="mt-7 text-base leading-8 text-muted sm:text-lg">{card.description}</p>
                </article>
              </MotionSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
