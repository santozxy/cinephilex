import {
  getNowPlayingMovies,
  getPopularMovies,
  getSearchMovie,
  getTopRatedMovies,
} from "../../services/movies/movies";
import { useQuery } from "@tanstack/react-query";
import {
  Loading,
  CarrouselCards,
  SearchBar,
  ListCardSearch,
} from "@components";
import { Separator } from "@components";
import { useState } from "react";

export function Movies() {
  const [search, setSearch] = useState("");
  const searchMovies = useQuery({
    queryKey: ["searchMovie", search],
    queryFn: () => getSearchMovie(search),
    enabled: search.length > 0,
  });

  const topRatedMovies = useQuery({
    queryKey: ["topRatedMovie"],
    queryFn: () => getTopRatedMovies(),
  });

  const popularMovies = useQuery({
    queryKey: ["popularMovie"],
    queryFn: () => getPopularMovies(),
  });
  const nowPlayingMovies = useQuery({
    queryKey: ["nowPlayingMovie"],
    queryFn: () => getNowPlayingMovies(),
  });

  return (
    <div className="w-full h-full flex flex-col p-4 mt-24">
      <SearchBar search={search} setSearch={setSearch} />
      {searchMovies.isLoading ? (
        <Loading />
      ) : searchMovies.data ? (
        <div className="flex justify-center items-center">
          <ListCardSearch
            title="Search Movies"
            dataMovies={searchMovies.data.results ?? []}
          />
        </div>
      ) : (
        search.length > 0 && (
          <h1 className="text-2xl font-semibold text-primary text-center p-5  max-sm:text-lg">
            No results found
          </h1>
        )
      )}
      <Separator />
      {nowPlayingMovies.isLoading ? (
        <Loading />
      ) : (
        nowPlayingMovies.data && (
          <CarrouselCards
            title="Now Playing Movies"
            dataMovie={nowPlayingMovies.data.results ?? []}
          />
        )
      )}
      <Separator />
      {topRatedMovies.isLoading ? (
        <Loading />
      ) : (
        topRatedMovies.data && (
          <CarrouselCards
            title="Top rated movies"
            dataMovie={topRatedMovies.data.results ?? []}
          />
        )
      )}
      <Separator />
      {popularMovies.isLoading ? (
        <Loading />
      ) : (
        popularMovies.data && (
          <CarrouselCards
            title="Popular Movies"
            dataMovie={popularMovies.data.results ?? []}
          />
        )
      )}
    </div>
  );
}
