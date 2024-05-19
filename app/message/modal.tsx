import Cross from "@/public/messageHeader/Frame.svg";
import Image from "next/image";
import JoinButton from "../../components/ui/join-button";

export default function Modal() {
    return (
        <div className="flex flex-col items-center">
            <div className=" w-[96%] h-[60px] mt-[11px] mx-2 rounded-[100px]" style={{
                background: "#00A8FE"
            }}>
                <div className="px-12">
                    <div className="flex items-center justify-between h-[60px]">
                        <div className="font-ppeditorialnew font-extrabold text-white text-xl leading-[23px]">
                            TL;DR
                        </div>
                        <div className="relative cursor-pointer">
                            <Image src={Cross} alt="chat" />
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="fixed flex flex-col w-[96%] h-[365px] rounded-[32px] mt-[78px]"
                style={{
                    background: "rgba(255, 255, 255, 0.8)"
                }}> */}
            <div className="flex flex-col w-[96%] h-[365px] rounded-[32px] mt-[7px]"
                style={{
                    background: "rgba(255, 255, 255, 0.8)"
                }}>
                <div className="mt-[42px] mx-9 h-[189px] font-ppmori font-normal text-[13px] leading-[19.5px] tracking-wider">
                    <div>
                        👋 Hey. We’re Vivek and Karishma
                        We’re building Bumble for beauty & personal care needs ?
                    </div>
                    <div className="mt-4">
                        <span className="font-semibold ">Huh, you ask?</span>
                        <div>
                            We match you with people who are the same skin tone,
                            skin type, age, gender, hair type as you, and have
                            tried a whole bunch of products to give you
                            <span className="italic"> honest</span>, and <span className="italic">nuanced</span> reviews
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center mt-8">
                    <JoinButton />
                    <div className="font-semibold text-[10px] mt-4">993 spots left</div>
                </div>
                <div className="flex flex-row gap-2 w-[34px] h-[6px] ml-[36px]">
                    <div className="rounded-full w-[6px] h-[6px] bg-filledEllipse">
                    </div>
                    <div className="rounded-full w-[6px] h-[6px] bg-mutedEllipse">
                    </div>
                    <div className="rounded-full w-[6px] h-[6px] bg-mutedEllipse">
                    </div>
                </div>
            </div>
        </div>
    );
}