import { Link } from "@tanstack/react-router";
import { Film, Home, Search, Tv } from "lucide-react";

export function Header() {
  return (
    <div className="p-2 bg-dark flex items-center justify-between w-full h-20">
      <h1 className="text-3xl text-primary">CinephileX</h1>
      <nav className="flex gap-8 pr-5">
        <Link to="/home" className="py-2 no-underline">
          {({ isActive }) => {
            return (
              <div className="flex items-center justify-center gap-3">
                <Home
                  size={24}
                  className={`text-xl ${isActive ? "text-primary" : "text-light"}`}
                />
                <p
                  className={`text-xl ${isActive ? "text-primary" : "text-light"}`}
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
                  className={`text-xl ${isActive ? "text-primary" : "text-light"}`}
                />
                <p
                  className={`text-xl ${isActive ? "text-primary" : "text-light"}`}
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
                  className={`text-xl ${isActive ? "text-primary" : "text-light"}`}
                />
                <p
                  className={`text-xl ${isActive ? "text-primary" : "text-light"}`}
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
                  className={`text-xl ${isActive ? "text-primary" : "text-light"}`}
                />
                <p
                  className={`text-xl ${isActive ? "text-primary" : "text-light"}`}
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
