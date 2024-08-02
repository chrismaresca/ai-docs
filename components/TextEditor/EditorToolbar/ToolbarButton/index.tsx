"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";

interface ToolbarButtonProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
}

const ToolbarButton: React.FC<ToolbarButtonProps> = ({ icon: Icon, label }) => {
  const iconSize = "h-4 w-4"; // Define the icon size once

  return (
    <Button variant="ghost" className="p-1 h-6">
      <Icon className={iconSize} />
      <span className="sr-only">{label}</span>
    </Button>
  );
}

export default ToolbarButton;
