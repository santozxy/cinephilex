import React from "react";
import { Header } from "./Header";
import { SearchBar } from "./SearchBar";
import { Loading } from "./Loading";

const Layout = React.lazy(() => import("./Layout"));
const ListCards = React.lazy(() => import("./ListCards"));

export { Header, SearchBar, Layout, Loading, ListCards };
