import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function Cta() {
  return (
    <section id="cta" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary via-blue-600 to-blue-700 px-6 py-16 text-center shadow-2xl shadow-primary/30 sm:px-12 sm:py-20">
          <div className="bg-grid absolute inset-0 opacity-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
          <div className="absolute -top-24 -right-24 size-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 size-72 rounded-full bg-white/10 blur-3xl" />

          <h2 className="relative z-10 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            We are your partner for growth
          </h2>
          <p className="relative z-10 mt-3 text-blue-100">
            Let us help you grow your business
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="relative z-10 mt-8 h-11 rounded-xl bg-white px-7 text-[0.95rem] text-primary hover:bg-white/90"
            nativeButton={false}
            render={<a href="/contact" />}
          >
            Get Started
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
