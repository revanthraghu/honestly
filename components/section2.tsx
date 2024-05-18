import icebergUnion from "@/public/background/icebergUnion.svg";
import Image from "next/image";
import dashedSeparatorWeb from "@/public/background/dashedSeparator.svg";
import dashedSeparatorMobile from "@/public/background/dashedSeparatorMobile.svg";

export default function Section2() {
  return (
    <div className="relative flex flex-col items-center h-screen mt-[200px]">
      <Image src={icebergUnion} alt="background-image-2" className="absolute" />
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
      <div className="relative z-10">
        <div className="w-[210px] md:w-[240px] h-[64px] md:h-[74px] font-ppeditorialnew text-[28px] md:text-[32px] leading-[32.2px] md:leading-[36.8px] text-center">
          How <span className="italic">brands</span> think we buy products
        </div>

        <div className="mt-[42px] md:mt-[32px] flex flex-col items-center text-[#00A8FE] opacity-30 text-[11.5px] md:text-[12px] leading-[12px] md:leading-[12.59px] tracking-[40%]">
          <span className="h-[36px] flex justify-center items-center w-full">
            DELIVERY TIME
          </span>
          <span className="h-[36px] flex justify-center items-center w-full">
            FAT CLAIMS
          </span>
          <span className="h-[36px] flex justify-center items-center w-full">
            EXACT COLOURS
          </span>
          <span className="h-[36px] flex justify-center items-center w-full">
            PRICE
          </span>
        </div>
        <div className="relative z-10 mt-[94px]">
          <div className="w-[210px] md:w-[240px] h-[64px] md:h-[74px] font-ppeditorialnew text-[28px] md:text-[32px] leading-[32.2px] md:leading-[36.8px] text-center">
            How we <span className="italic">actually</span> buy
          </div>

          <div className="mt-[42px] mb-[71px] md:mt-[32px] flex flex-col items-center text-[#00A8FE] opacity-30 text-[11.5px] md:text-[12px] leading-[12px] md:leading-[12.59px] tracking-[40%]">
            <span className="h-[36px] flex justify-center items-center w-full">
              INGREDIENTS
            </span>
            <span className="h-[36px] flex justify-center items-center w-full">
              FRAGRANCE
            </span>
            <span className="h-[36px] flex justify-center items-center w-full">
              COMEDOGENICITY
            </span>
            <span className="h-[36px] flex justify-center items-center w-full">
              PACKAGING
            </span>
            <span className="h-[36px] flex justify-center items-center w-full">
              COMFORT
            </span>
            <span className="h-[36px] flex justify-center items-center w-full">
              TEXTURE
            </span>
            <span className="h-[36px] flex justify-center items-center w-full">
              FINISH
            </span>
            <span className="h-[36px] flex justify-center items-center w-full">
              COVERAGE
            </span>
            <span className="h-[36px] flex justify-center items-center w-full">
              QUANTITY
            </span>
            <span className="h-[36px] flex justify-center items-center w-full">
              BLENDABILITY
            </span>
            <span className="h-[36px] flex justify-center items-center w-full">
              EASE OF REMOVAL
            </span>
            <span className="h-[36px] flex justify-center items-center w-full">
              SHELF LIFE
            </span>
            <span className="h-[36px] flex justify-center items-center w-full">
              PIGMENTATION
            </span>
            <span className="h-[36px] flex justify-center items-center w-full">
              COLOURS ON MY SKIN-TONE
            </span>
            <span className="h-[36px] flex justify-center items-center w-full">
              LASTING POWER
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
