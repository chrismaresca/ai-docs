import React from "react";
import WritingStyleInput from "./WritingStyleInput";

const WritingDemo: React.FC = () => {
  return (
    <>
      <div className="mt-10 lp-md:mt-8 flex items-center flex-row gap-3 max-lp-md:max-w-[25rem] max-lp-md:mx-auto">
        <WritingStyleInput />
        <a className="w-3/5 lp-md:w-2/5 py-2.5 px-3.5 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg bg-primary text-white hover:bg-primary/90 disabled:opacity-50 disabled:pointer-events-none" href="#">
          Write for Me
          <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </a>
      </div>
    </>
  );
};

export default WritingDemo;
