"use client";

import React, { useEffect, useRef, useState } from "react";
import { Content, EditorContent } from "@tiptap/react";
import { usePathname, useSearchParams } from "next/navigation";

// Use TipTapEditor
import useTipTapEditor from "@/services/useTipTapEditor";

// Icons
import { ChevronsUpDown, Copy, PictureInPicture } from "lucide-react";

// Toolbar
import TipTapEditorToolbar from "../../components/EditorSidebarSections/SingleProjectDashboardSection/ProjectAiInstances/AiWritingInstance/AiWritingInstanceComponents/MiniTextDocument/TipTapToolbar";

interface IterationInfo {
  type: "original" | "iteration" | "current";
  datetime?: string;
  isEditExpanded?: boolean;
  initialContent?: Content;
}

const OldMiniTextDocument: React.FC<IterationInfo> = ({ type, isEditExpanded = false, initialContent = "" }) => {
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
          if (type !== "current") {
            contentElement.style.minHeight = "100px";
            contentElement.style.maxHeight = "200px";
          } else {
            contentElement.style.minHeight = "300px";
            contentElement.style.maxHeight = "500px";
          }
        } else {
          if (type !== "current") {
            contentElement.style.minHeight = "40px";
            contentElement.style.maxHeight = "60px";
          } else {
            contentElement.style.minHeight = "100px";
            contentElement.style.maxHeight = "200px";
          }
        }
      } else {
        setTimeout(updateEditorHeight, 100); // Retry after 100ms
      }
    };

    updateEditorHeight();
  }, [isExpanded, type]);

  const handleShowFull = () => {
    setIsExpanded(!isExpanded);
  };

  const editor = useTipTapEditor(handleEditorFocus, handleEditorBlur, initialContent);
  editorRef.current = editor;

  return (
    <div className={`w-full max-w-full rounded-xl border border-gray-300 bg-white ${type !== "current" ? "" : ""}`}>
      <div id="hs-editor-tiptap">
        <div className={`m-1 flex items-center rounded-lg bg-gray-100 px-2 py-1 gap-0.5 justify-between`}>
          <div className="flex gap-1.5">
            <button onClick={handleShowFull} className={`relative grid w-6 h-6 max-h-[40px] max-w-[40px] select-none place-items-center rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all ${isExpanded ? "bg-primary text-white hover:bg-primary/80" : "hover:bg-gray-900/10"}  active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`} type="button" data-hs-editor-bold>
              <ChevronsUpDown className={iconSize} />
            </button>
            <button className="relative grid w-6 h-6 max-h-[40px] max-w-[40px] select-none place-items-center rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
              <Copy className={iconSize} />
            </button>
            <button className="relative grid w-6 h-6 max-h-[40px] max-w-[40px] select-none place-items-center rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
              <PictureInPicture className={iconSize} />
            </button>
          </div>
          <div className="h-4 ml-1 w-px bg-gray-400"></div>

          <TipTapEditorToolbar editor={editor} isEditing={isEditing} />
        </div>
        <EditorContent ref={contentRef} data-hs-editor-field editor={editor} className={`p-3 [&_*]:outline-none overflow-auto ${type !== "current" && !isEditing ? "opacity-50" : ""}`}></EditorContent>
      </div>
    </div>
  );
};

export default OldMiniTextDocument;
