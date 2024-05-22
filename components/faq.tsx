import Vector from "@/public/messageHeader/Vector.svg";
import Image from "next/image";

export default function Faq() {
    return (
        <>
            <div className="hidden md:block w-full h-full p-8">
                <div className="flex flex-row  items-center ">
                    <div className="h-[179px] w-full border-black border-[0.5px]">
                        <div className="flex flex-row w-full">
                            <div className="w-1/3 h-[73px] border-black border-[0.5px]">
                                <div className="font-ppmori font-semibold text-[13px] leading-[26px] px-8 py-[24px]">Tell me more, I like to read long form</div>
                            </div>
                            <div className="w-1/3 h-[73px] border-black border-[0.5px]">
                                <div className="font-ppmori font-semibold text-[13px] leading-[26px] px-8 py-[24px]">Questions? <span className="underline">k@honestly.club</span></div>
                            </div>
                            <div className="w-1/3 h-[73px] border-black border-[0.5px]">
                                <div className="font-ppmori font-semibold text-[13px] leading-[26px] px-8 py-[24px]">Follow us on Instagram</div>
                            </div>
                        </div>
                        <div className="flex flex-row w-full">
                            <div className="w-1/3 h-[73px] border-black border-[0.5px]">
                                <div className="font-ppmori font-semibold text-[13px] leading-[26px] px-8 py-[24px]">Join us to build India’s first skin-tone standard</div>
                            </div>
                            <div className="w-1/3 h-[73px] border-black border-[0.5px]">
                                <div className="font-ppmori font-semibold text-[13px] leading-[26px] px-8 py-[24px]">Work with us? <span className="underline">v@honestly.club</span></div>
                            </div>
                            <div className="w-1/3 h-[73px] border-black border-[0.5px]">
                                <div className="font-ppmori font-semibold text-[13px] leading-[26px] px-8 py-[24px]">Follow us on LinkedIn</div>
                            </div>
                        </div>

                        <div className="flex justify-center items-center w-full h-[33px] border-black border-[0.5px]">
                            <div className="font-ppmori font-semibold text-[13px] leading-[26px] px-8">HONESTLY, NO RIGHTS RESERVED YET</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="block md:hidden w-full h-full p-8 mt-[720px]">
                <div className="flex flex-row">
                    <div className="h-[302px] w-full border-black border-[0.5px]">
                        <div className="flex flex-row w-full">
                            <div className="w-full h-[73px] border-black border-[0.5px]">
                                <div className="font-ppmori font-semibold text-[13px] leading-[26px] px-8 py-[24px]">Tell me more, I like to read long form</div>
                            </div>
                        </div>
                        <div className="flex flex-row w-full">
                            <div className="flex flex-col gap-2  w-1/2 h-[83px] border-black border-[0.5px]">
                                <div className=" font-ppmori font-semibold text-[13px] leading-[26px] px-8 py-[14px]">
                                    <div className="font-thin">
                                        Work with us
                                    </div>
                                    <div className="underline font-bold">
                                        v@honestly.club
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2  w-1/2 h-[83px] border-black border-[0.5px]">
                                <div className=" font-ppmori font-semibold text-[13px] leading-[26px] px-8 py-[14px]">
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
                            <div className="w-full h-[73px] border-black border-[0.5px]">
                                <div className="flex items-center gap-2">
                                    <div className="font-ppmori font-semibold text-[13px] leading-[26px] px-8 py-[24px]">
                                        Instagram
                                    </div>
                                    <div className="relative cursor-pointer">
                                        <Image src={Vector} alt="open" />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-[73px] border-black border-[0.5px]">
                                <div className="flex items-center gap-2">
                                    <div className="font-ppmori font-semibold text-[13px] leading-[26px] px-8 py-[24px]">
                                        LinkedIn
                                    </div>
                                    <div className="relative cursor-pointer">
                                        <Image src={Vector} alt="open" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center items-center w-full h-[73px] border-black border-[0.5px]">
                            <div className="font-ppmori font-semibold text-[13px] leading-[10px] px-8 py-[5px]">HONESTLY, NO RIGHTS RESERVED YET</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}