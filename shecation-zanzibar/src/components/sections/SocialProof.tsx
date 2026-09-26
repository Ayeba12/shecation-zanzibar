import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Label } from "@/components/ui/Label";
import { Marquee } from "@/components/ui/Marquee";
import { Section } from "@/components/ui/Section";
import { communityCards, socialProof } from "@/lib/content";

/** Press-style cards (NGLM) sliding as a marquee: heading left, "see all" pill right. */
export function SocialProof() {
  return (
    <Section tone="cream" id="community">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <h2 className="display max-w-2xl text-3xl uppercase sm:text-4xl lg:text-5xl">
          From the SHE-CATION community
        </h2>
        {/* TODO: link to a real stories/press page when it exists */}
        <Button href="#" variant="pill" size="sm">
          See all stories
        </Button>
      </div>

      <Marquee
        items={communityCards}
        itemKey={(card) => card.title}
        label="Community stories"
        className="-mx-4 mt-12 md:-mx-6 md:mt-16 lg:-mx-8"
        trackClassName="gap-4 px-4 pb-4 md:gap-6 md:px-6 lg:px-8"
        render={(card, _i, hidden) => (
          <article className="w-72 sm:w-80 lg:w-96">
            <div className="relative aspect-[4/3] overflow-hidden bg-navy">
              {"image" in card && card.image ? (
                <Image
                  src={card.image}
                  alt={hidden ? "" : (card.alt ?? "")}
                  fill
                  sizes="384px"
                  loading="eager"
                  className="object-cover"
                />
              ) : (
                <div className="grid h-full place-items-center text-white">
                  <p className="display text-7xl">{card.block}</p>
                </div>
              )}
            </div>
            <p className="mt-4 font-display text-base">{card.title}</p>
            <Label className="mt-1">{card.meta}</Label>
          </article>
        )}
      />

      {/* TODO: replace with real testimonials when supplied by client. Do not fabricate reviews. */}
      <p className="mt-12 max-w-prose text-sm text-faint">{socialProof.placeholder}</p>
    </Section>
  );
}
