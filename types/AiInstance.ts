export type AiInstanceType = "Writing" | "Research" | null;
import { Content } from "@tiptap/core";
import { FieldValue, Timestamp } from "firebase-admin/firestore";

// Writing Edit Instances
export interface AiInstanceMeta {
  instanceId: string;
  projectId: string
  name: string;
  instanceType: AiInstanceType;
  dateCreated: string;
  dateLastModified: string;
}

// Instance Create Type
export interface AiInstanceCreate {
  instanceId?: string;
  projectId: string;
  userId: string;
  name: string;
  instanceType: AiInstanceType;
  dateCreated: FieldValue;
  dateLastModified: FieldValue;
}
