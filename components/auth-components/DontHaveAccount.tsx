import React from "react";

const DontHaveAccount: React.FC = () => {
  return (
    <p className="text-sm font-light text-gray-500 dark:text-gray-300">
      Don’t have an account?{" "}
      <a href="/auth/register" className="font-medium text-primary hover:underline">
        Sign up
      </a>
      .
    </p>
  );
};

export default DontHaveAccount;
