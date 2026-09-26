import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { privacyMeta, privacySections } from "@/lib/privacy";

export const metadata: Metadata = {
  title: "Privacy Policy | SHE-CATION 4.0 Zanzibar",
  description:
    "How SHE-Reconnects collects, uses and protects your personal information when you book SHE-CATION 4.0 Zanzibar.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      lastUpdated={privacyMeta.lastUpdated}
      intro="Your details help us take your booking, organise the trip and keep you informed. Here is exactly what we collect, why, and how you stay in control."
      sections={privacySections}
    />
  );
}
