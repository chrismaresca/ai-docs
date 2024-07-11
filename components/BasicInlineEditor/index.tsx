import React from 'react';
import { Bold, Italic, Underline } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ColorPicker from '@/components/ColorPicker/index';
import { useToolbar } from '@/context/ToolbarContext';
import { FORMAT_TEXT_COMMAND } from 'lexical';

const iconSize = 'h-4 w-4'; // Define the icon size once

const BasicInlineEditor: React.FC = () => {
  const { isBold, isItalic, isUnderline, editor } = useToolbar();

  return (
    <div className="flex items-center h-8 space-x-2 px-2 rounded">
      <Button
        variant="ghost"
        className={`p-1 h-8 ${isBold ? 'bg-gray-200' : ''}`}
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold')}
      >
        <Bold className={iconSize} />
      </Button>
      <Button
        variant="ghost"
        className={`p-1 h-8 ${isItalic ? 'bg-gray-200' : ''}`}
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic')}
      >
        <Italic className={iconSize} />
      </Button>
      <Button
        variant="ghost"
        className={`p-1 h-8 ${isUnderline ? 'bg-gray-200' : ''}`}
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline')}
      >
        <Underline className={iconSize} />
      </Button>
      <ColorPicker />
    </div>
  );
};

export default BasicInlineEditor;
