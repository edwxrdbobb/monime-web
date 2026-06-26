"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";

import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type ParallaxProps = {
  children: React.ReactNode;
  className?: string;
  /** Vertical travel distance in pixels across the scroll range; negative drifts upward. */
  speed?: number;
};

/** Drifts a child element vertically, scrubbed to scroll position, for depth/object motion. */
export function Parallax({ children, className, speed = -60 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!ref.current || prefersReducedMotion()) return;

      gsap.fromTo(
        ref.current,
        { y: -speed },
        {
          y: speed,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
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
