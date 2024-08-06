"use client";
import React, { useState, useEffect } from "react";

// Ai instance Context
import { useProjectContext, ConversationContextProvider, EditorExpansionProvider, useSidebarReferences, useEditorExpansionContext } from "@/context";

// Sidebar Header
import SidebarHeader from "@/components/EditorSidebarSections/SidebarHeader";
import SidebarClosedTrigger from "@/components/EditorSidebarSections/SidebarHeader/SidebarHeaderComponents/SidebarClosedTrigger";

// Project Dashboard section
import ProjectsDashboardSection from "@/components/EditorSidebarSections/AllProjectsDashboardSection";

// Text Editor
import TextEditor2 from "@/components/TextEditor";
import SingleProjectDashboardSection from "@/components/EditorSidebarSections/SingleProjectDashboardSection";

// Projects

const Page: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isToggling, setIsToggling] = useState(false);
  const { projectID } = useProjectContext();
  const { fullSidebarRef, promptOptionsRef, subSidebarRef } = useSidebarReferences();
  const { isEditorExpanded, toggleEditorExpansion } = useEditorExpansionContext();


  const toggleSidebar = () => {
    setIsToggling(true);
    setIsSidebarOpen((prev) => !prev);
    setTimeout(() => setIsToggling(false), 300); // Reset isToggling after 300ms
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        fullSidebarRef.current &&
        fullSidebarRef.current.contains(event.target as Node) && // Click is within fullSidebarRef
        (!subSidebarRef.current || !subSidebarRef.current.contains(event.target as Node)) && // Not within subSidebarRef
        (!promptOptionsRef.current || !promptOptionsRef.current.contains(event.target as Node)) // Not within promptOptionsRef
      ) {
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
    <div className="relative flex flex-col w-full h-screen items-end bg-white dark:bg-background">
      {/* Start Sidebar */}
      <div ref={fullSidebarRef} className={`fixed inset-y-0 left-0 h-full transform z-20 border-r shadow-md flex flex-col transition-all ${isToggling ? "duration-500" : "duration-0"} ease-in-out ${isSidebarOpen ? "translate-x-0 w-[27rem]" : "-translate-x-full"}`}>
        {/* All Projects Dashboard vs Single Project Dashboard */}

        <SidebarHeader toggleSidebar={toggleSidebar} />

        {projectID === null ? <ProjectsDashboardSection /> : <SingleProjectDashboardSection />}
      </div>

      {/* End Sidebar */}

      <div className={`flex flex-col items-between  fixed h-[calc(100dvh)] transition-all ${isToggling ? "duration-500" : "duration-0"} ease-in-out ${isSidebarOpen ? "w-[calc(100vw-27rem)]" : "w-screen"}`}>
        <SidebarClosedTrigger toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        <div className="flex flex-col flex-grow ease-in-out w-full">
          <TextEditor2 isSidebarOpen={isSidebarOpen} />
        </div>
      </div>
    </div>
  );
};

export default Page;
