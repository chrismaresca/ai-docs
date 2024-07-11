// toolbarFunctions.ts
import { LexicalEditor, ElementFormatType, TextFormatType } from 'lexical';
import {
  FORMAT_TEXT_COMMAND,
  FORMAT_ELEMENT_COMMAND,
  UNDO_COMMAND,
  REDO_COMMAND,
} from 'lexical';

export const toggleInlineStyle = (editor: LexicalEditor, style: TextFormatType): void => {
  editor.dispatchCommand(FORMAT_TEXT_COMMAND, style);
};

export const applyTextAlignment = (editor: LexicalEditor, alignment: ElementFormatType): void => {
  editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, alignment);
};

export const undo = (editor: LexicalEditor): void => {
  editor.dispatchCommand(UNDO_COMMAND, undefined);
};

export const redo = (editor: LexicalEditor): void => {
  editor.dispatchCommand(REDO_COMMAND, undefined);
};
