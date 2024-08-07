"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronsLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

type SidebarNavigationProps = {
  toggleSidebar: () => void;
};

const SidebarHeaderTitleToggle: React.FC<SidebarNavigationProps> = ({ toggleSidebar }) => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleReturnToAllProjects = () => {
    if (!pathname || !searchParams) {
      console.log("something went wrong");
    }

    // Remove the projectID from the query params
    const createQueryString = (paramsToUpdate: { name: string; value: string | null }[]) => {
      const params = new URLSearchParams(searchParams.toString());

      paramsToUpdate.forEach(({ name, value }) => {
        if (value === null) {
          params.delete(name);
        } else {
          params.set(name, value);
        }
      });

      return params.toString();
    };

    const queryParamsToUpdate = [
      { name: "project", value: null },
      { name: "ai", value: null },

      // Add other key-value pairs to update here
    ];

    router.push(pathname + "?" + createQueryString(queryParamsToUpdate));
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const projectID = searchParams.get("project");

  return (
    <div className="flex-none flex flex-row items-center justify-between pt-4 mb-3 h-12">
      <div className="flex-none flex flex-row items-center" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {isHovered && projectID ? (
          <div className="flex items-center font-semibold hover:cursor-pointer" onClick={handleReturnToAllProjects}>
            <ChevronLeft className="mr-0.5 w-4 h-4" />
            <span>All Projects</span>
          </div>
        ) : (
          <h2 className="font-semibold text-lg">Workmait</h2>
        )}
      </div>
      {!projectID ? (
        <></>
      ) : (
        <Button variant={"ghost"} onClick={toggleSidebar} className="h-7 p-0 ml-auto hover:bg-muted">
          <ChevronsLeft />
        </Button>
      )}
      {/* <Button variant={"ghost"} onClick={toggleSidebar} className="h-7 p-0 ml-auto hover:bg-muted">
        <ChevronsLeft />
      </Button> */}
    </div>
  );
};

export default SidebarHeaderTitleToggle;
