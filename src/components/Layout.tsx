import { Outlet } from "@tanstack/react-router";
import { Header } from "@components";

export default function Layout() {
  return (
    <div className="flex flex-col gap-10">
      <Header />
      <Outlet />
    </div>
  );
}
