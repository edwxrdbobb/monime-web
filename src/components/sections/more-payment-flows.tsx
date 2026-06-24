import { Reveal } from "@/components/ui/reveal";
import { GlowCard } from "@/components/ui/glow-card";

type Flow = {
  title: string;
  description: string;
  art: "radiate" | "converge" | "orbit";
  accent: string;
};

const defaultFlows: Flow[] = [
  {
    title: "Send money instantly",
    description:
      "Disburse funds instantly to mobile money and bank accounts. Go live within days.",
    art: "radiate",
    accent: "from-amber-400 to-orange-500",
  },
  {
    title: "Receive online payment",
    description:
      "Take payments directly on your website via mobile money, card, and other wallets.",
    art: "converge",
    accent: "from-pink-500 to-rose-500",
  },
  {
    title: "Accept payments for Momo",
    description:
      "Receive payments from all networks. It's quick, simple, and requires no internet.",
    art: "orbit",
    accent: "from-violet-500 to-indigo-500",
  },
];

export function MorePaymentFlows({
  title = "More payment flows",
  flows = defaultFlows,
}: {
  title?: string;
  flows?: Flow[];
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <Reveal>
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {flows.map((flow, i) => (
          <Reveal key={flow.title} delay={i * 0.08}>
            <GlowCard className="flex h-full flex-col p-6">
              <FlowArt variant={flow.art} accent={flow.accent} />
              <h3 className="mt-6 text-lg font-semibold text-foreground">
                {flow.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{flow.description}</p>
            </GlowCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function FlowArt({ variant, accent }: { variant: Flow["art"]; accent: string }) {
  return (
    <div className="relative h-32 w-full">
      <div className="bg-dot absolute inset-0 opacity-40 mask-fade-b" />
      <svg
        viewBox="0 0 200 120"
        className="relative h-full w-full text-border"
        fill="none"
        stroke="currentColor"
      >
        {variant === "radiate" && (
          <>
            <rect x="60" y="35" width="80" height="50" rx="8" strokeWidth="1.5" />
            {[
              [100, 10],
              [170, 30],
              [180, 90],
              [110, 110],
              [30, 100],
              [20, 35],
            ].map(([x, y], i) => (
              <g key={i}>
                <line
                  x1="100"
                  y1="60"
                  x2={x}
                  y2={y}
                  strokeWidth="1"
                  strokeDasharray="3 3"
                />
                <circle cx={x} cy={y} r="4" strokeWidth="1.25" />
              </g>
            ))}
          </>
        )}
        {variant === "converge" && (
          <>
            <circle cx="100" cy="60" r="42" strokeWidth="1.5" strokeDasharray="4 4" />
            {[
              [100, 8],
              [165, 50],
              [140, 108],
              [55, 105],
              [32, 45],
            ].map(([x, y], i) => (
              <line
                key={i}
                x1={x}
                y1={y}
                x2="100"
                y2="60"
                strokeWidth="1"
                strokeDasharray="3 3"
              />
            ))}
          </>
        )}
        {variant === "orbit" && (
          <>
            <ellipse cx="100" cy="60" rx="60" ry="30" strokeWidth="1.25" />
            <ellipse
              cx="100"
              cy="60"
              rx="60"
              ry="30"
              strokeWidth="1.25"
              transform="rotate(60 100 60)"
            />
            <ellipse
              cx="100"
              cy="60"
              rx="60"
              ry="30"
              strokeWidth="1.25"
              transform="rotate(-60 100 60)"
            />
          </>
        )}
        {/* center node */}
        <foreignObject x="86" y="46" width="28" height="28" />
      </svg>
      <span
        className={`absolute top-1/2 left-1/2 size-6 -translate-x-1/2 -translate-y-1/2 rounded-md bg-gradient-to-br ${accent} shadow-lg`}
      />
    </div>
  );
}
