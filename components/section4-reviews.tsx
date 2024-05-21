import Image from "next/image";
import review1 from "@/public/reviews/1.svg";
import review2 from "@/public/reviews/2.svg";
import review3 from "@/public/reviews/3.svg";
import review4 from "@/public/reviews/4.svg";
import reviewGif1 from "@/public/reviews/gifs/1.gif";
import reviewGif2 from "@/public/reviews/gifs/2.gif";
import reviewGif3 from "@/public/reviews/gifs/3.gif";
import reviewGif4 from "@/public/reviews/gifs/4.gif";
import reviewGif5 from "@/public/reviews/gifs/5.gif";
import reviewGif6 from "@/public/reviews/gifs/6.gif";
import reviewGif7 from "@/public/reviews/gifs/7.gif";
import leafImg from "@/public/reviews/leaf.svg";
import invertedLeafImg from "@/public/reviews/inverted-leaf.svg";
import JoinButton from "./ui/join-button";

export default function ReviewSection() {
  return (
    // <div className="bg-white">
    <div className="bg-white flex flex-col justify-center items-center h-full ">
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
        <div className="max-w-[386px] flex flex-col items-center justify-center">
          <div className="flex flex-row justify-between">
            <Image src={leafImg} alt="leaf" />
            <div className="flex flex-col font-ppeditorialnew text-[20px] italic leading-[25.6px] text-center">
              <span className="font-extralight">honestly,</span>
              <span className="font-extrabold">never biased.</span>
              <span className="font-extrabold">always neutral.</span>
            </div>
            <Image src={invertedLeafImg} alt="invertedLeaf" quality={100} />
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
              <JoinButton>JOIN THE WISHLIST</JoinButton>
              <div className="text-[10px] max-w-[237px] leading-[10.5px] tracking-[5%] text-center font-semibold mt-[12px]">
                993 spots left
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2 h-[354px] w-[354px] mt-8 bg-red-600 min-[850px]:hidden">
        <div className="relative overflow-hidden flex justify-center items-center"></div>
      </div>
      <div className="md:h-[84px]" />
    </div>
  );
}

export function Collage() {
  return (
    <div className="grid grid-cols-5 min-w-[489px] h-auto ">
      <div
        className="flex justify-center items-center col-span-2 row-span-1 bg-[#E9E5DE] w-[171px] h-[100px]"
        style={{
          clipPath:
            "polygon(7px 0%, calc(100% - 7px) 0%, 100% 7px, 100% calc(100% - 7px), calc(100% - 7px) 100%, 7px 100%, 0% calc(100% - 7px), 0% 7px)",
        }}
      >
        {/* 01 */}
        <Image src={review1} alt="review1" quality={100} unoptimized />
        {/* <img src="/reviews/1.svg" alt="review1" /> */}
      </div>
      <div
        className="col-span-1 row-span-2 flex justify-center items-center bg-[#E9E5DE] -ml-[14px] p-[6px] w-[91px] h-[165px]"
        style={{
          clipPath:
            "polygon(7px 0%, calc(100% - 7px) 0%, 100% 7px, 100% calc(100% - 7px), calc(100% - 7px) 100%, 7px 100%, 0% calc(100% - 7px), 0% 7px)",
        }}
      >
        <Image
          src={reviewGif1}
          alt="reviewGif1"
          quality={100}
          width={79}
          height={153}
        />
      </div>
      <div
        className="col-span-1 row-span-2 flex justify-center items-center bg-[#E9E5DE] -ml-[10px] p-[6px] w-[99px] h-[165px]"
        style={{
          clipPath:
            "polygon(7px 0%, calc(100% - 7px) 0%, 100% 7px, 100% calc(100% - 7px), calc(100% - 7px) 100%, 7px 100%, 0% calc(100% - 7px), 0% 7px)",
        }}
      >
        <Image
          src={reviewGif2}
          alt="reviewGif2"
          quality={100}
          width={87}
          height={153}
        />
      </div>
      <div
        className="col-span-1 row-span-2 flex justify-center items-center bg-[#E9E5DE] ml-[2px] w-[100px] h-[166px]"
        style={{
          clipPath:
            "polygon(7px 0%, calc(100% - 7px) 0%, 100% 7px, 100% calc(100% - 7px), calc(100% - 7px) 100%, 7px 100%, 0% calc(100% - 7px), 0% 7px)",
        }}
      >
        <Image
          src={reviewGif3}
          alt="reviewGif3"
          quality={100}
          width={88}
          height={154}
        />
      </div>

      <div
        className="col-span-1 row-span-2 flex justify-center items-center bg-[#E9E5DE] my-[6px] w-[94px] h-[166px]"
        style={{
          clipPath:
            "polygon(7px 0%, calc(100% - 7px) 0%, 100% 7px, 100% calc(100% - 7px), calc(100% - 7px) 100%, 7px 100%, 0% calc(100% - 7px), 0% 7px)",
        }}
      >
        <Image
          src={reviewGif4}
          alt="reviewGif4"
          quality={100}
          width={82}
          height={154}
        />
      </div>
      <div
        className="col-start-2 col-end-3 row-start-3 row-end-5 flex justify-center items-center bg-[#E9E5DE] -mt-[2px] ml-[14px] w-[91px] h-[154px]"
        style={{
          clipPath:
            "polygon(7px 0%, calc(100% - 7px) 0%, 100% 7px, 100% calc(100% - 7px), calc(100% - 7px) 100%, 7px 100%, 0% calc(100% - 7px), 0% 7px)",
        }}
      >
        <Image
          src={reviewGif5}
          alt="reviewGif5"
          quality={100}
          width={79}
          height={142}
        />
      </div>
      <div
        className="col-start-3 col-end-5 row-start-3 row-end-5 flex justify-center items-center bg-[#E9E5DE] -mt-[12px] ml-[14px] w-[175px] h-[170px]"
        style={{
          clipPath:
            "polygon(7px 0%, calc(100% - 7px) 0%, 100% 7px, 100% calc(100% - 7px), calc(100% - 7px) 100%, 7px 100%, 0% calc(100% - 7px), 0% 7px)",
        }}
      >
        <Image src={review2} alt="review2" quality={100} unoptimized />
      </div>
      <div
        className="col-start-5 col-end-6 row-start-3 row-end-5 flex justify-center items-center bg-[#E9E5DE] -mt-[2px] ml-1 w-[94px] h-[160px]"
        style={{
          clipPath:
            "polygon(7px 0%, calc(100% - 7px) 0%, 100% 7px, 100% calc(100% - 7px), calc(100% - 7px) 100%, 7px 100%, 0% calc(100% - 7px), 0% 7px)",
        }}
      >
        <Image
          src={reviewGif6}
          alt="reviewGif6"
          quality={100}
          width={82}
          height={148}
        />
      </div>

      <div
        className="col-span-1 row-span-2 flex justify-center items-center bg-[#E9E5DE] w-[105px] h-[170px]"
        style={{
          clipPath:
            "polygon(7px 0%, calc(100% - 7px) 0%, 100% 7px, 100% calc(100% - 7px), calc(100% - 7px) 100%, 7px 100%, 0% calc(100% - 7px), 0% 7px)",
        }}
      >
        <Image
          src={reviewGif7}
          alt="reviewGif7"
          quality={100}
          width={93}
          height={158}
        />
      </div>

      <div
        className="col-span-2 row-span-1 flex justify-center items-center bg-[#E9E5DE] ml-[28px] w-[174px] h-[88px]"
        style={{
          clipPath:
            "polygon(7px 0%, calc(100% - 7px) 0%, 100% 7px, 100% calc(100% - 7px), calc(100% - 7px) 100%, 7px 100%, 0% calc(100% - 7px), 0% 7px)",
        }}
      >
        <Image src={review3} alt="review3" quality={100} unoptimized />
      </div>

      <div
        className="col-span-2 row-span-1 flex justify-center items-center bg-[#E9E5DE] mt-3 ml-6 w-[173px] h-[77px]"
        style={{
          clipPath:
            "polygon(7px 0%, calc(100% - 7px) 0%, 100% 7px, 100% calc(100% - 7px), calc(100% - 7px) 100%, 7px 100%, 0% calc(100% - 7px), 0% 7px)",
        }}
      >
        <Image src={review4} alt="review4" quality={100} unoptimized />
      </div>
    </div>
  );
}
