import * as React from "react";
import LoginForm from "@/components/auth/login/LoginForm";
import DontHaveAccount from "@/components/auth-components/DontHaveAccount";

const LoginPage: React.FC = () => {
  return (
    <div>
      {/* <a href="#" className="inline-flex items-center mb-4 text-xl font-semibold text-gray-900 dark:text-white">
        <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
        Flowbite
      </a> */}
      <h1 className="my-2 text-2xl font-bold leading-tight tracking-tight text-foreground">Welcome back</h1>
      <DontHaveAccount />
      <LoginForm />
    </div>
  );
};

export default LoginPage;
