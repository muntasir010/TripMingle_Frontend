/* eslint-disable @typescript-eslint/no-explicit-any */
import { RoleSelect } from "@/components/dashboard/RoleSelect";
import { cookies } from "next/headers"; 

export default async function UsersPage() {
  let usersData = [];

  try {

    const cookieStore = await cookies();
    const allCookies = cookieStore.toString();

    const res = await fetch("${process.env.NEXT_PUBLIC_API_URL}/admin/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Cookie: allCookies,
      },
      cache: "no-store",
    });

    const result = await res.json();
    console.log("result: " , result, result.data)

    if (!res.ok) {
        throw new Error(result.message || "Failed to fetch users");
    }

    usersData = result?.data || [];
  } catch (error) {
    console.error("Fetch error in UsersPage:", error);
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Users Management</h2>

      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Avatar</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Role</th>
              <th className="p-3 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {usersData.length > 0 ? (
              usersData.map((user: any) => (
                <tr key={user.id} className="border-t">
                  <td className="p-3">
                    <img
                      src={user.profilePhoto || "/user.png"}
                      className="h-8 w-8 rounded-full border"
                      alt="profile"
                    />
                  </td>
                  <td className="p-3">{user.name}</td>
                  <td className="p-3">{user.email}</td>
                  <td className="p-3">
                    <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-bold uppercase">
                      {user.role}
                    </span>
                  </td>
                  <td className="p-3 text-center">
                    <RoleSelect userId={user.id} role={user.role} />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="p-10 text-center text-red-500">
                  {usersData === null ? "Unauthorized: You don't have permission." : "No users found."}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}