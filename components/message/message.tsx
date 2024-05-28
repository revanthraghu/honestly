import Info from "./info";
import Modal from "./modal";

interface Props {
  isMobile: boolean;
  isMessageBoxOpen: boolean;
  setIsMessageBoxOpen: (arg0: boolean) => void;
}

const Message = ({
  isMobile,
  isMessageBoxOpen,
  setIsMessageBoxOpen,
}: Props) => {
  return (
    <main className="md:fixed top-0 flex flex-col h-[100%] z-50 md:bg-none bg-transparent ">
      <Modal
        isMobile={isMobile}
        isMessageBoxOpen={isMessageBoxOpen}
        setIsMessageBoxOpen={setIsMessageBoxOpen}
      />
      <Info />
    </main>
  );
};

export default Message;
