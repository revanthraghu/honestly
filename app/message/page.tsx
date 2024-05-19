import Vector from "@/public/messageHeader/Vector.svg";
import Image from "next/image";
import JoinButton from "../../components/ui/join-button";
import Modal from "./modal";

export default function Message() {
    return (
        <main className="flex flex-col min-h-screen"
            style={{
                backgroundImage:
                    "linear-gradient(to bottom, rgba(174, 220, 238, 0.5), rgba(244, 245, 240, 0.5))",
            }}>
            <Modal />
            <div>
                <div className="flex flex-row justify-center items-center">
                    {/* <div className="border-black border-[0.5px] w-[96%] h-[292px] mt-[508px] "> */}
                    <div className="border-black border-[0.5px] w-[96%] h-[292px] mt-[73px] ">
                        <div className="flex flex-row">
                            <div className="w-[50%] h-[73px] border-black border-[0.5px]">
                                <div className="font-ppmori font-semibold text-[13px] leading-[26px] px-8 py-[24px]">How it works</div>
                            </div>
                            <div className="w-[50%] h-[73px] border-black border-[0.5px]">
                                <div className="font-ppmori font-semibold text-[13px] leading-[26px] px-8 py-[24px]">FAQs</div>
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <div className="w-[50%] h-[73px] border-black border-[0.5px]">
                                <div className="flex items-center gap-6">
                                    <div className="font-ppmori font-semibold text-[13px] leading-[26px] px-8 py-[24px]">
                                        Instagram
                                    </div>
                                    <div className="relative cursor-pointer">
                                        <Image src={Vector} alt="open" />
                                    </div>
                                </div>
                            </div>
                            <div className="w-[50%] h-[73px] border-black border-[0.5px]">
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
                        <div className=" h-[73px] border-black border-[0.5px]">
                            <div className="font-ppmori font-semibold text-[13px] leading-[26px] px-8 py-[24px]">Join us to build India’s first skin-tone standard</div>
                        </div>
                        <div className=" h-[73px] border-black border-[0.5px]">
                            <div className="font-ppmori font-semibold text-[13px] leading-[26px] px-8 py-[24px]">Tell me more, I like to read long form</div>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}
