"use client";
import React from "react";
import { ChevronDown, MoveLeft, SquarePen, MoveRight, Square, ChevronLeft } from "lucide-react";
import { useProjectContext } from "@/context";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const BaseProjectsNavigation: React.FC = () => {
  const { updateProjectID } = useProjectContext();

  const handleReturnToAllProjects = () => {
    updateProjectID(null);
  };

  return (
    <>
      <div className="w-full h-9 rounded-md inline-flex justify-center align-middle items-center shadow-sm shadow-slate-300 border border-border/60">
        <Square fill="primary" className="h-2 w-2 mr-1.5" />
        <div className="text-xs tracking-tighter font-medium">Projects (12) - Chris Maresca's Workspace</div>
      </div>
    </>
  );
};

export default BaseProjectsNavigation;
