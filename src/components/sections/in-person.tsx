"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Banknote, CheckCheck, QrCode, Smartphone } from "lucide-react";

import { ScrollReveal } from "@/components/gsap/scroll-reveal";
import { cn } from "@/lib/utils";
import { inPersonSteps } from "@/lib/content";

const stepIcons = [QrCode, CheckCheck, Banknote];

export function InPerson() {
  const [active, setActive] = useState(0);

  return (
    <section id="in-person" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
        <ScrollReveal>
          <p className="text-sm font-semibold tracking-wide text-primary uppercase">
            Get paid in-person
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Choosing any partner increases revenue through more payment options
          </h2>
          <p className="mt-4 max-w-lg text-muted-foreground">
            Use us for QR codes, e-commerce, or payment terminals. We can handle one or
            all with our mobile app. Smart, simple, affordable.
          </p>

          <div className="mt-8 flex flex-col gap-3">
            {inPersonSteps.map((step, i) => {
              const Icon = stepIcons[i];
              const isActive = active === i;
              return (
                <button
                  key={step.title}
                  onClick={() => setActive(i)}
                  className={cn(
                    "relative overflow-hidden rounded-2xl border p-4 text-left transition-colors",
                    isActive ? "border-primary/30" : "border-border hover:border-border/60",
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="in-person-active"
                      className="absolute inset-0 bg-primary/[0.06]"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  <div className="relative z-10 flex items-start gap-3.5">
                    <span
                      className={cn(
                        "flex size-9 shrink-0 items-center justify-center rounded-xl transition-colors",
                        isActive ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground",
                      )}
                    >
                      <Icon className="size-4" />
                    </span>
                    <div>
                      <p className="font-medium text-foreground">{step.title}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <DeviceMockup step={active} />
        </ScrollReveal>
      </div>
    </section>
  );
}

function DeviceMockup({ step }: { step: number }) {
  return (
    <div className="relative mx-auto flex h-[420px] w-full max-w-sm items-center justify-center">
      <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-gradient-to-br from-primary/20 via-violet-300/15 to-transparent blur-3xl" />
      <div className="glass-strong relative flex h-full w-full flex-col rounded-[2.5rem] p-5 shadow-3d-lg">
        <div className="mx-auto h-1.5 w-16 rounded-full bg-muted" />
        <div className="mt-6 flex-1">
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div
                key="qr"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="flex h-full flex-col items-center justify-center gap-4"
              >
                <div className="grid size-40 grid-cols-6 gap-1 rounded-2xl bg-foreground p-3">
                  {Array.from({ length: 36 }).map((_, i) => (
                    <span
                      key={i}
                      className={cn("rounded-[2px]", [2, 5, 7, 9, 13, 16, 20, 22, 27, 30, 33].includes(i) ? "bg-card" : "bg-foreground")}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-1.5 rounded-full bg-muted px-3 py-1.5">
                  <Smartphone className="size-3.5 text-muted-foreground" />
                  <span className="font-mono text-sm tracking-widest text-foreground">065 841 070</span>
                </div>
                <p className="text-xs text-muted-foreground">Scan to pay with any mobile money or bank app</p>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div
                key="confirm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="flex h-full flex-col justify-center gap-3"
              >
                <div className="self-end rounded-2xl rounded-br-sm bg-primary px-4 py-2.5 text-sm text-primary-foreground shadow-sm">
                  Confirm SLE 420 from Aminata K.?
                </div>
                <div className="flex items-center gap-2 self-start rounded-2xl rounded-bl-sm bg-emerald-500/10 px-4 py-2.5 text-sm text-emerald-700">
                  <CheckCheck className="size-4" /> Payment confirmed
                </div>
                <p className="mt-2 text-center text-xs text-muted-foreground">
                  Verified instantly via the Monime app — no sensitive data shown
                </p>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="settle"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="flex h-full flex-col items-center justify-center gap-4 text-center"
              >
                <span className="flex size-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
                  <Banknote className="size-7" />
                </span>
                <div>
                  <p className="text-2xl font-semibold text-foreground">+SLE 12,480</p>
                  <p className="text-sm text-muted-foreground">Settled to your bank · instantly</p>
                </div>
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-700">
                  No settlement fees
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
