// components/text-editor-toolbar/Listing.tsx
import React from "react";
import { List, ListOrdered, IndentDecrease, IndentIncrease } from "lucide-react";
import { Button } from "@/components/ui/button";

function Listing() {
  const iconSize = "h-4 w-4"; // Define the icon size once

  return (
    <div className="flex items-center space-x-2 px-2 rounded h-8">
      <Button variant="ghost" className="p-1 h-8">
        <List className={iconSize} />
      </Button>
      <Button variant="ghost" className="p-1 h-8">
        <ListOrdered className={iconSize} />
      </Button>
      <Button variant="ghost" className="p-1 h-8">
        <IndentDecrease className={iconSize} />
      </Button>
      <Button variant="ghost" className="p-1 h-8">
        <IndentIncrease className={iconSize} />
      </Button>
    </div>
  );
}

export default Listing;
