import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getTrendingDayMovies } from "@/domain/movies/requests";
import { env } from "@/env";
import Image from "next/image";

export async function FeaturedMoviesCarousel() {
  const featuredMovies = await getTrendingDayMovies();

  return (
    <Carousel className="w-full max-w-7xl mx-auto ">
      <CarouselContent className="rounded-md">
        {featuredMovies.results.map((movie) => (
          <CarouselItem key={movie.id} >
            <Card className="border-none">
              <CardContent className="p-0 rounded-md relative aspect-[16/9] overflow-hidden">
                <Image
                  src={`${env.NEXT_PUBLIC_IMAGE_ORIGINAL}${movie.backdrop_path}`}
                  alt={movie.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h2 className="text-3xl md:text-4xl font-bold mb-2">
                    {movie.title}
                  </h2>
                  <p className="text-sm md:text-base mb-2 line-clamp-2 md:line-clamp-3 max-w-2xl">
                    {movie.overview}
                  </p>
                  <div className="flex items-center space-x-4">
                    <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-sm">
                      Genero
                    </span>
                    <span className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-yellow-400 mr-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      {movie.vote_average}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4" />
      <CarouselNext className="right-4" />
    </Carousel>
  );
}
