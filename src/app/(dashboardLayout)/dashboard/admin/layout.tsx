"use client";
// import AdminNavbar from "@/components/dashboard/AdminNavbar";
import AdminSidebar from "../../../../components/dashboard/AdminSidebar";
import { useState } from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {

const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div className="flex min-h-screen">
      <div className="w-64 hidden md:block">
        <AdminSidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      </div>
      <div className="flex-1 flex flex-col">
        <header className="h-16 bg-white border-b sticky top-0 z-10 flex items-center px-8">
          {/* <AdminNavbar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} /> */}
        </header>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
