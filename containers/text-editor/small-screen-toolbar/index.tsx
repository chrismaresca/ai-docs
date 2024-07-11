"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { EllipsisVertical } from "lucide-react";

// Inline Editor (Basic)
import BasicInlineEditor from "@/components/BasicInlineEditor";
// Inline Editor (Advanced)
import AdvancedInlineEditor from "@/components/AdvancedInlineEditor";

// Embedded Types
import Embedded from "@/components/Embedded";
// Listing
import Listing from "@/components/List";
// Alignment
import AlignmentCombobox from "@/components/Alignment";

function SmallScreenToolbar() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" className="p-1 h-8">
          <EllipsisVertical className="h-5 w-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-2 w-full">
        <div className="flex items-center space-x-2 overflow-auto">
          <div className="md:hidden">
            <BasicInlineEditor />
          </div>
          <div className="border-l md:hidden border-gray-300 dark:border-stone-700 h-8"></div>

          <AdvancedInlineEditor />
          <div className="border-l border-gray-300 dark:border-stone-700 h-8"></div>
          <Listing />
          <div className="border-l border-gray-300 dark:border-stone-700 h-8"></div>
          <div className="lg:hidden">
            <AlignmentCombobox />
          </div>
          <div className="border-l lg:hidden border-gray-300 dark:border-stone-700 h-8"></div>
          <Embedded />
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default SmallScreenToolbar;
