"use client";
import * as React from "react";
import { useLoadingCallback } from "react-loading-hook";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { getFirebaseAuth } from "@/auth/firebase";
import { loginWithCredential } from "@/app/api";
import { useRedirectAfterLogin } from "@/shared/useRedirectAfterLogin";
import { getGoogleProvider, loginWithProvider } from "@/app/auth/login/firebase";
import { useFormik } from "formik";
import * as Yup from "yup";

import AuthButton from "@/components/auth-components/AuthButton";
import GoogleIcon from "@/components/icons/GoogleIcon";
import AppleIcon from "@/components/icons/AppleIcon";
import SubmitButton from "@/components/auth-components/SubmitButton";
import HaveAccount from "@/components/auth-components/HaveAccount";

import { useAuthContext } from "@/context/AuthContext";

const RegisterForm: React.FC = () => {
  const redirectAfterLogin = useRedirectAfterLogin();
  const { setHasLogged } = useAuthContext();

  const [handleRegisterWithGoogle, isGoogleLoading, googleError] = useLoadingCallback(async () => {
    setHasLogged(false);
    const auth = getFirebaseAuth();
    const credential = await loginWithProvider(auth, getGoogleProvider(auth));
    // Split the display name and get the first half
    const displayName = credential.user.displayName || "";
    const firstName = displayName.split(" ")[0];

    const userInfo = { id: credential.user.uid, name: firstName, email: credential.user.email };

    await loginWithCredential(credential);

    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userInfo }),
    });

    if (response.ok) {
      setHasLogged(true);
    } else {
      const errorData = await response.json();
      console.error("Error registering in Firestore:", errorData.error);
    }
  });

  const [registerWithEmailAndPassword, isRegisterLoading, error] = useLoadingCallback(async (values) => {
    setHasLogged(false);
    const auth = getFirebaseAuth();
    const credential = await createUserWithEmailAndPassword(auth, values.email, values.password);
    await loginWithCredential(credential);

    const userInfo = { id: credential.user.uid, name: values.firstName, email: credential.user.email };

    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userInfo }),
    });

    if (response.ok) {
      setHasLogged(true);
    } else {
      const errorData = await response.json();
      console.error("Error registering in Firestore:", errorData.error);
    }

    // await sendEmailVerification(credential.user);
    redirectAfterLogin();

    setHasLogged(true);
  });

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    firstName: Yup.string().required("Required"),
    password: Yup.string().min(8, "Password must be at least 8 characters").required("Required"),
    verifyPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Required"),
    agreeToTerms: Yup.bool().oneOf([true], "You must accept the terms and conditions"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      password: "",
      verifyPassword: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      await registerWithEmailAndPassword(values);
    },
  });

  return (
    <form className="mt-4 space-y-6 sm:mt-6" onSubmit={formik.handleSubmit} noValidate>
      <div className="flex flex-col items-center justify-center space-y-3 sm:flex-row sm:space-x-2 sm:space-y-0">
        <AuthButton loading={isGoogleLoading} onClick={handleRegisterWithGoogle} icon={<GoogleIcon />} label="Sign up with Google" />
        <AuthButton loading={isGoogleLoading} onClick={handleRegisterWithGoogle} icon={<AppleIcon />} label="Sign up with Apple" />
      </div>
      <div className="flex items-center">
        <div className="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
        <div className="px-5 text-center text-gray-500 dark:text-gray-400">or</div>
        <div className="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="relative">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-card-foreground">
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className={`bg-gray-50 border ${formik.touched.email && formik.errors.email ? "border-red-600" : "border-gray-300"} text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-${formik.touched.email && formik.errors.email ? "red-500" : "gray-600"} dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            placeholder="chris@workmait.ai"
            required
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label htmlFor="email" className="absolute text-sm text-gray-500 dark:text-gray-300 top-2 left-2 px-2"></label>
          {formik.touched.email && formik.errors.email ? (
            <p id="outlined_error_email_help" className="mt-2 text-xs text-red-600 dark:text-red-400">
              {formik.errors.email}
            </p>
          ) : null}
        </div>

        <div className="relative">
          <label htmlFor="first-name" className="block mb-2 text-sm font-medium text-card-foreground">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            className={`bg-gray-50 border ${formik.touched.firstName && formik.errors.firstName ? "border-red-600" : "border-gray-300"} text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-${formik.touched.firstName && formik.errors.firstName ? "red-500" : "gray-600"} dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            placeholder="e.g. Chris"
            required
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label htmlFor="firstName" className="absolute text-sm text-gray-500 dark:text-gray-300 top-2 left-2 px-2"></label>
          {formik.touched.firstName && formik.errors.firstName ? (
            <p id="outlined_error_firstName_help" className="mt-2 text-xs text-red-600 dark:text-red-400">
              {formik.errors.firstName}
            </p>
          ) : null}
        </div>

        <div className="relative">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-card-foreground">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className={`bg-gray-50 border ${formik.touched.password && formik.errors.password ? "border-red-600" : "border-gray-300"} text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-${formik.touched.password && formik.errors.password ? "red-500" : "gray-600"} dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            placeholder="••••••••"
            required
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label htmlFor="password" className="absolute text-sm text-gray-500 dark:text-gray-300 top-2 left-2 px-2"></label>
          {formik.touched.password && formik.errors.password ? (
            <p id="outlined_error_password_help" className="mt-2 text-xs text-red-600 dark:text-red-400">
              {formik.errors.password}
            </p>
          ) : null}
        </div>

        <div className="relative">
          <label htmlFor="verify-password" className="block mb-2 text-sm font-medium text-card-foreground">
            Verify Password
          </label>
          <input
            type="password"
            name="verifyPassword"
            id="verifyPassword"
            className={`bg-gray-50 border ${formik.touched.verifyPassword && formik.errors.verifyPassword ? "border-red-600" : "border-gray-300"} text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-${formik.touched.verifyPassword && formik.errors.verifyPassword ? "red-500" : "gray-600"} dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            placeholder="••••••••"
            required
            value={formik.values.verifyPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label htmlFor="verifyPassword" className="absolute text-sm text-gray-500 dark:text-gray-300 top-2 left-2 px-2"></label>
          {formik.touched.verifyPassword && formik.errors.verifyPassword ? (
            <p id="outlined_error_verifyPassword_help" className="mt-2 text-xs text-red-600 dark:text-red-400">
              {formik.errors.verifyPassword}
            </p>
          ) : null}
        </div>
      </div>

      <SubmitButton isLoading={isRegisterLoading} label="Create an Account" />
      <HaveAccount />

      {/* Uncomment this section to show error messages */}
      {/* {error && <p className="text-red-600">{error.message}</p>}
      {googleError && <p className="text-red-600">{googleError.message}</p>} */}
    </form>
  );
};

export default RegisterForm;
