import type { Metadata } from "next";
import { ArrowRight, FileText, Globe, ShieldCheck, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SiteFrame } from "@/components/sections/site-frame";
import { PageHero } from "@/components/sections/page-hero";
import { FeatureCards } from "@/components/sections/feature-cards";
import { PaymentMethods } from "@/components/sections/payment-methods";
import { PciBanner } from "@/components/sections/pci-banner";
import { MorePaymentFlows } from "@/components/sections/more-payment-flows";

export const metadata: Metadata = {
  title: "Online Payments — Monime",
  description:
    "Grow revenue with online payments. Accept and manage payments via any method with optimised flows, flexible integrations, and top client support.",
};

const benefits = [
  {
    title: "Expand coverage",
    description:
      "Welcome worldwide consumers with coverage for the most popular payment methods.",
    icon: Globe,
  },
  {
    title: "Faster integrations",
    description:
      "Plug in quickly with developer-friendly SDKs, APIs, and prebuilt checkout flows.",
    icon: Zap,
  },
  {
    title: "Secure & reliable",
    description:
      "Enterprise-grade security with 99.99% uptime and built-in fraud protection.",
    icon: ShieldCheck,
  },
];

export default function OnlinePaymentsPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="Plug in. Integrate. Code. Link."
        title="Grow revenue with online payments"
        description="Enhance your online payments with Monime, a scalable gateway. Accept and manage payments via any method, with optimised flows, flexible integrations, and top client support."
        actions={
          <>
            <Button
              size="lg"
              className="h-11 rounded-full bg-gradient-to-r from-primary to-sky-500 px-6 glow-primary"
              nativeButton={false}
              render={<a href="/contact" />}
            >
              Get Started
              <ArrowRight className="size-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-11 rounded-full px-6"
              nativeButton={false}
              render={<a href="#" />}
            >
              <FileText className="size-4" />
              Read the API Docs
            </Button>
          </>
        }
        visual={<CheckoutMockup />}
      />

      <FeatureCards
        title="All local payment methods, one integration"
        description="Monime gives you one powerful API to accept and manage payments across the world, with local methods tailored to your customers."
        items={benefits}
      />

      <PciBanner />
      <PaymentMethods />
      <MorePaymentFlows />
    </SiteFrame>
  );
}

function CheckoutMockup() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute -inset-10 -z-10 rounded-[3rem] bg-gradient-to-br from-sky-400/25 via-primary/15 to-transparent blur-3xl" />
      <div className="glass-strong rounded-3xl p-5 shadow-3d-lg">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <p className="text-sm font-semibold text-foreground">Checkout</p>
          <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-600">
            Secure
          </span>
        </div>
        <div className="mt-5 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Order total</span>
            <span className="text-lg font-semibold text-foreground">SLE 420.00</span>
          </div>
          {["Mobile Money", "Card", "Bank Transfer"].map((m, i) => (
            <div
              key={m}
              className={`flex items-center gap-3 rounded-xl border p-3 ${
                i === 0 ? "border-primary/40 bg-primary/[0.04]" : "border-border"
              }`}
            >
              <span
                className={`flex size-8 items-center justify-center rounded-lg ${
                  i === 0 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}
              >
                <span className="size-3.5 rounded-sm bg-current opacity-70" />
              </span>
              <span className="text-sm font-medium text-foreground">{m}</span>
              <span
                className={`ml-auto size-4 rounded-full border-2 ${
                  i === 0 ? "border-primary bg-primary" : "border-border"
                }`}
              />
            </div>
          ))}
        </div>
        <div className="mt-5 flex h-11 items-center justify-center rounded-xl bg-gradient-to-r from-primary to-sky-500 text-sm font-semibold text-white">
          Pay SLE 420.00
        </div>
      </div>
    </div>
  );
}
