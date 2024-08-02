import React from "react";

interface CommandButtonProps {
  editor: any;
  command: string;
  icon: React.ReactNode;
  isEditing: boolean;
}

const iconSize = "w-4 h-4";

const TipTapCommandButton: React.FC<CommandButtonProps> = ({ editor, command, icon, isEditing }) => {
  const isActive = editor ? editor.isActive(command) : false;

  const executeCommand = () => {
    if (!editor) return;

    const commandMap: { [key: string]: () => void } = {
      bold: () => editor.chain().focus().toggleBold().run(),
      italic: () => editor.chain().focus().toggleItalic().run(),
      underline: () => editor.chain().focus().toggleUnderline().run(),
      strike: () => editor.chain().focus().toggleStrike().run(),
      ol: () => editor.chain().focus().toggleOrderedList().run(),
      ul: () => editor.chain().focus().toggleBulletList().run(),
      blockquote: () => editor.chain().focus().toggleBlockquote().run(),
      code: () => editor.chain().focus().toggleCode().run(),
    };

    if (commandMap[command]) {
      commandMap[command]();
    }
  };

  return (
    <button onClick={executeCommand} className={`relative grid h-6 max-h-[40px] w-6 max-w-[40px] select-none place-items-center rounded-md text-center align-middle font-sans text-xs font-medium uppercase transition-all ${isActive ? "bg-gray-900/20" : ""} text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20`} type="button" data-hs-editor-bold={command === "bold"}>
      {React.cloneElement(icon as React.ReactElement, { className: iconSize })}
    </button>
  );
};

export default TipTapCommandButton;
