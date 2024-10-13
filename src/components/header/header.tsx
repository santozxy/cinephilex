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
import Link from "next/link";
import { ButtonLogout } from "./button-logout";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight, Menu, Glasses } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from "../ui/sheet";
import { NavLinks } from "../sidebar/nav-link";

export async function Header() {
  const user = await getAccountDetails();
  return (
    <header className="flex justify-between px-4  sticky top-0 h-14 items-center gap-4 border-b  lg:h-[60px] lg:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="flex py-8 flex-col"
          aria-describedby=""
        >
          <SheetTitle></SheetTitle>
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <div className="flex items-center gap-2">
                <Glasses size={24} />
                <h1 className="text-2xl max-sm:text-xl font-semibold text-primary">
                  CinephileX
                </h1>
              </div>
            </Link>
          </div>
          <NavLinks />
        </SheetContent>
      </Sheet>
      <div className="flex items-center gap-4">
        <ChevronLeft size={24} />
        <ChevronRight size={24} />
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
