import { NextRequest, NextResponse } from "next/server";
import { authMiddleware, getTokens, redirectToHome, redirectToLogin } from "next-firebase-auth-edge";
import { authConfig } from "./config/server-config";

const PUBLIC_PATHS = ["/auth/register", "/auth/login", "/auth/reset-password", "/"];

const commonOptions = {
  apiKey: authConfig.apiKey,
  cookieName: authConfig.cookieName,
  cookieSerializeOptions: authConfig.cookieSerializeOptions,
  cookieSignatureKeys: authConfig.cookieSignatureKeys,
  serviceAccount: authConfig.serviceAccount,
};

export async function middleware(request: NextRequest) {
  return authMiddleware(request, {
    loginPath: "/api/login",
    logoutPath: "/api/logout",
    ...commonOptions,

    handleValidToken: async ({ token, decodedToken }, headers) => {
      // Authenticated user should not be able to access /login, /register and /reset-password routes
      if (PUBLIC_PATHS.includes(request.nextUrl.pathname)) {
        return redirectToHome(request);
      }

      return NextResponse.next({
        request: {
          headers,
        },
      });
    },
    handleInvalidToken: async (reason) => {
      // console.info("Missing or malformed credentials", { reason });

      return redirectToLogin(request, {
        path: "/auth/login",
        publicPaths: PUBLIC_PATHS,
      });
    },
    handleError: async (error) => {
      console.error("Unhandled authentication error", { error });

      return redirectToLogin(request, {
        path: "/auth/login",
        publicPaths: PUBLIC_PATHS,
      });
    },
  });
}

export const config = {
  matcher: ["/api/login", "/api/logout", "/", "/((?!_next|favicon.ico|api|.*\\.).*)"],
};
