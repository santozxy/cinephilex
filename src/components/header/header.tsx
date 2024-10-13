import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getAccountDetails } from "@/domain/auth/requests";
import { env } from "@/env";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NavLinks } from "./nav-link";
import Link from "next/link";
import { ButtonLogout } from "./button-logout";
import { Button } from "../ui/button";

export async function Header() {
  const user = await getAccountDetails();
  return (
    <header className="flex items-center justify-between p-4 lg:px-8 border-b">
      <div className="flex items-center space-x-4 lg:space-x-8">
        <h1 className="text-2xl font-bold text-primary">CinephileX</h1>
        <NavLinks />
      </div>
      <div className="flex items-center space-x-4">
        {!user && (
          <Link href="/login">
            <Button>Entrar</Button>
          </Link>
        )}
        {user && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage
                  src={`${env.NEXT_PUBLIC_IMAGE_ORIGINAL}${user.avatar.tmdb.avatar_path}`}
                />
                <AvatarFallback>{user.name[0]}</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Olá, {user.name} 👋</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <Link href="/profile">
                <DropdownMenuItem className="cursor-pointer">
                  Perfil
                </DropdownMenuItem>
              </Link>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <ButtonLogout />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </header>
  );
}
