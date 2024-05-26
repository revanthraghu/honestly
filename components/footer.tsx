import logoWebImg from "@/public/navbar/logo-web.svg";
import Image from "next/image";

export default function Footer() {
    return (
        <div>
            <div
                className="md:flex justify-center hidden md:block  w-full h-full p-8 mb-8">
                <Image
                    width={270.92}
                    height={54}
                    src={logoWebImg}
                    alt="logo"
                    className=""
                    priority
                />
            </div>
            <div
                className="md:hidden block flex justify-center w-full h-full p-8 mb-8">
                <Image
                    width={151}
                    height={30.1}
                    src={logoWebImg}
                    alt="logo"
                    className=""
                    priority
                />
            </div>
        </div>

    )
}