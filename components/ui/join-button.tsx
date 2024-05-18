import { Button } from "@/components/ui/button";
export default function JoinButton() {
  return (
    <Button className="bg-[#F4434D] p-0 m-0 w-[237px] h-[49px]  rounded-[28px] border-black border hover:italic hover:bg-[#F4434D]">
      <div className="w-[229px]  flex  items-center justify-center h-[41px] border-[0.75px] rounded-[28px] border-dashed border-[#00000080]">
        <span className="font-ppeditorialnew font-semibold text-white leading-[18px] tracking-[2.5%] text-[14px]">
          JOIN THE WAITLIST
        </span>
      </div>
    </Button>
  );
}
