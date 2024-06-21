import { NextRequest, NextResponse } from "next/server";
import { getTokens } from "next-firebase-auth-edge";
import { cookies } from "next/headers";
import { authConfig } from "@/config/server-config";
import { getFirebaseAdminApp } from "@/firebase";
import { getFirestore } from "firebase-admin/firestore";

export async function GET(_request: NextRequest) {
  const tokens = await getTokens(cookies(), authConfig);

  if (!tokens) {
    throw new Error("Unauthenticated");
  }

  const db = getFirestore(getFirebaseAdminApp());

  const snapshot = await db.collection("user-counters").doc(tokens.decodedToken.uid).get();

  const currentUserCounter = snapshot.data();
  console.log(currentUserCounter)

  if (!snapshot.exists || !currentUserCounter) {
    const userCounter = {
      id: tokens.decodedToken.uid,
      count: 1,
    };

    await snapshot.ref.create(userCounter);
    return NextResponse.json(userCounter);
  }

  const newUserCounter = {
    ...currentUserCounter,
    count: currentUserCounter.count + 1,
  };
  await snapshot.ref.update(newUserCounter);

  return NextResponse.json(newUserCounter);
}
