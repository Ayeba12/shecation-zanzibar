import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cta, finalCta } from "@/lib/content";

export function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden bg-navy py-24 text-white md:py-32">
      <Image
        src="/images/dhow-sunset-2.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-navy/70" />
      <Container className="relative text-center">
        <h2 className="mx-auto max-w-3xl text-3xl md:text-4xl lg:text-5xl">{finalCta.title}</h2>
        <p className="mx-auto mt-6 max-w-prose text-lg text-white/85">{finalCta.body}</p>
        <p className="mt-8 font-display text-base text-sky md:text-lg">{finalCta.facts}</p>
        <div className="mt-10">
          <Button href="#book" size="lg">
            {cta.primary}
          </Button>
        </div>
        <p className="mt-6 font-display text-base text-white/80">{finalCta.support}</p>
      </Container>
    </section>
  );
}
