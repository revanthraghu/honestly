import { useRef, useEffect, useState, useCallback } from "react";

export default function UpperIceberg() {

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

    useEffect(() => {
        window.addEventListener('scroll', checkIfOneCentered);
        checkIfOneCentered(); // Initial check

        window.addEventListener('scroll', checkIfTwoCentered);
        checkIfTwoCentered(); // Initial check

        window.addEventListener('scroll', checkIfThreeCentered);
        checkIfThreeCentered(); // Initial check

        window.addEventListener('scroll', checkIfFourCentered);
        checkIfFourCentered(); // Initial check
    }, []);


    return (
        <div>
            {/* ONE */}
            <div>
                <div ref={oneRef} className={`group flex flex-row justify-center items-center text-[#00A8FE] gap-8 ${isOneCentered ? "animate-color" : "opacity-30"}`}>
                    <div className={`w-[8px] h-[8px] rotate-45 ${isOneCentered ? "animate-diamond" : ""}`}></div>
                    <span className="h-[36px] py-[12px] font-ppmori text-[11.5px] 
                                    md:text-[12px] leading-[12px] md:leading-[12.59px] tracking-widest font-semibold">DELIVERY TIME</span>
                    <div className={`w-[8px] h-[8px] rotate-45 ${isOneCentered ? "animate-diamond" : ""}`}></div>

                </div>
            </div>

            {/* TWO */}
            <div>
                <div ref={twoRef} className={`group flex flex-row justify-center items-center text-[#00A8FE] gap-8 ${isTwoCentered ? "animate-color" : "opacity-30"}`}>
                    <div className={`w-[8px] h-[8px] rotate-45 ${isTwoCentered ? "animate-diamond" : ""}`}></div>
                    <span className="h-[36px] py-[12px] font-ppmori text-[11.5px] 
                                    md:text-[12px] leading-[12px] md:leading-[12.59px] tracking-widest font-semibold">FAT CLAIMS</span>
                    <div className={`w-[8px] h-[8px] rotate-45 ${isTwoCentered ? "animate-diamond" : ""}`}></div>

                </div>
            </div>

            {/* THREE */}
            <div>
                <div ref={threeRef} className={`group flex flex-row justify-center items-center text-[#00A8FE] gap-8 ${isThreeCentered ? "animate-color" : "opacity-30"}`}>
                    <div className={`w-[8px] h-[8px] rotate-45 ${isThreeCentered ? "animate-diamond" : ""}`}></div>
                    <span className="h-[36px] py-[12px] font-ppmori text-[11.5px] 
                                    md:text-[12px] leading-[12px] md:leading-[12.59px] tracking-widest font-semibold">PHOTOS OF MODELS</span>
                    <div className={`w-[8px] h-[8px] rotate-45 ${isThreeCentered ? "animate-diamond" : ""}`}></div>

                </div>
            </div>

            {/* FOUR */}
            <div>
                <div ref={fourRef} className={`group flex flex-row justify-center items-center text-[#00A8FE] gap-8 ${isFourCentered ? "animate-color" : "opacity-30"}`}>
                    <div className={`w-[8px] h-[8px] rotate-45 ${isFourCentered ? "animate-diamond" : ""}`}></div>
                    <span className="h-[36px] py-[12px] font-ppmori text-[11.5px] 
                                    md:text-[12px] leading-[12px] md:leading-[12.59px] tracking-widest font-semibold">PRICE</span>
                    <div className={`w-[8px] h-[8px] rotate-45 ${isFourCentered ? "animate-diamond" : ""}`}></div>

                </div>
            </div>
        </div>

    )
}