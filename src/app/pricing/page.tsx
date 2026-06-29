import type { Metadata } from "next";
import { BarChart3, Check, Headphones, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { GlowCard } from "@/components/ui/glow-card";
import { SiteFrame } from "@/components/sections/site-frame";
import { PageHero } from "@/components/sections/page-hero";
import { PaymentMethods } from "@/components/sections/payment-methods";
import { FeatureCards } from "@/components/sections/feature-cards";
import { PciBanner } from "@/components/sections/pci-banner";
import { FaqSection } from "@/components/sections/faq-section";

export const metadata: Metadata = {
  title: "Pricing — Monime",
  description:
    "Simple, fair pricing. From emerging startups to scaling enterprises, Monime has you covered.",
};

const plans = [
  {
    rate: "1.5%",
    name: "Local Transactions",
    blurb: "Includes payments from Mobile Money, banks, and wallets.",
    points: ["Accept all local payment methods", "Transaction fees subject to 15% GST"],
    featured: true,
  },
  {
    rate: "2.8%",
    name: "International Transactions",
    blurb: "Includes Visa and Mastercard payments.",
    points: ["Accept payments from anywhere in the world", "Cards charged and settled in local currency"],
    featured: false,
  },
];

const why = [
  { title: "Secure payments", description: "All transactions are encrypted with top-level security.", icon: ShieldCheck },
  { title: "Real-time reporting", description: "Monitor transactions and revenue in real-time.", icon: BarChart3 },
  { title: "24/7 support", description: "Expert support available around the clock.", icon: Headphones },
];

const pricingFaqs = [
  {
    question: "How does the pricing work?",
    answer:
      "There are no setup fees and no hidden charges. You pay a flat 1.5% per local transaction and 2.8% for international cards. Settling funds to your bank account is free.",
  },
  {
    question: "What are payment processing charges?",
    answer:
      "Processing charges are the small percentage taken per successful transaction to cover the cost of moving money across networks. With Monime that is 1.5% locally, subject to 15% GST.",
  },
  {
    question: "Who pays payment gateway charges?",
    answer:
      "By default the merchant absorbs the processing fee, but you can choose to pass it on to the customer at checkout. You stay in control of how fees are applied.",
  },
];

export default function PricingPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="Pricing"
        title="Simple, fair pricing"
        description="From emerging startups to scaling enterprises, Monime has you covered."
      />

      <section className="mx-auto -mt-8 max-w-4xl px-4 pb-8 sm:px-6">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.08}>
              <GlowCard className="flex h-full flex-col p-7">
                <div className="flex items-start justify-between">
                  <p className="text-4xl font-semibold tracking-tight text-foreground">
                    {plan.rate}
                    <span className="ml-2 text-sm font-normal text-muted-foreground">
                      per transaction
                    </span>
                  </p>
                  {plan.featured && (
                    <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-medium text-primary">
                      Popular
                    </span>
                  )}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{plan.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{plan.blurb}</p>
                <ul className="mt-5 flex flex-col gap-2.5">
                  {plan.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-foreground">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
                <Button
                  size="lg"
                  className={`mt-6 h-11 rounded-full px-6 ${
                    plan.featured
                      ? "bg-gradient-to-r from-primary to-sky-500 glow-primary"
                      : ""
                  }`}
                  variant={plan.featured ? "default" : "outline"}
                  nativeButton={false}
                  render={<a href="/contact" />}
                >
                  Get Started
                </Button>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </section>

      <PaymentMethods />
      <FeatureCards
        title="Why Monime?"
        description="Our plans come with enterprise-grade features, real-time reporting, and 24/7 support."
        items={why}
        variant="plain"
      />
      <PciBanner />
      <FaqSection items={pricingFaqs} />
    </SiteFrame>
  );
}
