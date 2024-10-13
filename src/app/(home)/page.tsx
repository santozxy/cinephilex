import { getAccountDetails } from "@/actions/auth-manager";
import Link from "next/link";

export default async function Home() {
  const userDetails = await getAccountDetails();
  console.log(userDetails);
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <h1>Hello Words</h1>
      <Link href="/login">login</Link>
    </main>
  );
}
