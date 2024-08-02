import React, { useState } from "react";
import { TextIteration } from "@/types";
import TextIterationComponent from "./TextIterationComponent";
import { ChevronDown, ChevronRight } from "lucide-react";

interface InstancesListViewProps {
  iterations: TextIteration[];
}

const TextIterationListView: React.FC<InstancesListViewProps> = ({ iterations }) => {
  const [isIterationSectionExpanded, setIsIterationSectionExpanded] = useState(false);

  const toggleIterationSectionExpansion = () => {
    setIsIterationSectionExpanded(!isIterationSectionExpanded);
  };

  return (
    <div className="w-full">
      <div className={`w-full px-4 inline-flex justify-between items-center cursor-pointer ${isIterationSectionExpanded ? "my-3" : "mt-2"}`} onClick={toggleIterationSectionExpansion}>
        <div className="inline-flex items-baseline ml-0.5">
          <div className="font-medium text-sm tracking-tight">{isIterationSectionExpanded ? "Hide Past Edits" : "View Past Edits"}</div>
          <div className="ml-1.5 text-xs font-light">{isIterationSectionExpanded ? <ChevronDown className="h-2.5 w-2.5" /> : <ChevronRight className="h-2.5 w-2.5" />}</div>
        </div>
      </div>
      <div className={`my-1 space-y-1 transition-max-height duration-500 ${isIterationSectionExpanded ? "max-h-24 overflow-y-auto" : "max-h-0 overflow-y-hidden"}`}>
        {iterations
          .filter((iteration) => !iteration.active)
          .map((iteration) => (
            <TextIterationComponent key={iteration.iterationId} iteration={iteration} />
          ))}
      </div>
    </div>
  );
};

export default TextIterationListView;
