"use client";

import React, { useState, useCallback } from "react";
import { List, ListOrdered, IndentDecrease, IndentIncrease, Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandGroup, CommandItem, CommandList } from "@/components/ui/command";

const iconSize = "h-4 w-4"; // Define the icon size once

const listOptions = [
  { value: "unordered", label: "Unordered List", icon: List },
  { value: "ordered", label: "Ordered List", icon: ListOrdered },
  // { value: "indent-decrease", label: "Decrease Indent", icon: IndentDecrease },
  // { value: "indent-increase", label: "Increase Indent", icon: IndentIncrease },
];

function Listing() {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("unordered");

  const IconComponent = listOptions.find((option) => option.value === selectedValue)?.icon || List;

  const handleSelect = useCallback(
    (value: string) => {
      setSelectedValue(value === selectedValue ? "" : value);
      setOpen(false);
      // You can dispatch a command here if needed, similar to the AlignmentCombobox
    },
    [selectedValue]
  );

  return (
    <div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="ghost" role="combobox" aria-expanded={open} className="flex justify-between items-center h-6 px-1.5">
            <div className="flex items-center">
              <IconComponent className={iconSize} />
              <ChevronDown className="ml-1 h-4 w-3 shrink-0 opacity-50" />
            </div>
            <span className="sr-only">Select list option...</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[4rem] p-0">
          <Command>
            <CommandList>
              <CommandGroup>
                {listOptions.map((option) => (
                  <CommandItem key={option.value} value={option.value} onSelect={() => handleSelect(option.value)} className={`${selectedValue === option.value ? "bg-gray-100" : ""}`}>
                    <Check className={`mr-2 h-4 w-4 ${selectedValue === option.value ? "opacity-100" : "opacity-0"}`} />
                    <option.icon className="h-4 w-4" />
                    <span className="sr-only">{option.label}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default Listing;
