"use server";

import { cookies } from "next/headers";
import { fetchServer } from "@/api/fetchServer";

export async function createRequestToken() {
  const data = await fetchServer("/authentication/token/new");
  console.log("Request TOken", data);
  return data.request_token;
}

export async function validateWithLogin(
  username: string,
  password: string,
  request_token: string
) {
  try {
    const data = await fetchServer(
      "/authentication/token/validate_with_login",
      {
        method: "POST",
        body: JSON.stringify({ username, password, request_token }),
      }
    );
    return data.success ? data.request_token : null;
  } catch (error) {
    console.error("Erro na validação do login:", error);
    return null;
  }
}

export async function createSession(request_token: string) {
  const data = await fetchServer("/authentication/session/new", {
    method: "POST",
    body: JSON.stringify({ request_token }),
  });

  if (data.success) {
    cookies().set("tmdb_session_id", data.session_id, {
      httpOnly: true,
      secure: true,
    });
    return true;
  }
  return false;
}

export async function logout() {
  const session_id = cookies().get("tmdb_session_id")?.value;
  if (session_id) {
    await fetchServer("/authentication/session", {
      method: "DELETE",
      body: JSON.stringify({ session_id }),
    });
    cookies().delete("tmdb_session_id");
  }
}

export async function getAccountDetails() {
  const session_id = cookies().get("tmdb_session_id")?.value;
  if (!session_id) return null;

  try {
    const data = await fetchServer(`/account?session_id=${session_id}`);
    return data;
  } catch (error) {
    console.error("Erro ao obter detalhes da conta:", error);
    return null;
  }
}
