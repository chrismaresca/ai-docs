"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

interface ConversationContextType {
  showConversation: boolean;
  toggleShowConversation: () => void;
}

const ConversationContext = createContext<ConversationContextType | undefined>(undefined);

export const ConversationContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [showConversation, setShowConversation] = useState<boolean>(true);

  const toggleShowConversation = () => {
    setShowConversation(prevState => !prevState);
  };

  return (
    <ConversationContext.Provider value={{ showConversation, toggleShowConversation }}>
      {children}
    </ConversationContext.Provider>
  );
};

export const useConversationContext = () => {
  const context = useContext(ConversationContext);
  if (context === undefined) {
    throw new Error("useConversationContext must be used within a ConversationContextProvider");
  }
  return context;
};
