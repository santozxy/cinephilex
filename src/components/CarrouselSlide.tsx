import { Link } from "@tanstack/react-router";
import { Movie } from "../services/movies/moviesDTO";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
interface ListCardsProps {
  data: Movie[];
  swipeable?: boolean;
  showDots?: boolean;
  autoplay?: boolean;
}

const imageURL = import.meta.env.VITE_IMG;

export default function ListCards({
  data,
  swipeable = true,
  showDots = false,
  autoplay = true,
}: ListCardsProps) {
  return (
    <div>
      <Carousel
        swipeable={swipeable}
        draggable={true}
        showDots={showDots}
        responsive={{
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
          },
        }}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={autoplay}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        customTransition="transition-all"
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
      >
        {data.map((movie) => (
          <div key={movie.id}>
            <Link className="relative">
              <img
                loading="lazy"
                src={imageURL + movie.backdrop_path}
                alt={movie.title}
                className="object-cover w-full h-[35rem] max-sm:h-96 rounded-md shadow-lg "
              />
              <div className="absolute w-full bottom-0 left-0 right-0 bg-dark bg-opacity-60 text-light p-1 text-xs font-medium z-[99]">
                <h2 className="lg:text-2xl md:text-xl max-sm:text-lg text-dark dark:text-light font-medium p-3">
                  {movie.title}
                </h2>
              </div>
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
