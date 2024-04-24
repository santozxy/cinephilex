import {  createRootRoute } from "@tanstack/react-router";
import {Layout} from "@components";
import { NotFound } from "@pages";

export const Route = createRootRoute({
  component: () => <Layout />,
  notFoundComponent: () => <NotFound/>,
});
