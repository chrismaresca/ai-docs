import React from "react";
import { Pencil, EllipsisVertical } from "lucide-react";
import { useAiInstanceContext } from "@/context/AiInstanceContext";
import { EditInstance } from "@/types";

interface EditInstanceComponentProps {
  instance: EditInstance;
}

const EditInstanceComponent: React.FC<EditInstanceComponentProps> = ({ instance }) => {
  const { updateAiInstance } = useAiInstanceContext();

  return (
    <div className="group w-full flex justify-between ps-2 pe-4 items-center py-3 hover:bg-slate-100 hover:shadow-md cursor-pointer px-4 hover:border-l-[6px] hover:border-l-primary" onClick={() => updateAiInstance(instance.editId, instance.editType)}>
      <div className="flex items-center text-[14px] w-1/2 font-medium tracking-tight">
        {/* <Pencil className="w-4 h-4" /> */}
        <span className="w-full truncate ps-3">{instance.name}</span>
      </div>
      <div className="inline-flex items-center">
        <div className="mr-5 text-sm font-extralight text-primary/20 group-hover:text-primary/50">{instance.dateLastModified}</div>
        <EllipsisVertical className="w-4 h-4 hover:scale-[1.12]" />
      </div>
    </div>
  );
};

export default EditInstanceComponent;
