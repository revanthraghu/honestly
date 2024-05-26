"use client";
import Image from "next/image";
import { useRef, useEffect, useState, useCallback } from "react";
import iceberg1Mobile from "@/public/background/iceberg1-mobile.svg";
import iceberg1Web from "@/public/background/iceberg1-web.svg";
import ReactRotatingText from "react-rotating-text";
import JoinButton from "./ui/join-button";
import icebergUnion from "@/public/background/icebergUnion.svg";
import dashedSeparatorWeb from "@/public/background/dashedSeparator.svg";
import dashedSeparatorMobile from "@/public/background/dashedSeparatorMobile.svg";
import useScrollHighlight from './hooks/useScrollHighlight';

export default function Hero() {

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    console.log('scroll event', window.scrollY)
    console.log(window.innerHeight)
    if (window.scrollY > 130) {
      setScrolled(true);
      console.log(scrolled)
    } else {
      setScrolled(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });


  const listRef = useRef<HTMLDivElement>(null);

  useScrollHighlight(listRef);

  return (
    <>
      <div className="overflow-y-scroll h-screen flex flex-col items-center justify-center mx-4 md:mx-auto z-10">

        <div className="flex flex-col items-center justify-center text-center font-ppeditorialnew font-normal text-[36px] leading-[41.4px] md:text-[44px] md:leading-[50.6px] md:max-w-[590px]">
          <div className="flex flex-row">
            <span>Find your holy-grail&nbsp;</span>
            {/* <span className="italic block" id="cycle"></span> Use this only when using CSS Transitions */}
            {/* <span className="italic block" id="cycle"></span> Use this only when using CSS Transitions */}
            {/* <span className="w-[210px] italic"> */}
            <span className="hidden italic md:block">
              <ReactRotatingText
                items={[
                  "sunscreen",
                  "lipstick",
                  "lip balm",
                  "cleanser",
                  "concealer",
                  "foundation",
                  "retinol",
                  "moisturizer",
                ]}
                cursor={false}
              />
            </span>
          </div>
          <div className="flex flex-col md:block">
            <span>
              <span className="italic md:hidden">
                <ReactRotatingText
                  items={[
                    "sunscreen",
                    "lipstick",
                    "lip balm",
                    "cleanser",
                    "concealer",
                    "foundation",
                    "retinol",
                    "moisturizer",
                  ]}
                  cursor={false}
                />
                &nbsp;
              </span>
              <span className="text-center">by asking</span>
            </span>

            <span className="text-center hidden md:block">
              by asking real people
            </span>
            <span className="text-center md:hidden">real people</span>
          </div>
        </div>
        <div className="my-7 mx-8 text-center text-[13px] leading-[16.9px] tracking-[4%] md:text-[16px] md:leading-[20.8px]  md:max-w-[520px] md:mx-auto">
          We match people who have the same skin tone, skin type, age, gender,
          weather—you get the gist. A bit like Bumble, but for beauty
        </div>
        <JoinButton>JOIN THE WAITLIST</JoinButton>
        <div className="text-[10px] leading-[10.5px] tracking-[5%] font-semibold text-center mt-[12px]">
          993 spots left
        </div>
      </div >
      {!scrolled &&
        <div className="h-[230px] flex justify-center">
          <Image
            src={iceberg1Mobile}
            alt="background-image-1"
            className="animate-bounce md:hidden z-0 relative -mt-[100px] h-[277px]"
            aria-hidden
            priority
          />

          <Image
            src={iceberg1Web}
            alt="background-image-1"
            className="animate-bounce md:block hidden relative -mt-[100px] h-[277px]"
            aria-hidden
          />


        </div>}




      {/* SECTION TWO */}


      <div>
        <div data-aos="zoom-in" data-aos-easing="linear"
          data-aos-duration="500" className="flex flex-col items-center mb-[71px] ">
          <Image src={icebergUnion} alt="background-image-2" className=" absolute md:w-[347.29px] md:h-[935px]" />
          <Image
            src={dashedSeparatorWeb}
            alt="dashed-separator"
            className="absolute top-[277px] hidden md:block"
          />
          <Image
            src={dashedSeparatorMobile}
            alt="dashed-separator"
            className="absolute top-[277px] md:hidden"
          />
          <div className="flex flex-col justify-center items-center relative z-10">
            <div className="w-[210px] md:w-[240px] h-[64px] md:h-[74px] font-ppeditorialnew text-[28px] md:text-[32px] leading-[32.2px] md:leading-[36.8px] text-center">
              How <span className="italic">brands</span> think we buy products
            </div>

            <div className="mt-[42px] md:mt-[32px] md:w-[330px] flex flex-col items-center text-[#00A8FE]  text-[11.5px] md:text-[12px] leading-[12px] md:leading-[12.59px] tracking-[40%]">
              <div className="group flex flex-row justify-center items-center gap-8 hover:animate-color">
                <div className="w-[8px] h-[8px] rotate-45 group-hover:animate-diamond"></div>
                <span className="h-[36px] py-[12px]">DELIVERY TIME</span>
                <div className="w-[8px] h-[8px] rotate-45 group-hover:animate-diamond"></div>
              </div>
              <div className="group flex flex-row justify-center items-center gap-8 hover:animate-color">
                <div className="w-[8px] h-[8px] rotate-45 group-hover:animate-diamond"></div>
                <span className="h-[36px] py-[12px]">FAT CLAIMS</span>
                <div className="w-[8px] h-[8px] rotate-45 group-hover:animate-diamond"></div>
              </div>
              <div className="group flex flex-row justify-center items-center gap-8 hover:animate-color">
                <div className="w-[8px] h-[8px] rotate-45 group-hover:animate-diamond"></div>
                <span className="h-[36px] py-[12px]">EXACT COLOURS</span>
                <div className="w-[8px] h-[8px] rotate-45 group-hover:animate-diamond"></div>
              </div>
              <div className="group flex flex-row justify-center items-center gap-8 hover:animate-color">
                <div className="w-[8px] h-[8px] rotate-45 group-hover:animate-diamond"></div>
                <span className="h-[36px] py-[12px]">PRICE</span>
                <div className="w-[8px] h-[8px] rotate-45 group-hover:animate-diamond"></div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center relative z-10 mt-[94px]">
              <div className="w-[210px] md:w-[240px] h-[64px] md:h-[74px] font-ppeditorialnew text-[28px] md:text-[32px] leading-[32.2px] md:leading-[36.8px] text-center">
                How we <span className="italic">actually</span> buy
              </div>

              <div className="mt-[42px] md:mt-[32px] flex flex-col items-center text-[#00A8FE] text-[11.5px] md:text-[12px] leading-[12px] md:leading-[12.59px] tracking-[40%]">
                <div className="group flex flex-row justify-center items-center gap-8 hover:animate-color">
                  <div className="w-[8px] h-[8px] rotate-45 group-hover:animate-diamond"></div>
                  <span className="h-[36px] py-[12px]">INGREDIENTS</span>
                  <div className="w-[8px] h-[8px] rotate-45 group-hover:animate-diamond"></div>
                </div>
                <div className="group flex flex-row justify-center items-center gap-8 hover:animate-color">
                  <div className="w-[8px] h-[8px] rotate-45 group-hover:animate-diamond"></div>
                  <span className="h-[36px] py-[12px]">FRAGRANCE</span>
                  <div className="w-[8px] h-[8px] rotate-45 group-hover:animate-diamond"></div>
                </div>
                <div className="group flex flex-row justify-center items-center gap-8 hover:animate-color">
                  <div className="w-[8px] h-[8px] rotate-45 group-hover:animate-diamond"></div>
                  <span className="h-[36px] py-[12px]">COMEDOGENICITY</span>
                  <div className="w-[8px] h-[8px] rotate-45 group-hover:animate-diamond"></div>
                </div>
                <div className="group flex flex-row justify-center items-center gap-8 hover:animate-color">
                  <div className="w-[8px] h-[8px] rotate-45 group-hover:animate-diamond"></div>
                  <span className="h-[36px] py-[12px]">PACKAGING</span>
                  <div className="w-[8px] h-[8px] rotate-45 group-hover:animate-diamond"></div>
                </div>
                <div className="group flex flex-row justify-center items-center gap-8 hover:animate-color">
                  <div className="w-[8px] h-[8px] rotate-45 group-hover:animate-diamond"></div>
                  <span className="h-[36px] py-[12px]">COMFORT</span>
                  <div className="w-[8px] h-[8px] rotate-45 group-hover:animate-diamond"></div>
                </div>
                <div className="group flex flex-row justify-center items-center gap-8 hover:animate-color">
                  <div className="w-[8px] h-[8px] rotate-45 group-hover:animate-diamond"></div>
                  <span className="h-[36px] py-[12px]">TEXTURE</span>
                  <div className="w-[8px] h-[8px] rotate-45 group-hover:animate-diamond"></div>
                </div>
                <div className="group flex flex-row justify-center items-center gap-8 hover:animate-color">
                  <div className="w-[8px] h-[8px] rotate-45 group-hover:animate-diamond"></div>
                  <span className="h-[36px] py-[12px]">FINISH</span>
                  <div className="w-[8px] h-[8px] rotate-45 group-hover:animate-diamond"></div>
                </div>
                <div className="group flex flex-row justify-center items-center gap-8 hover:animate-color">
                  <div className="w-[8px] h-[8px] rotate-45 group-hover:animate-diamond"></div>
                  <span className="h-[36px] py-[12px]">COVERAGE</span>
                  <div className="w-[8px] h-[8px] rotate-45 group-hover:animate-diamond"></div>
                </div>
                <div className="group flex flex-row justify-center items-center gap-8 hover:animate-color">
                  <div className="w-[8px] h-[8px] rotate-45 group-hover:animate-diamond"></div>
                  <span className="h-[36px] py-[12px]">QUANTITY</span>
                  <div className="w-[8px] h-[8px] rotate-45 group-hover:animate-diamond"></div>
                </div>
                <div className="group flex flex-row justify-center items-center gap-8 hover:animate-color">
                  <div className="w-[8px] h-[8px] rotate-45 group-hover:animate-diamond"></div>
                  <span className="h-[36px] py-[12px]">BLENDABILITY</span>
                  <div className="w-[8px] h-[8px] rotate-45 group-hover:animate-diamond"></div>
                </div>
                <div className="group flex flex-row justify-center items-center gap-8 hover:animate-color">
                  <div className="w-[8px] h-[8px] rotate-45 group-hover:animate-diamond"></div>
                  <span className="h-[36px] py-[12px]">EASE OF REMOVAL</span>
                  <div className="w-[8px] h-[8px] rotate-45 group-hover:animate-diamond"></div>
                </div>
                <div className="group flex flex-row justify-center items-center gap-8 hover:animate-color">
                  <div className="w-[8px] h-[8px] rotate-45 group-hover:animate-diamond"></div>
                  <span className="h-[36px] py-[12px]">SHELF LIFE</span>
                  <div className="w-[8px] h-[8px] rotate-45 group-hover:animate-diamond"></div>
                </div>
                <div className="group flex flex-row justify-center items-center gap-8 hover:animate-color">
                  <div className="w-[8px] h-[8px] rotate-45 group-hover:animate-diamond"></div>
                  <span className="h-[36px] py-[12px]">PIGMENTATION</span>
                  <div className="w-[8px] h-[8px] rotate-45 group-hover:animate-diamond"></div>
                </div>
                <div className="group flex flex-row justify-center items-center gap-8 hover:animate-color">
                  <div className="w-[8px] h-[8px] rotate-45 group-hover:animate-diamond"></div>
                  <span className="h-[36px] py-[12px]">
                    COLOURS ON MY SKIN-TONE
                  </span>
                  <div className="w-[8px] h-[8px] rotate-45 group-hover:animate-diamond"></div>
                </div>
                <div className="group flex flex-row w-full justify-center items-center align-center gap-8 hover:animate-color">
                  <div className="w-[8px] h-[8px] rotate-45 group-hover:animate-diamond"></div>
                  <span className="h-[36px] py-[12px]">LASTING POWER</span>
                  <div className="w-[8px] h-[8px] rotate-45 group-hover:animate-diamond"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}
