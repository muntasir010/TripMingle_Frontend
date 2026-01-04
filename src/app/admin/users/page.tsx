export default function UsersPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Users</h2>

      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Role</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-3">Naeem</td>
              <td className="p-3">naeem@gmail.com</td>
              <td className="p-3">ADMIN</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
