import type { Metadata } from "next";
import {
  ArrowRight,
  ArrowUpRight,
  Fingerprint,
  Gauge,
  Lock,
  Repeat,
  Rocket,
  Send,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SiteFrame } from "@/components/sections/site-frame";
import { PageHero } from "@/components/sections/page-hero";
import { FeatureCards } from "@/components/sections/feature-cards";
import { TrustLogos } from "@/components/sections/trust-logos";
import { PciBanner } from "@/components/sections/pci-banner";
import { MorePaymentFlows } from "@/components/sections/more-payment-flows";
import { FaqSection } from "@/components/sections/faq-section";

export const metadata: Metadata = {
  title: "Payouts — Monime",
  description:
    "Eliminate your payout stress using a single integration. Send payments instantly and securely to banks, mobile money and digital wallets.",
};

const benefits = [
  {
    title: "Go live in days, not months",
    description:
      "Integration for instant payouts in a small lift, even if you already use Monime to accept payments.",
    icon: Rocket,
  },
  {
    title: "Grow your revenue",
    description:
      "Tap into new revenue streams for your business by monetising faster access to funds while offering choice.",
    icon: TrendingUp,
  },
  {
    title: "Instant speed power",
    description:
      "Give your users what they really want — faster access to their money. Send funds instantly 24/7/365.",
    icon: Gauge,
  },
];

const security = [
  { title: "PCI DSS Level 1", description: "The highest global standard for payment data security.", icon: ShieldCheck },
  { title: "3D Secure", description: "Additional authentication that stops fraudulent card use.", icon: Lock },
  { title: "Biometric", description: "Fingerprint and face verification for sensitive actions.", icon: Fingerprint },
  { title: "Leading tech", description: "Industry-leading, multi-layered fraud detection systems.", icon: Sparkles },
];

const payoutFaqs = [
  {
    question: "What is the definition of payout?",
    answer:
      "A payout is the transfer of funds from your Monime balance out to a destination such as a bank account, mobile money wallet, or digital wallet.",
  },
  {
    question: "How long does a payout take to settle?",
    answer:
      "Payouts to linked accounts are instant, 24/7. Funds typically arrive within seconds, and you can track every transfer in real time from your dashboard.",
  },
  {
    question: "What is the difference between a disbursement and a payout?",
    answer:
      "A payout usually settles funds you have collected to your own account, while a disbursement sends funds to third parties — suppliers, staff, or customers. Both run on the same instant rails.",
  },
  {
    question: "What is an example of a payout or disbursement process?",
    answer:
      "For example, a marketplace collects payments from buyers during the week, then disburses balances to hundreds of vendors at once via API or a single file upload.",
  },
];

export default function PayoutsPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="Payouts"
        title="Eliminate your payout stress using a single integration"
        description="Send payments instantly and securely to banks, mobile money and digital wallets via APIs, Dashboard and file uploads."
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
        visual={<PayoutsMockup />}
      />

      <FeatureCards items={benefits} variant="plain" />
      <TrustLogos />
      <Developers />
      <FeatureCards
        eyebrow="Our multi-layered approach to"
        title="Fraud & Risk Prevention"
        description="Including industry-leading multi-layered payment security technology and a team of dedicated experts, you can trust that your transactions are safe."
        items={security}
        columns={4}
        variant="plain"
      />
      <PciBanner />
      <MorePaymentFlows />
      <FaqSection items={payoutFaqs} />
    </SiteFrame>
  );
}

function PayoutsMockup() {
  const rows = [
    { name: "Payout to GTBank", amount: "SLE 4,521.00" },
    { name: "Aminata K. — Momo", amount: "SLE 1,200.00" },
    { name: "Vendor settlement", amount: "SLE 9.00" },
    { name: "Withdrawal", amount: "SLE 3.00" },
  ];
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div className="absolute -inset-10 -z-10 rounded-[3rem] bg-gradient-to-br from-primary/25 via-sky-400/15 to-transparent blur-3xl" />
      <div className="glass-strong rounded-[2.5rem] p-5 shadow-3d-lg">
        <div className="rounded-2xl bg-gradient-to-br from-primary to-sky-500 p-5 text-white">
          <p className="text-xs opacity-80">Payouts balance</p>
          <p className="mt-1 text-3xl font-semibold tracking-tight">SLE 48,920</p>
        </div>
        <div className="mt-4 flex flex-col gap-1">
          {rows.map((r) => (
            <div
              key={r.name}
              className="flex items-center justify-between rounded-xl px-2 py-2.5 transition-colors hover:bg-muted/60"
            >
              <div className="flex items-center gap-2.5">
                <span className="flex size-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600">
                  <ArrowUpRight className="size-3.5" />
                </span>
                <span className="text-sm font-medium text-foreground">{r.name}</span>
              </div>
              <span className="text-sm font-semibold text-foreground">{r.amount}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Developers() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="text-sm font-semibold tracking-wide text-primary uppercase">
            Developers
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Meticulously built for modern software development
          </h2>
          <p className="mt-4 max-w-lg text-muted-foreground">
            Designed for this generation of computing and what comes next, Monime allows
            developers to build payments into their stack.
          </p>
          <Button
            size="lg"
            className="mt-6 h-11 rounded-full bg-gradient-to-r from-primary to-sky-500 px-6 glow-primary"
            nativeButton={false}
            render={<a href="/contact" />}
          >
            Get Started
            <ArrowRight className="size-4" />
          </Button>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <span className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Repeat className="size-4" />
              </span>
              <h3 className="mt-3 font-semibold text-foreground">Refunds</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Enable fast refunds to the same account used for the payment.
              </p>
            </div>
            <div>
              <span className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Send className="size-4" />
              </span>
              <h3 className="mt-3 font-semibold text-foreground">Disbursements</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Send disbursements to any local bank account or mobile money wallet.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="overflow-hidden rounded-3xl bg-[#0b1120] p-6 font-mono text-[13px] leading-relaxed text-slate-300 shadow-3d-lg">
            <div className="mb-4 flex gap-1.5">
              <span className="size-3 rounded-full bg-rose-400/70" />
              <span className="size-3 rounded-full bg-amber-400/70" />
              <span className="size-3 rounded-full bg-emerald-400/70" />
            </div>
            <p>
              <span className="text-sky-400">const</span> payout ={" "}
              <span className="text-sky-400">await</span>{" "}
              <span className="text-emerald-400">monime</span>.payouts.
              <span className="text-amber-300">create</span>({"{"}
            </p>
            <p className="pl-4 text-slate-400">
              amount: <span className="text-orange-300">&quot;4521.00&quot;</span>,
            </p>
            <p className="pl-4 text-slate-400">
              currency: <span className="text-orange-300">&quot;SLE&quot;</span>,
            </p>
            <p className="pl-4 text-slate-400">
              destination: {"{"} type: <span className="text-orange-300">&quot;momo&quot;</span> {"}"},
            </p>
            <p>{"})"}</p>
            <p className="mt-3 text-emerald-400">{"// → status: \"completed\" ✓"}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
