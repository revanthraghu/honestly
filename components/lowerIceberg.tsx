import { useRef, useEffect, useState, useCallback } from "react";

export default function LowerIceberg() {
    useEffect(() => {
        let timeout: NodeJS.Timeout;
        let observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-color", "[&>div]:animate-diamond");
                    } else {
                        timeout = setTimeout(() => {
                            entry.target.classList.remove("animate-color", "[&>div]:animate-diamond");
                        }, 280);
                    }
                });
            },
            {
                root: null,
                rootMargin: "-50% 0% -50% 0%",
                threshold: 0
            }
        );

        let targets = document.querySelectorAll(".lower-target");
        targets.forEach((target) => {
            observer.observe(target);
        });

        return () => {
            observer.disconnect();
            if (timeout) {
                clearTimeout(timeout);
            }
        };
    }, []);

    return (
        <>
            {/* ONE : INGREDIENTS*/}

            {[
                "INGREDIENTS",
                "EXACT COLOURS",
                "COMEDOGENICITY",
                "PACKAGING",
                "COMFORT",
                "TEXTURE",
                "FINISH",
                "COVERAGE",
                "QUANTITY",
                "BLENDABILITY",
                "SHELF LIFE",
                "PIGMENTATION",
                "COLOUR ON MY SKIN TONE",
                "LASTING POWER"
            ].map((el, i) => (
                <div key={i} className={`lower-target group flex flex-row justify-center items-center text-[#00A8FE] ${i === 12 ? "gap-3" : "gap-8"} opacity-30`}>
                    <div className={`w-[8px] h-[8px] rotate-45`}></div>
                    <span
                        className='h-[36px] py-[12px]  text-[11.5px] 
                                    md:text-[12px] leading-[12px] md:leading-[12.59px] tracking-widest font-semibold'
                    >
                        {el}
                    </span>
                    <div className={`w-[8px] h-[8px] rotate-45`}></div>
                </div>
            ))}
        </>
    );
}
