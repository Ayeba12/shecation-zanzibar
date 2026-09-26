import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Grid } from "@/components/ui/Container";
import { Label } from "@/components/ui/Label";
import { Section } from "@/components/ui/Section";
import { hosts, touches, trip } from "@/lib/content";

/**
 * Your hosts: trust block for the organisers (brief: "I trust the organisers").
 * Wide photo left, tall photo overlapping right on desktop, copy and WhatsApp pill beside.
 */
export function Hosts() {
  return (
    <Section tone="cream" id="hosts">
      <Grid className="items-end">
        <div className="col-span-4 md:col-span-3">
          <Label tone="navy" dot>
            Your hosts
          </Label>
        </div>

        {/* Photos */}
        <div className="col-span-4 mt-6 md:col-span-5 md:col-start-4 md:mt-0">
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={hosts.imageWide}
                alt={hosts.alt}
                fill
                sizes="(min-width: 768px) 42vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 hidden w-2/5 overflow-hidden border-4 border-cream sm:block md:-right-10">
              <div className="relative aspect-[3/4]">
                <Image
                  src={hosts.imageTall}
                  alt=""
                  fill
                  sizes="20vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <Label className="mt-12 sm:mt-14">{hosts.caption}</Label>
        </div>

        {/* Copy */}
        <div className="col-span-4 mt-10 md:col-span-3 md:col-start-10 md:mt-0">
          <h2 className="display text-3xl sm:text-4xl">{hosts.title}</h2>
          <p className="mt-6 text-base">{hosts.lead}</p>
          <p className="mt-4 text-sm text-muted">{hosts.body}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            <Button href="#book" size="sm">
              Secure your spot
            </Button>
            <Button href={`https://wa.me/${trip.phones[0].wa}`} variant="pill" size="sm">
              WhatsApp us
            </Button>
          </div>
          <p className="mt-4 text-xs text-faint">
            {trip.phones.map((p, i) => (
              <span key={p.wa}>
                <a href={`https://wa.me/${p.wa}`} className="hover:text-navy">
                  {p.number}
                </a>{" "}
                ({p.label}){i < trip.phones.length - 1 ? " · " : ""}
              </span>
            ))}
          </p>
        </div>
      </Grid>

      {/* Little touches */}
      <Grid className="mt-16 items-end border-t border-border pt-8 md:mt-24">
        <div className="col-span-4 md:col-span-3">
          <Label tone="navy" dot>
            {touches.label}
          </Label>
          <p className="mt-4 max-w-xs text-sm text-muted">{touches.text}</p>
        </div>
        <div className="col-span-4 mt-6 grid grid-cols-2 gap-4 md:col-span-5 md:col-start-5 md:mt-0 md:gap-6">
          {touches.images.map((img) => (
            <div key={img.src} className="relative aspect-square overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 768px) 20vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </Grid>
    </Section>
  );
}
