import Vector from "@/public/messageHeader/Vector.svg";
import Image from "next/image";

export default function Info() {
    return (
        <div
            className="block md:hidden top-0 z-50 h-full mx-[9px] w-[96%] pb-8 py-8">
            <div className="flex flex-row  items-center ">
                <div className="h-[292px] w-full border-black border-[0.5px]">
                    <div className="flex flex-row w-full">
                        <div className="w-1/2 h-[73px] border-black border-[0.5px]">
                            <div className="font-ppmori font-semibold text-[13px] leading-[26px] px-8 py-[24px]">How it works</div>
                        </div>
                        <div className="w-1/2 h-[73px] border-black border-[0.5px]">
                            <div className="font-ppmori font-semibold text-[13px] leading-[26px] px-8 py-[24px]">FAQs</div>
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div className="w-full h-[73px] border-black border-[0.5px]">
                            <div className="flex items-center gap-6">
                                <div className="font-ppmori font-semibold text-[13px] leading-[26px] px-8 py-[24px]">
                                    Instagram
                                </div>
                                <div className="relative cursor-pointer">
                                    <Image src={Vector} alt="open" />
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-[73px] border-black border-[0.5px]">
                            <div className="flex items-center gap-6">
                                <div className="font-ppmori font-semibold text-[13px] leading-[26px] px-8 py-[24px]">
                                    LinkedIn
                                </div>
                                <div className="relative cursor-pointer">
                                    <Image src={Vector} alt="open" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-[73px] border-black border-[0.5px]">
                        <div className="font-ppmori font-semibold text-[13px] leading-[26px] px-8 py-[24px]">Join us to build India’s first skin-tone standard</div>
                    </div>
                    <div className="w-full h-[73px] border-black border-[0.5px]">
                        <div className="font-ppmori font-semibold text-[13px] leading-[26px] px-8 py-[24px]">Tell me more, I like to read long form</div>
                    </div>
                </div>
            </div>
        </div>
    )
}