export type AdminMode = "ADMIN" | "HOST" | "TOURIST";

export type SidebarItem = {
  label: string;
  href: string;
  modes: AdminMode[];
};

export const sidebarItems: SidebarItem[] = [
  {
    label: "Dashboard",
    href: "/dashboard/admin",
    modes: ["ADMIN"],
  },
  {
    label: "Statistics",
    href: "/dashboard/admin/stats",
    modes: ["ADMIN"],
  },
  {
    label: "Users",
    href: "/dashboard/admin/users",
    modes: ["ADMIN"],
  },
  {
    label: "Host Requests",
    href: "/dashboard/admin/host-requests",
    modes: ["ADMIN"],
  },
  {
    label: "Trips",
    href: "/dashboard/admin/trips",
    modes: ["ADMIN", "HOST"],
  },
  {
    label: "Reports",
    href: "/dashboard/admin/reports",
    modes: ["ADMIN", "TOURIST"],
  },
];
