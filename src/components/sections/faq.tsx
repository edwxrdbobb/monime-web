import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollReveal } from "@/components/gsap/scroll-reveal";
import { SplitHeading } from "@/components/gsap/split-heading";
import { faqs } from "@/lib/content";

export function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
      <ScrollReveal className="text-center">
        <SplitHeading
          as="h2"
          type="lines"
          className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
        >
          Frequently Asked Questions
        </SplitHeading>
        <p className="mt-4 text-muted-foreground">
          Everything you need to know about using Monime.
        </p>
      </ScrollReveal>

      <ScrollReveal className="mt-10" delay={0.1}>
        <Accordion className="flex flex-col gap-3">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.question}
              value={faq.question}
              className="rounded-2xl border border-border bg-card px-5"
            >
              <AccordionTrigger className="py-5 text-base font-medium text-foreground hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </ScrollReveal>
    </section>
  );
}
