import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { bookingTermsMeta, bookingTermsSections } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Booking Terms | SHE-CATION 4.0 Zanzibar",
  description:
    "The booking terms for SHE-CATION 4.0 Zanzibar: deposit, instalments, room sharing, cancellations and what is included.",
};

export default function BookingTermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title={bookingTermsMeta.title}
      lastUpdated={bookingTermsMeta.lastUpdated}
      intro={bookingTermsMeta.intro}
      notice={bookingTermsMeta.notice}
      sections={bookingTermsSections}
    />
  );
}
