import { ListMoviesDTO } from "./moviesDTO";
import axios from "axios";

const moviesPlayingNowURL = import.meta.env.VITE_API_NOW_PLAYING;
const moviesPopularURL = import.meta.env.VITE_API_POPULAR_MOVIES;
const moviesTopRatedURL = import.meta.env.VITE_API_TOP_RATED;
const movieDetail = import.meta.env.VITE_API_SERIE_DETAIL;
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

export async function getMovieDetails(id: number) {
  const { data } = await axios.get<ListMoviesDTO>(
    `${movieDetail}${id}?${apiKey}`
  );
  return data;
}
