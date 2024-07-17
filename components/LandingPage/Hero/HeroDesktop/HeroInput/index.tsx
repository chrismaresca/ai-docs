"use client";
import React, { useState } from "react";
import { Check, Loader } from "lucide-react";

const HeroInput: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [detected, setDetected] = useState(false);

  const updateLoadingAndDetected = (isLoading: boolean, isDetected: boolean, delay: number = 0) => {
    setLoading(isLoading);
    setDetected(isDetected);

    if (delay > 0) {
      setTimeout(() => {
        setLoading(false);
        setDetected(true);
      }, delay);
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pastedText = e.clipboardData.getData("Text");
    if (pastedText.length > 0) {
      updateLoadingAndDetected(true, false, 500);
    }
  };

  const handleChangeClick = () => {
    updateLoadingAndDetected(false, false);
    (document.getElementById("hero-input") as HTMLInputElement).value = "";
  };

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "v" && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      const inputElement = e.target as HTMLInputElement;
      const text = await navigator.clipboard.readText();
      const startPos = inputElement.selectionStart ?? 0;
      const endPos = inputElement.selectionEnd ?? 0;

      if (text.length > 0) {
        inputElement.value = inputElement.value.substring(0, startPos) + text + inputElement.value.substring(endPos);
        inputElement.selectionStart = inputElement.selectionEnd = startPos + text.length;
        updateLoadingAndDetected(true, false, 500);
      }
    }
  };

  const handlePasteClick = async (): Promise<void> => {
    const inputElement = document.getElementById("hero-input") as HTMLInputElement;
    if (inputElement) {
      inputElement.focus();

      try {
        const text = await navigator.clipboard.readText();
        const startPos = inputElement.selectionStart ?? 0;
        const endPos = inputElement.selectionEnd ?? 0;

        if (text.length > 0) {
          inputElement.value = inputElement.value.substring(0, startPos) + text + inputElement.value.substring(endPos);
          inputElement.selectionStart = inputElement.selectionEnd = startPos + text.length;

          updateLoadingAndDetected(true, false, 500);
        }
      } catch (err) {
        console.error("Failed to read clipboard contents: ", err);
      }
    }
  };

  return (
    <div className={`relative w-full lp-md:w-auto transition-all duration-500 ${detected ? "w-1/2" : ""}`}>
      <label htmlFor="hero-input" className="sr-only">
        Search
      </label>
      <div className={`relative block w-full lp-md:min-w-[15.25rem] min-[950px]:min-w-[17rem] min-[985px]:min-w-[18rem] min-[1024px]:min-w-[19rem] min-[1050px]:min-w-[20rem] min-[1080px]:min-w-[21rem] transition-all duration-700`}>
        <input
          type="text"
          id="hero-input"
          name="hero-input"
          className={`py-2.5 px-3.5 lg:py-3.5 lg:px-4 w-full h-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 transition-all duration-700 ${detected ? "overflow-hidden !bg-gray-300" : ""}`}
          placeholder="Paste some of your writing..."
          onPaste={handlePaste}
          onKeyDown={handleKeyDown}
          disabled={loading || detected}
          style={{ backgroundColor: "#f3f3f3", paddingRight: "3.5rem" }}
        />
        <ActionButton
          loading={loading}
          detected={detected}
          handlePasteClick={handlePasteClick}
          handleChangeClick={handleChangeClick}
        />
      </div>
    </div>
  );
};

type ActionButtonProps = {
  loading: boolean;
  detected: boolean;
  handlePasteClick: () => void;
  handleChangeClick: () => void;
};

const ActionButton: React.FC<ActionButtonProps> = ({ loading, detected, handlePasteClick, handleChangeClick }) => {
  return (
    <div className="group">
      {!loading && !detected && (
        <button onClick={handlePasteClick} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-600 transition-colors duration-200 ease-in-out">
          Paste
        </button>
      )}
      {loading && (
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 rounded-md bg-opacity-80 dark:bg-opacity-80">
          <Loader className="animate-spin" />
        </div>
      )}
      {detected && (
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 transition-all duration-1000 ease-in-out group-hover:hidden">
          <Check className="text-green-500 h-5 w-5 transition-transform duration-1000 ease-in-out" />
        </div>
      )}
      {detected && (
        <button
          onClick={handleChangeClick}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 transition-opacity duration-100 ease-in-out opacity-0 group-hover:opacity-100"
        >
          Edit
        </button>
      )}
    </div>
  );
};

export default HeroInput;
