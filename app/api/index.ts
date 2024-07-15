import { getToken } from "@firebase/app-check";
// import {getAppCheck} from '../app-check';
import { UserCredential } from "firebase/auth";

// -------------------------------------------------------------------------------------------------- //
// -------------------------------------------------------------------------------------------------- //

// Login Helper
export async function login(token: string) {
  const headers: Record<string, string> = {
    Authorization: `Bearer ${token}`,
  };

  await fetch("/api/login", {
    method: "GET",
    headers: headers,
  });
}

// -------------------------------------------------------------------------------------------------- //
// -------------------------------------------------------------------------------------------------- //

// Login with Credentials
export async function loginWithCredential(credential: UserCredential) {
  const idToken = await credential.user.getIdToken();

  await login(idToken);
}

// -------------------------------------------------------------------------------------------------- //
// -------------------------------------------------------------------------------------------------- //

// Logout
export async function logout() {
  const headers: Record<string, string> = {};

  await fetch("/api/logout", {
    method: "GET",
    headers: headers,
  });
}

// -------------------------------------------------------------------------------------------------- //
// -------------------------------------------------------------------------------------------------- //

// Refresh
export async function refreshToken() {
  const headers: Record<string, string> = {};

  await fetch("/api/refresh-token", {
    method: "GET",
    headers: headers,
  });
}
