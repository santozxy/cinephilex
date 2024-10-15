import { Header } from "@/components/header/header";
import { Sidebar } from "@/components/sidebar/sidebar";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[200px_1fr] bg-background lg:grid-cols-[260px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <Header />
        <div className="py-4">{children}</div>
      </div>
    </div>
  );
}
