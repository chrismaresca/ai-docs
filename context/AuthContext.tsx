"use client";
import React, { createContext, useState, ReactNode, useContext } from "react";

interface AuthContextType {
  hasLogged: boolean;
  setHasLogged: (value: boolean) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an EditorProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [hasLogged, setHasLogged] = useState(false);

  return <AuthContext.Provider value={{ hasLogged, setHasLogged }}>{children}</AuthContext.Provider>;
};
