import React from "react";
import { Square } from "lucide-react";


const BaseProjectsNavigation: React.FC = () => {
  return (
    <>
      <div className="w-full h-9 rounded-md inline-flex justify-center align-middle items-center shadow-sm shadow-slate-300 border border-border/60">
        <Square fill="primary" className="h-2 w-2 mr-1.5" />
        <div className="text-xs tracking-tighter font-medium">Projects (12) - Chris Marescas Workspace</div>
      </div>
    </>
  );
};

export default BaseProjectsNavigation;
