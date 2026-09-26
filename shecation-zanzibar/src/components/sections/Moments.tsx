import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Label } from "@/components/ui/Label";
import { Section } from "@/components/ui/Section";
import { moments } from "@/lib/content";

/**
 * Experiences: centred chapter heading (NGLM), then a horizontally
 * scrolling, staggered row of portrait cards that bleeds to the edges.
 */
export function Moments() {
  return (
    <Section tone="cream" id="experiences">
      <div className="text-center">
        <Label tone="navy" dot className="justify-center">
          Your Zanzibar moments
        </Label>
        <h2 className="display mx-auto mt-4 max-w-4xl text-4xl uppercase sm:text-5xl lg:text-6xl">
          {moments.title}
        </h2>
      </div>

      <ul
        className="-mx-4 mt-16 flex snap-x gap-4 overflow-x-auto px-4 pb-4 md:-mx-6 md:mt-24 md:gap-6 md:px-6 lg:-mx-8 lg:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-label="Zanzibar experiences"
      >
        {moments.items.map((item, i) => (
          <li
            key={item.name}
            className={`w-[72vw] shrink-0 snap-start sm:w-[44vw] lg:w-[23vw] ${
              i % 2 ? "md:mt-16" : ""
            }`}
          >
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-base">{item.name}</h3>
              <Label>{item.type}</Label>
            </div>
            <div className="relative mt-3 aspect-[4/5] overflow-hidden">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 23vw, (min-width: 640px) 44vw, 72vw"
                className="object-cover"
              />
            </div>
            <p className="mt-3 text-sm text-muted">{item.copy}</p>
          </li>
        ))}
      </ul>

      <div className="mx-auto mt-12 max-w-2xl text-center md:mt-16">
        <p className="text-base text-muted">{moments.lead}</p>
        <div className="mt-8">
          <Button href="#included" variant="pill" size="md">
            See what&apos;s included
          </Button>
        </div>
      </div>
    </Section>
  );
}
