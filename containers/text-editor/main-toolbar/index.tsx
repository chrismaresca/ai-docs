"use client";
import React from "react";

// Import Top Toolbar
import DocEditorHeader from "@/components/DocumentEditorHeader";

// Inline Editor (Basic)
import BasicInlineEditor from "@/components/BasicInlineEditor";
// Inline Editor (Advanced)
import AdvancedInlineEditor from "@/components/AdvancedInlineEditor";
// Block Types
import BlockTypeCombobox from "@/components/BlockType";
// Font Type
import FontTypeCombobox from "@/components/FontFamily";
// Font Size Adjuster
import FontSizeAdjuster from "@/components/FontSize";
// Embedded Types
import Embedded from "@/components/Embedded";
// Listing
import Listing from "@/components/List";
// Alignment
import AlignmentCombobox from "@/components/Alignment";
// Undo/Redo
import UndoRedo from "@/components/UndoRedo";
// Print/Spell Check
import PrintSpellCheck from "@/components/PrintSpellCheck";

// Small Screen Toolbar
import SmallScreenToolbar from "@/containers/text-editor/small-screen-toolbar";

function TextEditorToolbar() {
  return (
    <div className="w-full sticky top-0 inset-x-0 bg-secondary z-50 pb-10">
      <div className="flex flex-wrap md:justify-start md:flex-nowrap w-full">
        <DocEditorHeader />
      </div>
      <div className="flex flex-wrap md:justify-start md:flex-nowrap w-full pt-3">
        <div className="items-center flex-col mx-4 w-full xl:mx-auto xl:max-w-[78rem] justify-center space-x-2 p-2 bg-primary text-primary-foreground rounded-[28px] border border-gray-100 overflow-auto">
          <div className="flex ps-5 xl:ps-0 justify-center items-center space-x-2">
            <UndoRedo />
            <div className="border-l border-gray-300 dark:border-stone-700 h-7"></div>
            <PrintSpellCheck />
            <div className="hidden lg:flex items-center space-x-2">
              <div className="border-l border-gray-300 dark:border-stone-700 h-7"></div>

              <Embedded />
            </div>
            <div className="border-l border-gray-300 dark:border-stone-700 h-7"></div>
            <BlockTypeCombobox />
            <div className="border-l border-gray-300 dark:border-stone-700 h-7"></div>
            <FontTypeCombobox />
            <div className="border-l border-gray-300 dark:border-stone-700 h-7"></div>
            <FontSizeAdjuster />
            <div className="border-l border-gray-300 dark:border-stone-700 h-7"></div>

            <div className="hidden md:flex items-center space-x-2 xl:space-x-2">
              <div className="flex items-center">
                <BasicInlineEditor />
                <div className="border-l hidden xl:flex border-gray-300 dark:border-stone-700 h-7"></div>
              </div>
              <div className="hidden xl:flex items-center">
                <AdvancedInlineEditor />
              </div>
              <div className="border-l border-gray-300 dark:border-stone-700 h-7 hidden md:block"></div>
            </div>
            <div className="hidden lg:flex items-center space-x-2">
              <AlignmentCombobox />
              <div className="border-l border-gray-300 dark:border-stone-700 h-7"></div>
            </div>
            <div className="hidden lg:flex items-center space-x-2">
              <Listing />
              {/* <div className="border-l border-gray-300 dark:border-stone-700 h-7"></div> */}
            </div>

            <div className="xl:hidden flex items-center space-x-2">
              <SmallScreenToolbar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextEditorToolbar;
