export async function getMe() {
  const res = await fetch("http://localhost:5000/api/v1/users/profile", {
    method: "GET",
    credentials: "include",
    cache: "no-store",
  });

  if (!res.ok) return null;

  const data = await res.json();
  return data.data;
}
