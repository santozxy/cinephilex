import { Series } from "@pages";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/series/")({
  component: () => <Series />,
});
