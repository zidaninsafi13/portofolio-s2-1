"use client";

import { motion, useReducedMotion } from "motion/react";
import { Flag, Lightbulb } from "lucide-react";
import { usePortfolio } from "@/components/providers/portfolio-provider";
import { MotionSection } from "@/components/ui/motion-section";
import { SectionHeader } from "@/components/ui/section-header";

const nodePositions = [
  "left-[8%] top-[15%]",
  "right-[8%] top-[25%]",
  "right-[12%] bottom-[12%]",
  "left-[12%] bottom-[18%]",
];

export function InnovationSection() {
  const { content } = usePortfolio();
  const reduceMotion = useReducedMotion();

  return (
    <section id="inovasi" className="field-section section-pad relative scroll-mt-28 overflow-hidden">
      <div className="section-shell relative">
        <MotionSection>
          <SectionHeader eyebrow={content.innovation.eyebrow} heading={content.innovation.heading} index="05" />
        </MotionSection>

        <MotionSection variant="panel" delay={0.08} className="mt-14">
          <article className="innovation-panel playbook-panel relative overflow-hidden p-7 sm:p-10 lg:p-12">
            <div className="blueprint-dots absolute inset-0 opacity-35" aria-hidden="true" />
            <div className="relative grid items-center gap-12 lg:grid-cols-[minmax(0,0.88fr)_minmax(24rem,1.12fr)] lg:gap-16">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="grid size-11 place-items-center border border-accent/40 bg-accent-soft text-accent">
                    <Lightbulb size={20} aria-hidden="true" />
                  </span>
                  <span className="border border-border-strong bg-surface/65 px-3 py-2 font-mono text-[0.6rem] font-bold uppercase tracking-[0.15em] text-muted">
                    {content.innovation.status}
                  </span>
                </div>
                <h3 className="mt-8 max-w-[10ch] font-sans text-4xl font-extrabold uppercase leading-[0.92] tracking-[-0.055em] text-foreground sm:text-5xl lg:text-6xl">
                  {content.innovation.title.slice(0, -1)}
                  <span className="text-accent">.</span>
                </h3>
                <p className="mt-7 max-w-2xl border-l-2 border-gold pl-5 text-base leading-8 text-muted sm:text-lg">
                  {content.innovation.description}
                </p>
              </div>

              <div className="relative mx-auto aspect-[4/3] w-full max-w-2xl overflow-hidden border border-accent/30 bg-background/55">
                <div className="site-grid absolute inset-0 opacity-60" aria-hidden="true" />
                <svg className="absolute inset-0 size-full" viewBox="0 0 600 450" aria-hidden="true">
                  <rect x="20" y="20" width="560" height="410" fill="none" stroke="currentColor" className="text-accent/20" />
                  <circle cx="300" cy="225" r="72" fill="none" stroke="currentColor" className="text-accent/15" />
                  <line x1="300" y1="20" x2="300" y2="430" stroke="currentColor" className="text-accent/15" />
                  <motion.path
                    d="M74 94 C160 45 224 170 338 121 S545 130 510 270 S348 365 230 342 S90 316 78 250"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="text-accent"
                    initial={reduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true, amount: 0.45 }}
                    transition={{ duration: reduceMotion ? 0 : 1.7, ease: [0.16, 1, 0.3, 1] }}
                  />
                  <path d="M70 91l14 0-4 13" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent" />
                </svg>

                <div className="absolute left-1/2 top-1/2 z-10 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-gold bg-background text-gold">
                  <Flag size={22} aria-hidden="true" />
                </div>

                {content.innovation.framework.map((item, index) => (
                  <div key={item} className={`absolute z-10 ${nodePositions[index] ?? nodePositions[0]}`}>
                    <span className="flex items-center gap-2 border border-accent/40 bg-background/90 px-3 py-2 font-mono text-[0.6rem] font-bold uppercase tracking-[0.08em] text-foreground shadow-lg">
                      <span className="grid size-5 place-items-center bg-accent text-[0.5rem] text-on-accent">{index + 1}</span>
                      {item}
                    </span>
                  </div>
                ))}

                <p className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[0.5rem] uppercase tracking-[0.17em] text-muted">
                  {content.innovation.frameworkLabel}
                </p>
              </div>
            </div>
          </article>
        </MotionSection>
      </div>
    </section>
  );
}
