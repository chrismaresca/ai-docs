"use server";
import { getTokens } from "next-firebase-auth-edge";
import { cookies } from "next/headers";
import { authConfig } from "@/config/server-config";
import { redirect } from "next/navigation";

// Firestore and Firebase admin
import { getFirebaseAdminApp } from "@/firebase";
import { FieldValue, getFirestore, Timestamp } from "firebase-admin/firestore";
import { ProjectCreate, ProjectMeta } from "@/types";

export async function handleProjectCreation(prevState: any, projectData: FormData) {
  const projectName = (projectData.get("projectName") as string) || "Untitled Project";
//   const router = useRouter()
  const tokens = await getTokens(cookies(), authConfig);

  if (!tokens) {
    throw new Error("Unauthenticated");
  }

  const creationDateTime = FieldValue.serverTimestamp();

  const projectCreateObj: ProjectCreate = {
    name: projectName,
    userId: tokens.decodedToken.uid,
    projectType: "Essay",
    dateCreated: creationDateTime,
    dateLastModified: creationDateTime,
  };

  try {
    const db = getFirestore(getFirebaseAdminApp());
    await db.collection("projects").add(projectCreateObj);
    console.log("project created");
  } catch (error) {
    console.error("Error creating project:", error);
    throw new Error("Failed to create project");
  }
  redirect("/test3");

// router.refresh()

return {
    "message": "success"
}

}
