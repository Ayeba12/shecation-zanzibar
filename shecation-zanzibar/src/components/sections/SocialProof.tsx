import Image from "next/image";
import { Section, SectionHeading } from "@/components/ui/Section";
import { socialProof } from "@/lib/content";

const gallery = [
  { src: "/images/women-beach.jpg", alt: "Two women enjoying a sunny day at the beach" },
  { src: "/images/women-rocks.jpg", alt: "Two women standing on rocks by the ocean" },
  { src: "/images/dhow-sunset.jpg", alt: "Silhouette of a dhow sailboat at sunset" },
  { src: "/images/stone-town-market.jpg", alt: "People walking through a Stone Town market" },
];

export function SocialProof() {
  return (
    <Section tone="cream" id="community">
      <SectionHeading
        eyebrow="The community"
        title={socialProof.title}
        lead={socialProof.lead}
        align="center"
      />

      {/* TODO: replace placeholder with real testimonials when supplied by client */}
      <div className="mx-auto mt-12 max-w-prose rounded-lg border-2 border-dashed border-border p-8 text-center text-base text-muted">
        {socialProof.placeholder}
      </div>

      <ul className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
        {gallery.map((img) => (
          <li key={img.src} className="relative aspect-square overflow-hidden rounded-lg">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 768px) 25vw, 50vw"
              className="object-cover"
            />
          </li>
        ))}
      </ul>
    </Section>
  );
}
