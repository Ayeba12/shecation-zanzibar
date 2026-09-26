import type { Metadata } from "next";
import { Quicksand, Spline_Sans } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
});

const splineSans = Spline_Sans({
  variable: "--font-spline-sans",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SHE-CATION 4.0 Zanzibar | Ladies' Getaway | 9-13 March 2027",
  description:
    "Join SHE-Reconnects for 5 days and 4 nights in Zanzibar. £1,100 per person with resort stay, meals, transfers, selected experiences, visa fees and insurance included.",
  keywords: [
    "Zanzibar ladies getaway",
    "women's group trip to Zanzibar",
    "Zanzibar women's retreat",
    "ladies holiday Zanzibar",
    "SHE-CATION Zanzibar",
  ],
  openGraph: {
    title: "SHE-CATION 4.0 Zanzibar | Ladies' Getaway | 9-13 March 2027",
    description:
      "Five days. Zanzibar. Your girls. Your reset. £1,100 per person, £200 deposit to secure your place.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${quicksand.variable} ${splineSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
