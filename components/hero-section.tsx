"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
// import iceberg1Mobile from "@/public/background/iceberg1-mobile.svg";
// import iceberg1Web from "@/public/background/iceberg1-web.svg";
// import icebergUnion from "@/public/background/icebergUnion.svg";
import LowerIceberg from "./lowerIceberg";
import JoinButton from "./ui/join-button";
import UpperIceberg from "./upperIceberg";

const toRotate = ["sunscreen", "lipstick", "lip balm", "cleanser", "concealer", "foundation", "retinol", "moisturizer"];

export default function Hero() {
    const [scrolled, setScrolled] = useState(false);
    const [text, setText] = useState(0);

    useEffect(() => {
        let observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setScrolled(true);
                    } else {
                        setScrolled(false);
                    }
                });
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.1
            }
        );
        let target = document.getElementById("iceberg-tip");
        if (target) {
            observer.observe(target);
        }
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (text != 7) {
                setText(text + 1);
            } else {
                setText(0);
            }
        }, 2000);
        return () => {
            if (timeout) {
                clearTimeout(timeout);
            }
        };
    }, [text]);

    return (
        <>
            <div className='overflow-y-scroll no-scrollbar h-screen flex flex-col items-center justify-center mx-4 md:mx-auto z-10'>
                <h1 className='flex flex-col items-center justify-center text-center font-ppeditorialnew font-normal text-[36px] leading-[41.4px] md:text-[44px] md:leading-[50.6px] md:max-w-[590px]'>
                    <span className='flex flex-row'>
                        <span>Find your holy-grail&nbsp;</span>
                        <span className='hidden italic md:block'>
                            <span className='-webkit-flex-wrap'>{toRotate[text]}</span>
                        </span>
                    </span>
                    <span className='flex flex-col md:block'>
                        <span>
                            <span className='italic md:hidden'>
                                <span className='-webkit-flex-wrap'>{toRotate[text]}</span>
                                &nbsp;
                            </span>
                            <span className='text-center md:hidden'>by asking</span>
                        </span>

                        <span className='text-center hidden md:block'>by asking real people</span>
                        <span className='text-center md:hidden'>real people</span>
                    </span>
                </h1>
                <div className='my-[28px] mx-[32px] text-center text-[13px] leading-[16.9px] tracking-[4%] md:text-[16px] md:leading-[20.8px] md:max-w-[520px] md:mx-auto'>
                    We match people who have the same skin tone, skin type, age, gender, weather—you get the gist. A bit like Bumble, but for beauty
                </div>
                <JoinButton>JOIN THE WAITLIST</JoinButton>
            </div>

            <div className='absolute top-[100vh] left-1/2 transform -translate-x-1/2 flex justify-center'>
                <Image
                    src={"/background/iceberg1-mobile.png"}
                    sizes='(max-width: 768px) 345px, 179px'
                    alt=''
                    priority
                    height={165}
                    width={207}
                    style={{
                        transition: "opacity 0.5s ease-in-out",
                        opacity: scrolled ? 0 : 1
                    }}
                    className='animate-bounce -mt-[50%] -mt-md-[72px] w-md-auto h-md-[143px]'
                />
            </div>
            {/* )} */}

            {/* SECTION TWO */}

            <div>
                <div className='flex flex-col items-center mb-[71px] '>
                    <Image src={"/background/icebergUnion.svg"} alt='background-image-2' width={348} height={935} className='absolute w-auto h-[935px]' />
                    <picture className='absolute'>
                        <source srcSet='/background/dashedSeparator.svg' media='(min-width: 768px)' />
                        <img src='/background/dashedSeparatorMobile.svg' alt='' className='mt-[277px] w-auto' width={380} height={2} />
                    </picture>
                    <div className='flex flex-col justify-center items-center relative z-10'>
                        <div
                            id='iceberg-tip'
                            className='w-[210px] md:w-[260px] h-[64px] md:h-[74px] font-ppeditorialnew text-[28px] md:text-[32px] leading-[32.2px] md:leading-[36.8px] text-center'
                        >
                            How <span className='italic'>brands</span> think we buy products
                        </div>

                        <div className='w-full mt-[42px] md:mt-[32px] flex flex-col items-center'>
                            <UpperIceberg />
                        </div>
                        <div className='flex flex-col justify-center items-center relative z-10 mt-[94px]'>
                            <div className='w-[210px] md:w-[240px] h-[64px] md:h-[74px] font-ppeditorialnew text-[28px] md:text-[32px] leading-[32.2px] md:leading-[36.8px] text-center'>
                                How we
                                <div>
                                    <span className='italic'>actually</span> buy
                                </div>
                            </div>

                            <div className='w-full mt-[42px] md:mt-[32px] flex flex-col items-center '>
                                <LowerIceberg />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
