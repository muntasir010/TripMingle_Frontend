export type AdminMode = "ADMIN" | "HOST" | "TOURIST";

export type SidebarItem = {
  label: string;
  href: string;
  modes: AdminMode[];
};

export const sidebarItems: SidebarItem[] = [
  {
    label: "Dashboard",
    href: "/admin",
    modes: ["ADMIN"],
  },
  {
    label: "Users",
    href: "/admin/users",
    modes: ["ADMIN"],
  },
  {
    label: "Host Requests",
    href: "/admin/host-requests",
    modes: ["ADMIN"],
  },
  {
    label: "Trips",
    href: "/admin/trips",
    modes: ["ADMIN", "HOST"],
  },
  {
    label: "Reports",
    href: "/admin/reports",
    modes: ["ADMIN", "TOURIST"],
  },
];
