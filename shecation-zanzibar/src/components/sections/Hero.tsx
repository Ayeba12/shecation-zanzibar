import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cta, hero, trip } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-navy text-white">
      <Image
        src="/images/hero-beach.jpg"
        alt="Wooden boats on turquoise water beside a white sand beach in Zanzibar"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Navy gradient keeps text readable over photography (brand guide) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/20"
      />

      <Container className="relative pb-24 pt-32 md:pb-32 md:pt-40">
        <div className="max-w-3xl">
          <Badge tone="sunshine">{hero.eyebrow}</Badge>
          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl">{hero.title}</h1>
          <p className="mt-6 max-w-prose text-lg text-white/85 md:text-xl">{hero.intro}</p>

          <p className="mt-8 font-display text-base text-sky md:text-lg">{hero.facts}</p>
          <p className="mt-2 max-w-prose text-base text-white/75">{hero.body}</p>

          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Button href="#book" size="lg">
              {cta.primary}
            </Button>
            <span className="font-display text-sm text-white/80">
              {trip.deposit} {trip.depositNote} deposit
            </span>
          </div>
          <p className="mt-4 max-w-prose text-xs text-white/60">{cta.micro}</p>
        </div>
      </Container>
    </section>
  );
}
