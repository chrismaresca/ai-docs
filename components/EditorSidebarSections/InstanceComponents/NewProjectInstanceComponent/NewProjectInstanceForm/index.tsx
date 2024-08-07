"use client";

import React, { useState, useRef, useEffect } from "react";
import { Check, X } from "lucide-react";
import { useNewProjectStore } from "@/stores/NewProjectStore";
import { useFormStatus, useFormState } from "react-dom";

interface ProjectNameInputProps {
  initialProjectName: string;
}

const NewProjectInstanceForm: React.FC<ProjectNameInputProps> = ({ initialProjectName }) => {
  const [projectName, setProjectName] = useState(initialProjectName);
  const { resetNewProject } = useNewProjectStore();
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <div className="inline-flex items-center align-middle text-15px">
          <div>Creating Project...</div>
          <div>hi</div>
        </div>
      ) : (
        <>
          <div className="flex items-center text-[15px] w-3/4 font-medium tracking-tight">
            <span className="w-full truncate ps-2">
              <input
                type="text"
                name="projectName"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                maxLength={30}
                placeholder="Untitled Project"
                className="bg-transparent h-8 w-full ps-1
               border-green-800 focus:outline-none flex-grow"
              />
            </span>
          </div>
          <div className="inline-flex items-center space-x-2">
            <button disabled={pending} className="hover:scale-[1.12]" type="submit">
              <Check className="w-4 h-4" />
            </button>
            <button
              className="hover:scale-[1.12]"
              onClick={(e) => {
                e.preventDefault();
                resetNewProject();
              }}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default NewProjectInstanceForm;
