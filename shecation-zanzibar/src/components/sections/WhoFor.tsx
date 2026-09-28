import Image from "next/image";
import { Grid } from "@/components/ui/Container";
import { Label } from "@/components/ui/Label";
import { Section } from "@/components/ui/Section";
import { whoFor } from "@/lib/content";

/**
 * Who this is for, in the Vaziani "10 reasons" grammar:
 * heading and photograph on the left, a numbered two-column list on the right.
 */
export function WhoFor() {
  return (
    <Section tone="sand" id="who">
      <Grid>
        <div className="col-span-4 md:col-span-4">
          <Label tone="navy" dot>
            Who this is for
          </Label>
          <h2 className="display mt-6 text-3xl sm:text-4xl">{whoFor.title}</h2>
          <div className="relative mt-10 hidden aspect-[3/4] overflow-hidden md:block md:max-w-sm">
            <Image
              src="/images/shecation-3/laughter-on-the-water.jpg"
              alt="Three SHE-CATION 3.0 guests in blue and white stripes laughing on a sailing boat"
              fill
              sizes="(min-width: 768px) 30vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <ol className="col-span-4 mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 md:col-span-8 md:col-start-5 md:mt-0">
          {whoFor.items.map((item, i) => (
            <li key={item} className="border-t border-navy/15 pt-4 first:border-t-0 first:pt-0 sm:[&:nth-child(2)]:border-t-0 sm:[&:nth-child(2)]:pt-0">
              <Label>{String(i + 1).padStart(2, "0")}</Label>
              <p className="mt-4 max-w-xs text-base md:text-lg">{item}</p>
            </li>
          ))}
        </ol>
      </Grid>
    </Section>
  );
}
