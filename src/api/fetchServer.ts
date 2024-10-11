
const TMDB_API_KEY = process.env.NEXT_PUBLIC_API_TMDB_KEY;
const TMDB_BASE_URL = "https://api.themoviedb.org/3";

export async function fetchServer(endpoint: string, options: RequestInit = {}) {
  const url = `${TMDB_BASE_URL}${endpoint}`;
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${TMDB_API_KEY}`,
    ...options.headers,
  };

  const response = await fetch(url, { ...options, headers });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.status_message || "Erro na requisição TMDB");
  }

  return data;
}
