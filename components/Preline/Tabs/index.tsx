"use client";
import React, { useEffect } from "react";

interface TabsComponentProps {
  labels: string[];
  activeTab: string;
  onTabChange: (label: string) => void;
}

const TabsComponent: React.FC<TabsComponentProps> = ({ labels, activeTab, onTabChange }) => {
  useEffect(() => {
    // Sync the active tab state from the parent
  }, [activeTab]);

  const handleTabClick = (label: string) => {
    onTabChange(label);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="inline-flex h-11 items-center gap-x-2 justify-center bg-muted p-1 text-muted-foreground shadow-md rounded-xl relative">
        {labels.map((label, index) => (
          <button
            key={label}
            type="button"
            className={`inline-flex items-center justify-center whitespace-nowrap rounded-lg px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
              activeTab.toLowerCase() === label.toLowerCase()
                ? "bg-primary text-white shadow-sm"
                : "text-gray-800 border-transparent hover:border-gray-400 dark:text-neutral-200 dark:hover:text-white dark:hover:border-neutral-500"
            }`}
            onClick={() => handleTabClick(label)}
          >
            {label}
          </button>
        ))}
        <span className="absolute -top-11 lg:-top-12 -end-28">
          <span className="flex items-center">
            <svg
              className="w-14 h-8 -me-6"
              width="45"
              height="25"
              viewBox="0 0 45 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M43.2951 3.47877C43.8357 3.59191 44.3656 3.24541 44.4788 2.70484C44.5919 2.16427 44.2454 1.63433 43.7049 1.52119L43.2951 3.47877ZM4.63031 24.4936C4.90293 24.9739 5.51329 25.1423 5.99361 24.8697L13.8208 20.4272C14.3011 20.1546 14.4695 19.5443 14.1969 19.0639C13.9242 18.5836 13.3139 18.4152 12.8336 18.6879L5.87608 22.6367L1.92723 15.6792C1.65462 15.1989 1.04426 15.0305 0.563943 15.3031C0.0836291 15.5757 -0.0847477 16.1861 0.187863 16.6664L4.63031 24.4936ZM43.7049 1.52119C32.7389 -0.77401 23.9595 0.99522 17.3905 5.28788C10.8356 9.57127 6.58742 16.2977 4.53601 23.7341L6.46399 24.2659C8.41258 17.2023 12.4144 10.9287 18.4845 6.96211C24.5405 3.00476 32.7611 1.27399 43.2951 3.47877L43.7049 1.52119Z"
                fill="currentColor"
                className="fill-gray-300 dark:fill-neutral-700"
              />
            </svg>
            <span className="mt-3 inline-block whitespace-nowrap text-[11px] leading-5 font-semibold tracking-wide uppercase bg-primary text-white rounded-full py-1 px-2.5">
              Save up to 20%
            </span>
          </span>
        </span>
      </div>
    </div>
  );
};

export default TabsComponent;
