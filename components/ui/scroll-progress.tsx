"use client";

import { motion, useScroll, useSpring, useReducedMotion } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const reduceMotion = useReducedMotion();
  const scale = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.3,
  });

  return (
    <>
      <div aria-hidden="true" className="fixed right-4 top-1/2 z-[80] hidden -translate-y-1/2 items-center gap-2 xl:flex">
        <span className="font-mono text-[0.5rem] uppercase tracking-[0.18em] text-accent [writing-mode:vertical-rl]">Progres halaman</span>
        <span className="relative h-32 w-px bg-border-strong">
          <motion.span
            className="absolute inset-x-0 top-0 h-full origin-top bg-accent shadow-[0_0_10px_var(--accent)]"
            style={{ scaleY: reduceMotion ? scrollYProgress : scale }}
          />
          <span className="absolute -left-1 top-0 h-px w-2 bg-border-strong" />
          <span className="absolute -left-1 top-1/2 h-px w-2 bg-border-strong" />
          <span className="absolute -left-1 bottom-0 h-px w-2 bg-border-strong" />
        </span>
      </div>
      <motion.div
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-[80] h-0.5 origin-left bg-accent shadow-[0_0_12px_var(--accent)] xl:hidden"
        style={{ scaleX: reduceMotion ? scrollYProgress : scale }}
      />
    </>
  );
}
