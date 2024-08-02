import React from "react";
import HeroBrands from "./HeroBrands";

const HeroDesktop = () => {
  return (
    <div className="block max-lp-sm:[25rem] max-md:max-w-[35rem] mx-auto max-lp-md:max-w-[40rem]">
      <div className="grid lp-md:items-center lp-md:grid-cols-12 gap-x-6 lp-md:gap-x-8 mt-10 lp-md:mt-4 lg:mt-2">
        <div className="lp-md:col-span-6 mt-0 lp-md:mt-10 lg:mt-0 lg:col-span-6 text-center lp-md:text-left">
          <h1 className="block font-bold text-gray-800 text-6xl min-[960px]:text-7xl dark:text-white">Write Like Never Before</h1>
          <p className="mt-4 lp:mdtext-lg font-semibold text-gray-800 dark:text-neutral-400 lg:w-full">Quickly find info in documents, simplify complex topics, take notes and write with the power of AI. Save 4 hours on your next paper.</p>

          {/* Start Button Group */}
          <div className="mt-7 gap-3 w-full inline-flex justify-center lp-md:justify-start ">
            <div className="py-3 px-4 cursor-pointer inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-100 text-primary-foreground bg-primary hover:scale-[1.02] transform-gpu hover:border-gray-600 hover:text-white dark:hover:bg-primary-hover dark:hover:text-primary-hover-foreground dark:hover:border-gray-600 disabled:opacity-50 disabled:pointer-events-none">Get started&nbsp; It&apos;s free</div>
            <div className="hs-tooltip inline-block cursor-pointer">
              <div className="hs-tooltip-toggle py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium text-secondary-foreground bg-secondary hover:bg-secondary-hover hover:text-secondary-hover-foreground rounded-lg border border-gray-300 hover:scale-[1.02] focus:z-10 focus:scale-[1.02] transform-gpu disabled:opacity-50 disabled:cursor-not-allowed">
                See in action
                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </div>
              <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute rounded-xl invisible z-10 py-1 px-2 bg-gray-900 text-white" role="tooltip">
                Seriously, it only takes 30 seconds!
              </span>
            </div>
          </div>
          {/* End Button Group */}

          <div className="block lp-md:hidden mt-10">
            <HeroBrands />
          </div>
        </div>

        {/* End Col */}

        <div className="lp-md:col-span-6 lg:col-span-6 mt-10 lg:mt-0">
          <img className="w-full rounded-xl" src="https://images.unsplash.com/photo-1665686376173-ada7a0031a85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=700&q=80" alt="Image Description" />
        </div>
        {/* End Col */}
      </div>
      {/* Brands */}
      <div className="hidden lp-md:block mt-14 lg:mt-10">
        <HeroBrands />
      </div>
      {/* End Brands */}
    </div>
  );
};

export default HeroDesktop;
