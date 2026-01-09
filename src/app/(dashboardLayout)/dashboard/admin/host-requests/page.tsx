"use client";

import { useEffect, useState } from "react";

type HostRequest = {
  id: number;
  status: "PENDING" | "APPROVED" | "REJECTED";
  user: {
    name: string;
    email: string;
  };
};

export default function HostRequestsPage() {
  const [data, setData] = useState<HostRequest[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchRequests = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/host-requests`, {
        credentials: "include",
      });
      const result = await res.json();
      if (result.success) {
        setData(result.data);
      }
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const handleAction = async (id: number, action: "approve" | "reject") => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/host/${id}/${action}`, {
        method: "PATCH",
        credentials: "include",
      });
      const result = await res.json();

      if (result.success) {
        await fetchRequests();
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error("Action error:", error);
    }
  };

  if (loading) return <div className="p-8 text-center font-medium">Loading requests...</div>;

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Host Applications</h1>

      <div className="grid gap-4">
        {data.map((item) => (
          <div
            key={item.id}
            className="border border-gray-100 p-5 rounded-xl shadow-sm bg-white flex justify-between items-center transition hover:shadow-md"
          >
            <div>
              <p className="font-bold text-lg text-gray-900">{item.user.name}</p>
              <p className="text-sm text-gray-500 font-medium">{item.user.email}</p>
            </div>

            <div className="flex items-center gap-3">
              {item.status === "PENDING" ? (
                <>
                  <button
                    onClick={() => handleAction(item.id, "approve")}
                    className="px-5 py-2 bg-green-600 text-white rounded-lg text-sm font-semibold hover:bg-green-700 transition"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleAction(item.id, "reject")}
                    className="px-5 py-2 bg-red-50 text-red-600 border border-red-200 rounded-lg text-sm font-semibold hover:bg-red-100 transition"
                  >
                    Reject
                  </button>
                </>
              ) : item.status === "APPROVED" ? (
                <span className="px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase tracking-wider">
                  ✓ Approved
                </span>
              ) : (
                <span className="px-4 py-1.5 bg-red-100 text-red-700 rounded-full text-xs font-bold uppercase tracking-wider">
                  ✕ Rejected
                </span>
              )}
            </div>
          </div>
        ))}

        {data.length === 0 && (
          <div className="text-center py-10 text-gray-400">No requests found at this moment.</div>
        )}
      </div>
    </div>
  );
}