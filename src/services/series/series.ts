import { ListSeriesDTO } from "./seriesDTO";
import axios from "axios";

const seriesPlayingNowURL = import.meta.env.VITE_API_NOW_PLAYING;
const seriesPopularURL = import.meta.env.VITE_API_POPULAR_SERIES;
const seriesTopRatedURL = import.meta.env.VITE_API_TOP_RATED;
const apiKey = import.meta.env.VITE_API_KEY;

export async function getNowPlayingSeries() {
  const { data } = await axios.get<ListSeriesDTO>(
    `${seriesPlayingNowURL}?${apiKey}`
  );
  return data;
}

export async function getPopularSeries() {
  const { data } = await axios.get<ListSeriesDTO>(
    `${seriesPopularURL}?${apiKey}`
  );
  return data;
}

export async function getTopRatedSeries() {
  const { data } = await axios.get<ListSeriesDTO>(
    `${seriesTopRatedURL}?${apiKey}`
  );
  return data;
}

export async function getSerieDetails(id: number) {
  const { data } = await axios.get<ListSeriesDTO>(
    `${seriesTopRatedURL}${id}?${apiKey}`
  );
  return data;
}
