import * as React from "react";
import RegisterForm from "@/components/auth/register/RegisterForm";

const RegisterPage: React.FC = () => {
  return (
    <div>
      <h1 className="mb-2 text-2xl font-bold leading-tight tracking-tight text-foreground">Create your Account</h1>
      <p className="text-md text-gray-600 dark:text-gray-300">Supercharge your writing in a few clicks.</p>

      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
