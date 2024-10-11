import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <h1>Hello Words</h1>
      <Link href="/login">
        login
      </Link>
    </main>
  );
}
