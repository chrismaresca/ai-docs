"use client";

import React from "react";
import { Bold, Italic, Underline, Strikethrough } from "lucide-react";
import { Button } from "@/components/ui/button";
import ColorPicker from "@/components/TextEditor/EditorToolbar/EditorToolbarComponents/ColorPicker";
import { useToolbar } from "@/context/ToolbarContext";
import { FORMAT_TEXT_COMMAND } from "lexical";
import ToolbarContainer from "@/components/TextEditor/EditorToolbar/ToolbarContainer";

const BasicInlineEditor: React.FC = () => {
  const { isBold, isItalic, isUnderline, isStrikethrough, editor } = useToolbar();

  return (
    <ToolbarContainer isVisible={true}>
      <Button variant="ghost" className={`p-1 h-6 ${isBold ? "bg-gray-300" : ""}`} onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold")}>
        <Bold strokeWidth="2.5" className="h-4 w-4" />
      </Button>
      <Button variant="ghost" className={`p-1 h-6 ${isItalic ? "bg-gray-300" : ""}`} onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic")}>
        <Italic strokeWidth="2.5" className="h-4 w-4" />
      </Button>
      <Button variant="ghost" className={`p-1 h-6 ${isUnderline ? "bg-gray-300" : ""}`} onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "underline")}>
        <Underline strokeWidth="2.5" className="h-4 w-4" />
      </Button>
      <Button variant="ghost" className={`p-1 h-6 ${isStrikethrough ? "bg-gray-300" : ""}`} onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "strikethrough")}>
        <Strikethrough strokeWidth="2.5" className="h-4 w-4" />
      </Button>
      <ColorPicker />
    </ToolbarContainer>
  );
};

export default BasicInlineEditor;
