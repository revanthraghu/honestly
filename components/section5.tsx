import Image from "next/image";
import logoMobileImg from "@/public/navbar/logo-mobile.svg";
import catSvg from "@/public/working/cat.gif";

export default function Section5() {

    const text = [
        "hi, how does this work?",
        "Start by applying to be a member",
        "so anyone who applies gets in?",
        "No, we’re currently open only to folks who have spent ≥₹10K on beauty products in last 1 year",
        "lmao i spent more than 10K in this last sale itself",
        `You’re one of us🤭? Apply soon, there are perks for the first 1000 members too`
    ]
    return (
        <div className="flex md:flex-row flex-col md:w-full h-[720px]">
            <div className="flex justify-center items-center bg-howItWorksBg bg-cover md:w-1/2 h-[720px] p-8">
                <div className="flex md:flex-col flex-row bg-white w-[284px] h-[613px] rounded-[28px] p-4  ">
                    <div className="w-[242px] h-[82px] mt-4 ">
                        <div className="text-center">
                            <span className="text-[#F4434D] font-ppeditorialnew leading-[41.4px] text-4xl italic font-extrabold text-center">
                                Here’s how it works
                            </span>
                        </div>
                        <div className="w-[250px] border-black border-[1px] mt-4"></div>
                        <div className="flex flex-col justify mt-4">
                            <div className="flex justify-end">
                                <div className={`flex flex-row text-xs pt-2 pb-2 bg-[#AEDCEE80] w-[190.41px] h-auto px-[10px] py-[5px] gap-2 rounded-l-[12px] rounded-tr-[12px]`}  >
                                    <div>
                                        hi, how does this work?
                                    </div>
                                    <div className="w-[21px] h-[21px] bg-white rounded-full border-dashed border-[1px] border-black">

                                        <Image className="w-[20.7px] h-[20.7px] px-[4px] py-[4px]" src={catSvg} alt="open" />
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-start">
                                <div className={`flex flex-row text-xs pt-2 pb-2 bg-[#AEDCEE] w-[190.41px] h-auto px-[10px] py-[5px] gap-2 rounded-tl-[12px] rounded-r-[12px] mt-2`}  >
                                    <div className="w-[21px] h-[21px] bg-white rounded-full border-dashed border-[1px] border-black">

                                        <Image className="w-[20.7px] h-[20.7px] px-[4px] py-[4px]" src={logoMobileImg} alt="open" />
                                    </div>
                                    <div>
                                        <div>
                                            Start by applying to
                                        </div>
                                        <div>
                                            be a member
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end mt-2">
                                <div className={`flex flex-row text-xs pt-2 pb-2 bg-[#AEDCEE80] w-[190.41px] h-auto px-[10px] py-[5px] gap-2 rounded-l-[12px] rounded-tr-[12px]`}  >
                                    <div>
                                        <div>
                                            so anyone who
                                        </div>
                                        <div>
                                            applies gets in?
                                        </div>
                                    </div>
                                    <div className="w-[21px] h-[21px] bg-white rounded-full border-dashed border-[1px] border-black">

                                        <Image className="w-[20.7px] h-[20.7px] px-[4px] py-[4px]" src={catSvg} alt="open" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-start">
                                <div className={`flex flex-row text-xs pt-2 pb-2 bg-[#AEDCEE] w-[190.41px] h-auto px-[10px] py-[5px] gap-2 rounded-tl-[12px] rounded-r-[12px] mt-2`}  >
                                    <div className="w-[21px] h-[21px] bg-white rounded-full border-dashed border-[1px] border-black">

                                        <Image className="w-[20.7px] h-[20.7px] px-[4px] py-[4px]" src={logoMobileImg} alt="open" />
                                    </div>
                                    <div>
                                        <div>
                                            No, we’re currently
                                        </div>
                                        <div>
                                            open only to folks
                                        </div>
                                        <div>
                                            who have spent
                                        </div>
                                        <div>
                                            ≥₹10K on beauty
                                        </div>
                                        <div>
                                            products in last 1 year
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end mt-2">
                                <div className={`flex flex-row text-xs pt-2 pb-2 bg-[#AEDCEE80] w-[190.41px] h-auto px-[10px] py-[5px] gap-2 rounded-l-[12px] rounded-tr-[12px]`}  >
                                    <div>
                                        <div>
                                            lmao i spent  sale itself
                                        </div>
                                        <div>
                                            more than 10K in this last
                                        </div>
                                        <div>
                                            sale itself
                                        </div>
                                    </div>
                                    <div className="w-[21px] h-[21px] bg-white rounded-full border-dashed border-[1px] border-black">
                                        <Image className=" w-[20.7px] h-[20.7px] px-[4px] py-[4px]" src={catSvg} alt="open" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-start">
                                <div className={`flex flex-row text-xs pt-2 pb-2 bg-[#AEDCEE] w-[190.41px] h-auto px-[10px] py-[5px] gap-2 rounded-tl-[12px] rounded-r-[12px] mt-2`}  >
                                    <div className="w-[21px] h-[21px] bg-white rounded-full border-dashed border-[1px] border-black">
                                        <Image className="w-[20.7px] h-[20.7px] px-[4px] py-[4px]" src={logoMobileImg} alt="open" />
                                    </div>
                                    <div>
                                        <div>
                                            You’re one of us🤭
                                        </div>
                                        <div>
                                            Apply soon, there are
                                        </div>
                                        <div>
                                            perks for the first
                                        </div>
                                        <div>
                                            1000 members too
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>

                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center bg-[#F4434D] bg-cover md:w-1/2 h-[720px] p-8">
                <div className="flex flex-col bg-white w-[284px] h-[613px] rounded-[28px]"></div>
            </div>
        </div>
    );
}