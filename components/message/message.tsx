import Info from "./info";
import Modal from "./modal";

interface Props {
  setIsMessageBoxOpen: (arg0: boolean) => void;
}

const Message = ({ setIsMessageBoxOpen }: Props) => {
  return (
    <main className="fixed top-0 z-20 flex flex-col h-full ">
      <div className="flex flex-col backdrop-blur-lg overflow-x-hidden min-h-screen md:hidden">
        <Modal setIsMessageBoxOpen={setIsMessageBoxOpen} />
        <Info setIsMessageBoxOpen={setIsMessageBoxOpen} />
      </div>
      <div className="hidden md:block">
        <Modal setIsMessageBoxOpen={setIsMessageBoxOpen} />
      </div>
    </main>
  );
};

export default Message;
