import Info from "./info";
import Modal from "./modal";

interface Props {
  isMobile: boolean;
  isMessageBoxOpen: boolean;
  setIsMessageBoxOpen: (arg0: boolean) => void;
}

export default function Message({
  isMobile,
  isMessageBoxOpen,
  setIsMessageBoxOpen,
}: Props) {
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
