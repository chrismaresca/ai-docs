"use client";

import * as React from "react";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/services/utils";
import { Button } from "@/components/ui/button";
import { Command, CommandGroup, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useToolbar } from "@/context/ToolbarContext";

import { $getSelection, $isRangeSelection } from "lexical";
import { $patchStyleText } from "@lexical/selection";

const fontTypes = [
  { value: "Arial, sans-serif", label: "Arial" },
  { value: "Georgia, serif", label: "Georgia" },
  { value: "Impact, sans-serif", label: "Impact" },
  { value: "Tahoma, sans-serif", label: "Tahoma" },
  { value: "Times, Times New Roman, serif", label: "Times New Roman" },
  { value: "Verdana, sans-serif", label: "Verdana" },
];

function FontTypeCombobox() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("Arial, sans-serif");
  const { editor } = useToolbar();

  const handleFontChange = (font: string) => {
    setValue(font === "" || font === null ? "Arial, sans-serif" : font);
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        $patchStyleText(selection, { "font-family": font });
      }
    });
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>

      <PopoverTrigger asChild>
        <Button variant="ghost" role="combobox" aria-expanded={open} className="h-7 transition-colors duration-300 ease-in-out pl-2 pr-3 tracking-tight text-[14px] ">
          <div className="w-[4rem] text-left truncate" style={{ fontFamily: value }}>
            {fontTypes.find((font) => font.value === value)?.label}
          </div>
          <div className="w-2">
            <ChevronDown className="mx-0.5 h-3.5 w-3.5 shrink-0 opacity-50" />
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-48 p-0">
        <Command>
          <CommandList>
            <CommandGroup>
              {fontTypes.map((font) => (
                <CommandItem
                  key={font.value}
                  value={font.value}
                  onSelect={(currentValue) => {
                    handleFontChange(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                  style={{ fontFamily: font.value }}
                >
                  <Check className={cn("mr-2 h-4 w-4", value === font.value ? "opacity-100" : "opacity-0")} />
                  {font.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export default FontTypeCombobox;
