"use client";
import React from "react";
import { ChevronsLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

type SidebarNavigationProps = {
  toggleSidebar: () => void;
};

const SidebarHeaderTitleToggle: React.FC<SidebarNavigationProps> = ({ toggleSidebar }) => {
  return (
    <div className="flex-none flex flex-row items-center justify-between pt-4 mb-3 h-12">
      <h2 className="font-semibold text-lg">Workmait</h2>
      <Button variant={"ghost"} onClick={toggleSidebar} className="h-7 p-0 ml-auto hover:bg-muted">
        <ChevronsLeft />
      </Button>
    </div>
  );
};

export default SidebarHeaderTitleToggle;
