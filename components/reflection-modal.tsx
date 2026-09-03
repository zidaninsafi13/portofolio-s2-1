"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ExternalLink, FileText, X } from "lucide-react";
import { useEffect, useId, useRef, useSyncExternalStore, type RefObject } from "react";
import { createPortal } from "react-dom";
import { usePortfolio } from "@/components/providers/portfolio-provider";
import type { Course } from "@/lib/portfolio-types";

interface ReflectionModalProps {
  course: Course | null;
  returnFocusRef: RefObject<HTMLButtonElement | null>;
  onClose: () => void;
}

export function ReflectionModal({ course, returnFocusRef, onClose }: ReflectionModalProps) {
  const { content, locale } = usePortfolio();
  const mounted = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false,
  );
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const descriptionId = useId();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!course) return;

    const shell = document.getElementById("site-shell");
    const returnFocusTarget = returnFocusRef.current;
    const previousOverflow = document.body.style.overflow;
    shell?.setAttribute("inert", "");
    document.body.style.overflow = "hidden";
    window.requestAnimationFrame(() => closeRef.current?.focus());

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;
      const focusable = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])',
        ),
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      shell?.removeAttribute("inert");
      document.body.style.overflow = previousOverflow;
      window.requestAnimationFrame(() => returnFocusTarget?.focus());
    };
  }, [course, onClose, returnFocusRef]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {course ? (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center overflow-y-auto bg-black/75 p-3 backdrop-blur-md sm:p-6"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.24 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
        >
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descriptionId}
            initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.975 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.985 }}
            transition={{ duration: reduceMotion ? 0 : 0.42, ease: [0.16, 1, 0.3, 1] }}
            className="playbook-panel relative my-auto grid max-h-[94svh] w-full max-w-7xl overflow-hidden bg-surface shadow-[0_40px_120px_rgba(0,0,0,0.45)] lg:grid-cols-[minmax(0,0.9fr)_minmax(30rem,1.1fr)]"
          >
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="focus-ring absolute right-4 top-4 z-20 grid size-10 place-items-center border border-border-strong bg-surface/90 text-foreground backdrop-blur-lg transition-colors hover:border-accent hover:text-accent sm:right-5 sm:top-5"
              aria-label={content.modal.close}
            >
              <X size={18} aria-hidden="true" />
            </button>

            <div className="max-h-[94svh] overflow-y-auto p-6 pb-9 pt-16 sm:p-9 sm:pt-16 lg:p-11 lg:pt-14">
              <div className="flex items-center gap-3">
                <span className="border border-accent/35 bg-accent-soft px-3 py-1.5 font-mono text-[0.6rem] font-semibold uppercase tracking-[0.1em] text-accent">{course.tag[locale]}</span>
                <span className="font-mono text-[0.65rem] text-muted">{course.code}</span>
              </div>
              <h2 id={titleId} className="mt-6 max-w-xl font-sans text-3xl font-extrabold uppercase leading-[0.98] tracking-[-0.045em] text-foreground sm:text-4xl">{course.name[locale]}</h2>
              <p id={descriptionId} className="mt-5 text-sm leading-7 text-muted sm:text-base">{course.summary[locale]}</p>

              <div className="mt-9 space-y-6">
                {([
                  ["connection", content.modal.connection, "accent"],
                  ["challenge", content.modal.challenge, "gold"],
                  ["concept", content.modal.concept, "violet"],
                  ["change", content.modal.change, "green"],
                ] as const).map(([key, label, tone]) => (
                  <section key={key} className={`reflection-item reflection-${tone}`}>
                    <h3 className="text-[0.7rem] font-bold uppercase tracking-[0.14em]">{label}</h3>
                    <p className="mt-2 text-sm leading-7 text-muted">{course.reflection[key][locale]}</p>
                  </section>
                ))}
              </div>
            </div>

            <div className="flex min-h-[30rem] flex-col border-t border-border bg-document lg:max-h-[94svh] lg:border-l lg:border-t-0">
              <div className="flex min-h-16 items-center justify-between gap-3 border-b border-border py-3 pl-4 pr-20 sm:pl-6">
                <p className="flex items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted">
                  <FileText size={15} className="text-accent" aria-hidden="true" />
                  {content.modal.artifactPreview}
                </p>
                {course.pdf ? (
                  <a
                    href={course.pdf}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring inline-flex items-center gap-2 border border-accent/35 bg-accent-soft px-3 py-2 font-mono text-[0.6rem] font-semibold uppercase tracking-[0.08em] text-accent transition-colors hover:border-accent"
                  >
                    <ExternalLink size={13} aria-hidden="true" />
                    {content.modal.openPdf}
                  </a>
                ) : null}
              </div>
              {course.pdf ? (
                <iframe
                  src={`${course.pdf}#toolbar=1&navpanes=0`}
                  title={`${content.modal.artifactPreview}: ${course.name[locale]}`}
                  loading="lazy"
                  className="min-h-[32rem] flex-1 bg-white"
                />
              ) : (
                <div className="grid min-h-[32rem] flex-1 place-items-center p-8 text-center">
                  <div className="max-w-sm">
                    <span className="mx-auto grid size-16 place-items-center border border-accent/35 bg-accent-soft text-accent">
                      <FileText size={27} aria-hidden="true" />
                    </span>
                    <h3 className="mt-6 font-sans text-2xl font-extrabold uppercase tracking-[-0.04em] text-foreground">{content.modal.artifactUnavailable}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted">{content.modal.artifactUnavailableHint}</p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}
