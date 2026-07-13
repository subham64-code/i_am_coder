"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/lib/hooks";

/** Client guard: redirects unauthenticated users to /login. */
export function ProtectedRoute({
  children,
  role,
}: {
  children: React.ReactNode;
  role?: string;
}) {
  const router = useRouter();
  const { isAuthenticated, user } = useAppSelector((s) => s.auth);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!isAuthenticated || !localStorage.getItem("iac_token")) {
      router.replace("/login");
    } else if (role && user?.role !== role) {
      router.replace(user?.role === "ADMIN" || user?.role === "FACULTY" ? "/admin" : "/student");
    }
  }, [isAuthenticated, user, role, router]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen grid place-items-center text-white/60">Checking session…</div>
    );
  }
  return <>{children}</>;
}
