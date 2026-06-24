import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/ui/reveal";

export type FaqItem = { question: string; answer: string };

export function FaqSection({
  title = "Frequently Asked Questions",
  description = "Find answers to the most common questions.",
  items,
}: {
  title?: string;
  description?: string;
  items: FaqItem[];
}) {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
      <Reveal className="text-center">
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-muted-foreground">{description}</p>
      </Reveal>

      <Reveal delay={0.1} className="mt-10">
        <Accordion className="flex flex-col gap-3">
          {items.map((faq) => (
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
      </Reveal>
    </section>
  );
}
