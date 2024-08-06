"use client";
import React from "react";
import { useSearchParams } from "next/navigation";

// Navigations
import BaseProjectsNavigation from "./BaseNavigation";
import AllProjectsNavigation from "./AllProjectNavigation";

const SidebarMainNavigation: React.FC = () => {
  const searchParams = useSearchParams();
  const aiId = searchParams.get("ai") || null;
  const projectId = searchParams.get("project") || null;

  return <div className="w-full my-[0.9rem] !tracking-tight pb-[1.5rem] flex justify-between items-center text-primary/90">{projectId === null ? <BaseProjectsNavigation /> : aiId === null ? <AllProjectsNavigation /> : <AllProjectsNavigation />}</div>;
};

export default SidebarMainNavigation;
