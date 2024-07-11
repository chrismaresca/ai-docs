import React, { useState, ChangeEvent, FocusEvent } from "react";
import DocumentFileTab from "@/components/DocumentEditorHeader/DocumentFileTab";
import DocumentEditTab from "@/components/DocumentEditorHeader/DocumentEditTab";
import DocumentFormatTab from "@/components/DocumentEditorHeader/DocumentFormatTab";
import { FileText } from "lucide-react";

function verifyName(name: string): void {
  // Placeholder function for now
  console.log("verifyName called");
}

const DocEditorHeader: React.FC = () => {
  const [docName, setDocName] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [activeOption, setActiveOption] = useState<string | null>(null);

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setDocName(event.target.value);
  };

  const handleNameBlur = (event: FocusEvent<HTMLInputElement>): void => {
    setIsFocused(false);
    if (docName.trim() === "") {
      setDocName("");
    }
    verifyName(docName);
    console.log(docName);
  };

  const handleNameFocus = (): void => {
    setIsFocused(true);
  };

  return (
    <header className="flex items-start pt-4 pb-2 px-6 xl:px-2.5 w-full xl:max-w-[78rem] xl:mx-auto">
      <div className="flex flex-col justify-center items-center mr-1.5">
        <span className="cursor-pointer">
          <FileText className="h-12 w-12 mt-0.5" />
        </span>
      </div>
      <div className="flex flex-col flex-grow -space-y-1">
        <input
          type="text"
          value={isFocused || docName ? docName : "Untitled Document"}
          onChange={handleNameChange}
          onBlur={handleNameBlur}
          onFocus={handleNameFocus}
          className={` px-2 bg-inherit font-medium text-lg outline-none rounded-lg transition-all duration-200 
            ${isFocused ? "border-[1px] border-gray-200" : ""} 
            ${!isFocused && !docName ? "text-gray-500" : "text-black"} 
            w-[200px] md:w-[300px]`}
        />
        <div className="flex items-center text-sm space-x-3 ml-2 h-8">
          <DocumentFileTab />
          <DocumentEditTab />
          <DocumentFormatTab />
          <DocumentFileTab />
        </div>
      </div>
    </header>
  );
};

export default DocEditorHeader;
