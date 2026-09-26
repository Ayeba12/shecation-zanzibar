import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Grid } from "@/components/ui/Container";
import { Label } from "@/components/ui/Label";
import { Section } from "@/components/ui/Section";
import { cta, promise } from "@/lib/content";

/** About block: centred portrait photo with small text columns either side. */
export function Promise() {
  return (
    <Section tone="cream" id="about">
      <Grid>
        <div className="col-span-4 md:col-span-12">
          <Label tone="navy" dot>
            About SHE-CATION
          </Label>
          <h2 className="display mt-6 max-w-4xl text-3xl sm:text-4xl lg:text-5xl">
            {promise.title}
          </h2>
        </div>

        <div className="col-span-4 order-2 mt-10 md:order-1 md:col-span-3 md:mt-24">
          <p className="text-base text-navy">{promise.lead}</p>
        </div>

        <div className="col-span-4 order-1 mt-10 md:order-2 md:col-span-4 md:col-start-5 md:mt-24">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/women-selfie.jpg"
              alt="Three happy women taking a selfie together on the beach"
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="col-span-4 order-3 mt-10 md:col-span-3 md:col-start-10 md:mt-24">
          <p className="text-sm text-muted">{promise.body}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            <Button href="#book" size="sm">
              {cta.primary}
            </Button>
            <Button href="#experiences" variant="pill" size="sm">
              Experiences
            </Button>
          </div>
        </div>
      </Grid>
    </Section>
  );
}
