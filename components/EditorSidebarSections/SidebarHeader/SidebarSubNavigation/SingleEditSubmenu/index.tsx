import React from "react";
import { ChevronUp, ChevronDown, X } from "lucide-react";

interface SingleEditSubmenuProps {
  editName: string;
  lastUpdated: string;
  fade: boolean;
  isEditorExpanded: boolean;
  setIsEditorExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

const SingleEditSubmenu: React.FC<SingleEditSubmenuProps> = ({ editName, lastUpdated, fade, isEditorExpanded, setIsEditorExpanded }) => {
  const toggleEditorExpansion = () => {
    setIsEditorExpanded((prev) => !prev);
  };

  return (
    <div className="w-full px-4  inline-flex justify-between items-center">
      <div className="inline-flex items-baseline ml-0.5">
        <div className={`font-medium text-lg transition-opacity duration-500 ${fade ? "opacity-0" : "opacity-100"}`}>
          {editName}
        </div>
      </div>
      <div className="inline-flex ml-auto items-center space-x-2 mr-1 text-slate-400">
        {/* <div className={`text-xs font-light transition-opacity duration-500 ${fade ? "opacity-0" : "opacity-100"}`}>
          {lastUpdated}
        </div> */}
        <span className="hover:underline text-xs text-slate-500 w-full text-nowrap cursor-pointer inline-flex justify-end items-center" onClick={toggleEditorExpansion}>
          <span className="relative group font-light">{isEditorExpanded ? "collapse edit" : "show edit"}</span>
          <span className="transition-transform duration-500 ease-in-out">
            {isEditorExpanded ? <ChevronDown className="h-3 w-3 ml-1.5" /> : <ChevronUp className="h-3 w-3 ml-1.5" />}
          </span>
        </span>
        {/* <X className="w-4 h-4 text-gray-500 rounded-full "/> */}
      </div>
    </div>
  );
};

export default SingleEditSubmenu;
