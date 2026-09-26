import { Accordion } from "@/components/ui/Accordion";
import { Section, SectionHeading } from "@/components/ui/Section";
import { faq } from "@/lib/content";

export function Faq() {
  return (
    <Section tone="sand" id="faq">
      <div className="grid gap-12 lg:grid-cols-3">
        <SectionHeading
          eyebrow="FAQ"
          title="Everything you want to know before you book."
          lead="The answers to the questions we get asked most."
        />
        <div className="lg:col-span-2">
          <Accordion items={faq} />
        </div>
      </div>
    </Section>
  );
}
