import Image from "next/image";
import iceberg1Mobile from "@/public/background/iceberg1-mobile.svg";
import iceberg1Web from "@/public/background/iceberg1-web.svg";
import Hero from "@/components/hero-section";
import Section2 from "@/components/section2";
import Section3 from "@/components/section3";
import Ticker from "@/components/ticker";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="flex flex-col bg-[#AEDCEE]">
      <Navbar />
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
  );
}
