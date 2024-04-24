import { useQuery } from "@tanstack/react-query";
import { CarrouselCardsSerie, Loading } from "@components";
import { Separator } from "@components";
import { getPopularSeries, getTopRatedSeries } from "../services/series/series";

export function Series() {
  const topRatedSeries = useQuery({
    queryKey: ["topRatedSeries"],
    queryFn: () => getTopRatedSeries(),
  });
  const popularSeries = useQuery({
    queryKey: ["popularSeries"],
    queryFn: () => getPopularSeries(),
  });

  return (
    <div className="w-full h-full flex flex-col p-5 mt-24">
      {popularSeries.isLoading ? (
        <Loading />
      ) : (
        popularSeries.data && (
          <CarrouselCardsSerie
            title="Popular Series"
            data={popularSeries.data?.results ?? []}
          />
        )
      )}
      <Separator />
      {topRatedSeries.isLoading ? (
        <Loading />
      ) : (
        topRatedSeries.data && (
          <CarrouselCardsSerie
            title="Top Rated Series"
            data={topRatedSeries.data?.results ?? []}
          />
        )
      )}
    </div>
  );
}
