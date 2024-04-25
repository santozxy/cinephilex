/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from "@tanstack/react-router";
import { Movie } from "src/services/movies/moviesDTO";
import { Serie } from "src/services/series/seriesDTO";
import ImageNotFound from "../assets/backdrop.jpg";

interface Props {
  title: string;
  dataMovies?: Movie[];
  dataSeries?: Serie[];
  dataPerson?: [];
}
const imageURL = import.meta.env.VITE_IMG_JPG;

export default function ListCardSearch({
  title,
  dataMovies,
  dataSeries,
}: Props) {
  const ListDataMovies = dataMovies?.map((movie) => (
    <div key={movie.id}>
      <Link className="relative">
        <img
          loading="lazy"
          src={
            movie.poster_path
              ? imageURL + movie.poster_path
              : movie.backdrop_path
                ? imageURL + movie.backdrop_path
                : ImageNotFound
          }
          alt={movie.title}
          className=" w-52 h-72 max-sm:w-full max-sm:h-40 rounded-md shadow-lg border border-gray-600"
        />
      </Link>
    </div>
  ));

  const ListDataSerie = dataSeries?.map((serie) => (
    <div key={serie.id}>
      <Link className="relative">
        <img
          loading="lazy"
          src={imageURL + serie.poster_path}
          alt={serie.name}
          className="object-contain w-1/2 rounded-md shadow-lg"
        />
      </Link>
    </div>
  ));

  return (
    <div className="flex flex-col gap-5 w-full justify-center items-center">
      <h1 className="lg:text-2xl md:text-xl max-sm:text-lg text-dark dark:text-light font-medium p-3">
        {title}
      </h1>
      <div className="flex flex-wrap gap-3 justify-center items-center">
        {dataMovies ? ListDataMovies : ListDataSerie}
      </div>
    </div>
  );
}
