"use client";
import React from "react";
import { Square, ChevronLeft } from "lucide-react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

const AllProjectsNavigation: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleReturnToAllProjects = () => {
    // Remove the projectID from the query params
    const createQueryString = (name: string, value: string | null) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value === null) {
        params.delete(name);
      } else {
        params.set(name, value);
      }
      return params.toString();
    };

    router.push(pathname + "?" + createQueryString("project", null));
  };

  return (
    <>
      <div className="w-full h-9 rounded-md inline-flex justify-between align-middle items-center shadow-sm shadow-slate-300 border border-border/60">
        <div className="inline-flex justify-center items-center text-xs group hover:cursor-pointer" onClick={handleReturnToAllProjects}>
          <ChevronLeft className="h-2.5 w-2.5 ml-2 mr-1 group-hover:scale-[1.1]" />
          <div className="group-hover:underline">All Projects</div>
        </div>

        <div className="inline-flex justify-end ml-auto items-center mr-4 w-[72%]">
          <Square fill="primary" className="h-2 w-2 mr-1.5" />
          <div className="text-xs tracking-tighter font-medium mr-0.5 truncate">
            <span>Chris Marescas Workspace</span>
            <span className="mx-2">/</span>
            <span>Project Name</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProjectsNavigation;
