import { fetchServer } from "@/api/fetchServer";
import { AllDTO } from "./types";

export async function getAllTrendingDay() {
  const data: AllDTO = await fetchServer(`/trending/all/day?`, {
    next: {
      revalidate: 60 * 60 * 24,
    },
  });
  return data;
}

export async function getTrendingWithHighPopularityWeek() {
  const data: AllDTO = await fetchServer(`/trending/all/week?`, {
    next: {
      revalidate: 60 * 60 * 24,
    },
  });
  const dataWithOverviews = data.results.filter((movie) => movie.overview);
  return dataWithOverviews;
}
