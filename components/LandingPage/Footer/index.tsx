import React from "react";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import PrelineCopy from "@/components/Preline/Copy";

const LandingPageFooter: React.FC = () => {
  return (
    <footer className="p-4 py-8 sm:p-10">
      <div className="mx-auto">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <div className="flex flex-col items-start">
            <a href="#" className="mb-4 sm:mb-0 text-2xl font-semibold text-gray-900 dark:text-white">
              Workmait
            </a>
            <ul className="flex flex-wrap sm:flex-nowrap sm:mt-4 gap-x-3 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <a href="#features" className="hover:underline">
                  Features
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:underline">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:underline">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div className="flex justify-start sm:justify-end mt-4 sm:mt-0">
            <PrelineCopy />
          </div>
        </div>
        {/* <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 sm:my-8" />
        <div className="sm:items-center sm:justify-between sm:flex">
          <span className="block text-sm text-gray-500 dark:text-gray-400">
            © 2021-2022{" "}
            <a href="https://flowbite.com" className="hover:underline">
              Flowbite™
            </a>
            . All Rights Reserved.
          </span>
        </div> */}
      </div>
    </footer>
  );
};

export default LandingPageFooter;
