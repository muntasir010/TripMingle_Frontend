"use client";

import { useRouter } from "next/navigation";

export default function RoleSwitcher() {
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

    router.push("/dashboard");
    router.refresh();
  };

  return (
    <button
      onClick={switchToTourist}
      className="w-full rounded-lg border px-4 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50"
    >
      Switch to Tourist
    </button>
  );
}
