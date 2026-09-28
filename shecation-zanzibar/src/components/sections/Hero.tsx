import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container, Grid } from "@/components/ui/Container";
import { ImageTag } from "@/components/ui/ImageTag";
import { Label } from "@/components/ui/Label";
import { cta, hero, heroMarquee, heroTags, trip } from "@/lib/content";

const tagPositions = [
  { left: "12%", top: "58%" },
  { left: "38%", top: "30%" },
  { left: "62%", top: "66%" },
  { left: "80%", top: "40%" },
];

/**
 * Photographs of Zanzibar drifting slowly behind the hero copy.
 * Two copies of the strip make a seamless loop; a navy scrim keeps the white
 * text readable whatever photo is behind it. Under prefers-reduced-motion the
 * strip stands still. Decorative only, so it is hidden from assistive tech.
 */
function HeroMarquee() {
  const duration = `${heroMarquee.length * 14}s`;
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <ul
        style={{ animationDuration: duration }}
        className="flex h-full w-max animate-marquee gap-3 motion-reduce:animate-none"
      >
        {[...heroMarquee, ...heroMarquee].map((src, i) => (
          <li key={`${src}-${i}`} className="relative h-full w-[56vw] shrink-0 sm:w-[36vw] lg:w-[22vw]">
            <Image
              src={src}
              alt=""
              fill
              sizes="(min-width: 1024px) 22vw, (min-width: 640px) 36vw, 56vw"
              priority={i < 4}
              className="object-cover"
            />
          </li>
        ))}
      </ul>
      {/* Scrim: stronger on the left where the labels sit, always enough for white text */}
      <div className="absolute inset-0 bg-navy/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/60 via-transparent to-navy/40" />
    </div>
  );
}

/**
 * Hero (editorial): micro labels in the left rail, headline offset to the
 * right, intro + CTA below, all on a slow marquee of Zanzibar photographs,
 * then a full-bleed photograph with pinned tags.
 */
export function Hero() {
  return (
    <section className="bg-navy text-white" id="top">
      <div className="relative isolate">
        <HeroMarquee />
        <Container className="relative pt-8 pb-12 md:pt-16 md:pb-16 lg:pt-20">
          <Grid>
            {/* Left rail: tiny meta */}
            <div className="col-span-4 mb-8 flex flex-col gap-3 md:col-span-3 md:mb-0">
              <Label tone="white" dot className="text-white">
                {trip.name} · {trip.dates}
              </Label>
              <Label tone="white">{trip.brand} presents</Label>
            </div>

            {/* Headline, offset to the right like an editorial spread */}
            <div className="col-span-4 md:col-span-9 md:col-start-4">
              <h1 className="display text-5xl uppercase sm:text-6xl lg:text-7xl xl:text-8xl">
                {hero.title}
              </h1>
            </div>

            <div className="col-span-4 mt-10 md:col-span-5 md:col-start-7 md:mt-16">
              <p className="text-base md:text-lg">{hero.intro}</p>
              <p className="mt-4 text-sm text-white/75">{hero.body}</p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button href="#book" size="md">
                  {cta.primary}
                </Button>
                <Button href="#included" variant="pill-dark" size="md">
                  What&apos;s included
                </Button>
              </div>
              <p className="mt-4 text-xs text-white/60">{cta.micro}</p>
            </div>
          </Grid>
        </Container>
      </div>

      {/* Full-bleed hero photograph with pinned tags */}
      <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[16/10] lg:aspect-[21/9]">
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
