"use client";
import React from "react";
import { ChevronDown, MoveLeft, SquarePen, MoveRight, Square, ChevronLeft } from "lucide-react";
import { useProjectContext } from "@/context";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const AllProjectsNavigation: React.FC = () => {
  const { updateProjectID } = useProjectContext();

  const handleReturnToAllProjects = () => {
    updateProjectID(null);
  };

  return (
    <>
      <div className="w-full h-9 rounded-md inline-flex justify-between align-middle items-center shadow-sm shadow-slate-300 border border-border/60">
        <div className="inline-flex justify-center items-center text-xs group hover:cursor-pointer" onClick={handleReturnToAllProjects}>
          <ChevronLeft className="h-2.5 w-2.5 ml-2 mr-1 group-hover:scale-[1.1]" />
          <div className="group-hover:underline">All Projects</div>
        </div>

        <div className="inline-flex justify-end ml-auto items-center mr-4 w-[72%]">
          <Square fill="primary" className="h-2 w-2 mr-1.5" />
          <div className="text-xs tracking-tighter font-medium mr-0.5 truncate">
            <span>Chris Maresca's Workspace</span>
            <span className="mx-2">/</span>
            <span>Project Name</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProjectsNavigation;
