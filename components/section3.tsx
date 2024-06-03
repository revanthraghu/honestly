import helpfulImg from "@/public/background/helpful.svg";
import Image from "next/image";
import WordSectionA from "./WordSectionA";
import WordSectionB from "./WordSectionB";
import WordSectionC from "./WordSectionC";
import WordSectionD from "./WordSectionD";
import WordSectionE from "./WordSectionE";
import WordSectionF from "./WordSectionF";

export default function Section3() {
  const paragraphOne = "So 97% of us go down a rabbit hole of reviews";
  const paragraphTwo = "YET we end up with products that just don't work";
  const paragraphThree = "The problem?";
  const paragraphFour =
    "Most reviews skip the important stuff: who's using them, what's their skin tone, skin type, age, and what the really liked about the product";
  const paragraphFive =
    "Unless you're one of the 3 people who found “it's nice”";
  const paragraphSix =
    "We keep falling for brand claims or what brands paid our favourite influencers to say (it's ok, we've all been there)";

  return (
    <div className="flex md:flex-row flex-col h-[780px] md:h-[384px]">
      <div className="relative flex-1 bg-[#F00832]">
        <div className="absolute inset-4 flex justify-center border-2 border-black border-dashed">
          <div className="flex flex-col justify-center px-2 w-[268px] md:w-[540px] h-full font-normal font-ppeditorialnew text-[28px] md:text-[32px] leading-[32.2px] md:leading-[36.8px]">
            <div className="md:w-[51%] lg:max-w-[268px]">
              <WordSectionA paragraph={paragraphOne} />
            </div>
            <span className="md:hidden h-[42px]"></span>
            <div className="md:w-1/2 lg:max-w-[268px] text-white md:self-end">
              <WordSectionB paragraph={paragraphTwo} />
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex flex-1 justify-center items-center bg-[#F9F7EF]">
        <div className="absolute inset-4 border-2 border-black border-dashed">
          <div className="flex flex-col justify-center px-[40px] h-full">
            <div className="font-ppeditorialnew text-[32px] leading-[36.8px] font-normal">
              <WordSectionC paragraph={paragraphThree} />
            </div>
            <div className="h-[22px] md:h-[32px]" />
            {/* <span> */}
            <ol className="px-4 text-[13px] md:text-[14px] leading-[16.9px] md:leading-[18.2px] tracking-[4%] list-decimal md:max-w-[482px] max-w-[290px]">
              <li>
                <WordSectionD paragraph={paragraphFour} />
              </li>
              {/* <br /> */}
              <div className="h-[16px] mt-2 md:mt-0" />
              <span className="flex flex-row text-[13px] md:text-[14px] leading-[16.9px] md:leading-[18.2px] tracking-[4%] list-decimal">
                <WordSectionE paragraph={paragraphFive} />
                {/* <Image
                  src={helpfulImg}
                  alt="helpful"
                  className="inline-block pb-1 md:-mt-[5px] md:-ml-2"
                /> */}
              </span>
              {/* <div className="flex md:flex-row text-[13px] md:text-[14px] leading-[16.9px] md:leading-[18.2px] tracking-[4%] list-decimal">
                <WordSectionE paragraph={paragraphFive} />
                <Image
                  src={helpfulImg}
                  alt="helpful"
                  className="md:-mt-[5px] md:-ml-2 inline-block"
                />
              </div> */}
              {/* <br /> */}
              <div className="h-[16px]" />
              <li>
                <WordSectionF paragraph={paragraphSix} />
              </li>
            </ol>
          </div>
          {/* </span> */}
        </div>
      </div>
    </div>
  );
}
