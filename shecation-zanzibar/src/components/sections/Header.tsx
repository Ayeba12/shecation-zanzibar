import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cta, nav, trip } from "@/lib/content";

export function Header() {
  return (
    <header className="bg-cream text-navy">
      <Container className="flex h-16 items-center justify-between md:h-20">
        {/* Wordmark + two-line tagline (NGLM) */}
        <Link href="/" className="flex items-center gap-4" aria-label={`${trip.brand} home`}>
          <span className="flex items-center gap-3">
            <Image
              src="/brand/she-reconnects-logo.png"
              alt=""
              width={36}
              height={36}
              priority
              className="size-8 md:size-9"
            />
            <span className="font-display text-lg tracking-tight md:text-xl">{trip.brand}</span>
          </span>
          <span className="hidden max-w-36 text-xs leading-4 text-muted sm:block">
            Bringing sisterhood
            <br />
            to Zanzibar
          </span>
        </Link>

        {/* Pill nav (Vaziani) */}
        <nav aria-label="Page sections" className="hidden items-center gap-2 md:flex">
          {nav.map((item) => (
            <Button key={item.href} href={item.href} variant="pill" size="xs">
              {item.label}
            </Button>
          ))}
        </nav>

        <Button href="#book" size="xs" className="md:h-10 md:px-5">
          {cta.primary}
        </Button>
      </Container>
    </header>
  );
}
