import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="flex flex-col">
      <Skeleton className="h-56 w-full" />
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-[90%] max-sm:w-full mx-auto"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="pl-2 md:pl-4 basis-1/3 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-[12%]"
            >
              <Skeleton className="h-72 w-full" />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </main>
  );
}
