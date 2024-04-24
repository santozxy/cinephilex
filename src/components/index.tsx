import React from "react";
import { Header } from "./Header";
import { SearchBar } from "./SearchBar";

const Layout = React.lazy(() => import("./Layout"));

export { Header, SearchBar, Layout };
