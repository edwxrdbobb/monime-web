"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";

import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type MagneticProps = {
  children: React.ReactNode;
  className?: string;
  /** How far the element travels toward the cursor, in pixels. */
  strength?: number;
};

/** Wraps an element so it glides toward the cursor on hover and eases back on leave. */
export function Magnetic({ children, className, strength = 0.35 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { contextSafe } = useGSAP({ scope: ref });

  const handleMove = contextSafe((event: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion() || !ref.current) return;
    const bounds = ref.current.getBoundingClientRect();
    const x = (event.clientX - bounds.left - bounds.width / 2) * strength;
    const y = (event.clientY - bounds.top - bounds.height / 2) * strength;
    gsap.to(ref.current, { x, y, duration: 0.4, ease: "power3.out" });
  });

  const handleLeave = contextSafe(() => {
    if (!ref.current) return;
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.4)" });
  });

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn("inline-block", className)}
    >
      {children}
    </div>
  );
}
