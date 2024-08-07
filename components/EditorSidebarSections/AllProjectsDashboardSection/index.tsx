import React from "react";
import { Search } from "lucide-react";
import ProjectsListViewClient from "./ProjectsDashboardComponents/ProjectsListView";
import { ProjectMeta } from "@/types";
import { getUserProjects } from "@/lib/services/userProjects";

const fetchProjects = async (): Promise<ProjectMeta[]> => {
  const projects = await getUserProjects()
  return projects

  // // Replace this with your actual data fetching logic
  return Array.from({ length: 10 }, (_, i) => ({
    projectId: (i + 1).toString(),
    name: "Untitled Project",
    projectType: "Essay",
    dateCreated: "May 2, 2024",
    dateLastModified: "Jun 3, 2024",
  }));
};

const ProjectsDashboardSection = async () => {
  // const projects = await fetchProjects();
  const projects = await fetchProjects();

  return (
    <div className="flex flex-col flex-grow overflow-hidden ">
      <ProjectsListViewClient projects={projects} />
    </div>
  );
};

export default ProjectsDashboardSection;
