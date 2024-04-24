import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
} from "../services/movies/movies";
import { useQuery } from "@tanstack/react-query";
import { CarrouselCards, CarrouselSlide, Loading } from "@components";
import { Separator } from "@components";

export function Home() {
  const topRatedMovies = useQuery({
    queryKey: ["topRatedMovies"],
    queryFn: () => getTopRatedMovies(),
    enabled: true,
    initialData: undefined,
    retry: false,
    refetchOnWindowFocus: false,
    refetchInterval: false,
  });
  const popularMovies = useQuery({
    queryKey: ["popularMovies"],
    queryFn: () => getPopularMovies(),
    enabled: true,
    initialData: undefined,
    retry: false,
    refetchOnWindowFocus: false,
    refetchInterval: false,
  });
  const nowPlayingMovies = useQuery({
    queryKey: ["nowPlayingMovies"],
    queryFn: () => getNowPlayingMovies(),
    enabled: true,
    initialData: undefined,
    retry: false,
    refetchOnWindowFocus: false,
    refetchInterval: false,
  });

  return (
    <div className="w-full h-full flex flex-col p-4 mt-24">
      {nowPlayingMovies.isLoading ? (
        <Loading />
      ) : (
        nowPlayingMovies.data && (
          <CarrouselSlide
            data={nowPlayingMovies.data?.results ?? []}
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
            data={popularMovies.data?.results ?? []}
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
            data={topRatedMovies.data?.results ?? []}
          />
        )
      )}
    </div>
  );
}
