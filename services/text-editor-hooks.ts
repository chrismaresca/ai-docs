import { useEditorContext } from "@/context/EditorContext";
import { RichUtils } from "draft-js";

// Inline and block styles function
function useStyles() {
  const { editorState, setEditorState } = useEditorContext();

  const toggleInlineStyle = (style: string) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };

  const toggleBlockType = (blockType: string) => {
    setEditorState(RichUtils.toggleBlockType(editorState, blockType));
  };

  return {
    toggleInlineStyle,
    toggleBlockType,
  };
}

export { useStyles };