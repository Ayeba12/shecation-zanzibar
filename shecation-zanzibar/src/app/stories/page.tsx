import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { Button } from "@/components/ui/Button";
import { Container, Grid } from "@/components/ui/Container";
import { ImageTag } from "@/components/ui/ImageTag";
import { Label } from "@/components/ui/Label";
import { TestimonialVideo } from "@/components/ui/TestimonialVideo";
import { VideoBlock } from "@/components/ui/VideoBlock";
import { cta, finalCta, stories, testimonials, trip } from "@/lib/content";

export const metadata: Metadata = {
  title: "Stories from SHE-CATION 3.0 | SHE-CATION 4.0 Zanzibar",
  description:
    "Every photograph and testimonial from SHE-CATION 3.0, shared by the women who were there, plus the SHE-CATION 4.0 intro film. Zanzibar, 9-13 March 2027.",
};

const slug = (name: string) => `story-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

/**
 * All stories (NGLM "Talent" page): giant page title overlapping a full-bleed
 * photo, label + intro split left/right, a four-column grid of captioned
 * photographs, the two films with a side list, the guests' names as a giant
 * list beside a photo, every quote in full, then a dark invitation band.
 */
export default function StoriesPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-cream text-navy">
        {/* Title over the hero photo */}
        <section className="pt-8 md:pt-12">
          <Container>
            <Label tone="navy" dot className="md:justify-center">
              {stories.eyebrow}
            </Label>
            <h1 className="display mt-6 mb-8 text-[16vw] uppercase leading-[0.9] tracking-[-0.04em] md:mb-12 md:text-center md:whitespace-nowrap md:text-[12.5vw]">
              {stories.title}
            </h1>
          </Container>
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-navy sm:aspect-[4/3] md:aspect-[21/9]">
            <Image
              src={stories.hero.src}
              alt={stories.hero.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-[center_35%]"
            />
            <ImageTag className="left-4 bottom-4 md:left-8 md:bottom-8">{stories.hero.tags[0]}</ImageTag>
            <ImageTag className="right-4 bottom-4 md:right-8 md:bottom-8">
              {stories.hero.tags[1]}
            </ImageTag>
          </div>
        </section>

        {/* Label left, intro right */}
        <Container className="py-12 md:py-16 lg:py-20">
          <Grid>
            <Label className="col-span-4 md:col-span-3">{stories.label}</Label>
            <p className="col-span-4 mt-4 text-lg md:col-span-6 md:col-start-7 md:mt-0 md:text-xl lg:text-2xl">
              {stories.intro}
            </p>
          </Grid>
        </Container>

        {/* Photo grid: label and title above each photo, centred (NGLM talent cards) */}
        <Container className="pb-16 md:pb-24 lg:pb-32">
          <ul className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-x-6 md:gap-y-14">
            {stories.photos.map((photo, i) => (
              <li key={photo.src} className="flex flex-col">
                <Label className="justify-center">{photo.tag}</Label>
                <p className="mt-1 text-center font-display text-base md:text-lg">{photo.title}</p>
                <div className="relative mt-4 aspect-[4/5] w-full overflow-hidden bg-sand">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 768px) 25vw, 50vw"
                    loading={i < 4 ? "eager" : "lazy"}
                    className="object-cover"
                  />
                </div>
              </li>
            ))}
          </ul>
        </Container>

        {/* Films: two portrait videos with a side list */}
        <section className="bg-sand py-16 md:py-24 lg:py-32" id="films">
          <Container>
            <Grid className="items-start">
              <div className="col-span-4 md:col-span-3">
                <Label tone="navy" dot>
                  {stories.filmsLabel}
                </Label>
                <p className="mt-6 max-w-xs text-base text-muted">{stories.filmsIntro}</p>
              </div>
              <div className="col-span-4 mt-10 grid grid-cols-2 gap-4 md:col-span-6 md:col-start-4 md:mt-0 md:gap-6">
                {stories.films.map((film) =>
                  film.kind === "film" ? (
                    <VideoBlock
                      key={film.src}
                      src={film.src}
                      poster={film.poster}
                      label={film.label}
                      className="aspect-[9/16] w-full"
                    >
                      <div className="pointer-events-none absolute inset-x-0 top-0 p-4">
                        <Label tone="white">{film.title}</Label>
                      </div>
                    </VideoBlock>
                  ) : (
                    <TestimonialVideo
                      key={film.src}
                      src={film.src}
                      poster={film.poster}
                      label={film.label}
                      className="aspect-[9/16] w-full"
                    />
                  ),
                )}
              </div>
              <div className="col-span-4 mt-10 md:col-span-3 md:col-start-10 md:mt-0">
                <Label>Watch</Label>
                <ol className="mt-6 flex flex-col gap-8 border-l border-navy/20 pl-6">
                  {stories.films.map((film, i) => (
                    <li key={film.title}>
                      <Label className="mb-2">{String(i + 1).padStart(2, "0")}</Label>
                      <p className="font-display text-xl md:text-2xl">{film.title}</p>
                      <p className="mt-2 text-sm text-muted">{film.description}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </Grid>
          </Container>
        </section>

        {/* Names as a giant list beside a photo, then every quote in full */}
        <section className="py-16 md:py-24 lg:py-32" id="said">
          <Container>
            <Grid>
              <Label tone="navy" dot className="col-span-4 md:col-span-3">
                {stories.saidLabel}
              </Label>
              <p className="col-span-4 mt-4 max-w-md text-base text-muted md:col-span-5 md:col-start-7 md:mt-0">
                {stories.saidIntro}
              </p>
            </Grid>

            <Grid className="mt-12 items-end md:mt-16">
              <figure className="col-span-4 md:col-span-4">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-sand">
                  <Image
                    src={stories.saidPhoto.src}
                    alt={stories.saidPhoto.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 max-w-xs text-sm text-muted">{stories.saidPhoto.caption}</figcaption>
              </figure>
              <ul className="col-span-4 mt-10 md:col-span-7 md:col-start-6 md:mt-0">
                {testimonials.map((t) => (
                  <li key={t.name}>
                    <Link
                      href={`#${slug(t.name)}`}
                      className="display block text-4xl uppercase leading-[1.05] transition-colors hover:text-pink sm:text-5xl lg:text-6xl xl:text-7xl"
                    >
                      {t.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>

            <div className="mt-20 flex flex-col gap-14 md:mt-28 md:gap-20">
              {testimonials.map((t) => (
                <div key={t.name} id={slug(t.name)} className="scroll-mt-24">
                  <Grid>
                  <div className="col-span-4 md:col-span-3">
                    <p className="font-display text-xl md:text-2xl">{t.name}</p>
                    <Label className="mt-1">SHE-CATION 3.0</Label>
                  </div>
                  <blockquote
                    className={`col-span-4 mt-4 md:col-span-8 md:col-start-5 md:mt-0 ${
                      t.featured ? "display text-2xl sm:text-3xl lg:text-4xl" : "text-lg md:text-xl"
                    }`}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  </Grid>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Invitation band (NGLM "bringing design to the world") */}
        <section className="relative isolate overflow-hidden bg-navy text-white">
          <Image
            src="/images/hero-beach.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-50"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/40 to-navy/40" />
          <Container className="relative flex min-h-[60svh] flex-col items-center justify-center py-24 text-center md:py-32">
            <h2 className="display max-w-4xl text-3xl uppercase sm:text-5xl lg:text-6xl">{finalCta.title}</h2>
            <Label tone="white" className="mt-6 justify-center">
              {trip.dates} · {trip.price} {trip.priceNote}
            </Label>
            <div className="mt-8">
              <Button href="/#book" size="lg">
                {cta.primary}
              </Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
