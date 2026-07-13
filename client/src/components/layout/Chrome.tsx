"use client";

import { usePathname } from "next/navigation";
import { Header } from "./Header";
import { Footer } from "./Footer";

/** Renders global Header/Footer everywhere except the dashboards (they have their own shell). */
export function Chrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith("/student") || pathname?.startsWith("/admin");
  if (isDashboard) return <>{children}</>;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
