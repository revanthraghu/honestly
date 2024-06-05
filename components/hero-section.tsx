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
import UpperIceberg from "./upperIceberg";
import LowerIceberg from "./lowerIceberg";

export default function Hero() {
  const iceberg = ["DELIVERY TIME", "FAT CLAIMS", "PHOTOS OF MODELS", "PRICE"];
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 130) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <>
      <div className="overflow-y-scroll no-scrollbar h-screen flex flex-col items-center justify-center mx-4 md:mx-auto z-10">
        <div className="flex flex-col items-center justify-center text-center font-ppeditorialnew font-normal text-[36px] leading-[41.4px] md:text-[44px] md:leading-[50.6px] md:max-w-[590px]">
          <div className="flex flex-row">
            <span>Find your holy-grail&nbsp;</span>
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
              <span className="text-center md:hidden">by asking</span>
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
      </div>
      {!scrolled && (
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
        </div>
      )}

      {/* SECTION TWO */}

      <div>
        <div
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="500"
          className="flex flex-col items-center mb-[71px] "
        >
          <Image
            src={icebergUnion}
            alt="background-image-2"
            className=" absolute md:w-[347.29px] md:h-[935px]"
          />
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

            <div className="w-full mt-[42px] md:mt-[32px] flex flex-col items-center">
              <UpperIceberg />
            </div>
            <div className="flex flex-col justify-center items-center relative z-10 mt-[94px]">
              <div className="w-[210px] md:w-[240px] h-[64px] md:h-[74px] font-ppeditorialnew text-[28px] md:text-[32px] leading-[32.2px] md:leading-[36.8px] text-center">
                How we
                <div>
                  <span className="italic">actually</span> buy
                </div>
              </div>

              <div className="w-full mt-[42px] md:mt-[32px] flex flex-col items-center ">
                <LowerIceberg />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
