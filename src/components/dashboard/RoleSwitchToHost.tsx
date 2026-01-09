"use client";

import { useRouter } from "next/navigation";

export default function RoleSwitcherToHost() {
  const router = useRouter();

  const switchToHost = async () => {
    await fetch("${process.env.NEXT_PUBLIC_API_URL}/auth/switch-role", {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ role: "HOST" }),
    });

    router.push("/dashboard/host");
    router.refresh();
  };

  return (
    <button
      onClick={switchToHost}
      className="w-full rounded-lg border px-4 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50"
    >
      Switch to Host
    </button>
  );
}
