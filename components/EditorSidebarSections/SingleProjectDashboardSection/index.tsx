import React, { useEffect } from "react";

// Ai instances
import AiResearchInstance from "./ProjectAiInstances/AiResearchInstance";
import AiWritingInstance from "./ProjectAiInstances/AiWritingInstance";

// Edits Instance
import ProjectAiListViewClient from "./ProjectEditsList";

import { AiInstanceMeta } from "@/types";

interface SingleProjectDashboardSectionProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const fetchAiInstances = async (): Promise<AiInstanceMeta[]> => {
  // Replace this with your actual data fetching logic
  return Array.from({ length: 15 }, (_, i) => ({
    editId: (i + 1).toString(),
    name: "Untitled Project",
    editType: "Writing",
    dateCreated: "May 2, 2024",
    dateLastModified: "Jun 3, 2024",
  }));
};

const SingleProjectDashboardSection: React.FC<SingleProjectDashboardSectionProps> = async ({ searchParams }) => {
  const aiInstances = await fetchAiInstances();
  const aiId = "";

  return (
    <div className="relative h-full">
      <ProjectAiListViewClient aiInstances={aiInstances} />

      {aiId !== null && <AiWritingInstance />}
    </div>
  );
};

export default SingleProjectDashboardSection;
