"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";
import { EditorExpansionContextType } from "@/types";

const EditorExpansionContext = createContext<EditorExpansionContextType | undefined>(undefined);

export const EditorExpansionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isEditorExpanded, setIsEditorExpanded] = useState(false);

  const toggleEditorExpansion = () => {
    setIsEditorExpanded((prev) => !prev);
  };

  return <EditorExpansionContext.Provider value={{ isEditorExpanded, toggleEditorExpansion }}>{children}</EditorExpansionContext.Provider>;
};

export const useEditorExpansionContext = () => {
  const context = useContext(EditorExpansionContext);
  if (context === undefined) {
    throw new Error("useEditorExpansionContext must be used within an EditorExpansionProvider");
  }
  return context;
};
