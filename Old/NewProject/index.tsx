import React from "react";
import { NotebookText, Plus } from "lucide-react";

const NewProject: React.FC = () => (
  <div className="flex flex-col rounded-sm justify-center w-[10.5rem] h-[13rem] bg-gray-200 border border-gray-300 hover:border-primary hover:cursor-pointer hover:shadow-sm">
    <div className="flex items-center justify-center w-full h-full bg-white rounded-sm ">
      <Plus className="w-8 h-8" />
    </div>
  </div>
);

export default NewProject;
