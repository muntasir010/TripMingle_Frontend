"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

type Props = {
  role: "ADMIN" | "HOST" | "TOURIST";
  userRole: string | undefined;
  children: React.ReactNode;
};

export default function RoleGuard({
  role,
  userRole,
  children,
}: Props) {
  const router = useRouter();

  useEffect(() => {
    if (!userRole) return;

    if (userRole !== role) {
      router.replace("/unauthorized");
    }
  }, [userRole, role, router]);

  if (!userRole || userRole !== role) {
    return null;
  }

  return <>{children}</>;
}
