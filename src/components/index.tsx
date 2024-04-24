import React from "react";
import { Header } from "./Header";
import { SearchBar } from "./SearchBar";

const Sidebar = React.lazy(() => import("./Sidebar"));
const Layout = React.lazy(() => import("./Layout"));

export { Sidebar,Layout, Header, SearchBar };
