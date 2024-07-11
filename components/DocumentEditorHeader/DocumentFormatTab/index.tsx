import React, { useState } from 'react';
import {
  Bold,
  AlignJustify,
  AlignLeft,
  AlignCenter,
  AlignRight,
  IndentIncrease,
  IndentDecrease,
  ArrowDownWideNarrow,
  List,
  ListOrdered,
  Italic,
  Underline,
  Strikethrough,
  Superscript,
  Subscript,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  DropdownMenuShortcut,
} from '@/components/ui/dropdown-menu';

const DocumentFormatTab: React.FC = () => {
  const [lineSpacing, setLineSpacing] = useState<string>('1.15');
  const [spaceBefore, setSpaceBefore] = useState<boolean>(false);
  const [spaceAfter, setSpaceAfter] = useState<boolean>(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="option text-base">Format</DropdownMenuTrigger>
      <DropdownMenuContent className="w-64">
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger className="py-2">
              <Bold className="mr-2 h-4 w-4" />
              <span>Text</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className="w-64">
                <DropdownMenuItem>
                  <Bold className="mr-2 h-4 w-4" />
                  <span>Bold</span>
                  <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Italic className="mr-2 h-4 w-4" />
                  <span>Italic</span>
                  <DropdownMenuShortcut>⌘I</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Underline className="mr-2 h-4 w-4" />
                  <span>Underline</span>
                  <DropdownMenuShortcut>⌘U</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Strikethrough className="mr-2 h-4 w-4" />
                  <span>Strikethrough</span>
                  <DropdownMenuShortcut>⌘⇧X</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Superscript className="mr-2 h-4 w-4" />
                  <span>Superscript</span>
                  <DropdownMenuShortcut>⌘.</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Subscript className="mr-2 h-4 w-4" />
                  <span>Subscript</span>
                  <DropdownMenuShortcut>⌘,</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger className="py-2">
              <AlignJustify className="mr-2 h-4 w-4" />
              <span>Paragraph styles</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className="w-64">
                <DropdownMenuItem>
                  <span>Normal Text</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Title</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Subtitle</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Heading 1</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Heading 2</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Heading 3</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Heading 4</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Heading 5</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Heading 6</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger className="py-2">
              <IndentIncrease className="mr-2 h-4 w-4" />
              <span>Align & indent</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className="w-64">
                <DropdownMenuItem>
                  <AlignLeft className="mr-2 h-4 w-4" />
                  <span>Left</span>
                  <DropdownMenuShortcut>⌘⇧L</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <AlignCenter className="mr-2 h-4 w-4" />
                  <span>Center</span>
                  <DropdownMenuShortcut>⌘⇧E</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <AlignRight className="mr-2 h-4 w-4" />
                  <span>Right</span>
                  <DropdownMenuShortcut>⌘⇧R</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <AlignJustify className="mr-2 h-4 w-4" />
                  <span>Justified</span>
                  <DropdownMenuShortcut>⌘⇧J</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <IndentIncrease className="mr-2 h-4 w-4" />
                  <span>Increase indent</span>
                  <DropdownMenuShortcut>⌘]</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <IndentDecrease className="mr-2 h-4 w-4" />
                  <span>Decrease indent</span>
                  <DropdownMenuShortcut>⌘[</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger className="py-2">
              <ArrowDownWideNarrow className="mr-2 h-4 w-4" />
              <span>Line & paragraph spacing</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className="w-64">
                <DropdownMenuCheckboxItem
                  checked={lineSpacing === 'Single'}
                  onCheckedChange={() => setLineSpacing('Single')}
                >
                  Single
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={lineSpacing === '1.15'}
                  onCheckedChange={() => setLineSpacing('1.15')}
                >
                  1.15
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={lineSpacing === '1.5'}
                  onCheckedChange={() => setLineSpacing('1.5')}
                >
                  1.5
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={lineSpacing === 'Double'}
                  onCheckedChange={() => setLineSpacing('Double')}
                >
                  Double
                </DropdownMenuCheckboxItem>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem
                  checked={spaceBefore}
                  onCheckedChange={setSpaceBefore}
                >
                  Add space before paragraph
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={spaceAfter}
                  onCheckedChange={setSpaceAfter}
                >
                  Add space after paragraph
                </DropdownMenuCheckboxItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger className="py-2">
              <List className="mr-2 h-4 w-4" />
              <span>Bullets & numbering</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className="w-64">
                <DropdownMenuItem>
                  <List className="mr-2 h-4 w-4" />
                  <span>Unordered list</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <ListOrdered className="mr-2 h-4 w-4" />
                  <span>Ordered list</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DocumentFormatTab;
