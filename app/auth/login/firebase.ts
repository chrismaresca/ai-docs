import type { Auth, AuthError, AuthProvider, User, UserCredential } from "firebase/auth";
import { browserPopupRedirectResolver, getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect, signOut, useDeviceLanguage } from "firebase/auth";

const CREDENTIAL_ALREADY_IN_USE_ERROR = "auth/credential-already-in-use";
export const isCredentialAlreadyInUseError = (e: AuthError) => e?.code === CREDENTIAL_ALREADY_IN_USE_ERROR;



export const getGoogleProvider = (auth: Auth) => {
  const provider = new GoogleAuthProvider();
  provider.addScope("profile");
  provider.addScope("email");
  // useDeviceLanguage(auth);
  provider.setCustomParameters({
    display: "popup",
  });

  return provider;
};

export const loginWithProvider = async (auth: Auth, provider: AuthProvider): Promise<UserCredential> => {
  const result = await signInWithPopup(auth, provider, browserPopupRedirectResolver);

  return result;
};

export const loginWithProviderUsingRedirect = async (auth: Auth, provider: AuthProvider): Promise<void> => {
  await signInWithRedirect(auth, provider);
};
