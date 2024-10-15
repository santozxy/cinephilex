
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Movie } from "@/domain/movies/types";
import { Serie } from "@/domain/series/types";

type Item = Movie | Serie;

interface CarouselCardsProps {
  data: Item[];
}

function generateLink(item: Item) {
  if ("tagline" in item) {
    return `/movies/${item.id}`;
  } else {
    return `/series/${item.id}`;
  }
}

export function CarouselCards({ data }: CarouselCardsProps) {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-[90%] max-sm:w-full mx-auto"
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {data.map((item) => (
          <CarouselItem
            key={item.id}
            className="pl-2 md:pl-4 basis-1/3 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-[12%]"
          >
            <Link href={generateLink(item)}>
              <Card className="overflow-hidden transition-all duration-300 ease-in-out hover:scale-105">
                <CardContent className="p-0">
                  <div className="relative aspect-[2/3]">
                    <Image
                      src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                      alt={item.title || item.name || "Poster"}
                      layout="fill"
                      objectFit="cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-60 transition-all duration-300 ease-in-out flex flex-col justify-end p-2 text-white opacity-0 hover:opacity-100">
                      <h3 className="font-semibold text-xs sm:text-sm truncate">
                        {item.title || item.name}
                      </h3>
                      <div className="flex data-center mt-1">
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 mr-1" />
                        <span className="text-xs">
                          {item.vote_average.toFixed(1)}
                        </span>
                      </div>
                      <Badge
                        variant="secondary"
                        className="mt-1 text-[10px] sm:text-xs"
                      >
                        {item.release_date
                          ? new Date(item.release_date).getFullYear()
                          : "N/A"}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
