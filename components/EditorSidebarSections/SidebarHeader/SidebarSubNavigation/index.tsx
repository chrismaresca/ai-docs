"use client";
import React from "react";
import { useProjectContext, useAiInstanceContext } from "@/context";

// Submenus

import ProjectsSubmenu from "./ProjectsSubmenu";
import AllEditsSubmenu from "./AllEditsSubmenu";

const SidebarSubNavigation = () => {
  const { projectID } = useProjectContext();

  return <div className="w-full !tracking-tight flex justify-between items-center text-primary/90">{projectID === null ? <ProjectsSubmenu /> : <AllEditsSubmenu /> }</div>;
};

export default SidebarSubNavigation;
