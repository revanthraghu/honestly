import { useEffect, useRef, useState } from "react";
export default function UpperIceberg() {
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
    // 0 : Animation not started yet
    // 1 : Animation Started
    // 2 : Animation Ended

    const checkIfOneCentered = () => {
        // One
        if (oneRef.current) {
            const rect = oneRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            const elementCenter = rect.top + rect.height / 2;
            const viewportCenter = windowHeight / 2;

            if (Math.abs(viewportCenter - elementCenter) * 2 < rect.height / 2) {
                setIsOneCentered(true);
                setIsOneAnimated(1);
            } else {
                setIsOneCentered(false);
            }
        }
    };

    const checkIfTwoCentered = () => {
        // Two
        if (twoRef.current) {
            const rect = twoRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            const elementCenter = rect.top + rect.height / 2;
            const viewportCenter = windowHeight / 2;

            if (Math.abs(viewportCenter - elementCenter) < rect.height / 2) {
                setIsTwoCentered(true);
                setIsTwoAnimated(1);
            } else {
                setIsTwoCentered(false);
            }
        }
    };

    const checkIfThreeCentered = () => {
        // Three
        if (threeRef.current) {
            const rect = threeRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            const elementCenter = rect.top + rect.height / 2;
            const viewportCenter = windowHeight / 2;

            if (Math.abs(viewportCenter - elementCenter) < rect.height / 2) {
                setIsThreeCentered(true);
                setIsThreeAnimated(1);
            } else {
                setIsThreeCentered(false);
            }
        }
    };

    const checkIfFourCentered = () => {
        // Four
        if (fourRef.current) {
            const rect = fourRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            const elementCenter = rect.top + rect.height / 2;
            const viewportCenter = windowHeight / 2;

            if (Math.abs(viewportCenter - elementCenter) < rect.height / 2) {
                setIsFourCentered(true);
                setIsFourAnimated(1);
            } else {
                setIsFourCentered(false);
            }
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", checkIfOneCentered);
        checkIfOneCentered(); // Initial check

        window.addEventListener("scroll", checkIfTwoCentered);
        checkIfTwoCentered(); // Initial check

        window.addEventListener("scroll", checkIfThreeCentered);
        checkIfThreeCentered(); // Initial check

        window.addEventListener("scroll", checkIfFourCentered);
        checkIfFourCentered(); // Initial check
    }, []);

    //
    return (
        <div>
            {/* ONE */}
            <div>
                <div
                    ref={oneRef}
                    className={`group flex flex-row justify-center items-center text-[#00A8FE] gap-8 
                                ${isOneAnimated == 1 ? "animate-color" : ""}
                                ${!isOneCentered ? "opacity-30" : ""}
                                ${isOneCentered && isOneAnimated == 2 ? "bg-darkEffect opacity-100 w-[330px] text-[#122B2E]" : ""}
                                `}
                    onAnimationEnd={() => {
                        setIsOneAnimated(2);
                    }}
                >
                    <div
                        className={`w-[8px] h-[8px] rotate-45 
                                    ${isOneAnimated == 1 ? "animate-diamond" : ""}
                                    ${isOneCentered && isOneAnimated == 2 ? "bg-[#FFFFFF] opacity-100 " : ""}
                                    `}
                    ></div>
                    <span
                        className='h-[36px] py-[12px]  text-[11.5px] 
                                    md:text-[12px] leading-[12px] md:leading-[12.59px] tracking-widest font-semibold'
                    >
                        DELIVERY TIME
                    </span>
                    <div
                        className={`w-[8px] h-[8px] rotate-45 
                                    ${isOneAnimated == 1 ? "animate-diamond" : ""}
                                    ${isOneCentered && isOneAnimated == 2 ? "bg-[#FFFFFF] opacity-100 " : ""}
                                    `}
                    ></div>
                </div>
            </div>

            {/* TWO : FAT CLAIMS*/}
            <div>
                <div
                    ref={twoRef}
                    className={`group flex flex-row justify-center items-center text-[#00A8FE] gap-8 
                                ${isTwoAnimated == 1 ? "animate-color" : ""}
                                ${!isTwoCentered ? "opacity-30" : ""}
                                ${isTwoCentered && isTwoAnimated == 2 ? "bg-darkEffect opacity-100 w-[330px] text-[#122B2E]" : ""}
                                `}
                    onAnimationEnd={() => {
                        setIsTwoAnimated(2);
                    }}
                >
                    <div
                        className={`w-[8px] h-[8px] rotate-45 
                                    ${isTwoAnimated == 1 ? "animate-diamond" : ""}
                                    ${isTwoCentered && isTwoAnimated == 2 ? "bg-[#FFFFFF] opacity-100 " : ""}
                                    `}
                    ></div>
                    <span
                        className='h-[36px] py-[12px]  text-[11.5px] 
                                    md:text-[12px] leading-[12px] md:leading-[12.59px] tracking-widest font-semibold'
                    >
                        FAT CLAIMS
                    </span>
                    <div
                        className={`w-[8px] h-[8px] rotate-45 
                                    ${isTwoAnimated == 1 ? "animate-diamond" : ""}
                                    ${isTwoCentered && isTwoAnimated == 2 ? "bg-[#FFFFFF] opacity-100 " : ""}
                                    `}
                    ></div>
                </div>
            </div>

            {/* THREE : PHOTOS OF MODELS*/}
            <div>
                <div
                    ref={threeRef}
                    className={`group flex flex-row justify-center items-center text-[#00A8FE] gap-8 
                                ${isThreeAnimated == 1 ? "animate-color" : ""}
                                ${!isThreeCentered ? "opacity-30" : ""}
                                ${isThreeCentered && isThreeAnimated == 2 ? "bg-darkEffect opacity-100 w-[330px] text-[#122B2E]" : ""}
                                `}
                    onAnimationEnd={() => {
                        setIsThreeAnimated(2);
                    }}
                >
                    <div
                        className={`w-[8px] h-[8px] rotate-45 
                                    ${isThreeAnimated == 1 ? "animate-diamond" : ""}
                                    ${isThreeCentered && isThreeAnimated == 2 ? "bg-[#FFFFFF] opacity-100 " : ""}
                                    `}
                    ></div>
                    <span
                        className='h-[36px] py-[12px]  text-[11.5px] 
                                    md:text-[12px] leading-[12px] md:leading-[12.59px] tracking-widest font-semibold'
                    >
                        PHOTOS OF MODELS
                    </span>
                    <div
                        className={`w-[8px] h-[8px] rotate-45 
                                    ${isThreeAnimated == 1 ? "animate-diamond" : ""}
                                    ${isThreeCentered && isThreeAnimated == 2 ? "bg-[#FFFFFF] opacity-100 " : ""}
                                    `}
                    ></div>
                </div>
            </div>

            {/* FOUR : PRICE */}
            <div>
                <div
                    ref={fourRef}
                    className={`group flex flex-row justify-center items-center text-[#00A8FE] gap-8 
                                ${isFourAnimated == 1 ? "animate-color" : ""}
                                ${!isFourCentered ? "opacity-30" : ""}
                                ${isFourCentered && isFourAnimated == 2 ? "bg-darkEffect opacity-100 w-[330px] text-[#122B2E]" : ""}
                                `}
                    onAnimationEnd={() => {
                        setIsFourAnimated(2);
                    }}
                >
                    <div
                        className={`w-[8px] h-[8px] rotate-45 
                                    ${isFourAnimated == 1 ? "animate-diamond" : ""}
                                    ${isFourCentered && isFourAnimated == 2 ? "bg-[#FFFFFF] opacity-100 " : ""}
                                    `}
                    ></div>
                    <span
                        className='h-[36px] py-[12px]  text-[11.5px] 
                                    md:text-[12px] leading-[12px] md:leading-[12.59px] tracking-widest font-semibold'
                    >
                        PRICE
                    </span>
                    <div
                        className={`w-[8px] h-[8px] rotate-45 
                                    ${isFourAnimated == 1 ? "animate-diamond" : ""}
                                    ${isFourCentered && isFourAnimated == 2 ? "bg-[#FFFFFF] opacity-100 " : ""}
                                    `}
                    ></div>
                </div>
            </div>
        </div>
    );
}
