"use client"
import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from 'embla-carousel-autoplay';

const carouselItemClasses = "basis-1/4 md:basis-1/6";

const HeroBrands = () => {
  return (
    <div className=" max-w-full text-center ">
      <span className="text-sm font-medium text-gray-800 uppercase dark:text-neutral-200">
        Trusted by 1,000+ researchers and students
      </span>

      <div className="lg:mt-7 mt-10">
        <Carousel opts={{ align: "start", loop: false }}>
          <CarouselContent>
            <CarouselItem className={carouselItemClasses}>
              <div className="flex justify-center">
                <Image src="/mckinsey.svg" alt="mckinsey" width="115" height="64" />
              </div>
            </CarouselItem>
            <CarouselItem className={carouselItemClasses}>
              <div className="flex justify-center">
                <Image src="/mckinsey.svg" alt="mckinsey" width="115" height="64" />
              </div>
            </CarouselItem>
            <CarouselItem className={carouselItemClasses}>
              <div className="flex justify-center">
                <Image src="/mckinsey.svg" alt="mckinsey" width="115" height="64" />
              </div>
            </CarouselItem>
            <CarouselItem className={carouselItemClasses}>
              <div className="flex justify-center">
                <Image src="/mckinsey.svg" alt="mckinsey" width="115" height="64" />
              </div>
            </CarouselItem>
            <CarouselItem className={carouselItemClasses}>
              <div className="flex justify-center">
                <Image src="/mckinsey.svg" alt="mckinsey" width="115" height="64" />
              </div>
            </CarouselItem>
            <CarouselItem className={carouselItemClasses}>
              <div className="flex justify-center">
                <Image src="/mckinsey.svg" alt="mckinsey" width="115" height="64" />
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default HeroBrands;
