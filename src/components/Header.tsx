import { Link } from "@tanstack/react-router";
import { Film, Home, Search, Tv } from "lucide-react";

export function Header() {
  return (
    <div className="p-2 bg-light flex items-center justify-between w-full max-sm:flex-col px-4 h-20 max-sm:h-28 shadow-xl fixed top-0 z-[99999] dark:bg-dark">
      <h1 className="lg:text-3xl md:text-2xl max-sm:text-2xl text-primary">
        CinephileX
      </h1>
      <nav className="flex gap-8  justify-center items-center">
        <Link to="/home" className="py-2 no-underline">
          {({ isActive }) => {
            return (
              <div className="flex items-center justify-center gap-3">
                <Home
                  size={24}
                  className={`text-lg text-dark ${isActive ? "text-primary" : "dark:text-light"}`}
                />
                <p
                  className={`text-lg max-[450px]:hidden ${isActive ? "text-primary" : "dark:text-light "}`}
                >
                  Home
                </p>
              </div>
            );
          }}
        </Link>
        <Link to="/movies" className="py-2 no-underline">
          {({ isActive }) => {
            return (
              <div className="flex items-center justify-center gap-3">
                <Film
                  size={24}
                  className={`text-lg ${isActive ? "text-primary" : "dark:text-light text-dark"}`}
                />
                <p
                  className={`text-lg  max-[450px]:hidden ${isActive ? "text-primary" : "dark:text-light text-dark"}`}
                >
                  Movies
                </p>
              </div>
            );
          }}
        </Link>
        <Link to="/series" className="py-2 no-underline">
          {({ isActive }) => {
            return (
              <div className="flex items-center justify-center gap-3">
                <Tv
                  size={24}
                  className={`text-lg ${isActive ? "text-primary" : "dark:text-light text-dark"}`}
                />
                <p
                  className={`text-lg max-[450px]:hidden ${isActive ? "text-primary" : "dark:text-light text-dark"}`}
                >
                  Series
                </p>
              </div>
            );
          }}
        </Link>
        <Link to="/search" className="py-2 no-underline">
          {({ isActive }) => {
            return (
              <div className="flex items-center justify-center gap-3">
                <Search
                  size={24}
                  className={`text-xl ${isActive ? "text-primary" : "dark:text-light text-dark"}`}
                />
                <p
                  className={`text-xl max-[450px]:hidden ${isActive ? "text-primary" : "dark:text-light text-dark"}`}
                >
                  Search
                </p>
              </div>
            );
          }}
        </Link>
      </nav>
    </div>
  );
}
