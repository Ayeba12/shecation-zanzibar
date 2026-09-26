import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Grid } from "@/components/ui/Container";
import { Label } from "@/components/ui/Label";
import { Marquee } from "@/components/ui/Marquee";
import { Section } from "@/components/ui/Section";
import { TestimonialVideo } from "@/components/ui/TestimonialVideo";
import { communityCards, socialProof, testimonials, videoTestimonial } from "@/lib/content";

/**
 * Community: real SHE-CATION 3.0 photographs sliding as a marquee.
 * Cards share one height; portrait and landscape photos take different widths
 * so nothing is cropped harshly.
 */
export function SocialProof() {
  return (
    <Section tone="cream" id="community">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="display max-w-2xl text-3xl uppercase sm:text-4xl lg:text-5xl">
            From the SHE-CATION community
          </h2>
          <p className="mt-4 max-w-prose text-base text-muted">{socialProof.lead}</p>
        </div>
        <Button href="/stories" variant="pill" size="sm">
          See all stories
        </Button>
      </div>

      <Marquee
        items={[...communityCards]}
        itemKey={(card) => card.title}
        label="SHE-CATION 3.0 photographs"
        className="-mx-4 mt-12 md:-mx-6 md:mt-16 lg:-mx-8"
        trackClassName="gap-4 px-4 pb-4 md:gap-6 md:px-6 lg:px-8"
        render={(card, _i, hidden) => (
          <article
            className={card.orientation === "portrait" ? "w-56 sm:w-64 lg:w-72" : "w-80 sm:w-96 lg:w-[27rem]"}
          >
            <div className="relative h-72 overflow-hidden bg-navy sm:h-80 lg:h-[22.5rem]">
              {"image" in card ? (
                <Image
                  src={card.image}
                  alt={hidden ? "" : card.alt}
                  fill
                  sizes="(min-width: 1024px) 432px, 384px"
                  loading="eager"
                  className="object-cover"
                />
              ) : (
                <div className="grid h-full place-items-center text-white">
                  <p className="display text-7xl lg:text-8xl">{card.block}</p>
                </div>
              )}
            </div>
            <p className="mt-4 font-display text-base">{card.title}</p>
            <Label className="mt-1">{card.meta}</Label>
          </article>
        )}
      />

      {/* Testimonials: real quotes from SHE-CATION 3.0 guests */}
      <Grid className="mt-16 md:mt-24">
        <div className="col-span-4 md:col-span-3">
          <Label tone="navy" dot>
            What they said
          </Label>
          {/* Video testimonial in the left rail (full width on phones) */}
          <TestimonialVideo
            src={videoTestimonial.src}
            poster={videoTestimonial.poster}
            label={videoTestimonial.label}
            className="mt-6 aspect-[4/5] w-full md:mt-8 md:aspect-[9/16]"
          />
          <Label className="mt-3">{videoTestimonial.caption}</Label>
        </div>
        <div className="col-span-4 mt-6 md:col-span-8 md:col-start-5 md:mt-0">
          {testimonials
            .filter((t) => t.featured)
            .map((t) => (
              <figure key={t.name}>
                <blockquote className="display max-w-3xl text-2xl sm:text-3xl lg:text-4xl">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6">
                  <Label>{t.name} · SHE-CATION 3.0</Label>
                </figcaption>
              </figure>
            ))}
          <ul className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2">
            {testimonials
              .filter((t) => !t.featured)
              .map((t) => (
                <li key={t.name}>
                  <figure>
                    <blockquote className="text-base">&ldquo;{t.quote}&rdquo;</blockquote>
                    <figcaption className="mt-4">
                      <Label>{t.name} · SHE-CATION 3.0</Label>
                    </figcaption>
                  </figure>
                </li>
              ))}
          </ul>
        </div>
      </Grid>
    </Section>
  );
}
