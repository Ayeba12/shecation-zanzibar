import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cta, nav, trip } from "@/lib/content";

export function Header() {
  return (
    <header className="bg-cream text-navy">
      <Container className="flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="flex items-center gap-3" aria-label={`${trip.brand} home`}>
          <span aria-hidden="true" className="size-3 rounded-full bg-sunshine" />
          <span className="flex flex-col leading-none">
            <span className="font-display text-base tracking-tight md:text-lg">{trip.brand}</span>
            <span className="label mt-1 text-faint">
              {trip.name} · Zanzibar
            </span>
          </span>
        </Link>

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
