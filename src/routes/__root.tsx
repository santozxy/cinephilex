import {  createRootRoute } from "@tanstack/react-router";
import {Layout} from "@components";

export const Route = createRootRoute({
  component: () => <Layout />,
  notFoundComponent: () => <h1>404</h1>,
});
