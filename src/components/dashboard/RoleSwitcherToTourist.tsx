"use client";

import { useRouter } from "next/navigation";

export default function RoleSwitcherToTourist() {
  const router = useRouter();

  const switchToTourist = async () => {
    await fetch("http://localhost:5000/api/v1/auth/switch-role", {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ role: "TOURIST" }),
    });

    router.push("/dashboard/tourist");
    router.refresh();
  };

  return (
    <div>
      <button
        onClick={switchToTourist}
        className="w-full rounded-lg border px-4 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50"
      >
        Switch to Tourist
      </button>
    </div>
  );
}
