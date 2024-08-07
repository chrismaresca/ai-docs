"use client";
import React from "react";

import { useSidebarTogglingContext } from "@/context";

// Close Sidebar Trigger
import MainContentHeader from "../Components/MainContentHeader";

// TextEditor
import TextEditor2 from "../Components/TextEditor";

// Parameters
import { useSearchParams } from "next/navigation";

const MainContentClient: React.FC = () => {
  const { isSidebarOpen, isToggling } = useSidebarTogglingContext();
  const searchParams = useSearchParams();

  const projectId = searchParams.get("project");

  return (
    <div className={`flex bg-gray-100 flex-col items-between fixed h-[calc(100dvh)] transition-all ${isToggling ? "duration-500" : "duration-0"} ease-in-out ${isSidebarOpen ? "w-[calc(100vw-27rem)]" : "w-screen"}`}>
      {projectId ? (
        <>
          <MainContentHeader />
          <div className="flex flex-col flex-grow ease-in-out w-full mt-6">
            <TextEditor2 isSidebarOpen={isSidebarOpen} />
          </div>
        </>
      ) : (
        <div className="flex ease-in-out justify-center w-full h-full items-center align-middle mb-[10rem]">
          <span className="text-xl text-gray-500">Open a Project to Start Working :)</span>
        </div>
      )}
    </div>
  );
};

export default MainContentClient;
