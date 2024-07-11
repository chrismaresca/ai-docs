"use client";

import { UserCredential, isSignInWithEmailLink, sendSignInLinkToEmail, signInWithEmailAndPassword, signInWithEmailLink } from "firebase/auth";
import Link from "next/link";
import * as React from "react";
import { useLoadingCallback } from "react-loading-hook";
import { loginWithCredential } from "@/app/api";

// UI Imports
import { Button } from "@/ui/Button/Button";
import AuthButton from "@/components/auth-components/AuthButton";
import { ButtonGroup } from "@/ui/ButtonGroup/ButtonGroup";
import { PasswordForm, PasswordFormValue } from "@/ui/PasswordForm/PasswordForm";
import GoogleIcon from "@/components/icons/GoogleIcon";

import { getFirebaseAuth } from "@/auth/firebase";
import { appendRedirectParam } from "@/shared/redirect";
import { useRedirectAfterLogin } from "@/shared/useRedirectAfterLogin";
import { useRedirectParam } from "@/shared/useRedirectParam";
import { getGoogleProvider, loginWithProvider } from "./firebase";

export function LoginPage() {
  // Sign in state
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isHidden, setIsHidden] = React.useState(true);
  const [rememberMe, setRememberMe] = React.useState(false);

  const [hasLogged, setHasLogged] = React.useState(false);
  const redirect = useRedirectParam();
  const redirectAfterLogin = useRedirectAfterLogin();

  async function handleLogin(credential: UserCredential) {
    await loginWithCredential(credential);
    redirectAfterLogin();
  }

  const handleRememberMe = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setRememberMe(event.target.checked);
  };

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
    <div>
      {hasLogged && (
        <div>
          <span>
            Redirecting to <strong>{redirect || "/"}</strong>
          </span>
        </div>
      )}
      {!hasLogged && (
        <div className="bg-background">
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
                  <Link href="/register" className="font-medium text-primary hover:underline">
                    Sign up
                  </Link>
                  .
                </p>
                {/* Form */}
                <form className="mt-4 space-y-6 sm:mt-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="block mb-2 text-sm font-medium text-card-foreground">Email</label>
                      <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} className="p-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="chris@workmait.ai" required disabled={isEmailLinkLoading || isGoogleLoading} />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input value={password} type={isHidden ? "password" : "text"} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required minLength={8} disabled={isEmailLinkLoading || isGoogleLoading} />
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
                    <div className="px-5 text-center text-gray-500 dark:text-gray-400">or</div>
                    <div className="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
                  </div>

                  <AuthButton loading={isGoogleLoading} onClick={handleLoginWithGoogle} icon={<GoogleIcon />} label="Sign in with Google" />

                  <div className="flex items-center justify-between">
                    <div className="flex items-center h-5">
                      <label className="flex items-center cursor-pointer">
                        <input type="checkbox" checked={rememberMe} onChange={handleRememberMe} className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                        <span className="ml-3 text-sm text-gray-500 dark:text-gray-300">Remember me</span>
                      </label>
                    </div>
                    <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                      Forgot password?
                    </a>
                  </div>

                  <button type="submit" className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-primary-hover ${isEmailLoading ? "bg-gray-400" : "bg-primary"} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}>
                    {isEmailLoading ? "Signing in..." : "Sign in to your account "}
                  </button>
                </form>
                {/* End Form */}
                {/* <PasswordForm loading={isEmailLoading} onSubmit={handleLoginWithEmailAndPassword} error={emailPasswordError || googleError || emailLinkError} /> */}
              </div>
            </div>
            <div className="mr-auto place-self-center lg:col-span-6">
              <img className="hidden mx-auto lg:flex" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/authentication/illustration.svg" alt="illustration" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
