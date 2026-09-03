"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { usePortfolio } from "@/components/providers/portfolio-provider";

const titleWords = ["WELCOME", "TO MY", "JOURNEY"];

const journeySteps = [
  { index: "01", label: "Belajar" },
  { index: "02", label: "Praktik" },
  { index: "03", label: "Refleksi" },
];

const scanRows = [
  { label: "Name", value: "Zidan Insafi" },
  { label: "Program", value: "PPG Prajabatan" },
  { label: "Field", value: "PJOK" },
];

const routeNodes = [
  { cx: 178, cy: 650 },
  { cx: 506, cy: 540 },
  { cx: 824, cy: 320 },
  { cx: 1250, cy: 210 },
];

export function JourneyIntro() {
  const [isVisible, setIsVisible] = useState(true);
  const shouldReduceMotion = useReducedMotion();
  const { completeIntro } = usePortfolio();

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const dismissTimer = window.setTimeout(
      () => setIsVisible(false),
      shouldReduceMotion ? 450 : 3400,
    );
    const revealTimer = window.setTimeout(
      completeIntro,
      shouldReduceMotion ? 450 : 3340,
    );

    return () => {
      window.clearTimeout(dismissTimer);
      window.clearTimeout(revealTimer);
      document.body.style.overflow = previousOverflow;
    };
  }, [completeIntro, shouldReduceMotion]);

  useEffect(() => {
    if (!isVisible) {
      document.body.style.overflow = "";
    }
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          className="journey-intro"
          initial={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          exit={
            shouldReduceMotion
              ? { opacity: 0 }
              : { opacity: 0, y: "-4%", scale: 1.025, filter: "blur(10px)" }
          }
          transition={{
            duration: shouldReduceMotion ? 0.18 : 0.82,
            ease: [0.76, 0, 0.24, 1],
          }}
          aria-label="Welcome to my journey"
          role="status"
        >
          <div className="journey-intro-atmosphere" aria-hidden="true" />

          <svg
            className="journey-intro-map"
            viewBox="0 0 1440 900"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
          >
            <g className="journey-intro-contours">
              <path d="M-120 210C170 42 344 88 526 224S888 412 1116 214s382-118 494-14" />
              <path d="M-160 286C154 92 348 142 522 278S884 458 1140 264s370-108 486-12" />
              <path d="M-184 678C82 514 328 542 494 674s402 176 646-12 392-74 494 26" />
              <path d="M-202 748C92 572 302 604 482 730s406 158 670-20 370-56 486 30" />
              <ellipse cx="1040" cy="450" rx="226" ry="318" />
              <ellipse cx="1040" cy="450" rx="286" ry="382" />
            </g>

            <motion.path
              className="journey-intro-route"
              d="M178 650C334 694 388 552 506 540S682 430 824 320s278 36 426-110"
              pathLength="1"
              initial={{ pathLength: shouldReduceMotion ? 1 : 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                delay: shouldReduceMotion ? 0 : 0.32,
                duration: shouldReduceMotion ? 0.1 : 2.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            />

            {routeNodes.map((node, index) => (
              <motion.g
                key={`${node.cx}-${node.cy}`}
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: shouldReduceMotion ? 0 : 0.58 + index * 0.42,
                  duration: 0.38,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{ transformOrigin: `${node.cx}px ${node.cy}px` }}
              >
                <circle className="journey-intro-node-halo" cx={node.cx} cy={node.cy} r="18" />
                <circle className="journey-intro-node" cx={node.cx} cy={node.cy} r="5" />
              </motion.g>
            ))}
          </svg>

          <div className="journey-intro-layout">
            <section className="journey-intro-copy" aria-hidden="true">
              <motion.p
                className="journey-intro-kicker"
                initial={{ opacity: 0, x: -18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: shouldReduceMotion ? 0 : 0.16, duration: 0.5 }}
              >
                Tactical Journey / 2026
              </motion.p>

              <div className="journey-intro-title">
                {titleWords.map((word, index) => (
                  <motion.span
                    key={word}
                    initial={
                      shouldReduceMotion
                        ? { opacity: 0 }
                        : { opacity: 0, y: "0.72em", filter: "blur(8px)" }
                    }
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                      delay: shouldReduceMotion ? 0 : 0.36 + index * 0.14,
                      duration: shouldReduceMotion ? 0.12 : 0.72,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </div>

              <div className="journey-intro-steps">
                {journeySteps.map((step, index) => (
                  <motion.span
                    key={step.index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: shouldReduceMotion ? 0 : 1.05 + index * 0.2 }}
                  >
                    <b>{step.index}</b>
                    {step.label}
                  </motion.span>
                ))}
              </div>
            </section>

            <motion.aside
              className="journey-identity-scan"
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: shouldReduceMotion ? 0 : 0.72,
                duration: shouldReduceMotion ? 0.12 : 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              aria-hidden="true"
            >
              <div className="journey-scan-beam" />
              <div className="journey-scan-head">
                <span>Identity Scan</span>
                <span className="journey-scan-signal">Live</span>
              </div>
              <dl>
                {scanRows.map((row, index) => (
                  <motion.div
                    key={row.label}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: shouldReduceMotion ? 0 : 1.08 + index * 0.2 }}
                  >
                    <dt>{row.label}</dt>
                    <dd>{row.value}</dd>
                  </motion.div>
                ))}
              </dl>
              <motion.div
                className="journey-scan-ready"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: shouldReduceMotion ? 0 : 1.82 }}
              >
                <span /> Status: Ready
              </motion.div>
            </motion.aside>
          </div>

          <div className="journey-intro-progress" aria-hidden="true">
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                delay: shouldReduceMotion ? 0 : 0.18,
                duration: shouldReduceMotion ? 0.1 : 2.85,
                ease: "linear",
              }}
            />
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
