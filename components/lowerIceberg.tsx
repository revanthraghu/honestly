import { useRef, useEffect, useState, useCallback } from "react";

export default function LowerIceberg() {

    // One
    const oneRef = useRef<HTMLDivElement>(null);
    const [isOneCentered, setIsOneCentered] = useState<boolean>(false);

    // Two
    const twoRef = useRef<HTMLDivElement>(null);
    const [isTwoCentered, setIsTwoCentered] = useState<boolean>(false);

    // Three
    const threeRef = useRef<HTMLDivElement>(null);
    const [isThreeCentered, setIsThreeCentered] = useState<boolean>(false);

    // Four
    const fourRef = useRef<HTMLDivElement>(null);
    const [isFourCentered, setIsFourCentered] = useState<boolean>(false);

    // Five
    const fiveRef = useRef<HTMLDivElement>(null);
    const [isFiveCentered, setIsFiveCentered] = useState<boolean>(false);

    // Six
    const sixRef = useRef<HTMLDivElement>(null);
    const [isSixCentered, setIsSixCentered] = useState<boolean>(false);

    // Seven
    const sevenRef = useRef<HTMLDivElement>(null);
    const [isSevenCentered, setIsSevenCentered] = useState<boolean>(false);

    // Eight
    const eightRef = useRef<HTMLDivElement>(null);
    const [isEightCentered, setIsEightCentered] = useState<boolean>(false);

    // Nine
    const nineRef = useRef<HTMLDivElement>(null);
    const [isNineCentered, setIsNineCentered] = useState<boolean>(false);

    // Ten
    const tenRef = useRef<HTMLDivElement>(null);
    const [isTenCentered, setIsTenCentered] = useState<boolean>(false);

    // Eleven
    const elevenRef = useRef<HTMLDivElement>(null);
    const [isElevenCentered, setIsElevenCentered] = useState<boolean>(false);

    // Twelve
    const twelveRef = useRef<HTMLDivElement>(null);
    const [isTwelveCentered, setIsTwelveCentered] = useState<boolean>(false);

    // Thirteen
    const thirteenRef = useRef<HTMLDivElement>(null);
    const [isThirteenCentered, setIsThirteenCentered] = useState<boolean>(false);

    // Fourteen
    const fourteenRef = useRef<HTMLDivElement>(null);
    const [isFourteenCentered, setIsFourteenCentered] = useState<boolean>(false);

    // Fifteen
    const fifteenRef = useRef<HTMLDivElement>(null);
    const [isFifteenCentered, setIsFifteenCentered] = useState<boolean>(false);


    const checkIfOneCentered = () => {

        // One
        if (oneRef.current) {
            const rect = oneRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            const elementCenter = rect.top + rect.height / 2;
            const viewportCenter = windowHeight / 2;

            if (Math.abs(viewportCenter - elementCenter) < rect.height / 2) {
                setIsOneCentered(true);
            } else {
                setIsOneCentered(false);
            }
        }
    }

    const checkIfTwoCentered = () => {
        // Two
        if (twoRef.current) {
            const rect = twoRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            const elementCenter = rect.top + rect.height / 2;
            const viewportCenter = windowHeight / 2;

            if (Math.abs(viewportCenter - elementCenter) < rect.height / 2) {
                setIsTwoCentered(true);
            } else {
                setIsTwoCentered(false);
            }
        }
    }

    const checkIfThreeCentered = () => {
        // Three
        if (threeRef.current) {
            const rect = threeRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            const elementCenter = rect.top + rect.height / 2;
            const viewportCenter = windowHeight / 2;

            if (Math.abs(viewportCenter - elementCenter) < rect.height / 2) {
                setIsThreeCentered(true);
            } else {
                setIsThreeCentered(false);
            }
        }
    }

    const checkIfFourCentered = () => {
        // Four
        if (fourRef.current) {
            const rect = fourRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            const elementCenter = rect.top + rect.height / 2;
            const viewportCenter = windowHeight / 2;

            if (Math.abs(viewportCenter - elementCenter) < rect.height / 2) {
                setIsFourCentered(true);
            } else {
                setIsFourCentered(false);
            }
        }
    }

    const checkIfFiveCentered = () => {
        // Five
        if (fiveRef.current) {
            const rect = fiveRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            const elementCenter = rect.top + rect.height / 2;
            const viewportCenter = windowHeight / 2;

            if (Math.abs(viewportCenter - elementCenter) < rect.height / 2) {
                setIsFiveCentered(true);
            } else {
                setIsFiveCentered(false);
            }
        }
    }

    const checkIfSixCentered = () => {
        // Six
        if (sixRef.current) {
            const rect = sixRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            const elementCenter = rect.top + rect.height / 2;
            const viewportCenter = windowHeight / 2;

            if (Math.abs(viewportCenter - elementCenter) < rect.height / 2) {
                setIsSixCentered(true);
            } else {
                setIsSixCentered(false);
            }
        }
    }

    const checkIfSevenCentered = () => {
        // Seven
        if (sevenRef.current) {
            const rect = sevenRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            const elementCenter = rect.top + rect.height / 2;
            const viewportCenter = windowHeight / 2;

            if (Math.abs(viewportCenter - elementCenter) < rect.height / 2) {
                setIsSevenCentered(true);
            } else {
                setIsSevenCentered(false);
            }
        }
    }


    const checkIfEightCentered = () => {
        // Eight
        if (eightRef.current) {
            const rect = eightRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            const elementCenter = rect.top + rect.height / 2;
            const viewportCenter = windowHeight / 2;

            if (Math.abs(viewportCenter - elementCenter) < rect.height / 2) {
                setIsEightCentered(true);
            } else {
                setIsEightCentered(false);
            }
        }
    }

    const checkIfNineCentered = () => {
        // Nine
        if (nineRef.current) {
            const rect = nineRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            const elementCenter = rect.top + rect.height / 2;
            const viewportCenter = windowHeight / 2;

            if (Math.abs(viewportCenter - elementCenter) < rect.height / 2) {
                setIsNineCentered(true);
            } else {
                setIsNineCentered(false);
            }
        }
    }

    const checkIfTenCentered = () => {
        // Ten
        if (tenRef.current) {
            const rect = tenRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            const elementCenter = rect.top + rect.height / 2;
            const viewportCenter = windowHeight / 2;

            if (Math.abs(viewportCenter - elementCenter) < rect.height / 2) {
                setIsTenCentered(true);
            } else {
                setIsTenCentered(false);
            }
        }
    }

    const checkIfElevenCentered = () => {
        // Eleven
        if (elevenRef.current) {
            const rect = elevenRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            const elementCenter = rect.top + rect.height / 2;
            const viewportCenter = windowHeight / 2;

            if (Math.abs(viewportCenter - elementCenter) < rect.height / 2) {
                setIsElevenCentered(true);
            } else {
                setIsElevenCentered(false);
            }
        }
    }

    const checkIfTwelveCentered = () => {
        // Twelve
        if (twelveRef.current) {
            const rect = twelveRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            const elementCenter = rect.top + rect.height / 2;
            const viewportCenter = windowHeight / 2;

            if (Math.abs(viewportCenter - elementCenter) < rect.height / 2) {
                setIsTwelveCentered(true);
            } else {
                setIsTwelveCentered(false);
            }
        }
    }

    const checkIfThirteenCentered = () => {
        // Thirteen
        if (thirteenRef.current) {
            const rect = thirteenRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            const elementCenter = rect.top + rect.height / 2;
            const viewportCenter = windowHeight / 2;

            if (Math.abs(viewportCenter - elementCenter) < rect.height / 2) {
                setIsThirteenCentered(true);
            } else {
                setIsThirteenCentered(false);
            }
        }
    }

    const checkIfFourteenCentered = () => {
        // Fourteen
        if (fourteenRef.current) {
            const rect = fourteenRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            const elementCenter = rect.top + rect.height / 2;
            const viewportCenter = windowHeight / 2;

            if (Math.abs(viewportCenter - elementCenter) < rect.height / 2) {
                setIsFourteenCentered(true);
            } else {
                setIsFourteenCentered(false);
            }
        }
    }

    const checkIfFifteenCentered = () => {
        // Fifteen
        if (fifteenRef.current) {
            const rect = fifteenRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            const elementCenter = rect.top + rect.height / 2;
            const viewportCenter = windowHeight / 2;

            if (Math.abs(viewportCenter - elementCenter) < rect.height / 2) {
                setIsFifteenCentered(true);
            } else {
                setIsFifteenCentered(false);
            }
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', checkIfOneCentered);
        checkIfOneCentered(); // Initial check

        window.addEventListener('scroll', checkIfTwoCentered);
        checkIfTwoCentered(); // Initial check

        window.addEventListener('scroll', checkIfThreeCentered);
        checkIfThreeCentered(); // Initial check

        window.addEventListener('scroll', checkIfFourCentered);
        checkIfFourCentered(); // Initial check

        window.addEventListener('scroll', checkIfFiveCentered);
        checkIfFiveCentered(); // Five

        window.addEventListener('scroll', checkIfSixCentered);
        checkIfSixCentered(); // Six

        window.addEventListener('scroll', checkIfSevenCentered);
        checkIfSevenCentered(); // Seven

        window.addEventListener('scroll', checkIfEightCentered);
        checkIfEightCentered(); // Eight

        window.addEventListener('scroll', checkIfNineCentered);
        checkIfNineCentered(); // Nine

        window.addEventListener('scroll', checkIfTenCentered);
        checkIfTenCentered(); // Ten

        window.addEventListener('scroll', checkIfElevenCentered);
        checkIfElevenCentered(); // Eleven

        window.addEventListener('scroll', checkIfTwelveCentered);
        checkIfTwelveCentered(); // Twelve

        window.addEventListener('scroll', checkIfThirteenCentered);
        checkIfThirteenCentered(); // Thirteen

        window.addEventListener('scroll', checkIfFourteenCentered);
        checkIfFourteenCentered(); // Fourteen

        window.addEventListener('scroll', checkIfFifteenCentered);
        checkIfFifteenCentered(); // Fifteen

    }, []);


    return (
        <div>
            {/* ONE */}
            <div>
                <div ref={oneRef} className={`group flex flex-row justify-center items-center text-[#00A8FE] gap-8 ${isOneCentered ? "animate-color" : "opacity-30"}`}>
                    <div className={`w-[8px] h-[8px] rotate-45 ${isOneCentered ? "animate-diamond" : ""}`}></div>
                    <span className="h-[36px] py-[12px] font-ppmori text-[11.5px] 
                                    md:text-[12px] leading-[12px] md:leading-[12.59px] tracking-widest font-semibold">INGREDIENTS</span>
                    <div className={`w-[8px] h-[8px] rotate-45 ${isOneCentered ? "animate-diamond" : ""}`}></div>

                </div>
            </div>

            {/* TWO */}
            <div>
                <div ref={twoRef} className={`group flex flex-row justify-center items-center text-[#00A8FE] gap-8 ${isTwoCentered ? "animate-color" : "opacity-30"}`}>
                    <div className={`w-[8px] h-[8px] rotate-45 ${isTwoCentered ? "animate-diamond" : ""}`}></div>
                    <span className="h-[36px] py-[12px] font-ppmori text-[11.5px] 
                                    md:text-[12px] leading-[12px] md:leading-[12.59px] tracking-widest font-semibold">EXACT COLOURS</span>
                    <div className={`w-[8px] h-[8px] rotate-45 ${isTwoCentered ? "animate-diamond" : ""}`}></div>

                </div>
            </div>

            {/* THREE */}
            <div>
                <div ref={threeRef} className={`group flex flex-row justify-center items-center text-[#00A8FE] gap-8 ${isThreeCentered ? "animate-color" : "opacity-30"}`}>
                    <div className={`w-[8px] h-[8px] rotate-45 ${isThreeCentered ? "animate-diamond" : ""}`}></div>
                    <span className="h-[36px] py-[12px] font-ppmori text-[11.5px] 
                                    md:text-[12px] leading-[12px] md:leading-[12.59px] tracking-widest font-semibold">COMEDOGENICITY</span>
                    <div className={`w-[8px] h-[8px] rotate-45 ${isThreeCentered ? "animate-diamond" : ""}`}></div>

                </div>
            </div>

            {/* FOUR */}
            <div>
                <div ref={fourRef} className={`group flex flex-row justify-center items-center text-[#00A8FE] gap-8 ${isFourCentered ? "animate-color" : "opacity-30"}`}>
                    <div className={`w-[8px] h-[8px] rotate-45 ${isFourCentered ? "animate-diamond" : ""}`}></div>
                    <span className="h-[36px] py-[12px] font-ppmori text-[11.5px] 
                                    md:text-[12px] leading-[12px] md:leading-[12.59px] tracking-widest font-semibold">PACKAGING</span>
                    <div className={`w-[8px] h-[8px] rotate-45 ${isFourCentered ? "animate-diamond" : ""}`}></div>

                </div>
            </div>

            {/* FIVE */}
            <div>
                <div ref={fiveRef} className={`group flex flex-row justify-center items-center text-[#00A8FE] gap-8 ${isFiveCentered ? "animate-color" : "opacity-30"}`}>
                    <div className={`w-[8px] h-[8px] rotate-45 ${isFiveCentered ? "animate-diamond" : ""}`}></div>
                    <span className="h-[36px] py-[12px] font-ppmori text-[11.5px] 
                                    md:text-[12px] leading-[12px] md:leading-[12.59px] tracking-widest font-semibold">COMFORT</span>
                    <div className={`w-[8px] h-[8px] rotate-45 ${isFiveCentered ? "animate-diamond" : ""}`}></div>

                </div>
            </div>

            {/* SIX */}
            <div>
                <div ref={sixRef} className={`group flex flex-row justify-center items-center text-[#00A8FE] gap-8 ${isSixCentered ? "animate-color" : "opacity-30"}`}>
                    <div className={`w-[8px] h-[8px] rotate-45 ${isSixCentered ? "animate-diamond" : ""}`}></div>
                    <span className="h-[36px] py-[12px] font-ppmori text-[11.5px] 
                                    md:text-[12px] leading-[12px] md:leading-[12.59px] tracking-widest font-semibold">TEXTURE</span>
                    <div className={`w-[8px] h-[8px] rotate-45 ${isSixCentered ? "animate-diamond" : ""}`}></div>

                </div>
            </div>

            {/* SEVEN */}
            <div>
                <div ref={sevenRef} className={`group flex flex-row justify-center items-center text-[#00A8FE] gap-8 ${isSevenCentered ? "animate-color" : "opacity-30"}`}>
                    <div className={`w-[8px] h-[8px] rotate-45 ${isSevenCentered ? "animate-diamond" : ""}`}></div>
                    <span className="h-[36px] py-[12px] font-ppmori text-[11.5px] 
                                    md:text-[12px] leading-[12px] md:leading-[12.59px] tracking-widest font-semibold">FINISH</span>
                    <div className={`w-[8px] h-[8px] rotate-45 ${isSevenCentered ? "animate-diamond" : ""}`}></div>

                </div>
            </div>

            {/* EIGHT */}
            <div>
                <div ref={eightRef} className={`group flex flex-row justify-center items-center text-[#00A8FE] gap-8 ${isEightCentered ? "animate-color" : "opacity-30"}`}>
                    <div className={`w-[8px] h-[8px] rotate-45 ${isEightCentered ? "animate-diamond" : ""}`}></div>
                    <span className="h-[36px] py-[12px] font-ppmori text-[11.5px] 
                                    md:text-[12px] leading-[12px] md:leading-[12.59px] tracking-widest font-semibold">COVERAGE</span>
                    <div className={`w-[8px] h-[8px] rotate-45 ${isEightCentered ? "animate-diamond" : ""}`}></div>

                </div>
            </div>

            {/* Nine */}
            <div>
                <div ref={nineRef} className={`group flex flex-row justify-center items-center text-[#00A8FE] gap-8 ${isNineCentered ? "animate-color" : "opacity-30"}`}>
                    <div className={`w-[8px] h-[8px] rotate-45 ${isNineCentered ? "animate-diamond" : ""}`}></div>
                    <span className="h-[36px] py-[12px] font-ppmori text-[11.5px] 
                                    md:text-[12px] leading-[12px] md:leading-[12.59px] tracking-widest font-semibold">QUANTITY</span>
                    <div className={`w-[8px] h-[8px] rotate-45 ${isNineCentered ? "animate-diamond" : ""}`}></div>

                </div>
            </div>

            {/* TEN */}
            <div>
                <div ref={tenRef} className={`group flex flex-row justify-center items-center text-[#00A8FE] gap-8 ${isTenCentered ? "animate-color" : "opacity-30"}`}>
                    <div className={`w-[8px] h-[8px] rotate-45 ${isTenCentered ? "animate-diamond" : ""}`}></div>
                    <span className="h-[36px] py-[12px] font-ppmori text-[11.5px] 
                                    md:text-[12px] leading-[12px] md:leading-[12.59px] tracking-widest font-semibold">BLENDABILITY</span>
                    <div className={`w-[8px] h-[8px] rotate-45 ${isTenCentered ? "animate-diamond" : ""}`}></div>

                </div>
            </div>

            {/* ELEVEN */}
            <div>
                <div ref={elevenRef} className={`group flex flex-row justify-center items-center text-[#00A8FE] gap-8 ${isElevenCentered ? "animate-color" : "opacity-30"}`}>
                    <div className={`w-[8px] h-[8px] rotate-45 ${isElevenCentered ? "animate-diamond" : ""}`}></div>
                    <span className="h-[36px] py-[12px] font-ppmori text-[11.5px] 
                                    md:text-[12px] leading-[12px] md:leading-[12.59px] tracking-widest font-semibold">EASE OF REMOVAL</span>
                    <div className={`w-[8px] h-[8px] rotate-45 ${isElevenCentered ? "animate-diamond" : ""}`}></div>

                </div>
            </div>

            {/* TWELVE */}
            <div>
                <div ref={twelveRef} className={`group flex flex-row justify-center items-center text-[#00A8FE] gap-8 ${isTwelveCentered ? "animate-color" : "opacity-30"}`}>
                    <div className={`w-[8px] h-[8px] rotate-45 ${isTwelveCentered ? "animate-diamond" : ""}`}></div>
                    <span className="h-[36px] py-[12px] font-ppmori text-[11.5px] 
                                    md:text-[12px] leading-[12px] md:leading-[12.59px] tracking-widest font-semibold">SHELF LIFE</span>
                    <div className={`w-[8px] h-[8px] rotate-45 ${isTwelveCentered ? "animate-diamond" : ""}`}></div>

                </div>
            </div>

            {/* THIRTEEN */}
            <div>
                <div ref={thirteenRef} className={`group flex flex-row justify-center items-center text-[#00A8FE] gap-8 ${isThirteenCentered ? "animate-color" : "opacity-30"}`}>
                    <div className={`w-[8px] h-[8px] rotate-45 ${isThirteenCentered ? "animate-diamond" : ""}`}></div>
                    <span className="h-[36px] py-[12px] font-ppmori text-[11.5px] 
                                    md:text-[12px] leading-[12px] md:leading-[12.59px] tracking-widest font-semibold">PIGMENTATION</span>
                    <div className={`w-[8px] h-[8px] rotate-45 ${isThirteenCentered ? "animate-diamond" : ""}`}></div>

                </div>
            </div>

            {/* FOURTEEN */}
            <div>
                <div ref={fourteenRef} className={`group flex flex-row justify-center items-center text-[#00A8FE] gap-6 ${isFourteenCentered ? "animate-color" : "opacity-30"}`}>
                    <div className={`w-[8px] h-[8px] rotate-45 ${isFourteenCentered ? "animate-diamond" : ""}`}></div>
                    <span className="h-[36px] py-[12px] font-ppmori text-[11.5px] 
                                    md:text-[12px] leading-[12px] md:leading-[12.59px] tracking-widest font-semibold">COLOUR ON MY SKIN TONE</span>
                    <div className={`w-[8px] h-[8px] rotate-45 ${isFourteenCentered ? "animate-diamond" : ""}`}></div>

                </div>
            </div>

            {/* FIFTEEN */}
            <div>
                <div ref={fifteenRef} className={`group flex flex-row justify-center items-center text-[#00A8FE] gap-8 ${isFifteenCentered ? "animate-color" : "opacity-30"}`}>
                    <div className={`w-[8px] h-[8px] rotate-45 ${isFifteenCentered ? "animate-diamond" : ""}`}></div>
                    <span className="h-[36px] py-[12px] font-ppmori text-[11.5px] 
                                    md:text-[12px] leading-[12px] md:leading-[12.59px] tracking-widest font-semibold">LASTING POWER</span>
                    <div className={`w-[8px] h-[8px] rotate-45 ${isFifteenCentered ? "animate-diamond" : ""}`}></div>

                </div>
            </div>


        </div>

    )
}