"use client";

import * as React from "react";
import { IndentDecrease, IndentIncrease } from "lucide-react";

import ToolbarButton from "../BaseComponents/ToolbarButton";
import ToolbarContainer from "../BaseComponents/ToolbarContainer";

const Indentation: React.FC = () => {
  return (
    <ToolbarContainer isVisible={true}>
      <ToolbarButton icon={IndentIncrease} label="Indent Increase" />
      <ToolbarButton icon={IndentDecrease} label="Indent Decrease" />
    </ToolbarContainer>
  );
};

export default Indentation;
