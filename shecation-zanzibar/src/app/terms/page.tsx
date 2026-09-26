import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { termsMeta, termsSections } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Terms of Use | SHE-CATION 4.0 Zanzibar",
  description: "Terms for using the SHE-CATION 4.0 Zanzibar website.",
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title={termsMeta.title}
      lastUpdated={termsMeta.lastUpdated}
      intro={termsMeta.intro}
      sections={termsSections}
    />
  );
}
