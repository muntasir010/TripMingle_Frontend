"use client";

export default function RoleSwitch({
  activeRole,
}: {
  activeRole: "HOST" | "TOURIST";
}) {
  const switchRole = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/switch-role`, {
      method: "PATCH",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ role: "HOST" }),
    });

    window.location.reload();
  };

  return (
    <button onClick={switchRole} className="border px-4 py-2 rounded">
      Switch to {activeRole === "HOST" ? "Tourist" : "Host"}
    </button>
  );
}