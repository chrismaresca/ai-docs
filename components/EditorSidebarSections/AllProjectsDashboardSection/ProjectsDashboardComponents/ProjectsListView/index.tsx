"use client";

import React, { useEffect, useState } from "react";
import { useNewProjectStore } from "@/stores/NewProjectStore";
import NewProjectInstanceComponent from "@/components/EditorSidebarSections/InstanceComponents/NewProjectInstanceComponent";
import ProjectInstanceComponent from "@/components/EditorSidebarSections/InstanceComponents/ProjectInstanceComponent";
import { ProjectMeta } from "@/types";

interface ProjectsListViewClientProps {
  projects: ProjectMeta[];
}

const ProjectsListViewClient: React.FC<ProjectsListViewClientProps> = ({ projects }) => {
  const { newProjectInProgress, resetNewProject } = useNewProjectStore();
  const [showNewProjectMessage, setShowNewProjectMessage] = useState(false);

  // Effect to update showNewProjectMessage based on newProjectInProgress
  useEffect(() => {
    setShowNewProjectMessage(newProjectInProgress);
  }, [newProjectInProgress]);

  return (
    <div className="flex flex-col mt-[1rem] animate-slide-in-bottom overflow-y-auto pb-10">
      <div className={`transform transition-transform duration-500 ${showNewProjectMessage ? "translate-y-0" : "-translate-y-full"}`}>{showNewProjectMessage && <NewProjectInstanceComponent />}</div>
      {projects.length > 0 ? (
        projects.map((project) => (
          <div key={project.projectId} className={`transform transition-transform duration-500 ${showNewProjectMessage ? "translate-y-0" : "-translate-y-0"}`}>
            <ProjectInstanceComponent project={project} />
          </div>
        ))
      ) : (
        <div className={`transform transition-transform duration-500 mt-[8rem] text-center text-lg text-gray-500 ${showNewProjectMessage ? "translate-y-0" : "-translate-y-0"}`}>No projects yet</div>
      )}
    </div>
  );
};

export default ProjectsListViewClient;
