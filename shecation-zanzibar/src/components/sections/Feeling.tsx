import { Button } from "@/components/ui/Button";
import { Container, Grid } from "@/components/ui/Container";
import { Label } from "@/components/ui/Label";
import { VideoBlock } from "@/components/ui/VideoBlock";
import { cta, feeling, statement } from "@/lib/content";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
      <path d="M2 1.5v7l6-3.5z" />
    </svg>
  );
}

/**
 * Film section (Vaziani "Vaziani, Georgia / 20 min from the airport" block):
 * dark canvas, two big statements top-left and top-right, the portrait film
 * centred, small copy in the bottom corners aligned to the base of the film,
 * and two small pill buttons bottom-right.
 */
export function Feeling() {
  return (
    <section className="bg-navy text-white" id="feeling">
      <Container className="py-12 md:py-16 lg:py-20">
        {/* Two big statements */}
        <p className="display max-w-4xl text-3xl uppercase sm:text-4xl lg:text-6xl">
          {statement.left.split(". ").map((line, i, arr) => (
            <span key={line} className="block">
              {line}
              {i < arr.length - 1 ? "." : ""}
            </span>
          ))}
        </p>
        <p className="display ml-auto mt-6 max-w-4xl text-right text-3xl uppercase sm:text-4xl lg:text-6xl">
          {statement.right}
        </p>

        {/* Film with copy in the bottom corners */}
        <Grid className="mt-16 items-end md:mt-24 lg:mt-32">
          {/* Bottom-left copy */}
          <div className="col-span-4 order-2 mt-10 flex flex-col gap-6 md:order-1 md:col-span-3 md:mt-0">
            <p className="text-sm text-white/85">{feeling.body1}</p>
            <p className="text-sm text-white/85">{feeling.body2}</p>
          </div>

          {/* Centre: portrait film */}
          <div className="col-span-4 order-1 md:order-2 md:col-span-4 md:col-start-5">
            <VideoBlock
              src="/video/shecation.mp4"
              poster="/images/shecation-3/boat-blue-day.jpg"
              label="SHE-CATION film: women enjoying the trip together"
              className="aspect-[4/5] w-full md:aspect-[9/16]"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 p-4">
                <Label tone="white">SHE-CATION on film</Label>
              </div>
            </VideoBlock>
          </div>

          {/* Bottom-right copy + pills */}
          <div className="col-span-4 order-3 mt-8 md:col-span-3 md:col-start-10 md:mt-0">
            <p className="text-sm text-white/85">{feeling.aside}</p>
            <div className="mt-8 flex flex-wrap gap-2 md:mt-16">
              <Button href="#book" size="xs" className="md:h-10 md:px-5">
                <PlayIcon />
                {cta.primary}
              </Button>
              <Button href="#included" variant="pill-dark" size="xs" className="md:h-10 md:px-5">
                <ArrowIcon />
                What&apos;s included
              </Button>
            </div>
          </div>
        </Grid>
      </Container>
    </section>
  );
}
