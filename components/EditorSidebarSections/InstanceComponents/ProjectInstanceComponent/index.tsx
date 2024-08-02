import React from "react";
import { Pencil, EllipsisVertical, NotebookText } from "lucide-react";
import { useProjectContext } from "@/context";
import { ProjectInstance } from "@/types";

interface ProjectInstanceComponentProps {
  instance: ProjectInstance;
}

const ProjectInstanceComponent: React.FC<ProjectInstanceComponentProps> = ({ instance }) => {
  const { updateProjectID } = useProjectContext();

  return (
    <div className="group w-full flex justify-between items-center ps-2 pe-4 py-3 hover:bg-slate-100 hover:shadow-md cursor-pointer px-4 hover:border-l-[6px] hover:border-l-primary" onClick={() => updateProjectID(instance.projectId)}>
      <div className="flex items-center text-[15px] w-1/2 font-medium tracking-tight">
        {/* <Pencil className="w-4 h-4" /> */}
        {/* <NotebookText className="w-4.5 h-4.5 mr-2"/> */}
        <span className="w-full truncate ps-2">{instance.name}</span>
      </div>
      <div className="inline-flex items-center">
        <div className="mr-5 text-sm font-extralight text-primary/20 group-hover:text-primary/50">{instance.dateLastModified}</div>
        <EllipsisVertical className="w-4 h-4 hover:scale-[1.12]" />
      </div>
    </div>
  );
};

export default ProjectInstanceComponent;
