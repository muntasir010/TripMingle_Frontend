// "use client";

// import { useEffect, useState } from "react";

// type HostRequest = {
//   id: number;
//   user: {
//     name: string;
//     email: string;
//   };
// };

// export default function HostRequestsPage() {
//   const [data, setData] = useState<HostRequest[]>([]);
//   const [loading, setLoading] = useState(true);

//   const fetchRequests = async () => {
//     const res = await fetch(
//       "http://localhost:5000/api/v1/admin/host-requests",
//       { credentials: "include" }
//     );
//     const result = await res.json();
//     setData(result.data);
//     setLoading(false);
//   };

//   useEffect(() => {
//     const loadRequests = async () => {
//       await fetchRequests();
//     };
//     loadRequests();
//   }, []);

//   const handleApprove = async (id: number) => {
//     await fetch(
//       `http://localhost:5000/api/v1/admin/${id}/approve`,
//       {
//         method: "PATCH",
//         credentials: "include",
//       }
//     );
//     fetchRequests();
//   };

//   const handleReject = async (id: number) => {
//     await fetch(
//       `http://localhost:5000/api/v1/admin/${id}/reject`,
//       {
//         method: "PATCH",
//         credentials: "include",
//       }
//     );
//     fetchRequests();
//   };

//   if (loading) return <p>Loading...</p>;

//   return (
//     <div className="p-8">
//       <h1 className="text-2xl font-bold mb-6">
//         Host Requests
//       </h1>

//       <div className="space-y-4">
//         {data.map((item) => (
//           <div
//             key={item.id}
//             className="border p-4 rounded flex justify-between items-center"
//           >
//             <div>
//               <p className="font-semibold">{item.user.name}</p>
//               <p className="text-sm text-gray-500">
//                 {item.user.email}
//               </p>
//             </div>

//             <div className="space-x-2">
//               <button
//                 onClick={() => handleApprove(item.id)}
//                 className="px-4 py-1 bg-green-600 text-white rounded"
//               >
//                 Approve
//               </button>
//               <button
//                 onClick={() => handleReject(item.id)}
//                 className="px-4 py-1 bg-red-600 text-white rounded"
//               >
//                 Reject
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }




"use client";

import { useEffect, useState } from "react";
// import { toast } from "react-hot-toast";

// type HostRequest = {
//   id: number;
//   user: {
//     name: string;
//     email: string;
//   };
// };

// export default function HostRequestsPage() {
//   const [data, setData] = useState<HostRequest[]>([]);
//   const [loading, setLoading] = useState(true);

//   const fetchRequests = async () => {
//     try {
//       const res = await fetch("http://localhost:5000/api/v1/admin/host-requests", {
//         credentials: "include",
//       });
//       const result = await res.json();
//       if (result.success) {
//         setData(result.data || []);
//       }
//     } catch (err) {
//       console.error("Fetch error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchRequests();
//   }, []);

  // const handleAction = async (id: number, action: "approve" | "reject") => {
  //   try {
  //     const res = await fetch(`http://localhost:5000/api/v1/host/${id}/${action}`, {
  //       method: "PATCH",
  //       credentials: "include",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     const result = await res.json();

  //     if (res.ok && result.success) {
  //       alert(`${action.toUpperCase()} Successful!`);
  //       fetchRequests();
  //     } else {
  //       alert(result.message || "Something went wrong");
  //     }
  //   } catch (error) {
  //     console.error(`${action} error:`, error);
  //     alert("Network error or server down");
  //   }
  // };

//   const handleApprove = async (id: number) => {
//   try {
//     const res = await fetch(`http://localhost:5000/api/v1/admin/${id}/approve`, {
//       method: "PATCH",
//       credentials: "include",
//     });
//     const result = await res.json();

//     if (result.success) {
//       alert("Host approved!");
//       await fetchRequests(); // ✅ ডাটা রিফ্রেশ হওয়া পর্যন্ত অপেক্ষা করুন
//     } else {
//       alert(result.message); // এরর মেসেজ দেখাবে (যেমন: Already a host)
//     }
//   } catch (error) {
//     console.error("Approve error", error);
//   }
// };

// const handleReject = async (id: number) => {
//   try {
//     const res = await fetch(`http://localhost:5000/api/v1/admin/${id}/reject`, {
//       method: "PATCH", // বা আপনার ব্যাকএন্ড অনুযায়ী
//       credentials: "include",
//     });
//     const result = await res.json();

//     if (result.success) {
//       alert("Application rejected");
//       await fetchRequests(); // ✅ ডাটা রিফ্রেশ করুন
//     }
//   } catch (error) {
//     console.error("Reject error", error);
//   }
// };

//   if (loading) return <p className="p-8">Loading...</p>;

//   return (
//     <div className="p-8">
//       <h1 className="text-2xl font-bold mb-6">Host Requests</h1>

//       <div className="space-y-4">
//         {data.length > 0 ? (
//           data.map((item) => (
//             <div key={item.id} className="border p-4 rounded flex justify-between items-center bg-white shadow-sm">
//               <div>
//                 <p className="font-semibold">{item?.user?.name || "Unknown"}</p>
//                 <p className="text-sm text-gray-500">{item?.user?.email}</p>
//               </div>

//               <div className="space-x-2">
//                 <button
//                   onClick={() => handleApprove(item.id)}
//                   className="px-4 py-1 bg-green-600 text-white rounded hover:bg-green-700"
//                 >
//                   Approve
//                 </button>
//                 <button
//                   onClick={() => handleReject(item.id)}
//                   className="px-4 py-1 bg-red-600 text-white rounded hover:bg-red-700"
//                 >
//                   Reject
//                 </button>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No host requests found.</p>
//         )}
//       </div>
//     </div>
//   );
// }




type HostRequest = {
  id: number;
  status: "PENDING" | "APPROVED" | "REJECTED"; // আপনার ব্যাকএন্ডের স্ট্যাটাস অনুযায়ী
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
      const res = await fetch("http://localhost:5000/api/v1/admin/host-requests", {
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
      const res = await fetch(`http://localhost:5000/api/v1/host/${id}/${action}`, {
        method: "PATCH",
        credentials: "include",
      });
      const result = await res.json();

      if (result.success) {
        // UI আপডেট করার জন্য ডাটা আবার ফেচ করা
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
              {/* স্ট্যাটাস অনুযায়ী ডাইনামিক রেন্ডারিং */}
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