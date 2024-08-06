export type ProjectType = "Essay" | "Blog" | null;

// Projects
export interface ProjectMeta {
  projectId: string;
  name: string;
  projectType: ProjectType;
  dateCreated: string;
  dateLastModified: string;
}


