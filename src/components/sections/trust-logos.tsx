import Image from "next/image";

import { Marquee } from "@/components/ui/marquee";
import { ScrollReveal } from "@/components/gsap/scroll-reveal";
import { trustLogos } from "@/lib/content";

export function TrustLogos() {
  return (
    <section className="border-y border-border/70 bg-muted/30 py-10">
      <ScrollReveal>
        <p className="mb-6 text-center text-xs font-medium tracking-widest text-muted-foreground uppercase">
          Trusted by 2,000+ businesses across Sierra Leone
        </p>
      </ScrollReveal>
      <Marquee duration={28}>
        {trustLogos.map((logo) => (
          <Image
            key={logo.name}
            src={logo.src}
            alt={logo.name}
            title={logo.name}
            width={logo.width}
            height={logo.height}
            className="h-9 w-auto object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 dark:opacity-80 dark:invert dark:hover:invert-0"
          />
        ))}
      </Marquee>
    </section>
  );
}
