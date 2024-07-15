// app/auth/login/page.tsx
"use client";
import React, { useContext } from "react";
import LoginPage from "@/components/auth/login/Login";
import { AuthContext } from "@/context/AuthContext";

const Login: React.FC = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("Login must be used within an AuthProvider");
  }

  const { setHasLogged } = context;

  return <LoginPage/>;
};

export default Login;
