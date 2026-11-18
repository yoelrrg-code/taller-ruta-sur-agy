"use client";

import { MotionConfig, motion } from "motion/react";
import type { ReactNode } from "react";

const SILKY_EASE = [0.16, 1, 0.3, 1] as const;

export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

interface GlassRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  immediate?: boolean;
  direction?: "up" | "down" | "left" | "right";
}

export function GlassReveal({
  children,
  className,
  delay = 0,
  immediate = false,
  direction = "up",
}: GlassRevealProps) {
  const offset =
    direction === "up"
      ? { y: 44, x: 0 }
      : direction === "down"
        ? { y: -44, x: 0 }
        : direction === "left"
          ? { x: 44, y: 0 }
          : { x: -44, y: 0 };

  const initialState = {
    opacity: 0,
    ...offset,
    scale: 0.96,
    filter: "blur(6px)",
  };

  const targetState = {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
  };

  if (immediate) {
    return (
      <motion.div
        initial={initialState}
        animate={targetState}
        transition={{ duration: 0.85, delay, ease: SILKY_EASE }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={initialState}
      whileInView={targetState}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.85, delay, ease: SILKY_EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface GlassCardMotionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function GlassCardMotion({
  children,
  className,
  delay = 0,
}: GlassCardMotionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 44, scale: 0.95, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.1 }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.35, ease: SILKY_EASE },
      }}
      whileTap={{ scale: 0.985 }}
      transition={{ duration: 0.78, delay, ease: SILKY_EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
