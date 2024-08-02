import React from "react";
import { Search } from "lucide-react";
import ProjectsListView from "./ProjectsDashboardComponents/ProjectsListView";

const ProjectsDashboardSection = () => {
  return (
    <div className="flex flex-col flex-grow overflow-hidden">
      {" "}
      {/* Ensure the parent takes full height */}
      {/* <div className="my-3">
        <form className="flex items-center mx-auto w-full">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2" />
              </svg>
            </div>
            <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 focus-visible:outline-none text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5" placeholder="Search for projects..." required />
          </div>
          <button type="submit" className="p-3 ml-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary/90 focus:ring-2 focus:outline-none focus:ring-primary-300">
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </button>
        </form>
      </div> */}
      <div>

      </div>
      <ProjectsListView />
    </div>
  );
};

export default ProjectsDashboardSection;
