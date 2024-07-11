import React from 'react';
import {
  FilePlus2,
  Files,
  UserRoundPlus,
  MailPlus,
  FilePenLine,
  Download,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const DocumentFileTab: React.FC = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="option text-base hover:bg-gray-200 focus:bg-gray-200 hover:text-background-foreground rounded-lg">File</DropdownMenuTrigger>
      <DropdownMenuContent className="w-64">
        <DropdownMenuGroup>
          <DropdownMenuItem className="py-2">
            <FilePenLine className="mr-2 h-4 w-4" />
            <span>Rename</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="py-2">
            <FilePlus2 className="mr-2 h-4 w-4" />
            <span>New</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="py-2">
            <Files className="mr-2 h-4 w-4" />
            <span>Make a copy</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuSub>
            <DropdownMenuSubTrigger className="py-2">
              <UserRoundPlus className="mr-2 h-4 w-4" />
              <span>Share</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className="w-64">
                <DropdownMenuItem className="py-2">
                  <span>Coming soon!</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger className="py-2">
              <MailPlus className="mr-2 h-4 w-4" />
              <span>Email</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className="w-64">
                <DropdownMenuItem className="py-2">
                  <span>Email this file</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="py-2">
                  <span>Email Writing Style</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger className="py-2">
              <Download className="mr-2 h-4 w-4" />
              <span>Download</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className="w-64">
                <DropdownMenuItem className="py-2">
                  <span>Microsoft Word (.docx)</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="py-2">
                  <span>PDF (.pdf)</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DocumentFileTab;
