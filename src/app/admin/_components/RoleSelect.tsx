"use client";

export function RoleSelect({
  userId,
  role,
}: {
  userId: number;
  role: string;
}) {
  const changeRole = async (newRole: string) => {
    await fetch(
      `http://localhost:5000/api/v1/admin/users/${userId}/role`,
      {
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ role: newRole }),
      }
    );

    location.reload();
  };

  return (
    <select
      defaultValue={role}
      onChange={(e) => changeRole(e.target.value)}
      className="border rounded px-2 py-1"
    >
      <option value="ADMIN">ADMIN</option>
      <option value="HOST">HOST</option>
      <option value="TOURIST">TOURIST</option>
    </select>
  );
}
