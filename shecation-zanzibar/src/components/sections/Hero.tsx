import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container, Grid } from "@/components/ui/Container";
import { ImageTag } from "@/components/ui/ImageTag";
import { Label } from "@/components/ui/Label";
import { cta, hero, heroTags, quote, trip } from "@/lib/content";

const tagPositions = [
  { left: "12%", top: "58%" },
  { left: "38%", top: "30%" },
  { left: "62%", top: "66%" },
  { left: "80%", top: "40%" },
];

/**
 * Hero: centred giant headline with a photograph set into it (NGLM),
 * a quote row with attribution / quote / CTA, then a full-bleed
 * photograph with pinned tags (Vaziani).
 */
export function Hero() {
  return (
    <section className="bg-cream text-navy" id="top">
      <Container className="pt-10 md:pt-16 lg:pt-20">
        <Label tone="navy" dot className="justify-center">
          {trip.name} · {trip.dates}
        </Label>

        <h1 className="display mx-auto mt-8 max-w-6xl text-center text-5xl uppercase sm:text-6xl lg:text-7xl xl:text-8xl">
          {hero.titleA}{" "}
          <span
            aria-hidden="true"
            className="relative mx-2 hidden h-[1.6em] w-[1.2em] overflow-hidden align-middle sm:inline-block md:mx-4"
          >
            <Image
              src="/images/women-selfie.jpg"
              alt=""
              fill
              priority
              sizes="200px"
              className="object-cover"
            />
          </span>{" "}
          {hero.titleB}
        </h1>

        {/* Quote row */}
        <Grid className="mt-12 items-center md:mt-16">
          <div className="col-span-4 md:col-span-3">
            <p className="font-display text-base">{quote.by}</p>
            <Label className="mt-1">{quote.role}</Label>
          </div>
          <p className="col-span-4 mt-6 text-center text-base md:col-span-6 md:mt-0 md:text-lg">
            &ldquo;{quote.text}&rdquo;
          </p>
          <div className="col-span-4 mt-6 flex md:col-span-3 md:mt-0 md:justify-end">
            <Button href="#book" size="md">
              {cta.primary}
            </Button>
          </div>
        </Grid>

        <Grid className="mt-10 md:mt-14">
          <p className="col-span-4 text-sm text-navy md:col-span-6 md:col-start-4 md:text-center">
            {hero.intro}
          </p>
          <p className="col-span-4 mt-3 text-xs text-faint md:col-span-6 md:col-start-4 md:text-center">
            {cta.micro}
          </p>
        </Grid>
      </Container>

      {/* Full-bleed hero photograph with pinned tags */}
      <div className="relative mt-12 aspect-[4/5] w-full overflow-hidden sm:aspect-[16/10] md:mt-16 lg:aspect-[21/9]">
        <Image
          src="/images/hero-beach.jpg"
          alt="Wooden boats on turquoise water beside a white sand beach in Zanzibar"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {heroTags.map((tag, i) => (
          <ImageTag
            key={tag}
            style={tagPositions[i]}
            className={i > 1 ? "hidden sm:inline-flex" : ""}
          >
            {tag}
          </ImageTag>
        ))}
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4 md:p-6 lg:p-8">
          <Label tone="white">Zanzibar, Tanzania</Label>
          <Label tone="white">{trip.duration}</Label>
        </div>
      </div>
    </section>
  );
}
