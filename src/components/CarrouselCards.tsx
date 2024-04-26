import { Link } from "@tanstack/react-router";
import { Movie } from "../services/movies/moviesDTO";
import { Serie } from "../services/series/seriesDTO";
// Import Swiper React components
import { Swiper,  SwiperSlide } from "swiper/react";

import { Navigation, Pagination } from "swiper/modules";

interface Props {
  title: string;
  dataMovie?: Movie[];
  dataSerie?: Serie[];
}

const imageURL = import.meta.env.VITE_IMG_JPG;

export default function CarrouselCards({
  title = "",
  dataMovie,
  dataSerie,
}: Props) {
  const ListDataMovie = dataMovie?.map((movie) => (
    <SwiperSlide key={movie.id}>
      <Link className="relative">
        <img
          loading="lazy"
          src={imageURL + movie.poster_path}
          alt={movie.title}
          className="object-contain w-full rounded-md shadow-lg border border-gray-600"
        />
      </Link>
    </SwiperSlide>
  ));

  const ListDataSerie = dataSerie?.map((serie) => (
    <SwiperSlide key={serie.id}>
      <Link className="relative">
        <img
          loading="lazy"
          src={imageURL + serie.poster_path}
          alt={serie.name}
          className="object-contain w-full rounded-md shadow-lg border border-gray-600"
        />
      </Link>
    </SwiperSlide>
  ));

  return (
    <div>
      <h1 className="lg:text-2xl md:text-xl max-sm:text-lg text-dark dark:text-light font-medium p-3">
        {title}
      </h1>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={true}
        loop={true}
        breakpoints={{
          "@0.00": {
            slidesPerView: 2.3,
            spaceBetween: 10,
          },
          "@0.60": {
            slidesPerView: 3.3,
            spaceBetween: 10,
          },
          "@1.00": {
            slidesPerView: 4.3,
            spaceBetween: 20,
          },
          "@1.50": {
            slidesPerView: 6.3,
            spaceBetween: 30,
          },
        }}
        spaceBetween={30}
        className="mySwiper"
      >
        {dataMovie ? ListDataMovie : ListDataSerie}
      </Swiper>
    </div>
  );
}
