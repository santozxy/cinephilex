import React from "react";

import Link from "next/link";
import { NavLinks } from "./nav-link";
import { Glasses } from "lucide-react";
export function Sidebar() {
  return (
    <div className="hidden relative border-r md:block">
      <div className="flex sticky top-0 h-full max-h-screen flex-col gap-2">
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
      </div>
    </div>
  );
}
