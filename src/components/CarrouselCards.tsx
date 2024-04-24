import { Link } from "@tanstack/react-router";
import { Movie } from "../services/movies/moviesDTO";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
interface ListCardsProps {
  title: string;
  data: Movie[];
  swipeable?: boolean;
  showDots?: boolean;
  autoplay?: boolean;
}

const imageURL = import.meta.env.VITE_IMG;

export default function ListCards({
  title = "",
  data,
  swipeable = true,
  showDots = false,
  autoplay = false,
}: ListCardsProps) {
  return (
    <div>
      <h1 className="lg:text-2xl md:text-xl max-sm:text-lg text-dark dark:text-light font-medium p-3">
        {title}
      </h1>
      <Carousel
        swipeable={swipeable}
        draggable={true}
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
        autoPlay={autoplay}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        customTransition="transition-all ease-in-out"
        transitionDuration={100}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="pr-4"
      >
        {data.map((movie) => (
          <div key={movie.id}>
            <Link className="relative">
              <img
                loading="lazy"
                src={imageURL + movie.poster_path}
                alt={movie.title}
                className="object-contain w-full rounded-md shadow-lg transition-all duration-400 ease-in-out transform hover:scale-105"
              />
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
