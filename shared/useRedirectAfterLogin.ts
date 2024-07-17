"use client"
import { useRouter } from "next/navigation";
import { useRedirectParam } from "@/shared/useRedirectParam";

export function useRedirectAfterLogin() {
  const router = useRouter();
  const redirect = useRedirectParam();

  return function () {
    router.push(redirect ?? "/projects");
    router.refresh();
  };
}

export function useRedirectAfterRegistrationRequest() {
  const router = useRouter();
  const redirect = useRedirectParam();

  return function () {
    router.push(redirect ?? "/auth/login");
    router.refresh();
  };
}
