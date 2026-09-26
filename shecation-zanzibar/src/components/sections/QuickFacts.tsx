import { Container } from "@/components/ui/Container";
import { quickFacts } from "@/lib/content";

export function QuickFacts() {
  return (
    <section aria-label="Quick trip facts" className="bg-navy py-8 text-white">
      <Container>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
          {quickFacts.map((fact) => (
            <div key={fact.label} className="flex flex-col gap-1">
              <dt className="font-display text-xs uppercase tracking-[0.14em] text-sky">
                {fact.label}
              </dt>
              <dd className="font-display text-base">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
