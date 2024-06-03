import { Button } from "@/components/ui/button";
export default function JoinButton({ children }: { children: String }) {
  return (
    <Button className="bg-[#F00832] flex items-center justify-center p-0 m-0 w-[237px] h-[49px] rounded-[28px] shadow-custom border-black border hover:italic hover:bg-[#F00832] hover:shadow-none">
      {/* <div className=""> */}
      <span className="font-semibold inset-0 text-white leading-[14.7px] tracking-[2.5%] text-[14px]">
        {children}
      </span>
      {/* </div> */}
    </Button>
  );
}
