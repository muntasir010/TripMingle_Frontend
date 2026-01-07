"use client";

export default function RoleSwitch({
  activeRole,
}: {
  activeRole: "HOST" | "TOURIST";
}) {
  const switchRole = async () => {
    await fetch("http://localhost:5000/api/v1/profile/switch-role", {
      method: "PATCH",
      credentials: "include",
    });

    window.location.reload();
  };

  return (
    <button
      onClick={switchRole}
      className="border px-4 py-2 rounded"
    >
      Switch to {activeRole === "HOST" ? "Tourist" : "Host"}
    </button>
  );
}
