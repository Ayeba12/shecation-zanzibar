import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Label } from "@/components/ui/Label";
import { keyFigures, trip } from "@/lib/content";

/** Centred "key figures" chapter (NGLM) followed by a full-width photograph. */
export function KeyFigures() {
  return (
    <section className="bg-cream text-navy" id="figures">
      <Container className="py-16 text-center md:py-24 lg:py-32">
        <Label tone="navy" dot className="justify-center">
          {trip.name} Zanzibar
        </Label>
        <h2 className="display mt-4 text-4xl uppercase sm:text-5xl lg:text-6xl">Key facts</h2>

        <dl className="mx-auto mt-16 grid max-w-7xl gap-x-8 gap-y-12 sm:grid-cols-2 md:mt-24 lg:grid-cols-4">
          {keyFigures.map((f) => (
            <div key={f.caption}>
              <dt className="display text-5xl sm:text-6xl">
                {f.value}
                {f.unit ? (
                  <span className="ml-2 align-top text-lg uppercase tracking-[0.08em] lg:text-xl">
                    {f.unit}
                  </span>
                ) : null}
              </dt>
              <dd className="mx-auto mt-4 max-w-xs text-sm text-muted">{f.caption}</dd>
            </div>
          ))}
        </dl>
      </Container>

      <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/9] lg:aspect-[21/9]">
        <Image
          src="/images/shecation-3/the-toast.jpg"
          alt="SHE-CATION 3.0 guests in matching printed trousers raising a toast on a sunny terrace"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
