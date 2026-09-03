"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";
import { useState, type ReactNode } from "react";
import { usePortfolio } from "@/components/providers/portfolio-provider";

interface MotionSectionProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  delay?: number;
  order?: number;
  variant?: "section" | "card" | "panel";
}

export function MotionSection({
  children,
  delay = 0,
  order = 0,
  variant = "section",
  className,
  ...props
}: MotionSectionProps) {
  const reduceMotion = useReducedMotion();
  const { introComplete } = usePortfolio();
  const [inView, setInView] = useState(false);
  const ready = Boolean(reduceMotion) || introComplete;
  const revealed = Boolean(reduceMotion) || (introComplete && inView);
  const cardDirection = order % 2 === 0 ? -26 : 26;
  const hiddenState =
    variant === "card"
      ? {
          opacity: 0,
          x: cardDirection,
          y: 68,
          scale: 0.94,
          rotateZ: cardDirection / 32,
          filter: "blur(6px)",
        }
      : variant === "panel"
        ? { opacity: 0, y: 44, scale: 0.975, clipPath: "inset(0 0 12% 0)" }
        : { opacity: 0, y: 22 };
  const visibleState =
    variant === "panel"
      ? { opacity: 1, y: 0, scale: 1, clipPath: "inset(0 0 0% 0)" }
      : variant === "card"
        ? { opacity: 1, x: 0, y: 0, scale: 1, rotateZ: 0, filter: "blur(0px)" }
        : { opacity: 1, y: 0 };

  return (
    <motion.div
      {...props}
      className={`motion-reveal-group motion-${variant}-reveal ${className ?? ""}`}
      data-revealed={revealed}
      data-motion-variant={variant}
      initial={reduceMotion ? false : hiddenState}
      whileInView={reduceMotion ? undefined : ready ? visibleState : hiddenState}
      viewport={{ once: true, amount: variant === "panel" ? 0.22 : variant === "card" ? 0.16 : 0.14 }}
      transition={{
        duration: variant === "card" ? 0.84 : variant === "panel" ? 0.8 : 0.68,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      onViewportEnter={() => setInView(true)}
    >
      {children}
    </motion.div>
  );
}
