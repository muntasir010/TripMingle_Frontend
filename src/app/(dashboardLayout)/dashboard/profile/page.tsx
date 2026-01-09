"use client";

import { useEffect, useState } from "react";
import RoleSwitch from "./RoleSwitch";

interface User {
  name: string;
  email: string;
  role: "TOURIST" | "HOST";
  activeRole?: "TOURIST" | "HOST";
}

interface HostApplication {
  status: "PENDING" | "REJECTED" | "APPROVED";
}

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const [hostApplication, setHostApplication] = useState<HostApplication | null>(null);
  const [loading, setLoading] = useState(false);

  // 🔹 Load user + application status
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/profile`, {
      credentials: "include",
    })
      .then(res => res.json())
      .then(data => setUser(data.data));

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/host/me`, {
      credentials: "include",
    })
      .then(res => res.json())
      .then(data => setHostApplication(data.data));
  }, []);

  // 🔹 Apply as Host
  const applyAsHost = async () => {
    setLoading(true);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/host/apply`,
      {
        method: "POST",
        credentials: "include",
      }
    );

    const data = await res.json();

    if (data.success) {
      setHostApplication({ status: "PENDING" });
    }

    setLoading(false);
  };

  if (!user) return null;

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <h1 className="text-xl font-semibold">My Profile</h1>

      <div className="bg-white p-4 rounded shadow space-y-2">
        <p><b>Name:</b> {user.name}</p>
        <p><b>Email:</b> {user.email}</p>
        <p><b>Role:</b> {user.role}</p>
      </div>

      {/* 👉 APPLY AS HOST BUTTON */}
      {user.role === "TOURIST" && !hostApplication && (
        <button
          onClick={applyAsHost}
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {loading ? "Applying..." : "Apply as Host"}
        </button>
      )}

      {/* ⏳ Pending */}
      {hostApplication?.status === "PENDING" && (
        <p className="text-yellow-600 font-medium">
          ⏳ Your host application is pending approval
        </p>
      )}

      {/* ❌ Rejected */}
      {hostApplication?.status === "REJECTED" && (
        <p className="text-red-600 font-medium">
          ❌ Application rejected
        </p>
      )}

      {/* 🔄 Role Switch */}
      {user.role === "HOST" && (
        <RoleSwitch activeRole={user.activeRole || "HOST"} />
      )}
    </div>
  );
}
