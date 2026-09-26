import { Accordion } from "@/components/ui/Accordion";
import { Grid } from "@/components/ui/Container";
import { Label } from "@/components/ui/Label";
import { Section } from "@/components/ui/Section";
import { faqGroups } from "@/lib/content";

/** Grouped hairline accordion with the category label in the left rail. */
export function Faq() {
  return (
    <Section tone="cream" id="faq">
      <Grid>
        <div className="col-span-4 md:col-span-7 md:col-start-5">
          <h2 className="display text-3xl sm:text-4xl lg:text-5xl">
            Everything you want to know before you book.
          </h2>
        </div>
      </Grid>

      <div className="mt-16 flex flex-col gap-16 md:mt-24 md:gap-24">
        {faqGroups.map((group) => (
          <Grid key={group.label}>
            <div className="col-span-4 mb-4 md:col-span-3 md:mb-0">
              <Label tone="navy" dot>
                {group.label}
              </Label>
            </div>
            <div className="col-span-4 md:col-span-8 md:col-start-5">
              <Accordion items={group.items} />
            </div>
          </Grid>
        ))}
      </div>
    </Section>
  );
}
