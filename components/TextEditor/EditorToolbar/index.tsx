"use client";
import React, { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { EllipsisVertical } from "lucide-react";

// Toolbar components
import BasicInlineEditor from "@/components/TextEditor/EditorToolbar/EditorToolbarComponents/BasicInlineEditor";
import SuperscriptSubscript from "./EditorToolbarComponents/SuperscriptSubscript";
import BlockTypeCombobox from "@/components/TextEditor/EditorToolbar/EditorToolbarComponents/BlockType";
import FontTypeCombobox from "@/components/TextEditor/EditorToolbar/EditorToolbarComponents/FontFamily";
import FontSizeAdjuster from "@/components/TextEditor/EditorToolbar/EditorToolbarComponents/FontSize";
import Embedded from "@/components/TextEditor/EditorToolbar/EditorToolbarComponents/Embedded";
import Listing from "@/components/TextEditor/EditorToolbar/EditorToolbarComponents/List";
import AlignmentCombobox from "@/components/TextEditor/EditorToolbar/EditorToolbarComponents/Alignment";
import UndoRedo from "@/components/TextEditor/EditorToolbar/EditorToolbarComponents/UndoRedo";
import PrintSpellCheck from "@/components/TextEditor/EditorToolbar/EditorToolbarComponents/PrintSpellCheck";
import Indentation from "@/components/TextEditor/EditorToolbar/EditorToolbarComponents/Indentation";

// Hooks
import useEditorWindowSize from "@/lib/hooks/useEditorWindowSize";

// Define the interface for the props
interface TextEditorToolbarProps {
  isSidebarOpen: boolean;
}

const EditorToolbar: React.FC<TextEditorToolbarProps> = ({ isSidebarOpen }) => {
  const [ref, width, mainToolbarItems, smallToolbarItems] = useEditorWindowSize();

  const components = [
    { component: <UndoRedo />, dataSize: "500", useDivider: true },
    // { component: <PrintSpellCheck />, dataSize: "800", useDivider: true },
    { component: <Embedded />, dataSize: "800", useDivider: true },
    { component: <BlockTypeCombobox />, dataSize: "800", useDivider: true },
    { component: <FontTypeCombobox />, dataSize: "300", useDivider: true },
    { component: <FontSizeAdjuster />, dataSize: "300", useDivider: true },
    { component: <BasicInlineEditor />, dataSize: "300", useDivider: true },
    { component: <Indentation />, dataSize: "900", useDivider: true },
    { component: <SuperscriptSubscript />, dataSize: "900", useDivider: true },
    { component: <AlignmentCombobox />, dataSize: "500", useDivider: true },
    { component: <Listing />, dataSize: "600", useDivider: false },
  ];

  const allItems = components.map((item, index) => ({ ...item, index }));

  const isItemInMainToolbar = (index: number) => {
    return mainToolbarItems.some((item) => item.index === index);
  };

  function useSmallToolbarDivider(width: number) {
    return useMemo(() => {
      if (width < 600) return false;
      return true;
    }, [width]);
  }

  const shouldRenderDivider = useSmallToolbarDivider(width);

  const getSpaceXClass = () => {
    if (width < 600) return "space-x-1";
    if (width < 1000) return "space-x-3";
    return "space-x-4";
  };

  return (
    <div className="flex justify-start flex-nowrap w-full">
      <div ref={ref} className={`items-center justify-center p-2 border border-border shadow-slate-400 bg-white shadow-sm rounded-lg  text-primary overflow-hidden h-[2.5rem] ${isSidebarOpen ? "w-full mx-4" : "w-4/5 mx-auto"} flex shadow-2xl border border-border`}>
        <div className={`flex justify-center items-center ${getSpaceXClass()} ps-2 pe-2`}>
          {/* Render all toolbar items */}
          {allItems.map((item) => (
            <div key={item.index} className="relative flex justify-center items-center toolbar-component" data-size={item.dataSize} style={{ display: isItemInMainToolbar(item.index) ? "flex" : "none" }}>
              {item.component}
              {item.useDivider && <div className="absolute top-1/2 -right-[.5rem] -translate-y-1/2 h-4 w-px bg-gray-300"></div>}
            </div>
          ))}

          {/* Popover for hidden items */}
          <>
            {smallToolbarItems.length > 0 && (
              <>
                <div className="relative toolbar-component">
                  {shouldRenderDivider && <div className="absolute top-1/2 right-[1.97rem] -translate-x-1/2 -translate-y-1/2 h-4 w-px bg-white"></div>}
                  <div className="flex justify-center items-center">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="ghost" className="p-1 h-6">
                          <EllipsisVertical className="h-4 w-4" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="p-2 w-full overflow-auto" style={{ maxWidth: width }} align="start" sideOffset={-width / 2}>
                        <div className="flex items-center space-x-2 overflow-auto">
                          {smallToolbarItems.length > 0 ? (
                            <div className="flex items-center space-x-2">
                              {allItems.map((item) => (
                                <div key={item.index} className="relative flex justify-center items-center space-x-2 toolbar-component" style={{ display: isItemInMainToolbar(item.index) ? "none" : "flex" }}>
                                  {item.component}
                                  {item.useDivider && <div className="absolute top-1/2 -right-[.22rem] -translate-x-1/2 -translate-y-1/2 h-4 w-px bg-gray-300"></div>}
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div>No hidden items</div>
                          )}
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
              </>
            )}
          </>
        </div>
      </div>
    </div>
  );
};

export default EditorToolbar;
