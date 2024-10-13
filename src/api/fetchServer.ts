import { env } from "@/env";

const ACESS_TOKEN = env.NEXT_PUBLIC_API_ACESS_TOKEN;
const TMDB_BASE_URL = "https://api.themoviedb.org/3";

export async function fetchServer(path: string, options: RequestInit = {}) {
  const url = `${TMDB_BASE_URL}${path}`;
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${ACESS_TOKEN}`,
    ...options.headers,
  };

  const response = await fetch(url, { ...options, headers });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.status_message || "Erro na requisição");
  }

  return data;
}
