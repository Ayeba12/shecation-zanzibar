import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { promise } from "@/lib/content";

export function Promise() {
  return (
    <Section tone="cream" id="promise">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl">{promise.title}</h2>
          <p className="mt-6 text-lg text-navy">{promise.lead}</p>
          <p className="mt-4 text-base text-muted">{promise.body}</p>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
          <Image
            src="/images/women-selfie.jpg"
            alt="Three happy women taking a selfie together on the beach"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </Section>
  );
}
