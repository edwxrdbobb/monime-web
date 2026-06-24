"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Apple, ChevronDown, Download, Smartphone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Blob } from "@/components/ui/blob";
import { cn } from "@/lib/utils";

type Platform = "ios" | "android";

export function DownloadApp() {
  const [platform, setPlatform] = useState<Platform>("ios");
  const label = platform === "ios" ? "iOS" : "Android";

  return (
    <>
      <section className="relative overflow-hidden pt-36 pb-16 text-center sm:pt-44">
        <div className="bg-dot absolute inset-0 -z-20 mask-fade-b opacity-50" />
        <Blob
          className="top-[-10%] left-1/2 h-[420px] w-[520px] -translate-x-1/2 opacity-30"
          colors="from-primary via-blue-500 to-violet-500"
        />
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <Reveal className="flex flex-col items-center">
            <Image
              src="/monime-logo-white.webp"
              alt="Monime"
              width={88}
              height={88}
              priority
              className="size-40 object-contain"
            />
            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
              Monime Space
            </h1>
            <p className="mt-4 text-balance text-muted-foreground sm:text-lg">
              Download our app and experience modern payments for growing businesses.
            </p>
            <ChevronDown className="mt-10 size-5 animate-bounce text-muted-foreground" />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-24 sm:px-6">
        <Reveal className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Download Now
          </h2>
          <p className="mt-3 text-muted-foreground">Available on iOS and Android</p>
        </Reveal>

        {/* Platform toggle */}
        <Reveal delay={0.05} className="mt-8 flex justify-center">
          <div className="glass inline-flex items-center gap-1 rounded-full p-1 shadow-3d">
            <ToggleButton
              active={platform === "ios"}
              onClick={() => setPlatform("ios")}
              icon={<Apple className="size-4" />}
              label="iOS"
            />
            <ToggleButton
              active={platform === "android"}
              onClick={() => setPlatform("android")}
              icon={<Smartphone className="size-4" />}
              label="Android"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <div className="glass-strong grid grid-cols-1 items-center gap-10 rounded-[2rem] p-8 shadow-3d-lg sm:grid-cols-2 sm:p-12">
            <PhoneMockup />

            <div>
              <h3 className="text-2xl font-semibold text-foreground">
                Download for {label}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Scan the QR code to download our app for your{" "}
                {platform === "ios" ? "iPhone" : "Android device"}.
              </p>
              <div className="mt-5 inline-block rounded-2xl bg-white p-4 shadow-3d">
                <QrPattern seed={platform} />
              </div>
              <div className="mt-6">
                <Button
                  size="lg"
                  className="h-11 rounded-xl bg-gradient-to-r from-primary to-violet-600 px-6 glow-primary"
                >
                  <Download className="size-4" />
                  Download for {label}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}

function ToggleButton({
  active,
  onClick,
  icon,
  label,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-colors",
        active ? "text-white" : "text-muted-foreground hover:text-foreground",
      )}
    >
      {active && (
        <motion.span
          layoutId="platform-pill"
          className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-primary to-violet-600"
          transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
        />
      )}
      {icon}
      {label}
    </button>
  );
}

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[220px]">
      <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-primary/25 via-violet-400/15 to-transparent blur-2xl" />
      <div className="glass-strong rounded-[2.25rem] p-3 shadow-3d-lg">
        <div className="overflow-hidden rounded-[1.75rem] bg-gradient-to-b from-primary to-violet-700 p-4 text-white">
          <p className="text-[11px] opacity-80">Main · 046838791</p>
          <p className="mt-1 text-2xl font-semibold tracking-tight">SLE •••••</p>
          <div className="mt-4 flex justify-between">
            {["Get Paid", "Transfer", "Withdraw"].map((a) => (
              <div key={a} className="flex flex-col items-center gap-1">
                <span className="flex size-8 items-center justify-center rounded-full bg-white/20" />
                <span className="text-[9px]">{a}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-3 space-y-2">
          {["SLE 1.50", "SLE 1,000.00", "SLE 9.00"].map((amt) => (
            <div key={amt} className="flex items-center gap-2 rounded-xl bg-card/60 p-2">
              <span className="size-6 rounded-full bg-muted" />
              <span className="text-[11px] font-medium text-foreground">{amt}</span>
              <span className="ml-auto size-2 rounded-full bg-emerald-500" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/** Deterministic decorative QR-style pattern (not a real scannable code). */
function QrPattern({ seed }: { seed: string }) {
  const base = seed === "ios" ? 0.55 : 0.45;
  const cells = Array.from({ length: 144 }, (_, i) => {
    const v = Math.sin(i * 12.9898 + seed.length * 78.233) * 43758.5453;
    return (v - Math.floor(v)) > base;
  });
  return (
    <div className="grid size-40 grid-cols-12 gap-0.5">
      {cells.map((on, i) => (
        <span
          key={i}
          className={cn("rounded-[1px]", on ? "bg-[#0a1226]" : "bg-transparent")}
        />
      ))}
    </div>
  );
}
