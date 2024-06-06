"use client";
import { useState, useEffect, useRef } from "react";
import { useScroll } from "framer-motion";
import Image from "next/image";
import review1 from "@/public/reviews/1.svg";
import review2 from "@/public/reviews/2.svg";
import review3 from "@/public/reviews/3.svg";
import review4 from "@/public/reviews/4.svg";
import reviewGif1 from "@/public/reviews/gifs/1.webp";
import reviewGif2 from "@/public/reviews/gifs/2.webp";
import reviewGif3 from "@/public/reviews/gifs/3.webp";
import reviewGif4 from "@/public/reviews/gifs/4.webp";
import reviewGif5 from "@/public/reviews/gifs/5.webp";
import reviewGif6 from "@/public/reviews/gifs/6.webp";
import reviewGif7 from "@/public/reviews/gifs/7.webp";
import logoMark from "@/public/reviews/logoMark.svg";
import promise from "@/public/reviews/promise.svg";
import invertedLeafImg from "@/public/reviews/inverted-leaf.svg";
import leafMobileImg from "@/public/reviews/leaf-mobile.svg";
import invertedLeafMobileImg from "@/public/reviews/inverted-leaf-mobile.svg";
import JoinButton from "./ui/join-button";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function ReviewSection() {
  const contents = [
    {
      title: "Real people only",
      description: "You can report any user who seems to be a brand rep",
    },
    {
      title: "AI powered matching engine",
      description: "We’ll find you the best match",
    },
    {
      title: "Match with 5-6 folks at a time",
      description:
        "Too many cooks spoil the broth (aka no more being overwhelmed with too many reccos)",
    },
  ];
  const container = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 1", "start 0"],
  });

  // scrollYProgress.on("change", (value) => console.log("ScrollY", value));

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      if (value < 0.33) {
        setActiveIndex(0);
      } else if (value < 0.66) {
        setActiveIndex(1);
      } else {
        setActiveIndex(2);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div className="bg-white flex flex-col justify-center items-center h-full">
      <div className="h-[50px] md:h-[96px]" />
      <div className="flex flex-col font-normal text-[36px] leading-[41.4px] px-[34px] md:px-0 md:max-w-[793px] font-ppeditorialnew text-center md:text-[52px] md:leading-[59.8px]">
        <span>
          Get reviews from people <span className="italic">like you</span>,{" "}
        </span>
        <span>who have actually used these products</span>
      </div>
      <div className="hidden flex-row min-[850px]:flex md:mt-[67px] lg:mt-[84px] px-8">
        <Collage />
        <div className="md:w-[19px] lg:w-[109px]" />
        <div className="max-w-[386px] flex flex-col">
          <div className="flex flex-row justify-between">
            <div className="bg-[#AEDCEE] w-[120px] h-[120px] rounded-full flex justify-center items-center ml-[12px]">
              <div className="absolute animate-spin ">
                <Image
                  src={promise}
                  alt="promise"
                  quality={100}
                  width={90}
                  height={90}
                />
              </div>
              <div className="bg-white w-[54px] h-[54px] rounded-full"></div>
              <div className="absolute ">
                <Image
                  src={logoMark}
                  alt="logoMark"
                  quality={100}
                  width={28}
                  height={28}
                />
              </div>
            </div>
          </div>
          <div className="ml-[14px] text-[14px] leading-[18.2px] tracking-[4%]">
            <div className="flex flex-col mt-[44px]">
              <span className="font-semibold">Real people only</span>
              <span>You can report any user who seems to be a brand rep</span>
            </div>
            <div className="flex flex-col mt-[44px] ">
              <span className="font-semibold">AI powered matching engine</span>
              <span>We’ll find you the best match</span>
            </div>
            <div className="flex flex-col mt-[44px] ">
              <span className="font-semibold">
                Match with 5-6 folks at a time
              </span>
              <span>
                Too many cooks spoil the broth (aka no more being overwhelmed
                with too many reccos)
              </span>
            </div>
            <div className="flex flex-col mt-[44px]">
              <JoinButton>JOIN THE WAITLIST</JoinButton>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[354px] mt-8 min-[850px]:hidden">
        {/* <ReviewSlideShow /> */}
        <Slideshow />
      </div>
      <div className="w-screen mt-8 min-[850px]:hidden">
        <div className=" flex justify-center ">
          <div className="flex flex-row gap-6 w-[320px]">
            <div className="flex-shrink-0 flex flex-row items-center h-min max-w-[200px]">
              <div className="bg-[#AEDCEE] w-[120px] h-[120px] rounded-full flex justify-center items-center">
                <div className="absolute animate-spin ">
                  <Image
                    src={promise}
                    alt="promise"
                    quality={100}
                    width={90}
                    height={90}
                  />
                </div>
                <div className="bg-white w-[54px] h-[54px] rounded-full"></div>
                <div className="absolute ">
                  <Image
                    src={logoMark}
                    alt="logoMark"
                    quality={100}
                    width={28}
                    height={28}
                  />
                </div>
              </div>
            </div>

            <div
              className="flex flex-col py-[13px] max-w-[172px] h-[128px] justify-center"
              ref={container}
            >
              {contents.map((content, index) => (
                <div
                  key={index}
                  className="absolute flex flex-col py-[13px] max-w-[172px] h-[128px] justify-center"
                  style={{
                    transition: "opacity 1s ease-in-out",
                    opacity: activeIndex === index ? 1 : 0,
                  }}
                >
                  <span className="font-semibold text-[13px] tracking-[4%] leading-[16.9px] whitespace-pre-wrap">
                    {content.title}
                  </span>
                  <span className="font-normal text-[13px] tracking-[4%] leading-[16.9px] whitespace-pre-wrap">
                    {content.description}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-12">
          <JoinButton>JOIN THE WAITLIST</JoinButton>
        </div>
      </div>

      <div className="h-[54px] md:h-[84px]" />
    </div>
  );
}

export function Collage() {
  return (
    <div className="grid grid-cols-5 min-w-[489px] h-auto ">
      <div
        className="flex justify-center items-center col-span-2 row-span-1 bg-[#E9E5DE] w-[171px] h-[100px]"
        style={hexagonStyle}
      >
        <Image src={review1} alt="review1" quality={100} unoptimized />
      </div>
      <div
        className="col-span-1 row-span-2 flex justify-center items-center bg-[#E9E5DE] -ml-[14px] p-[6px] w-[91px] h-[165px]"
        style={hexagonStyle}
      >
        <Image
          src={reviewGif1}
          alt="reviewGif1"
          quality={100}
          width={79}
          height={153}
          unoptimized
        />
      </div>
      <div
        className="col-span-1 row-span-2 flex justify-center items-center bg-[#E9E5DE] -ml-[10px] p-[6px] w-[99px] h-[165px]"
        style={hexagonStyle}
      >
        <Image
          src={reviewGif2}
          alt="reviewGif2"
          quality={100}
          width={87}
          height={153}
          unoptimized
        />
      </div>
      <div
        className="col-span-1 row-span-2 flex justify-center items-center bg-[#E9E5DE] ml-[2px] w-[100px] h-[166px]"
        style={hexagonStyle}
      >
        <Image
          src={reviewGif3}
          alt="reviewGif3"
          quality={100}
          width={88}
          height={154}
          unoptimized
        />
      </div>

      <div
        className="col-span-1 row-span-2 flex justify-center items-center bg-[#E9E5DE] my-[6px] w-[94px] h-[166px]"
        style={hexagonStyle}
      >
        <Image
          src={reviewGif4}
          alt="reviewGif4"
          quality={100}
          width={82}
          height={154}
          unoptimized
        />
      </div>
      <div
        className="col-start-2 col-end-3 row-start-3 row-end-5 flex justify-center items-center bg-[#E9E5DE] -mt-[2px] ml-[14px] w-[91px] h-[154px]"
        style={hexagonStyle}
      >
        <Image
          src={reviewGif5}
          alt="reviewGif5"
          quality={100}
          width={79}
          height={142}
          unoptimized
        />
      </div>
      <div
        className="col-start-3 col-end-5 row-start-3 row-end-5 flex justify-center items-center bg-[#E9E5DE] -mt-[12px] ml-[14px] w-[175px] h-[170px]"
        style={hexagonStyle}
      >
        <Image src={review2} alt="review2" quality={100} unoptimized />
      </div>
      <div
        className="col-start-5 col-end-6 row-start-3 row-end-5 flex justify-center items-center bg-[#E9E5DE] -mt-[2px] ml-1 w-[94px] h-[160px]"
        style={hexagonStyle}
      >
        <Image
          src={reviewGif6}
          alt="reviewGif6"
          quality={100}
          width={82}
          height={148}
          unoptimized
        />
      </div>

      <div
        className="col-span-1 row-span-2 flex justify-center items-center bg-[#E9E5DE] w-[105px] h-[170px]"
        style={hexagonStyle}
      >
        <Image
          src={reviewGif7}
          alt="reviewGif7"
          quality={100}
          width={93}
          height={158}
          unoptimized
        />
      </div>

      <div
        className="col-span-2 row-span-1 flex justify-center items-center bg-[#E9E5DE] ml-[28px] w-[174px] h-[88px]"
        style={hexagonStyle}
      >
        <Image src={review3} alt="review3" quality={100} unoptimized />
      </div>

      <div
        className="col-span-2 row-span-1 flex justify-center items-center bg-[#E9E5DE] mt-3 ml-6 w-[173px] h-[77px]"
        style={hexagonStyle}
      >
        <Image src={review4} alt="review4" quality={100} unoptimized />
      </div>
    </div>
  );
}

// export function ReviewSlideShow() {
//   return (
//     <div className="relative w-screen flex items-center overflow-x-auto no-scrollbar">
//       <div className="whitespace-nowrap flex flex-row items-center animate-reviewMarquee">
//         <div
//           className="relative flex justify-center  mx-2 items-center bg-[#E9E5DE] min-w-[295px] min-h-[285px]"
//           style={hexagonStyle}
//         >
//           <Image
//             src={review2}
//             alt="review2"
//             quality={100}
//             width={295}
//             height={285}
//             unoptimized
//           />
//         </div>

//         <div
//           className="col-span-1 row-span-2 flex  mx-2 justify-center items-center bg-[#E9E5DE] my-[6px] min-w-[184px] min-h-[328px]"
//           style={hexagonStyle}
//         >
//           <Image
//             src={reviewGif4}
//             alt="reviewGif4"
//             quality={100}
//             width={168}
//             height={309}
//           />
//         </div>

//         <div
//           className="flex justify-center items-center  mx-2 bg-[#E9E5DE] min-w-[205px] min-h-[322px]"
//           style={hexagonStyle}
//         >
//           <Image
//             src={reviewGif7}
//             alt="reviewGif7"
//             quality={100}
//             width={189}
//             height={322}
//           />
//         </div>

//         <div className="flex min-w-[294px] min-h-[322px]  mx-2 flex-col gap-2 justify-center items-center ">
//           <Image
//             src={review1}
//             alt="review1"
//             quality={100}
//             width={286}
//             height={158}
//             unoptimized
//             // className="bg-[#E9E5DE]"
//             style={hexagonStyle}
//           />
//           <Image
//             src={review3}
//             alt="review3"
//             quality={100}
//             width={294}
//             height={138}
//             unoptimized
//             style={hexagonStyle}
//           />
//         </div>

//         <div
//           className="flex justify-center items-center  mx-2 min-w-[178px] bg-[#E9E5DE] min-h-[301px]"
//           style={hexagonStyle}
//         >
//           <Image
//             src={reviewGif5}
//             alt="reviewGif5"
//             quality={100}
//             width={160}
//             height={287}
//           />
//         </div>

//         <div
//           className="flex justify-center items-center  mx-2 bg-[#E9E5DE]  min-w-[185px] min-h-[318px]"
//           style={hexagonStyle}
//         >
//           <Image
//             src={reviewGif6}
//             alt="reviewGif6"
//             quality={100}
//             width={169}
//             height={300}
//           />
//         </div>

//         <div
//           className="flex justify-center items-center  mx-2 bg-[#E9E5DE] min-w-[178px] min-h-[325px]"
//           style={hexagonStyle}
//         >
//           <Image
//             src={reviewGif1}
//             alt="reviewGif1"
//             quality={100}
//             width={162}
//             height={309}
//           />
//         </div>

//         <div
//           className="flex justify-center items-center  mx-2 bg-[#E9E5DE] min-w-[193px] min-h-[330px]"
//           style={hexagonStyle}
//         >
//           <Image
//             src={reviewGif3}
//             alt="reviewGif3"
//             quality={100}
//             width={177}
//             height={312}
//           />
//         </div>

//         <div
//           className="flex justify-center items-center  mx-2 bg-[#E9E5DE] min-w-[190px] min-h-[328px]"
//           style={hexagonStyle}
//         >
//           <Image
//             src={reviewGif2}
//             alt="reviewGif2"
//             quality={100}
//             width={174}
//             height={309}
//           />
//         </div>
//       </div>
//       <div className="absolute whitespace-nowrap flex items-center flex-row animate-reviewMarquee2">
//         <div
//           className="relative flex justify-center  mx-2 items-center bg-[#E9E5DE] min-w-[295px] min-h-[285px]"
//           style={hexagonStyle}
//         >
//           <Image
//             src={review2}
//             alt="review2"
//             quality={100}
//             width={295}
//             height={285}
//             unoptimized
//           />
//         </div>

//         <div
//           className="col-span-1 row-span-2 flex  mx-2 justify-center items-center bg-[#E9E5DE] my-[6px] min-w-[184px] min-h-[328px]"
//           style={hexagonStyle}
//         >
//           <Image
//             src={reviewGif4}
//             alt="reviewGif4"
//             quality={100}
//             width={168}
//             height={309}
//           />
//         </div>

//         <div
//           className="flex justify-center items-center  mx-2 bg-[#E9E5DE] min-w-[205px] min-h-[322px]"
//           style={hexagonStyle}
//         >
//           <Image
//             src={reviewGif7}
//             alt="reviewGif7"
//             quality={100}
//             width={189}
//             height={322}
//           />
//         </div>

//         <div className="flex min-w-[294px] min-h-[322px]  mx-2 flex-col gap-2 justify-center items-center ">
//           <Image
//             src={review1}
//             alt="review1"
//             quality={100}
//             width={286}
//             height={158}
//             unoptimized
//             // className="bg-[#E9E5DE]"
//             style={hexagonStyle}
//           />
//           <Image
//             src={review3}
//             alt="review3"
//             quality={100}
//             width={294}
//             height={138}
//             unoptimized
//             style={hexagonStyle}
//           />
//         </div>

//         <div
//           className="flex justify-center items-center  mx-2 min-w-[178px] bg-[#E9E5DE] min-h-[301px]"
//           style={hexagonStyle}
//         >
//           <Image
//             src={reviewGif5}
//             alt="reviewGif5"
//             quality={100}
//             width={160}
//             height={287}
//           />
//         </div>

//         <div
//           className="flex justify-center items-center  mx-2 bg-[#E9E5DE]  min-w-[185px] min-h-[318px]"
//           style={hexagonStyle}
//         >
//           <Image
//             src={reviewGif6}
//             alt="reviewGif6"
//             quality={100}
//             width={169}
//             height={300}
//           />
//         </div>

//         <div
//           className="flex justify-center items-center  mx-2 bg-[#E9E5DE] min-w-[178px] min-h-[325px]"
//           style={hexagonStyle}
//         >
//           <Image
//             src={reviewGif1}
//             alt="reviewGif1"
//             quality={100}
//             width={162}
//             height={309}
//           />
//         </div>

//         <div
//           className="flex justify-center items-center  mx-2 bg-[#E9E5DE] min-w-[193px] min-h-[330px]"
//           style={hexagonStyle}
//         >
//           <Image
//             src={reviewGif3}
//             alt="reviewGif3"
//             quality={100}
//             width={177}
//             height={312}
//           />
//         </div>

//         <div
//           className="flex justify-center items-center  mx-2 bg-[#E9E5DE] min-w-[190px] min-h-[328px]"
//           style={hexagonStyle}
//         >
//           <Image
//             src={reviewGif2}
//             alt="reviewGif2"
//             quality={100}
//             width={174}
//             height={309}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

const hexagonStyle = {
  clipPath:
    "polygon(7px 0%, calc(100% - 7px) 0%, 100% 7px, 100% calc(100% - 7px), calc(100% - 7px) 100%, 7px 100%, 0% calc(100% - 7px), 0% 7px)",
};

export function Slideshow() {
  const plugin = useRef(Autoplay({ delay: 2500, stopOnInteraction: false }));

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-screen"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="-ml-1">
        <CarouselItem>
          <div
            className="flex justify-center mx-2 items-center bg-[#E9E5DE] min-w-[295px] min-h-[285px]"
            style={hexagonStyle}
          >
            <Image
              src={review2}
              alt="review2"
              quality={100}
              width={295}
              height={285}
              unoptimized
            />
          </div>
        </CarouselItem>

        <CarouselItem>
          <div
            className=" flex mx-2 justify-center items-center bg-[#E9E5DE] my-[6px] min-w-[184px] min-h-[328px]"
            style={hexagonStyle}
          >
            <Image
              src={reviewGif4}
              alt="reviewGif4"
              quality={100}
              width={168}
              height={309}
            />
          </div>
        </CarouselItem>

        <CarouselItem>
          <div
            className="flex justify-center items-center  mx-2 bg-[#E9E5DE] min-w-[205px] min-h-[322px]"
            style={hexagonStyle}
          >
            <Image
              src={reviewGif7}
              alt="reviewGif7"
              quality={100}
              width={189}
              height={322}
            />
          </div>
        </CarouselItem>

        <CarouselItem>
          <div className="flex min-w-[294px] min-h-[322px]  mx-2 flex-col gap-2 justify-center items-center ">
            <Image
              src={review1}
              alt="review1"
              quality={100}
              width={286}
              height={158}
              unoptimized
              // className="bg-[#E9E5DE]"
              style={hexagonStyle}
            />
            <Image
              src={review3}
              alt="review3"
              quality={100}
              width={294}
              height={138}
              unoptimized
              style={hexagonStyle}
            />
          </div>
        </CarouselItem>

        <CarouselItem>
          <div
            className="flex justify-center items-center  mx-2 min-w-[178px] bg-[#E9E5DE] min-h-[301px]"
            style={hexagonStyle}
          >
            <Image
              src={reviewGif5}
              alt="reviewGif5"
              quality={100}
              width={160}
              height={287}
            />
          </div>
        </CarouselItem>

        <CarouselItem>
          <div
            className="flex justify-center items-center  mx-2 bg-[#E9E5DE]  min-w-[185px] min-h-[318px]"
            style={hexagonStyle}
          >
            <Image
              src={reviewGif6}
              alt="reviewGif6"
              quality={100}
              width={169}
              height={300}
            />
          </div>
        </CarouselItem>

        <CarouselItem>
          <div
            className="flex justify-center items-center  mx-2 bg-[#E9E5DE] min-w-[178px] min-h-[325px]"
            style={hexagonStyle}
          >
            <Image
              src={reviewGif1}
              alt="reviewGif1"
              quality={100}
              width={162}
              height={309}
            />
          </div>
        </CarouselItem>

        <CarouselItem>
          <div
            className="flex justify-center items-center  mx-2 bg-[#E9E5DE] min-w-[193px] min-h-[330px]"
            style={hexagonStyle}
          >
            <Image
              src={reviewGif3}
              alt="reviewGif3"
              quality={100}
              width={177}
              height={312}
            />
          </div>
        </CarouselItem>

        <CarouselItem>
          <div
            className="flex justify-center items-center  mx-2 bg-[#E9E5DE] min-w-[190px] min-h-[328px]"
            style={hexagonStyle}
          >
            <Image
              src={reviewGif2}
              alt="reviewGif2"
              quality={100}
              width={174}
              height={309}
            />
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
