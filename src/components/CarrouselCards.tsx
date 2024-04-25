import { Link } from "@tanstack/react-router";
import { Movie } from "../services/movies/moviesDTO";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Serie } from "../services/series/seriesDTO";
interface Props {
  title: string;
  dataMovie?: Movie[];
  dataSerie?: Serie[];
  swipeable?: boolean;
  showDots?: boolean;
  autoplay?: boolean;
}

const imageURL = import.meta.env.VITE_IMG_JPG;

export default function CarrouselCards({
  title = "",
  dataMovie,
  dataSerie,
  showDots = false,
  swipeable = true,
}: Props) {
  const ListDataMovie = dataMovie?.map((movie) => (
    <div key={movie.id}>
      <Link className="relative">
        <img
          loading="lazy"
          src={imageURL + movie.poster_path}
          alt={movie.title}
          className="object-contain w-full rounded-md shadow-lg border border-gray-600"
        />
      </Link>
    </div>
  ));

  const ListDataSerie = dataSerie?.map((serie) => (
    <div key={serie.id}>
      <Link className="relative">
        <img
          loading="lazy"
          src={imageURL + serie.poster_path}
          alt={serie.name}
          className="object-contain w-full rounded-md shadow-lg border border-gray-600"
        />
      </Link>
    </div>
  ));

  return (
    <div>
      <h1 className="lg:text-2xl md:text-xl max-sm:text-lg text-dark dark:text-light font-medium p-3">
        {title}
      </h1>
      <Carousel
        swipeable={swipeable}
        draggable={false}
        showDots={showDots}
        responsive={{
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4,
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
          },
        }}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        keyBoardControl={true}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="pr-4"
      >
        {dataMovie ? ListDataMovie : ListDataSerie}
      </Carousel>
    </div>
  );
}
