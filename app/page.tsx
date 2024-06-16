import Faq from "@/components/faq";
import Footer from "@/components/footer";
import Hero from "@/components/hero-section";
import Navbar from "@/components/navbar";
import Section3 from "@/components/section3";
import ReviewSection from "@/components/section4-reviews";
import Section5 from "@/components/section5";
import Section6 from "@/components/section6";
import Ticker from "@/components/ticker";
import Image from "next/image";

export default function Home() {
    return (
        <main className='flex flex-col'>
            <div className='relative flex flex-col'>
                <Image src={"/background/bg.webp"} fill alt='background-image' className='absolute bg-cover bg-center w-full h-full -z-50' priority />
                <Navbar />
                <Hero />
                <Section3 />
            </div>
            <Ticker />
            <ReviewSection />
            <Section5 />
            <div
                className=''
                style={{
                    background: "linear-gradient(rgba(174, 220, 238, 1), rgba(244, 245, 240, 1))"
                }}
            >
                <Section6 />
                <Faq />
                <Footer />
            </div>
        </main>
    );
}
