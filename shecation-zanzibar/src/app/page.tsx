import { BookingForm } from "@/components/sections/BookingForm";
import { Faq } from "@/components/sections/Faq";
import { Feeling } from "@/components/sections/Feeling";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Hosts } from "@/components/sections/Hosts";
import { Included } from "@/components/sections/Included";
import { KeyFigures } from "@/components/sections/KeyFigures";
import { Moments } from "@/components/sections/Moments";
import { Pricing } from "@/components/sections/Pricing";
import { Promise } from "@/components/sections/Promise";
import { SocialProof } from "@/components/sections/SocialProof";
import { StickyCta } from "@/components/sections/StickyCta";
import { WhoFor } from "@/components/sections/WhoFor";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <KeyFigures />
        <Promise />
        <Included />
        <Moments />
        <Feeling />
        <WhoFor />
        <Hosts />
        <Pricing />
        <SocialProof />
        <Faq />
        <BookingForm />
        <FinalCta />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
