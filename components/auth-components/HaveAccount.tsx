import React from "react";

const HaveAccount: React.FC = () => {
  return (
    <p className="text-sm font-light text-gray-500 dark:text-gray-300">
      Already have an account?{" "}
      <a href="/auth/login" className="font-medium text-primary hover:underline">
        Sign in
      </a>
      .
    </p>
  );
};

export default HaveAccount;
