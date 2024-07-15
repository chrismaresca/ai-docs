import React from 'react';

interface SubmitButtonProps {
  isLoading: boolean;
  label?: string;
  icon?: React.ReactNode;
  loadingText?: string; // Add this line
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ isLoading, label, icon, loadingText }) => {
  return (
    <button
      type="submit"
      className={`w-full inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-lg border focus:outline-none focus:ring-2 ring-border
        ${isLoading ? "bg-primary/80 cursor-not-allowed" : "bg-primary hover:bg-primary/90 hover:border-gray-600 hover:text-white dark:hover:bg-primary-hover dark:hover:text-primary-hover-foreground dark:hover:border-gray-600"} 
        text-primary-foreground
      `}
    >
      {isLoading && (
        <span className="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>
      )}
      {icon && <span className="mr-2">{icon}</span>}
      {label && <span>{isLoading ? loadingText || "Creating account..." : label}</span>}
    </button>
  );
};

export default SubmitButton;
