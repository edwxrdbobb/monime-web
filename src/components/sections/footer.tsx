"use client";

import type { SVGProps } from "react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

import { Logo } from "@/components/sections/logo";
import { footerLinks } from "@/lib/content";
import { ScrollReveal, ScrollStagger } from "@/components/gsap/scroll-reveal";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5C3.6 3.5 2.5 4.6 2.5 6s1.1 2.5 2.48 2.5S7.5 7.4 7.5 6 6.36 3.5 4.98 3.5ZM2.9 9.75h4.16V21H2.9V9.75ZM9.77 9.75h3.99v1.54h.06c.55-1.04 1.9-2.13 3.91-2.13 4.18 0 4.95 2.75 4.95 6.33V21h-4.16v-5.05c0-1.2-.02-2.75-1.68-2.75-1.68 0-1.94 1.31-1.94 2.66V21H9.77V9.75Z" />
    </svg>
  );
}

function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 3H21.5l-7.4 8.46L22.5 21h-6.93l-5.43-6.65L4.1 21H.84l7.9-9.03L.5 3h7.1l4.9 6.1L18.24 3Zm-2.43 16h1.84L7.27 4.93H5.3L15.81 19Z" />
    </svg>
  );
}

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.25c0-.87.24-1.46 1.5-1.46h1.6V4.1c-.28-.04-1.23-.1-2.33-.1-2.3 0-3.87 1.4-3.87 3.98V10.5H8.4v3h2.5V21h2.6Z" />
    </svg>
  );
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const socials = [
  { icon: LinkedinIcon, href: "#" },
  { icon: XIcon, href: "#" },
  { icon: FacebookIcon, href: "#" },
  { icon: InstagramIcon, href: "#" },
];

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!footerRef.current || prefersReducedMotion()) return;

      gsap.fromTo(
        footerRef.current,
        { y: 64, scale: 0.96 },
        {
          y: 0,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top bottom",
            end: "top 60%",
            scrub: true,
          },
        },
      );
    },
    { scope: footerRef },
  );

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden rounded-t-[2.5rem] bg-[#0a1226] px-4 pt-16 pb-10 text-slate-300 sm:px-6"
    >
      <div className="bg-dot pointer-events-none absolute inset-0 opacity-[0.04]" />

      <div className="relative mx-auto max-w-6xl">
        <ScrollStagger className="grid grid-cols-2 gap-10 sm:grid-cols-4" y={20}>
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <p className="text-sm font-semibold text-white">{section}</p>
              <ul className="mt-4 flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.title}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 transition-colors hover:text-white"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </ScrollStagger>

        <ScrollReveal
          delay={0.1}
          className="mt-14 flex flex-col gap-8 border-t border-white/10 pt-8 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <Logo alwaysWhite />
            <p className="mt-4 max-w-sm text-sm text-slate-400">
              Monime helps thousands of businesses collect payments, make payouts, and
              manage transactions. Licensed by the Bank of Sierra Leone.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:items-end">
            <div>
              <p className="text-xs tracking-widest text-slate-500 uppercase">Contact</p>
              <a href="mailto:support@monime.io" className="text-sm text-slate-300 hover:text-white">
                support@monime.io
              </a>
            </div>
            <div className="flex gap-2">
              {socials.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="flex size-9 items-center justify-center rounded-full border border-white/10 text-slate-300 transition-colors hover:border-white/30 hover:text-white"
                >
                  <social.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <p className="mt-10 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Monime. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
