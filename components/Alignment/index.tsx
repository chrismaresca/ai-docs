"use client";

import React, { useCallback, useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Command, CommandGroup, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { AlignCenter, AlignJustify, AlignLeft, AlignRight } from "lucide-react";
import { useToolbar } from "@/context/ToolbarContext";
import { ElementFormatType, FORMAT_ELEMENT_COMMAND } from "lexical"; // Import ElementFormatType from lexical

const alignments = [
  { value: "left", label: "Align Left", icon: AlignLeft },
  { value: "center", label: "Align Center", icon: AlignCenter },
  { value: "right", label: "Align Right", icon: AlignRight },
  { value: "justify", label: "Align Justify", icon: AlignJustify },
];

function AlignmentCombobox() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("left"); // Default to AlignLeft
  const { editor } = useToolbar();

  // Log the IconComponent to verify it's set correctly
  const IconComponent = alignments.find((align) => align.value === value)?.icon || AlignLeft;

  const handleSelect = useCallback(
    (currentValue: string) => {
      setValue(currentValue === value ? "" : currentValue);
      setOpen(false);
      editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, currentValue as ElementFormatType); // Apply the alignment
    },
    [value, editor]
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" role="combobox" aria-expanded={open} className="flex justify-between items-start h-8 px-1.5">
          <div className="flex items-center">
            <IconComponent className="h-4 w-4" />
            <ChevronDown className="ml-1 h-4 w-3 shrink-0 opacity-50" />
          </div>
          <span className="sr-only">Select alignment...</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[150px] p-0">
        <Command>
          <CommandList>
            <CommandGroup>
              {alignments.map((align) => (
                <CommandItem key={align.value} value={align.value} onSelect={() => handleSelect(align.value)}>
                  <Check className={`mr-2 h-4 w-4 ${value === align.value ? "opacity-100" : "opacity-0"}`} />
                  <align.icon className="h-4 w-4" />
                  <span className="sr-only">{align.label}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export default AlignmentCombobox;
