import { Button } from "@/components/ui/button";
export default function JoinButton({
  children,
  showSpots = true,
}: {
  children: String;
  showSpots?: boolean;
}) {
  return (
    <div className="flex flex-col items-center justify-center">
      <Button className="bg-[#F00832] flex items-center justify-center p-0 m-0 w-[237px] h-[49px] rounded-[28px] shadow-custom border-black border hover:italic hover:bg-[#F00832] hover:shadow-none">
        {/* <div className=""> */}
        <span className="font-semibold inset-0 text-white leading-[14.7px] tracking-[2.5%] text-[14px]">
          {children}
        </span>
        {/* </div> */}
      </Button>
      {showSpots && (
        <div className="text-[13px] leading-[13.65px] tracking-[5%] font-semibold text-center mt-[12px]">
          993 spots left
        </div>
      )}
    </div>
  );
}
