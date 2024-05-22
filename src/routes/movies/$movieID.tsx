import { GetDetailMovie } from "@services/movies/queries";
import { createFileRoute } from "@tanstack/react-router";
import { queryClient } from "@utils";

export const Route = createFileRoute("/movies/$movieID")({
  loader: ({ params }) => {
    const data = queryClient.ensureQueryData(GetDetailMovie(params.movieID));
    return data;
  },
  component: () => <DetailMovie />,
});

function DetailMovie() {
  const data = Route.useLoaderData();
  return (
    <div className="w-full h-full flex flex-col p-4 mt-24">
      <h1>Detail Movie</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
