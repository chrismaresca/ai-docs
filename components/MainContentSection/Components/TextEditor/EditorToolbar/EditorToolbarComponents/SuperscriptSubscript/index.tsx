"use client";

import React, { useCallback, useState } from "react";
import { Strikethrough, Superscript, Subscript, ChevronDown, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { useToolbar } from "@/context/ToolbarContext";
import { FORMAT_TEXT_COMMAND } from "lexical";

const iconSize = "h-4 w-4"; // Define the icon size once

const formatOptions = [
  { value: "superscript", label: "Superscript", icon: Superscript },
  { value: "subscript", label: "Subscript", icon: Subscript },
];

const SuperscriptSubscript: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState<string | null>(null);
  const { editor } = useToolbar();

  const handleSelect = useCallback(
    (value: string) => {
      setSelectedFormat(value === selectedFormat ? null : value);
      setOpen(false);
      editor.dispatchCommand(FORMAT_TEXT_COMMAND, value);
    },
    [selectedFormat, editor]
  );

  const IconComponent = selectedFormat ? formatOptions.find((format) => format.value === selectedFormat)?.icon || Superscript : Superscript;

  return (
    <div className="flex items-center h-7 rounded">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="ghost" role="combobox" aria-expanded={open} className="flex justify-between items-center h-6 px-1.5">
            <div className="flex items-center">
              <IconComponent className={iconSize} />
              <ChevronDown className="ml-1 h-4 w-3 shrink-0 opacity-50" />
            </div>
            <span className="sr-only">Select format...</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[3rem] p-1">
          <div className="w-full flex flex-col items-center text-center">
            {formatOptions.map((format) => (
              <Button key={format.value} variant="ghost" className={`p-1 h-8 flex items-center justify-center w-full ${selectedFormat === format.value ? "bg-gray-100" : ""}`} onClick={() => handleSelect(format.value)}>
                <format.icon className={iconSize} />
                <span className="sr-only">{format.label}</span>
              </Button>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default SuperscriptSubscript;
