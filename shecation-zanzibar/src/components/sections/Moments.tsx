import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Label } from "@/components/ui/Label";
import { Section } from "@/components/ui/Section";
import { moments } from "@/lib/content";

type Item = (typeof moments.items)[number];

function Card({ item, index, hidden = false }: { item: Item; index: number; hidden?: boolean }) {
  return (
    <li
      aria-hidden={hidden || undefined}
      className={`w-64 shrink-0 sm:w-72 lg:w-80 ${index % 2 ? "md:mt-16" : ""}`}
    >
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-base">{item.name}</h3>
        <Label>{item.type}</Label>
      </div>
      <div className="relative mt-3 aspect-[4/5] overflow-hidden">
        <Image
          src={item.image}
          alt={hidden ? "" : item.alt}
          fill
          sizes="320px"
          className="object-cover"
        />
      </div>
      <p className="mt-3 text-sm text-muted">{item.copy}</p>
    </li>
  );
}

/**
 * Experiences: centred chapter heading (NGLM), then a continuously sliding
 * marquee of staggered portrait cards that bleeds to the page edges.
 * The card set is rendered twice for a seamless loop; the copy is aria-hidden.
 * Pauses on hover. With prefers-reduced-motion it stands still and scrolls by hand.
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

      <div
        className="group -mx-4 mt-16 overflow-hidden md:-mx-6 md:mt-24 lg:-mx-8 motion-reduce:overflow-x-auto motion-reduce:[scrollbar-width:none]"
        aria-label="Zanzibar experiences"
      >
        <ul className="flex w-max gap-4 px-4 pb-4 animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none md:gap-6 md:px-6 lg:px-8">
          {moments.items.map((item, i) => (
            <Card key={item.name} item={item} index={i} />
          ))}
          {moments.items.map((item, i) => (
            <Card key={`${item.name}-copy`} item={item} index={i} hidden />
          ))}
        </ul>
      </div>

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
