"use client";

import Image from "next/image";
import Link from "next/link";
import { Popcorn } from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

interface BackdropItem {
  title?: string;
  name?: string;
  backdrop_path: string;
  overview: string;
  id: number;
  media_type?: string;
}

interface BackdropCardProps {
  items: BackdropItem[];
  showCardInfo?: boolean;
  path?: string;
}

function generateLink(item: BackdropItem) {
  if (item.media_type === "movie") {
    return `/movies/${item.id}`;
  }
  if (item.media_type === "tv") {
    return `/series/${item.id}`;
  }
  if (item.media_type === "person") {
    return `/persons/${item.id}`;
  }
  return "";
}

export function BackdropCard({
  items,
  showCardInfo = true,
  path,
}: BackdropCardProps) {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 5000,
          jump: false,
        }),
      ]}
      opts={{
        loop: true,
      }}
      className="w-full max-sm:h-72 md:h-[40rem] lg:h-[45rem]"
    >
      <CarouselContent>
        {items?.map((item) => (
          <CarouselItem key={item.id}>
            <Card className="border-none">
              <CardContent className="p-0 relative">
                {item.backdrop_path && (
                  <Image
                    priority
                    src={
                      process.env.NEXT_PUBLIC_IMAGE_ORIGINAL +
                      item.backdrop_path
                    }
                    width={1280}
                    height={720}
                    alt={item.title || item.name || "Sem título"}
                    className="object-cover object-center w-full h-full max-sm:h-72 md:h-[40rem] lg:h-[45rem]"
                  />
                )}
                <Link
                  className="absolute inset-0 z-10"
                  href={path ? `${path}${item.id}` : generateLink(item)}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-background"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"></div>
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background"></div>
                </Link>
                {showCardInfo && (
                  <div className="absolute sm:top-20 top-4 max-sm:left-0 left-10 flex items-center justify-center z-20">
                    <div className="flex flex-col gap-4 sm:w-96 p-2 rounded-lg ">
                      <div className="flex sm:flex-col items-start gap-4">
                        <Popcorn size={24} className="text-primary" />
                        <h1 className="sm:text-xl uppercase font-extrabold">
                          {item.title || item.name || "Sem título"}
                        </h1>
                      </div>
                      <p className="text-zinc-300 text-justify max-sm:hidden">
                        {item.overview.slice(0, 202) + "..."}
                      </p>
                      <Link
                        href={path ? `${path}${item.id}` : generateLink(item)}
                      >
                        <Button>
                          <span className="font-semibold max-sm:text-sm">
                            Ver detalhes
                          </span>
                        </Button>
                      </Link>
                    </div>
                  </div>
                )}
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
