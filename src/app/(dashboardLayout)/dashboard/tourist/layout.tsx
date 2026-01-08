/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import TouristSidebar from "@/components/dashboard/TouristSidebar";

export default function TouristLayout({ children }: any) {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/profile/me", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.success || data.data.role === "ADMIN") {
          router.replace("/dashboard");
        } else {
          setUser(data.data);
          setLoading(false);
        }
      });
  }, [router]);

  if (loading) return <p className="p-6">Loading...</p>;

  return (
    <div className={`flex-1 flex flex-col transition-all duration-300 ${isCollapsed ? "pl-16 md:pl-20" : "pl-64"}`}>
      <TouristSidebar user={user} isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <main className="p-6">{children}</main>
    </div>
  );
}
