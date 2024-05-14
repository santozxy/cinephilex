import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/series/$serieID")({
  component: () => <div>Hello /series/$serieID!</div>,
});
