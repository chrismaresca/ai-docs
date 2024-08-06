export type AiInstanceType = "Writing" | "Research" | null;

// Writing Edit Instances
export interface AiInstanceMeta {
  editId: string;
  name: string;
  editType: AiInstanceType;
  dateCreated: string;
  dateLastModified: string;
}
