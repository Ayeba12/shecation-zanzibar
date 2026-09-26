import type { Metadata } from "next";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { Button } from "@/components/ui/Button";
import { Container, Grid } from "@/components/ui/Container";
import { Label } from "@/components/ui/Label";
import { PaymentDetails } from "@/components/ui/PaymentDetails";
import { trip } from "@/lib/content";

export const metadata: Metadata = {
  title: "You're in | SHE-CATION 4.0 Zanzibar",
  robots: { index: false },
};

export default function ThankYou() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-cream py-16 text-navy md:py-24">
        <Container>
          <Grid>
            <div className="col-span-4 md:col-span-4">
              <Label tone="navy" dot>
                Thank you
              </Label>
              <h1 className="display mt-6 text-3xl sm:text-4xl">
                Your SHE-CATION 4.0 details are with us.
              </h1>
              <p className="mt-6 max-w-sm text-base text-muted">
                Pay your {trip.deposit} deposit, join the WhatsApp group and post your proof of
                payment. {trip.organisers} will confirm your place there and share the instalment plan
                and flight guidance.
              </p>
              <p className="mt-4 max-w-sm text-sm text-muted">
                Questions? Email{" "}
                <a href={`mailto:${trip.email}`} className="underline">
                  {trip.email}
                </a>
                .
              </p>
              <div className="mt-8">
                <Button href="/" variant="pill" size="sm">
                  Back to the trip
                </Button>
              </div>
            </div>
            <div className="col-span-4 mt-12 md:col-span-7 md:col-start-6 md:mt-0">
              <PaymentDetails />
            </div>
          </Grid>
        </Container>
      </main>
      <Footer />
    </>
  );
}
