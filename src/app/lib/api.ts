// const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1";
const API_URL = "http://localhost:5000/api/v1";

export const apiRequest = async (
  endpoint: string,
  options: RequestInit
) => {
  const res = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
};