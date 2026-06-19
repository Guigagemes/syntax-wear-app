import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "../../componentes/Hero";
import { Categories } from "../../componentes/Categories";
import { Gallery } from "../../componentes/Gallery";

export const Route = createFileRoute("/_app/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="py-10">
      <Hero />

      <Categories />

      <Gallery />
    </main>
  );
}
