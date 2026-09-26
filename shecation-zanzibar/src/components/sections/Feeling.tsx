import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { feeling } from "@/lib/content";

export function Feeling() {
  return (
    <Section tone="navy" id="feeling">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="grid grid-cols-2 gap-4">
          <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
            <Image
              src="/images/women-water.jpg"
              alt="Two young women laughing in the sea"
              fill
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="relative mt-8 aspect-[3/4] overflow-hidden rounded-lg">
            <Image
              src="/images/hammock.jpg"
              alt="A hammock strung between two palm trees on a beach"
              fill
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
        <div>
          <p className="font-display text-sm uppercase tracking-[0.12em] text-sky">
            The SHE-CATION feeling
          </p>
          <h2 className="mt-3 text-2xl md:text-3xl lg:text-4xl">{feeling.title}</h2>
          <p className="mt-6 text-lg text-white/85">{feeling.body1}</p>
          <p className="mt-4 text-base text-white/75">{feeling.body2}</p>
        </div>
      </div>
    </Section>
  );
}
