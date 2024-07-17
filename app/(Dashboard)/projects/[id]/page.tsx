"use client";
import React from "react";
import dynamic from "next/dynamic";
import { ModeToggle } from "@/components/theme-toggle";

// Dynamically load the text editor component with no SSR.
const TextEditor = dynamic(() => import("@/containers/text-editor"), {
  ssr: false,
});

const Page = () => {
  return (
    <div className="bg-gray-100 pb-16 min-h-screen w-screen">
      <ModeToggle />
      {/* <TextEditor /> */}
    </div>
  );
};

export default Page;
