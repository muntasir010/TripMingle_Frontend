"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TouristSidebar() {
  const pathname = usePathname();

  const navItems = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "My Trips", href: "/dashboard/trips" },
    { label: "Travel Plans", href: "/dashboard/travel-plans" },
    { label: "Requests", href: "/dashboard/requests" },
    { label: "Reviews", href: "/dashboard/reviews" },
    { label: "Profile", href: "/dashboard/profile" },
  ];

  return (
    <aside className="w-64 min-h-screen border-r bg-white p-5">
      <h2 className="text-xl font-bold mb-6 text-blue-600">
        Tourist Panel
      </h2>

      <nav className="space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`block rounded-lg px-4 py-2 text-sm font-medium ${
              pathname === item.href
                ? "bg-blue-600 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
