import React from "react";
import { Header } from "./Header";
import { SearchBar } from "./SearchBar";
import { Loading } from "./Loading";
import { Separator } from "./Separator";
import { ThemeSwitcher } from "./SwitcherTheme";

const CarrouselSlide = React.lazy(() => import("./CarrouselSlide"));

const CarrouselCards = React.lazy(() => import("./CarrouselCards"));

const ListCardSearch = React.lazy(() => import("./ListCardSearch"));

export {
  Header,
  SearchBar,
  Loading,
  Separator,
  CarrouselSlide,
  CarrouselCards,
  ListCardSearch,
  ThemeSwitcher,
};
