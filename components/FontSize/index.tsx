"use client";

import * as React from "react";
import { useToolbar } from "@/context/ToolbarContext";
import { $getSelection, $isRangeSelection } from "lexical";
import { $patchStyleText } from "@lexical/selection";

interface FontSizeAdjusterProps {
  fontSize?: number;
}

function FontSizeAdjuster({ fontSize = 12 }: FontSizeAdjusterProps) {
  const [count, setCount] = React.useState<number | string>(fontSize);
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(fontSize.toString());
  const { editor } = useToolbar();
  const isMounted = React.useRef(false);

  const handleFontSizeChange = React.useCallback(
    (size: string) => {
      setValue(size);
      editor.update(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
          $patchStyleText(selection, { "font-size": `${size}px` });
        }
      });
    },
    [editor]
  );

  React.useEffect(() => {
    isMounted.current = true;
    handleFontSizeChange(fontSize.toString());
    return () => {
      isMounted.current = false;
    };
  }, [fontSize, handleFontSizeChange]);

  const handleDecrement = () => {
    if (isMounted.current) {
      setCount((prevCount) => {
        const newValue = typeof prevCount === "number" ? Math.max(prevCount - 1, 1) : 1;
        handleFontSizeChange(newValue.toString());
        return newValue;
      });
    }
  };

  const handleIncrement = () => {
    if (isMounted.current) {
      setCount((prevCount) => {
        const newValue = typeof prevCount === "number" ? Math.min(prevCount + 1, 99) : 99;
        handleFontSizeChange(newValue.toString());
        return newValue;
      });
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (/^\d*$/.test(value)) {
      if (isMounted.current) {
        setCount(value);
      }
    }
  };

  const handleBlur = () => {
    if (isMounted.current) {
      if (typeof count === "string" && count !== "") {
        let numericValue = Number(count);
        if (numericValue < 1) {
          numericValue = 1;
        } else if (numericValue > 99) {
          numericValue = 99;
        }
        setCount(numericValue);
        handleFontSizeChange(numericValue.toString());
      }
    }
  };

  return (
    <div className="max-w-xs">
      <div className="relative flex h-8 items-center max-w-[8rem]">
        <button type="button" id="decrement-button" onClick={handleDecrement} className="rounded-s-lg p-1 md:p-2 h-6 md:h-8 hover:bg-accent hover:text-accent-foreground transition-colors duration-300 ease-in-out">
          <svg className="w-1.5 h-1.5 md:w-2 md:h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
          </svg>
        </button>
        <input type="text" value={count} onChange={handleChange} onBlur={handleBlur} data-input-counter aria-describedby="helper-text-explanation" className="bg-inherit text-card-primary border-x-0 h-6 md:h-8 text-center text-sm block w-6" required />
        <button type="button" id="increment-button" onClick={handleIncrement} className="rounded-e-lg p-1 md:p-2 h-6 md:h-8 hover:bg-accent hover:text-accent-foreground">
          <svg className="w-1.5 h-1.5 md:w-2 md:h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default FontSizeAdjuster;
