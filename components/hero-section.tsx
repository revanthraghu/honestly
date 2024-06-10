"use client";
import Image from "next/image";
import { useRef, useEffect, useState, useCallback } from "react";
import iceberg1Mobile from "@/public/background/iceberg1-mobile.svg";
import iceberg1Web from "@/public/background/iceberg1-web.svg";
import JoinButton from "./ui/join-button";
import icebergUnion from "@/public/background/icebergUnion.svg";
import dashedSeparatorWeb from "@/public/background/dashedSeparator.svg";
import dashedSeparatorMobile from "@/public/background/dashedSeparatorMobile.svg";
import UpperIceberg from "./upperIceberg";
import LowerIceberg from "./lowerIceberg";

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);
  const [text, setText] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const toRotate = [
    "sunscreen",
    "lipstick",
    "lip balm",
    "cleanser",
    "concealer",
    "foundation",
    "retinol",
    "moisturizer",
  ];

  useEffect(() => {
    setTimeout(() => {
      if (text != 7) {
        setText(text + 1);
      } else {
        setText(0);
      }
    }, 2000);
  });

  return (
    <>
      <div className="overflow-y-scroll no-scrollbar h-screen flex flex-col items-center justify-center mx-4 md:mx-auto z-10">
        <h1 className="flex flex-col items-center justify-center text-center font-ppeditorialnew font-normal text-[36px] leading-[41.4px] md:text-[44px] md:leading-[50.6px] md:max-w-[590px]">
          <span className="flex flex-row">
            <span>Find your holy-grail&nbsp;</span>
            <span className="hidden italic md:block">
              <span className="-webkit-flex-wrap">{toRotate[text]}</span>
            </span>
          </span>
          <span className="flex flex-col md:block">
            <span>
              <span className="italic md:hidden">
                <span className="-webkit-flex-wrap">{toRotate[text]}</span>
                &nbsp;
              </span>
              <span className="text-center md:hidden">by asking</span>
            </span>

            <span className="text-center hidden md:block">
              by asking real people
            </span>
            <span className="text-center md:hidden">real people</span>
          </span>
        </h1>
        <div className="my-[28px] mx-[32px] text-center text-[13px] leading-[16.9px] tracking-[4%] md:text-[16px] md:leading-[20.8px] md:max-w-[520px] md:mx-auto">
          We match people who have the same skin tone, skin type, age, gender,
          weather—you get the gist. A bit like Bumble, but for beauty
        </div>
        <JoinButton>JOIN THE WAITLIST</JoinButton>
      </div>

      <div className="absolute top-[100vh] left-1/2 transform -translate-x-1/2 flex justify-center">
        <Image
          src={iceberg1Mobile}
          alt="background-image-1"
          className="animate-bounce md:hidden z-0 relative -mt-[138.5px] w-auto h-[277px]"
          aria-hidden
          priority
          unoptimized
          style={{
            transition: "opacity 0.5s ease-in-out",
            opacity: scrolled ? 0 : 1,
          }}
        />

        <Image
          src={iceberg1Web}
          alt="background-image-1"
          className="animate-bounce hidden md:block -mt-[72px] w-auto h-[143px]"
          priority
          aria-hidden
          style={{
            transition: "opacity 0.5s ease-in-out",
            opacity: scrolled ? 0 : 1,
          }}
        />
      </div>
      {/* )} */}

      {/* SECTION TWO */}

      <div>
        <div className="flex flex-col items-center mb-[71px] ">
          <Image
            src={icebergUnion}
            alt="background-image-2"
            className=" absolute md:w-auto md:h-[935px]"
          />
          <Image
            src={dashedSeparatorWeb}
            alt="dashed-separator"
            className="absolute mt-[277px] hidden md:block"
          />
          <Image
            src={dashedSeparatorMobile}
            alt="dashed-separator"
            className="absolute mt-[277px] md:hidden"
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
