"use server";

import { fetchServer } from "@/api/fetchServer";
import { RequestToken, Login, Session } from "./types";
import { cookies } from "next/headers";

export async function getRequestToken() {
  const data: RequestToken = await fetchServer("/authentication/token/new");
  return data;
}

export async function login(
  username: string,
  password: string,
  request_token: string
) {
  const data: Login = await fetchServer(
    "/authentication/token/validate_with_login",
    {
      method: "POST",
      body: JSON.stringify({ username, password, request_token }),
    }
  );
  return data.request_token;
}

export async function logout() {
  const session_id = cookies().get("tmdb_session_id")?.value;
  if (!session_id) {
    return;
  }
  await fetchServer("/authentication/session", {
    method: "DELETE",
    body: JSON.stringify({ session_id }),
  });
  cookies().delete("tmdb_session_id");
}

export async function createSession(request_token: string) {
  const data: Session = await fetchServer("/authentication/session/new", {
    method: "POST",
    body: JSON.stringify({ request_token }),
  });
  if (data.success) {
    cookies().set("tmdb_session_id", data.session_id, {
      httpOnly: true,
      secure: true,
      expires: new Date(data.expires_at),
    });
    return true;
  }
  return false;
}

export async function getAccountDetails() {
  const session_id = cookies().get("tmdb_session_id")?.value;
  if (!session_id) return null;
  const data = await fetchServer(`/account?session_id=${session_id}`);
  return data;
}
