"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowDownRight, Cpu, Layers3, Lightbulb } from "lucide-react";
import { usePortfolio } from "@/components/providers/portfolio-provider";
import { assetPath } from "@/lib/asset-path";

export function Hero() {
  const { content, introComplete } = usePortfolio();
  const reduceMotion = useReducedMotion();
  const ready = Boolean(reduceMotion) || introComplete;
  const item = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 34 },
    animate: ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 34 },
    transition: { duration: 0.78, delay, ease: [0.16, 1, 0.3, 1] as const },
  });
  const heroWords = [
    ...content.hero.heading.leading.split(/\s+/).map((value) => ({ value, tone: "leading" as const })),
    ...content.hero.heading.accent.split(/\s+/).map((value) => ({ value, tone: "accent" as const })),
    ...content.hero.heading.trailing.split(/\s+/).map((value) => ({ value, tone: "trailing" as const })),
  ];
  const accessibleHeading = [content.hero.heading.leading, content.hero.heading.accent, content.hero.heading.trailing].join(" ");

  return (
    <section
      id="hero"
      className="relative flex min-h-svh scroll-mt-24 items-center overflow-hidden pb-20 pt-32 sm:pt-36 lg:pb-16 lg:pt-40"
    >
      <div className="section-shell relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.18fr)_minmax(21rem,0.64fr)] lg:gap-16">
          <div className="max-w-5xl">
            <motion.div {...item(0.06)} className="flex items-center gap-4">
              <span className="font-mono text-xs font-bold tracking-[0.18em] text-gold">00</span>
              <span className="h-px w-10 bg-accent" aria-hidden="true" />
              <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.18em] text-accent sm:text-xs">
                {content.hero.badge}
              </p>
            </motion.div>

            <motion.h1
              {...item(0.16)}
              className="mt-8 max-w-[12ch] font-sans text-[clamp(2.85rem,6.4vw,6.6rem)] font-extrabold uppercase leading-[0.86] tracking-[-0.065em] text-foreground"
              aria-label={accessibleHeading}
            >
              {heroWords.map((word, index) => (
                <motion.span
                  key={`${word.value}-${index}`}
                  aria-hidden="true"
                  initial={reduceMotion ? false : { opacity: 0, y: 26, filter: "blur(8px)" }}
                  animate={
                    ready
                      ? { opacity: 1, y: 0, filter: "blur(0px)" }
                      : { opacity: 0, y: 26, filter: "blur(8px)" }
                  }
                  transition={{ duration: 0.66, delay: 0.18 + index * 0.045, ease: [0.16, 1, 0.3, 1] }}
                  className={`mr-[0.2em] inline-block ${word.tone === "accent" ? "section-heading-accent" : ""} ${word.tone === "trailing" ? "text-[0.7em] tracking-[-0.055em]" : ""}`}
                >
                  {word.value}
                </motion.span>
              ))}
            </motion.h1>

            <motion.div {...item(0.28)} className="mt-8 grid max-w-3xl gap-6 border-l-2 border-accent pl-5 sm:grid-cols-[1fr_auto] sm:items-end sm:pl-7">
              <p className="text-base leading-8 text-muted sm:text-lg">{content.hero.description}</p>
              <span className="hidden font-mono text-[0.56rem] uppercase tracking-[0.2em] text-muted/70 [writing-mode:vertical-rl] sm:block" aria-hidden="true">
                Portofolio PPG / 2026
              </span>
            </motion.div>

            <motion.div {...item(0.38)} className="mt-9 flex flex-wrap gap-3">
              <a href="#refleksi" className="tactical-button tactical-button-primary focus-ring group">
                {content.hero.primaryCta}
                <ArrowDownRight className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" size={16} aria-hidden="true" />
              </a>
              <a href="#mata-kuliah" className="tactical-button focus-ring bg-surface/65 text-foreground">
                <Layers3 className="text-accent" size={16} aria-hidden="true" />
                {content.hero.secondaryCta}
              </a>
            </motion.div>

            <motion.a {...item(0.5)} href="#identitas" className="focus-ring mt-12 inline-flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted transition-colors hover:text-accent">
              <span className="grid size-8 place-items-center border border-border-strong bg-surface/60">
                <ArrowDown size={13} aria-hidden="true" />
              </span>
              {content.hero.scrollHint}
            </motion.a>
          </div>

          <motion.aside
            initial={reduceMotion ? false : { opacity: 0, x: 36 }}
            animate={ready ? { opacity: 1, x: 0 } : { opacity: 0, x: 36 }}
            transition={{ duration: 0.9, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="playbook-panel mx-auto w-full max-w-[25rem] p-3 lg:mr-0"
            aria-label="Profil Zidan Insafi"
          >
            <div className="mb-3 flex items-center justify-between border-b border-border px-1 pb-3 font-mono text-[0.58rem] uppercase tracking-[0.16em] text-muted">
              <span>Profil calon guru</span>
              <span className="text-accent">ZI / 26</span>
            </div>

            <div className="group relative aspect-[4/5] overflow-hidden border border-border-strong bg-document">
              <Image
                src={assetPath("/assets/image/profile.jpeg")}
                alt="Zidan Insafi"
                fill
                priority
                quality={82}
                sizes="(max-width: 1024px) 400px, 25vw"
                className="object-cover grayscale-[0.15] transition-transform duration-700 ease-out group-hover:scale-[1.025] motion-reduce:transition-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#031017]/85 via-transparent to-transparent" aria-hidden="true" />
              <div className="site-grid absolute inset-0 opacity-25" aria-hidden="true" />
              <span className="absolute right-3 top-3 border border-white/25 bg-black/45 px-2 py-1 font-mono text-[0.55rem] uppercase tracking-[0.15em] text-white">
                PPG / 2026
              </span>
              <div className="absolute inset-x-4 bottom-4">
                <p className="font-sans text-3xl font-extrabold uppercase tracking-[-0.055em] text-white">Zidan Insafi</p>
                <p className="mt-1 font-mono text-[0.58rem] font-bold uppercase tracking-[0.17em] text-cyan-300">{content.hero.role}</p>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-2 divide-x divide-border border border-border bg-background/45 py-4">
              <div className="metric-chip mx-3">
                <Cpu className="mb-2 text-accent" size={17} aria-hidden="true" />
                <strong>{content.hero.focusOne}</strong>
                <span className="mt-2 block text-[0.55rem] uppercase tracking-[0.12em] text-muted">{content.hero.focusOneLabel}</span>
              </div>
              <div className="metric-chip mx-3 border-gold">
                <Lightbulb className="mb-2 text-gold" size={17} aria-hidden="true" />
                <strong>{content.hero.focusTwo}</strong>
                <span className="mt-2 block text-[0.55rem] uppercase tracking-[0.12em] text-muted">{content.hero.focusTwoLabel}</span>
              </div>
            </div>
          </motion.aside>
        </div>

        <motion.div {...item(0.62)} className="mt-16 flex items-center gap-4 font-mono text-[0.55rem] uppercase tracking-[0.18em] text-muted/70" aria-hidden="true">
          <span>Kediri / Indonesia</span>
          <span className="tactical-rule flex-1" />
          <span>Siap berkembang</span>
        </motion.div>
      </div>
    </section>
  );
}
