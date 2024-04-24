import { getTopRatedMovies } from "../services/movies/movies";
import { useQuery } from "@tanstack/react-query";
import {ListCards} from "@components";

export function Home() {
  const topRatedMovies = useQuery({
    queryKey: ["topRatedMovies"],
    queryFn: () => getTopRatedMovies(),
    enabled: true,
    initialData: undefined,
    retry: false,
    refetchOnWindowFocus: false,
    refetchInterval: false,
  });

  if (topRatedMovies.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-light w-full h-full">
      {topRatedMovies.data && (
        <ListCards
          title="Top Rated Movies"
          data={topRatedMovies.data?.results ?? []}
        />
      )}
    </div>
  );
}
