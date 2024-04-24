import {
  getNowPlayingMovies,
  getPopularMovies,
} from "../services/movies/movies";
import { useQuery } from "@tanstack/react-query";
import {
  CarrouselCardsMovie,
  CarrouselSlideMovie,
  CarrouselCardsSerie,
  Loading,
} from "@components";
import { Separator } from "@components";
import { getTopRatedSeries } from "../services/series/series";

export function Home() {
  const topRatedSeries = useQuery({
    queryKey: ["topRatedSeries"],
    queryFn: () => getTopRatedSeries(),
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
    <div className="w-full h-full flex flex-col p-5 mt-24">
      <div className="mb-5">
        {nowPlayingMovies.isLoading ? (
          <Loading />
        ) : (
          nowPlayingMovies.data && (
            <CarrouselSlideMovie data={nowPlayingMovies.data?.results ?? []} />
          )
        )}
      </div>

      {popularMovies.isLoading ? (
        <Loading />
      ) : (
        popularMovies.data && (
          <CarrouselCardsMovie
            title="Popular Movies"
            data={popularMovies.data?.results ?? []}
          />
        )
      )}
      <Separator />
      {topRatedSeries.isLoading ? (
        <Loading />
      ) : (
        topRatedSeries.data && (
          <CarrouselCardsSerie
            title="Top Rated Series"
            data={topRatedSeries.data?.results ?? []}
          />
        )
      )}
    </div>
  );
}
