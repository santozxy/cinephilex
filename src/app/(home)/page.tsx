import { getTrendingDayMovies } from "@/domain/movies/requests";
import {FeaturedMoviesCarousel} from "./components/featured-movies-carousel";

export default async function Home() {
  const tredingDayMovies = await getTrendingDayMovies();
  console.log(tredingDayMovies);
  return (
    <main>
      <h1>Hello Word</h1>
      <FeaturedMoviesCarousel />
    </main>
  );
}
