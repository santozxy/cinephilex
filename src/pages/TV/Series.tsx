import { useQuery } from "@tanstack/react-query";
import { CarrouselCards, Loading } from "@components";
import { Separator } from "@components";
import {
  getPopularSeries,
  getTopRatedSeries,
} from "../../services/series/series";

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
          <CarrouselCards
            title="Popular Series"
            dataSerie={popularSeries.data?.results ?? []}
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
