import { Outlet } from "@tanstack/react-router";
import { Sidebar } from "@components";

export default function Layout() {
  return (
    <div className="flex">
      <Sidebar />
      <Outlet />
    </div>
  );
}
