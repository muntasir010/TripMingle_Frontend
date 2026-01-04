"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  { name: "Dashboard", href: "/admin" },
  { name: "Host Requests", href: "/admin/host-requests" },
  { name: "Users", href: "/admin/users" },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen border-r p-5">
      <h2 className="text-xl font-bold mb-6">
        Admin Panel
      </h2>

      <nav className="space-y-3">
        {menu.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`block px-3 py-2 rounded ${
              pathname === item.href
                ? "bg-black text-white"
                : "hover:bg-gray-100"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}