"use client";

import { UserCredential, isSignInWithEmailLink, sendSignInLinkToEmail, signInWithEmailAndPassword, signInWithEmailLink } from "firebase/auth";
import Link from "next/link";
import * as React from "react";
import { useLoadingCallback } from "react-loading-hook";
import { loginWithCredential } from "@/app/api";

// UI Imports
import { Button } from "@/ui/Button/Button";
import { ButtonGroup } from "@/ui/ButtonGroup/ButtonGroup";
import { PasswordForm, PasswordFormValue } from "@/ui/PasswordForm/PasswordForm";

import { getFirebaseAuth } from "@/auth/firebase";
import { appendRedirectParam } from "@/shared/redirect";
import { useRedirectAfterLogin } from "@/shared/useRedirectAfterLogin";
import { useRedirectParam } from "@/shared/useRedirectParam";
import { getGoogleProvider, loginWithProvider } from "./firebase";

export function LoginPage() {
  const [hasLogged, setHasLogged] = React.useState(false);
  const redirect = useRedirectParam();
  const redirectAfterLogin = useRedirectAfterLogin();

  async function handleLogin(credential: UserCredential) {
    await loginWithCredential(credential);
    redirectAfterLogin();
  }

  const [handleLoginWithEmailAndPassword, isEmailLoading, emailPasswordError] = useLoadingCallback(async ({ email, password }: PasswordFormValue) => {
    setHasLogged(false);

    const auth = getFirebaseAuth();
    await handleLogin(await signInWithEmailAndPassword(auth, email, password));

    setHasLogged(true);
  });

  const [handleLoginWithGoogle, isGoogleLoading, googleError] = useLoadingCallback(async () => {
    setHasLogged(false);

    const auth = getFirebaseAuth();
    await handleLogin(await loginWithProvider(auth, getGoogleProvider(auth)));

    setHasLogged(true);
  });

  const [handleLoginWithEmailLink, isEmailLinkLoading, emailLinkError] = useLoadingCallback(async () => {
    const auth = getFirebaseAuth();
    const email = window.prompt("Please provide your email");

    if (!email) {
      return;
    }

    window.localStorage.setItem("emailForSignIn", email);

    await sendSignInLinkToEmail(auth, email, {
      url: process.env.NEXT_PUBLIC_ORIGIN + "/login",
      handleCodeInApp: true,
    });
  });

  async function handleLoginWithEmailLinkCallback() {
    const auth = getFirebaseAuth();
    if (!isSignInWithEmailLink(auth, window.location.href)) {
      return;
    }

    let email = window.localStorage.getItem("emailForSignIn");
    if (!email) {
      email = window.prompt("Please provide your email for confirmation");
    }

    if (!email) {
      return;
    }

    setHasLogged(false);

    await handleLogin(await signInWithEmailLink(auth, email, window.location.href));
    window.localStorage.removeItem("emailForSignIn");

    setHasLogged(true);
  }

  React.useEffect(() => {
    handleLoginWithEmailLinkCallback();
  }, []);

  return (
    // <div>

    //   Login
    //   {hasLogged && (
    //     <div>
    //       <span>
    //         Redirecting to <strong>{redirect || "/"}</strong>
    //       </span>
    //       {/* <LoadingIcon /> */}
    //     </div>
    //   )}
    //   {!hasLogged && (
    //     <PasswordForm loading={isEmailLoading} onSubmit={handleLoginWithEmailAndPassword} error={emailPasswordError || googleError || emailLinkError}>
    //       <ButtonGroup>

    //         <Link href={appendRedirectParam("/reset-password", redirect)}>
    //           Reset password
    //         </Link>
    //         <Link href={appendRedirectParam("/register", redirect)}>
    //           <Button>Register</Button>
    //         </Link>
    //         <Button loading={isGoogleLoading} disabled={isGoogleLoading} onClick={handleLoginWithGoogle}>
    //           Log in with Google (Popup)
    //         </Button>

    //         <Button loading={isEmailLinkLoading} disabled={isEmailLinkLoading} onClick={handleLoginWithEmailLink}>
    //           Log in with Email Link
    //         </Button>
    //       </ButtonGroup>
    //     </PasswordForm>
    //   )}
    // </div>
    <section className="bg-background">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-20 lg:py-16 lg:grid-cols-12">
        <div className="w-full place-self-center lg:col-span-6">
          <div className="p-6 mx-auto bg-card rounded-lg shadow sm:max-w-xl sm:p-8">
            <a href="#" className="inline-flex items-center mb-4 text-xl font-semibold text-foreground">
              <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
              Flowbite
            </a>
            <h1 className="mb-2 text-2xl font-bold leading-tight tracking-tight text-foreground">Welcome back</h1>
            <p className="text-sm font-light text-gray-500 dark:text-gray-300">
              Start your website in seconds. Don’t have an account?{" "}
              <a href="#" className="font-medium text-primary hover:underline">
                Sign up
              </a>
              .
            </p>
            <PasswordForm loading={isEmailLoading} onSubmit={handleLoginWithEmailAndPassword} error={emailPasswordError || googleError || emailLinkError}>
              <div className="flex items-center">
                <div className="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
                <div className="px-5 text-center text-gray-500 dark:text-gray-400">or</div>
                <div className="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
              </div>
              <div className="space-y-3 mt-6">
                <a href="#" className="w-full inline-flex items-center justify-center py-2.5 px-5 text-sm font-medium text-foreground bg-background rounded-lg border border-border hover:bg-muted hover:text-foreground focus:z-10 focus:ring-4 focus:ring-muted">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_13183_10121)">
                      <path d="M20.3081 10.2303C20.3081 9.55056 20.253 8.86711 20.1354 8.19836H10.7031V12.0492H16.1046C15.8804 13.2911 15.1602 14.3898 14.1057 15.0879V17.5866H17.3282C19.2205 15.8449 20.3081 13.2728 20.3081 10.2303Z" fill="#3F83F8" />
                      <path d="M10.7019 20.0006C13.3989 20.0006 15.6734 19.1151 17.3306 17.5865L14.1081 15.0879C13.2115 15.6979 12.0541 16.0433 10.7056 16.0433C8.09669 16.0433 5.88468 14.2832 5.091 11.9169H1.76562V14.4927C3.46322 17.8695 6.92087 20.0006 10.7019 20.0006V20.0006Z" fill="#34A853" />
                      <path d="M5.08857 11.9169C4.66969 10.6749 4.66969 9.33008 5.08857 8.08811V5.51233H1.76688C0.348541 8.33798 0.348541 11.667 1.76688 14.4927L5.08857 11.9169V11.9169Z" fill="#FBBC04" />
                      <path d="M10.7019 3.95805C12.1276 3.936 13.5055 4.47247 14.538 5.45722L17.393 2.60218C15.5852 0.904587 13.1858 -0.0287217 10.7019 0.000673888C6.92087 0.000673888 3.46322 2.13185 1.76562 5.51234L5.08732 8.08813C5.87733 5.71811 8.09302 3.95805 10.7019 3.95805V3.95805Z" fill="#EA4335" />
                    </g>
                    <defs>
                      <clipPath id="clip0_13183_10121">
                        <rect width="20" height="20" fill="white" transform="translate(0.5)" />
                      </clipPath>
                    </defs>
                  </svg>
                  Sign in with Google
                </a>
              </div>
            </PasswordForm>
          </div>
        </div>
        <div className="mr-auto place-self-center lg:col-span-6">
          <img className="hidden mx-auto lg:flex" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/authentication/illustration.svg" alt="illustration" />
        </div>
      </div>
    </section>
  );
}
