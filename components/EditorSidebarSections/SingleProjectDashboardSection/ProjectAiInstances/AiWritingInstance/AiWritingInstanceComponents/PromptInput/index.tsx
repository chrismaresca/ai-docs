'use client'
import React from "react";
import { ArrowUp, Pencil, RotateCw } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import PromptOptions from "./PromptOptions";
import { useSidebarReferences } from "@/context";

interface PromptInputProps {
  promptInputValue: string;
  setPromptInputValue: (value: string) => void;
  onPromptButtonClick: () => void;
}

const PromptInput: React.FC<PromptInputProps> = ({ promptInputValue, setPromptInputValue, onPromptButtonClick }) => {
  const { promptOptionsRef } = useSidebarReferences();

  const handleSelectOption = (option: string) => {
    setPromptInputValue(option);
  };

  return (
    <div className="flex-none flex flex-row items-center justify-between px-1 h-9 mt-3">
      <div className="w-full mx-auto px-2">
        <div ref={promptOptionsRef} className="flex items-center">
          <DropdownMenu>
            <div className="relative w-full">
              <DropdownMenuTrigger asChild>
                <input type="text" readOnly className="p-2.5 ps-6 block w-full border border-border bg-muted rounded-full text-sm focus-visible:outline-primary focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none" placeholder="How can I help?" value={promptInputValue} onChange={(e) => setPromptInputValue(e.target.value)} />
              </DropdownMenuTrigger>
              <div className="absolute top-1/2 end-2 -translate-y-1/2">
                <button type="button" className="size-6 group inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-gray-200 text-primary bg-white hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none" onClick={onPromptButtonClick}>
                  <ArrowUp className="flex-shrink-0 w-[.95rem] h-[.95rem] group-hover:scale-105" />
                </button>
              </div>
            </div>

            <PromptOptions onSelectOption={handleSelectOption} />
          </DropdownMenu>
          <div className="flex items-center ml-2">
            {/* <button type="button" className="size-9 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border bg-muted border-transparent text-gray-500 hover:text-gray-800 disabled:opacity-50 disabled:pointer-events-none">
              <Pencil className="flex-shrink-0 w-[1rem] h-[1rem] group-hover:scale-105" />
            </button> */}
            <button type="button" className="size-9 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:text-gray-800 disabled:opacity-50 disabled:pointer-events-none">
              <RotateCw className="flex-shrink-0 w-[1rem] h-[1rem] group-hover:scale-105" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptInput;
