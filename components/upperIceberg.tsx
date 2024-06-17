import { useEffect } from "react";
export default function UpperIceberg() {
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

        let targets = document.querySelectorAll(".upper-target");
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

    //
    return (
        <>
            {/* ONE */}
            {["DELIVERY TIME", "FAT CLAIMS", "PHOTOS OF MODELS", "PRICE"].map((el, i) => (
                <div key={i} className={`upper-target group flex flex-row justify-center items-center gap-8 text-[#00A8FE] opacity-30`}>
                    <div className={`w-[8px] h-[8px] rotate-45 `}></div>
                    <span className='h-[36px] py-[12px]  text-[11.5px] md:text-[12px] leading-[12px] md:leading-[12.59px] tracking-widest font-semibold'>{el}</span>
                    <div className={`w-[8px] h-[8px] rotate-45 `}></div>
                </div>
            ))}
        </>
    );
}
