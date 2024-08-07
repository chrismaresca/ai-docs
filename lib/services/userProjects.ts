import { NextRequest, NextResponse } from "next/server";
import { getTokens } from "next-firebase-auth-edge";
import { cookies } from "next/headers";
import { authConfig } from "@/config/server-config";
import { getFirebaseAdminApp } from "@/firebase";
import { getFirestore, Timestamp } from "firebase-admin/firestore";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "firebase-admin";
import { ProjectMeta } from "@/types";
import { formatDate } from "../utils/dateUtils";

export async function getUserProjects() {
  const tokens = await getTokens(cookies(), authConfig);

  if (!tokens) {
    throw new Error("Unauthenticated");
  }

  const db = getFirestore(getFirebaseAdminApp());
  const projectsRef = db.collection("projects");

  const snapshot = await projectsRef
    .where("userId", "==", tokens.decodedToken.uid)
    .orderBy("dateLastModified", "desc")
    .get();
    
  if (snapshot.empty) {
    console.log("No matching documents.");
    return [];
  }

  const projects: ProjectMeta[] = [];

  snapshot.forEach((doc) => {
    const data = doc.data();
    const projectMeta: ProjectMeta = {
      projectId: doc.id,
      name: data.name,
      projectType: data.projectType,
      dateCreated: formatDate(data.dateCreated.toDate()),
      dateLastModified: formatDate(data.dateLastModified.toDate()),
    };
    projects.push(projectMeta);
  });

  return projects;
}
