"use client";
import Hero from "@/components/hero-section";
import Section3 from "@/components/section3";
import Ticker from "@/components/ticker";
import Navbar from "@/components/navbar";
import ReviewSection from "@/components/section4-reviews";
import { useState } from "react";
import Section6 from "@/components/section6";
import Section5 from "@/components/section5";
import Faq from "@/components/faq";
import Footer from "@/components/footer";

export default function Home() {
  const [isMessageBoxOpen, setIsMessageBoxOpen] = useState<boolean>(false);
  return (
    <main className="flex flex-col bg-heroBg md:bg-cover ">
      <Navbar
        isMessageBoxOpen={isMessageBoxOpen}
        setIsMessageBoxOpen={setIsMessageBoxOpen}
      />
      <Hero />
      <Section3 />
      <Ticker />
      <ReviewSection />
      <Section5 />
      <div
        className=""
        style={{
          background:
            "linear-gradient(rgba(174, 220, 238, 1), rgba(244, 245, 240, 1))",
        }}
      >
        <Section6 />
        <Faq />
        <Footer />
      </div>
    </main>
  );
}
