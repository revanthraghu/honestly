import { Button } from "@/components/ui/button";
export default function JoinButton({
  children,
  showSpots = true,
}: {
  children: String;
  showSpots?: boolean;
}) {
  const onClick = () => {
    const url =
      "https://api.whatsapp.com/send?phone=917483487046&text=%F0%9F%91%8B%20Hey%20Karishma%2C%20would%20love%20to%20join%20Honestly%20community.%20My%20name%20is%20"; // Replace with your desired URL
    window.open(url, "_blank");
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <Button
        onClick={onClick}
        className="bg-[#F00832] flex items-center justify-center p-0 m-0 w-[237px] h-[49px] rounded-[28px] shadow-custom border-black border hover:italic hover:bg-[#F00832] hover:shadow-none"
      >
        {/* <div className=""> */}
        <span className="font-semibold inset-0 text-white leading-[14.7px] tracking-[2.5%] text-[14px]">
          {children}
        </span>
        {/* </div> */}
      </Button>
      {showSpots && (
        <div className="text-[13px] leading-[13.65px] tracking-[5%] font-semibold text-center mt-[12px]">
          983 spots left
        </div>
      )}
    </div>
  );
}
