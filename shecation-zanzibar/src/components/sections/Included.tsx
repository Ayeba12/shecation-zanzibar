import { Button } from "@/components/ui/Button";
import { Grid } from "@/components/ui/Container";
import { Label } from "@/components/ui/Label";
import { Section } from "@/components/ui/Section";
import { cta, included } from "@/lib/content";

/** "What's included" as a numbered two-column editorial list. */
export function Included() {
  return (
    <Section tone="cream" id="included">
      <Grid>
        <div className="col-span-4 md:col-span-4">
          <h2 data-reveal className="display text-3xl sm:text-4xl">{included.title}</h2>
          <p className="mt-6 max-w-sm text-sm text-muted">{included.lead}</p>
        </div>

        <ol data-reveal-group className="col-span-4 mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 md:col-span-8 md:col-start-5 md:mt-0">
          {included.items.map((item, i) => (
            <li key={item} className="border-t border-border pt-4 first:border-t-0 first:pt-0 sm:[&:nth-child(2)]:border-t-0 sm:[&:nth-child(2)]:pt-0">
              <Label>{String(i + 1).padStart(2, "0")}</Label>
              <p className="mt-4 max-w-xs text-base">{item}</p>
            </li>
          ))}
        </ol>

        <div className="col-span-4 mt-12 flex flex-wrap items-center justify-between gap-6 md:col-span-8 md:col-start-5 md:mt-16">
          <Label tone="pink" dot>
            {included.notIncluded}
          </Label>
          <Button href="#book" size="sm">
            {cta.primary}
          </Button>
        </div>
      </Grid>
    </Section>
  );
}
