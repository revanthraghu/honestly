"use client";
import Hero from "@/components/hero-section";
import Section3 from "@/components/section3";
import Ticker from "@/components/ticker";
import Navbar from "@/components/navbar";
import ReviewSection from "@/components/section4-reviews";
import { useEffect, useState } from "react";
import Section6 from "@/components/section6";
import Section5 from "@/components/section5";
import Faq from "@/components/faq";
import Footer from "@/components/footer";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const [isMessageBoxOpen, setIsMessageBoxOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);

  // Mobile
  if (isMobile) {
    return (
      <>
        <main className="flex flex-col bg-heroBg">
          <Navbar
            isMobile={isMobile}
            isMessageBoxOpen={isMessageBoxOpen}
            setIsMessageBoxOpen={setIsMessageBoxOpen}
          />
          <>
            <Hero />
            <Section3 />
            <Ticker />
            <ReviewSection />
            <Section5 />
            <Section6 />
            <Faq />
            <Footer />
          </>
        </main>
      </>
    );
  }
  // Non Mobile
  else {
    return (
      <>
        <main className="flex flex-col bg-heroBg bg-contain">
          <Navbar
            isMobile={isMobile}
            isMessageBoxOpen={isMessageBoxOpen}
            setIsMessageBoxOpen={setIsMessageBoxOpen}
          />
          <Hero />
          <Section3 />
          <Ticker />
          <ReviewSection />
          <Section5 />
          <div
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
      </>
    );
  }
}
