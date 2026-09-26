import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cta, nav, trip } from "@/lib/content";

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-40 text-white">
      <Container className="flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-display text-lg tracking-tight">{trip.brand}</span>
          <span className="text-xs uppercase tracking-[0.16em] text-white/80">
            {trip.name} · Zanzibar
          </span>
        </Link>

        <nav aria-label="Page sections" className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-display text-sm text-white/90 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Button href="#book" size="sm" className="hidden md:inline-flex">
          {cta.primary}
        </Button>
      </Container>
    </header>
  );
}
