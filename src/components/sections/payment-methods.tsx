"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import {
  ArrowLeftRight,
  CreditCard,
  Landmark,
  Smartphone,
  Store,
  Wallet,
} from "lucide-react";

import { ScrollReveal } from "@/components/gsap/scroll-reveal";
import { Blob } from "@/components/ui/blob";
import { BentoGrid, BentoItem } from "@/components/ui/bento-grid";
import { cn } from "@/lib/utils";
import { paymentMethods } from "@/lib/content";

const icons = { CreditCard, Landmark, ArrowLeftRight, Smartphone, Wallet, Store };

export function PaymentMethods() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % paymentMethods.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden bg-muted/30 py-24">
      <Blob
        className="top-1/4 left-[-8%] h-[380px] w-[380px] opacity-20"
        colors="from-primary via-blue-500 to-sky-400"
        variant="slow"
      />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <ScrollReveal className="order-2 lg:order-1">
          <PhoneShowcase active={active} onSelect={setActive} />
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="order-1 lg:order-2">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Delight customers with a seamless payments experience
          </h2>
          <p className="mt-4 max-w-lg text-muted-foreground">
            Give your customers the gift of modern, frictionless, painless payments.
            Integrate Monime once and let them pay however they want.
          </p>

          <BentoGrid className="mt-8">
            {paymentMethods.map((method, i) => {
              const Icon = icons[method.icon as keyof typeof icons];
              const isActive = active === i;
              return (
                <BentoItem
                  key={method.name}
                  className={cn(
                    "cursor-pointer",
                    isActive && "border-primary/40 shadow-md shadow-primary/10",
                  )}
                >
                  <span
                    onClick={() => setActive(i)}
                    className={cn(
                      "flex size-10 items-center justify-center rounded-xl transition-colors",
                      isActive ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground",
                    )}
                  >
                    <Icon className="size-4.5" />
                  </span>
                  <span className="text-sm font-medium text-foreground">{method.name}</span>
                </BentoItem>
              );
            })}
          </BentoGrid>
        </ScrollReveal>
      </div>
    </section>
  );
}

function PhoneShowcase({
  active,
  onSelect,
}: {
  active: number;
  onSelect: (i: number) => void;
}) {
  const method = paymentMethods[active];
  const Icon = icons[method.icon as keyof typeof icons];

  return (
    <div className="glass relative mx-auto flex w-full max-w-sm flex-col items-center justify-center gap-6 rounded-[2.5rem] p-10 shadow-3d-lg">
      <div className="bg-grid absolute inset-0 -z-10 rounded-[2.5rem] opacity-30 mask-fade-b" />
      <AnimatePresence mode="wait">
        <motion.div
          key={method.name}
          initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.7 }}
          transition={{ duration: 0.3 }}
          className="flex size-52 items-center justify-center"
        >
          {method.lottie ? (
            <DotLottieReact src={method.lottie} loop autoplay className="size-52" />
          ) : (
            <span className="flex size-20 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/30">
              <Icon className="size-9" />
            </span>
          )}
        </motion.div>
      </AnimatePresence>
      <p className="text-sm font-medium text-foreground">Pay with {method.name}</p>
      <div className="flex gap-1.5">
        {paymentMethods.map((m, i) => (
          <button
            key={m.name}
            aria-label={`Show ${m.name}`}
            onClick={() => onSelect(i)}
            className={cn(
              "h-1.5 rounded-full transition-all",
              i === active ? "w-5 bg-primary" : "w-1.5 bg-muted",
            )}
          />
        ))}
      </div>
    </div>
  );
}
