import Image from "next/image";
import { Section, SectionHeading } from "@/components/ui/Section";
import { moments } from "@/lib/content";

export function Moments() {
  return (
    <Section tone="cream" id="experiences">
      <SectionHeading
        eyebrow="Your Zanzibar moments"
        title={moments.title}
        lead={moments.lead}
        align="center"
      />

      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {moments.items.map((item) => (
          <li
            key={item.name}
            className="group overflow-hidden rounded-lg bg-white shadow-card"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg text-navy">{item.name}</h3>
              <p className="mt-2 text-base text-muted">{item.copy}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
