import { PlanLimits } from "@/types";

export const planLimits: { [key: string]: PlanLimits } = {
  Free: {
    numProjects: 1,
    numTotalResources: 10,
    numResourcesPerProject: 5,
    numTotalWritingEdits: 100,
    numWritingEditsPerProject: 20,
    numWritingStyles: 2,
  },
  Perform: {
    numProjects: 10,
    numTotalResources: 100,
    numResourcesPerProject: 20,
    numTotalWritingEdits: 1000,
    numWritingEditsPerProject: 100,
    numWritingStyles: 10,
  },
  Enterprise: {
    numProjects: 100,
    numTotalResources: 1000,
    numResourcesPerProject: 50,
    numTotalWritingEdits: 10000,
    numWritingEditsPerProject: 500,
    numWritingStyles: 50,
  },
};
