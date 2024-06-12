import logoWebImg from "@/public/footer/logo-web.png";
import logoMobileImg from "@/public/footer/logo-mobile.png";
import Image from "next/image";

export default function Footer() {
  return (
    <div>
      <div className="justify-center hidden md:flex  w-full h-full p-8 mb-8">
        <Image
          // width={270.92}
          // height={54}
          src={logoWebImg}
          alt="logo"
          className=""
          priority
        />
      </div>
      <div className="md:hidden flex justify-center w-full h-full p-8 mb-8">
        <Image
          // width={151}
          // height={30.1}
          src={logoMobileImg}
          alt="logo"
          className=""
          priority
        />
      </div>
    </div>
  );
}
