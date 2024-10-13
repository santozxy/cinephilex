import { getAccountDetails } from "@/domain/auth/requests";
import Link from "next/link";

export default async function Home() {
  const userDetails = await getAccountDetails();
  return (
    <main className="container">
      <h1>Hello Word</h1>
      <Link href="/login">login</Link>
      <pre>{JSON.stringify(userDetails, null, 2)}</pre>
    </main>
  );
}
