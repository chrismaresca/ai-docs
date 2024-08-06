"use client";

import * as React from "react";

interface ToolbarContainerProps {
  children: React.ReactNode;
  isVisible: boolean;
}

const ToolbarContainer: React.FC<ToolbarContainerProps> = ({ children, isVisible }) => {
  return (
    <div className={`flex items-center space-x-2 px-2 rounded h-8 ${isVisible ? 'flex' : 'hidden'}`}>
      {children}
    </div>
  );
}

export default ToolbarContainer;
