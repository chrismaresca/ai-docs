"use client";

import * as React from "react";
import { Printer, SpellCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

function PrintSpellCheck() {
  const iconSize = "h-4 w-4"; // Define the icon size once

  return (
    <div className="flex items-center space-x-2 px-2 rounded h-8">
      <Button variant="ghost" className="p-1 h-8">
        <Printer className={iconSize} />
        <span className="sr-only">Print</span>
      </Button>
      <Button variant="ghost" className="p-1 h-8">
        <SpellCheck className={iconSize} />
        <span className="sr-only">Spell Check</span>
      </Button>
    </div>
  );
}

export default PrintSpellCheck;
