import HostSidebar from "../components/HostSidebar";

export default function HostPage() {
  return <h1 className="text-2xl">
    <HostSidebar user={{ role: "HOST", hostStatus: "APPROVED" }} />
  </h1>;
}
