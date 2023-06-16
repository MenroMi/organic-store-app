// basic
import Image from "next/image";

// components
import { AboutUs, BannersList, ExploreNature } from "@/components";

export default function Home() {
  return (
    <main>
      <ExploreNature />
      <BannersList />
      <AboutUs />
    </main>
  );
}
