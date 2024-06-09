"use client";
import Vector from "@/public/messageHeader/Vector.svg";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Faq() {
  //   const [isSmallTabletOrMobile, setIsSmallTabletOrMobile] =
  //     useState<boolean>(false);
  const [clickedMobileOne, setClickedMobileOne] = useState<boolean>(false);
  const [clickedMobileTwo, setClickedMobileTwo] = useState<boolean>(false);
  const [clickedMobileThree, setClickedMobileThree] = useState<boolean>(false);
  const [clickedMobileFour, setClickedMobileFour] = useState<boolean>(false);
  const [clickedMobileFive, setClickedMobileFive] = useState<boolean>(false);

  //   useEffect(() => {
  //     function handleResize() {
  //       setIsSmallTabletOrMobile(window.innerWidth < 992);
  //     }
  //     handleResize();
  //     window.addEventListener("resize", handleResize);
  //     return () => window.removeEventListener("resize", handleResize);
  //   }, [setIsSmallTabletOrMobile]);

  const handleMobileClear = () => {
    setClickedMobileOne(false);
    setClickedMobileTwo(false);
    setClickedMobileThree(false);
    setClickedMobileFour(false);
    setClickedMobileFive(false);
  };

  const handleMobileFaqOne = () => {
    handleMobileClear();
    setClickedMobileOne(!clickedMobileOne);
  };

  const mailToLinkV = `mailto:v@honestly.club?subject=${encodeURIComponent(
    "I want to work at Honestly"
  )}`;

  const mailToLinkK = `mailto:k@honestly.club?subject=${encodeURIComponent(
    "Quick Question"
  )}`;

  const handleMobileFaqTwo = () => {
    handleMobileClear();
    setClickedMobileTwo(!clickedMobileTwo);
    window.location.href = mailToLinkV;
  };

  const handleDestopFaqTwo = () => {
    window.location.href = mailToLinkV;
  };

  const handleMobileFaqThree = () => {
    handleMobileClear();
    setClickedMobileThree(!clickedMobileThree);
    window.location.href = mailToLinkK;
  };

  const handleDestopFaqThree = () => {
    window.location.href = mailToLinkK;
  };

  const handleMobileFaqFour = () => {
    handleMobileClear();
    setClickedMobileFour(!clickedMobileFour);
  };

  const handleMobileFaqFive = () => {
    handleMobileClear();
    setClickedMobileFive(!clickedMobileFive);
  };

  //   if (isSmallTabletOrMobile) {
  return (
    <section>
      {/* THIS CODE IS FOR MOBILE ONLY (<1024px)*/}
      <div className="w-full h-full p-8 mt-6 lg:hidden">
        <div className="flex flex-row">
          <div className="h-[302px] w-full border-black border-[0.5px]">
            <div
              onClick={handleMobileFaqOne}
              className={`${
                clickedMobileOne ? "bg-white" : ""
              } flex flex-row w-full`}
            >
              <div className="w-full h-[73px] border-black border-[0.5px]">
                <div className=" font-semibold text-[13px] leading-[26px] flex items-center px-6 h-full">
                  Tell me more, I like to read long form
                </div>
              </div>
            </div>
            <div className="flex flex-row w-full">
              <div
                onClick={handleMobileFaqTwo}
                className={`${
                  clickedMobileTwo ? "bg-white" : ""
                }  flex flex-col gap-2  w-1/2 h-[83px] border-black border-[0.5px]`}
              >
                <div className="  font-semibold text-[13px] leading-[26px] px-6 py-[14px]">
                  <div className="font-thin">Work with us</div>
                  <div className="underline font-bold">v@honestly.club</div>
                </div>
              </div>
              <div
                className={`flex flex-col gap-2 w-1/2 h-[83px] border-black border-[0.5px] ${
                  clickedMobileThree ? "bg-white" : ""
                }`}
              >
                <div
                  onClick={handleMobileFaqThree}
                  className={` font-semibold text-[13px]  leading-[26px] px-6 py-[14px]`}
                >
                  <div className="font-thin">Questions?</div>
                  <div className="underline font-bold">k@honestly.club</div>
                </div>
              </div>
            </div>
            <div className="flex flex-row">
              <div
                onClick={handleMobileFaqFour}
                className={`${
                  clickedMobileFour ? "bg-white" : ""
                }  w-full h-[73px] border-black border-[0.5px]`}
              >
                <div className="flex items-center gap-2">
                  <Link
                    href={`https://www.instagram.com/honestly.club/`}
                    target="_blank"
                    className=" font-semibold text-[13px] leading-[26px] px-6 py-[24px]"
                  >
                    Instagram
                  </Link>
                  <div className="relative cursor-pointer">
                    <Image src={Vector} alt="open" />
                  </div>
                </div>
              </div>
              <div className="w-full h-[73px]">
                <div
                  onClick={handleMobileFaqFive}
                  className={`${
                    clickedMobileFive ? "bg-white" : ""
                  } h-[73px] border-black border-[0.5px] flex items-center gap-2`}
                >
                  <Link
                    href={`https://www.linkedin.com/company/whathonestly/`}
                    target="_blank"
                    className=" font-semibold text-[13px] leading-[26px] px-6 py-[24px]"
                  >
                    LinkedIn
                  </Link>
                  <div className="relative cursor-pointer">
                    <Image src={Vector} alt="open" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center w-full h-[73px] border-black border-[0.5px]">
              <div className=" font-semibold text-[10px] leading-[20px] px-auto py-[5px]">
                HONESTLY, NO RIGHTS RESERVED YET
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* THIS CODE IS FOR DESKTOP ONLY (>1024px)*/}

      <div className="w-full h-full p-8 mt-[50px] hidden lg:block">
        <div className="flex flex-row  items-center ">
          <div className="h-[179px] w-full border-black border-[0.5px]">
            <div className="flex flex-row w-full">
              <div className="w-1/3 h-[73px] border-black border-[0.5px] hover:bg-white">
                <div className=" font-semibold text-[13px] leading-[26px] flex items-center px-8 h-full cursor-pointer">
                  Tell me more, I like to read long form
                </div>
              </div>
              <div
                className="w-1/3 h-[73px] border-black border-[0.5px] hover:bg-white"
                onClick={handleDestopFaqThree}
              >
                <div className=" font-semibold text-[13px] leading-[26px] flex items-center px-8 h-full cursor-pointer">
                  Questions? <span className="underline">k@honestly.club</span>
                </div>
              </div>
              <div className="w-1/3 h-[73px] border-black border-[0.5px] hover:bg-white">
                <Link
                  href={`https://www.instagram.com/honestly.club/`}
                  target="_blank"
                  className=" font-semibold text-[13px] leading-[26px] flex items-center px-8 h-full cursor-pointer"
                >
                  Follow us on Instagram
                </Link>
              </div>
            </div>
            <div className="flex flex-row w-full">
              <div className="w-1/3 h-[73px] border-black border-[0.5px] ">
                <div className=" font-semibold flex items-center px-8 text-[13px] leading-[26px] h-full cursor-default">
                  Join us to build India’s first skin-tone standard (Coming
                  Soon)
                </div>
              </div>
              <div className="w-1/3 h-[73px] border-black border-[0.5px] hover:bg-white">
                <div
                  className=" font-semibold text-[13px] leading-[26px] flex items-center px-8 h-full cursor-pointer"
                  onClick={handleDestopFaqTwo}
                >
                  Work with us?{" "}
                  <span className="underline">v@honestly.club</span>
                </div>
              </div>
              <div className="w-1/3 h-[73px] border-black border-[0.5px] hover:bg-white">
                <Link
                  href={`https://www.linkedin.com/company/whathonestly/`}
                  target="_blank"
                  className=" font-semibold text-[13px] leading-[26px] flex items-center px-8 h-full cursor-pointer"
                >
                  Follow us on LinkedIn
                </Link>
              </div>
            </div>

            <div className="flex justify-center items-center w-full h-[33px] border-black border-[0.5px]">
              <div className=" font-semibold text-[10px] leading-[20px] px-8 cursor-default">
                HONESTLY, NO RIGHTS RESERVED YET
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  //   }
}
