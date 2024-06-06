"use client";
import Link from "next/link";
import logoWebImg from "@/public/navbar/logo-web.svg";
import logoMobileImg from "@/public/navbar/logo-mobile.svg";
import chatIcon from "@/public/navbar/chatIcon.svg";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Badge } from "./ui/badge";
import Message from "@/components/message/message";
import { useEffect, useState } from "react";

interface Props {
  isMobile: boolean;
  isMessageBoxOpen: boolean;
  setIsMessageBoxOpen: (arg0: boolean) => void;
}

const storeBooleanInLocalStorage = (key: string, value: boolean) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getBooleanFromLocalStorage = (key: string): boolean => {
  if (typeof window !== "undefined") {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? JSON.parse(storedValue) : false;
  }
  return false;
};

const Navbar = ({ isMobile, isMessageBoxOpen, setIsMessageBoxOpen }: Props) => {
  const [viewed, setViewed] = useState<boolean>(true);

  useEffect(() => {
    setViewed(getBooleanFromLocalStorage("viewed"));
  }, []);

  // const scrollToTop = () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  //   // window.location.href = "";
  // };

  const handleMessageBox = () => {
    storeBooleanInLocalStorage("viewed", true);
    setIsMessageBoxOpen(true);
    setViewed(true);
  };

  const handleMobileMessageBox = () => {
    storeBooleanInLocalStorage("viewed", true);
    // window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMessageBoxOpen(true);
    setViewed(true);
  };

  return (
    <>
      {!isMessageBoxOpen ? (
        <>
          <nav
            className="fixed top-0 z-50 rounded-[100px] mx-[5px] my-[10px] w-[97.5%] md:w-[520px]  md:m-[25px] backdrop-blur-md"
            style={{
              background:
                "radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.12) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%)",
              border: "0.5px solid",

              borderImageSource:
                "radial-gradient(80.38% 222.5% at -13.75% -12.36%, #98F9FF 0%, rgba(255, 255, 255, 0) 100%)",
              boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.07)",
            }}
          >
            <div className="px-12 md:px-9">
              <div className="flex items-center justify-between h-[60px] md:h-[63px]">
                <Link href="#" className="cursor-pointer">
                  <Image
                    src={logoWebImg}
                    alt="logo"
                    className="hidden md:block"
                    priority
                  />
                  <Image
                    src={logoMobileImg}
                    alt="logo"
                    className="block md:hidden"
                    priority
                  />
                </Link>
                <Link
                  href="#faqs"
                  className="text-sm hidden font-semibold md:flex "
                >
                  FAQS
                </Link>
                <Link
                  href="#howitworks"
                  className="text-sm hidden font-semibold md:flex"
                >
                  HOW IT WORKS
                </Link>
                <Separator
                  orientation="vertical"
                  className="bg-[#00A8FE80] h-[23px] hidden md:block"
                />
                <div className="md:hidden block relative cursor-pointer">
                  <Image
                    src={chatIcon}
                    alt="chat"
                    onClick={handleMobileMessageBox}
                  />
                  {!viewed && (
                    <Badge className="absolute -top-1 -right-1 p-0 pt-[1px] bg-red-600 text-white rounded-full w-[14px] h-[14px] flex justify-center items-center text-[8px] hover:bg-red-600">
                      1
                    </Badge>
                  )}
                </div>
                <div className="md:block hidden relative cursor-pointer">
                  <Image src={chatIcon} alt="chat" onClick={handleMessageBox} />
                  {!viewed && (
                    <Badge className="absolute -top-1 -right-1 p-0 pt-[1px] bg-red-600 text-white rounded-full w-[14px] h-[14px] flex justify-center items-center text-[8px] hover:bg-red-600">
                      1
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          </nav>
        </>
      ) : (
        <Message
          isMobile={isMobile}
          isMessageBoxOpen={isMessageBoxOpen}
          setIsMessageBoxOpen={setIsMessageBoxOpen}
        />
      )}
    </>
  );
};

export default Navbar;