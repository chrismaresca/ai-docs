"use client";

import * as React from "react";
import { Link, Image as LuImage, Table } from "lucide-react";
import ToolbarButton from "@/components/TextEditor/EditorToolbar/EditorToolbarComponents/BaseComponents/ToolbarButton"
import ToolbarContainer from "@/components/TextEditor/EditorToolbar/EditorToolbarComponents/BaseComponents/ToolbarContainer"


const Embedded: React.FC = () => {
  return (
    <ToolbarContainer isVisible={true}>
      <ToolbarButton icon={Link} label="Link" />
      <ToolbarButton icon={LuImage} label="Image" />
      <ToolbarButton icon={Table} label="Table" />
    </ToolbarContainer>
  );
}

export default Embedded;
