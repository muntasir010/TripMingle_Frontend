/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("${process.env.NEXT_PUBLIC_API_URL}/admin/stats", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          setData(res.data);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!data) return <p>No data found</p>;
  console.log(data);

  return (
    <div>
      <div>
        <h1 className="text-4xl text-center  text-[#50A2FF]">
          Admin Dashboard. Welcome Back.
        </h1>
      </div>
      <h1 className="text-2xl font-bold mb-6">Admin Statistics</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Total Users" value={data.totalUsers} />
        <StatCard title="Total Trips" value={data.totalTrips} />
        <StatCard title="Total Reviews" value={data.totalReviews} />
        <StatCard title="Total Travel Plans" value={data.totalTravelPlans} />
        <StatCard
          title="Total Travel Requests"
          value={data.totalTravelRequests}
        />
      </div>
    </div>
  );
}

function StatCard({ title, value }: { title: string; value: number }) {
  return (
    <div className="rounded-xl bg-white p-6 shadow">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
}
