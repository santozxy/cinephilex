import { ListMoviesDTO } from "./moviesDTO";
import axios from "axios";

const moviesPlayingNowURL = import.meta.env.VITE_API_NOW_PLAYING;
const moviesPopularURL = import.meta.env.VITE_API_POPULAR_MOVIES;
const moviesTopRatedURL = import.meta.env.VITE_API_TOP_RATED;
const apiKey = import.meta.env.VITE_API_KEY;

export async function GetNowPlayingMovies() {
  const { data } = await axios.get<ListMoviesDTO>(
    `${moviesPlayingNowURL}?${apiKey}`
  );
  return data;
}

export async function GetPopularMovies() {
  const { data } = await axios.get<ListMoviesDTO>(
    `${moviesPopularURL}?${apiKey}`
  );
  return data;
}

export async function GetTopRatedMovies() {
  const { data } = await axios.get<ListMoviesDTO>(
    `${moviesTopRatedURL}?${apiKey}`
  );
  return data;
}

export async function GetMovieDetails(id: number) {
  const { data } = await axios.get<ListMoviesDTO>(
    `${moviesTopRatedURL}${id}?${apiKey}`
  );
  return data;
}
