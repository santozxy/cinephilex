"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Film, Home, Newspaper, Tv } from "lucide-react";

const links = [
  { title: "Início", href: "/", icon: <Home /> },
  { title: "Filmes", href: "/movies", icon: <Film /> },
  { title: "Séries", href: "/series", icon: <Tv /> },
  { title: "Jornal", href: "/journal", icon: <Newspaper /> },
];

export function NavLinks() {
  const pathname = usePathname();

  function isActiveLink(href: string): boolean {
    return (
      pathname === href ||
      (pathname.startsWith(href) && pathname[href.length] === "/")
    );
  }

  return (
    <nav className="flex items-start px-2 text-sm font-medium lg:px-4">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={
            "flex items-center gap-3 rounded-lg px-3 py-2 font-medium text-muted-foreground transition-all hover:text-primary" +
            (isActiveLink(link.href) ? " text-primary bg-accent" : "")
          }
        >
          {link.icon}
          {link.title}
        </Link>
      ))}
    </nav>
  );
}
