
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import HostSidebar from "@/components/dashboard/HostSidebar";

export default function HostLayout({ children }: any) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    fetch("${process.env.NEXT_PUBLIC_API_URL}/profile/me", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.success || data.data.role === "ADMIN") {
          router.replace("/dashboard");
        } else {
          setUserData(data.data);
          setLoading(false);
        }
      })
      .catch(() => router.replace("/login"));
  }, [router]);

  if (loading) return <p className="p-10 text-center font-bold">Loading Host Panel...</p>;

  return (
    <div className="flex min-h-screen bg-gray-50">
      <HostSidebar 
        user={{ role: "HOST", hostStatus: "APPROVED" }} 
        isCollapsed={isCollapsed} 
        setIsCollapsed={setIsCollapsed} 
      />

      <div className={`flex-1 flex flex-col transition-all duration-300 ${isCollapsed ? "ml-20" : "ml-64"}`}>
        
        {/* <AdminNavbar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} /> */}

        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}