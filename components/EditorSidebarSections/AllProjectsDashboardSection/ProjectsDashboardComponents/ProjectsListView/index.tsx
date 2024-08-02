import React from "react";
import { ProjectInstance } from "@/types";

import ProjectInstanceComponent from "@/components/EditorSidebarSections/InstanceComponents/ProjectInstanceComponent";

const ProjectsListView: React.FC = () => {
  const projects: ProjectInstance[] = Array.from({ length: 15 }, (_, i) => ({
    projectId: (i + 1).toString(),
    name: "Untitled Project",
    projectType: "Essay",
    dateCreated: "May 2, 2024",
    dateLastModified: "Jun 3, 2024",
  }));

  return (
    <div className="flex flex-col mt-[1rem] overflow-y-auto pb-10">
      {projects.map((project, i) => (
        <ProjectInstanceComponent key={project.projectId} instance={project} />
      ))}
    </div>
  );
};

export default ProjectsListView;
