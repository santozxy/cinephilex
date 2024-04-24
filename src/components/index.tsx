import React from "react";
import { Header } from "./Header";
import { SearchBar } from "./SearchBar";
import { Loading } from "./Loading";
import { Separator } from "./Separator";

const Layout = React.lazy(() => import("./Layout"));
const CarrouselCardsMovie = React.lazy(
  () => import("./Movies/CarrouselCardsMovie")
);
const CarrouselSlideMovie = React.lazy(
  () => import("./Movies/CarrouselSlideMovie")
);

const CarrouselCardsSerie = React.lazy(
  () => import("./Series/CarrouselCardsSerie")
);
const CarrouselSlideSerie = React.lazy(
  () => import("./Series/CarrouselSlideSerie")
);

export {
  Header,
  SearchBar,
  Layout,
  Loading,
  Separator,
  CarrouselCardsMovie,
  CarrouselSlideMovie,
  CarrouselCardsSerie,
  CarrouselSlideSerie,
};
