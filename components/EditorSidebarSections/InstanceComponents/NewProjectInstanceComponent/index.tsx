"use client";
import React, { useState } from "react";
import { Pencil, EllipsisVertical, NotebookText, Check, X } from "lucide-react";

import { useNewProjectStore } from "@/stores/NewProjectStore";

const NewProjectInstanceComponent: React.FC = () => {
  const { resetNewProject } = useNewProjectStore();
  const [projectName, setProjectName] = useState("");

  const handleProjectCreation = async () => {
    console.log("Project Name:", projectName);

    try {
      const response = await fetch("/api/projects", {
        method: "GET", // Adjust method if needed
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to create project");
      }

      const data = await response.json();
      console.log("Project created:", data);

      // Handle success: reset project input, reload if necessary, etc.
      resetNewProject();
      setProjectName("");
    } catch (error) {
      console.error("Error creating project:", error);
    }
  };

  return (
    <div className="group w-full flex justify-between items-center ps-2 pe-4 py-3 hover:bg-slate-100 hover:shadow-md cursor-pointer px-4 hover:border-l-[6px] hover:border-l-primary">
      <div className="flex items-center text-[15px] w-3/4 font-medium tracking-tight">
        {/* <Pencil className="w-4 h-4" /> */}
        {/* <NotebookText className="w-4.5 h-4.5 mr-2"/> */}
        <span className="w-full truncate ps-2">
          <input type="text" value={projectName} onChange={(e) => setProjectName(e.target.value)} maxLength={30} placeholder="Enter project name" className="bg-transparent border-green-800 focus:outline-none flex-grow" />
        </span>
      </div>
      <div className="inline-flex items-center">
        <Check className="w-4 h-4 hover:scale-[1.12] mr-2" onClick={handleProjectCreation} />
        <X className="w-4 h-4 hover:scale-[1.12]" onClick={resetNewProject} />
      </div>
    </div>
  );
};

export default NewProjectInstanceComponent;
