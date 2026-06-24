import { ShieldCheck } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";

export function PciBanner() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-4 sm:px-6">
      <Reveal>
        <div className="rounded-[1.75rem] bg-gradient-to-r from-primary/40 via-blue-400/40 to-sky-300/40 p-[1.5px]">
          <div className="bg-grid relative flex flex-col items-center gap-6 overflow-hidden rounded-[1.7rem] bg-card px-6 py-10 text-center sm:flex-row sm:gap-8 sm:px-10 sm:text-left">
            <div className="mask-fade-b absolute inset-0 -z-10 opacity-40" />
            <span className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <ShieldCheck className="size-8" />
            </span>
            <div>
              <p className="text-xs font-semibold tracking-widest text-primary uppercase">
                PCI DSS Level 1 Certified
              </p>
              <p className="mt-2 max-w-2xl text-muted-foreground">
                Monime meets the highest possible global standards of data security and
                protection. Our policies move through constant iteration and undergo
                rigorous testing to proactively mitigate any potential threats to
                Monime&apos;s payment and client data.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
