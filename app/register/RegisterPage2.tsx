"use client";

import * as React from "react";
import { useLoadingCallback } from "react-loading-hook";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import Link from "next/link";
import { getFirebaseAuth } from "@/auth/firebase";
import { loginWithCredential } from "@/app/api";
import { appendRedirectParam } from "@/shared/redirect";
import { useRedirectAfterLogin } from "@/shared/useRedirectAfterLogin";
import { useRedirectParam } from "@/shared/useRedirectParam";

import { Button } from "@/ui/Button/Button";
import AuthButton from "@/components/auth-components/AuthButton";
import GoogleIcon from "@/components/icons/GoogleIcon";

export function RegisterPage() {
  const [email, setEmail] = React.useState("");
  const [fullName, setFullName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [verifyPassword, setVerifyPassword] = React.useState("");
  const [agreeToTerms, setAgreeToTerms] = React.useState(false);
  const [subscribeToNewsletter, setSubscribeToNewsletter] = React.useState(false);
  const [hasLogged, setHasLogged] = React.useState(false);
  const redirect = useRedirectParam();
  const redirectAfterLogin = useRedirectAfterLogin();

  const [handleLoginWithGoogle, isGoogleLoading, googleError] = useLoadingCallback(async () => {
    setHasLogged(false);

    const auth = getFirebaseAuth();
    // await handleLogin(await loginWithProvider(auth, getGoogleProvider(auth)));

    setHasLogged(true);
  });

  const [registerWithEmailAndPassword, isRegisterLoading, error] = useLoadingCallback(async () => {
    setHasLogged(false);
    if (password !== verifyPassword) {
      // Handle password mismatch error
      return;
    }
    const auth = getFirebaseAuth();
    const credential = await createUserWithEmailAndPassword(auth, email, password);

    await loginWithCredential(credential);
    await sendEmailVerification(credential.user);
    redirectAfterLogin();

    setHasLogged(true);
  });

  return (
    <div>
      {hasLogged && (
        <div>
          <span>
            Redirecting to <strong>{redirect || "/"}</strong>
          </span>
        </div>
      )}
      {!hasLogged && (
        <section className="bg-background lg:fixed lg:inset-0 flex items-center justify-center">
          <div className="grid max-w-screen-xl px-4 py-8 lg:py-0 mx-auto lg:gap-20  lg:grid-cols-12">
            <div className="w-full p-6 mx-auto bg-card rounded-lg shadow sm:max-w-xl lg:col-span-6 sm:p-8">
              <a href="#" className="inline-flex items-center mb-4 text-xl font-semibold text-foreground">
                <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                Flowbite
              </a>
              <h1 className="mb-2 text-2xl font-bold leading-tight tracking-tight text-foreground">Create your Account</h1>
              <p className="text-sm font-light text-gray-500 dark:text-gray-300">
                Start your website in seconds. Already have an account?{" "}
                <Link href="#" className="font-medium text-primary hover:underline">
                  Login here
                </Link>
                .
              </p>
              <form
                className="mt-4 space-y-6 sm:mt-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  registerWithEmailAndPassword();
                }}
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-card-foreground">
                      Your email
                    </label>
                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div>
                    <label htmlFor="full-name" className="block mb-2 text-sm font-medium text-card-foreground">
                      Full Name
                    </label>
                    <input type="text" name="full-name" id="full-name" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="e.g. Bonnie Green" required value={fullName} onChange={(e) => setFullName(e.target.value)} />
                  </div>
                  <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-card-foreground">
                      Password
                    </label>
                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required value={password} onChange={(e) => setPassword(e.target.value)} />
                  </div>
                  <div>
                    <label htmlFor="verify-password" className="block mb-2 text-sm font-medium text-card-foreground">
                      Verify Password
                    </label>
                    <input type="password" name="verify-password" id="verify-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required value={verifyPassword} onChange={(e) => setVerifyPassword(e.target.value)} />
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
                  <div className="px-5 text-center text-gray-500 dark:text-gray-400">or</div>
                  <div className="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
                </div>
                <div className="space-y-3">
                  <AuthButton loading={isGoogleLoading} onClick={handleLoginWithGoogle} icon={<GoogleIcon />} label="Sign up with Google" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required checked={agreeToTerms} onChange={() => setAgreeToTerms(!agreeToTerms)} />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">
                        By signing up, you are creating a Flowbite account, and you agree to Flowbite’s{" "}
                        <a className="font-medium text-primary hover:underline" href="#">
                          Terms of Use
                        </a>{" "}
                        and{" "}
                        <a className="font-medium text-primary hover:underline" href="#">
                          Privacy Policy
                        </a>
                        .
                      </label>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="newsletter" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" checked={subscribeToNewsletter} onChange={() => setSubscribeToNewsletter(!subscribeToNewsletter)} />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="newsletter" className="font-light text-gray-500 dark:text-gray-300">
                        Email me about product updates and resources.
                      </label>
                    </div>
                  </div>
                </div>
                <button type="submit" className={`w-full ${isRegisterLoading ? "bg-gray-400" : "bg-primary"} hover:bg-primary-hover focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800`}>
                  {isRegisterLoading ? "Creating account..." : "Create an account"}
                </button>
                {error && <p className="text-red-600">{error.message}</p>}
              </form>
            </div>
            <div className="mr-auto place-self-center lg:col-span-6">
              <img className="hidden mx-auto lg:flex" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/authentication/illustration.svg" alt="illustration" />
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
