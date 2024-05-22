import { queryOptions, useQuery } from "@tanstack/react-query";
import {
  getSearchMovie,
  getTopRatedMovies,
  getPopularMovies,
  getNowPlayingMovies,
  getMovieDetail,
} from "./movies";

export const SearchMovies = (search: string) => {
  return useQuery({
    queryKey: ["searchMovie", search],
    queryFn: () => getSearchMovie(search),
    enabled: search.length > 0,
  });
};

export const TopRatedMovies = () => {
  return useQuery({
    queryKey: ["topRatedMovie"],
    queryFn: () => getTopRatedMovies(),
  });
};
export const PopularMovies = () => {
  return useQuery({
    queryKey: ["popularMovie"],
    queryFn: () => getPopularMovies(),
  });
};

export const NowPlayingMovies = () =>
  useQuery({
    queryKey: ["nowPlayingMovie"],
    queryFn: () => getNowPlayingMovies(),
  });

export function GetDetailMovie(id: string) {
  return queryOptions({
    queryKey: ["detailMovie", id],
    queryFn: () => getMovieDetail(id),
  });
}
