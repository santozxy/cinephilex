import {Header} from "@/components/header/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
    </div>
  );
}
