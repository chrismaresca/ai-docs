import { NextRequest } from "next/server";
import { getTokens } from "next-firebase-auth-edge";
import { cookies } from "next/headers";
import { authConfig } from "@/config/server-config";

export const validateToken = async (req: NextRequest) => {
  const tokens = await getTokens(cookies(), authConfig);

  if (!tokens) {
    throw new Error("Unauthenticated");
  }

  return { uid: tokens.decodedToken.uid };
};
