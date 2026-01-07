"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * TEMP:
 * In a real app, fetch the user role from context or API
 */
const userRole: "ADMIN" | "HOST" | "TOURIST" = "ADMIN";

const menuByRole = {
  ADMIN: [
    { name: "Dashboard", href: "/dashboard/admin/stats" },
    { name: "Admin Panel", href: "/dashboard/admin" },
    { name: "Approve Hosts", href: "/dashboard/admin/host-requests" },
    { name: "Users", href: "/dashboard/admin/users" },
  ],
  HOST: [
    { name: "Dashboard", href: "/dashboard" },
    { name: "My Trips", href: "/dashboard/host/trips" },
    { name: "Requests", href: "/dashboard/host/requests" },
  ],
  TOURIST: [
    { name: "Dashboard", href: "/dashboard" },
    { name: "My Bookings", href: "/dashboard/tourist/bookings" },
    { name: "Apply as Host", href: "/dashboard/tourist/apply-host" },
  ],
};

export default function Sidebar() {
  const pathname = usePathname();
  const menu = menuByRole[userRole];
  

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
            className={`block px-3 py-2 rounded transition ${
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
