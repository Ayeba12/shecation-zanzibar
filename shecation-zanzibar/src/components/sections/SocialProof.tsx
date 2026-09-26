import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Label } from "@/components/ui/Label";
import { Marquee } from "@/components/ui/Marquee";
import { Section } from "@/components/ui/Section";
import { communityCards, socialProof } from "@/lib/content";

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
        {/* TODO: link to a real stories/press page when it exists */}
        <Button href="#" variant="pill" size="sm">
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

      {/* TODO: real testimonials from SHE-CATION 3.0 guests. Do not fabricate reviews. */}
      <p className="mt-12 max-w-prose text-sm text-faint">{socialProof.placeholder}</p>
    </Section>
  );
}
