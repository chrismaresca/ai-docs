"use client";
import React, { useState, useRef, useEffect } from "react";

// Lexical Imports
import { EditorState } from "lexical";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ToolbarProvider } from "@/context/ToolbarContext";

// Theme
import Theme from "@/ExampleTheme";

// My Components
import Placeholder from "./EditorContentComponents/Placeholder";
import EditorToolbar from "./EditorToolbar";

// Save File Logic
import { saveAs } from "file-saver";

// Define the interface for the props
interface TextEditor2Props {
  isSidebarOpen: boolean;
}

const editorConfig = {
  namespace: "React.js Demo",
  nodes: [],
  onError(error: Error) {
    throw error;
  },
  theme: Theme,
};

const TextEditor2: React.FC<TextEditor2Props> = ({ isSidebarOpen }) => {
  const [editorState, setEditorState] = useState<string | undefined>(undefined);

  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (editorRef.current) {
      const editorRect = editorRef.current.getBoundingClientRect();
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
    <LexicalComposer initialConfig={editorConfig}>
      <ToolbarProvider>
        <EditorToolbar isSidebarOpen={isSidebarOpen} />
        <div className="w-full h-full flex-grow overflow-hidden  " ref={editorRef}>
          <div className="pt-9 relative h-full overflow-auto">
            <RichTextPlugin contentEditable={<ContentEditable className="text-[15px] tab-[1] outline-none p-[15px_10px] border border-border shadow-slate-500 bg-white shadow-sm rounded-[3px] h-[105%] w-[85%]  mx-auto" />} placeholder={null} ErrorBoundary={LexicalErrorBoundary} />
            <OnChangePlugin onChange={onChange} />
          </div>
        </div>
      </ToolbarProvider>
    </LexicalComposer>
  );
};

export default TextEditor2;
