import TouristSidebar from "../../../../components/dashboard/TouristSidebar";

export default function TouristLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <TouristSidebar />
      <main className="flex-1 p-6 bg-gray-50">
        {children}
      </main>
    </div>
  );
}


// "use client";

// import { useEffect, useState } from "react";

// type User = {
//   role: "ADMIN" | "HOST" | "TOURIST";
//   hostStatus: "PENDING" | "APPROVED" | null;
// };

// export default function DashboardHome() {
//   const [user, setUser] = useState<User | null>(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     fetch("http://localhost:5000/api/v1/profile/me", {
//       credentials: "include",
//     })
//       .then(res => res.json())
//       .then(data => setUser(data.data));
//   }, []);

//   const applyAsHost = async () => {
//     setLoading(true);
//     await fetch("http://localhost:5000/api/v1/host/apply", {
//       method: "POST",
//       credentials: "include",
//     });
//     setUser(prev => prev && { ...prev, hostStatus: "PENDING" });
//     setLoading(false);
//   };

//   if (!user) return null;

//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

//       {/* APPLY AS HOST */}
//       {user.role === "TOURIST" && user.hostStatus === null && (
//         <button
//           onClick={applyAsHost}
//           className="bg-blue-600 text-white px-4 py-2 rounded"
//         >
//           Apply as Host
//         </button>
//       )}

//       {/* PENDING */}
//       {user.hostStatus === "PENDING" && (
//         <button
//           disabled
//           className="bg-gray-400 text-white px-4 py-2 rounded cursor-not-allowed"
//         >
//           Pending Admin Approval
//         </button>
//       )}
//     </div>
//   );
// }


