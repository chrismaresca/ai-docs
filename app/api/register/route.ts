// app/api/register/route.js

import { authConfig } from "@/config/server-config";
import { getFirebaseAdminApp } from "@/firebase";
import { getFirestore } from "firebase-admin/firestore";
import { getTokens } from "next-firebase-auth-edge";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { userInfo } = await request.json();

  const tokenCookies = cookies();
  const tokens = await getTokens(tokenCookies, authConfig);

  if (!tokens) {
    return new Response(JSON.stringify({ error: "Unauthenticated." }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }


  try {
    const db = getFirestore(getFirebaseAdminApp());
    const user = {
      id: userInfo.id,
      name: userInfo.name,
      email: userInfo.email,
    };

    await db.collection("users").doc(userInfo.id).set(user);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("Failed to add user to Firestore", error);

    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
