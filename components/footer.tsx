// import logoWebImg from "@/public/footer/logo-web.svg";
// import logoMobileImg from "@/public/footer/logo-mobile.svg";
import Image from "next/image";

export default function Footer() {
    return (
        <>
            {/* <div className='justify-center hidden md:flex  w-full h-full p-8 mb-8'>
                <Image
                    // width={270.92}
                    // height={54}
                    src={logoWebImg}
                    alt='logo'
                    className=''
                />
            </div> */}
            <div className='flex justify-center w-full h-full p-8 mb-8'>
                {/* <Image
                    // width={151}
                    // height={30.1}
                    src={logoMobileImg}
                    alt='logo'
                    className=''
                /> */}
                <picture>
                    <source srcSet='/footer/logo-web.svg' media='(min-width: 768px)' />
                    <img src='/footer/logo-mobile.svg' alt='honestly' className='w-auto' width={210} height={42} loading='lazy' />
                </picture>
            </div>
        </>
    );
}
