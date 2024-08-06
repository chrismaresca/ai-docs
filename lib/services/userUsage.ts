import { NextRequest, NextResponse } from "next/server";
import { getTokens } from "next-firebase-auth-edge";
import { cookies } from "next/headers";
import { authConfig } from "@/config/server-config";
import { getFirebaseAdminApp } from "@/firebase";
import { getFirestore } from "firebase-admin/firestore";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "firebase-admin";

export async function setUserProjects() {
//   const tokens = await getTokens(cookies(), authConfig);

//   if (!tokens) {
//     throw new Error("Unauthenticated");
//   }

  const db = getFirestore(getFirebaseAdminApp());

  const citiesRef = db.collection("cities");

  await citiesRef.doc("SF").set({
    name: "San Francisco",
    state: "CA",
    country: "USA",
    capital: false,
    population: 860000,
  });
  await citiesRef.doc("LA").set({
    name: "Los Angeles",
    state: "CA",
    country: "USA",
    capital: false,
    population: 3900000,
  });
  await citiesRef.doc("DC").set({
    name: "Washington, D.C.",
    state: null,
    country: "USA",
    capital: true,
    population: 680000,
  });
  await citiesRef.doc("TOK").set({
    name: "Tokyo",
    state: null,
    country: "Japan",
    capital: true,
    population: 9000000,
  });
  await citiesRef.doc("BJ").set({
    name: "Beijing",
    state: null,
    country: "China",
    capital: true,
    population: 21500000,
  });

  //   const cityRef = db.collection("projects").doc("SF");
  //   const doc = await cityRef.get();

  //   if (!doc.exists) {
  //     console.log("No such document!");
  //   } else {
  //     console.log("Document data:", doc.data());
  //   }
}
