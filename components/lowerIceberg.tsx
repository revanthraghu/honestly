import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

export default function LowerIceberg() {
  // One
  const oneRef = useRef<HTMLDivElement>(null);
  const [isOneCentered, setIsOneCentered] = useState<boolean>(false);
  const [isOneAnimated, setIsOneAnimated] = useState<number>(0);

  // Two
  const twoRef = useRef<HTMLDivElement>(null);
  const [isTwoCentered, setIsTwoCentered] = useState<boolean>(false);
  const [isTwoAnimated, setIsTwoAnimated] = useState<number>(0);

  // Three
  const threeRef = useRef<HTMLDivElement>(null);
  const [isThreeCentered, setIsThreeCentered] = useState<boolean>(false);
  const [isThreeAnimated, setIsThreeAnimated] = useState<number>(0);

  // Four
  const fourRef = useRef<HTMLDivElement>(null);
  const [isFourCentered, setIsFourCentered] = useState<boolean>(false);
  const [isFourAnimated, setIsFourAnimated] = useState<number>(0);

  // Five
  const fiveRef = useRef<HTMLDivElement>(null);
  const [isFiveCentered, setIsFiveCentered] = useState<boolean>(false);
  const [isFiveAnimated, setIsFiveAnimated] = useState<number>(0);

  // Six
  const sixRef = useRef<HTMLDivElement>(null);
  const [isSixCentered, setIsSixCentered] = useState<boolean>(false);
  const [isSixAnimated, setIsSixAnimated] = useState<number>(0);

  // Seven
  const sevenRef = useRef<HTMLDivElement>(null);
  const [isSevenCentered, setIsSevenCentered] = useState<boolean>(false);
  const [isSevenAnimated, setIsSevenAnimated] = useState<number>(0);

  // Eight
  const eightRef = useRef<HTMLDivElement>(null);
  const [isEightCentered, setIsEightCentered] = useState<boolean>(false);
  const [isEightAnimated, setIsEightAnimated] = useState<number>(0);

  // Nine
  const nineRef = useRef<HTMLDivElement>(null);
  const [isNineCentered, setIsNineCentered] = useState<boolean>(false);
  const [isNineAnimated, setIsNineAnimated] = useState<number>(0);

  // Ten
  const tenRef = useRef<HTMLDivElement>(null);
  const [isTenCentered, setIsTenCentered] = useState<boolean>(false);
  const [isTenAnimated, setIsTenAnimated] = useState<number>(0);

  // Eleven
  const elevenRef = useRef<HTMLDivElement>(null);
  const [isElevenCentered, setIsElevenCentered] = useState<boolean>(false);
  const [isElevenAnimated, setIsElevenAnimated] = useState<number>(0);

  // Twelve
  const twelveRef = useRef<HTMLDivElement>(null);
  const [isTwelveCentered, setIsTwelveCentered] = useState<boolean>(false);
  const [isTwelveAnimated, setIsTwelveAnimated] = useState<number>(0);

  // Thirteen
  const thirteenRef = useRef<HTMLDivElement>(null);
  const [isThirteenCentered, setIsThirteenCentered] = useState<boolean>(false);
  const [isThirteenAnimated, setIsThirteenAnimated] = useState<number>(0);

  // Fourteen
  const fourteenRef = useRef<HTMLDivElement>(null);
  const [isFourteenCentered, setIsFourteenCentered] = useState<boolean>(false);
  const [isFourteenAnimated, setIsFourteenAnimated] = useState<number>(0);

  // Fifteen
  const fifteenRef = useRef<HTMLDivElement>(null);
  const [isFifteenCentered, setIsFifteenCentered] = useState<boolean>(false);
  const [isFifteenAnimated, setIsFifteenAnimated] = useState<number>(0);

  const useInViewEffect = (
    ref: React.RefObject<HTMLDivElement>,
    setIsCentered: React.Dispatch<React.SetStateAction<boolean>>,
    setIsAnimated: React.Dispatch<React.SetStateAction<number>>
  ) => {
    const isInView = useInView(ref, {
      margin: "-50% 0px -50% 0px",
      amount: 0,
    });

    useEffect(() => {
      if (isInView) {
        setIsCentered(true);
        setIsAnimated(1);
      } else {
        setIsCentered(false);
      }
    }, [isInView]);
  };

  // Apply the in-view effect to all elements
  useInViewEffect(oneRef, setIsOneCentered, setIsOneAnimated);
  useInViewEffect(twoRef, setIsTwoCentered, setIsTwoAnimated);
  useInViewEffect(threeRef, setIsThreeCentered, setIsThreeAnimated);
  useInViewEffect(fourRef, setIsFourCentered, setIsFourAnimated);
  useInViewEffect(fiveRef, setIsFiveCentered, setIsFiveAnimated);
  useInViewEffect(sixRef, setIsSixCentered, setIsSixAnimated);
  useInViewEffect(sevenRef, setIsSevenCentered, setIsSevenAnimated);
  useInViewEffect(eightRef, setIsEightCentered, setIsEightAnimated);
  useInViewEffect(nineRef, setIsNineCentered, setIsNineAnimated);
  useInViewEffect(tenRef, setIsTenCentered, setIsTenAnimated);
  useInViewEffect(elevenRef, setIsElevenCentered, setIsElevenAnimated);
  useInViewEffect(twelveRef, setIsTwelveCentered, setIsTwelveAnimated);
  useInViewEffect(thirteenRef, setIsThirteenCentered, setIsThirteenAnimated);
  useInViewEffect(fourteenRef, setIsFourteenCentered, setIsFourteenAnimated);
  useInViewEffect(fifteenRef, setIsFifteenCentered, setIsFifteenAnimated);

  return (
    <div>
      {/* ONE : INGREDIENTS*/}
      <div>
        <div
          ref={oneRef}
          className={`group flex flex-row justify-center items-center text-[#00A8FE] gap-8 
                                ${
                                  isOneAnimated == 1
                                    ? "animate-color opacity-100"
                                    : ""
                                }
                                ${!isOneCentered ? "opacity-30" : ""}
                                ${
                                  isOneCentered && isOneAnimated == 2
                                    ? "bg-darkEffect opacity-100 w-[330px] text-[#122B2E]"
                                    : ""
                                }
                                `}
          onAnimationEnd={() => {
            setIsOneAnimated(2);
          }}
        >
          <div
            className={`w-[8px] h-[8px] rotate-45 
                                    ${
                                      isOneAnimated == 1
                                        ? "animate-diamond"
                                        : ""
                                    }
                                    ${
                                      isOneCentered && isOneAnimated == 2
                                        ? "bg-[#FFFFFF] opacity-100 "
                                        : ""
                                    }
                                    `}
          ></div>
          <span
            className="h-[36px] py-[12px] font-ppmori text-[11.5px] 
                                    md:text-[12px] leading-[12px] md:leading-[12.59px] tracking-widest font-semibold"
          >
            INGREDIENTS
          </span>
          <div
            className={`w-[8px] h-[8px] rotate-45 
                                    ${
                                      isOneAnimated == 1
                                        ? "animate-diamond"
                                        : ""
                                    }
                                    ${
                                      isOneCentered && isOneAnimated == 2
                                        ? "bg-[#FFFFFF] opacity-100 "
                                        : ""
                                    }
                                    `}
          ></div>
        </div>
      </div>

      {/* TWO : EXACT COLOURS*/}
      <div>
        <div
          ref={twoRef}
          className={`group flex flex-row justify-center items-center text-[#00A8FE] gap-8 
                                ${
                                  isTwoAnimated == 1
                                    ? "animate-color opacity-100"
                                    : ""
                                }
                                ${!isTwoCentered ? "opacity-30" : ""}
                                ${
                                  isTwoCentered && isTwoAnimated == 2
                                    ? "bg-darkEffect opacity-100 w-[330px] text-[#122B2E]"
                                    : ""
                                }
                                `}
          onAnimationEnd={() => {
            setIsTwoAnimated(2);
          }}
        >
          <div
            className={`w-[8px] h-[8px] rotate-45 
                                    ${
                                      isTwoAnimated == 1
                                        ? "animate-diamond"
                                        : ""
                                    }
                                    ${
                                      isTwoCentered && isTwoAnimated == 2
                                        ? "bg-[#FFFFFF] opacity-100 "
                                        : ""
                                    }
                                    `}
          ></div>
          <span
            className="h-[36px] py-[12px] font-ppmori text-[11.5px] 
                                    md:text-[12px] leading-[12px] md:leading-[12.59px] tracking-widest font-semibold"
          >
            EXACT COLOURS
          </span>
          <div
            className={`w-[8px] h-[8px] rotate-45 
                                    ${
                                      isTwoAnimated == 1
                                        ? "animate-diamond"
                                        : ""
                                    }
                                    ${
                                      isTwoCentered && isTwoAnimated == 2
                                        ? "bg-[#FFFFFF] opacity-100 "
                                        : ""
                                    }
                                    `}
          ></div>
        </div>
      </div>

      {/* THREE : COMEDOGENICITY */}
      <div>
        <div
          ref={threeRef}
          className={`group flex flex-row justify-center items-center text-[#00A8FE] gap-8 
                                ${
                                  isThreeAnimated == 1
                                    ? "animate-color opacity-100"
                                    : ""
                                }
                                ${!isThreeCentered ? "opacity-30" : ""}
                                ${
                                  isThreeCentered && isThreeAnimated == 2
                                    ? "bg-darkEffect opacity-100 w-[330px] text-[#122B2E]"
                                    : ""
                                }
                                `}
          onAnimationEnd={() => {
            setIsThreeAnimated(2);
          }}
        >
          <div
            className={`w-[8px] h-[8px] rotate-45 
                                    ${
                                      isThreeAnimated == 1
                                        ? "animate-diamond"
                                        : ""
                                    }
                                    ${
                                      isThreeCentered && isThreeAnimated == 2
                                        ? "bg-[#FFFFFF] opacity-100 "
                                        : ""
                                    }
                                    `}
          ></div>
          <span
            className="h-[36px] py-[12px] font-ppmori text-[11.5px] 
                                    md:text-[12px] leading-[12px] md:leading-[12.59px] tracking-widest font-semibold"
          >
            COMEDOGENICITY{" "}
          </span>
          <div
            className={`w-[8px] h-[8px] rotate-45 
                                    ${
                                      isThreeAnimated == 1
                                        ? "animate-diamond"
                                        : ""
                                    }
                                    ${
                                      isThreeCentered && isThreeAnimated == 2
                                        ? "bg-[#FFFFFF] opacity-100 "
                                        : ""
                                    }
                                    `}
          ></div>
        </div>
      </div>

      {/* FOUR : PACKAGING*/}
      <div>
        <div
          ref={fourRef}
          className={`group flex flex-row justify-center items-center text-[#00A8FE] gap-8 
                                ${
                                  isFourAnimated == 1
                                    ? "animate-color opacity-100"
                                    : ""
                                }
                                ${!isFourCentered ? "opacity-30" : ""}
                                ${
                                  isFourCentered && isFourAnimated == 2
                                    ? "bg-darkEffect opacity-100 w-[330px] text-[#122B2E]"
                                    : ""
                                }
                                `}
          onAnimationEnd={() => {
            setIsFourAnimated(2);
          }}
        >
          <div
            className={`w-[8px] h-[8px] rotate-45 
                                    ${
                                      isFourAnimated == 1
                                        ? "animate-diamond"
                                        : ""
                                    }
                                    ${
                                      isFourCentered && isFourAnimated == 2
                                        ? "bg-[#FFFFFF] opacity-100 "
                                        : ""
                                    }
                                    `}
          ></div>
          <span
            className="h-[36px] py-[12px] font-ppmori text-[11.5px] 
                                    md:text-[12px] leading-[12px] md:leading-[12.59px] tracking-widest font-semibold"
          >
            PACKAGING
          </span>
          <div
            className={`w-[8px] h-[8px] rotate-45 
                                    ${
                                      isFourAnimated == 1
                                        ? "animate-diamond"
                                        : ""
                                    }
                                    ${
                                      isFourCentered && isFourAnimated == 2
                                        ? "bg-[#FFFFFF] opacity-100 "
                                        : ""
                                    }
                                    `}
          ></div>
        </div>
      </div>

      {/* FIVE : COMFORT */}
      <div>
        <div
          ref={fiveRef}
          className={`group flex flex-row justify-center items-center text-[#00A8FE] gap-8 
                                ${
                                  isFiveAnimated == 1
                                    ? "animate-color opacity-100"
                                    : ""
                                }
                                ${!isFiveCentered ? "opacity-30" : ""}
                                ${
                                  isFiveCentered && isFiveAnimated == 2
                                    ? "bg-darkEffect opacity-100 w-[330px] text-[#122B2E]"
                                    : ""
                                }
                                `}
          onAnimationEnd={() => {
            setIsFiveAnimated(2);
          }}
        >
          <div
            className={`w-[8px] h-[8px] rotate-45 
                                    ${
                                      isFiveAnimated == 1
                                        ? "animate-diamond"
                                        : ""
                                    }
                                    ${
                                      isFiveCentered && isFiveAnimated == 2
                                        ? "bg-[#FFFFFF] opacity-100 "
                                        : ""
                                    }
                                    `}
          ></div>
          <span
            className="h-[36px] py-[12px] font-ppmori text-[11.5px] 
                                    md:text-[12px] leading-[12px] md:leading-[12.59px] tracking-widest font-semibold"
          >
            COMFORT
          </span>
          <div
            className={`w-[8px] h-[8px] rotate-45 
                                    ${
                                      isFiveAnimated == 1
                                        ? "animate-diamond"
                                        : ""
                                    }
                                    ${
                                      isFiveCentered && isFiveAnimated == 2
                                        ? "bg-[#FFFFFF] opacity-100 "
                                        : ""
                                    }
                                    `}
          ></div>
        </div>
      </div>

      {/* SIX : TEXTURE*/}
      <div>
        <div
          ref={sixRef}
          className={`group flex flex-row justify-center items-center text-[#00A8FE] gap-8 
                                ${
                                  isSixAnimated == 1
                                    ? "animate-color opacity-100"
                                    : ""
                                }
                                ${!isSixCentered ? "opacity-30" : ""}
                                ${
                                  isSixCentered && isSixAnimated == 2
                                    ? "bg-darkEffect opacity-100 w-[330px] text-[#122B2E]"
                                    : ""
                                }
                                `}
          onAnimationEnd={() => {
            setIsSixAnimated(2);
          }}
        >
          <div
            className={`w-[8px] h-[8px] rotate-45 
                                    ${
                                      isSixAnimated == 1
                                        ? "animate-diamond"
                                        : ""
                                    }
                                    ${
                                      isSixCentered && isSixAnimated == 2
                                        ? "bg-[#FFFFFF] opacity-100 "
                                        : ""
                                    }
                                    `}
          ></div>
          <span
            className="h-[36px] py-[12px] font-ppmori text-[11.5px] 
                                    md:text-[12px] leading-[12px] md:leading-[12.59px] tracking-widest font-semibold"
          >
            TEXTURE
          </span>
          <div
            className={`w-[8px] h-[8px] rotate-45 
                                    ${
                                      isSixAnimated == 1
                                        ? "animate-diamond"
                                        : ""
                                    }
                                    ${
                                      isSixCentered && isSixAnimated == 2
                                        ? "bg-[#FFFFFF] opacity-100 "
                                        : ""
                                    }
                                    `}
          ></div>
        </div>
      </div>

      {/* SEVEN : FINISH*/}
      <div>
        <div
          ref={sevenRef}
          className={`group flex flex-row justify-center items-center text-[#00A8FE] gap-8 
                                ${
                                  isSevenAnimated == 1
                                    ? "animate-color opacity-100"
                                    : ""
                                }
                                ${!isSevenCentered ? "opacity-30" : ""}
                                ${
                                  isSevenCentered && isSevenAnimated == 2
                                    ? "bg-darkEffect opacity-100 w-[330px] text-[#122B2E]"
                                    : ""
                                }
                                `}
          onAnimationEnd={() => {
            setIsSevenAnimated(2);
          }}
        >
          <div
            className={`w-[8px] h-[8px] rotate-45 
                                    ${
                                      isSevenAnimated == 1
                                        ? "animate-diamond"
                                        : ""
                                    }
                                    ${
                                      isSevenCentered && isSevenAnimated == 2
                                        ? "bg-[#FFFFFF] opacity-100 "
                                        : ""
                                    }
                                    `}
          ></div>
          <span
            className="h-[36px] py-[12px] font-ppmori text-[11.5px] 
                                    md:text-[12px] leading-[12px] md:leading-[12.59px] tracking-widest font-semibold"
          >
            FINISH
          </span>
          <div
            className={`w-[8px] h-[8px] rotate-45 
                                    ${
                                      isSevenAnimated == 1
                                        ? "animate-diamond"
                                        : ""
                                    }
                                    ${
                                      isSevenCentered && isSevenAnimated == 2
                                        ? "bg-[#FFFFFF] opacity-100 "
                                        : ""
                                    }
                                    `}
          ></div>
        </div>
      </div>

      {/* EIGHT : COVERAGE*/}
      <div>
        <div
          ref={eightRef}
          className={`group flex flex-row justify-center items-center text-[#00A8FE] gap-8 
                                ${
                                  isEightAnimated == 1
                                    ? "animate-color opacity-100"
                                    : ""
                                }
                                ${!isEightCentered ? "opacity-30" : ""}
                                ${
                                  isEightCentered && isEightAnimated == 2
                                    ? "bg-darkEffect opacity-100 w-[330px] text-[#122B2E]"
                                    : ""
                                }
                                `}
          onAnimationEnd={() => {
            setIsEightAnimated(2);
          }}
        >
          <div
            className={`w-[8px] h-[8px] rotate-45 
                                    ${
                                      isEightAnimated == 1
                                        ? "animate-diamond"
                                        : ""
                                    }
                                    ${
                                      isEightCentered && isEightAnimated == 2
                                        ? "bg-[#FFFFFF] opacity-100 "
                                        : ""
                                    }
                                    `}
          ></div>
          <span
            className="h-[36px] py-[12px] font-ppmori text-[11.5px] 
                                    md:text-[12px] leading-[12px] md:leading-[12.59px] tracking-widest font-semibold"
          >
            COVERAGE
          </span>
          <div
            className={`w-[8px] h-[8px] rotate-45 
                                    ${
                                      isEightAnimated == 1
                                        ? "animate-diamond"
                                        : ""
                                    }
                                    ${
                                      isEightCentered && isEightAnimated == 2
                                        ? "bg-[#FFFFFF] opacity-100 "
                                        : ""
                                    }
                                    `}
          ></div>
        </div>
      </div>

      {/* Nine : QUANTITY*/}
      <div>
        <div
          ref={nineRef}
          className={`group flex flex-row justify-center items-center text-[#00A8FE] gap-8 
                                ${
                                  isNineAnimated == 1
                                    ? "animate-color opacity-100"
                                    : ""
                                }
                                ${!isNineCentered ? "opacity-30" : ""}
                                ${
                                  isNineCentered && isNineAnimated == 2
                                    ? "bg-darkEffect opacity-100 w-[330px] text-[#122B2E]"
                                    : ""
                                }
                                `}
          onAnimationEnd={() => {
            setIsNineAnimated(2);
          }}
        >
          <div
            className={`w-[8px] h-[8px] rotate-45 
                                    ${
                                      isNineAnimated == 1
                                        ? "animate-diamond"
                                        : ""
                                    }
                                    ${
                                      isNineCentered && isNineAnimated == 2
                                        ? "bg-[#FFFFFF] opacity-100 "
                                        : ""
                                    }
                                    `}
          ></div>
          <span
            className="h-[36px] py-[12px] font-ppmori text-[11.5px] 
                                    md:text-[12px] leading-[12px] md:leading-[12.59px] tracking-widest font-semibold"
          >
            QUANTITY
          </span>
          <div
            className={`w-[8px] h-[8px] rotate-45 
                                    ${
                                      isNineAnimated == 1
                                        ? "animate-diamond"
                                        : ""
                                    }
                                    ${
                                      isNineCentered && isNineAnimated == 2
                                        ? "bg-[#FFFFFF] opacity-100 "
                                        : ""
                                    }
                                    `}
          ></div>
        </div>
      </div>

      {/* TEN : BLENDABILITY*/}
      <div>
        <div
          ref={tenRef}
          className={`group flex flex-row justify-center items-center text-[#00A8FE] gap-8 
                                ${
                                  isTenAnimated == 1
                                    ? "animate-color opacity-100"
                                    : ""
                                }
                                ${!isTenCentered ? "opacity-30" : ""}
                                ${
                                  isTenCentered && isTenAnimated == 2
                                    ? "bg-darkEffect opacity-100 w-[330px] text-[#122B2E]"
                                    : ""
                                }
                                `}
          onAnimationEnd={() => {
            setIsTenAnimated(2);
          }}
        >
          <div
            className={`w-[8px] h-[8px] rotate-45 
                                    ${
                                      isTenAnimated == 1
                                        ? "animate-diamond"
                                        : ""
                                    }
                                    ${
                                      isTenCentered && isTenAnimated == 2
                                        ? "bg-[#FFFFFF] opacity-100 "
                                        : ""
                                    }
                                    `}
          ></div>
          <span
            className="h-[36px] py-[12px] font-ppmori text-[11.5px] 
                                    md:text-[12px] leading-[12px] md:leading-[12.59px] tracking-widest font-semibold"
          >
            BLENDABILITY
          </span>
          <div
            className={`w-[8px] h-[8px] rotate-45 
                                    ${
                                      isTenAnimated == 1
                                        ? "animate-diamond"
                                        : ""
                                    }
                                    ${
                                      isTenCentered && isTenAnimated == 2
                                        ? "bg-[#FFFFFF] opacity-100 "
                                        : ""
                                    }
                                    `}
          ></div>
        </div>
      </div>

      {/* ELEVEN : EASE OF REMOVAL*/}
      <div>
        <div
          ref={elevenRef}
          className={`group flex flex-row justify-center items-center text-[#00A8FE] gap-8 
                                ${
                                  isElevenAnimated == 1
                                    ? "animate-color opacity-100"
                                    : ""
                                }
                                ${!isElevenCentered ? "opacity-30" : ""}
                                ${
                                  isElevenCentered && isElevenAnimated == 2
                                    ? "bg-darkEffect opacity-100 w-[330px] text-[#122B2E]"
                                    : ""
                                }
                                `}
          onAnimationEnd={() => {
            setIsElevenAnimated(2);
          }}
        >
          <div
            className={`w-[8px] h-[8px] rotate-45 
                                    ${
                                      isElevenAnimated == 1
                                        ? "animate-diamond"
                                        : ""
                                    }
                                    ${
                                      isElevenCentered && isElevenAnimated == 2
                                        ? "bg-[#FFFFFF] opacity-100 "
                                        : ""
                                    }
                                    `}
          ></div>
          <span
            className="h-[36px] py-[12px] font-ppmori text-[11.5px] 
                                    md:text-[12px] leading-[12px] md:leading-[12.59px] tracking-widest font-semibold"
          >
            EASE OF REMOVAL
          </span>
          <div
            className={`w-[8px] h-[8px] rotate-45 
                                    ${
                                      isElevenAnimated == 1
                                        ? "animate-diamond"
                                        : ""
                                    }
                                    ${
                                      isElevenCentered && isElevenAnimated == 2
                                        ? "bg-[#FFFFFF] opacity-100 "
                                        : ""
                                    }
                                    `}
          ></div>
        </div>
      </div>

      {/* TWELVE : SHELF LIFE*/}
      <div>
        <div
          ref={twelveRef}
          className={`group flex flex-row justify-center items-center text-[#00A8FE] gap-8 
                                ${
                                  isTwelveAnimated == 1
                                    ? "animate-color opacity-100"
                                    : ""
                                }
                                ${!isTwelveCentered ? "opacity-30" : ""}
                                ${
                                  isTwelveCentered && isTwelveAnimated == 2
                                    ? "bg-darkEffect opacity-100 w-[330px] text-[#122B2E]"
                                    : ""
                                }
                                `}
          onAnimationEnd={() => {
            setIsTwelveAnimated(2);
          }}
        >
          <div
            className={`w-[8px] h-[8px] rotate-45 
                                    ${
                                      isTwelveAnimated == 1
                                        ? "animate-diamond"
                                        : ""
                                    }
                                    ${
                                      isTwelveCentered && isTwelveAnimated == 2
                                        ? "bg-[#FFFFFF] opacity-100 "
                                        : ""
                                    }
                                    `}
          ></div>
          <span
            className="h-[36px] py-[12px] font-ppmori text-[11.5px] 
                                    md:text-[12px] leading-[12px] md:leading-[12.59px] tracking-widest font-semibold"
          >
            SHELF LIFE
          </span>
          <div
            className={`w-[8px] h-[8px] rotate-45 
                                    ${
                                      isTwelveAnimated == 1
                                        ? "animate-diamond"
                                        : ""
                                    }
                                    ${
                                      isTwelveCentered && isTwelveAnimated == 2
                                        ? "bg-[#FFFFFF] opacity-100 "
                                        : ""
                                    }
                                    `}
          ></div>
        </div>
      </div>

      {/* THIRTEEN : PIGMENTATION*/}
      <div>
        <div
          ref={thirteenRef}
          className={`group flex flex-row justify-center items-center text-[#00A8FE] gap-8 
                                ${
                                  isThirteenAnimated == 1
                                    ? "animate-color opacity-100"
                                    : ""
                                }
                                ${!isThirteenCentered ? "opacity-30" : ""}
                                ${
                                  isThirteenCentered && isThirteenAnimated == 2
                                    ? "bg-darkEffect opacity-100 w-[330px] text-[#122B2E]"
                                    : ""
                                }
                                `}
          onAnimationEnd={() => {
            setIsThirteenAnimated(2);
          }}
        >
          <div
            className={`w-[8px] h-[8px] rotate-45 
                                    ${
                                      isThirteenAnimated == 1
                                        ? "animate-diamond"
                                        : ""
                                    }
                                    ${
                                      isThirteenCentered &&
                                      isThirteenAnimated == 2
                                        ? "bg-[#FFFFFF] opacity-100 "
                                        : ""
                                    }
                                    `}
          ></div>
          <span
            className="h-[36px] py-[12px] font-ppmori text-[11.5px] 
                                    md:text-[12px] leading-[12px] md:leading-[12.59px] tracking-widest font-semibold"
          >
            PIGMENTATION
          </span>
          <div
            className={`w-[8px] h-[8px] rotate-45 
                                    ${
                                      isThirteenAnimated == 1
                                        ? "animate-diamond"
                                        : ""
                                    }
                                    ${
                                      isThirteenCentered &&
                                      isThirteenAnimated == 2
                                        ? "bg-[#FFFFFF] opacity-100 "
                                        : ""
                                    }
                                    `}
          ></div>
        </div>
      </div>

      {/* FOURTEEN : COLOUR ON MY SKIN TONE*/}
      <div>
        <div
          ref={fourteenRef}
          className={`group flex flex-row justify-center items-center text-[#00A8FE] gap-6 
                                ${
                                  isFourteenAnimated == 1
                                    ? "animate-color opacity-100"
                                    : ""
                                }
                                ${!isFourteenCentered ? "opacity-30" : ""}
                                ${
                                  isFourteenCentered && isFourteenAnimated == 2
                                    ? "bg-darkEffect opacity-100 w-[330px] text-[#122B2E]"
                                    : ""
                                }
                                `}
          onAnimationEnd={() => {
            setIsFourteenAnimated(2);
          }}
        >
          <div
            className={`w-[8px] h-[8px] rotate-45 
                                    ${
                                      isFourteenAnimated == 1
                                        ? "animate-diamond"
                                        : ""
                                    }
                                    ${
                                      isFourteenCentered &&
                                      isFourteenAnimated == 2
                                        ? "bg-[#FFFFFF] opacity-100 "
                                        : ""
                                    }
                                    `}
          ></div>
          <span
            className="h-[36px] py-[12px] font-ppmori text-[11.5px]
                                    md:text-[12px] leading-[12px] md:leading-[12.59px] tracking-widest font-semibold"
          >
            COLOUR ON MY SKIN TONE
          </span>
          <div
            className={`w-[8px] h-[8px] rotate-45 
                                    ${
                                      isFourteenAnimated == 1
                                        ? "animate-diamond"
                                        : ""
                                    }
                                    ${
                                      isFourteenCentered &&
                                      isFourteenAnimated == 2
                                        ? "bg-[#FFFFFF] opacity-100 "
                                        : ""
                                    }
                                    `}
          ></div>
        </div>
      </div>

      {/* FIFTEEN : LASTING POWER*/}
      <div>
        <div
          ref={fifteenRef}
          className={`group flex flex-row justify-center items-center text-[#00A8FE] gap-8 
                                ${
                                  isFifteenAnimated == 1
                                    ? "animate-color opacity-100"
                                    : ""
                                }
                                ${!isFifteenCentered ? "opacity-30" : ""}
                                ${
                                  isFifteenCentered && isFifteenAnimated == 2
                                    ? "bg-darkEffect opacity-100 w-[330px] text-[#122B2E]"
                                    : ""
                                }
                                `}
          onAnimationEnd={() => {
            setIsFifteenAnimated(2);
          }}
        >
          <div
            className={`w-[8px] h-[8px] rotate-45 
                                    ${
                                      isFifteenAnimated == 1
                                        ? "animate-diamond"
                                        : ""
                                    }
                                    ${
                                      isFifteenCentered &&
                                      isFifteenAnimated == 2
                                        ? "bg-[#FFFFFF] opacity-100 "
                                        : ""
                                    }
                                    `}
          ></div>
          <span
            className="h-[36px] py-[12px] font-ppmori text-[11.5px] 
                                    md:text-[12px] leading-[12px] md:leading-[12.59px] tracking-widest font-semibold"
          >
            LASTING POWER
          </span>
          <div
            className={`w-[8px] h-[8px] rotate-45 
                                    ${
                                      isFifteenAnimated == 1
                                        ? "animate-diamond"
                                        : ""
                                    }
                                    ${
                                      isFifteenCentered &&
                                      isFifteenAnimated == 2
                                        ? "bg-[#FFFFFF] opacity-100 "
                                        : ""
                                    }
                                    `}
          ></div>
        </div>
      </div>
    </div>
  );
}
