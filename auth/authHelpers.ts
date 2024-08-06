import { getTokens, Tokens } from "next-firebase-auth-edge";
import { cookies } from "next/headers";
import { authConfig } from "@/config/server-config";

enum Role {
  Free = 0,
  Pro = 1,
  Expert = 2,
}

const roleMapping: { [key in Role]: string } = {
  [Role.Free]: "free",
  [Role.Pro]: "pro",
  [Role.Expert]: "expert",
};

interface VerifyOptions {
  requiredRole?: string;
}

function getRoleValue(role: string): Role | null {
  const entry = Object.entries(roleMapping).find(([, value]) => value === role);
  return entry ? (entry[0] as unknown as Role) : null;
}

function hasPermission(requiredRole: Role, userRole: Role): boolean {
  return userRole >= requiredRole;
}

export async function verifyUserByRole(options?: VerifyOptions): Promise<void> {
  // const { requiredRole } = options;

  const tokens = await getTokens(cookies(), authConfig);

  if (!tokens) {
    throw new Error("Unauthenticated");
  }

  console.log(tokens.decodedToken.role);

  // if (requiredRole) {
  //   const userRole = tokens.decodedToken["role"];

  //   if (!userRole) {
  //     throw new Error("Role cannot be found.");
  //   }
  //   const userRoleValue = getRoleValue(userRole);

  //   if (userRoleValue === null) {
  //     throw new Error("Invalid role");
  //   }

  //   const requiredRoleValue = getRoleValue(requiredRole);

  //   if (requiredRoleValue === null) {
  //     throw new Error("Invalid required role");
  //   }

  //   if (!hasPermission(requiredRoleValue, userRoleValue)) {
  //     throw new Error("Insufficient permissions");
  //   }
  // }
}
