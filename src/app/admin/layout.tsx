import RoleGuard from "../components/auth/RoleGuard";
import { getUser } from "../lib/getUsers";
import AdminNavbar from "./_components/AdminNavbar";
import AdminSidebar from "./_components/AdminSidebar";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUser();

  return (
    <RoleGuard role="ADMIN" userRole={user?.role}>
      <div className="flex min-h-screen">
        <AdminSidebar mode="ADMIN" />
        <main className="flex-1 bg-gray-50 p-6">
          <AdminNavbar />
          {children}
        </main>
      </div>
    </RoleGuard>
  );
}
