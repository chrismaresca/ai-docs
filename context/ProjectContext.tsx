"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

import { ProjectType } from "@/types";

interface ProjectContextType {
  projectID: string | null;
  projectType: ProjectType;
  updateProjectID: (projectID: string | null) => void;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const ProjectContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [projectID, setProjectID] = useState<string | null>(null);
  const projectType = "Essay"; //This will change in future

  const updateProjectID = (projectID: string | null = null) => {
    setProjectID(projectID);
  };

  return <ProjectContext.Provider value={{ projectID, projectType, updateProjectID }}>{children}</ProjectContext.Provider>;
};

export const useProjectContext = () => {
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw new Error("useProjectContext must be used within an ProjectContextProvider");
  }
  return context;
};
