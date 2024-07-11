"use client";

import * as React from "react";
import { Undo2, Redo2 } from "lucide-react";
import { Button } from "@/components/ui/button";

function UndoRedo() {
  const iconSize = "h-4 w-4"; // Define the icon size once

  return (
    <div className="flex items-center space-x-2 px-2 rounded h-8">
      <Button variant="ghost" className="p-1 h-8">
        <Undo2 className={iconSize} />
        <span className="sr-only">Undo</span>
      </Button>
      <Button variant="ghost" className="p-1 h-8">
        <Redo2 className={iconSize} />
        <span className="sr-only">Redo</span>
      </Button>
    </div>
  );
}

export default UndoRedo;
