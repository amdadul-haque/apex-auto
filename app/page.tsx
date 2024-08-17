import { AboutUs, Gallery, Hero, NearestShop, RestyleShop } from "@/components";
import { ScrollToTop } from "@/components/core";

export default function Home() {
  return (
    <main>
      <Hero />
      <NearestShop />
      <AboutUs />
      <RestyleShop />
      <Gallery />
      <ScrollToTop/>
    </main>
  );
}
