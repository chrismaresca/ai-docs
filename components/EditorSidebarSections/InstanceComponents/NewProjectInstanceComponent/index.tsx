"use client";
import React, { useEffect, useState } from "react";
import { Pencil, EllipsisVertical, NotebookText, Check, X } from "lucide-react";
import { handleProjectCreation } from "@/app/actions";
import { useFormState } from "react-dom";
import { redirect } from "next/navigation";

import { useNewProjectStore } from "@/stores/NewProjectStore";
import NewProjectInstanceForm from "./NewProjectInstanceForm";

const NewProjectInstanceComponent: React.FC = () => {
  const { resetNewProject } = useNewProjectStore();
  const [state, formAction] = useFormState(handleProjectCreation, null);

  return (
    <div className="group w-full ps-2 pe-4 py-3 hover:bg-slate-100 hover:shadow-md cursor-pointer px-4 hover:border-l-[6px] hover:border-l-primary">
      <form
        action={(FormData) => {
          formAction(FormData);
          resetNewProject();
        }}
        className="w-full flex justify-between items-center"
      >
        <NewProjectInstanceForm initialProjectName="" />
      </form>
    </div>
  );
};

export default NewProjectInstanceComponent;
