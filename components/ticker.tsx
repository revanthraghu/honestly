function TickerItem() {
  return (
    <span className="inline-block mx-[20px]">
      IT’S TIME FOR A CHANGE <span className="pl-[40px]">!</span>
    </span>
  );
}

export default function Ticker() {
  return (
    <div className="relative flex items-center bg-black pt-2 font-extralight font-ppeditorialnew text-[28px] text-white leading-[32.px] -tracking-[5%] overflow-x-hidden">
      <div className="whitespace-nowrap animate-marquee">
        <TickerItem />
        <TickerItem />
        <TickerItem />
        <TickerItem />
        <TickerItem />
      </div>

      <div className="absolute whitespace-nowrap animate-marquee2">
        <TickerItem />
        <TickerItem />
        <TickerItem />
        <TickerItem />
        <TickerItem />
      </div>
    </div>
  );
}
