import React from "react";
import { Header } from "./Header";
import { SearchBar } from "./SearchBar";
import { Loading } from "./Loading";
import { Separator } from "./Separator";

const Layout = React.lazy(() => import("./Layout"));
const CarrouselCards = React.lazy(() => import("./CarrouselCards"));
const CarrouselSlide = React.lazy(() => import("./CarrouselSlide"));

export { Header, SearchBar, Layout, Loading, CarrouselCards, Separator,CarrouselSlide };
