"use client"
import Image from "next/image";
import iceberg1Mobile from "@/public/background/iceberg1-mobile.svg";
import iceberg1Web from "@/public/background/iceberg1-web.svg";
import Hero from "@/components/hero-section";
import Section2 from "@/components/section2";
import Section3 from "@/components/section3";
import Ticker from "@/components/ticker";
import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";

export default function Home() {

  const [isMessageBoxOpen, setIsMessageBoxOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile])

  // Mobile
  if (isMobile) {
    return (
      <>
        <main className="flex flex-col bg-[#AEDCEE]">
          <Navbar isMobile={isMobile} isMessageBoxOpen={isMessageBoxOpen}
            setIsMessageBoxOpen={setIsMessageBoxOpen} />
          {!isMessageBoxOpen &&
            <>
              <Hero />
              <Image
                src={iceberg1Mobile}
                alt="background-image-1"
                className="bottom-0 left-1/2 absolute md:hidden transform -translate-x-1/2 translate-y-1/2"
                aria-hidden
                priority
              />
              <Image
                src={iceberg1Web}
                alt="background-image-1"
                className="md:block bottom-0 left-1/2 absolute hidden transform -translate-x-1/2 translate-y-1/2"
                aria-hidden
              />
              <Section2 />
              <Section3 />
              <Ticker />
            </>}
        </main>
      </>
    )
  }
  // Non Mobile
  else {
    return (
      <>
        <main className="flex flex-col bg-[#AEDCEE]">
          <Navbar isMobile={isMobile} isMessageBoxOpen={isMessageBoxOpen}
            setIsMessageBoxOpen={setIsMessageBoxOpen} />
          <Hero />
          <Image
            src={iceberg1Mobile}
            alt="background-image-1"
            className="bottom-0 left-1/2 absolute md:hidden transform -translate-x-1/2 translate-y-1/2"
            aria-hidden
            priority
          />
          <Image
            src={iceberg1Web}
            alt="background-image-1"
            className="md:block bottom-0 left-1/2 absolute hidden transform -translate-x-1/2 translate-y-1/2"
            aria-hidden
          />
          <Section2 />
          <Section3 />
          <Ticker />
        </main>
      </>
    )
  }
}
