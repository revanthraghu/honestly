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
    <main className="fixed top-0 flex flex-col h-full z-50 ">
      {isMobile ?
        <div className="flex flex-col backdrop-blur-lg overflow-x-hidden h-screen overflow-y-hidden">
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
