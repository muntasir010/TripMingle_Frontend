import { cookies } from "next/headers";

export type AuthUser = {
  userId: number;
  email: string;
  role: "ADMIN" | "HOST" | "TOURIST";
};

export async function getUser(): Promise<AuthUser | null> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;

    if (!token) return null;

    const res = await fetch(
      "http://localhost:5000/api/v1/users/profile",
      {
        method: "GET",
        headers: {
          Cookie: `accessToken=${token}`,
        },
        cache: "no-store",
      }
    );

    if (!res.ok) return null;

    const result = await res.json();
    return result.data as AuthUser;
  } catch {
    return null;
  }
}
