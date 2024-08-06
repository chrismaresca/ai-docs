"use client";
import React from "react";
import categorizeEditsByDate from "@/lib/utils/categorizeDates";
import { useEditorExpansionContext } from "@/context";
import EditInstanceComponent from "../../InstanceComponents/EditInstanceComponent";
import { AiInstanceMeta } from "@/types";
import AiWritingInstance from "../ProjectAiInstances/AiWritingInstance";
import { useSearchParams } from "next/navigation";

interface ProjectsAiListViewClientProps {
  aiInstances: AiInstanceMeta[];
}

const ProjectAiListViewClient: React.FC<ProjectsAiListViewClientProps> = ({ aiInstances }) => {
  const { isEditorExpanded } = useEditorExpansionContext();
  const searchParams = useSearchParams();
  const aiId = searchParams.get("ai") || null;

  // const categories = categorizeEditsByDate(instances);

  return (
    <>
      <div className={`flex flex-col mt-[1rem] overflow-y-auto pb-10 relative ${isEditorExpanded ? "pointer-events-none opacity-50 blur-sm" : ""}`}>
        {aiInstances.map((aiInstance) => (
          <EditInstanceComponent key={aiInstance.editId} instance={aiInstance} />
        ))}
      </div>
      {aiId !== null && <AiWritingInstance />}
    </>
  );
};

export default ProjectAiListViewClient;
