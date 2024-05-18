import Image from "next/image";
import iceberg1Mobile from "@/public/background/iceberg1-mobile.svg";
import iceberg1Web from "@/public/background/iceberg1-web.svg";
import Hero from "@/components/hero-section";
import Section2 from "@/components/section2";

export default function Home() {
  return (
    <main className=" flex flex-col bg-[#AEDCEE]">
      <Hero />
      <Image
        src={iceberg1Mobile}
        alt="background-image-1"
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 md:hidden"
        aria-hidden
      />
      <Image
        src={iceberg1Web}
        alt="background-image-1"
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 hidden md:block"
        aria-hidden
      />
      <Section2 />
    </main>
  );
}
