"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Admin", href: "/dashboard/admin" },
  { name: "Host", href: "/dashboard/host" },
  { name: "Tourist", href: "/dashboard/tourist" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white border-r">
      <div className="p-4 text-xl font-bold border-b">
        TripMingle
      </div>

      <nav className="p-4 space-y-2">
        {menu.map(item => (
          <Link
            key={item.href}
            href={item.href}
            className={`block px-3 py-2 rounded ${
              pathname === item.href
                ? "bg-blue-600 text-white"
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
