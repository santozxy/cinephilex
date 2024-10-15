import { BackdropCard } from "../components/backdrop-card";
import { getTrendingWithHighPopularityWeek } from "@/domain/all/requests";
import { CarouselCards } from "../components/carousel-card";
import { getPopularMovies } from "@/domain/movies/requests";

export default async function Home() {
  const featuredMoviesAndSeries = await getTrendingWithHighPopularityWeek();
  const popularMovies = await getPopularMovies();
  return (
    <main className="flex flex-col">
      <BackdropCard items={featuredMoviesAndSeries} />
      <CarouselCards items={popularMovies} />
    </main>
  );
}
