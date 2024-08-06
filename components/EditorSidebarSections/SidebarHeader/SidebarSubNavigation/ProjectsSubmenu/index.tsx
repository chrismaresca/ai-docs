import React from "react";
import { PencilLine, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNewProjectStore } from "@/stores/NewProjectStore";

const ProjectsSubmenu = () => {
  const { startNewProject } = useNewProjectStore();

  return (
    <div className="w-full inline-flex justify-between items-center">
      <div className="inline-flex items-baseline ml-0.5">
        <div className="font-medium text-lg">Projects</div>
        <div className="ml-2 text-[10px] font-light">12</div>
      </div>
      <div className="inline-flex ml-auto items-center space-x-2 mr-0.5 text-slate-400">
        <Button variant="ghost" className="p-1 h-8" onClick={startNewProject}>
          <PencilLine className="h-5 w-5" />
        </Button>
        <Button variant="ghost" className="p-1 h-8">
          <Search className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default ProjectsSubmenu;
