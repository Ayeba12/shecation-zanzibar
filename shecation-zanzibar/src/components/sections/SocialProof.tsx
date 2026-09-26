import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Label } from "@/components/ui/Label";
import { Section } from "@/components/ui/Section";
import { communityCards, socialProof } from "@/lib/content";

/** Press-style card grid (NGLM): heading left, "see all" pill right, three cards. */
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

      <ul className="mt-12 grid gap-8 sm:grid-cols-3 md:mt-16">
        {communityCards.map((card) => (
          <li key={card.title}>
            <div className="relative aspect-[4/3] overflow-hidden bg-navy">
              {"image" in card && card.image ? (
                <Image
                  src={card.image}
                  alt={card.alt ?? ""}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
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
          </li>
        ))}
      </ul>

      {/* TODO: replace with real testimonials when supplied by client. Do not fabricate reviews. */}
      <p className="mt-12 max-w-prose text-sm text-faint">{socialProof.placeholder}</p>
    </Section>
  );
}
