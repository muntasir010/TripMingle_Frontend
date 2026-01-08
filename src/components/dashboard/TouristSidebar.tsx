"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Map,
  Heart,
  User,
  ExpandIcon,
  ListCollapseIcon,
} from "lucide-react";
import RoleSwitcherToHost from "./RoleSwitchToHost";

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
  user: {
    role: string;
    hostStatus?: "PENDING" | "APPROVED" | "REJECTED" | null;
  };
}

export default function TouristSidebar({
  isCollapsed,
  setIsCollapsed,
  user,
}: SidebarProps) {
  const pathname = usePathname();

  const menuItems = [
    { name: "Dashboard", href: "/dashboard/tourist", icon: LayoutDashboard },
    { name: "My Trips", href: "/dashboard/tourist/trips", icon: Map },
    { name: "Wishlist", href: "/dashboard/tourist/wishlist", icon: Heart },
    { name: "Profile", href: "/dashboard/tourist/profile", icon: User },
  ];

  return (
    <aside
      className={`fixed left-0 top-0 h-screen bg-white border-r border-gray-200 transition-all duration-300 z-40 ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Logo Section */}
      <div className="h-16 flex items-center justify-between px-6 border-b border-gray-100">
        {!isCollapsed && (
          <span className="text-xl font-bold text-blue-600">TripMingle</span>
        )}
        {isCollapsed && (
          <span className="text-xl font-bold text-blue-600 mx-auto">T</span>
        )}
      </div>

      <nav className="p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`relative flex items-center gap-4 p-3 rounded-xl transition-all group ${
                isActive
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                  : "text-gray-500 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              <Icon size={22} className="shrink-0" />

              {!isCollapsed && (
                <span className="font-semibold text-sm tracking-wide">
                  {item.name}
                </span>
              )}

              {/* TOOLTIP */}
              {isCollapsed && (
                <div
                  className="absolute left-full ml-4 px-3 py-1.5 bg-gray-800 text-white text-xs rounded-md 
                  opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                  transition-all duration-200 whitespace-nowrap z-50 pointer-events-none shadow-xl"
                >
                  {item.name}
                  {/* Tooltip Arrow */}
                  <div className="absolute top-1/2 -left-1 -translate-y-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
                </div>
              )}
            </Link>
          );
        })}
      </nav>

       {/* 🔁 ROLE SWITCH (ONLY IF HOST APPROVED) */}
      {user.role === "TOURIST" && user.hostStatus === "APPROVED" && (
        <div
          className={`mt-auto border-t p-4 ${
            isCollapsed ? "hidden" : "block"
          }`}
        >
          <RoleSwitcherToHost />
        </div>
      )}
      {/* Collapse Toggle */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute top-16 right-[-14px] bg-white border border-gray-200 rounded-full p-1 shadow-md text-gray-500 hover:text-blue-600 hidden md:block"
      >
        {isCollapsed ? (
          <ExpandIcon size={18} />
        ) : (
          <ListCollapseIcon size={18} />
        )}
      </button>

      {/* Collapse Toggle at Bottom */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute top-16 right-[-14px] bg-white border border-gray-200 rounded-full p-1 shadow-md text-gray-500 hover:text-blue-600 hidden md:block"
      >
        {isCollapsed ? (
          <ExpandIcon size={18} />
        ) : (
          <ListCollapseIcon size={18} />
        )}
      </button>
    </aside>
  );
}
