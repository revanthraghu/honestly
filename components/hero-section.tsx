"use client";
import ReactRotatingText from "react-rotating-text";
import JoinButton from "./ui/join-button";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center h-screen mx-6 md:mx-auto ">
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
        <div className="italic flex flex-col md:block">
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
            <span className="text-center">by asking</span>
          </span>
          <span className="text-center hidden md:block">
            by asking real people
          </span>
          <span className="text-center md:hidden">real people</span>
        </div>
      </div>
      <div className="my-7 mx-6 text-center text-[13px] leading-[16.9px] tracking-[4%] md:text-[16px] md:leading-[20.8px]  md:max-w-[520px] md:mx-auto">
        We match people who have the same skin tone, skin type, age, gender,
        weather—you get the gist. A bit like Bumble, but for beauty
      </div>
      <JoinButton />
      <div className="text-[10px] leading-[10.5px] tracking-[5%] font-semibold text-center mt-[12px]">
        993 spots left
      </div>
    </div>
  );
}
