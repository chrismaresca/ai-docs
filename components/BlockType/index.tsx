"use client";

import * as React from "react";
import { Check, ChevronsUpDown, ChevronDown } from "lucide-react";

import { cn } from "@/services/utils";
import { Button } from "@/components/ui/button";
import { Command, CommandGroup, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const blockTypes = [
  { value: "normal", label: "Normal" },
  { value: "h1", label: "H1" },
  { value: "h2", label: "H2" },
  { value: "h3", label: "H3" },
  { value: "h4", label: "H4" },
  { value: "h5", label: "H5" },
  { value: "h6", label: "H6" },
  { value: "blockquote", label: "Blockquote" },
  { value: "code", label: "Code" },
];

function BlockTypeCombobox() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("normal");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" role="combobox" aria-expanded={open} className=" h-8 transition-colors duration-300 ease-in-out justify-between">
          {blockTypes.find((block) => block.value === value)?.label}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent side="bottom" className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandGroup>
              {blockTypes.map((block) => (
                <CommandItem
                  key={block.value}
                  value={block.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check className={cn("mr-2 h-4 w-4", value === block.value ? "opacity-100" : "opacity-0")} />
                  {block.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export default BlockTypeCombobox;
