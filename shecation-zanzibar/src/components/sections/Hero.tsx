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
 * A strip of Zanzibar photo cards drifting slowly behind the hero copy
 * (the community marquee, used as a backdrop). Two copies of the strip make
 * a seamless loop; every third card is landscape so the row has rhythm.
 * Under prefers-reduced-motion the strip stands still. Decorative only, so it
 * is hidden from assistive tech and never catches clicks.
 */
function HeroMarquee() {
  const duration = `${heroMarquee.length * 14}s`;
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 flex items-center overflow-hidden"
    >
      <ul
        style={{ animationDuration: duration }}
        className="flex h-64 w-max animate-marquee items-center gap-3 motion-reduce:animate-none sm:h-80 md:gap-4 lg:h-[26rem]"
      >
        {[...heroMarquee, ...heroMarquee].map((src, i) => (
          <li
            key={`${src}-${i}`}
            className={`relative h-full shrink-0 ${
              i % 3 === 1 ? "w-[22rem] lg:w-[34rem]" : "w-[12.5rem] sm:w-[15rem] lg:w-[20rem]"
            }`}
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="(min-width: 1024px) 544px, 352px"
              priority={i < 4}
              className="object-cover"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Hero (editorial): micro labels in the left rail, headline offset to the
 * right, intro + CTA below. A marquee of Zanzibar photo cards passes behind
 * the copy. The big headline uses difference blending (navy over cream, inverted
 * over photos); the small copy and labels sit on frosted cream panels because
 * small text over a bright photo is unreadable with blending alone.
 * Then a full-bleed photograph with pinned tags.
 */
export function Hero() {
  return (
    <section className="bg-cream text-navy" id="top">
      {/* bg-cream lives on this isolated layer so the blended text inverts against it (beige -> navy) */}
      <div className="relative isolate bg-cream">
        <HeroMarquee />
        <Container className="relative pt-8 pb-12 md:pt-16 md:pb-16 lg:pt-20">
          <Grid>
            {/* Left rail: tiny meta */}
            <div className="col-span-4 mb-8 flex flex-col items-start gap-2 md:col-span-3 md:mb-0">
              <Label tone="navy" dot className="bg-cream/85 px-2 py-1 backdrop-blur-sm">
                {trip.name} · {trip.dates}
              </Label>
              <Label className="bg-cream/85 px-2 py-1 backdrop-blur-sm">{trip.brand} presents</Label>
            </div>

            {/* Headline, offset to the right; the text inverts against the cards behind it */}
            <div className="col-span-4 md:col-span-9 md:col-start-4">
              <h1 className="display contrast-text text-5xl uppercase sm:text-6xl lg:text-7xl xl:text-8xl">
                {hero.title}
              </h1>
            </div>

            <div className="col-span-4 mt-10 md:col-span-5 md:col-start-7 md:mt-16">
              {/* Frosted panel: the cards still pass behind it, the small copy stays navy on cream */}
              <div className="bg-cream/85 p-5 backdrop-blur-md md:p-6">
                <p className="text-base text-navy md:text-lg">{hero.intro}</p>
                <p className="mt-4 text-sm text-muted">{hero.body}</p>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Button href="#book" size="md">
                    {cta.primary}
                  </Button>
                  <Button href="#included" variant="pill" size="md">
                    What&apos;s included
                  </Button>
                </div>
                <p className="mt-4 text-xs text-faint">{cta.micro}</p>
              </div>
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
