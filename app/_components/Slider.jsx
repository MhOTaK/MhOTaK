import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

function Slider({ sliderList }) {
  return (
    <div className="relative mt-10">
      <Carousel className="overflow-hidden rounded-2xl shadow-lg">
        <CarouselContent className="flex transition-transform duration-700 ease-in-out">
          {sliderList.map((slider, index) => (
            <CarouselItem key={index} className="min-w-full">
              <Image
                src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL + slider.attributes?.image?.data[0]?.attributes?.url}
                alt="slider"
                width={1000}
                height={400}
                className="w-full h-[200px] md:h-[400px] object-cover rounded-2xl"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors duration-300">
          &lt;
        </CarouselPrevious>
        <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors duration-300">
          &gt;
        </CarouselNext>
      </Carousel>
    </div>
  );
}

export default Slider;
