import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Cpu, Hash, Smartphone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SiteFrame } from "@/components/sections/site-frame";
import { PageHero } from "@/components/sections/page-hero";
import { FeatureCards } from "@/components/sections/feature-cards";
import { PciBanner } from "@/components/sections/pci-banner";
import { MorePaymentFlows } from "@/components/sections/more-payment-flows";

export const metadata: Metadata = {
  title: "Payment Codes & USSD — Monime",
  description:
    "Accept payments across all networks. Receive money from customers using a unique USSD code or set up a custom menu.",
};

const benefits = [
  {
    title: "A single USSD code",
    description:
      "Join thousands of merchants who accept payments from all networks.",
    icon: Hash,
  },
  {
    title: "Works on any phone",
    description:
      "All your customers need is their mobile phone and no internet.",
    icon: Smartphone,
  },
  {
    title: "Programmable USSD",
    description:
      "Leverage our programmable USSD code to stay ahead in the digital age.",
    icon: Cpu,
  },
];

export default function PaymentCodesPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="USSD"
        title="Accept payments across all networks"
        description="Receive money from customers using a unique code or set up a custom menu, whichever suits your business."
        actions={
          <Button
            size="lg"
            className="h-11 rounded-full bg-gradient-to-r from-primary to-sky-500 px-6 glow-primary"
            nativeButton={false}
            render={<a href="/contact" />}
          >
            Get Started
            <ArrowRight className="size-4" />
          </Button>
        }
        stats={[
          { value: "3", label: "Momo Operators" },
          { value: "1", label: "USSD Code" },
        ]}
        visual={
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-10 -z-10 rounded-[3rem] bg-gradient-to-br from-primary/25 via-sky-400/15 to-transparent blur-3xl" />
            <div className="glass-strong overflow-hidden rounded-3xl p-2 shadow-3d-lg">
              <Image
                src="/heroimg.webp"
                alt="Customer dialing a Monime USSD payment code on a mobile phone"
                width={689}
                height={1024}
                priority
                className="h-auto w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        }
      />

      <FeatureCards items={benefits} variant="plain" />
      <PciBanner />
      <MorePaymentFlows />
    </SiteFrame>
  );
}
