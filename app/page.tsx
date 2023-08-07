import { Hero, CatalogueHeader } from "@/components";
import { fetchCars } from "@/utils";

export default async function Home() {
  const cars = await fetchCars();

  return (
    <main className="overflow-hidden">
      <Hero />
      <CatalogueHeader cars={cars} />
    </main>
  );
}
