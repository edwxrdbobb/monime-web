import type { Metadata } from "next";
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconBrandX,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";

import { Reveal } from "@/components/ui/reveal";
import { GlowCard } from "@/components/ui/glow-card";
import { SiteFrame } from "@/components/sections/site-frame";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "Contact Us — Monime",
  description: "Reach out to Monime via any of the following channels.",
};

const channels = [
  { icon: IconMail, label: "Email", value: "support@monime.io", href: "mailto:support@monime.io", color: "text-foreground" },
  { icon: IconPhone, label: "Phone", value: "+232 78102030", href: "tel:+23278102030", color: "text-primary" },
  { icon: IconBrandWhatsapp, label: "WhatsApp", value: "+232 78102030", href: "https://wa.me/23278102030", color: "text-emerald-500" },
  { icon: IconBrandX, label: "Twitter", value: "@monime", href: "#", color: "text-foreground" },
  { icon: IconBrandFacebook, label: "Facebook", value: "Monime", href: "#", color: "text-blue-600" },
  { icon: IconBrandLinkedin, label: "LinkedIn", value: "Monime", href: "#", color: "text-blue-700" },
  { icon: IconBrandInstagram, label: "Instagram", value: "@monime", href: "#", color: "text-pink-600" },
  { icon: IconBrandGithub, label: "GitHub", value: "Monime", href: "#", color: "text-foreground" },
];

export default function ContactPage() {
  return (
    <SiteFrame cta={false}>
      <PageHero
        eyebrow="Contact"
        title="Contact Us"
        description="Reach out to us via any of the following channels."
      />

      <section className="mx-auto -mt-8 max-w-5xl px-4 pb-24 sm:px-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {channels.map((channel, i) => {
            const Icon = channel.icon;
            return (
              <Reveal key={channel.label} delay={(i % 3) * 0.06}>
                <GlowCard className="h-full">
                  <a
                    href={channel.href}
                    className="flex flex-col items-center gap-2 p-8 text-center"
                  >
                    <span className={`flex size-12 items-center justify-center rounded-2xl bg-muted ${channel.color}`}>
                      <Icon className="size-6" />
                    </span>
                    <p className="mt-1 font-semibold text-foreground">{channel.label}</p>
                    <p className="text-sm text-muted-foreground">{channel.value}</p>
                  </a>
                </GlowCard>
              </Reveal>
            );
          })}
        </div>
      </section>
    </SiteFrame>
  );
}
