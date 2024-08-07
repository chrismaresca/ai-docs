import React, { useEffect } from "react";

// Ai instances
import AiResearchInstance from "./ProjectAiInstances/AiResearchInstance";
import AiWritingInstance from "./ProjectAiInstances/AiWritingInstance";

// Edits Instance
import AiListViewClient from "./ProjectEditsList";

import { AiInstanceMeta } from "@/types";
import { getProjectAiInstances } from "@/lib/services/userEdits";

const fetchAiInstances = async (projectId: string): Promise<AiInstanceMeta[]> => {
  const aiInstances = await getProjectAiInstances(projectId);
  return aiInstances;
  // Replace this with your actual data fetching logic
  return Array.from({ length: 35 }, (_, i) => ({
    instanceId: (i + 1).toString(),
    name: "Untitled Edit",
    projectId: "123",
    instanceType: "Writing",
    dateCreated: "May 2, 2024",
    dateLastModified: "Jun 3, 2024",
  }));
};

interface SingleProjectDashboardSectionProps {
  projectId: string;
}

const SingleProjectDashboardSection: React.FC<SingleProjectDashboardSectionProps> = async ({ projectId }) => {
  const aiInstances = await fetchAiInstances(projectId);

  return (
    <div className="relative h-full flex flex-col flex-grow overflow-hidden">
      <AiListViewClient aiInstances={aiInstances}></AiListViewClient>
    </div>
  );
};

export default SingleProjectDashboardSection;
