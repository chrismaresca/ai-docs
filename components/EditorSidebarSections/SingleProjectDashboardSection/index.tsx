"use client";
import React, { useEffect } from "react";

// Ai instance Context
import { useAiInstanceContext } from "@/context/AiInstanceContext";

// Editor Expansion Context
import { useEditorExpansionContext, EditorExpansionProvider } from "@/context/EditorExpansionContext";

// Ai instances
import AiResearchInstance from "./ProjectAiInstances/AiResearchInstance";
import AiWritingInstance from "./ProjectAiInstances/AiWritingInstance";

// Edits Instance
import ProjectEditsList from "./ProjectEditsList";

// Define the AiInstanceType type
export type AiInstanceType = "Writing" | "Research" | null;

const SingleProjectDashboardSection: React.FC = () => {
  const { aiInstanceID, aiInstanceType } = useAiInstanceContext();
  const { isEditorExpanded } = useEditorExpansionContext();

  useEffect(() => {
    if (aiInstanceID !== null) {
      console.log("new!");
    }
  }, [aiInstanceID]);

  return (
    <div className="relative h-full">
      <div className={`flex flex-col mt-[1rem] overflow-y-auto pb-10 relative ${isEditorExpanded ? "pointer-events-none opacity-50 blur-sm" : ""}`}>
        <ProjectEditsList />
      </div>

      {aiInstanceID !== null && aiInstanceType === "Writing" && <AiWritingInstance />}

      {aiInstanceID !== null && aiInstanceType === "Research" && <AiResearchInstance />}
    </div>
  );
};

export default SingleProjectDashboardSection;
