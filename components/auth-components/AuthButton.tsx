import React from "react";

interface AuthButtonProps {
  loading?: boolean;
  disabled?: boolean;
  onClick: () => void;
  icon?: React.ReactNode;
  label: string;
}

const AuthButton: React.FC<AuthButtonProps> = ({ loading, disabled, onClick, icon, label }) => {
  return (
    <button onClick={onClick} className="w-full inline-flex items-center justify-center py-2.5 px-5 text-sm font-medium text-foreground bg-background rounded-lg border border-border hover:bg-muted hover:text-foreground focus:z-10 focus:ring-4 focus:ring-muted mr-2 mb-2 disabled:opacity-50 disabled:cursor-not-allowed" disabled={disabled || loading}>
      <>
        {icon && <span className="mr-2">{icon}</span>}
        {label}
      </>
    </button>
  );
};

export default AuthButton;
