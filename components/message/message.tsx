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
    <main className="fixed top-0 flex flex-col h-full z-50">
      {isMobile ?
        <div className="flex flex-col overflow-auto backdrop-blur-lg">
          <Modal
            isMobile={isMobile}
            isMessageBoxOpen={isMessageBoxOpen}
            setIsMessageBoxOpen={setIsMessageBoxOpen}
          />
          <Info />
        </div> :
        <>
          <Modal
            isMobile={isMobile}
            isMessageBoxOpen={isMessageBoxOpen}
            setIsMessageBoxOpen={setIsMessageBoxOpen}
          />
        </>}


    </main>
  );
};

export default Message;
