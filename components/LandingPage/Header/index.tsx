import React from "react";
import Link from "next/link";

import { getTokens } from "next-firebase-auth-edge";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { authConfig } from "@/config/server-config";
import AuthButtons from "./AuthButtonGroup";

export default async function LandingPageHeader() {
  const tokens = await getTokens(cookies(), authConfig);

  var loggedIn = false;

  if (tokens) {
    loggedIn = true;
  }

  return (
    <>
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full pt-4 pb-7">
        <nav className="relative max-w-7xl w-full flex flex-wrap sm:grid sm:grid-cols-12 basis-full items-center px-4 sm:px-6 mx-auto" aria-label="Global">
          <div className="sm:col-span-3">
            {/* Logo */}
            <Link className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80" href="/templates/creative-agency/index.html" aria-label="Preline">
              {/* SVG Placeholder */}
              <div className="w-28 h-auto">Workmait</div>
            </Link>
            {/* End Logo */}
          </div>

          {/* Button Group */}
          <div className="flex items-center gap-x-2 ms-auto py-1 sm:ps-1 sm:order-3 sm:col-span-3">
            {/* <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-gray-200 text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:hover:bg-white/10 dark:text-white dark:hover:text-white">
              <Link href="/projects"> Sign in</Link>
            </button> */}
            <AuthButtons loggedIn={loggedIn} />

            <div className="sm:hidden">
              <button type="button" className="hs-collapse-toggle size-[38px] flex justify-center items-center text-sm font-semibold rounded-xl border border-gray-200 text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                <svg className="hs-collapse-open:hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
                <svg className="hs-collapse-open:block hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </div>
          {/* End Button Group */}

          {/* Collapse */}
          <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block sm:w-auto sm:basis-auto sm:order-2 sm:col-span-6">
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:justify-center sm:items-center sm:gap-y-0 sm:gap-x-7 sm:mt-0">
              <div>
                <Link href="#features" className="inline-block text-sm md:text-base text-black hover:text-gray-600 dark:text-white dark:hover:text-neutral-300">
                  Features
                </Link>
              </div>
              <div>
                <Link href="#testimonials" className="inline-block text-sm md:text-base text-black hover:text-gray-600 dark:text-white dark:hover:text-neutral-300">
                  Tesimonials
                </Link>
              </div>

              <div>
                <Link href="#about-me" className="inline-block text-sm md:text-base text-black hover:text-gray-600 dark:text-white dark:hover:text-neutral-300">
                  Pricing
                </Link>
              </div>
              <div className="hidden lg:inline-block">
                <Link href="#testimonials" className="lg:inline-block text-sm md:text-base text-black hover:text-gray-600 dark:text-white dark:hover:text-neutral-300">
                  FAQ
                </Link>
              </div>

              <div className="hidden md:inline-block">
                <Link className="md:inline-block text-black text-sm md:text-base hover:text-gray-600 dark:text-white dark:hover:text-neutral-300" href="#">
                  Blog
                </Link>
              </div>
            </div>
          </div>
          {/* End Collapse */}
        </nav>
      </header>
    </>
  );
}
