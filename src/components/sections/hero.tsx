import { ArrowRight, ChevronRight, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Blob } from "@/components/ui/blob";
import { HeroMockup } from "@/components/sections/hero-mockup";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-24 sm:pt-48 sm:pb-32">
      {/* Layered backdrop: dotted grid + organic blobs (reference aesthetic) */}
      <div className="bg-dot absolute inset-0 -z-20 mask-fade-b opacity-50" />
      <div className="absolute inset-x-0 top-0 -z-20 h-[680px] bg-gradient-to-b from-primary/10 via-background to-transparent" />
      <Blob
        className="top-[-12%] left-1/2 h-[520px] w-[620px] -translate-x-1/2 opacity-40"
        colors="from-primary via-blue-500 to-violet-500"
      />
      <Blob
        className="top-[18%] right-[-6%] h-[360px] w-[360px] opacity-30"
        colors="from-violet-500 via-indigo-500 to-primary"
        variant="slow"
      />
      <Blob
        className="bottom-[-10%] left-[-6%] h-[340px] w-[340px] opacity-25"
        colors="from-sky-400 via-primary to-blue-600"
      />

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-16 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-12">
        <div className="flex max-w-xl flex-col items-center text-center lg:items-start lg:text-left">
          <Reveal>
            <a
              href="#online-payments"
              className="glass group inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium text-foreground/80 shadow-3d transition-colors hover:text-foreground"
            >
              <span className="rounded-full bg-gradient-to-br from-primary to-violet-500 px-2 py-0.5 text-[10px] font-semibold text-white">
                New
              </span>
              See the latest API docs
              <ChevronRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Modern payments for{" "}
              <span className="bg-gradient-to-br from-primary via-blue-500 to-violet-500 bg-clip-text text-transparent">
                growing businesses
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-5 max-w-lg text-balance text-base text-muted-foreground sm:text-lg">
              Sierra Leone&apos;s most reliable payment gateway — an end-to-end platform
              that boosts payment performance and streamlines finances so you can grow
              revenue and retain customers.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
              <Button
                size="lg"
                className="h-11 rounded-full bg-gradient-to-r from-primary to-violet-600 px-6 text-[0.95rem] glow-primary transition-transform hover:scale-[1.02] hover:from-primary hover:to-violet-500"
                nativeButton={false}
                render={<a href="#cta" />}
              >
                Get Started
                <ArrowRight className="size-4" />
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="glass group h-11 rounded-full px-5 text-[0.95rem] shadow-3d"
                nativeButton={false}
                render={<a href="#contact" />}
              >
                Contact Sales
                <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 flex items-center gap-3">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">2,000+</span> businesses
                onboard
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="w-full max-w-md lg:max-w-none lg:flex-1">
          <HeroMockup />
        </Reveal>
      </div>
    </section>
  );
}
