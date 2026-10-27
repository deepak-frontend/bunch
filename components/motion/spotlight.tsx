"use client";

import { useEffect } from "react";

// Feeds the cursor position into any `.spotlight` element so CSS can paint a
// radial glow that follows the pointer.
export function Spotlight() {
  useEffect(() => {
    function move(event: PointerEvent) {
      const target = (event.target as Element | null)?.closest<HTMLElement>(
        ".spotlight",
      );
      if (!target) return;
      const rect = target.getBoundingClientRect();
      target.style.setProperty("--mx", `${event.clientX - rect.left}px`);
      target.style.setProperty("--my", `${event.clientY - rect.top}px`);
    }
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, []);
  return null;
}
