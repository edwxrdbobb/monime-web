import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Cpu, Globe, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SiteFrame } from "@/components/sections/site-frame";
import { PageHero } from "@/components/sections/page-hero";
import { InPerson } from "@/components/sections/in-person";
import { FeatureCards } from "@/components/sections/feature-cards";
import { PciBanner } from "@/components/sections/pci-banner";
import { MorePaymentFlows } from "@/components/sections/more-payment-flows";

export const metadata: Metadata = {
  title: "In-Person Payments — Monime",
  description:
    "Simple, reliable in-person payments. Collect payments at POS via mobile money, card, or alternative payment methods.",
};

const benefits = [
  {
    title: "Expand coverage",
    description: "Welcome worldwide consumers with coverage for top payment methods.",
    icon: Globe,
  },
  {
    title: "Boost efficiency",
    description: "Cut costs and simplify management with one-step integration.",
    icon: Zap,
  },
  {
    title: "Leverage technology",
    description: "Be ahead in the game with our advanced payment technology.",
    icon: Cpu,
  },
];

export default function InPersonPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="Get paid in-person"
        title="Simple, reliable in-person payments"
        description="Collect payments at POS via mobile money, card, or alternative payment methods. Monime in-person payments works with our terminal or any existing device — combine with online payments for a truly unified commerce experience."
        actions={
          <>
            <Button
              size="lg"
              className="h-11 rounded-full bg-gradient-to-r from-primary to-violet-600 px-6 glow-primary"
              nativeButton={false}
              render={<a href="/contact" />}
            >
              Get Started for free
              <ArrowRight className="size-4" />
            </Button>
            <span className="flex items-center text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">2,000+</span>
              <span className="ml-1.5">already joined</span>
            </span>
          </>
        }
        visual={
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-10 -z-10 rounded-[3rem] bg-gradient-to-br from-primary/25 via-violet-400/15 to-transparent blur-3xl" />
            <div className="glass-strong overflow-hidden rounded-3xl p-2 shadow-3d-lg">
              <Image
                src="/woman-ussd-code.webp"
                alt="Merchant accepting an in-person payment with a Monime USSD code"
                width={683}
                height={1024}
                priority
                className="h-auto w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        }
      />

      <InPerson />

      <FeatureCards
        title="All local payment methods, one integration"
        items={benefits}
      />

      <PciBanner />
      <MorePaymentFlows />
    </SiteFrame>
  );
}
