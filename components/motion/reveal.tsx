"use client";

import {
  animate,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { Fragment, useEffect, useRef, type ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

// Splits the headline into words that rise into place one after another.
// Words from `accent` are set in the serif italic; without it, the last two
// words of `text` are.
export function HeroTitle({
  text,
  accent,
  as: Tag = "h1",
}: {
  text: string;
  accent?: string;
  as?: "h1" | "h2";
}) {
  const reduce = useReducedMotion();
  const lead = text.split(" ").filter(Boolean);
  const tail = accent ? accent.split(" ").filter(Boolean) : [];
  const words = [...lead, ...tail];
  const accentFrom = accent ? lead.length : words.length - 2;
  const label = accent ? `${text} ${accent}` : text;
  return (
    <Tag aria-label={label}>
      {words.map((word, index) => (
        <Fragment key={`${word}-${index}`}>
          <span className="word-mask" aria-hidden="true">
            <motion.span
              className={index >= accentFrom ? "accent-word" : undefined}
              initial={reduce ? false : { y: "110%", rotate: 4 }}
              animate={{ y: "0%", rotate: 0 }}
              transition={{ duration: 0.9, delay: 0.06 * index, ease }}
            >
              {word}
            </motion.span>
          </span>
          {index < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </Tag>
  );
}

// Counts the numeric part of values like "~40%", "5.5 hrs" or "99.8%" up
// from zero when scrolled into view, keeping any prefix and suffix.
export function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const match = value.match(/^([^\d]*)([\d,.]+)(.*)$/);
  const animated = Boolean(match) && !reduce;

  // Server HTML carries the real value; reset the text to zero once hydrated
  // (if still off-screen) so the count has somewhere to start from. Text is
  // written straight to the node to avoid a re-render per frame.
  useEffect(() => {
    if (animated && !inView && ref.current) {
      ref.current.textContent = `${match![1]}0${match![3]}`;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animated]);

  useEffect(() => {
    if (!animated || !inView) return;
    const [, prefix, number, suffix] = match!;
    const target = Number(number.replace(/,/g, ""));
    const decimals = number.includes(".") ? number.split(".")[1].length : 0;
    const write = (text: string) => {
      if (ref.current) ref.current.textContent = text;
    };
    const controls = animate(0, target, {
      duration: 1.6,
      ease,
      onUpdate: (latest) =>
        write(`${prefix}${latest.toFixed(decimals)}${suffix}`),
      onComplete: () => write(value),
    });
    // Animation frames can be throttled (background tabs, headless renders);
    // never leave the real number stuck at zero.
    const settle = window.setTimeout(() => write(value), 1800);
    return () => {
      controls.stop();
      window.clearTimeout(settle);
      write(value);
    };
    // match is derived from value
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animated, inView, value]);

  return (
    <span ref={ref} aria-label={value}>
      {value}
    </span>
  );
}
