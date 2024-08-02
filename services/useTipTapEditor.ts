"use client";
import { Content, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Paragraph from "@tiptap/extension-paragraph";
import Bold from "@tiptap/extension-bold";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import Blockquote from "@tiptap/extension-blockquote";

const useTipTapEditor = (handleEditorFocus: () => void, handleEditorBlur: () => void, initialContent: Content) => {
  const editor = useEditor({
    extensions: [
      Placeholder.configure({
        placeholder: "Play around with the editor...",
        emptyNodeClass: "text-gray-600",
      }),
      StarterKit,
      Paragraph.configure({
        HTMLAttributes: {
          class: "text-gray-600",
        },
      }),
      Bold.configure({
        HTMLAttributes: {
          class: "font-bold",
        },
      }),
      Underline,
      Link.configure({
        HTMLAttributes: {
          class: "inline-flex items-center gap-x-1 text-blue-500 decoration-2 hover:underline font-medium",
        },
      }),
      BulletList.configure({
        HTMLAttributes: {
          class: "list-disc list-inside text-gray-800",
        },
      }),
      OrderedList.configure({
        HTMLAttributes: {
          class: "list-decimal list-inside text-gray-800",
        },
      }),
      Blockquote.configure({
        HTMLAttributes: {
          class: "text-gray-800 sm:text-xl",
        },
      }),
    ],
    content: initialContent,
    immediatelyRender: false,
    onFocus: handleEditorFocus,
    onUpdate: handleEditorFocus,
    onSelectionUpdate: handleEditorFocus,
    onBlur: handleEditorBlur,
  });

  return editor;
};

export default useTipTapEditor;
