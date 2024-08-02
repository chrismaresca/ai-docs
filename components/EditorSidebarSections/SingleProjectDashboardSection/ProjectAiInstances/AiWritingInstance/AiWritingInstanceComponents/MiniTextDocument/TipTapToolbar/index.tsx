import React from "react";
import TipTapCommandButton from "./TipTapCommandButton";
import { Bold as BoldIcon, Underline as UnderlineIcon, Strikethrough as StrikethroughIcon, Italic as ItalicIcon, List as ListUnorderedIcon, ListOrdered as ListOrderedIcon, CodeXml as CodeIcon, Link as LinkIcon, ChevronsUpDown, Pencil, Copy, Check } from "lucide-react";

const TipTapEditorToolbar: React.FC<{ editor: any; isEditing: boolean }> = ({ editor, isEditing }) => {
  return (
    <div className="flex gap-1.5">
      <TipTapCommandButton editor={editor} command="bold" icon={<BoldIcon />} isEditing={isEditing} />
      <TipTapCommandButton editor={editor} command="italic" icon={<ItalicIcon />} isEditing={isEditing} />
      <TipTapCommandButton editor={editor} command="underline" icon={<UnderlineIcon />} isEditing={isEditing} />
      <TipTapCommandButton editor={editor} command="strike" icon={<StrikethroughIcon />} isEditing={isEditing} />
      <TipTapCommandButton editor={editor} command="ol" icon={<ListOrderedIcon />} isEditing={isEditing} />
      <TipTapCommandButton editor={editor} command="ul" icon={<ListUnorderedIcon />} isEditing={isEditing} />
      {/* <TipTapCommandButton editor={editor} command="blockquote" icon={<BlockquoteIcon />} isEditing={isEditing} /> */}
      <TipTapCommandButton editor={editor} command="code" icon={<CodeIcon />} isEditing={isEditing} />
    </div>
  );
};

export default TipTapEditorToolbar;
