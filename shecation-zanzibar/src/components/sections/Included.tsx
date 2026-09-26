import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section, SectionHeading } from "@/components/ui/Section";
import { cta, included } from "@/lib/content";

function Check() {
  return (
    <span
      aria-hidden="true"
      className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-turquoise text-navy"
    >
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
        <path
          d="M3 8.5l3 3 7-7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function Included() {
  return (
    <Section tone="white" id="included">
      <SectionHeading eyebrow="What's included" title={included.title} lead={included.lead} />

      <div className="mt-12 grid gap-8 lg:grid-cols-5">
        <Card tone="sand" padding="lg" className="lg:col-span-3">
          <ul className="grid gap-4 sm:grid-cols-2">
            {included.items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-base">
                <Check />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 border-t border-border pt-6 font-display text-base text-pink">
            {included.notIncluded}
          </p>
          <div className="mt-8">
            <Button href="#book">{cta.primary}</Button>
          </div>
        </Card>

        <div className="relative min-h-80 overflow-hidden rounded-xl lg:col-span-2">
          <Image
            src="/images/beach-picnic.jpg"
            alt="A picnic set up on the beach with food and drinks"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </Section>
  );
}
