import React from "react";
import CreateDocument from "@/components/CreateDoc";

import { getTokens } from "next-firebase-auth-edge";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { authConfig } from "@/config/server-config";


export default async function page() {
  const tokens = await getTokens(cookies(), authConfig);

  if (!tokens) {
    notFound();
  }
  return (
    <div>
      <CreateDocument />
    </div>
  );
}
