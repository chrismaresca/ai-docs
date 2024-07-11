import * as React from "react";
import { FirebaseError } from "@firebase/util";

export interface PasswordFormValue {
  email: string;
  password: string;
}

interface PasswordFormProps extends Omit<JSX.IntrinsicElements["form"], "onSubmit"> {
  loading: boolean;
  onSubmit: (value: PasswordFormValue) => void;
  disabled?: boolean;
  error?: FirebaseError;
}

export function PasswordForm({ children, loading, disabled, error, onSubmit }: PasswordFormProps) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isHidden, setIsHidden] = React.useState(true);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    onSubmit({ email, password });
  }

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="mt-4 space-y-6 sm:mt-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label className="block mb-2 text-sm font-medium text-card-foreground">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="p-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="chris@workmait.ai" required disabled={disabled} />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input type={isHidden ? "password" : "text"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required minLength={8} disabled={disabled} />
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-full h-0.5s bg-gray-200 dark:bg-gray-700"></div>
          <div className="px-5 text-center text-gray-500 dark:text-gray-400">or</div>
          <div className="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
        </div>

        {error && <p className="text-red-500 text-sm">{error.message}</p>}

        <div className="space-y-3 mt-6">
          <a href="#" className="w-full inline-flex items-center justify-center py-2.5 px-5 text-sm font-medium text-foreground bg-background rounded-lg border border-border hover:bg-muted hover:text-foreground focus:z-10 focus:ring-4 focus:ring-muted mr-2 mb-2">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_13183_10121)">
                <path d="M20.3081 10.2303C20.3081 9.55056 20.253 8.86711 20.1354 8.19836H10.7031V12.0492H16.1046C15.8804 13.2911 15.1602 14.3898 14.1057 15.0879V17.5866H17.3282C19.2205 15.8449 20.3081 13.2728 20.3081 10.2303Z" fill="#3F83F8" />
                <path d="M10.7019 20.0006C13.3989 20.0006 15.6734 19.1151 17.3306 17.5865L14.1081 15.0879C13.2115 15.6979 12.0541 16.0433 10.7056 16.0433C8.09669 16.0433 5.88468 14.2832 5.091 11.9169H1.76562V14.4927C3.46322 17.8695 6.92087 20.0006 10.7019 20.0006V20.0006Z" fill="#34A853" />
                <path d="M5.08857 11.9169C4.66969 10.6749 4.66969 9.33008 5.08857 8.08811V5.51233H1.76688C0.348541 8.33798 0.348541 11.667 1.76688 14.4927L5.08857 11.9169V11.9169Z" fill="#FBBC04" />
                <path d="M10.7019 3.95805C12.1276 3.936 13.5055 4.47247 14.538 5.45722L17.393 2.60218C15.5852 0.904587 13.1858 -0.0287217 10.7019 0.000673888C6.92087 0.000673888 3.46322 2.13185 1.76562 5.51234L5.08732 8.08813C5.87733 5.71811 8.09302 3.95805 10.7019 3.95805V3.95805Z" fill="#EA4335" />
              </g>
              <defs>
                <clipPath id="clip0_13183_10121">
                  <rect width="20" height="20" fill="white" transform="translate(0.5)" />
                </clipPath>
              </defs>
            </svg>
            Sign in with Google
          </a>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
            </div>
            <div className="ml-3 text-sm">
              <label className="text-gray-500 dark:text-gray-300">Remember me</label>
            </div>
          </div>
          <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
            Forgot password?
          </a>
        </div>

        <button type="submit" className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-700"} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}>
          {/* {loading ? "Signing in..." : "Sign in to your account "} */} sign
        </button>
      </form>
    </div>
  );
}
