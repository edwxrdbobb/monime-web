"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";

import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  scale?: number;
  start?: string;
};

/** Fades + slides an element up into place the first time it crosses into view. */
export function ScrollReveal({
  children,
  className,
  delay = 0,
  y = 32,
  scale,
  start = "top 85%",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;

      if (prefersReducedMotion()) {
        gsap.set(ref.current, { opacity: 1, y: 0, scale: 1 });
        return;
      }

      gsap.fromTo(
        ref.current,
        { opacity: 0, y, ...(scale ? { scale } : {}) },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start, once: true },
        },
      );
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}

type ScrollStaggerProps = {
  children: React.ReactNode;
  className?: string;
  y?: number;
  stagger?: number;
  start?: string;
};

/** Fades + slides up the direct children of the wrapper in a staggered sequence on scroll. */
export function ScrollStagger({
  children,
  className,
  y = 28,
  stagger = 0.1,
  start = "top 85%",
}: ScrollStaggerProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      const items = gsap.utils.toArray<HTMLElement>(ref.current.children);
      if (!items.length) return;

      if (prefersReducedMotion()) {
        gsap.set(items, { opacity: 1, y: 0 });
        return;
      }

      gsap.fromTo(
        items,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger,
          scrollTrigger: { trigger: ref.current, start, once: true },
        },
      );
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}
