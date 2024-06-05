import Cross from "@/public/messageHeader/Frame.svg";
import Image from "next/image";
import JoinButton from "../ui/join-button";

interface Props {
  isMobile: boolean;
  isMessageBoxOpen: boolean;
  setIsMessageBoxOpen: (arg0: boolean) => void;
}

const Modal = ({ isMobile, isMessageBoxOpen, setIsMessageBoxOpen }: Props) => {
  const handleMessageBoxClose = () => {
    setIsMessageBoxOpen(false);
  };

  return (
    <div className="top-0 z-50 rounded-[100px] mx-[4px] my-[8px] w-[96%] md:w-[520px] ml-2 md:ml-[24px] md:mt-4">
      <div
        className="h-[60px] mt-[8px] rounded-[100px]"
        style={{
          background: "#00A8FE",
          boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.15)",
        }}
      >
        <div className="px-8">
          <div className="flex items-center justify-between h-[60px]">
            <div className="font-ppeditorialnew font-extrabold text-white text-xl leading-[23px]">
              TL;DR
            </div>
            <div className="relative cursor-pointer">
              <Image src={Cross} alt="cross" onClick={handleMessageBoxClose} />
            </div>
          </div>
        </div>
      </div>

      <div
        className="mx-[1px] w-full flex flex-col md:h-[544px] rounded-[32px] h-auto mt-[7px] pb-8"
        style={{
          background: "rgba(255, 255, 255, 0.8)",
          boxShadow: "2px 2px 2px 0px rgba(0, 0, 0, 0.15)",
        }}
      >
        <div className="mt-[42px] mx-9 font-ppmori font-normal text-[13px] leading-[19.5px] tracking-wider">
          <div>
            👋 Hey. We’re Vivek and Karishma We’re building Bumble for beauty &
            personal care needs ?
          </div>
          <div className="mt-4">
            <span className="font-semibold ">Huh, you ask?</span>
            {isMobile ? (
              <>
                <div>
                  We match you with people who are the same skin tone, skin
                  type, age, gender, hair type as you, and have tried a whole
                  bunch of products to give you
                  <span className="italic"> honest</span>, and{" "}
                  <span className="italic">nuanced</span> reviews
                </div>
              </>
            ) : (
              <>
                <div>
                  Well, let’s start with a stat. 65% of people have bought a
                  beauty product in the last 3 months that they regret. Even
                  though they read reviews, and watched hours and hours of
                  Youtube and Instagram reels before buying.
                </div>
                <div className="mt-4">
                  And another stat—24% of all complaints made to Advertising
                  Standards Council of India during Covid years were against
                  beauty brands for misleading advertising.
                </div>
                <div className="mt-4">
                  So we’ve decided to solve this problem. And while we know we
                  have a long way to go, we’re starting with something super
                  simple: match you with people who are the same skin tone, skin
                  type, age, gender, hair type as you, and have tried a whole
                  bunch of products, to give you honest, nuanced and helpful
                  reviews before you buy.
                </div>

                <div className="mt-4">All you have to do?</div>
              </>
            )}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-4">
          <JoinButton>JOIN THE WAITLIST</JoinButton>
        </div>
        {/* FUTURE FEATURE */}
        {/* {isMobile && (
          <div className="flex flex-row gap-2 w-[34px] h-[6px] ml-[36px]">
            <div className="rounded-full w-[6px] h-[6px] bg-filledEllipse"></div>
            <div className="rounded-full w-[6px] h-[6px] bg-mutedEllipse"></div>
            <div className="rounded-full w-[6px] h-[6px] bg-mutedEllipse"></div>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Modal;
