import Image from "next/image";
import { ArrowUpRight, ShieldCheck, Wallet } from "lucide-react";

import { ScrollReveal, ScrollStagger } from "@/components/gsap/scroll-reveal";
import { GlowCard } from "@/components/ui/glow-card";
import { features } from "@/lib/content";

const icons = { ShieldCheck, Wallet, ArrowUpRight };

const collage = [
  {
    label: "Retail",
    image: "/retail-boutique-payment.jpg",
    alt: "A boutique shop owner accepting a tap-to-pay purchase from customers",
  },
  {
    label: "Freelance",
    image: "/tech-freelancer-workspace.jpg",
    alt: "A freelancer working from home on a laptop with the Monime dashboard open",
  },
  {
    label: "Food & Beverage",
    image: "/cafe-tap-to-pay.jpg",
    alt: "A café owner accepting a contactless payment at the counter",
  },
];

export function Features() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <ScrollReveal className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Take charge of your business
        </h2>
        <p className="mt-4 text-balance text-muted-foreground">
          Accept payments, manage finances, grow your revenue. 2,000+ businesses have
          already chosen to grow with us. Let&apos;s do it with you too.
        </p>
      </ScrollReveal>

      <ScrollStagger className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {collage.map((item) => (
          <div
            key={item.label}
            className="group relative h-56 overflow-hidden rounded-3xl p-5 shadow-lg"
          >
            <Image
              src={item.image}
              alt={item.alt}
              fill
              sizes="(min-width: 640px) 33vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/0 transition-opacity group-hover:from-black/85" />
            <span className="relative z-10 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
              {item.label}
            </span>
            <p className="relative z-10 mt-auto pt-32 text-lg font-semibold text-white drop-shadow-sm">
              Growing with Monime
            </p>
          </div>
        ))}
      </ScrollStagger>

      <ScrollStagger className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {features.map((feature) => {
          const Icon = icons[feature.icon as keyof typeof icons];
          return (
            <GlowCard key={feature.title} className="h-full p-6">
              <span className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
            </GlowCard>
          );
        })}
      </ScrollStagger>
    </section>
  );
}
