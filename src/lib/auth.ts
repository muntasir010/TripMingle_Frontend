export async function getMe() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/profile`, {
    method: "GET",
    credentials: "include",
    cache: "no-store",
  });

  if (!res.ok) return null;

  const data = await res.json();
  return data.data;
}
