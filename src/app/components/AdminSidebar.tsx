import Link from "next/link";

export default function AdminSidebar() {
  return (
    <aside className="w-64 min-h-screen bg-gray-900 text-white p-6">
      <h2 className="text-xl font-bold mb-8">Admin Panel</h2>

      <nav className="space-y-4">
        <Link href="/admin" className="block hover:text-blue-400">
          📊 Dashboard
        </Link>
        <Link href="/admin/users" className="block hover:text-blue-400">
          👥 Users
        </Link>
      </nav>
    </aside>
  );
}
