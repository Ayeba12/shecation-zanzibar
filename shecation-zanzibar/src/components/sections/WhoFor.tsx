import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { whoFor } from "@/lib/content";

export function WhoFor() {
  return (
    <Section tone="sand" id="who">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative order-last aspect-[4/5] overflow-hidden rounded-xl lg:order-first">
          <Image
            src="/images/woman-dress.jpg"
            alt="Woman in a bright dress standing by the sea"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="font-display text-sm uppercase tracking-[0.12em] text-pink">
            Who this is for
          </p>
          <h2 className="mt-3 text-2xl md:text-3xl lg:text-4xl">{whoFor.title}</h2>
          <ul className="mt-8 flex flex-col gap-4">
            {whoFor.items.map((item) => (
              <li key={item} className="flex items-start gap-4 text-lg">
                <span
                  aria-hidden="true"
                  className="mt-2.5 size-3 shrink-0 rounded-full bg-pink"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
