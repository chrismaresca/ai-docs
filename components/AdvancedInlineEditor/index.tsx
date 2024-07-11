"use client";

import React from "react";
import { Strikethrough, Superscript, Subscript, EllipsisVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { useToolbar } from "@/context/ToolbarContext";
import { FORMAT_TEXT_COMMAND } from "lexical";

const iconSize = "h-4 w-4"; // Define the icon size once

const AdvancedInlineEditor: React.FC = () => {
  const { isStrikethrough, editor } = useToolbar();

  return (
    <div className="flex items-center h-8 space-x-2 rounded">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="ghost" className="p-1 h-8">
            <EllipsisVertical className="h-5 w-5" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-2 w-full flex justify-center items-center">
          <div className="flex items-center space-x-2">
            <Button variant="ghost" className={`p-1 h-8 ${isStrikethrough ? "bg-gray-200" : ""}`} onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "strikethrough")}>
              <Strikethrough className={iconSize} />
            </Button>
            <div className="border-l border-gray-300 dark:border-stone-700 h-8"></div>
            <Button variant="ghost" className="p-1 h-8" onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "superscript")}>
              <Superscript className={iconSize} />
            </Button>
            <div className="border-l border-gray-300 dark:border-stone-700 h-8"></div>
            <Button variant="ghost" className="p-1 h-8" onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "subscript")}>
              <Subscript className={iconSize} />
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default AdvancedInlineEditor;
