import { fetchServer } from "@/api/fetchServer";
import { ApiResults } from "@/api/types";
import { Movie } from "./types";
import { Videos } from "../all/types";

export async function getNowPlayingMovies() {
  const data = await fetchServer(`/movie/now_playing?`, {
    next: {
      revalidate: 60 * 60 * 24,
    },
  });
  return data;
}

export async function getPopularMovies() {
  const data:ApiResults<Movie[]> = await fetchServer(`/movie/popular?page=1`, {
    next: {
      revalidate: 60 * 60 * 24,
    },
  });
  return data.results;
}

export async function getTopRatedMovies() {
  const data = await fetchServer(`/movie/top_rated?`, {
    next: {
      revalidate: 60 * 60 * 24,
    },
  });
  return data;
}

export async function getBrazilianPopularMovies() {
  const data = await fetchServer(
    `/discover/movie?sort_by=popularity.desc&with_origin_country=BR`,
    {
      next: {
        revalidate: 60 * 60 * 24,
      },
    }
  );
  return data;
}

export async function getTrendingDayMovies() {
  const data: ApiResults<Movie[]> = await fetchServer(
    `/trending/movie/day?language=pt-BR`,
    {
      next: {
        revalidate: 60 * 60 * 24,
      },
    }
  );
  return data;
}

export async function getGenreMovies(id: string) {
  const data = await fetchServer(`/discover/movie?with_genres=${id}`, {
    next: {
      revalidate: 60 * 60 * 24,
    },
  });
  return data;
}

export async function getCreditsMovie(id: string) {
  const data = await fetchServer(`/movie/${id}/credits?`, {
    next: {
      revalidate: 60 * 60,
    },
  });
  return data;
}

export async function getMovieById(id: string) {
  const data = await fetchServer(`/movie/${id}?`, {
    next: {
      revalidate: 60 * 60,
    },
  });
  return data;
}

export async function getSimilarsMovie(id: string) {
  const data = await fetchServer(`/movie/${id}/similar?`, {
    next: {
      revalidate: 60 * 60,
    },
  });
  return data;
}

export async function getRecommendationsMovie(id: string) {
  const data = await fetchServer(
    `/movie/${id}/recommendations?include_adult=false`,
    {
      next: {
        revalidate: 60 * 60,
      },
    }
  );
  return data;
}

export async function getReviewsMovie(id: string) {
  const data = await fetchServer(`/movie/${id}/reviews?language=`, {
    next: {
      revalidate: 60 * 60,
    },
  });
  return data;
}

export async function getVideosMovie(id: string) {
  const data: Videos = await fetchServer(`/movie/${id}/videos?language=`, {
    next: {
      revalidate: 60 * 60,
    },
  });
  const videos = data.results.filter(
    (video) => video.type === "Trailer" && video.site === "YouTube"
  );
  const videosBR = videos.filter((video) => video.iso_3166_1 === "BR");
  const videoUS = videos.filter((video) => video.iso_3166_1 === "US");
  const videosTotal = [...videosBR, ...videoUS];
  return videosTotal;
}

export async function getWacthProvidersMovie(id: string) {
  const data = await fetchServer(`/movie/${id}/watch/providers?`, {
    next: {
      revalidate: 60 * 60,
    },
  });
  return data;
}

export async function getTranslationsMovie(id: string) {
  const data = await fetchServer(`/movie/${id}/translations?`, {
    next: {
      revalidate: 60 * 60,
    },
  });
  return data;
}

export async function getImagesMovie(id: string) {
  const data = await fetchServer(
    `/movie/${id}/images?include_image_language=pt`,
    {
      next: {
        revalidate: 60 * 60,
      },
    }
  );
  return data;
}

export async function getWatchMovieProviders(id: string) {
  const data = await fetchServer(`/movie/${id}/watch/providers?language=`, {
    next: {
      revalidate: 60 * 60,
    },
  });
  return data.results.BR;
}
