"use client";

import Image from "next/image";
import { ArrowUp } from "lucide-react";
import { usePortfolio } from "@/components/providers/portfolio-provider";
import { MotionSection } from "@/components/ui/motion-section";

export function Footer() {
  const { content } = usePortfolio();

  return (
    <footer className="field-section relative z-10 overflow-hidden bg-background py-16 sm:py-20">
      <div className="absolute inset-x-0 top-0 h-3 bg-[repeating-linear-gradient(135deg,var(--accent)_0_7px,transparent_7px_14px)] opacity-45" aria-hidden="true" />
      <div className="section-shell">
        <MotionSection>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div className="max-w-4xl">
            <p className="font-sans text-2xl font-extrabold uppercase leading-[1.08] tracking-[-0.035em] text-foreground sm:text-3xl lg:text-4xl">“{content.footer.quote}”</p>
            <p className="mt-5 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent">— {content.footer.author}</p>
          </div>
          <a href="#hero" className="focus-ring inline-flex size-12 items-center justify-center border border-border-strong text-foreground transition-[transform,border-color] hover:-translate-y-1 hover:border-accent" aria-label={content.footer.backToTop}>
            <ArrowUp size={18} aria-hidden="true" />
          </a>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-border pt-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="relative size-9 overflow-hidden border border-border bg-white p-1">
              <Image src="/assets/image/logo-kampus.png" alt="" fill sizes="36px" className="object-contain p-1" />
            </span>
            <p className="text-xs text-muted">{content.footer.closing}</p>
          </div>
          <p className="font-mono text-[0.58rem] uppercase tracking-[0.13em] text-muted">{content.footer.copyright}</p>
        </div>
        </MotionSection>
      </div>
    </footer>
  );
}
