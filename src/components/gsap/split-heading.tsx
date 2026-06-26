"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";

import { gsap, SplitText, prefersReducedMotion } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type SplitHeadingProps = {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  type?: "lines" | "words" | "chars";
  delay?: number;
  start?: string;
};

/** Masks and reveals text line-by-line (or word/char) the first time it scrolls into view. */
export function SplitHeading({
  children,
  className,
  as: Tag = "h2",
  type = "lines",
  delay = 0,
  start = "top 85%",
}: SplitHeadingProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;

      if (prefersReducedMotion()) return;

      const split = SplitText.create(ref.current, {
        type,
        mask: type,
        autoSplit: true,
        onSplit(self) {
          const targets = type === "lines" ? self.lines : type === "words" ? self.words : self.chars;
          return gsap.from(targets, {
            yPercent: 110,
            opacity: 0,
            duration: 0.9,
            delay,
            ease: "power4.out",
            stagger: 0.05,
            scrollTrigger: { trigger: ref.current, start, once: true },
          });
        },
      });

      return () => split.revert();
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} className={cn(className)}>
      {children}
    </Tag>
  );
}
