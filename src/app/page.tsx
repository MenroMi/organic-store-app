// basic
import Image from "next/image";

// components
import { AboutUs, BannersList, ExploreNature, Organic } from "@/components";

export default function Home() {
  return (
    <main>
      <ExploreNature />
      <BannersList />
      <AboutUs />
      <Organic />
    </main>
  );
}
