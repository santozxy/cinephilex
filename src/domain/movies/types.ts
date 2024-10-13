export interface Movie {
    adult: boolean;
    name?: string;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    tagline: string;
    genres: {
      id: number;
      name: string;
    }[];
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }
  