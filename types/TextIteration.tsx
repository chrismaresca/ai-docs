// Sub types
export type TextIterationType = "AI" | "User";
export type TextIterationTask = "Smooth";

// Content for the text iteration
import { Content } from "@tiptap/core";

// Writing Edit Instances
export interface TextIteration {
  instanceId: string;
  iterationId: string;
  active: boolean;
  IterationType: TextIterationType;
  task: TextIterationTask;
  dateCreated: string;
  content: Content;
}
