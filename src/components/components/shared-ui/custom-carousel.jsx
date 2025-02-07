import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import RenderCarousel from "@/reuse/render-carousel";

export function CustomCarousel({ data, onclick, type }) {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      className="w-[90%] mx-auto max-xl:w-full py-10"
    >
      <CarouselContent>
        {data.map((item, index) => (
          <CarouselItem key={index} className="lg:basis-1/3 md:basis-1/2">
            <RenderCarousel data={item} onclick={onclick} type={type} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        className={`${type === "customer-review" ? "text-black" : ""}`}
      />
      <CarouselNext
        className={`${type === "customer-review" ? "text-black" : ""}`}
      />
    </Carousel>
  );
}
