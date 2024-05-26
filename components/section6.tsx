import Image from "next/image";
import arrowLeftSvg from "@/public/icons/arrow-left.svg";
import arrowRightSvg from "@/public/icons/arrow-right.svg";
import messageIcon from "@/public/icons/message-icon.svg";
import { useState, useEffect } from "react";
import JoinButton from "./ui/join-button";

const Section6 = () => {

  const [isSmallTabletOrMobile, setIsSmallTabletOrMobile] = useState<boolean>(false);

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
      "question": "how will you make sure brands or influencers are not on this platform?",
      "answer": "because one, promoting products to 5 people at a time in an honestly chat is low ROI work two, you can report any user who seems to be a brand rep"
    },
    {
      "question": "wait, so how do you make money",
      "answer": `there's literally no incentive for anyone to try to become an “influencer” on our platform.`
    },
    {
      "question": "what kind of questions can i ask?",
      "answer": "ask for reviews of products. eg. how are Cetaphil and Cerave cleansers different or Korean sunscreen recommendations for oily skin in Bombay monsoon we don’t allow questions such as ‘shampoos to fix hairfall’ because hairfall could be for many reasons which we can’t diagnose at this time"
    },
    {
      "question": "pricing?",
      "answer": "there's literally no incentive for anyone to try to become an “influencer” on our platform."
    },
    {
      "question": "i already get my beauty advice from Reddit",
      "answer": "then you know how cool this is better than anyone else! imagine the same candid reviews from real people, but with added filter of skin tone, skin type, age, gender and weather (and way lesser mod rules 🤫)"
    },
    {
      "question": "how will you make sure influencers are not on this platform?",
      "answer": "there's literally no incentive for anyone to try to become an “influencer” on our platform."
    },
    {
      "question": "i am a beginner. when will you open up for me?",
      "answer": "there's literally no incentive for anyone to try to become an “influencer” on our platform."
    },
    {
      "question": "how will you make sure influencers are not on this platform?",
      "answer": "there's literally no incentive for anyone to try to become an “influencer” on our platform."
    },
    {
      "question": "i only buy from select brands. i don't need this.",
      "answer": "there's literally no incentive for anyone to try to become an “influencer” on our platform."
    },
    {
      "question": "I'll wait till you guys become big. Not me, I am not the early adopter types",
      "answer": "there's literally no incentive for anyone to try to become an “influencer” on our platform."
    }

  ]

  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(1);
  const [third, setThird] = useState(2);

  const [current, setCurrent] = useState(0);

  const nextMobileButton = () => {
    if (current == 9) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  }

  const prevMobileButton = () => {
    if (current == 0) {
      setCurrent(9);
    } else {
      setCurrent(current - 1);
    }
  }

  const nextButton = () => {
    if (first == 4) {
      setFirst(0);
      setSecond(second + 1);
      setThird(third + 1);
    } else if (second == 4) {
      setSecond(0);
      setFirst(first + 1);
      setThird(third + 1);
    } else if (third == 4) {
      setThird(0);
      setFirst(first + 1);
      setSecond(second + 1);
    } else {
      setFirst(first + 1);
      setSecond(second + 1);
      setThird(third + 1);
    }
  }

  const prevButton = () => {
    if (first == 0) {
      setFirst(4);
      setSecond(second - 1);
      setThird(third - 1);
    } else if (second == 0) {
      setSecond(4);
      setFirst(first - 1);
      setThird(third - 1);
    } else if (third == 0) {
      setThird(4);
      setFirst(first - 1);
      setSecond(second - 1);
    } else {
      setFirst(first - 1);
      setSecond(second - 1);
      setThird(third - 1);
    }
  }

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
                  <Image className="w-[15px] h-[29px] cursor-pointer ml-[1rem] mr-4 md:mr-8 mt-32 md:mt-44" src={arrowLeftSvg} alt="left" onClick={prevMobileButton} />
                </div>
              </div>
            </div>
            <div className={`flex flex-col bg-white w-[284px] h-[265px] md:w-[350px] md:h-[350px] rounded-[28px] px-[24px] py-[30px] `}>
              <div className="flex flex-col gap-[24px] overflow-auto no-scrollbar">
                <div className="w-[26px] h-[25px]">
                  <Image className="w-[26px] h-[25px]" src={messageIcon} alt="messageicon" />
                  <div className="text-white -mt-[18px] flex justify-center items-center font-ppmori text-[10px] leading-[10.5px]">
                    {current + 1}
                  </div>
                </div>
                <div className="font-ppmori font-semibold text-[13px] leading-[16.9px]">
                  {content[current].question}
                </div>
                <div className="font-ppmori font-normal text-[13px] leading-[16.9px]">
                  {content[current].answer}
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center">
                <div>
                  <Image className="w-[15px] h-[29px] cursor-pointer ml-4 md:ml-8 mr-[1rem] mt-32 md:mt-44" src={arrowRightSvg} alt="right" onClick={nextMobileButton} />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-24">
            <JoinButton>JOIN THE WAITLIST</JoinButton>
            <div className="text-[10px] leading-[10.5px] tracking-[5%] font-semibold text-center mt-[12px]">
              993 spots left
            </div>
          </div>
        </div>
      </>)
  } else {
    return (

      <div className="flex flex-col items-center mt-[68px] mx-[20px]">
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
              <Image className="w-[15px] h-[29px] cursor-pointer mr-12 mt-8" src={arrowLeftSvg} alt="left" onClick={prevButton} />
            </div>
          </div>
          <div className="w-[918px] flex flex-row justify-between h-[554px] mt-10">
            {/* LEFT */}
            <div className="flex flex-col gap-8">
              <div className={`flex flex-col bg-white w-[284px] h-[265px] rounded-[28px] px-[24px] py-[30px]`}>
                <div className="flex flex-col gap-[24px] h-[201px] overflow-auto no-scrollbar">
                  <div className="w-[26px] h-[25px]">
                    <Image className="w-[26px] h-[25px]" src={messageIcon} alt="messageicon" />
                    <div className="text-white -mt-[18px] flex justify-center items-center font-ppmori text-[10px] leading-[10.5px]">
                      {first + 1}
                    </div>
                  </div>
                  <div className="font-ppmori font-semibold text-[13px] leading-[16.9px]">
                    {content[first].question}
                  </div>
                  <div className="font-ppmori font-normal text-[13px] leading-[16.9px]">
                    {content[first].answer}
                  </div>
                </div>
              </div>

              <div className={`flex flex-col bg-white w-[284px] h-[265px] rounded-[28px] px-[24px] py-[30px]`}>

                <div className="flex flex-col gap-[24px] w-[233px] h-[201px] overflow-auto no-scrollbar">
                  <div className="w-[26px] h-[25px]">
                    <Image className="w-[26px] h-[25px]" src={messageIcon} alt="messageicon" />
                    <div className="text-white -mt-[18px] flex justify-center items-center font-ppmori text-[10px] leading-[10.5px]">
                      {first + 6}
                    </div>
                  </div>
                  <div className="font-ppmori font-semibold text-[13px] leading-[16.9px]">
                    {content[first + 5].question}
                  </div>
                  <div className="font-ppmori font-normal text-[13px] leading-[16.9px]">
                    {content[first + 5].answer}
                  </div>
                </div>
              </div>
            </div>
            {/* MIDDLE */}
            <div className="flex flex-col gap-8">
              <div className={`flex flex-col bg-white w-[284px] h-[265px] rounded-[28px] px-[24px] py-[30px]`}>

                <div className="flex flex-col gap-[24px] w-[233px] h-[201px] overflow-auto no-scrollbar">
                  <div className="w-[26px] h-[25px]">
                    <Image className="w-[26px] h-[25px]" src={messageIcon} alt="messageicon" />
                    <div className="text-white -mt-[18px] flex justify-center items-center font-ppmori text-[10px] leading-[10.5px]">
                      {second + 1}
                    </div>
                  </div>
                  <div className="font-ppmori font-semibold text-[13px] leading-[16.9px]">
                    {content[second].question}
                  </div>
                  <div className="font-ppmori font-normal text-[13px] leading-[16.9px]">
                    {content[second].answer}
                  </div>
                </div>

              </div>
              <div className={`flex flex-col bg-white w-[284px] h-[265px] rounded-[28px] px-[24px] py-[30px]`}>

                <div className="flex flex-col gap-[24px] w-[233px] h-[201px] overflow-auto no-scrollbar">
                  <div className="w-[26px] h-[25px]">
                    <Image className="w-[26px] h-[25px]" src={messageIcon} alt="messageicon" />
                    <div className="text-white -mt-[18px] flex justify-center items-center font-ppmori text-[10px] leading-[10.5px]">
                      {second + 6}
                    </div>
                  </div>
                  <div className="font-ppmori font-semibold text-[13px] leading-[16.9px]">
                    {content[second + 5].question}
                  </div>
                  <div className="font-ppmori font-normal text-[13px] leading-[16.9px]">
                    {content[second + 5].answer}
                  </div>
                </div>
              </div>
            </div>
            {/* RIGHT */}
            <div className="flex flex-col gap-8">
              <div className={`flex flex-col bg-white w-[284px] h-[265px] rounded-[28px] px-[24px] py-[30px]`}>

                <div className="flex flex-col gap-[24px] w-[233px] h-[201px] overflow-auto no-scrollbar">
                  <div className="w-[26px] h-[25px]">
                    <Image className="w-[26px] h-[25px]" src={messageIcon} alt="messageicon" />
                    <div className="text-white -mt-[18px] flex justify-center items-center font-ppmori text-[10px] leading-[10.5px]">
                      {third + 1}
                    </div>
                  </div>
                  <div className="font-ppmori font-semibold text-[13px] leading-[16.9px]">
                    {content[third].question}
                  </div>
                  <div className="font-ppmori font-normal text-[13px] leading-[16.9px]">
                    {content[third].answer}
                  </div>
                </div>
              </div>
              <div className={`flex flex-col bg-white w-[284px] h-[265px] rounded-[28px] px-[24px] py-[30px]`}>

                <div className="flex flex-col gap-[24px] w-[233px] h-[201px] overflow-auto no-scrollbar">
                  <div className="w-[26px] h-[25px]">
                    <Image className="w-[26px] h-[25px]" src={messageIcon} alt="messageicon" />
                    <div className="text-white -mt-[18px] font-ppmori text-[10px] leading-[10.5px] flex justify-center items-center">
                      {third + 6}
                    </div>
                  </div>
                  <div className="font-ppmori font-semibold text-[13px] leading-[16.9px]">
                    {content[third + 5].question}
                  </div>
                  <div className="font-ppmori font-normal text-[13px] leading-[16.9px]">
                    {content[third + 5].answer}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div>
              <Image className="w-[15px] h-[29px] cursor-pointer ml-12 mt-8" src={arrowRightSvg} alt="right" onClick={nextButton} />
            </div>
          </div>
        </div>
        <div className="mt-12">
          <JoinButton>JOIN THE WAITLIST</JoinButton>
          <div className="text-[10px] leading-[10.5px] tracking-[5%] font-semibold text-center mt-[12px]">
            993 spots left
          </div>
        </div>
      </div>

    );
  }

}

export default Section6;
