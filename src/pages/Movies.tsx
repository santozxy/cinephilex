import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
} from "../services/movies/movies";
import { useQuery } from "@tanstack/react-query";
import { CarrouselCards, Loading } from "@components";
import { Separator } from "@components";

export function Movies() {
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
      {nowPlayingMovies.isLoading ? (
        <Loading />
      ) : (
        nowPlayingMovies.data && (
          <CarrouselCards
            title="Now Playing Movies"
            data={nowPlayingMovies.data.results ?? []}
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
            data={topRatedMovies.data.results ?? []}
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
            data={popularMovies.data.results ?? []}
          />
        )
      )}
    </div>
  );
}
