import React from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

function DocEditorHeader() {
  return (
    <header className="flex justify-between items-center p-3 pb-1">
      {/* <span onClick={() => router.push('/')} className="cursor-pointer"> */}
      {/* <Icon name="description" size="5xl" color="blue" /> */}
      {/* </span> */}
      <div className="flex-grow px-2">
        {/* <h2>{fileName}</h2> */}
        <div className="flex items-center text-sm space-x-1 ml-1 h-8 text-gray-600">
          <DropdownMenu>
            <DropdownMenuTrigger className="option">File</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>File Options</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>New</DropdownMenuItem>
              <DropdownMenuItem>Open</DropdownMenuItem>
              <DropdownMenuItem>Save</DropdownMenuItem>
              <DropdownMenuItem>Export</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger className="option">Edit</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Edit Options</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Undo</DropdownMenuItem>
              <DropdownMenuItem>Redo</DropdownMenuItem>
              <DropdownMenuItem>Cut</DropdownMenuItem>
              <DropdownMenuItem>Copy</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger className="option">View</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>View Options</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Zoom In</DropdownMenuItem>
              <DropdownMenuItem>Zoom Out</DropdownMenuItem>
              <DropdownMenuItem>Fullscreen</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger className="option">Insert</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Insert Options</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Image</DropdownMenuItem>
              <DropdownMenuItem>Table</DropdownMenuItem>
              <DropdownMenuItem>Chart</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger className="option">Format</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Format Options</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Bold</DropdownMenuItem>
              <DropdownMenuItem>Italic</DropdownMenuItem>
              <DropdownMenuItem>Underline</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger className="option">Tools</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Tools Options</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Spell Check</DropdownMenuItem>
              <DropdownMenuItem>Word Count</DropdownMenuItem>
              <DropdownMenuItem>Translate</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}

export default DocEditorHeader;
