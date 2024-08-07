import { Content } from "@tiptap/core";
import { FieldValue, Timestamp } from "firebase-admin/firestore";

export type ProjectType = "Essay" | "Blog" | null;

// Projects
export interface ProjectMeta {
  projectId: string;
  name: string;
  projectType: ProjectType;
  dateCreated: string;
  dateLastModified: string;
}

// Project Create Type
export interface ProjectCreate {
  projectId?: string;
  userId: string;
  name: string;
  projectType: ProjectType;
  dateCreated: FieldValue;
  dateLastModified: FieldValue;
  content?: Content;
}
