"use client";

import { motion } from "motion/react";
import { ArrowDownLeft, ArrowUpRight, ShoppingCart, Wallet } from "lucide-react";

const transactions = [
  { name: "Aminata's Store — POS", time: "Just now", amount: "+SLE 420", positive: true },
  { name: "Payout to GTBank", time: "12 min ago", amount: "-SLE 1,000", positive: false },
  { name: "Online checkout", time: "1 hr ago", amount: "+SLE 280", positive: true },
];

export function HeroMockup() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute -inset-10 -z-10 rounded-[3rem] bg-gradient-to-br from-primary/25 via-violet-400/15 to-transparent blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 30, rotate: -2 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="glass-strong relative rounded-3xl p-5 shadow-3d-lg"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-muted-foreground">Business balance</p>
            <p className="mt-1 text-3xl font-semibold tracking-tight text-foreground">
              SLE 48,920
            </p>
          </div>
          <span className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Wallet className="size-4" />
          </span>
        </div>

        <svg viewBox="0 0 300 70" className="mt-4 h-16 w-full text-primary" fill="none">
          <path
            d="M0 50 L30 42 L60 48 L90 28 L120 35 L150 14 L180 24 L210 10 L240 18 L270 4 L300 12"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.85"
          />
          <path
            d="M0 50 L30 42 L60 48 L90 28 L120 35 L150 14 L180 24 L210 10 L240 18 L270 4 L300 12 V70 H0 Z"
            fill="currentColor"
            opacity="0.06"
          />
        </svg>

        <div className="mt-4 flex flex-col gap-1 border-t border-border pt-4">
          {transactions.map((tx) => (
            <div key={tx.name} className="flex items-center justify-between rounded-xl px-2 py-2 transition-colors hover:bg-muted/60">
              <div className="flex items-center gap-2.5">
                <span
                  className={`flex size-8 items-center justify-center rounded-lg ${
                    tx.positive ? "bg-emerald-500/10 text-emerald-600" : "bg-orange-500/10 text-orange-600"
                  }`}
                >
                  {tx.positive ? <ArrowDownLeft className="size-3.5" /> : <ArrowUpRight className="size-3.5" />}
                </span>
                <div>
                  <p className="text-sm font-medium text-foreground">{tx.name}</p>
                  <p className="text-xs text-muted-foreground">{tx.time}</p>
                </div>
              </div>
              <span className={`text-sm font-semibold ${tx.positive ? "text-emerald-600" : "text-foreground"}`}>
                {tx.amount}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        style={{ "--float-rotate": "-3deg" } as React.CSSProperties}
        className="glass animate-float absolute -top-6 -left-6 flex items-center gap-2.5 rounded-2xl px-4 py-3 shadow-3d sm:-left-10"
      >
        <span className="flex size-9 items-center justify-center rounded-full bg-gradient-to-br from-primary to-violet-600 text-white">
          <ShoppingCart className="size-4" />
        </span>
        <div>
          <p className="text-[11px] text-muted-foreground">Money received</p>
          <p className="text-sm font-semibold text-foreground">SLE 1,200</p>
        </div>
      </motion.div>

      {/* Progress-bar style glass stat card (reference aesthetic) */}
      <motion.div
        initial={{ opacity: 0, x: 20, y: -10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.6, delay: 0.55 }}
        style={{ "--float-rotate": "2deg" } as React.CSSProperties}
        className="glass animate-float-delayed absolute -right-4 bottom-8 w-44 rounded-2xl px-4 py-3 shadow-3d sm:-right-12"
      >
        <div className="flex items-center justify-between">
          <p className="text-[11px] text-muted-foreground">Success rate</p>
          <span className="flex size-6 items-center justify-center rounded-full bg-foreground text-background">
            <ArrowUpRight className="size-3" />
          </span>
        </div>
        <p className="mt-1 text-2xl font-semibold tracking-tight text-foreground">99.9%</p>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-foreground/10">
          <div className="h-full w-[99%] rounded-full bg-gradient-to-r from-primary to-violet-500" />
        </div>
      </motion.div>
    </div>
  );
}
