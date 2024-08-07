"use client";
import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

import { useEditorExpansionContext, useSidebarReferences } from "@/context";

// Components
import SingleEditSubmenu from "@/components/EditorSidebarSections/SidebarHeader/SidebarSubNavigation/SingleEditSubmenu";
import PromptInput from "./AiWritingInstanceComponents/PromptInput";
import MiniTextDocument from "./AiWritingInstanceComponents/MiniTextDocument";

import TextIterationListView from "./AiWritingInstanceComponents/TextIterationListView";
import { TextIteration } from "@/types";
import { useSearchParams } from "next/navigation";

const initialContent = {
  type: "doc",
  content: [
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "It’s 19871. You can’t turn on a radio, or go to a mall without hearing Olivia Newton-John’s hit song, Physical.",
        },
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "This is an indented line.",
            },
          ],
          attrs: {
            indent: 1, // This assumes your schema supports an indent attribute
          },
        },
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "This line is bold.",
              marks: [
                {
                  type: "bold",
                },
              ],
            },
          ],
        },
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "This line is italic.",
              marks: [
                {
                  type: "italic",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

const AiWritingInstance: React.FC = () => {
  const [promptInputValue, setPromptInputValue] = useState("");
  const [isActiveEdit, setIsActiveEdit] = useState(false);

  const [editName, setEditName] = useState("");
  const [lastUpdated, setLastUpdated] = useState("May 1, 2024");
  const [fade, setFade] = useState(false);
  const { isEditorExpanded, toggleEditorExpansion } = useEditorExpansionContext();
  const { subSidebarRef } = useSidebarReferences();
  const searchParams = useSearchParams();

  // const aiId = searchParams?.get("ai") || null;

  useEffect(() => {
    const aiId = searchParams?.get("ai") ?? null;
    console.log(aiId)

    if (aiId) {
      setIsActiveEdit(true);
      // Perform API call to get the data needed
    } else {
      setIsActiveEdit(false);
      setFade(true);
      setEditName("New Writing Edit")
      setFade(false);


      // Optionally reset any data related to the edit
    }
  }, [searchParams]);

  const onPromptButtonClick = () => {
    console.log("Prompt button clicked with value:", promptInputValue);
  };

  const updateEditDetails = () => {
    setFade(true);
    setTimeout(() => {
      setEditName("Updated Edit Name");
      setLastUpdated("July 31, 2024");
      setFade(false);
    }, 500);
  };

  const textIterations: TextIteration[] = [
    {
      instanceId: "1",
      iterationId: "a1",
      active: false,
      IterationType: "AI",
      task: "Smooth",
      dateCreated: "2024-01-01",
      content: initialContent,
    },
    {
      instanceId: "1",
      iterationId: "a1",
      active: false,
      IterationType: "AI",
      task: "Smooth",
      dateCreated: "2024-01-01",
      content: initialContent,
    },
    {
      instanceId: "1",
      iterationId: "a2",
      active: true,
      IterationType: "AI",
      task: "Smooth",
      dateCreated: "2024-01-01",
      content: initialContent,
    },
    // {
    //   instanceId: "1",
    //   iterationId: "a3",
    //   active: false,
    //   IterationType: "AI",
    //   task: "Smooth",
    //   dateCreated: "2024-01-01",
    //   content: initialContent,
    // },
    // {
    //   instanceId: "1",
    //   iterationId: "a4",
    //   active: true,
    //   IterationType: "User",
    //   task: "Smooth",
    //   dateCreated: "2024-02-01",
    //   content: initialContent,
    // },
  ];

  const activeIteration = textIterations.find((textIteration) => textIteration.active);
  const inactiveIterations = textIterations.filter(textIteration => !textIteration.active);


  return (
    <div ref={subSidebarRef} className={`flex flex-col absolute bottom-0 left-0 right-0 z-10 bg-white pt-4 pb-6 border-t border-border/20 shadow-md shadow-slate-400 animate-slide-in-bottom`}>
      <div>
        <div className={`transition-all duration-500 overflow-hidden ${isEditorExpanded ? "max-h-full" : "min-h-12"}`}>
          <SingleEditSubmenu editName={editName} lastUpdated={lastUpdated} fade={fade} isEditorExpanded={isEditorExpanded} setIsEditorExpanded={toggleEditorExpansion} />
          {/* <hr className="mt-4 h-2"></hr> */}

          <div className={`mt-2 overflow-y-auto transition-all duration-500 ${isEditorExpanded ? "max-h-[26rem]" : "max-h-0"}`}>
            <TextIterationListView inactiveIterations={inactiveIterations} />

            {activeIteration && (
              <div>
                <div className={`w-full px-4 inline-flex justify-between items-center cursor-pointer my-3`}>
                  <div className="inline-flex items-baseline ml-0.5">
                    <div className="font-medium text-sm tracking-tight">Current Version</div>
                  </div>
                </div>
                <div className={`my-1 overflow-hidden space-y-2 px-4 transition-max-height duration-500 max-h-72 `}>
                  <MiniTextDocument iteration={activeIteration} isEditExpanded={false} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="mt-auto">
        <PromptInput promptInputValue={promptInputValue} setPromptInputValue={setPromptInputValue} onPromptButtonClick={onPromptButtonClick} />
        {/* <button onClick={updateEditDetails} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
          Update Edit Details
        </button> */}
      </div>
    </div>
  );
};

export default AiWritingInstance;
