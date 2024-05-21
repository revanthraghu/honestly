"use client";
import Info from "./info";
import Modal from "./modal";

interface MessageProps {
  isMobile: boolean;
  isMessageBoxOpen: boolean;
  setIsMessageBoxOpen: (arg0: boolean) => void;
}

export default function Message({
  isMobile,
  isMessageBoxOpen,
  setIsMessageBoxOpen,
}: MessageProps) {
  return (
    <main className="md:fixed flex flex-col h-[100%] z-50 md:bg-none bg-gradient-to-b from-topShade to-bottomShade ">
      <Modal
        isMobile={isMobile}
        isMessageBoxOpen={isMessageBoxOpen}
        setIsMessageBoxOpen={setIsMessageBoxOpen}
      />
      <Info />
    </main>
  );
}
