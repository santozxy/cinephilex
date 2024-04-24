import { Outlet } from "@tanstack/react-router";
import { Header } from "@components";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
