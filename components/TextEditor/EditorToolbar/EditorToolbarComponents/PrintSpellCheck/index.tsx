"use client";

import * as React from "react";
import { Printer, SpellCheck } from "lucide-react";

import ToolbarButton from "@/components/TextEditor/EditorToolbar/ToolbarButton"
import ToolbarContainer from "@/components/TextEditor/EditorToolbar/ToolbarContainer"


const PrintSpellCheck: React.FC = () => {
  return (
    <ToolbarContainer isVisible={true}>
      
      <ToolbarButton icon={Printer} label="Print" />
      <ToolbarButton icon={SpellCheck} label="Spell Check" />
    </ToolbarContainer>
  );
}

export default PrintSpellCheck;
