"use client";

import * as React from "react";
import { Link, Image as LuImage, Table } from "lucide-react";
import { Button } from "@/components/ui/button";

function Embedded() {
  const iconSize = "h-4 w-4"; // Define the icon size once

  return (
    <div className="flex items-center space-x-2 px-2 rounded h-8">
      <Button variant="ghost" className="p-1 h-8">
        <Link className={iconSize} />
        <span className="sr-only">Link</span>
      </Button>
      <Button variant="ghost" className="p-1 h-8">
        <LuImage className={iconSize} />
        <span className="sr-only">Image</span>
      </Button>
      <Button variant="ghost" className="p-1 h-8">
        <Table className={iconSize} />
        <span className="sr-only">Table</span>
      </Button>
    </div>
  );
}

export default Embedded;
