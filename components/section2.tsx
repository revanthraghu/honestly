import icebergUnion from "@/public/background/icebergUnion.svg";
import Image from "next/image";
import dashedSeparatorWeb from "@/public/background/dashedSeparator.svg";
import dashedSeparatorMobile from "@/public/background/dashedSeparatorMobile.svg";

export default function Section2() {
  return (
    <div className="relative flex flex-col items-center mt-[200px] mb-[71px]">
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
  );
}
