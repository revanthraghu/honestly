import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import logoMobileImg from "@/public/navbar/logo-mobile.svg";
import catSvg from "@/public/working/cat.gif";
import JoinButton from "./ui/join-button";

export default function Section5() {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isCentered, setIsCentered] = useState<boolean>(false);
  var isInCenter = false;

  const scrollableDivRef = useRef<HTMLDivElement>(null);

  const scrollByY = (pixels: number) => {
    if (scrollableDivRef.current) {
      scrollableDivRef.current.scrollTop += pixels;
    }
  };

  const checkIfCentered = () => {
    if (targetRef.current) {
      const rect = targetRef.current.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;

      if (Math.abs(viewportCenter - elementCenter) < rect.height / 2) {
        setIsCentered(true);
        var i = 0;
        if (isInCenter === false) {
          for (let i = 0; i <= 10; i++) {
            setTimeout(() => {
              setCounter(i);
              scrollByY(200);
            }, i * 500); // Schedule each log after (i * 2) seconds
          }
        }
        isInCenter = true;
      }
    }
  };

  const [count, setCounter] = useState<number>(0);

  useEffect(() => {
    if (isInCenter === false) {
      window.addEventListener("scroll", checkIfCentered);
      checkIfCentered(); // Initial check
    }
  }, []);

  const messageEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = (event: Event) => {
      const target = event.currentTarget as HTMLDivElement;
      target.scroll({ top: target.scrollHeight, behavior: "smooth" });
    };

    if (messageEl.current) {
      messageEl.current.addEventListener("DOMNodeInserted", handleScroll);
    }

    return () => {
      if (messageEl.current) {
        messageEl.current.removeEventListener("DOMNodeInserted", handleScroll);
      }
    };
  }, []);

  return (
    <div
      className="scroll flex md:flex-row flex-col md:w-full h-[720px] md:h-screen"
      id="howitworks"
    >
      <div className="flex justify-center items-center bg-howItWorksBg bg-cover md:w-1/2 p-8">
        <div
          className="flex md:flex-col flex-row w-[284px] h-[613px]  rounded-[28px] p-4 "
          style={{
            background: "rgba(255, 255, 255, 1)",
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          }}
        >
          <div className="w-[242px] h-[82px] mt-4 ">
            <div ref={targetRef} className="text-center">
              <span className="text-[#F00832] font-ppeditorialnew leading-[41.4px] text-4xl italic font-extrabold text-center">
                Here’s how it works
              </span>
            </div>
            <div className="w-[250px] border-black border-[1px] mt-4"></div>
            <div className="flex flex-col justify mt-6 flex-grow scoll-smooth no-scrollbar overflow-scroll ">
              <div
                ref={scrollableDivRef}
                className="h-[420px] overflow-auto no-scrollbar scroll-smooth flex-grow"
              >
                <div className="flex justify-end">
                  <div
                    className={`${
                      count >= 0 ? "block animate-slideInFromBottom" : "hidden"
                    } flex flex-row justify-end items-center text-[12px] leading-[14.4px] tracking-[4%] pt-2 pb-2 bg-[#AEDCEE80] w-[190.41px] h-auto px-[10px] py-[1px] gap-2 rounded-l-[12px] rounded-tr-[12px]`}
                  >
                    <div>hi, how does this work?</div>
                    <div className="w-[21px] h-[21px] bg-white rounded-full border-dashed border-[1px] border-black">
                      <Image
                        className="w-[20.7px] h-[20.7px] px-[4px] py-[4px]"
                        src={catSvg}
                        alt="open"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-start">
                  <div
                    className={`${
                      count >= 1 ? "block animate-slideInFromBottom" : "hidden"
                    } flex flex-row text-[12px] leading-[14.4px] tracking-[4%] pt-2 pb-2 bg-[#AEDCEE] w-[190.41px] h-auto px-[10px] py-[5px] gap-2 rounded-tl-[12px] rounded-r-[12px] mt-2`}
                  >
                    <div className="w-[21px] h-[21px] bg-white rounded-full border-dashed border-[1px] border-black">
                      <Image
                        className="w-[20.7px] h-[20.7px] px-[4px] py-[4px]"
                        src={logoMobileImg}
                        alt="open"
                      />
                    </div>
                    <div>
                      <div>Start by applying to</div>
                      <div>be a member</div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end mt-2">
                  <div
                    className={`${
                      count >= 2 ? "block animate-slideInFromBottom" : "hidden"
                    } flex flex-row justify-end items-center text-[12px] tracking-[4%] leading-[14.4px] pt-2 pb-2 bg-[#AEDCEE80] w-[190.41px] h-auto px-[10px] py-[5px] gap-2 rounded-l-[12px] rounded-tr-[12px]`}
                  >
                    <div>
                      <div>so anyone who</div>
                      <div>applies gets in?</div>
                    </div>
                    <div className="w-[21px] h-[21px] bg-white rounded-full border-dashed border-[1px] border-black">
                      <Image
                        className="w-[20.7px] h-[20.7px] px-[4px] py-[4px]"
                        src={catSvg}
                        alt="open"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div
                    className={`${
                      count >= 3 ? "block animate-slideInFromBottom" : "hidden"
                    } flex flex-row text-[12px] leading-[14.4px] tracking-[4%] pt-2 pb-2 bg-[#AEDCEE] w-[190.41px] h-auto px-[10px] py-[5px] gap-2 rounded-tl-[12px] rounded-r-[12px] mt-2`}
                  >
                    <div className="w-[21px] h-[21px] bg-white rounded-full border-dashed border-[1px] border-black">
                      <Image
                        className="w-[20.7px] h-[20.7px] px-[4px] py-[4px]"
                        src={logoMobileImg}
                        alt="open"
                      />
                    </div>
                    <div>
                      <div>No, for now we’re only</div>
                      <div>open to folks who</div>
                      <div>have spent ≥₹10K on</div>
                      <div>beauty products in</div>
                      <div>last 12 months</div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end mt-2">
                  <div
                    className={`${
                      count >= 4 ? "block animate-slideInFromBottom" : "hidden"
                    } flex flex-row text-[12px] leading-[14.4px] tracking-[4%] pt-2 pb-2 bg-[#AEDCEE80] w-[190.41px] text-right h-auto px-[10px] py-[5px] gap-2 rounded-l-[12px] rounded-tr-[12px]`}
                  >
                    <div>
                      <div>lmao i spent more</div>
                      <div>than 10K in this last</div>
                      <div>sale itself</div>
                    </div>
                    <div className="w-[21px] h-[21px] bg-white rounded-full border-dashed border-[1px] border-black">
                      <Image
                        className=" w-[20.7px] h-[20.7px] px-[4px] py-[4px]"
                        src={catSvg}
                        alt="open"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div
                    className={`${
                      count >= 5 ? "block animate-slideInFromBottom" : "hidden"
                    } flex flex-row text-[12px] leading-[14.4px] tracking-[4%] pt-2 pb-2 bg-[#AEDCEE] w-[190.41px] h-auto px-[10px] py-[5px] gap-2 rounded-tl-[12px] rounded-r-[12px] mt-2`}
                  >
                    <div className="w-[21px] h-[21px] bg-white rounded-full border-dashed border-[1px] border-black">
                      <Image
                        className="w-[20.7px] h-[20.7px] px-[4px] py-[4px]"
                        src={logoMobileImg}
                        alt="open"
                      />
                    </div>
                    <div>
                      <div>
                        You&apos;re one of us <span className="">🤭</span>
                      </div>
                      <br />
                      <div>As next steps:</div>
                      <ol className="px-[10px] list-decimal max-w-[133.41px]">
                        <li>
                          <>
                            Sign up using &apos;Join the waitlist button&apos;
                          </>
                        </li>
                        <li>
                          <>Verify that you have spent ≥₹10K</>
                        </li>
                        <li>
                          <>
                            Rate the products that you&apos;ve bought. We use
                            this to understand your skin type and preferences
                            better
                          </>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end mt-2">
                  <div
                    className={`${
                      count >= 6 ? "block animate-slideInFromBottom" : "hidden"
                    } flex flex-row text-[12px] leading-[14.4px] tracking-[4%] pt-2 pb-2 bg-[#AEDCEE80] w-[190.41px] h-auto px-[10px] py-[5px] gap-2 rounded-l-[12px] rounded-tr-[12px]`}
                  >
                    <div className="ml-[90px] mt-[2px]">
                      <div>ok then?</div>
                    </div>
                    <div className="w-[21px] h-[21px] bg-white rounded-full border-dashed border-[1px] border-black">
                      <Image
                        className=" w-[20.7px] h-[20.7px] px-[4px] py-[4px]"
                        src={catSvg}
                        alt="open"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div
                    className={`${
                      count >= 7 ? "block animate-slideInFromBottom" : "hidden"
                    } flex flex-row text-[12px] leading-[14.4px] tracking-[4%] pt-2 pb-2 bg-[#AEDCEE] w-[190.41px] h-auto px-[10px] py-[5px] gap-2 rounded-tl-[12px] rounded-r-[12px] mt-2`}
                  >
                    <div className="w-[21px] h-[21px] bg-white rounded-full border-dashed border-[1px] border-black">
                      <Image
                        className="w-[20.7px] h-[20.7px] px-[4px] py-[4px]"
                        src={logoMobileImg}
                        alt="open"
                      />
                    </div>
                    <div className="max-w-[133.41px]">
                      <div>
                        For now, that&apos;s it. Once matching begins (post 15
                        Jul):
                      </div>
                      <br />
                      <ol className="px-[10px] list-decimal max-w-[133.41px]">
                        <li>Ask a question</li>
                        <li>Get matched</li>
                        <li>Get answers</li>
                      </ol>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end mt-2">
                  <div
                    className={`${
                      count >= 8 ? "block animate-slideInFromBottom" : "hidden"
                    } flex flex-row text-[12px] leading-[14.4px] tracking-[4%] pt-2 pb-2 bg-[#AEDCEE80] w-[190.41px] h-auto px-[10px] py-[5px] gap-2 rounded-l-[12px] rounded-tr-[12px]`}
                  >
                    <div className="ml-12 mt-[2px]">
                      <div>ooh, count me in</div>
                    </div>
                    <div className="w-[21px] h-[21px] bg-white rounded-full border-dashed border-[1px] border-black">
                      <Image
                        className=" w-[20.7px] h-[20.7px] px-[4px] py-[4px]"
                        src={catSvg}
                        alt="open"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-center mt-2">
                  <div
                    className={`${
                      count >= 9 ? "block animate-slideInFromBottom" : "hidden"
                    } flex flex-row text-[12px] leading-[14.4px] tracking-[4%] pt-2 pb-2 h-auto px-[10px] py-[5px] gap-2 rounded-l-[12px] rounded-tr-[12px]`}
                  >
                    <JoinButton>JOIN THE WAITLIST</JoinButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center bg-[#F00832] bg-cover md:w-1/2 h-[720px] md:h-screen p-8">
        <div className="flex flex-col bg-white w-[284px] h-[613px] rounded-[28px]"></div>
      </div>
    </div>
  );
}
