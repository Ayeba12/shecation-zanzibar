import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Grid } from "@/components/ui/Container";
import { Label } from "@/components/ui/Label";
import { Section } from "@/components/ui/Section";
import { hosts, touches, trip } from "@/lib/content";

function ChatIcon() {
  return (
    <svg aria-hidden="true" width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path
        d="M2 2.5h8v5.5H5l-2.5 2v-2H2z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
      <path d="M2 1.5v7l6-3.5z" />
    </svg>
  );
}

/**
 * Your hosts, in the Vaziani grammar:
 * two big statements (left / right-aligned), two large photographs side by side
 * with small captions, then copy in the bottom corners with icon pills.
 * Followed by "Little touches" as a numbered list with two photos.
 */
export function Hosts() {
  const [wide, tall] = hosts.photos;

  return (
    <Section tone="cream" id="hosts">
      {/* Statements */}
      <Label tone="navy" dot>
        Your hosts
      </Label>
      <p className="display mt-6 max-w-3xl text-3xl uppercase sm:text-4xl lg:text-6xl">
        {hosts.statementLeft}
      </p>
      <p className="display ml-auto mt-4 max-w-4xl text-right text-3xl uppercase sm:text-4xl lg:text-6xl">
        {hosts.statementRight}
      </p>

      {/* Two photographs, equal height */}
      <Grid className="mt-12 md:mt-20">
        <figure className="col-span-4 md:col-span-7">
          <div className="flex items-baseline justify-between">
            <Label>{wide.caption}</Label>
            <Label>{wide.meta}</Label>
          </div>
          <div className="relative mt-3 aspect-[4/3] overflow-hidden md:aspect-auto md:h-[28rem] lg:h-[36rem]">
            <Image
              src={wide.src}
              alt={wide.alt}
              fill
              sizes="(min-width: 768px) 58vw, 100vw"
              className="object-cover"
            />
          </div>
        </figure>
        <figure className="col-span-4 mt-8 md:col-span-5 md:mt-0">
          <div className="flex items-baseline justify-between">
            <Label>{tall.caption}</Label>
            <Label>{tall.meta}</Label>
          </div>
          <div className="relative mt-3 aspect-[4/5] overflow-hidden md:aspect-auto md:h-[28rem] lg:h-[36rem]">
            <Image
              src={tall.src}
              alt={tall.alt}
              fill
              sizes="(min-width: 768px) 42vw, 100vw"
              className="object-cover object-top"
            />
          </div>
        </figure>
      </Grid>

      {/* Bottom corners: copy left, copy + pills right */}
      <Grid className="mt-10 md:mt-12">
        <p className="col-span-4 max-w-sm text-base md:col-span-4">{hosts.lead}</p>
        <div className="col-span-4 mt-8 md:col-span-4 md:col-start-9 md:mt-0">
          <p className="text-sm text-muted">{hosts.body}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Button href={`https://wa.me/${trip.phones[0].wa}`} variant="pill" size="xs">
              <ChatIcon />
              WhatsApp us
            </Button>
            <Button href="#book" size="xs">
              <PlayIcon />
              Secure your spot
            </Button>
          </div>
          <dl className="mt-6 border-t border-border">
            {trip.phones.map((p) => (
              <div
                key={p.wa}
                className="flex items-baseline justify-between border-b border-border py-3"
              >
                <dt className="label text-faint">{p.label}</dt>
                <dd>
                  <a href={`https://wa.me/${p.wa}`} className="font-display text-base hover:text-pink">
                    {p.number}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Grid>

      {/* Little touches: heading left, numbered list centre, photos right */}
      <Grid className="mt-20 md:mt-32">
        <div className="col-span-4 md:col-span-3">
          <Label tone="navy" dot>
            {touches.label}
          </Label>
          <h2 data-reveal className="mt-4 max-w-[12ch] text-xl md:text-2xl">{touches.lead}</h2>
        </div>

        <ol data-reveal-group className="col-span-4 mt-8 md:col-span-5 md:col-start-4 md:mt-0">
          {touches.items.map((item, i) => (
            <li key={item} className="border-t border-border py-4 first:border-t-0 first:pt-0 md:py-5">
              <Label>{String(i + 1).padStart(2, "0")}</Label>
              <p className="mt-2 max-w-sm text-base">{item}</p>
            </li>
          ))}
        </ol>

        <div className="col-span-4 mt-8 grid grid-cols-2 gap-4 md:col-span-3 md:col-start-10 md:mt-0 md:gap-6">
          {touches.images.map((img) => (
            <div key={img.src} className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 768px) 12vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </Grid>
    </Section>
  );
}
