"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";

import { gsap, prefersReducedMotion } from "@/lib/gsap";

const STORAGE_KEY = "monime:page-transition";

// Anchors + control point all pinned to the bottom edge — zero-height, invisible.
const HIDDEN_BOTTOM = "M0,100 Q50,100 100,100 L100,100 L0,100 Z";
// Anchors pinned to the top edge, control point overshoots above the viewport —
// the gap between this and HIDDEN_BOTTOM is what produces the curved leading edge.
const FULL_COVER = "M0,0 Q50,-30 100,0 L100,100 L0,100 Z";
// Collapsed flat at the top edge — zero-height, invisible.
const HIDDEN_TOP = "M0,0 Q50,0 100,0 L100,0 L0,0 Z";

function isTransitionable(anchor: HTMLAnchorElement) {
  if (anchor.target === "_blank" || anchor.hasAttribute("download")) return false;
  const href = anchor.getAttribute("href");
  if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return false;
  }
  if (anchor.origin !== window.location.origin) return false;
  return true;
}

/**
 * Curved "curve-swipe" style transition between page navigations (see
 * https://demos.gsap.com/demo/curve-swipe/), recreated with MorphSVGPlugin since the
 * site navigates via plain full-page loads rather than client-side routing. The cover
 * half plays on click before navigating away; a sessionStorage flag tells the next
 * page to play the reveal half on mount, so the swipe reads as one continuous motion
 * across the two page loads.
 */
export function PageTransitionOverlay() {
  const pathRef = useRef<SVGPathElement>(null);

  useGSAP(() => {
    if (!pathRef.current || prefersReducedMotion()) {
      sessionStorage.removeItem(STORAGE_KEY);
      return;
    }

    if (sessionStorage.getItem(STORAGE_KEY)) {
      sessionStorage.removeItem(STORAGE_KEY);
      gsap.set(pathRef.current, { morphSVG: FULL_COVER });
      gsap.to(pathRef.current, { morphSVG: HIDDEN_TOP, duration: 0.5, ease: "power2.out" });
    } else {
      gsap.set(pathRef.current, { morphSVG: HIDDEN_BOTTOM });
    }

    function onClick(event: MouseEvent) {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const anchor = (event.target as HTMLElement)?.closest?.("a[href]") as
        | HTMLAnchorElement
        | null;
      if (!anchor || !isTransitionable(anchor)) return;

      event.preventDefault();
      const href = anchor.href;

      gsap.to(pathRef.current, {
        morphSVG: FULL_COVER,
        duration: 0.55,
        ease: "power2.in",
        onComplete() {
          sessionStorage.setItem(STORAGE_KEY, "1");
          window.location.href = href;
        },
      });
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <svg
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[100] h-full w-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="page-transition-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--primary)" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>
      </defs>
      <path ref={pathRef} fill="url(#page-transition-gradient)" />
    </svg>
  );
}
