import { Grid } from "@/components/ui/Container";
import { Label } from "@/components/ui/Label";
import { Section } from "@/components/ui/Section";
import { whoFor } from "@/lib/content";

export function WhoFor() {
  return (
    <Section tone="navy" id="who">
      <Grid>
        <div className="col-span-4 md:col-span-3">
          <Label tone="white" dot>
            Who this is for
          </Label>
        </div>
        <div className="col-span-4 mt-6 md:col-span-8 md:col-start-5 md:mt-0">
          <h2 className="display text-3xl sm:text-4xl lg:text-5xl">{whoFor.title}</h2>
          <ol className="mt-12 border-t border-white/15">
            {whoFor.items.map((item, i) => (
              <li
                key={item}
                className="grid grid-cols-[3rem_1fr] items-baseline gap-4 border-b border-white/15 py-5 md:py-6"
              >
                <Label tone="white">{String(i + 1).padStart(2, "0")}</Label>
                <p className="text-lg md:text-xl">{item}</p>
              </li>
            ))}
          </ol>
        </div>
      </Grid>
    </Section>
  );
}
