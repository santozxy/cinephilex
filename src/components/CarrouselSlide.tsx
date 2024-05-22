import { Link } from "@tanstack/react-router";
import { Movie } from "../services/movies/moviesDTO";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCreative,
  Autoplay,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Film, Star } from "lucide-react";

interface Props {
  data: Movie[];
  swipeable?: boolean;
  showDots?: boolean;
  autoplay?: boolean;
}

const imageURL = import.meta.env.VITE_IMG;
export default function CarrouselSlide({ data }: Props) {
  return (
    <div className="relative">
      <Swiper
        spaceBetween={20}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        effect={"creative"}
        creativeEffect={{
          prev: {
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        {data.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Link
              className="relative"
              params={{ movieID: String(movie.id) }}
              to="/movies/$movieID"
            >
              <img
                loading="lazy"
                src={imageURL + movie.backdrop_path}
                alt={movie.title}
                className=" object-cover w-full md:h-[32rem] lg:h-[35rem] max-sm:h-64 bg-center rounded-md shadow-lg "
              />

              <div className="absolute left-0 right-0 bottom-0  bg-dark bg-opacity-60 py-5 px-3 max-sm:py-2">
                <div className="flex items-center max-sm:justify-between pb-2 gap-x-5 sm:border-b border-gray-600">
                  <div className="flex gap-x-2  items-center">
                    <Film className="text-light max-sm:size-4" />
                    <p className="text-primary font-semibold text-base max-sm:text-sm">
                      {movie.title}
                    </p>
                  </div>
                  <div className="flex gap-x-2 justify-center items-center">
                    <Star className="text-light max-sm:size-4" />
                    <p className="text-primary font-semibold text-base max-sm:text-sm">
                      {movie.vote_average.toFixed(1)}
                    </p>
                  </div>
                </div>
                <div className="text-light pt-2 text-sm max-sm:text-xs max-sm:hidden">
                  {movie.overview}
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
