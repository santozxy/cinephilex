import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
} from "../services/movies/movies";
import { useQuery } from "@tanstack/react-query";
import { CarrouselCards, CarrouselSlide, Loading } from "@components";
import { Separator } from "@components";
import { useMemo, useState } from "react";
import { Movie } from "../services/movies/moviesDTO";

export function Home() {
  const [topRatedMoviesData, setTopRatedMoviesData] = useState<Movie[]>([]);
  const [nowPlayingMoviesData, setNowPlayingMoviesData] = useState<Movie[]>([]);
  const [popularMoviesData, setPopularMoviesData] = useState<Movie[]>([]);
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

  useMemo(() => {
    if (nowPlayingMovies.data) {
      setNowPlayingMoviesData(nowPlayingMovies.data.results);
    }
    if (popularMovies.data) {
      setPopularMoviesData(popularMovies.data.results);
    }
    if (topRatedMovies.data) {
      setTopRatedMoviesData(topRatedMovies.data.results);
    }
  }, [nowPlayingMovies.data, popularMovies.data, topRatedMovies.data]);

  return (
    <div className="w-full h-full flex flex-col p-4 mt-24">
      {nowPlayingMovies.isLoading ? (
        <Loading />
      ) : (
        nowPlayingMovies.data && (
          <CarrouselSlide data={nowPlayingMoviesData ?? []} />
        )
      )}
      <Separator />
      {popularMovies.isLoading ? (
        <Loading />
      ) : (
        popularMovies.data && (
          <CarrouselCards
            title="Popular Movies"
            data={popularMoviesData ?? []}
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
            data={topRatedMoviesData ?? []}
          />
        )
      )}
    </div>
  );
}
