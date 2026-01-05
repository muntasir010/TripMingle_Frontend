import AdminSidebar from "@/app/components/AdminSidebar";
import AdminNavbar from "@/app/components/AdminNavbar";
import { getUser } from "../lib/getUsers";
import RoleGuard from "../components/auth/RoleGuard";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUser();
  console.log("Logged in user role:", user?.role);
  return (
    <RoleGuard role="ADMIN" userRole={user?.role}>
        <div className="flex">
          <AdminSidebar />

          <div className="flex-1 min-h-screen">
            <AdminNavbar />
            <main className="p-6 bg-gray-50 min-h-[calc(100vh-64px)]">
              {children}
            </main>
          </div>
        </div>
    </RoleGuard>
  );
}
