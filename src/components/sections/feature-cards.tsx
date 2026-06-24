import type { LucideIcon } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { GlowCard } from "@/components/ui/glow-card";

export type FeatureCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export function FeatureCards({
  eyebrow,
  title,
  description,
  items,
  columns = 3,
  variant = "card",
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  items: FeatureCard[];
  columns?: 3 | 4;
  /** "card" = boxed glow cards, "plain" = icon + text only (centered). */
  variant?: "card" | "plain";
}) {
  const gridCols = columns === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-3";

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      {(title || eyebrow) && (
        <Reveal className="mx-auto max-w-2xl text-center">
          {eyebrow && (
            <p className="text-sm font-semibold tracking-wide text-primary uppercase">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {title}
            </h2>
          )}
          {description && (
            <p className="mt-4 text-balance text-muted-foreground">{description}</p>
          )}
        </Reveal>
      )}

      <div className={`mt-12 grid grid-cols-1 gap-4 ${gridCols}`}>
        {items.map((item, i) => {
          const Icon = item.icon;
          if (variant === "plain") {
            return (
              <Reveal key={item.title} delay={i * 0.06} className="text-center">
                <span className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 font-semibold text-foreground">{item.title}</h3>
                <p className="mx-auto mt-2 max-w-xs text-sm text-muted-foreground">
                  {item.description}
                </p>
              </Reveal>
            );
          }
          return (
            <Reveal key={item.title} delay={i * 0.06}>
              <GlowCard className="h-full p-6">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </GlowCard>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
