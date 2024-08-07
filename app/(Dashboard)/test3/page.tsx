import React from "react";
import Sidebar from "@/components/EditorSidebarSections";
import MainContent from "@/components/MainContentSection";
import ProjectsDashboardSection from "@/components/EditorSidebarSections/AllProjectsDashboardSection";
import SingleProjectDashboardSection from "@/components/EditorSidebarSections/SingleProjectDashboardSection";

interface PageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const page: React.FC<PageProps> = ({ searchParams }) => {
  const projectId = searchParams.project as string || null;

  return (
    <div className="relative flex flex-col w-full h-screen items-end bg-white dark:bg-background">
      <Sidebar>{projectId === null ? <ProjectsDashboardSection /> : <SingleProjectDashboardSection projectId={projectId}/>}</Sidebar>
      <MainContent />
    </div>
  );
};

export default page;
