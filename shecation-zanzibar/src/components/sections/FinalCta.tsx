import { Button } from "@/components/ui/Button";
import { Grid } from "@/components/ui/Container";
import { Label } from "@/components/ui/Label";
import { Section } from "@/components/ui/Section";
import { cta, finalCta, trip } from "@/lib/content";

export function FinalCta() {
  return (
    <Section tone="navy" id="final">
      <Grid>
        <div className="col-span-4 md:col-span-12">
          <h2 className="display text-4xl uppercase sm:text-5xl lg:text-7xl xl:text-8xl">
            {finalCta.title}
          </h2>
        </div>
        <div className="col-span-4 mt-12 md:col-span-3 md:mt-20">
          <div className="flex flex-col gap-3">
            <Label tone="white">{trip.dates}</Label>
            <Label tone="white">
              {trip.price} {trip.priceNote}
            </Label>
            <Label tone="white">{trip.deposit} deposit to secure your place</Label>
          </div>
        </div>
        <div className="col-span-4 mt-10 md:col-span-6 md:col-start-6 md:mt-20">
          <p className="max-w-prose text-base text-white/85 md:text-lg">{finalCta.body}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="#book" size="lg">
              {cta.primary}
            </Button>
            <span className="text-sm text-white/60">{finalCta.support}</span>
          </div>
        </div>
      </Grid>
    </Section>
  );
}
