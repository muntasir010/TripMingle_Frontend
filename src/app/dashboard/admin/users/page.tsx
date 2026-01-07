/* eslint-disable @typescript-eslint/no-explicit-any */

import { RoleSelect } from "@/app/dashboard/admin/_components/RoleSelect";


export default async function UsersPage() {
  const res = await fetch("http://localhost:5000/api/v1/admin/users", {
    credentials: "include",
    cache: "no-store",
  });

  const { data } = await res.json();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Users</h2>

      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">Avatar</th>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Role</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {data.map((user: any) => (
              <tr key={user.id} className="border-t">
                <td className="p-3">
                  <img
                    src={user.profilePhoto || "/user.png"}
                    className="h-8 w-8 rounded-full"
                  />
                </td>
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">{user.role}</td>
                <td className="p-3">
                  <RoleSelect userId={user.id} role={user.role} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
