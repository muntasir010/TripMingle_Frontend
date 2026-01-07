import HostSidebar from "../../../../components/dashboard/HostSidebar";

export default function HostPage() {
  return <h1 className="text-2xl">
    <HostSidebar user={{ role: "HOST", hostStatus: "APPROVED" }} />
  </h1>;
}
