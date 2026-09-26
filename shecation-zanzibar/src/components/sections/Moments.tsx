import Image from "next/image";
import { Grid } from "@/components/ui/Container";
import { Label } from "@/components/ui/Label";
import { Section } from "@/components/ui/Section";
import { moments } from "@/lib/content";

/** Experiences as an index: numbered hairline rows with a small thumbnail. */
export function Moments() {
  return (
    <Section tone="cream" id="experiences">
      <Grid>
        <div className="col-span-4 md:col-span-3">
          <Label tone="navy" dot>
            Your Zanzibar moments
          </Label>
        </div>
        <div className="col-span-4 mt-6 md:col-span-8 md:col-start-5 md:mt-0">
          <h2 className="display text-3xl sm:text-4xl lg:text-5xl">{moments.title}</h2>
          <p className="mt-6 max-w-prose text-base text-muted">{moments.lead}</p>
        </div>
      </Grid>

      <ol className="mt-16 border-t border-border md:mt-24">
        {moments.items.map((item, i) => (
          <li key={item.name} className="group border-b border-border">
            <Grid className="items-center py-6 md:py-8">
              <Label className="col-span-4 md:col-span-1">
                {String(i + 1).padStart(2, "0")}
              </Label>
              <h3 className="col-span-4 mt-2 text-xl md:col-span-4 md:mt-0 md:text-2xl">
                {item.name}
              </h3>
              <p className="col-span-4 mt-3 max-w-sm text-sm text-muted md:col-span-4 md:mt-0">
                {item.copy}
              </p>
              <div className="col-span-4 mt-6 md:col-span-3 md:mt-0">
                <div className="relative aspect-[4/3] w-full overflow-hidden md:ml-auto md:max-w-56">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 768px) 224px, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />
                </div>
              </div>
            </Grid>
          </li>
        ))}
      </ol>
    </Section>
  );
}
