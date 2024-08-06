// import React from "react";
// import { NotebookText } from "lucide-react";
// import { useProjectContext } from "@/context";
// import { Project } from "@/types";

// interface ExistingProjectProps {
//   project: Project;
//   index: number;
// }

// const ExistingProject: React.FC<ExistingProjectProps> = ({ project, index }) => {
//   const { updateProjectID } = useProjectContext();

//   const { id, name: projectName, dateLastUpdated } = project;

//   return (
//     <div className="flex flex-col rounded-md shadow-sm shadow-slate-300 justify-center w-[10.5rem] h-[13rem] bg-gray-200 border border-gray-300 hover:border-primary hover:cursor-pointer hover:shadow-md" onClick={() => updateProjectID(id)}>
//       <div className="flex items-center justify-center w-full h-[70%] bg-white rounded-t-sm shadow-sm border border-border/40">{index + 1}</div>
//       <div className="p-2 flex flex-col bg-gray-100 items-start justify-center rounded-b-sm w-full h-[30%]">
//         <div className="font-semibold text-sm w-[8rem] truncate">{projectName}</div>
//         <div className="mt-0.5 font-light text-xs flex items-center">
//           <NotebookText className="w-5 h-5 mr-1" />
//           <div className="text-nowrap tracking-tighter">Edited on {dateLastUpdated}</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExistingProject;
