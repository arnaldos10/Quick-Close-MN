"use client";

import { useState, useCallback } from "react";
import Nav from "./(sections)/Nav";
import Hero from "./(sections)/Hero";
import TrustBar from "./(sections)/TrustBar";
import Situations from "./(sections)/Situations";
import HowItWorks from "./(sections)/HowItWorks";
import Compare from "./(sections)/Compare";
import Testimonials from "./(sections)/Testimonials";
import RecentBuys from "./(sections)/RecentBuys";
import About from "./(sections)/About";
import Faq from "./(sections)/Faq";
import FinalCta from "./(sections)/FinalCta";
import Footer from "./(sections)/Footer";
import OfferModal from "./(offer)/OfferModal";
import FloatingCta from "@/components/ui/FloatingCta";

export default function HomePage() {
  const [modalOpen,   setModalOpen]   = useState(false);
  const [initAddress, setInitAddress] = useState("");
  const [step,        setStep]        = useState(0);
  const [submitted,   setSubmitted]   = useState(false);
  const [refNumber,   setRefNumber]   = useState("");

  const openOffer = useCallback((address?: string) => {
    setInitAddress(address ?? "");
    setStep(0);
    setSubmitted(false);
    setRefNumber("");
    setModalOpen(true);
  }, []);

  const closeOffer = useCallback(() => {
    setModalOpen(false);
  }, []);

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>

      <Nav openOffer={openOffer} />

      <main id="main-content">
        <Hero openOffer={openOffer} />
        <TrustBar />
        <Situations openOffer={openOffer} />
        <HowItWorks openOffer={openOffer} />
        <Compare />
        <Testimonials />
        <RecentBuys />
        <About />
        <Faq />
        <FinalCta openOffer={openOffer} />
      </main>

      <Footer />

      <OfferModal
        open={modalOpen}
        onClose={closeOffer}
        initialAddress={initAddress}
        step={step}
        setStep={setStep}
        submitted={submitted}
        setSubmitted={setSubmitted}
        refNumber={refNumber}
        setRefNumber={setRefNumber}
      />

      <FloatingCta openOffer={openOffer} modalOpen={modalOpen} />
    </>
  );
}
