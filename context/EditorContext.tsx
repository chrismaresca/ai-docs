// context/EditorContext.tsx
"use client";
import React, { createContext, useContext, useState, useMemo, ReactNode } from "react";
import { EditorState, RichUtils } from "draft-js";

interface EditorContextType {
  editorState: EditorState;
  setEditorState: React.Dispatch<React.SetStateAction<EditorState>>;
  handleKeyCommand: (command: string) => "handled" | "not-handled";
}

const EditorContext = createContext<EditorContextType | undefined>(undefined);

export const useEditorContext = (): EditorContextType => {
  const context = useContext(EditorContext);
  if (!context) {
    throw new Error("useEditorContext must be used within an EditorProvider");
  }
  return context;
};

interface EditorProviderProps {
  children: ReactNode;
}

export const EditorProvider: React.FC<EditorProviderProps> = ({ children }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleKeyCommand = (command: string): "handled" | "not-handled" => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return "handled";
    }
    return "not-handled";
  };

  const contextValue = useMemo(() => ({ editorState, setEditorState, handleKeyCommand }), [editorState]);

  return <EditorContext.Provider value={contextValue}>{children}</EditorContext.Provider>;
};
