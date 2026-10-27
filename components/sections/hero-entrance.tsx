"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function HeroEntrance({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className="hero-visual"
      initial={reduce ? false : { opacity: 0, y: 60, rotateX: 18, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
      transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformPerspective: 1400 }}
    >
      {children}
    </motion.div>
  );
}
