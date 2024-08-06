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
  const { newProjectInProgress } = useNewProjectStore();
  const [showNewProjectMessage, setShowNewProjectMessage] = useState(false);

  useEffect(() => {
    setShowNewProjectMessage(newProjectInProgress);
  }, [newProjectInProgress]);

  return (
    <div className="flex flex-col mt-[1rem] overflow-y-auto pb-10">
      <div className={`transform transition-transform duration-500 ${showNewProjectMessage ? "translate-y-0" : "-translate-y-full"}`}>
        {showNewProjectMessage && <NewProjectInstanceComponent />}
      </div>
      {projects.map((project) => (
        <div key={project.projectId} className={`transform transition-transform duration-500 ${showNewProjectMessage ? "translate-y-0" : "-translate-y-full"}`}>
          <ProjectInstanceComponent project={project} />
        </div>
      ))}
    </div>
  );
};

export default ProjectsListViewClient;
