import type { Metadata } from "next";
import { Quicksand, Spline_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Motion } from "@/components/motion/Motion";

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

const siteUrl = "https://shecation.she-reconnects.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
    url: siteUrl,
    siteName: "SHE-CATION by SHE-Reconnects",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "SHE-CATION 4.0 Zanzibar, 9-13 March 2027. Women raising a toast on a sunny terrace at SHE-CATION 3.0.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SHE-CATION 4.0 Zanzibar | 9-13 March 2027",
    description:
      "Five days. Zanzibar. Your girls. Your reset. £1,100 per person, £200 deposit to secure your place.",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${quicksand.variable} ${splineSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Motion />
        <Analytics />
      </body>
    </html>
  );
}
