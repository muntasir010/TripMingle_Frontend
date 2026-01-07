import HostSidebar from "../../../../components/dashboard/HostSidebar";

export default function HostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <HostSidebar user={{ role: "HOST", hostStatus: "APPROVED" }} />
      <main className="flex-1 p-6 bg-gray-50">
        {children}
      </main>
    </div>
  );
}