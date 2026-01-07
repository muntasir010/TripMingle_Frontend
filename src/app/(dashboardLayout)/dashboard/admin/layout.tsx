import AdminSidebar from "../../../../components/dashboard/AdminSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <AdminSidebar mode="ADMIN" />
      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
}