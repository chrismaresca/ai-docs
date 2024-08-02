"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { logout } from "@/app/api";

interface AuthButtonsProps {
  loggedIn: boolean;
}

const AuthButtons: React.FC<AuthButtonsProps> = ({ loggedIn }) => {
  const router = useRouter();

  async function handleLogout() {
    await logout();
    await fetch("/api/logout");
    router.push("/auth/login");
  }

  return (
    <div className="hidden sm:inline-flex items-center md:gap-x-1.5">
      {loggedIn ? (
        <button type="button" className={`py-1 sm:py-1.5 px-3 inline-flex items-center gap-x-2 text-xs md:text-base rounded-3xl font-medium border bg-primary hover:bg-secondary hover:border-primary text-white hover:text-primary focus:ring-4 focus:ring-muted disabled:opacity-50 disabled:cursor-not-allowed`} onClick={handleLogout}>
          Log Out
        </button>
      ) : (
        <>
          <button type="button" className={`py-1 sm:py-1.5 px-2 lg:px-3 inline-flex items-center text-xs lg:text-base font-medium focus:outline-none bg-transparent text-black hover:text-gray-600 transition-colors duration-200 ease-in-out `}>
            <Link href="/auth/login">Sign In</Link>
          </button>
          <button type="button" className={`py-1 sm:py-1.5 px-2 lg:px-3 inline-flex items-center gap-x-2 text-xs lg:text-base rounded-3xl font-medium border bg-primary hover:bg-secondary hover:border-primary text-white hover:text-primary focus:ring-4  focus:ring-muted disabled:opacity-50 disabled:cursor-not-allowed`}>
            <Link href="/auth/register">Get Started</Link>
          </button>
        </>
      )}
    </div>
  );
};

export default AuthButtons;
