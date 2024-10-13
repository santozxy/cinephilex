"use client";
import React from "react";
import { Button } from "../ui/button";
import { logout } from "@/domain/auth/requests";

export function ButtonLogout() {
  async function handleLogout() {
    await logout();
  }
  return (
    <Button className="w-full" onClick={handleLogout}>
      Sair
    </Button>
  );
}
