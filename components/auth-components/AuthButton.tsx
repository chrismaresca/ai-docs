import React from "react";

interface AuthButtonProps {
  loading?: boolean;
  disabled?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  icon?: React.ReactNode;
  label: string;
}

const AuthButton: React.FC<AuthButtonProps> = ({ loading, disabled, onClick, icon, label }) => {
  return (
    <button onClick={onClick} className="w-full text-nowrap inline-flex items-center justify-center py-2.5 px-5 text-sm font-medium text-secondary-foreground bg-secondary hover:bg-secondary-hover hover:text-secondary-hover-foreground rounded-lg border border-card-border focus:z-10 focus:ring-4 focus:ring-muted disabled:opacity-50 disabled:cursor-not-allowed" disabled={disabled || loading}>
      <>
        {icon && <span className="">{icon}</span>}
        {label}
      </>
    </button>
  );
};

export default AuthButton;
