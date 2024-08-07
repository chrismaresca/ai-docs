import React from "react";
import { Pencil, EllipsisVertical } from "lucide-react";
import { AiInstanceMeta } from "@/types";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

interface EditInstanceComponentProps {
  instance: AiInstanceMeta;
}

const EditInstanceComponent: React.FC<EditInstanceComponentProps> = ({ instance }) => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const openAiInstance = (aiId: string) => {
    const createQueryString = (name: string, value: string | null) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value === null) {
        params.delete(name);
      } else {
        params.set(name, value);
      }
      return params.toString();
    };

    const newUrl = pathName + "?" + createQueryString("ai", aiId);
    router.push(newUrl);
  };

  return (
    <div className="group w-full flex justify-between ps-2 pe-4 items-center py-3 hover:bg-slate-100 hover:shadow-md cursor-pointer px-4 hover:border-l-[6px] hover:border-l-primary" onClick={() => openAiInstance(instance.instanceId)}>
      <div className="flex items-center text-[14px] w-1/2 font-medium tracking-tight">
        {/* <Pencil className="w-4 h-4" /> */}
        <span className="w-full truncate ps-3">{instance.name || "New Edit"}</span>
      </div>
      <div className="inline-flex items-center">
        <div className="mr-5 text-sm font-extralight text-primary/20 group-hover:text-primary/50">{instance.dateLastModified}</div>
        <EllipsisVertical className="w-4 h-4 hover:scale-[1.12]" />
      </div>
    </div>
  );
};

export default EditInstanceComponent;
