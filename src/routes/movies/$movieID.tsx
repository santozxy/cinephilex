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
    <div className="w-full h-full flex flex-col ">
      <div className="relative">
        <img
          src={import.meta.env.VITE_IMG + data.backdrop_path}
          alt={data.title}
          className="object-cover w-full md:h-[32rem] lg:h-[35rem] max-sm:h-64 bg-center rounded-md object-center "
          loading="lazy"
        />
        <div className="absolute bottom-0 object-cover w-full md:h-[32rem] lg:h-[35rem] max-sm:h-64 bg-center rounded-md  bg-gradient-to-t dark:from-dark from-light from-10% "></div>
        <div className="absolute bottom-8 left-6">
          <h1 className="text-2xl font-semibold text-white">{data.title}</h1>
        </div>
      </div>
      <div className="p-4">
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  );
}
