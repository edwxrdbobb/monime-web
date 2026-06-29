import { ArrowRight, Code2, FileText, Send, ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ScrollReveal, ScrollStagger } from "@/components/gsap/scroll-reveal";
import { SplitHeading } from "@/components/gsap/split-heading";
import { Parallax } from "@/components/gsap/parallax";
import { Blob } from "@/components/ui/blob";
import { GlowCard } from "@/components/ui/glow-card";
import { onlinePayments } from "@/lib/content";

const icons = { Code2, ShoppingCart, Send };

export function OnlinePayments() {
  return (
    <section
      id="online-payments"
      className="relative mx-auto max-w-6xl overflow-hidden px-4 py-24 sm:px-6"
    >
      <Parallax speed={35} className="absolute inset-0 -z-10">
        <Blob
          className="top-[6%] right-[2%] h-[300px] w-[300px] opacity-20"
          colors="from-sky-400 via-primary to-blue-600"
        />
      </Parallax>
      <ScrollReveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold tracking-wide text-primary uppercase">Online</p>
        <SplitHeading
          as="h2"
          type="lines"
          className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
        >
          Accept online payments
        </SplitHeading>
        <p className="mt-4 text-balance text-muted-foreground">
          If you&apos;re in e-commerce, we&apos;ll handle your online payments beautifully,
          easily connecting your online store to a variety of key payment methods.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button size="lg" className="h-11 rounded-xl px-6" nativeButton={false} render={<a href="#cta" />}>
            Get Started
            <ArrowRight className="size-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-11 rounded-xl px-6"
            nativeButton={false}
            render={<a href="#" />}
          >
            <FileText className="size-4" />
            Read the API Docs
          </Button>
        </div>
      </ScrollReveal>

      <ScrollStagger className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:items-start">
        {onlinePayments.map((item, i) => {
          const Icon = icons[item.icon as keyof typeof icons];
          return (
            <GlowCard key={item.title} className="flex h-full flex-col p-6">
              <span className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>

              {i === 0 && (
                <div className="mt-5 overflow-hidden rounded-xl bg-[#0b1120] p-4 font-mono text-[11px] leading-relaxed text-slate-300">
                  <p>
                    <span className="text-sky-400">const</span> payment ={" "}
                    <span className="text-sky-400">await</span>{" "}
                    <span className="text-emerald-400">monime</span>.checkout.
                    <span className="text-amber-300">create</span>({"{"}
                  </p>
                  <p className="pl-3 text-slate-400">
                    amount: <span className="text-orange-300">&quot;420.00&quot;</span>,
                  </p>
                  <p className="pl-3 text-slate-400">
                    currency: <span className="text-orange-300">&quot;SLE&quot;</span>,
                  </p>
                  <p>{"})"}</p>
                </div>
              )}
            </GlowCard>
          );
        })}
      </ScrollStagger>
    </section>
  );
}
