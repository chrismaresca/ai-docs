// src/context/AiInstanceContext.tsx
"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

import { AiInstanceType } from "@/types";

interface AiInstanceContextType {
  aiInstanceID: string | null;
  aiInstanceType: AiInstanceType;
  updateAiInstance: (editID: string | null, editType: AiInstanceType) => void;
}

const AiInstanceContext = createContext<AiInstanceContextType | undefined>(undefined);

export const AiInstanceProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [aiInstanceID, setAiInstanceID] = useState<string | null>(null);
  const [aiInstanceType, setAiInstanceType] = useState<AiInstanceType>(null);

  const updateAiInstance = (editID: string | null = null, editType: AiInstanceType = null) => {
    setAiInstanceID(editID);
    setAiInstanceType(editType);
  };

  return (
    <AiInstanceContext.Provider value={{ aiInstanceID, aiInstanceType, updateAiInstance }}>
      {children}
    </AiInstanceContext.Provider>
  );
};

export const useAiInstanceContext = () => {
  const context = useContext(AiInstanceContext);
  if (context === undefined) {
    throw new Error("useAiInstanceContext must be used within an AiInstanceProvider");
  }
  return context;
};
