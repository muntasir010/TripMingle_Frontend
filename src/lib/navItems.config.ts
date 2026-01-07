/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosInstance from "@/utils/axiosInstance";

// Types definition for better structure
export interface NavItem {
    title: string;
    href: string;
    icon: string;
    badge?: string;
    roles: string[];
}

export interface NavSection {
    title: string;
    items: NavItem[];
}

// 1. ADMIN Navigation Items (Static + Dynamic Badge)
export const getAdminNavItems = async (): Promise<NavSection[]> => {
    let pendingHostRequests = 0;
    try {
        const response = await axiosInstance.get("/admin/host-requests");
        // Count only PENDING applications
        pendingHostRequests = response.data?.data?.filter((req: any) => req.status === "PENDING").length || 0;
    } catch (error) {
        console.error("Error fetching host requests count:", error);
    }

    return [
        {
            title: "Administration",
            items: [
                {
                    title: "Overview",
                    href: "/dashboard/admin",
                    icon: "LayoutDashboard",
                    roles: ["ADMIN"],
                },
                {
                    title: "Host Applications",
                    href: "/dashboard/admin/host-requests",
                    icon: "Users",
                    badge: pendingHostRequests > 0 ? pendingHostRequests.toString() : undefined,
                    roles: ["ADMIN"],
                },
                {
                    title: "All Users",
                    href: "/dashboard/admin/users",
                    icon: "ShieldCheck",
                    roles: ["ADMIN"],
                },
            ],
        },
    ];
};

// 2. HOST Navigation Items
export const getHostNavItems = async (): Promise<NavSection[]> => {
    return [
        {
            title: "Host Management",
            items: [
                {
                    title: "My Travel Plans",
                    href: "/dashboard/host/my-plans",
                    icon: "Map",
                    roles: ["HOST"],
                },
                {
                    title: "Create New Trip",
                    href: "/dashboard/host/create-trip",
                    icon: "PlusSquare",
                    roles: ["HOST"],
                },
                {
                    title: "Join Requests",
                    href: "/dashboard/host/join-requests",
                    icon: "UserPlus",
                    roles: ["HOST"],
                },
            ],
        }
    ];
};

// 3. TOURIST Navigation Items
export const getTouristNavItems = async (): Promise<NavSection[]> => {
    return [
        {
            title: "Tourist Menu",
            items: [
                {
                    title: "Find Trips",
                    href: "/trips",
                    icon: "Search",
                    roles: ["TOURIST", "HOST"], // Host can also book trips
                },
                {
                    title: "My Bookings",
                    href: "/dashboard/tourist/my-bookings",
                    icon: "Briefcase",
                    roles: ["TOURIST", "HOST"],
                },
            ],
        }
    ];
};

// 4. COMMON Navigation Items
const getCommonNavItems = (role: string): NavSection[] => {
    return [
        {
            title: "Account",
            items: [
                {
                    title: "Profile",
                    href: "/dashboard/profile",
                    icon: "User",
                    roles: [role],
                },
                {
                    title: "Settings",
                    href: "/dashboard/settings",
                    icon: "Settings",
                    roles: [role],
                },
            ],
        }
    ];
};

// 5. MAIN FUNCTION to get items by Role and Switcher Mode
export const getNavItemsByRole = async (role: string, activeMode: string): Promise<NavSection[]> => {
    const commonNavItems = getCommonNavItems(role);

    // If Admin, show Admin Menu
    if (role === "ADMIN") {
        return [...commonNavItems, ...await getAdminNavItems()];
    }

    // Logic based on Switcher Mode (Host Mode vs Tourist Mode)
    if (activeMode === "HOST" && role === "HOST") {
        return [...commonNavItems, ...await getHostNavItems()];
    }

    // Default to Tourist Mode for everyone else
    return [...commonNavItems, ...await getTouristNavItems()];
};