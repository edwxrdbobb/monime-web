"use client";

import { useEffect, useState } from "react";
import { ReactLenis, useLenis } from "lenis/react";

import { gsap, ScrollTrigger } from "@/lib/gsap";

/** Drives Lenis's RAF off GSAP's ticker and keeps ScrollTrigger in sync with smoothed scroll. */
function LenisGsapSync() {
  const lenis = useLenis(() => ScrollTrigger.update());

  useEffect(() => {
    if (!lenis) return;

    const onTick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(onTick);
    };
  }, [lenis]);

  useEffect(() => {
    if (!lenis) return;
    const activeLenis = lenis;

    function onClick(event: MouseEvent) {
      const anchor = (event.target as HTMLElement)?.closest?.('a[href^="#"]');
      if (!anchor) return;

      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#") return;

      const target = document.querySelector(hash);
      if (!target) return;

      event.preventDefault();
      activeLenis.scrollTo(target as HTMLElement, { offset: -96, duration: 1.2 });
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [lenis]);

  return null;
}

/**
 * Wraps the app in a global Lenis instance for buttery smooth scrolling, synced to GSAP's
 * ticker so ScrollTrigger-driven animations stay frame-perfect. Skipped entirely when the
 * user prefers reduced motion, falling back to plain native scrolling.
 */
export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const [smoothEnabled, setSmoothEnabled] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setSmoothEnabled(!reduceMotion);
  }, []);

  if (!smoothEnabled) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      root
      options={{ lerp: 0.11, duration: 1.1, smoothWheel: true, autoRaf: false }}
    >
      <LenisGsapSync />
      {children}
    </ReactLenis>
  );
}
