import helpfulImg from "@/public/background/helpful.svg";
import Image from "next/image";

export default function Section3() {
  return (
    <div className="flex md:flex-row flex-col h-[780px] md:h-[384px]">
      <div className="relative flex-1 bg-[#F4434D]">
        <div className="absolute inset-4 flex justify-center border-2 border-black border-dashed">
          <div className="flex flex-col justify-center px-2 w-[268px] md:w-[540px] h-full font-normal font-ppeditorialnew text-[28px] md:text-[32px] leading-[32.2px] md:leading-[36.8px]">
            <p className="md:w-1/2 lg:max-w-[268px] text-white">
              So 97% of us go down a rabbit hole of reviews
            </p>
            <span className="md:hidden h-[42px]"></span>
            <p className="md:w-1/2 lg:max-w-[268px] text-white md:self-end">
              YET we end up with products that just don’t work
            </p>
          </div>
        </div>
      </div>
      <div className="relative flex flex-1 justify-center items-center bg-[#F9F7EF]">
        <div className="absolute inset-4 border-2 border-black border-dashed">
          <div className="flex flex-col justify-center px-[40px] h-full">
            <span className="font-ppeditorialnew text-[32px] leading-[36.8px]">
              The problem?
            </span>
            <div className="h-[22px] md:h-[32px]" />
            {/* <span> */}
            <ol className="px-4 text-[13px] md:text-[14px] leading-[16.9px] md:leading-[18.2px] tracking-[4%] list-decimal">
              <li>
                Most reviews skip the important stuff: who's using them, what’s
                their skin tone, skin type, age, and what they really liked
                about the product
              </li>
              {/* <br /> */}
              <div className="h-[16px]" />
              <span className="text-[13px] md:text-[14px] leading-[16.9px] md:leading-[18.2px] tracking-[4%] list-decimal">
                Unless you’re one of the 3 people who found “it’s nice”
                <Image
                  src={helpfulImg}
                  alt="helpful"
                  className="inline-block pb-1"
                />
              </span>
              {/* <br /> */}
              <div className="h-[16px]" />
              <li>
                We keep falling for brand claims or what brands paid our
                favourite influencers to say (it’s ok, we’ve all been there)
              </li>
            </ol>
            {/* </span> */}
          </div>
        </div>
      </div>
    </div>
  );
}
