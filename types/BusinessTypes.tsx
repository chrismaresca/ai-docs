// Sub types
export type AiInstanceType = "Writing" | "Research" | null;
export type ProjectType = "Essay" | "Research" | null;
export type TextIterationType = "AI" | "User";
export type TextIterationTask = "Smooth" 

// Content for the text iteration
import { Content } from "@tiptap/core";

// Projects
export interface ProjectInstance {
  projectId: string;
  name: string;
  projectType: ProjectType;
  dateCreated: string;
  dateLastModified: string;
}

// Writing Edit Instances
export interface EditInstance {
  editId: string;
  name: string;
  editType: AiInstanceType;
  dateCreated: string;
  dateLastModified: string;
}

// Writing Edit Instances
export interface TextIteration {
  editId: string;
  iterationId: string;
  active: boolean
  IterationType: TextIterationType;
  task: TextIterationTask;
  dateCreated: string;
  content: Content;
}
