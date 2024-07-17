"use client";
import React, { useState, useRef, useEffect } from "react";
import { EditorState } from "lexical";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ToolbarProvider } from "@/context/ToolbarContext";
import ToolbarPlugin from "@/components/Toolbar";
import Theme from "@/ExampleTheme";
import TextEditorToolbar from "@/containers/text-editor/main-toolbar";
import { saveAs } from "file-saver";

// import DocEditorHeader from "@/components/DocEditorHeader";
import DocEditorHeader from "@/components/DocumentEditorHeader";

const pxToInches = (px: number) => (px / 96).toFixed(2);

function Placeholder() {
  return <div className="text-gray-600 overflow-hidden absolute top-[15px] left-[10px] text-[15px] select-none inline-block pointer-events-none">Enter some rich text...</div>;
}

const editorConfig = {
  namespace: "React.js Demo",
  nodes: [],
  onError(error: Error) {
    throw error;
  },
  theme: Theme,
};

interface RulerProps {
  pageWidth: number;
  cursorStart: number;
  cursorEnd: number;
  onDragStart: (newPos: number) => void;
  onDragEnd: (newPos: number) => void;
}

const Ruler: React.FC<RulerProps> = ({ pageWidth, cursorStart, cursorEnd, onDragStart, onDragEnd }) => {
  const inchMarks = Math.ceil(pageWidth / 96);

  const handleDrag = (e: React.MouseEvent, type: "start" | "end") => {
    const newPos = e.clientX;
    if (type === "start") onDragStart(newPos);
    else onDragEnd(newPos);
  };

  return (
    <div className="relative border-b border-gray-300" style={{ width: pageWidth }}>
      <div className="absolute top-0 h-full w-0.5 bg-blue-500 cursor-pointer" style={{ left: `${cursorStart}px` }} onMouseDown={(e) => handleDrag(e, "start")}></div>
      <div className="absolute top-0 h-full w-0.5 bg-red-500 cursor-pointer" style={{ left: `${cursorEnd}px` }} onMouseDown={(e) => handleDrag(e, "end")}></div>
      <div className="flex h-4 items-center">
        {[...Array(inchMarks)].map((_, i) => (
          <div key={i} className="relative w-[96px] h-full flex items-center justify-center">
            <span className="absolute bottom-2 text-xs">{i + 1}</span>
            <div className="absolute bottom-0 h-2 w-px bg-black"></div>
            {[...Array(8)].map((_, j) => (
              <div key={j} className={`absolute bottom-0 ${j % 8 === 0 ? "h-4" : "h-2"} w-px bg-black`} style={{ left: `${j * 12}px` }}></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const Page: React.FC = () => {
  const [editorState, setEditorState] = useState<string | undefined>(undefined);
  const [cursorStart, setCursorStart] = useState(0);
  const [cursorEnd, setCursorEnd] = useState(0);
  const editorRef = useRef<HTMLDivElement>(null);
  const rulerRef = useRef<HTMLDivElement>(null);

  const pageWidth = 96 * 8; // 8 inches in pixels
  const pageHeight = "11in"; // 11 inches

  const handleDragStart = (newPos: number) => setCursorStart(newPos);
  const handleDragEnd = (newPos: number) => setCursorEnd(newPos);

  useEffect(() => {
    if (editorRef.current && rulerRef.current) {
      const editorRect = editorRef.current.getBoundingClientRect();
      rulerRef.current.style.width = `${editorRect.width}px`;
    }
  }, []);

  function onChange(newEditorState: EditorState): void {
    const editorStateJSON = newEditorState.toJSON();
    setEditorState(JSON.stringify(editorStateJSON));
  }

  function downloadJSON() {
    if (editorState) {
      const blob = new Blob([editorState], { type: "application/json" });
      saveAs(blob, "test.json");
    }
  }

  return (
    <div>
      <LexicalComposer initialConfig={editorConfig}>
        <ToolbarProvider>
          {/* <button onClick={downloadJSON} className="w-20 bg-black text-white">
            Save as JSON
          </button> */}
          {/* <DocEditorHeader /> */}

          <TextEditorToolbar />

          <div className="overflow-x-auto bg-secondary pt-5">
            <div className="mx-auto" ref={rulerRef}>
              <Ruler pageWidth={pageWidth} cursorStart={cursorStart} cursorEnd={cursorEnd} onDragStart={handleDragStart} onDragEnd={handleDragEnd} />
            </div>
            <div className="mx-auto" ref={editorRef} style={{ width: pageWidth }}>
              <div className="bg-white shadow-2xl w-full h-full" style={{ height: pageHeight }}>
                <div className="relative">
                  <RichTextPlugin contentEditable={<ContentEditable className="min-h-[150px] h-full resize-none text-[15px] relative tab-[1] outline-none p-[15px_10px]" />} placeholder={<Placeholder />} ErrorBoundary={LexicalErrorBoundary} />
                  <OnChangePlugin onChange={onChange} />
                </div>
              </div>
            </div>
          </div>
        </ToolbarProvider>
      </LexicalComposer>
    </div>
  );
};

export default Page;
