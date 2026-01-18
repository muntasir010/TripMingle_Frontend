"use client";
import AdminSidebar from "../../../../components/dashboard/AdminSidebar";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Loader } from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/profile/me`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.success || data.data.role !== "ADMIN") {
          router.replace("/");
        } else {
          setLoading(false);
        }
      })
      .catch(() => router.replace("/login"));
  }, [router]);

  if (loading) return <p className="flex justify-center items-center h-screen"><Loader size={60} className="animate-spin text-blue-500" /></p>;

  return (
    <div className={`flex-1 flex flex-col transition-all duration-300 ${isCollapsed ? "pl-16 md:pl-20" : "pl-64"}`}>
      <AdminSidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <main className=" p-6">{children}</main>
    </div>
  );
}
