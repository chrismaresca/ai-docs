"use client";
import React from "react";
import { useSearchParams } from "next/navigation";

// Submenus

import ProjectsSubmenu from "./ProjectsSubmenu";
import AllEditsSubmenu from "./AllEditsSubmenu";

const SidebarSubNavigation = () => {
  const searchParams = useSearchParams()
  const projectId = searchParams.get("project") || null;

  return <div className="w-full !tracking-tight flex justify-between items-center text-primary/90">{projectId === null ? <ProjectsSubmenu /> : <AllEditsSubmenu /> }</div>;
};

export default SidebarSubNavigation;
