"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { CaseLower } from "lucide-react";
import { useToolbar } from "@/context/ToolbarContext";

import { $getSelection, $isRangeSelection } from "lexical";
import { $patchStyleText } from "@lexical/selection";

const colors = ["#000000", "#FF6900", "#FCB900", "#7BDCB5", "#00D084", "#8ED1FC", "#0693E3", "#ABB8C3", "#EB144C", "#F78DA7", "#9900EF", "#FFFFFF", "#D0021B", "#F5A623", "#F8E71C", "#8B572A", "#7ED321", "#417505", "#BD10E0", "#9013FE", "#4A90E2", "#50E3C2", "#B8E986", "#4A4A4A", "#9B9B9B", "#FFFFFF"];

function ColorPicker() {
  const [selectedColor, setSelectedColor] = React.useState<string>("#000000");
  const { editor } = useToolbar();

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        $patchStyleText(selection, { color });
      }
    });
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="relative inline-block hover:bg-gray-300 rounded-lg">
          <Button variant="ghost" className="p-1 h-4">
            <CaseLower className={`relative h-4 w-4`} />
            <div className="absolute left-0 right-0 bottom-[.2rem] h-1 w-2/3 mx-auto" style={{ backgroundColor: selectedColor }}></div>
          </Button>
        </div>
      </PopoverTrigger>
      <PopoverContent className="p-2 w-[14rem]">
        <div className="grid grid-cols-8 gap-y-1">
          {colors.map((color, index) => (
            <button key={index} className={`w-5 h-5 rounded-[30px] border-gray-200 border`} style={{ backgroundColor: color }} onClick={() => handleColorChange(color)}>
              {selectedColor === color && (
                <div className="w-full h-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default ColorPicker;
