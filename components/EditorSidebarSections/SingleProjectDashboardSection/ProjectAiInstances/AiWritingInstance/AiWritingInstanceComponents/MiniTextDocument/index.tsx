"use client";

import React, { useEffect, useRef, useState } from "react";
import { Content, EditorContent } from "@tiptap/react";
import { usePathname, useSearchParams } from "next/navigation";

// Use TipTapEditor
import useTipTapEditor from "@/lib/services/useTipTapEditor";

// Icons
import { ChevronsUpDown, Copy, PictureInPicture, Pencil } from "lucide-react";

// Toolbar
import TipTapEditorToolbar from "@/components/EditorSidebarSections/SingleProjectDashboardSection/ProjectAiInstances/AiWritingInstance/AiWritingInstanceComponents/MiniTextDocument/TipTapToolbar";
import { TextIteration } from "@/types";

interface IterationInfo {
  datetime?: string;
  isEditExpanded?: boolean;
  iteration: TextIteration;
}

const MiniTextDocument: React.FC<IterationInfo> = ({ isEditExpanded = false, iteration }) => {
  const [isExpanded, setIsExpanded] = useState(isEditExpanded);
  const [isEditing, setIsEditing] = useState(isEditExpanded);
  const contentRef = useRef<HTMLDivElement>(null);
  const editorRef = useRef<any>(null);
  const iconSize = "w-[1.05rem] h-[1.05rem]";
  const pathname = usePathname();
  const searchParams = useSearchParams();
  let inactivityTimeout: NodeJS.Timeout;

  const resetInactivityTimeout = () => {
    clearTimeout(inactivityTimeout);
    inactivityTimeout = setTimeout(() => {
      setIsEditing(false);
    }, 30000);
  };

  const handleEditorFocus = () => {
    setIsEditing(true);
  };

  const handleEditorBlur = () => {
    resetInactivityTimeout();
  };

  useEffect(() => {
    const handleRouteChange = () => {
      setIsEditing(false);
      clearTimeout(inactivityTimeout);
    };

    handleRouteChange();

    return () => {
      clearTimeout(inactivityTimeout);
    };
  }, [pathname, searchParams]);

  useEffect(() => {
    const updateEditorHeight = () => {
      const contentElement = contentRef.current?.querySelector(".tiptap.ProseMirror") as HTMLElement;
      if (contentElement) {
        if (isExpanded) {
          if (!iteration.active) {
            contentElement.style.minHeight = "200px";
            contentElement.style.maxHeight = "200px";
          } else {
            contentElement.style.minHeight = "200px";
            contentElement.style.maxHeight = "200px";
          }
        } else {
          if (!iteration.active) {
            contentElement.style.minHeight = "115px";
            contentElement.style.maxHeight = "115px";
          } else {
            contentElement.style.minHeight = "115px";
            contentElement.style.maxHeight = "115px";
          }
        }
      } else {
        setTimeout(updateEditorHeight, 100); // Retry after 100ms
      }
    };

    updateEditorHeight();
  }, [isExpanded, iteration.active]);

  const handleShowFull = () => {
    setIsExpanded(!isExpanded);
  };

  const editor = useTipTapEditor(handleEditorFocus, handleEditorBlur, iteration.content);
  editorRef.current = editor;

  return (
    <div className={`w-full max-w-full rounded-md shadow-sm shadow-slate-400 border border-border/80 bg-white relative group`}>
      <div className={`m-1 flex items-center rounded-md shadow-sm px-2 py-1 gap-0.5 justify-between`}>
        <div className="flex gap-1.5">
          <button onClick={handleShowFull} className={`relative grid w-6 h-6 max-h-[40px] max-w-[40px] select-none place-items-center rounded-md text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all ${isExpanded ? "bg-primary text-white hover:bg-primary/80" : "hover:bg-gray-900/10"}  active:bg-gray-900/20`} type="button" data-hs-editor-bold>
            <ChevronsUpDown className={iconSize} />
          </button>
          <button className="relative grid w-6 h-6 max-h-[40px] max-w-[40px] select-none place-items-center rounded-md text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 " type="button">
            <Copy className={iconSize} />
          </button>
          <button className="relative grid w-6 h-6 max-h-[40px] max-w-[40px] select-none place-items-center rounded-md text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 " type="button">
            <PictureInPicture className={iconSize} />
          </button>
        </div>
        <TipTapEditorToolbar editor={editor} isEditing={isEditing} />
      </div>
{/* 
      <div className="absolute inset-0 justify-center items-center bg-white bg-opacity-80 z-10 group-hover:flex hidden">
        <button className="relative grid w-6 h-6 max-h-[40px] max-w-[40px] mx-2 select-none place-items-center rounded-md text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 " type="button">
          <Pencil className={iconSize} />
        </button>

        <button className="relative grid w-6 h-6 max-h-[40px] max-w-[40px] mx-2 select-none place-items-center rounded-md text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 " type="button">
          <Copy className={iconSize} />
        </button>
      </div> */}
      <EditorContent ref={contentRef} data-hs-editor-field editor={editor} className={`p-3 [&_*]:outline-none overflow-auto text-sm ${!iteration.active && "pointer-events-none"}`}></EditorContent>
    </div>
  );
};

export default MiniTextDocument;
