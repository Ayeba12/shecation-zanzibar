import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container, Grid } from "@/components/ui/Container";
import { Crossfade } from "@/components/ui/Crossfade";
import { ImageTag } from "@/components/ui/ImageTag";
import { Label } from "@/components/ui/Label";
import { cta, hero, heroPhotos, heroTags, trip } from "@/lib/content";

const tagPositions = [
  { left: "12%", top: "58%" },
  { left: "38%", top: "30%" },
  { left: "62%", top: "66%" },
  { left: "80%", top: "40%" },
];

/**
 * Hero (editorial): micro labels in the left rail, headline offset to the
 * right, intro + CTA below, then a full-bleed photograph with pinned tags.
 */
export function Hero() {
  return (
    <section className="bg-cream text-navy" id="top">
      <Container className="pt-8 pb-12 md:pt-16 md:pb-16 lg:pt-20">
        <Grid>
          {/* Left rail: tiny meta, then (desktop) a portrait frame of Zanzibar that crossfades */}
          <div className="col-span-4 mb-8 flex flex-col gap-3 md:col-span-3 md:row-span-2 md:mb-0">
            <Label tone="navy" dot data-hero="eyebrow">
              {trip.name} · {trip.dates}
            </Label>
            <div data-hero="art" className="mt-8 hidden md:block lg:mt-12">
              <Crossfade photos={heroPhotos.rail} sizes="(min-width: 768px) 25vw, 0px" className="aspect-[3/4] w-full" />
            </div>
          </div>

          {/* Headline, offset to the right like an editorial spread */}
          <div className="col-span-4 md:col-span-9 md:col-start-4 md:row-start-1">
            <Label className="mb-4 md:mb-6" data-hero="eyebrow">
              {trip.brand} presents
            </Label>
            <h1 className="display text-5xl uppercase sm:text-6xl lg:text-7xl xl:text-8xl">
              {/* One masked line per sentence so the headline can rise into view line by line */}
              {hero.title.split(/(?<=\.)\s+/).map((line) => (
                <span key={line} className="-my-[0.04em] block overflow-hidden py-[0.04em]">
                  <span data-hero="line" className="block">
                    {line}
                  </span>
                </span>
              ))}
            </h1>
          </div>

          {/* Top-right corner (wide screens only): a small landscape frame beside the first lines */}
          <div
            data-hero="art"
            className="hidden self-start justify-self-end xl:col-span-3 xl:col-start-10 xl:row-start-1 xl:block xl:w-[86%] wide:w-full"
          >
            <Crossfade
              photos={heroPhotos.corner}
              hold={5.5}
              media="(min-width: 1280px)"
              sizes="(min-width: 1280px) 16vw, 0px"
              className="aspect-[4/3] w-full"
            />
          </div>

          <div className="col-span-4 mt-10 md:col-span-5 md:col-start-7 md:mt-16">
            <p data-hero="copy" className="text-base text-navy md:text-lg">
              {hero.intro}
            </p>
            <p data-hero="copy" className="mt-4 text-sm text-muted">
              {hero.body}
            </p>
            <div data-hero="cta" className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="#book" size="md">
                {cta.primary}
              </Button>
              <Button href="#included" variant="pill" size="md">
                What&apos;s included
              </Button>
            </div>
            <p data-hero="copy" className="mt-4 text-xs text-faint">
              {cta.micro}
            </p>
          </div>
        </Grid>
      </Container>

      {/* Full-bleed hero photograph with pinned tags */}
      <div
        data-hero="photo"
        data-parallax
        className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[16/10] lg:aspect-[21/9]"
      >
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
