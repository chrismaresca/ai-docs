import React from "react";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const LandingPageFooter: React.FC = () => {
  return (
    <footer className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-5">
        <div>
          <Link href="/" className="flex-none text-xl font-semibold text-black dark:text-white" aria-label="Brand">
            Brand
          </Link>
        </div>

        <ul className="text-center">
          <li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-neutral-600">
            <Link href="#features" className="inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200">
              Features
            </Link>
          </li>
          <li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-neutral-600">
            <Link href="#pricing" className="inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200">
              Pricing
            </Link>
          </li>
          <li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-neutral-600">
            <div className="inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="!cursor-pointer" asChild><p>Contact</p></TooltipTrigger>
                  <TooltipContent>
                    <p> Please directly email our founder Chris at chris@workmait.ai with any issues!</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </li>
          <li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-neutral-600">
            <Link href="/blog" className="inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200">
              Blog
            </Link>
          </li>
        </ul>

        {/* <div className="md:text-end space-x-2">
          <Link href="#">
            <a className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700">
              <div className="flex-shrink-0 size-3.5">SVG Placeholder</div>
            </a>
          </Link>
          <Link href="#">
            <a className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700">
              <div className="flex-shrink-0 size-3.5">SVG Placeholder</div>
            </a>
          </Link>
          <Link href="#">
            <a className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700">
              <div className="flex-shrink-0 size-3.5">SVG Placeholder</div>
            </a>
          </Link>
          <Link href="#">
            <a className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700">
              <div className="flex-shrink-0 size-3.5">SVG Placeholder</div>
            </a>
          </Link>
        </div> */}
      </div>
    </footer>
  );
};

export default LandingPageFooter;
