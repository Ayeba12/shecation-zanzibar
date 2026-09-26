import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container, Grid } from "@/components/ui/Container";
import { Label } from "@/components/ui/Label";
import { nav, trip } from "@/lib/content";

export function Footer() {
  return (
    <footer className="overflow-hidden border-t border-white/10 bg-navy pt-16 pb-20 text-white md:pt-24 md:pb-0">
      <Container>
        <Grid>
          {/* Small pill links (Vaziani) */}
          <nav aria-label="Footer" className="col-span-4 flex flex-col items-start gap-2 md:col-span-3">
            {nav.map((item) => (
              <Button key={item.href} href={item.href} variant="pill-dark" size="xs">
                {item.label}
              </Button>
            ))}
          </nav>

          {/* Big contact (Vaziani / NGLM) */}
          <div className="col-span-4 mt-12 md:col-span-7 md:col-start-5 md:mt-0">
            <Label tone="white">Get in touch</Label>
            <a
              href={`mailto:${trip.email}`}
              className="display mt-4 block text-xl hover:text-sky sm:text-2xl lg:text-3xl"
            >
              {trip.email}
            </a>
            {trip.phones.map((p) => (
              <a
                key={p.wa}
                href={`https://wa.me/${p.wa}`}
                className="display mt-2 block text-xl hover:text-sky sm:text-2xl lg:text-3xl"
              >
                {p.number}
                <span className="ml-3 align-middle font-body text-xs uppercase tracking-[0.08em] text-white/50">
                  {p.label}
                </span>
              </a>
            ))}
            <p className="mt-6 text-sm text-white/60">
              Ask for {trip.organisers}. WhatsApp is the fastest way to reach us.
            </p>
          </div>
        </Grid>

        <Grid className="mt-16 border-t border-white/10 pt-6 md:mt-24">
          <p className="col-span-4 text-xs text-white/50 md:col-span-3">
            © {new Date().getFullYear()} {trip.brand}
            <br />
            All rights reserved
          </p>
          <div className="col-span-4 mt-6 flex flex-col gap-1 text-xs text-white/50 md:col-span-4 md:col-start-5 md:mt-0">
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/booking-terms" className="hover:text-white">
              Booking Terms
            </Link>
          </div>
          <p className="col-span-4 mt-6 text-xs text-white/50 md:col-span-3 md:col-start-10 md:mt-0 md:text-right">
            {trip.name} Zanzibar · {trip.dates}
            <br />
            Photography via Unsplash
          </p>
        </Grid>

        {/* Giant wordmark (NGLM) */}
        <p
          aria-hidden="true"
          className="display mt-12 -mb-[0.12em] select-none whitespace-nowrap text-[13.5vw] uppercase leading-none tracking-[-0.04em] md:mt-16"
        >
          {trip.name.split(" ")[0]}
        </p>
      </Container>
    </footer>
  );
}
