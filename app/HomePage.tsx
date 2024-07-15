"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { logout } from "./api";

interface HomePageProps {
  email?: string;
}

export default function HomePage({ email }: HomePageProps) {
  const router = useRouter();
  const [counter, setCounter] = useState<number | null>(null);

  async function handleLogout() {
    await logout();
    await fetch("/api/logout");
    router.push("/auth/login");
  }

  async function fetchCounter() {
    try {
      const response = await fetch("/api/token-test");
      if (response.ok) {
        const data = await response.json();
        setCounter(data.count);
      } else {
        console.error("Failed to fetch counter", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching counter", error);
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-xl mb-4">Super secure home page</h1>
      <p className="mb-8">
        Only <strong>{email}</strong> holds the magic key to this kingdom!
      </p>
      {counter !== null && (
        <p className="mb-8">Your current counter value is: {counter}</p>
      )}
      <div className="flex space-x-4">
        <button
          onClick={handleLogout}
          className="text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-primary-800"
        >
          Logout
        </button>
        <button
          onClick={fetchCounter}
          className="text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-primary-800"
        >
          Fetch Counter
        </button>
      </div>
    </main>
  );
}
