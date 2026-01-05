import AdminSidebar from "@/app/components/AdminSidebar";
import AdminNavbar from "@/app/components/AdminNavbar";
import AdminGuard from "@/app/components/AdminGuard";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUser();
  return (
    <AdminGuard>
      <div className="flex">
        <AdminSidebar />

        <div className="flex-1 min-h-screen">
          <AdminNavbar />
          <main className="p-6 bg-gray-50 min-h-[calc(100vh-64px)]">
            {children}
          </main>
        </div>
      </div>
    </AdminGuard>
  );
}
