"use client"
import React from "react";
import { useRedirectParam } from "@/shared/useRedirectParam";
import { X } from "lucide-react";
import Link from "next/link";
import { AuthProvider, useAuthContext } from "@/context/AuthContext";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayoutContent: React.FC<AuthLayoutProps> = ({ children }) => {
  const { hasLogged } = useAuthContext();

  const redirect = useRedirectParam();

  return (
    <div>
      {hasLogged ? (
        <div>
          <span>
            Redirecting to <strong>{redirect}</strong>
          </span>
        </div>
      ) : (
        <div className="bg-background lg:fixed lg:inset-0 flex items-center justify-center">
          <Link href="/" className="absolute top-4 right-4">
            <X className="w-6 h-6 text-gray-500 cursor-pointer" />
          </Link>
          <div className="max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:gap-16 lg:py-16 lg:grid-cols-12">
            <div className="w-full place-self-center col-span-full lg:col-span-6">
              <div className="p-6 mx-auto bg-card text-card-foreground rounded-xl shadow sm:max-w-xl sm:p-8">{children}</div>
            </div>
            <div className="mr-auto place-self-center hidden lg:flex lg:col-span-6">
              <img className="mx-auto" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/authentication/illustration.svg" alt="illustration" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => (
  <AuthProvider>
    <AuthLayoutContent>{children}</AuthLayoutContent>
  </AuthProvider>
);

export default AuthLayout;
