"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

type Props = {
  role: "ADMIN" | "HOST" | "TOURIST";
  userRole: string | undefined;
  children: React.ReactNode;
};

export default function RoleGuard({ role, userRole, children }: Props) {
  const router = useRouter();
  const isMounted = typeof window !== "undefined";

  useEffect(() => {
    if (userRole && userRole !== role) {
      router.replace("/unauthorized");
    }
  }, [userRole, role, router]);

  if (!isMounted) return null;

  if (!userRole || userRole !== role) {
    return <p className="p-10 text-center">Redirecting or Checking Permission...</p>;
  }

  return <>{children}</>;
}