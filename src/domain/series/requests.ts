import { fetchServer } from "@/api/fetchServer";
import {
  Credits,
  Images,
  Reviews,
  Translations,
  Videos,
  WatchProviders,
} from "../all/types";

import { SeasonDetails, Serie, SerieDetails } from "./types";
import { ApiResults } from "@/api/types";

export async function getPopularSeries() {
  const data: ApiResults<Serie[]> = await fetchServer(`/tv/popular?`, {
    next: {
      revalidate: 60 * 60 * 24,
    },
  });
  return data;
}

export async function getTopRatedSeries() {
  const data: ApiResults<Serie[]> = await fetchServer(`/tv/top_rated?`, {
    next: {
      revalidate: 60 * 60 * 24,
    },
  });
  return data;
}

export async function getTrendingDaySeries() {
  const data: ApiResults<Serie[]> = await fetchServer(`/trending/tv/day?`, {
    next: {
      revalidate: 60 * 60 * 24,
    },
  });
  return data;
}

export async function getSeriesById(id: string) {
  const data: SerieDetails = await fetchServer(`/tv/${id}?`, {
    next: {
      revalidate: 60 * 60 * 24,
    },
  });
  return data;
}

export async function getSeriesByGenre(genre: string, page?: number) {
  const pagination = page ?? 1;
  const data: ApiResults<Serie[]> = await fetchServer(
    `/discover/tv?with_genres=${genre}&page=${pagination}`,
    {
      next: {
        revalidate: 60 * 60 * 24,
      },
    }
  );
  const seriesWithOverviews = data.results.filter(
    (serie) => serie.overview.length > 0
  );
  const newData = {
    ...data,
    results: seriesWithOverviews,
  };

  return newData;
}

export async function getSerieWithHighPopularity() {
  const data: ApiResults<Serie[]> = await fetchServer(`/tv/popular?`, {
    next: {
      revalidate: 60 * 60 * 24,
    },
  });
  const serieWithOverviews = data.results.filter(
    (serie) => serie.overview.length > 10
  );
  const randomIndex = Math.floor(Math.random() * serieWithOverviews.length);
  const serie = serieWithOverviews[randomIndex];
  return serie;
}

export async function getWatchSerieProviders(id: string) {
  const data: WatchProviders = await fetchServer(
    `/tv/${id}/watch/providers?language=`,
    {
      next: {
        revalidate: 60 * 60 * 24,
      },
    }
  );
  return data.results.BR;
}

export async function getVideosSerie(id: string) {
  const data: Videos = await fetchServer(`/tv/${id}/videos?language=`, {
    next: {
      revalidate: 60 * 60 * 24,
    },
  });
  const videos = data.results.filter(
    (video) =>
      (video.type === "Trailer" && video.site === "YouTube") ||
      video.type === "Opening Credits"
  );
  const videosBR = videos.filter((video) => video.iso_3166_1 === "BR");
  const videoUS = videos.filter((video) => video.iso_3166_1 === "US");
  const videosTotal = [...videosBR, ...videoUS];
  return videosTotal;
}

export async function getReviewsSerie(id: string) {
  const data: Reviews = await fetchServer(`/tv/${id}/reviews?language=`, {
    next: {
      revalidate: 60 * 60 * 24,
    },
  });
  return data;
}

export async function getImagesSerie(id: string) {
  const data: Images = await fetchServer(
    `/tv/${id}/images?include_image_language=pt`,
    {
      next: {
        revalidate: 60 * 60 * 24,
      },
    }
  );
  return data;
}

export async function getTranslationsSerie(id: string) {
  const data: Translations = await fetchServer(`/tv/${id}/translations?`, {
    next: {
      revalidate: 60 * 60 * 24,
    },
  });
  return data;
}

export async function getRecommendationsSerie(id: string) {
  const data: ApiResults<Serie[]> = await fetchServer(
    `/tv/${id}/recommendations?`,
    {
      next: {
        revalidate: 60 * 60 * 24,
      },
    }
  );

  return data;
}

export async function getCreditsSerie(id: string) {
  const data: Credits = await fetchServer(`/tv/${id}/credits?`, {
    next: {
      revalidate: 60 * 60 * 24,
    },
  });
  return data;
}

export async function getSeasonDetails(id: string, seasonNumber: string) {
  const data: SeasonDetails = await fetchServer(
    `/tv/${id}/season/${seasonNumber}?`,
    {
      next: {
        revalidate: 60 * 60 * 24,
      },
    }
  );
  return data;
}
