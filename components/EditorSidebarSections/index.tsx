// app/components/Sidebar.tsx
"use client";

import React, { useEffect, ReactNode } from "react";
import { useSidebarReferences, useEditorExpansionContext, useSidebarTogglingContext } from "@/context";
import SidebarHeader from "./SidebarHeader";

function Sidebar({ children }: { children: React.ReactNode }) {
  const { fullSidebarRef, subSidebarRef, promptOptionsRef } = useSidebarReferences();
  const { isSidebarOpen, toggleSidebar, isToggling } = useSidebarTogglingContext();
  const { isEditorExpanded, toggleEditorExpansion } = useEditorExpansionContext();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (fullSidebarRef.current && fullSidebarRef.current.contains(event.target as Node) && (!subSidebarRef.current || !subSidebarRef.current.contains(event.target as Node)) && (!promptOptionsRef.current || !promptOptionsRef.current.contains(event.target as Node))) {
        if (isEditorExpanded) {
          toggleEditorExpansion();
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isEditorExpanded, toggleEditorExpansion, fullSidebarRef, subSidebarRef, promptOptionsRef]);

  return (
    <div ref={fullSidebarRef} className={`fixed inset-y-0 left-0 h-full transform z-20 border-r shadow-md flex flex-col transition-all ${isToggling ? "duration-500" : "duration-0"} ease-in-out ${isSidebarOpen ? "translate-x-0 w-[27rem]" : "-translate-x-full"}`}>
      <SidebarHeader toggleSidebar={toggleSidebar} />
      {children}
    </div>
  );
}

export default Sidebar;
