import logoWebImg from "@/public/navbar/logo-web.svg";
import Image from "next/image";

export default function Footer() {
    return (
        <div
            className="flex justify-center w-full h-full p-8">
            <Image
                src={logoWebImg}
                alt="logo"
                className=""
                priority
            />
        </div>
    )
}