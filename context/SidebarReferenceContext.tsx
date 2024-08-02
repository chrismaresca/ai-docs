"use client";

import React, { createContext, useRef, useContext, ReactNode } from "react";

interface SidebarReferencesContextType {
  fullSidebarRef: React.RefObject<HTMLDivElement>;
  subSidebarRef: React.RefObject<HTMLDivElement>;
  promptOptionsRef: React.RefObject<HTMLDivElement>;
}

const SidebarReferencesContext = createContext<SidebarReferencesContextType | undefined>(undefined);

export const SidebarReferencesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const fullSidebarRef = useRef<HTMLDivElement>(null);
  const subSidebarRef = useRef<HTMLDivElement>(null);
  const promptOptionsRef = useRef<HTMLDivElement>(null);

  return <SidebarReferencesContext.Provider value={{ fullSidebarRef, subSidebarRef, promptOptionsRef }}>{children}</SidebarReferencesContext.Provider>;
};

export const useSidebarReferences = () => {
  const context = useContext(SidebarReferencesContext);
  if (context === undefined) {
    throw new Error("useSidebarReferences must be used within a SidebarReferencesProvider");
  }
  return context;
};
