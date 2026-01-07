/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import StatCard from "./_components/StatCard";

type AdminStats = {
  totalUsers: number;
  totalTrips: number;
  totalReviews: number;
  totalTravelPlans?: number;
  totalTravelRequests?: number;
};

export default function AdminDashboard() {
  const [data, setData] = useState<AdminStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch(
          "http://localhost:5000/api/v1/admin/stats",
          {
            credentials: "include",
            cache: "no-store",
          }
        );

        const result = await res.json();

        if (!res.ok) {
          throw new Error(result.message || "Failed to load admin stats");
        }

        setData(result.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  // ⏳ Loading UI
  if (loading) {
    return (
      <div className="p-10 text-center text-gray-600">
        Loading admin dashboard...
      </div>
    );
  }

  // ❌ Error UI
  if (error) {
    return (
      <div className="p-10 text-center text-red-600">
        {error}
      </div>
    );
  }

  // 🔐 Safety guard
  if (!data) return null;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Admin Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Total Users" value={data.totalUsers} />
        <StatCard title="Total Trips" value={data.totalTrips} />
        <StatCard title="Total Reviews" value={data.totalReviews} />
      </div>
    </div>
  );
}
