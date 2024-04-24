import React from "react";
import { Header } from "./Header";
import { SearchBar } from "./SearchBar";
import { Loading } from "./Loading";
import { Separator } from "./Separator";

const Layout = React.lazy(() => import("./Layout"));

const CarrouselSlide = React.lazy(() => import("./CarrouselSlide"));

const CarrouselCards = React.lazy(() => import("./CarrouselCards"));

export {
  Header,
  SearchBar,
  Layout,
  Loading,
  Separator,
  CarrouselSlide,
  CarrouselCards,
};
