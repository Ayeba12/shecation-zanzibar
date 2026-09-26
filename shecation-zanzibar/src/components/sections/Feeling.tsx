import { Button } from "@/components/ui/Button";
import { Grid } from "@/components/ui/Container";
import { Label } from "@/components/ui/Label";
import { Section } from "@/components/ui/Section";
import { VideoBlock } from "@/components/ui/VideoBlock";
import { cta, feeling } from "@/lib/content";

/**
 * The SHE-CATION feeling: offset statement, then the portrait film
 * centred between two small text columns (NGLM about-block rhythm).
 */
export function Feeling() {
  return (
    <Section tone="cream" id="feeling">
      <Grid>
        <div className="col-span-4 md:col-span-3">
          <Label tone="navy" dot>
            The SHE-CATION feeling
          </Label>
        </div>
        <div className="col-span-4 mt-6 md:col-span-8 md:col-start-5 md:mt-0">
          <h2 className="display text-3xl sm:text-4xl lg:text-5xl">{feeling.title}</h2>
        </div>
      </Grid>

      <Grid className="mt-16 md:mt-24">
        {/* Left column */}
        <div className="col-span-4 order-2 mt-10 md:order-1 md:col-span-3 md:mt-12">
          <p className="text-base">{feeling.body1}</p>
        </div>

        {/* Centre: portrait film */}
        <div className="col-span-4 order-1 md:order-2 md:col-span-4 md:col-start-5">
          <VideoBlock
            src="/video/shecation.mp4"
            poster="/images/dhow-sunset.jpg"
            label="SHE-CATION film: women enjoying the trip together"
            className="aspect-[4/5] w-full md:aspect-[9/16]"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 p-4">
              <Label tone="white">SHE-CATION on film</Label>
            </div>
          </VideoBlock>
        </div>

        {/* Right column */}
        <div className="col-span-4 order-3 mt-8 md:col-span-3 md:col-start-10 md:mt-12">
          <p className="text-sm text-muted">{feeling.body2}</p>
          <div className="mt-8">
            <Button href="#book" size="sm">
              {cta.primary}
            </Button>
          </div>
        </div>
      </Grid>
    </Section>
  );
}
