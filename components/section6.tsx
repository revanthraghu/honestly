import Image from "next/image";
import arrowLeftSvg from "@/public/icons/arrow-left.svg";
import arrowRightSvg from "@/public/icons/arrow-right.svg";
import messageIcon from "@/public/icons/message-icon.svg";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";

export default function Section6() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="flex flex-col items-center h-screen mt-[68px] md:mt-[53px] mx-[20px]">
      <div className="font-normal font-ppeditorialnew text-[36px] leading-[41.4px]">
        <span className="hidden md:block">We&apos;re often asked</span>
        <span className="flex flex-col justify-center items-center md:hidden">
          <span>We&apos;re often</span>
          <span>asked</span>
        </span>
      </div>
      {/* <div className=" md:hidden">
        <Carousel setApi={setApi} className="w-full max-w-xs">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="py-2 text-center text-sm text-muted-foreground">
          Slide {current} of {count}
        </div>
      </div> */}
    </div>
  );
}
