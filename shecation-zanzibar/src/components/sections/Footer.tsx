import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { trip } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-navy py-12 text-white">
      <Container className="grid gap-8 md:grid-cols-3">
        <div>
          <p className="font-display text-lg">{trip.brand}</p>
          <p className="mt-1 text-sm text-white/70">
            {trip.name} Zanzibar · {trip.dates}
          </p>
        </div>
        <div className="text-sm text-white/80">
          <p className="font-display text-sm uppercase tracking-[0.12em] text-sky">Contact</p>
          {/* TODO: replace placeholders with confirmed contact details */}
          <p className="mt-2">WhatsApp: {trip.whatsapp}</p>
          <p>Email: {trip.email}</p>
        </div>
        <nav aria-label="Legal" className="flex flex-col gap-2 text-sm text-white/80 md:items-end">
          {/* TODO: link to real Terms / Privacy / Booking Terms pages */}
          <Link href="#" className="hover:text-white">
            Terms
          </Link>
          <Link href="#" className="hover:text-white">
            Privacy
          </Link>
          <Link href="#" className="hover:text-white">
            Booking Terms
          </Link>
        </nav>
      </Container>
      <Container className="mt-10 border-t border-white/10 pt-6 text-xs text-white/50">
        © {new Date().getFullYear()} {trip.brand}. Photography via Unsplash.
      </Container>
    </footer>
  );
}
