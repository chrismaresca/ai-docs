import { getTokens } from "next-firebase-auth-edge";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { authConfig } from "../../config/server-config";

import HomePage from "../HomePage";

export default async function page() {
  const email = "chris";

  return <HomePage email={email} />;
}
