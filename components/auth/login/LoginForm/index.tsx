import * as React from "react";
import { useLoadingCallback } from "react-loading-hook";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getFirebaseAuth } from "@/auth/firebase";
import { loginWithCredential } from "@/app/api";
import { useRedirectAfterLogin } from "@/shared/useRedirectAfterLogin";
import { getGoogleProvider, loginWithProvider } from "@/app/auth/login/firebase";
import AuthButton from "@/components/auth-components/AuthButton";
import SubmitButton from "@/components/auth-components/SubmitButton";
import GoogleIcon from "@/components/icons/GoogleIcon";
import AppleIcon from "@/components/icons/AppleIcon";

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";


import { useFormik } from "formik";
import * as Yup from "yup";

import { useAuthContext } from "@/context/AuthContext";

const LoginForm: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [rememberMe, setRememberMe] = React.useState(false);
  const [isHidden, setIsHidden] = React.useState(true);
  const { setHasLogged } = useAuthContext();

  const redirectAfterLogin = useRedirectAfterLogin();

  const handleRememberMe = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setRememberMe(event.target.checked);
  };

  const [handleLoginWithEmailAndPassword, isEmailLoading, emailPasswordError] = useLoadingCallback(async (email: string, password: string) => {
    setHasLogged(false);
    const auth = getFirebaseAuth();
    console.log(email, password);
    await loginWithCredential(await signInWithEmailAndPassword(auth, email, password));
    setHasLogged(true);
    redirectAfterLogin();
  });

  const [handleLoginWithGoogle, isGoogleLoading, googleError] = useLoadingCallback(async () => {
    setHasLogged(false);

    const auth = getFirebaseAuth();
    await loginWithCredential(await loginWithProvider(auth, getGoogleProvider(auth)));

    setHasLogged(true);
    redirectAfterLogin();
  });

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      await handleLoginWithEmailAndPassword(values.email, values.password);
    },
  });

  return (
    <div className="mt-4 space-y-6 sm:mt-6">
      <div className="flex flex-col items-center space-y-3 justify-center sm:flex-row sm:space-x-2 sm:space-y-0">
        <AuthButton loading={isGoogleLoading} onClick={handleLoginWithGoogle} icon={<GoogleIcon />} label="Log in with Google" />
        <AuthButton loading={isGoogleLoading} onClick={handleLoginWithGoogle} icon={<AppleIcon />} label="Log in with Apple" />
      </div>

      <div className="flex items-center">
        <div className="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
        <div className="px-5 text-center text-gray-500 dark:text-gray-400">or</div>
        <div className="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
      </div>
      <form className="space-y-6" onSubmit={formik.handleSubmit}>
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
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center h-5">
            <label className="flex items-center cursor-pointer">
              <input type="checkbox" checked={rememberMe} onChange={handleRememberMe} className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
              <span className="ml-3 text-sm text-gray-500 dark:text-gray-300">Remember me</span>
            </label>
          </div>
          {/* <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
            Forgot password?
          </a> */}
          <div className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500 !cursor-pointer">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <p>Forgot password?</p>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="!cursor-pointer"> Please email chris@workmait.ai to reset your password.</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        <SubmitButton isLoading={isEmailLoading} label="Login To Your Account" loadingText="Logging you in..." />

        {emailPasswordError && <p className="text-red-600">{emailPasswordError.message}</p>}
        {googleError && <p className="text-red-600">{googleError.message}</p>}
      </form>
    </div>
  );
};

export default LoginForm;
