import RoleGuard from "../../components/auth/RoleGuard";
import { getUser } from "../../lib/getUsers";
import Sidebar from "../components/sidebar";
import AdminNavbar from "./_components/AdminNavbar";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUser();

  return (
    <RoleGuard role="ADMIN" userRole={user?.role}>
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 bg-gray-50 p-6">
          <AdminNavbar />
          {children}
        </main>
      </div>
    </RoleGuard>
  );
}
