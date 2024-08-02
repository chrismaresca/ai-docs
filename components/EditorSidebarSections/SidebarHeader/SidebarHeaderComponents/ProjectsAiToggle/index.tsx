"use client";
import React, { useEffect, useState, useImperativeHandle, forwardRef } from "react";
import { LucideIcon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface TabsComponentProps {
  labels: string[];
  icons: LucideIcon[];
  activeTabIndex?: number;
  onChange?: (index: number) => void;
  disabledLabels?: string[]; // Optional list of disabled labels
}

export interface TabsComponentRef {
  getActiveTab: () => number;
}

const ProjectsAiToggle: React.ForwardRefRenderFunction<TabsComponentRef, TabsComponentProps> = ({ labels, icons, activeTabIndex = 0, onChange, disabledLabels = [] }, ref) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(activeTabIndex);
  const iconSize = "w-2.5 h-2.5";

  useEffect(() => {
    setCurrentTabIndex(activeTabIndex);
  }, [activeTabIndex]);

  useImperativeHandle(ref, () => ({
    getActiveTab: () => currentTabIndex,
  }));

  const handleTabClick = (index: number) => {
    if (currentTabIndex !== index && !disabledLabels.includes(labels[index])) {
      setCurrentTabIndex(index);
      if (onChange) {
        onChange(index);
      }
    }
  };

  return (
    <div className="mt-[.2rem] w-full py-5 ps-2 pe-3 h-12">
      <div className="flex w-full h-8 bg-muted rounded-lg p-1">
        {labels.map((label, index) => {
          const isDisabled = disabledLabels.includes(label);
          return (
            <div key={label} className="flex-1 ">
              <div className="w-full h-full">
                {isDisabled ? (
                  <TooltipProvider delayDuration={1}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button type="button" className="flex w-full h-full items-center justify-center whitespace-nowrap rounded-lg text-xs font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 opacity-50" disabled>
                          <div className="inline-flex justify-center opacity-30 items-center gap-x-1">
                            {/* {React.createElement(icons[index], { className: `${iconSize} align-center` })} */}
                            {label}
                          </div>
                        </button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="!cursor-pointer">Coming soon!</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ) : (
                  <button
                    type="button"
                    className={`flex w-full h-full items-center justify-center whitespace-nowrap rounded-lg text-xs font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${currentTabIndex === index ? "bg-secondary text-secondary-foreground shadow" : "text-secondary-foreground/60 border-transparent hover:border-gray-400 dark:text-neutral-200 dark:hover:text-white dark:hover:border-neutral-500"}`}
                    onClick={() => handleTabClick(index)}
                  >
                    <div className="inline-flex justify-center items-center gap-x-1">
                      {/* {React.createElement(icons[index], { className: `${iconSize} align-center` })} */}
                      {label}
                    </div>
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default forwardRef(ProjectsAiToggle);
