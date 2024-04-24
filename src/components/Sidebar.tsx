import { Link } from "@tanstack/react-router";

export default function Sidebar() {
  return (
    <aside className="w-48 border-2 border-light h-dvh bg-dark l p-2">
      <header>
        <h1 className="lg:text-2xl md:text-xl sm:text-base text-center font-semibold text-primary">
          Cinephilex
        </h1>
      </header>
      <nav className="flex flex-col justify-center items-center">
        <Link to="/" className=" text-light py-2">
          Home
        </Link>
        <Link to="/movies" className=" text-white py-2">
          Movies
        </Link>
        <Link to="/search" className=" text-white py-2">
          Search
        </Link>
      </nav>
    </aside>
  );
}
