import Vector from "@/public/messageHeader/Vector.svg";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Faq() {

    const [isSmallTabletOrMobile, setIsSmallTabletOrMobile] = useState<boolean>(false);
    const [clickedMobileOne, setClickedMobileOne] = useState<boolean>(false);
    const [clickedMobileTwo, setClickedMobileTwo] = useState<boolean>(false);
    const [clickedMobileThree, setClickedMobileThree] = useState<boolean>(false);
    const [clickedMobileFour, setClickedMobileFour] = useState<boolean>(false);
    const [clickedMobileFive, setClickedMobileFive] = useState<boolean>(false);

    useEffect(() => {
        function handleResize() {
            setIsSmallTabletOrMobile(window.innerWidth < 992);
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [setIsSmallTabletOrMobile]);

    const handleMobileClear = () => {
        setClickedMobileOne(false);
        setClickedMobileTwo(false);
        setClickedMobileThree(false);
        setClickedMobileFour(false);
        setClickedMobileFive(false);
    }

    const handleMobileFaqOne = () => {
        handleMobileClear();
        setClickedMobileOne(!clickedMobileOne);
    }

    const handleMobileFaqTwo = () => {
        handleMobileClear();
        setClickedMobileTwo(!clickedMobileTwo)
    }

    const handleMobileFaqThree = () => {
        handleMobileClear();
        setClickedMobileThree(!clickedMobileThree)
    }

    const handleMobileFaqFour = () => {
        handleMobileClear();
        setClickedMobileFour(!clickedMobileFour)
    }

    const handleMobileFaqFive = () => {
        handleMobileClear();
        setClickedMobileFive(!clickedMobileFive)
    }

    if (isSmallTabletOrMobile) {
        return (
            <div className="w-full h-full p-8 mt-6">
                <div className="flex flex-row">
                    <div className="h-[302px] w-full border-black border-[0.5px]">
                        <div onClick={handleMobileFaqOne} className={`${clickedMobileOne ? "bg-white" : ""} flex flex-row w-full`}>
                            <div className="w-full h-[73px] border-black border-[0.5px]">
                                <div className="font-ppmori font-semibold text-[13px] leading-[26px] px-6 py-[24px]">Tell me more, I like to read long form</div>
                            </div>
                        </div>
                        <div className="flex flex-row w-full">
                            <div onClick={handleMobileFaqTwo} className={`${clickedMobileTwo ? "bg-white" : ""}  flex flex-col gap-2  w-1/2 h-[83px] border-black border-[0.5px]`}>
                                <div className=" font-ppmori font-semibold text-[13px] leading-[26px] px-6 py-[14px]">
                                    <div className="font-thin">
                                        Work with us
                                    </div>
                                    <div className="underline font-bold">
                                        v@honestly.club
                                    </div>
                                </div>
                            </div>
                            <div className={`flex flex-col gap-2  w-1/2 h-[83px] border-black border-[0.5px] ${clickedMobileThree ? "bg-white" : ""}`}>
                                <div onClick={handleMobileFaqThree} className={`font-ppmori font-semibold text-[13px] leading-[26px] px-6 py-[14px]`}>
                                    <div className="font-thin">
                                        Questions?
                                    </div>
                                    <div className="underline font-bold">
                                        k@honestly.club
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <div onClick={handleMobileFaqFour} className={`${clickedMobileFour ? "bg-white" : ""}  w-full h-[73px] border-black border-[0.5px]`}>
                                <div className="flex items-center gap-2">
                                    <div className="font-ppmori font-semibold text-[13px] leading-[26px] px-6 py-[24px]">
                                        Instagram
                                    </div>
                                    <div className="relative cursor-pointer">
                                        <Image src={Vector} alt="open" />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-[73px]">
                                <div onClick={handleMobileFaqFive} className={`${clickedMobileFive ? "bg-white" : ""} h-[73px] border-black border-[0.5px] flex items-center gap-2`}>
                                    <div className="font-ppmori font-semibold text-[13px] leading-[26px] px-6 py-[24px]">
                                        LinkedIn
                                    </div>
                                    <div className="relative cursor-pointer">
                                        <Image src={Vector} alt="open" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center items-center w-full h-[73px] border-black border-[0.5px]">
                            <div className="font-ppmori font-semibold text-[10px] leading-[20px] px-auto py-[5px]">HONESTLY, NO RIGHTS RESERVED YET</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="w-full h-full p-8 mt-[50px]">
                <div className="flex flex-row  items-center ">
                    <div className="h-[179px] w-full border-black border-[0.5px]">
                        <div className="flex flex-row w-full">
                            <div className="w-1/3 h-[73px] border-black border-[0.5px] hover:bg-white">
                                <div className="font-ppmori font-semibold text-[13px] leading-[26px] px-8 py-[24px]">Tell me more, I like to read long form</div>
                            </div>
                            <div className="w-1/3 h-[73px] border-black border-[0.5px] hover:bg-white">
                                <div className="font-ppmori font-semibold text-[13px] leading-[26px] px-8 py-[24px]">Questions? <span className="underline">k@honestly.club</span></div>
                            </div>
                            <div className="w-1/3 h-[73px] border-black border-[0.5px] hover:bg-white">
                                <div className="font-ppmori font-semibold text-[13px] leading-[26px] px-8 py-[24px]">Follow us on Instagram</div>
                            </div>
                        </div>
                        <div className="flex flex-row w-full">
                            <div className="w-1/3 h-[73px] border-black border-[0.5px] hover:bg-white">
                                <div className="font-ppmori font-semibold text-[13px] leading-[26px] px-8 py-[24px]">Join us to build India’s first skin-tone standard</div>
                            </div>
                            <div className="w-1/3 h-[73px] border-black border-[0.5px] hover:bg-white">
                                <div className="font-ppmori font-semibold text-[13px] leading-[26px] px-8 py-[24px]">Work with us? <span className="underline">v@honestly.club</span></div>
                            </div>
                            <div className="w-1/3 h-[73px] border-black border-[0.5px] hover:bg-white">
                                <div className="font-ppmori font-semibold text-[13px] leading-[26px] px-8 py-[24px]">Follow us on LinkedIn</div>
                            </div>
                        </div>
    
                        <div className="flex justify-center items-center w-full h-[33px] border-black border-[0.5px]">
                            <div className="font-ppmori font-semibold text-[10px] leading-[20px] px-8 ">HONESTLY, NO RIGHTS RESERVED YET</div>
                        </div>
                    </div>
                </div>
            </div>
    
        )
    }

}