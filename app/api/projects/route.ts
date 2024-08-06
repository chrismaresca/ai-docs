import { NextRequest, NextResponse } from "next/server";
import { getTokens } from "next-firebase-auth-edge";
import { cookies } from "next/headers";
import { authConfig } from "@/config/server-config";

// Firestore
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { getFirebaseAdminApp } from "@/firebase";
import { getFirestore } from "firebase-admin/firestore";

export async function GET(_request: NextRequest) {
  const tokens = await getTokens(cookies(), authConfig);

  //   if (!tokens) {
  //     throw new Error("Unauthenticated");
  //   }

  const db = getFirestore(getFirebaseAdminApp());

  const snapshot = await db.collection("user-counters").doc("chris").get();

  const currentUserCounter = snapshot.data();
  console.log("running");

  if (!snapshot.exists || !currentUserCounter) {
    const userCounter = {
      id: "chris",
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
