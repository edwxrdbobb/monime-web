import { Reveal } from "@/components/ui/reveal";
import { Blob } from "@/components/ui/blob";

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  actions?: React.ReactNode;
  /** Right-hand visual. When omitted the hero is centered. */
  visual?: React.ReactNode;
  /** Optional small stats row rendered under the actions. */
  stats?: { value: string; label: string }[];
};

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
  visual,
  stats,
}: PageHeroProps) {
  const centered = !visual;

  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div className="bg-dot absolute inset-0 -z-20 mask-fade-b opacity-50" />
      <div className="absolute inset-x-0 top-0 -z-20 h-[520px] bg-gradient-to-b from-primary/10 via-background to-transparent" />
      <Blob
        className="top-[-14%] left-1/2 h-[460px] w-[560px] -translate-x-1/2 opacity-30"
        colors="from-primary via-blue-500 to-violet-500"
      />
      <Blob
        className="top-[20%] right-[-8%] h-[320px] w-[320px] opacity-25"
        colors="from-violet-500 via-indigo-500 to-primary"
        variant="slow"
      />

      <div
        className={
          centered
            ? "mx-auto max-w-3xl px-4 text-center sm:px-6"
            : "mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12"
        }
      >
        <div className={centered ? "flex flex-col items-center" : "max-w-xl"}>
          <Reveal>
            <p className="text-sm font-semibold tracking-wide text-primary uppercase">
              {eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {title}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p
              className={
                centered
                  ? "mx-auto mt-5 max-w-xl text-balance text-base text-muted-foreground sm:text-lg"
                  : "mt-5 max-w-lg text-balance text-base text-muted-foreground sm:text-lg"
              }
            >
              {description}
            </p>
          </Reveal>

          {actions && (
            <Reveal delay={0.15}>
              <div
                className={`mt-8 flex flex-col gap-3 sm:flex-row ${
                  centered ? "justify-center" : ""
                }`}
              >
                {actions}
              </div>
            </Reveal>
          )}

          {stats && (
            <Reveal delay={0.2}>
              <div className="mt-10 flex gap-10">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-3xl font-semibold tracking-tight text-foreground">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          )}
        </div>

        {visual && (
          <Reveal delay={0.15} className="w-full">
            {visual}
          </Reveal>
        )}
      </div>
    </section>
  );
}
