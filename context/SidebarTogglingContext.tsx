"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface SidebarTogglingContextType {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  isToggling: boolean;
}

const SidebarTogglingContext = createContext<SidebarTogglingContextType | undefined>(undefined);

export const SidebarTogglingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isToggling, setIsToggling] = useState(false);

  const toggleSidebar = () => {
    setIsToggling(true);
    setIsSidebarOpen((prev) => !prev);
    setTimeout(() => setIsToggling(false), 300);
  };

  return <SidebarTogglingContext.Provider value={{ isSidebarOpen, toggleSidebar, isToggling }}>{children}</SidebarTogglingContext.Provider>;
};

export const useSidebarTogglingContext = () => {
    const context = useContext(SidebarTogglingContext);
    if (context === undefined) {
      throw new Error("useSidebarTogglingContext must be used within a SidebarTogglingProvider");
    }
    return context;
  };
