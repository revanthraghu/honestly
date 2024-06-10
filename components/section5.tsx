"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import logoMobileImg from "@/public/navbar/logo-mobile.svg";
import catSvg from "@/public/working/cat.gif";
import JoinButton from "./ui/join-button";
import playing from "@/public/video/playing.svg";
import paused from "@/public/video/paused.svg";

export default function Section5() {
  const targetRef = useRef<HTMLDivElement>(null);
  const [playbutton, setIsPlayButton] = useState<boolean>(false);
  var isInCenter = false;
  var isInView = false;

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
      const str = window.location.href;
      const substr = "#howitworks";
      isInView = str.indexOf(substr) !== -1;

      if (
        Math.abs(viewportCenter - elementCenter) < rect.height / 2 ||
        isInView
      ) {
        // setIsCentered(true);
        var i = 0;
        if (isInCenter === false) {
          for (let i = 0; i <= 10; i++) {
            setTimeout(() => {
              scrollByY(100);
              setCounter(i);
            }, i * 800);
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
  }, [isInCenter]); //eslint-disable-line

  const messageEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentMessageEl = messageEl.current;

    const handleScroll = (event: Event) => {
      const target = event.currentTarget as HTMLDivElement;
      target.scroll({ top: target.scrollHeight, behavior: "smooth" });
    };

    if (currentMessageEl) {
      currentMessageEl.addEventListener("DOMNodeInserted", handleScroll);
    }

    return () => {
      if (currentMessageEl) {
        currentMessageEl.removeEventListener("DOMNodeInserted", handleScroll);
      }
    };
  }, [messageEl]);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        setIsPlayButton(true);
        videoRef.current.pause();
      } else {
        setIsPlayButton(true);
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div
      className="scroll flex md:flex-row flex-col md:w-full h-[1440px] md:h-screen"
      id="howitworks"
    >
      <div className="flex justify-center items-center h-[720px] md:h-screen bg-howItWorksBg bg-cover md:w-1/2 p-8">
        <div
          className="flex md:flex-col flex-row w-[344.81px] h-[613px]  rounded-[28px] p-4 "
          style={{
            background: "rgba(255, 255, 255, 1)",
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          }}
        >
          <div className="w-[308px] mt-4 ">
            {/*  HEADING SECTION */}
            <div ref={targetRef} className="w-[300px] h-[82px] text-center">
              <span className="text-[#F00832] font-ppeditorialnew leading-[41.4px] text-4xl italic font-extrabold text-center">
                Here’s how it works
              </span>
            </div>
            {/* DIVIDER LINE */}
            <div className="w-[310px] border-black border-[1px] mt-4"></div>
            {/* CHAT SECTION */}
            <div className="flex flex-col justify w-[310px] h-[410px] mt-6 flex-grow scoll-smooth no-scrollbar overflow-scroll">
              <div
                ref={scrollableDivRef}
                className="h-[410px] overflow-auto overflow-x-hidden no-scrollbar scroll-smooth flex-grow"
              >
                <div className="flex justify-end">
                  <div
                    className={`${
                      count >= 0 ? "block animate-slideInFromBottom" : "hidden"
                    } flex flex-row  text-right justify-end items-center text-[12px] leading-[14.4px] tracking-[4%] bg-[#AEDCEE80] w-[190.41px] h-[40.7px] px-[16px] py-[14px] gap-2 rounded-l-[12px] rounded-tr-[12px]`}
                  >
                    <div className="font-normal">how does this work?</div>
                    <div className="w-[21px] h-[21px] bg-white rounded-full border-dashed border-[1px] border-black">
                      <Image
                        className="w-[20.7px] h-[20.7px] px-[4px] py-[4px]"
                        src={catSvg}
                        unoptimized
                        alt="open"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-start">
                  <div
                    className={`${
                      count >= 1 ? "block animate-slideInFromBottom" : "hidden"
                    } flex flex-row text-[12px] leading-[14.4px] tracking-[4%] bg-[#AEDCEE] w-[190.41px] h-[44px] px-[16px] py-[8px] gap-2 rounded-tl-[12px] rounded-r-[12px] mt-2`}
                  >
                    <div className="w-[21px] h-[21px] bg-white rounded-full border-dashed border-[1px] border-black">
                      <Image
                        className="w-[20.7px] h-[20.7px] px-[4px] -mt-[1px]"
                        src={logoMobileImg}
                        alt="open"
                      />
                    </div>
                    <div className="font-normal">
                      <div>Start by applying to</div>
                      <div>be a member</div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end mt-2">
                  <div
                    className={`${
                      count >= 2 ? "block animate-slideInFromBottom" : "hidden"
                    } flex flex-row text-right justify-end items-center text-[12px] leading-[14.4px] tracking-[4%] bg-[#AEDCEE80] w-[190.41px] h-[44px] px-[16px] py-[14px] gap-2 rounded-l-[12px] rounded-tr-[12px]`}
                  >
                    <div className="font-normal">
                      <div>so anyone who</div>
                      <div>applies gets in?</div>
                    </div>
                    <div className="w-[21px] h-[21px] bg-white rounded-full border-dashed border-[1px] border-black">
                      <Image
                        className="w-[20.7px] h-[20.7px] px-[4px] py-[4px]"
                        src={catSvg}
                        alt="open"
                        unoptimized
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div
                    className={`${
                      count >= 3 ? "block animate-slideInFromBottom" : "hidden"
                    } flex flex-row text-[12px] leading-[14.4px] tracking-[4%] bg-[#AEDCEE] w-[190.41px] min-h-[86px] px-[16px] py-[8px] gap-2 rounded-tl-[12px] rounded-r-[12px] mt-2`}
                  >
                    <div className="w-[21px] h-[21px] bg-white rounded-full border-dashed border-[1px] border-black">
                      <Image
                        className="w-[20.7px] h-[20.7px] px-[4px] -mt-[1px]"
                        src={logoMobileImg}
                        alt="open"
                      />
                    </div>
                    <div className="font-normal">
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
                    } flex flex-row  text-right justify-end items-center text-[12px] leading-[14.4px] tracking-[4%] bg-[#AEDCEE80] w-[190.41px] h-[58px] px-[16px] py-[14px] gap-2 rounded-l-[12px] rounded-tr-[12px]`}
                  >
                    <div className="font-normal">
                      <div>lmao i spent more</div>
                      <div>than 10K in this last</div>
                      <div>sale itself</div>
                    </div>
                    <div className="w-[21px] h-[21px] bg-white rounded-full border-dashed border-[1px] border-black">
                      <Image
                        className=" w-[20.7px] h-[20.7px] px-[4px] py-[4px]"
                        src={catSvg}
                        alt="open"
                        unoptimized
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div
                    className={`${
                      count >= 5 ? "block animate-slideInFromBottom" : "hidden"
                    } flex flex-row text-[12px] leading-[14.4px] tracking-[4%] bg-[#AEDCEE] w-[190.41px] min-h-[198px] px-[15px] py-[8px] gap-2 rounded-tl-[12px] rounded-r-[12px] mt-2`}
                  >
                    <div className="w-[21px] h-[21px] bg-white rounded-full border-dashed border-[1px] border-black">
                      <Image
                        className="w-[20.7px] h-[20.7px] px-[4px] -mt-[1px]"
                        src={logoMobileImg}
                        alt="open"
                      />
                    </div>
                    <div className="w-[133.41px] font-normal">
                      <div>
                        You&apos;re one of us <span className="">🤭</span>
                      </div>
                      <br />
                      <div>As next steps:</div>
                      <ol className="px-[10px] ml-[6px] list-decimal max-w-[133.41px]">
                        <li>
                          Sign up using &apos;Join the waitlist button&apos;
                        </li>
                        <li>Verify that you have spent ≥₹10K</li>
                        <li>
                          Rate the products that you&apos;ve bought. We use this
                          to understand your skin type and preferences better
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end mt-2">
                  <div
                    className={`${
                      count >= 6 ? "block animate-slideInFromBottom" : "hidden"
                    } flex flex-row  text-right justify-end items-center text-[12px] leading-[14.4px] tracking-[4%] bg-[#AEDCEE80] w-[190.41px] h-[37px] px-[16px] py-[14px] gap-2 rounded-l-[12px] rounded-tr-[12px]`}
                  >
                    <div className="w-[133.41px] mt-[2px] font-normal">
                      <div>ok then?</div>
                    </div>
                    <div className="w-[21px] h-[21px] bg-white rounded-full border-dashed border-[1px] border-black">
                      <Image
                        className=" w-[20.7px] h-[20.7px] px-[4px] py-[4px]"
                        src={catSvg}
                        alt="open"
                        unoptimized
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div
                    className={`${
                      count >= 7 ? "block animate-slideInFromBottom" : "hidden"
                    } flex flex-row text-[12px] leading-[14.4px] tracking-[4%] bg-[#AEDCEE] w-[190.41px] min-h-[114px] px-[16px] py-[8px] gap-2 rounded-tl-[12px] rounded-r-[12px] mt-2`}
                  >
                    <div className="w-[21px] h-[21px] bg-white rounded-full border-dashed border-[1px] border-black">
                      <Image
                        className="w-[20.7px] h-[20.7px] px-[4px] -mt-[1px]"
                        src={logoMobileImg}
                        alt="open"
                      />
                    </div>
                    <div className="w-[133.41px] font-normal">
                      <div>For now, that&apos;s it.</div>
                      <div>Once matching</div>
                      <div>begins (post 15 Jul):</div>
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
                    } flex flex-row  text-right justify-end items-center text-[12px] leading-[14.4px] tracking-[4%] bg-[#AEDCEE80] w-[190.41px] h-[37px] px-[16px] py-[14px] gap-2 rounded-l-[12px] rounded-tr-[12px]`}
                  >
                    <div className="mt-[2px] w-[133.41px] font-normal">
                      <div>ooh, count me in</div>
                    </div>
                    <div className="w-[21px] h-[21px] bg-white rounded-full border-dashed border-[1px] border-black">
                      <Image
                        className=" w-[20.7px] h-[20.7px] px-[4px] py-[4px]"
                        src={catSvg}
                        alt="open"
                        unoptimized
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-center mt-2">
                  <div
                    className={`${
                      count >= 9 ? "block animate-slideInFromBottom" : "hidden"
                    } flex flex-row text-[12px] leading-[14.4px] tracking-[4%] pt-2 pb-2 h-auto px-[16px] py-[5px] gap-2 rounded-l-[12px] rounded-tr-[12px]`}
                  >
                    <JoinButton showSpots={false}>JOIN THE WAITLIST</JoinButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center bg-[#F00832] bg-cover md:w-1/2 h-[720px] md:h-screen">
        <div>
          <video
            onClick={handlePlayPause}
            ref={videoRef}
            className="h-[613px] rounded-[28px]"
            controls={false}
            poster="/video/poster.svg"
          >
            <source
              src="https://drive.google.com/uc?id=1qWCng6SM0yL6mSj7IkXihnhLMd89hlwL"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        {playbutton && (
          <>
            {isPlaying ? (
              <div onClick={handlePlayPause} className="mt-[500px] absolute">
                <Image
                  className=" w-[42.25px] h-[42.25px]"
                  src={playing}
                  alt="open"
                />
              </div>
            ) : (
              <div onClick={handlePlayPause} className="mt-[500px] absolute">
                <Image
                  className=" w-[42.25px] h-[42.25px]"
                  src={paused}
                  alt="open"
                />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
