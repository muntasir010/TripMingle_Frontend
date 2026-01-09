"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Map, 
  UserPlus, 
  BadgeDollarSign, 
  Star,
  ListCollapseIcon,
  ExpandIcon,
  Pen,
  Home
} from "lucide-react";
import RoleSwitcherToTourist from "./RoleSwitcherToTourist";
type Props = {
  user: {
    role: string;
    hostStatus?: "PENDING" | "APPROVED" | "REJECTED" | null;
  };
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
};

export default function HostSidebar({ user, isCollapsed, setIsCollapsed }: Props) {
  const pathname = usePathname();

  const navItems = [
    { label: "Dashboard", href: "/dashboard/host", icon: LayoutDashboard },
    { label: "Create Plan", href: "/dashboard/host/create-plan", icon: Pen },
    { label: "My Trips", href: "/dashboard/host/trips", icon: Map },
    { label: "Requests", href: "/dashboard/host/requests", icon: UserPlus },
    { label: "Earnings", href: "/dashboard/host/earnings", icon: BadgeDollarSign },
    { label: "Reviews", href: "/dashboard/host/reviews", icon: Star },
     { name: "Back To Home", href: "/", icon: Home },
  ];

  return (
    <aside
      className={`fixed left-0 top-0 h-screen bg-white border-r border-gray-200 transition-all duration-300 z-40 ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Header Area */}
      <div className="h-16 flex items-center justify-between px-6 border-b border-gray-100">
        {!isCollapsed && <span className="text-xl font-bold text-blue-600">Host Panel</span>}
        {isCollapsed && <span className="text-xl font-bold text-blue-600 mx-auto">H</span>}
      </div>

      <nav className="p-4 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`relative flex items-center gap-4 p-3 rounded-xl transition-all group ${
                isActive ? "bg-blue-600 text-white shadow-lg" : "text-gray-500 hover:bg-gray-100"
              }`}
            >
              <Icon size={22} className="shrink-0" />
              {!isCollapsed && <span className="text-sm font-medium">{item.label}</span>}
              {/* TOOLTIP */}    
              {isCollapsed && (
                <div className="absolute left-full ml-4 px-3 py-1.5 bg-gray-800 text-white text-xs rounded-md 
                  opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                  transition-all duration-200 whitespace-nowrap z-50 pointer-events-none shadow-xl">
                  {item.label}
                  <div className="absolute top-1/2 -left-1 -translate-y-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
                </div>
              )}
            </Link>
          );
        })}
      </nav>

      {/* 🔁 ROLE SWITCHER */}
      {user.role === "HOST" && user.hostStatus === "APPROVED" && (
        <div className={`mt-auto border-t p-4 transition-all ${isCollapsed ? "opacity-0 invisible" : "opacity-100 visible"}`}>
          <RoleSwitcherToTourist />
        </div>
      )}

      {/* Collapse Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute top-16 right-[-14px] bg-white border border-gray-200 rounded-full p-1 shadow-md text-gray-500 hover:text-blue-600"
      >
        {isCollapsed ? <ExpandIcon size={18} /> : <ListCollapseIcon size={18} />}
      </button>
    </aside>
  );
}
