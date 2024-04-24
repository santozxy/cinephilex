import { Link } from "@tanstack/react-router";
import { Movie } from "../services/movies/moviesDTO";
import React from "react";

interface ListCardsProps {
  title: string;
  data: Movie[];
}

const imageURL = import.meta.env.VITE_IMG;

export default function ListCards({
  title = "Top Films",
  data,
}: ListCardsProps) {
  return (
    <div className="p-4 bg-light">
      <h1 className="lg:text-2xl md:text-xl max-sm:text-lg text-primary font-medium">{title}</h1>
      <div className="flex gap-3 overflow-x-scroll">
        {data.map((movie) => (
          <div key={movie.id}>
            <Link onClick={() => window.scrollTo(0, 0)}>
              <img
                src={imageURL + movie.poster_path}
                alt={movie.title}
                className="object-cover w-48 h-72 rounded-md"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
