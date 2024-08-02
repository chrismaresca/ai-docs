import React from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

interface PromptOptionsProps {
  onSelectOption: (option: string) => void;
}

const options = {
  "Option A": "A",
  "Option B": "B",
  "Option C": "C",
  "Option D": "D",

};

const PromptOptions: React.FC<PromptOptionsProps> = ({ onSelectOption }) => {
  return (
    <DropdownMenuContent className="w-[22rem] max-h-[10rem] overflow-y-auto">
      {Object.entries(options).map(([label, value]) => (
        <DropdownMenuItem key={value} onClick={() => onSelectOption(value)}>
          {label}
        </DropdownMenuItem>
      ))}
    </DropdownMenuContent>
  );
};

export default PromptOptions;
