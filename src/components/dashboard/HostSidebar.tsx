"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import RoleSwitcher from "./RoleSwitcher";

type Props = {
  user: {
    role: string;
    hostStatus?: "PENDING" | "APPROVED" | "REJECTED" | null;
  };
};

export default function HostSidebar({ user }: Props) {
  const pathname = usePathname();

  const navItems = [
    { label: "Dashboard", href: "/dashboard/host" },
    { label: "My Trips", href: "/dashboard/host/trips" },
    { label: "Requests", href: "/dashboard/host/requests" },
    { label: "Earnings", href: "/dashboard/host/earnings" },
    { label: "Reviews", href: "/dashboard/host/reviews" },
  ];

  return (
    <aside className="w-64 min-h-screen border-r bg-white p-5">
      <h2 className="text-xl font-bold mb-6 text-blue-600">
        Host Panel
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

      {/* 🔁 ROLE SWITCHER */}
      {user.role === "HOST" && user.hostStatus === "APPROVED" && (
        <div className="mt-8 border-t pt-4">
          <RoleSwitcher />
        </div>
      )}
    </aside>
  );
}

