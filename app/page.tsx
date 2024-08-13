import { AboutUs, Gallery, Hero, NearestShop, RestyleShop } from "@/components";

export default function Home() {
  return (
    <main>
      <Hero />
      <NearestShop />
      <AboutUs />
      <RestyleShop />
      <Gallery />
      <h2 className="text-red-500 text-9xl">Heoo</h2>
    </main>
  );
}
