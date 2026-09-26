import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { trip } from "@/lib/content";

export const metadata: Metadata = {
  title: "You're in | SHE-CATION 4.0 Zanzibar",
  robots: { index: false },
};

export default function ThankYou() {
  return (
    <main className="flex flex-1 items-center bg-cream py-24">
      <Container size="prose" className="text-center">
        <p className="label text-pink">Thank you</p>
        <h1 className="display mt-4 text-3xl md:text-5xl">Your SHE-CATION 4.0 spot is being secured.</h1>
        <p className="mt-6 text-lg text-muted">
          We have received your booking details. You will get a confirmation by email and WhatsApp
          with your payment receipt and next steps, including the instalment plan and flight
          guidance.
        </p>
        <p className="mt-4 text-base text-muted">
          Questions? WhatsApp {trip.organisers} on{" "}
          {trip.phones.map((p, i) => (
            <span key={p.wa}>
              <a href={`https://wa.me/${p.wa}`} className="underline">
                {p.number}
              </a>
              {i < trip.phones.length - 1 ? " or " : ""}
            </span>
          ))}
          , or email{" "}
          <a href={`mailto:${trip.email}`} className="underline">
            {trip.email}
          </a>
          .
        </p>
        <div className="mt-10">
          <Button href="/" variant="outline">
            Back to the page
          </Button>
        </div>
      </Container>
    </main>
  );
}
