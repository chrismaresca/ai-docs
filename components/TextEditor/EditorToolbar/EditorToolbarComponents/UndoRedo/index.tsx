"use client";

import * as React from "react";
import { Undo2, Redo2 } from "lucide-react";
import ToolbarButton from "../../ToolbarButton";
import ToolbarContainer from "../../ToolbarContainer";

const UndoRedo: React.FC = () => {
  return (
    <ToolbarContainer isVisible={true}>
      <ToolbarButton icon={Undo2} label="Undo" />
      <ToolbarButton icon={Redo2} label="Redo" />
    </ToolbarContainer>
  );
};

export default UndoRedo;
