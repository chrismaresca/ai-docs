"use client";
import React from "react";
import { Menu } from "lucide-react";

import { useSidebarTogglingContext } from "@/context";
import MainContentHeaderMenubar from "./MainContentHeaderMenubar";

const MainContentHeader: React.FC = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebarTogglingContext();

  return (
    <div className={`z-30 px-2.5 ${isSidebarOpen ? "h-[3.5rem] justify-end" : "h-[3.5rem] justify-between"} inset-x-0 w-full inline-flex flex-row flex-none items-center mt-[0.275rem]`}>
      {!isSidebarOpen && (
        <button onClick={toggleSidebar}>
          <Menu className="h-4 w-4" />
        </button>
      )}
      <div>
        <MainContentHeaderMenubar />
      </div>
    </div>
  );
};

export default MainContentHeader;
