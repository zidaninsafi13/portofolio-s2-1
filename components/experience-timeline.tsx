"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, Quote } from "lucide-react";
import { useState } from "react";
import { usePortfolio } from "@/components/providers/portfolio-provider";
import { MotionSection } from "@/components/ui/motion-section";
import { SectionHeader } from "@/components/ui/section-header";

export function ExperienceTimeline() {
  const { content } = usePortfolio();
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const activeItem = content.experience.items[activeIndex];

  return (
    <section id="pengalaman" className="field-section section-pad scroll-mt-28 bg-section">
      <div className="section-shell">
        <MotionSection>
          <SectionHeader
            eyebrow={content.experience.eyebrow}
            heading={content.experience.heading}
            description={content.experience.description}
            index="04"
          />
        </MotionSection>

        <MotionSection variant="panel" delay={0.08} className="mt-14">
          <div className="playbook-panel grid overflow-hidden lg:grid-cols-[minmax(18rem,0.72fr)_minmax(0,1.28fr)]">
            <div className="relative border-b border-border p-3 lg:border-b-0 lg:border-r lg:p-5">
              <div className="absolute bottom-8 left-[2.15rem] top-8 hidden w-px bg-border lg:block" aria-hidden="true" />
              <div className="grid grid-cols-3 gap-2 lg:grid-cols-1 lg:gap-1" role="tablist" aria-label={content.experience.eyebrow}>
                {content.experience.items.map((item, index) => {
                  const active = index === activeIndex;
                  return (
                    <button
                      key={item.index}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      aria-controls="experience-panel"
                      onClick={() => setActiveIndex(index)}
                      className={`focus-ring group relative flex min-h-24 flex-col items-start border-b border-border px-3 py-4 text-left transition-colors sm:px-4 lg:min-h-0 lg:flex-row lg:items-center lg:gap-4 lg:px-5 ${active ? "bg-accent-soft text-foreground" : "text-muted hover:bg-surface-subtle hover:text-foreground"}`}
                    >
                      <span className={`relative z-10 grid size-8 shrink-0 place-items-center border font-mono text-[0.6rem] transition-colors ${active ? "border-accent bg-accent text-on-accent" : "border-border bg-surface"}`}>{item.index}</span>
                      <span className="mt-3 text-xs font-bold uppercase leading-5 tracking-[0.02em] sm:text-sm lg:mt-0">{item.title}</span>
                      <ArrowRight className={`ml-auto hidden transition-transform lg:block ${active ? "translate-x-0 text-accent" : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"}`} size={16} aria-hidden="true" />
                    </button>
                  );
                })}
              </div>
            </div>

            <div id="experience-panel" role="tabpanel" className="min-h-[27rem] p-7 sm:p-10 lg:p-14">
              <AnimatePresence mode="wait" initial={false}>
                <motion.article
                  key={`${activeIndex}-${activeItem.title}`}
                  initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: reduceMotion ? 0 : 0.38, ease: [0.16, 1, 0.3, 1] }}
                >
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-accent">{activeItem.index} / 03</p>
                  <h3 className="mt-5 max-w-2xl font-sans text-3xl font-extrabold uppercase leading-[1] tracking-[-0.045em] text-foreground sm:text-4xl">{activeItem.title}</h3>
                  <p className="mt-7 max-w-3xl text-base leading-8 text-muted sm:text-lg">{activeItem.description}</p>
                  <div className="mt-9 max-w-2xl border-l-2 border-accent bg-accent-soft p-5 sm:p-6">
                    <Quote size={18} className="text-accent" aria-hidden="true" />
                    <p className="mt-3 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-accent">{content.experience.evidenceLabel}</p>
                    <p className="mt-2 text-lg font-semibold leading-8 text-foreground">{activeItem.evidence}</p>
                  </div>
                </motion.article>
              </AnimatePresence>
            </div>
          </div>
        </MotionSection>
      </div>
    </section>
  );
}
