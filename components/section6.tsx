import Image from "next/image";
import line from "@/public/icons/line.svg";
import vector from "@/public/icons/vector.svg";
import arrowLeftSvg from "@/public/icons/arrow-left.svg";
import arrowRightSvg from "@/public/icons/arrow-right.svg";
import messageIcon from "@/public/icons/message-icon.svg";
import { useState, useEffect } from "react";
import JoinButton from "./ui/join-button";

const Section6 = () => {
  const [isSmallTabletOrMobile, setIsSmallTabletOrMobile] =
    useState<boolean>(false);
  const [isModolOn, setIsModalOn] = useState<boolean>(false);
  const [socialMediaIndex, setSocialMediaIndex] = useState<number>(0);

  const SocialMediaNames = ["Reddit", "Instagram", "Youtube", "my dermat"];

  const SocialAnswers = [
    "Then you know how cool this is! Imagine the same quality, but a. your question doesn’t get removed by automod, and b. it gets answers from people similar to you",
    "While Instagram is a great place to discover new products, you’d be better off getting reviews from 4-5 people who are not only similar to you but also use these products in daily life.",
    "While Youtube is a great place to discover new products, you’d be better off getting reviews from 4-5 people who are not only similar to you but also use these products in daily life.",
    "This is ideal, especially if you have any serious conditions. Join the community for complementary products or makeup recs.",
  ];

  const handleModalOpen = () => {
    setIsModalOn(!isModolOn);
  };

  const handleReddit = () => {
    setIsModalOn(false);
    setSocialMediaIndex(0);
  };

  const handleInstagram = () => {
    setIsModalOn(false);
    setSocialMediaIndex(1);
  };

  const handleYoutube = () => {
    setIsModalOn(false);
    setSocialMediaIndex(2);
  };

  const handleDermat = () => {
    setIsModalOn(false);
    setSocialMediaIndex(3);
  };

  useEffect(() => {
    function handleResize() {
      setIsSmallTabletOrMobile(window.innerWidth < 992);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setIsSmallTabletOrMobile]);

  const content = [
    {
      question: "Why do I have to share my order history to sign up?",
      answer:
        "We are currently only open to those who’ve bought ≥₹10K worth of products in the last 12 months to ensure we match people with those who have actually tried them.",
    },
    {
      question: "What kind of questions can I ask?",
      answer: `You can ask for product reviews, e.g., "Is Neutrogena Hydrating Facial Moisturiser good?" or product recommendations, e.g., "Any good sunscreen for oily skin in India?”`,
    },
    {
      question:
        "How will you ensure brands or influencers are not on this platform?",
      answer:
        "We rely on feedback from you as much as on pattern recognition models. If someone is aggressively or subtly promoting a brand please let us know.",
    },
    {
      question: "I am a beginner. When will you open up for me?",
      answer: "Follow us on Instagram to stay updated.",
    },
    {
      question: `I already get my beauty advice from ${SocialMediaNames[socialMediaIndex]}`,
      answer: `${SocialAnswers[socialMediaIndex]}`,
    },
    {
      question: "I only buy from select brands. I don’t need this.",
      answer:
        "That’s great! You should stick to what works for you. But there’s no brand out there who makes the best of everything. Think of us when you’re exploring next.",
    },
    {
      question: "Pricing?",
      answer: "Our platform is free to use for now.",
    },
    {
      question: "Wait, so how do you make money?",
      answer: "At the moment, we don’t. At scale, like Spotify.",
    },
    {
      question: "I have reached the end of this landing page.",
      answer:
        "Wow! Hi! Join now and ask us for your free gift once you’re in. Valid only for the first 100 members.",
    },
  ];

  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(2);
  const [third, setThird] = useState(4);

  const [current, setCurrent] = useState(0);

  const nextMobileButton = () => {
    if (current == 8) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  const prevMobileButton = () => {
    if (current == 0) {
      setCurrent(8);
    } else {
      setCurrent(current - 1);
    }
  };

  const nextButton = () => {
    if (first == 8) {
      setFirst(0);
      setSecond(second + 2);
      setThird(third + 2);
    } else if (second == 8) {
      setSecond(0);
      setFirst(first + 2);
      setThird(third + 2);
    } else if (third == 8) {
      setThird(0);
      setFirst(first + 2);
      setSecond(second + 2);
    } else {
      setFirst(first + 2);
      setSecond(second + 2);
      setThird(third + 2);
    }
  };

  const prevButton = () => {
    if (first == 0) {
      setFirst(8);
      setSecond(second - 2);
      setThird(third - 2);
    } else if (second == 0) {
      setSecond(8);
      setFirst(first - 2);
      setThird(third - 2);
    } else if (third == 0) {
      setThird(8);
      setFirst(first - 2);
      setSecond(second - 2);
    } else {
      setFirst(first - 2);
      setSecond(second - 2);
      setThird(third - 2);
    }
  };

  if (isSmallTabletOrMobile) {
    return (
      <>
        <div className="flex flex-col items-center md:mt-[68px] mx-[20px] mt-[720px]">
          <div className="font-normal font-ppeditorialnew text-[36px] leading-[41.4px]">
            <span className="flex flex-col justify-center items-center">
              <span>We&apos;re often</span>
              <span>asked </span>
            </span>
          </div>
          <div className="flex flex-row justify-between mt-8 md:mt-16">
            <div>
              <div className="flex items-center">
                <div>
                  <Image
                    className="w-[15px] h-[29px] cursor-pointer mr-[30px] md:mr-8 mt-32 md:mt-44"
                    src={arrowLeftSvg}
                    alt="left"
                    onClick={prevMobileButton}
                  />
                </div>
              </div>
            </div>
            <div
              className={`flex flex-col bg-white w-[284px] h-[265px] md:w-[350px] md:h-[350px] rounded-[28px] px-[24px] py-[20px] `}
            >
              <div className="flex flex-col items-center overflow-auto no-scrollbar">
                <div className="w-[26px] h-[25px]">
                  <Image
                    className="w-[26px] h-[25px]"
                    src={messageIcon}
                    alt="messageicon"
                  />
                  <div className="text-white -mt-[18px] flex justify-center items-center font-ppmori text-[10px] leading-[10.5px]">
                    {current + 1}
                  </div>
                </div>
                <div className="w-[233px] h-[182px] overflow-y-auto mt-4 px-2">
                  {current + 1 == 5 ? (
                    <>
                      <div
                        className="mt-4 font-ppmori font-semibold text-[14px] leading-[14.7px] cursor-pointer"
                        onClick={handleModalOpen}
                      >
                        <span>
                          {content[current].question}
                          <Image
                            className="w-[9px] h-[4.5px] inline-block ml-2"
                            src={vector}
                            alt="vector"
                          />
                        </span>
                      </div>
                      {isModolOn ? (
                        <>
                          <div
                            className="flex flex-col mt-2 w-[216px] h-[105px] rounded-[28px] drop-shadow-[0_0px_6px_rgba(0,0,0,0.25)] border-[#AEDCEE] border-[0.5px]"
                            style={{
                              background: "rgba(255, 255, 255, 0.6)",
                            }}
                          >
                            <div className="flex flex-row h-1/2 pt-2 pl-2 pr-2">
                              <div
                                className="flex justify-center items-center w-[103px] h-[45px] font-semibold font-ppmori text-[14px] leading-[13.65px] tracking-[4%] text-[#000000] cursor-pointer"
                                onClick={handleReddit}
                              >
                                <span>Reddit</span>
                              </div>
                              <div
                                className="flex justify-center items-center  border-[#AEDCEE] border-[0.5px] border-r-0 border-t-0 border-b-0 w-[103px] h-[45px] font-semibold font-ppmori text-[14px] leading-[13.65px] tracking-[4%] text-[#000000] cursor-pointer"
                                onClick={handleInstagram}
                              >
                                <span>Instagram</span>
                              </div>
                            </div>
                            <div className="flex flex-row h-1/2 pl-2 pr-2">
                              <div
                                className="flex justify-center items-center border-[#AEDCEE] border-[0.5px] border-r-0 border-b-0  border-l-0 w-[103px] h-[45px] font-semibold font-ppmori text-[14px] leading-[13.65px] tracking-[4%] text-[#000000] cursor-pointer"
                                onClick={handleYoutube}
                              >
                                <span>Youtube</span>
                              </div>
                              <div
                                className="flex justify-center items-center  border-[#AEDCEE] border-[0.5px] border-r-0 border-b-0  w-[103px] h-[45px] font-semibold font-ppmori text-[14px] leading-[13.65px] tracking-[4%] text-[#000000] cursor-pointer"
                                onClick={handleDermat}
                              >
                                <span>my dermat</span>
                              </div>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="mt-2 font-ppmori font-normal text-[14px] leading-[14.7px]">
                            {content[current].answer}
                          </div>
                        </>
                      )}
                    </>
                  ) : (
                    <>
                      <div className="mt-4 font-ppmori font-semibold text-[14px] leading-[14.7px]">
                        {content[current].question}
                      </div>
                      <div className="mt-2 font-ppmori font-normal text-[14px] leading-[14.7px]">
                        {content[current].answer}
                      </div>
                    </>
                  )}
                </div>

                {/*  Carousel Dots */}
                <div className="flex flex-row gap-1 justify-center mt-2">
                  <div
                    className={`w-[6px] h-[6px] rounded-full ${
                      current == 0 ? "bg-black" : "bg-[#AEDCEE]"
                    } `}
                  ></div>

                  <div
                    className={`w-[6px] h-[6px] rounded-full ${
                      current == 1 ? "bg-black" : "bg-[#AEDCEE]"
                    }`}
                  ></div>

                  <div
                    className={`w-[6px] h-[6px] rounded-full ${
                      current == 2 ? "bg-black" : "bg-[#AEDCEE]"
                    }`}
                  ></div>

                  <div
                    className={`w-[6px] h-[6px] rounded-full ${
                      current == 3 ? "bg-black" : "bg-[#AEDCEE]"
                    }`}
                  ></div>

                  <div
                    className={`w-[6px] h-[6px] rounded-full ${
                      current == 4 ? "bg-black" : "bg-[#AEDCEE]"
                    }`}
                  ></div>

                  <div
                    className={`w-[6px] h-[6px] rounded-full ${
                      current == 5 ? "bg-black" : "bg-[#AEDCEE]"
                    }`}
                  ></div>

                  <div
                    className={`w-[6px] h-[6px] rounded-full ${
                      current == 6 ? "bg-black" : "bg-[#AEDCEE]"
                    }`}
                  ></div>

                  <div
                    className={`w-[6px] h-[6px] rounded-full ${
                      current == 7 ? "bg-black" : "bg-[#AEDCEE]"
                    }`}
                  ></div>

                  <div
                    className={`w-[6px] h-[6px] rounded-full ${
                      current == 8 ? "bg-black" : "bg-[#AEDCEE]"
                    }`}
                  ></div>

                  <div
                    className={`w-[6px] h-[6px] rounded-full ${
                      current == 9 ? "bg-black" : "bg-[#AEDCEE]"
                    }`}
                  ></div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center">
                <div>
                  <Image
                    className="w-[15px] h-[29px] cursor-pointer ml-4 md:ml-8 mr-[1rem] mt-32 md:mt-44"
                    src={arrowRightSvg}
                    alt="right"
                    onClick={nextMobileButton}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-24">
            <JoinButton>JOIN THE WAITLIST</JoinButton>
            {/* <div className="text-[10px] leading-[10.5px] tracking-[5%] font-semibold text-center mt-[12px]">
              993 spots left
            </div> */}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="flex flex-col items-center pt-[68px] mx-[20px]" id="faqs">
        <div className="font-normal font-ppeditorialnew text-[36px] leading-[41.4px]">
          <span className="hidden md:block">We&apos;re often asked </span>
          <span className="flex flex-col justify-center items-center md:hidden">
            <span>We&apos;re often</span>
            <span>asked </span>
          </span>
        </div>
        <div className="flex flex-row">
          <div className="flex items-center">
            <div>
              <Image
                className="w-[15px] h-[29px] cursor-pointer mr-12 mt-8"
                src={arrowLeftSvg}
                alt="left"
                onClick={prevButton}
              />
            </div>
          </div>
          <div className="w-[918px] flex flex-row justify-between h-[554px] mt-10">
            {/* LEFT */}
            <div className="flex flex-col gap-8">
              <div
                className={`flex flex-col bg-white w-[284px] h-[265px] rounded-[28px] px-[24px]`}
              >
                <div className="flex flex-col w-[233px] h-[201px] overflow-auto no-scrollbar mt-12">
                  <div className="w-[26px] h-[25px]">
                    <Image
                      className="w-[26px] h-[25px]"
                      src={messageIcon}
                      alt="messageicon"
                    />
                    <div className="text-white -mt-[18px] flex justify-center items-center font-ppmori text-[10px] leading-[10.5px]">
                      {first + 1}
                    </div>
                  </div>
                  {first + 1 == 5 ? (
                    <>
                      <div
                        className="mt-4 font-ppmori font-semibold text-[14px] leading-[14.7px] cursor-pointer"
                        onClick={handleModalOpen}
                      >
                        <span>
                          {content[first].question}
                          <Image
                            className="w-[9px] h-[4.5px] inline-block ml-2"
                            src={vector}
                            alt="vector"
                          />
                        </span>
                      </div>
                      {isModolOn ? (
                        <>
                          <div
                            className="flex flex-col mt-2 ml-2 w-[216px] h-[105px] rounded-[28px] drop-shadow-[0_0px_6px_rgba(0,0,0,0.25)] border-[#AEDCEE] border-[0.5px] "
                            style={{
                              background: "rgba(255, 255, 255, 0.6)",
                            }}
                          >
                            <div className="flex flex-row h-1/2 pt-2 pl-2 pr-2">
                              <div
                                className="flex justify-center items-center w-[103px] h-[45px] font-semibold font-ppmori text-[14px] leading-[13.65px] tracking-[4%] text-[#000000] cursor-pointer"
                                onClick={handleReddit}
                              >
                                <span>Reddit</span>
                              </div>
                              <div
                                className="flex justify-center items-center  border-[#AEDCEE] border-[0.5px] border-r-0 border-t-0 border-b-0 w-[103px] h-[45px] font-semibold font-ppmori text-[14px] leading-[13.65px] tracking-[4%] text-[#000000] cursor-pointer"
                                onClick={handleInstagram}
                              >
                                <span>Instagram</span>
                              </div>
                            </div>
                            <div className="flex flex-row h-1/2 pl-2 pr-2">
                              <div
                                className="flex justify-center items-center border-[#AEDCEE] border-[0.5px] border-r-0 border-b-0  border-l-0 w-[103px] h-[45px] font-semibold font-ppmori text-[14px] leading-[13.65px] tracking-[4%] text-[#000000] cursor-pointer"
                                onClick={handleYoutube}
                              >
                                <span>Youtube</span>
                              </div>
                              <div
                                className="flex justify-center items-center  border-[#AEDCEE] border-[0.5px] border-r-0 border-b-0  w-[103px] h-[45px] font-semibold font-ppmori text-[14px] leading-[13.65px] tracking-[4%] text-[#000000] cursor-pointer"
                                onClick={handleDermat}
                              >
                                <span>my dermat</span>
                              </div>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="mt-2 font-ppmori font-normal text-[14px] leading-[14.7px]">
                            {content[first].answer}
                          </div>
                        </>
                      )}
                    </>
                  ) : (
                    <>
                      <div className="font-ppmori font-semibold text-[14px] leading-[14.7px] mt-4">
                        {content[first].question}
                      </div>
                      <div className="font-ppmori font-normal text-[14px] leading-[14.7px] mt-4">
                        {content[first].answer}
                      </div>
                    </>
                  )}
                </div>
              </div>

              {first + 2 != 10 && (
                <>
                  <div
                    className={`flex flex-col bg-white w-[284px] h-[265px] rounded-[28px] px-[24px]`}
                  >
                    <div className="flex flex-col w-[233px] h-[201px] overflow-auto no-scrollbar mt-12">
                      <div className="w-[26px] h-[25px]">
                        <Image
                          className="w-[26px] h-[25px]"
                          src={messageIcon}
                          alt="messageicon"
                        />
                        <div className="text-white -mt-[18px] flex justify-center items-center font-ppmori text-[10px] leading-[10.5px]">
                          {first + 2}
                        </div>
                      </div>
                      <div className="font-ppmori font-semibold text-[14px] leading-[14.7px] mt-4">
                        {content[first + 1].question}
                      </div>
                      <div className="font-ppmori font-normal text-[14px] leading-[14.7px] mt-4">
                        {content[first + 1].answer}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
            {/* MIDDLE */}
            <div className="flex flex-col gap-8">
              <div
                className={`flex flex-col bg-white w-[284px] h-[265px] rounded-[28px] px-[24px]`}
              >
                <div className="flex flex-col w-[233px] h-[201px] overflow-auto no-scrollbar mt-12">
                  <div className="w-[26px] h-[25px]">
                    <Image
                      className="w-[26px] h-[25px]"
                      src={messageIcon}
                      alt="messageicon"
                    />
                    <div className="text-white -mt-[18px] flex justify-center items-center font-ppmori text-[10px] leading-[10.5px]">
                      {second + 1}
                    </div>
                  </div>
                  {second + 1 == 5 ? (
                    <>
                      <div
                        className="mt-4 font-ppmori font-semibold text-[14px] leading-[14.7px] cursor-pointer"
                        onClick={handleModalOpen}
                      >
                        <span>
                          {content[second].question}
                          <Image
                            className="w-[9px] h-[4.5px] inline-block ml-2"
                            src={vector}
                            alt="vector"
                          />
                        </span>
                      </div>
                      {isModolOn ? (
                        <>
                          <div className="flex flex-col mt-2 ml-2 w-[216px] h-[105px] rounded-[28px] opacity-60 drop-shadow-[0_0px_6px_rgba(0,0,0,0.25)] bg-[#FFFFFF99] border-[#AEDCEE] border-[0.5px] ">
                            <div className="flex flex-row h-1/2 pt-2 pl-2 pr-2">
                              <div
                                className="flex justify-center items-center w-[103px] h-[45px] font-semibold font-ppmori text-[14px] leading-[13.65px] tracking-[4%] text-[#000000] cursor-pointer"
                                onClick={handleReddit}
                              >
                                <span>Reddit</span>
                              </div>
                              <div
                                className="flex justify-center items-center  border-[#AEDCEE] border-[0.5px] border-r-0 border-t-0 border-b-0 w-[103px] h-[45px] font-semibold font-ppmori text-[14px] leading-[13.65px] tracking-[4%] text-[#000000] cursor-pointer"
                                onClick={handleInstagram}
                              >
                                <span>Instagram</span>
                              </div>
                            </div>
                            <div className="flex flex-row h-1/2 pl-2 pr-2">
                              <div
                                className="flex justify-center items-center border-[#AEDCEE] border-[0.5px] border-r-0 border-b-0  border-l-0 w-[103px] h-[45px] font-semibold font-ppmori text-[14px] leading-[13.65px] tracking-[4%] text-[#000000] cursor-pointer"
                                onClick={handleYoutube}
                              >
                                <span>Youtube</span>
                              </div>
                              <div
                                className="flex justify-center items-center  border-[#AEDCEE] border-[0.5px] border-r-0 border-b-0  w-[103px] h-[45px] font-semibold font-ppmori text-[14px] leading-[13.65px] tracking-[4%] text-[#000000] cursor-pointer"
                                onClick={handleDermat}
                              >
                                <span>my dermat</span>
                              </div>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="mt-2 font-ppmori font-normal text-[14px] leading-[14.7px]">
                            {content[second].answer}
                          </div>
                        </>
                      )}
                    </>
                  ) : (
                    <>
                      <div className="font-ppmori font-semibold text-[14px] leading-[14.7px] mt-4">
                        {content[second].question}
                      </div>
                      <div className="font-ppmori font-normal text-[14px] leading-[14.7px] mt-4">
                        {content[second].answer}
                      </div>
                    </>
                  )}
                </div>
              </div>
              {second + 2 != 10 && (
                <>
                  <div
                    className={`flex flex-col bg-white w-[284px] h-[265px] rounded-[28px] px-[24px]`}
                  >
                    <div className="flex flex-col w-[233px] h-[201px] overflow-auto no-scrollbar mt-12">
                      <div className="w-[26px] h-[25px]">
                        <Image
                          className="w-[26px] h-[25px]"
                          src={messageIcon}
                          alt="messageicon"
                        />
                        <div className="text-white -mt-[18px] flex justify-center items-center font-ppmori text-[10px] leading-[10.5px]">
                          {second + 2}
                        </div>
                      </div>
                      <div className="font-ppmori font-semibold text-[14px] leading-[14.7px] mt-4">
                        {content[second + 1].question}
                      </div>
                      <div className="font-ppmori font-normal text-[14px] leading-[14.7px] mt-4">
                        {content[second + 1].answer}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
            {/* RIGHT */}
            <div className="flex flex-col gap-8">
              <div
                className={`flex flex-col bg-white w-[284px] h-[265px] rounded-[28px] px-[24px]`}
              >
                <div className="flex flex-col w-[233px] h-[201px] overflow-auto no-scrollbar mt-12">
                  <div className="w-[26px] h-[25px]">
                    <Image
                      className="w-[26px] h-[25px]"
                      src={messageIcon}
                      alt="messageicon"
                    />
                    <div className="text-white -mt-[18px] flex justify-center items-center font-ppmori text-[10px] leading-[10.5px]">
                      {third + 1}
                    </div>
                  </div>
                  {third + 1 == 5 ? (
                    <>
                      <div
                        className="mt-4 font-ppmori font-semibold text-[14px] leading-[14.7px] cursor-pointer"
                        onClick={handleModalOpen}
                      >
                        <span>
                          {content[third].question}
                          <Image
                            className="w-[9px] h-[4.5px] inline-block ml-2"
                            src={vector}
                            alt="vector"
                          />
                        </span>
                      </div>
                      {isModolOn ? (
                        <>
                          <div className="flex flex-col mt-2 ml-2 w-[216px] h-[105px] rounded-[28px] opacity-60 drop-shadow-[0_0px_6px_rgba(0,0,0,0.25)] bg-[#FFFFFF99] border-[#AEDCEE] border-[0.5px] ">
                            <div className="flex flex-row h-1/2 pt-2 pl-2 pr-2">
                              <div
                                className="flex justify-center items-center w-[103px] h-[45px] font-semibold font-ppmori text-[14px] leading-[13.65px] tracking-[4%] text-[#000000] cursor-pointer"
                                onClick={handleReddit}
                              >
                                <span>Reddit</span>
                              </div>
                              <div
                                className="flex justify-center items-center  border-[#AEDCEE] border-[0.5px] border-r-0 border-t-0 border-b-0 w-[103px] h-[45px] font-semibold font-ppmori text-[14px] leading-[13.65px] tracking-[4%] text-[#000000] cursor-pointer"
                                onClick={handleInstagram}
                              >
                                <span>Instagram</span>
                              </div>
                            </div>
                            <div className="flex flex-row h-1/2 pl-2 pr-2">
                              <div
                                className="flex justify-center items-center border-[#AEDCEE] border-[0.5px] border-r-0 border-b-0  border-l-0 w-[103px] h-[45px] font-semibold font-ppmori text-[14px] leading-[13.65px] tracking-[4%] text-[#000000] cursor-pointer"
                                onClick={handleYoutube}
                              >
                                <span>Youtube</span>
                              </div>
                              <div
                                className="flex justify-center items-center  border-[#AEDCEE] border-[0.5px] border-r-0 border-b-0  w-[103px] h-[45px] font-semibold font-ppmori text-[14px] leading-[13.65px] tracking-[4%] text-[#000000] cursor-pointer"
                                onClick={handleDermat}
                              >
                                <span>my dermat</span>
                              </div>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="mt-2 font-ppmori font-normal text-[14px] leading-[14.7px]">
                            {content[third].answer}
                          </div>
                        </>
                      )}
                    </>
                  ) : (
                    <>
                      <div className="font-ppmori font-semibold text-[14px] leading-[14.7px] mt-4">
                        {content[third].question}
                      </div>
                      <div className="font-ppmori font-normal text-[14px] leading-[14.7px] mt-4">
                        {content[third].answer}
                      </div>
                    </>
                  )}
                </div>
              </div>

              {third + 2 != 10 && (
                <>
                  <div
                    className={`flex flex-col bg-white w-[284px] h-[265px] rounded-[28px] px-[24px]`}
                  >
                    <div className="flex flex-col w-[233px] h-[201px] overflow-auto no-scrollbar mt-12">
                      <div className="w-[26px] h-[25px]">
                        <Image
                          className="w-[26px] h-[25px]"
                          src={messageIcon}
                          alt="messageicon"
                        />
                        <div className="text-white -mt-[18px] font-ppmori text-[10px] leading-[10.5px] flex justify-center items-center">
                          {third + 2}
                        </div>
                      </div>
                      <div className="font-ppmori font-semibold text-[14px] leading-[14.7px] mt-4">
                        {content[third + 1].question}
                      </div>
                      <div className="font-ppmori font-normal text-[14px] leading-[14.7px] mt-4">
                        {content[third + 1].answer}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="flex items-center">
            <div>
              <Image
                className="w-[15px] h-[29px] cursor-pointer ml-12 mt-8"
                src={arrowRightSvg}
                alt="right"
                onClick={nextButton}
              />
            </div>
          </div>
        </div>
        <div className="mt-12">
          <JoinButton>JOIN THE WAITLIST</JoinButton>
          {/* <div className="text-[10px] leading-[10.5px] tracking-[5%] font-semibold text-center mt-[12px]">
            993 spots left
          </div> */}
        </div>
      </div>
    );
  }
};

export default Section6;
