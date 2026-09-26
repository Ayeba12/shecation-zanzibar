import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container, Grid } from "@/components/ui/Container";
import { Label } from "@/components/ui/Label";
import { promise, quickFacts, trip } from "@/lib/content";

/**
 * About: full-height dark photographic section (NGLM "companies" block).
 * Quick facts list top-left, giant wordmark in the middle,
 * intro copy and a button bottom-left.
 */
export function Promise() {
  return (
    <section id="about" className="relative isolate overflow-hidden bg-navy text-white">
      <Image
        src="/images/nungwi-aerial.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-[60%_center] opacity-60"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-navy/75 via-navy/35 to-navy/90"
      />

      <Container className="relative flex min-h-[100svh] flex-col justify-between py-8 md:py-12">
        {/* Top row: quick facts */}
        <Grid>
          <Label tone="white" className="col-span-4 md:col-span-2">
            Quick facts
          </Label>
          <dl className="col-span-4 mt-4 flex flex-col gap-1 md:col-span-4 md:col-start-3 md:mt-0">
            {quickFacts.slice(0, 4).map((f) => (
              <div key={f.label} className="flex gap-3 text-sm">
                <dt className="w-20 shrink-0 text-white/50">{f.label}</dt>
                <dd className="font-display">{f.value}</dd>
              </div>
            ))}
          </dl>
          <Label tone="white" className="col-span-4 mt-6 md:col-span-3 md:col-start-10 md:mt-0 md:justify-end">
            About SHE-CATION
          </Label>
        </Grid>

        {/* Middle: wordmark */}
        <div className="py-20 text-center md:py-28">
          <p className="display text-[16vw] uppercase leading-none tracking-[-0.04em] md:text-[12vw]">
            {trip.name.split(" ")[0]}
          </p>
          <Label tone="white" className="mt-6 justify-center">
            Fourth edition · Zanzibar · {trip.dates}
          </Label>
        </div>

        {/* Bottom row: intro + CTA */}
        <Grid className="items-end">
          <div className="col-span-4 md:col-span-5">
            <h2 className="text-xl md:text-2xl">{promise.title}</h2>
            <p className="mt-4 max-w-md text-sm text-white/80">{promise.lead}</p>
            <div className="mt-6 flex gap-2">
              <Button href="#experiences" variant="pill-dark" size="sm">
                Read more
              </Button>
              <Button href="#book" size="sm">
                Secure your spot
              </Button>
            </div>
          </div>
          <p className="col-span-4 mt-8 max-w-sm text-sm text-white/60 md:col-span-4 md:col-start-9 md:mt-0">
            {promise.body}
          </p>
        </Grid>
      </Container>
    </section>
  );
}
