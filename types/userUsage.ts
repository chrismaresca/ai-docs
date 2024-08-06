// User Usage
export type UserUsage = {
  numProjects: number;
  numTotalResources: number;
  numResourcesPerProject: { [projectId: string]: number };
  numTotalWritingEdits: number;
  numWritingEditsPerProject: { [projectId: string]: number };
  numWritingStyles: number;
};
