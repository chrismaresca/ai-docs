/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext';
import {mergeRegister} from '@lexical/utils';
import {
  $getSelection,
  $isRangeSelection,
  CAN_REDO_COMMAND,
  CAN_UNDO_COMMAND,
  FORMAT_ELEMENT_COMMAND,
  FORMAT_TEXT_COMMAND,
  REDO_COMMAND,
  SELECTION_CHANGE_COMMAND,
  UNDO_COMMAND,
} from 'lexical';
import {useCallback, useEffect, useRef, useState} from 'react';

const LowPriority = 1;

function Divider() {
  return <div className="w-px bg-gray-200 mx-1" />;
}

export default function ToolbarPlugin() {
  const [editor] = useLexicalComposerContext();
  const toolbarRef = useRef(null);
  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isStrikethrough, setIsStrikethrough] = useState(false);

  const $updateToolbar = useCallback(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      // Update text format
      setIsBold(selection.hasFormat('bold'));
      setIsItalic(selection.hasFormat('italic'));
      setIsUnderline(selection.hasFormat('underline'));
      setIsStrikethrough(selection.hasFormat('strikethrough'));
    }
  }, []);

  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({editorState}) => {
        editorState.read(() => {
          $updateToolbar();
        });
      }),
      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        (_payload, _newEditor) => {
          $updateToolbar();
          return false;
        },
        LowPriority,
      ),
      editor.registerCommand(
        CAN_UNDO_COMMAND,
        (payload) => {
          setCanUndo(payload);
          return false;
        },
        LowPriority,
      ),
      editor.registerCommand(
        CAN_REDO_COMMAND,
        (payload) => {
          setCanRedo(payload);
          return false;
        },
        LowPriority,
      ),
    );
  }, [editor, $updateToolbar]);

  return (
    <div className="flex mb-px bg-white p-1 rounded-tl-[10px] rounded-tr-[10px] align-middle" ref={toolbarRef}>
      <button
        disabled={!canUndo}
        onClick={() => {
          editor.dispatchCommand(UNDO_COMMAND, undefined);
        }}
        className="flex bg-none rounded-[10px] p-2 cursor-pointer align-middle disabled:cursor-not-allowed mr-0.5"
        aria-label="Undo">
        <i className="format undo bg-contain  h-[18px] w-[18px] mt-0.5 align-middle flex opacity-60 disabled:opacity-20" />
      </button>
      <button
        disabled={!canRedo}
        onClick={() => {
          editor.dispatchCommand(REDO_COMMAND, undefined);
        }}
        className="flex bg-none rounded-[10px] p-2 cursor-pointer align-middle disabled:cursor-not-allowed"
        aria-label="Redo">
        <i className="format redo bg-contain  h-[18px] w-[18px] mt-0.5 align-middle flex opacity-60 disabled:opacity-20" />
      </button>
      <Divider />
      <button
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold');
        }}
        className={'flex bg-none rounded-[10px] p-2 cursor-pointer align-middle mr-0.5 ' + (isBold ? 'bg-[rgba(223,232,250,0.3)]' : '')}
        aria-label="Format Bold">
        <i className="format bold bg-contain  h-[18px] w-[18px] mt-0.5 align-middle flex opacity-60 disabled:opacity-20" />
      </button>
      <button
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic');
        }}
        className={'flex bg-none rounded-[10px] p-2 cursor-pointer align-middle mr-0.5 ' + (isItalic ? 'bg-[rgba(223,232,250,0.3)]' : '')}
        aria-label="Format Italics">
        <i className="format italic bg-contain  h-[18px] w-[18px] mt-0.5 align-middle flex opacity-60 disabled:opacity-20" />
      </button>
      <button
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline');
        }}
        className={'flex bg-none rounded-[10px] p-2 cursor-pointer align-middle mr-0.5 ' + (isUnderline ? 'bg-[rgba(223,232,250,0.3)]' : '')}
        aria-label="Format Underline">
        <i className="format underline bg-contain  h-[18px] w-[18px] mt-0.5 align-middle flex opacity-60 disabled:opacity-20" />
      </button>
      <button
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'strikethrough');
        }}
        className={'flex bg-none rounded-[10px] p-2 cursor-pointer align-middle mr-0.5 ' + (isStrikethrough ? 'bg-[rgba(223,232,250,0.3)]' : '')}
        aria-label="Format Strikethrough">
        <i className="format strikethrough bg-contain  h-[18px] w-[18px] mt-0.5 align-middle flex opacity-60 disabled:opacity-20" />
      </button>
      <Divider />
      <button
        onClick={() => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'left');
        }}
        className="flex bg-none rounded-[10px] p-2 cursor-pointer align-middle mr-0.5"
        aria-label="Left Align">
        <i className="format left-align bg-contain  h-[18px] w-[18px] mt-0.5 align-middle flex opacity-60 disabled:opacity-20" />
      </button>
      <button
        onClick={() => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'center');
        }}
        className="flex bg-none rounded-[10px] p-2 cursor-pointer align-middle mr-0.5"
        aria-label="Center Align">
        <i className="format center-align bg-black  h-[18px] w-[18px] mt-0.5 align-middle flex opacity-60 disabled:opacity-20" />
      </button>
      <button
        onClick={() => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'right');
        }}
        className="flex bg-none rounded-[10px] p-2 cursor-pointer align-middle mr-0.5"
        aria-label="Right Align">
        <i className="format right-align bg-contain  h-[18px] w-[18px] mt-0.5 align-middle flex opacity-60 disabled:opacity-20" />
      </button>
      <button
        onClick={() => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'justify');
        }}
        className="flex bg-none rounded-[10px] p-2 cursor-pointer align-middle"
        aria-label="Justify Align">
        <i className="format justify-align bg-contain  h-[18px] w-[18px] mt-0.5 align-middle flex opacity-60 disabled:opacity-20" />
      </button>{' '}
    </div>
  );
}
