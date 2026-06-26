import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/gsap/scroll-reveal";
import { SplitHeading } from "@/components/gsap/split-heading";
import { Magnetic } from "@/components/gsap/magnetic";

export function Cta() {
  return (
    <section id="cta" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <ScrollReveal scale={0.92} start="top 88%">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary via-blue-600 to-blue-700 px-6 py-16 text-center shadow-2xl shadow-primary/30 sm:px-12 sm:py-20">
          <div className="bg-grid absolute inset-0 opacity-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
          <div className="absolute -top-24 -right-24 size-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 size-72 rounded-full bg-white/10 blur-3xl" />

          <SplitHeading
            as="h2"
            type="words"
            className="relative z-10 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            We are your partner for growth
          </SplitHeading>
          <p className="relative z-10 mt-3 text-blue-100">
            Let us help you grow your business
          </p>
          <Magnetic className="relative z-10 mt-8">
            <Button
              size="lg"
              variant="secondary"
              className="h-11 rounded-xl bg-white px-7 text-[0.95rem] text-primary hover:bg-white/90"
              nativeButton={false}
              render={<a href="/contact" />}
            >
              Get Started
              <ArrowRight className="size-4" />
            </Button>
          </Magnetic>
        </div>
      </ScrollReveal>
    </section>
  );
}
