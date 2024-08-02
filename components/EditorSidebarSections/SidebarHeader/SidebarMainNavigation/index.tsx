"use client";
import React from "react";
import { useProjectContext, useAiInstanceContext } from "@/context";

// Navigations
import BaseProjectsNavigation from "./BaseNavigation";
import AllProjectsNavigation from "./AllProjectNavigation";
import SingleProjectNavigation from "./SingleProjectNavigation";

const SidebarMainNavigation: React.FC = () => {
  const { aiInstanceID } = useAiInstanceContext();
  const { projectID } = useProjectContext();

  return <div className="w-full my-[0.9rem] !tracking-tight pb-[1.5rem] flex justify-between items-center text-primary/90">{projectID === null ? <BaseProjectsNavigation /> : aiInstanceID === null ? <AllProjectsNavigation /> : <AllProjectsNavigation />}</div>;
};

export default SidebarMainNavigation;
