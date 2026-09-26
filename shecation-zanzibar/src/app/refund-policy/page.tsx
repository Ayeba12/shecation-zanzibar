import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { refundMeta, refundSections } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Refund Policy | SHE-CATION 4.0 Zanzibar",
  description:
    "How refunds work for SHE-CATION 4.0 Zanzibar: the non-refundable deposit, instalments, cancellation dates and third-party supplier policies.",
};

export default function RefundPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title={refundMeta.title}
      lastUpdated={refundMeta.lastUpdated}
      intro={refundMeta.intro}
      notice={refundMeta.notice}
      sections={refundSections}
    />
  );
}
