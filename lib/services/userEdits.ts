import { NextRequest, NextResponse } from "next/server";
import { getTokens } from "next-firebase-auth-edge";
import { cookies } from "next/headers";
import { authConfig } from "@/config/server-config";
import { getFirebaseAdminApp } from "@/firebase";
import { getFirestore, Timestamp } from "firebase-admin/firestore";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "firebase-admin";
import { AiInstanceMeta, ProjectMeta } from "@/types";
import { formatDate } from "../utils/dateUtils";

export async function getProjectAiInstances(projectId: string) {
  const tokens = await getTokens(cookies(), authConfig);

  if (!tokens) {
    throw new Error("Unauthenticated");
  }

  const db = getFirestore(getFirebaseAdminApp());
  const aiInstancesRef = db.collection("ai-instances");

  const snapshot = await aiInstancesRef.where("userId", "==", tokens.decodedToken.uid).where("projectId", "==", projectId).orderBy("dateLastModified", "desc").get();

  if (snapshot.empty) {
    console.log("No matching ai instances.");
    return [];
  }

  const aiInstances: AiInstanceMeta[] = [];

  snapshot.forEach((doc) => {
    const data = doc.data();
    const AiInstanceMeta: AiInstanceMeta = {
      instanceId: doc.id,
      projectId: data.projectId,
      name: data.name,
      instanceType: data.instanceType,
      dateCreated: formatDate(data.dateCreated.toDate()),
      dateLastModified: formatDate(data.dateLastModified.toDate()),
    };
    aiInstances.push(AiInstanceMeta);
  });

  return aiInstances;
}
