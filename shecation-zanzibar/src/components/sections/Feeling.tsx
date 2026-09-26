import Image from "next/image";
import { Container, Grid } from "@/components/ui/Container";
import { Label } from "@/components/ui/Label";
import { feeling } from "@/lib/content";

/** Big offset statement followed by a full-bleed cinematic photograph. */
export function Feeling() {
  return (
    <section className="bg-cream text-navy" id="feeling">
      <Container className="py-16 md:py-24 lg:py-32">
        <Grid>
          <div className="col-span-4 md:col-span-7 md:col-start-5">
            <h2 className="display text-3xl sm:text-4xl lg:text-5xl">{feeling.title}</h2>
            <p className="mt-8 max-w-prose text-base md:text-lg">{feeling.body1}</p>
            <p className="mt-4 max-w-prose text-sm text-muted">{feeling.body2}</p>
          </div>
        </Grid>
      </Container>

      <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[16/9] lg:aspect-[21/9]">
        <Image
          src="/images/dhow-sunset.jpg"
          alt="Silhouette of a dhow sailboat at sunset off the Zanzibar coast"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 grid place-items-center">
          <Label tone="white" className="text-white">
            The SHE-CATION feeling
          </Label>
        </div>
      </div>
    </section>
  );
}
