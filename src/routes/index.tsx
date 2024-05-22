import { createFileRoute } from "@tanstack/react-router";

import { useQuery } from "@tanstack/react-query";
import { Loading, CarrouselCards, CarrouselSlide } from "@components";
import { Separator } from "@components";
import { getTopRatedSeries } from "@services/series/series";
import { PopularMovies, NowPlayingMovies } from "@services/movies/queries";

export const Route = createFileRoute("/")({
  component: () => <Home />,
});

function Home() {
  const topRatedSeries = useQuery({
    queryKey: ["topRatedSeries"],
    queryFn: () => getTopRatedSeries(),
  });
  const popularMovies = PopularMovies();
  const nowPlayingMovies = NowPlayingMovies();

  return (
    <div className="w-full h-full flex flex-col p-5">
      <div className="mb-5">
        {nowPlayingMovies.isLoading ? (
          <Loading />
        ) : (
          nowPlayingMovies.data && (
            <CarrouselSlide data={nowPlayingMovies.data?.results ?? []} />
          )
        )}
      </div>

      {popularMovies.isLoading ? (
        <Loading />
      ) : (
        popularMovies.data && (
          <CarrouselCards
            title="Popular Movies"
            dataMovie={popularMovies.data?.results ?? []}
          />
        )
      )}
      <Separator />
      {topRatedSeries.isLoading ? (
        <Loading />
      ) : (
        topRatedSeries.data && (
          <CarrouselCards
            title="Top Rated Series"
            dataSerie={topRatedSeries.data?.results ?? []}
          />
        )
      )}
    </div>
  );
}
