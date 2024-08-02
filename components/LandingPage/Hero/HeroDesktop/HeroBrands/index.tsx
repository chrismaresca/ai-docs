/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";

const carouselItemClasses = "basis-1/4 md:basis-1/6";

const HeroBrands = () => {
  return (
    <div className=" max-w-full text-center ">
      <span className="text-sm font-medium text-gray-800 uppercase dark:text-neutral-200">Trusted by 1,000+ researchers and students</span>

      <div className="mt-12 sm:mt-8 px-10 sm:px-0">
        <div className="grid grid-cols-2 sm:flex gap-y-6 sm:gap-x-10 justify-center items-center">
          <div className="inline-flex justify-center items-center w-auto">
            <img src="/harvard.svg" alt="harvard" width="auto" height={64} className="h-[1.4rem]" />
          </div>
          <div className="inline-flex justify-center items-center w-auto">
            <img src="/mckinsey.svg" alt="mckinsey" width="auto" height={64} className="h-[1.8rem]" />
          </div>
          <div className=" inline-flex justify-center items-center w-auto">
            <img src="/mit.svg" alt="mit" width="auto" height={64} className="h-[1.3rem]" />
          </div>
          <div className=" inline-flex justify-center items-center w-auto">
            <img src="/blackrock.svg" alt="blackrock" width="auto" height={64} className="h-[1.2rem]" />
          </div>
          <div className=" inline-flex justify-center items-center w-auto">
            <img src="/cornell.svg" alt="cornell" width="auto" height={64} className="h-[2.4rem]" />
          </div>
          <div className=" inline-flex justify-center items-center w-auto">
            <img src="/goldman.svg" alt="goldman-sachs" width="auto" height={64} className="h-[1.5rem]" />
          </div>
          <div className=" hidden md:inline-flex justify-center items-center w-auto">
            <img src="/stanford.svg" alt="stanford" width="auto" height={64} className="h-[1.01rem]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBrands;
