"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarItems, AdminMode } from "@/config/sidebar.config";

export default function AdminSidebar({ mode }: { mode: AdminMode }) {
  const pathname = usePathname();

  const visibleItems = sidebarItems.filter(item =>
    item.modes.includes(mode)
  );

  return (
    <aside className="w-64 border-r bg-white p-4 fixed h-screen">
      <h2 className="text-lg font-bold mb-4">Admin Panel</h2>

      {visibleItems.map(item => (
        <Link
          key={item.href}
          href={item.href}
          className={`block px-3 py-2 rounded-md text-sm ${
            pathname === item.href
              ? "bg-blue-100 text-blue-600"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          {item.label}
        </Link>
      ))}
    </aside>
  );
}
