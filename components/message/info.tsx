import Vector from "@/public/messageHeader/Vector.svg";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
interface Props {
  setIsMessageBoxOpen: (arg0: boolean) => void;
}
export default function Info({ setIsMessageBoxOpen }: Props) {
  const [clickedMobileOne, setClickedMobileOne] = useState<boolean>(false);
  const [clickedMobileTwo, setClickedMobileTwo] = useState<boolean>(false);
  const [clickedMobileThree, setClickedMobileThree] = useState<boolean>(false);
  const [clickedMobileFour, setClickedMobileFour] = useState<boolean>(false);
  const [clickedMobileFive, setClickedMobileFive] = useState<boolean>(false);
  const [clickedMobileSix, setClickedMobileSix] = useState<boolean>(false);

  const handleMobileClear = () => {
    setClickedMobileOne(false);
    setClickedMobileTwo(false);
    setClickedMobileThree(false);
    setClickedMobileFour(false);
    setClickedMobileFive(false);
    setClickedMobileSix(false);
  };

  const handleMobileFaqOne = () => {
    handleMobileClear();
    setIsMessageBoxOpen(false);
    setClickedMobileOne(!clickedMobileOne);
  };

  const handleMobileFaqTwo = () => {
    handleMobileClear();
    setIsMessageBoxOpen(false);
    setClickedMobileTwo(!clickedMobileTwo);
  };

  const handleMobileFaqThree = () => {
    handleMobileClear();
    setClickedMobileThree(!clickedMobileThree);
  };

  const handleMobileFaqFour = () => {
    handleMobileClear();
    setClickedMobileFour(!clickedMobileFour);
  };

  const handleMobileFaqFive = () => {
    handleMobileClear();
    setClickedMobileFive(!clickedMobileFive);
  };

  const handleMobileFaqSix = () => {
    handleMobileClear();
    setClickedMobileSix(!clickedMobileSix);
  };

  return (
    <div className="block md:hidden top-0 z-20 h-full mx-[9px] w-[96%] pb-8 py-8 bg-none">
      <div className="flex flex-row  items-center ">
        <div className="h-[292px] w-full border-black border-[0.5px]">
          <div className="flex flex-row w-full">
            <Link
              href="#howitworks"
              onClick={handleMobileFaqOne}
              className={`${
                clickedMobileOne ? "bg-white" : ""
              } w-1/2 h-[73px] border-black border-[0.5px] font-ppmori font-semibold text-[13px] leading-[26px] px-8 py-[24px]`}
            >
              {/* <div className="font-ppmori font-semibold text-[13px] leading-[26px] px-8 py-[24px]"> */}
              How it works
              {/* </div> */}
            </Link>
            <Link
              href="#faqs"
              onClick={handleMobileFaqTwo}
              className={`${
                clickedMobileTwo ? "bg-white" : ""
              } w-1/2 h-[73px] border-black border-[0.5px] font-ppmori font-semibold text-[13px] leading-[26px] px-8 py-[24px]`}
            >
              {/* <div className="font-ppmori font-semibold text-[13px] leading-[26px] px-8 py-[24px]"> */}
              FAQs
              {/* </div> */}
            </Link>
          </div>
          <div className="flex flex-row">
            <div
              onClick={handleMobileFaqThree}
              className={`${
                clickedMobileThree ? "bg-white" : ""
              } w-full h-[73px] border-black border-[0.5px]`}
            >
              <div className="flex items-center gap-6">
                <div className="font-ppmori font-semibold text-[13px] leading-[26px] px-8 py-[24px]">
                  Instagram
                </div>
                <div className="relative cursor-pointer">
                  <Image src={Vector} alt="open" />
                </div>
              </div>
            </div>
            <div
              onClick={handleMobileFaqFour}
              className={`${
                clickedMobileFour ? "bg-white" : ""
              } w-full h-[73px] border-black border-[0.5px]`}
            >
              <div className="flex items-center gap-6">
                <div className="font-ppmori font-semibold text-[13px] leading-[26px] px-8 py-[24px]">
                  LinkedIn
                </div>
                <div className="relative cursor-pointer">
                  <Image src={Vector} alt="open" />
                </div>
              </div>
            </div>
          </div>
          <div
            onClick={handleMobileFaqFive}
            className={`${
              clickedMobileFive ? "bg-white" : ""
            } w-full h-[73px] border-black border-[0.5px]`}
          >
            <div className="font-ppmori font-semibold text-[13px] leading-[26px] px-8 py-[24px]">
              Join us to build India’s first skin-tone standard
            </div>
          </div>
          <div
            onClick={handleMobileFaqSix}
            className={`${
              clickedMobileSix ? "bg-white" : ""
            } w-full h-[73px] border-black border-[0.5px]`}
          >
            <div className="font-ppmori font-semibold text-[13px] leading-[26px] px-8 py-[24px]">
              Tell me more, I like to read long form
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
