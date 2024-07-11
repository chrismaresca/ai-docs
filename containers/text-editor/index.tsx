import React from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorProvider, useEditorContext } from "@/context/EditorContext";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

// Import Toolbar
import TextEditorToolbar from "@/containers/text-editor/main-toolbar";

const TextEditor: React.FC = () => {
  return (
    <EditorProvider>
      <EditorWrapper />
    </EditorProvider>
  );
};

const EditorWrapper: React.FC = () => {
  const { editorState, setEditorState, handleKeyCommand } = useEditorContext();

  return (
    <div className="text-center">
      <TextEditorToolbar />
      <Editor toolbarHidden editorState={editorState} onEditorStateChange={setEditorState} handleKeyCommand={handleKeyCommand} editorClassName="mt-6 mb-12 shadow-md rounded border p-10 bg-white mx-auto max-w-5xl" />
    </div>
  );
};

export default TextEditor;


