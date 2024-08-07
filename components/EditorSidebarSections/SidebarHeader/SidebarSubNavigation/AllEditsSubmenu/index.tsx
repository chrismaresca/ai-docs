import React from "react";

import { PencilLine, Search } from "lucide-react";

import { Button } from "@/components/ui/button";

const AllEditsSubmenu = () => {
  return (
    <div className="w-full inline-flex justify-between items-center">
      <div className="inline-flex items-baseline ml-0.5">
        <div className="font-medium text-lg">Writing AI</div>
        <div className="ml-2 text-[10px] font-light">37</div>
      </div>
      {/* <div className="inline-flex items-baseline ml-6 opacity-30">
        <div className="font-medium text-lg">Materials</div>
        <div className="ml-2 text-[10px] font-light">24</div>
      </div> */}
      <div className="inline-flex ml-auto items-center space-x-1.5 mr-0.5 text-slate-400">
        <Button variant="ghost" className="p-1 h-6">
          <PencilLine className="h-4 w-4" />
        </Button>
        <Button variant="ghost" className="p-1 h-6">
          <Search className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default AllEditsSubmenu;
