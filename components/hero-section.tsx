"use client";
import ReactRotatingText from "react-rotating-text";
import JoinButton from "./ui/join-button";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center h-screen mx-auto ">
      <div className="flex flex-col text-[44px] leading-[50.6px] text-center font-ppeditorialnew font-normal max-w-[590px]">
        <span className="flex flex-row items-left">
          <span>Find your holy-grail&nbsp;</span>
          {/* <span className="italic block" id="cycle"></span> Use this only when using CSS Transitions */}
          {/* <span className="italic block" id="cycle"></span> Use this only when using CSS Transitions */}
          {/* <span className="w-[210px] italic"> */}
          <span className="italic">
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
        </span>
        <span className=" text-center">by asking real people</span>
      </div>
      <div className="my-7 text-[16px] leading-[20.8px] text-center tracking-[4%] max-w-[520px]">
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
