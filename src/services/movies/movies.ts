import { ListMoviesDTO, MovieDetailDTO } from "./moviesDTO";
import axios from "axios";

const moviesPlayingNowURL = import.meta.env.VITE_API_NOW_PLAYING;
const moviesPopularURL = import.meta.env.VITE_API_POPULAR_MOVIES;
const moviesTopRatedURL = import.meta.env.VITE_API_TOP_RATED;
const movieURL = import.meta.env.VITE_API_MOVIE;
const searchMovieURL = import.meta.env.VITE_API_SEARCH_MOVIE;
const apiKey = import.meta.env.VITE_API_KEY;

export async function getNowPlayingMovies() {
  const { data } = await axios.get<ListMoviesDTO>(
    `${moviesPlayingNowURL}?${apiKey}`
  );
  return data;
}

export async function getPopularMovies() {
  const { data } = await axios.get<ListMoviesDTO>(
    `${moviesPopularURL}?${apiKey}`
  );
  return data;
}

export async function getTopRatedMovies() {
  const { data } = await axios.get<ListMoviesDTO>(
    `${moviesTopRatedURL}?${apiKey}`
  );
  return data;
}

export async function getSearchMovie(search: string) {
  const { data } = await axios.get<ListMoviesDTO>(
    `${searchMovieURL}?query=${search}&${apiKey}`
  );
  return data;
}

export async function getMovieDetail(id: string) {
  const { data } = await axios.get<MovieDetailDTO>(
    `${movieURL}${id}?${apiKey}`
  );
  return data;
}
