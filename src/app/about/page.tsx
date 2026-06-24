import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, BarChart3, Globe, Heart, Lock, Wallet, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SiteFrame } from "@/components/sections/site-frame";
import { PageHero } from "@/components/sections/page-hero";
import { FeatureCards } from "@/components/sections/feature-cards";

export const metadata: Metadata = {
  title: "About Monime",
  description:
    "Monime provides modern payment solutions, empowering businesses with fast, secure, and transparent financial services.",
};

const values = [
  { title: "Innovation", description: "We constantly push boundaries to deliver modern, user-friendly payment solutions.", icon: Zap },
  { title: "Trust", description: "Our merchants trust us with their business because we put reliability and transparency first.", icon: Heart },
  { title: "Impact", description: "Our vision is to empower small businesses and make financial inclusion a reality for all.", icon: Globe },
];

const features = [
  { title: "Seamless Payments", description: "Accept payments online and offline with speed and reliability.", icon: Wallet },
  { title: "Business Insights", description: "Track sales and cash flow with real-time dashboards and reporting.", icon: BarChart3 },
  { title: "Secure by Design", description: "PCI DSS compliant, encrypted, and built to keep you and your customers safe.", icon: Lock },
];

const formula = [
  { title: "Build for everyone, not just one", description: "Solve root problems once, and make solutions reusable." },
  { title: "Think long-term", description: "Make decisions that benefit customers, Monime, and the wider world." },
  { title: "Launch fast, learn faster", description: "Ship value early, iterate, and improve." },
  { title: "Team over ego", description: "Win together across cultures and time zones." },
  { title: "Communicate directly", description: "Don't hide behind email — pick up the phone." },
  { title: "Speak clearly, stay respectful", description: "Honesty without rudeness." },
  { title: "Seek diverse views", description: "Different perspectives sharpen better ideas." },
  { title: "Grow your own path", description: "Take ownership of your growth and potential." },
];

export default function AboutPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="About us"
        title="The platform built to help businesses achieve their ambitions faster"
        description="Monime provides modern payment solutions, empowering businesses with fast, secure, and transparent financial services."
        actions={
          <>
            <Button
              size="lg"
              className="h-11 rounded-full bg-gradient-to-r from-primary to-violet-600 px-6 glow-primary"
              nativeButton={false}
              render={<a href="/contact" />}
            >
              Get Started
              <ArrowRight className="size-4" />
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="glass h-11 rounded-full px-5 shadow-3d"
              nativeButton={false}
              render={<a href="/contact" />}
            >
              Contact Us
              <ArrowRight className="size-4" />
            </Button>
          </>
        }
      />

      <FeatureCards items={values} variant="plain" />

      {/* Our story */}
      <section className="mx-auto max-w-3xl px-4 py-12 text-center sm:px-6">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Our story
          </h2>
          <p className="mt-5 text-balance text-muted-foreground">
            Monime was founded so every African business can thrive in the digital
            economy. We built trusted payment infrastructure to make sending and
            receiving payments easy. Our ambition is to expand — not to impose — but
            because technology can liberate, educate, and empower across Africa. Powered
            by talented people, we deliver expert engineering and beautifully designed
            digital solutions.
          </p>
        </Reveal>
      </section>

      <FeatureCards
        title="Powerful features for modern businesses"
        items={features}
      />

      {/* The Monime Formula */}
      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <Reveal className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            The Monime Formula
          </h2>
          <p className="mt-3 text-muted-foreground">
            The way we work is guided by eight principles.
          </p>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {formula.map((item, i) => (
            <Reveal key={item.title} delay={(i % 2) * 0.06}>
              <div className="flex h-full gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/30">
                <span className="font-mono text-sm font-semibold text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Our team */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Our Team
            </h2>
            <p className="mt-4 text-muted-foreground">
              We&apos;re a dedicated group of innovators, engineers, and strategists
              committed to shaping the future of financial technology. Our expertise
              spans payments, security, design, and customer experience, allowing us to
              build solutions that are not only secure and reliable but also intuitive
              and impactful. At Monime, our mission is simple: to empower Africa&apos;s
              digital economy with world-class financial solutions.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="glass-strong overflow-hidden rounded-3xl p-2 shadow-3d-lg">
              <Image
                src="/take-charge-banner.webp"
                alt="The Monime team collaborating"
                width={2048}
                height={1037}
                className="h-auto w-full rounded-2xl object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </SiteFrame>
  );
}
