"use client";
import React, { useEffect } from "react";
import categorizeEditsByDate from "@/lib/utils/categorizeDates";
import EditInstanceComponent from "../../InstanceComponents/EditInstanceComponent";
import { AiInstanceMeta } from "@/types";
import AiWritingInstance from "../ProjectAiInstances/AiWritingInstance";
import { useSearchParams } from "next/navigation";

// Contexts
import { useEditorExpansionContext, useSidebarReferences } from "@/context";

interface AiListViewClient {
  aiInstances: AiInstanceMeta[];
}

const AiListViewClient: React.FC<AiListViewClient> = ({ aiInstances }) => {
  const { isEditorExpanded, toggleEditorExpansion } = useEditorExpansionContext();
  const { fullSidebarRef, subSidebarRef, promptOptionsRef } = useSidebarReferences();
  const searchParams = useSearchParams();
  const aiId = searchParams.get("ai") || null;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        fullSidebarRef.current &&
        fullSidebarRef.current.contains(event.target as Node) && // Click is within fullSidebarRef
        (!subSidebarRef.current || !subSidebarRef.current.contains(event.target as Node)) && // Not within subSidebarRef
        (!promptOptionsRef.current || !promptOptionsRef.current.contains(event.target as Node)) // Not within promptOptionsRef
      ) {
        if (isEditorExpanded) {
          toggleEditorExpansion();
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isEditorExpanded, toggleEditorExpansion, fullSidebarRef, subSidebarRef, promptOptionsRef]);

  return (
    <>
      {aiInstances.length > 0 ? (
        <>
          <div className={`flex flex-col mt-[1rem] animate-slide-in-bottom overflow-y-auto pb-10 relative ${isEditorExpanded ? "pointer-events-none opacity-50 blur-sm" : ""}`}>
            {aiInstances.map((aiInstance) => (
              <EditInstanceComponent key={aiInstance.instanceId} instance={aiInstance} />
            ))}
          </div>
          <AiWritingInstance />
        </>
      ) : (
        <div className={`transform transition-transform animate-slide-in-bottom duration-500 mt-[8rem] text-center text-lg text-gray-500 `}>No edits yet :)</div>
      )}
    </>
  );
};

export default AiListViewClient;
