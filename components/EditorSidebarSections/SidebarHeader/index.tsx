"use client";
import React from "react";

// Editor Expansion Context
import { useEditorExpansionContext } from "@/context/EditorExpansionContext";

// Sidebar Components
import SidebarHeaderTitleToggle from "./SidebarHeaderTitleToggle";
import SidebarMainNavigation from "./SidebarMainNavigation";
import SidebarSubNavigation from "./SidebarSubNavigation";

interface SidebarHeaderProps {
  toggleSidebar: () => void;
}

const SidebarHeader: React.FC<SidebarHeaderProps> = ({ toggleSidebar }) => {
  const { isEditorExpanded, toggleEditorExpansion } = useEditorExpansionContext();

  return (
    <div className={`px-4`}>
      <SidebarHeaderTitleToggle toggleSidebar={toggleSidebar} />
      <div className={`mt-[2.75rem] ${isEditorExpanded ? "pointer-events-none opacity-50 blur-sm" : ""}`}>
        {/* <SidebarMainNavigation /> */}
        <SidebarSubNavigation />
      </div>
    </div>
  );
};

export default SidebarHeader;
