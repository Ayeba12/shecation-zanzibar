import Image from "next/image";
import { Grid } from "@/components/ui/Container";
import { Label } from "@/components/ui/Label";
import { Section } from "@/components/ui/Section";
import { socialProof } from "@/lib/content";

const pair = [
  {
    src: "/images/women-beach.jpg",
    alt: "Two women enjoying a sunny day at the beach",
    label: "SHE-CATION 3.0",
  },
  {
    src: "/images/women-rocks.jpg",
    alt: "Two women standing on rocks by the ocean",
    label: "The community",
  },
];

/** Two large side-by-side photographs with tiny labels, plus a testimonial slot. */
export function SocialProof() {
  return (
    <Section tone="cream" id="community">
      <Grid>
        <div className="col-span-4 md:col-span-7 md:col-start-5">
          <h2 className="display text-3xl sm:text-4xl lg:text-5xl">{socialProof.title}</h2>
          <p className="mt-6 max-w-prose text-base text-muted">{socialProof.lead}</p>
        </div>
      </Grid>

      {/* TODO: replace placeholder with real testimonials when supplied by client */}
      <Grid className="mt-12 md:mt-16">
        <div className="col-span-4 md:col-span-3">
          <Label>Testimonials</Label>
        </div>
        <p className="col-span-4 mt-4 max-w-prose text-sm text-faint md:col-span-6 md:col-start-5 md:mt-0">
          {socialProof.placeholder}
        </p>
      </Grid>

      <div className="mt-16 grid gap-4 md:mt-24 md:grid-cols-2 md:gap-6">
        {pair.map((img) => (
          <figure key={img.src}>
            <Label className="mb-4">{img.label}</Label>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </figure>
        ))}
      </div>
    </Section>
  );
}
